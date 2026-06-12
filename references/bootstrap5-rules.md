# Bootstrap 5 Rules

- Use Bootstrap 5.3 markup and `data-bs-*` attributes.
- Do not use jQuery or compatibility code for Bootstrap 4.
- Preserve the standard structure of modal, dropdown, offcanvas, toast, collapse, tab, tooltip, and popover components.
- Do not interfere with `.show`, `.showing`, `.hiding`, `.collapsing`, or `.fade` state classes.
- Scope every project selector through a `bsx-` class.
- Keep ARIA labels, relationships, expanded state, and live regions intact.
- Prefer transforms and opacity. Animate collapse height only through Bootstrap's existing collapse behavior.
- Initialize tooltip and popover examples with Bootstrap's Vanilla JS API.
