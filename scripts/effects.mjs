const coreGroups = {
  modal: [
    "modal-scale",
    "modal-slide-up",
    "modal-blur-backdrop",
    "modal-danger-confirm",
    "modal-success-confirm",
    "modal-sheet-mobile",
  ],
  dropdown: [
    "dropdown-soft",
    "dropdown-slide-down",
    "dropdown-scale",
    "dropdown-menu-stagger",
    "dropdown-item-hover-slide",
    "dropdown-mega-menu-soft",
  ],
  offcanvas: [
    "offcanvas-soft",
    "offcanvas-blur-backdrop",
    "offcanvas-mobile-sheet",
    "offcanvas-menu-stagger",
  ],
  toast: [
    "toast-slide-right",
    "toast-pop",
    "toast-stack-pop",
    "toast-success-pop",
    "toast-error-shake",
    "toast-progress-line",
  ],
  alert: [
    "alert-reveal",
    "alert-slide-down",
    "alert-shake",
    "alert-pulse-border",
    "alert-success-glow",
    "alert-dismissible-exit",
  ],
  button: [
    "button-press",
    "button-hover-lift",
    "button-hover-glow",
    "button-loading-spinner",
    "button-loading-dots",
    "button-success-pop",
    "button-icon-slide",
    "button-ripple-lite",
  ],
  form: [
    "form-focus-ring",
    "form-invalid-shake",
    "form-valid-check",
    "form-help-text-reveal",
    "form-error-text-slide",
    "form-switch-toggle-soft",
    "form-checkbox-pop",
    "form-file-drop-highlight",
  ],
  card: [
    "card-hover-lift",
    "card-hover-scale",
    "card-hover-shadow",
    "card-image-zoom",
    "card-image-fade-overlay",
    "card-stagger-list",
  ],
  "tabs/nav": [
    "tabs-fade",
    "tabs-underline-slide",
    "tabs-pill-active-pop",
    "nav-link-hover-underline",
    "nav-sidebar-active-marker",
  ],
  "accordion/collapse": [
    "accordion-icon-rotate",
    "accordion-icon-plus-minus",
    "accordion-body-fade",
    "collapse-soft",
    "collapse-height-smooth",
  ],
  "navbar/sidebar": [
    "navbar-link-hover-line",
    "navbar-mobile-collapse-soft",
    "navbar-toggler-morph",
    "sidebar-slide-in",
    "sidebar-item-active-marker",
  ],
  "badge/counter": [
    "badge-pop",
    "badge-notification-ping",
    "badge-status-pulse",
    "counter-bump",
    "metric-card-update",
  ],
  "table/list": [
    "table-row-hover",
    "table-row-insert",
    "table-row-remove",
    "table-row-update-flash",
    "list-item-stagger",
    "list-group-active-marker",
  ],
  "skeleton/loading": [
    "skeleton-shimmer",
    "skeleton-pulse",
    "skeleton-card",
    "skeleton-table",
    "loader-dots",
    "page-loading-fade",
  ],
};

