---
name: frontend-design
description: Use when creating distinctive, production-grade frontend interfaces with high design quality — components, pages, artifacts, or web UIs. Focuses on design aesthetics, typography, color theory, spatial composition, and motion. For complete landing pages with AI-generated media assets (images, video, audio), copywriting, and full project scaffolding, use the frontend-dev skill. For component libraries with shadcn/ui, use the shadcn skill.
license: Complete terms in LICENSE.txt
---

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

## Workflow

1. **Gather Context** — Understand the requirements, target audience, technical constraints (framework, browser support, performance), and any brand guidelines.
2. **Design Thinking** — Follow the Design Thinking section below to define purpose, tone, constraints, and differentiation. Commit to a BOLD aesthetic direction.
3. **Pre-Implementation Checklist** — Run through the checklist below before writing any code.
4. **Implement** — Write production-grade, functional, visually striking code following the Frontend Aesthetics Guidelines.
5. **Review & Refine** — Verify the output against the checklist, test functionality, and polish visual details.
6. **Present Output** — Deliver the result using the Output template below.

## Pre-Implementation Checklist

Before writing code, confirm each item:

- [ ] **Purpose defined**: Clear statement of what problem this interface solves and who uses it.
- [ ] **Aesthetic direction chosen**: A specific, bold design philosophy selected (not generic — avoid "modern minimal" without further specification).
- [ ] **Typography selected**: Fonts chosen are distinctive and context-appropriate; no generic defaults (Inter, Roboto, Arial, system fonts).
- [ ] **Color palette committed**: Cohesive palette with dominant colors and sharp accents; CSS variables defined.
- [ ] **Layout strategy decided**: Asymmetry, overlap, diagonal flow, grid-breaking, or other non-predictable approach identified.
- [ ] **Motion plan**: At least one high-impact animation moment defined (page load stagger, scroll-trigger, hover surprise).
- [ ] **Technical constraints verified**: Framework, dependencies, browser support, and accessibility requirements understood.
- [ ] **Differentiation factor**: One memorable element identified that makes this interface unforgettable.

## Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. There are so many flavors to choose from. Use these for inspiration but design one that is true to the aesthetic direction.
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work — the key is intentionality, not intensity.

Then implement working code (HTML/CSS/JS, React, Vue, etc.) that is:
- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

## Frontend Aesthetics Guidelines

Focus on:
- **Typography**: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics; unexpected, characterful font choices. Pair a distinctive display font with a refined body font.
- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions. Use scroll-triggering and hover states that surprise.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.
- **Backgrounds & Visual Details**: Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects and textures that match the overall aesthetic. Apply creative forms like gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, custom cursors, and grain overlays.

NEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns, and cookie-cutter design that lacks context-specific character.

Interpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices (Space Grotesk, for example) across generations.

**IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details. Elegance comes from executing the vision well.

Remember: Claude is capable of extraordinary creative work. Don't hold back, show what can truly be created when thinking outside the box and committing fully to a distinctive vision.

## Output

Present the completed work using this template:

```
## Result: [Component/Page Name]

**Aesthetic Direction:** [Brief description of the chosen design philosophy]

**Key Design Decisions:**
- Typography: [fonts used and why]
- Color: [palette summary]
- Layout: [spatial strategy]
- Motion: [animation highlights]

**Files Created/Modified:**
- `path/to/file.html` — Description
- `path/to/styles.css` — Description

**Live Preview:** [if applicable, how to view]

**Usage:**
```bash
[command to run/preview the result]
```
```
