# Bootstrap 5 Transitions Catalog

Generated from `scripts/effects.mjs`. Every entry maps one CSS class to one copy-paste snippet. Entries marked `Requires JS: yes` also require `assets/js/bootstrap5-transitions.js` after the Bootstrap bundle.

## Summary

| Class | Level | Component | Kind | Density | Risk | Requires JS | Motion | CSS properties | Bootstrap states | Best for | Avoid for | Snippet |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `bsx-modal-scale` | core | modal | feedback | marketing | safe | no | scale | `transform` | `.show` | dialogs and confirmations | dense repeated workflows | `snippets/core/modal/modal-scale.html` |
| `bsx-modal-slide-up` | core | modal | entry | marketing | safe | no | translate | `transform` | `.show` | dialogs and confirmations | dense repeated workflows | `snippets/core/modal/modal-slide-up.html` |
| `bsx-modal-blur-backdrop` | core | modal | feedback | marketing | medium | no | opacity | `opacity`, `filter` | `.show` | dialogs and confirmations | dense repeated workflows | `snippets/core/modal/modal-blur-backdrop.html` |
| `bsx-modal-danger-confirm` | core | modal | danger | marketing | medium | no | color + opacity | `background-color`, `border-color`, `color` | `.show`, `.bsx-is-error` | dialogs and confirmations | dense repeated workflows | `snippets/core/modal/modal-danger-confirm.html` |
| `bsx-modal-success-confirm` | core | modal | success | marketing | safe | no | color + opacity | `opacity`, `background-color`, `border-color`, `color` | `.show`, `.bsx-is-success` | dialogs and confirmations | dense repeated workflows | `snippets/core/modal/modal-success-confirm.html` |
| `bsx-modal-sheet-mobile` | core | modal | navigation | marketing | safe | no | translate | `transform` | `.show` | dialogs and confirmations | dense repeated workflows | `snippets/core/modal/modal-sheet-mobile.html` |
| `bsx-dropdown-soft` | core | dropdown | navigation | normal-ui | safe | no | opacity | `opacity` | `.dropdown-menu.show` | menus with clear visual hierarchy | menus requiring instant state changes | `snippets/core/dropdown/dropdown-soft.html` |
| `bsx-dropdown-slide-down` | core | dropdown | navigation | normal-ui | safe | no | translate | `transform` | `.dropdown-menu.show` | menus with clear visual hierarchy | menus requiring instant state changes | `snippets/core/dropdown/dropdown-slide-down.html` |
| `bsx-dropdown-scale` | core | dropdown | navigation | normal-ui | safe | no | scale | `transform` | `.dropdown-menu.show` | menus with clear visual hierarchy | menus requiring instant state changes | `snippets/core/dropdown/dropdown-scale.html` |
| `bsx-dropdown-menu-stagger` | core | dropdown | navigation | normal-ui | visual-diff | no | translate | `transform` | `.dropdown-menu.show` | menus with clear visual hierarchy | menus requiring instant state changes | `snippets/core/dropdown/dropdown-menu-stagger.html` |
| `bsx-dropdown-item-hover-slide` | core | dropdown | navigation | normal-ui | safe | no | translate | `transform` | `.dropdown-menu.show` | menus with clear visual hierarchy | menus requiring instant state changes | `snippets/core/dropdown/dropdown-item-hover-slide.html` |
| `bsx-dropdown-mega-menu-soft` | core | dropdown | navigation | normal-ui | safe | no | opacity | `opacity` | `.dropdown-menu.show` | menus with clear visual hierarchy | menus requiring instant state changes | `snippets/core/dropdown/dropdown-mega-menu-soft.html` |
| `bsx-offcanvas-soft` | core | offcanvas | navigation | marketing | safe | no | opacity | `opacity` | `.show` | navigation and mobile panels | permanent desktop navigation | `snippets/core/offcanvas/offcanvas-soft.html` |
| `bsx-offcanvas-blur-backdrop` | core | offcanvas | navigation | marketing | medium | no | opacity | `opacity`, `filter` | `.show` | navigation and mobile panels | permanent desktop navigation | `snippets/core/offcanvas/offcanvas-blur-backdrop.html` |
| `bsx-offcanvas-mobile-sheet` | core | offcanvas | navigation | marketing | safe | no | translate | `transform` | `.show` | navigation and mobile panels | permanent desktop navigation | `snippets/core/offcanvas/offcanvas-mobile-sheet.html` |
| `bsx-offcanvas-menu-stagger` | core | offcanvas | navigation | marketing | visual-diff | no | translate | `transform` | `.show` | navigation and mobile panels | permanent desktop navigation | `snippets/core/offcanvas/offcanvas-menu-stagger.html` |
| `bsx-toast-slide-right` | core | toast | feedback | normal-ui | requires-js | yes | translate | `transform` | `.show` | brief asynchronous feedback | critical information requiring confirmation | `snippets/core/toast/toast-slide-right.html` |
| `bsx-toast-pop` | core | toast | entry | normal-ui | requires-js | yes | scale | `transform` | `.show` | brief asynchronous feedback | critical information requiring confirmation | `snippets/core/toast/toast-pop.html` |
| `bsx-toast-stack-pop` | core | toast | entry | normal-ui | requires-js | yes | scale | `transform` | `.show` | brief asynchronous feedback | critical information requiring confirmation | `snippets/core/toast/toast-stack-pop.html` |
| `bsx-toast-success-pop` | core | toast | success | normal-ui | requires-js | yes | scale | `transform`, `opacity`, `background-color`, `border-color`, `color` | `.show`, `.bsx-is-success` | brief asynchronous feedback | critical information requiring confirmation | `snippets/core/toast/toast-success-pop.html` |
| `bsx-toast-error-shake` | core | toast | state | normal-ui | requires-js | yes | shake | `opacity`, `background-color`, `border-color`, `color` | `.show`, `.bsx-is-error` | brief asynchronous feedback | critical information requiring confirmation | `snippets/core/toast/toast-error-shake.html` |
| `bsx-toast-progress-line` | core | toast | feedback | normal-ui | requires-js | yes | translate | `transform` | `.show` | brief asynchronous feedback | critical information requiring confirmation | `snippets/core/toast/toast-progress-line.html` |
| `bsx-alert-reveal` | core | alert | entry | normal-ui | safe | no | translate | `transform` | none | inline feedback and validation summaries | decorative content | `snippets/core/alert/alert-reveal.html` |
| `bsx-alert-slide-down` | core | alert | feedback | normal-ui | safe | no | translate | `transform` | none | inline feedback and validation summaries | decorative content | `snippets/core/alert/alert-slide-down.html` |
| `bsx-alert-shake` | core | alert | feedback | normal-ui | medium | no | shake | `opacity`, `transform` | none | inline feedback and validation summaries | decorative content | `snippets/core/alert/alert-shake.html` |
| `bsx-alert-pulse-border` | core | alert | feedback | normal-ui | safe | no | scale | `transform` | none | inline feedback and validation summaries | decorative content | `snippets/core/alert/alert-pulse-border.html` |
| `bsx-alert-success-glow` | core | alert | success | normal-ui | safe | no | opacity | `opacity`, `box-shadow`, `background-color`, `border-color`, `color` | `.bsx-is-success` | inline feedback and validation summaries | decorative content | `snippets/core/alert/alert-success-glow.html` |
| `bsx-alert-dismissible-exit` | core | alert | exit | normal-ui | requires-js | yes | color + opacity | `transform` | none | inline feedback and validation summaries | decorative content | `snippets/core/alert/alert-dismissible-exit.html` |
| `bsx-button-press` | core | button | feedback | normal-ui | safe | no | scale | `transform` | none | direct interaction feedback | large continuously animated areas | `snippets/core/button/button-press.html` |
| `bsx-button-hover-lift` | core | button | feedback | normal-ui | safe | no | translate | `transform` | none | direct interaction feedback | large continuously animated areas | `snippets/core/button/button-hover-lift.html` |
| `bsx-button-hover-glow` | core | button | feedback | normal-ui | safe | no | opacity | `opacity`, `box-shadow` | none | direct interaction feedback | large continuously animated areas | `snippets/core/button/button-hover-glow.html` |
| `bsx-button-loading-spinner` | core | button | loading | normal-ui | requires-js | yes | opacity + rotate | `opacity` | `[aria-busy]`, `.bsx-is-loading` | direct interaction feedback | large continuously animated areas | `snippets/core/button/button-loading-spinner.html` |
| `bsx-button-loading-dots` | core | button | loading | normal-ui | requires-js | yes | opacity | `opacity` | `[aria-busy]`, `.bsx-is-loading` | direct interaction feedback | large continuously animated areas | `snippets/core/button/button-loading-dots.html` |
| `bsx-button-success-pop` | core | button | success | normal-ui | requires-js | yes | scale | `transform`, `opacity`, `background-color`, `border-color`, `color` | `.bsx-is-success` | direct interaction feedback | large continuously animated areas | `snippets/core/button/button-success-pop.html` |
| `bsx-button-icon-slide` | core | button | feedback | normal-ui | safe | no | translate | `transform` | none | direct interaction feedback | large continuously animated areas | `snippets/core/button/button-icon-slide.html` |
| `bsx-button-ripple-lite` | core | button | feedback | normal-ui | requires-js | yes | color + opacity | `opacity`, `transform` | none | direct interaction feedback | large continuously animated areas | `snippets/core/button/button-ripple-lite.html` |
| `bsx-form-focus-ring` | core | form | feedback | normal-ui | safe | no | color + opacity | `opacity`, `box-shadow`, `outline-color` | `.is-valid`, `.is-invalid`, `:focus-within` | focus and validation feedback | replacing native validation semantics | `snippets/core/form/form-focus-ring.html` |
| `bsx-form-invalid-shake` | core | form | validation | normal-ui | medium | no | shake | `opacity`, `transform` | `.is-valid`, `.is-invalid`, `:focus-within`, `.bsx-is-error` | focus and validation feedback | replacing native validation semantics | `snippets/core/form/form-invalid-shake.html` |
| `bsx-form-valid-check` | core | form | success | normal-ui | safe | no | color + opacity | `opacity`, `transform` | `.is-valid`, `.is-invalid`, `:focus-within` | focus and validation feedback | replacing native validation semantics | `snippets/core/form/form-valid-check.html` |
| `bsx-form-help-text-reveal` | core | form | entry | normal-ui | safe | no | translate | `transform` | `.is-valid`, `.is-invalid`, `:focus-within` | focus and validation feedback | replacing native validation semantics | `snippets/core/form/form-help-text-reveal.html` |
| `bsx-form-error-text-slide` | core | form | state | normal-ui | medium | no | translate | `transform`, `opacity`, `background-color`, `border-color`, `color` | `.is-valid`, `.is-invalid`, `:focus-within`, `.bsx-is-error` | focus and validation feedback | replacing native validation semantics | `snippets/core/form/form-error-text-slide.html` |
| `bsx-form-switch-toggle-soft` | core | form | feedback | normal-ui | safe | no | opacity | `opacity` | `.is-valid`, `.is-invalid`, `:focus-within` | focus and validation feedback | replacing native validation semantics | `snippets/core/form/form-switch-toggle-soft.html` |
| `bsx-form-checkbox-pop` | core | form | success | normal-ui | safe | no | scale | `transform` | `.is-valid`, `.is-invalid`, `:focus-within` | focus and validation feedback | replacing native validation semantics | `snippets/core/form/form-checkbox-pop.html` |
| `bsx-form-file-drop-highlight` | core | form | feedback | normal-ui | requires-js | yes | color + opacity | `opacity`, `transform` | `.is-valid`, `.is-invalid`, `:focus-within` | focus and validation feedback | replacing native validation semantics | `snippets/core/form/form-file-drop-highlight.html` |
| `bsx-card-hover-lift` | core | card | feedback | normal-ui | safe | no | translate | `transform` | none | interactive content collections | non-interactive dense tables | `snippets/core/card/card-hover-lift.html` |
| `bsx-card-hover-scale` | core | card | feedback | normal-ui | safe | no | scale | `transform` | none | interactive content collections | non-interactive dense tables | `snippets/core/card/card-hover-scale.html` |
| `bsx-card-hover-shadow` | core | card | feedback | normal-ui | safe | no | color + opacity | `box-shadow` | none | interactive content collections | non-interactive dense tables | `snippets/core/card/card-hover-shadow.html` |
| `bsx-card-image-zoom` | core | card | feedback | normal-ui | visual-diff | no | scale | `transform` | none | interactive content collections | non-interactive dense tables | `snippets/core/card/card-image-zoom.html` |
| `bsx-card-image-fade-overlay` | core | card | loading | normal-ui | medium | no | opacity | `transform`, `opacity` | `[aria-busy]`, `.bsx-is-loading` | interactive content collections | non-interactive dense tables | `snippets/core/card/card-image-fade-overlay.html` |
| `bsx-card-stagger-list` | core | card | feedback | normal-ui | visual-diff | no | translate | `transform` | none | interactive content collections | non-interactive dense tables | `snippets/core/card/card-stagger-list.html` |
| `bsx-tabs-fade` | core | tabs | navigation | normal-ui | safe | no | opacity | `opacity` | `.active`, `[aria-current]` | section navigation and tab state | rapidly auto-rotating content | `snippets/core/tabs/tabs-fade.html` |
| `bsx-tabs-underline-slide` | core | tabs | navigation | normal-ui | safe | no | translate | `transform`, `text-decoration-color` | `.active`, `[aria-current]` | section navigation and tab state | rapidly auto-rotating content | `snippets/core/tabs/tabs-underline-slide.html` |
| `bsx-tabs-pill-active-pop` | core | tabs | navigation | normal-ui | safe | no | scale | `transform`, `box-shadow`, `background-color`, `border-color`, `color` | `.active`, `[aria-current]` | section navigation and tab state | rapidly auto-rotating content | `snippets/core/tabs/tabs-pill-active-pop.html` |
| `bsx-nav-link-hover-underline` | core | navbar | navigation | normal-ui | safe | no | translate | `transform`, `text-decoration-color` | none | section navigation and tab state | rapidly auto-rotating content | `snippets/core/navbar/nav-link-hover-underline.html` |
| `bsx-nav-sidebar-active-marker` | core | sidebar | selection | dense-admin | safe | no | translate | `transform`, `box-shadow`, `background-color`, `border-color`, `color` | none | section navigation and tab state | rapidly auto-rotating content | `snippets/core/sidebar/nav-sidebar-active-marker.html` |
| `bsx-accordion-icon-rotate` | core | accordion | feedback | normal-ui | safe | no | rotate | `opacity`, `transform` | `.collapse.show`, `[aria-expanded]` | disclosure controls | content that must remain continuously visible | `snippets/core/accordion/accordion-icon-rotate.html` |
| `bsx-accordion-icon-plus-minus` | core | accordion | feedback | normal-ui | safe | no | rotate | `opacity`, `transform` | `.collapse.show`, `[aria-expanded]` | disclosure controls | content that must remain continuously visible | `snippets/core/accordion/accordion-icon-plus-minus.html` |
| `bsx-accordion-body-fade` | core | accordion | exit | normal-ui | safe | no | opacity | `opacity` | `.collapse.show`, `[aria-expanded]` | disclosure controls | content that must remain continuously visible | `snippets/core/accordion/accordion-body-fade.html` |
| `bsx-collapse-soft` | core | accordion | exit | normal-ui | safe | no | opacity | `transform`, `opacity` | `.collapse.show`, `[aria-expanded]` | disclosure controls | content that must remain continuously visible | `snippets/core/accordion/collapse-soft.html` |
| `bsx-collapse-height-smooth` | core | accordion | exit | normal-ui | safe | no | color + opacity | `transform` | `.collapse.show`, `[aria-expanded]` | disclosure controls | content that must remain continuously visible | `snippets/core/accordion/collapse-height-smooth.html` |
| `bsx-navbar-link-hover-line` | core | navbar | navigation | normal-ui | safe | no | translate | `transform` | none | application navigation | small inline controls | `snippets/core/navbar/navbar-link-hover-line.html` |
| `bsx-navbar-mobile-collapse-soft` | core | navbar | navigation | normal-ui | safe | no | opacity | `transform`, `opacity` | none | application navigation | small inline controls | `snippets/core/navbar/navbar-mobile-collapse-soft.html` |
| `bsx-navbar-toggler-morph` | core | navbar | navigation | normal-ui | safe | no | rotate | `transform` | none | application navigation | small inline controls | `snippets/core/navbar/navbar-toggler-morph.html` |
| `bsx-sidebar-slide-in` | core | sidebar | feedback | dense-admin | safe | no | translate | `transform` | none | application navigation | small inline controls | `snippets/core/sidebar/sidebar-slide-in.html` |
| `bsx-sidebar-item-active-marker` | core | sidebar | selection | dense-admin | safe | no | translate | `transform`, `box-shadow`, `background-color`, `border-color`, `color` | none | application navigation | small inline controls | `snippets/core/sidebar/sidebar-item-active-marker.html` |
| `bsx-badge-pop` | core | badge | entry | normal-ui | safe | no | scale | `transform` | none | status and metric updates | long text content | `snippets/core/badge/badge-pop.html` |
| `bsx-badge-notification-ping` | core | badge | feedback | normal-ui | safe | no | scale | `transform` | none | status and metric updates | long text content | `snippets/core/badge/badge-notification-ping.html` |
| `bsx-badge-status-pulse` | core | badge | feedback | normal-ui | safe | no | scale | `transform`, `background-color`, `border-color`, `color` | none | status and metric updates | long text content | `snippets/core/badge/badge-status-pulse.html` |
| `bsx-counter-bump` | core | counter | data-change | dense-admin | requires-js | yes | scale | `transform` | none | status and metric updates | long text content | `snippets/core/counter/counter-bump.html` |
| `bsx-metric-card-update` | core | counter | feedback | dense-admin | requires-js | yes | color + opacity | `opacity`, `transform` | none | status and metric updates | long text content | `snippets/core/counter/metric-card-update.html` |
| `bsx-table-row-hover` | core | table | feedback | dense-admin | safe | no | color + opacity | `opacity`, `transform` | none | row state and collection changes | large simultaneous batches | `snippets/core/table/table-row-hover.html` |
| `bsx-table-row-insert` | core | table | feedback | dense-admin | requires-js | yes | translate | `transform` | none | row state and collection changes | large simultaneous batches | `snippets/core/table/table-row-insert.html` |
| `bsx-table-row-remove` | core | table | exit | dense-admin | requires-js | yes | translate | `transform` | none | row state and collection changes | large simultaneous batches | `snippets/core/table/table-row-remove.html` |
| `bsx-table-row-update-flash` | core | table | feedback | dense-admin | requires-js | yes | opacity | `opacity` | none | row state and collection changes | large simultaneous batches | `snippets/core/table/table-row-update-flash.html` |
| `bsx-list-item-stagger` | core | list | feedback | dense-admin | visual-diff | no | translate | `transform` | none | row state and collection changes | large simultaneous batches | `snippets/core/list/list-item-stagger.html` |
| `bsx-list-group-active-marker` | core | list | selection | dense-admin | safe | no | translate | `transform`, `box-shadow`, `background-color`, `border-color`, `color` | none | row state and collection changes | large simultaneous batches | `snippets/core/list/list-group-active-marker.html` |
| `bsx-skeleton-shimmer` | core | skeleton | loading | normal-ui | safe | no | opacity | `opacity` | `[aria-busy]`, `.bsx-is-loading` | short loading states | unknown or very long waits without status | `snippets/core/skeleton/skeleton-shimmer.html` |
| `bsx-skeleton-pulse` | core | skeleton | loading | normal-ui | safe | no | scale + opacity | `opacity`, `transform` | `[aria-busy]`, `.bsx-is-loading` | short loading states | unknown or very long waits without status | `snippets/core/skeleton/skeleton-pulse.html` |
| `bsx-skeleton-card` | core | skeleton | loading | normal-ui | safe | no | opacity | `opacity` | `[aria-busy]`, `.bsx-is-loading` | short loading states | unknown or very long waits without status | `snippets/core/skeleton/skeleton-card.html` |
| `bsx-skeleton-table` | core | skeleton | loading | normal-ui | safe | no | opacity | `opacity` | `[aria-busy]`, `.bsx-is-loading` | short loading states | unknown or very long waits without status | `snippets/core/skeleton/skeleton-table.html` |
| `bsx-loader-dots` | core | loading state | loading | normal-ui | safe | no | color + opacity | `opacity`, `transform` | none | short loading states | unknown or very long waits without status | `snippets/core/loading/loader-dots.html` |
| `bsx-page-loading-fade` | core | loading state | loading | normal-ui | safe | no | opacity | `opacity` | `[aria-busy]`, `.bsx-is-loading` | short loading states | unknown or very long waits without status | `snippets/core/loading/page-loading-fade.html` |
| `bsx-modal-scale-sm` | extended | modal | feedback | marketing | safe | no | scale | `transform` | `.show` | dialogs and confirmations | dense repeated workflows | `snippets/extended/modal/modal-scale-sm.html` |
| `bsx-modal-scale-lg` | extended | modal | feedback | marketing | safe | no | scale | `transform` | `.show` | dialogs and confirmations | dense repeated workflows | `snippets/extended/modal/modal-scale-lg.html` |
| `bsx-modal-slide-down` | extended | modal | feedback | marketing | safe | no | translate | `transform` | `.show` | dialogs and confirmations | dense repeated workflows | `snippets/extended/modal/modal-slide-down.html` |
| `bsx-modal-slide-left` | extended | modal | feedback | marketing | safe | no | translate | `transform` | `.show` | dialogs and confirmations | dense repeated workflows | `snippets/extended/modal/modal-slide-left.html` |
| `bsx-modal-slide-right` | extended | modal | feedback | marketing | safe | no | translate | `transform` | `.show` | dialogs and confirmations | dense repeated workflows | `snippets/extended/modal/modal-slide-right.html` |
| `bsx-modal-fade-soft` | extended | modal | exit | marketing | safe | no | opacity | `opacity` | `.show` | dialogs and confirmations | dense repeated workflows | `snippets/extended/modal/modal-fade-soft.html` |
| `bsx-modal-zoom-blur` | extended | modal | feedback | marketing | medium | no | scale + opacity | `opacity`, `transform`, `filter` | `.show` | dialogs and confirmations | dense repeated workflows | `snippets/extended/modal/modal-zoom-blur.html` |
| `bsx-modal-fullscreen-soft` | extended | modal | feedback | marketing | visual-diff | no | opacity | `opacity` | `.show` | dialogs and confirmations | dense repeated workflows | `snippets/extended/modal/modal-fullscreen-soft.html` |
| `bsx-modal-stack-pop` | extended | modal | entry | marketing | safe | no | scale | `transform` | `.show` | dialogs and confirmations | dense repeated workflows | `snippets/extended/modal/modal-stack-pop.html` |
| `bsx-modal-content-stagger` | extended | modal | feedback | marketing | visual-diff | no | translate | `transform` | `.show` | dialogs and confirmations | dense repeated workflows | `snippets/extended/modal/modal-content-stagger.html` |
| `bsx-dropdown-slide-up` | extended | dropdown | navigation | normal-ui | safe | no | translate | `transform` | `.dropdown-menu.show` | menus with clear visual hierarchy | menus requiring instant state changes | `snippets/extended/dropdown/dropdown-slide-up.html` |
| `bsx-dropdown-fade` | extended | dropdown | navigation | normal-ui | safe | no | opacity | `opacity` | `.dropdown-menu.show` | menus with clear visual hierarchy | menus requiring instant state changes | `snippets/extended/dropdown/dropdown-fade.html` |
| `bsx-dropdown-origin-top` | extended | dropdown | navigation | normal-ui | safe | no | color + opacity | `opacity`, `transform` | `.dropdown-menu.show` | menus with clear visual hierarchy | menus requiring instant state changes | `snippets/extended/dropdown/dropdown-origin-top.html` |
| `bsx-dropdown-origin-bottom` | extended | dropdown | navigation | normal-ui | safe | no | color + opacity | `opacity`, `transform` | `.dropdown-menu.show` | menus with clear visual hierarchy | menus requiring instant state changes | `snippets/extended/dropdown/dropdown-origin-bottom.html` |
| `bsx-dropdown-blur` | extended | dropdown | navigation | normal-ui | medium | no | opacity | `opacity`, `filter` | `.dropdown-menu.show` | menus with clear visual hierarchy | menus requiring instant state changes | `snippets/extended/dropdown/dropdown-blur.html` |
| `bsx-dropdown-item-hover-bg` | extended | dropdown | navigation | normal-ui | safe | no | color + opacity | `opacity`, `transform` | `.dropdown-menu.show` | menus with clear visual hierarchy | menus requiring instant state changes | `snippets/extended/dropdown/dropdown-item-hover-bg.html` |
| `bsx-dropdown-item-active-pop` | extended | dropdown | navigation | normal-ui | safe | no | scale | `transform`, `box-shadow`, `background-color`, `border-color`, `color` | `.dropdown-menu.show` | menus with clear visual hierarchy | menus requiring instant state changes | `snippets/extended/dropdown/dropdown-item-active-pop.html` |
| `bsx-dropdown-user-menu` | extended | dropdown | navigation | normal-ui | safe | no | color + opacity | `opacity`, `transform` | `.dropdown-menu.show` | menus with clear visual hierarchy | menus requiring instant state changes | `snippets/extended/dropdown/dropdown-user-menu.html` |
| `bsx-offcanvas-slide-fast` | extended | offcanvas | navigation | marketing | safe | no | translate | `transform` | `.show` | navigation and mobile panels | permanent desktop navigation | `snippets/extended/offcanvas/offcanvas-slide-fast.html` |
| `bsx-offcanvas-slide-slow` | extended | offcanvas | navigation | marketing | safe | no | translate | `transform` | `.show` | navigation and mobile panels | permanent desktop navigation | `snippets/extended/offcanvas/offcanvas-slide-slow.html` |
| `bsx-offcanvas-left-soft` | extended | offcanvas | navigation | marketing | safe | no | opacity | `opacity` | `.show` | navigation and mobile panels | permanent desktop navigation | `snippets/extended/offcanvas/offcanvas-left-soft.html` |
| `bsx-offcanvas-right-soft` | extended | offcanvas | navigation | marketing | safe | no | opacity | `opacity` | `.show` | navigation and mobile panels | permanent desktop navigation | `snippets/extended/offcanvas/offcanvas-right-soft.html` |
| `bsx-offcanvas-bottom-sheet` | extended | offcanvas | navigation | marketing | safe | no | translate | `transform` | `.show` | navigation and mobile panels | permanent desktop navigation | `snippets/extended/offcanvas/offcanvas-bottom-sheet.html` |
| `bsx-offcanvas-header-reveal` | extended | offcanvas | navigation | marketing | safe | no | translate | `transform` | `.show` | navigation and mobile panels | permanent desktop navigation | `snippets/extended/offcanvas/offcanvas-header-reveal.html` |
| `bsx-toast-slide-left` | extended | toast | feedback | normal-ui | requires-js | yes | translate | `transform` | `.show` | brief asynchronous feedback | critical information requiring confirmation | `snippets/extended/toast/toast-slide-left.html` |
| `bsx-toast-slide-top` | extended | toast | feedback | normal-ui | requires-js | yes | translate | `transform` | `.show` | brief asynchronous feedback | critical information requiring confirmation | `snippets/extended/toast/toast-slide-top.html` |
| `bsx-toast-slide-bottom` | extended | toast | feedback | normal-ui | requires-js | yes | translate | `transform` | `.show` | brief asynchronous feedback | critical information requiring confirmation | `snippets/extended/toast/toast-slide-bottom.html` |
| `bsx-toast-warning-pulse` | extended | toast | state | normal-ui | requires-js | yes | scale | `opacity`, `transform`, `background-color`, `border-color`, `color` | `.show` | brief asynchronous feedback | critical information requiring confirmation | `snippets/extended/toast/toast-warning-pulse.html` |
| `bsx-toast-auto-hide-bar` | extended | toast | feedback | normal-ui | requires-js | yes | color + opacity | `transform` | `.show` | brief asynchronous feedback | critical information requiring confirmation | `snippets/extended/toast/toast-auto-hide-bar.html` |
| `bsx-toast-icon-bounce` | extended | toast | feedback | normal-ui | requires-js | yes | scale | `transform` | `.show` | brief asynchronous feedback | critical information requiring confirmation | `snippets/extended/toast/toast-icon-bounce.html` |
| `bsx-alert-slide-up` | extended | alert | entry | normal-ui | safe | no | translate | `transform` | none | inline feedback and validation summaries | decorative content | `snippets/extended/alert/alert-slide-up.html` |
| `bsx-alert-fade-soft` | extended | alert | exit | normal-ui | safe | no | opacity | `opacity` | none | inline feedback and validation summaries | decorative content | `snippets/extended/alert/alert-fade-soft.html` |
| `bsx-alert-danger-flash` | extended | alert | danger | normal-ui | medium | no | opacity | `opacity`, `background-color`, `border-color`, `color` | `.bsx-is-error` | inline feedback and validation summaries | decorative content | `snippets/extended/alert/alert-danger-flash.html` |
| `bsx-alert-warning-attention` | extended | alert | state | normal-ui | safe | no | shake | `opacity`, `background-color`, `border-color`, `color` | none | inline feedback and validation summaries | decorative content | `snippets/extended/alert/alert-warning-attention.html` |
| `bsx-button-hover-slide-bg` | extended | button | feedback | normal-ui | safe | no | translate | `transform` | none | direct interaction feedback | large continuously animated areas | `snippets/extended/button/button-hover-slide-bg.html` |
| `bsx-button-success-check` | extended | button | success | normal-ui | requires-js | yes | color + opacity | `opacity`, `background-color`, `border-color`, `color` | `.bsx-is-success` | direct interaction feedback | large continuously animated areas | `snippets/extended/button/button-success-check.html` |
| `bsx-button-danger-pulse` | extended | button | danger | normal-ui | medium | no | scale | `transform`, `background-color`, `border-color`, `color` | `.bsx-is-error` | direct interaction feedback | large continuously animated areas | `snippets/extended/button/button-danger-pulse.html` |
| `bsx-button-icon-bounce` | extended | button | feedback | normal-ui | safe | no | scale | `transform` | none | direct interaction feedback | large continuously animated areas | `snippets/extended/button/button-icon-bounce.html` |
| `bsx-button-group-active-slide` | extended | button-group | navigation | normal-ui | safe | no | translate | `transform`, `box-shadow`, `background-color`, `border-color`, `color` | `.active`, `[aria-current]` | direct interaction feedback | large continuously animated areas | `snippets/extended/button-group/button-group-active-slide.html` |
| `bsx-button-disabled-soft` | extended | button | state | normal-ui | safe | no | opacity | `opacity`, `background-color`, `border-color`, `color` | `.disabled`, `[disabled]`, `[aria-disabled]` | direct interaction feedback | large continuously animated areas | `snippets/extended/button/button-disabled-soft.html` |
| `bsx-form-focus-glow` | extended | form | feedback | normal-ui | safe | no | opacity | `opacity`, `box-shadow`, `outline-color` | `.is-valid`, `.is-invalid`, `:focus-within` | focus and validation feedback | replacing native validation semantics | `snippets/extended/form/form-focus-glow.html` |
| `bsx-form-invalid-pulse` | extended | form | validation | normal-ui | medium | no | scale | `transform` | `.is-valid`, `.is-invalid`, `:focus-within`, `.bsx-is-error` | focus and validation feedback | replacing native validation semantics | `snippets/extended/form/form-invalid-pulse.html` |
| `bsx-form-label-float-soft` | extended | form | feedback | normal-ui | safe | no | opacity | `transform`, `opacity` | `.is-valid`, `.is-invalid`, `:focus-within` | focus and validation feedback | replacing native validation semantics | `snippets/extended/form/form-label-float-soft.html` |
| `bsx-form-input-clear-pop` | extended | form | entry | normal-ui | requires-js | yes | scale | `transform` | `.is-valid`, `.is-invalid`, `:focus-within` | focus and validation feedback | replacing native validation semantics | `snippets/extended/form/form-input-clear-pop.html` |
| `bsx-form-select-open-soft` | extended | form | feedback | normal-ui | safe | no | opacity | `opacity` | `.is-valid`, `.is-invalid`, `:focus-within` | focus and validation feedback | replacing native validation semantics | `snippets/extended/form/form-select-open-soft.html` |
| `bsx-form-radio-pop` | extended | form | entry | normal-ui | safe | no | scale | `transform` | `.is-valid`, `.is-invalid`, `:focus-within` | focus and validation feedback | replacing native validation semantics | `snippets/extended/form/form-radio-pop.html` |
| `bsx-card-hover-border` | extended | card | feedback | normal-ui | safe | no | color + opacity | `opacity`, `transform` | none | interactive content collections | non-interactive dense tables | `snippets/extended/card/card-hover-border.html` |
| `bsx-card-hover-glow` | extended | card | feedback | normal-ui | safe | no | opacity | `opacity`, `box-shadow` | none | interactive content collections | non-interactive dense tables | `snippets/extended/card/card-hover-glow.html` |
| `bsx-card-click-press` | extended | card | feedback | normal-ui | safe | no | scale | `transform` | none | interactive content collections | non-interactive dense tables | `snippets/extended/card/card-click-press.html` |
| `bsx-card-reveal` | extended | card | entry | normal-ui | safe | no | translate | `transform` | none | interactive content collections | non-interactive dense tables | `snippets/extended/card/card-reveal.html` |
| `bsx-card-footer-reveal` | extended | card | entry | normal-ui | safe | no | translate | `transform` | none | interactive content collections | non-interactive dense tables | `snippets/extended/card/card-footer-reveal.html` |
| `bsx-card-action-slide` | extended | card | feedback | normal-ui | safe | no | translate | `transform` | none | interactive content collections | non-interactive dense tables | `snippets/extended/card/card-action-slide.html` |
| `bsx-tabs-slide-left` | extended | tabs | navigation | normal-ui | safe | no | translate | `transform` | `.active`, `[aria-current]` | section navigation and tab state | rapidly auto-rotating content | `snippets/extended/tabs/tabs-slide-left.html` |
| `bsx-tabs-slide-right` | extended | tabs | navigation | normal-ui | safe | no | translate | `transform` | `.active`, `[aria-current]` | section navigation and tab state | rapidly auto-rotating content | `snippets/extended/tabs/tabs-slide-right.html` |
| `bsx-tabs-content-reveal` | extended | tabs | navigation | normal-ui | safe | no | translate | `transform` | `.active`, `[aria-current]` | section navigation and tab state | rapidly auto-rotating content | `snippets/extended/tabs/tabs-content-reveal.html` |
| `bsx-tabs-content-blur` | extended | tabs | navigation | normal-ui | medium | no | opacity | `opacity`, `filter` | `.active`, `[aria-current]` | section navigation and tab state | rapidly auto-rotating content | `snippets/extended/tabs/tabs-content-blur.html` |
| `bsx-nav-link-hover-slide` | extended | navbar | navigation | normal-ui | safe | no | translate | `transform` | none | section navigation and tab state | rapidly auto-rotating content | `snippets/extended/navbar/nav-link-hover-slide.html` |
| `bsx-nav-sidebar-collapse-soft` | extended | sidebar | navigation | dense-admin | safe | no | opacity | `transform`, `opacity` | none | section navigation and tab state | rapidly auto-rotating content | `snippets/extended/sidebar/nav-sidebar-collapse-soft.html` |
| `bsx-accordion-body-slide` | extended | accordion | feedback | normal-ui | safe | no | translate | `transform` | `.collapse.show`, `[aria-expanded]` | disclosure controls | content that must remain continuously visible | `snippets/extended/accordion/accordion-body-slide.html` |
| `bsx-accordion-header-hover` | extended | accordion | feedback | normal-ui | safe | no | color + opacity | `opacity`, `transform` | `.collapse.show`, `[aria-expanded]` | disclosure controls | content that must remain continuously visible | `snippets/extended/accordion/accordion-header-hover.html` |
| `bsx-accordion-active-glow` | extended | accordion | feedback | normal-ui | safe | no | opacity | `opacity`, `box-shadow`, `background-color`, `border-color`, `color` | `.collapse.show`, `[aria-expanded]` | disclosure controls | content that must remain continuously visible | `snippets/extended/accordion/accordion-active-glow.html` |
| `bsx-collapse-fade` | extended | accordion | exit | normal-ui | safe | no | opacity | `transform`, `opacity` | `.collapse.show`, `[aria-expanded]` | disclosure controls | content that must remain continuously visible | `snippets/extended/accordion/collapse-fade.html` |
| `bsx-collapse-card-reveal` | extended | accordion | entry | normal-ui | safe | no | translate | `transform` | `.collapse.show`, `[aria-expanded]` | disclosure controls | content that must remain continuously visible | `snippets/extended/accordion/collapse-card-reveal.html` |
| `bsx-navbar-brand-pop` | extended | navbar | navigation | normal-ui | safe | no | scale | `transform` | none | application navigation | small inline controls | `snippets/extended/navbar/navbar-brand-pop.html` |
| `bsx-navbar-link-hover-bg` | extended | navbar | navigation | normal-ui | safe | no | color + opacity | `transform` | none | application navigation | small inline controls | `snippets/extended/navbar/navbar-link-hover-bg.html` |
| `bsx-navbar-toggler-spin` | extended | navbar | navigation | normal-ui | safe | no | rotate | `transform` | none | application navigation | small inline controls | `snippets/extended/navbar/navbar-toggler-spin.html` |
| `bsx-sidebar-item-hover-slide` | extended | sidebar | feedback | dense-admin | safe | no | translate | `transform` | none | application navigation | small inline controls | `snippets/extended/sidebar/sidebar-item-hover-slide.html` |
| `bsx-sidebar-submenu-reveal` | extended | sidebar | navigation | dense-admin | safe | no | translate | `transform` | none | application navigation | small inline controls | `snippets/extended/sidebar/sidebar-submenu-reveal.html` |
| `bsx-sidebar-mini-expand` | extended | sidebar | feedback | dense-admin | safe | no | color + opacity | `transform`, `clip-path` | none | application navigation | small inline controls | `snippets/extended/sidebar/sidebar-mini-expand.html` |
| `bsx-sidebar-overlay-blur` | extended | sidebar | loading | dense-admin | medium | no | opacity | `transform`, `opacity`, `filter` | `[aria-busy]`, `.bsx-is-loading` | application navigation | small inline controls | `snippets/extended/sidebar/sidebar-overlay-blur.html` |
| `bsx-badge-pulse` | extended | badge | feedback | normal-ui | safe | no | scale | `transform` | none | status and metric updates | long text content | `snippets/extended/badge/badge-pulse.html` |
| `bsx-badge-count-bump` | extended | badge | feedback | normal-ui | safe | no | scale | `transform` | none | status and metric updates | long text content | `snippets/extended/badge/badge-count-bump.html` |
| `bsx-badge-status-dot` | extended | badge | feedback | normal-ui | safe | no | color + opacity | `background-color`, `border-color`, `color` | none | status and metric updates | long text content | `snippets/extended/badge/badge-status-dot.html` |
| `bsx-counter-change-up` | extended | counter | data-change | dense-admin | requires-js | yes | color + opacity | `opacity`, `transform` | none | status and metric updates | long text content | `snippets/extended/counter/counter-change-up.html` |
| `bsx-counter-change-down` | extended | counter | data-change | dense-admin | requires-js | yes | color + opacity | `opacity`, `transform` | none | status and metric updates | long text content | `snippets/extended/counter/counter-change-down.html` |
| `bsx-price-change-flash` | extended | counter | feedback | dense-admin | requires-js | yes | opacity | `opacity` | none | status and metric updates | long text content | `snippets/extended/counter/price-change-flash.html` |
| `bsx-table-row-selected` | extended | table | selection | dense-admin | requires-js | yes | color + opacity | `box-shadow` | `.bsx-is-selected` | row state and collection changes | large simultaneous batches | `snippets/extended/table/table-row-selected.html` |
| `bsx-table-sort-icon-rotate` | extended | table | data-change | dense-admin | requires-js | yes | rotate | `opacity`, `transform` | none | row state and collection changes | large simultaneous batches | `snippets/extended/table/table-sort-icon-rotate.html` |
| `bsx-table-filter-reveal` | extended | table | entry | dense-admin | safe | no | translate | `transform` | none | row state and collection changes | large simultaneous batches | `snippets/extended/table/table-filter-reveal.html` |
| `bsx-list-item-reveal` | extended | list | entry | dense-admin | safe | no | translate | `transform` | none | row state and collection changes | large simultaneous batches | `snippets/extended/list/list-item-reveal.html` |
| `bsx-list-item-remove` | extended | list | exit | dense-admin | requires-js | yes | translate | `transform` | none | row state and collection changes | large simultaneous batches | `snippets/extended/list/list-item-remove.html` |
| `bsx-list-group-hover-slide` | extended | list | feedback | dense-admin | safe | no | translate | `transform` | none | row state and collection changes | large simultaneous batches | `snippets/extended/list/list-group-hover-slide.html` |
| `bsx-skeleton-wave` | extended | skeleton | loading | normal-ui | safe | no | opacity | `opacity` | `[aria-busy]`, `.bsx-is-loading` | short loading states | unknown or very long waits without status | `snippets/extended/skeleton/skeleton-wave.html` |
| `bsx-skeleton-avatar` | extended | skeleton | loading | normal-ui | safe | no | opacity | `opacity` | `[aria-busy]`, `.bsx-is-loading` | short loading states | unknown or very long waits without status | `snippets/extended/skeleton/skeleton-avatar.html` |
| `bsx-skeleton-button` | extended | skeleton | loading | normal-ui | safe | no | opacity | `opacity` | `[aria-busy]`, `.bsx-is-loading` | short loading states | unknown or very long waits without status | `snippets/extended/skeleton/skeleton-button.html` |
| `bsx-spinner-fade` | extended | loading state | loading | normal-ui | safe | no | opacity + rotate | `opacity` | `[aria-busy]`, `.bsx-is-loading` | short loading states | unknown or very long waits without status | `snippets/extended/loading/spinner-fade.html` |
| `bsx-spinner-scale` | extended | loading state | loading | normal-ui | safe | no | scale + rotate | `transform` | `[aria-busy]`, `.bsx-is-loading` | short loading states | unknown or very long waits without status | `snippets/extended/loading/spinner-scale.html` |
| `bsx-loader-bar` | extended | loading state | loading | normal-ui | safe | no | color + opacity | `transform` | none | short loading states | unknown or very long waits without status | `snippets/extended/loading/loader-bar.html` |
| `bsx-image-hover-zoom` | extended | image | feedback | marketing | visual-diff | no | scale | `transform` | none | media previews and galleries | essential images that must remain static | `snippets/extended/image/image-hover-zoom.html` |
| `bsx-image-hover-fade` | extended | image | exit | marketing | visual-diff | no | opacity | `opacity` | none | media previews and galleries | essential images that must remain static | `snippets/extended/image/image-hover-fade.html` |
| `bsx-image-hover-overlay` | extended | image | loading | marketing | medium | no | color + opacity | `transform` | `[aria-busy]`, `.bsx-is-loading` | media previews and galleries | essential images that must remain static | `snippets/extended/image/image-hover-overlay.html` |
| `bsx-image-hover-caption-slide` | extended | image | feedback | marketing | visual-diff | no | translate | `transform` | none | media previews and galleries | essential images that must remain static | `snippets/extended/image/image-hover-caption-slide.html` |
| `bsx-image-lazy-reveal` | extended | image | entry | marketing | visual-diff | no | translate | `transform` | none | media previews and galleries | essential images that must remain static | `snippets/extended/image/image-lazy-reveal.html` |
| `bsx-avatar-pop` | extended | image | entry | marketing | visual-diff | no | scale | `transform` | none | media previews and galleries | essential images that must remain static | `snippets/extended/image/avatar-pop.html` |
| `bsx-avatar-status-pulse` | extended | image | feedback | marketing | visual-diff | no | scale | `transform`, `background-color`, `border-color`, `color` | none | media previews and galleries | essential images that must remain static | `snippets/extended/image/avatar-status-pulse.html` |
| `bsx-gallery-item-reveal` | extended | image | entry | marketing | visual-diff | no | translate | `transform` | none | media previews and galleries | essential images that must remain static | `snippets/extended/image/gallery-item-reveal.html` |
| `bsx-carousel-caption-slide` | extended | media | feedback | marketing | visual-diff | no | translate | `transform` | none | media previews and galleries | essential images that must remain static | `snippets/extended/media/carousel-caption-slide.html` |
| `bsx-carousel-control-hover` | extended | media | feedback | marketing | visual-diff | no | color + opacity | `opacity`, `transform` | none | media previews and galleries | essential images that must remain static | `snippets/extended/media/carousel-control-hover.html` |
| `bsx-tooltip-fade-soft` | extended | tooltip | exit | marketing | safe | no | opacity | `opacity` | none | contextual supporting information | primary task content | `snippets/extended/tooltip/tooltip-fade-soft.html` |
| `bsx-tooltip-slide-up` | extended | tooltip | entry | marketing | safe | no | translate | `transform` | none | contextual supporting information | primary task content | `snippets/extended/tooltip/tooltip-slide-up.html` |
| `bsx-tooltip-slide-down` | extended | tooltip | feedback | marketing | safe | no | translate | `transform` | none | contextual supporting information | primary task content | `snippets/extended/tooltip/tooltip-slide-down.html` |
| `bsx-tooltip-scale` | extended | tooltip | feedback | marketing | safe | no | scale | `transform` | none | contextual supporting information | primary task content | `snippets/extended/tooltip/tooltip-scale.html` |
| `bsx-tooltip-pop` | extended | tooltip | entry | marketing | safe | no | scale | `transform` | none | contextual supporting information | primary task content | `snippets/extended/tooltip/tooltip-pop.html` |
| `bsx-popover-soft` | extended | popover | entry | marketing | safe | no | scale + opacity | `transform`, `opacity` | none | contextual supporting information | primary task content | `snippets/extended/popover/popover-soft.html` |
| `bsx-popover-slide` | extended | popover | entry | marketing | safe | no | translate + scale | `transform` | none | contextual supporting information | primary task content | `snippets/extended/popover/popover-slide.html` |
| `bsx-popover-blur` | extended | popover | entry | marketing | medium | no | scale + opacity | `transform`, `opacity`, `filter` | none | contextual supporting information | primary task content | `snippets/extended/popover/popover-blur.html` |
| `bsx-popover-content-stagger` | extended | popover | entry | marketing | visual-diff | no | translate + scale | `transform` | none | contextual supporting information | primary task content | `snippets/extended/popover/popover-content-stagger.html` |
| `bsx-popover-dismiss-fade` | extended | popover | entry | marketing | medium | no | scale + opacity | `transform`, `opacity` | none | contextual supporting information | primary task content | `snippets/extended/popover/popover-dismiss-fade.html` |
| `bsx-progress-fill-soft` | extended | progress | feedback | normal-ui | safe | no | translate + opacity | `transform`, `opacity` | none | progress and multi-step flows | indeterminate tasks without a status model | `snippets/extended/progress/progress-fill-soft.html` |
| `bsx-progress-striped-motion` | extended | progress | feedback | normal-ui | safe | no | color + opacity | `opacity`, `transform` | none | progress and multi-step flows | indeterminate tasks without a status model | `snippets/extended/progress/progress-striped-motion.html` |
| `bsx-progress-success-pop` | extended | progress | success | normal-ui | safe | no | scale | `transform`, `opacity`, `background-color`, `border-color`, `color` | `.bsx-is-success` | progress and multi-step flows | indeterminate tasks without a status model | `snippets/extended/progress/progress-success-pop.html` |
| `bsx-progress-danger-pulse` | extended | progress | danger | normal-ui | medium | no | scale | `transform`, `background-color`, `border-color`, `color` | `.bsx-is-error` | progress and multi-step flows | indeterminate tasks without a status model | `snippets/extended/progress/progress-danger-pulse.html` |
| `bsx-stepper-active-pop` | extended | stepper | entry | normal-ui | safe | no | scale | `transform`, `box-shadow`, `background-color`, `border-color`, `color` | none | progress and multi-step flows | indeterminate tasks without a status model | `snippets/extended/stepper/stepper-active-pop.html` |
| `bsx-stepper-complete-check` | extended | stepper | success | normal-ui | safe | no | color + opacity | `opacity`, `transform` | `.bsx-is-success` | progress and multi-step flows | indeterminate tasks without a status model | `snippets/extended/stepper/stepper-complete-check.html` |
| `bsx-stepper-line-fill` | extended | stepper | feedback | normal-ui | safe | no | translate | `transform` | none | progress and multi-step flows | indeterminate tasks without a status model | `snippets/extended/stepper/stepper-line-fill.html` |
| `bsx-wizard-page-slide` | extended | stepper | navigation | normal-ui | safe | no | translate | `transform` | none | progress and multi-step flows | indeterminate tasks without a status model | `snippets/extended/stepper/wizard-page-slide.html` |
| `bsx-wizard-page-fade` | extended | stepper | navigation | normal-ui | safe | no | opacity | `opacity` | none | progress and multi-step flows | indeterminate tasks without a status model | `snippets/extended/stepper/wizard-page-fade.html` |
| `bsx-page-fade-in` | extended | page | entry | marketing | visual-diff | no | opacity | `opacity` | none | page and section state changes | continuous scroll-driven motion | `snippets/extended/page/page-fade-in.html` |
| `bsx-page-slide-up` | extended | page | entry | marketing | visual-diff | no | translate | `transform` | none | page and section state changes | continuous scroll-driven motion | `snippets/extended/page/page-slide-up.html` |
| `bsx-page-section-reveal` | extended | page | entry | marketing | visual-diff | no | translate | `transform` | none | page and section state changes | continuous scroll-driven motion | `snippets/extended/page/page-section-reveal.html` |
| `bsx-page-section-stagger` | extended | page | feedback | marketing | visual-diff | no | translate | `transform` | none | page and section state changes | continuous scroll-driven motion | `snippets/extended/page/page-section-stagger.html` |
| `bsx-page-empty-state-pop` | extended | page | state | marketing | visual-diff | no | scale | `transform`, `opacity` | none | page and section state changes | continuous scroll-driven motion | `snippets/extended/page/page-empty-state-pop.html` |
| `bsx-page-error-shake` | extended | page | state | marketing | medium | no | shake | `opacity`, `background-color`, `border-color`, `color` | `.bsx-is-error` | page and section state changes | continuous scroll-driven motion | `snippets/extended/page/page-error-shake.html` |
| `bsx-page-success-check` | extended | page | success | marketing | visual-diff | no | color + opacity | `opacity`, `background-color`, `border-color`, `color` | `.bsx-is-success` | page and section state changes | continuous scroll-driven motion | `snippets/extended/page/page-success-check.html` |
| `bsx-content-fade-swap` | extended | page | exit | marketing | visual-diff | no | opacity | `opacity` | none | page and section state changes | continuous scroll-driven motion | `snippets/extended/page/content-fade-swap.html` |
| `bsx-content-blur-swap` | extended | page | feedback | marketing | medium | no | opacity | `opacity`, `filter` | none | page and section state changes | continuous scroll-driven motion | `snippets/extended/page/content-blur-swap.html` |
| `bsx-scroll-reveal-lite` | extended | page | entry | marketing | requires-js | yes | translate | `transform` | none | page and section state changes | continuous scroll-driven motion | `snippets/extended/page/scroll-reveal-lite.html` |
| `bsx-breadcrumb-current-marker` | extended | breadcrumb | navigation | normal-ui | safe | no | translate | `transform`, `opacity` | `.active`, `[aria-current]`, `.bsx-is-success` | admin location and hierarchy changes | purely decorative page titles | `snippets/extended/breadcrumb/breadcrumb-current-marker.html` |
| `bsx-breadcrumb-parent-hover` | extended | breadcrumb | navigation | normal-ui | safe | no | color + opacity | `opacity` | `.active`, `[aria-current]`, `.bsx-is-success` | admin location and hierarchy changes | purely decorative page titles | `snippets/extended/breadcrumb/breadcrumb-parent-hover.html` |
| `bsx-breadcrumb-path-update` | extended | breadcrumb | data-change | normal-ui | safe | no | color + opacity | `opacity` | `.active`, `[aria-current]`, `.bsx-is-success` | admin location and hierarchy changes | purely decorative page titles | `snippets/extended/breadcrumb/breadcrumb-path-update.html` |
| `bsx-breadcrumb-step-complete` | extended | breadcrumb | success | normal-ui | safe | no | color + opacity | `opacity` | `.active`, `[aria-current]`, `.bsx-is-success` | admin location and hierarchy changes | purely decorative page titles | `snippets/extended/breadcrumb/breadcrumb-step-complete.html` |
| `bsx-breadcrumb-overflow-menu` | extended | breadcrumb | navigation | normal-ui | safe | no | color + opacity | `opacity` | `.active`, `[aria-current]`, `.bsx-is-success` | admin location and hierarchy changes | purely decorative page titles | `snippets/extended/breadcrumb/breadcrumb-overflow-menu.html` |
| `bsx-breadcrumb-context-return` | extended | breadcrumb | navigation | normal-ui | safe | no | color + opacity | `transform`, `opacity` | `.active`, `[aria-current]`, `.bsx-is-success` | admin location and hierarchy changes | purely decorative page titles | `snippets/extended/breadcrumb/breadcrumb-context-return.html` |
| `bsx-pagination-item-press` | extended | pagination | navigation | dense-admin | safe | no | scale | `transform` | `.active`, `[aria-current]` | paged tables and search results | infinite scroll without page state | `snippets/extended/pagination/pagination-item-press.html` |
| `bsx-pagination-active-slide` | extended | pagination | navigation | dense-admin | safe | no | translate | `transform`, `box-shadow`, `background-color`, `border-color`, `color` | `.active`, `[aria-current]` | paged tables and search results | infinite scroll without page state | `snippets/extended/pagination/pagination-active-slide.html` |
| `bsx-pagination-loading-fade` | extended | pagination | loading | dense-admin | requires-js | yes | opacity | `opacity` | `.active`, `[aria-current]`, `[aria-busy]`, `.bsx-is-loading` | paged tables and search results | infinite scroll without page state | `snippets/extended/pagination/pagination-loading-fade.html` |
| `bsx-pagination-disabled-soft` | extended | pagination | navigation | dense-admin | safe | no | opacity | `opacity`, `background-color`, `border-color`, `color` | `.active`, `[aria-current]`, `.disabled`, `[disabled]`, `[aria-disabled]` | paged tables and search results | infinite scroll without page state | `snippets/extended/pagination/pagination-disabled-soft.html` |
| `bsx-pagination-page-change` | extended | pagination | data-change | dense-admin | requires-js | yes | color + opacity | `opacity`, `transform` | `.active`, `[aria-current]` | paged tables and search results | infinite scroll without page state | `snippets/extended/pagination/pagination-page-change.html` |
| `bsx-pagination-jump-focus` | extended | pagination | navigation | dense-admin | safe | no | color + opacity | `transform`, `opacity`, `box-shadow`, `outline-color` | `.active`, `[aria-current]` | paged tables and search results | infinite scroll without page state | `snippets/extended/pagination/pagination-jump-focus.html` |
| `bsx-button-group-active-marker` | extended | button-group | selection | normal-ui | safe | no | translate | `transform`, `box-shadow`, `background-color`, `border-color`, `color` | `.active`, `[aria-current]` | segmented controls, density toggles, and bulk modes | single primary actions | `snippets/extended/button-group/button-group-active-marker.html` |
| `bsx-button-group-segment-press` | extended | button-group | feedback | normal-ui | safe | no | scale | `transform` | `.active`, `[aria-current]` | segmented controls, density toggles, and bulk modes | single primary actions | `snippets/extended/button-group/button-group-segment-press.html` |
| `bsx-button-group-bulk-ready` | extended | button-group | selection | normal-ui | safe | no | color + opacity | `opacity` | `.active`, `[aria-current]`, `.bsx-is-success`, `.bsx-is-selected` | segmented controls, density toggles, and bulk modes | single primary actions | `snippets/extended/button-group/button-group-bulk-ready.html` |
| `bsx-button-group-toggle-sync` | extended | button-group | feedback | normal-ui | safe | no | color + opacity | `opacity`, `transform` | `.active`, `[aria-current]` | segmented controls, density toggles, and bulk modes | single primary actions | `snippets/extended/button-group/button-group-toggle-sync.html` |
| `bsx-button-group-density-switch` | extended | button-group | feedback | normal-ui | safe | no | color + opacity | `opacity`, `transform` | `.active`, `[aria-current]` | segmented controls, density toggles, and bulk modes | single primary actions | `snippets/extended/button-group/button-group-density-switch.html` |
| `bsx-button-group-filter-active` | extended | button-group | feedback | normal-ui | safe | no | color + opacity | `box-shadow`, `background-color`, `border-color`, `color` | `.active`, `[aria-current]` | segmented controls, density toggles, and bulk modes | single primary actions | `snippets/extended/button-group/button-group-filter-active.html` |
| `bsx-input-group-focus-ring` | extended | input-group | feedback | dense-admin | safe | no | color + opacity | `opacity`, `box-shadow`, `outline-color` | `.is-valid`, `.is-invalid`, `:focus-within` | search, copy, validation, and compound form controls | standalone long-form fields | `snippets/extended/input-group/input-group-focus-ring.html` |
| `bsx-input-group-addon-highlight` | extended | input-group | feedback | dense-admin | safe | no | color + opacity | `opacity`, `transform` | `.is-valid`, `.is-invalid`, `:focus-within` | search, copy, validation, and compound form controls | standalone long-form fields | `snippets/extended/input-group/input-group-addon-highlight.html` |
| `bsx-input-group-button-press` | extended | input-group | feedback | dense-admin | safe | no | scale | `transform` | `.is-valid`, `.is-invalid`, `:focus-within` | search, copy, validation, and compound form controls | standalone long-form fields | `snippets/extended/input-group/input-group-button-press.html` |
| `bsx-input-group-error-shake` | extended | input-group | validation | dense-admin | medium | no | shake | `opacity`, `background-color`, `border-color`, `color` | `.is-valid`, `.is-invalid`, `:focus-within`, `.bsx-is-error` | search, copy, validation, and compound form controls | standalone long-form fields | `snippets/extended/input-group/input-group-error-shake.html` |
| `bsx-input-group-success-glow` | extended | input-group | validation | dense-admin | safe | no | opacity | `opacity`, `box-shadow`, `background-color`, `border-color`, `color` | `.is-valid`, `.is-invalid`, `:focus-within`, `.bsx-is-success` | search, copy, validation, and compound form controls | standalone long-form fields | `snippets/extended/input-group/input-group-success-glow.html` |
| `bsx-input-group-copy-success` | extended | input-group | success | dense-admin | requires-js | yes | color + opacity | `opacity`, `background-color`, `border-color`, `color` | `.is-valid`, `.is-invalid`, `:focus-within`, `.bsx-is-success` | search, copy, validation, and compound form controls | standalone long-form fields | `snippets/extended/input-group/input-group-copy-success.html` |
| `bsx-close-button-hover-ring` | extended | close-button | feedback | normal-ui | medium | no | color + opacity | `box-shadow`, `outline-color` | none | dismiss, clear, and close affordances | destructive actions without confirmation | `snippets/extended/close-button/close-button-hover-ring.html` |
| `bsx-close-button-confirm-pending` | extended | close-button | loading | normal-ui | medium | no | color + opacity | `opacity` | `[aria-busy]`, `.bsx-is-loading` | dismiss, clear, and close affordances | destructive actions without confirmation | `snippets/extended/close-button/close-button-confirm-pending.html` |
| `bsx-close-button-toast-dismiss` | extended | close-button | exit | normal-ui | medium | no | color + opacity | `opacity`, `transform` | none | dismiss, clear, and close affordances | destructive actions without confirmation | `snippets/extended/close-button/close-button-toast-dismiss.html` |
| `bsx-close-button-panel-dismiss` | extended | close-button | navigation | normal-ui | medium | no | color + opacity | `transform` | none | dismiss, clear, and close affordances | destructive actions without confirmation | `snippets/extended/close-button/close-button-panel-dismiss.html` |
| `bsx-close-button-clear-filter` | extended | close-button | feedback | normal-ui | medium | no | color + opacity | `opacity`, `transform` | none | dismiss, clear, and close affordances | destructive actions without confirmation | `snippets/extended/close-button/close-button-clear-filter.html` |
| `bsx-crud-row-created-flash` | extended | admin/crud | data-change | dense-admin | safe | no | opacity | `opacity` | `.bsx-is-updated` | CRUD tables, inline edit, dirty state, save feedback, and bulk actions | marketing cards | `snippets/extended/admin/crud/crud-row-created-flash.html` |
| `bsx-crud-row-updated-flash` | extended | admin/crud | data-change | dense-admin | safe | no | opacity | `opacity` | `.bsx-is-updated` | CRUD tables, inline edit, dirty state, save feedback, and bulk actions | marketing cards | `snippets/extended/admin/crud/crud-row-updated-flash.html` |
| `bsx-crud-row-deleted-collapse` | extended | admin/crud | danger | dense-admin | medium | no | color + opacity | `transform` | `.bsx-is-error` | CRUD tables, inline edit, dirty state, save feedback, and bulk actions | marketing cards | `snippets/extended/admin/crud/crud-row-deleted-collapse.html` |
| `bsx-crud-row-restored-pop` | extended | admin/crud | success | dense-admin | safe | no | scale | `transform` | `.bsx-is-success` | CRUD tables, inline edit, dirty state, save feedback, and bulk actions | marketing cards | `snippets/extended/admin/crud/crud-row-restored-pop.html` |
| `bsx-crud-save-success-bar` | extended | admin/crud | success | dense-admin | safe | no | color + opacity | `transform`, `opacity`, `background-color`, `border-color`, `color` | `.bsx-is-success` | CRUD tables, inline edit, dirty state, save feedback, and bulk actions | marketing cards | `snippets/extended/admin/crud/crud-save-success-bar.html` |
| `bsx-crud-save-error-shake` | extended | admin/crud | state | dense-admin | medium | no | shake | `opacity`, `background-color`, `border-color`, `color` | `.bsx-is-error` | CRUD tables, inline edit, dirty state, save feedback, and bulk actions | marketing cards | `snippets/extended/admin/crud/crud-save-error-shake.html` |
| `bsx-crud-inline-edit-focus` | extended | admin/crud | feedback | dense-admin | safe | no | translate | `transform`, `opacity`, `box-shadow`, `outline-color` | none | CRUD tables, inline edit, dirty state, save feedback, and bulk actions | marketing cards | `snippets/extended/admin/crud/crud-inline-edit-focus.html` |
| `bsx-crud-inline-edit-saving` | extended | admin/crud | loading | dense-admin | requires-js | yes | translate | `transform`, `opacity` | none | CRUD tables, inline edit, dirty state, save feedback, and bulk actions | marketing cards | `snippets/extended/admin/crud/crud-inline-edit-saving.html` |
| `bsx-crud-bulk-action-bar-slide` | extended | admin/crud | selection | dense-admin | requires-js | yes | translate | `transform` | `.bsx-is-selected` | CRUD tables, inline edit, dirty state, save feedback, and bulk actions | marketing cards | `snippets/extended/admin/crud/crud-bulk-action-bar-slide.html` |
| `bsx-crud-bulk-selection-bump` | extended | admin/crud | selection | dense-admin | requires-js | yes | scale | `transform` | `.bsx-is-selected` | CRUD tables, inline edit, dirty state, save feedback, and bulk actions | marketing cards | `snippets/extended/admin/crud/crud-bulk-selection-bump.html` |
| `bsx-crud-permission-locked-soft` | extended | admin/crud | danger | dense-admin | medium | no | opacity | `opacity`, `background-color`, `border-color`, `color` | `.disabled`, `[disabled]`, `[aria-disabled]` | CRUD tables, inline edit, dirty state, save feedback, and bulk actions | marketing cards | `snippets/extended/admin/crud/crud-permission-locked-soft.html` |
| `bsx-crud-danger-zone-pulse` | extended | admin/crud | danger | dense-admin | medium | no | scale | `transform`, `background-color`, `border-color`, `color` | `.bsx-is-error` | CRUD tables, inline edit, dirty state, save feedback, and bulk actions | marketing cards | `snippets/extended/admin/crud/crud-danger-zone-pulse.html` |
| `bsx-filter-panel-slide` | extended | filter/search | navigation | dense-admin | safe | no | translate | `transform` | none | admin filters, search results, chip removal, and empty results | static navigation | `snippets/extended/filter/search/filter-panel-slide.html` |
| `bsx-filter-chip-pop` | extended | filter/search | selection | dense-admin | safe | no | scale | `transform` | none | admin filters, search results, chip removal, and empty results | static navigation | `snippets/extended/filter/search/filter-chip-pop.html` |
| `bsx-filter-chip-remove` | extended | filter/search | selection | dense-admin | requires-js | yes | translate | `transform` | none | admin filters, search results, chip removal, and empty results | static navigation | `snippets/extended/filter/search/filter-chip-remove.html` |
| `bsx-filter-applied-flash` | extended | filter/search | data-change | dense-admin | safe | no | opacity | `opacity` | none | admin filters, search results, chip removal, and empty results | static navigation | `snippets/extended/filter/search/filter-applied-flash.html` |
| `bsx-filter-reset-fade` | extended | filter/search | data-change | dense-admin | requires-js | yes | opacity | `opacity` | none | admin filters, search results, chip removal, and empty results | static navigation | `snippets/extended/filter/search/filter-reset-fade.html` |
| `bsx-search-input-focus-glow` | extended | filter/search | feedback | dense-admin | safe | no | opacity | `opacity`, `box-shadow`, `outline-color` | none | admin filters, search results, chip removal, and empty results | static navigation | `snippets/extended/filter/search/search-input-focus-glow.html` |
| `bsx-search-results-reveal` | extended | filter/search | data-change | dense-admin | safe | no | translate | `transform` | none | admin filters, search results, chip removal, and empty results | static navigation | `snippets/extended/filter/search/search-results-reveal.html` |
| `bsx-search-empty-pop` | extended | filter/search | state | dense-admin | safe | no | scale | `transform`, `opacity` | none | admin filters, search results, chip removal, and empty results | static navigation | `snippets/extended/filter/search/search-empty-pop.html` |
| `bsx-search-loading-line` | extended | filter/search | loading | dense-admin | safe | no | translate + opacity | `transform`, `opacity` | `[aria-busy]`, `.bsx-is-loading` | admin filters, search results, chip removal, and empty results | static navigation | `snippets/extended/filter/search/search-loading-line.html` |
| `bsx-sort-direction-flip` | extended | filter/search | data-change | dense-admin | safe | no | color + opacity | `transform` | none | admin filters, search results, chip removal, and empty results | static navigation | `snippets/extended/filter/search/sort-direction-flip.html` |
| `bsx-wizard-step-enter` | extended | form-wizard | navigation | normal-ui | requires-js | yes | color + opacity | `transform` | `.is-valid`, `.is-invalid`, `:focus-within` | multi-step forms with validation and review states | single-page forms without steps | `snippets/extended/form-wizard/wizard-step-enter.html` |
| `bsx-wizard-step-exit` | extended | form-wizard | navigation | normal-ui | requires-js | yes | color + opacity | `transform` | `.is-valid`, `.is-invalid`, `:focus-within` | multi-step forms with validation and review states | single-page forms without steps | `snippets/extended/form-wizard/wizard-step-exit.html` |
| `bsx-wizard-step-invalid-shake` | extended | form-wizard | validation | normal-ui | medium | no | shake | `opacity`, `transform` | `.is-valid`, `.is-invalid`, `:focus-within`, `.bsx-is-error` | multi-step forms with validation and review states | single-page forms without steps | `snippets/extended/form-wizard/wizard-step-invalid-shake.html` |
| `bsx-wizard-step-complete-check` | extended | form-wizard | success | normal-ui | safe | no | color + opacity | `opacity`, `transform` | `.is-valid`, `.is-invalid`, `:focus-within`, `.bsx-is-success` | multi-step forms with validation and review states | single-page forms without steps | `snippets/extended/form-wizard/wizard-step-complete-check.html` |
| `bsx-wizard-summary-reveal` | extended | form-wizard | navigation | normal-ui | safe | no | translate | `transform` | `.is-valid`, `.is-invalid`, `:focus-within` | multi-step forms with validation and review states | single-page forms without steps | `snippets/extended/form-wizard/wizard-summary-reveal.html` |
| `bsx-wizard-back-soft` | extended | form-wizard | navigation | normal-ui | safe | no | opacity | `opacity` | `.is-valid`, `.is-invalid`, `:focus-within` | multi-step forms with validation and review states | single-page forms without steps | `snippets/extended/form-wizard/wizard-back-soft.html` |
| `bsx-wizard-next-press` | extended | form-wizard | navigation | normal-ui | safe | no | scale | `transform` | `.is-valid`, `.is-invalid`, `:focus-within` | multi-step forms with validation and review states | single-page forms without steps | `snippets/extended/form-wizard/wizard-next-press.html` |
| `bsx-wizard-saving-overlay` | extended | form-wizard | loading | normal-ui | requires-js | yes | color + opacity | `transform`, `opacity` | `.is-valid`, `.is-invalid`, `:focus-within`, `[aria-busy]`, `.bsx-is-loading` | multi-step forms with validation and review states | single-page forms without steps | `snippets/extended/form-wizard/wizard-saving-overlay.html` |
| `bsx-state-empty-pop` | extended | state | state | normal-ui | safe | no | scale | `transform`, `opacity` | none | empty, error, success, warning, offline, lock, and unsaved states | decorative content blocks | `snippets/extended/state/state-empty-pop.html` |
| `bsx-state-empty-icon-float` | extended | state | state | normal-ui | safe | no | color + opacity | `transform`, `opacity` | none | empty, error, success, warning, offline, lock, and unsaved states | decorative content blocks | `snippets/extended/state/state-empty-icon-float.html` |
| `bsx-state-error-shake` | extended | state | state | normal-ui | medium | no | shake | `opacity`, `background-color`, `border-color`, `color` | `.bsx-is-error` | empty, error, success, warning, offline, lock, and unsaved states | decorative content blocks | `snippets/extended/state/state-error-shake.html` |
| `bsx-state-error-retry-press` | extended | state | state | normal-ui | requires-js | yes | scale | `transform`, `opacity`, `background-color`, `border-color`, `color` | `.bsx-is-error` | empty, error, success, warning, offline, lock, and unsaved states | decorative content blocks | `snippets/extended/state/state-error-retry-press.html` |
| `bsx-state-success-check` | extended | state | success | normal-ui | safe | no | color + opacity | `opacity`, `background-color`, `border-color`, `color` | `.bsx-is-success` | empty, error, success, warning, offline, lock, and unsaved states | decorative content blocks | `snippets/extended/state/state-success-check.html` |
| `bsx-state-warning-attention` | extended | state | state | normal-ui | safe | no | shake | `opacity`, `background-color`, `border-color`, `color` | none | empty, error, success, warning, offline, lock, and unsaved states | decorative content blocks | `snippets/extended/state/state-warning-attention.html` |
| `bsx-state-offline-pulse` | extended | state | state | normal-ui | medium | no | translate + scale | `transform`, `opacity` | none | empty, error, success, warning, offline, lock, and unsaved states | decorative content blocks | `snippets/extended/state/state-offline-pulse.html` |
| `bsx-state-reconnect-fade` | extended | state | state | normal-ui | safe | no | opacity | `opacity` | none | empty, error, success, warning, offline, lock, and unsaved states | decorative content blocks | `snippets/extended/state/state-reconnect-fade.html` |
| `bsx-data-card-refresh` | extended | data-loading | loading | dense-admin | requires-js | yes | color + opacity | `opacity` | `.bsx-is-updated` | table, card, metric, filter, save, and inline loading states | unknown long-running jobs without copy | `snippets/extended/data-loading/data-card-refresh.html` |
| `bsx-data-table-refresh` | extended | data-loading | loading | dense-admin | requires-js | yes | color + opacity | `opacity` | `.bsx-is-updated` | table, card, metric, filter, save, and inline loading states | unknown long-running jobs without copy | `snippets/extended/data-loading/data-table-refresh.html` |
| `bsx-data-section-loading-fade` | extended | data-loading | loading | dense-admin | safe | no | opacity | `opacity` | `[aria-busy]`, `.bsx-is-loading` | table, card, metric, filter, save, and inline loading states | unknown long-running jobs without copy | `snippets/extended/data-loading/data-section-loading-fade.html` |
| `bsx-data-overlay-blur` | extended | data-loading | loading | dense-admin | medium | no | opacity | `transform`, `opacity`, `filter` | `[aria-busy]`, `.bsx-is-loading` | table, card, metric, filter, save, and inline loading states | unknown long-running jobs without copy | `snippets/extended/data-loading/data-overlay-blur.html` |
| `bsx-data-inline-saving` | extended | data-loading | loading | dense-admin | safe | no | translate | `transform`, `opacity` | none | table, card, metric, filter, save, and inline loading states | unknown long-running jobs without copy | `snippets/extended/data-loading/data-inline-saving.html` |
| `bsx-data-chart-loading` | extended | data-loading | loading | dense-admin | safe | no | opacity | `opacity` | `[aria-busy]`, `.bsx-is-loading` | table, card, metric, filter, save, and inline loading states | unknown long-running jobs without copy | `snippets/extended/data-loading/data-chart-loading.html` |
| `bsx-data-kpi-refresh` | extended | data-loading | loading | dense-admin | requires-js | yes | color + opacity | `opacity` | `.bsx-is-updated` | table, card, metric, filter, save, and inline loading states | unknown long-running jobs without copy | `snippets/extended/data-loading/data-kpi-refresh.html` |
| `bsx-data-diff-highlight` | extended | data-loading | data-change | dense-admin | requires-js | yes | color + opacity | `opacity`, `transform` | `.bsx-is-updated` | table, card, metric, filter, save, and inline loading states | unknown long-running jobs without copy | `snippets/extended/data-loading/data-diff-highlight.html` |
| `bsx-notification-item-new` | extended | notification-center | data-change | dense-admin | safe | no | color + opacity | `opacity` | `.bsx-is-updated` | notification inbox panels and unread/read transitions | critical alerts that require modal confirmation | `snippets/extended/notification-center/notification-item-new.html` |
| `bsx-notification-item-read-fade` | extended | notification-center | data-change | dense-admin | safe | no | opacity | `opacity` | `.bsx-is-success` | notification inbox panels and unread/read transitions | critical alerts that require modal confirmation | `snippets/extended/notification-center/notification-item-read-fade.html` |
| `bsx-notification-item-remove` | extended | notification-center | exit | dense-admin | requires-js | yes | translate | `transform` | none | notification inbox panels and unread/read transitions | critical alerts that require modal confirmation | `snippets/extended/notification-center/notification-item-remove.html` |
| `bsx-notification-counter-bump` | extended | notification-center | data-change | dense-admin | requires-js | yes | scale | `transform` | none | notification inbox panels and unread/read transitions | critical alerts that require modal confirmation | `snippets/extended/notification-center/notification-counter-bump.html` |
| `bsx-notification-panel-slide` | extended | notification-center | navigation | dense-admin | safe | no | translate | `transform` | none | notification inbox panels and unread/read transitions | critical alerts that require modal confirmation | `snippets/extended/notification-center/notification-panel-slide.html` |
| `bsx-notification-priority-pulse` | extended | notification-center | feedback | dense-admin | safe | no | scale | `transform`, `background-color`, `border-color`, `color` | none | notification inbox panels and unread/read transitions | critical alerts that require modal confirmation | `snippets/extended/notification-center/notification-priority-pulse.html` |
| `bsx-mobile-bottom-bar-active` | extended | mobile | navigation | mobile | safe | no | color + opacity | `transform`, `box-shadow`, `background-color`, `border-color`, `color` | `.active`, `[aria-current]` | mobile admin actions, sticky save bars, bottom nav, and filter sheets | desktop-only dense grids | `snippets/extended/mobile/mobile-bottom-bar-active.html` |
| `bsx-mobile-tabbar-press` | extended | mobile | navigation | mobile | safe | no | scale | `transform` | `.active`, `[aria-current]` | mobile admin actions, sticky save bars, bottom nav, and filter sheets | desktop-only dense grids | `snippets/extended/mobile/mobile-tabbar-press.html` |
| `bsx-mobile-fab-pop` | extended | mobile | navigation | mobile | safe | no | scale | `transform` | `.active`, `[aria-current]` | mobile admin actions, sticky save bars, bottom nav, and filter sheets | desktop-only dense grids | `snippets/extended/mobile/mobile-fab-pop.html` |
| `bsx-mobile-fab-menu-stagger` | extended | mobile | navigation | mobile | requires-js | yes | translate | `transform` | `.active`, `[aria-current]` | mobile admin actions, sticky save bars, bottom nav, and filter sheets | desktop-only dense grids | `snippets/extended/mobile/mobile-fab-menu-stagger.html` |
| `bsx-mobile-swipe-action-reveal` | extended | mobile | navigation | mobile | requires-js | yes | translate | `transform` | `.active`, `[aria-current]` | mobile admin actions, sticky save bars, bottom nav, and filter sheets | desktop-only dense grids | `snippets/extended/mobile/mobile-swipe-action-reveal.html` |
| `bsx-mobile-sticky-save-bar` | extended | mobile | navigation | mobile | safe | no | color + opacity | `transform` | `.active`, `[aria-current]` | mobile admin actions, sticky save bars, bottom nav, and filter sheets | desktop-only dense grids | `snippets/extended/mobile/mobile-sticky-save-bar.html` |
| `bsx-mobile-keyboard-safe-panel` | extended | mobile | navigation | mobile | safe | no | color + opacity | `transform` | `.active`, `[aria-current]` | mobile admin actions, sticky save bars, bottom nav, and filter sheets | desktop-only dense grids | `snippets/extended/mobile/mobile-keyboard-safe-panel.html` |
| `bsx-mobile-filter-sheet` | extended | mobile | navigation | mobile | safe | no | translate | `transform` | `.active`, `[aria-current]` | mobile admin actions, sticky save bars, bottom nav, and filter sheets | desktop-only dense grids | `snippets/extended/mobile/mobile-filter-sheet.html` |

