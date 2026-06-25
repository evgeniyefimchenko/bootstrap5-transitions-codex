# Bootstrap 5 Transitions Skill Catalog

Generated from `scripts/effects.mjs`. Every entry maps one CSS class to one copy-paste snippet. Entries marked `Requires JS: yes` also require `assets/js/bootstrap5-transitions.js` after the Bootstrap bundle.

## Summary

| Class | Level | Component | Requires JS | Motion | Best for | Avoid for | Reduced motion | Snippet |
|---|---|---|---|---|---|---|---|---|
| `bsx-modal-scale` | core | modal | no | scale | dialogs and confirmations | dense repeated workflows | opacity-only near-instant state | `snippets/core/modal/modal-scale.html` |
| `bsx-modal-slide-up` | core | modal | no | translate | dialogs and confirmations | dense repeated workflows | opacity-only near-instant state | `snippets/core/modal/modal-slide-up.html` |
| `bsx-modal-blur-backdrop` | core | modal | no | opacity | dialogs and confirmations | dense repeated workflows | near-instant opacity or color state | `snippets/core/modal/modal-blur-backdrop.html` |
| `bsx-modal-danger-confirm` | core | modal | no | color + opacity | dialogs and confirmations | dense repeated workflows | opacity-only near-instant state | `snippets/core/modal/modal-danger-confirm.html` |
| `bsx-modal-success-confirm` | core | modal | no | color + opacity | dialogs and confirmations | dense repeated workflows | opacity-only near-instant state | `snippets/core/modal/modal-success-confirm.html` |
| `bsx-modal-sheet-mobile` | core | modal | no | translate | dialogs and confirmations | dense repeated workflows | opacity-only near-instant state | `snippets/core/modal/modal-sheet-mobile.html` |
| `bsx-dropdown-soft` | core | dropdown | no | opacity | menus with clear visual hierarchy | menus requiring instant state changes | opacity-only near-instant state | `snippets/core/dropdown/dropdown-soft.html` |
| `bsx-dropdown-slide-down` | core | dropdown | no | translate | menus with clear visual hierarchy | menus requiring instant state changes | opacity-only near-instant state | `snippets/core/dropdown/dropdown-slide-down.html` |
| `bsx-dropdown-scale` | core | dropdown | no | scale | menus with clear visual hierarchy | menus requiring instant state changes | opacity-only near-instant state | `snippets/core/dropdown/dropdown-scale.html` |
| `bsx-dropdown-menu-stagger` | core | dropdown | no | translate | menus with clear visual hierarchy | menus requiring instant state changes | opacity-only near-instant state | `snippets/core/dropdown/dropdown-menu-stagger.html` |
| `bsx-dropdown-item-hover-slide` | core | dropdown | no | translate | menus with clear visual hierarchy | menus requiring instant state changes | opacity-only near-instant state | `snippets/core/dropdown/dropdown-item-hover-slide.html` |
| `bsx-dropdown-mega-menu-soft` | core | dropdown | no | opacity | menus with clear visual hierarchy | menus requiring instant state changes | opacity-only near-instant state | `snippets/core/dropdown/dropdown-mega-menu-soft.html` |
| `bsx-offcanvas-soft` | core | offcanvas | no | opacity | navigation and mobile panels | permanent desktop navigation | opacity-only near-instant state | `snippets/core/offcanvas/offcanvas-soft.html` |
| `bsx-offcanvas-blur-backdrop` | core | offcanvas | no | opacity | navigation and mobile panels | permanent desktop navigation | near-instant opacity or color state | `snippets/core/offcanvas/offcanvas-blur-backdrop.html` |
| `bsx-offcanvas-mobile-sheet` | core | offcanvas | no | translate | navigation and mobile panels | permanent desktop navigation | opacity-only near-instant state | `snippets/core/offcanvas/offcanvas-mobile-sheet.html` |
| `bsx-offcanvas-menu-stagger` | core | offcanvas | no | translate | navigation and mobile panels | permanent desktop navigation | opacity-only near-instant state | `snippets/core/offcanvas/offcanvas-menu-stagger.html` |
| `bsx-toast-slide-right` | core | toast | yes | translate | brief asynchronous feedback | critical information requiring confirmation | opacity-only near-instant state | `snippets/core/toast/toast-slide-right.html` |
| `bsx-toast-pop` | core | toast | yes | scale | brief asynchronous feedback | critical information requiring confirmation | opacity-only near-instant state | `snippets/core/toast/toast-pop.html` |
| `bsx-toast-stack-pop` | core | toast | yes | scale | brief asynchronous feedback | critical information requiring confirmation | opacity-only near-instant state | `snippets/core/toast/toast-stack-pop.html` |
| `bsx-toast-success-pop` | core | toast | yes | scale | brief asynchronous feedback | critical information requiring confirmation | opacity-only near-instant state | `snippets/core/toast/toast-success-pop.html` |
| `bsx-toast-error-shake` | core | toast | yes | shake | brief asynchronous feedback | critical information requiring confirmation | opacity-only near-instant state | `snippets/core/toast/toast-error-shake.html` |
| `bsx-toast-progress-line` | core | toast | yes | translate | brief asynchronous feedback | critical information requiring confirmation | opacity-only near-instant state | `snippets/core/toast/toast-progress-line.html` |
| `bsx-alert-reveal` | core | alert | no | translate | inline feedback and validation summaries | decorative content | opacity-only near-instant state | `snippets/core/alert/alert-reveal.html` |
| `bsx-alert-slide-down` | core | alert | no | translate | inline feedback and validation summaries | decorative content | opacity-only near-instant state | `snippets/core/alert/alert-slide-down.html` |
| `bsx-alert-shake` | core | alert | no | shake | inline feedback and validation summaries | decorative content | opacity-only near-instant state | `snippets/core/alert/alert-shake.html` |
| `bsx-alert-pulse-border` | core | alert | no | scale | inline feedback and validation summaries | decorative content | opacity-only near-instant state | `snippets/core/alert/alert-pulse-border.html` |
| `bsx-alert-success-glow` | core | alert | no | opacity | inline feedback and validation summaries | decorative content | near-instant opacity or color state | `snippets/core/alert/alert-success-glow.html` |
| `bsx-alert-dismissible-exit` | core | alert | yes | color + opacity | inline feedback and validation summaries | decorative content | opacity-only near-instant state | `snippets/core/alert/alert-dismissible-exit.html` |
| `bsx-button-press` | core | button | no | scale | direct interaction feedback | large continuously animated areas | opacity-only near-instant state | `snippets/core/button/button-press.html` |
| `bsx-button-hover-lift` | core | button | no | translate | direct interaction feedback | large continuously animated areas | opacity-only near-instant state | `snippets/core/button/button-hover-lift.html` |
| `bsx-button-hover-glow` | core | button | no | opacity | direct interaction feedback | large continuously animated areas | near-instant opacity or color state | `snippets/core/button/button-hover-glow.html` |
| `bsx-button-loading-spinner` | core | button | yes | opacity + rotate | direct interaction feedback | large continuously animated areas | opacity-only near-instant state | `snippets/core/button/button-loading-spinner.html` |
| `bsx-button-loading-dots` | core | button | yes | opacity | direct interaction feedback | large continuously animated areas | opacity-only near-instant state | `snippets/core/button/button-loading-dots.html` |
| `bsx-button-success-pop` | core | button | yes | scale | direct interaction feedback | large continuously animated areas | opacity-only near-instant state | `snippets/core/button/button-success-pop.html` |
| `bsx-button-icon-slide` | core | button | no | translate | direct interaction feedback | large continuously animated areas | opacity-only near-instant state | `snippets/core/button/button-icon-slide.html` |
| `bsx-button-ripple-lite` | core | button | yes | color + opacity | direct interaction feedback | large continuously animated areas | opacity-only near-instant state | `snippets/core/button/button-ripple-lite.html` |
| `bsx-form-focus-ring` | core | form | no | color + opacity | focus and validation feedback | replacing native validation semantics | opacity-only near-instant state | `snippets/core/form/form-focus-ring.html` |
| `bsx-form-invalid-shake` | core | form | no | shake | focus and validation feedback | replacing native validation semantics | opacity-only near-instant state | `snippets/core/form/form-invalid-shake.html` |
| `bsx-form-valid-check` | core | form | no | color + opacity | focus and validation feedback | replacing native validation semantics | opacity-only near-instant state | `snippets/core/form/form-valid-check.html` |
| `bsx-form-help-text-reveal` | core | form | no | translate | focus and validation feedback | replacing native validation semantics | opacity-only near-instant state | `snippets/core/form/form-help-text-reveal.html` |
| `bsx-form-error-text-slide` | core | form | no | translate | focus and validation feedback | replacing native validation semantics | opacity-only near-instant state | `snippets/core/form/form-error-text-slide.html` |
| `bsx-form-switch-toggle-soft` | core | form | no | opacity | focus and validation feedback | replacing native validation semantics | opacity-only near-instant state | `snippets/core/form/form-switch-toggle-soft.html` |
| `bsx-form-checkbox-pop` | core | form | no | scale | focus and validation feedback | replacing native validation semantics | opacity-only near-instant state | `snippets/core/form/form-checkbox-pop.html` |
| `bsx-form-file-drop-highlight` | core | form | yes | color + opacity | focus and validation feedback | replacing native validation semantics | opacity-only near-instant state | `snippets/core/form/form-file-drop-highlight.html` |
| `bsx-card-hover-lift` | core | card | no | translate | interactive content collections | non-interactive dense tables | opacity-only near-instant state | `snippets/core/card/card-hover-lift.html` |
| `bsx-card-hover-scale` | core | card | no | scale | interactive content collections | non-interactive dense tables | opacity-only near-instant state | `snippets/core/card/card-hover-scale.html` |
| `bsx-card-hover-shadow` | core | card | no | color + opacity | interactive content collections | non-interactive dense tables | near-instant opacity or color state | `snippets/core/card/card-hover-shadow.html` |
| `bsx-card-image-zoom` | core | card | no | scale | interactive content collections | non-interactive dense tables | opacity-only near-instant state | `snippets/core/card/card-image-zoom.html` |
| `bsx-card-image-fade-overlay` | core | card | no | opacity | interactive content collections | non-interactive dense tables | near-instant opacity or color state | `snippets/core/card/card-image-fade-overlay.html` |
| `bsx-card-stagger-list` | core | card | no | translate | interactive content collections | non-interactive dense tables | opacity-only near-instant state | `snippets/core/card/card-stagger-list.html` |
| `bsx-tabs-fade` | core | tabs | no | opacity | section navigation and tab state | rapidly auto-rotating content | near-instant opacity or color state | `snippets/core/tabs/tabs-fade.html` |
| `bsx-tabs-underline-slide` | core | tabs | no | translate | section navigation and tab state | rapidly auto-rotating content | opacity-only near-instant state | `snippets/core/tabs/tabs-underline-slide.html` |
| `bsx-tabs-pill-active-pop` | core | tabs | no | scale | section navigation and tab state | rapidly auto-rotating content | opacity-only near-instant state | `snippets/core/tabs/tabs-pill-active-pop.html` |
| `bsx-nav-link-hover-underline` | core | navbar | no | translate | section navigation and tab state | rapidly auto-rotating content | opacity-only near-instant state | `snippets/core/navbar/nav-link-hover-underline.html` |
| `bsx-nav-sidebar-active-marker` | core | sidebar | no | translate | section navigation and tab state | rapidly auto-rotating content | opacity-only near-instant state | `snippets/core/sidebar/nav-sidebar-active-marker.html` |
| `bsx-accordion-icon-rotate` | core | accordion | no | rotate | disclosure controls | content that must remain continuously visible | opacity-only near-instant state | `snippets/core/accordion/accordion-icon-rotate.html` |
| `bsx-accordion-icon-plus-minus` | core | accordion | no | rotate | disclosure controls | content that must remain continuously visible | opacity-only near-instant state | `snippets/core/accordion/accordion-icon-plus-minus.html` |
| `bsx-accordion-body-fade` | core | accordion | no | opacity | disclosure controls | content that must remain continuously visible | near-instant opacity or color state | `snippets/core/accordion/accordion-body-fade.html` |
| `bsx-collapse-soft` | core | accordion | no | opacity | disclosure controls | content that must remain continuously visible | opacity-only near-instant state | `snippets/core/accordion/collapse-soft.html` |
| `bsx-collapse-height-smooth` | core | accordion | no | color + opacity | disclosure controls | content that must remain continuously visible | opacity-only near-instant state | `snippets/core/accordion/collapse-height-smooth.html` |
| `bsx-navbar-link-hover-line` | core | navbar | no | translate | application navigation | small inline controls | opacity-only near-instant state | `snippets/core/navbar/navbar-link-hover-line.html` |
| `bsx-navbar-mobile-collapse-soft` | core | navbar | no | opacity | application navigation | small inline controls | opacity-only near-instant state | `snippets/core/navbar/navbar-mobile-collapse-soft.html` |
| `bsx-navbar-toggler-morph` | core | navbar | no | rotate | application navigation | small inline controls | opacity-only near-instant state | `snippets/core/navbar/navbar-toggler-morph.html` |
| `bsx-sidebar-slide-in` | core | sidebar | no | translate | application navigation | small inline controls | opacity-only near-instant state | `snippets/core/sidebar/sidebar-slide-in.html` |
| `bsx-sidebar-item-active-marker` | core | sidebar | no | translate | application navigation | small inline controls | opacity-only near-instant state | `snippets/core/sidebar/sidebar-item-active-marker.html` |
| `bsx-badge-pop` | core | badge | no | scale | status and metric updates | long text content | opacity-only near-instant state | `snippets/core/badge/badge-pop.html` |
| `bsx-badge-notification-ping` | core | badge | no | scale | status and metric updates | long text content | opacity-only near-instant state | `snippets/core/badge/badge-notification-ping.html` |
| `bsx-badge-status-pulse` | core | badge | no | scale | status and metric updates | long text content | opacity-only near-instant state | `snippets/core/badge/badge-status-pulse.html` |
| `bsx-counter-bump` | core | counter | yes | scale | status and metric updates | long text content | opacity-only near-instant state | `snippets/core/counter/counter-bump.html` |
| `bsx-metric-card-update` | core | counter | yes | color + opacity | status and metric updates | long text content | opacity-only near-instant state | `snippets/core/counter/metric-card-update.html` |
| `bsx-table-row-hover` | core | table | no | color + opacity | row state and collection changes | large simultaneous batches | opacity-only near-instant state | `snippets/core/table/table-row-hover.html` |
| `bsx-table-row-insert` | core | table | yes | translate | row state and collection changes | large simultaneous batches | opacity-only near-instant state | `snippets/core/table/table-row-insert.html` |
| `bsx-table-row-remove` | core | table | yes | translate | row state and collection changes | large simultaneous batches | opacity-only near-instant state | `snippets/core/table/table-row-remove.html` |
| `bsx-table-row-update-flash` | core | table | yes | opacity | row state and collection changes | large simultaneous batches | opacity-only near-instant state | `snippets/core/table/table-row-update-flash.html` |
| `bsx-list-item-stagger` | core | list | no | translate | row state and collection changes | large simultaneous batches | opacity-only near-instant state | `snippets/core/list/list-item-stagger.html` |
| `bsx-list-group-active-marker` | core | list | no | translate | row state and collection changes | large simultaneous batches | opacity-only near-instant state | `snippets/core/list/list-group-active-marker.html` |
| `bsx-skeleton-shimmer` | core | skeleton | no | opacity | short loading states | unknown or very long waits without status | opacity-only near-instant state | `snippets/core/skeleton/skeleton-shimmer.html` |
| `bsx-skeleton-pulse` | core | skeleton | no | scale + opacity | short loading states | unknown or very long waits without status | opacity-only near-instant state | `snippets/core/skeleton/skeleton-pulse.html` |
| `bsx-skeleton-card` | core | skeleton | no | opacity | short loading states | unknown or very long waits without status | opacity-only near-instant state | `snippets/core/skeleton/skeleton-card.html` |
| `bsx-skeleton-table` | core | skeleton | no | opacity | short loading states | unknown or very long waits without status | opacity-only near-instant state | `snippets/core/skeleton/skeleton-table.html` |
| `bsx-loader-dots` | core | loading state | no | color + opacity | short loading states | unknown or very long waits without status | opacity-only near-instant state | `snippets/core/loading/loader-dots.html` |
| `bsx-page-loading-fade` | core | loading state | no | opacity | short loading states | unknown or very long waits without status | near-instant opacity or color state | `snippets/core/loading/page-loading-fade.html` |
| `bsx-modal-scale-sm` | extended | modal | no | scale | dialogs and confirmations | dense repeated workflows | opacity-only near-instant state | `snippets/extended/modal/modal-scale-sm.html` |
| `bsx-modal-scale-lg` | extended | modal | no | scale | dialogs and confirmations | dense repeated workflows | opacity-only near-instant state | `snippets/extended/modal/modal-scale-lg.html` |
| `bsx-modal-slide-down` | extended | modal | no | translate | dialogs and confirmations | dense repeated workflows | opacity-only near-instant state | `snippets/extended/modal/modal-slide-down.html` |
| `bsx-modal-slide-left` | extended | modal | no | translate | dialogs and confirmations | dense repeated workflows | opacity-only near-instant state | `snippets/extended/modal/modal-slide-left.html` |
| `bsx-modal-slide-right` | extended | modal | no | translate | dialogs and confirmations | dense repeated workflows | opacity-only near-instant state | `snippets/extended/modal/modal-slide-right.html` |
| `bsx-modal-fade-soft` | extended | modal | no | opacity | dialogs and confirmations | dense repeated workflows | near-instant opacity or color state | `snippets/extended/modal/modal-fade-soft.html` |
| `bsx-modal-zoom-blur` | extended | modal | no | scale + opacity | dialogs and confirmations | dense repeated workflows | near-instant opacity or color state | `snippets/extended/modal/modal-zoom-blur.html` |
| `bsx-modal-fullscreen-soft` | extended | modal | no | opacity | dialogs and confirmations | dense repeated workflows | opacity-only near-instant state | `snippets/extended/modal/modal-fullscreen-soft.html` |
| `bsx-modal-stack-pop` | extended | modal | no | scale | dialogs and confirmations | dense repeated workflows | opacity-only near-instant state | `snippets/extended/modal/modal-stack-pop.html` |
| `bsx-modal-content-stagger` | extended | modal | no | translate | dialogs and confirmations | dense repeated workflows | opacity-only near-instant state | `snippets/extended/modal/modal-content-stagger.html` |
| `bsx-dropdown-slide-up` | extended | dropdown | no | translate | menus with clear visual hierarchy | menus requiring instant state changes | opacity-only near-instant state | `snippets/extended/dropdown/dropdown-slide-up.html` |
| `bsx-dropdown-fade` | extended | dropdown | no | opacity | menus with clear visual hierarchy | menus requiring instant state changes | near-instant opacity or color state | `snippets/extended/dropdown/dropdown-fade.html` |
| `bsx-dropdown-origin-top` | extended | dropdown | no | color + opacity | menus with clear visual hierarchy | menus requiring instant state changes | opacity-only near-instant state | `snippets/extended/dropdown/dropdown-origin-top.html` |
| `bsx-dropdown-origin-bottom` | extended | dropdown | no | color + opacity | menus with clear visual hierarchy | menus requiring instant state changes | opacity-only near-instant state | `snippets/extended/dropdown/dropdown-origin-bottom.html` |
| `bsx-dropdown-blur` | extended | dropdown | no | opacity | menus with clear visual hierarchy | menus requiring instant state changes | near-instant opacity or color state | `snippets/extended/dropdown/dropdown-blur.html` |
| `bsx-dropdown-item-hover-bg` | extended | dropdown | no | color + opacity | menus with clear visual hierarchy | menus requiring instant state changes | opacity-only near-instant state | `snippets/extended/dropdown/dropdown-item-hover-bg.html` |
| `bsx-dropdown-item-active-pop` | extended | dropdown | no | scale | menus with clear visual hierarchy | menus requiring instant state changes | opacity-only near-instant state | `snippets/extended/dropdown/dropdown-item-active-pop.html` |
| `bsx-dropdown-user-menu` | extended | dropdown | no | color + opacity | menus with clear visual hierarchy | menus requiring instant state changes | opacity-only near-instant state | `snippets/extended/dropdown/dropdown-user-menu.html` |
| `bsx-offcanvas-slide-fast` | extended | offcanvas | no | translate | navigation and mobile panels | permanent desktop navigation | opacity-only near-instant state | `snippets/extended/offcanvas/offcanvas-slide-fast.html` |
| `bsx-offcanvas-slide-slow` | extended | offcanvas | no | translate | navigation and mobile panels | permanent desktop navigation | opacity-only near-instant state | `snippets/extended/offcanvas/offcanvas-slide-slow.html` |
| `bsx-offcanvas-left-soft` | extended | offcanvas | no | opacity | navigation and mobile panels | permanent desktop navigation | opacity-only near-instant state | `snippets/extended/offcanvas/offcanvas-left-soft.html` |
| `bsx-offcanvas-right-soft` | extended | offcanvas | no | opacity | navigation and mobile panels | permanent desktop navigation | opacity-only near-instant state | `snippets/extended/offcanvas/offcanvas-right-soft.html` |
| `bsx-offcanvas-bottom-sheet` | extended | offcanvas | no | translate | navigation and mobile panels | permanent desktop navigation | opacity-only near-instant state | `snippets/extended/offcanvas/offcanvas-bottom-sheet.html` |
| `bsx-offcanvas-header-reveal` | extended | offcanvas | no | translate | navigation and mobile panels | permanent desktop navigation | opacity-only near-instant state | `snippets/extended/offcanvas/offcanvas-header-reveal.html` |
| `bsx-toast-slide-left` | extended | toast | yes | translate | brief asynchronous feedback | critical information requiring confirmation | opacity-only near-instant state | `snippets/extended/toast/toast-slide-left.html` |
| `bsx-toast-slide-top` | extended | toast | yes | translate | brief asynchronous feedback | critical information requiring confirmation | opacity-only near-instant state | `snippets/extended/toast/toast-slide-top.html` |
| `bsx-toast-slide-bottom` | extended | toast | yes | translate | brief asynchronous feedback | critical information requiring confirmation | opacity-only near-instant state | `snippets/extended/toast/toast-slide-bottom.html` |
| `bsx-toast-warning-pulse` | extended | toast | yes | scale | brief asynchronous feedback | critical information requiring confirmation | opacity-only near-instant state | `snippets/extended/toast/toast-warning-pulse.html` |
| `bsx-toast-auto-hide-bar` | extended | toast | yes | color + opacity | brief asynchronous feedback | critical information requiring confirmation | opacity-only near-instant state | `snippets/extended/toast/toast-auto-hide-bar.html` |
| `bsx-toast-icon-bounce` | extended | toast | yes | scale | brief asynchronous feedback | critical information requiring confirmation | opacity-only near-instant state | `snippets/extended/toast/toast-icon-bounce.html` |
| `bsx-alert-slide-up` | extended | alert | no | translate | inline feedback and validation summaries | decorative content | opacity-only near-instant state | `snippets/extended/alert/alert-slide-up.html` |
| `bsx-alert-fade-soft` | extended | alert | no | opacity | inline feedback and validation summaries | decorative content | near-instant opacity or color state | `snippets/extended/alert/alert-fade-soft.html` |
| `bsx-alert-danger-flash` | extended | alert | no | opacity | inline feedback and validation summaries | decorative content | opacity-only near-instant state | `snippets/extended/alert/alert-danger-flash.html` |
| `bsx-alert-warning-attention` | extended | alert | no | shake | inline feedback and validation summaries | decorative content | opacity-only near-instant state | `snippets/extended/alert/alert-warning-attention.html` |
| `bsx-button-hover-slide-bg` | extended | button | no | translate | direct interaction feedback | large continuously animated areas | opacity-only near-instant state | `snippets/extended/button/button-hover-slide-bg.html` |
| `bsx-button-success-check` | extended | button | yes | color + opacity | direct interaction feedback | large continuously animated areas | opacity-only near-instant state | `snippets/extended/button/button-success-check.html` |
| `bsx-button-danger-pulse` | extended | button | no | scale | direct interaction feedback | large continuously animated areas | opacity-only near-instant state | `snippets/extended/button/button-danger-pulse.html` |
| `bsx-button-icon-bounce` | extended | button | no | scale | direct interaction feedback | large continuously animated areas | opacity-only near-instant state | `snippets/extended/button/button-icon-bounce.html` |
| `bsx-button-group-active-slide` | extended | button | no | translate | direct interaction feedback | large continuously animated areas | opacity-only near-instant state | `snippets/extended/button/button-group-active-slide.html` |
| `bsx-button-disabled-soft` | extended | button | no | opacity | direct interaction feedback | large continuously animated areas | opacity-only near-instant state | `snippets/extended/button/button-disabled-soft.html` |
| `bsx-form-focus-glow` | extended | form | no | opacity | focus and validation feedback | replacing native validation semantics | near-instant opacity or color state | `snippets/extended/form/form-focus-glow.html` |
| `bsx-form-invalid-pulse` | extended | form | no | scale | focus and validation feedback | replacing native validation semantics | opacity-only near-instant state | `snippets/extended/form/form-invalid-pulse.html` |
| `bsx-form-label-float-soft` | extended | form | no | opacity | focus and validation feedback | replacing native validation semantics | opacity-only near-instant state | `snippets/extended/form/form-label-float-soft.html` |
| `bsx-form-input-clear-pop` | extended | form | yes | scale | focus and validation feedback | replacing native validation semantics | opacity-only near-instant state | `snippets/extended/form/form-input-clear-pop.html` |
| `bsx-form-select-open-soft` | extended | form | no | opacity | focus and validation feedback | replacing native validation semantics | opacity-only near-instant state | `snippets/extended/form/form-select-open-soft.html` |
| `bsx-form-radio-pop` | extended | form | no | scale | focus and validation feedback | replacing native validation semantics | opacity-only near-instant state | `snippets/extended/form/form-radio-pop.html` |
| `bsx-card-hover-border` | extended | card | no | color + opacity | interactive content collections | non-interactive dense tables | opacity-only near-instant state | `snippets/extended/card/card-hover-border.html` |
| `bsx-card-hover-glow` | extended | card | no | opacity | interactive content collections | non-interactive dense tables | near-instant opacity or color state | `snippets/extended/card/card-hover-glow.html` |
| `bsx-card-click-press` | extended | card | no | scale | interactive content collections | non-interactive dense tables | opacity-only near-instant state | `snippets/extended/card/card-click-press.html` |
| `bsx-card-reveal` | extended | card | no | translate | interactive content collections | non-interactive dense tables | opacity-only near-instant state | `snippets/extended/card/card-reveal.html` |
| `bsx-card-footer-reveal` | extended | card | no | translate | interactive content collections | non-interactive dense tables | opacity-only near-instant state | `snippets/extended/card/card-footer-reveal.html` |
| `bsx-card-action-slide` | extended | card | no | translate | interactive content collections | non-interactive dense tables | opacity-only near-instant state | `snippets/extended/card/card-action-slide.html` |
| `bsx-tabs-slide-left` | extended | tabs | no | translate | section navigation and tab state | rapidly auto-rotating content | opacity-only near-instant state | `snippets/extended/tabs/tabs-slide-left.html` |
| `bsx-tabs-slide-right` | extended | tabs | no | translate | section navigation and tab state | rapidly auto-rotating content | opacity-only near-instant state | `snippets/extended/tabs/tabs-slide-right.html` |
| `bsx-tabs-content-reveal` | extended | tabs | no | translate | section navigation and tab state | rapidly auto-rotating content | opacity-only near-instant state | `snippets/extended/tabs/tabs-content-reveal.html` |
| `bsx-tabs-content-blur` | extended | tabs | no | opacity | section navigation and tab state | rapidly auto-rotating content | near-instant opacity or color state | `snippets/extended/tabs/tabs-content-blur.html` |
| `bsx-nav-link-hover-slide` | extended | navbar | no | translate | section navigation and tab state | rapidly auto-rotating content | opacity-only near-instant state | `snippets/extended/navbar/nav-link-hover-slide.html` |
| `bsx-nav-sidebar-collapse-soft` | extended | sidebar | no | opacity | section navigation and tab state | rapidly auto-rotating content | opacity-only near-instant state | `snippets/extended/sidebar/nav-sidebar-collapse-soft.html` |
| `bsx-accordion-body-slide` | extended | accordion | no | translate | disclosure controls | content that must remain continuously visible | opacity-only near-instant state | `snippets/extended/accordion/accordion-body-slide.html` |
| `bsx-accordion-header-hover` | extended | accordion | no | color + opacity | disclosure controls | content that must remain continuously visible | opacity-only near-instant state | `snippets/extended/accordion/accordion-header-hover.html` |
| `bsx-accordion-active-glow` | extended | accordion | no | opacity | disclosure controls | content that must remain continuously visible | near-instant opacity or color state | `snippets/extended/accordion/accordion-active-glow.html` |
| `bsx-collapse-fade` | extended | accordion | no | opacity | disclosure controls | content that must remain continuously visible | near-instant opacity or color state | `snippets/extended/accordion/collapse-fade.html` |
| `bsx-collapse-card-reveal` | extended | accordion | no | translate | disclosure controls | content that must remain continuously visible | opacity-only near-instant state | `snippets/extended/accordion/collapse-card-reveal.html` |
| `bsx-navbar-brand-pop` | extended | navbar | no | scale | application navigation | small inline controls | opacity-only near-instant state | `snippets/extended/navbar/navbar-brand-pop.html` |
| `bsx-navbar-link-hover-bg` | extended | navbar | no | color + opacity | application navigation | small inline controls | opacity-only near-instant state | `snippets/extended/navbar/navbar-link-hover-bg.html` |
| `bsx-navbar-toggler-spin` | extended | navbar | no | rotate | application navigation | small inline controls | opacity-only near-instant state | `snippets/extended/navbar/navbar-toggler-spin.html` |
| `bsx-sidebar-item-hover-slide` | extended | sidebar | no | translate | application navigation | small inline controls | opacity-only near-instant state | `snippets/extended/sidebar/sidebar-item-hover-slide.html` |
| `bsx-sidebar-submenu-reveal` | extended | sidebar | no | translate | application navigation | small inline controls | opacity-only near-instant state | `snippets/extended/sidebar/sidebar-submenu-reveal.html` |
| `bsx-sidebar-mini-expand` | extended | sidebar | no | color + opacity | application navigation | small inline controls | opacity-only near-instant state | `snippets/extended/sidebar/sidebar-mini-expand.html` |
| `bsx-sidebar-overlay-blur` | extended | sidebar | no | opacity | application navigation | small inline controls | near-instant opacity or color state | `snippets/extended/sidebar/sidebar-overlay-blur.html` |
| `bsx-badge-pulse` | extended | badge | no | scale | status and metric updates | long text content | opacity-only near-instant state | `snippets/extended/badge/badge-pulse.html` |
| `bsx-badge-count-bump` | extended | badge | no | scale | status and metric updates | long text content | opacity-only near-instant state | `snippets/extended/badge/badge-count-bump.html` |
| `bsx-badge-status-dot` | extended | badge | no | color + opacity | status and metric updates | long text content | opacity-only near-instant state | `snippets/extended/badge/badge-status-dot.html` |
| `bsx-counter-change-up` | extended | counter | yes | color + opacity | status and metric updates | long text content | opacity-only near-instant state | `snippets/extended/counter/counter-change-up.html` |
| `bsx-counter-change-down` | extended | counter | yes | color + opacity | status and metric updates | long text content | opacity-only near-instant state | `snippets/extended/counter/counter-change-down.html` |
| `bsx-price-change-flash` | extended | counter | yes | opacity | status and metric updates | long text content | opacity-only near-instant state | `snippets/extended/counter/price-change-flash.html` |
| `bsx-table-row-selected` | extended | table | yes | color + opacity | row state and collection changes | large simultaneous batches | opacity-only near-instant state | `snippets/extended/table/table-row-selected.html` |
| `bsx-table-sort-icon-rotate` | extended | table | yes | rotate | row state and collection changes | large simultaneous batches | opacity-only near-instant state | `snippets/extended/table/table-sort-icon-rotate.html` |
| `bsx-table-filter-reveal` | extended | table | no | translate | row state and collection changes | large simultaneous batches | opacity-only near-instant state | `snippets/extended/table/table-filter-reveal.html` |
| `bsx-list-item-reveal` | extended | list | no | translate | row state and collection changes | large simultaneous batches | opacity-only near-instant state | `snippets/extended/list/list-item-reveal.html` |
| `bsx-list-item-remove` | extended | list | yes | translate | row state and collection changes | large simultaneous batches | opacity-only near-instant state | `snippets/extended/list/list-item-remove.html` |
| `bsx-list-group-hover-slide` | extended | list | no | translate | row state and collection changes | large simultaneous batches | opacity-only near-instant state | `snippets/extended/list/list-group-hover-slide.html` |
| `bsx-skeleton-wave` | extended | skeleton | no | opacity | short loading states | unknown or very long waits without status | opacity-only near-instant state | `snippets/extended/skeleton/skeleton-wave.html` |
| `bsx-skeleton-avatar` | extended | skeleton | no | opacity | short loading states | unknown or very long waits without status | opacity-only near-instant state | `snippets/extended/skeleton/skeleton-avatar.html` |
| `bsx-skeleton-button` | extended | skeleton | no | opacity | short loading states | unknown or very long waits without status | opacity-only near-instant state | `snippets/extended/skeleton/skeleton-button.html` |
| `bsx-spinner-fade` | extended | loading state | no | opacity + rotate | short loading states | unknown or very long waits without status | near-instant opacity or color state | `snippets/extended/loading/spinner-fade.html` |
| `bsx-spinner-scale` | extended | loading state | no | scale + rotate | short loading states | unknown or very long waits without status | opacity-only near-instant state | `snippets/extended/loading/spinner-scale.html` |
| `bsx-loader-bar` | extended | loading state | no | color + opacity | short loading states | unknown or very long waits without status | opacity-only near-instant state | `snippets/extended/loading/loader-bar.html` |
| `bsx-image-hover-zoom` | extended | image | no | scale | media previews and galleries | essential images that must remain static | opacity-only near-instant state | `snippets/extended/image/image-hover-zoom.html` |
| `bsx-image-hover-fade` | extended | image | no | opacity | media previews and galleries | essential images that must remain static | near-instant opacity or color state | `snippets/extended/image/image-hover-fade.html` |
| `bsx-image-hover-overlay` | extended | image | no | color + opacity | media previews and galleries | essential images that must remain static | opacity-only near-instant state | `snippets/extended/image/image-hover-overlay.html` |
| `bsx-image-hover-caption-slide` | extended | image | no | translate | media previews and galleries | essential images that must remain static | opacity-only near-instant state | `snippets/extended/image/image-hover-caption-slide.html` |
| `bsx-image-lazy-reveal` | extended | image | no | translate | media previews and galleries | essential images that must remain static | opacity-only near-instant state | `snippets/extended/image/image-lazy-reveal.html` |
| `bsx-avatar-pop` | extended | image | no | scale | media previews and galleries | essential images that must remain static | opacity-only near-instant state | `snippets/extended/image/avatar-pop.html` |
| `bsx-avatar-status-pulse` | extended | image | no | scale | media previews and galleries | essential images that must remain static | opacity-only near-instant state | `snippets/extended/image/avatar-status-pulse.html` |
| `bsx-gallery-item-reveal` | extended | image | no | translate | media previews and galleries | essential images that must remain static | opacity-only near-instant state | `snippets/extended/image/gallery-item-reveal.html` |
| `bsx-carousel-caption-slide` | extended | media | no | translate | media previews and galleries | essential images that must remain static | opacity-only near-instant state | `snippets/extended/media/carousel-caption-slide.html` |
| `bsx-carousel-control-hover` | extended | media | no | color + opacity | media previews and galleries | essential images that must remain static | opacity-only near-instant state | `snippets/extended/media/carousel-control-hover.html` |
| `bsx-tooltip-fade-soft` | extended | tooltip | no | opacity | contextual supporting information | primary task content | near-instant opacity or color state | `snippets/extended/tooltip/tooltip-fade-soft.html` |
| `bsx-tooltip-slide-up` | extended | tooltip | no | translate | contextual supporting information | primary task content | opacity-only near-instant state | `snippets/extended/tooltip/tooltip-slide-up.html` |
| `bsx-tooltip-slide-down` | extended | tooltip | no | translate | contextual supporting information | primary task content | opacity-only near-instant state | `snippets/extended/tooltip/tooltip-slide-down.html` |
| `bsx-tooltip-scale` | extended | tooltip | no | scale | contextual supporting information | primary task content | opacity-only near-instant state | `snippets/extended/tooltip/tooltip-scale.html` |
| `bsx-tooltip-pop` | extended | tooltip | no | scale | contextual supporting information | primary task content | opacity-only near-instant state | `snippets/extended/tooltip/tooltip-pop.html` |
| `bsx-popover-soft` | extended | popover | no | scale + opacity | contextual supporting information | primary task content | opacity-only near-instant state | `snippets/extended/popover/popover-soft.html` |
| `bsx-popover-slide` | extended | popover | no | translate + scale | contextual supporting information | primary task content | opacity-only near-instant state | `snippets/extended/popover/popover-slide.html` |
| `bsx-popover-blur` | extended | popover | no | scale + opacity | contextual supporting information | primary task content | near-instant opacity or color state | `snippets/extended/popover/popover-blur.html` |
| `bsx-popover-content-stagger` | extended | popover | no | translate + scale | contextual supporting information | primary task content | opacity-only near-instant state | `snippets/extended/popover/popover-content-stagger.html` |
| `bsx-popover-dismiss-fade` | extended | popover | no | scale + opacity | contextual supporting information | primary task content | near-instant opacity or color state | `snippets/extended/popover/popover-dismiss-fade.html` |
| `bsx-progress-fill-soft` | extended | progress | no | translate + opacity | progress and multi-step flows | indeterminate tasks without a status model | opacity-only near-instant state | `snippets/extended/progress/progress-fill-soft.html` |
| `bsx-progress-striped-motion` | extended | progress | no | color + opacity | progress and multi-step flows | indeterminate tasks without a status model | opacity-only near-instant state | `snippets/extended/progress/progress-striped-motion.html` |
| `bsx-progress-success-pop` | extended | progress | no | scale | progress and multi-step flows | indeterminate tasks without a status model | opacity-only near-instant state | `snippets/extended/progress/progress-success-pop.html` |
| `bsx-progress-danger-pulse` | extended | progress | no | scale | progress and multi-step flows | indeterminate tasks without a status model | opacity-only near-instant state | `snippets/extended/progress/progress-danger-pulse.html` |
| `bsx-stepper-active-pop` | extended | stepper | no | scale | progress and multi-step flows | indeterminate tasks without a status model | opacity-only near-instant state | `snippets/extended/stepper/stepper-active-pop.html` |
| `bsx-stepper-complete-check` | extended | stepper | no | color + opacity | progress and multi-step flows | indeterminate tasks without a status model | opacity-only near-instant state | `snippets/extended/stepper/stepper-complete-check.html` |
| `bsx-stepper-line-fill` | extended | stepper | no | translate | progress and multi-step flows | indeterminate tasks without a status model | opacity-only near-instant state | `snippets/extended/stepper/stepper-line-fill.html` |
| `bsx-wizard-page-slide` | extended | stepper | no | translate | progress and multi-step flows | indeterminate tasks without a status model | opacity-only near-instant state | `snippets/extended/stepper/wizard-page-slide.html` |
| `bsx-wizard-page-fade` | extended | stepper | no | opacity | progress and multi-step flows | indeterminate tasks without a status model | near-instant opacity or color state | `snippets/extended/stepper/wizard-page-fade.html` |
| `bsx-page-fade-in` | extended | page | no | opacity | page and section state changes | continuous scroll-driven motion | near-instant opacity or color state | `snippets/extended/page/page-fade-in.html` |
| `bsx-page-slide-up` | extended | page | no | translate | page and section state changes | continuous scroll-driven motion | opacity-only near-instant state | `snippets/extended/page/page-slide-up.html` |
| `bsx-page-section-reveal` | extended | page | no | translate | page and section state changes | continuous scroll-driven motion | opacity-only near-instant state | `snippets/extended/page/page-section-reveal.html` |
| `bsx-page-section-stagger` | extended | page | no | translate | page and section state changes | continuous scroll-driven motion | opacity-only near-instant state | `snippets/extended/page/page-section-stagger.html` |
| `bsx-page-empty-state-pop` | extended | page | no | scale | page and section state changes | continuous scroll-driven motion | opacity-only near-instant state | `snippets/extended/page/page-empty-state-pop.html` |
| `bsx-page-error-shake` | extended | page | no | shake | page and section state changes | continuous scroll-driven motion | opacity-only near-instant state | `snippets/extended/page/page-error-shake.html` |
| `bsx-page-success-check` | extended | page | no | color + opacity | page and section state changes | continuous scroll-driven motion | opacity-only near-instant state | `snippets/extended/page/page-success-check.html` |
| `bsx-content-fade-swap` | extended | page | no | opacity | page and section state changes | continuous scroll-driven motion | near-instant opacity or color state | `snippets/extended/page/content-fade-swap.html` |
| `bsx-content-blur-swap` | extended | page | no | opacity | page and section state changes | continuous scroll-driven motion | near-instant opacity or color state | `snippets/extended/page/content-blur-swap.html` |
| `bsx-scroll-reveal-lite` | extended | page | yes | translate | page and section state changes | continuous scroll-driven motion | opacity-only near-instant state | `snippets/extended/page/scroll-reveal-lite.html` |

