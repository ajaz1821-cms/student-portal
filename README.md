# Student Portal

A responsive student learning dashboard with demo ID/password login, homework, classwork, performance, holiday, and notice sections.

## Demo login

- Student ID: `STU-2048`
- Password: `welcome`

## Run locally

```bash
pnpm install
pnpm dev
```

## Verify

```bash
pnpm check
pnpm test
pnpm build
```

## GitHub Pages

The repository includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`. Each push to `main` builds the client with Vite and deploys `dist/public` to GitHub Pages. The Vite base path is automatically set to `/student-portal/` in GitHub Actions so `index.html` and its assets resolve correctly from the repository site.
