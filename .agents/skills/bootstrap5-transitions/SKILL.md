---
name: bootstrap5-transitions
description: Use this skill when adding, improving, auditing, or refactoring Bootstrap 5 UI motion, transitions, micro-interactions, loading states, validation feedback, modals, dropdowns, toasts, cards, forms, tabs, accordions, offcanvas panels, navbars, sidebars, tables, badges, counters, skeleton loaders, tooltips, popovers, progress indicators, or page transitions. Prefer Bootstrap 5-compatible CSS-first solutions with bsx-* classes, no jQuery, no animation libraries, and no frontend framework dependency.
---

# Bootstrap 5 Transitions Skill

Apply accessible, Bootstrap 5-compatible UI motion and micro-interactions from this repository.

The goal is not decoration. The goal is to make UI state changes easier to perceive without breaking Bootstrap behavior, accessibility, performance, or existing markup.

## Hard Rules

- Preserve Bootstrap 5 markup, component classes, lifecycle, and `data-bs-*` attributes.
- Do not use jQuery.
- Do not add React, Vue, Svelte, Angular, Framer Motion, GSAP, anime.js, animate.css, or other animation libraries.
- Prefer CSS-first solutions.
- Add Vanilla JS only when state changes cannot be represented with CSS alone.
- Prefix every custom class with `bsx-`.
- Do not remove existing Bootstrap classes, ARIA attributes, labels, descriptions, or live regions.
- Respect `prefers-reduced-motion`.
- Prefer `transform` and `opacity`.
- Avoid layout-changing animation.
- Never use `transition: all`.
- Keep snippets copy-paste friendly, mobile-first, and safe for PHP/Twig/Blade templates.
- Do not introduce new build tooling.

## Bootstrap Compatibility Rules

- Modal: keep `.modal.fade`; animate `.modal-dialog`, `.modal-content`, or scoped `bsx-*` descendants through Bootstrap state classes.
- Dropdown: preserve `.dropdown-menu.show`; do not fight Bootstrap display state.
- Offcanvas: preserve `.showing`, `.show`, and `.hiding`.
- Toast: preserve `.toast.show` and Bootstrap instance lifecycle.
- Collapse / Accordion: let Bootstrap control height; animate icons or inner content.
- Tabs: animate only active `.tab-pane.show`.
- Tooltip / Popover: pass custom visual class through `data-bs-custom-class`.
- Forms: preserve `.is-invalid`, `.is-valid`, `.invalid-feedback`, and `.valid-feedback`.

## Motion Quality Rules

- Use CSS transitions for interactive state changes because they are interruptible.
- Use keyframes only for one-shot effects: skeleton shimmer, first reveal, success confirmation, progress animation.
- Keep normal interaction duration between `120ms` and `240ms`.
- Use longer duration only for page/section entry, usually `280ms`-`420ms`.
- Exit animations should be shorter and quieter than enter animations.
- Use `scale(0.96)` for press feedback.
- Never use press scale below `0.95`.
- Use small fixed movement: usually `4px`-`12px`.
- Do not animate `width`, `height`, `top`, `left`, `right`, `bottom`, `margin`, or `padding`, unless Bootstrap itself already requires a height transition.
- Use `will-change` only for `transform`, `opacity`, or `filter`, and only when there is visible first-frame stutter.

## Visual Polish Rules

- Prefer subtle motion over decorative motion.
- Use stronger motion only for errors, destructive confirmations, or explicit success feedback.
- For dense admin screens, prefer opacity, small translate, focus rings, and active markers.
- For cards/buttons, prefer tactile feedback: slight lift, press scale, shadow change.
- For counters, badges, prices, and metrics, use `font-variant-numeric: tabular-nums`.
- For tiny controls, preserve at least a 40x40px hit area where possible.
- Do not let expanded hit areas overlap.
- Use shadows for elevation; keep real borders for form inputs, table cells, and dividers.

## Color And Contrast Rules

- Prefer existing Bootstrap CSS variables: `--bs-primary`, `--bs-danger`, `--bs-success`, `--bs-body-color`, `--bs-body-bg`, etc.
- Do not hardcode random hex colors when a Bootstrap variable exists.
- For new `bsx-*` color tokens, OKLCH may be used.
- When fixing contrast, adjust perceived lightness first; do not randomly change hue.
- Preserve `data-bs-theme="dark"` compatibility.
- Do not bulk-convert an existing project palette to OKLCH unless explicitly requested.
- Validate text/icon contrast against the actual background.
- Focus states must remain visible in light and dark themes.

