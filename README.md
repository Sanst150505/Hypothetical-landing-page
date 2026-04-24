# KRAZE K1 Showcase

A polished product showcase site for the fictional `KRAZE K1` smartphone, built with React, TanStack Start, Vite, and Tailwind CSS.

The project includes:

- a redesigned landing page
- an edition overview page
- a full specifications page
- a reservation form
- Vercel-ready deployment setup using Nitro

## Live Preview

- Deployed page: [KRAZE K1 Specifications](https://hypothetical-landing-pa-git-17d2fb-sannidhyas-projects-0787943f.vercel.app/specifications)

## Tech Stack

- React 19
- TanStack Start
- TanStack React Router
- Vite
- Tailwind CSS v4
- Nitro
- TypeScript

## Project Structure

```text
src/
  assets/              Images used across the showcase
  components/
    site-footer.tsx    Shared footer
    site-nav.tsx       Shared navigation
  routes/
    __root.tsx         Root document shell
    index.tsx          Homepage
    edition.tsx        Edition page
    specifications.tsx Specifications page
    acquire.tsx        Reservation page
  styles.css           Global design system and shared utility classes
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Available Scripts

- `npm run dev` starts the development server
- `npm run build` creates the production build
- `npm run preview` previews the production build
- `npm run lint` runs ESLint
- `npm run format` formats the codebase with Prettier

## Deployment

This project is configured for Vercel using `TanStack Start + Nitro`.

Important config:

- [vite.config.ts](C:\Users\Sannidhya Tiwari\OneDrive\Desktop\launchpad-showcase\vite.config.ts) uses:
  - `tanstackStart()`
  - `nitro()`

### Recommended Vercel Settings

- Framework Preset: `Other`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: leave empty

If your repository contains this app inside a subfolder, set Vercel's `Root Directory` to that folder. If the repo opens directly to this project, leave the root directory empty.

## Design Notes

The site was cleaned up to avoid template-like UI and keep the layout more intentional:

- calmer typography scale
- better image framing and spacing
- more structured cards and content sections
- cleaner form styling
- simplified navigation and footer

## Main Pages

- `/` homepage
- `/edition` edition and launch details
- `/specifications` full specification sheet
- `/acquire` reservation flow

## Troubleshooting

### Vercel shows `404: NOT_FOUND`

Common causes:

- wrong Vercel root directory
- project connected to the wrong repo or branch
- old deployment still being served
- missing Nitro-based TanStack Start setup

Verify:

1. the connected GitHub repo is correct
2. the production branch is `main`
3. the root directory is correct
4. Vercel is building the latest commit

### Local build check

Run:

```bash
npm run build
```

If this succeeds locally, most deployment problems are usually caused by Vercel project settings rather than app code.

## License

This project is for showcase and learning purposes.
