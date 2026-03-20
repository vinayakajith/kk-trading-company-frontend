# K K Trading Company — Website

Official website for **K K Trading Company**, wholesalers and exporters of premium rice and spices from Kerala, India. The company has over 150 years of agricultural heritage, sourcing Palakkadan Matta rice, raw rice, broken rice, green cardamom, black pepper, and cloves directly from farmers.

**Live site:** https://kktcglobal.com

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 18 |
| Routing | React Router v7 |
| Build Tool | Vite 5 + SWC |
| Styling | Plain CSS (single global stylesheet) |
| Fonts | Google Fonts — Playfair Display, Inter |
| Deployment | Vercel |

No external UI libraries. No TypeScript. No state management library — just React `useState`/`useEffect`.

---

## Project Structure

```
/
├── index.html                  # Entry HTML — SEO meta, OG tags, JSON-LD schema
├── vercel.json                 # Vercel SPA rewrite config
├── netlify.toml                # Legacy Netlify config (kept for reference)
├── vite.config.js              # Vite config (minimal, SWC plugin)
├── package.json
│
├── public/
│   ├── favicon.svg
│   ├── robots.txt              # Crawl rules + sitemap pointer for Google
│   └── sitemap.xml             # All page URLs for Google indexing
│
└── src/
    ├── main.jsx                # App entry point — mounts BrowserRouter
    ├── App.jsx                 # Route definitions + HomePage + PageWrapper
    ├── index.css               # All styles (~3000 lines) — global + responsive
    │
    ├── assets/
    │   └── images/             # All product and hero images
    │       ├── heroimagefinal.jpg          # Hero section background (preloaded by splash)
    │       ├── kerala_red_rice_matta.jpeg  # Palakkadan Matta rice
    │       ├── white-rice.jpg              # Raw white rice
    │       ├── broken_rice.jpg             # Broken rice
    │       ├── cardamom.jpg                # Green cardamom
    │       ├── pepper.jpg                  # Black pepper
    │       ├── cloves.jpg                  # Cloves
    │       ├── farmer_hands_rice.png       # Heritage section + About page
    │       ├── closeup-chinese-plant-healthy-ripe.jpg  # Product strip (raw rice visual)
    │       └── hero_rice_field.png         # About page hero background
    │
    ├── components/
    │   ├── Navbar.jsx          # Top nav bar (fixed, always visible) + mobile hamburger drawer
    │   ├── Loader.jsx          # Splash screen (shown on first home page load)
    │   ├── Loader.css          # Splash screen styles (fade animation)
    │   ├── Hero.jsx            # Full-screen hero section with CTA buttons
    │   ├── ProductStrip.jsx    # Horizontal scrollable product icon strip
    │   ├── Heritage.jsx        # "Our Heritage" section with stats
    │   ├── Products.jsx        # Home page product teaser cards
    │   ├── Process.jsx         # "How We Work" 4-step process section
    │   ├── Buyers.jsx          # Who buys from us (hidden on mobile)
    │   ├── Contact.jsx         # Contact form + contact details
    │   ├── Footer.jsx          # Site footer
    │   └── BackToTop.jsx       # Floating back-to-top button
    │
    ├── pages/
    │   ├── ProductsPage.jsx    # Full product catalogue (/products) — sets its own <title>
    │   └── AboutPage.jsx       # Company story, timeline, values (/about) — sets its own <title>
    │
    └── utils/
        └── contact.js          # Contact detail helpers (char-code obfuscated to block scrapers)
```

---

## Pages & Routes

| Route | Component | Page Title |
|---|---|---|
| `/` | `HomePage` | K K Trading Company \| Premium Rice & Spices Exporters from Kerala, India |
| `/products` | `ProductsPage` | Products — Rice & Spices \| K K Trading Company |
| `/about` | `AboutPage` | Our Heritage \| K K Trading Company |

`ProductsPage` and `AboutPage` are **lazy-loaded** — they are not included in the initial JS bundle and only download when the user first navigates to those routes.

Each inner page sets `document.title` via `useEffect` on mount and resets it on unmount (no react-helmet needed).

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts the dev server at `http://localhost:5173` with hot module replacement.

### Production Build

```bash
npm run build
```

Output goes to `dist/`. Vite automatically fingerprints asset filenames for cache-busting.

### Preview Production Build Locally

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Deployment

The site is deployed on **Vercel** via `vercel.json`:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

The rewrite rule is required for React Router's client-side routing — without it, refreshing `/products` or `/about` directly would return a 404.

**To deploy:** connect the repo to Vercel. It auto-detects Vite, runs `npm run build`, and serves from `dist/`. No extra configuration needed beyond `vercel.json`.

---

## SEO

