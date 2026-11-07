# Field Notes — Electrodynamics on a watch

A dependency-free static study website designed for a small round watch browser, with 40 cards across 13 topics. SI formulas, explanations, assumptions, worked examples, search, saved cards, adjustable type, formula-only mode, and offline caching. No backend, keys, database or account needed.

## Open locally

Open `public/index.html` directly for a quick read. Offline caching requires HTTPS or localhost. To test locally: `python3 -m http.server 8000 --directory public`, then visit `http://localhost:8000`.

## GitHub and Render

1. Create a GitHub repository named `electrodynamics-watch` (or another name).
2. Upload this folder's contents, preserving `public/` and `render.yaml` at the repository root. Do not upload only the ZIP.
3. In Render, create a **Static Site** and connect that repository.
4. Build command: `echo 'Static files ready'`
5. Publish directory: `public`
6. Deploy, then open the resulting HTTPS URL in a browser on the watch. Bookmark it there.

Alternatively, create a Render Blueprint from the repository; `render.yaml` contains the static-site configuration. No paid service is required by this configuration. Review any account-specific billing prompts before accepting them.

Official guide: https://render.com/docs/static-sites

## Watch reading

This targets a browser, not a native Wear OS app. Actual compatibility depends on the watch browser. In **Aa**, toggle round-screen margins and set text from 16 to 26 px. The small-screen default enables round margins. Use Topics and the large Previous/Next buttons; typing is optional. Bookmarks and preferences use local browser storage. Without storage, reading still works but preferences may not persist.

Offline caching is supported only if the browser allows service workers. After a successful online load, the footer says “Ready for offline reading.” Visit the site once online before relying on it offline. Saved cards and content are not synced across devices.

## Content and maintenance

`public/content.js` contains all 40 cards. Edit it directly or edit `make_content.py` and run `python3 make_content.py` from this folder to regenerate it. For content releases, bump the cache name in `public/sw.js`. The worker uses network-first loading and retains cached content as fallback.

The notes are original summaries of standard electrodynamics. They are a compact companion, not a complete graduate textbook or a guarantee of a particular exam syllabus. Further reading is linked in the site. Formulas explicitly distinguish vacuum, material, static, wave and radiation approximations.

## Verification

JavaScript syntax and content completeness checked in the delivered version. Real-watch testing remains necessary; screen shape, font rendering and browser caching behavior differ by device.

## Typeset equations

Displayed formulas use bundled SVGs, pre-rendered with MathJax 3.2.2. They remain sharp when text size changes and are precached for offline reading. Long equations scroll horizontally without shrinking. Plain-text alternatives are preserved for accessibility, search, and image-load failures. Card 40 contains prose, not equations.

To edit equations, update `scripts/equations.json` and the corresponding plain-text formulas in `public/content.js` (or `make_content.py`). Run `npm ci` and `npm run render:math`, then bump the service-worker cache version. Commit the generated `public/math/`, `public/math-index.js`, and `public/sw.js` files. Render can still use the no-op build command because generated assets are committed.