## modal-scale

- Category: modal
- Class: `bsx-modal-scale`
- Level: core
- Bootstrap component: modal
- Requires JS: no
- Runtime behavior: none
- Motion: scale
- Best for: dialogs and confirmations
- Avoid for: dense repeated workflows
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/modal/modal-scale.html`

## modal-slide-up

- Category: modal
- Class: `bsx-modal-slide-up`
- Level: core
- Bootstrap component: modal
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: dialogs and confirmations
- Avoid for: dense repeated workflows
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/modal/modal-slide-up.html`

## modal-blur-backdrop

- Category: modal
- Class: `bsx-modal-blur-backdrop`
- Level: core
- Bootstrap component: modal
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: dialogs and confirmations
- Avoid for: dense repeated workflows
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/core/modal/modal-blur-backdrop.html`

## modal-danger-confirm

- Category: modal
- Class: `bsx-modal-danger-confirm`
- Level: core
- Bootstrap component: modal
- Requires JS: no
- Runtime behavior: none
- Motion: color + opacity
- Best for: dialogs and confirmations
- Avoid for: dense repeated workflows
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/modal/modal-danger-confirm.html`

## modal-success-confirm

- Category: modal
- Class: `bsx-modal-success-confirm`
- Level: core
- Bootstrap component: modal
- Requires JS: no
- Runtime behavior: none
- Motion: color + opacity
- Best for: dialogs and confirmations
- Avoid for: dense repeated workflows
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/modal/modal-success-confirm.html`

## modal-sheet-mobile

- Category: modal
- Class: `bsx-modal-sheet-mobile`
- Level: core
- Bootstrap component: modal
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: dialogs and confirmations
- Avoid for: dense repeated workflows
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/modal/modal-sheet-mobile.html`

