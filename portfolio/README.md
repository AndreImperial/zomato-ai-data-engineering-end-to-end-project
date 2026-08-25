# Zomato AI Data Engineering portfolio

Static recruiter-facing case study for the end-to-end Zomato data platform. It is isolated from the pipeline in `/portfolio` and does not connect to Snowflake or load project credentials.

## Run locally

Requirements: Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. For a production check:

```bash
npm run build
npm run preview
```

The generated static site is written to `dist/`.

## Deploy free on Vercel

1. Import the GitHub repository in Vercel.
2. Set **Root Directory** to `portfolio`.
3. Keep the detected framework as **Vite**.
4. Use build command `npm run build` and output directory `dist`.
5. Deploy. No environment variables are required.

## Netlify alternative

Create a site from the repository with base directory `portfolio`, build command `npm run build`, and publish directory `portfolio/dist` if Netlify resolves paths from the repository root, or `dist` if it resolves them from the base directory.

## GitHub Pages alternative

Build with the repository subpath so asset URLs resolve correctly:

```bash
VITE_BASE_PATH=/zomato-ai-data-engineering-end-to-end-project/ npm run build
```

Publish the contents of `portfolio/dist` with a Pages workflow. Vercel is the simplest option because it needs no base-path override.

## Content notes

- Dashboard figures shown in the website preview are explicitly illustrative.
- The architecture and project claims are derived from the repository.
- No `.env`, dbt profile, API key, warehouse credential, or production dataset is bundled into the site.
