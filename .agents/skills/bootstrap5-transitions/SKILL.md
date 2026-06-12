---
name: bootstrap5-transitions
description: Use this skill when adding, improving, or refactoring Bootstrap 5 UI transitions, animations, micro-interactions, loading states, modals, dropdowns, toasts, cards, forms, tabs, accordions, offcanvas panels, navbars, sidebars, tables, skeleton loaders, tooltips, popovers, progress indicators, or page transitions. Prefer Bootstrap 5-compatible CSS snippets with no framework dependency and no jQuery.
---

# Bootstrap 5 Transitions Skill

Apply ready-made Bootstrap 5 transition patterns from this repository.

## Hard Rules

- Use Bootstrap 5 markup and `data-bs-*` attributes.
- Do not use jQuery or animation libraries.
- Do not add React, Vue, Svelte, or Angular.
- Prefer CSS-first solutions; add Vanilla JS only when state changes require it.
- Prefix every custom class with `bsx-`.
- Preserve Bootstrap component behavior and accessibility attributes.
- Respect `prefers-reduced-motion`.
- Prefer `transform` and `opacity`; avoid layout-changing animation.
- Keep snippets copy-paste friendly and mobile-first.

## Workflow

1. Inspect the existing Bootstrap component and its state classes.
2. Search [references/catalog.md](references/catalog.md) for the closest effect.
3. Prefer a core effect unless the request needs a specific extended variant.
4. Read [references/implementation-rules.md](references/implementation-rules.md) for the component.
5. Add the smallest required CSS class and preserve existing markup.
6. Copy or adapt the matching snippet only when creating a component.
7. Check `Requires JS` in the catalog. When it is `yes`, include or adapt `assets/js/bootstrap5-transitions.js`; never depend on `assets/js/demo.js`.
8. Add custom Vanilla JS only when the runtime behavior does not match the application's state model.
9. Verify keyboard behavior, ARIA state, Bootstrap lifecycle, and reduced-motion behavior.
10. Summarize the selected effect, runtime requirement, and changed files.

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

Read [references/decision-table.md](references/decision-table.md) when the core choices do not fit.

## Avoid

- Do not animate width, height, top, left, margin, or padding unless Bootstrap already requires a height transition.
- Do not use unscoped selectors such as `.modal`, `.btn`, or `.card`.
- Do not remove Bootstrap classes or ARIA attributes.
- Do not duplicate an existing effect under a new name.
- Do not copy a `data-bsx-action` snippet without its documented runtime dependency.
- Do not use demo-only catalog code as an application dependency.
