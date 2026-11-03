# matguzzo.com

Mateus Guzzo’s personal website. Static HTML in English, Portuguese, German and Spanish. Archivo variable fonts are self-hosted. No npm dependencies, tracking or cookies.

## Source

- `src/content.mjs`: current content and translations.
- `src/content-v1.mjs`: shared content imported by the current version; keep it.
- `src/build.mjs`: static HTML generator.
- `src/assets/style.css`: layout and typography.
- `src/assets/hscroll.js`: galleries, random Whereabouts image and compact mobile menu.
- `src/assets/disco.js`: procedural homepage mirror ball. The public preset is binary (bits on the tiles, 8×8 dither). Hybrid, low-poly and mirror presets stay in the file. No external libraries. The ball plays on load even when the system asks for reduced motion. The highlight follows the pointer anywhere on the page. Animation suspends offscreen or in a background tab.
- `src/writing/posts.json`: saved archive of Substack posts (created by `SAVE_POSTS=1 node src/build.mjs`).
- `docs/`: generated public website (git-ignored; GitHub Actions builds it).

## Build and preview

Use Node.js 18 or newer:

```sh
npm run build
npm run preview
```

Open http://localhost:8000. The preview command builds first. The build reports content explicitly marked as needing confirmation. Missing translations fall back to English.

The separate design study is in `../design/disco/` and is not published by the workflow.

## Upload to GitHub

Upload **the contents of this folder**, preserving `src/` and `docs/` as folders at the repository root. Do not upload the parent folder, old versions, backup ZIP files, or `HANDOFF.md`.

Choose one deployment method:

1. **GitHub Actions (for the existing static.yml setup):** replace `.github/workflows/static.yml` in the repository with the version included here. It builds on pushes to `main` and publishes only `docs/`. In Settings → Pages, select GitHub Actions. Avoid a second competing Pages workflow.
2. **Branch publishing:** disable/remove the Actions deployment workflow, then select Deploy from a branch → `main` → `/docs`. Run the build and upload the updated `docs/` whenever source changes.

When uploading through GitHub’s website, hidden `.github` directories may not be included by drag-and-drop. Edit the existing workflow file in GitHub and paste the supplied workflow into it explicitly.

## Domain

The canonical address, sitemap and `CNAME` target `https://matguzzo.com` (changed from guzzo.party on 2026-11-03). Go-live steps: `SETUP.md`. Configure that custom domain in Pages settings and verify DNS and HTTPS. A repository-subpath deployment needs changes to canonical URLs and the 404 page’s root-relative links before it should become the public address.

## Remaining publishing improvements

- Nine project images are hosted by Cargo; migrate optimised copies locally and remove the Cargo CSP exception.
- Add page-specific descriptions and structured data using verified public information.
- Choose a code licence explicitly; artwork and third-party assets need their own rights notices.
- Review the social preview image after choosing the final disco-ball treatment.

The existing font licence is included in `src/assets/fonts/`. Making a repository public does not grant an open-source licence to original code or artwork.
