---
name: web-design-guidelines
description: Review UI code for Web Interface Guidelines compliance. Use when asked to "review my UI", "check accessibility", "audit design", "review UX", or "check my site against best practices".
metadata:
  author: vercel
  version: "2.0.0"
---

# Web Interface Guidelines

Review UI code for compliance with Web Interface Guidelines covering accessibility, forms, animation, typography, performance, and more.

## How It Works

1. Load guidelines from local `REFERENCES.md` (preferred)
2. If local file is unavailable, fetch from: `https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md`
3. Read the user's specified UI files
4. Check against all rules in the guidelines
5. Output findings in `file:line` format (VS Code clickable)

## Guidelines Source

**Primary:** Read `REFERENCES.md` in this skill's directory.

**Fallback:** If `REFERENCES.md` is unavailable, fetch fresh guidelines:

```
https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md
```

## Usage

If the user provides files or a pattern:
1. Load guidelines (local preferred, fetch fallback)
2. Read the specified files
3. Apply all rules from the guidelines
4. Output findings grouped by file

If no files specified, ask the user which files to review.

## Output Format

```text
## src/button.tsx
src/button.tsx:42 - Icon button missing aria-label
src/button.tsx:18 - Input lacks label
src/button.tsx:55 - Animation missing prefers-reduced-motion

## src/modal.tsx
✓ PASS
```

State issue + location. Skip explanation unless fix non-obvious. No preamble.