## dropdown-soft

- Category: dropdown
- Class: `bsx-dropdown-soft`
- Level: core
- Bootstrap component: dropdown
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: menus with clear visual hierarchy
- Avoid for: menus requiring instant state changes
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/dropdown/dropdown-soft.html`

## dropdown-slide-down

- Category: dropdown
- Class: `bsx-dropdown-slide-down`
- Level: core
- Bootstrap component: dropdown
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: menus with clear visual hierarchy
- Avoid for: menus requiring instant state changes
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/dropdown/dropdown-slide-down.html`

## dropdown-scale

- Category: dropdown
- Class: `bsx-dropdown-scale`
- Level: core
- Bootstrap component: dropdown
- Requires JS: no
- Runtime behavior: none
- Motion: scale
- Best for: menus with clear visual hierarchy
- Avoid for: menus requiring instant state changes
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/dropdown/dropdown-scale.html`

## dropdown-menu-stagger

- Category: dropdown
- Class: `bsx-dropdown-menu-stagger`
- Level: core
- Bootstrap component: dropdown
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: menus with clear visual hierarchy
- Avoid for: menus requiring instant state changes
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/dropdown/dropdown-menu-stagger.html`

## dropdown-item-hover-slide

- Category: dropdown
- Class: `bsx-dropdown-item-hover-slide`
- Level: core
- Bootstrap component: dropdown
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: menus with clear visual hierarchy
- Avoid for: menus requiring instant state changes
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/dropdown/dropdown-item-hover-slide.html`

## dropdown-mega-menu-soft

- Category: dropdown
- Class: `bsx-dropdown-mega-menu-soft`
- Level: core
- Bootstrap component: dropdown
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: menus with clear visual hierarchy
- Avoid for: menus requiring instant state changes
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/dropdown/dropdown-mega-menu-soft.html`

