# HolyCRM.app — Help Center

The end-user help site for [HolyCRM.app](https://www.holycrm.app), served at
`https://docs.holycrm.app`: Markdown pages for church staff and volunteers using the app.
A standalone static site with no build framework. The app's header links here
(`CONFIG.HELP_URL` in the app repo, with `?lang=`), and the marketing site links to guides
by page id.

## Layout

| Path | What it is |
|---|---|
| `content/manifest.json` | Source of truth: locales, categories and page titles, keyed by page id. |
| `content/<locale>/<page>.md` | One file per page and locale: `en`, `es`, `pt-BR`, `pt`. |
| `index.html`, `assets/help.js`, `assets/help.css` | The renderer (hash routing, `marked` from a CDN). |
| `assets/content-data.js` | **Generated.** All content inlined, so the site works without `fetch()`. |
| `llms.txt`, `llms-full*.txt`, `sitemap.xml` | **Generated** for AI assistants and search engines. |
| `generate-content-data.js` | The generator for the three rows above. |

## After editing content

```bash
node generate-content-data.js
```

Commit the generated files together with the Markdown. To preview, run
`python3 -m http.server 8000` in this folder (`file://` also works).

## Writing rules

- Write for the person using the app: no file paths, no collection or field names, no
  implementation detail.
- Evangelical/protestant vocabulary (culto, pastor, líder, célula, ofrenda, diezmo), never
  Catholic-specific terms.
- Change all four locale folders in the same commit. If only English is ready, leave the
  other files missing: the site falls back to English rather than showing a stale copy.
- A new page needs a `manifest.json` entry with all four titles, and the matching module's
  `helpPage` in the app repo's `config/modules.json`.
- Renaming a page id breaks links from the app and the marketing site (`data-docs="<id>"`).
