# SEO Activation Plan, August to December 2026

Status: APPROVED by Janusz on 2026-08-13 after a dual model review (Claude and
Codex, CEO and engineering passes; 23 logged decisions).
Canonical copy: this file. Machine local copies elsewhere are pointers.
Scope: cali2026 (Feria phrases, ES and EN) and tumbao.ch city hubs (DE and FR).
Team: Janusz, Julian, and every agent working in these repos. Read this before
touching anything SEO relevant in `com-rumbatienda-cali2026` or `tumbao.ch`.

## Why this exists

We are switching from technical SEO cleanup (done, portfolio wide, 2026-08-06 to
08-12) to active positioning. This document is the shared direction so that
nobody optimizes in two different directions. It was reviewed adversarially;
the decisions below are deliberate, not defaults. Challenge them with data,
not vibes: every checkpoint has decision rules.

## Objective

Turn existing high intent search demand into measurable outcomes. Rankings are
the leading indicator, never the goal:

* cali2026: organic attributed `generate_lead` events (trip inquiries) in the
  August to December window.
* tumbao.ch: event detail views and outbound organizer clicks from hub and
  event pages.

## Premises

1. cali2026 is the nearest revenue surface and the opportunity is time boxed:
   Feria runs 24 Dec 2026 to 1 Jan 2027. August work is preparation. **The
   decisive window is October to December**, when official programming drops
   and search volume multiplies. Being the fastest complete resource at
   program drop is the only edge available by December.
2. tumbao.ch early signal is positive (0 to 43 impressions/day since 08-08,
   first clicks ever) but not yet confirmation. Confirmation point: the 28 day
   review on 2026-09-08. The durable Swiss moat is inventory freshness,
   complete Event structured data, and fast event pages. Hub pages are
   aggregation layers whose rankings follow inventory.
3. Active positioning means on page content, internal linking, structured
   data, and white hat distribution through existing relationships (organizers
   and venues sharing their own pages, the Instagram funnel). No link buying,
   no thin pages, no contradictory signals.
4. Title and CTR iteration only at 100+ impressions per page.
5. Truthfulness rule: pages state only officially confirmed facts. Unannounced
   Feria days say "programming pending". Hub copy claims only what the live
   D1 inventory supports.

## Workstream A: cali2026 (repo `com-rumbatienda-cali2026`)

Baseline (GSC, 7 days to 2026-08-13): "feria de cali 2026" position 4.9 with
21 clicks / 219 impressions; "programación feria de cali 2026" 6.7; "feria de
cali 2026 schedule" 1.8 (already won, hold it); "cali salsa festival 2026" 5.4;
`/es/program/` position 6.4 versus EN `/program/` 13.3.

| # | Task | Target | Definition of done |
|---|---|---|---|
| A0 | Diagnose before writing: pull the EN `/program/` query list from GSC (which queries does it lose at 13.3?) and target those | method gate for A1 | Query list appended to this file before A1 starts |
| A1 | EN `/program/` content upgrade driven by A0. Unconfirmed 2026 items labeled "programming pending". Includes removing the vestigial client side `?lang=` translator on program pages (production 301s it away; the inline dictionary breaks silently on every copy change) | hold "schedule" top 2; "festival" top 3 | A0 queries covered in visible HTML; no invented programming; inline dictionary removed |
| A2 | FAQ content in visible HTML (5 to 8 real questions matching GSC wordings: dates, tickets, salsodromo, safety) on `/program/` and `/es/program/`. FAQPage JSON-LD optional, not the DoD (Google restricted FAQ rich results in 2023) | question form queries | Question wordings visible on both pages |
| A3 | Internal linking: language roots link program above the fold; program pages cross link languages; `/es/guia-feria-de-cali-2026` links program and prices | crawl and authority flow | Link matrix live; extended verify passes |
| A4 | "salsa festival" framing in EN root and program title, description, one H2 (SERP already rewards it at 5.4) | cali salsa festival 2026 | Wording present, no stuffing |
| A5 | Conversion check: `generate_lead` fires from organic landings (program and prices funnel to `/#interest`); record the organic baseline | objective metric | Verified, baseline noted |
| A6 | Program drop runbook: pre built day block structure with pending labels; source hierarchy (Corfecali first, then Cali press); monitoring owner and cadence; 48 hour populate SLA; translation owner; manual `sitemap.xml` lastmod on the checklist; rehearsal before 09-15 | the December SERP | Structure and written runbook live by 09-15; drill executed |
| A7 | Instagram funnel: UTM tagged program URL in the Medellín IG rotation from November | owned demand | Link live, UTM visible in GA4 |
| A8 | Contract tests: extend `verify-playwright.js` to fetch each language copy at its real path (`/es/program/` etc.; today it only exercises the production dead `?lang=` path), asserting canonical, hreflang cluster, FAQ visibility, `html lang` | the safety gate A1 to A4 rely on | Tests fail on a broken language copy |

