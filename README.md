# Electromagnetism · Field Notes

A simple, responsive electromagnetism study website optimized for desktop, phones, and small smartwatch browsers.

**Live URL after enabling GitHub Pages:** https://geeeooooo.github.io/EM/

## Scope of version 1

- Divergence theorem and Stokes' theorem with both forward and reverse derivations.
- Four Maxwell equations in vacuum, differential and integral forms.
- Four Maxwell equations in matter, differential and integral forms.
- Explicit conversions both directions for electric Gauss, magnetic Gauss, Faraday, Ampère–Maxwell; separate material conversions for D and H.
- Derivation of macroscopic equations using polarization and magnetization.
- Boundary conditions, source-free vacuum wave equation, and a concise Poynting theorem statement.

The site uses **MathJax 3** (SVG rendering) to typeset LaTeX. The MathJax library is fetched from jsDelivr: the first load and refresh require internet access. The source is plain HTML, CSS and JavaScript; no build command, database, Render deployment or node dependencies.

## Publish directly from GitHub

1. Open this repository's **Settings → Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Choose **main** and **/(root)**, then **Save**.
4. Visit https://geeeooooo.github.io/EM/ once GitHub reports that the site is published.

Opening the website on a Galaxy Watch browser works like any other HTTPS website. Bookmark it for quick access. Long equations scroll horizontally; derivations are collapsible; the text size controls can be used on the watch.

## Edit the content

- `index.html`: chapters, steps, equations, MathJax configuration.
- `style.css`: layout and watch breakpoints.
- `app.js`: search/filter and font-size controls.

Equation delimiters: `\(...\)` for inline and `\[...\]` for displayed mathematical expressions.

> This commit intentionally replaces the prior EM repository tree, as requested. Previous content remains recoverable through Git history. No live-device verification is implied.