## offcanvas-soft

- Category: offcanvas
- Class: `bsx-offcanvas-soft`
- Level: core
- Bootstrap component: offcanvas
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: navigation and mobile panels
- Avoid for: permanent desktop navigation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/offcanvas/offcanvas-soft.html`

## offcanvas-blur-backdrop

- Category: offcanvas
- Class: `bsx-offcanvas-blur-backdrop`
- Level: core
- Bootstrap component: offcanvas
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: navigation and mobile panels
- Avoid for: permanent desktop navigation
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/core/offcanvas/offcanvas-blur-backdrop.html`

## offcanvas-mobile-sheet

- Category: offcanvas
- Class: `bsx-offcanvas-mobile-sheet`
- Level: core
- Bootstrap component: offcanvas
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: navigation and mobile panels
- Avoid for: permanent desktop navigation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/offcanvas/offcanvas-mobile-sheet.html`

## offcanvas-menu-stagger

- Category: offcanvas
- Class: `bsx-offcanvas-menu-stagger`
- Level: core
- Bootstrap component: offcanvas
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: navigation and mobile panels
- Avoid for: permanent desktop navigation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/offcanvas/offcanvas-menu-stagger.html`

## toast-slide-right

- Category: toast
- Class: `bsx-toast-slide-right`
- Level: core
- Bootstrap component: toast
- Requires JS: yes
- Runtime behavior: toast trigger
- Motion: translate
- Best for: brief asynchronous feedback
- Avoid for: critical information requiring confirmation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/toast/toast-slide-right.html`

## toast-pop

- Category: toast
- Class: `bsx-toast-pop`
- Level: core
- Bootstrap component: toast
- Requires JS: yes
- Runtime behavior: toast trigger
- Motion: scale
- Best for: brief asynchronous feedback
- Avoid for: critical information requiring confirmation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/toast/toast-pop.html`

## toast-stack-pop

- Category: toast
- Class: `bsx-toast-stack-pop`
- Level: core
- Bootstrap component: toast
- Requires JS: yes
- Runtime behavior: toast trigger
- Motion: scale
- Best for: brief asynchronous feedback
- Avoid for: critical information requiring confirmation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/toast/toast-stack-pop.html`

## toast-success-pop

- Category: toast
- Class: `bsx-toast-success-pop`
- Level: core
- Bootstrap component: toast
- Requires JS: yes
- Runtime behavior: toast trigger
- Motion: scale
- Best for: brief asynchronous feedback
- Avoid for: critical information requiring confirmation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/toast/toast-success-pop.html`

## toast-error-shake

- Category: toast
- Class: `bsx-toast-error-shake`
- Level: core
- Bootstrap component: toast
- Requires JS: yes
- Runtime behavior: toast trigger
- Motion: shake
- Best for: brief asynchronous feedback
- Avoid for: critical information requiring confirmation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/toast/toast-error-shake.html`

## toast-progress-line

- Category: toast
- Class: `bsx-toast-progress-line`
- Level: core
- Bootstrap component: toast
- Requires JS: yes
- Runtime behavior: toast trigger
- Motion: translate
- Best for: brief asynchronous feedback
- Avoid for: critical information requiring confirmation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/toast/toast-progress-line.html`

## alert-reveal

- Category: alert
- Class: `bsx-alert-reveal`
- Level: core
- Bootstrap component: alert
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: inline feedback and validation summaries
- Avoid for: decorative content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/alert/alert-reveal.html`

## alert-slide-down

- Category: alert
- Class: `bsx-alert-slide-down`
- Level: core
- Bootstrap component: alert
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: inline feedback and validation summaries
- Avoid for: decorative content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/alert/alert-slide-down.html`

## alert-shake

- Category: alert
- Class: `bsx-alert-shake`
- Level: core
- Bootstrap component: alert
- Requires JS: no
- Runtime behavior: none
- Motion: shake
- Best for: inline feedback and validation summaries
- Avoid for: decorative content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/alert/alert-shake.html`

## alert-pulse-border

- Category: alert
- Class: `bsx-alert-pulse-border`
- Level: core
- Bootstrap component: alert
- Requires JS: no
- Runtime behavior: none
- Motion: scale
- Best for: inline feedback and validation summaries
- Avoid for: decorative content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/alert/alert-pulse-border.html`

## alert-success-glow

- Category: alert
- Class: `bsx-alert-success-glow`
- Level: core
- Bootstrap component: alert
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: inline feedback and validation summaries
- Avoid for: decorative content
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/core/alert/alert-success-glow.html`

## alert-dismissible-exit

- Category: alert
- Class: `bsx-alert-dismissible-exit`
- Level: core
- Bootstrap component: alert
- Requires JS: yes
- Runtime behavior: delayed alert dismissal
- Motion: color + opacity
- Best for: inline feedback and validation summaries
- Avoid for: decorative content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/alert/alert-dismissible-exit.html`

## button-press

- Category: button
- Class: `bsx-button-press`
- Level: core
- Bootstrap component: button
- Requires JS: no
- Runtime behavior: none
- Motion: scale
- Best for: direct interaction feedback
- Avoid for: large continuously animated areas
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/button/button-press.html`

## button-hover-lift

- Category: button
- Class: `bsx-button-hover-lift`
- Level: core
- Bootstrap component: button
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: direct interaction feedback
- Avoid for: large continuously animated areas
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/button/button-hover-lift.html`

## button-hover-glow

- Category: button
- Class: `bsx-button-hover-glow`
- Level: core
- Bootstrap component: button
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: direct interaction feedback
- Avoid for: large continuously animated areas
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/core/button/button-hover-glow.html`

## button-loading-spinner

- Category: button
- Class: `bsx-button-loading-spinner`
- Level: core
- Bootstrap component: button
- Requires JS: yes
- Runtime behavior: button loading and success state
- Motion: opacity + rotate
- Best for: direct interaction feedback
- Avoid for: large continuously animated areas
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/button/button-loading-spinner.html`

## button-loading-dots