const extendedGroups = {
  modal: [
    "modal-scale-sm",
    "modal-scale-lg",
    "modal-slide-down",
    "modal-slide-left",
    "modal-slide-right",
    "modal-fade-soft",
    "modal-zoom-blur",
    "modal-fullscreen-soft",
    "modal-stack-pop",
    "modal-content-stagger",
  ],
  dropdown: [
    "dropdown-slide-up",
    "dropdown-fade",
    "dropdown-origin-top",
    "dropdown-origin-bottom",
    "dropdown-blur",
    "dropdown-item-hover-bg",
    "dropdown-item-active-pop",
    "dropdown-user-menu",
  ],
  offcanvas: [
    "offcanvas-slide-fast",
    "offcanvas-slide-slow",
    "offcanvas-left-soft",
    "offcanvas-right-soft",
    "offcanvas-bottom-sheet",
    "offcanvas-header-reveal",
  ],
  toast: [
    "toast-slide-left",
    "toast-slide-top",
    "toast-slide-bottom",
    "toast-warning-pulse",
    "toast-auto-hide-bar",
    "toast-icon-bounce",
  ],
  alert: [
    "alert-slide-up",
    "alert-fade-soft",
    "alert-danger-flash",
    "alert-warning-attention",
  ],
  button: [
    "button-hover-slide-bg",
    "button-success-check",
    "button-danger-pulse",
    "button-icon-bounce",
    "button-group-active-slide",
    "button-disabled-soft",
  ],
  form: [
    "form-focus-glow",
    "form-invalid-pulse",
    "form-label-float-soft",
    "form-input-clear-pop",
    "form-select-open-soft",
    "form-radio-pop",
  ],
  card: [
    "card-hover-border",
    "card-hover-glow",
    "card-click-press",
    "card-reveal",
    "card-footer-reveal",
    "card-action-slide",
  ],
  "tabs/nav": [
    "tabs-slide-left",
    "tabs-slide-right",
    "tabs-content-reveal",
    "tabs-content-blur",
    "nav-link-hover-slide",
    "nav-sidebar-collapse-soft",
  ],
  "accordion/collapse": [
    "accordion-body-slide",
    "accordion-header-hover",
    "accordion-active-glow",
    "collapse-fade",
    "collapse-card-reveal",
  ],
  "navbar/sidebar": [
    "navbar-brand-pop",
    "navbar-link-hover-bg",
    "navbar-toggler-spin",
    "sidebar-item-hover-slide",
    "sidebar-submenu-reveal",
    "sidebar-mini-expand",
    "sidebar-overlay-blur",
  ],
  "badge/counter": [
    "badge-pulse",
    "badge-count-bump",
    "badge-status-dot",
    "counter-change-up",
    "counter-change-down",
    "price-change-flash",
  ],
  "table/list": [
    "table-row-selected",
    "table-sort-icon-rotate",
    "table-filter-reveal",
    "list-item-reveal",
    "list-item-remove",
    "list-group-hover-slide",
  ],
  "skeleton/loading": [
    "skeleton-wave",
    "skeleton-avatar",
    "skeleton-button",
    "spinner-fade",
    "spinner-scale",
    "loader-bar",
  ],
  "image/media": [
    "image-hover-zoom",
    "image-hover-fade",
    "image-hover-overlay",
    "image-hover-caption-slide",
    "image-lazy-reveal",
    "avatar-pop",
    "avatar-status-pulse",
    "gallery-item-reveal",
    "carousel-caption-slide",
    "carousel-control-hover",
  ],
  "tooltip/popover": [
    "tooltip-fade-soft",
    "tooltip-slide-up",
    "tooltip-slide-down",
    "tooltip-scale",
    "tooltip-pop",
    "popover-soft",
    "popover-slide",
    "popover-blur",
    "popover-content-stagger",
    "popover-dismiss-fade",
  ],
  "progress/stepper": [
    "progress-fill-soft",
    "progress-striped-motion",
    "progress-success-pop",
    "progress-danger-pulse",
    "stepper-active-pop",
    "stepper-complete-check",
    "stepper-line-fill",
    "wizard-page-slide",
    "wizard-page-fade",
  ],
  "page/layout": [
    "page-fade-in",
    "page-slide-up",
    "page-section-reveal",
    "page-section-stagger",
    "page-empty-state-pop",
    "page-error-shake",
    "page-success-check",
    "content-fade-swap",
    "content-blur-swap",
    "scroll-reveal-lite",
  ],
  breadcrumb: [
    "breadcrumb-current-marker",
    "breadcrumb-parent-hover",
    "breadcrumb-path-update",
    "breadcrumb-step-complete",
    "breadcrumb-overflow-menu",
    "breadcrumb-context-return",
  ],
  pagination: [
    "pagination-item-press",
    "pagination-active-slide",
    "pagination-loading-fade",
    "pagination-disabled-soft",
    "pagination-page-change",
    "pagination-jump-focus",
  ],
  "button-group": [
    "button-group-active-marker",
    "button-group-segment-press",
    "button-group-bulk-ready",
    "button-group-toggle-sync",
    "button-group-density-switch",
    "button-group-filter-active",
  ],
  "input-group": [
    "input-group-focus-ring",
    "input-group-addon-highlight",
    "input-group-button-press",
    "input-group-error-shake",
    "input-group-success-glow",
    "input-group-copy-success",
  ],
  "close-button": [
    "close-button-hover-ring",
    "close-button-confirm-pending",
    "close-button-toast-dismiss",
    "close-button-panel-dismiss",
    "close-button-clear-filter",
  ],
  "admin/crud": [
    "crud-row-created-flash",
    "crud-row-updated-flash",
    "crud-row-deleted-collapse",
    "crud-row-restored-pop",
    "crud-save-success-bar",
    "crud-save-error-shake",
    "crud-inline-edit-focus",
    "crud-inline-edit-saving",
    "crud-bulk-action-bar-slide",
    "crud-bulk-selection-bump",
    "crud-permission-locked-soft",
    "crud-danger-zone-pulse",
  ],
  "filter/search": [
    "filter-panel-slide",
    "filter-chip-pop",
    "filter-chip-remove",
    "filter-applied-flash",
    "filter-reset-fade",
    "search-input-focus-glow",
    "search-results-reveal",
    "search-empty-pop",
    "search-loading-line",
    "sort-direction-flip",
  ],
  "form-wizard": [
    "wizard-step-enter",
    "wizard-step-exit",
    "wizard-step-invalid-shake",
    "wizard-step-complete-check",
    "wizard-summary-reveal",
    "wizard-back-soft",
    "wizard-next-press",
    "wizard-saving-overlay",
  ],
  state: [
    "state-empty-pop",
    "state-empty-icon-float",
    "state-error-shake",
    "state-error-retry-press",
    "state-success-check",
    "state-warning-attention",
    "state-offline-pulse",
    "state-reconnect-fade",
  ],
  "data-loading": [
    "data-card-refresh",
    "data-table-refresh",
    "data-section-loading-fade",
    "data-overlay-blur",
    "data-inline-saving",
    "data-chart-loading",
    "data-kpi-refresh",
    "data-diff-highlight",
  ],
  "notification-center": [
    "notification-item-new",
    "notification-item-read-fade",
    "notification-item-remove",
    "notification-counter-bump",
    "notification-panel-slide",
    "notification-priority-pulse",
  ],
  mobile: [
    "mobile-bottom-bar-active",
    "mobile-tabbar-press",
    "mobile-fab-pop",
    "mobile-fab-menu-stagger",
    "mobile-swipe-action-reveal",
    "mobile-sticky-save-bar",
    "mobile-keyboard-safe-panel",
    "mobile-filter-sheet",
  ],
};

