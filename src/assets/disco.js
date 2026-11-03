/* Procedural mirror ball. No libraries, network requests or WebGL required.
   Geometry, lighting and ordered dithering are rendered at a small resolution.
   The same renderer powers the homepage and the design study. */
(() => {
  'use strict';
  const TAU = Math.PI * 2;
  const presets = {
    // homepage: the mirror ball, drawn as a 1-bit picture through the 8×8 dither
    binary: { rings: 26, resolution: 340, dither: 1.05, levels: 2, sparkles: true, binary: true, bayer8: true, stars: 12, twinkles: 16, period: 26 },
    hybrid: { rings: 16, resolution: 320, dither: 0.8, levels: 9, sparkles: true },
    lowpoly: { rings: 12, resolution: 240, dither: 1, levels: 7, sparkles: false },
    mirror: { rings: 24, resolution: 600, dither: 0.25, levels: 24, sparkles: true },
  };
  const bayer = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
  // 8x8 ordered-dither matrix, normalised to 0..1 (built from the 4x4 one)
  const bayer8 = Array.from({ length: 64 }, (_, i) => {
    const x = i % 8, y = i >> 3;
    return (4 * bayer[(y % 4) * 4 + (x % 4)] + [0, 2, 3, 1][((y >> 2) << 1) + (x >> 2)]) / 64;
  });
  const noise = n => { const x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
  const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  const unit = v => { const l = Math.hypot(...v); return v.map(x => x / l); };
  const sphere = (p, t) => [Math.cos(p) * Math.sin(t), Math.sin(p), Math.cos(p) * Math.cos(t)];

  class DiscoBall {
    constructor(canvas, options = {}) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!this.ctx) return;
      this.options = { mode: 'binary', dark: true, ...options };
      this.time = 1.5;
      this.last = 0;
      this.visible = true;
      this.reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
      this.paused = false; // plays on load; the button still pauses it
      this.homeLight = [0.2, 0.85, 0.7];
      this.lightTarget = this.homeLight.slice();
      this.lightNow = this.homeLight.slice();
      this.pointerOn = false;
      this.easing = 0;
      this.onPointer = (e) => {
        const r = this.canvas.getBoundingClientRect();
        if (!r.width || !r.height) return;
        const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
        const ny = 1 - ((e.clientY - r.top) / r.height) * 2;
        this.lightTarget = [nx * 1.2, ny * 1, 0.55];
        this.pointerOn = true;
        this.poke();
      };
      this.offPointer = () => {
        this.pointerOn = false;
        this.lightTarget = this.homeLight.slice();
        this.poke();
      };
      this.onLeave = (e) => { if (!e.relatedTarget) this.offPointer(); };
      // The highlight follows the pointer anywhere on the page, not only over the ball.
      window.addEventListener('pointermove', this.onPointer, { passive: true });
      window.addEventListener('pointerdown', this.onPointer, { passive: true });
      document.addEventListener('pointerout', this.onLeave);
      this.motionChange = () => { this.sync(); this.onStateChange?.(); };
      this.reduced.addEventListener('change', this.motionChange);
      this.visibilityChange = () => this.sync();
      document.addEventListener('visibilitychange', this.visibilityChange);
      this.observer = new IntersectionObserver(([entry]) => { this.visible = entry.isIntersecting; this.sync(); });
      this.observer.observe(canvas);
      this.configure();
      this.sync();
    }
    configure(options = {}) {
      Object.assign(this.options, options);
      this.config = { period: 12, stars: 5, twinkles: 0, ...presets[this.options.mode], ...this.options };
      const size = this.config.resolution;
      this.canvas.width = size;
      this.canvas.height = size;
      this.canvas.style.imageRendering = this.options.mode === 'mirror' ? 'auto' : 'pixelated';
      this.tiles = [];
      const rings = this.config.rings;
      for (let r = 0; r < rings; r++) {
        const lat = -Math.PI / 2 + (r + 0.5) * Math.PI / rings;
        const count = Math.max(4, Math.round(2 * rings * Math.cos(lat)));
        for (let j = 0; j < count; j++) {
          const theta = (j + (r % 2) * 0.5) * TAU / count;
          const dp = Math.PI / rings * 0.465;
          const dt = TAU / count * 0.465;
          this.tiles.push({
            normal: sphere(lat, theta),
            corners: [[-dp, -dt], [-dp, dt], [dp, dt], [dp, -dt]].map(([a, b]) => sphere(lat + a, theta + b)),
            seed: noise(r * 100 + j),
          });
        }
      }
      this.draw();
    }
    settled() {
      return this.lightNow.every((v, i) => Math.abs(v - this.lightTarget[i]) < 0.012);
    }
    poke() {
      // Spinning already redraws. Paused, ease the highlight without moving time, so the bits stay put.
      if (!this.paused && this.visible && !document.hidden) return;
      if (this.easing) return;
      const step = () => {
        this.draw();
        if (this.settled() && !this.pointerOn) { this.easing = 0; return; }
        this.easing = requestAnimationFrame(step);
      };
      this.easing = requestAnimationFrame(step);
    }
    sync() {
      cancelAnimationFrame(this.frame);
      cancelAnimationFrame(this.easing);
      this.easing = 0;
      this.last = 0;
      if (!this.paused && this.visible && !document.hidden) this.frame = requestAnimationFrame(t => this.animate(t));
      else this.poke();
    }
    setPaused(value) { this.paused = value; this.sync(); this.onStateChange?.(); }
    animate(now) {
      if (this.last) this.time += Math.min((now - this.last) / 1000, 0.1);
      this.last = now;
      this.draw();
      this.frame = requestAnimationFrame(t => this.animate(t));
    }
    draw() {
      const c = this.ctx;
      if (!c) return;
      const { dark, period, dither, levels, sparkles, binary, bayer8: big, stars: maxStars, twinkles } = this.config;
      const t = this.time;
      const size = this.canvas.width;
      const phase = this.time / period * TAU;
      const sy = Math.sin(phase), cy = Math.cos(phase), tilt = 12 * Math.PI / 180;
      const transform = v => {
        const x = v[0] * cy + v[2] * sy, z = -v[0] * sy + v[2] * cy;
        return [x, v[1] * Math.cos(tilt) - z * Math.sin(tilt), v[1] * Math.sin(tilt) + z * Math.cos(tilt)];
      };
      const project = v => {
        const scale = size * 0.36 * 3.6 / (3.6 - v[2]);
        return [size * 0.5 + v[0] * scale, size * 0.5 - v[1] * scale];
      };
      c.fillStyle = dark ? '#0c0c0b' : '#efefef';
      c.fillRect(0, 0, size, size);
      // A dark polygonal core keeps grout gaps inside the silhouette.
      c.fillStyle = dark ? '#070809' : '#303539';
      c.beginPath();
      for (let i = 0; i <= 64; i++) {
        const a = i / 64 * TAU;
        const x = size * 0.5 + Math.cos(a) * size * 0.372;
        const y = size * 0.5 + Math.sin(a) * size * 0.372;
        if (!i) c.moveTo(x, y); else c.lineTo(x, y);
      }
      c.fill();
      const light = unit([-0.55, 0.65, 0.8]);
      for (let i = 0; i < 3; i++) this.lightNow[i] += (this.lightTarget[i] - this.lightNow[i]) * 0.14;
      const second = unit(this.lightNow);
      const half = unit([light[0], light[1], light[2] + 1]);
      const stars = [];
      const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
      const visible = this.tiles.map(tile => ({ ...tile, n: transform(tile.normal) })).filter(tile => tile.n[2] > 0.06).sort((a, b) => a.n[2] - b.n[2]);
      for (const tile of visible) {
        const n = tile.n;
        // Cock each mirror off the sphere so neighbours catch the light at different angles.
        const ref = Math.abs(n[1]) > 0.85 ? [1, 0, 0] : [0, 1, 0];
        const tx = unit(cross(n, ref));
        const ty = cross(n, tx);
        const yaw = (tile.seed - 0.5) * 0.85;
        const pitch = (noise(tile.seed * 19.7) - 0.5) * 0.85;
        const tilted = unit([n[0] + tx[0] * yaw + ty[0] * pitch, n[1] + tx[1] * yaw + ty[1] * pitch, n[2] + tx[2] * yaw + ty[2] * pitch]);
        const facing = Math.max(0, dot(tilted, light));
        const ndh = Math.max(0, dot(tilted, half));
        const catchLight = Math.pow(Math.max(0, dot(tilted, second)), 8);
        const specular = Math.pow(ndh, 28);
        const pin = Math.pow(ndh, 80);
        const rim = Math.pow(Math.max(0, 1 - n[2]), 2) * 14;
        // Shadow facets stay dark enough to read; mirrors aimed at the light still go white.
        const brightness = Math.min(255, 64 + rim + Math.pow(facing, 1.15) * 88 + catchLight * 130 + specular * 40 + pin * 150);
        const blue = Math.max(0, 1 - brightness / 220) * 16;
        const tileLight = brightness;
        c.fillStyle = `rgb(${Math.max(0, tileLight - blue * 0.7)},${tileLight},${Math.min(255, tileLight + blue)})`;
        c.beginPath();
        tile.corners.forEach((v, i) => {
          const p = project(transform(v));
          if (!i) c.moveTo(...p); else c.lineTo(...p);
        });
        c.closePath(); c.fill();
        const alignment = dot(tilted, half);
        const edge = binary ? 0.982 : 0.992;
        if (sparkles && alignment > edge && tile.seed > 0.2) {
          const strength = Math.pow((alignment - edge) / (1 - edge), 1.5);
          stars.push({ p: project(n), strength, arms: tile.seed > 0.96 ? 28 : tile.seed > 0.8 ? 14 : tile.seed > 0.5 ? 6 : 2 });
        }
      }
      if (twinkles) {
        for (const tile of visible) {
          if (tile.n[2] < 0.35 || tile.seed < 0.55) continue;
          const pulse = Math.sin(t * (0.35 + tile.seed * 0.4) + tile.seed * 97);
          if (pulse > 0.94) stars.push({ p: project(tile.n), strength: (pulse - 0.94) / 0.06, arms: tile.seed > 0.9 ? 12 : 6, pixel: true });
        }
      }
      // Quantise only the object, preserving the flat page background.
      if (dither > 0) {
        const x0 = Math.floor(size * 0.08), y0 = Math.floor(size * 0.08), w = Math.ceil(size * 0.84), h = Math.ceil(size * 0.84);
        const img = c.getImageData(x0, y0, w, h);
        const data = img.data, step = 255 / (levels - 1), bg = dark ? [12, 12, 11] : [239, 239, 239];
        for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
          const i = (y * w + x) * 4;
          if (data[i] === bg[0] && data[i + 1] === bg[1] && data[i + 2] === bg[2]) continue;
          const threshold = big ? bayer8[((y + y0) % 8) * 8 + ((x + x0) % 8)] : bayer[((y + y0) % 4) * 4 + ((x + x0) % 4)] / 16;
          const offset = (threshold - 0.5) * step * dither;
          for (let ch = 0; ch < 3; ch++) data[i + ch] = Math.round((data[i + ch] + offset) / step) * step;
        }
        c.putImageData(img, x0, y0);
      }
      c.save();
      c.globalCompositeOperation = dark ? 'lighter' : 'source-over';
      const glints = stars.filter(s => !s.pixel).sort((a, b) => b.strength - a.strength).slice(0, maxStars);
      const pixels = stars.filter(s => s.pixel).sort((a, b) => b.strength - a.strength).slice(0, twinkles);
      // console-style twinkles: hard pixel crosses, no anti-aliasing
      c.fillStyle = dark ? '#fffbe8' : '#ffffff';
      for (const star of pixels) {
        const u = Math.max(1, Math.round(size / 300)), r = Math.round(star.arms * star.strength * size / 600);
        const px = Math.round(star.p[0]), py = Math.round(star.p[1]);
        c.globalAlpha = Math.min(1, 0.4 + star.strength);
        c.fillRect(px - r, py, r * 2 + u, u); c.fillRect(px, py - r, u, r * 2 + u);
      }
      c.globalAlpha = 1;
      for (const star of glints) {
        const arm = star.arms * size / 600 * star.strength;
        c.save(); c.translate(...star.p); c.rotate(0.1 * Math.sin(phase));
        c.globalAlpha = star.strength * 0.85;
        c.fillStyle = dark ? '#fff8df' : '#ffffff';
        c.beginPath(); c.moveTo(0, -arm); c.lineTo(arm * 0.12, -arm * 0.12); c.lineTo(arm, 0); c.lineTo(arm * 0.12, arm * 0.12); c.lineTo(0, arm); c.lineTo(-arm * 0.12, arm * 0.12); c.lineTo(-arm, 0); c.lineTo(-arm * 0.12, -arm * 0.12); c.closePath(); c.fill();
        c.restore();
      }
      c.restore();
    }
    destroy() {
      cancelAnimationFrame(this.frame);
      cancelAnimationFrame(this.easing);
      this.observer.disconnect();
      window.removeEventListener('pointermove', this.onPointer);
      window.removeEventListener('pointerdown', this.onPointer);
      document.removeEventListener('pointerout', this.onLeave);
      this.reduced.removeEventListener('change', this.motionChange);
      document.removeEventListener('visibilitychange', this.visibilityChange);
    }
  }
  window.DiscoBall = DiscoBall;
  document.querySelectorAll('[data-disco]').forEach(figure => {
    const canvas = figure.querySelector('canvas');
    const ball = new DiscoBall(canvas);
    if (!ball.ctx) return;
    figure.classList.add('disco-ready');
  });
})();
