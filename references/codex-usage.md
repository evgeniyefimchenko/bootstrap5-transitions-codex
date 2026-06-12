# Codex Usage

The skill is located at `.agents/skills/bootstrap5-transitions/SKILL.md`.

Ask Codex to use the skill explicitly:

```text
Use $bootstrap5-transitions to animate this Bootstrap 5 dropdown without adding dependencies.
```

Codex should inspect the existing component, select the closest catalog entry, prefer a core effect, add only the required `bsx-` class and CSS, and preserve Bootstrap markup and accessibility. When `Requires JS` is `yes`, Codex must include or adapt `assets/js/bootstrap5-transitions.js` and must not depend on `assets/js/demo.js`.

Useful requests:

- Apply a subtle modal confirmation transition.
- Add loading feedback to this Bootstrap button.
- Improve validation feedback without changing the form API.
- Add a reduced-motion-safe card hover.
- Animate inserted table rows using the existing Vanilla JS handler.