const runtimeBehaviors = new Map([
  ["alert-dismissible-exit", "delayed alert dismissal"],
  ["button-loading-spinner", "button loading and success state"],
  ["button-loading-dots", "button loading and success state"],
  ["button-success-pop", "button loading and success state"],
  ["button-success-check", "button loading and success state"],
  ["button-ripple-lite", "pointer ripple"],
  ["form-file-drop-highlight", "file drag state"],
  ["form-input-clear-pop", "input clearing"],
  ["input-group-copy-success", "copy value confirmation"],
  ["counter-bump", "counter update"],
  ["metric-card-update", "counter update"],
  ["counter-change-up", "counter update"],
  ["counter-change-down", "counter update"],
  ["price-change-flash", "counter update"],
  ["table-row-insert", "table row mutation"],
  ["table-row-remove", "table row mutation"],
  ["table-row-update-flash", "table row mutation"],
  ["table-row-selected", "table row selection"],
  ["table-sort-icon-rotate", "table sort state"],
  ["list-item-remove", "list item removal"],
  ["pagination-loading-fade", "pagination loading state"],
  ["pagination-page-change", "pagination loading state"],
  ["crud-inline-edit-saving", "inline save state"],
  ["crud-bulk-action-bar-slide", "bulk selection state"],
  ["crud-bulk-selection-bump", "bulk selection state"],
  ["filter-chip-remove", "filter chip removal"],
  ["filter-reset-fade", "filter reset state"],
  ["wizard-step-enter", "wizard step state"],
  ["wizard-step-exit", "wizard step state"],
  ["wizard-saving-overlay", "wizard saving state"],
  ["state-error-retry-press", "retry state"],
  ["data-card-refresh", "data refresh state"],
  ["data-table-refresh", "data refresh state"],
  ["data-kpi-refresh", "data refresh state"],
  ["data-diff-highlight", "data refresh state"],
  ["notification-item-remove", "notification removal"],
  ["notification-counter-bump", "notification counter update"],
  ["mobile-fab-menu-stagger", "mobile FAB menu toggle"],
  ["mobile-swipe-action-reveal", "mobile swipe action state"],
  ["scroll-reveal-lite", "intersection observer"],
]);

