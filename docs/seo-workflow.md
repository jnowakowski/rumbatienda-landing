# SEO ownership and working agreement

This is the operating guide for Julian, Julian's agent, and the Rumba team.
Its purpose is simple: everyone can improve search performance independently,
while ownership, measurement, and shared infrastructure stay consistent.

Read this before changing Search Console, Analytics, robots rules, sitemaps,
canonical URLs, language URLs, or structured data.

## The one property rule

Use one Google Search Console property for the whole Rumbatienda ecosystem:

| Setting | Canonical value |
|---|---|
| Search Console property | `sc-domain:rumbatienda.com` |
| Property type | Domain property |
| Verified owner | `jnowakowski@gmail.com` |
| Julian | `ojvillac@gmail.com`, Full user |
| Direct link | [Open the canonical property](https://search.google.com/search-console?resource_id=sc-domain%3Arumbatienda.com) |

The domain property already includes every protocol and every subdomain,
including:

* `https://rumbatienda.com/`
* `https://cali2026.rumbatienda.com/`
* `https://tienda.rumbatienda.com/`
* `https://rumba.rumbatienda.com/`

Do not create or verify another child property for routine SEO work. A separate
URL prefix property does not improve indexing. Filter the canonical property by
page URL or subdomain instead.

If the team has a specific reporting reason for a child property, record that
reason in a PR before creating it. The default answer is still to use the domain
property.

## Roles and autonomy

Julian and his agent may work independently on SEO inside the product repos.
That includes research, metadata, content, internal links, structured data,
sitemaps, robots rules, local verification, preview, merge, and deployment
through each repo's normal workflow.

Account ownership is a different responsibility. It is shared infrastructure,
not a requirement for doing SEO.

| Surface | Julian and his agent | Canonical owner |
|---|---|---|
| Search Console data | Read and analyse all Rumbatienda hosts | Maintains the domain property |
| Search Console actions available to a Full user | Use when a concrete SEO task requires them | Audits ownership and unused tokens |
| Page SEO and content | Change in the repo that serves the URL | Reviews only when normal repo rules require it |
| Production deploy | Use the repo's documented PR and deploy workflow | Maintains deploy infrastructure |
| DNS and Cloudflare zone | Do not change as part of an SEO task | `jnowakowski@gmail.com` |
| Search Console owners and verification tokens | Do not create or replace | `jnowakowski@gmail.com` |
| GA4 property administration | Do not create properties or change the measurement ID | `jnowakowski@gmail.com` |

Being a Full Search Console user is enough for Julian's normal SEO work. Owner
access is not needed and gives control over users, settings, and sensitive
Google Search actions.

## Analytics source of truth

All Rumbatienda hosts use the unified Colombia GA4 property:

| Setting | Canonical value |
|---|---|
| GA4 property | `Rumbatienda CO` |
| Property ID | `517107083` |
| Measurement ID | `G-2K3BYEMTTQ` |
| Julian | `ojvillac@gmail.com`, Analyst |
| Direct link | [Open Rumbatienda CO](https://analytics.google.com/analytics/web/#/a389760570p517107083) |

Do not create a new GA4 property or use a new measurement ID for one subdomain.
Filter reports by hostname, page path, or content group.

Julian's agent authenticates as Julian outside the repository and uses read
only scopes:

```text
https://www.googleapis.com/auth/analytics.readonly
https://www.googleapis.com/auth/webmasters.readonly
```

Never commit OAuth secrets, refresh tokens, service account JSON files, or
application default credentials.

The exact machine setup and access check are in
[`julian-seo-onboarding.md`](julian-seo-onboarding.md).

## Shared measurement plan

Use events to measure the ecosystem funnel, not every decorative click.

| Event | Meaning | Key event |
|---|---|---|
| `funnel_exit` | Visitor moves from one Rumbatienda host to another | No |
| `view_item` | Visitor opens a shop product | No |
| `add_to_cart` | Visitor adds a shop item | No |
| `begin_checkout` | Visitor starts checkout | No |
| `generate_lead` | Cali interest form was accepted | Yes, once per session |
| `purchase` | A paid shop order is confirmed | Yes, once per event |

All funnel events use the unified measurement ID. Ecommerce events use GA4's
recommended `currency`, `value`, `transaction_id`, and `items` parameters.
Do not mark generic clicks or page views as key events.

## Which repo owns each URL

Change SEO in the repo that serves the affected URL.

| URL | Repository | Main SEO surfaces |
|---|---|---|
| `rumbatienda.com` | `jnowakowski/rumbatienda-landing` | `public/index.html`, `public/robots.txt`, `public/sitemap.xml` |
| `cali2026.rumbatienda.com` | `jnowakowski/cali2026` | public HTML routes, robots rules, sitemap |
| `tienda.rumbatienda.com` | `jnowakowski/rumbatienda` | Next.js metadata, robots route, sitemap route, product structured data |
| `rumba.rumbatienda.com` | The Rumba events site repo | page metadata, event URLs, sitemap, event structured data |

Do not solve a page SEO problem by changing DNS, hosting, or another repo.

## How to make an SEO change

1. Pull the affected repo and read its `README.md` and `AGENTS.md`.
2. Write down the exact target URL and search outcome.
3. Check the same URL in the canonical Search Console property.
4. Change the smallest owning surface in the correct repo.
5. Check title, description, canonical URL, indexability, language signals,
   structured data, internal links, robots rules, and sitemap membership.
6. Run the repo's local checks and inspect the preview.
7. Open or update a PR with the target URLs, expected Google behaviour, and
   verification evidence.
8. Merge and deploy through the repo's documented workflow.
9. Verify the live response and rendered HTML.
10. Use URL Inspection or sitemap submission only when the deployed change
    gives a concrete reason to do so.

For data analysis, query `sc-domain:rumbatienda.com` and filter the `page`
dimension by hostname. Do not create a child property just to obtain a filtered
report.

## Coordination rules for shared SEO

Use the PR as the durable record. Before merge, state whether the change affects
only one host or the whole domain.

The following changes need a cross repo check because one mistake can affect
several sites:

* root `robots.txt` policy
* sitemap locations or sitemap index changes
* canonical URL conventions
* language URL strategy and `hreflang`
* domain wide redirects
* organization, product, event, or breadcrumb structured data
* GA4 measurement IDs or consent behaviour
* Search Console sitemap submission, removals, or ownership

Do not perform the same manual Search Console action from two accounts. Record
who did it and when in the PR.

## Language SEO

A client side language switch on one URL changes the experience for a visitor,
but it does not create separate indexable language pages. Google normally sees
the initial HTML returned for that URL.

If English and Spanish should rank independently, use distinct stable URLs and
reciprocal `hreflang` links. Do not add `hreflang` for translations that do not
have their own crawlable URLs.

If one URL intentionally serves both languages, keep one canonical URL and
treat the language switch as user experience, not as a separate SEO page.

## Incident recovery: unexpected child Owner

On 2026-08-05 Google reported `ojvillac@gmail.com` as an Owner of the URL prefix
property `https://cali2026.rumbatienda.com/`.

Root cause:

* Julian remains a Full user, not an Owner, on `sc-domain:rumbatienda.com`.
* Julian is an Analyst on GA4 property `517107083`.
* Commit `040f2cb` in `jnowakowski/cali2026` added Julian's verification file
  `public/google7f20fb11f8db94a6.html` to production.
* That file made Julian a verified Owner of the child URL prefix property.
* The file was not needed because the canonical domain property already covers
  Cali 2026.

Resolution on 2026-08-05:

* Julian's access was removed from the child URL prefix property.
* PR `jnowakowski/cali2026#70` removed the verification file and deployed the
  clean `main` branch to production.
* The former token URL now returns `404`.
* The child property shows one verified Owner, `jnowakowski@gmail.com`, and zero
  unused ownership tokens.
* Julian remains a Full user on `sc-domain:rumbatienda.com` and an Analyst on
  GA4 property `517107083`.

### How to remove the extra Owner safely

1. Open the URL prefix property
   `https://cali2026.rumbatienda.com/` in Search Console.
2. Open `Settings`, then `Users and permissions`.
3. Find `ojvillac@gmail.com` and open `Ownership verification details`.
4. Record whether the row says `Owner` or `Owner, Verified`, and record every
   verification method and token shown.
5. Remove Julian's access from this child property.
6. If Google reports an unused ownership token, remove only the exact token
   assigned to Julian:
   * HTML file: remove that exact file from the Cali site's public root.
   * HTML tag: remove that exact meta tag from the Cali homepage.
   * DNS: remove that exact TXT or CNAME value, never every Google TXT record.
   * Google Analytics: remove the permission level that allowed ownership
     verification, while keeping the intended Analyst access if Google permits
     it.
   * Google Tag Manager: remove Publish or Admin permission used for
     verification.
7. Return to `Users and permissions`, open `Unused ownership tokens`, and
   confirm the count for Julian is zero.
8. Keep Julian as a Full user only on the canonical domain property.

Do not use `Remove property` as the fix. That action can only remove a property
from a user's list while a valid verification token still allows the owner to
regain access.

## Agent checklist

Before SEO work:

* Use `sc-domain:rumbatienda.com`.
* Confirm the target hostname and owning repo.
* Pull first and read current metadata, robots rules, sitemap, and redirects.
* Use read only Google API scopes.

Before merge:

* Test the preview and its rendered HTML.
* Confirm the final URL returns `200` or an intentional redirect.
* Confirm the canonical points to the final public URL.
* Confirm indexable URLs are not blocked or marked `noindex`.
* Confirm the sitemap contains only canonical, indexable URLs.
* Include evidence and affected URLs in the PR.

After deploy:

* Verify live HTML and response headers.
* Check URL Inspection in the canonical property when needed.
* Record any manual Search Console action in the PR.
* Do not create a new property, verification token, GA4 property, or tracking
  ID to solve a reporting inconvenience.

## Official references

* [Search Console users, owners, and permissions](https://support.google.com/webmasters/answer/7687615?hl=en)
* [Search Console property types](https://support.google.com/webmasters/answer/34592?hl=en)
* [Search Console ownership verification](https://support.google.com/webmasters/answer/9008080?hl=en)
* [Removing a Search Console property](https://support.google.com/webmasters/answer/9357768?hl=en)
* [GA4 user roles and access](https://support.google.com/analytics/answer/9305587?hl=en)
