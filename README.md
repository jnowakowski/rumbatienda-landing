# rumbatienda-landing

Apex landing page for [rumbatienda.com](https://rumbatienda.com). Single hand-coded HTML page that routes visitors to the two main subdomains: Tienda (shop at tienda.rumbatienda.com) and Rumba Medellin (events at rumba.rumbatienda.com).

## Stack

Static HTML/CSS/JS in `public/`. No framework, no build step. Deployed on Cloudflare Pages via GitHub Actions.

## Edit

Edit `public/index.html` directly. Preview locally with any static server:

```bash
python3 -m http.server 4321 -d public
```

## Deploy

Push to any branch → preview deploy on Cloudflare Pages. Merge PR to `main` → production deploy to `rumbatienda.com`. See `CLAUDE.md` for the full deploy section.