const runtimeActions = new Map([
  ["input-group-copy-success", "copy-input"],
  ["pagination-loading-fade", "pagination-loading"],
  ["pagination-page-change", "pagination-loading"],
  ["crud-inline-edit-saving", "crud-inline-save"],
  ["crud-bulk-action-bar-slide", "crud-bulk-toggle"],
  ["crud-bulk-selection-bump", "crud-bulk-toggle"],
  ["filter-chip-remove", "filter-chip-remove"],
  ["filter-reset-fade", "filter-reset"],
  ["wizard-step-enter", "wizard-step"],
  ["wizard-step-exit", "wizard-step"],
  ["wizard-saving-overlay", "wizard-step"],
  ["state-error-retry-press", "retry-state"],
  ["data-card-refresh", "data-refresh"],
  ["data-table-refresh", "data-refresh"],
  ["data-kpi-refresh", "data-refresh"],
  ["data-diff-highlight", "data-refresh"],
  ["notification-item-remove", "notification-remove"],
  ["notification-counter-bump", "data-refresh"],
  ["mobile-fab-menu-stagger", "mobile-fab-toggle"],
  ["mobile-swipe-action-reveal", "mobile-swipe-action"],
]);

function getRuntimeBehavior(name) {
  if (name.startsWith("toast-")) {
    return "toast trigger";
  }
  return runtimeBehaviors.get(name) ?? null;
}

function getRuntimeAction(name) {
  if (name.startsWith("toast-")) {
    return "show-toast";
  }
  if (["button-loading-spinner", "button-loading-dots", "button-success-pop", "button-success-check", "button-ripple-lite"].includes(name)) {
    return "button-state";
  }
  if (["counter-bump", "metric-card-update", "counter-change-up", "counter-change-down", "price-change-flash"].includes(name)) {
    return "counter";
  }
  if (["table-row-insert", "table-row-remove", "table-row-update-flash", "table-row-selected"].includes(name)) {
    return "table-row";
  }
  if (name === "table-sort-icon-rotate") {
    return "sort";
  }
  if (name === "list-item-remove") {
    return "list-item";
  }
  if (name === "form-input-clear-pop") {
    return "clear-input";
  }
  return runtimeActions.get(name) ?? null;
}

const directoryRules = [
  [/^breadcrumb-/, "breadcrumb"],
  [/^pagination-/, "pagination"],
  [/^button-group-/, "button-group"],
  [/^input-group-/, "input-group"],
  [/^close-button-/, "close-button"],
  [/^crud-/, "admin/crud"],
  [/^(filter|search|sort)-/, "filter/search"],
  [/^form-wizard-/, "form-wizard"],
  [/^wizard-(?:step|summary|back|next|saving)-/, "form-wizard"],
  [/^state-/, "state"],
  [/^data-loading-/, "data-loading"],
  [/^data-/, "data-loading"],
  [/^notification-/, "notification-center"],
  [/^mobile-/, "mobile"],
  [/^modal-/, "modal"],
  [/^dropdown-/, "dropdown"],
  [/^offcanvas-/, "offcanvas"],
  [/^toast-/, "toast"],
  [/^alert-/, "alert"],
  [/^button-/, "button"],
  [/^form-/, "form"],
  [/^card-/, "card"],
  [/^tabs-/, "tabs"],
  [/^nav-sidebar-/, "sidebar"],
  [/^nav-/, "navbar"],
  [/^(accordion|collapse)-/, "accordion"],
  [/^navbar-/, "navbar"],
  [/^sidebar-/, "sidebar"],
  [/^badge-/, "badge"],
  [/^(counter|metric|price)-/, "counter"],
  [/^table-/, "table"],
  [/^list-/, "list"],
  [/^skeleton-/, "skeleton"],
  [/^(loader|spinner|page-loading)-/, "loading"],
  [/^(image|avatar|gallery)-/, "image"],
  [/^carousel-/, "media"],
  [/^tooltip-/, "tooltip"],
  [/^popover-/, "popover"],
  [/^progress-/, "progress"],
  [/^(stepper|wizard)-/, "stepper"],
  [/^(page|content|scroll)-/, "page"],
];

