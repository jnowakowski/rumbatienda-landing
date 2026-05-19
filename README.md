# rumbatienda.com

Apex landing page for the Rumba Corp ecosystem. Single hand-coded HTML page
that routes visitors to Tienda (shop) and Rumba Medellín (events). No
framework, no build step.

## Quick start (human or agent)

The whole site is in `public/index.html`. Edit it directly.

```bash
python3 -m http.server 4321 -d public
# open http://localhost:4321
```

## Ship a change

1. `git checkout -b feature/<thing>`
2. Edit `public/index.html`, commit
3. `git push -u origin feature/<thing>`
4. Open a PR (`gh pr create` or GitHub UI). CI builds a Cloudflare Pages
   preview and posts the URL as a sticky comment on the PR.
5. When you are happy with the preview, squash-merge the PR. That deploys
   to production at https://rumbatienda.com.

## Rules of the road

- Direct push to `main` is blocked. All changes go through PRs.
- Edits in `public/` merge without owner approval. Anything touching
  `.github/`, `.env*`, or future build config requires @jnowakowski review
  (see `.github/CODEOWNERS`).
- The production Cloudflare token is environment-scoped and only available
  to deploys on `main`. Feature branches use a separate preview token.

## Read before changing visuals

`CLAUDE.md` has the brand section: dark theme (`#0A0A0E`), display font
Bebas Neue, body Barlow Condensed, salsa accents (yellow `#FCD116`, pink
`#FF4D8D`, cyan `#00CCCC`). Stay inside the system.

Plus project conventions: no em/en dashes as text separators, analytics IDs
(GA4, Matomo, CF Web Analytics), DNS notes.

## For agents specifically

- There is no src/, no node build, no framework. If you see references to
  Astro components or `src/pages/`, that history was removed in a recent
  cleanup and is not coming back.
- Keep edits inside `public/`. If you genuinely need configuration changes
  (workflow, deps), open a PR and ping @jnowakowski for the CODEOWNERS
  approval.
- DNS records for subdomains (`tienda.`, `rumba.`, `cali2026.`, `og.`,
  `mta-sts.`) live in the same Cloudflare zone but are managed elsewhere.
  Do not modify them from this repo.
