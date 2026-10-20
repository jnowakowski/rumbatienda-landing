# rumbaexperience.co

Apex landing page for the Rumba Corp ecosystem. Single hand-coded HTML page
that routes visitors to the two main subdomains: Tienda (shop) and Rumba
Medellin (events). No framework, no build step.

## What's here

```
public/
  index.html       ← THE site, hand-coded, self-contained
  favicon.svg, favicon.ico
  robots.txt, sitemap.xml
.github/
  workflows/deploy.yml   ← Deploy on push to any branch
  CODEOWNERS             ← Owner gate for workflow + config changes
```

The site is a single hand-coded HTML file. Inline `<style>` and `<script>`
blocks, Google Fonts via CDN, GA4 GTM injected inline. Edit `public/index.html`
directly.

## DNS

Both `rumbaexperience.co` and legacy `rumbatienda.com` use the same Cloudflare
Pages project, `rumbatienda-landing`. The phase 1 production canonical is
`rumbaexperience.co`; Cloudflare redirects old apex/www hosts after validation.
The legacy zone ID is `32fa49fd2d70734200c592a56a6fb92b`.

Subdomain records (`rumba.`, `tienda.`, `cali2026.`, `og.`, `mta-sts.`) live
in their respective zones but are managed elsewhere. Do NOT touch them from this repo.

## Deploy

Deploys automatically via GitHub Actions (`.github/workflows/deploy.yml`).
Direct push to `main` blocked by branch protection, all changes go through PRs.

| Event | Target | URL |
|---|---|---|
| Push to feature branch | `preview` env | `https://<branch>.rumbatienda-landing.pages.dev` (alias) and `https://<commit>.rumbatienda-landing.pages.dev` (immutable) |
| Merge to `main` | `production` env (main-only) | `https://rumbaexperience.co` (legacy `https://rumbatienda.com` until Cloudflare 301) |

Workflow runs `wrangler pages deploy ./public` directly. No build step.

Local emergency deploy (owner only, bypasses CI):
```bash
npx wrangler pages deploy ./public --project-name=rumbatienda-landing
```

Local preview while editing:
```bash
python3 -m http.server 4321 -d public
# open http://localhost:4321
```

CODEOWNERS (`.github/CODEOWNERS`) gates merges that touch `.github/`. Content
edits in `public/` merge without owner review.

## Analytics

- GA4: `G-2K3BYEMTTQ` (Rumbatienda CO property, inline GTM snippet in index.html)
- Matomo: retired 2026-09-29. The legacy site 4 snippet remains in `index.html`; do not migrate or restore the service.
- CF Web Analytics: `d95ee1d53b0548fabea5ee2442bb5f31`

## Content rules

- Never use em dashes, en dashes, or hyphens as text separators in content, code,
  comments, or docs. Use commas, periods, pipes (|), or middot (·) instead.