const descriptions = {
  modal: ["dialogs and confirmations", "dense repeated workflows"],
  dropdown: ["menus with clear visual hierarchy", "menus requiring instant state changes"],
  offcanvas: ["navigation and mobile panels", "permanent desktop navigation"],
  toast: ["brief asynchronous feedback", "critical information requiring confirmation"],
  alert: ["inline feedback and validation summaries", "decorative content"],
  button: ["direct interaction feedback", "large continuously animated areas"],
  form: ["focus and validation feedback", "replacing native validation semantics"],
  card: ["interactive content collections", "non-interactive dense tables"],
  "tabs/nav": ["section navigation and tab state", "rapidly auto-rotating content"],
  "accordion/collapse": ["disclosure controls", "content that must remain continuously visible"],
  "navbar/sidebar": ["application navigation", "small inline controls"],
  "badge/counter": ["status and metric updates", "long text content"],
  "table/list": ["row state and collection changes", "large simultaneous batches"],
  "skeleton/loading": ["short loading states", "unknown or very long waits without status"],
  "image/media": ["media previews and galleries", "essential images that must remain static"],
  "tooltip/popover": ["contextual supporting information", "primary task content"],
  "progress/stepper": ["progress and multi-step flows", "indeterminate tasks without a status model"],
  "page/layout": ["page and section state changes", "continuous scroll-driven motion"],
  breadcrumb: ["admin location and hierarchy changes", "purely decorative page titles"],
  pagination: ["paged tables and search results", "infinite scroll without page state"],
  "button-group": ["segmented controls, density toggles, and bulk modes", "single primary actions"],
  "input-group": ["search, copy, validation, and compound form controls", "standalone long-form fields"],
  "close-button": ["dismiss, clear, and close affordances", "destructive actions without confirmation"],
  "admin/crud": ["CRUD tables, inline edit, dirty state, save feedback, and bulk actions", "marketing cards"],
  "filter/search": ["admin filters, search results, chip removal, and empty results", "static navigation"],
  "form-wizard": ["multi-step forms with validation and review states", "single-page forms without steps"],
  state: ["empty, error, success, warning, offline, lock, and unsaved states", "decorative content blocks"],
  "data-loading": ["table, card, metric, filter, save, and inline loading states", "unknown long-running jobs without copy"],
  "notification-center": ["notification inbox panels and unread/read transitions", "critical alerts that require modal confirmation"],
  mobile: ["mobile admin actions, sticky save bars, bottom nav, and filter sheets", "desktop-only dense grids"],
};

const densityByCategory = {
  "admin/crud": "dense-admin",
  "filter/search": "dense-admin",
  "data-loading": "dense-admin",
  "input-group": "dense-admin",
  "notification-center": "dense-admin",
  pagination: "dense-admin",
  breadcrumb: "normal-ui",
  "button-group": "normal-ui",
  "close-button": "normal-ui",
  "form-wizard": "normal-ui",
  state: "normal-ui",
  mobile: "mobile",
  "image/media": "marketing",
  "page/layout": "marketing",
};

