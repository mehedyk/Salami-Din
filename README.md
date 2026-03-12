# 🌙 Aunik er Salami

A personal Eid salami collection page — send to everyone and collect your Eid gifts. Built with zero dependencies, single HTML file.

**Live:** [auniker-salami.netlify.app](https://auniker-salami.netlify.app)

---

## Features

- **4 beautiful themes** — Midnight, Ivory, Dusk, Grame Mosha Kom
- **Animated background** per theme (star field, firefly grid, drifting particles)
- **Banglish / English** language toggle
- **"Na Dibo Na" button** that flees on hover/tap — 10 escapes before it disappears forever
- **bKash panel** with one-tap copy number
- **Eid card generator** — canvas-drawn, theme-matched, downloadable as PNG
- **Confetti burst** on Yes click
- **Nasheed audio** per theme (plug in your own MP3 links)
- **Fully responsive** — scales from 320px phone to 1600px+ ultrawide

---

## Files

```
index.html      ← the whole app
script.js       ← the logics
styles.css      ← the stylings
README.md       ← this file
DEPLOYMENT.md   ← deployment & customisation guide
```

---

## Quick Start

Open `index.html` in any browser. No build step, no npm, no server needed.

To go live → see [DEPLOYMENT.md](./DEPLOYMENT.md).

---

## Tech Stack

| Thing | How |
|-------|-----|
| Fonts | Google Fonts (Cormorant Garamond, DM Sans, Noto Sans Bengali) |
| Background | HTML5 Canvas animation |
| Eid card | Canvas 2D API → PNG download |
| Audio | Native `<audio>` tag with direct MP3 src |
| Layout | Pure CSS — single centered card, `clamp()` fluid sizing |
| Themes | CSS class on `<body>`, switched via JS |
| Language | JS object lookup, no i18n library |

---

## Customise

All edits inside `index.html`. Use Ctrl+F to find:

| What | Search term |
|------|-------------|
| Your name | `Mehedy (Aunik)` |
| bKash number (display) | `**********` |
| bKash number (copy) | `**********` |
| No-button messages | `noMsgs:` |
| Thank-you text | `duaTxt:` |
| Nasheed audio | `<audio id="a-` |
| Default theme | `<body class="midnight">` |
| Default language | `let lang = 'bn'` |

---

*Made by [mehedyk](https://github.com/mehedyk)*