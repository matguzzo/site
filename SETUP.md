# Going live on matguzzo.com

## Once, by Guzzo (about 15 minutes)

1. **Create the repo.** github.com → New repository → name `matguzzo.com` → Public → no README → Create. Send Claude the repo name.
2. **Connect Claude.** In the chat, say "connect the site repo". Approve the access prompt. Claude pushes the code.
3. **Turn on Pages.** Repo → Settings → Pages → Source: **GitHub Actions**. Custom domain: `matguzzo.com` → Save.
4. **Verify the domain** (stops anyone else claiming it). Your GitHub profile Settings → Pages → Add a domain → `matguzzo.com` → add the TXT record it shows at your domain registrar.
5. **Point the domain.** Where you bought matguzzo.com, change only the website records:
   - `@` A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www` CNAME: `<your-github-username>.github.io`
   - Delete the old Cargo records for `@` and `www`. **Leave MX and other TXT records alone** — they run hello@matguzzo.com.
6. **HTTPS.** When the certificate is ready (minutes to a few hours), tick **Enforce HTTPS** in Settings → Pages.
7. **Send Claude:** your Substack address and the postal address for the Impressum.

Don't cancel Cargo until the art images have been copied into the site.

## After that

- **Change anything:** tell Claude what you want → check the preview → say yes → live in about two minutes.
- **Write:** publish on Substack. Every Monday the site picks up new posts on its own.
- **Nothing else commits to the repo.** The build runs in GitHub Actions and publishes without commits.
- If the site goes 60 days without a change, GitHub pauses the Monday job and emails you: click "Enable workflow".

## For agents

- Build: `node src/build.mjs` → `docs/` (ignored by git). Preview: `node src/build.mjs --preview`.
- Content lives in `src/content.mjs`. Writing settings: `writing.substack`.
- When making an update, run `SAVE_POSTS=1 node src/build.mjs` so new Substack posts are saved into `src/writing/posts.json` in the same commit (the feed only holds ~20 posts).
- Publishing: `.github/workflows/deploy.yml` (push to main, Mondays 06:17 UTC, manual button).
