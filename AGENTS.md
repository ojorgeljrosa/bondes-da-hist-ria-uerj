# AGENTS.md

Guidelines for working with this repository.

## Project Overview

Vite + React + TypeScript landing page for "Discursando História" (UERJ History exam prep). Uses shadcn/ui components.

## Development Commands

- `bun dev` - Dev server on **port 8080** (Vite with HMR)
- `bun build` - Production build
- `bun build:dev` - Development build
- `bun test` - Run tests once (Vitest + jsdom)
- `bun test:watch` - Run tests in watch mode
- `bun lint` - ESLint

Both `npm` and `bun` are available; lockfiles exist for both.

## Architecture

**Entry Point**: `src/main.tsx` → `src/App.tsx` → `src/pages/Index.tsx`

**Routing**: React Router DOM (BrowserRouter). Single route `/` with catch-all `*` for 404.

**Structure**:
- `src/components/ui/` - shadcn/ui components (50+ components)
- `src/components/sections/` - Page sections (Hero, FAQ, Footer, etc.)
- `src/hooks/` - Custom hooks (`use-toast.ts`, `use-mobile.tsx`)
- `src/lib/utils.ts` - `cn()` utility for Tailwind class merging
- `src/pages/` - Route components (Index, NotFound)

**State**: TanStack Query for server state, no global client state library.

## Path Aliases

`@/` maps to `./src/`. Used throughout:
```ts
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
```

## TypeScript Configuration

**Relaxed strictness** - intentional for rapid development:
- `noImplicitAny: false`
- `strictNullChecks: false`
- `noUnusedLocals: false`
- `noUnusedParameters: false`

Do not tighten these without explicit request.

## Styling (Tailwind)

Custom theme colors in `tailwind.config.ts`:
- `marsala`, `bege`, `paper`, `ink`, `cream`, `wine` (HSL values)
- `font-display: 'Lora'`
- `font-body: '"Source Sans 3"'`
- `font-handwritten: 'Caveat'`

Dark mode uses `class` strategy. Components use `hsl(var(--color))` pattern.

## Component Patterns

**shadcn/ui components** use this pattern:
```tsx
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Use `asChild` prop for polymorphic behavior
<Button asChild><Link to="/">Text</Link></Button>
```

**Toast system**: Dual toasters mounted in App.tsx:
- `@/components/ui/toaster` - Radix UI toast
- `@/components/ui/sonner` - Sonner toast library

## Testing

Vitest with jsdom. Test files: `src/**/*.{test,spec}.{ts,tsx}`

Setup: `src/test/setup.ts` - mocks `matchMedia` for responsive hooks.

## Build Notes

- `dedupe` config prevents React duplicate issues
- `host: "::"` allows external access in dev

## Linting

ESLint configured with TypeScript, React Hooks, and React Refresh rules.
- `@typescript-eslint/no-unused-vars: off` (relaxed)
- `allowConstantExport: true` for React Refresh

## Decorative System

The landing page uses a scrapbook/collage aesthetic with hand-drawn decorative elements defined in `src/components/Decorations.tsx`:

- **WashiTape** - Colored semi-transparent tape strips
- **PushPin** - SVG pin icons (red, blue, green, yellow, white)
- **PostIt** - Sticky note containers (yellow, pink, green, blue)
- **StampBadge** - Circular dashed-border stamps (MELHOR ESCOLHA, UERJ 2026, etc.)
- **StickerBadge** - Filled circular stickers (32% OFF, prices, etc.)
- **HandwrittenNote** - Caveat-font annotations with rotation
- **DoodleStar / DoodleArrow / DoodleHeart / DoodleCircle** - SVG doodle decorations
- **TornPaperOverlay / TornEdgeSection** - Torn paper edge dividers between sections
- **CrumpledOverlay / CrayonOverlay** - Full-section texture overlays
- **FoldedCorner** - CSS pseudo-element page fold effect
- **NotebookHole** - Circular hole punch decorations
- **PaperClip / CoffeStain** - Additional SVG decorations
- **PolaroidFrame** - White-bordered photo frame with caption

CSS classes in `src/index.css`: `.polaroid`, `.post-it`, `.stamp`, `.sticker`, `.collage-card`, `.hover-lift`, `.notebook-lined`, `.paper-texture`, `.torn-edge-bottom`/`.torn-edge-top`, `.folded-corner`, `.tape-cross`.

Animations: `.animate-fade-in-rotate`, `.animate-peel-in`, `.animate-stamp-in`.

## Assets

**E-book covers**: `public/capas/` — real cover images for the two e-books:
- `Capa ebook Exame de Qualificação.png` — 1º Exame (Objetivo)
- `Capa Ebook Discursiva.png` — Prova Discursiva

**Professor photos**: `public/fotos/` — 7 JPEG images used in QuemSomosSection gallery.

**Textures**: `public/textures/` — torn paper (12), crumpled paper (6), crayon (8), plus 3 notebook/paper base textures.

**Logo/main photo**: `src/assets/` — `logo.png`, `julia-thiago-vertical.jpeg`, `professors.png`.

## Overflow & Positioning Guidelines

All sections use `overflow-x-hidden` to prevent horizontal scrollbar from rotated/offset decorations. This creates a critical constraint:

**Rule: Never use large negative offsets on decorative elements.** They will be clipped.

Safe patterns:
- Push pins on cards: `-top-5` to `-top-7` is OK (small offset, always visible)
- Washi tape on cards: `-top-2` to `-top-3` is OK (small offset)
- Notebook holes: Use `left-1`/`right-1` instead of `-left-3`/`-right-3` (clipped otherwise)
- Handwritten notes at card edges: Use `right-0`/`right-2`/`left-0`/`left-2` instead of `-right-2`/`-left-2`
- Badge/sticker overlaps: Keep within or barely outside card bounds (`-right-1` max, not `-right-4`)
- Washi tape at section edges: Minimum `left-10`/`right-8` from viewport edge (not `left-6`/`right-8`)
- Grids with card decorations: Add `px-2 pt-4 pb-8` padding so rotated card corners aren't clipped by grid gap
- Sections with bottom-overflowing notes: Use `pb-24 md:pb-32` (not `pb-20 md:pb-28`)

The TornPaperOverlay container in HeroSection uses `mx-4 md:mx-8` inset margins to prevent overlay textures from touching the viewport edge.

## Common Gotchas

1. **No SSR** - This is a SPA, not Next.js. No server-side rendering concerns.
2. **Import .tsx explicitly** - Vite requires explicit extensions in imports.
3. **shadcn components** - Add new ones via `npx shadcn add <component>`, not manual creation.
4. **Section components** - Landing page uses section components, not traditional pages.
5. **overflow-x-hidden clips decorations** - Any element with negative positioning (e.g. `-left-3`, `-right-4`) will be cut off by the section's `overflow-x-hidden`. Use non-negative or small negative offsets only. See "Overflow & Positioning Guidelines" above.
6. **E-book cover images** - Located in `public/capas/`, referenced by URL path (not imported). File names have accented characters (`Qualificação`).
7. **Playwright screenshots** - Use `executablePath: '/ms-playwright/chromium-1169/chrome-linux/chrome'` with `--no-sandbox --headless` args. Docker image has chromium-1169 pre-installed.
