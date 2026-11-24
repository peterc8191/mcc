# Michael Connolly Contracts website

Live at https://www.connollycontracts.ie/ (GitHub Pages with a custom domain, see `public/CNAME`).

Built with Vite, React 18 and React Router.

```bash
npm install
npm run dev      # local dev server
npm run build    # outputs dist/ (index.html is copied to 404.html for client-side routes)
npm run deploy   # builds and publishes dist/ to the gh-pages branch
```

Project photos live in `public/images/projects/<slug>/`; project data is in `src/data/projects.js`.