## modal-scale

- Category: modal
- Class: `bsx-modal-scale`
- Level: core
- Bootstrap component: modal
- Kind: feedback
- Density: marketing
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform
- Bootstrap states: .show
- Scenario: apply modal scale to dialogs and confirmations in a Bootstrap 5 modal pattern
- Best for: dialogs and confirmations
- Avoid for: dense repeated workflows
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/modal/modal-scale.html`

## modal-slide-up

- Category: modal
- Class: `bsx-modal-slide-up`
- Level: core
- Bootstrap component: modal
- Kind: entry
- Density: marketing
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: .show
- Scenario: apply modal slide up to dialogs and confirmations in a Bootstrap 5 modal pattern
- Best for: dialogs and confirmations
- Avoid for: dense repeated workflows
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/modal/modal-slide-up.html`

## modal-blur-backdrop

- Category: modal
- Class: `bsx-modal-blur-backdrop`
- Level: core
- Bootstrap component: modal
- Kind: feedback
- Density: marketing
- Risk: medium
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity, filter
- Bootstrap states: .show
- Scenario: apply modal blur backdrop to dialogs and confirmations in a Bootstrap 5 modal pattern
- Best for: dialogs and confirmations
- Avoid for: dense repeated workflows
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/core/modal/modal-blur-backdrop.html`

## modal-danger-confirm

- Category: modal
- Class: `bsx-modal-danger-confirm`
- Level: core
- Bootstrap component: modal
- Kind: danger
- Density: marketing
- Risk: medium
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: background-color, border-color, color
- Bootstrap states: .show, .bsx-is-error
- Scenario: apply modal danger confirm to dialogs and confirmations in a Bootstrap 5 modal pattern
- Best for: dialogs and confirmations
- Avoid for: dense repeated workflows
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/modal/modal-danger-confirm.html`

