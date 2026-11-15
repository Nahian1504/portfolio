# Nahian Tasnim — Portfolio

A personal portfolio site built with React, Vite, and React Router, showcasing my background in machine learning, statistical modeling, and data analysis.

**Live site:** https://Nahian1504.github.io/portfolio/
**Repository:** https://github.com/Nahian1504/portfolio

## Tech stack

- React (function components + Hooks)
- Vite (dev server, build tooling)
- React Router v7 (HashRouter, for compatibility with GitHub Pages' lack of server-side rewrites)
- Plain CSS (no framework)

## Features

- **Home** — introduction and target role.
- **Experience** — education, skills, and work/research experience.
- **Projects** — a searchable list of project cards, filtered live by title, category, or technology (controlled input + `useState`).
- **Project detail** — a dynamic route (`/projects/:slug`) rendering problem, role, approach, and outcome for each project from a single shared component.
- **Contact** — links to reach me or see more of my work.
- **404 handling** — both an unknown route (`*`) and an unknown project slug show a friendly "not found" message instead of a blank page.

## Extension implemented: Persistent theme toggle

A `ThemeToggle` component (`src/components/ThemeToggle.jsx`) lets visitors switch between light and dark mode. The choice is:
- Applied immediately via a `data-theme` attribute on `<html>`.
- Persisted in `localStorage`, so it survives a page refresh.
- Mounted in the shared `Layout`, outside the routed `<Outlet />`, so it stays active across every page.

**Tested:** toggled dark mode on, refreshed the page (stayed dark), navigated between all four pages (stayed dark on each).

## Project structure

```
src/
  components/   Layout.jsx, ProjectCard.jsx, ThemeToggle.jsx
  pages/        BasicPages.jsx (Home/Experience/Contact/NotFound), Projects.jsx, ProjectDetail.jsx
  data/         projects.js
```

## Running locally

```
npm install
npm run dev
```

## Building and deploying

```
npm run build
npm run preview
```

Deployment to GitHub Pages is automated: every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` via GitHub Actions.

## Notes

- Routing uses `HashRouter` (not `BrowserRouter`) because GitHub Pages has no server-side rewrite rule — this lets a direct refresh on a nested route like `/projects/cloud-saver-aws-optimizer` work correctly.
- The Vite `base` path in `vite.config.js` is set to `/portfolio/` to match this repository's name.