const scenarioOverrides = {
  "pagination-item-press": "provide tactile feedback when a page item is pressed",
  "pagination-active-slide": "show the active page in a paged admin list",
  "pagination-loading-fade": "soften pagination while the next page is loading",
  "pagination-disabled-soft": "make disabled pagination controls visibly inactive",
  "pagination-page-change": "indicate a page change request without a full page animation",
  "pagination-jump-focus": "highlight a jump-to-page control on keyboard focus",
  "input-group-focus-ring": "show focus across a compound input group",
  "input-group-addon-highlight": "highlight an addon when its input is active",
  "input-group-button-press": "add press feedback to an input group action button",
  "input-group-error-shake": "sync validation feedback across a compound input group",
  "input-group-success-glow": "confirm a successful input group action",
  "input-group-copy-success": "confirm that an API key or token was copied",
  "crud-row-created-flash": "highlight a newly created table row",
  "crud-row-updated-flash": "highlight a table row after an Ajax update",
  "crud-row-deleted-collapse": "softly remove a deleted table row",
  "crud-row-restored-pop": "show that a previously deleted row was restored",
  "crud-save-success-bar": "show a quiet save success bar in a module configuration screen",
  "crud-save-error-shake": "draw attention to a failed save without hiding inline errors",
  "crud-inline-edit-focus": "highlight the active inline edit row",
  "crud-inline-edit-saving": "show an inline row save in progress",
  "crud-bulk-action-bar-slide": "reveal a bulk action bar after rows are selected",
  "crud-bulk-selection-bump": "confirm bulk row selection count changes",
  "crud-permission-locked-soft": "show that a record is locked by permissions",
  "crud-danger-zone-pulse": "warn before a destructive admin action",
  "filter-panel-slide": "reveal an admin filter panel",
  "filter-chip-pop": "confirm an applied filter chip",
  "filter-chip-remove": "remove a filter chip without shifting attention",
  "filter-applied-flash": "confirm that filters were applied to a product list",
  "filter-reset-fade": "softly reset filter state",
  "search-input-focus-glow": "show focus on a dense search input",
  "search-results-reveal": "reveal refreshed search results",
  "search-empty-pop": "show an empty search result state",
  "search-loading-line": "show search loading with a slim line indicator",
  "sort-direction-flip": "show a table sort direction change",
  "wizard-step-enter": "show a form wizard step entering",
  "wizard-step-exit": "show a form wizard step leaving",
  "wizard-step-invalid-shake": "show an invalid wizard step",
  "wizard-step-complete-check": "confirm a completed wizard step",
  "wizard-summary-reveal": "reveal the wizard review summary",
  "wizard-back-soft": "soften backward wizard navigation",
  "wizard-next-press": "add press feedback to the next-step button",
  "wizard-saving-overlay": "show wizard saving without replacing form semantics",
  "state-empty-pop": "reveal an empty state",
  "state-empty-icon-float": "add quiet visual emphasis to an empty-state icon",
  "state-error-shake": "call attention to an inline error state",
  "state-error-retry-press": "make an error retry action feel responsive",
  "state-success-check": "confirm a successful state change without confetti",
  "state-warning-attention": "draw restrained attention to a warning state",
  "state-offline-pulse": "show offline status without blocking the UI",
  "state-reconnect-fade": "show a reconnect state resolving",
  "data-card-refresh": "show a card refresh after Ajax data reload",
  "data-table-refresh": "show a table refresh after Ajax data reload",
  "data-section-loading-fade": "fade a section while data is loading",
  "data-overlay-blur": "show a loading overlay without hiding context",
  "data-inline-saving": "show an inline saving state",
  "data-chart-loading": "show a chart placeholder while data loads",
  "data-kpi-refresh": "show a KPI card refresh",
  "data-diff-highlight": "highlight changed data after a refresh",
  "notification-item-new": "show a newly arrived inbox notification",
  "notification-item-read-fade": "softly mark a notification as read",
  "notification-item-remove": "remove a notification from an inbox list",
  "notification-counter-bump": "update a notification counter badge",
  "notification-panel-slide": "open a notification center panel",
  "notification-priority-pulse": "draw attention to a high-priority notification",
  "mobile-bottom-bar-active": "show the active item in a mobile bottom bar",
  "mobile-tabbar-press": "add touch feedback to a mobile tab bar",
  "mobile-fab-pop": "show a floating action button activation",
  "mobile-fab-menu-stagger": "toggle a compact mobile FAB action menu",
  "mobile-swipe-action-reveal": "reveal a mobile swipe action",
  "mobile-sticky-save-bar": "keep a mobile save bar perceptible",
  "mobile-keyboard-safe-panel": "keep a mobile panel usable near the keyboard",
  "mobile-filter-sheet": "open a mobile filter sheet",
};

