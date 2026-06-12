# Implementation Rules

## Bootstrap State

- Modal: keep `.modal.fade`; animate `.modal-dialog` or `.modal-content`; resolve the visible state through `.show`.
- Dropdown: preserve `.dropdown-menu.show`; use opacity, visibility, and pointer events around Bootstrap's display state.
- Offcanvas: preserve `.showing`, `.show`, and `.hiding`.
- Toast: preserve `.toast.show` and Bootstrap's instance lifecycle.
- Collapse and accordion: let Bootstrap control height; animate icons or inner content.
- Tabs: animate only the active `.tab-pane.show`.
- Tooltip and popover: pass the effect with `data-bs-custom-class`.
- Forms: keep `.is-invalid`, `.is-valid`, `.invalid-feedback`, and `.valid-feedback`.

## JavaScript

- Use Bootstrap's public constructors and `getOrCreateInstance`.
- Use event delegation for repeated demo controls.
- Do not use inline event handlers.
- Keep CSS classes responsible for presentation and JS responsible for state.

## Accessibility

- Preserve labels, descriptions, live regions, and expanded state.
- Keep motion supplemental; expose status through text or semantics.
- Ensure reduced motion reaches the same final state.
