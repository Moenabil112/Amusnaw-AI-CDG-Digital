# Amusnaw AI SA — Institutional Digital Window

A premium, controlled institutional single-page web application for **Amusnaw AI SA**, a Moroccan Mining-Tech Data Infrastructure SPV proposed to be co-built with **CDG**.

It is a **controlled institutional digital window** — not a public website, fundraising page, or marketing site. Its purpose is to let CDG or an institutional reviewer understand the opportunity in roughly three minutes, before incorporation and execution.

> Source of truth: the approved package in `public/documents/` (the 10 strategic `.md` files). The interface does not invent claims or change the strategic architecture.

---

## 1. Project structure

```
.
├── index.html                 # App shell, fonts, meta (noindex)
├── tailwind.config.js         # Custom color tokens + fonts
├── vite.config.ts
├── public/
│   ├── favicon.svg
│   └── documents/             # The 10 approved source documents (gated references)
└── src/
    ├── main.tsx               # React entry
    ├── App.tsx                # Section composition root
    ├── index.css              # Tailwind layers + design system primitives
    ├── i18n/
    │   ├── index.tsx          # Language provider (localStorage + dynamic lang/dir), t() / useT()
    │   └── strings.ts         # EN/AR/FR UI chrome dictionary (LocalizedText)
    ├── data/                  # Typed content — single source of truth for the UI
    │   ├── entity.ts
    │   ├── nav.ts
    │   ├── products.ts
    │   ├── isseksi.ts
    │   ├── aguelmous.ts       # Aguelmous (PR3538746) demonstrator content + metadata
    │   ├── aguelmousGeo.ts    # GeoJSON layer (null placeholder — no invented boundaries)
    │   ├── hyrionFunctions.ts
    │   ├── qassasModules.ts
    │   ├── strategicThesis.ts
    │   ├── roadmap.ts
    │   ├── shareholding.ts
    │   ├── documents.ts
    │   └── accessLevels.ts    # Access + status taxonomy (access is simulated)
    └── components/
        ├── Header.tsx         # Sticky nav, active-section highlight, language switcher, mobile menu
        ├── Hero.tsx
        ├── StrategicThesis.tsx
        ├── CDGEntry.tsx
        ├── LaunchProducts.tsx
        ├── IsseksiSection.tsx
        ├── AguelmousSection.tsx   # map-left / narrative-right + access-gated metadata drawer
        ├── AguelmousMap.tsx       # lightweight SVG GeoJSON renderer + region-context placeholder
        ├── Tilt.tsx               # desktop-only 3D card tilt (disabled on touch / reduced-motion)
        ├── ScrollProgress.tsx     # scroll-progress indicator
        ├── HyrionSection.tsx
        ├── QassasSection.tsx
        ├── Roadmap.tsx
        ├── Shareholding.tsx
        ├── DocumentCenter.tsx # Category filters + controlled preview modal
        ├── AccessRequest.tsx  # mailto submission + static confirmation
        ├── Footer.tsx
        ├── Wordmark.tsx
        ├── Reveal.tsx         # Subtle Framer Motion scroll-in
        ├── SectionTitle.tsx
        ├── StatusBadge.tsx
        ├── AccessBadge.tsx
        └── MetricCard.tsx
```

**Stack:** React 18 · TypeScript · Vite 5 · Tailwind CSS 3 · Framer Motion · Lucide React. Frontend-only (no backend in v0.1).

---

## 2. Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

Other scripts:

```bash
npm run build      # type-check (tsc -b) + production build to dist/
npm run preview    # preview the production build
npm run lint       # type-check only (tsc --noEmit)
```

**Deployment:** the `dist/` output is static. Deploy on Vercel or Netlify with build command `npm run build` and output directory `dist`.

---

## 3. How to add documents

1. Drop the file into `public/documents/`.
2. Add a card entry to `src/data/documents.ts`:

```ts
{
  id: "unique-id",
  number: "11",
  title: "New Document",
  category: "Strategic Entry",        // must be one of DocCategory
  status: "draft",                    // StatusKey
  access: "controlled",               // AccessKey — controls lock indicator
  description: "Short institutional description.",
  file: "/documents/11_NEW_DOCUMENT.md",
}
```