### What's configured

| Element | Detail |
|---|---|
| `<title>` | Unique per page — set in `index.html` for home, `useEffect` in inner pages |
| `meta description` | Configured in `index.html` for home page |
| `meta keywords` | Configured in `index.html` |
| `canonical` | Points to `https://kktcglobal.com/` |
| Open Graph tags | `og:title`, `og:description`, `og:url`, `og:locale`, `og:site_name` |
| Twitter Card | `twitter:card`, `twitter:title`, `twitter:description` |
| JSON-LD schema | `LocalBusiness` type with name, address, phone, email, founding date, area served |
| `robots.txt` | `public/robots.txt` — allows all crawlers, points to sitemap |
| `sitemap.xml` | `public/sitemap.xml` — lists all 3 routes with priority |

### Missing / to add manually

**OG image** — social shares (WhatsApp, Facebook) currently show no preview image. To fix:
1. Put a 1200×630px image at `public/og-image.jpg`
2. Add to `index.html`:
```html
<meta property="og:image" content="https://kktcglobal.com/og-image.jpg">
<meta name="twitter:image" content="https://kktcglobal.com/og-image.jpg">
```

### Post-launch checklist (outside code)

1. **Google Search Console** — add property `https://kktcglobal.com`, verify ownership, submit sitemap at `https://kktcglobal.com/sitemap.xml`
2. **Google Business Profile** — create a free listing at business.google.com with the company address; this surfaces the company in Maps and the Google knowledge panel
3. **External listings** — add `kktcglobal.com` as the website URL on any IndiaMART, Justdial, or TradeIndia profiles

---

## Key Architecture Notes

### Splash Screen (`App.jsx` + `Loader.jsx`)

The homepage shows a splash screen on first load. It preloads the hero background image before dismissing:

- **Min display time:** 800ms — always feels intentional, never just a flash
- **Max display time:** 2500ms — hard cap, page always appears even on slow connections
- **Error-safe:** `img.onerror` also dismisses — the splash can never permanently hang
- Fade-out duration is 600ms (CSS `transition` in `Loader.css`)

### Navigation (`Navbar.jsx`)

Two navigation modes depending on viewport:

1. **Desktop (> 768px):** Horizontal nav bar — logo left, links right. Always fixed at top.
2. **Mobile (≤ 768px):** Same fixed top bar. Hamburger icon opens a full-height dark drawer that slides in from the right, starting below the navbar.

The navbar is always visible on scroll on all screen sizes (`position: fixed`, no hide-on-scroll behaviour).

### Scroll Animations (`App.jsx`)

Elements with the class `.reveal-up` or `.stagger-children` animate in when they enter the viewport. A single `IntersectionObserver` instance per page handles all of them and is cleaned up on unmount. No animation library required.

### Contact Detail Obfuscation (`utils/contact.js`)

Phone numbers and email addresses are stored as char-code arrays and assembled at runtime. This prevents automated scrapers from harvesting them out of the HTML source.

### CSS Architecture

All styles live in `src/index.css` — one file (~3000 lines), organised by section with clear comment headers. Responsive breakpoints:

| Breakpoint | Target |
|---|---|
| `> 992px` | Desktop |
| `≤ 992px` | Tablet |
| `≤ 768px` | Mobile |
| `≤ 400px` | Small phones |

All colours, fonts, spacing, shadows, and transitions are defined as CSS custom properties in `:root` and referenced consistently throughout.

---

## Business Information

| Field | Value |
|---|---|
| Company | K K Trading Company |
| Location | 27/188J, Pazhaveed, Alappuzha, Kerala 688009, India |
| Phone | +91 98460 92242 |
| Email | kktradingco.kerala@gmail.com |
| Website | https://kktcglobal.com |
| Founded | ~1870 (150+ years in agriculture) |

**Products:**
- Palakkadan Matta Rice (Kerala Red Rice / Rosematta)
- Raw White Rice
- Broken Rice
- Green Cardamom
- Black Pepper
- Cloves

---

## Handoff Notes

- **No `.env` files needed** — no secret keys or API credentials required to run the project
- **Contact form** (`Contact.jsx`) builds a `mailto:` link using `utils/contact.js` — no backend needed, it opens the user's email client
- **Images** are all in `src/assets/images/` and imported directly in components — Vite handles hashing and optimisation at build time
- **`dist/` is gitignored** — run `npm run build` to regenerate it before any manual deploy
- **Google Fonts** are loaded via `<link>` in `index.html` — no npm package
- **JSON-LD structured data** in `index.html` is pre-filled with real business details for Google Search rich results
- **SEO files** (`robots.txt`, `sitemap.xml`) live in `public/` and are served at the root by Vercel — no build step needed
