# 0001 — Stack, repo scaffold, and deploy pipeline

- **Status:** Accepted (reversible; CEO steer welcome)
- **Date:** 2026-07-16
- **Owner:** Founding Engineer
- **Issue:** CYN-2

## Context

Cynthia is a customer-feedback SaaS for small software teams (feedback board +
public changelog + light analytics — see the CYN-1 `roadmap-30d`). We need a
foundation one engineer can move fast in: pick a boring, well-supported
full-stack stack, scaffold the repo, and stand up CI/CD that deploys to a live
URL and redeploys on every push to `main`.

## Decision

### Application stack

| Layer      | Choice                                   | Why |
|------------|------------------------------------------|-----|
| Framework  | **Next.js 16 (App Router) + TypeScript** | One framework for UI *and* backend (API routes / server actions). Largest React ecosystem and hiring pool. Boring and battle-tested. |
| UI runtime | **React 19**                             | Ships with Next 16. |
| Styling    | **Tailwind CSS v4**                      | Fast to build with, no bespoke design system to maintain early. |
| Language   | **TypeScript**                           | Type safety across the full stack pays off as the schema grows. |
| Lint       | **ESLint** (`eslint-config-next`)        | Default, zero-config. |

### Planned but not yet added (land with the features that need them)

| Layer    | Planned choice                     | Lands in |
|----------|------------------------------------|----------|
| Database | Managed **Postgres** (Neon/Supabase) + **Drizzle ORM** | CYN-3 |
| Auth     | **Auth.js (NextAuth)** or **Clerk** | CYN-3 |
| Billing  | **Stripe** (test mode)             | CYN-5 |

These are deferred deliberately — YAGNI until the feature that needs them.

### Deploy pipeline

- **CI/CD:** **GitHub Actions** (`.github/workflows/deploy.yml`).
- **Hosting today:** **GitHub Pages**, serving a Next.js **static export**
  (`output: 'export'`). Every push to `main` builds and redeploys to a real
  public URL. Zero third-party credentials, zero cost — so this task ships now
  instead of blocking on account provisioning.
- **Hosting at production (target):** **Vercel**, the native home for Next.js
  SSR. We move there when server features (auth, DB, API routes) land in CYN-3
  and static export is no longer enough. The application code is unchanged; only
  the deploy target and workflow change.

## Why not the alternatives

- **Vercel from day one:** the right long-term home, but needs an account/token
  and a (small) budget sign-off we don't have yet. GitHub Pages proves the full
  CI/CD loop today with no blocker; the switch later is cheap.
- **Remix / SvelteKit / Rails / Django:** all fine, but Next.js maximizes
  ecosystem, hosting options, and hiring pool for a solo founding engineer.
- **Separate frontend + backend services:** premature. One Next.js app covering
  UI and API is simpler to build, deploy, and reason about at this stage.

## Consequences

- We get a live URL and auto-redeploy immediately, on free infrastructure.
- **Constraint:** while on GitHub Pages the app is static-only — no server-side
  data, auth, or API routes in production. This is fine through the end of CYN-2
  and forces the Vercel migration to be an explicit, tracked step (follow-up
  issue) rather than silent drift.
- The repo currently lives under an individual GitHub account (`cardaris`)
  because no company GitHub org is configured. Transfer to a company org when one
  exists (tracked with the CEO).

## Follow-ups

- Provision Vercel + managed Postgres and migrate hosting when CYN-3 adds the
  server (needs Vercel token + budget confirmation from the CEO).
- Move the repo to a company GitHub org once one exists.
