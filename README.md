# Marlowe Newspapers

Marlowe Newspapers is a cinematic editorial website where I publish my thoughts, analysis, and rankings across movies, TV shows, anime, manga, and novels, while also sharing up-to-date entertainment news.

The project is intentionally themed around a smoky 1940s detective newsroom: vintage typography, newspaper layout motifs, ink-heavy contrast, and an atmospheric reading experience inspired by old press rooms and noir storytelling.

## Vision

- Deliver thoughtful, personal criticism and commentary.
- Organize content into discoverable categories and tier lists.
- Blend modern frontend performance with a unique retro identity.
- Keep the site deployable, scalable, and maintainable for long-term publishing.

## Core Experience

- Editorial pages for movies, TV shows, anime, manga/novels.
- Tier list pages for rankings and comparisons.
- News-focused content streams and featured cards.
- Reusable newspaper-inspired UI components (masthead, section headers, banners, bylines, pull quotes).
- Progressive reading enhancements (lazy media, reading progress, spoiler blocks).

## Tech Stack

- Framework: React 19 + TypeScript
- Build Tool: Vite 8
- Routing: React Router
- Styling: Tailwind CSS + custom global CSS
- Animation: Framer Motion
- Icons: Lucide React
- 3D/visual effects: Three.js
- SEO/meta management: react-helmet-async + custom SEO utilities
- Linting: ESLint (TypeScript + React hooks/react refresh rules)
- Deployment target: Vercel

## Project Structure

```text
.
|- public/                  # Static assets (images, robots.txt)
|- src/
|  |- assets/               # Bundled static assets
|  |- components/
|  |  |- layout/            # Shell/layout components (masthead, footer, root)
|  |  |- sections/          # Home/section-level compositions
|  |  |- tierlist/          # Tier list UI blocks
|  |  |- ui/                # Shared reusable UI components
|  |- data/                 # Content/data source files (articles, tiers, categories)
|  |- hooks/                # Custom hooks (theme, search, reading progress)
|  |- pages/                # Route-level pages
|  |- styles/               # Global style layers
|  |- types/                # Shared TypeScript types
|  |- utils/                # Helpers (date formatting, SEO utils)
|  |- App.tsx
|  |- main.tsx
|  |- router.tsx
|- eslint.config.js
|- tailwind.config.js
|- vite.config.ts
|- vercel.json
```

## Scripts

- `npm run dev`: Start local development server.
- `npm run build`: Type-check and create a production build.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Run lint checks.

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production validation:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## Environment Variables

Create a `.env.example` file if you introduce runtime environment values. Keep secrets out of the repository and configure real values in Vercel Project Settings.

Recommended pattern:

```bash
# .env.example
VITE_SITE_URL=https://example.com
VITE_ANALYTICS_ID=
```

## Deployment (Vercel)

This project is Vercel-ready.

Recommended settings:

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`
- Node version: use current LTS in Vercel settings

Before pushing:

1. `npm run lint`
2. `npm run build`
3. Validate page titles/meta and Open Graph previews
4. Confirm route handling and `NotFound` page behavior

## Production Best Practices

### Performance

- Prefer code splitting for route-heavy pages and feature bundles.
- Keep images optimized (WebP/AVIF when possible) and use lazy loading.
- Avoid oversized JS bundles and audit dependencies periodically.
- Use Lighthouse and Vercel Analytics/Web Vitals to monitor regressions.
- Preload only critical fonts/assets; defer non-critical visuals.

### SEO

- Ensure each page has unique title, description, canonical URL, and social tags.
- Keep semantic heading structure (`h1` to `h3`) consistent per page.
- Maintain descriptive alt text for editorial imagery.
- Keep `robots.txt` and sitemap strategy current as pages scale.
- Use clean, stable, content-driven URLs.

### Security

- Never commit secrets or API keys (`.env*` is git-ignored).
- Sanitize and validate all externally sourced content before rendering.
- Avoid `dangerouslySetInnerHTML` unless content is trusted and sanitized.
- Set strict security headers via Vercel configuration where applicable.
- Keep dependencies updated and address audit findings quickly.

## Publishing Workflow

- Add/update content in `src/data/`.
- Reuse existing UI blocks from `src/components/ui/` and section compositions.
- Keep typography and visual language aligned with the 1940s noir-newspaper identity.
- Run lint/build checks before every push.

## Readiness Checklist

- [ ] Lint passes locally
- [ ] Production build succeeds
- [ ] Metadata verified for all indexable pages
- [ ] Images optimized and responsive
- [ ] No secrets committed
- [ ] Navigation/routes tested on mobile and desktop
- [ ] Vercel environment variables configured

## License

This project is licensed under the MIT License.

You are free to use, modify, and distribute this project for personal or commercial purposes, provided the original copyright notice and license terms are included.

If you want, I can also add a dedicated LICENSE file in the repository root with the full MIT text.
