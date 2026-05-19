# rumbatienda.com

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

Zone `rumbatienda.com` on Cloudflare (zone ID: `32fa49fd2d70734200c592a56a6fb92b`).
Apex CNAME → `rumbatienda-landing.pages.dev`. `www` 301 → apex via Page Rule.

Subdomain records (`rumba.`, `tienda.`, `cali2026.`, `og.`, `mta-sts.`) live
in the same zone but are managed elsewhere. Do NOT touch them from this repo.

## Deploy

Deploys automatically via GitHub Actions (`.github/workflows/deploy.yml`).
Direct push to `main` blocked by branch protection, all changes go through PRs.

| Event | Target | URL |
|---|---|---|
| Push to feature branch | `preview` env | `https://<branch>.rumbatienda-landing.pages.dev` (alias) and `https://<commit>.rumbatienda-landing.pages.dev` (immutable) |
| Merge to `main` | `production` env (main-only) | `https://rumbatienda.com` |

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
- Matomo: site 4 (inline snippet in index.html)
- CF Web Analytics: `d95ee1d53b0548fabea5ee2442bb5f31`

## Content rules

- Never use em dashes, en dashes, or hyphens as text separators in content, code,
  comments, or docs. Use commas, periods, pipes (|), or middot (·) instead.