## modal-success-confirm

- Category: modal
- Class: `bsx-modal-success-confirm`
- Level: core
- Bootstrap component: modal
- Kind: success
- Density: marketing
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: opacity, background-color, border-color, color
- Bootstrap states: .show, .bsx-is-success
- Scenario: apply modal success confirm to dialogs and confirmations in a Bootstrap 5 modal pattern
- Best for: dialogs and confirmations
- Avoid for: dense repeated workflows
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/modal/modal-success-confirm.html`

## modal-sheet-mobile

- Category: modal
- Class: `bsx-modal-sheet-mobile`
- Level: core
- Bootstrap component: modal
- Kind: navigation
- Density: marketing
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: .show
- Scenario: apply modal sheet mobile to dialogs and confirmations in a Bootstrap 5 modal pattern
- Best for: dialogs and confirmations
- Avoid for: dense repeated workflows
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/modal/modal-sheet-mobile.html`

## dropdown-soft

- Category: dropdown
- Class: `bsx-dropdown-soft`
- Level: core
- Bootstrap component: dropdown
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: .dropdown-menu.show
- Scenario: apply dropdown soft to menus with clear visual hierarchy in a Bootstrap 5 dropdown pattern
- Best for: menus with clear visual hierarchy
- Avoid for: menus requiring instant state changes
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/dropdown/dropdown-soft.html`

## dropdown-slide-down

- Category: dropdown
- Class: `bsx-dropdown-slide-down`
- Level: core
- Bootstrap component: dropdown
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: .dropdown-menu.show
- Scenario: apply dropdown slide down to menus with clear visual hierarchy in a Bootstrap 5 dropdown pattern
- Best for: menus with clear visual hierarchy
- Avoid for: menus requiring instant state changes
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/dropdown/dropdown-slide-down.html`

