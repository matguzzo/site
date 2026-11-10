// matguzzo.com (v2) — static site generator. No dependencies: `node src/build.mjs`
// (add --preview for explicit index.html links). Output: ./docs (or ./preview).

import { mkdirSync, writeFileSync, readFileSync, cpSync, rmSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { site, ui, nav, home, openSource, visualArts, visualProjects, research, engagements, education, whereabouts, legal, impressum, privacy, writing } from './content.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PREVIEW = process.argv.includes('--preview');
const OUT = process.env.OUT ? join(ROOT, process.env.OUT) : join(ROOT, PREVIEW ? 'preview' : 'docs'); // OUT=docs-new if your sandbox can't overwrite files
const YEAR = new Date().getFullYear();
// Umami Cloud analytics: cookieless, respects Do Not Track, only counts on the live domain (site.domain).
const UMAMI = { id: '6bd29936-4f9f-4973-9793-e89f8da6a847', origin: 'https://cloud.umami.is', connect: 'https://cloud.umami.is https://api-gateway.umami.dev' };

const tr = (v, lang) => (v == null ? '' : typeof v === 'string' ? v : Array.isArray(v) ? v : v[lang] ?? v.en ?? '');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const strip = (s) => String(s).replace(/<[^>]+>/g, '');
const fileOf = (slug) => (slug === 'index' ? 'index.html' : `${slug}.html`);
const dirOf = (lang) => (lang === 'en' ? '' : `${lang}/`);
const urlOf = (lang, slug) => `${site.url}/${dirOf(lang)}${slug === 'index' ? '' : fileOf(slug)}`;
const up = (lang) => (lang === 'en' ? '' : '../');
const relLang = (from, to, slug) => {
  const p = `${up(from)}${dirOf(to)}${fileOf(slug)}`;
  return PREVIEW ? p : p.replace(/(^|\/)index\.html$/, '$1') || './';
};
const warnings = new Set();

// ---------- writing: Substack feed + saved archive ----------
// `SAVE_POSTS=1 node src/build.mjs` also writes new posts into the archive —
// run it as part of a normal (human) update so the repo keeps every post.
const ARCHIVE = join(ROOT, 'src/writing/posts.json');
const decode = (s) => s.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&').trim();
async function loadPosts() {
  let saved = [];
  try { saved = JSON.parse(readFileSync(ARCHIVE, 'utf8')); } catch { /* no archive yet */ }
  let fresh = [];
  if (writing.substack) {
    try {
      const res = await fetch(`${writing.substack}/feed`, { signal: AbortSignal.timeout(15000), headers: { 'user-agent': 'matguzzo.com site build' } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const xml = await res.text();
      fresh = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(([, it]) => {
        const tag = (t) => decode((it.match(new RegExp(`<${t}>([\\s\\S]*?)</${t}>`)) || [, ''])[1]);
        return { title: tag('title'), url: tag('link'), date: new Date(tag('pubDate')).toISOString().slice(0, 10), summary: strip(tag('description')).slice(0, 280) };
      }).filter((p) => p.title && p.url);
    } catch (e) { warnings.add(`writing: could not read the Substack feed (${e.message}); showing the saved archive only`); }
  }
  const byUrl = new Map([...saved, ...fresh].map((p) => [p.url, p]));
  const posts = [...byUrl.values()].sort((a, b) => b.date.localeCompare(a.date));
  if (process.env.SAVE_POSTS && posts.length) { mkdirSync(dirname(ARCHIVE), { recursive: true }); writeFileSync(ARCHIVE, JSON.stringify(posts, null, 2) + '\n'); }
  return posts;
}
const POSTS = await loadPosts();
const fmtDate = (iso, lang) => new Date(`${iso}T12:00:00Z`).toLocaleDateString(site.htmlLang[lang], { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
const check = (it, where) => { if (it.check) warnings.add(`${where}: ${strip(tr(it.t ?? it.place, 'en'))}`); };

// ---------- components ----------
function gallery(images, lang) {
  if (!images?.length) return '';
  const imgs = images
.map((im) => { if (im.check) warnings.add(`image: ${im.alt}`); return im; })
    .map((im) => `<img src="${/^https?:/.test(im.src) ? '' : up(lang)}${im.src}" width="${im.w}" height="${im.h}" alt="${esc(tr(im.alt, lang))}" loading="lazy">`)
    .join('');
  const total = images.length;
  const frame = tr(ui.frame, lang);
  const count = total > 1
    ? `<p class="hs-count" data-total="${total}" data-template="${esc(frame)}">${esc(frame.replace('{n}', '1').replace('{total}', String(total)))}</p>`
    : '';
  return `<section class="hs" aria-label="Images">${count}<div class="hs-sticky"><div class="hs-track">${imgs}</div></div></section>`;
}

function entry(it, lang, where) {
  check(it, where);
  const id = it.id ? ` id="${it.id}"` : '';
  const title = tr(it.t, lang);
  const t = it.href ? `<a href="${it.href}">${title}</a>` : title;
  return `<li class="entry"${id}>
  <div class="y">${tr(it.y, lang)}</div>
  <div class="c">
    <p class="t">${t}</p>${it.m ? `\n    <p class="m">${tr(it.m, lang)}</p>` : ''}${it.d ? `\n    <p class="d">${tr(it.d, lang)}</p>` : ''}
  </div>${it.images ? `\n  ${gallery(it.images, lang)}` : ''}
</li>`;
}
const sections = (secs, lang, where) =>
  secs
    .map((s) => `${s.h ? `<h2${s.id ? ` id="${s.id}"` : ''}>${esc(tr(s.h, lang))}</h2>\n` : ''}<ul class="entries">\n${s.items.filter(Boolean).map((i) => entry(i, lang, where)).join('\n')}\n</ul>`)
    .join('\n');
const listPage = (p, lang, where) => ({
  title: tr(p.title, lang),
  body: `<h1>${esc(tr(p.title, lang))}</h1>\n${p.intro ? `<p class="intro">${tr(p.intro, lang)}</p>\n` : ''}${gallery(p.images, lang)}${sections(p.sections, lang, where)}`,
});

// ---------- legal pages (DE + EN; PT/ES show the English text) ----------
function legalPage(page, lang) {
  if (!legal.address) warnings.add('legal: postal address for Impressum / privacy policy is empty (content.mjs → legal.address)');
  const addr = legal.address || '<mark>[Postal address — required before publishing]</mark>';
  const textLang = lang === 'de' ? 'de' : 'en';
  const body = page.body[textLang](addr);
  return {
    title: tr(page.title, lang),
    body: `<h1>${esc(tr(page.title, lang))}</h1>\n<div class="legal"${textLang !== lang ? ' lang="en"' : ''}>\n${body}\n</div>`,
  };
}

// ---------- pages ----------
const pages = {
  index: (lang) => ({
    title: tr(home.title, lang),
    isHome: true,
    body: `<div class="home">
<h1 class="lead">${esc(tr(home.lead, lang)).replace(site.name, `<span class="nowrap">${site.name}</span>`)}</h1>
<div class="home-row">
<div class="home-text">
${tr(home.body, lang).map((p) => `<p class="intro">${p}</p>`).join('\n')}
</div>
<figure class="disco" data-disco>
  <img class="disco-fallback" src="${up(lang)}assets/disco-ball.webp" width="720" height="720" alt="${esc(tr(home.imageAlt, lang))}">
  <canvas width="320" height="320" role="img" aria-label="${esc(tr(home.imageAlt, lang))}">${esc(tr(home.imageAlt, lang))}</canvas>
</figure>
</div>
</div>`,
  }),
  'open-source': (lang) => listPage(openSource, lang, 'open-source'),
  education: (lang) => listPage(education, lang, 'education'),
  'visual-arts': (lang) => listPage(visualArts, lang, 'visual-arts'),
  research: (lang) => listPage(research, lang, 'research'),
  engagements: (lang) => listPage(engagements, lang, 'engagements'),
  impressum: (lang) => legalPage(impressum, lang),
  privacy: (lang) => legalPage(privacy, lang),
  writing: (lang) => ({
    title: tr(writing.title, lang),
    body: `<h1>${esc(tr(writing.title, lang))}</h1>
${POSTS.length
    ? `<ul class="entries posts">\n${POSTS.map((p) => `<li class="entry"><div class="y">${esc(fmtDate(p.date, lang))}</div><div class="c"><p class="t"><a href="${esc(p.url)}">${esc(p.title)}</a></p>${p.summary ? `<p class="d">${esc(p.summary)}</p>` : ''}</div></li>`).join('\n')}\n</ul>`
    : `<p class="intro">${esc(tr(writing.soon, lang))}</p>`}
${writing.substack ? `<p class="links"><a href="${writing.substack}/subscribe">${esc(tr(writing.subscribe, lang))}</a></p>` : ''}`,
  }),
  whereabouts: (lang) => {
    const lines = Object.fromEntries([...Object.values(whereabouts.zones), 'unknown'].map((city) => [city, tr(whereabouts.clock[city], lang)]));
    return {
      title: tr(whereabouts.title, lang),
      body: `<h1 class="sr">${esc(tr(whereabouts.title, lang))}</h1>
<p class="big where-big">${esc(tr(whereabouts.big, lang))}</p>
<p class="clock" data-clock data-zones="${esc(JSON.stringify(whereabouts.zones))}" data-lines="${esc(JSON.stringify(lines))}"></p>`,
    };
  },
};
for (const p of visualProjects) {
  pages[p.slug] = (lang) => {
    check(p, 'visual-arts');
    const links = (p.links || []).map((l) => `<li><a href="${l.href}">${esc(tr(l.label, lang))}</a></li>`).join('');
    return {
      title: strip(tr(p.t, lang)),
      navSlug: 'visual-arts',
      body: `<p class="back"><a href="visual-arts.html">← ${esc(tr(ui.back, lang))}</a></p>
<h1>${tr(p.t, lang)}</h1>
<p class="m project-m">${tr(p.y, lang)} · ${tr(p.m, lang)}</p>
<p class="intro">${tr(p.lede, lang)}</p>
${gallery(p.images, lang)}${p.d ? `<p>${tr(p.d, lang)}</p>\n` : ''}${p.quote ? `<blockquote>${tr(p.quote, lang)}</blockquote>\n` : ''}${links ? `<ul class="links">${links}</ul>` : ''}`,
    };
  };
}

// ---------- layout ----------
function layout({ lang, slug, title, body, isHome = false, absolute = false, navSlug }) {
  const base = absolute ? '/' : up(lang);
  const pageTitle = isHome ? site.name : `${strip(title)} — ${site.name}`;
  const desc = tr(ui.description, lang);
  const href = (s) => (absolute ? `/${dirOf(lang)}${s === 'index' ? '' : fileOf(s)}` : s === 'index' ? (PREVIEW ? 'index.html' : './') : fileOf(s));
  const navHtml = nav.map((n) => `<li><a href="${href(n.slug)}"${n.slug === (navSlug || slug) ? ' aria-current="page"' : ''}>${esc(tr(n.label, lang))}</a></li>`).join('');
  const langsHtml = site.langs
    .map((l) => l === lang
      ? `<span aria-current="true" title="${site.langLong[l]}">${site.langNames[l]}</span>`
      : `<a href="${absolute ? `/${dirOf(l)}` : relLang(lang, l, slug)}" hreflang="${site.htmlLang[l]}" lang="${site.htmlLang[l]}" title="${site.langLong[l]}">${site.langNames[l]}</a>`)
    .join('');
  const links = [...site.links, ...(writing.substack ? [{ label: writing.substackName, href: writing.substack }] : [])].map((l) => `<li><a href="${l.href}">${esc(l.label)}</a></li>`).join('');
  const alternates = site.langs.map((l) => `<link rel="alternate" hreflang="${site.htmlLang[l]}" href="${urlOf(l, slug)}">`).join('\n');

  return `<!doctype html>
<html lang="${site.htmlLang[lang]}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data: https://freight.cargo.site; style-src 'self'; font-src 'self'; script-src 'self' ${UMAMI.origin}; connect-src 'self' ${UMAMI.connect}; object-src 'none'; base-uri 'self'; form-action 'none'">
<meta name="referrer" content="strict-origin-when-cross-origin">
<title>${esc(pageTitle)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${urlOf(lang, slug)}">
${alternates}
<link rel="alternate" hreflang="x-default" href="${urlOf('en', slug)}">
<meta property="og:title" content="${esc(pageTitle)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${urlOf(lang, slug)}">
<meta property="og:image" content="${site.url}/assets/og.jpg">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/png" href="${base}assets/favicon.png">
<link rel="apple-touch-icon" href="${base}assets/apple-touch-icon.png">
<link rel="preload" href="${base}assets/fonts/archivo-latin-wdth-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${base}assets/fonts/rubik-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${base}assets/style.css">
<script src="${base}assets/hscroll.js" defer></script>
${isHome ? `<script src="${base}assets/disco.js" defer></script>` : ''}
<script defer src="${UMAMI.origin}/script.js" data-website-id="${UMAMI.id}" data-domains="${site.domain}" data-do-not-track="true"></script>
</head>
<body${isHome ? ' class="is-home"' : ''}>
<a class="skip" href="#content">${esc(tr(ui.skip, lang))}</a>
<div class="site">
<${isHome ? 'header' : 'aside'} class="side">
  <a class="name" href="${href('index')}"${isHome ? ' aria-current="page"' : ''}>Mateus Guzzo</a>
  <nav aria-label="${esc(tr(ui.mainNav, lang))}"><ul class="nav">${navHtml}</ul></nav>
  <div class="langs" role="navigation" aria-label="${esc(tr(ui.language, lang))}">${langsHtml}</div>
  <p class="side-mail"><a href="mailto:${site.email}">${site.email}</a><br><a href="https://x.com/matguzzo">X / Twitter</a></p>
</${isHome ? 'header' : 'aside'}>
<div class="mbar" hidden>
  <a class="mbar-name" href="${href('index')}">Mateus Guzzo</a>
  <button class="mbar-toggle" type="button" aria-expanded="false" aria-controls="mbar-panel" data-menu="${esc(tr(ui.menu, lang))}" data-close="${esc(tr(ui.close, lang))}">${esc(tr(ui.menu, lang))}</button>
  <div class="mbar-panel" id="mbar-panel" hidden>
    <ul class="nav">${navHtml}</ul>
    <div class="langs" role="navigation" aria-label="${esc(tr(ui.language, lang))}">${langsHtml}</div>
  </div>
</div>
<main id="content">
${body}
<footer>
  <p class="mail"><a href="mailto:${site.email}">${site.email}</a></p>
  <ul>${links}</ul>
  <p class="small">2005–${YEAR} · ${esc(tr(ui.rights, lang))} · <a href="${href('impressum')}">${esc(tr(legal.footer.impressum, lang))}</a> · <a href="${href('privacy')}">${esc(tr(legal.footer.privacy, lang))}</a></p>
</footer>
</main>
</div>
</body>
</html>
`;
}

// ---------- build ----------
try { if (existsSync(OUT)) rmSync(OUT, { recursive: true }); } catch { /* can't delete here: overwrite in place */ }
mkdirSync(OUT, { recursive: true });
cpSync(join(ROOT, 'src/assets'), join(OUT, 'assets'), { recursive: true, filter: (p) => !/\.png$/.test(p) || /favicon|apple-touch/.test(p) });

for (const lang of site.langs) {
  mkdirSync(join(OUT, dirOf(lang)), { recursive: true });
  for (const [slug, fn] of Object.entries(pages)) writeFileSync(join(OUT, dirOf(lang), fileOf(slug)), layout({ lang, slug, ...fn(lang) }));
}
writeFileSync(join(OUT, '404.html'), layout({
  lang: 'en', slug: 'index', title: '404', absolute: true,
  body: `<p class="big">404.</p>\n${site.langs.map((l) => `<p lang="${site.htmlLang[l]}">${esc(tr(ui.notFound, l))} <a href="/${dirOf(l)}">${esc(tr(ui.backHome, l))}</a></p>`).join('\n')}`,
}).replace(/<link rel="canonical"[^>]*>\n/, '').replace('<head>', '<head>\n<meta name="robots" content="noindex">'));

const slugs = Object.keys(pages);
writeFileSync(join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${slugs.flatMap((s) => site.langs.map((l) => `  <url><loc>${urlOf(l, s)}</loc>${site.langs.map((a) => `<xhtml:link rel="alternate" hreflang="${site.htmlLang[a]}" href="${urlOf(a, s)}"/>`).join('')}</url>`)).join('\n')}\n</urlset>\n`);
writeFileSync(join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap.xml\n`);
writeFileSync(join(OUT, 'CNAME'), `${site.domain}\n`);
writeFileSync(join(OUT, '.nojekyll'), '');
mkdirSync(join(OUT, '.well-known'), { recursive: true });
writeFileSync(join(OUT, '.well-known/security.txt'), `Contact: mailto:${site.email}\nExpires: ${YEAR + 1}-12-31T00:00:00.000Z\nPreferred-Languages: en, pt, de, es\n`);

console.log(`Built ${site.langs.length} languages × ${slugs.length} pages → ${PREVIEW ? 'preview' : 'docs'}/`);
if (warnings.size) console.log(`\nTo confirm before publishing (${warnings.size}):\n - ` + [...warnings].join('\n - '));
