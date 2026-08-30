# Agent deploy handoff

Friendly note for Julian, Codex, Claude, and any other agent joining this
repo: this checkout is the canonical source for the apex landing page.
If your local folder is called something else, trust `git remote -v`, not the
folder name.

## Canonical identity

- GitHub repo: `jnowakowski/rumbatienda-landing`
- SSH clone: `git@github.com:jnowakowski/rumbatienda-landing.git`
- Production URL: `https://rumbatienda.com`
- Preview URL pattern: `https://<branch>.rumbatienda-landing.pages.dev`
- Hosting: Cloudflare Pages through GitHub Actions
- Not used here: Vercel

## Deploy model

This repo is static. The whole site lives in `public/index.html`.

1. Create a feature branch.
2. Edit `public/index.html`.
3. Run a local preview:
   ```bash
   python3 -m http.server 4321 -d public
   ```
4. Commit and push the branch.
5. Open a PR.
6. GitHub Actions deploys a Cloudflare Pages preview and comments the URL.
7. Request a GitHub review from `jnowakowski`. Wait for that review on the PR.
8. After the GitHub review, `jnowakowski` or another authorized maintainer
   squash-merges to `main` to deploy production. Julian's Codex does not merge
   its own PR.

Do not look for Vercel project metadata in this repo. If a tool says "no
Vercel project found", that is expected and not a blocker.

If you find yourself trying to attach `rumbatienda.com` or any subdomain to a
new Vercel project from this repo, stop. The apex landing deploys through
Cloudflare Pages. Request a GitHub review before merge. No Vercel dashboard
access is needed.

## If deploy is unclear

Run:

```bash
git remote -v
git branch --show-current
ls .github/workflows
sed -n '1,120p' .github/workflows/deploy.yml
```

If `git remote -v` does not show `jnowakowski/rumbatienda-landing`, you are
in the wrong checkout.

## How agents should coordinate

Use the repo as the shared conversation surface:

- Write context into the PR description.
- Link preview URLs in the PR.
- Leave follow-up notes in `docs/` when they should survive the chat.
- If blocked, add a short note under `docs/handshakes/`, commit it, push it,
  and ask Julian to have the Rumba team review the question.
- Keep commits small and named for the user-visible change.
- Before changing shared brand direction, pull and skim sibling repo changes.

Sibling repos:

- `jnowakowski/cali2026`, production `https://cali2026.rumbatienda.com`
- `jnowakowski/rumbatienda`, production `https://tienda.rumbatienda.com`
