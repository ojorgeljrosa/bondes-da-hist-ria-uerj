# Bondes da História UERJ - Project Context

## Project Overview
This project is a high-conversion landing page for **Bondes da História UERJ**, an educational platform providing specialized study materials (e-books) for the UERJ (Universidade do Estado do Rio de Janeiro) entrance exams. The application is built with a focus on persuasive design, using a "handcrafted notebook" aesthetic to resonate with students.

### Main Technologies
- **Framework:** React 18 (Vite-based)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + custom utility classes for "paper" effects.
- **UI Components:** shadcn/ui (Radix UI primitives).
- **State/Data:** TanStack Query (React Query) for potential API interactions.
- **Routing:** React Router Dom.
- **Icons:** Lucide React.
- **Testing:** Vitest + React Testing Library.

### Architecture
The project follows a modular, section-based architecture for the landing page:
- `src/pages/Index.tsx`: The main assembly point for all landing page sections.
- `src/components/sections/`: Contains individual, self-contained sections (Hero, FAQ, Testimonials, etc.).
- `src/components/ui/`: Standardized shadcn/ui components.
- `.opencode/skills/`: Custom AI agent guidelines for frontend development, branding, and copywriting.

---

## Building and Running
The project uses `npm` as the package manager.

- **Development:** `npm run dev`
- **Build:** `npm run build`
- **Preview Build:** `npm run preview`
- **Linting:** `npm run lint`
- **Testing:** `npm run test` or `npm run test:watch`

---

## Development Conventions

### Styling & Design
- **Aesthetic:** Follows a "Notebook/Journal" style. Use `paper-bg`, `paper-texture`, and custom decorations from `src/components/Decorations.tsx` (like `TapeStrip` or `RedUnderline`).
- **Typography:**
  - `font-display`: Used for bold headings.
  - `font-handwritten`: Used for secondary headings or emphasized notes.
  - `font-body`: Used for standard text content.
- **Colors:** Primary palette is defined in `tailwind.config.ts`. Avoid hardcoding hex values; use Tailwind classes (e.g., `text-primary`, `bg-cream`, `text-ink`).

### Component Guidelines
- **Section Components:** Every new section of the landing page should be placed in `src/components/sections/` and exported as a named component.
- **Responsive Design:** Use mobile-first approach. Ensure sections use `min-h-[100dvh]` or appropriate spacing for various screen sizes.
- **No Emojis:** Per project guidelines in `.opencode/skills/frontend-dev/SKILL.md`, avoid using emojis. Use Lucide icons instead.

### Asset Management
- **Local Assets:** All images, videos, and icons MUST be hosted locally in `src/assets/` or `public/assets/`. Never use external placeholder URLs (e.g., Unsplash, Placehold.it).
- **Naming:** Follow `{type}-{descriptor}-{timestamp}.{ext}` for generated assets.

### AI Interaction & Skills
This project integrates specific "skills" found in `.opencode/skills/`. When performing tasks, refer to:
- `frontend-dev/SKILL.md`: For layout, motion, and asset generation rules.
- `brand-guidelines/SKILL.md`: For color and typography standards.
- `copywriting/SKILL.md`: For persuasive text frameworks (AIDA/PAS).

---

## Key Files & Directories
- `src/pages/Index.tsx`: The entry point for the landing page content.
- `src/components/sections/HeroSection.tsx`: Reference for the "handcrafted" UI style.
- `tailwind.config.ts`: Defines the custom color palette and typography.
- `components.json`: shadcn/ui configuration.
