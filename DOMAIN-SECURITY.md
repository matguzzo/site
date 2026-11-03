# guzzo.party — domain & hosting checklist

## What I found (2 Nov 2026)

- **guzzo.party is served by GitHub Pages** (response headers: `server: GitHub.com`, Fastly edge in Frankfurt).
- **HTTPS is broken.** `https://guzzo.party/` answers with a `302` redirect *down* to `http://guzzo.party/`. Every visitor sees "Not secure", and anyone on the same network (café Wi-Fi, a conference) can read or tamper with the page in transit.
- On GitHub Pages this almost always means **the TLS certificate for the custom domain was never issued** (or expired). GitHub then refuses to serve HTTPS and bounces to HTTP. Usual causes: extra DNS records next to GitHub's, a CAA record that doesn't allow Let's Encrypt, or the custom domain set before DNS was pointing at GitHub.
- I could not see your registrar, DNS records or the GitHub repo from here. Steps 1–3 need you, about 15 minutes plus waiting time.

## 1. Fix DNS (at your registrar)

Apex `guzzo.party` should have **only** these address records:

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |
| CNAME | www | `<your-github-username>.github.io` |

- Delete any other A/AAAA records, "URL forwarding", "parking" or "web redirect" entries on `@` or `www`.
- If there is a **CAA** record, make sure one says `0 issue "letsencrypt.org"`.
- If the domain is behind **Cloudflare**, set those records to "DNS only" (grey cloud) until the GitHub certificate is issued.

## 2. Verify the domain on GitHub (stops domain takeover)

GitHub → your avatar → **Settings → Pages → Add a domain** → `guzzo.party`. GitHub gives you a TXT record (`_github-pages-challenge-<username>`); add it at your registrar, click **Verify**. Once verified, no other GitHub account can attach guzzo.party to its own Pages site, even if your repo is deleted or renamed.

## 3. Re-issue the certificate and force HTTPS

In the site's repository → **Settings → Pages**:

1. Source: **Deploy from a branch → `main` / `/docs`** (this project builds into `docs/`, and `docs/CNAME` already contains `guzzo.party`).
2. Clear the custom-domain box, **Save**, type `guzzo.party` again, **Save**. This restarts the DNS check and certificate request.
3. Wait until it says "DNS check successful" and the certificate is provisioned (minutes, sometimes up to 24 h).
4. Tick **Enforce HTTPS**.

Check: `https://guzzo.party` should load with a padlock, and `http://guzzo.party` should redirect *up* to https.

## 4. Lock down the registrar

- Two-factor authentication on the registrar account (app or security key, not SMS).
- **Registrar lock / transfer lock** on.
- **Auto-renew** on, with a card that won't expire before the renewal date. A lapsed `.party` domain is cheap to grab.
- **DNSSEC** on, if the registrar offers it.

## 5. Stop people sending email as @guzzo.party

If you don't send or receive email on guzzo.party (the site uses hello@matguzzo.com), publish these records so spoofed mail gets rejected:

| Type | Name | Value |
|---|---|---|
| MX | @ | `0 .` (a "null MX": this domain receives no mail) |
| TXT | @ | `v=spf1 -all` |
| TXT | _dmarc | `v=DMARC1; p=reject; adkim=s; aspf=s` |

Do the same check for **matguzzo.com**, but there you *do* use email, so make sure SPF, DKIM and DMARC match the provider behind hello@matguzzo.com rather than copying the "-all" records above.

## What the site itself already does

- No JavaScript, no analytics, no cookies, no third-party requests. Fonts (EB Garamond, OFL licence) are self-hosted.
- A strict Content-Security-Policy in every page (`default-src 'self'; script-src 'none'` …), so even an injected script can't run.
- `referrer` policy, `/.well-known/security.txt`, `robots.txt`, `sitemap.xml` with hreflang for all four languages, and a 404 page.

GitHub Pages can't send custom HTTP headers (HSTS, frame-ancestors). If you want those, the site is plain static files and moves as-is to **Codeberg Pages** (Berlin non-profit, free custom domains with automatic HTTPS) or to your own Hetzner box behind Caddy, which sets HTTPS and headers automatically. A sample `Caddyfile`:

```
guzzo.party, www.guzzo.party {
  root * /srv/guzzo.party/docs
  file_server
  header Strict-Transport-Security "max-age=31536000; includeSubDomains"
  header X-Content-Type-Options nosniff
  header Content-Security-Policy "frame-ancestors 'none'"
  handle_errors {
    rewrite * /404.html
    file_server
  }
}
```

## One decision for you

What should happen to **matguzzo.com** now that guzzo.party holds everything? The site still links to it as the older art archive. If you'd rather have one address, put a 301 redirect from matguzzo.com to guzzo.party and keep the mailbox.