## dropdown-scale

- Category: dropdown
- Class: `bsx-dropdown-scale`
- Level: core
- Bootstrap component: dropdown
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform
- Bootstrap states: .dropdown-menu.show
- Scenario: apply dropdown scale to menus with clear visual hierarchy in a Bootstrap 5 dropdown pattern
- Best for: menus with clear visual hierarchy
- Avoid for: menus requiring instant state changes
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/dropdown/dropdown-scale.html`

## dropdown-menu-stagger

- Category: dropdown
- Class: `bsx-dropdown-menu-stagger`
- Level: core
- Bootstrap component: dropdown
- Kind: navigation
- Density: normal-ui
- Risk: visual-diff
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: .dropdown-menu.show
- Scenario: apply dropdown menu stagger to menus with clear visual hierarchy in a Bootstrap 5 dropdown pattern
- Best for: menus with clear visual hierarchy
- Avoid for: menus requiring instant state changes
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/dropdown/dropdown-menu-stagger.html`

## dropdown-item-hover-slide

- Category: dropdown
- Class: `bsx-dropdown-item-hover-slide`
- Level: core
- Bootstrap component: dropdown
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: .dropdown-menu.show
- Scenario: apply dropdown item hover slide to menus with clear visual hierarchy in a Bootstrap 5 dropdown pattern
- Best for: menus with clear visual hierarchy
- Avoid for: menus requiring instant state changes
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/dropdown/dropdown-item-hover-slide.html`

## dropdown-mega-menu-soft

- Category: dropdown
- Class: `bsx-dropdown-mega-menu-soft`
- Level: core
- Bootstrap component: dropdown
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: .dropdown-menu.show
- Scenario: apply dropdown mega menu soft to menus with clear visual hierarchy in a Bootstrap 5 dropdown pattern
- Best for: menus with clear visual hierarchy
- Avoid for: menus requiring instant state changes
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/dropdown/dropdown-mega-menu-soft.html`

## offcanvas-soft

- Category: offcanvas
- Class: `bsx-offcanvas-soft`
- Level: core
- Bootstrap component: offcanvas
- Kind: navigation
- Density: marketing
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: .show
- Scenario: apply offcanvas soft to navigation and mobile panels in a Bootstrap 5 offcanvas pattern
- Best for: navigation and mobile panels
- Avoid for: permanent desktop navigation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/offcanvas/offcanvas-soft.html`

## offcanvas-blur-backdrop

- Category: offcanvas
- Class: `bsx-offcanvas-blur-backdrop`
- Level: core
- Bootstrap component: offcanvas
- Kind: navigation
- Density: marketing
- Risk: medium
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity, filter
- Bootstrap states: .show
- Scenario: apply offcanvas blur backdrop to navigation and mobile panels in a Bootstrap 5 offcanvas pattern
- Best for: navigation and mobile panels
- Avoid for: permanent desktop navigation
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/core/offcanvas/offcanvas-blur-backdrop.html`

## offcanvas-mobile-sheet

- Category: offcanvas
- Class: `bsx-offcanvas-mobile-sheet`
- Level: core
- Bootstrap component: offcanvas
- Kind: navigation
- Density: marketing
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: .show
- Scenario: apply offcanvas mobile sheet to navigation and mobile panels in a Bootstrap 5 offcanvas pattern
- Best for: navigation and mobile panels
- Avoid for: permanent desktop navigation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/offcanvas/offcanvas-mobile-sheet.html`

## offcanvas-menu-stagger

- Category: offcanvas
- Class: `bsx-offcanvas-menu-stagger`
- Level: core
- Bootstrap component: offcanvas
- Kind: navigation
- Density: marketing
- Risk: visual-diff
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: .show
- Scenario: apply offcanvas menu stagger to navigation and mobile panels in a Bootstrap 5 offcanvas pattern
- Best for: navigation and mobile panels
- Avoid for: permanent desktop navigation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/offcanvas/offcanvas-menu-stagger.html`

## toast-slide-right

- Category: toast
- Class: `bsx-toast-slide-right`
- Level: core
- Bootstrap component: toast
- Kind: feedback
- Density: normal-ui
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: toast trigger
- Runtime action: show-toast
- Motion: translate
- CSS properties: transform
- Bootstrap states: .show
- Scenario: apply toast slide right to brief asynchronous feedback in a Bootstrap 5 toast pattern
- Best for: brief asynchronous feedback
- Avoid for: critical information requiring confirmation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/toast/toast-slide-right.html`

## toast-pop

- Category: toast
- Class: `bsx-toast-pop`
- Level: core
- Bootstrap component: toast
- Kind: entry
- Density: normal-ui
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: toast trigger
- Runtime action: show-toast
- Motion: scale
- CSS properties: transform
- Bootstrap states: .show
- Scenario: apply toast pop to brief asynchronous feedback in a Bootstrap 5 toast pattern
- Best for: brief asynchronous feedback
- Avoid for: critical information requiring confirmation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/toast/toast-pop.html`

## toast-stack-pop

- Category: toast
- Class: `bsx-toast-stack-pop`
- Level: core
- Bootstrap component: toast
- Kind: entry
- Density: normal-ui
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: toast trigger
- Runtime action: show-toast
- Motion: scale
- CSS properties: transform
- Bootstrap states: .show
- Scenario: apply toast stack pop to brief asynchronous feedback in a Bootstrap 5 toast pattern
- Best for: brief asynchronous feedback
- Avoid for: critical information requiring confirmation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/toast/toast-stack-pop.html`

## toast-success-pop

- Category: toast
- Class: `bsx-toast-success-pop`
- Level: core
- Bootstrap component: toast
- Kind: success
- Density: normal-ui
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: toast trigger
- Runtime action: show-toast
- Motion: scale
- CSS properties: transform, opacity, background-color, border-color, color
- Bootstrap states: .show, .bsx-is-success
- Scenario: apply toast success pop to brief asynchronous feedback in a Bootstrap 5 toast pattern
- Best for: brief asynchronous feedback
- Avoid for: critical information requiring confirmation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/toast/toast-success-pop.html`

## toast-error-shake

- Category: toast
- Class: `bsx-toast-error-shake`
- Level: core
- Bootstrap component: toast
- Kind: state
- Density: normal-ui
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: toast trigger
- Runtime action: show-toast
- Motion: shake
- CSS properties: opacity, background-color, border-color, color
- Bootstrap states: .show, .bsx-is-error
- Scenario: apply toast error shake to brief asynchronous feedback in a Bootstrap 5 toast pattern
- Best for: brief asynchronous feedback
- Avoid for: critical information requiring confirmation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/toast/toast-error-shake.html`

## toast-progress-line

- Category: toast
- Class: `bsx-toast-progress-line`
- Level: core
- Bootstrap component: toast
- Kind: feedback
- Density: normal-ui
- Risk: requires-js
- Requires JS: yes
- Requires markup change: true
- Runtime behavior: toast trigger
- Runtime action: show-toast
- Motion: translate
- CSS properties: transform
- Bootstrap states: .show
- Scenario: apply toast progress line to brief asynchronous feedback in a Bootstrap 5 toast pattern
- Best for: brief asynchronous feedback
- Avoid for: critical information requiring confirmation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/toast/toast-progress-line.html`

## alert-reveal

- Category: alert
- Class: `bsx-alert-reveal`
- Level: core
- Bootstrap component: alert
- Kind: entry
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply alert reveal to inline feedback and validation summaries in a Bootstrap 5 alert pattern
- Best for: inline feedback and validation summaries
- Avoid for: decorative content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/alert/alert-reveal.html`

## alert-slide-down

- Category: alert
- Class: `bsx-alert-slide-down`
- Level: core
- Bootstrap component: alert
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply alert slide down to inline feedback and validation summaries in a Bootstrap 5 alert pattern
- Best for: inline feedback and validation summaries
- Avoid for: decorative content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/alert/alert-slide-down.html`

## alert-shake

- Category: alert
- Class: `bsx-alert-shake`
- Level: core
- Bootstrap component: alert
- Kind: feedback
- Density: normal-ui
- Risk: medium
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: shake
- CSS properties: opacity, transform
- Bootstrap states: none
- Scenario: apply alert shake to inline feedback and validation summaries in a Bootstrap 5 alert pattern
- Best for: inline feedback and validation summaries
- Avoid for: decorative content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/alert/alert-shake.html`

## alert-pulse-border

- Category: alert
- Class: `bsx-alert-pulse-border`
- Level: core
- Bootstrap component: alert
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply alert pulse border to inline feedback and validation summaries in a Bootstrap 5 alert pattern
- Best for: inline feedback and validation summaries
- Avoid for: decorative content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/alert/alert-pulse-border.html`

## alert-success-glow

- Category: alert
- Class: `bsx-alert-success-glow`
- Level: core
- Bootstrap component: alert
- Kind: success
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity, box-shadow, background-color, border-color, color
- Bootstrap states: .bsx-is-success
- Scenario: apply alert success glow to inline feedback and validation summaries in a Bootstrap 5 alert pattern
- Best for: inline feedback and validation summaries
- Avoid for: decorative content
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/core/alert/alert-success-glow.html`

## alert-dismissible-exit

- Category: alert
- Class: `bsx-alert-dismissible-exit`
- Level: core
- Bootstrap component: alert
- Kind: exit
- Density: normal-ui
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: delayed alert dismissal
- Runtime action: none
- Motion: color + opacity
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply alert dismissible exit to inline feedback and validation summaries in a Bootstrap 5 alert pattern
- Best for: inline feedback and validation summaries
- Avoid for: decorative content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/alert/alert-dismissible-exit.html`

## button-press

- Category: button
- Class: `bsx-button-press`
- Level: core
- Bootstrap component: button
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply button press to direct interaction feedback in a Bootstrap 5 button pattern
- Best for: direct interaction feedback
- Avoid for: large continuously animated areas
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/button/button-press.html`

## button-hover-lift

- Category: button
- Class: `bsx-button-hover-lift`
- Level: core
- Bootstrap component: button
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply button hover lift to direct interaction feedback in a Bootstrap 5 button pattern
- Best for: direct interaction feedback
- Avoid for: large continuously animated areas
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/button/button-hover-lift.html`

## button-hover-glow

- Category: button
- Class: `bsx-button-hover-glow`
- Level: core
- Bootstrap component: button
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity, box-shadow
- Bootstrap states: none
- Scenario: apply button hover glow to direct interaction feedback in a Bootstrap 5 button pattern
- Best for: direct interaction feedback
- Avoid for: large continuously animated areas
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/core/button/button-hover-glow.html`

## button-loading-spinner

- Category: button
- Class: `bsx-button-loading-spinner`
- Level: core
- Bootstrap component: button
- Kind: loading
- Density: normal-ui
- Risk: requires-js
- Requires JS: yes
- Requires markup change: true
- Runtime behavior: button loading and success state
- Runtime action: button-state
- Motion: opacity + rotate
- CSS properties: opacity
- Bootstrap states: [aria-busy], .bsx-is-loading
- Scenario: apply button loading spinner to direct interaction feedback in a Bootstrap 5 button pattern
- Best for: direct interaction feedback
- Avoid for: large continuously animated areas
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/button/button-loading-spinner.html`

## button-loading-dots

- Category: button
- Class: `bsx-button-loading-dots`
- Level: core
- Bootstrap component: button
- Kind: loading
- Density: normal-ui
- Risk: requires-js
- Requires JS: yes
- Requires markup change: true
- Runtime behavior: button loading and success state
- Runtime action: button-state
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: [aria-busy], .bsx-is-loading
- Scenario: apply button loading dots to direct interaction feedback in a Bootstrap 5 button pattern
- Best for: direct interaction feedback
- Avoid for: large continuously animated areas
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/button/button-loading-dots.html`

## button-success-pop

- Category: button
- Class: `bsx-button-success-pop`
- Level: core
- Bootstrap component: button
- Kind: success
- Density: normal-ui
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: button loading and success state
- Runtime action: button-state
- Motion: scale
- CSS properties: transform, opacity, background-color, border-color, color
- Bootstrap states: .bsx-is-success
- Scenario: apply button success pop to direct interaction feedback in a Bootstrap 5 button pattern
- Best for: direct interaction feedback
- Avoid for: large continuously animated areas
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/button/button-success-pop.html`

## button-icon-slide

- Category: button
- Class: `bsx-button-icon-slide`
- Level: core
- Bootstrap component: button
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply button icon slide to direct interaction feedback in a Bootstrap 5 button pattern
- Best for: direct interaction feedback
- Avoid for: large continuously animated areas
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/button/button-icon-slide.html`

## button-ripple-lite

- Category: button
- Class: `bsx-button-ripple-lite`
- Level: core
- Bootstrap component: button
- Kind: feedback
- Density: normal-ui
- Risk: requires-js
- Requires JS: yes
- Requires markup change: true
- Runtime behavior: pointer ripple
- Runtime action: button-state
- Motion: color + opacity
- CSS properties: opacity, transform
- Bootstrap states: none
- Scenario: apply button ripple lite to direct interaction feedback in a Bootstrap 5 button pattern
- Best for: direct interaction feedback
- Avoid for: large continuously animated areas
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/button/button-ripple-lite.html`

## form-focus-ring

- Category: form
- Class: `bsx-form-focus-ring`
- Level: core
- Bootstrap component: form
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: opacity, box-shadow, outline-color
- Bootstrap states: .is-valid, .is-invalid, :focus-within
- Scenario: apply form focus ring to focus and validation feedback in a Bootstrap 5 form pattern
- Best for: focus and validation feedback
- Avoid for: replacing native validation semantics
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/form/form-focus-ring.html`

## form-invalid-shake

- Category: form
- Class: `bsx-form-invalid-shake`
- Level: core
- Bootstrap component: form
- Kind: validation
- Density: normal-ui
- Risk: medium
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: shake
- CSS properties: opacity, transform
- Bootstrap states: .is-valid, .is-invalid, :focus-within, .bsx-is-error
- Scenario: apply form invalid shake to focus and validation feedback in a Bootstrap 5 form pattern
- Best for: focus and validation feedback
- Avoid for: replacing native validation semantics
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/form/form-invalid-shake.html`

## form-valid-check

- Category: form
- Class: `bsx-form-valid-check`
- Level: core
- Bootstrap component: form
- Kind: success
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: opacity, transform
- Bootstrap states: .is-valid, .is-invalid, :focus-within
- Scenario: apply form valid check to focus and validation feedback in a Bootstrap 5 form pattern
- Best for: focus and validation feedback
- Avoid for: replacing native validation semantics
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/form/form-valid-check.html`

## form-help-text-reveal

- Category: form
- Class: `bsx-form-help-text-reveal`
- Level: core
- Bootstrap component: form
- Kind: entry
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: .is-valid, .is-invalid, :focus-within
- Scenario: apply form help text reveal to focus and validation feedback in a Bootstrap 5 form pattern
- Best for: focus and validation feedback
- Avoid for: replacing native validation semantics
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/form/form-help-text-reveal.html`

## form-error-text-slide

- Category: form
- Class: `bsx-form-error-text-slide`
- Level: core
- Bootstrap component: form
- Kind: state
- Density: normal-ui
- Risk: medium
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform, opacity, background-color, border-color, color
- Bootstrap states: .is-valid, .is-invalid, :focus-within, .bsx-is-error
- Scenario: apply form error text slide to focus and validation feedback in a Bootstrap 5 form pattern
- Best for: focus and validation feedback
- Avoid for: replacing native validation semantics
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/form/form-error-text-slide.html`

## form-switch-toggle-soft

- Category: form
- Class: `bsx-form-switch-toggle-soft`
- Level: core
- Bootstrap component: form
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: .is-valid, .is-invalid, :focus-within
- Scenario: apply form switch toggle soft to focus and validation feedback in a Bootstrap 5 form pattern
- Best for: focus and validation feedback
- Avoid for: replacing native validation semantics
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/form/form-switch-toggle-soft.html`

## form-checkbox-pop

- Category: form
- Class: `bsx-form-checkbox-pop`
- Level: core
- Bootstrap component: form
- Kind: success
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform
- Bootstrap states: .is-valid, .is-invalid, :focus-within
- Scenario: apply form checkbox pop to focus and validation feedback in a Bootstrap 5 form pattern
- Best for: focus and validation feedback
- Avoid for: replacing native validation semantics
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/form/form-checkbox-pop.html`

## form-file-drop-highlight

- Category: form
- Class: `bsx-form-file-drop-highlight`
- Level: core
- Bootstrap component: form
- Kind: feedback
- Density: normal-ui
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: file drag state
- Runtime action: none
- Motion: color + opacity
- CSS properties: opacity, transform
- Bootstrap states: .is-valid, .is-invalid, :focus-within
- Scenario: apply form file drop highlight to focus and validation feedback in a Bootstrap 5 form pattern
- Best for: focus and validation feedback
- Avoid for: replacing native validation semantics
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/form/form-file-drop-highlight.html`

## card-hover-lift

- Category: card
- Class: `bsx-card-hover-lift`
- Level: core
- Bootstrap component: card
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply card hover lift to interactive content collections in a Bootstrap 5 card pattern
- Best for: interactive content collections
- Avoid for: non-interactive dense tables
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/card/card-hover-lift.html`

## card-hover-scale

- Category: card
- Class: `bsx-card-hover-scale`
- Level: core
- Bootstrap component: card
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply card hover scale to interactive content collections in a Bootstrap 5 card pattern
- Best for: interactive content collections
- Avoid for: non-interactive dense tables
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/card/card-hover-scale.html`

## card-hover-shadow

- Category: card
- Class: `bsx-card-hover-shadow`
- Level: core
- Bootstrap component: card
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: box-shadow
- Bootstrap states: none
- Scenario: apply card hover shadow to interactive content collections in a Bootstrap 5 card pattern
- Best for: interactive content collections
- Avoid for: non-interactive dense tables
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/core/card/card-hover-shadow.html`

## card-image-zoom

- Category: card
- Class: `bsx-card-image-zoom`
- Level: core
- Bootstrap component: card
- Kind: feedback
- Density: normal-ui
- Risk: visual-diff
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply card image zoom to interactive content collections in a Bootstrap 5 card pattern
- Best for: interactive content collections
- Avoid for: non-interactive dense tables
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/card/card-image-zoom.html`

## card-image-fade-overlay

- Category: card
- Class: `bsx-card-image-fade-overlay`
- Level: core
- Bootstrap component: card
- Kind: loading
- Density: normal-ui
- Risk: medium
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: transform, opacity
- Bootstrap states: [aria-busy], .bsx-is-loading
- Scenario: apply card image fade overlay to interactive content collections in a Bootstrap 5 card pattern
- Best for: interactive content collections
- Avoid for: non-interactive dense tables
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/core/card/card-image-fade-overlay.html`

## card-stagger-list

- Category: card
- Class: `bsx-card-stagger-list`
- Level: core
- Bootstrap component: card
- Kind: feedback
- Density: normal-ui
- Risk: visual-diff
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply card stagger list to interactive content collections in a Bootstrap 5 card pattern
- Best for: interactive content collections
- Avoid for: non-interactive dense tables
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/card/card-stagger-list.html`

## tabs-fade

- Category: tabs/nav
- Class: `bsx-tabs-fade`
- Level: core
- Bootstrap component: tabs
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: .active, [aria-current]
- Scenario: apply tabs fade to section navigation and tab state in a Bootstrap 5 tabs pattern
- Best for: section navigation and tab state
- Avoid for: rapidly auto-rotating content
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/core/tabs/tabs-fade.html`

## tabs-underline-slide

- Category: tabs/nav
- Class: `bsx-tabs-underline-slide`
- Level: core
- Bootstrap component: tabs
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform, text-decoration-color
- Bootstrap states: .active, [aria-current]
- Scenario: apply tabs underline slide to section navigation and tab state in a Bootstrap 5 tabs pattern
- Best for: section navigation and tab state
- Avoid for: rapidly auto-rotating content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/tabs/tabs-underline-slide.html`

## tabs-pill-active-pop

- Category: tabs/nav
- Class: `bsx-tabs-pill-active-pop`
- Level: core
- Bootstrap component: tabs
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform, box-shadow, background-color, border-color, color
- Bootstrap states: .active, [aria-current]
- Scenario: apply tabs pill active pop to section navigation and tab state in a Bootstrap 5 tabs pattern
- Best for: section navigation and tab state
- Avoid for: rapidly auto-rotating content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/tabs/tabs-pill-active-pop.html`

## nav-link-hover-underline

- Category: tabs/nav
- Class: `bsx-nav-link-hover-underline`
- Level: core
- Bootstrap component: navbar
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform, text-decoration-color
- Bootstrap states: none
- Scenario: apply nav link hover underline to section navigation and tab state in a Bootstrap 5 navbar pattern
- Best for: section navigation and tab state
- Avoid for: rapidly auto-rotating content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/navbar/nav-link-hover-underline.html`

## nav-sidebar-active-marker

- Category: tabs/nav
- Class: `bsx-nav-sidebar-active-marker`
- Level: core
- Bootstrap component: sidebar
- Kind: selection
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform, box-shadow, background-color, border-color, color
- Bootstrap states: none
- Scenario: apply nav sidebar active marker to section navigation and tab state in a Bootstrap 5 sidebar pattern
- Best for: section navigation and tab state
- Avoid for: rapidly auto-rotating content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/sidebar/nav-sidebar-active-marker.html`

## accordion-icon-rotate

- Category: accordion/collapse
- Class: `bsx-accordion-icon-rotate`
- Level: core
- Bootstrap component: accordion
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: rotate
- CSS properties: opacity, transform
- Bootstrap states: .collapse.show, [aria-expanded]
- Scenario: apply accordion icon rotate to disclosure controls in a Bootstrap 5 accordion pattern
- Best for: disclosure controls
- Avoid for: content that must remain continuously visible
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/accordion/accordion-icon-rotate.html`

## accordion-icon-plus-minus

- Category: accordion/collapse
- Class: `bsx-accordion-icon-plus-minus`
- Level: core
- Bootstrap component: accordion
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: rotate
- CSS properties: opacity, transform
- Bootstrap states: .collapse.show, [aria-expanded]
- Scenario: apply accordion icon plus minus to disclosure controls in a Bootstrap 5 accordion pattern
- Best for: disclosure controls
- Avoid for: content that must remain continuously visible
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/accordion/accordion-icon-plus-minus.html`

## accordion-body-fade

- Category: accordion/collapse
- Class: `bsx-accordion-body-fade`
- Level: core
- Bootstrap component: accordion
- Kind: exit
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: .collapse.show, [aria-expanded]
- Scenario: apply accordion body fade to disclosure controls in a Bootstrap 5 accordion pattern
- Best for: disclosure controls
- Avoid for: content that must remain continuously visible
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/core/accordion/accordion-body-fade.html`

## collapse-soft

- Category: accordion/collapse
- Class: `bsx-collapse-soft`
- Level: core
- Bootstrap component: accordion
- Kind: exit
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: transform, opacity
- Bootstrap states: .collapse.show, [aria-expanded]
- Scenario: apply collapse soft to disclosure controls in a Bootstrap 5 accordion pattern
- Best for: disclosure controls
- Avoid for: content that must remain continuously visible
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/accordion/collapse-soft.html`

## collapse-height-smooth

- Category: accordion/collapse
- Class: `bsx-collapse-height-smooth`
- Level: core
- Bootstrap component: accordion
- Kind: exit
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: transform
- Bootstrap states: .collapse.show, [aria-expanded]
- Scenario: apply collapse height smooth to disclosure controls in a Bootstrap 5 accordion pattern
- Best for: disclosure controls
- Avoid for: content that must remain continuously visible
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/accordion/collapse-height-smooth.html`

## navbar-link-hover-line

