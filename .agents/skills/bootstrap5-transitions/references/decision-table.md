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
| paged table navigation | `bsx-pagination-active-marker`, `bsx-pagination-loading-page`, `bsx-pagination-disabled-soft` |
| segmented controls or density toggle | `bsx-button-group-active-marker`, `bsx-button-group-density-switch`, `bsx-button-group-filter-active` |
| input group feedback | `bsx-input-group-focus-ring`, `bsx-input-group-copy-confirm`, `bsx-input-group-validation-sync` |
| clear, close, or dismiss affordance | `bsx-close-button-hover-ring`, `bsx-close-button-clear-filter`, `bsx-close-button-confirm-pending` |
| CRUD table row create/save/delete | `bsx-crud-row-create`, `bsx-crud-row-save-pending`, `bsx-crud-row-save-success`, `bsx-crud-delete-confirm-row` |
| inline edit or dirty row | `bsx-crud-inline-edit-focus`, `bsx-crud-inline-edit-dirty`, `bsx-state-unsaved-changes` |
| bulk actions toolbar | `bsx-crud-bulk-toolbar-reveal`, `bsx-button-group-bulk-ready`, `bsx-mobile-bulk-action-bar` |
| filters and search | `bsx-filter-panel-reveal`, `bsx-filter-chip-active`, `bsx-search-results-update`, `bsx-search-no-results-state` |
| form wizard | `bsx-form-wizard-step-current`, `bsx-form-wizard-step-complete`, `bsx-form-wizard-step-error`, `bsx-form-wizard-progress-sync` |
| save, success, error, empty, locked states | `bsx-state-empty-reveal`, `bsx-state-success-inline`, `bsx-state-error-inline`, `bsx-state-locked-record` |
| data loading in admin screens | `bsx-data-loading-table-overlay`, `bsx-data-loading-card-overlay`, `bsx-data-loading-row-skeleton`, `bsx-data-loading-inline-spinner` |
| notification inbox | `bsx-notification-center-panel`, `bsx-notification-item-unread`, `bsx-notification-item-priority`, `bsx-notification-empty-state` |
| mobile admin workflow | `bsx-mobile-sticky-save-bar`, `bsx-mobile-filter-sheet`, `bsx-mobile-inline-error`, `bsx-mobile-bottom-nav-active` |

Prefer the lowest-motion option that still communicates state. Use a stronger effect only for errors, confirmations, destructive actions, or explicit success feedback.
