# Tienda Outage: `DEPLOYMENT_NOT_FOUND`

Date opened: 2026-05-20
Last verified: 2026-05-21 02:27 Europe/Zurich
Affected host: `https://tienda.rumbatienda.com/`
Scope: Shop outage only. This is not the apex landing (`rumbatienda.com`) and not `cali2026.rumbatienda.com`.
Status: Resolved.

## Summary

`tienda.rumbatienda.com` was pointed at Vercel, but Vercel had no active deployment attached to that hostname.

This was not an application crash inside the Next.js app. The request failed before the shop app could serve content.

## Resolution

Resolved on 2026-05-21 from the local shop checkout at `com-rumbatienda-tienda`, remote `git@github.com:jnowakowski/rumbatienda.git`.

Actions taken:

1. Recreated and linked the missing Vercel project `jnowakowskis-projects/rumbatienda`.
2. Connected it to the GitHub repo `jnowakowski/rumbatienda`.
3. Restored the production environment variables needed by the app.
4. Generated a fresh production `NEXTAUTH_SECRET` and `AUTH_SECRET`.
5. Deployed production commit `39a3c99`, then the shop docs commit `1ea015d`.
6. Added `rumbatienda.com` and `tienda.rumbatienda.com` to the Vercel project.
7. Aliased `tienda.rumbatienda.com` to the new production deployment.

Verification after the fix:

```text
GET https://tienda.rumbatienda.com/ -> HTTP/2 200
GET https://tienda.rumbatienda.com/api/docs -> Rumba Tienda API documentation
```

Current production deployment:

```text
https://rumbatienda-89dmp9l88-jnowakowskis-projects.vercel.app
```

## Evidence

Reproduced from this machine on 2026-05-20:

```text
HTTP/1.1 404 Not Found
x-vercel-error: DEPLOYMENT_NOT_FOUND
x-vercel-id: iad1::ws69t-1779321947397-8a642b201a2f
```

Response body:

```text
The deployment could not be found on Vercel.

DEPLOYMENT_NOT_FOUND
```

## Likely Causes

The Vercel project referenced by the local `.vercel/project.json` was no longer present in the accessible Vercel account. The domain still routed to Vercel, so Vercel returned `DEPLOYMENT_NOT_FOUND`.

## What The Deployment Owner Should Check Next

1. Confirm the recreated Vercel project is the intended long-term production project.
2. Confirm all production env vars are correct in Vercel, especially payment, email, database, storage, and observability vars.
3. Add preview and development Vercel env vars if preview deploys are needed.
4. Keep `tienda.rumbatienda.com` attached to the `rumbatienda` project.
5. Add a simple external uptime check for the shop hostname.

## Local Blockers On This Machine

The original handoff listed local blockers, but they are no longer blockers on this machine:

- local checkout exists at `com-rumbatienda-tienda`
- shop repo remote `git@github.com:jnowakowski/rumbatienda.git` is accessible
- Vercel CLI is authenticated and linked to the recreated `rumbatienda` project

## Repo Context

From `rumbatienda-landing/AGENTS.md`:

- `rumbatienda-landing` -> `https://rumbatienda.com` on Cloudflare Pages
- `cali2026` -> `https://cali2026.rumbatienda.com` on Cloudflare Pages
- `rumbatienda` -> `https://tienda.rumbatienda.com` on Vercel

That means the outage is in the sibling shop repo and/or in Vercel project configuration, not in this landing repo.

## Team Note

Que mas, Julian and Julian's Codex. Welcome to the Rumba/Tienda loop. This shop is live again, and the next work should start from evidence, small deploys, and clear handoffs. Mucho trabajo juntos, con calma y con sabor.

## Suggested Follow-up

1. Capture the correct shop repo URL in shared docs.
2. Document the Vercel project name and domain mapping.
3. Verify who owns production access for `tienda.rumbatienda.com`.
4. Add a simple external uptime check for the shop hostname.
