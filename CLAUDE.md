# rumbatienda.com

Apex landing page for the Rumba Corp ecosystem. Single page that routes visitors to Tienda (shop) or Rumba (dance schedule).
Entry point for all organic/direct traffic to the rumbatienda.com domain.

## Stack

- Astro 6, TypeScript strict, static output
- No frameworks, no Tailwind. Pure CSS with custom properties
- Deploy: Cloudflare Pages (static)

## Key files

| File | Purpose |
|---|---|
| `src/pages/index.astro` | Single page, composes all sections |
| `src/layouts/Base.astro` | HTML shell, meta, OG, JSON-LD, analytics |
| `src/components/Hero.astro` | Hero with tagline |
| `src/components/Cards.astro` | Two CTA cards (Tienda, Rumba Medellin) |
| `src/components/About.astro` | About Rumba Corp (ES + EN) |
| `src/components/Footer.astro` | Contact, social, copyright |
| `src/styles/global.css` | Design tokens, reset, utilities |
| `public/og.png` | Static OG image 1200x630 |

## Deploy

```bash
npm run build && npx wrangler pages deploy ./dist --project-name=rumbatienda-landing
```

Production: `https://rumbatienda.com`
Preview: `https://rumbatienda-landing.pages.dev`

## DNS

Zone `rumbatienda.com` on Cloudflare (zone ID: `32fa49fd2d70734200c592a56a6fb92b`).
Apex CNAME → `rumbatienda-landing.pages.dev`. www 301 → apex via Page Rule.

Do NOT touch subdomain records (`rumba.`, `tienda.`, `og.`, `mta-sts.`).

## Analytics

- GA4: `G-2K3BYEMTTQ` (primary, unified Rumbatienda CO) + `G-2D2GBD8R7D` (legacy, dual tracking active)
- CF Web Analytics: `d95ee1d53b0548fabea5ee2442bb5f31`
- Matomo: site 4 (client-side snippet in Base.astro)

## Branding

Dark theme (#0A0A0E). Fonts: Bebas Neue (display), Barlow Condensed (body).
Accents: salsa yellow (#FCD116), bachata pink (#FF4D8D), zouk cyan (#00CCCC).

## Content rules

- Never use em dashes, en dashes, or hyphens as text separators in content, code, comments, or docs. Use commas, periods, pipes (|), or middot (·) instead.
