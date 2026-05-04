# rumbatienda-landing

Umbrella landing page for [rumbatienda.com](https://rumbatienda.com). Single page that routes visitors to the two main subdomains: Tienda (shop at tienda.rumbatienda.com) and Rumba Medellin (events at rumba.rumbatienda.com).

## Stack

Astro 6, TypeScript, static output. No frameworks or Tailwind. Deployed on Cloudflare Pages.

## Commands

```bash
npm install       # install dependencies
npm run dev       # local dev server at localhost:4321
npm run build     # build to ./dist/
npx wrangler pages deploy ./dist --project-name=rumbatienda-landing   # deploy
```

Production: `https://rumbatienda.com`
