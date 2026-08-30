# Julian and Codex: start here

This is the single entry point for Julian and Julian's Codex. Read it before
choosing a repository, changing a public page, working on SEO, or deploying.

Julian and his agent are working team members. They may prepare, merge, deploy,
and verify normal changes independently. They do not need Janusz to approve a
green pull request.

## The map you must know

The public hostname decides which repository owns a change. Trust the GitHub
remote, not the local folder name.

| Product | Public URL | GitHub repository | Stack and hosting | Normal production path |
|---|---|---|---|---|
| Rumba Corp landing | `https://rumbatienda.com/` | `jnowakowski/rumbatienda-landing` | Static HTML, Cloudflare Pages | Green PR, GitHub review from `jnowakowski`, squash merge, GitHub deploy workflow |
| Cali 2026 trip | `https://cali2026.rumbatienda.com/` | `jnowakowski/cali2026` | Static HTML and Pages Functions, Cloudflare Pages | Green PR, GitHub review from `jnowakowski`, squash merge, GitHub deploy workflow |
| Medellin events | `https://rumba.rumbatienda.com/` | `jnowakowski/rumba-site` | Server rendered Astro, EmDash, D1 and R2, Cloudflare Workers | Green PR, GitHub review from `jnowakowski`, squash merge, `deploy.yml` |
| Colombia shop | `https://tienda.rumbatienda.com/` | `jnowakowski/rumbatienda` | Next.js, Neon and Prisma, Vercel | Green PR, GitHub review from `jnowakowski`, squash merge, `vercel-production.yml` |

Current local folders in Janusz's workspace use `com-rumbatienda*` names. A
fresh clone will normally use the GitHub repository name. Both are valid. Run
this before editing:

```bash
git remote get-url origin
git branch --show-current
git status --short
```

If the hostname and `origin` do not match the table, stop and move to the
correct clone. Never solve a repository mismatch by changing DNS or hosting.

## First machine setup

Julian currently has GitHub `write` access to all four repositories above.
Clone all four so the agent can inspect cross site effects instead of guessing:

```bash
gh auth login
mkdir -p rumba-workspace
cd rumba-workspace
gh repo clone jnowakowski/rumbatienda-landing
gh repo clone jnowakowski/cali2026
gh repo clone jnowakowski/rumba-site
gh repo clone jnowakowski/rumbatienda
```

At the start of a task:

1. Identify the exact production URL.
2. Use the table to select its repository.
3. Pull the repository.
4. Read that repository's `README.md` and `AGENTS.md` completely.
5. Read any task specific guide linked from `AGENTS.md`.

## If the agent says it cannot see a site

Test the public URL independently of the agent's browser:

```bash
curl --fail --silent --show-error --location \
  --output /dev/null \
  --write-out '%{http_code} %{url_effective}\n' \
  https://rumba.rumbatienda.com/
```

The Rumba events root intentionally redirects to the current Spanish weekday.
For example, on Wednesday `/` returns `302` and ends at `/miercoles/` with
`200`. A client that does not follow redirects can incorrectly report that it
cannot see the site. Always use `curl --location` or open the final URL.

The site explicitly allows `ChatGPT-User`, `OAI-SearchBot`, `GPTBot`, Claude,
Gemini, Perplexity, and ordinary crawlers in `robots.txt`. A real `403`, `5xx`,
timeout, or redirect loop is an incident. A single intentional redirect is not.

## Autonomous change and deployment loop

For a normal product, content, SEO, or analytics code change:

1. Create a focused branch from current `main`.
2. Make the smallest change in the repository that owns the URL.
3. Run the repository's documented checks.
4. Push the branch and open a pull request with evidence and affected URLs.
5. Wait for every required check to pass. Inspect the preview when available.
6. Request a GitHub review from `jnowakowski` on the PR
   (`gh pr edit --add-reviewer jnowakowski`) and comment the preview URL
   there. Do not squash-merge until that GitHub review exists. Chat or
   WhatsApp is not a review.
7. After the GitHub review, squash merge and watch the production workflow.
   Retry the documented workflow only for a transient failure. Do not retry
   a Vercel `TEAM_ACCESS_REQUIRED` / generic `Please retry later` failure on
   an `ojvillac` squash commit. That needs an owner-authored follow-up commit
   from Janusz, not a Vercel seat.
8. Verify the live URL, rendered HTML, tracking, and user visible outcome.