- Category: navbar/sidebar
- Class: `bsx-navbar-link-hover-line`
- Level: core
- Bootstrap component: navbar
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply navbar link hover line to application navigation in a Bootstrap 5 navbar pattern
- Best for: application navigation
- Avoid for: small inline controls
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/navbar/navbar-link-hover-line.html`

## navbar-mobile-collapse-soft

- Category: navbar/sidebar
- Class: `bsx-navbar-mobile-collapse-soft`
- Level: core
- Bootstrap component: navbar
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: transform, opacity
- Bootstrap states: none
- Scenario: apply navbar mobile collapse soft to application navigation in a Bootstrap 5 navbar pattern
- Best for: application navigation
- Avoid for: small inline controls
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/navbar/navbar-mobile-collapse-soft.html`

## navbar-toggler-morph

- Category: navbar/sidebar
- Class: `bsx-navbar-toggler-morph`
- Level: core
- Bootstrap component: navbar
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: rotate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply navbar toggler morph to application navigation in a Bootstrap 5 navbar pattern
- Best for: application navigation
- Avoid for: small inline controls
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/navbar/navbar-toggler-morph.html`

## sidebar-slide-in

- Category: navbar/sidebar
- Class: `bsx-sidebar-slide-in`
- Level: core
- Bootstrap component: sidebar
- Kind: feedback
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply sidebar slide in to application navigation in a Bootstrap 5 sidebar pattern
- Best for: application navigation
- Avoid for: small inline controls
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/sidebar/sidebar-slide-in.html`

## sidebar-item-active-marker

- Category: navbar/sidebar
- Class: `bsx-sidebar-item-active-marker`
- Level: core
- Bootstrap component: sidebar
- Kind: selection
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform, box-shadow, background-color, border-color, color
- Bootstrap states: none
- Scenario: apply sidebar item active marker to application navigation in a Bootstrap 5 sidebar pattern
- Best for: application navigation
- Avoid for: small inline controls
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/sidebar/sidebar-item-active-marker.html`

## badge-pop

- Category: badge/counter
- Class: `bsx-badge-pop`
- Level: core
- Bootstrap component: badge
- Kind: entry
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply badge pop to status and metric updates in a Bootstrap 5 badge pattern
- Best for: status and metric updates
- Avoid for: long text content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/badge/badge-pop.html`

## badge-notification-ping

- Category: badge/counter
- Class: `bsx-badge-notification-ping`
- Level: core
- Bootstrap component: badge
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply badge notification ping to status and metric updates in a Bootstrap 5 badge pattern
- Best for: status and metric updates
- Avoid for: long text content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/badge/badge-notification-ping.html`

## badge-status-pulse

- Category: badge/counter
- Class: `bsx-badge-status-pulse`
- Level: core
- Bootstrap component: badge
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform, background-color, border-color, color
- Bootstrap states: none
- Scenario: apply badge status pulse to status and metric updates in a Bootstrap 5 badge pattern
- Best for: status and metric updates
- Avoid for: long text content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/badge/badge-status-pulse.html`

## counter-bump

- Category: badge/counter
- Class: `bsx-counter-bump`
- Level: core
- Bootstrap component: counter
- Kind: data-change
- Density: dense-admin
- Risk: requires-js
- Requires JS: yes
- Requires markup change: true
- Runtime behavior: counter update
- Runtime action: counter
- Motion: scale
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply counter bump to status and metric updates in a Bootstrap 5 counter pattern
- Best for: status and metric updates
- Avoid for: long text content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/counter/counter-bump.html`

## metric-card-update

- Category: badge/counter
- Class: `bsx-metric-card-update`
- Level: core
- Bootstrap component: counter
- Kind: feedback
- Density: dense-admin
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: counter update
- Runtime action: counter
- Motion: color + opacity
- CSS properties: opacity, transform
- Bootstrap states: none
- Scenario: apply metric card update to status and metric updates in a Bootstrap 5 counter pattern
- Best for: status and metric updates
- Avoid for: long text content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/counter/metric-card-update.html`

## table-row-hover

- Category: table/list
- Class: `bsx-table-row-hover`
- Level: core
- Bootstrap component: table
- Kind: feedback
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: opacity, transform
- Bootstrap states: none
- Scenario: apply table row hover to row state and collection changes in a Bootstrap 5 table pattern
- Best for: row state and collection changes
- Avoid for: large simultaneous batches
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/table/table-row-hover.html`

## table-row-insert

- Category: table/list
- Class: `bsx-table-row-insert`
- Level: core
- Bootstrap component: table
- Kind: feedback
- Density: dense-admin
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: table row mutation
- Runtime action: table-row
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply table row insert to row state and collection changes in a Bootstrap 5 table pattern
- Best for: row state and collection changes
- Avoid for: large simultaneous batches
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/table/table-row-insert.html`

## table-row-remove

- Category: table/list
- Class: `bsx-table-row-remove`
- Level: core
- Bootstrap component: table
- Kind: exit
- Density: dense-admin
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: table row mutation
- Runtime action: table-row
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply table row remove to row state and collection changes in a Bootstrap 5 table pattern
- Best for: row state and collection changes
- Avoid for: large simultaneous batches
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/table/table-row-remove.html`

## table-row-update-flash

- Category: table/list
- Class: `bsx-table-row-update-flash`
- Level: core
- Bootstrap component: table
- Kind: feedback
- Density: dense-admin
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: table row mutation
- Runtime action: table-row
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: none
- Scenario: apply table row update flash to row state and collection changes in a Bootstrap 5 table pattern
- Best for: row state and collection changes
- Avoid for: large simultaneous batches
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/table/table-row-update-flash.html`

## list-item-stagger

- Category: table/list
- Class: `bsx-list-item-stagger`
- Level: core
- Bootstrap component: list
- Kind: feedback
- Density: dense-admin
- Risk: visual-diff
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply list item stagger to row state and collection changes in a Bootstrap 5 list pattern
- Best for: row state and collection changes
- Avoid for: large simultaneous batches
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/list/list-item-stagger.html`

## list-group-active-marker

- Category: table/list
- Class: `bsx-list-group-active-marker`
- Level: core
- Bootstrap component: list
- Kind: selection
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform, box-shadow, background-color, border-color, color
- Bootstrap states: none
- Scenario: apply list group active marker to row state and collection changes in a Bootstrap 5 list pattern
- Best for: row state and collection changes
- Avoid for: large simultaneous batches
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/list/list-group-active-marker.html`

## skeleton-shimmer

- Category: skeleton/loading
- Class: `bsx-skeleton-shimmer`
- Level: core
- Bootstrap component: skeleton
- Kind: loading
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: [aria-busy], .bsx-is-loading
- Scenario: apply skeleton shimmer to short loading states in a Bootstrap 5 skeleton pattern
- Best for: short loading states
- Avoid for: unknown or very long waits without status
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/skeleton/skeleton-shimmer.html`

## skeleton-pulse

- Category: skeleton/loading
- Class: `bsx-skeleton-pulse`
- Level: core
- Bootstrap component: skeleton
- Kind: loading
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: scale + opacity
- CSS properties: opacity, transform
- Bootstrap states: [aria-busy], .bsx-is-loading
- Scenario: apply skeleton pulse to short loading states in a Bootstrap 5 skeleton pattern
- Best for: short loading states
- Avoid for: unknown or very long waits without status
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/skeleton/skeleton-pulse.html`

## skeleton-card

- Category: skeleton/loading
- Class: `bsx-skeleton-card`
- Level: core
- Bootstrap component: skeleton
- Kind: loading
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: [aria-busy], .bsx-is-loading
- Scenario: apply skeleton card to short loading states in a Bootstrap 5 skeleton pattern
- Best for: short loading states
- Avoid for: unknown or very long waits without status
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/skeleton/skeleton-card.html`

## skeleton-table

- Category: skeleton/loading
- Class: `bsx-skeleton-table`
- Level: core
- Bootstrap component: skeleton
- Kind: loading
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: [aria-busy], .bsx-is-loading
- Scenario: apply skeleton table to short loading states in a Bootstrap 5 skeleton pattern
- Best for: short loading states
- Avoid for: unknown or very long waits without status
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/skeleton/skeleton-table.html`

## loader-dots

- Category: skeleton/loading
- Class: `bsx-loader-dots`
- Level: core
- Bootstrap component: loading state
- Kind: loading
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: opacity, transform
- Bootstrap states: none
- Scenario: apply loader dots to short loading states in a Bootstrap 5 loading pattern
- Best for: short loading states
- Avoid for: unknown or very long waits without status
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/core/loading/loader-dots.html`

## page-loading-fade

- Category: skeleton/loading
- Class: `bsx-page-loading-fade`
- Level: core
- Bootstrap component: loading state
- Kind: loading
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: [aria-busy], .bsx-is-loading
- Scenario: apply page loading fade to short loading states in a Bootstrap 5 loading pattern
- Best for: short loading states
- Avoid for: unknown or very long waits without status
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/core/loading/page-loading-fade.html`

## modal-scale-sm

- Category: modal
- Class: `bsx-modal-scale-sm`
- Level: extended
- Bootstrap component: modal
- Kind: feedback
- Density: marketing
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform
- Bootstrap states: .show
- Scenario: apply modal scale sm to dialogs and confirmations in a Bootstrap 5 modal pattern
- Best for: dialogs and confirmations
- Avoid for: dense repeated workflows
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/modal/modal-scale-sm.html`

## modal-scale-lg

- Category: modal
- Class: `bsx-modal-scale-lg`
- Level: extended
- Bootstrap component: modal
- Kind: feedback
- Density: marketing
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform
- Bootstrap states: .show
- Scenario: apply modal scale lg to dialogs and confirmations in a Bootstrap 5 modal pattern
- Best for: dialogs and confirmations
- Avoid for: dense repeated workflows
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/modal/modal-scale-lg.html`

## modal-slide-down

- Category: modal
- Class: `bsx-modal-slide-down`
- Level: extended
- Bootstrap component: modal
- Kind: feedback
- Density: marketing
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: .show
- Scenario: apply modal slide down to dialogs and confirmations in a Bootstrap 5 modal pattern
- Best for: dialogs and confirmations
- Avoid for: dense repeated workflows
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/modal/modal-slide-down.html`

## modal-slide-left

- Category: modal
- Class: `bsx-modal-slide-left`
- Level: extended
- Bootstrap component: modal
- Kind: feedback
- Density: marketing
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: .show
- Scenario: apply modal slide left to dialogs and confirmations in a Bootstrap 5 modal pattern
- Best for: dialogs and confirmations
- Avoid for: dense repeated workflows
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/modal/modal-slide-left.html`

## modal-slide-right

- Category: modal
- Class: `bsx-modal-slide-right`
- Level: extended
- Bootstrap component: modal
- Kind: feedback
- Density: marketing
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: .show
- Scenario: apply modal slide right to dialogs and confirmations in a Bootstrap 5 modal pattern
- Best for: dialogs and confirmations
- Avoid for: dense repeated workflows
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/modal/modal-slide-right.html`

## modal-fade-soft

- Category: modal
- Class: `bsx-modal-fade-soft`
- Level: extended
- Bootstrap component: modal
- Kind: exit
- Density: marketing
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: .show
- Scenario: apply modal fade soft to dialogs and confirmations in a Bootstrap 5 modal pattern
- Best for: dialogs and confirmations
- Avoid for: dense repeated workflows
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/modal/modal-fade-soft.html`

## modal-zoom-blur

- Category: modal
- Class: `bsx-modal-zoom-blur`
- Level: extended
- Bootstrap component: modal
- Kind: feedback
- Density: marketing
- Risk: medium
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale + opacity
- CSS properties: opacity, transform, filter
- Bootstrap states: .show
- Scenario: apply modal zoom blur to dialogs and confirmations in a Bootstrap 5 modal pattern
- Best for: dialogs and confirmations
- Avoid for: dense repeated workflows
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/modal/modal-zoom-blur.html`

## modal-fullscreen-soft

- Category: modal
- Class: `bsx-modal-fullscreen-soft`
- Level: extended
- Bootstrap component: modal
- Kind: feedback
- Density: marketing
- Risk: visual-diff
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: .show
- Scenario: apply modal fullscreen soft to dialogs and confirmations in a Bootstrap 5 modal pattern
- Best for: dialogs and confirmations
- Avoid for: dense repeated workflows
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/modal/modal-fullscreen-soft.html`

## modal-stack-pop

- Category: modal
- Class: `bsx-modal-stack-pop`
- Level: extended
- Bootstrap component: modal
- Kind: entry
- Density: marketing
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform
- Bootstrap states: .show
- Scenario: apply modal stack pop to dialogs and confirmations in a Bootstrap 5 modal pattern
- Best for: dialogs and confirmations
- Avoid for: dense repeated workflows
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/modal/modal-stack-pop.html`

## modal-content-stagger

- Category: modal
- Class: `bsx-modal-content-stagger`
- Level: extended
- Bootstrap component: modal
- Kind: feedback
- Density: marketing
- Risk: visual-diff
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: .show
- Scenario: apply modal content stagger to dialogs and confirmations in a Bootstrap 5 modal pattern
- Best for: dialogs and confirmations
- Avoid for: dense repeated workflows
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/modal/modal-content-stagger.html`

## dropdown-slide-up

- Category: dropdown
- Class: `bsx-dropdown-slide-up`
- Level: extended
- Bootstrap component: dropdown
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: .dropdown-menu.show
- Scenario: apply dropdown slide up to menus with clear visual hierarchy in a Bootstrap 5 dropdown pattern
- Best for: menus with clear visual hierarchy
- Avoid for: menus requiring instant state changes
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/dropdown/dropdown-slide-up.html`

## dropdown-fade

- Category: dropdown
- Class: `bsx-dropdown-fade`
- Level: extended
- Bootstrap component: dropdown
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: .dropdown-menu.show
- Scenario: apply dropdown fade to menus with clear visual hierarchy in a Bootstrap 5 dropdown pattern
- Best for: menus with clear visual hierarchy
- Avoid for: menus requiring instant state changes
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/dropdown/dropdown-fade.html`

## dropdown-origin-top

- Category: dropdown
- Class: `bsx-dropdown-origin-top`
- Level: extended
- Bootstrap component: dropdown
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: opacity, transform
- Bootstrap states: .dropdown-menu.show
- Scenario: apply dropdown origin top to menus with clear visual hierarchy in a Bootstrap 5 dropdown pattern
- Best for: menus with clear visual hierarchy
- Avoid for: menus requiring instant state changes
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/dropdown/dropdown-origin-top.html`

## dropdown-origin-bottom

- Category: dropdown
- Class: `bsx-dropdown-origin-bottom`
- Level: extended
- Bootstrap component: dropdown
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: opacity, transform
- Bootstrap states: .dropdown-menu.show
- Scenario: apply dropdown origin bottom to menus with clear visual hierarchy in a Bootstrap 5 dropdown pattern
- Best for: menus with clear visual hierarchy
- Avoid for: menus requiring instant state changes
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/dropdown/dropdown-origin-bottom.html`

## dropdown-blur

- Category: dropdown
- Class: `bsx-dropdown-blur`
- Level: extended
- Bootstrap component: dropdown
- Kind: navigation
- Density: normal-ui
- Risk: medium
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity, filter
- Bootstrap states: .dropdown-menu.show
- Scenario: apply dropdown blur to menus with clear visual hierarchy in a Bootstrap 5 dropdown pattern
- Best for: menus with clear visual hierarchy
- Avoid for: menus requiring instant state changes
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/dropdown/dropdown-blur.html`

## dropdown-item-hover-bg

- Category: dropdown
- Class: `bsx-dropdown-item-hover-bg`
- Level: extended
- Bootstrap component: dropdown
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: opacity, transform
- Bootstrap states: .dropdown-menu.show
- Scenario: apply dropdown item hover bg to menus with clear visual hierarchy in a Bootstrap 5 dropdown pattern
- Best for: menus with clear visual hierarchy
- Avoid for: menus requiring instant state changes
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/dropdown/dropdown-item-hover-bg.html`

## dropdown-item-active-pop

- Category: dropdown
- Class: `bsx-dropdown-item-active-pop`
- Level: extended
- Bootstrap component: dropdown
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform, box-shadow, background-color, border-color, color
- Bootstrap states: .dropdown-menu.show
- Scenario: apply dropdown item active pop to menus with clear visual hierarchy in a Bootstrap 5 dropdown pattern
- Best for: menus with clear visual hierarchy
- Avoid for: menus requiring instant state changes
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/dropdown/dropdown-item-active-pop.html`

## dropdown-user-menu

- Category: dropdown
- Class: `bsx-dropdown-user-menu`
- Level: extended
- Bootstrap component: dropdown
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: opacity, transform
- Bootstrap states: .dropdown-menu.show
- Scenario: apply dropdown user menu to menus with clear visual hierarchy in a Bootstrap 5 dropdown pattern
- Best for: menus with clear visual hierarchy
- Avoid for: menus requiring instant state changes
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/dropdown/dropdown-user-menu.html`

## offcanvas-slide-fast

- Category: offcanvas
- Class: `bsx-offcanvas-slide-fast`
- Level: extended
- Bootstrap component: offcanvas
- Kind: navigation
- Density: marketing
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: .show
- Scenario: apply offcanvas slide fast to navigation and mobile panels in a Bootstrap 5 offcanvas pattern
- Best for: navigation and mobile panels
- Avoid for: permanent desktop navigation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/offcanvas/offcanvas-slide-fast.html`

## offcanvas-slide-slow

- Category: offcanvas
- Class: `bsx-offcanvas-slide-slow`
- Level: extended
- Bootstrap component: offcanvas
- Kind: navigation
- Density: marketing
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: .show
- Scenario: apply offcanvas slide slow to navigation and mobile panels in a Bootstrap 5 offcanvas pattern
- Best for: navigation and mobile panels
- Avoid for: permanent desktop navigation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/offcanvas/offcanvas-slide-slow.html`

## offcanvas-left-soft

- Category: offcanvas
- Class: `bsx-offcanvas-left-soft`
- Level: extended
- Bootstrap component: offcanvas
- Kind: navigation
- Density: marketing
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: .show
- Scenario: apply offcanvas left soft to navigation and mobile panels in a Bootstrap 5 offcanvas pattern
- Best for: navigation and mobile panels
- Avoid for: permanent desktop navigation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/offcanvas/offcanvas-left-soft.html`

## offcanvas-right-soft

- Category: offcanvas
- Class: `bsx-offcanvas-right-soft`
- Level: extended
- Bootstrap component: offcanvas
- Kind: navigation
- Density: marketing
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: .show
- Scenario: apply offcanvas right soft to navigation and mobile panels in a Bootstrap 5 offcanvas pattern
- Best for: navigation and mobile panels
- Avoid for: permanent desktop navigation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/offcanvas/offcanvas-right-soft.html`

## offcanvas-bottom-sheet

- Category: offcanvas
- Class: `bsx-offcanvas-bottom-sheet`
- Level: extended
- Bootstrap component: offcanvas
- Kind: navigation
- Density: marketing
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: .show
- Scenario: apply offcanvas bottom sheet to navigation and mobile panels in a Bootstrap 5 offcanvas pattern
- Best for: navigation and mobile panels
- Avoid for: permanent desktop navigation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/offcanvas/offcanvas-bottom-sheet.html`

## offcanvas-header-reveal

- Category: offcanvas
- Class: `bsx-offcanvas-header-reveal`
- Level: extended
- Bootstrap component: offcanvas
- Kind: navigation
- Density: marketing
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: .show
- Scenario: apply offcanvas header reveal to navigation and mobile panels in a Bootstrap 5 offcanvas pattern
- Best for: navigation and mobile panels
- Avoid for: permanent desktop navigation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/offcanvas/offcanvas-header-reveal.html`

## toast-slide-left

- Category: toast
- Class: `bsx-toast-slide-left`
- Level: extended
- Bootstrap component: toast
- Kind: feedback
- Density: normal-ui
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: toast trigger
- Runtime action: show-toast
- Motion: translate
- CSS properties: transform
- Bootstrap states: .show
- Scenario: apply toast slide left to brief asynchronous feedback in a Bootstrap 5 toast pattern
- Best for: brief asynchronous feedback
- Avoid for: critical information requiring confirmation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/toast/toast-slide-left.html`

## toast-slide-top

- Category: toast
- Class: `bsx-toast-slide-top`
- Level: extended
- Bootstrap component: toast
- Kind: feedback
- Density: normal-ui
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: toast trigger
- Runtime action: show-toast
- Motion: translate
- CSS properties: transform
- Bootstrap states: .show
- Scenario: apply toast slide top to brief asynchronous feedback in a Bootstrap 5 toast pattern
- Best for: brief asynchronous feedback
- Avoid for: critical information requiring confirmation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/toast/toast-slide-top.html`

## toast-slide-bottom

- Category: toast
- Class: `bsx-toast-slide-bottom`
- Level: extended
- Bootstrap component: toast
- Kind: feedback
- Density: normal-ui
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: toast trigger
- Runtime action: show-toast
- Motion: translate
- CSS properties: transform
- Bootstrap states: .show
- Scenario: apply toast slide bottom to brief asynchronous feedback in a Bootstrap 5 toast pattern
- Best for: brief asynchronous feedback
- Avoid for: critical information requiring confirmation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/toast/toast-slide-bottom.html`

## toast-warning-pulse

- Category: toast
- Class: `bsx-toast-warning-pulse`
- Level: extended
- Bootstrap component: toast
- Kind: state
- Density: normal-ui
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: toast trigger
- Runtime action: show-toast
- Motion: scale
- CSS properties: opacity, transform, background-color, border-color, color
- Bootstrap states: .show
- Scenario: apply toast warning pulse to brief asynchronous feedback in a Bootstrap 5 toast pattern
- Best for: brief asynchronous feedback
- Avoid for: critical information requiring confirmation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/toast/toast-warning-pulse.html`

## toast-auto-hide-bar

- Category: toast
- Class: `bsx-toast-auto-hide-bar`
- Level: extended
- Bootstrap component: toast
- Kind: feedback
- Density: normal-ui
- Risk: requires-js
- Requires JS: yes
- Requires markup change: true
- Runtime behavior: toast trigger
- Runtime action: show-toast
- Motion: color + opacity
- CSS properties: transform
- Bootstrap states: .show
- Scenario: apply toast auto hide bar to brief asynchronous feedback in a Bootstrap 5 toast pattern
- Best for: brief asynchronous feedback
- Avoid for: critical information requiring confirmation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/toast/toast-auto-hide-bar.html`

## toast-icon-bounce

- Category: toast
- Class: `bsx-toast-icon-bounce`
- Level: extended
- Bootstrap component: toast
- Kind: feedback
- Density: normal-ui
- Risk: requires-js
- Requires JS: yes
- Requires markup change: true
- Runtime behavior: toast trigger
- Runtime action: show-toast
- Motion: scale
- CSS properties: transform
- Bootstrap states: .show
- Scenario: apply toast icon bounce to brief asynchronous feedback in a Bootstrap 5 toast pattern
- Best for: brief asynchronous feedback
- Avoid for: critical information requiring confirmation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/toast/toast-icon-bounce.html`

## alert-slide-up

- Category: alert
- Class: `bsx-alert-slide-up`
- Level: extended
- Bootstrap component: alert
- Kind: entry
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply alert slide up to inline feedback and validation summaries in a Bootstrap 5 alert pattern
- Best for: inline feedback and validation summaries
- Avoid for: decorative content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/alert/alert-slide-up.html`

## alert-fade-soft

- Category: alert
- Class: `bsx-alert-fade-soft`
- Level: extended
- Bootstrap component: alert
- Kind: exit
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: none
- Scenario: apply alert fade soft to inline feedback and validation summaries in a Bootstrap 5 alert pattern
- Best for: inline feedback and validation summaries
- Avoid for: decorative content
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/alert/alert-fade-soft.html`

## alert-danger-flash

- Category: alert
- Class: `bsx-alert-danger-flash`
- Level: extended
- Bootstrap component: alert
- Kind: danger
- Density: normal-ui
- Risk: medium
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity, background-color, border-color, color
- Bootstrap states: .bsx-is-error
- Scenario: apply alert danger flash to inline feedback and validation summaries in a Bootstrap 5 alert pattern
- Best for: inline feedback and validation summaries
- Avoid for: decorative content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/alert/alert-danger-flash.html`

## alert-warning-attention

- Category: alert
- Class: `bsx-alert-warning-attention`
- Level: extended
- Bootstrap component: alert
- Kind: state
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: shake
- CSS properties: opacity, background-color, border-color, color
- Bootstrap states: none
- Scenario: apply alert warning attention to inline feedback and validation summaries in a Bootstrap 5 alert pattern
- Best for: inline feedback and validation summaries
- Avoid for: decorative content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/alert/alert-warning-attention.html`

## button-hover-slide-bg

- Category: button
- Class: `bsx-button-hover-slide-bg`
- Level: extended
- Bootstrap component: button
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply button hover slide bg to direct interaction feedback in a Bootstrap 5 button pattern
- Best for: direct interaction feedback
- Avoid for: large continuously animated areas
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/button/button-hover-slide-bg.html`

## button-success-check

- Category: button
- Class: `bsx-button-success-check`
- Level: extended
- Bootstrap component: button
- Kind: success
- Density: normal-ui
- Risk: requires-js
- Requires JS: yes
- Requires markup change: true
- Runtime behavior: button loading and success state
- Runtime action: button-state
- Motion: color + opacity
- CSS properties: opacity, background-color, border-color, color
- Bootstrap states: .bsx-is-success
- Scenario: apply button success check to direct interaction feedback in a Bootstrap 5 button pattern
- Best for: direct interaction feedback
- Avoid for: large continuously animated areas
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/button/button-success-check.html`

## button-danger-pulse

- Category: button
- Class: `bsx-button-danger-pulse`
- Level: extended
- Bootstrap component: button
- Kind: danger
- Density: normal-ui
- Risk: medium
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform, background-color, border-color, color
- Bootstrap states: .bsx-is-error
- Scenario: apply button danger pulse to direct interaction feedback in a Bootstrap 5 button pattern
- Best for: direct interaction feedback
- Avoid for: large continuously animated areas
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/button/button-danger-pulse.html`

## button-icon-bounce

- Category: button
- Class: `bsx-button-icon-bounce`
- Level: extended
- Bootstrap component: button
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply button icon bounce to direct interaction feedback in a Bootstrap 5 button pattern
- Best for: direct interaction feedback
- Avoid for: large continuously animated areas
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/button/button-icon-bounce.html`

## button-group-active-slide