function getKind(name, category, directory) {
  if (/deleted|delete|danger|permission-locked/.test(name)) {
    return "danger";
  }
  if (/invalid|validation|error-shake|success-glow/.test(name) && ["form", "input-group", "form-wizard"].includes(directory)) {
    return "validation";
  }
  if (/loading|saving|pending|refresh|skeleton|spinner|overlay|chart|kpi|inline-saving/.test(name) || directory === "loading" || category === "skeleton/loading") {
    return "loading";
  }
  if (/success|complete|restored|copy-success|check|saved/.test(name)) {
    return "success";
  }
  if (/updated|created|diff|results|counter|read-fade|item-new|applied|reset|sort|page-change|path-update/.test(name)) {
    return "data-change";
  }
  if (/selected|selection|chip|bulk|active-marker/.test(name)) {
    return "selection";
  }
  if (/breadcrumb|pagination|tabs|nav|wizard|mobile|dropdown|offcanvas|panel|sheet|menu|page-jump|active-slide|bottom-bar|tabbar/.test(name)) {
    return "navigation";
  }
  if (/empty|error|warning|offline|reconnect|locked|disabled/.test(name) || category === "state") {
    return "state";
  }
  if (/enter|reveal|slide-up|fade-in|pop/.test(name)) {
    return "entry";
  }
  if (/exit|remove|dismiss|collapse|fade/.test(name)) {
    return "exit";
  }
  return "feedback";
}

function getDensity(category, directory) {
  if (densityByCategory[category]) {
    return densityByCategory[category];
  }
  if (["table", "list", "sidebar", "counter"].includes(directory)) {
    return "dense-admin";
  }
  if (["modal", "offcanvas", "popover", "tooltip", "page", "image", "media"].includes(directory)) {
    return "marketing";
  }
  return "normal-ui";
}

function getRisk(name, category, requiresJs) {
  if (requiresJs) {
    return "requires-js";
  }
  if (/delete|danger|error|invalid|offline|locked|permission|unsaved|dismiss|close|shake|overlay|blur/.test(name)) {
    return "medium";
  }
  if (["image/media", "page/layout"].includes(category) || /stagger|fullscreen|zoom/.test(name)) {
    return "visual-diff";
  }
  return "safe";
}

function getCssProperties(name) {
  const properties = [];
  if (/slide|lift|reveal|stagger|sheet|marker|underline|line|fill|insert|remove|jump|return|bar|panel|overlay|enter|exit|press|pop|bump|float|flip|collapse|tabbar|fab|swipe/.test(name)) {
    properties.push("transform");
  }
  if (/fade|soft|blur|glow|flash|loading|skeleton|shimmer|wave|pending|empty|read|unread|disabled|locked|dirty|focus|success|error|warning|offline|reconnect|saving|refresh|new/.test(name)) {
    properties.push("opacity");
  }
  if (/scale|pop|press|bump|zoom|bounce|pulse|ping/.test(name)) {
    properties.push("transform");
  }
  if (/shadow|glow|ring|focus|active|selected/.test(name)) {
    properties.push("box-shadow");
  }
  if (/color|status|success|error|warning|danger|active|dirty|disabled|locked|permission|unread|priority/.test(name)) {
    properties.push("background-color", "border-color", "color");
  }
  if (/focus|ring/.test(name)) {
    properties.push("outline-color");
  }
  if (/underline/.test(name)) {
    properties.push("text-decoration-color");
  }
  if (/blur/.test(name)) {
    properties.push("filter");
  }
  if (/mini-expand/.test(name)) {
    properties.push("clip-path");
  }
  if (properties.length === 0) {
    properties.push("opacity", "transform");
  }
  return [...new Set(properties)];
}

