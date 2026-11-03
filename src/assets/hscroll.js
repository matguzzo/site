// Indexhibit-style image rows: while the reader scrolls down, each .hs row
// slides sideways. Without JS (or with reduced motion) rows are plain
// swipeable strips.
(() => {
  const rows = [...document.querySelectorAll('.hs')];
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!rows.length) return;

  function setup() {
    const on = !reduce.matches && window.innerWidth > 860;
    for (const row of rows) {
      const track = row.querySelector('.hs-track');
      // Measure in the final desktop size, then decide whether pinning is needed.
      // This avoids the first pass using the smaller swipe-gallery dimensions.
      row.classList.toggle('is-pinned', on);
      track.style.transform = '';
      const extra = Math.max(0, track.scrollWidth - row.clientWidth);
      row.classList.toggle('is-pinned', on && extra > 0);
      row.style.height = on && extra > 0 ? `${row.querySelector('.hs-sticky').offsetHeight + extra}px` : '';
      row.dataset.extra = on ? extra : 0;
      if (!on) track.style.transform = '';
    }
    tick();
  }

  function progress(row) {
    const extra = +row.dataset.extra;
    if (row.classList.contains('is-pinned') && extra) {
      const start = row.getBoundingClientRect().top - parseFloat(getComputedStyle(row.querySelector('.hs-sticky')).top || 0);
      return Math.min(1, Math.max(0, -start / extra));
    }
    const sticky = row.querySelector('.hs-sticky');
    const max = sticky.scrollWidth - sticky.clientWidth;
    return max > 0 ? sticky.scrollLeft / max : 0;
  }

  function count(row) {
    const el = row.querySelector('.hs-count');
    if (!el) return;
    const total = +el.dataset.total;
    const n = Math.round(progress(row) * (total - 1)) + 1;
    el.textContent = el.dataset.template.replace('{n}', n).replace('{total}', total);
  }

  function tick() {
    for (const row of rows) {
      const extra = +row.dataset.extra;
      if (extra) {
        const p = progress(row);
        row.querySelector('.hs-track').style.transform = `translate3d(${-p * extra}px,0,0)`;
      }
      count(row);
    }
  }

  let raf = 0;
  const onScroll = () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; tick(); }); };
  // the main column is the scroller on desktop, the window on mobile
  document.querySelector('main')?.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', setup);
  reduce.addEventListener?.('change', setup);
  window.addEventListener('load', setup);
  rows.forEach(row => {
    row.querySelectorAll('img').forEach(img => img.addEventListener('load', setup));
    row.querySelector('.hs-sticky')?.addEventListener('scroll', () => count(row), { passive: true });
  });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight' || e.altKey || e.metaKey || e.ctrlKey) return;
    const tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || tag === 'select' || e.target.isContentEditable) return;
    const row = rows.find((r) => {
      const b = r.getBoundingClientRect();
      return b.top < window.innerHeight * 0.75 && b.bottom > window.innerHeight * 0.25;
    });
    if (!row) return;
    const dir = e.key === 'ArrowRight' ? 1 : -1;
    const frames = row.querySelectorAll('img').length || 1;
    if (row.classList.contains('is-pinned') && +row.dataset.extra) {
      e.preventDefault();
      window.scrollBy({ top: dir * (+row.dataset.extra / frames) });
    } else {
      const sticky = row.querySelector('.hs-sticky');
      if (sticky.scrollWidth <= sticky.clientWidth) return;
      e.preventDefault();
      sticky.scrollBy({ left: dir * sticky.clientWidth * 0.8 });
    }
  });
  setup();
})();

// Whereabouts: one picture at random, and a clock line from the browser's timezone. No geolocation.
(() => {
  const clock = document.querySelector('[data-clock]');
  if (clock) {
    try {
      const zones = JSON.parse(clock.dataset.zones);
      const lines = JSON.parse(clock.dataset.lines);
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const city = zones[tz];
      const time = new Date().toLocaleTimeString(document.documentElement.lang, { hour: '2-digit', minute: '2-digit' });
      const line = city ? lines[city] : lines.unknown;
      if (line) clock.textContent = line.replace('{time}', time);
    } catch { /* leave the line empty; the big word still says unknown */ }
  }
  const img = document.querySelector('.random img[data-pool]');
  if (!img) return;
  try {
    const pool = JSON.parse(img.dataset.pool);
    const pick = pool[Math.floor(Math.random() * pool.length)];
    Object.assign(img, { src: pick.src, alt: pick.alt, width: pick.w, height: pick.h });
  } catch { /* keep the default picture */ }
})();

// Mobile: once the full header has scrolled away, show a slim fixed bar with a Menu button.
(() => {
  const side = document.querySelector('.side');
  const bar = document.querySelector('.mbar');
  if (!side || !bar || !('IntersectionObserver' in window)) return;
  const btn = bar.querySelector('.mbar-toggle');
  const panel = bar.querySelector('.mbar-panel');
  const mobile = window.matchMedia('(max-width: 860px)');
  const label = (open) => { btn.textContent = open ? btn.dataset.close : btn.dataset.menu; };
  const close = () => { panel.hidden = true; btn.setAttribute('aria-expanded', 'false'); bar.classList.remove('is-open'); label(false); };
  const open = () => { panel.hidden = false; btn.setAttribute('aria-expanded', 'true'); bar.classList.add('is-open'); label(true); };
  let past = false;
  const sync = () => {
    const show = mobile.matches && past;
    bar.hidden = !show;
    bar.classList.toggle('is-shown', show);
    if (!show) close();
  };
  new IntersectionObserver(([e]) => { past = !e.isIntersecting; sync(); }).observe(side);
  mobile.addEventListener?.('change', sync);
  btn.addEventListener('click', () => (panel.hidden ? open() : close()));
  panel.addEventListener('click', (e) => { if (e.target.closest('a')) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !panel.hidden) { close(); btn.focus(); } });
  document.addEventListener('click', (e) => { if (!panel.hidden && !bar.contains(e.target)) close(); });
})();