- Category: button
- Class: `bsx-button-loading-dots`
- Level: core
- Bootstrap component: button
- Requires JS: yes
- Runtime behavior: button loading and success state
- Motion: opacity
- Best for: direct interaction feedback
- Avoid for: large continuously animated areas
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/button/button-loading-dots.html`

## button-success-pop

- Category: button
- Class: `bsx-button-success-pop`
- Level: core
- Bootstrap component: button
- Requires JS: yes
- Runtime behavior: button loading and success state
- Motion: scale
- Best for: direct interaction feedback
- Avoid for: large continuously animated areas
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/button/button-success-pop.html`

## button-icon-slide

- Category: button
- Class: `bsx-button-icon-slide`
- Level: core
- Bootstrap component: button
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: direct interaction feedback
- Avoid for: large continuously animated areas
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/button/button-icon-slide.html`

## button-ripple-lite

- Category: button
- Class: `bsx-button-ripple-lite`
- Level: core
- Bootstrap component: button
- Requires JS: yes
- Runtime behavior: pointer ripple
- Motion: color + opacity
- Best for: direct interaction feedback
- Avoid for: large continuously animated areas
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/button/button-ripple-lite.html`

## form-focus-ring

- Category: form
- Class: `bsx-form-focus-ring`
- Level: core
- Bootstrap component: form
- Requires JS: no
- Runtime behavior: none
- Motion: color + opacity
- Best for: focus and validation feedback
- Avoid for: replacing native validation semantics
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/form/form-focus-ring.html`

## form-invalid-shake

- Category: form
- Class: `bsx-form-invalid-shake`
- Level: core
- Bootstrap component: form
- Requires JS: no
- Runtime behavior: none
- Motion: shake
- Best for: focus and validation feedback
- Avoid for: replacing native validation semantics
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/form/form-invalid-shake.html`

## form-valid-check

- Category: form
- Class: `bsx-form-valid-check`
- Level: core
- Bootstrap component: form
- Requires JS: no
- Runtime behavior: none
- Motion: color + opacity
- Best for: focus and validation feedback
- Avoid for: replacing native validation semantics
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/form/form-valid-check.html`

## form-help-text-reveal

- Category: form
- Class: `bsx-form-help-text-reveal`
- Level: core
- Bootstrap component: form
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: focus and validation feedback
- Avoid for: replacing native validation semantics
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/form/form-help-text-reveal.html`

## form-error-text-slide

- Category: form
- Class: `bsx-form-error-text-slide`
- Level: core
- Bootstrap component: form
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: focus and validation feedback
- Avoid for: replacing native validation semantics
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/form/form-error-text-slide.html`

## form-switch-toggle-soft

- Category: form
- Class: `bsx-form-switch-toggle-soft`
- Level: core
- Bootstrap component: form
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: focus and validation feedback
- Avoid for: replacing native validation semantics
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/form/form-switch-toggle-soft.html`

## form-checkbox-pop

- Category: form
- Class: `bsx-form-checkbox-pop`
- Level: core
- Bootstrap component: form
- Requires JS: no
- Runtime behavior: none
- Motion: scale
- Best for: focus and validation feedback
- Avoid for: replacing native validation semantics
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/form/form-checkbox-pop.html`

## form-file-drop-highlight

- Category: form
- Class: `bsx-form-file-drop-highlight`
- Level: core
- Bootstrap component: form
- Requires JS: yes
- Runtime behavior: file drag state
- Motion: color + opacity
- Best for: focus and validation feedback
- Avoid for: replacing native validation semantics
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/form/form-file-drop-highlight.html`

## card-hover-lift

- Category: card
- Class: `bsx-card-hover-lift`
- Level: core
- Bootstrap component: card
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: interactive content collections
- Avoid for: non-interactive dense tables
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/card/card-hover-lift.html`

## card-hover-scale

- Category: card
- Class: `bsx-card-hover-scale`
- Level: core
- Bootstrap component: card
- Requires JS: no
- Runtime behavior: none
- Motion: scale
- Best for: interactive content collections
- Avoid for: non-interactive dense tables
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/card/card-hover-scale.html`

## card-hover-shadow

- Category: card
- Class: `bsx-card-hover-shadow`
- Level: core
- Bootstrap component: card
- Requires JS: no
- Runtime behavior: none
- Motion: color + opacity
- Best for: interactive content collections
- Avoid for: non-interactive dense tables
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/core/card/card-hover-shadow.html`

## card-image-zoom

- Category: card
- Class: `bsx-card-image-zoom`
- Level: core
- Bootstrap component: card
- Requires JS: no
- Runtime behavior: none
- Motion: scale
- Best for: interactive content collections
- Avoid for: non-interactive dense tables
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/card/card-image-zoom.html`

## card-image-fade-overlay

- Category: card
- Class: `bsx-card-image-fade-overlay`
- Level: core
- Bootstrap component: card
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: interactive content collections
- Avoid for: non-interactive dense tables
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/core/card/card-image-fade-overlay.html`

## card-stagger-list

- Category: card
- Class: `bsx-card-stagger-list`
- Level: core
- Bootstrap component: card
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: interactive content collections
- Avoid for: non-interactive dense tables
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/card/card-stagger-list.html`

## tabs-fade

- Category: tabs/nav
- Class: `bsx-tabs-fade`
- Level: core
- Bootstrap component: tabs
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: section navigation and tab state
- Avoid for: rapidly auto-rotating content
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/core/tabs/tabs-fade.html`

## tabs-underline-slide

- Category: tabs/nav
- Class: `bsx-tabs-underline-slide`
- Level: core
- Bootstrap component: tabs
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: section navigation and tab state
- Avoid for: rapidly auto-rotating content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/tabs/tabs-underline-slide.html`

## tabs-pill-active-pop

- Category: tabs/nav
- Class: `bsx-tabs-pill-active-pop`
- Level: core
- Bootstrap component: tabs
- Requires JS: no
- Runtime behavior: none
- Motion: scale
- Best for: section navigation and tab state
- Avoid for: rapidly auto-rotating content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/tabs/tabs-pill-active-pop.html`

## nav-link-hover-underline

- Category: tabs/nav
- Class: `bsx-nav-link-hover-underline`
- Level: core
- Bootstrap component: navbar
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: section navigation and tab state
- Avoid for: rapidly auto-rotating content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/navbar/nav-link-hover-underline.html`

## nav-sidebar-active-marker

- Category: tabs/nav
- Class: `bsx-nav-sidebar-active-marker`
- Level: core
- Bootstrap component: sidebar
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: section navigation and tab state
- Avoid for: rapidly auto-rotating content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/sidebar/nav-sidebar-active-marker.html`

## accordion-icon-rotate

- Category: accordion/collapse
- Class: `bsx-accordion-icon-rotate`
- Level: core
- Bootstrap component: accordion
- Requires JS: no
- Runtime behavior: none
- Motion: rotate
- Best for: disclosure controls
- Avoid for: content that must remain continuously visible
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/accordion/accordion-icon-rotate.html`

## accordion-icon-plus-minus

- Category: accordion/collapse
- Class: `bsx-accordion-icon-plus-minus`
- Level: core
- Bootstrap component: accordion
- Requires JS: no
- Runtime behavior: none
- Motion: rotate
- Best for: disclosure controls
- Avoid for: content that must remain continuously visible
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/accordion/accordion-icon-plus-minus.html`

## accordion-body-fade

- Category: accordion/collapse
- Class: `bsx-accordion-body-fade`
- Level: core
- Bootstrap component: accordion
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: disclosure controls
- Avoid for: content that must remain continuously visible
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/core/accordion/accordion-body-fade.html`

## collapse-soft

- Category: accordion/collapse
- Class: `bsx-collapse-soft`
- Level: core
- Bootstrap component: accordion
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: disclosure controls
- Avoid for: content that must remain continuously visible
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/accordion/collapse-soft.html`

## collapse-height-smooth

- Category: accordion/collapse
- Class: `bsx-collapse-height-smooth`
- Level: core
- Bootstrap component: accordion
- Requires JS: no
- Runtime behavior: none
- Motion: color + opacity
- Best for: disclosure controls
- Avoid for: content that must remain continuously visible
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/accordion/collapse-height-smooth.html`

## navbar-link-hover-line

- Category: navbar/sidebar
- Class: `bsx-navbar-link-hover-line`
- Level: core
- Bootstrap component: navbar
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: application navigation
- Avoid for: small inline controls
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/navbar/navbar-link-hover-line.html`

## navbar-mobile-collapse-soft

- Category: navbar/sidebar
- Class: `bsx-navbar-mobile-collapse-soft`
- Level: core
- Bootstrap component: navbar
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: application navigation
- Avoid for: small inline controls
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/navbar/navbar-mobile-collapse-soft.html`

## navbar-toggler-morph

- Category: navbar/sidebar
- Class: `bsx-navbar-toggler-morph`
- Level: core
- Bootstrap component: navbar
- Requires JS: no
- Runtime behavior: none
- Motion: rotate
- Best for: application navigation
- Avoid for: small inline controls
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/navbar/navbar-toggler-morph.html`

## sidebar-slide-in

- Category: navbar/sidebar
- Class: `bsx-sidebar-slide-in`
- Level: core
- Bootstrap component: sidebar
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: application navigation
- Avoid for: small inline controls
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/sidebar/sidebar-slide-in.html`

## sidebar-item-active-marker

- Category: navbar/sidebar
- Class: `bsx-sidebar-item-active-marker`
- Level: core
- Bootstrap component: sidebar
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: application navigation
- Avoid for: small inline controls
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/sidebar/sidebar-item-active-marker.html`

## badge-pop

- Category: badge/counter
- Class: `bsx-badge-pop`
- Level: core
- Bootstrap component: badge
- Requires JS: no
- Runtime behavior: none
- Motion: scale
- Best for: status and metric updates
- Avoid for: long text content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/badge/badge-pop.html`

## badge-notification-ping

- Category: badge/counter
- Class: `bsx-badge-notification-ping`
- Level: core
- Bootstrap component: badge
- Requires JS: no
- Runtime behavior: none
- Motion: scale
- Best for: status and metric updates
- Avoid for: long text content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/badge/badge-notification-ping.html`

## badge-status-pulse

- Category: badge/counter
- Class: `bsx-badge-status-pulse`
- Level: core
- Bootstrap component: badge
- Requires JS: no
- Runtime behavior: none
- Motion: scale
- Best for: status and metric updates
- Avoid for: long text content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/badge/badge-status-pulse.html`

## counter-bump

- Category: badge/counter
- Class: `bsx-counter-bump`
- Level: core
- Bootstrap component: counter
- Requires JS: yes
- Runtime behavior: counter update
- Motion: scale
- Best for: status and metric updates
- Avoid for: long text content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/counter/counter-bump.html`

## metric-card-update

- Category: badge/counter
- Class: `bsx-metric-card-update`
- Level: core
- Bootstrap component: counter
- Requires JS: yes
- Runtime behavior: counter update
- Motion: color + opacity
- Best for: status and metric updates
- Avoid for: long text content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/counter/metric-card-update.html`

## table-row-hover

- Category: table/list
- Class: `bsx-table-row-hover`
- Level: core
- Bootstrap component: table
- Requires JS: no
- Runtime behavior: none
- Motion: color + opacity
- Best for: row state and collection changes
- Avoid for: large simultaneous batches
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/table/table-row-hover.html`

## table-row-insert

- Category: table/list
- Class: `bsx-table-row-insert`
- Level: core
- Bootstrap component: table
- Requires JS: yes
- Runtime behavior: table row mutation
- Motion: translate
- Best for: row state and collection changes
- Avoid for: large simultaneous batches
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/table/table-row-insert.html`

## table-row-remove

- Category: table/list
- Class: `bsx-table-row-remove`
- Level: core
- Bootstrap component: table
- Requires JS: yes
- Runtime behavior: table row mutation
- Motion: translate
- Best for: row state and collection changes
- Avoid for: large simultaneous batches
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/table/table-row-remove.html`

## table-row-update-flash

- Category: table/list
- Class: `bsx-table-row-update-flash`
- Level: core
- Bootstrap component: table
- Requires JS: yes
- Runtime behavior: table row mutation
- Motion: opacity
- Best for: row state and collection changes
- Avoid for: large simultaneous batches
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/table/table-row-update-flash.html`

## list-item-stagger

- Category: table/list
- Class: `bsx-list-item-stagger`
- Level: core
- Bootstrap component: list
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: row state and collection changes
- Avoid for: large simultaneous batches
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/list/list-item-stagger.html`

## list-group-active-marker

- Category: table/list
- Class: `bsx-list-group-active-marker`
- Level: core
- Bootstrap component: list
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: row state and collection changes
- Avoid for: large simultaneous batches
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/list/list-group-active-marker.html`

## skeleton-shimmer

