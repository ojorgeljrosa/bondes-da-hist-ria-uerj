# AGENTS.md

Guidelines for working with this repository.

## Project Overview

Vite + React + TypeScript landing page for "Discursando História" (UERJ History exam prep). Uses shadcn/ui components.

## Development Commands

- `bun dev` - Dev server on port 8080 (Vite with HMR)
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

## Common Gotchas

1. **No SSR** - This is a SPA, not Next.js. No server-side rendering concerns.
2. **Import .tsx explicitly** - Vite requires explicit extensions in imports.
3. **shadcn components** - Add new ones via `npx shadcn add <component>`, not manual creation.
4. **Section components** - Landing page uses section components, not traditional pages.
