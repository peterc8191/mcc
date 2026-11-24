# Michael Connolly Contracts (mcc)

Marketing site for Michael Connolly Contracts, a construction company based in Dundalk, Ireland. Built with Create React App and MUI, deployed to GitHub Pages at the custom domain configured in `public/CNAME`.

## Site structure

- `src/pages/` — routed pages: `home.jsx` (`/`), `projects-listing.jsx` (`/projects`), `not-found.jsx` (catch-all).
- `src/components/layout.jsx` — shared shell (nav bar + page content + footer) rendered for every route.
- `src/components/nav-bar.jsx` — sticky top navigation, collapses to a `Drawer` menu on mobile.
- `src/data/projects.js` — the "Projects Completed" content: a plain array of `{ id, image, category }` objects, rendered as a photo gallery on the home page and the `/projects` page via `src/components/gallery-item.jsx`. **To add a completed project, add real photos to `src/images/` and add an entry here** — there's no CMS or backend, and no per-project detail pages (the gallery only ever shows the photo and a category label, since no per-job details like location/date/client are tracked yet).
- `src/theme.js` — the site's MUI theme (colors only, no component overrides).
- Contact information lives only in the footer (`src/components/footer.jsx`); the nav's "Contact" link scrolls to it rather than navigating to a separate page.

Routing is handled by `react-router-dom` (`BrowserRouter`). Because GitHub Pages serves static files with no server-side rewrites, a direct visit or refresh on `/projects` is handled by the standard SPA-fallback trick: `public/404.html` redirects unmatched paths back to `/` with the original path encoded in the query string, and an inline script in `public/index.html` decodes it back via `history.replaceState` before React mounts. Both files are static and require no build configuration.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