- Category: skeleton/loading
- Class: `bsx-skeleton-shimmer`
- Level: core
- Bootstrap component: skeleton
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: short loading states
- Avoid for: unknown or very long waits without status
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/skeleton/skeleton-shimmer.html`

## skeleton-pulse

- Category: skeleton/loading
- Class: `bsx-skeleton-pulse`
- Level: core
- Bootstrap component: skeleton
- Requires JS: no
- Runtime behavior: none
- Motion: scale + opacity
- Best for: short loading states
- Avoid for: unknown or very long waits without status
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/skeleton/skeleton-pulse.html`

## skeleton-card

- Category: skeleton/loading
- Class: `bsx-skeleton-card`
- Level: core
- Bootstrap component: skeleton
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: short loading states
- Avoid for: unknown or very long waits without status
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/skeleton/skeleton-card.html`

## skeleton-table

- Category: skeleton/loading
- Class: `bsx-skeleton-table`
- Level: core
- Bootstrap component: skeleton
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: short loading states
- Avoid for: unknown or very long waits without status
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/skeleton/skeleton-table.html`

## loader-dots

- Category: skeleton/loading
- Class: `bsx-loader-dots`
- Level: core
- Bootstrap component: loading state
- Requires JS: no
- Runtime behavior: none
- Motion: color + opacity
- Best for: short loading states
- Avoid for: unknown or very long waits without status
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/loading/loader-dots.html`

## page-loading-fade

- Category: skeleton/loading
- Class: `bsx-page-loading-fade`
- Level: core
- Bootstrap component: loading state
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: short loading states
- Avoid for: unknown or very long waits without status
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/core/loading/page-loading-fade.html`

## modal-scale-sm

- Category: modal
- Class: `bsx-modal-scale-sm`
- Level: extended
- Bootstrap component: modal
- Requires JS: no
- Runtime behavior: none
- Motion: scale
- Best for: dialogs and confirmations
- Avoid for: dense repeated workflows
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/modal/modal-scale-sm.html`

## modal-scale-lg

- Category: modal
- Class: `bsx-modal-scale-lg`
- Level: extended
- Bootstrap component: modal
- Requires JS: no
- Runtime behavior: none
- Motion: scale
- Best for: dialogs and confirmations
- Avoid for: dense repeated workflows
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/modal/modal-scale-lg.html`

## modal-slide-down

- Category: modal
- Class: `bsx-modal-slide-down`
- Level: extended
- Bootstrap component: modal
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: dialogs and confirmations
- Avoid for: dense repeated workflows
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/modal/modal-slide-down.html`

## modal-slide-left

- Category: modal
- Class: `bsx-modal-slide-left`
- Level: extended
- Bootstrap component: modal
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: dialogs and confirmations
- Avoid for: dense repeated workflows
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/modal/modal-slide-left.html`

## modal-slide-right

- Category: modal
- Class: `bsx-modal-slide-right`
- Level: extended
- Bootstrap component: modal
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: dialogs and confirmations
- Avoid for: dense repeated workflows
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/modal/modal-slide-right.html`

## modal-fade-soft

- Category: modal
- Class: `bsx-modal-fade-soft`
- Level: extended
- Bootstrap component: modal
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: dialogs and confirmations
- Avoid for: dense repeated workflows
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/modal/modal-fade-soft.html`

## modal-zoom-blur

- Category: modal
- Class: `bsx-modal-zoom-blur`
- Level: extended
- Bootstrap component: modal
- Requires JS: no
- Runtime behavior: none
- Motion: scale + opacity
- Best for: dialogs and confirmations
- Avoid for: dense repeated workflows
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/modal/modal-zoom-blur.html`

## modal-fullscreen-soft

- Category: modal
- Class: `bsx-modal-fullscreen-soft`
- Level: extended
- Bootstrap component: modal
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: dialogs and confirmations
- Avoid for: dense repeated workflows
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/modal/modal-fullscreen-soft.html`

## modal-stack-pop

- Category: modal
- Class: `bsx-modal-stack-pop`
- Level: extended
- Bootstrap component: modal
- Requires JS: no
- Runtime behavior: none
- Motion: scale
- Best for: dialogs and confirmations
- Avoid for: dense repeated workflows
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/modal/modal-stack-pop.html`

## modal-content-stagger

- Category: modal
- Class: `bsx-modal-content-stagger`
- Level: extended
- Bootstrap component: modal
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: dialogs and confirmations
- Avoid for: dense repeated workflows
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/modal/modal-content-stagger.html`

## dropdown-slide-up

- Category: dropdown
- Class: `bsx-dropdown-slide-up`
- Level: extended
- Bootstrap component: dropdown
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: menus with clear visual hierarchy
- Avoid for: menus requiring instant state changes
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/dropdown/dropdown-slide-up.html`

## dropdown-fade

- Category: dropdown
- Class: `bsx-dropdown-fade`
- Level: extended
- Bootstrap component: dropdown
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: menus with clear visual hierarchy
- Avoid for: menus requiring instant state changes
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/dropdown/dropdown-fade.html`

## dropdown-origin-top

- Category: dropdown
- Class: `bsx-dropdown-origin-top`
- Level: extended
- Bootstrap component: dropdown
- Requires JS: no
- Runtime behavior: none
- Motion: color + opacity
- Best for: menus with clear visual hierarchy
- Avoid for: menus requiring instant state changes
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/dropdown/dropdown-origin-top.html`

## dropdown-origin-bottom

- Category: dropdown
- Class: `bsx-dropdown-origin-bottom`
- Level: extended
- Bootstrap component: dropdown
- Requires JS: no
- Runtime behavior: none
- Motion: color + opacity
- Best for: menus with clear visual hierarchy
- Avoid for: menus requiring instant state changes
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/dropdown/dropdown-origin-bottom.html`

## dropdown-blur

- Category: dropdown
- Class: `bsx-dropdown-blur`
- Level: extended
- Bootstrap component: dropdown
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: menus with clear visual hierarchy
- Avoid for: menus requiring instant state changes
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/dropdown/dropdown-blur.html`

## dropdown-item-hover-bg

- Category: dropdown
- Class: `bsx-dropdown-item-hover-bg`
- Level: extended
- Bootstrap component: dropdown
- Requires JS: no
- Runtime behavior: none
- Motion: color + opacity
- Best for: menus with clear visual hierarchy
- Avoid for: menus requiring instant state changes
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/dropdown/dropdown-item-hover-bg.html`

## dropdown-item-active-pop

- Category: dropdown
- Class: `bsx-dropdown-item-active-pop`
- Level: extended
- Bootstrap component: dropdown
- Requires JS: no
- Runtime behavior: none
- Motion: scale
- Best for: menus with clear visual hierarchy
- Avoid for: menus requiring instant state changes
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/dropdown/dropdown-item-active-pop.html`

## dropdown-user-menu

- Category: dropdown
- Class: `bsx-dropdown-user-menu`
- Level: extended
- Bootstrap component: dropdown
- Requires JS: no
- Runtime behavior: none
- Motion: color + opacity
- Best for: menus with clear visual hierarchy
- Avoid for: menus requiring instant state changes
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/dropdown/dropdown-user-menu.html`

## offcanvas-slide-fast

- Category: offcanvas
- Class: `bsx-offcanvas-slide-fast`
- Level: extended
- Bootstrap component: offcanvas
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: navigation and mobile panels
- Avoid for: permanent desktop navigation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/offcanvas/offcanvas-slide-fast.html`

## offcanvas-slide-slow

- Category: offcanvas
- Class: `bsx-offcanvas-slide-slow`
- Level: extended
- Bootstrap component: offcanvas
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: navigation and mobile panels
- Avoid for: permanent desktop navigation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/offcanvas/offcanvas-slide-slow.html`

## offcanvas-left-soft

- Category: offcanvas
- Class: `bsx-offcanvas-left-soft`
- Level: extended
- Bootstrap component: offcanvas
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: navigation and mobile panels
- Avoid for: permanent desktop navigation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/offcanvas/offcanvas-left-soft.html`

## offcanvas-right-soft

- Category: offcanvas
- Class: `bsx-offcanvas-right-soft`
- Level: extended
- Bootstrap component: offcanvas
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: navigation and mobile panels
- Avoid for: permanent desktop navigation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/offcanvas/offcanvas-right-soft.html`

## offcanvas-bottom-sheet

- Category: offcanvas
- Class: `bsx-offcanvas-bottom-sheet`
- Level: extended
- Bootstrap component: offcanvas
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: navigation and mobile panels
- Avoid for: permanent desktop navigation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/offcanvas/offcanvas-bottom-sheet.html`

## offcanvas-header-reveal

- Category: offcanvas
- Class: `bsx-offcanvas-header-reveal`
- Level: extended
- Bootstrap component: offcanvas
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: navigation and mobile panels
- Avoid for: permanent desktop navigation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/offcanvas/offcanvas-header-reveal.html`

## toast-slide-left

- Category: toast
- Class: `bsx-toast-slide-left`
- Level: extended
- Bootstrap component: toast
- Requires JS: yes
- Runtime behavior: toast trigger
- Motion: translate
- Best for: brief asynchronous feedback
- Avoid for: critical information requiring confirmation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/toast/toast-slide-left.html`

## toast-slide-top

- Category: toast
- Class: `bsx-toast-slide-top`
- Level: extended
- Bootstrap component: toast
- Requires JS: yes
- Runtime behavior: toast trigger
- Motion: translate
- Best for: brief asynchronous feedback
- Avoid for: critical information requiring confirmation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/toast/toast-slide-top.html`

## toast-slide-bottom

- Category: toast
- Class: `bsx-toast-slide-bottom`
- Level: extended
- Bootstrap component: toast
- Requires JS: yes
- Runtime behavior: toast trigger
- Motion: translate
- Best for: brief asynchronous feedback
- Avoid for: critical information requiring confirmation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/toast/toast-slide-bottom.html`

## toast-warning-pulse

- Category: toast
- Class: `bsx-toast-warning-pulse`
- Level: extended
- Bootstrap component: toast
- Requires JS: yes
- Runtime behavior: toast trigger
- Motion: scale
- Best for: brief asynchronous feedback
- Avoid for: critical information requiring confirmation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/toast/toast-warning-pulse.html`

## toast-auto-hide-bar

- Category: toast
- Class: `bsx-toast-auto-hide-bar`
- Level: extended
- Bootstrap component: toast
- Requires JS: yes
- Runtime behavior: toast trigger
- Motion: color + opacity
- Best for: brief asynchronous feedback
- Avoid for: critical information requiring confirmation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/toast/toast-auto-hide-bar.html`

## toast-icon-bounce

- Category: toast
- Class: `bsx-toast-icon-bounce`
- Level: extended
- Bootstrap component: toast
- Requires JS: yes
- Runtime behavior: toast trigger
- Motion: scale
- Best for: brief asynchronous feedback
- Avoid for: critical information requiring confirmation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/toast/toast-icon-bounce.html`

## alert-slide-up

- Category: alert
- Class: `bsx-alert-slide-up`
- Level: extended
- Bootstrap component: alert
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: inline feedback and validation summaries
- Avoid for: decorative content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/alert/alert-slide-up.html`

## alert-fade-soft

- Category: alert
- Class: `bsx-alert-fade-soft`
- Level: extended
- Bootstrap component: alert
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: inline feedback and validation summaries
- Avoid for: decorative content
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/alert/alert-fade-soft.html`

## alert-danger-flash

- Category: alert
- Class: `bsx-alert-danger-flash`
- Level: extended
- Bootstrap component: alert
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: inline feedback and validation summaries
- Avoid for: decorative content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/alert/alert-danger-flash.html`

## alert-warning-attention

- Category: alert
- Class: `bsx-alert-warning-attention`
- Level: extended
- Bootstrap component: alert
- Requires JS: no
- Runtime behavior: none
- Motion: shake
- Best for: inline feedback and validation summaries
- Avoid for: decorative content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/alert/alert-warning-attention.html`

## button-hover-slide-bg

- Category: button
- Class: `bsx-button-hover-slide-bg`
- Level: extended
- Bootstrap component: button
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: direct interaction feedback
- Avoid for: large continuously animated areas
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/button/button-hover-slide-bg.html`

## button-success-check

- Category: button
- Class: `bsx-button-success-check`
- Level: extended
- Bootstrap component: button
- Requires JS: yes
- Runtime behavior: button loading and success state
- Motion: color + opacity
- Best for: direct interaction feedback
- Avoid for: large continuously animated areas
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/button/button-success-check.html`

## button-danger-pulse

- Category: button
- Class: `bsx-button-danger-pulse`
- Level: extended
- Bootstrap component: button
- Requires JS: no
- Runtime behavior: none
- Motion: scale
- Best for: direct interaction feedback
- Avoid for: large continuously animated areas
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/button/button-danger-pulse.html`

## button-icon-bounce

- Category: button
- Class: `bsx-button-icon-bounce`
- Level: extended
- Bootstrap component: button
- Requires JS: no
- Runtime behavior: none
- Motion: scale
- Best for: direct interaction feedback
- Avoid for: large continuously animated areas
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/button/button-icon-bounce.html`

