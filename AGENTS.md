# AGENTS.md

## Project

This repository provides Bootstrap 5 transition snippets and a Codex Agent Skill.

## Mandatory rules

- Bootstrap 5.3 only.
- No jQuery.
- No React, Vue, Svelte, Angular.
- No animation libraries.
- CSS-first.
- Vanilla JS only where Bootstrap or application state changes require it.
- Keep reusable runtime behavior in `assets/js/bootstrap5-transitions.js`.
- Keep catalog-only behavior in `assets/js/demo.js`.
- All custom classes must use `bsx-` prefix.
- Do not override Bootstrap globally unless required.
- Do not break Bootstrap `data-bs-*` API.
- Preserve accessibility attributes.
- Respect `prefers-reduced-motion`.
- Prefer `transform` and `opacity`.
- Avoid layout thrashing.
- Keep snippets copy-paste friendly.
- Keep examples mobile-first.

## File rules

- Core effects go to `assets/css/core.css`.
- Extended effects go to `assets/css/extended.css`.
- All CSS is imported from `assets/css/bootstrap5-transitions.css`.
- Core snippets go to `snippets/core/{category}/`.
- Extended snippets go to `snippets/extended/{category}/`.
- Documentation goes to `references/`.
- Codex skill goes to `.agents/skills/bootstrap5-transitions/`.

## Before finishing

Check:

1. HTML snippets use Bootstrap 5-compatible markup.
2. No jQuery exists in the project.
3. No animation libraries exist.
4. All custom classes start with `bsx-`.
5. Reduced motion fallback exists.
6. Demo page works by opening `index.html`.
7. README explains usage.
8. SKILL.md explains how Codex should apply effects.
9. JS-dependent snippets declare and document the runtime dependency.
