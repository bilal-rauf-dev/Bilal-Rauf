# Portfolio Performance Standards

## Purpose

This document is the performance contract for the Next.js portfolio. It keeps the site fast in real visitor conditions while allowing small, secure server-side integrations (for example, Monkeytype and contact delivery).

The site is **static-first**, not a static export: public pages should be pre-rendered and served from the CDN, while `/api/*` routes run only when an integration requires a secret or fresh data.

## Release gates

Every production change must meet these targets on the homepage and each project page. Test on a production-like build, with a mobile device profile and a throttled connection.

| Metric | Target | Release limit |
| --- | --- | --- |
| LCP | <= 2.0 s | <= 2.5 s |
| INP | <= 150 ms | <= 200 ms |
| CLS | <= 0.05 | <= 0.10 |
| Lighthouse Performance | >= 95 | >= 90 |
| Lighthouse Accessibility, Best Practices, SEO | 100 preferred | >= 95 |
| Initial JavaScript per route | <= 170 KB compressed | <= 220 KB compressed |
| Initial image transfer on mobile | <= 350 KB | <= 500 KB |
| Total blocking third-party scripts | 0 | 1 only with a documented exception |

Field data from real users is the source of truth. Lighthouse is a release check, not a substitute for field data.

## Architecture rules

- Use the Next.js App Router, TypeScript, and React Server Components by default.
- Keep pages statically rendered whenever possible. A page must not become dynamic merely to display a small live widget.
- Isolate live widgets behind cached route handlers. The page must render a useful fallback when an API is unavailable.
- Add `'use client'` only to the smallest interactive component that needs it. Never add it to a page or layout by default.
- Prefer native HTML and CSS for navigation, disclosure, scroll effects, and simple animation. Add a dependency only when it materially improves the product.
- Project content must live in typed data files or a lightweight CMS boundary, not duplicated inside components.
- Do not enable `output: 'export'`: secret-backed API routes and standard Next image optimization require a server-capable deployment.

## JavaScript and interaction

- Ship no analytics, chat, heatmap, or marketing script until its value and loading strategy are documented.
- Use `next/dynamic` for non-critical interactive components and heavy libraries. Defer them until visible or requested.
- Never import a full icon library, animation library, syntax highlighter, or date library into the initial route bundle when a small local alternative will do.
- Respect `prefers-reduced-motion`; animation must be decorative, interruptible, and never block input.
- Use passive listeners for scroll/touch where appropriate. Throttle or schedule non-urgent work; avoid layout reads and writes in tight loops.
- Keep form validation immediate and lightweight. Submit work asynchronously, show an accessible status, and prevent duplicate requests.

## Images, fonts, and assets

- Store assets as files under `public/` or import them statically. Do not embed photos or logos as large data URIs in components, styles, or markup.
- Use `next/image` for content images. Give every image an intrinsic size or stable aspect ratio and accurate `sizes` values.
- Use `preload` only for the single above-the-fold LCP image when there is one. All below-the-fold images remain lazy-loaded.
- Provide modern, appropriately sized AVIF/WebP assets. Decorative images need empty alt text; meaningful images need concise alt text.
- Use `next/font` with only needed families, subsets, weights, and styles. Do not load browser-facing Google Fonts stylesheets.
- Use SVG or CSS for simple icons. Avoid video backgrounds and autoplay media on the critical path.
- Version immutable static assets through the framework build output and serve them with long-lived CDN caching.

## Data, APIs, and secrets

- API keys, tokens, and provider credentials stay in hosting environment variables. Only values explicitly safe for browsers may use the `NEXT_PUBLIC_` prefix.
- Never add `.env*` files with real values to Git. Maintain `.env.example` with variable names and safe placeholders only.
- Monkeytype requests must go through a server-side route using `MONKEYTYPE_APE_KEY`. Return only the fields displayed by the portfolio, cache the response for at least one hour, and enforce route-level rate limiting.
- GitHub activity should be fetched server-side or from a cached route, never separately by every visitor. Keep a static fallback list of featured repositories.
- Every external API needs a timeout, response schema validation, cache policy, error fallback, and user-friendly unavailable state.
- Contact submissions require server-side validation, rate limiting, a honeypot, and an optional Turnstile challenge if abuse appears. Provider credentials remain server-side.
- Do not log credentials, full form contents, personally identifiable data, or raw third-party responses.

## Rendering, caching, and network

- Prefer static generation for marketing and project pages. Revalidate data-backed content on a deliberate schedule rather than at every request.
- Cache API responses at the CDN/edge when their data is not user-specific. Document each route's TTL and invalidation behavior.
- Limit external origins. Preconnect only to origins used on the critical path.
- Use Next's Metadata API for canonical URLs, Open Graph/Twitter images, and route-specific descriptions. Generate a sitemap and robots file.
- Set security headers through the deployment configuration: HTTPS, a restrictive Content Security Policy, `X-Content-Type-Options`, referrer policy, and sensible permissions policy.

## Accessibility and visual stability

- Every route must work with keyboard navigation, visible focus, semantic landmarks, and a skip link.
- Reserve space for images, widgets, loading states, consent notices, and fonts so that they cannot shift visible content.
- Use `aria-live` for asynchronous status messages; do not use motion as the only confirmation of an interaction.
- Test at 320 px width, zoomed text, dark/light appearance if offered, reduced motion, and a keyboard-only flow.

## Measurement and review workflow

Before merging or deploying a meaningful UI, asset, or dependency change:

1. Run the production build, type check, linting, and automated accessibility checks.
2. Compare the route bundle and asset weight with the release gates above.
3. Run Lighthouse on mobile for the homepage and the changed route.
4. Check the browser network panel: no failed requests, no exposed secrets, no unnecessary third-party calls, and no render-blocking assets.
5. Test the API fallback state and a throttled mobile connection.
6. Review deployed field data weekly. If a Core Web Vital regresses beyond the release limit, pause non-essential visual work until it is fixed.

## Exceptions

An exception needs a short note in the pull request or change record stating: the performance cost, why it is necessary, the affected route, the fallback behavior, and a removal/review date. Exceptions do not permit exposing secrets or bypassing accessibility requirements.