## button-group-active-slide

- Category: button
- Class: `bsx-button-group-active-slide`
- Level: extended
- Bootstrap component: button
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: direct interaction feedback
- Avoid for: large continuously animated areas
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/button/button-group-active-slide.html`

## button-disabled-soft

- Category: button
- Class: `bsx-button-disabled-soft`
- Level: extended
- Bootstrap component: button
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: direct interaction feedback
- Avoid for: large continuously animated areas
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/button/button-disabled-soft.html`

## form-focus-glow

- Category: form
- Class: `bsx-form-focus-glow`
- Level: extended
- Bootstrap component: form
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: focus and validation feedback
- Avoid for: replacing native validation semantics
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/form/form-focus-glow.html`

## form-invalid-pulse

- Category: form
- Class: `bsx-form-invalid-pulse`
- Level: extended
- Bootstrap component: form
- Requires JS: no
- Runtime behavior: none
- Motion: scale
- Best for: focus and validation feedback
- Avoid for: replacing native validation semantics
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/form/form-invalid-pulse.html`

## form-label-float-soft

- Category: form
- Class: `bsx-form-label-float-soft`
- Level: extended
- Bootstrap component: form
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: focus and validation feedback
- Avoid for: replacing native validation semantics
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/form/form-label-float-soft.html`

## form-input-clear-pop

- Category: form
- Class: `bsx-form-input-clear-pop`
- Level: extended
- Bootstrap component: form
- Requires JS: yes
- Runtime behavior: input clearing
- Motion: scale
- Best for: focus and validation feedback
- Avoid for: replacing native validation semantics
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/form/form-input-clear-pop.html`

## form-select-open-soft

- Category: form
- Class: `bsx-form-select-open-soft`
- Level: extended
- Bootstrap component: form
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: focus and validation feedback
- Avoid for: replacing native validation semantics
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/form/form-select-open-soft.html`

## form-radio-pop

- Category: form
- Class: `bsx-form-radio-pop`
- Level: extended
- Bootstrap component: form
- Requires JS: no
- Runtime behavior: none
- Motion: scale
- Best for: focus and validation feedback
- Avoid for: replacing native validation semantics
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/form/form-radio-pop.html`

## card-hover-border

- Category: card
- Class: `bsx-card-hover-border`
- Level: extended
- Bootstrap component: card
- Requires JS: no
- Runtime behavior: none
- Motion: color + opacity
- Best for: interactive content collections
- Avoid for: non-interactive dense tables
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/card/card-hover-border.html`

## card-hover-glow

- Category: card
- Class: `bsx-card-hover-glow`
- Level: extended
- Bootstrap component: card
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: interactive content collections
- Avoid for: non-interactive dense tables
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/card/card-hover-glow.html`

## card-click-press

- Category: card
- Class: `bsx-card-click-press`
- Level: extended
- Bootstrap component: card
- Requires JS: no
- Runtime behavior: none
- Motion: scale
- Best for: interactive content collections
- Avoid for: non-interactive dense tables
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/card/card-click-press.html`

## card-reveal

- Category: card
- Class: `bsx-card-reveal`
- Level: extended
- Bootstrap component: card
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: interactive content collections
- Avoid for: non-interactive dense tables
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/card/card-reveal.html`

## card-footer-reveal

- Category: card
- Class: `bsx-card-footer-reveal`
- Level: extended
- Bootstrap component: card
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: interactive content collections
- Avoid for: non-interactive dense tables
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/card/card-footer-reveal.html`

## card-action-slide

- Category: card
- Class: `bsx-card-action-slide`
- Level: extended
- Bootstrap component: card
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: interactive content collections
- Avoid for: non-interactive dense tables
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/card/card-action-slide.html`

## tabs-slide-left

- Category: tabs/nav
- Class: `bsx-tabs-slide-left`
- Level: extended
- Bootstrap component: tabs
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: section navigation and tab state
- Avoid for: rapidly auto-rotating content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/tabs/tabs-slide-left.html`

## tabs-slide-right

- Category: tabs/nav
- Class: `bsx-tabs-slide-right`
- Level: extended
- Bootstrap component: tabs
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: section navigation and tab state
- Avoid for: rapidly auto-rotating content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/tabs/tabs-slide-right.html`

## tabs-content-reveal

- Category: tabs/nav
- Class: `bsx-tabs-content-reveal`
- Level: extended
- Bootstrap component: tabs
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: section navigation and tab state
- Avoid for: rapidly auto-rotating content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/tabs/tabs-content-reveal.html`

## tabs-content-blur

- Category: tabs/nav
- Class: `bsx-tabs-content-blur`
- Level: extended
- Bootstrap component: tabs
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: section navigation and tab state
- Avoid for: rapidly auto-rotating content
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/tabs/tabs-content-blur.html`

## nav-link-hover-slide

- Category: tabs/nav
- Class: `bsx-nav-link-hover-slide`
- Level: extended
- Bootstrap component: navbar
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: section navigation and tab state
- Avoid for: rapidly auto-rotating content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/navbar/nav-link-hover-slide.html`

## nav-sidebar-collapse-soft

- Category: tabs/nav
- Class: `bsx-nav-sidebar-collapse-soft`
- Level: extended
- Bootstrap component: sidebar
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: section navigation and tab state
- Avoid for: rapidly auto-rotating content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/sidebar/nav-sidebar-collapse-soft.html`

## accordion-body-slide

- Category: accordion/collapse
- Class: `bsx-accordion-body-slide`
- Level: extended
- Bootstrap component: accordion
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: disclosure controls
- Avoid for: content that must remain continuously visible
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/accordion/accordion-body-slide.html`

## accordion-header-hover

- Category: accordion/collapse
- Class: `bsx-accordion-header-hover`
- Level: extended
- Bootstrap component: accordion
- Requires JS: no
- Runtime behavior: none
- Motion: color + opacity
- Best for: disclosure controls
- Avoid for: content that must remain continuously visible
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/accordion/accordion-header-hover.html`

## accordion-active-glow

- Category: accordion/collapse
- Class: `bsx-accordion-active-glow`
- Level: extended
- Bootstrap component: accordion
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: disclosure controls
- Avoid for: content that must remain continuously visible
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/accordion/accordion-active-glow.html`

## collapse-fade

- Category: accordion/collapse
- Class: `bsx-collapse-fade`
- Level: extended
- Bootstrap component: accordion
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: disclosure controls
- Avoid for: content that must remain continuously visible
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/accordion/collapse-fade.html`

## collapse-card-reveal

- Category: accordion/collapse
- Class: `bsx-collapse-card-reveal`
- Level: extended
- Bootstrap component: accordion
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: disclosure controls
- Avoid for: content that must remain continuously visible
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/accordion/collapse-card-reveal.html`

## navbar-brand-pop

- Category: navbar/sidebar
- Class: `bsx-navbar-brand-pop`
- Level: extended
- Bootstrap component: navbar
- Requires JS: no
- Runtime behavior: none
- Motion: scale
- Best for: application navigation
- Avoid for: small inline controls
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/navbar/navbar-brand-pop.html`

## navbar-link-hover-bg

- Category: navbar/sidebar
- Class: `bsx-navbar-link-hover-bg`
- Level: extended
- Bootstrap component: navbar
- Requires JS: no
- Runtime behavior: none
- Motion: color + opacity
- Best for: application navigation
- Avoid for: small inline controls
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/navbar/navbar-link-hover-bg.html`

## navbar-toggler-spin

- Category: navbar/sidebar
- Class: `bsx-navbar-toggler-spin`
- Level: extended
- Bootstrap component: navbar
- Requires JS: no
- Runtime behavior: none
- Motion: rotate
- Best for: application navigation
- Avoid for: small inline controls
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/navbar/navbar-toggler-spin.html`

## sidebar-item-hover-slide

- Category: navbar/sidebar
- Class: `bsx-sidebar-item-hover-slide`
- Level: extended
- Bootstrap component: sidebar
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: application navigation
- Avoid for: small inline controls
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/sidebar/sidebar-item-hover-slide.html`

## sidebar-submenu-reveal

- Category: navbar/sidebar
- Class: `bsx-sidebar-submenu-reveal`
- Level: extended
- Bootstrap component: sidebar
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: application navigation
- Avoid for: small inline controls
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/sidebar/sidebar-submenu-reveal.html`

## sidebar-mini-expand

- Category: navbar/sidebar
- Class: `bsx-sidebar-mini-expand`
- Level: extended
- Bootstrap component: sidebar
- Requires JS: no
- Runtime behavior: none
- Motion: color + opacity
- Best for: application navigation
- Avoid for: small inline controls
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/sidebar/sidebar-mini-expand.html`

## sidebar-overlay-blur

- Category: navbar/sidebar
- Class: `bsx-sidebar-overlay-blur`
- Level: extended
- Bootstrap component: sidebar
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: application navigation
- Avoid for: small inline controls
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/sidebar/sidebar-overlay-blur.html`

## badge-pulse

- Category: badge/counter
- Class: `bsx-badge-pulse`
- Level: extended
- Bootstrap component: badge
- Requires JS: no
- Runtime behavior: none
- Motion: scale
- Best for: status and metric updates
- Avoid for: long text content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/badge/badge-pulse.html`

## badge-count-bump

- Category: badge/counter
- Class: `bsx-badge-count-bump`
- Level: extended
- Bootstrap component: badge
- Requires JS: no
- Runtime behavior: none
- Motion: scale
- Best for: status and metric updates
- Avoid for: long text content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/badge/badge-count-bump.html`

## badge-status-dot

- Category: badge/counter
- Class: `bsx-badge-status-dot`
- Level: extended
- Bootstrap component: badge
- Requires JS: no
- Runtime behavior: none
- Motion: color + opacity
- Best for: status and metric updates
- Avoid for: long text content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/badge/badge-status-dot.html`

## counter-change-up

- Category: badge/counter
- Class: `bsx-counter-change-up`
- Level: extended
- Bootstrap component: counter
- Requires JS: yes
- Runtime behavior: counter update
- Motion: color + opacity
- Best for: status and metric updates
- Avoid for: long text content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/counter/counter-change-up.html`

## counter-change-down

- Category: badge/counter
- Class: `bsx-counter-change-down`
- Level: extended
- Bootstrap component: counter
- Requires JS: yes
- Runtime behavior: counter update
- Motion: color + opacity
- Best for: status and metric updates
- Avoid for: long text content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/counter/counter-change-down.html`

## price-change-flash

- Category: badge/counter
- Class: `bsx-price-change-flash`
- Level: extended
- Bootstrap component: counter
- Requires JS: yes
- Runtime behavior: counter update
- Motion: opacity
- Best for: status and metric updates
- Avoid for: long text content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/counter/price-change-flash.html`

## table-row-selected

- Category: table/list
- Class: `bsx-table-row-selected`
- Level: extended
- Bootstrap component: table
- Requires JS: yes
- Runtime behavior: table row selection
- Motion: color + opacity
- Best for: row state and collection changes
- Avoid for: large simultaneous batches
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/table/table-row-selected.html`

## table-sort-icon-rotate

- Category: table/list
- Class: `bsx-table-sort-icon-rotate`
- Level: extended
- Bootstrap component: table
- Requires JS: yes
- Runtime behavior: table sort state
- Motion: rotate
- Best for: row state and collection changes
- Avoid for: large simultaneous batches
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/table/table-sort-icon-rotate.html`

## table-filter-reveal

- Category: table/list
- Class: `bsx-table-filter-reveal`
- Level: extended
- Bootstrap component: table
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: row state and collection changes
- Avoid for: large simultaneous batches
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/table/table-filter-reveal.html`

## list-item-reveal

- Category: table/list
- Class: `bsx-list-item-reveal`
- Level: extended
- Bootstrap component: list
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: row state and collection changes
- Avoid for: large simultaneous batches
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/list/list-item-reveal.html`

## list-item-remove

- Category: table/list
- Class: `bsx-list-item-remove`
- Level: extended
- Bootstrap component: list
- Requires JS: yes
- Runtime behavior: list item removal
- Motion: translate
- Best for: row state and collection changes
- Avoid for: large simultaneous batches
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/list/list-item-remove.html`

## list-group-hover-slide

- Category: table/list
- Class: `bsx-list-group-hover-slide`
- Level: extended
- Bootstrap component: list
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: row state and collection changes
- Avoid for: large simultaneous batches
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/list/list-group-hover-slide.html`

## skeleton-wave

- Category: skeleton/loading
- Class: `bsx-skeleton-wave`
- Level: extended
- Bootstrap component: skeleton
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: short loading states
- Avoid for: unknown or very long waits without status
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/skeleton/skeleton-wave.html`

## skeleton-avatar

- Category: skeleton/loading
- Class: `bsx-skeleton-avatar`
- Level: extended
- Bootstrap component: skeleton
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: short loading states
- Avoid for: unknown or very long waits without status
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/skeleton/skeleton-avatar.html`

