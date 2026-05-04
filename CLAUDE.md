# rumbatienda-landing

Umbrella landing page for `rumbatienda.com`. Routes visitors to Tienda (shop) or Horario (class schedule).

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

- GA4: `G-2D2GBD8R7D` (shared with rumba-site)
- CF Web Analytics: `d95ee1d53b0548fabea5ee2442bb5f31` (shared)
- Matomo: not integrated (server-side only on rumba-site)

## Branding

Dark theme (#0A0A0E). Fonts: Bebas Neue (display), Barlow Condensed (body).
Accents: salsa yellow (#FCD116), bachata pink (#FF4D8D), zouk cyan (#00CCCC).