- Category: button
- Class: `bsx-button-group-active-slide`
- Level: extended
- Bootstrap component: button-group
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform, box-shadow, background-color, border-color, color
- Bootstrap states: .active, [aria-current]
- Scenario: apply button group active slide to direct interaction feedback in a Bootstrap 5 button-group pattern
- Best for: direct interaction feedback
- Avoid for: large continuously animated areas
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/button-group/button-group-active-slide.html`

## button-disabled-soft

- Category: button
- Class: `bsx-button-disabled-soft`
- Level: extended
- Bootstrap component: button
- Kind: state
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity, background-color, border-color, color
- Bootstrap states: .disabled, [disabled], [aria-disabled]
- Scenario: apply button disabled soft to direct interaction feedback in a Bootstrap 5 button pattern
- Best for: direct interaction feedback
- Avoid for: large continuously animated areas
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/button/button-disabled-soft.html`

## form-focus-glow

- Category: form
- Class: `bsx-form-focus-glow`
- Level: extended
- Bootstrap component: form
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity, box-shadow, outline-color
- Bootstrap states: .is-valid, .is-invalid, :focus-within
- Scenario: apply form focus glow to focus and validation feedback in a Bootstrap 5 form pattern
- Best for: focus and validation feedback
- Avoid for: replacing native validation semantics
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/form/form-focus-glow.html`

## form-invalid-pulse

- Category: form
- Class: `bsx-form-invalid-pulse`
- Level: extended
- Bootstrap component: form
- Kind: validation
- Density: normal-ui
- Risk: medium
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform
- Bootstrap states: .is-valid, .is-invalid, :focus-within, .bsx-is-error
- Scenario: apply form invalid pulse to focus and validation feedback in a Bootstrap 5 form pattern
- Best for: focus and validation feedback
- Avoid for: replacing native validation semantics
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/form/form-invalid-pulse.html`

## form-label-float-soft

- Category: form
- Class: `bsx-form-label-float-soft`
- Level: extended
- Bootstrap component: form
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: transform, opacity
- Bootstrap states: .is-valid, .is-invalid, :focus-within
- Scenario: apply form label float soft to focus and validation feedback in a Bootstrap 5 form pattern
- Best for: focus and validation feedback
- Avoid for: replacing native validation semantics
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/form/form-label-float-soft.html`

## form-input-clear-pop

- Category: form
- Class: `bsx-form-input-clear-pop`
- Level: extended
- Bootstrap component: form
- Kind: entry
- Density: normal-ui
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: input clearing
- Runtime action: clear-input
- Motion: scale
- CSS properties: transform
- Bootstrap states: .is-valid, .is-invalid, :focus-within
- Scenario: apply form input clear pop to focus and validation feedback in a Bootstrap 5 form pattern
- Best for: focus and validation feedback
- Avoid for: replacing native validation semantics
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/form/form-input-clear-pop.html`

## form-select-open-soft

- Category: form
- Class: `bsx-form-select-open-soft`
- Level: extended
- Bootstrap component: form
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: .is-valid, .is-invalid, :focus-within
- Scenario: apply form select open soft to focus and validation feedback in a Bootstrap 5 form pattern
- Best for: focus and validation feedback
- Avoid for: replacing native validation semantics
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/form/form-select-open-soft.html`

## form-radio-pop

- Category: form
- Class: `bsx-form-radio-pop`
- Level: extended
- Bootstrap component: form
- Kind: entry
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform
- Bootstrap states: .is-valid, .is-invalid, :focus-within
- Scenario: apply form radio pop to focus and validation feedback in a Bootstrap 5 form pattern
- Best for: focus and validation feedback
- Avoid for: replacing native validation semantics
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/form/form-radio-pop.html`

## card-hover-border

- Category: card
- Class: `bsx-card-hover-border`
- Level: extended
- Bootstrap component: card
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: opacity, transform
- Bootstrap states: none
- Scenario: apply card hover border to interactive content collections in a Bootstrap 5 card pattern
- Best for: interactive content collections
- Avoid for: non-interactive dense tables
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/card/card-hover-border.html`

## card-hover-glow

- Category: card
- Class: `bsx-card-hover-glow`
- Level: extended
- Bootstrap component: card
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity, box-shadow
- Bootstrap states: none
- Scenario: apply card hover glow to interactive content collections in a Bootstrap 5 card pattern
- Best for: interactive content collections
- Avoid for: non-interactive dense tables
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/card/card-hover-glow.html`

## card-click-press

- Category: card
- Class: `bsx-card-click-press`
- Level: extended
- Bootstrap component: card
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply card click press to interactive content collections in a Bootstrap 5 card pattern
- Best for: interactive content collections
- Avoid for: non-interactive dense tables
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/card/card-click-press.html`

## card-reveal

- Category: card
- Class: `bsx-card-reveal`
- Level: extended
- Bootstrap component: card
- Kind: entry
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply card reveal to interactive content collections in a Bootstrap 5 card pattern
- Best for: interactive content collections
- Avoid for: non-interactive dense tables
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/card/card-reveal.html`

## card-footer-reveal

- Category: card
- Class: `bsx-card-footer-reveal`
- Level: extended
- Bootstrap component: card
- Kind: entry
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply card footer reveal to interactive content collections in a Bootstrap 5 card pattern
- Best for: interactive content collections
- Avoid for: non-interactive dense tables
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/card/card-footer-reveal.html`

## card-action-slide

- Category: card
- Class: `bsx-card-action-slide`
- Level: extended
- Bootstrap component: card
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply card action slide to interactive content collections in a Bootstrap 5 card pattern
- Best for: interactive content collections
- Avoid for: non-interactive dense tables
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/card/card-action-slide.html`

## tabs-slide-left

- Category: tabs/nav
- Class: `bsx-tabs-slide-left`
- Level: extended
- Bootstrap component: tabs
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: .active, [aria-current]
- Scenario: apply tabs slide left to section navigation and tab state in a Bootstrap 5 tabs pattern
- Best for: section navigation and tab state
- Avoid for: rapidly auto-rotating content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/tabs/tabs-slide-left.html`

## tabs-slide-right

- Category: tabs/nav
- Class: `bsx-tabs-slide-right`
- Level: extended
- Bootstrap component: tabs
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: .active, [aria-current]
- Scenario: apply tabs slide right to section navigation and tab state in a Bootstrap 5 tabs pattern
- Best for: section navigation and tab state
- Avoid for: rapidly auto-rotating content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/tabs/tabs-slide-right.html`

## tabs-content-reveal

- Category: tabs/nav
- Class: `bsx-tabs-content-reveal`
- Level: extended
- Bootstrap component: tabs
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: .active, [aria-current]
- Scenario: apply tabs content reveal to section navigation and tab state in a Bootstrap 5 tabs pattern
- Best for: section navigation and tab state
- Avoid for: rapidly auto-rotating content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/tabs/tabs-content-reveal.html`

## tabs-content-blur

- Category: tabs/nav
- Class: `bsx-tabs-content-blur`
- Level: extended
- Bootstrap component: tabs
- Kind: navigation
- Density: normal-ui
- Risk: medium
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity, filter
- Bootstrap states: .active, [aria-current]
- Scenario: apply tabs content blur to section navigation and tab state in a Bootstrap 5 tabs pattern
- Best for: section navigation and tab state
- Avoid for: rapidly auto-rotating content
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/tabs/tabs-content-blur.html`

## nav-link-hover-slide

- Category: tabs/nav
- Class: `bsx-nav-link-hover-slide`
- Level: extended
- Bootstrap component: navbar
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply nav link hover slide to section navigation and tab state in a Bootstrap 5 navbar pattern
- Best for: section navigation and tab state
- Avoid for: rapidly auto-rotating content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/navbar/nav-link-hover-slide.html`

## nav-sidebar-collapse-soft

- Category: tabs/nav
- Class: `bsx-nav-sidebar-collapse-soft`
- Level: extended
- Bootstrap component: sidebar
- Kind: navigation
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: transform, opacity
- Bootstrap states: none
- Scenario: apply nav sidebar collapse soft to section navigation and tab state in a Bootstrap 5 sidebar pattern
- Best for: section navigation and tab state
- Avoid for: rapidly auto-rotating content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/sidebar/nav-sidebar-collapse-soft.html`

## accordion-body-slide

- Category: accordion/collapse
- Class: `bsx-accordion-body-slide`
- Level: extended
- Bootstrap component: accordion
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: .collapse.show, [aria-expanded]
- Scenario: apply accordion body slide to disclosure controls in a Bootstrap 5 accordion pattern
- Best for: disclosure controls
- Avoid for: content that must remain continuously visible
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/accordion/accordion-body-slide.html`

## accordion-header-hover

- Category: accordion/collapse
- Class: `bsx-accordion-header-hover`
- Level: extended
- Bootstrap component: accordion
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: opacity, transform
- Bootstrap states: .collapse.show, [aria-expanded]
- Scenario: apply accordion header hover to disclosure controls in a Bootstrap 5 accordion pattern
- Best for: disclosure controls
- Avoid for: content that must remain continuously visible
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/accordion/accordion-header-hover.html`

## accordion-active-glow

- Category: accordion/collapse
- Class: `bsx-accordion-active-glow`
- Level: extended
- Bootstrap component: accordion
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity, box-shadow, background-color, border-color, color
- Bootstrap states: .collapse.show, [aria-expanded]
- Scenario: apply accordion active glow to disclosure controls in a Bootstrap 5 accordion pattern
- Best for: disclosure controls
- Avoid for: content that must remain continuously visible
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/accordion/accordion-active-glow.html`

## collapse-fade

- Category: accordion/collapse
- Class: `bsx-collapse-fade`
- Level: extended
- Bootstrap component: accordion
- Kind: exit
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: transform, opacity
- Bootstrap states: .collapse.show, [aria-expanded]
- Scenario: apply collapse fade to disclosure controls in a Bootstrap 5 accordion pattern
- Best for: disclosure controls
- Avoid for: content that must remain continuously visible
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/accordion/collapse-fade.html`

## collapse-card-reveal

- Category: accordion/collapse
- Class: `bsx-collapse-card-reveal`
- Level: extended
- Bootstrap component: accordion
- Kind: entry
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: .collapse.show, [aria-expanded]
- Scenario: apply collapse card reveal to disclosure controls in a Bootstrap 5 accordion pattern
- Best for: disclosure controls
- Avoid for: content that must remain continuously visible
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/accordion/collapse-card-reveal.html`

## navbar-brand-pop

- Category: navbar/sidebar
- Class: `bsx-navbar-brand-pop`
- Level: extended
- Bootstrap component: navbar
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply navbar brand pop to application navigation in a Bootstrap 5 navbar pattern
- Best for: application navigation
- Avoid for: small inline controls
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/navbar/navbar-brand-pop.html`

## navbar-link-hover-bg

- Category: navbar/sidebar
- Class: `bsx-navbar-link-hover-bg`
- Level: extended
- Bootstrap component: navbar
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply navbar link hover bg to application navigation in a Bootstrap 5 navbar pattern
- Best for: application navigation
- Avoid for: small inline controls
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/navbar/navbar-link-hover-bg.html`

## navbar-toggler-spin

- Category: navbar/sidebar
- Class: `bsx-navbar-toggler-spin`
- Level: extended
- Bootstrap component: navbar
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: rotate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply navbar toggler spin to application navigation in a Bootstrap 5 navbar pattern
- Best for: application navigation
- Avoid for: small inline controls
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/navbar/navbar-toggler-spin.html`

## sidebar-item-hover-slide

- Category: navbar/sidebar
- Class: `bsx-sidebar-item-hover-slide`
- Level: extended
- Bootstrap component: sidebar
- Kind: feedback
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply sidebar item hover slide to application navigation in a Bootstrap 5 sidebar pattern
- Best for: application navigation
- Avoid for: small inline controls
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/sidebar/sidebar-item-hover-slide.html`

## sidebar-submenu-reveal

- Category: navbar/sidebar
- Class: `bsx-sidebar-submenu-reveal`
- Level: extended
- Bootstrap component: sidebar
- Kind: navigation
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply sidebar submenu reveal to application navigation in a Bootstrap 5 sidebar pattern
- Best for: application navigation
- Avoid for: small inline controls
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/sidebar/sidebar-submenu-reveal.html`

## sidebar-mini-expand

- Category: navbar/sidebar
- Class: `bsx-sidebar-mini-expand`
- Level: extended
- Bootstrap component: sidebar
- Kind: feedback
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: transform, clip-path
- Bootstrap states: none
- Scenario: apply sidebar mini expand to application navigation in a Bootstrap 5 sidebar pattern
- Best for: application navigation
- Avoid for: small inline controls
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/sidebar/sidebar-mini-expand.html`

## sidebar-overlay-blur

- Category: navbar/sidebar
- Class: `bsx-sidebar-overlay-blur`
- Level: extended
- Bootstrap component: sidebar
- Kind: loading
- Density: dense-admin
- Risk: medium
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: transform, opacity, filter
- Bootstrap states: [aria-busy], .bsx-is-loading
- Scenario: apply sidebar overlay blur to application navigation in a Bootstrap 5 sidebar pattern
- Best for: application navigation
- Avoid for: small inline controls
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/sidebar/sidebar-overlay-blur.html`

## badge-pulse

- Category: badge/counter
- Class: `bsx-badge-pulse`
- Level: extended
- Bootstrap component: badge
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply badge pulse to status and metric updates in a Bootstrap 5 badge pattern
- Best for: status and metric updates
- Avoid for: long text content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/badge/badge-pulse.html`

## badge-count-bump

- Category: badge/counter
- Class: `bsx-badge-count-bump`
- Level: extended
- Bootstrap component: badge
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply badge count bump to status and metric updates in a Bootstrap 5 badge pattern
- Best for: status and metric updates
- Avoid for: long text content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/badge/badge-count-bump.html`

## badge-status-dot

- Category: badge/counter
- Class: `bsx-badge-status-dot`
- Level: extended
- Bootstrap component: badge
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: background-color, border-color, color
- Bootstrap states: none
- Scenario: apply badge status dot to status and metric updates in a Bootstrap 5 badge pattern
- Best for: status and metric updates
- Avoid for: long text content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/badge/badge-status-dot.html`

## counter-change-up

- Category: badge/counter
- Class: `bsx-counter-change-up`
- Level: extended
- Bootstrap component: counter
- Kind: data-change
- Density: dense-admin
- Risk: requires-js
- Requires JS: yes
- Requires markup change: true
- Runtime behavior: counter update
- Runtime action: counter
- Motion: color + opacity
- CSS properties: opacity, transform
- Bootstrap states: none
- Scenario: apply counter change up to status and metric updates in a Bootstrap 5 counter pattern
- Best for: status and metric updates
- Avoid for: long text content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/counter/counter-change-up.html`

## counter-change-down

- Category: badge/counter
- Class: `bsx-counter-change-down`
- Level: extended
- Bootstrap component: counter
- Kind: data-change
- Density: dense-admin
- Risk: requires-js
- Requires JS: yes
- Requires markup change: true
- Runtime behavior: counter update
- Runtime action: counter
- Motion: color + opacity
- CSS properties: opacity, transform
- Bootstrap states: none
- Scenario: apply counter change down to status and metric updates in a Bootstrap 5 counter pattern
- Best for: status and metric updates
- Avoid for: long text content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/counter/counter-change-down.html`

## price-change-flash

- Category: badge/counter
- Class: `bsx-price-change-flash`
- Level: extended
- Bootstrap component: counter
- Kind: feedback
- Density: dense-admin
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: counter update
- Runtime action: counter
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: none
- Scenario: apply price change flash to status and metric updates in a Bootstrap 5 counter pattern
- Best for: status and metric updates
- Avoid for: long text content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/counter/price-change-flash.html`

## table-row-selected

- Category: table/list
- Class: `bsx-table-row-selected`
- Level: extended
- Bootstrap component: table
- Kind: selection
- Density: dense-admin
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: table row selection
- Runtime action: table-row
- Motion: color + opacity
- CSS properties: box-shadow
- Bootstrap states: .bsx-is-selected
- Scenario: apply table row selected to row state and collection changes in a Bootstrap 5 table pattern
- Best for: row state and collection changes
- Avoid for: large simultaneous batches
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/table/table-row-selected.html`

## table-sort-icon-rotate

- Category: table/list
- Class: `bsx-table-sort-icon-rotate`
- Level: extended
- Bootstrap component: table
- Kind: data-change
- Density: dense-admin
- Risk: requires-js
- Requires JS: yes
- Requires markup change: true
- Runtime behavior: table sort state
- Runtime action: sort
- Motion: rotate
- CSS properties: opacity, transform
- Bootstrap states: none
- Scenario: apply table sort icon rotate to row state and collection changes in a Bootstrap 5 table pattern
- Best for: row state and collection changes
- Avoid for: large simultaneous batches
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/table/table-sort-icon-rotate.html`

## table-filter-reveal

- Category: table/list
- Class: `bsx-table-filter-reveal`
- Level: extended
- Bootstrap component: table
- Kind: entry
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply table filter reveal to row state and collection changes in a Bootstrap 5 table pattern
- Best for: row state and collection changes
- Avoid for: large simultaneous batches
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/table/table-filter-reveal.html`

## list-item-reveal

- Category: table/list
- Class: `bsx-list-item-reveal`
- Level: extended
- Bootstrap component: list
- Kind: entry
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply list item reveal to row state and collection changes in a Bootstrap 5 list pattern
- Best for: row state and collection changes
- Avoid for: large simultaneous batches
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/list/list-item-reveal.html`

## list-item-remove

- Category: table/list
- Class: `bsx-list-item-remove`
- Level: extended
- Bootstrap component: list
- Kind: exit
- Density: dense-admin
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: list item removal
- Runtime action: list-item
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply list item remove to row state and collection changes in a Bootstrap 5 list pattern
- Best for: row state and collection changes
- Avoid for: large simultaneous batches
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/list/list-item-remove.html`

## list-group-hover-slide

- Category: table/list
- Class: `bsx-list-group-hover-slide`
- Level: extended
- Bootstrap component: list
- Kind: feedback
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply list group hover slide to row state and collection changes in a Bootstrap 5 list pattern
- Best for: row state and collection changes
- Avoid for: large simultaneous batches
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/list/list-group-hover-slide.html`

## skeleton-wave

- Category: skeleton/loading
- Class: `bsx-skeleton-wave`
- Level: extended
- Bootstrap component: skeleton
- Kind: loading
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: [aria-busy], .bsx-is-loading
- Scenario: apply skeleton wave to short loading states in a Bootstrap 5 skeleton pattern
- Best for: short loading states
- Avoid for: unknown or very long waits without status
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/skeleton/skeleton-wave.html`

## skeleton-avatar

- Category: skeleton/loading
- Class: `bsx-skeleton-avatar`
- Level: extended
- Bootstrap component: skeleton
- Kind: loading
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: [aria-busy], .bsx-is-loading
- Scenario: apply skeleton avatar to short loading states in a Bootstrap 5 skeleton pattern
- Best for: short loading states
- Avoid for: unknown or very long waits without status
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/skeleton/skeleton-avatar.html`

## skeleton-button

- Category: skeleton/loading
- Class: `bsx-skeleton-button`
- Level: extended
- Bootstrap component: skeleton
- Kind: loading
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: [aria-busy], .bsx-is-loading
- Scenario: apply skeleton button to short loading states in a Bootstrap 5 skeleton pattern
- Best for: short loading states
- Avoid for: unknown or very long waits without status
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/skeleton/skeleton-button.html`

## spinner-fade

- Category: skeleton/loading
- Class: `bsx-spinner-fade`
- Level: extended
- Bootstrap component: loading state
- Kind: loading
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: opacity + rotate
- CSS properties: opacity
- Bootstrap states: [aria-busy], .bsx-is-loading
- Scenario: apply spinner fade to short loading states in a Bootstrap 5 loading pattern
- Best for: short loading states
- Avoid for: unknown or very long waits without status
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/loading/spinner-fade.html`

## spinner-scale

- Category: skeleton/loading
- Class: `bsx-spinner-scale`
- Level: extended
- Bootstrap component: loading state
- Kind: loading
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: scale + rotate
- CSS properties: transform
- Bootstrap states: [aria-busy], .bsx-is-loading
- Scenario: apply spinner scale to short loading states in a Bootstrap 5 loading pattern
- Best for: short loading states
- Avoid for: unknown or very long waits without status
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/loading/spinner-scale.html`

## loader-bar

- Category: skeleton/loading
- Class: `bsx-loader-bar`
- Level: extended
- Bootstrap component: loading state
- Kind: loading
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply loader bar to short loading states in a Bootstrap 5 loading pattern
- Best for: short loading states
- Avoid for: unknown or very long waits without status
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/loading/loader-bar.html`

## image-hover-zoom

- Category: image/media
- Class: `bsx-image-hover-zoom`
- Level: extended
- Bootstrap component: image
- Kind: feedback
- Density: marketing
- Risk: visual-diff
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply image hover zoom to media previews and galleries in a Bootstrap 5 image pattern
- Best for: media previews and galleries
- Avoid for: essential images that must remain static
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/image/image-hover-zoom.html`

## image-hover-fade

- Category: image/media
- Class: `bsx-image-hover-fade`
- Level: extended
- Bootstrap component: image
- Kind: exit
- Density: marketing
- Risk: visual-diff
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: none
- Scenario: apply image hover fade to media previews and galleries in a Bootstrap 5 image pattern
- Best for: media previews and galleries
- Avoid for: essential images that must remain static
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/image/image-hover-fade.html`

## image-hover-overlay

- Category: image/media
- Class: `bsx-image-hover-overlay`
- Level: extended
- Bootstrap component: image
- Kind: loading
- Density: marketing
- Risk: medium
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: transform
- Bootstrap states: [aria-busy], .bsx-is-loading
- Scenario: apply image hover overlay to media previews and galleries in a Bootstrap 5 image pattern
- Best for: media previews and galleries
- Avoid for: essential images that must remain static
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/image/image-hover-overlay.html`

## image-hover-caption-slide

- Category: image/media
- Class: `bsx-image-hover-caption-slide`
- Level: extended
- Bootstrap component: image
- Kind: feedback
- Density: marketing
- Risk: visual-diff
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply image hover caption slide to media previews and galleries in a Bootstrap 5 image pattern
- Best for: media previews and galleries
- Avoid for: essential images that must remain static
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/image/image-hover-caption-slide.html`

## image-lazy-reveal

- Category: image/media
- Class: `bsx-image-lazy-reveal`
- Level: extended
- Bootstrap component: image
- Kind: entry
- Density: marketing
- Risk: visual-diff
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply image lazy reveal to media previews and galleries in a Bootstrap 5 image pattern
- Best for: media previews and galleries
- Avoid for: essential images that must remain static
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/image/image-lazy-reveal.html`

## avatar-pop

- Category: image/media
- Class: `bsx-avatar-pop`
- Level: extended
- Bootstrap component: image
- Kind: entry
- Density: marketing
- Risk: visual-diff
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply avatar pop to media previews and galleries in a Bootstrap 5 image pattern
- Best for: media previews and galleries
- Avoid for: essential images that must remain static
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/image/avatar-pop.html`

## avatar-status-pulse

- Category: image/media
- Class: `bsx-avatar-status-pulse`
- Level: extended
- Bootstrap component: image
- Kind: feedback
- Density: marketing
- Risk: visual-diff
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform, background-color, border-color, color
- Bootstrap states: none
- Scenario: apply avatar status pulse to media previews and galleries in a Bootstrap 5 image pattern
- Best for: media previews and galleries
- Avoid for: essential images that must remain static
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/image/avatar-status-pulse.html`

## gallery-item-reveal

- Category: image/media
- Class: `bsx-gallery-item-reveal`
- Level: extended
- Bootstrap component: image
- Kind: entry
- Density: marketing
- Risk: visual-diff
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply gallery item reveal to media previews and galleries in a Bootstrap 5 image pattern
- Best for: media previews and galleries
- Avoid for: essential images that must remain static
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/image/gallery-item-reveal.html`

## carousel-caption-slide

- Category: image/media
- Class: `bsx-carousel-caption-slide`
- Level: extended
- Bootstrap component: media
- Kind: feedback
- Density: marketing
- Risk: visual-diff
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply carousel caption slide to media previews and galleries in a Bootstrap 5 media pattern
- Best for: media previews and galleries
- Avoid for: essential images that must remain static
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/media/carousel-caption-slide.html`

## carousel-control-hover

- Category: image/media
- Class: `bsx-carousel-control-hover`
- Level: extended
- Bootstrap component: media
- Kind: feedback
- Density: marketing
- Risk: visual-diff
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: opacity, transform
- Bootstrap states: none
- Scenario: apply carousel control hover to media previews and galleries in a Bootstrap 5 media pattern
- Best for: media previews and galleries
- Avoid for: essential images that must remain static
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/media/carousel-control-hover.html`

## tooltip-fade-soft

- Category: tooltip/popover
- Class: `bsx-tooltip-fade-soft`
- Level: extended
- Bootstrap component: tooltip
- Kind: exit
- Density: marketing
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: none
- Scenario: apply tooltip fade soft to contextual supporting information in a Bootstrap 5 tooltip pattern
- Best for: contextual supporting information
- Avoid for: primary task content
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/tooltip/tooltip-fade-soft.html`

## tooltip-slide-up

- Category: tooltip/popover
- Class: `bsx-tooltip-slide-up`
- Level: extended
- Bootstrap component: tooltip
- Kind: entry
- Density: marketing
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply tooltip slide up to contextual supporting information in a Bootstrap 5 tooltip pattern
- Best for: contextual supporting information
- Avoid for: primary task content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/tooltip/tooltip-slide-up.html`

## tooltip-slide-down

- Category: tooltip/popover
- Class: `bsx-tooltip-slide-down`
- Level: extended
- Bootstrap component: tooltip
- Kind: feedback
- Density: marketing
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply tooltip slide down to contextual supporting information in a Bootstrap 5 tooltip pattern
- Best for: contextual supporting information
- Avoid for: primary task content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/tooltip/tooltip-slide-down.html`

## tooltip-scale

- Category: tooltip/popover
- Class: `bsx-tooltip-scale`
- Level: extended
- Bootstrap component: tooltip
- Kind: feedback
- Density: marketing
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply tooltip scale to contextual supporting information in a Bootstrap 5 tooltip pattern
- Best for: contextual supporting information
- Avoid for: primary task content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/tooltip/tooltip-scale.html`

## tooltip-pop

- Category: tooltip/popover
- Class: `bsx-tooltip-pop`
- Level: extended
- Bootstrap component: tooltip
- Kind: entry
- Density: marketing
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply tooltip pop to contextual supporting information in a Bootstrap 5 tooltip pattern
- Best for: contextual supporting information
- Avoid for: primary task content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/tooltip/tooltip-pop.html`

## popover-soft

- Category: tooltip/popover
- Class: `bsx-popover-soft`
- Level: extended
- Bootstrap component: popover
- Kind: entry
- Density: marketing
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale + opacity
- CSS properties: transform, opacity
- Bootstrap states: none
- Scenario: apply popover soft to contextual supporting information in a Bootstrap 5 popover pattern
- Best for: contextual supporting information
- Avoid for: primary task content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/popover/popover-soft.html`