## Workflow

1. Inspect the existing Bootstrap component and its state classes.
2. Identify the component type: modal, dropdown, form, button, card, toast, table, or another Bootstrap pattern.
3. Search `references/catalog.md` for the closest effect.
4. Use `references/decision-table.md` when the best effect is not obvious.
5. Read `references/implementation-rules.md` for component-specific constraints.
6. Read `references/motion-quality.md`, `references/visual-polish.md`, and `references/color-contrast.md` when adjusting effect behavior or CSS.
7. Prefer a core effect unless the request clearly needs an extended variant.
8. Add the smallest required `bsx-*` class and preserve existing Bootstrap markup.
9. Check `Requires JS` in the catalog. When it is `yes`, include or adapt `assets/js/bootstrap5-transitions.js`; never depend on `assets/js/demo.js`.
10. Add custom Vanilla JS only when the runtime behavior does not match the application's state model.
11. Verify keyboard behavior, ARIA state, Bootstrap lifecycle, contrast, focus visibility, and reduced-motion behavior.
12. Report the result using the Before/After format in `references/review-format.md`.

## Decision Table

| User asks for | Prefer |
|---|---|
| modal animation | `bsx-modal-scale`, `bsx-modal-slide-up`, `bsx-modal-blur-backdrop` |
| confirmation modal | `bsx-modal-danger-confirm`, `bsx-modal-success-confirm` |
| mobile modal sheet | `bsx-modal-sheet-mobile` |
| dropdown animation | `bsx-dropdown-soft`, `bsx-dropdown-slide-down`, `bsx-dropdown-scale` |
| animated menu items | `bsx-dropdown-menu-stagger` |
| offcanvas animation | `bsx-offcanvas-soft`, `bsx-offcanvas-mobile-sheet` |
| toast animation | `bsx-toast-slide-right`, `bsx-toast-pop`, `bsx-toast-stack-pop` |
| success or error toast | `bsx-toast-success-pop`, `bsx-toast-error-shake` |
| alert animation | `bsx-alert-reveal`, `bsx-alert-slide-down`, `bsx-alert-shake` |
| button feedback | `bsx-button-press`, `bsx-button-hover-lift`, `bsx-button-success-pop` |
| loading button | `bsx-button-loading-spinner`, `bsx-button-loading-dots` |
| form validation | `bsx-form-invalid-shake`, `bsx-form-valid-check` |
| card hover | `bsx-card-hover-lift`, `bsx-card-hover-scale`, `bsx-card-hover-shadow` |
| tabs | `bsx-tabs-fade`, `bsx-tabs-underline-slide` |
| accordion | `bsx-accordion-icon-rotate`, `bsx-accordion-body-fade` |
| navbar or sidebar | `bsx-navbar-link-hover-line`, `bsx-sidebar-item-active-marker` |
| badge or counter | `bsx-badge-pop`, `bsx-counter-bump`, `bsx-metric-card-update` |
| table row feedback | `bsx-table-row-hover`, `bsx-table-row-update-flash` |
| skeleton loader | `bsx-skeleton-shimmer`, `bsx-skeleton-pulse` |
| page loading | `bsx-page-loading-fade` |

## Avoid

- Do not animate width, height, top, left, margin, or padding unless Bootstrap already requires a height transition.
- Do not use unscoped selectors such as `.modal`, `.btn`, `.card`, `.dropdown-menu`, `.toast`, or `.alert`.
- Do not remove Bootstrap classes or ARIA attributes.
- Do not duplicate an existing effect under a new name.
- Do not copy a `data-bsx-action` snippet without its documented runtime dependency.
- Do not use `assets/js/demo.js` as an application dependency.
- Do not add new production dependencies, build tools, or framework-specific code.
- Do not make motion the only signal for validation, loading, success, or error state.

## Review Output Format

When reporting work, include a concise Before/After summary:

```markdown
## Changed files

| File | Before | After | Reason |
|---|---|---|---|

## Validation

| Check | Result |
|---|---|
| `npm run generate` | pass/fail |
| `npm test` | pass/fail |
| Skill frontmatter valid | pass/fail |
| Catalog generated | pass/fail |
| No `transition: all` | pass/fail |
| Reduced motion preserved | pass/fail |
| No forbidden dependencies | pass/fail |
| Bootstrap 5 API preserved | pass/fail |

## Notes

- Selected effects:
- JS runtime changes:
- Accessibility concerns:
- Reduced-motion behavior:
- Contrast/focus-state concerns:
```
