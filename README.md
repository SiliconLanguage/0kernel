# 0kernel

> The Sovereign Kernel Project — a manifesto site for the post-Von Neumann compute paradigm.

Live: [0kernel.ai](https://0kernel.ai) · Deployed via Cloudflare Workers

---

## Architecture

```
0kernel/
├── src/
│   ├── index.ts              # Cloudflare Worker entrypoint (asset serving + SPA fallback)
│   ├── main.tsx              # React root mount
│   ├── App.tsx               # Root component: layout, scroll tracking, nav wiring
│   ├── index.css             # Global styles, animations, utility classes
│   └── components/
│       ├── Navbar.tsx        # Fixed top nav with active-section highlight + mobile menu
│       ├── Hero.tsx          # 01_DECLARATION — opening manifesto section
│       ├── Thesis.tsx        # 02_THESIS — core doctrine
│       ├── SovereignPath.tsx # 03_THE_PATH — strategic milestones
│       ├── Artifacts.tsx     # 04_RESEARCH — research briefs + Foundry card
│       └── Identity.tsx      # 05_IDENTITY — contact/terminal node
│   └── hooks/
│       ├── useActiveSection.ts   # IntersectionObserver → active nav state
│       └── useScrollProgress.ts  # Scroll depth tracker for progress rail
├── public/
│   ├── research/             # PDF artifacts (copied to dist/research/ at build time)
│   └── [favicon assets]
├── logs/                     # Daily work logs
├── stitch/
│   ├── design-system/        # DESIGN.md + design tokens (reference only, not built)
│   └── 0kernel-manifesto/    # Legacy stitch reference artifacts
├── wrangler.toml             # Cloudflare Worker config
├── vite.config.ts            # Vite build config (outDir: dist)
├── tailwind.config.ts        # Tailwind config
├── _redirects                # Cloudflare asset routing rules
└── package.json
```

### Runtime

| Layer | Technology |
|---|---|
| Hosting | Cloudflare Workers + Assets |
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| Styling | Tailwind CSS 3 + custom CSS (`index.css`) |
| Entry | `src/index.ts` — Worker handles favicon redirect, SPA fallback, and asset passthrough |

### Routing

The Worker in `src/index.ts` handles three cases:
1. `/favicon.ico` → redirects to `/favicon.svg`
2. Any path **without** a file extension (e.g. `/`, `/#research`) → serves `index.html` (SPA fallback)
3. Any path **with** a file extension (e.g. `/research/brief.pdf`) → serves the asset directly

`_redirects` provides explicit passthrough rules for asset directories:
```
/assets/* /assets/:splat 200
/research/* /research/:splat 200
```

---

## Design System

See [`stitch/design-system/DESIGN.md`](stitch/design-system/DESIGN.md) for the full specification.

**Key rules:**
- **Color:** Void black backgrounds (`#0e0e0e`, `#131313`), Monadic Cyan (`#00f2ff`) as the only accent
- **Typography:** Inter/Mona Sans for display, JetBrains Mono for all metadata and labels
- **No hard borders:** Structural separation via tonal shifts and negative space only
- **CRT aesthetic:** Scanline overlays, flicker keyframes, and typewriter reveals throughout
- **Elevation:** Tonal layering (`#0e0e0e` → `#131313` → `#2a2a2a`) — no box shadows on cards

---

## How to Add a New Section

### 1. Create the component

Add `src/components/MySectionName.tsx`:

```tsx
export default function MySectionName() {
  return (
    <section
      className="section-shell relative px-5 sm:px-8 lg:px-16 xl:px-24 py-24 lg:py-32"
      data-section="my-section"
      id="my-section"
    >
      {/* Section tag */}
      <div className="mb-12 flex items-center gap-4">
        <span className="h-px w-10 bg-[#3a494b]" />
        <span className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-[#849495]">
          06 // SECTION_LABEL
        </span>
      </div>
      {/* content */}
    </section>
  );
}
```

### 2. Register in the nav

In `src/components/Navbar.tsx`, add to `NAV_ITEMS`:

```ts
const NAV_ITEMS = [
  ...
  { id: 'my-section', label: '06_SECTION_LABEL' },
] as const;
```

### 3. Register for scroll tracking

In `src/App.tsx`, add the section `id` to `SECTION_IDS`:

```ts
const SECTION_IDS = ['declaration', 'thesis', 'path', 'research', 'identity', 'my-section'];
```

### 4. Mount the component

In `src/App.tsx`, import and place inside `<main>`:

```tsx
import MySectionName from './components/MySectionName';
// ...
<main className="pt-[4.5rem] global-scanlines">
  ...
  <Identity />
  <MySectionName />
</main>
```

---

## How to Update Section Content

| Section | File | What to edit |
|---|---|---|
| 01 Declaration | `src/components/Hero.tsx` | Headline, subtext, CTA labels |
| 02 Thesis | `src/components/Thesis.tsx` | Doctrine points |
| 03 The Path | `src/components/SovereignPath.tsx` | Milestone entries |
| 04 Research | `src/components/Artifacts.tsx` | `ARTIFACTS` array for PDF cards; Foundry card JSX for the fourth card |
| 05 Identity | `src/components/Identity.tsx` | Contact fields, bio text |

### Adding a research PDF

1. Drop the PDF into `/public/research/`
2. Add an entry to the `ARTIFACTS` array in `Artifacts.tsx`:

```ts
{
  id: 'brief-004',
  classification: 'BRIEF-004',
  title: 'Your Title Here.',
  description: 'One-paragraph summary.',
  tags: ['TAG_ONE', 'TAG_TWO'],
  status: 'AVAILABLE',
  pdf: '/research/your-filename.pdf',
  linkLabel: '[ YOUR_LINK_LABEL ]',
  restricted: false,        // set true to show the RESTRICTED notice
},
```

---

## Build & Deploy

### Build only

```bash
npm run build
```

Runs `tsc && vite build` then copies `/public/research/` into `/dist/research/`. Output lands in `/dist/`.

### Deploy to Cloudflare

```bash
npx wrangler deploy
```

Triggers the custom build, uploads changed assets to Cloudflare Workers, and promotes the new version live. Requires Wrangler authentication (`npx wrangler login`).

### Local dev

```bash
npm run dev
```

Starts the Vite dev server on `http://localhost:5173`. Hot module replacement enabled. Note: the Worker routing logic (`src/index.ts`) does not run in dev mode — use `npx wrangler dev` to test Worker behavior locally.

---

## Logs

Daily work logs are in [`/logs/`](logs/). Format: `MM-DD-YYYY.md`.