## skeleton-button

- Category: skeleton/loading
- Class: `bsx-skeleton-button`
- Level: extended
- Bootstrap component: skeleton
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: short loading states
- Avoid for: unknown or very long waits without status
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/skeleton/skeleton-button.html`

## spinner-fade

- Category: skeleton/loading
- Class: `bsx-spinner-fade`
- Level: extended
- Bootstrap component: loading state
- Requires JS: no
- Runtime behavior: none
- Motion: opacity + rotate
- Best for: short loading states
- Avoid for: unknown or very long waits without status
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/loading/spinner-fade.html`

## spinner-scale

- Category: skeleton/loading
- Class: `bsx-spinner-scale`
- Level: extended
- Bootstrap component: loading state
- Requires JS: no
- Runtime behavior: none
- Motion: scale + rotate
- Best for: short loading states
- Avoid for: unknown or very long waits without status
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/loading/spinner-scale.html`

## loader-bar

- Category: skeleton/loading
- Class: `bsx-loader-bar`
- Level: extended
- Bootstrap component: loading state
- Requires JS: no
- Runtime behavior: none
- Motion: color + opacity
- Best for: short loading states
- Avoid for: unknown or very long waits without status
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/loading/loader-bar.html`

## image-hover-zoom

- Category: image/media
- Class: `bsx-image-hover-zoom`
- Level: extended
- Bootstrap component: image
- Requires JS: no
- Runtime behavior: none
- Motion: scale
- Best for: media previews and galleries
- Avoid for: essential images that must remain static
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/image/image-hover-zoom.html`

## image-hover-fade

- Category: image/media
- Class: `bsx-image-hover-fade`
- Level: extended
- Bootstrap component: image
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: media previews and galleries
- Avoid for: essential images that must remain static
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/image/image-hover-fade.html`

## image-hover-overlay

- Category: image/media
- Class: `bsx-image-hover-overlay`
- Level: extended
- Bootstrap component: image
- Requires JS: no
- Runtime behavior: none
- Motion: color + opacity
- Best for: media previews and galleries
- Avoid for: essential images that must remain static
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/image/image-hover-overlay.html`

## image-hover-caption-slide

- Category: image/media
- Class: `bsx-image-hover-caption-slide`
- Level: extended
- Bootstrap component: image
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: media previews and galleries
- Avoid for: essential images that must remain static
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/image/image-hover-caption-slide.html`

## image-lazy-reveal

- Category: image/media
- Class: `bsx-image-lazy-reveal`
- Level: extended
- Bootstrap component: image
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: media previews and galleries
- Avoid for: essential images that must remain static
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/image/image-lazy-reveal.html`

## avatar-pop

- Category: image/media
- Class: `bsx-avatar-pop`
- Level: extended
- Bootstrap component: image
- Requires JS: no
- Runtime behavior: none
- Motion: scale
- Best for: media previews and galleries
- Avoid for: essential images that must remain static
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/image/avatar-pop.html`

## avatar-status-pulse

- Category: image/media
- Class: `bsx-avatar-status-pulse`
- Level: extended
- Bootstrap component: image
- Requires JS: no
- Runtime behavior: none
- Motion: scale
- Best for: media previews and galleries
- Avoid for: essential images that must remain static
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/image/avatar-status-pulse.html`

## gallery-item-reveal

- Category: image/media
- Class: `bsx-gallery-item-reveal`
- Level: extended
- Bootstrap component: image
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: media previews and galleries
- Avoid for: essential images that must remain static
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/image/gallery-item-reveal.html`

## carousel-caption-slide

- Category: image/media
- Class: `bsx-carousel-caption-slide`
- Level: extended
- Bootstrap component: media
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: media previews and galleries
- Avoid for: essential images that must remain static
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/media/carousel-caption-slide.html`

## carousel-control-hover

- Category: image/media
- Class: `bsx-carousel-control-hover`
- Level: extended
- Bootstrap component: media
- Requires JS: no
- Runtime behavior: none
- Motion: color + opacity
- Best for: media previews and galleries
- Avoid for: essential images that must remain static
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/media/carousel-control-hover.html`

## tooltip-fade-soft

- Category: tooltip/popover
- Class: `bsx-tooltip-fade-soft`
- Level: extended
- Bootstrap component: tooltip
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: contextual supporting information
- Avoid for: primary task content
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/tooltip/tooltip-fade-soft.html`

## tooltip-slide-up

- Category: tooltip/popover
- Class: `bsx-tooltip-slide-up`
- Level: extended
- Bootstrap component: tooltip
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: contextual supporting information
- Avoid for: primary task content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/tooltip/tooltip-slide-up.html`

## tooltip-slide-down

- Category: tooltip/popover
- Class: `bsx-tooltip-slide-down`
- Level: extended
- Bootstrap component: tooltip
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: contextual supporting information
- Avoid for: primary task content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/tooltip/tooltip-slide-down.html`

## tooltip-scale

- Category: tooltip/popover
- Class: `bsx-tooltip-scale`
- Level: extended
- Bootstrap component: tooltip
- Requires JS: no
- Runtime behavior: none
- Motion: scale
- Best for: contextual supporting information
- Avoid for: primary task content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/tooltip/tooltip-scale.html`

## tooltip-pop

- Category: tooltip/popover
- Class: `bsx-tooltip-pop`
- Level: extended
- Bootstrap component: tooltip
- Requires JS: no
- Runtime behavior: none
- Motion: scale
- Best for: contextual supporting information
- Avoid for: primary task content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/tooltip/tooltip-pop.html`

## popover-soft

- Category: tooltip/popover
- Class: `bsx-popover-soft`
- Level: extended
- Bootstrap component: popover
- Requires JS: no
- Runtime behavior: none
- Motion: scale + opacity
- Best for: contextual supporting information
- Avoid for: primary task content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/popover/popover-soft.html`

## popover-slide

- Category: tooltip/popover
- Class: `bsx-popover-slide`
- Level: extended
- Bootstrap component: popover
- Requires JS: no
- Runtime behavior: none
- Motion: translate + scale
- Best for: contextual supporting information
- Avoid for: primary task content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/popover/popover-slide.html`

## popover-blur

- Category: tooltip/popover
- Class: `bsx-popover-blur`
- Level: extended
- Bootstrap component: popover
- Requires JS: no
- Runtime behavior: none
- Motion: scale + opacity
- Best for: contextual supporting information
- Avoid for: primary task content
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/popover/popover-blur.html`

## popover-content-stagger

- Category: tooltip/popover
- Class: `bsx-popover-content-stagger`
- Level: extended
- Bootstrap component: popover
- Requires JS: no
- Runtime behavior: none
- Motion: translate + scale
- Best for: contextual supporting information
- Avoid for: primary task content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/popover/popover-content-stagger.html`

## popover-dismiss-fade

- Category: tooltip/popover
- Class: `bsx-popover-dismiss-fade`
- Level: extended
- Bootstrap component: popover
- Requires JS: no
- Runtime behavior: none
- Motion: scale + opacity
- Best for: contextual supporting information
- Avoid for: primary task content
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/popover/popover-dismiss-fade.html`

## progress-fill-soft

- Category: progress/stepper
- Class: `bsx-progress-fill-soft`
- Level: extended
- Bootstrap component: progress
- Requires JS: no
- Runtime behavior: none
- Motion: translate + opacity
- Best for: progress and multi-step flows
- Avoid for: indeterminate tasks without a status model
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/progress/progress-fill-soft.html`

## progress-striped-motion

- Category: progress/stepper
- Class: `bsx-progress-striped-motion`
- Level: extended
- Bootstrap component: progress
- Requires JS: no
- Runtime behavior: none
- Motion: color + opacity
- Best for: progress and multi-step flows
- Avoid for: indeterminate tasks without a status model
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/progress/progress-striped-motion.html`

## progress-success-pop

- Category: progress/stepper
- Class: `bsx-progress-success-pop`
- Level: extended
- Bootstrap component: progress
- Requires JS: no
- Runtime behavior: none
- Motion: scale
- Best for: progress and multi-step flows
- Avoid for: indeterminate tasks without a status model
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/progress/progress-success-pop.html`

## progress-danger-pulse

- Category: progress/stepper
- Class: `bsx-progress-danger-pulse`
- Level: extended
- Bootstrap component: progress
- Requires JS: no
- Runtime behavior: none
- Motion: scale
- Best for: progress and multi-step flows
- Avoid for: indeterminate tasks without a status model
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/progress/progress-danger-pulse.html`

## stepper-active-pop

- Category: progress/stepper
- Class: `bsx-stepper-active-pop`
- Level: extended
- Bootstrap component: stepper
- Requires JS: no
- Runtime behavior: none
- Motion: scale
- Best for: progress and multi-step flows
- Avoid for: indeterminate tasks without a status model
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/stepper/stepper-active-pop.html`

## stepper-complete-check

- Category: progress/stepper
- Class: `bsx-stepper-complete-check`
- Level: extended
- Bootstrap component: stepper
- Requires JS: no
- Runtime behavior: none
- Motion: color + opacity
- Best for: progress and multi-step flows
- Avoid for: indeterminate tasks without a status model
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/stepper/stepper-complete-check.html`

## stepper-line-fill

- Category: progress/stepper
- Class: `bsx-stepper-line-fill`
- Level: extended
- Bootstrap component: stepper
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: progress and multi-step flows
- Avoid for: indeterminate tasks without a status model
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/stepper/stepper-line-fill.html`

## wizard-page-slide

- Category: progress/stepper
- Class: `bsx-wizard-page-slide`
- Level: extended
- Bootstrap component: stepper
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: progress and multi-step flows
- Avoid for: indeterminate tasks without a status model
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/stepper/wizard-page-slide.html`

## wizard-page-fade

- Category: progress/stepper
- Class: `bsx-wizard-page-fade`
- Level: extended
- Bootstrap component: stepper
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: progress and multi-step flows
- Avoid for: indeterminate tasks without a status model
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/stepper/wizard-page-fade.html`

## page-fade-in

- Category: page/layout
- Class: `bsx-page-fade-in`
- Level: extended
- Bootstrap component: page
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: page and section state changes
- Avoid for: continuous scroll-driven motion
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/page/page-fade-in.html`

## page-slide-up

- Category: page/layout
- Class: `bsx-page-slide-up`
- Level: extended
- Bootstrap component: page
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: page and section state changes
- Avoid for: continuous scroll-driven motion
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/page/page-slide-up.html`

## page-section-reveal

- Category: page/layout
- Class: `bsx-page-section-reveal`
- Level: extended
- Bootstrap component: page
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: page and section state changes
- Avoid for: continuous scroll-driven motion
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/page/page-section-reveal.html`

## page-section-stagger

- Category: page/layout
- Class: `bsx-page-section-stagger`
- Level: extended
- Bootstrap component: page
- Requires JS: no
- Runtime behavior: none
- Motion: translate
- Best for: page and section state changes
- Avoid for: continuous scroll-driven motion
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/page/page-section-stagger.html`

## page-empty-state-pop

- Category: page/layout
- Class: `bsx-page-empty-state-pop`
- Level: extended
- Bootstrap component: page
- Requires JS: no
- Runtime behavior: none
- Motion: scale
- Best for: page and section state changes
- Avoid for: continuous scroll-driven motion
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/page/page-empty-state-pop.html`

## page-error-shake

- Category: page/layout
- Class: `bsx-page-error-shake`
- Level: extended
- Bootstrap component: page
- Requires JS: no
- Runtime behavior: none
- Motion: shake
- Best for: page and section state changes
- Avoid for: continuous scroll-driven motion
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/page/page-error-shake.html`

## page-success-check

- Category: page/layout
- Class: `bsx-page-success-check`
- Level: extended
- Bootstrap component: page
- Requires JS: no
- Runtime behavior: none
- Motion: color + opacity
- Best for: page and section state changes
- Avoid for: continuous scroll-driven motion
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/page/page-success-check.html`

## content-fade-swap

- Category: page/layout
- Class: `bsx-content-fade-swap`
- Level: extended
- Bootstrap component: page
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: page and section state changes
- Avoid for: continuous scroll-driven motion
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/page/content-fade-swap.html`

## content-blur-swap

- Category: page/layout
- Class: `bsx-content-blur-swap`
- Level: extended
- Bootstrap component: page
- Requires JS: no
- Runtime behavior: none
- Motion: opacity
- Best for: page and section state changes
- Avoid for: continuous scroll-driven motion
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/page/content-blur-swap.html`

## scroll-reveal-lite

- Category: page/layout
- Class: `bsx-scroll-reveal-lite`
- Level: extended
- Bootstrap component: page
- Requires JS: yes
- Runtime behavior: intersection observer
- Motion: translate
- Best for: page and section state changes
- Avoid for: continuous scroll-driven motion
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/page/scroll-reveal-lite.html`
