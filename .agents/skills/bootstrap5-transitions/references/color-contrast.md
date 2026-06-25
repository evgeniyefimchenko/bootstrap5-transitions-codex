# Color And Contrast

- Prefer existing Bootstrap CSS variables: `--bs-primary`, `--bs-danger`, `--bs-success`, `--bs-body-color`, `--bs-body-bg`, etc.
- Do not hardcode random hex colors when a Bootstrap variable exists.
- For new `bsx-*` color tokens, OKLCH may be used.
- When fixing contrast, adjust perceived lightness first; do not randomly change hue.
- Preserve `data-bs-theme="dark"` compatibility.
- Do not bulk-convert an existing project palette to OKLCH unless explicitly requested.
- Validate text/icon contrast against the actual background.
- Focus states must remain visible in light and dark themes.
- Keep validation states distinguishable without relying only on color.
