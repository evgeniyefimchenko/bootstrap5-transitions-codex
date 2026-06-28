# Decision Table

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
| admin breadcrumb or record path | `bsx-breadcrumb-current-marker`, `bsx-breadcrumb-path-update`, `bsx-breadcrumb-context-return` |
| paged table navigation | `bsx-pagination-item-press`, `bsx-pagination-active-slide`, `bsx-pagination-loading-fade`, `bsx-pagination-disabled-soft` |
| segmented controls or density toggle | `bsx-button-group-active-marker`, `bsx-button-group-density-switch`, `bsx-button-group-filter-active` |
| input group feedback | `bsx-input-group-focus-ring`, `bsx-input-group-copy-success`, `bsx-input-group-error-shake`, `bsx-input-group-success-glow` |
| clear, close, or dismiss affordance | `bsx-close-button-hover-ring`, `bsx-close-button-clear-filter`, `bsx-close-button-confirm-pending` |
| CRUD table row create/save/delete | `bsx-crud-row-created-flash`, `bsx-crud-row-updated-flash`, `bsx-crud-row-deleted-collapse`, `bsx-crud-save-success-bar` |
| inline edit or dirty row | `bsx-crud-inline-edit-focus`, `bsx-crud-inline-edit-saving`, `bsx-crud-permission-locked-soft` |
| bulk actions toolbar | `bsx-crud-bulk-action-bar-slide`, `bsx-crud-bulk-selection-bump`, `bsx-button-group-bulk-ready` |
| filters and search | `bsx-filter-panel-slide`, `bsx-filter-applied-flash`, `bsx-search-results-reveal`, `bsx-search-empty-pop` |
| form wizard | `bsx-wizard-step-enter`, `bsx-wizard-step-complete-check`, `bsx-wizard-step-invalid-shake`, `bsx-wizard-saving-overlay` |
| save, success, error, empty, locked states | `bsx-state-empty-pop`, `bsx-state-success-check`, `bsx-state-error-retry-press`, `bsx-state-offline-pulse` |
| data loading in admin screens | `bsx-data-table-refresh`, `bsx-data-card-refresh`, `bsx-data-inline-saving`, `bsx-data-diff-highlight` |
| notification inbox | `bsx-notification-panel-slide`, `bsx-notification-item-new`, `bsx-notification-item-remove`, `bsx-notification-priority-pulse` |
| mobile admin workflow | `bsx-mobile-sticky-save-bar`, `bsx-mobile-filter-sheet`, `bsx-mobile-fab-menu-stagger`, `bsx-mobile-bottom-bar-active` |

Prefer the lowest-motion option that still communicates state. Use a stronger effect only for errors, confirmations, destructive actions, or explicit success feedback.