function getBootstrapStates(name, directory) {
  const states = new Set();
  if (["modal", "offcanvas", "toast"].includes(directory)) {
    states.add(".show");
  }
  if (["dropdown"].includes(directory)) {
    states.add(".dropdown-menu.show");
  }
  if (["tabs", "pagination", "breadcrumb", "button-group", "mobile"].includes(directory)) {
    states.add(".active");
    states.add("[aria-current]");
  }
  if (["accordion"].includes(directory)) {
    states.add(".collapse.show");
    states.add("[aria-expanded]");
  }
  if (["form", "input-group", "form-wizard"].includes(directory)) {
    states.add(".is-valid");
    states.add(".is-invalid");
    states.add(":focus-within");
  }
  if (/disabled|permission|locked/.test(name)) {
    states.add(".disabled");
    states.add("[disabled]");
    states.add("[aria-disabled]");
  }
  if (/loading|pending|save-button|spinner|skeleton|overlay/.test(name)) {
    states.add("[aria-busy]");
    states.add(".bsx-is-loading");
  }
  if (/success|complete|read|restored|copy-success/.test(name)) {
    states.add(".bsx-is-success");
  }
  if (/error|invalid|delete|danger/.test(name)) {
    states.add(".bsx-is-error");
  }
  if (/dirty|unsaved/.test(name)) {
    states.add(".bsx-is-dirty");
  }
  if (/selected|bulk|selection/.test(name)) {
    states.add(".bsx-is-selected");
  }
  if (/updated|refresh|diff|created|new/.test(name)) {
    states.add(".bsx-is-updated");
  }
  return [...states];
}

function getRequiresMarkupChange(name) {
  return /bar|line|marker|dot|icon|overlay|check|progress|ripple|stagger|counter|skeleton|loader|spinner|fab-menu|swipe|sheet/.test(name);
}

function getScenario(name, category, directory) {
  if (scenarioOverrides[name]) {
    return scenarioOverrides[name];
  }
  const [bestFor] = descriptions[category];
  return `apply ${name.replaceAll("-", " ")} to ${bestFor} in a Bootstrap 5 ${directory} pattern`;
}

function getDirectory(name) {
  return directoryRules.find(([pattern]) => pattern.test(name))?.[1] ?? "page";
}

function getMotion(name) {
  const motions = [];
  if (/slide|lift|reveal|stagger|sheet|marker|underline|line|fill|insert|remove/.test(name)) motions.push("translate");
  if (/scale|pop|press|bump|zoom|bounce|pulse|ping/.test(name)) motions.push("scale");
  if (/fade|soft|blur|glow|flash|loading|skeleton|shimmer|wave/.test(name)) motions.push("opacity");
  if (/rotate|morph|spin|plus-minus/.test(name)) motions.push("rotate");
  if (/shake|attention/.test(name)) motions.push("shake");
  if (motions.length === 0) motions.push("color", "opacity");
  return [...new Set(motions)].join(" + ");
}

function makeEffects(groups, level) {
  return Object.entries(groups).flatMap(([category, names]) =>
    names.map((name) => {
      const directory = getDirectory(name);
      const [bestFor, avoidFor] = descriptions[category];
      const runtimeBehavior = getRuntimeBehavior(name);
      const requiresJs = Boolean(runtimeBehavior);
      return {
        name,
        level,
        category,
        directory,
        className: `bsx-${name}`,
        component: directory === "loading" ? "loading state" : directory,
        requiresJs,
        runtimeBehavior,
        runtimeAction: getRuntimeAction(name),
        motion: getMotion(name),
        kind: getKind(name, category, directory),
        density: getDensity(category, directory),
        risk: getRisk(name, category, requiresJs),
        cssProperties: getCssProperties(name),
        bootstrapStates: getBootstrapStates(name, directory),
        requiresMarkupChange: getRequiresMarkupChange(name),
        scenario: getScenario(name, category, directory),
        bestFor,
        avoidFor,
        reducedMotion: /fade|blur|glow|color|shadow/.test(name)
          ? "near-instant opacity or color state"
          : "opacity-only near-instant state",
        snippetPath: `snippets/${level}/${directory}/${name}.html`,
      };
    }),
  );
}

export const effects = [
  ...makeEffects(coreGroups, "core"),
  ...makeEffects(extendedGroups, "extended"),
];

export const coreEffects = effects.filter((effect) => effect.level === "core");
export const extendedEffects = effects.filter((effect) => effect.level === "extended");
