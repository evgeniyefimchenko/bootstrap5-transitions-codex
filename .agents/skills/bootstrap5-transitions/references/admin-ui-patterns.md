# Admin UI Patterns

| Scenario | Context | Prefer | Avoid |
|---|---|---|---|
| row updated after Ajax | dense admin table | `bsx-crud-row-updated-flash` | page-level reveal |
| bulk rows selected | order list | `bsx-crud-bulk-action-bar-slide` | modal confirmation for every click |
| filter applied | product list | `bsx-filter-applied-flash` | full page animation |
| API error | settings form | `bsx-state-error-retry-press` | hidden toast only |
| saved settings | module config | `bsx-crud-save-success-bar` | noisy confetti |

Use `density: dense-admin` and `risk: safe` by default for repeated operational screens.
Prefer CSS-only effects unless the state cannot be represented without runtime state changes.