## popover-slide

- Category: tooltip/popover
- Class: `bsx-popover-slide`
- Level: extended
- Bootstrap component: popover
- Kind: entry
- Density: marketing
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate + scale
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply popover slide to contextual supporting information in a Bootstrap 5 popover pattern
- Best for: contextual supporting information
- Avoid for: primary task content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/popover/popover-slide.html`

## popover-blur

- Category: tooltip/popover
- Class: `bsx-popover-blur`
- Level: extended
- Bootstrap component: popover
- Kind: entry
- Density: marketing
- Risk: medium
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale + opacity
- CSS properties: transform, opacity, filter
- Bootstrap states: none
- Scenario: apply popover blur to contextual supporting information in a Bootstrap 5 popover pattern
- Best for: contextual supporting information
- Avoid for: primary task content
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/popover/popover-blur.html`

## popover-content-stagger

- Category: tooltip/popover
- Class: `bsx-popover-content-stagger`
- Level: extended
- Bootstrap component: popover
- Kind: entry
- Density: marketing
- Risk: visual-diff
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: translate + scale
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply popover content stagger to contextual supporting information in a Bootstrap 5 popover pattern
- Best for: contextual supporting information
- Avoid for: primary task content
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/popover/popover-content-stagger.html`

## popover-dismiss-fade

- Category: tooltip/popover
- Class: `bsx-popover-dismiss-fade`
- Level: extended
- Bootstrap component: popover
- Kind: entry
- Density: marketing
- Risk: medium
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale + opacity
- CSS properties: transform, opacity
- Bootstrap states: none
- Scenario: apply popover dismiss fade to contextual supporting information in a Bootstrap 5 popover pattern
- Best for: contextual supporting information
- Avoid for: primary task content
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/popover/popover-dismiss-fade.html`

## progress-fill-soft

- Category: progress/stepper
- Class: `bsx-progress-fill-soft`
- Level: extended
- Bootstrap component: progress
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: translate + opacity
- CSS properties: transform, opacity
- Bootstrap states: none
- Scenario: apply progress fill soft to progress and multi-step flows in a Bootstrap 5 progress pattern
- Best for: progress and multi-step flows
- Avoid for: indeterminate tasks without a status model
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/progress/progress-fill-soft.html`

## progress-striped-motion

- Category: progress/stepper
- Class: `bsx-progress-striped-motion`
- Level: extended
- Bootstrap component: progress
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: opacity, transform
- Bootstrap states: none
- Scenario: apply progress striped motion to progress and multi-step flows in a Bootstrap 5 progress pattern
- Best for: progress and multi-step flows
- Avoid for: indeterminate tasks without a status model
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/progress/progress-striped-motion.html`

## progress-success-pop

- Category: progress/stepper
- Class: `bsx-progress-success-pop`
- Level: extended
- Bootstrap component: progress
- Kind: success
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform, opacity, background-color, border-color, color
- Bootstrap states: .bsx-is-success
- Scenario: apply progress success pop to progress and multi-step flows in a Bootstrap 5 progress pattern
- Best for: progress and multi-step flows
- Avoid for: indeterminate tasks without a status model
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/progress/progress-success-pop.html`

## progress-danger-pulse

- Category: progress/stepper
- Class: `bsx-progress-danger-pulse`
- Level: extended
- Bootstrap component: progress
- Kind: danger
- Density: normal-ui
- Risk: medium
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform, background-color, border-color, color
- Bootstrap states: .bsx-is-error
- Scenario: apply progress danger pulse to progress and multi-step flows in a Bootstrap 5 progress pattern
- Best for: progress and multi-step flows
- Avoid for: indeterminate tasks without a status model
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/progress/progress-danger-pulse.html`

## stepper-active-pop

- Category: progress/stepper
- Class: `bsx-stepper-active-pop`
- Level: extended
- Bootstrap component: stepper
- Kind: entry
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform, box-shadow, background-color, border-color, color
- Bootstrap states: none
- Scenario: apply stepper active pop to progress and multi-step flows in a Bootstrap 5 stepper pattern
- Best for: progress and multi-step flows
- Avoid for: indeterminate tasks without a status model
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/stepper/stepper-active-pop.html`

## stepper-complete-check

- Category: progress/stepper
- Class: `bsx-stepper-complete-check`
- Level: extended
- Bootstrap component: stepper
- Kind: success
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: opacity, transform
- Bootstrap states: .bsx-is-success
- Scenario: apply stepper complete check to progress and multi-step flows in a Bootstrap 5 stepper pattern
- Best for: progress and multi-step flows
- Avoid for: indeterminate tasks without a status model
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/stepper/stepper-complete-check.html`

## stepper-line-fill

- Category: progress/stepper
- Class: `bsx-stepper-line-fill`
- Level: extended
- Bootstrap component: stepper
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply stepper line fill to progress and multi-step flows in a Bootstrap 5 stepper pattern
- Best for: progress and multi-step flows
- Avoid for: indeterminate tasks without a status model
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/stepper/stepper-line-fill.html`

## wizard-page-slide

- Category: progress/stepper
- Class: `bsx-wizard-page-slide`
- Level: extended
- Bootstrap component: stepper
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply wizard page slide to progress and multi-step flows in a Bootstrap 5 stepper pattern
- Best for: progress and multi-step flows
- Avoid for: indeterminate tasks without a status model
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/stepper/wizard-page-slide.html`

## wizard-page-fade

- Category: progress/stepper
- Class: `bsx-wizard-page-fade`
- Level: extended
- Bootstrap component: stepper
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: none
- Scenario: apply wizard page fade to progress and multi-step flows in a Bootstrap 5 stepper pattern
- Best for: progress and multi-step flows
- Avoid for: indeterminate tasks without a status model
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/stepper/wizard-page-fade.html`

## page-fade-in

- Category: page/layout
- Class: `bsx-page-fade-in`
- Level: extended
- Bootstrap component: page
- Kind: entry
- Density: marketing
- Risk: visual-diff
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: none
- Scenario: apply page fade in to page and section state changes in a Bootstrap 5 page pattern
- Best for: page and section state changes
- Avoid for: continuous scroll-driven motion
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/page/page-fade-in.html`

## page-slide-up

- Category: page/layout
- Class: `bsx-page-slide-up`
- Level: extended
- Bootstrap component: page
- Kind: entry
- Density: marketing
- Risk: visual-diff
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply page slide up to page and section state changes in a Bootstrap 5 page pattern
- Best for: page and section state changes
- Avoid for: continuous scroll-driven motion
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/page/page-slide-up.html`

## page-section-reveal

- Category: page/layout
- Class: `bsx-page-section-reveal`
- Level: extended
- Bootstrap component: page
- Kind: entry
- Density: marketing
- Risk: visual-diff
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply page section reveal to page and section state changes in a Bootstrap 5 page pattern
- Best for: page and section state changes
- Avoid for: continuous scroll-driven motion
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/page/page-section-reveal.html`

## page-section-stagger

- Category: page/layout
- Class: `bsx-page-section-stagger`
- Level: extended
- Bootstrap component: page
- Kind: feedback
- Density: marketing
- Risk: visual-diff
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply page section stagger to page and section state changes in a Bootstrap 5 page pattern
- Best for: page and section state changes
- Avoid for: continuous scroll-driven motion
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/page/page-section-stagger.html`

## page-empty-state-pop

- Category: page/layout
- Class: `bsx-page-empty-state-pop`
- Level: extended
- Bootstrap component: page
- Kind: state
- Density: marketing
- Risk: visual-diff
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform, opacity
- Bootstrap states: none
- Scenario: apply page empty state pop to page and section state changes in a Bootstrap 5 page pattern
- Best for: page and section state changes
- Avoid for: continuous scroll-driven motion
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/page/page-empty-state-pop.html`

## page-error-shake

- Category: page/layout
- Class: `bsx-page-error-shake`
- Level: extended
- Bootstrap component: page
- Kind: state
- Density: marketing
- Risk: medium
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: shake
- CSS properties: opacity, background-color, border-color, color
- Bootstrap states: .bsx-is-error
- Scenario: apply page error shake to page and section state changes in a Bootstrap 5 page pattern
- Best for: page and section state changes
- Avoid for: continuous scroll-driven motion
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/page/page-error-shake.html`

## page-success-check

- Category: page/layout
- Class: `bsx-page-success-check`
- Level: extended
- Bootstrap component: page
- Kind: success
- Density: marketing
- Risk: visual-diff
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: opacity, background-color, border-color, color
- Bootstrap states: .bsx-is-success
- Scenario: apply page success check to page and section state changes in a Bootstrap 5 page pattern
- Best for: page and section state changes
- Avoid for: continuous scroll-driven motion
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/page/page-success-check.html`

## content-fade-swap

- Category: page/layout
- Class: `bsx-content-fade-swap`
- Level: extended
- Bootstrap component: page
- Kind: exit
- Density: marketing
- Risk: visual-diff
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: none
- Scenario: apply content fade swap to page and section state changes in a Bootstrap 5 page pattern
- Best for: page and section state changes
- Avoid for: continuous scroll-driven motion
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/page/content-fade-swap.html`

## content-blur-swap

- Category: page/layout
- Class: `bsx-content-blur-swap`
- Level: extended
- Bootstrap component: page
- Kind: feedback
- Density: marketing
- Risk: medium
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity, filter
- Bootstrap states: none
- Scenario: apply content blur swap to page and section state changes in a Bootstrap 5 page pattern
- Best for: page and section state changes
- Avoid for: continuous scroll-driven motion
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/page/content-blur-swap.html`

## scroll-reveal-lite

- Category: page/layout
- Class: `bsx-scroll-reveal-lite`
- Level: extended
- Bootstrap component: page
- Kind: entry
- Density: marketing
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: intersection observer
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply scroll reveal lite to page and section state changes in a Bootstrap 5 page pattern
- Best for: page and section state changes
- Avoid for: continuous scroll-driven motion
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/page/scroll-reveal-lite.html`

## breadcrumb-current-marker

- Category: breadcrumb
- Class: `bsx-breadcrumb-current-marker`
- Level: extended
- Bootstrap component: breadcrumb
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform, opacity
- Bootstrap states: .active, [aria-current], .bsx-is-success
- Scenario: apply breadcrumb current marker to admin location and hierarchy changes in a Bootstrap 5 breadcrumb pattern
- Best for: admin location and hierarchy changes
- Avoid for: purely decorative page titles
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/breadcrumb/breadcrumb-current-marker.html`

## breadcrumb-parent-hover

- Category: breadcrumb
- Class: `bsx-breadcrumb-parent-hover`
- Level: extended
- Bootstrap component: breadcrumb
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: opacity
- Bootstrap states: .active, [aria-current], .bsx-is-success
- Scenario: apply breadcrumb parent hover to admin location and hierarchy changes in a Bootstrap 5 breadcrumb pattern
- Best for: admin location and hierarchy changes
- Avoid for: purely decorative page titles
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/breadcrumb/breadcrumb-parent-hover.html`

## breadcrumb-path-update

- Category: breadcrumb
- Class: `bsx-breadcrumb-path-update`
- Level: extended
- Bootstrap component: breadcrumb
- Kind: data-change
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: opacity
- Bootstrap states: .active, [aria-current], .bsx-is-success
- Scenario: apply breadcrumb path update to admin location and hierarchy changes in a Bootstrap 5 breadcrumb pattern
- Best for: admin location and hierarchy changes
- Avoid for: purely decorative page titles
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/breadcrumb/breadcrumb-path-update.html`

## breadcrumb-step-complete

- Category: breadcrumb
- Class: `bsx-breadcrumb-step-complete`
- Level: extended
- Bootstrap component: breadcrumb
- Kind: success
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: opacity
- Bootstrap states: .active, [aria-current], .bsx-is-success
- Scenario: apply breadcrumb step complete to admin location and hierarchy changes in a Bootstrap 5 breadcrumb pattern
- Best for: admin location and hierarchy changes
- Avoid for: purely decorative page titles
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/breadcrumb/breadcrumb-step-complete.html`

## breadcrumb-overflow-menu

- Category: breadcrumb
- Class: `bsx-breadcrumb-overflow-menu`
- Level: extended
- Bootstrap component: breadcrumb
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: opacity
- Bootstrap states: .active, [aria-current], .bsx-is-success
- Scenario: apply breadcrumb overflow menu to admin location and hierarchy changes in a Bootstrap 5 breadcrumb pattern
- Best for: admin location and hierarchy changes
- Avoid for: purely decorative page titles
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/breadcrumb/breadcrumb-overflow-menu.html`

## breadcrumb-context-return

- Category: breadcrumb
- Class: `bsx-breadcrumb-context-return`
- Level: extended
- Bootstrap component: breadcrumb
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: transform, opacity
- Bootstrap states: .active, [aria-current], .bsx-is-success
- Scenario: apply breadcrumb context return to admin location and hierarchy changes in a Bootstrap 5 breadcrumb pattern
- Best for: admin location and hierarchy changes
- Avoid for: purely decorative page titles
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/breadcrumb/breadcrumb-context-return.html`

## pagination-item-press

- Category: pagination
- Class: `bsx-pagination-item-press`
- Level: extended
- Bootstrap component: pagination
- Kind: navigation
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform
- Bootstrap states: .active, [aria-current]
- Scenario: provide tactile feedback when a page item is pressed
- Best for: paged tables and search results
- Avoid for: infinite scroll without page state
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/pagination/pagination-item-press.html`

## pagination-active-slide

- Category: pagination
- Class: `bsx-pagination-active-slide`
- Level: extended
- Bootstrap component: pagination
- Kind: navigation
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform, box-shadow, background-color, border-color, color
- Bootstrap states: .active, [aria-current]
- Scenario: show the active page in a paged admin list
- Best for: paged tables and search results
- Avoid for: infinite scroll without page state
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/pagination/pagination-active-slide.html`

## pagination-loading-fade

- Category: pagination
- Class: `bsx-pagination-loading-fade`
- Level: extended
- Bootstrap component: pagination
- Kind: loading
- Density: dense-admin
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: pagination loading state
- Runtime action: pagination-loading
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: .active, [aria-current], [aria-busy], .bsx-is-loading
- Scenario: soften pagination while the next page is loading
- Best for: paged tables and search results
- Avoid for: infinite scroll without page state
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/pagination/pagination-loading-fade.html`

## pagination-disabled-soft

- Category: pagination
- Class: `bsx-pagination-disabled-soft`
- Level: extended
- Bootstrap component: pagination
- Kind: navigation
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity, background-color, border-color, color
- Bootstrap states: .active, [aria-current], .disabled, [disabled], [aria-disabled]
- Scenario: make disabled pagination controls visibly inactive
- Best for: paged tables and search results
- Avoid for: infinite scroll without page state
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/pagination/pagination-disabled-soft.html`

## pagination-page-change

- Category: pagination
- Class: `bsx-pagination-page-change`
- Level: extended
- Bootstrap component: pagination
- Kind: data-change
- Density: dense-admin
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: pagination loading state
- Runtime action: pagination-loading
- Motion: color + opacity
- CSS properties: opacity, transform
- Bootstrap states: .active, [aria-current]
- Scenario: indicate a page change request without a full page animation
- Best for: paged tables and search results
- Avoid for: infinite scroll without page state
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/pagination/pagination-page-change.html`

## pagination-jump-focus

- Category: pagination
- Class: `bsx-pagination-jump-focus`
- Level: extended
- Bootstrap component: pagination
- Kind: navigation
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: transform, opacity, box-shadow, outline-color
- Bootstrap states: .active, [aria-current]
- Scenario: highlight a jump-to-page control on keyboard focus
- Best for: paged tables and search results
- Avoid for: infinite scroll without page state
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/pagination/pagination-jump-focus.html`

## button-group-active-marker

- Category: button-group
- Class: `bsx-button-group-active-marker`
- Level: extended
- Bootstrap component: button-group
- Kind: selection
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform, box-shadow, background-color, border-color, color
- Bootstrap states: .active, [aria-current]
- Scenario: apply button group active marker to segmented controls, density toggles, and bulk modes in a Bootstrap 5 button-group pattern
- Best for: segmented controls, density toggles, and bulk modes
- Avoid for: single primary actions
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/button-group/button-group-active-marker.html`

## button-group-segment-press

- Category: button-group
- Class: `bsx-button-group-segment-press`
- Level: extended
- Bootstrap component: button-group
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform
- Bootstrap states: .active, [aria-current]
- Scenario: apply button group segment press to segmented controls, density toggles, and bulk modes in a Bootstrap 5 button-group pattern
- Best for: segmented controls, density toggles, and bulk modes
- Avoid for: single primary actions
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/button-group/button-group-segment-press.html`

## button-group-bulk-ready

- Category: button-group
- Class: `bsx-button-group-bulk-ready`
- Level: extended
- Bootstrap component: button-group
- Kind: selection
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: opacity
- Bootstrap states: .active, [aria-current], .bsx-is-success, .bsx-is-selected
- Scenario: apply button group bulk ready to segmented controls, density toggles, and bulk modes in a Bootstrap 5 button-group pattern
- Best for: segmented controls, density toggles, and bulk modes
- Avoid for: single primary actions
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/button-group/button-group-bulk-ready.html`

## button-group-toggle-sync

- Category: button-group
- Class: `bsx-button-group-toggle-sync`
- Level: extended
- Bootstrap component: button-group
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: opacity, transform
- Bootstrap states: .active, [aria-current]
- Scenario: apply button group toggle sync to segmented controls, density toggles, and bulk modes in a Bootstrap 5 button-group pattern
- Best for: segmented controls, density toggles, and bulk modes
- Avoid for: single primary actions
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/button-group/button-group-toggle-sync.html`

## button-group-density-switch

- Category: button-group
- Class: `bsx-button-group-density-switch`
- Level: extended
- Bootstrap component: button-group
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: opacity, transform
- Bootstrap states: .active, [aria-current]
- Scenario: apply button group density switch to segmented controls, density toggles, and bulk modes in a Bootstrap 5 button-group pattern
- Best for: segmented controls, density toggles, and bulk modes
- Avoid for: single primary actions
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/button-group/button-group-density-switch.html`

## button-group-filter-active

- Category: button-group
- Class: `bsx-button-group-filter-active`
- Level: extended
- Bootstrap component: button-group
- Kind: feedback
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: box-shadow, background-color, border-color, color
- Bootstrap states: .active, [aria-current]
- Scenario: apply button group filter active to segmented controls, density toggles, and bulk modes in a Bootstrap 5 button-group pattern
- Best for: segmented controls, density toggles, and bulk modes
- Avoid for: single primary actions
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/button-group/button-group-filter-active.html`

## input-group-focus-ring

- Category: input-group
- Class: `bsx-input-group-focus-ring`
- Level: extended
- Bootstrap component: input-group
- Kind: feedback
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: opacity, box-shadow, outline-color
- Bootstrap states: .is-valid, .is-invalid, :focus-within
- Scenario: show focus across a compound input group
- Best for: search, copy, validation, and compound form controls
- Avoid for: standalone long-form fields
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/input-group/input-group-focus-ring.html`

## input-group-addon-highlight

- Category: input-group
- Class: `bsx-input-group-addon-highlight`
- Level: extended
- Bootstrap component: input-group
- Kind: feedback
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: opacity, transform
- Bootstrap states: .is-valid, .is-invalid, :focus-within
- Scenario: highlight an addon when its input is active
- Best for: search, copy, validation, and compound form controls
- Avoid for: standalone long-form fields
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/input-group/input-group-addon-highlight.html`

## input-group-button-press

- Category: input-group
- Class: `bsx-input-group-button-press`
- Level: extended
- Bootstrap component: input-group
- Kind: feedback
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform
- Bootstrap states: .is-valid, .is-invalid, :focus-within
- Scenario: add press feedback to an input group action button
- Best for: search, copy, validation, and compound form controls
- Avoid for: standalone long-form fields
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/input-group/input-group-button-press.html`

## input-group-error-shake

- Category: input-group
- Class: `bsx-input-group-error-shake`
- Level: extended
- Bootstrap component: input-group
- Kind: validation
- Density: dense-admin
- Risk: medium
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: shake
- CSS properties: opacity, background-color, border-color, color
- Bootstrap states: .is-valid, .is-invalid, :focus-within, .bsx-is-error
- Scenario: sync validation feedback across a compound input group
- Best for: search, copy, validation, and compound form controls
- Avoid for: standalone long-form fields
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/input-group/input-group-error-shake.html`

## input-group-success-glow

- Category: input-group
- Class: `bsx-input-group-success-glow`
- Level: extended
- Bootstrap component: input-group
- Kind: validation
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity, box-shadow, background-color, border-color, color
- Bootstrap states: .is-valid, .is-invalid, :focus-within, .bsx-is-success
- Scenario: confirm a successful input group action
- Best for: search, copy, validation, and compound form controls
- Avoid for: standalone long-form fields
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/input-group/input-group-success-glow.html`

## input-group-copy-success

- Category: input-group
- Class: `bsx-input-group-copy-success`
- Level: extended
- Bootstrap component: input-group
- Kind: success
- Density: dense-admin
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: copy value confirmation
- Runtime action: copy-input
- Motion: color + opacity
- CSS properties: opacity, background-color, border-color, color
- Bootstrap states: .is-valid, .is-invalid, :focus-within, .bsx-is-success
- Scenario: confirm that an API key or token was copied
- Best for: search, copy, validation, and compound form controls
- Avoid for: standalone long-form fields
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/input-group/input-group-copy-success.html`

## close-button-hover-ring

- Category: close-button
- Class: `bsx-close-button-hover-ring`
- Level: extended
- Bootstrap component: close-button
- Kind: feedback
- Density: normal-ui
- Risk: medium
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: box-shadow, outline-color
- Bootstrap states: none
- Scenario: apply close button hover ring to dismiss, clear, and close affordances in a Bootstrap 5 close-button pattern
- Best for: dismiss, clear, and close affordances
- Avoid for: destructive actions without confirmation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/close-button/close-button-hover-ring.html`

## close-button-confirm-pending

- Category: close-button
- Class: `bsx-close-button-confirm-pending`
- Level: extended
- Bootstrap component: close-button
- Kind: loading
- Density: normal-ui
- Risk: medium
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: opacity
- Bootstrap states: [aria-busy], .bsx-is-loading
- Scenario: apply close button confirm pending to dismiss, clear, and close affordances in a Bootstrap 5 close-button pattern
- Best for: dismiss, clear, and close affordances
- Avoid for: destructive actions without confirmation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/close-button/close-button-confirm-pending.html`

## close-button-toast-dismiss

- Category: close-button
- Class: `bsx-close-button-toast-dismiss`
- Level: extended
- Bootstrap component: close-button
- Kind: exit
- Density: normal-ui
- Risk: medium
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: opacity, transform
- Bootstrap states: none
- Scenario: apply close button toast dismiss to dismiss, clear, and close affordances in a Bootstrap 5 close-button pattern
- Best for: dismiss, clear, and close affordances
- Avoid for: destructive actions without confirmation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/close-button/close-button-toast-dismiss.html`

## close-button-panel-dismiss

- Category: close-button
- Class: `bsx-close-button-panel-dismiss`
- Level: extended
- Bootstrap component: close-button
- Kind: navigation
- Density: normal-ui
- Risk: medium
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: transform
- Bootstrap states: none
- Scenario: apply close button panel dismiss to dismiss, clear, and close affordances in a Bootstrap 5 close-button pattern
- Best for: dismiss, clear, and close affordances
- Avoid for: destructive actions without confirmation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/close-button/close-button-panel-dismiss.html`

## close-button-clear-filter

- Category: close-button
- Class: `bsx-close-button-clear-filter`
- Level: extended
- Bootstrap component: close-button
- Kind: feedback
- Density: normal-ui
- Risk: medium
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: opacity, transform
- Bootstrap states: none
- Scenario: apply close button clear filter to dismiss, clear, and close affordances in a Bootstrap 5 close-button pattern
- Best for: dismiss, clear, and close affordances
- Avoid for: destructive actions without confirmation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/close-button/close-button-clear-filter.html`

## crud-row-created-flash

- Category: admin/crud
- Class: `bsx-crud-row-created-flash`
- Level: extended
- Bootstrap component: admin/crud
- Kind: data-change
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: .bsx-is-updated
- Scenario: highlight a newly created table row
- Best for: CRUD tables, inline edit, dirty state, save feedback, and bulk actions
- Avoid for: marketing cards
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/admin/crud/crud-row-created-flash.html`

## crud-row-updated-flash

- Category: admin/crud
- Class: `bsx-crud-row-updated-flash`
- Level: extended
- Bootstrap component: admin/crud
- Kind: data-change
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: .bsx-is-updated
- Scenario: highlight a table row after an Ajax update
- Best for: CRUD tables, inline edit, dirty state, save feedback, and bulk actions
- Avoid for: marketing cards
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/admin/crud/crud-row-updated-flash.html`

## crud-row-deleted-collapse

- Category: admin/crud
- Class: `bsx-crud-row-deleted-collapse`
- Level: extended
- Bootstrap component: admin/crud
- Kind: danger
- Density: dense-admin
- Risk: medium
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: transform
- Bootstrap states: .bsx-is-error
- Scenario: softly remove a deleted table row
- Best for: CRUD tables, inline edit, dirty state, save feedback, and bulk actions
- Avoid for: marketing cards
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/admin/crud/crud-row-deleted-collapse.html`

## crud-row-restored-pop

- Category: admin/crud
- Class: `bsx-crud-row-restored-pop`
- Level: extended
- Bootstrap component: admin/crud
- Kind: success
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform
- Bootstrap states: .bsx-is-success
- Scenario: show that a previously deleted row was restored
- Best for: CRUD tables, inline edit, dirty state, save feedback, and bulk actions
- Avoid for: marketing cards
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/admin/crud/crud-row-restored-pop.html`

## crud-save-success-bar

