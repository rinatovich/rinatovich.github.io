# Valiakhmad Makhamatov — Personal Site

Pure static site. No build step, no dependencies, no framework.
HTML + CSS + vanilla JavaScript. **Works by double-clicking `index.html`** —
no local server required.

## Structure

```
site/
├── index.html          ← Main page (one-page layout)
├── 404.html             ← Custom error page
├── robots.txt
├── sitemap.xml
├── css/
│   └── style.css        ← All styles (design tokens at the top)
├── js/
│   └── main.js           ← Content (SITE_DATA) + all render logic
├── data/
│   └── content.json      ← Reference copy of the content (see note below)
└── assets/
    ├── favicon.svg
    └── valiakhmad-makhamatov-cv-2025.pdf  ← Replace with your real CV
```

## Why content lives in `main.js`, not `content.json`

Originally content was loaded via `fetch('data/content.json')`. That only
works when the site is served over `http://` — browsers block `fetch()` on
local files opened directly (`file://...`) for security reasons (CORS).

To make the site work by simply double-clicking `index.html`, the same JSON
data is now embedded directly inside `js/main.js` as a JavaScript constant
called `SITE_DATA`, at the very top of the file.

`data/content.json` is kept as a **clean reference copy** — easier to read,
copy from, or hand to a non-technical editor. It is not loaded by the site
itself anymore.

## How to edit content

Open `js/main.js` and find the `const SITE_DATA = { ... }` block near the
top of the file (look for the `/* ── Site content ── */` comment). Edit the
values directly — it's the same structure as `content.json`, just embedded
as JavaScript instead of fetched as a file.

**Tip:** after editing, also update `data/content.json` to match, so you
always have a clean readable backup of your content.

Every section maps to a key:

| JSON key       | Section on page         |
|-----------------|--------------------------|
| `person`         | Name, contact, social links, CV path |
| `hero`           | Hero headline, description, buttons |
| `about`          | About text + stats |
| `skills`         | Skills grid (inside About) |
| `projects`       | Case study cards |
| `certificates`   | Certification cards |
| `blog`           | Writing / article list |
| `contact`        | Contact section + form |
| `nav`            | Navigation links |

No HTML editing required for content changes. Edit the JSON, refresh the page.

### Example — adding a new project

Inside `js/main.js`, find `projects.items` array within `SITE_DATA` and add:

```js
{
  id: "new-project",
  title: "Your Project Title",
  domain: "Domain Name",
  year: "2025",
  description: "What the project was about.",
  outcome: "The measurable result.",
  tags: ["Tech1", "Tech2"],
  role: "Your Role"
}
```

## Running locally

Just open `index.html` directly in your browser — double-click it, or
drag it into a browser window. That's it. No server required.

(If you ever switch back to loading content via `fetch()`, you would need
a local server for that — but the current version doesn't need one.)

## Deployment

This is a 100% static site — deploy to any static host:

**GitHub Pages**
1. Push this folder to a repo
2. Settings → Pages → Deploy from branch → `main` / root
3. Done

**Netlify / Vercel / Cloudflare Pages**
- Drag and drop the folder, or connect the repo
- No build command needed — it's already static

**Any web server**
- Upload the contents of this folder to your web root

## Before going live — checklist

- [ ] Replace `assets/valiakhmad-makhamatov-cv-2025.pdf` with your real CV
- [ ] Update `person.email`, `linkedin`, `github` in `data/content.json`
- [ ] Update canonical URL and OG tags in `index.html` `<head>`
- [ ] Replace `og-image.png` reference with a real 1200×630 image (or remove)
- [ ] Update `sitemap.xml` and `robots.txt` with your real domain
- [ ] Update `data/content.json` to match (optional — keeps a clean backup)
- [ ] Connect the contact form to a real endpoint (see below)

## Connecting the contact form

The form currently simulates submission client-side (see `initContactForm()`
in `js/main.js`). To make it functional:

1. Create a free form at [Formspree](https://formspree.io)
2. In `js/main.js`, find `handleFormSubmit()` and uncomment the `fetch()`
   block, replacing `YOUR_ID` with your Formspree form ID
3. Remove the `setTimeout` demo block below it

## Browser support

Modern evergreen browsers (Chrome, Firefox, Safari, Edge — last 2 versions).
Uses: `fetch`, `IntersectionObserver`, `ResizeObserver`, CSS custom properties,
CSS Grid. No polyfills included — add if you need older browser support.

## Performance notes

- Single CSS file, single JS file — minimal requests
- Fonts loaded via Google Fonts CDN (swap to self-hosted for best performance)
- All animations respect `prefers-reduced-motion`
- No images required to render (hero visual is pure SVG/Canvas)
