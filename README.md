# New Next.js Website Starter

Technical baseline for a brand-new website project using Next.js App Router + TypeScript, with CI and Netlify deployment setup.

## Stack

- Next.js (App Router)
- TypeScript
- ESLint (flat config)
- GitHub Actions CI
- Netlify build config

## Project Structure

- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/globals.css`
- `public/brand/*`
- `.github/workflows/ci.yml`
- `netlify.toml`
- `eslint.config.mjs`
- `package.json`
- `tsconfig.json`
- `next-env.d.ts`
- `next.config.ts`
- `.gitignore`

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`

## Quality Gates

Both commands must pass locally and in CI:

- `npm run lint`
- `npm run build`
