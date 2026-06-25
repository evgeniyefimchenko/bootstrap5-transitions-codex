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
    "pagination-active-marker",
    "pagination-page-jump",
    "pagination-loading-page",
    "pagination-disabled-soft",
    "pagination-compact-hover",
    "pagination-count-update",
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
    "input-group-copy-confirm",
    "input-group-search-pending",
    "input-group-validation-sync",
    "input-group-password-toggle",
  ],
  "close-button": [
    "close-button-hover-ring",
    "close-button-confirm-pending",
    "close-button-toast-dismiss",
    "close-button-panel-dismiss",
    "close-button-clear-filter",
  ],
  "admin/crud": [
    "crud-row-create",
    "crud-row-save-pending",
    "crud-row-save-success",
    "crud-row-save-error",
    "crud-inline-edit-focus",
    "crud-inline-edit-dirty",
    "crud-bulk-toolbar-reveal",
    "crud-delete-confirm-row",
    "crud-permission-disabled",
  ],
  "filter/search": [
    "filter-chip-active",
    "filter-chip-remove",
    "filter-panel-reveal",
    "filter-reset-flash",
    "search-input-focus",
    "search-results-update",
    "search-no-results-state",
  ],
  "form-wizard": [
    "form-wizard-step-current",
    "form-wizard-step-complete",
    "form-wizard-step-error",
    "form-wizard-progress-sync",
    "form-wizard-section-enter",
    "form-wizard-section-exit",
    "form-wizard-review-dirty",
    "form-wizard-submit-ready",
  ],
  state: [
    "state-empty-reveal",
    "state-error-inline",
    "state-success-inline",
    "state-warning-inline",
    "state-unsaved-changes",
    "state-offline-banner",
    "state-locked-record",
  ],
  "data-loading": [
    "data-loading-table-overlay",
    "data-loading-card-overlay",
    "data-loading-row-skeleton",
    "data-loading-filter-pending",
    "data-loading-save-button",
    "data-loading-metric-refresh",
    "data-loading-inline-spinner",
  ],
  "notification-center": [
    "notification-center-panel",
    "notification-item-unread",
    "notification-item-read",
    "notification-item-priority",
    "notification-batch-arrive",
    "notification-empty-state",
  ],
  mobile: [
    "mobile-sticky-save-bar",
    "mobile-filter-sheet",
    "mobile-bulk-action-bar",
    "mobile-inline-error",
    "mobile-bottom-nav-active",
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
  ["scroll-reveal-lite", "intersection observer"],
]);

function getRuntimeBehavior(name) {
  if (name.startsWith("toast-")) {
    return "toast trigger";
  }
  return runtimeBehaviors.get(name) ?? null;
}

const directoryRules = [
  [/^breadcrumb-/, "breadcrumb"],
  [/^pagination-/, "pagination"],
  [/^button-group-/, "button-group"],
  [/^input-group-/, "input-group"],
  [/^close-button-/, "close-button"],
  [/^crud-/, "admin/crud"],
  [/^(filter|search)-/, "filter/search"],
  [/^form-wizard-/, "form-wizard"],
  [/^state-/, "state"],
  [/^data-loading-/, "data-loading"],
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
  "admin/crud": "high",
  "filter/search": "high",
  "data-loading": "high",
  pagination: "high",
  breadcrumb: "medium",
  "button-group": "medium",
  "input-group": "medium",
  "close-button": "medium",
  "form-wizard": "medium",
  state: "medium",
  "notification-center": "medium",
  mobile: "medium",
};

function getKind(category, directory) {
  if (["admin/crud", "filter/search", "data-loading", "notification-center"].includes(category)) {
    return "workflow-state";
  }
  if (["breadcrumb", "pagination", "button-group", "mobile"].includes(category)) {
    return "navigation-state";
  }
  if (["form", "input-group", "form-wizard"].includes(category)) {
    return "form-state";
  }
  if (["state", "alert", "toast", "badge/counter"].includes(category)) {
    return "feedback-state";
  }
  if (directory === "loading" || category === "skeleton/loading") {
    return "loading-state";
  }
  return "component-state";
}

function getDensity(category, directory) {
  if (densityByCategory[category]) {
    return densityByCategory[category];
  }
  if (["table", "list", "sidebar", "counter"].includes(directory)) {
    return "high";
  }
  if (["modal", "offcanvas", "popover", "tooltip", "page"].includes(directory)) {
    return "low";
  }
  return "medium";
}

function getRisk(name, category) {
  if (/delete|danger|error|invalid|offline|locked|permission|unsaved|dismiss|close/.test(name)) {
    return "medium";
  }
  if (["admin/crud", "form-wizard", "state"].includes(category)) {
    return "medium";
  }
  return "low";
}

function getCssProperties(name) {
  const properties = [];
  if (/slide|lift|reveal|stagger|sheet|marker|underline|line|fill|insert|remove|jump|return|bar|panel|overlay/.test(name)) {
    properties.push("transform");
  }
  if (/fade|soft|blur|glow|flash|loading|skeleton|shimmer|wave|pending|empty|read|unread|disabled|locked|dirty|focus|success|error|warning|offline/.test(name)) {
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
  if (/blur/.test(name)) {
    properties.push("filter");
  }
  if (/mini-expand/.test(name)) {
    properties.push("clip-path");
  }
  if (/striped-motion/.test(name)) {
    properties.push("background-position");
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
  if (/success|complete|read/.test(name)) {
    states.add(".bsx-is-success");
  }
  if (/error|invalid|delete/.test(name)) {
    states.add(".bsx-is-error");
  }
  if (/dirty|unsaved/.test(name)) {
    states.add(".bsx-is-dirty");
  }
  if (/selected|bulk/.test(name)) {
    states.add(".bsx-is-selected");
  }
  if (states.size === 0) {
    states.add(":hover");
    states.add(":focus-visible");
  }
  return [...states];
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
      return {
        name,
        level,
        category,
        directory,
        className: `bsx-${name}`,
        component: directory === "loading" ? "loading state" : directory,
        requiresJs: Boolean(runtimeBehavior),
        runtimeBehavior,
        motion: getMotion(name),
        kind: getKind(category, directory),
        density: getDensity(category, directory),
        risk: getRisk(name, category),
        cssProperties: getCssProperties(name),
        bootstrapStates: getBootstrapStates(name, directory),
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
