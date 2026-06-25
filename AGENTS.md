# Agent Rules

## Project Goal

This repository provides Bootstrap 5-compatible transition and micro-interaction classes using the `bsx-*` prefix.

It also ships a Codex Agent Skill that helps apply those classes safely to existing Bootstrap 5 interfaces without turning the project into a general UI framework.

## Hard Constraints

- Bootstrap 5.3 only.
- No jQuery.
- No frontend framework dependency.
- No React, Vue, Svelte, or Angular.
- No animation libraries.
- No production dependencies.
- CSS-first.
- Vanilla JS only for required state management.
- Preserve Bootstrap 5 behavior and `data-bs-*` API.
- Preserve accessibility attributes, labels, descriptions, and live regions.
- Respect `prefers-reduced-motion`.
- Prefer `transform` and `opacity`.
- Do not use `transition: all`.
- Do not animate layout properties.
- Do not use `assets/js/demo.js` in production snippets.
- All custom classes must use the `bsx-` prefix.
- Keep snippets copy-paste friendly and mobile-first.

## File Rules

- Core effects go to `assets/css/core.css`.
- Extended effects go to `assets/css/extended.css`.
- All CSS is imported from `assets/css/bootstrap5-transitions.css`.
- Reusable runtime behavior goes to `assets/js/bootstrap5-transitions.js`.
- Catalog/demo-only behavior goes to `assets/js/demo.js`.
- Core snippets go to `snippets/core/{category}/`.
- Extended snippets go to `snippets/extended/{category}/`.
- Documentation goes to `references/`.
- Codex skill files go to `.agents/skills/bootstrap5-transitions/`.

## Before Finishing

Run:

```bash
npm run generate
npm test
```

Generated files must be committed when sources change.

Check:

1. HTML snippets use Bootstrap 5-compatible markup.
2. No jQuery exists in the project.
3. No animation libraries exist.
4. All custom classes start with `bsx-`.
5. Reduced motion fallback exists and covers pseudo-elements.
6. Demo page works by opening `index.html`.
7. README explains usage and Agent Skill quality rules.
8. SKILL.md explains how Codex should apply effects.
9. JS-dependent snippets declare and document the runtime dependency.
10. Catalog files are regenerated from `scripts/effects.mjs`.
