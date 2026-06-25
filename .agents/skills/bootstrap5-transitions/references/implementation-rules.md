# Implementation Rules

## Modal

- Do not remove `.modal`, `.fade`, `.modal-dialog`, or `.modal-content`.
- Add `bsx-*` to `.modal` unless the effect explicitly requires a child class.
- Do not replace Bootstrap modal lifecycle with custom JS.
- Keep `aria-labelledby`, `aria-hidden`, close buttons, and `data-bs-dismiss` intact.

## Dropdown

- Do not manually toggle `display`.
- Use Bootstrap `.show` state.
- Do not break keyboard navigation.
- Keep `.dropdown`, `.dropdown-toggle`, and `.dropdown-menu` structure.

## Forms

- Keep `.is-valid`, `.is-invalid`, `.invalid-feedback`, and `.valid-feedback`.
- Do not make animation the only error indicator.
- Preserve labels and `aria-describedby`.
- Keep focus states visible in light and dark themes.

## Toast

- If effect requires JS, ensure `assets/js/bootstrap5-transitions.js` is loaded after Bootstrap Bundle.
- Do not use `assets/js/demo.js` in production snippets.
- Preserve `.toast.show`, `role`, `aria-live`, and `aria-atomic`.

## Tables

- Avoid layout-shifting row animations.
- Prefer background flash, opacity, or transform on inner wrappers.
- Keep table semantics: `thead`, `tbody`, `th scope`, and readable status text.

## Offcanvas

- Preserve `.showing`, `.show`, and `.hiding`.
- Do not replace Bootstrap's focus trap or backdrop handling.
- Keep `aria-controls`, `aria-labelledby`, and dismiss controls intact.

## Collapse And Accordion

- Let Bootstrap control height.
- Animate icons, markers, or inner content instead of replacing collapse behavior.
- Preserve `aria-expanded`, `aria-controls`, and `data-bs-parent` when present.

## Tooltip And Popover

- Pass the visual class through `data-bs-custom-class`.
- Initialize with Bootstrap's Vanilla JS API when the application does not already do so.
- Do not put primary task content only in a tooltip.
