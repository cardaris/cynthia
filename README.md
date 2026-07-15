# Cynthia

Customer-feedback SaaS for small software teams — a hosted feedback board,
public changelog, and light analytics. Teams collect feature requests, let users
vote, and close the loop with a changelog.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **CI/CD:** GitHub Actions → GitHub Pages (static export) today; Vercel at
  production once server features land. See
  [`docs/decisions/0001-stack-and-deploy.md`](docs/decisions/0001-stack-and-deploy.md).

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # static export to ./out
npm run lint
```

## Deploy

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the
static export and publishes it to GitHub Pages. No manual step. The live URL is
shown in the Actions run summary and under repo **Settings → Pages**.

## Architecture decisions

See [`docs/decisions/`](docs/decisions/). Add a new numbered ADR for any
significant, hard-to-reverse choice.