- Category: admin/crud
- Class: `bsx-crud-save-success-bar`
- Level: extended
- Bootstrap component: admin/crud
- Kind: success
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: transform, opacity, background-color, border-color, color
- Bootstrap states: .bsx-is-success
- Scenario: show a quiet save success bar in a module configuration screen
- Best for: CRUD tables, inline edit, dirty state, save feedback, and bulk actions
- Avoid for: marketing cards
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/admin/crud/crud-save-success-bar.html`

## crud-save-error-shake

- Category: admin/crud
- Class: `bsx-crud-save-error-shake`
- Level: extended
- Bootstrap component: admin/crud
- Kind: state
- Density: dense-admin
- Risk: medium
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: shake
- CSS properties: opacity, background-color, border-color, color
- Bootstrap states: .bsx-is-error
- Scenario: draw attention to a failed save without hiding inline errors
- Best for: CRUD tables, inline edit, dirty state, save feedback, and bulk actions
- Avoid for: marketing cards
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/admin/crud/crud-save-error-shake.html`

## crud-inline-edit-focus

- Category: admin/crud
- Class: `bsx-crud-inline-edit-focus`
- Level: extended
- Bootstrap component: admin/crud
- Kind: feedback
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform, opacity, box-shadow, outline-color
- Bootstrap states: none
- Scenario: highlight the active inline edit row
- Best for: CRUD tables, inline edit, dirty state, save feedback, and bulk actions
- Avoid for: marketing cards
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/admin/crud/crud-inline-edit-focus.html`

## crud-inline-edit-saving

- Category: admin/crud
- Class: `bsx-crud-inline-edit-saving`
- Level: extended
- Bootstrap component: admin/crud
- Kind: loading
- Density: dense-admin
- Risk: requires-js
- Requires JS: yes
- Requires markup change: true
- Runtime behavior: inline save state
- Runtime action: crud-inline-save
- Motion: translate
- CSS properties: transform, opacity
- Bootstrap states: none
- Scenario: show an inline row save in progress
- Best for: CRUD tables, inline edit, dirty state, save feedback, and bulk actions
- Avoid for: marketing cards
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/admin/crud/crud-inline-edit-saving.html`

## crud-bulk-action-bar-slide

- Category: admin/crud
- Class: `bsx-crud-bulk-action-bar-slide`
- Level: extended
- Bootstrap component: admin/crud
- Kind: selection
- Density: dense-admin
- Risk: requires-js
- Requires JS: yes
- Requires markup change: true
- Runtime behavior: bulk selection state
- Runtime action: crud-bulk-toggle
- Motion: translate
- CSS properties: transform
- Bootstrap states: .bsx-is-selected
- Scenario: reveal a bulk action bar after rows are selected
- Best for: CRUD tables, inline edit, dirty state, save feedback, and bulk actions
- Avoid for: marketing cards
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/admin/crud/crud-bulk-action-bar-slide.html`

## crud-bulk-selection-bump

- Category: admin/crud
- Class: `bsx-crud-bulk-selection-bump`
- Level: extended
- Bootstrap component: admin/crud
- Kind: selection
- Density: dense-admin
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: bulk selection state
- Runtime action: crud-bulk-toggle
- Motion: scale
- CSS properties: transform
- Bootstrap states: .bsx-is-selected
- Scenario: confirm bulk row selection count changes
- Best for: CRUD tables, inline edit, dirty state, save feedback, and bulk actions
- Avoid for: marketing cards
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/admin/crud/crud-bulk-selection-bump.html`

## crud-permission-locked-soft

- Category: admin/crud
- Class: `bsx-crud-permission-locked-soft`
- Level: extended
- Bootstrap component: admin/crud
- Kind: danger
- Density: dense-admin
- Risk: medium
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity, background-color, border-color, color
- Bootstrap states: .disabled, [disabled], [aria-disabled]
- Scenario: show that a record is locked by permissions
- Best for: CRUD tables, inline edit, dirty state, save feedback, and bulk actions
- Avoid for: marketing cards
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/admin/crud/crud-permission-locked-soft.html`

## crud-danger-zone-pulse

- Category: admin/crud
- Class: `bsx-crud-danger-zone-pulse`
- Level: extended
- Bootstrap component: admin/crud
- Kind: danger
- Density: dense-admin
- Risk: medium
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform, background-color, border-color, color
- Bootstrap states: .bsx-is-error
- Scenario: warn before a destructive admin action
- Best for: CRUD tables, inline edit, dirty state, save feedback, and bulk actions
- Avoid for: marketing cards
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/admin/crud/crud-danger-zone-pulse.html`

## filter-panel-slide

- Category: filter/search
- Class: `bsx-filter-panel-slide`
- Level: extended
- Bootstrap component: filter/search
- Kind: navigation
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: reveal an admin filter panel
- Best for: admin filters, search results, chip removal, and empty results
- Avoid for: static navigation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/filter/search/filter-panel-slide.html`

## filter-chip-pop

- Category: filter/search
- Class: `bsx-filter-chip-pop`
- Level: extended
- Bootstrap component: filter/search
- Kind: selection
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform
- Bootstrap states: none
- Scenario: confirm an applied filter chip
- Best for: admin filters, search results, chip removal, and empty results
- Avoid for: static navigation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/filter/search/filter-chip-pop.html`

## filter-chip-remove

- Category: filter/search
- Class: `bsx-filter-chip-remove`
- Level: extended
- Bootstrap component: filter/search
- Kind: selection
- Density: dense-admin
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: filter chip removal
- Runtime action: filter-chip-remove
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: remove a filter chip without shifting attention
- Best for: admin filters, search results, chip removal, and empty results
- Avoid for: static navigation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/filter/search/filter-chip-remove.html`

## filter-applied-flash

- Category: filter/search
- Class: `bsx-filter-applied-flash`
- Level: extended
- Bootstrap component: filter/search
- Kind: data-change
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: none
- Scenario: confirm that filters were applied to a product list
- Best for: admin filters, search results, chip removal, and empty results
- Avoid for: static navigation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/filter/search/filter-applied-flash.html`

## filter-reset-fade

- Category: filter/search
- Class: `bsx-filter-reset-fade`
- Level: extended
- Bootstrap component: filter/search
- Kind: data-change
- Density: dense-admin
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: filter reset state
- Runtime action: filter-reset
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: none
- Scenario: softly reset filter state
- Best for: admin filters, search results, chip removal, and empty results
- Avoid for: static navigation
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/filter/search/filter-reset-fade.html`

## search-input-focus-glow

- Category: filter/search
- Class: `bsx-search-input-focus-glow`
- Level: extended
- Bootstrap component: filter/search
- Kind: feedback
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity, box-shadow, outline-color
- Bootstrap states: none
- Scenario: show focus on a dense search input
- Best for: admin filters, search results, chip removal, and empty results
- Avoid for: static navigation
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/filter/search/search-input-focus-glow.html`

## search-results-reveal

- Category: filter/search
- Class: `bsx-search-results-reveal`
- Level: extended
- Bootstrap component: filter/search
- Kind: data-change
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: reveal refreshed search results
- Best for: admin filters, search results, chip removal, and empty results
- Avoid for: static navigation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/filter/search/search-results-reveal.html`

## search-empty-pop

- Category: filter/search
- Class: `bsx-search-empty-pop`
- Level: extended
- Bootstrap component: filter/search
- Kind: state
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform, opacity
- Bootstrap states: none
- Scenario: show an empty search result state
- Best for: admin filters, search results, chip removal, and empty results
- Avoid for: static navigation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/filter/search/search-empty-pop.html`

## search-loading-line

- Category: filter/search
- Class: `bsx-search-loading-line`
- Level: extended
- Bootstrap component: filter/search
- Kind: loading
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: translate + opacity
- CSS properties: transform, opacity
- Bootstrap states: [aria-busy], .bsx-is-loading
- Scenario: show search loading with a slim line indicator
- Best for: admin filters, search results, chip removal, and empty results
- Avoid for: static navigation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/filter/search/search-loading-line.html`

## sort-direction-flip

- Category: filter/search
- Class: `bsx-sort-direction-flip`
- Level: extended
- Bootstrap component: filter/search
- Kind: data-change
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: transform
- Bootstrap states: none
- Scenario: show a table sort direction change
- Best for: admin filters, search results, chip removal, and empty results
- Avoid for: static navigation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/filter/search/sort-direction-flip.html`

## wizard-step-enter

- Category: form-wizard
- Class: `bsx-wizard-step-enter`
- Level: extended
- Bootstrap component: form-wizard
- Kind: navigation
- Density: normal-ui
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: wizard step state
- Runtime action: wizard-step
- Motion: color + opacity
- CSS properties: transform
- Bootstrap states: .is-valid, .is-invalid, :focus-within
- Scenario: show a form wizard step entering
- Best for: multi-step forms with validation and review states
- Avoid for: single-page forms without steps
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/form-wizard/wizard-step-enter.html`

## wizard-step-exit

- Category: form-wizard
- Class: `bsx-wizard-step-exit`
- Level: extended
- Bootstrap component: form-wizard
- Kind: navigation
- Density: normal-ui
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: wizard step state
- Runtime action: wizard-step
- Motion: color + opacity
- CSS properties: transform
- Bootstrap states: .is-valid, .is-invalid, :focus-within
- Scenario: show a form wizard step leaving
- Best for: multi-step forms with validation and review states
- Avoid for: single-page forms without steps
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/form-wizard/wizard-step-exit.html`

## wizard-step-invalid-shake

- Category: form-wizard
- Class: `bsx-wizard-step-invalid-shake`
- Level: extended
- Bootstrap component: form-wizard
- Kind: validation
- Density: normal-ui
- Risk: medium
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: shake
- CSS properties: opacity, transform
- Bootstrap states: .is-valid, .is-invalid, :focus-within, .bsx-is-error
- Scenario: show an invalid wizard step
- Best for: multi-step forms with validation and review states
- Avoid for: single-page forms without steps
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/form-wizard/wizard-step-invalid-shake.html`

## wizard-step-complete-check

- Category: form-wizard
- Class: `bsx-wizard-step-complete-check`
- Level: extended
- Bootstrap component: form-wizard
- Kind: success
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: opacity, transform
- Bootstrap states: .is-valid, .is-invalid, :focus-within, .bsx-is-success
- Scenario: confirm a completed wizard step
- Best for: multi-step forms with validation and review states
- Avoid for: single-page forms without steps
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/form-wizard/wizard-step-complete-check.html`

## wizard-summary-reveal

- Category: form-wizard
- Class: `bsx-wizard-summary-reveal`
- Level: extended
- Bootstrap component: form-wizard
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: .is-valid, .is-invalid, :focus-within
- Scenario: reveal the wizard review summary
- Best for: multi-step forms with validation and review states
- Avoid for: single-page forms without steps
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/form-wizard/wizard-summary-reveal.html`

## wizard-back-soft

- Category: form-wizard
- Class: `bsx-wizard-back-soft`
- Level: extended
- Bootstrap component: form-wizard
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: .is-valid, .is-invalid, :focus-within
- Scenario: soften backward wizard navigation
- Best for: multi-step forms with validation and review states
- Avoid for: single-page forms without steps
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/form-wizard/wizard-back-soft.html`

## wizard-next-press

- Category: form-wizard
- Class: `bsx-wizard-next-press`
- Level: extended
- Bootstrap component: form-wizard
- Kind: navigation
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform
- Bootstrap states: .is-valid, .is-invalid, :focus-within
- Scenario: add press feedback to the next-step button
- Best for: multi-step forms with validation and review states
- Avoid for: single-page forms without steps
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/form-wizard/wizard-next-press.html`

## wizard-saving-overlay

- Category: form-wizard
- Class: `bsx-wizard-saving-overlay`
- Level: extended
- Bootstrap component: form-wizard
- Kind: loading
- Density: normal-ui
- Risk: requires-js
- Requires JS: yes
- Requires markup change: true
- Runtime behavior: wizard saving state
- Runtime action: wizard-step
- Motion: color + opacity
- CSS properties: transform, opacity
- Bootstrap states: .is-valid, .is-invalid, :focus-within, [aria-busy], .bsx-is-loading
- Scenario: show wizard saving without replacing form semantics
- Best for: multi-step forms with validation and review states
- Avoid for: single-page forms without steps
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/form-wizard/wizard-saving-overlay.html`

## state-empty-pop

- Category: state
- Class: `bsx-state-empty-pop`
- Level: extended
- Bootstrap component: state
- Kind: state
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform, opacity
- Bootstrap states: none
- Scenario: reveal an empty state
- Best for: empty, error, success, warning, offline, lock, and unsaved states
- Avoid for: decorative content blocks
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/state/state-empty-pop.html`

## state-empty-icon-float

- Category: state
- Class: `bsx-state-empty-icon-float`
- Level: extended
- Bootstrap component: state
- Kind: state
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: transform, opacity
- Bootstrap states: none
- Scenario: add quiet visual emphasis to an empty-state icon
- Best for: empty, error, success, warning, offline, lock, and unsaved states
- Avoid for: decorative content blocks
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/state/state-empty-icon-float.html`

## state-error-shake

- Category: state
- Class: `bsx-state-error-shake`
- Level: extended
- Bootstrap component: state
- Kind: state
- Density: normal-ui
- Risk: medium
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: shake
- CSS properties: opacity, background-color, border-color, color
- Bootstrap states: .bsx-is-error
- Scenario: call attention to an inline error state
- Best for: empty, error, success, warning, offline, lock, and unsaved states
- Avoid for: decorative content blocks
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/state/state-error-shake.html`

## state-error-retry-press

- Category: state
- Class: `bsx-state-error-retry-press`
- Level: extended
- Bootstrap component: state
- Kind: state
- Density: normal-ui
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: retry state
- Runtime action: retry-state
- Motion: scale
- CSS properties: transform, opacity, background-color, border-color, color
- Bootstrap states: .bsx-is-error
- Scenario: make an error retry action feel responsive
- Best for: empty, error, success, warning, offline, lock, and unsaved states
- Avoid for: decorative content blocks
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/state/state-error-retry-press.html`

## state-success-check

- Category: state
- Class: `bsx-state-success-check`
- Level: extended
- Bootstrap component: state
- Kind: success
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: opacity, background-color, border-color, color
- Bootstrap states: .bsx-is-success
- Scenario: confirm a successful state change without confetti
- Best for: empty, error, success, warning, offline, lock, and unsaved states
- Avoid for: decorative content blocks
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/state/state-success-check.html`

## state-warning-attention

- Category: state
- Class: `bsx-state-warning-attention`
- Level: extended
- Bootstrap component: state
- Kind: state
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: shake
- CSS properties: opacity, background-color, border-color, color
- Bootstrap states: none
- Scenario: draw restrained attention to a warning state
- Best for: empty, error, success, warning, offline, lock, and unsaved states
- Avoid for: decorative content blocks
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/state/state-warning-attention.html`

## state-offline-pulse

- Category: state
- Class: `bsx-state-offline-pulse`
- Level: extended
- Bootstrap component: state
- Kind: state
- Density: normal-ui
- Risk: medium
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: translate + scale
- CSS properties: transform, opacity
- Bootstrap states: none
- Scenario: show offline status without blocking the UI
- Best for: empty, error, success, warning, offline, lock, and unsaved states
- Avoid for: decorative content blocks
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/state/state-offline-pulse.html`

## state-reconnect-fade

- Category: state
- Class: `bsx-state-reconnect-fade`
- Level: extended
- Bootstrap component: state
- Kind: state
- Density: normal-ui
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: none
- Scenario: show a reconnect state resolving
- Best for: empty, error, success, warning, offline, lock, and unsaved states
- Avoid for: decorative content blocks
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/state/state-reconnect-fade.html`

## data-card-refresh

- Category: data-loading
- Class: `bsx-data-card-refresh`
- Level: extended
- Bootstrap component: data-loading
- Kind: loading
- Density: dense-admin
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: data refresh state
- Runtime action: data-refresh
- Motion: color + opacity
- CSS properties: opacity
- Bootstrap states: .bsx-is-updated
- Scenario: show a card refresh after Ajax data reload
- Best for: table, card, metric, filter, save, and inline loading states
- Avoid for: unknown long-running jobs without copy
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/data-loading/data-card-refresh.html`

## data-table-refresh

- Category: data-loading
- Class: `bsx-data-table-refresh`
- Level: extended
- Bootstrap component: data-loading
- Kind: loading
- Density: dense-admin
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: data refresh state
- Runtime action: data-refresh
- Motion: color + opacity
- CSS properties: opacity
- Bootstrap states: .bsx-is-updated
- Scenario: show a table refresh after Ajax data reload
- Best for: table, card, metric, filter, save, and inline loading states
- Avoid for: unknown long-running jobs without copy
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/data-loading/data-table-refresh.html`

## data-section-loading-fade

- Category: data-loading
- Class: `bsx-data-section-loading-fade`
- Level: extended
- Bootstrap component: data-loading
- Kind: loading
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: [aria-busy], .bsx-is-loading
- Scenario: fade a section while data is loading
- Best for: table, card, metric, filter, save, and inline loading states
- Avoid for: unknown long-running jobs without copy
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/data-loading/data-section-loading-fade.html`

## data-overlay-blur

- Category: data-loading
- Class: `bsx-data-overlay-blur`
- Level: extended
- Bootstrap component: data-loading
- Kind: loading
- Density: dense-admin
- Risk: medium
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: transform, opacity, filter
- Bootstrap states: [aria-busy], .bsx-is-loading
- Scenario: show a loading overlay without hiding context
- Best for: table, card, metric, filter, save, and inline loading states
- Avoid for: unknown long-running jobs without copy
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/data-loading/data-overlay-blur.html`

## data-inline-saving

- Category: data-loading
- Class: `bsx-data-inline-saving`
- Level: extended
- Bootstrap component: data-loading
- Kind: loading
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform, opacity
- Bootstrap states: none
- Scenario: show an inline saving state
- Best for: table, card, metric, filter, save, and inline loading states
- Avoid for: unknown long-running jobs without copy
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/data-loading/data-inline-saving.html`

## data-chart-loading

- Category: data-loading
- Class: `bsx-data-chart-loading`
- Level: extended
- Bootstrap component: data-loading
- Kind: loading
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: [aria-busy], .bsx-is-loading
- Scenario: show a chart placeholder while data loads
- Best for: table, card, metric, filter, save, and inline loading states
- Avoid for: unknown long-running jobs without copy
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/data-loading/data-chart-loading.html`

## data-kpi-refresh

- Category: data-loading
- Class: `bsx-data-kpi-refresh`
- Level: extended
- Bootstrap component: data-loading
- Kind: loading
- Density: dense-admin
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: data refresh state
- Runtime action: data-refresh
- Motion: color + opacity
- CSS properties: opacity
- Bootstrap states: .bsx-is-updated
- Scenario: show a KPI card refresh
- Best for: table, card, metric, filter, save, and inline loading states
- Avoid for: unknown long-running jobs without copy
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/data-loading/data-kpi-refresh.html`

## data-diff-highlight

- Category: data-loading
- Class: `bsx-data-diff-highlight`
- Level: extended
- Bootstrap component: data-loading
- Kind: data-change
- Density: dense-admin
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: data refresh state
- Runtime action: data-refresh
- Motion: color + opacity
- CSS properties: opacity, transform
- Bootstrap states: .bsx-is-updated
- Scenario: highlight changed data after a refresh
- Best for: table, card, metric, filter, save, and inline loading states
- Avoid for: unknown long-running jobs without copy
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/data-loading/data-diff-highlight.html`

## notification-item-new

- Category: notification-center
- Class: `bsx-notification-item-new`
- Level: extended
- Bootstrap component: notification-center
- Kind: data-change
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: opacity
- Bootstrap states: .bsx-is-updated
- Scenario: show a newly arrived inbox notification
- Best for: notification inbox panels and unread/read transitions
- Avoid for: critical alerts that require modal confirmation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/notification-center/notification-item-new.html`

## notification-item-read-fade

- Category: notification-center
- Class: `bsx-notification-item-read-fade`
- Level: extended
- Bootstrap component: notification-center
- Kind: data-change
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: opacity
- CSS properties: opacity
- Bootstrap states: .bsx-is-success
- Scenario: softly mark a notification as read
- Best for: notification inbox panels and unread/read transitions
- Avoid for: critical alerts that require modal confirmation
- Reduced motion: near-instant opacity or color state
- Snippet: `snippets/extended/notification-center/notification-item-read-fade.html`

## notification-item-remove

- Category: notification-center
- Class: `bsx-notification-item-remove`
- Level: extended
- Bootstrap component: notification-center
- Kind: exit
- Density: dense-admin
- Risk: requires-js
- Requires JS: yes
- Requires markup change: false
- Runtime behavior: notification removal
- Runtime action: notification-remove
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: remove a notification from an inbox list
- Best for: notification inbox panels and unread/read transitions
- Avoid for: critical alerts that require modal confirmation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/notification-center/notification-item-remove.html`

## notification-counter-bump

- Category: notification-center
- Class: `bsx-notification-counter-bump`
- Level: extended
- Bootstrap component: notification-center
- Kind: data-change
- Density: dense-admin
- Risk: requires-js
- Requires JS: yes
- Requires markup change: true
- Runtime behavior: notification counter update
- Runtime action: data-refresh
- Motion: scale
- CSS properties: transform
- Bootstrap states: none
- Scenario: update a notification counter badge
- Best for: notification inbox panels and unread/read transitions
- Avoid for: critical alerts that require modal confirmation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/notification-center/notification-counter-bump.html`

## notification-panel-slide

- Category: notification-center
- Class: `bsx-notification-panel-slide`
- Level: extended
- Bootstrap component: notification-center
- Kind: navigation
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: none
- Scenario: open a notification center panel
- Best for: notification inbox panels and unread/read transitions
- Avoid for: critical alerts that require modal confirmation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/notification-center/notification-panel-slide.html`

## notification-priority-pulse

- Category: notification-center
- Class: `bsx-notification-priority-pulse`
- Level: extended
- Bootstrap component: notification-center
- Kind: feedback
- Density: dense-admin
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform, background-color, border-color, color
- Bootstrap states: none
- Scenario: draw attention to a high-priority notification
- Best for: notification inbox panels and unread/read transitions
- Avoid for: critical alerts that require modal confirmation
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/notification-center/notification-priority-pulse.html`

## mobile-bottom-bar-active

- Category: mobile
- Class: `bsx-mobile-bottom-bar-active`
- Level: extended
- Bootstrap component: mobile
- Kind: navigation
- Density: mobile
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: transform, box-shadow, background-color, border-color, color
- Bootstrap states: .active, [aria-current]
- Scenario: show the active item in a mobile bottom bar
- Best for: mobile admin actions, sticky save bars, bottom nav, and filter sheets
- Avoid for: desktop-only dense grids
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/mobile/mobile-bottom-bar-active.html`

## mobile-tabbar-press

- Category: mobile
- Class: `bsx-mobile-tabbar-press`
- Level: extended
- Bootstrap component: mobile
- Kind: navigation
- Density: mobile
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform
- Bootstrap states: .active, [aria-current]
- Scenario: add touch feedback to a mobile tab bar
- Best for: mobile admin actions, sticky save bars, bottom nav, and filter sheets
- Avoid for: desktop-only dense grids
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/mobile/mobile-tabbar-press.html`

## mobile-fab-pop

- Category: mobile
- Class: `bsx-mobile-fab-pop`
- Level: extended
- Bootstrap component: mobile
- Kind: navigation
- Density: mobile
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: scale
- CSS properties: transform
- Bootstrap states: .active, [aria-current]
- Scenario: show a floating action button activation
- Best for: mobile admin actions, sticky save bars, bottom nav, and filter sheets
- Avoid for: desktop-only dense grids
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/mobile/mobile-fab-pop.html`

## mobile-fab-menu-stagger

- Category: mobile
- Class: `bsx-mobile-fab-menu-stagger`
- Level: extended
- Bootstrap component: mobile
- Kind: navigation
- Density: mobile
- Risk: requires-js
- Requires JS: yes
- Requires markup change: true
- Runtime behavior: mobile FAB menu toggle
- Runtime action: mobile-fab-toggle
- Motion: translate
- CSS properties: transform
- Bootstrap states: .active, [aria-current]
- Scenario: toggle a compact mobile FAB action menu
- Best for: mobile admin actions, sticky save bars, bottom nav, and filter sheets
- Avoid for: desktop-only dense grids
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/mobile/mobile-fab-menu-stagger.html`

## mobile-swipe-action-reveal

- Category: mobile
- Class: `bsx-mobile-swipe-action-reveal`
- Level: extended
- Bootstrap component: mobile
- Kind: navigation
- Density: mobile
- Risk: requires-js
- Requires JS: yes
- Requires markup change: true
- Runtime behavior: mobile swipe action state
- Runtime action: mobile-swipe-action
- Motion: translate
- CSS properties: transform
- Bootstrap states: .active, [aria-current]
- Scenario: reveal a mobile swipe action
- Best for: mobile admin actions, sticky save bars, bottom nav, and filter sheets
- Avoid for: desktop-only dense grids
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/mobile/mobile-swipe-action-reveal.html`

## mobile-sticky-save-bar

- Category: mobile
- Class: `bsx-mobile-sticky-save-bar`
- Level: extended
- Bootstrap component: mobile
- Kind: navigation
- Density: mobile
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: transform
- Bootstrap states: .active, [aria-current]
- Scenario: keep a mobile save bar perceptible
- Best for: mobile admin actions, sticky save bars, bottom nav, and filter sheets
- Avoid for: desktop-only dense grids
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/mobile/mobile-sticky-save-bar.html`

## mobile-keyboard-safe-panel

- Category: mobile
- Class: `bsx-mobile-keyboard-safe-panel`
- Level: extended
- Bootstrap component: mobile
- Kind: navigation
- Density: mobile
- Risk: safe
- Requires JS: no
- Requires markup change: false
- Runtime behavior: none
- Runtime action: none
- Motion: color + opacity
- CSS properties: transform
- Bootstrap states: .active, [aria-current]
- Scenario: keep a mobile panel usable near the keyboard
- Best for: mobile admin actions, sticky save bars, bottom nav, and filter sheets
- Avoid for: desktop-only dense grids
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/mobile/mobile-keyboard-safe-panel.html`

## mobile-filter-sheet

- Category: mobile
- Class: `bsx-mobile-filter-sheet`
- Level: extended
- Bootstrap component: mobile
- Kind: navigation
- Density: mobile
- Risk: safe
- Requires JS: no
- Requires markup change: true
- Runtime behavior: none
- Runtime action: none
- Motion: translate
- CSS properties: transform
- Bootstrap states: .active, [aria-current]
- Scenario: open a mobile filter sheet
- Best for: mobile admin actions, sticky save bars, bottom nav, and filter sheets
- Avoid for: desktop-only dense grids
- Reduced motion: opacity-only near-instant state
- Snippet: `snippets/extended/mobile/mobile-filter-sheet.html`