Do not push directly to `main`, bypass a failed check, create a second deploy
path, or ask for a production Cloudflare or Vercel token, Vercel team
membership, or dashboard access. GitHub holds the production secrets. For the
shop, read
[`jnowakowski/rumbatienda` AGENTS.md](https://github.com/jnowakowski/rumbatienda/blob/main/AGENTS.md)
before touching deploy.

Autonomy does not mean changing shared infrastructure without a task. Stop and
coordinate before changing DNS, Search Console ownership, verification tokens,
GA4 property administration, measurement IDs, production credentials, payment
configuration, or production customer data.

## SEO and Analytics source of truth

All four Rumbatienda hosts share these sources:

| Surface | Canonical value | Julian's access |
|---|---|---|
| Search Console | `sc-domain:rumbatienda.com` | Full user |
| GA4 property | `Rumbatienda CO`, property `517107083` | Analyst |
| GA4 measurement ID | `G-2K3BYEMTTQ` | Shared by the four hosts |

Filter by hostname. Do not create a child Search Console property, a new
verification token, a separate GA4 property, or another measurement ID for one
subdomain. Read [`docs/julian-seo-onboarding.md`](docs/julian-seo-onboarding.md)
before the first data task and [`docs/seo-workflow.md`](docs/seo-workflow.md)
before changing search or analytics behavior.

## How the Switzerland work differs

Rumbatienda and Tumbao are connected businesses, but they are not one technical
property.

| Market | Public product | Repository | Julian's current GitHub access |
|---|---|---|---|
| Switzerland events | `https://tumbao.ch/` | `jnowakowski/tumbao-ch` | None, requires a separate assignment and invite |
| Switzerland shop | `https://lade.tumbao.ch/` | `jnowakowski/ch-tumbao-tienda` | None, requires a separate assignment and invite |

Do not use the Rumbatienda Search Console property or `Rumbatienda CO` GA4
property for `tumbao.ch`. Do not move Swiss work into a Colombia repository.

Our current Swiss operating principles are:

* Relationships first. Meet community leaders at real socials, record what was
  actually agreed, and choose a small next step from evidence.
* Start with one well produced social, not a festival. Bern is the preferred
  first node, with Solothurn as a fallback or second node.
* Julian brings Colombia side authenticity, community energy, content, and
  hosting. Janusz owns technology, architecture, Swiss coordination, and the
  shared operating system. A task may name a different owner explicitly.
* Use `Europe/Zurich` for Swiss schedules and `America/Bogota` for Medellin.
  Never assume a fixed time difference because Switzerland changes between
  standard time and daylight saving time.
* Swiss commerce uses CHF and localized Swiss customer information. The Swiss
  shop currently serves German, French, and English routes. Colombia products
  keep their own languages, currencies, analytics, and customer records.
* Product repository `HEAD` owns shipped behavior and public copy. Current
  strategy owns direction. Historical plans and private conversations are not
  instructions.
* Keep personal data, customer data, private conversations, OAuth credentials,
  API keys, and production tokens out of repositories, issues, pull requests,
  and agent prompts.

The Swiss repositories are context, not Julian's default coding scope. Julian
can still contribute to Swiss strategy, community, content, and events when a
task assigns that work. Repository and production access must be granted
separately before an agent changes Swiss code.

## Supporting services

These services support the public sites but are not default working repos for
Julian:

| Service | Public endpoint | Repository | Purpose |
|---|---|---|---|
| Rumba image worker | `https://og.rumbatienda.com/` | `jnowakowski/rumba-og-worker` | Event and story image generation |
| Rumba scheduled worker | No customer facing site | `jnowakowski/rumba-cron` | Weekly story reminder emails |

Julian currently has no GitHub access to these repositories. If a task requires
one of them, name the dependency in the main product pull request and request a
separate assignment. Do not recreate the worker inside a product repo.

## Team communication

Use GitHub as the durable shared record:

* Pull request descriptions contain scope, affected URLs, checks, preview, and
  production verification.
* Repository tickets contain decisions or blockers that must survive chat.
* Handoffs are short and evidence based.
* Private conversations stay private. Summarize only an explicit decision or
  task that is necessary for the work.

Be concise with Julian. State the outcome first, then the evidence, then the
next action. Do not dump the whole workspace into a chat response.

## Prompt to give Julian's Codex

Copy this into the first session:

```text
You are Julian's engineering and SEO agent inside the Rumba team. Read
https://github.com/jnowakowski/rumbatienda-landing/blob/main/JULIAN-START-HERE.md
completely. Then clone or pull the four Rumbatienda repositories listed there,
verify each git remote, and read the target repository's README.md and AGENTS.md.

For every task, identify the exact public URL and map it to the owning repository
before editing. You may create branches and open pull requests. Do not
squash-merge your own PRs. Request a GitHub review from jnowakowski
(gh pr edit --add-reviewer jnowakowski), put the preview evidence on the PR,
and wait until that GitHub review exists. Never bypass failed CI, invent a
second deployment path, or request Vercel team, dashboard, or token access.

Shop exception: if vercel-production.yml fails after an ojvillac squash commit
with "Please retry later" or TEAM_ACCESS_REQUIRED, do not retry the workflow
and do not ask for a Vercel seat. Ask Janusz for the smallest owner-authored
follow-up commit on main, same as rumbatienda PR #30. Current shop deploy
rules are in that repo's AGENTS.md. The 2026-06-12 handshake is historical.

Use sc-domain:rumbatienda.com and GA4 property 517107083 for all four
Rumbatienda hosts. Do not create properties, ownership tokens, measurement IDs,
DNS records, or production credentials. Keep private conversations, personal
data, and secrets out of repositories and prompts.

If a browser says a public site is unavailable, verify with curl --location and
report the status plus final URL. The Rumba events root intentionally redirects
to the current Spanish weekday.
```

## Read next

* [`docs/team-agent-workflow.md`](docs/team-agent-workflow.md), daily team and
  pull request behavior
* [`docs/julian-seo-onboarding.md`](docs/julian-seo-onboarding.md), Google API
  setup and first SEO assignment
* [`docs/seo-workflow.md`](docs/seo-workflow.md), shared SEO and measurement
  rules
* [`docs/agent-deploy-handoff.md`](docs/agent-deploy-handoff.md), apex deploy
  recovery