The Document Center renders cards, category filters, status/access badges, and a controlled preview modal automatically. Preview/download stay disabled by design until real gating exists (see §6).

---

## 4. How to update product cards

Edit `src/data/products.ts`. Each product drives the **Launch Products** cards and links to its dedicated section. The deep sections pull copy from `src/data/isseksi.ts` and `src/data/aguelmous.ts` — edit those to change the feature cards, modules, outputs, validation phases, and Aguelmous map metadata. No component code changes required.

**Aguelmous map / GeoJSON:** there is no verified GeoJSON for permit PR3538746 in the repo or source package, so the map renders a region-context placeholder marked *"GeoJSON layer pending controlled data import"* — no boundaries are invented. To activate the real layer, drop the controlled `FeatureCollection` into `src/data/aguelmousGeo.ts` (assign `aguelmousGeoJson`); `AguelmousMap.tsx` already projects Polygon/MultiPolygon/Point/LineString geometry into its SVG viewbox — no component change needed. The permit number appears only in the access-gated metadata drawer / detail badge.

---

## 5. How access levels are simulated

There is **no authentication** in v0.1. Access is communicated, not enforced:

- `src/data/accessLevels.ts` defines the taxonomy: `pre-nda · controlled · nda · cdg-review · legal-review`, each with a label, color, lock flag, and description.
- `<AccessBadge>` shows the label and a lock icon when the level is `locked`.
- Locked materials (product room, GIS data, document preview/download) render **disabled** controls plus a **"Request Access"** path.
- The Access Request section explains that access is reviewed manually for institutional purposes.

Status labels (`ready · draft · planned · cdg-review · technical-review · legal-review`) are separate from access and shown via `<StatusBadge>`.

---

## 6. Future path (HYRION integration)

The simulation is structured to be replaced by real infrastructure without a rebuild:
real authentication, role-based access, an evidence registry (the `EvidenceItem` shape in the HYRION note), document versioning, NDA tracking, and access logs. The `file` references, access levels, and decision-gate language are already in place as the seam.

---

## 7. Trilingual interface (EN / AR / FR)

The interface is **fully trilingual** — English (default), Arabic (RTL), and French (formal institutional wording). There is no mixed-language or partial content: every user-visible string is translated in all three languages.

- `src/i18n/index.tsx` provides `LanguageProvider`, `useLanguage()`, the `t()` resolver, and the `useT()` hook. The selected language is **persisted in `localStorage`** (`amusnaw.locale`) and restored on load; `document.lang` and `document.dir` are set dynamically.
- Selecting **AR** flips the document to `dir="rtl"` and switches to the Arabic font (Cairo). Components use logical CSS utilities (`ps/pe`, `ms/me`, `start/end`, `text-start/text-end`) so layout mirrors correctly.
- Static UI chrome lives in `src/i18n/strings.ts` as `LocalizedText` (`{ en, ar, fr }`); structured content (modules, cards, roadmap, documents) is translated inline in the `src/data/*` files.
- Brand/defined terms are intentionally kept canonical across all languages: Amusnaw AI SA, CDG, HYRION, QASSAS, Isseksi, PR3538746, Atlas Mining, ZYNTRA, AKANIL, GIS/IP/AI/MVP/R&D, USD figures, and element symbols.
- A completeness check (EN=AR=FR counts per file) is part of the pre-deploy checklist; `t(value, locale)` still falls back to English if a field is ever left blank.

---

## 8. Assumptions made

- **English is the default display language**, with Arabic (RTL) and French fully translated. The selected language persists across visits via `localStorage`.
- **Contact:** `akanil.consulting@proton.me` in `src/data/entity.ts`. The access form opens a pre-filled `mailto:` to this address and stores nothing (no backend).
- **No backend / no analytics.** The page is marked `noindex,nofollow` to reinforce its controlled (non-public) nature.
- **GIS, product room, and document preview/download are intentionally locked placeholders** — no sensitive data is exposed.
- **Content is drawn strictly from the approved package.** Figures (USD 350,000 seed, 30% CDG, step-up 51%/85%, 15% continuity stake, cap table, roadmap, budget) mirror the source documents and remain subject to legal review.
