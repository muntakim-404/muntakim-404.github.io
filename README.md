# H M Muntakim Rahman: portfolio

A single-page portfolio built with React and Vite. All text, links and lists live in `src/content.js`, so updating the site means editing that one file.

## Before you publish

1. Export your CV from Overleaf as a PDF.
2. Rename it to `H_M_Muntakim_Rahman_CV.pdf` and put it in the `public/` folder. The "CV (PDF)" and "Download my CV" buttons link to it, so they won't work until it's there.

## Publish on GitHub Pages (recommended)

This gives you `https://muntakim-404.github.io`, which is the address to put on your CV.

1. On GitHub, create a new **public** repository named exactly `muntakim-404.github.io`. Leave it empty (no README).
2. From this folder, run:

   ```bash
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/muntakim-404/muntakim-404.github.io.git
   git push -u origin main
   ```

3. In the repository, open **Settings > Pages**, and under **Build and deployment** set **Source** to **GitHub Actions**.
4. Open the **Actions** tab and wait for "Deploy to GitHub Pages" to finish (about a minute). The site is then live at `https://muntakim-404.github.io`.

Every later push to `main` redeploys the site.

## Or publish on Vercel

Import the repository at vercel.com/new. Vercel detects Vite on its own; keep the default settings and press Deploy. You get an address like `your-project.vercel.app`, and you can rename the project to get a cleaner one.

## Run it on your computer

Needs Node.js 20 or newer.

```bash
npm install
npm run dev      # opens a live-reloading preview at http://localhost:5173
npm run build    # production build into dist/
```

## Where things are

| File | What it holds |
| --- | --- |
| `src/content.js` | Every piece of text, link, project, date and skill |
| `src/App.jsx` | Page structure and components |
| `src/styles.css` | Colours, type and layout (tokens at the top) |
| `public/` | Files served as-is: favicon and your CV PDF |
| `.github/workflows/deploy.yml` | Automatic GitHub Pages deployment |

## Adding a project

Add an object to the `projects` list in `src/content.js`. The `result` field is optional: give it a caption and two or more bars only when you have a real, like-for-like comparison to show.
