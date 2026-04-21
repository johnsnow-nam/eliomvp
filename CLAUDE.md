# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MVP landing page for **ELIO Board** — an open hardware physical computing platform based on Nordic nRF52. Target audience: global makers, STEAM educators, AI/IoT developers. Core CTAs: buy on Tindie, star on GitHub, follow on Instructables.

The full spec is in `ELIO_MVP_Site_Spec.md`. Read it before starting any implementation.

## Build Approach

**Phase 1 (current):** Static HTML split into partials + Tailwind CSS CDN — ships as-is to GitHub Pages.

**Phase 2:** Migrate to Next.js 14 (App Router) + TypeScript + Tailwind CSS v3.

### Phase 1 Commands (modular static HTML)
No build step. `index.html` is a thin shell that loads each section from `sections/*.html` via `scripts/include.js` (fetch-based).

Because the loader uses `fetch()`, you MUST serve over HTTP — opening `index.html` directly via `file://` will hit CORS and render nothing:
```bash
npx serve .                 # or
python3 -m http.server 8080
```

### Phase 1 File Structure
```
index.html              # Shell: <head> + <div data-include="sections/*.html">
styles/
  main.css              # All custom CSS (hero glow, video player, fade-in, etc.)
scripts/
  tailwind-config.js    # tailwind.config extension (colors, fonts)
  include.js            # Injects every [data-include] partial, then fires `partials:loaded`
  main.js               # Video player, tab switcher, fade-in IntersectionObserver
sections/
  navbar.html           what-is-elio.html    how-it-works.html   musa.html
  hero.html             ai-native.html       code-your-way.html  neoflash.html
                        use-cases-video.html                     get-started.html
                        footer.html
assets/                 # All images, videos, PDFs (source of truth)
```

To add a new section: create `sections/<name>.html`, then add `<div data-include="sections/<name>.html"></div>` in `index.html` at the desired position. Any JS that runs on the DOM must wait for the `partials:loaded` event (see `scripts/main.js`).

### Phase 2 Commands (Next.js)
```bash
npm run dev           # Start dev server (localhost:3000)
npm run build         # Production build
npm run lint          # ESLint
npm start             # Serve production build
```

## Site Architecture (7 Sections)

Each section has distinct background colors that alternate:
1. **Hero** — dark (`#0F172A`), headline + 2 CTAs + 4 spec badges
2. **What is ELIO** — white, product description + spec table
3. **How It Works** — light gray, 3-step connection flow diagram (SVG)
4. **Code Your Way** — dark, 6-platform grid + tabbed code snippets (Python / Arduino / Claude AI)
5. **AI-Native** — white, 3 AI integration cards (Claude MCP, Gemma4+Ollama, Teachable Machine)
6. **Use Cases** — light gray, 5 cards (AI Robot, Drone, Smart Farm, STEAM Education, RC Upcycling)
7. **Get Started** — dark, 3 CTA cards (Buy / Learn / Community)
8. **Footer** — 4-column links + copyright

## Design System

**Colors:**
- Primary: `#1D4ED8` (ELIO Blue)
- Secondary: `#10B981` (Emerald)
- Accent: `#F59E0B` (Amber)
- Dark bg: `#0F172A`
- Light bg: `#F8FAFC`

**Typography:** Inter (headings + body), JetBrains Mono (code blocks)

**Icons:** Lucide React (Next.js) or Lucide CDN (HTML)

**Code blocks:** syntax-highlighted dark theme (Prism.js or Shiki)

## Next.js File Structure (Phase 2)

```
app/
  page.tsx           # Assembles all section components
  layout.tsx         # SEO meta, fonts
  globals.css
components/
  Hero.tsx
  WhatIsElio.tsx
  HowItWorks.tsx     # SVG connection diagram
  CodeYourWay.tsx    # Tabbed code snippets
  AINative.tsx
  UseCases.tsx
  GetStarted.tsx
  Footer.tsx
public/
  elio-board-hero.png   # High-res board photo (transparent bg)
  elio-logo.svg
  og-image.png          # 1200×630 for OG tags
```

## Key External Links

| Resource | URL |
|---|---|
| GitHub | https://github.com/johnsnow-nam |
| PyPI | https://pypi.org/project/elio/ |
| Scratch GUI | https://johnsnow-nam.github.io/scratch-gui/ |
| YouTube | https://youtube.com/@boxfighter |
| Current site | https://mobilian.biz |
| MCP (buddy-mcp) | Listed on Anthropic MCP Registry |

Tindie store URL and Instructables URL are TBD — use `#` as placeholder.

## Assets Status

All media lives in `assets/` (single source of truth). Key files currently wired in:

| File | Used in |
|---|---|
| `elio-board.png` | What is ELIO section (product photo) |
| `elio-showcase.mp4` | Use Cases video section |
| `ble-dongle.png` | Code Your Way — BLE Dongle callout |
| `musa-board.png` | MUSA section |
| `neoflash-banner.png`, `neoflash-diagram.png` | neoFlash × ELIO section |
| `elio-manual.pdf` | Footer → Download Manual |

Additional assets staged for future use: `elio-board-cover.png`, `elio-board.jpeg`, `elio-ecosystem-cards.png`, `elio-with-dongle.png`, `elio-works.mp4`, `musa-product.png`, `nrf52840-dongle.png`, `elio-intro.mp4`.

Still missing (placeholder until designer provides):
- `og-image.png` — 1200×630 social sharing image
- `elio-logo.svg`

## SEO Metadata

```
title: ELIO Board — AI-Native Physical Computing Platform
description: Open hardware platform that connects any AI to any motor. Control robots with Claude AI, Python, Scratch, or your smartphone. BLE + LoRa + Arduino.
og:title: ELIO Board — Build your AI. Move your world.
og:url: https://eliotobot.com  (TBD)
```
