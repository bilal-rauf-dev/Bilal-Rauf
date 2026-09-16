# <span style="color:#24356B">Bilal Rauf</span> <span style="color:#E85D75">— Portfolio</span>

<p align="center">
  <strong>AI · Full-Stack · Systems</strong><br />
  A fast, static-first portfolio built with <strong>Next.js 16</strong> and TypeScript.
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16.3.5-111111?style=for-the-badge&logo=nextdotjs" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-19-149ECA?style=for-the-badge&logo=react&logoColor=white" />
  <img alt="Performance" src="https://img.shields.io/badge/Performance-static--first-7C3AED?style=for-the-badge" />
</p>

---

## <span style="color:#E85D75">✦</span> What&apos;s here

The public portfolio is preserved as an exact visual baseline while the surrounding application is modernized for production deployment, secure API integrations, and maintainable future work.

| <span style="color:#24356B">Area</span> | <span style="color:#E85D75">Purpose</span> |
| --- | --- |
| `src/app` | Next.js App Router shell, metadata, error handling, and health endpoint |
| `public/portfolio` | Static visual baseline of the existing portfolio |
| `docs/performance-standards.md` | Release gates and implementation standards |
| `.env.example` | Safe names for future server-only credentials |

## <span style="color:#F59E0B">⚡</span> Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | What it checks |
| --- | --- |
| `npm run lint` | Code quality and accessibility linting |
| `npm run typecheck` | Strict TypeScript validation |
| `npm run build` | Production compilation and static rendering |
| `npm run start` | Production server after a build |

## <span style="color:#14B8A6">▣</span> Performance contract

The project is governed by [the performance standards](docs/performance-standards.md). In short:

- Static pages first; server routes only where secrets or fresh integrations require them.
- No private keys in the browser. Monkeytype and future provider credentials belong in server environment variables.
- Preserve visual stability: explicit asset dimensions, restrained JavaScript, and no render-blocking third parties.
- Maintain Core Web Vitals targets: LCP ≤ 2.0 s, INP ≤ 150 ms, and CLS ≤ 0.05.

## <span style="color:#8B5CF6">⌁</span> Deployment notes

Set `NEXT_PUBLIC_SITE_URL` to the canonical production URL. Add real credentials only in the deployment provider&apos;s environment-variable settings—never commit `.env` files.

The root `/api/health` endpoint is available for uptime checks. The portfolio itself is static, while future protected integrations can be introduced behind focused `/api/*` routes.

---

<p align="center"><strong style="color:#24356B">Built to be explored. Optimized to be fast.</strong></p>