Checkpoints and decision rules:

* 2026-09-15: targets held, stay course; not moving, revise per data; leads at
  zero with traffic up, fix the conversion path first.
* 2026-11-01: paid search yes or no for November and December (owner: Janusz).
* 2026-12-01: freshness check; stale program content is a P0 fix.
* Program drop: whenever Corfecali publishes, the 48 hour SLA starts.

## Workstream B: tumbao.ch (repo `tumbao.ch`)

Baseline (GSC, 7 days): "soirée latino neuchâtel" 10.0; "soirée salsa
neuchâtel" 10; the Zürich family sits at 32 to 46. Event page velocity is
proven (Perle du Lac queries reached 4.7 to 6.6 within days).

| # | Task | Target | Definition of done |
|---|---|---|---|
| B1 | Verify only: event to hub guide links shipped 2026-08-07 (`matchingGuides` in worker.ts plus replay test). Spot check live event pages per hub city | all hub families | Spot check documented; no code change |
| B2 | Neuchâtel hub intro covers both "soirée salsa" and "soirée latino" phrasings (the latino variant has more impressions) | position 10 to top 5 | Both intents in the intro; H1 canonical; phrasing survives B3 as that hub's static sentence |
| B3 | Hub intros from live D1 inventory: one static positioning sentence per hub plus dynamic venue and organizer mentions computed from the already fetched `landingEvents` (no extra D1 query). Scope: venues, organizers, counts only; no "series" (read time series inference violates repo doctrine). Fallback: static sentence always renders; the venue sentence only when inventory is non empty; meta, og and JSON-LD descriptions stay static. Every interpolated value goes through `esc()` | hub query families | Replay tests assert both branches; the intro never names a venue absent from current inventory |
| B4 | Hub links from the root: extend the existing `guide-links` nav from 4 to 8 hubs (visible on all viewports). Add a unit test asserting the worker SSR anchor strings exist verbatim in `public/index.html` (`String.replace` no-ops silently and would degrade every SSR page without an error) | crawl and UX | 8 hub links in root HTML; anchor test green |
| B5 | Organizer and venue distribution through existing WhatsApp relationships: each active organizer gets their event or hub link to share. Relationship first, no mass outreach | external legitimacy | 5+ organizers received their links by 09-08 |
| B6 | Conversion check: event detail and outbound clicks fire from hub sessions. Prerequisite: reconcile `privacy.html` ("no client side tracking cookies") with the GA4 snippet before expanding tracking | objective metric | Privacy text and implementation consistent; baseline recorded |
| B7 | 28 day hub review on 2026-09-08 with the decision rules below; the national pages cannibalization check happens in the same review | all | Review executed, decisions logged |

Deploy rule: B2, B3 and B4 ship only via `make deploy-prod` (runs test-parse
and test-replay). `deploy-fast` skips exactly the suite that covers landing SSR.

Decision rules for 2026-09-08: hubs growing and indexed, then P1 route
decisions (heute, ce soir), each requiring route specific GSC demand plus
healthy same day inventory, with the time route architecture (Europe/Zurich day
boundary, after midnight events, stable canonicals) designed before launch.
Flat or decaying, then inventory and event page work takes priority and hub
copy is paused. A hub below the launch gate gets next event fallback content,
never noindex flapping.

## Execution model for the team

* One plan, per repo execution: separate PRs per repo with their own tests,
  deploys and rollback paths. Cross repo changes are never atomic.
* Claim a task by opening a draft PR referencing the task id (A1, B3, ...).
* Data access: GSC property `sc-domain:rumbatienda.com` and GA4 `517107083`
  (Julian's account already has access, see `julian-seo-onboarding.md`).
  Never guess numbers; pull them.
* Anything SEO relevant follows `docs/seo-workflow.md` (one property rule,
  measurement ownership) and the repo's own conventions.
* Swiss keyword evidence and launch gates live in
  `tumbao.ch/docs/seo-keyword-map.md`. This plan does not override those gates.
* After a deploy, the change gets one line in the portfolio SEO log kept by
  Janusz's agent (ask in the PR if unsure; it is mirrored from the brain).

## Out of scope

Link buying; paid keyword tools; new domains; paid search before the 11-01
decision; the rumba.rumbatienda.com EN track (separate, verifies 08-26);
national style pages until the 09-08 check; event pipeline and Caramelo
changes (B3 reads existing data only).

## Sequencing

Week 1 (to 08-17): A0 then A1, A2, A5, A8; B2, B1 verify, B4.
Week 2 (to 08-24): A3, A4, A6 structure and runbook; B3, B6; B5 kickoff.
Then guardian weekly; checkpoints 09-08, 09-15, 11-01, 12-01; program drop
response whenever it happens.
