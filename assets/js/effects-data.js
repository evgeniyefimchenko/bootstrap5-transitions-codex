window.bsxEffects = [
  {
    "name": "modal-scale",
    "level": "core",
    "category": "modal",
    "directory": "modal",
    "className": "bsx-modal-scale",
    "component": "modal",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "dialogs and confirmations",
    "avoidFor": "dense repeated workflows",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/modal/modal-scale.html",
    "snippet": "<button type=\"button\" class=\"btn btn-primary bsx-button-press\" data-bs-toggle=\"modal\" data-bs-target=\"#bsxModalScale\">\n  Open Modal Scale\n</button>\n\n<div class=\"modal fade bsx-modal-scale\" id=\"bsxModalScale\" tabindex=\"-1\" aria-labelledby=\"bsxModalScaleLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h2 class=\"modal-title fs-5\" id=\"bsxModalScaleLabel\">Modal Scale</h2>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body\">Bootstrap 5 modal transition.</div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\">Continue</button>\n      </div>\n    </div>\n  </div>\n</div>"
  },
  {
    "name": "modal-slide-up",
    "level": "core",
    "category": "modal",
    "directory": "modal",
    "className": "bsx-modal-slide-up",
    "component": "modal",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "dialogs and confirmations",
    "avoidFor": "dense repeated workflows",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/modal/modal-slide-up.html",
    "snippet": "<button type=\"button\" class=\"btn btn-primary bsx-button-press\" data-bs-toggle=\"modal\" data-bs-target=\"#bsxModalSlideUp\">\n  Open Modal Slide Up\n</button>\n\n<div class=\"modal fade bsx-modal-slide-up\" id=\"bsxModalSlideUp\" tabindex=\"-1\" aria-labelledby=\"bsxModalSlideUpLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h2 class=\"modal-title fs-5\" id=\"bsxModalSlideUpLabel\">Modal Slide Up</h2>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body\">Bootstrap 5 modal transition.</div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\">Continue</button>\n      </div>\n    </div>\n  </div>\n</div>"
  },
  {
    "name": "modal-blur-backdrop",
    "level": "core",
    "category": "modal",
    "directory": "modal",
    "className": "bsx-modal-blur-backdrop",
    "component": "modal",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "filter"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "dialogs and confirmations",
    "avoidFor": "dense repeated workflows",
    "reducedMotion": "near-instant opacity or color state",
    "snippetPath": "snippets/core/modal/modal-blur-backdrop.html",
    "snippet": "<button type=\"button\" class=\"btn btn-primary bsx-button-press\" data-bs-toggle=\"modal\" data-bs-target=\"#bsxModalBlurBackdrop\">\n  Open Modal Blur Backdrop\n</button>\n\n<div class=\"modal fade bsx-modal-blur-backdrop\" id=\"bsxModalBlurBackdrop\" tabindex=\"-1\" aria-labelledby=\"bsxModalBlurBackdropLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h2 class=\"modal-title fs-5\" id=\"bsxModalBlurBackdropLabel\">Modal Blur Backdrop</h2>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body\">Bootstrap 5 modal transition.</div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\">Continue</button>\n      </div>\n    </div>\n  </div>\n</div>"
  },
  {
    "name": "modal-danger-confirm",
    "level": "core",
    "category": "modal",
    "directory": "modal",
    "className": "bsx-modal-danger-confirm",
    "component": "modal",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "component-state",
    "density": "low",
    "risk": "medium",
    "cssProperties": [
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "dialogs and confirmations",
    "avoidFor": "dense repeated workflows",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/modal/modal-danger-confirm.html",
    "snippet": "<button type=\"button\" class=\"btn btn-primary bsx-button-press\" data-bs-toggle=\"modal\" data-bs-target=\"#bsxModalDangerConfirm\">\n  Open Modal Danger Confirm\n</button>\n\n<div class=\"modal fade bsx-modal-danger-confirm\" id=\"bsxModalDangerConfirm\" tabindex=\"-1\" aria-labelledby=\"bsxModalDangerConfirmLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h2 class=\"modal-title fs-5\" id=\"bsxModalDangerConfirmLabel\">Modal Danger Confirm</h2>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body\">Bootstrap 5 modal transition.</div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\">Continue</button>\n      </div>\n    </div>\n  </div>\n</div>"
  },
  {
    "name": "modal-success-confirm",
    "level": "core",
    "category": "modal",
    "directory": "modal",
    "className": "bsx-modal-success-confirm",
    "component": "modal",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ".show",
      ".bsx-is-success"
    ],
    "bestFor": "dialogs and confirmations",
    "avoidFor": "dense repeated workflows",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/modal/modal-success-confirm.html",
    "snippet": "<button type=\"button\" class=\"btn btn-primary bsx-button-press\" data-bs-toggle=\"modal\" data-bs-target=\"#bsxModalSuccessConfirm\">\n  Open Modal Success Confirm\n</button>\n\n<div class=\"modal fade bsx-modal-success-confirm\" id=\"bsxModalSuccessConfirm\" tabindex=\"-1\" aria-labelledby=\"bsxModalSuccessConfirmLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h2 class=\"modal-title fs-5\" id=\"bsxModalSuccessConfirmLabel\">Modal Success Confirm</h2>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body\">Bootstrap 5 modal transition.</div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\">Continue</button>\n      </div>\n    </div>\n  </div>\n</div>"
  },
  {
    "name": "modal-sheet-mobile",
    "level": "core",
    "category": "modal",
    "directory": "modal",
    "className": "bsx-modal-sheet-mobile",
    "component": "modal",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "dialogs and confirmations",
    "avoidFor": "dense repeated workflows",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/modal/modal-sheet-mobile.html",
    "snippet": "<button type=\"button\" class=\"btn btn-primary bsx-button-press\" data-bs-toggle=\"modal\" data-bs-target=\"#bsxModalSheetMobile\">\n  Open Modal Sheet Mobile\n</button>\n\n<div class=\"modal fade bsx-modal-sheet-mobile\" id=\"bsxModalSheetMobile\" tabindex=\"-1\" aria-labelledby=\"bsxModalSheetMobileLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h2 class=\"modal-title fs-5\" id=\"bsxModalSheetMobileLabel\">Modal Sheet Mobile</h2>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body\">Bootstrap 5 modal transition.</div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\">Continue</button>\n      </div>\n    </div>\n  </div>\n</div>"
  },
  {
    "name": "dropdown-soft",
    "level": "core",
    "category": "dropdown",
    "directory": "dropdown",
    "className": "bsx-dropdown-soft",
    "component": "dropdown",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      ".dropdown-menu.show"
    ],
    "bestFor": "menus with clear visual hierarchy",
    "avoidFor": "menus requiring instant state changes",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/dropdown/dropdown-soft.html",
    "snippet": "<div class=\"dropdown bsx-dropdown-soft\">\n  <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n    Dropdown Soft\n  </button>\n  <ul class=\"dropdown-menu\">\n    <li><a class=\"dropdown-item\" href=\"#\">Profile</a></li>\n    <li><a class=\"dropdown-item\" href=\"#\">Settings</a></li>\n    <li><hr class=\"dropdown-divider\"></li>\n    <li><a class=\"dropdown-item\" href=\"#\">Sign out</a></li>\n  </ul>\n</div>"
  },
  {
    "name": "dropdown-slide-down",
    "level": "core",
    "category": "dropdown",
    "directory": "dropdown",
    "className": "bsx-dropdown-slide-down",
    "component": "dropdown",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".dropdown-menu.show"
    ],
    "bestFor": "menus with clear visual hierarchy",
    "avoidFor": "menus requiring instant state changes",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/dropdown/dropdown-slide-down.html",
    "snippet": "<div class=\"dropdown bsx-dropdown-slide-down\">\n  <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n    Dropdown Slide Down\n  </button>\n  <ul class=\"dropdown-menu\">\n    <li><a class=\"dropdown-item\" href=\"#\">Profile</a></li>\n    <li><a class=\"dropdown-item\" href=\"#\">Settings</a></li>\n    <li><hr class=\"dropdown-divider\"></li>\n    <li><a class=\"dropdown-item\" href=\"#\">Sign out</a></li>\n  </ul>\n</div>"
  },
  {
    "name": "dropdown-scale",
    "level": "core",
    "category": "dropdown",
    "directory": "dropdown",
    "className": "bsx-dropdown-scale",
    "component": "dropdown",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".dropdown-menu.show"
    ],
    "bestFor": "menus with clear visual hierarchy",
    "avoidFor": "menus requiring instant state changes",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/dropdown/dropdown-scale.html",
    "snippet": "<div class=\"dropdown bsx-dropdown-scale\">\n  <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n    Dropdown Scale\n  </button>\n  <ul class=\"dropdown-menu\">\n    <li><a class=\"dropdown-item\" href=\"#\">Profile</a></li>\n    <li><a class=\"dropdown-item\" href=\"#\">Settings</a></li>\n    <li><hr class=\"dropdown-divider\"></li>\n    <li><a class=\"dropdown-item\" href=\"#\">Sign out</a></li>\n  </ul>\n</div>"
  },
  {
    "name": "dropdown-menu-stagger",
    "level": "core",
    "category": "dropdown",
    "directory": "dropdown",
    "className": "bsx-dropdown-menu-stagger",
    "component": "dropdown",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".dropdown-menu.show"
    ],
    "bestFor": "menus with clear visual hierarchy",
    "avoidFor": "menus requiring instant state changes",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/dropdown/dropdown-menu-stagger.html",
    "snippet": "<div class=\"dropdown bsx-dropdown-menu-stagger\">\n  <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n    Dropdown Menu Stagger\n  </button>\n  <ul class=\"dropdown-menu\">\n    <li><a class=\"dropdown-item\" href=\"#\">Profile</a></li>\n    <li><a class=\"dropdown-item\" href=\"#\">Settings</a></li>\n    <li><hr class=\"dropdown-divider\"></li>\n    <li><a class=\"dropdown-item\" href=\"#\">Sign out</a></li>\n  </ul>\n</div>"
  },
  {
    "name": "dropdown-item-hover-slide",
    "level": "core",
    "category": "dropdown",
    "directory": "dropdown",
    "className": "bsx-dropdown-item-hover-slide",
    "component": "dropdown",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".dropdown-menu.show"
    ],
    "bestFor": "menus with clear visual hierarchy",
    "avoidFor": "menus requiring instant state changes",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/dropdown/dropdown-item-hover-slide.html",
    "snippet": "<div class=\"dropdown bsx-dropdown-item-hover-slide\">\n  <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n    Dropdown Item Hover Slide\n  </button>\n  <ul class=\"dropdown-menu\">\n    <li><a class=\"dropdown-item\" href=\"#\">Profile</a></li>\n    <li><a class=\"dropdown-item\" href=\"#\">Settings</a></li>\n    <li><hr class=\"dropdown-divider\"></li>\n    <li><a class=\"dropdown-item\" href=\"#\">Sign out</a></li>\n  </ul>\n</div>"
  },
  {
    "name": "dropdown-mega-menu-soft",
    "level": "core",
    "category": "dropdown",
    "directory": "dropdown",
    "className": "bsx-dropdown-mega-menu-soft",
    "component": "dropdown",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      ".dropdown-menu.show"
    ],
    "bestFor": "menus with clear visual hierarchy",
    "avoidFor": "menus requiring instant state changes",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/dropdown/dropdown-mega-menu-soft.html",
    "snippet": "<div class=\"dropdown bsx-dropdown-mega-menu-soft\">\n  <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n    Dropdown Mega Menu Soft\n  </button>\n  <ul class=\"dropdown-menu\">\n    <li><a class=\"dropdown-item\" href=\"#\">Profile</a></li>\n    <li><a class=\"dropdown-item\" href=\"#\">Settings</a></li>\n    <li><hr class=\"dropdown-divider\"></li>\n    <li><a class=\"dropdown-item\" href=\"#\">Sign out</a></li>\n  </ul>\n</div>"
  },
  {
    "name": "offcanvas-soft",
    "level": "core",
    "category": "offcanvas",
    "directory": "offcanvas",
    "className": "bsx-offcanvas-soft",
    "component": "offcanvas",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "navigation and mobile panels",
    "avoidFor": "permanent desktop navigation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/offcanvas/offcanvas-soft.html",
    "snippet": "<button class=\"btn btn-primary\" type=\"button\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#bsxOffcanvasSoft\" aria-controls=\"bsxOffcanvasSoft\">\n  Open panel\n</button>\n\n<div class=\"offcanvas offcanvas-start bsx-offcanvas-soft\" tabindex=\"-1\" id=\"bsxOffcanvasSoft\" aria-labelledby=\"bsxOffcanvasSoftLabel\">\n  <div class=\"offcanvas-header\">\n    <h2 class=\"offcanvas-title fs-5\" id=\"bsxOffcanvasSoftLabel\">Offcanvas Soft</h2>\n    <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"offcanvas\" aria-label=\"Close\"></button>\n  </div>\n  <div class=\"offcanvas-body\">\n    <nav class=\"nav flex-column\" aria-label=\"Demo navigation\">\n      <a class=\"nav-link active\" href=\"#\" aria-current=\"page\">Dashboard</a>\n      <a class=\"nav-link\" href=\"#\">Orders</a>\n      <a class=\"nav-link\" href=\"#\">Settings</a>\n    </nav>\n  </div>\n</div>"
  },
  {
    "name": "offcanvas-blur-backdrop",
    "level": "core",
    "category": "offcanvas",
    "directory": "offcanvas",
    "className": "bsx-offcanvas-blur-backdrop",
    "component": "offcanvas",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "filter"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "navigation and mobile panels",
    "avoidFor": "permanent desktop navigation",
    "reducedMotion": "near-instant opacity or color state",
    "snippetPath": "snippets/core/offcanvas/offcanvas-blur-backdrop.html",
    "snippet": "<button class=\"btn btn-primary\" type=\"button\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#bsxOffcanvasBlurBackdrop\" aria-controls=\"bsxOffcanvasBlurBackdrop\">\n  Open panel\n</button>\n\n<div class=\"offcanvas offcanvas-start bsx-offcanvas-blur-backdrop\" tabindex=\"-1\" id=\"bsxOffcanvasBlurBackdrop\" aria-labelledby=\"bsxOffcanvasBlurBackdropLabel\">\n  <div class=\"offcanvas-header\">\n    <h2 class=\"offcanvas-title fs-5\" id=\"bsxOffcanvasBlurBackdropLabel\">Offcanvas Blur Backdrop</h2>\n    <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"offcanvas\" aria-label=\"Close\"></button>\n  </div>\n  <div class=\"offcanvas-body\">\n    <nav class=\"nav flex-column\" aria-label=\"Demo navigation\">\n      <a class=\"nav-link active\" href=\"#\" aria-current=\"page\">Dashboard</a>\n      <a class=\"nav-link\" href=\"#\">Orders</a>\n      <a class=\"nav-link\" href=\"#\">Settings</a>\n    </nav>\n  </div>\n</div>"
  },
  {
    "name": "offcanvas-mobile-sheet",
    "level": "core",
    "category": "offcanvas",
    "directory": "offcanvas",
    "className": "bsx-offcanvas-mobile-sheet",
    "component": "offcanvas",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "navigation and mobile panels",
    "avoidFor": "permanent desktop navigation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/offcanvas/offcanvas-mobile-sheet.html",
    "snippet": "<button class=\"btn btn-primary\" type=\"button\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#bsxOffcanvasMobileSheet\" aria-controls=\"bsxOffcanvasMobileSheet\">\n  Open panel\n</button>\n\n<div class=\"offcanvas offcanvas-start bsx-offcanvas-mobile-sheet\" tabindex=\"-1\" id=\"bsxOffcanvasMobileSheet\" aria-labelledby=\"bsxOffcanvasMobileSheetLabel\">\n  <div class=\"offcanvas-header\">\n    <h2 class=\"offcanvas-title fs-5\" id=\"bsxOffcanvasMobileSheetLabel\">Offcanvas Mobile Sheet</h2>\n    <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"offcanvas\" aria-label=\"Close\"></button>\n  </div>\n  <div class=\"offcanvas-body\">\n    <nav class=\"nav flex-column\" aria-label=\"Demo navigation\">\n      <a class=\"nav-link active\" href=\"#\" aria-current=\"page\">Dashboard</a>\n      <a class=\"nav-link\" href=\"#\">Orders</a>\n      <a class=\"nav-link\" href=\"#\">Settings</a>\n    </nav>\n  </div>\n</div>"
  },
  {
    "name": "offcanvas-menu-stagger",
    "level": "core",
    "category": "offcanvas",
    "directory": "offcanvas",
    "className": "bsx-offcanvas-menu-stagger",
    "component": "offcanvas",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "navigation and mobile panels",
    "avoidFor": "permanent desktop navigation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/offcanvas/offcanvas-menu-stagger.html",
    "snippet": "<button class=\"btn btn-primary\" type=\"button\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#bsxOffcanvasMenuStagger\" aria-controls=\"bsxOffcanvasMenuStagger\">\n  Open panel\n</button>\n\n<div class=\"offcanvas offcanvas-start bsx-offcanvas-menu-stagger\" tabindex=\"-1\" id=\"bsxOffcanvasMenuStagger\" aria-labelledby=\"bsxOffcanvasMenuStaggerLabel\">\n  <div class=\"offcanvas-header\">\n    <h2 class=\"offcanvas-title fs-5\" id=\"bsxOffcanvasMenuStaggerLabel\">Offcanvas Menu Stagger</h2>\n    <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"offcanvas\" aria-label=\"Close\"></button>\n  </div>\n  <div class=\"offcanvas-body\">\n    <nav class=\"nav flex-column\" aria-label=\"Demo navigation\">\n      <a class=\"nav-link active\" href=\"#\" aria-current=\"page\">Dashboard</a>\n      <a class=\"nav-link\" href=\"#\">Orders</a>\n      <a class=\"nav-link\" href=\"#\">Settings</a>\n    </nav>\n  </div>\n</div>"
  },
  {
    "name": "toast-slide-right",
    "level": "core",
    "category": "toast",
    "directory": "toast",
    "className": "bsx-toast-slide-right",
    "component": "toast",
    "requiresJs": true,
    "runtimeBehavior": "toast trigger",
    "motion": "translate",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "brief asynchronous feedback",
    "avoidFor": "critical information requiring confirmation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/toast/toast-slide-right.html",
    "snippet": "<!-- Requires Bootstrap bundle and assets/js/bootstrap5-transitions.js. -->\n<button type=\"button\" class=\"btn btn-primary\" data-bsx-action=\"show-toast\" data-bsx-target=\"#bsxToastSlideRight\">\n  Show toast\n</button>\n\n<div class=\"toast-container position-fixed top-0 end-0 p-3\" aria-live=\"polite\" aria-atomic=\"true\">\n  <div class=\"toast bsx-toast-slide-right\" id=\"bsxToastSlideRight\" role=\"status\" aria-live=\"polite\" aria-atomic=\"true\">\n    <div class=\"toast-header\">\n      <strong class=\"me-auto\">Toast Slide Right</strong>\n      <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\n    </div>\n    <div class=\"toast-body\">The operation completed successfully.</div>\n  </div>\n</div>"
  },
  {
    "name": "toast-pop",
    "level": "core",
    "category": "toast",
    "directory": "toast",
    "className": "bsx-toast-pop",
    "component": "toast",
    "requiresJs": true,
    "runtimeBehavior": "toast trigger",
    "motion": "scale",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "brief asynchronous feedback",
    "avoidFor": "critical information requiring confirmation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/toast/toast-pop.html",
    "snippet": "<!-- Requires Bootstrap bundle and assets/js/bootstrap5-transitions.js. -->\n<button type=\"button\" class=\"btn btn-primary\" data-bsx-action=\"show-toast\" data-bsx-target=\"#bsxToastPop\">\n  Show toast\n</button>\n\n<div class=\"toast-container position-fixed top-0 end-0 p-3\" aria-live=\"polite\" aria-atomic=\"true\">\n  <div class=\"toast bsx-toast-pop\" id=\"bsxToastPop\" role=\"status\" aria-live=\"polite\" aria-atomic=\"true\">\n    <div class=\"toast-header\">\n      <strong class=\"me-auto\">Toast Pop</strong>\n      <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\n    </div>\n    <div class=\"toast-body\">The operation completed successfully.</div>\n  </div>\n</div>"
  },
  {
    "name": "toast-stack-pop",
    "level": "core",
    "category": "toast",
    "directory": "toast",
    "className": "bsx-toast-stack-pop",
    "component": "toast",
    "requiresJs": true,
    "runtimeBehavior": "toast trigger",
    "motion": "scale",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "brief asynchronous feedback",
    "avoidFor": "critical information requiring confirmation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/toast/toast-stack-pop.html",
    "snippet": "<!-- Requires Bootstrap bundle and assets/js/bootstrap5-transitions.js. -->\n<button type=\"button\" class=\"btn btn-primary\" data-bsx-action=\"show-toast\" data-bsx-target=\"#bsxToastStackPop\">\n  Show toast\n</button>\n\n<div class=\"toast-container position-fixed top-0 end-0 p-3\" aria-live=\"polite\" aria-atomic=\"true\">\n  <div class=\"toast bsx-toast-stack-pop\" id=\"bsxToastStackPop\" role=\"status\" aria-live=\"polite\" aria-atomic=\"true\">\n    <div class=\"toast-header\">\n      <strong class=\"me-auto\">Toast Stack Pop</strong>\n      <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\n    </div>\n    <div class=\"toast-body\">The operation completed successfully.</div>\n  </div>\n  <div class=\"toast show mt-2\" role=\"status\" aria-live=\"polite\" aria-atomic=\"true\">\n    <div class=\"toast-body\">Earlier notification in the stack.</div>\n  </div>\n</div>"
  },
  {
    "name": "toast-success-pop",
    "level": "core",
    "category": "toast",
    "directory": "toast",
    "className": "bsx-toast-success-pop",
    "component": "toast",
    "requiresJs": true,
    "runtimeBehavior": "toast trigger",
    "motion": "scale",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ".show",
      ".bsx-is-success"
    ],
    "bestFor": "brief asynchronous feedback",
    "avoidFor": "critical information requiring confirmation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/toast/toast-success-pop.html",
    "snippet": "<!-- Requires Bootstrap bundle and assets/js/bootstrap5-transitions.js. -->\n<button type=\"button\" class=\"btn btn-primary\" data-bsx-action=\"show-toast\" data-bsx-target=\"#bsxToastSuccessPop\">\n  Show toast\n</button>\n\n<div class=\"toast-container position-fixed top-0 end-0 p-3\" aria-live=\"polite\" aria-atomic=\"true\">\n  <div class=\"toast bsx-toast-success-pop\" id=\"bsxToastSuccessPop\" role=\"status\" aria-live=\"polite\" aria-atomic=\"true\">\n    <div class=\"toast-header\">\n      <strong class=\"me-auto\">Toast Success Pop</strong>\n      <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\n    </div>\n    <div class=\"toast-body\">The operation completed successfully.</div>\n  </div>\n</div>"
  },
  {
    "name": "toast-error-shake",
    "level": "core",
    "category": "toast",
    "directory": "toast",
    "className": "bsx-toast-error-shake",
    "component": "toast",
    "requiresJs": true,
    "runtimeBehavior": "toast trigger",
    "motion": "shake",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "medium",
    "cssProperties": [
      "opacity",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ".show",
      ".bsx-is-error"
    ],
    "bestFor": "brief asynchronous feedback",
    "avoidFor": "critical information requiring confirmation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/toast/toast-error-shake.html",
    "snippet": "<!-- Requires Bootstrap bundle and assets/js/bootstrap5-transitions.js. -->\n<button type=\"button\" class=\"btn btn-primary\" data-bsx-action=\"show-toast\" data-bsx-target=\"#bsxToastErrorShake\">\n  Show toast\n</button>\n\n<div class=\"toast-container position-fixed top-0 end-0 p-3\" aria-live=\"polite\" aria-atomic=\"true\">\n  <div class=\"toast bsx-toast-error-shake\" id=\"bsxToastErrorShake\" role=\"status\" aria-live=\"polite\" aria-atomic=\"true\">\n    <div class=\"toast-header\">\n      <strong class=\"me-auto\">Toast Error Shake</strong>\n      <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\n    </div>\n    <div class=\"toast-body\">The operation completed successfully.</div>\n  </div>\n</div>"
  },
  {
    "name": "toast-progress-line",
    "level": "core",
    "category": "toast",
    "directory": "toast",
    "className": "bsx-toast-progress-line",
    "component": "toast",
    "requiresJs": true,
    "runtimeBehavior": "toast trigger",
    "motion": "translate",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "brief asynchronous feedback",
    "avoidFor": "critical information requiring confirmation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/toast/toast-progress-line.html",
    "snippet": "<!-- Requires Bootstrap bundle and assets/js/bootstrap5-transitions.js. -->\n<button type=\"button\" class=\"btn btn-primary\" data-bsx-action=\"show-toast\" data-bsx-target=\"#bsxToastProgressLine\">\n  Show toast\n</button>\n\n<div class=\"toast-container position-fixed top-0 end-0 p-3\" aria-live=\"polite\" aria-atomic=\"true\">\n  <div class=\"toast bsx-toast-progress-line\" id=\"bsxToastProgressLine\" role=\"status\" aria-live=\"polite\" aria-atomic=\"true\">\n    <div class=\"toast-header\">\n      <strong class=\"me-auto\">Toast Progress Line</strong>\n      <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\n    </div>\n    <div class=\"toast-body\">The operation completed successfully.</div>\n  </div>\n</div>"
  },
  {
    "name": "alert-reveal",
    "level": "core",
    "category": "alert",
    "directory": "alert",
    "className": "bsx-alert-reveal",
    "component": "alert",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "inline feedback and validation summaries",
    "avoidFor": "decorative content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/alert/alert-reveal.html",
    "snippet": "<div class=\"alert alert-primary  bsx-alert-reveal\" role=\"alert\">\n  <strong>Alert Reveal.</strong> Review this contextual message.\n  \n</div>"
  },
  {
    "name": "alert-slide-down",
    "level": "core",
    "category": "alert",
    "directory": "alert",
    "className": "bsx-alert-slide-down",
    "component": "alert",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "inline feedback and validation summaries",
    "avoidFor": "decorative content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/alert/alert-slide-down.html",
    "snippet": "<div class=\"alert alert-primary  bsx-alert-slide-down\" role=\"alert\">\n  <strong>Alert Slide Down.</strong> Review this contextual message.\n  \n</div>"
  },
  {
    "name": "alert-shake",
    "level": "core",
    "category": "alert",
    "directory": "alert",
    "className": "bsx-alert-shake",
    "component": "alert",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "shake",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "inline feedback and validation summaries",
    "avoidFor": "decorative content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/alert/alert-shake.html",
    "snippet": "<div class=\"alert alert-primary  bsx-alert-shake\" role=\"alert\">\n  <strong>Alert Shake.</strong> Review this contextual message.\n  \n</div>"
  },
  {
    "name": "alert-pulse-border",
    "level": "core",
    "category": "alert",
    "directory": "alert",
    "className": "bsx-alert-pulse-border",
    "component": "alert",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "inline feedback and validation summaries",
    "avoidFor": "decorative content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/alert/alert-pulse-border.html",
    "snippet": "<div class=\"alert alert-primary  bsx-alert-pulse-border\" role=\"alert\">\n  <strong>Alert Pulse Border.</strong> Review this contextual message.\n  \n</div>"
  },
  {
    "name": "alert-success-glow",
    "level": "core",
    "category": "alert",
    "directory": "alert",
    "className": "bsx-alert-success-glow",
    "component": "alert",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "box-shadow",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ".bsx-is-success"
    ],
    "bestFor": "inline feedback and validation summaries",
    "avoidFor": "decorative content",
    "reducedMotion": "near-instant opacity or color state",
    "snippetPath": "snippets/core/alert/alert-success-glow.html",
    "snippet": "<div class=\"alert alert-primary  bsx-alert-success-glow\" role=\"alert\">\n  <strong>Alert Success Glow.</strong> Review this contextual message.\n  \n</div>"
  },
  {
    "name": "alert-dismissible-exit",
    "level": "core",
    "category": "alert",
    "directory": "alert",
    "className": "bsx-alert-dismissible-exit",
    "component": "alert",
    "requiresJs": true,
    "runtimeBehavior": "delayed alert dismissal",
    "motion": "color + opacity",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "medium",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "inline feedback and validation summaries",
    "avoidFor": "decorative content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/alert/alert-dismissible-exit.html",
    "snippet": "<!-- Requires Bootstrap bundle and assets/js/bootstrap5-transitions.js. -->\n<div class=\"alert alert-primary alert-dismissible fade show bsx-alert-dismissible-exit\" role=\"alert\">\n  <strong>Alert Dismissible Exit.</strong> Review this contextual message.\n  <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button>\n</div>"
  },
  {
    "name": "button-press",
    "level": "core",
    "category": "button",
    "directory": "button",
    "className": "bsx-button-press",
    "component": "button",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "direct interaction feedback",
    "avoidFor": "large continuously animated areas",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/button/button-press.html",
    "snippet": "<button type=\"button\" class=\"btn btn-primary bsx-button-press\">\n  <span class=\"bsx-icon\" aria-hidden=\"true\">→</span>\n  <span class=\"bsx-button-label\">Button Press</span>\n  <span class=\"visually-hidden bsx-button-status\" aria-live=\"polite\"></span>\n</button>"
  },
  {
    "name": "button-hover-lift",
    "level": "core",
    "category": "button",
    "directory": "button",
    "className": "bsx-button-hover-lift",
    "component": "button",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "direct interaction feedback",
    "avoidFor": "large continuously animated areas",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/button/button-hover-lift.html",
    "snippet": "<button type=\"button\" class=\"btn btn-primary bsx-button-hover-lift\">\n  <span class=\"bsx-icon\" aria-hidden=\"true\">→</span>\n  <span class=\"bsx-button-label\">Button Hover Lift</span>\n  <span class=\"visually-hidden bsx-button-status\" aria-live=\"polite\"></span>\n</button>"
  },
  {
    "name": "button-hover-glow",
    "level": "core",
    "category": "button",
    "directory": "button",
    "className": "bsx-button-hover-glow",
    "component": "button",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "box-shadow"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "direct interaction feedback",
    "avoidFor": "large continuously animated areas",
    "reducedMotion": "near-instant opacity or color state",
    "snippetPath": "snippets/core/button/button-hover-glow.html",
    "snippet": "<button type=\"button\" class=\"btn btn-primary bsx-button-hover-glow\">\n  <span class=\"bsx-icon\" aria-hidden=\"true\">→</span>\n  <span class=\"bsx-button-label\">Button Hover Glow</span>\n  <span class=\"visually-hidden bsx-button-status\" aria-live=\"polite\"></span>\n</button>"
  },
  {
    "name": "button-loading-spinner",
    "level": "core",
    "category": "button",
    "directory": "button",
    "className": "bsx-button-loading-spinner",
    "component": "button",
    "requiresJs": true,
    "runtimeBehavior": "button loading and success state",
    "motion": "opacity + rotate",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      "[aria-busy]",
      ".bsx-is-loading"
    ],
    "bestFor": "direct interaction feedback",
    "avoidFor": "large continuously animated areas",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/button/button-loading-spinner.html",
    "snippet": "<!-- Requires Bootstrap bundle and assets/js/bootstrap5-transitions.js. -->\n<button type=\"button\" class=\"btn btn-primary bsx-button-loading-spinner\" data-bsx-action=\"button-state\">\n  <span class=\"bsx-icon\" aria-hidden=\"true\">→</span>\n  <span class=\"bsx-button-label\">Button Loading Spinner</span>\n  <span class=\"visually-hidden bsx-button-status\" aria-live=\"polite\"></span>\n</button>"
  },
  {
    "name": "button-loading-dots",
    "level": "core",
    "category": "button",
    "directory": "button",
    "className": "bsx-button-loading-dots",
    "component": "button",
    "requiresJs": true,
    "runtimeBehavior": "button loading and success state",
    "motion": "opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      "[aria-busy]",
      ".bsx-is-loading"
    ],
    "bestFor": "direct interaction feedback",
    "avoidFor": "large continuously animated areas",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/button/button-loading-dots.html",
    "snippet": "<!-- Requires Bootstrap bundle and assets/js/bootstrap5-transitions.js. -->\n<button type=\"button\" class=\"btn btn-primary bsx-button-loading-dots\" data-bsx-action=\"button-state\">\n  <span class=\"bsx-icon\" aria-hidden=\"true\">→</span>\n  <span class=\"bsx-button-label\">Button Loading Dots</span>\n  <span class=\"visually-hidden bsx-button-status\" aria-live=\"polite\"></span>\n</button>"
  },
  {
    "name": "button-success-pop",
    "level": "core",
    "category": "button",
    "directory": "button",
    "className": "bsx-button-success-pop",
    "component": "button",
    "requiresJs": true,
    "runtimeBehavior": "button loading and success state",
    "motion": "scale",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ".bsx-is-success"
    ],
    "bestFor": "direct interaction feedback",
    "avoidFor": "large continuously animated areas",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/button/button-success-pop.html",
    "snippet": "<!-- Requires Bootstrap bundle and assets/js/bootstrap5-transitions.js. -->\n<button type=\"button\" class=\"btn btn-primary bsx-button-success-pop\" data-bsx-action=\"button-state\">\n  <span class=\"bsx-icon\" aria-hidden=\"true\">→</span>\n  <span class=\"bsx-button-label\">Button Success Pop</span>\n  <span class=\"visually-hidden bsx-button-status\" aria-live=\"polite\"></span>\n</button>"
  },
  {
    "name": "button-icon-slide",
    "level": "core",
    "category": "button",
    "directory": "button",
    "className": "bsx-button-icon-slide",
    "component": "button",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "direct interaction feedback",
    "avoidFor": "large continuously animated areas",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/button/button-icon-slide.html",
    "snippet": "<button type=\"button\" class=\"btn btn-primary bsx-button-icon-slide\">\n  <span class=\"bsx-icon\" aria-hidden=\"true\">→</span>\n  <span class=\"bsx-button-label\">Button Icon Slide</span>\n  <span class=\"visually-hidden bsx-button-status\" aria-live=\"polite\"></span>\n</button>"
  },
  {
    "name": "button-ripple-lite",
    "level": "core",
    "category": "button",
    "directory": "button",
    "className": "bsx-button-ripple-lite",
    "component": "button",
    "requiresJs": true,
    "runtimeBehavior": "pointer ripple",
    "motion": "color + opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "direct interaction feedback",
    "avoidFor": "large continuously animated areas",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/button/button-ripple-lite.html",
    "snippet": "<!-- Requires Bootstrap bundle and assets/js/bootstrap5-transitions.js. -->\n<button type=\"button\" class=\"btn btn-primary bsx-button-ripple-lite\" data-bsx-action=\"button-state\">\n  <span class=\"bsx-icon\" aria-hidden=\"true\">→</span>\n  <span class=\"bsx-button-label\">Button Ripple Lite</span>\n  <span class=\"visually-hidden bsx-button-status\" aria-live=\"polite\"></span>\n</button>"
  },
  {
    "name": "form-focus-ring",
    "level": "core",
    "category": "form",
    "directory": "form",
    "className": "bsx-form-focus-ring",
    "component": "form",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "form-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "box-shadow"
    ],
    "bootstrapStates": [
      ".is-valid",
      ".is-invalid",
      ":focus-within"
    ],
    "bestFor": "focus and validation feedback",
    "avoidFor": "replacing native validation semantics",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/form/form-focus-ring.html",
    "snippet": "<div class=\"bsx-form-focus-ring\">\n  <label class=\"form-label\" for=\"bsxFormFocusRing\">Form Focus Ring</label>\n  <input class=\"form-control \" id=\"bsxFormFocusRing\" type=\"text\" aria-describedby=\"bsxFormFocusRingHelp bsxFormFocusRingFeedback\">\n  <div class=\"form-text bsx-form-help\" id=\"bsxFormFocusRingHelp\">Enter a clear value.</div>\n  <div class=\"invalid-feedback\" id=\"bsxFormFocusRingFeedback\">Validation feedback.</div>\n</div>"
  },
  {
    "name": "form-invalid-shake",
    "level": "core",
    "category": "form",
    "directory": "form",
    "className": "bsx-form-invalid-shake",
    "component": "form",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "shake",
    "kind": "form-state",
    "density": "medium",
    "risk": "medium",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ".is-valid",
      ".is-invalid",
      ":focus-within",
      ".bsx-is-error"
    ],
    "bestFor": "focus and validation feedback",
    "avoidFor": "replacing native validation semantics",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/form/form-invalid-shake.html",
    "snippet": "<div class=\"bsx-form-invalid-shake\">\n  <label class=\"form-label\" for=\"bsxFormInvalidShake\">Form Invalid Shake</label>\n  <input class=\"form-control is-invalid\" id=\"bsxFormInvalidShake\" type=\"text\" aria-describedby=\"bsxFormInvalidShakeHelp bsxFormInvalidShakeFeedback\">\n  <div class=\"form-text bsx-form-help\" id=\"bsxFormInvalidShakeHelp\">Enter a clear value.</div>\n  <div class=\"invalid-feedback\" id=\"bsxFormInvalidShakeFeedback\">Validation feedback.</div>\n</div>"
  },
  {
    "name": "form-valid-check",
    "level": "core",
    "category": "form",
    "directory": "form",
    "className": "bsx-form-valid-check",
    "component": "form",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "form-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ".is-valid",
      ".is-invalid",
      ":focus-within"
    ],
    "bestFor": "focus and validation feedback",
    "avoidFor": "replacing native validation semantics",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/form/form-valid-check.html",
    "snippet": "<div class=\"bsx-form-valid-check\">\n  <label class=\"form-label\" for=\"bsxFormValidCheck\">Form Valid Check</label>\n  <input class=\"form-control is-valid\" id=\"bsxFormValidCheck\" type=\"text\" aria-describedby=\"bsxFormValidCheckHelp bsxFormValidCheckFeedback\">\n  <div class=\"form-text bsx-form-help\" id=\"bsxFormValidCheckHelp\">Enter a clear value.</div>\n  <div class=\"valid-feedback\" id=\"bsxFormValidCheckFeedback\">Validation feedback.</div>\n</div>"
  },
  {
    "name": "form-help-text-reveal",
    "level": "core",
    "category": "form",
    "directory": "form",
    "className": "bsx-form-help-text-reveal",
    "component": "form",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "form-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".is-valid",
      ".is-invalid",
      ":focus-within"
    ],
    "bestFor": "focus and validation feedback",
    "avoidFor": "replacing native validation semantics",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/form/form-help-text-reveal.html",
    "snippet": "<div class=\"bsx-form-help-text-reveal\">\n  <label class=\"form-label\" for=\"bsxFormHelpTextReveal\">Form Help Text Reveal</label>\n  <input class=\"form-control \" id=\"bsxFormHelpTextReveal\" type=\"text\" aria-describedby=\"bsxFormHelpTextRevealHelp bsxFormHelpTextRevealFeedback\">\n  <div class=\"form-text bsx-form-help\" id=\"bsxFormHelpTextRevealHelp\">Enter a clear value.</div>\n  <div class=\"invalid-feedback\" id=\"bsxFormHelpTextRevealFeedback\">Validation feedback.</div>\n</div>"
  },
  {
    "name": "form-error-text-slide",
    "level": "core",
    "category": "form",
    "directory": "form",
    "className": "bsx-form-error-text-slide",
    "component": "form",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "form-state",
    "density": "medium",
    "risk": "medium",
    "cssProperties": [
      "transform",
      "opacity",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ".is-valid",
      ".is-invalid",
      ":focus-within",
      ".bsx-is-error"
    ],
    "bestFor": "focus and validation feedback",
    "avoidFor": "replacing native validation semantics",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/form/form-error-text-slide.html",
    "snippet": "<div class=\"bsx-form-error-text-slide\">\n  <label class=\"form-label\" for=\"bsxFormErrorTextSlide\">Form Error Text Slide</label>\n  <input class=\"form-control is-invalid\" id=\"bsxFormErrorTextSlide\" type=\"text\" aria-describedby=\"bsxFormErrorTextSlideHelp bsxFormErrorTextSlideFeedback\">\n  <div class=\"form-text bsx-form-help\" id=\"bsxFormErrorTextSlideHelp\">Enter a clear value.</div>\n  <div class=\"invalid-feedback\" id=\"bsxFormErrorTextSlideFeedback\">Validation feedback.</div>\n</div>"
  },
  {
    "name": "form-switch-toggle-soft",
    "level": "core",
    "category": "form",
    "directory": "form",
    "className": "bsx-form-switch-toggle-soft",
    "component": "form",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "form-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      ".is-valid",
      ".is-invalid",
      ":focus-within"
    ],
    "bestFor": "focus and validation feedback",
    "avoidFor": "replacing native validation semantics",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/form/form-switch-toggle-soft.html",
    "snippet": "<div class=\"form-check form-switch bsx-form-switch-toggle-soft\">\n  <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"bsxFormSwitchToggleSoft\">\n  <label class=\"form-check-label\" for=\"bsxFormSwitchToggleSoft\">Form Switch Toggle Soft</label>\n</div>"
  },
  {
    "name": "form-checkbox-pop",
    "level": "core",
    "category": "form",
    "directory": "form",
    "className": "bsx-form-checkbox-pop",
    "component": "form",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale",
    "kind": "form-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".is-valid",
      ".is-invalid",
      ":focus-within"
    ],
    "bestFor": "focus and validation feedback",
    "avoidFor": "replacing native validation semantics",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/form/form-checkbox-pop.html",
    "snippet": "<div class=\"form-check bsx-form-checkbox-pop\">\n  <input class=\"form-check-input\" type=\"checkbox\" name=\"bsxFormCheckboxPop\" id=\"bsxFormCheckboxPop\">\n  <label class=\"form-check-label\" for=\"bsxFormCheckboxPop\">Form Checkbox Pop</label>\n</div>"
  },
  {
    "name": "form-file-drop-highlight",
    "level": "core",
    "category": "form",
    "directory": "form",
    "className": "bsx-form-file-drop-highlight",
    "component": "form",
    "requiresJs": true,
    "runtimeBehavior": "file drag state",
    "motion": "color + opacity",
    "kind": "form-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ".is-valid",
      ".is-invalid",
      ":focus-within"
    ],
    "bestFor": "focus and validation feedback",
    "avoidFor": "replacing native validation semantics",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/form/form-file-drop-highlight.html",
    "snippet": "<!-- Requires Bootstrap bundle and assets/js/bootstrap5-transitions.js. -->\n<div class=\"bsx-form-file-drop-highlight\">\n  <label class=\"form-label\" for=\"bsxFormFileDropHighlight\">Form File Drop Highlight</label>\n  <input class=\"form-control\" type=\"file\" id=\"bsxFormFileDropHighlight\">\n  <div class=\"form-text\">Choose a file or drag it over the field.</div>\n</div>"
  },
  {
    "name": "card-hover-lift",
    "level": "core",
    "category": "card",
    "directory": "card",
    "className": "bsx-card-hover-lift",
    "component": "card",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "interactive content collections",
    "avoidFor": "non-interactive dense tables",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/card/card-hover-lift.html",
    "snippet": "<article class=\"card bsx-card-hover-lift\">\n  <div class=\"bsx-card-media\" aria-hidden=\"true\"></div>\n  <div class=\"card-body\">\n    <h2 class=\"card-title h5\">Card Hover Lift</h2>\n    <p class=\"card-text\">A copy-paste friendly Bootstrap card interaction.</p>\n    <a class=\"btn btn-primary\" href=\"#\">Open details</a>\n  </div>\n  <div class=\"card-footer bsx-card-footer\">Updated just now</div>\n</article>"
  },
  {
    "name": "card-hover-scale",
    "level": "core",
    "category": "card",
    "directory": "card",
    "className": "bsx-card-hover-scale",
    "component": "card",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "interactive content collections",
    "avoidFor": "non-interactive dense tables",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/card/card-hover-scale.html",
    "snippet": "<article class=\"card bsx-card-hover-scale\">\n  <div class=\"bsx-card-media\" aria-hidden=\"true\"></div>\n  <div class=\"card-body\">\n    <h2 class=\"card-title h5\">Card Hover Scale</h2>\n    <p class=\"card-text\">A copy-paste friendly Bootstrap card interaction.</p>\n    <a class=\"btn btn-primary\" href=\"#\">Open details</a>\n  </div>\n  <div class=\"card-footer bsx-card-footer\">Updated just now</div>\n</article>"
  },
  {
    "name": "card-hover-shadow",
    "level": "core",
    "category": "card",
    "directory": "card",
    "className": "bsx-card-hover-shadow",
    "component": "card",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "box-shadow"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "interactive content collections",
    "avoidFor": "non-interactive dense tables",
    "reducedMotion": "near-instant opacity or color state",
    "snippetPath": "snippets/core/card/card-hover-shadow.html",
    "snippet": "<article class=\"card bsx-card-hover-shadow\">\n  <div class=\"bsx-card-media\" aria-hidden=\"true\"></div>\n  <div class=\"card-body\">\n    <h2 class=\"card-title h5\">Card Hover Shadow</h2>\n    <p class=\"card-text\">A copy-paste friendly Bootstrap card interaction.</p>\n    <a class=\"btn btn-primary\" href=\"#\">Open details</a>\n  </div>\n  <div class=\"card-footer bsx-card-footer\">Updated just now</div>\n</article>"
  },
  {
    "name": "card-image-zoom",
    "level": "core",
    "category": "card",
    "directory": "card",
    "className": "bsx-card-image-zoom",
    "component": "card",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "interactive content collections",
    "avoidFor": "non-interactive dense tables",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/card/card-image-zoom.html",
    "snippet": "<article class=\"card bsx-card-image-zoom\">\n  <div class=\"bsx-card-media\" aria-hidden=\"true\"></div>\n  <div class=\"card-body\">\n    <h2 class=\"card-title h5\">Card Image Zoom</h2>\n    <p class=\"card-text\">A copy-paste friendly Bootstrap card interaction.</p>\n    <a class=\"btn btn-primary\" href=\"#\">Open details</a>\n  </div>\n  <div class=\"card-footer bsx-card-footer\">Updated just now</div>\n</article>"
  },
  {
    "name": "card-image-fade-overlay",
    "level": "core",
    "category": "card",
    "directory": "card",
    "className": "bsx-card-image-fade-overlay",
    "component": "card",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform",
      "opacity"
    ],
    "bootstrapStates": [
      "[aria-busy]",
      ".bsx-is-loading"
    ],
    "bestFor": "interactive content collections",
    "avoidFor": "non-interactive dense tables",
    "reducedMotion": "near-instant opacity or color state",
    "snippetPath": "snippets/core/card/card-image-fade-overlay.html",
    "snippet": "<article class=\"card bsx-card-image-fade-overlay\">\n  <div class=\"bsx-card-media\" aria-hidden=\"true\"></div>\n  <div class=\"card-body\">\n    <h2 class=\"card-title h5\">Card Image Fade Overlay</h2>\n    <p class=\"card-text\">A copy-paste friendly Bootstrap card interaction.</p>\n    <a class=\"btn btn-primary\" href=\"#\">Open details</a>\n  </div>\n  <div class=\"card-footer bsx-card-footer\">Updated just now</div>\n</article>"
  },
  {
    "name": "card-stagger-list",
    "level": "core",
    "category": "card",
    "directory": "card",
    "className": "bsx-card-stagger-list",
    "component": "card",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "interactive content collections",
    "avoidFor": "non-interactive dense tables",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/card/card-stagger-list.html",
    "snippet": "<article class=\"card bsx-card-stagger-list\">\n  <div class=\"bsx-card-media\" aria-hidden=\"true\"></div>\n  <div class=\"card-body\">\n    <h2 class=\"card-title h5\">Card Stagger List</h2>\n    <p class=\"card-text\">A copy-paste friendly Bootstrap card interaction.</p>\n    <a class=\"btn btn-primary\" href=\"#\">Open details</a>\n  </div>\n  <div class=\"card-footer bsx-card-footer\">Updated just now</div>\n</article>"
  },
  {
    "name": "tabs-fade",
    "level": "core",
    "category": "tabs/nav",
    "directory": "tabs",
    "className": "bsx-tabs-fade",
    "component": "tabs",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      ".active",
      "[aria-current]"
    ],
    "bestFor": "section navigation and tab state",
    "avoidFor": "rapidly auto-rotating content",
    "reducedMotion": "near-instant opacity or color state",
    "snippetPath": "snippets/core/tabs/tabs-fade.html",
    "snippet": "<div class=\"bsx-tabs-fade\">\n  <ul class=\"nav nav-tabs\" role=\"tablist\">\n    <li class=\"nav-item\" role=\"presentation\">\n      <button class=\"nav-link active\" id=\"bsxTabsFadeOneTab\" data-bs-toggle=\"tab\" data-bs-target=\"#bsxTabsFadeOne\" type=\"button\" role=\"tab\" aria-controls=\"bsxTabsFadeOne\" aria-selected=\"true\">Overview</button>\n    </li>\n    <li class=\"nav-item\" role=\"presentation\">\n      <button class=\"nav-link\" id=\"bsxTabsFadeTwoTab\" data-bs-toggle=\"tab\" data-bs-target=\"#bsxTabsFadeTwo\" type=\"button\" role=\"tab\" aria-controls=\"bsxTabsFadeTwo\" aria-selected=\"false\">Details</button>\n    </li>\n  </ul>\n  <div class=\"tab-content p-3 border border-top-0\">\n    <div class=\"tab-pane fade show active\" id=\"bsxTabsFadeOne\" role=\"tabpanel\" aria-labelledby=\"bsxTabsFadeOneTab\" tabindex=\"0\">Overview content.</div>\n    <div class=\"tab-pane fade\" id=\"bsxTabsFadeTwo\" role=\"tabpanel\" aria-labelledby=\"bsxTabsFadeTwoTab\" tabindex=\"0\">Detailed content.</div>\n  </div>\n</div>"
  },
  {
    "name": "tabs-underline-slide",
    "level": "core",
    "category": "tabs/nav",
    "directory": "tabs",
    "className": "bsx-tabs-underline-slide",
    "component": "tabs",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".active",
      "[aria-current]"
    ],
    "bestFor": "section navigation and tab state",
    "avoidFor": "rapidly auto-rotating content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/tabs/tabs-underline-slide.html",
    "snippet": "<div class=\"bsx-tabs-underline-slide\">\n  <ul class=\"nav nav-tabs\" role=\"tablist\">\n    <li class=\"nav-item\" role=\"presentation\">\n      <button class=\"nav-link active\" id=\"bsxTabsUnderlineSlideOneTab\" data-bs-toggle=\"tab\" data-bs-target=\"#bsxTabsUnderlineSlideOne\" type=\"button\" role=\"tab\" aria-controls=\"bsxTabsUnderlineSlideOne\" aria-selected=\"true\">Overview</button>\n    </li>\n    <li class=\"nav-item\" role=\"presentation\">\n      <button class=\"nav-link\" id=\"bsxTabsUnderlineSlideTwoTab\" data-bs-toggle=\"tab\" data-bs-target=\"#bsxTabsUnderlineSlideTwo\" type=\"button\" role=\"tab\" aria-controls=\"bsxTabsUnderlineSlideTwo\" aria-selected=\"false\">Details</button>\n    </li>\n  </ul>\n  <div class=\"tab-content p-3 border border-top-0\">\n    <div class=\"tab-pane fade show active\" id=\"bsxTabsUnderlineSlideOne\" role=\"tabpanel\" aria-labelledby=\"bsxTabsUnderlineSlideOneTab\" tabindex=\"0\">Overview content.</div>\n    <div class=\"tab-pane fade\" id=\"bsxTabsUnderlineSlideTwo\" role=\"tabpanel\" aria-labelledby=\"bsxTabsUnderlineSlideTwoTab\" tabindex=\"0\">Detailed content.</div>\n  </div>\n</div>"
  },
  {
    "name": "tabs-pill-active-pop",
    "level": "core",
    "category": "tabs/nav",
    "directory": "tabs",
    "className": "bsx-tabs-pill-active-pop",
    "component": "tabs",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform",
      "box-shadow",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ".active",
      "[aria-current]"
    ],
    "bestFor": "section navigation and tab state",
    "avoidFor": "rapidly auto-rotating content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/tabs/tabs-pill-active-pop.html",
    "snippet": "<div class=\"bsx-tabs-pill-active-pop\">\n  <ul class=\"nav nav-tabs\" role=\"tablist\">\n    <li class=\"nav-item\" role=\"presentation\">\n      <button class=\"nav-link active\" id=\"bsxTabsPillActivePopOneTab\" data-bs-toggle=\"tab\" data-bs-target=\"#bsxTabsPillActivePopOne\" type=\"button\" role=\"tab\" aria-controls=\"bsxTabsPillActivePopOne\" aria-selected=\"true\">Overview</button>\n    </li>\n    <li class=\"nav-item\" role=\"presentation\">\n      <button class=\"nav-link\" id=\"bsxTabsPillActivePopTwoTab\" data-bs-toggle=\"tab\" data-bs-target=\"#bsxTabsPillActivePopTwo\" type=\"button\" role=\"tab\" aria-controls=\"bsxTabsPillActivePopTwo\" aria-selected=\"false\">Details</button>\n    </li>\n  </ul>\n  <div class=\"tab-content p-3 border border-top-0\">\n    <div class=\"tab-pane fade show active\" id=\"bsxTabsPillActivePopOne\" role=\"tabpanel\" aria-labelledby=\"bsxTabsPillActivePopOneTab\" tabindex=\"0\">Overview content.</div>\n    <div class=\"tab-pane fade\" id=\"bsxTabsPillActivePopTwo\" role=\"tabpanel\" aria-labelledby=\"bsxTabsPillActivePopTwoTab\" tabindex=\"0\">Detailed content.</div>\n  </div>\n</div>"
  },
  {
    "name": "nav-link-hover-underline",
    "level": "core",
    "category": "tabs/nav",
    "directory": "navbar",
    "className": "bsx-nav-link-hover-underline",
    "component": "navbar",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "section navigation and tab state",
    "avoidFor": "rapidly auto-rotating content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/navbar/nav-link-hover-underline.html",
    "snippet": "<nav class=\"navbar navbar-expand-md bg-body-tertiary bsx-nav-link-hover-underline\" aria-label=\"Nav Link Hover Underline\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" href=\"#\">BSX</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#bsxNavLinkHoverUnderline\" aria-controls=\"bsxNavLinkHoverUnderline\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"bsxNavLinkHoverUnderline\">\n      <div class=\"navbar-nav\">\n        <a class=\"nav-link active\" aria-current=\"page\" href=\"#\">Home</a>\n        <a class=\"nav-link\" href=\"#\">Catalog</a>\n      </div>\n    </div>\n  </div>\n</nav>"
  },
  {
    "name": "nav-sidebar-active-marker",
    "level": "core",
    "category": "tabs/nav",
    "directory": "sidebar",
    "className": "bsx-nav-sidebar-active-marker",
    "component": "sidebar",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "transform",
      "box-shadow",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "section navigation and tab state",
    "avoidFor": "rapidly auto-rotating content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/sidebar/nav-sidebar-active-marker.html",
    "snippet": "<nav class=\"nav flex-column border rounded p-2 bsx-nav-sidebar-active-marker\" aria-label=\"Nav Sidebar Active Marker\">\n  <a class=\"nav-link active\" href=\"#\" aria-current=\"page\">Dashboard</a>\n  <a class=\"nav-link\" href=\"#\">Orders</a>\n  <a class=\"nav-link\" href=\"#\">Customers</a>\n  <div class=\"bsx-sidebar-submenu ps-3\">\n    <a class=\"nav-link\" href=\"#\">Archived</a>\n  </div>\n</nav>"
  },
  {
    "name": "accordion-icon-rotate",
    "level": "core",
    "category": "accordion/collapse",
    "directory": "accordion",
    "className": "bsx-accordion-icon-rotate",
    "component": "accordion",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "rotate",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ".collapse.show",
      "[aria-expanded]"
    ],
    "bestFor": "disclosure controls",
    "avoidFor": "content that must remain continuously visible",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/accordion/accordion-icon-rotate.html",
    "snippet": "<div class=\"accordion bsx-accordion-icon-rotate\" id=\"bsxAccordionIconRotate\">\n  <div class=\"accordion-item\">\n    <h2 class=\"accordion-header\">\n      <button class=\"accordion-button\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#bsxAccordionIconRotateBody\" aria-expanded=\"true\" aria-controls=\"bsxAccordionIconRotateBody\">\n        Accordion Icon Rotate\n        <span class=\"bsx-accordion-icon ms-auto\" aria-hidden=\"true\"></span>\n      </button>\n    </h2>\n    <div id=\"bsxAccordionIconRotateBody\" class=\"accordion-collapse collapse show\" data-bs-parent=\"#bsxAccordionIconRotate\">\n      <div class=\"accordion-body\">Accessible Bootstrap collapse content.</div>\n    </div>\n  </div>\n</div>"
  },
  {
    "name": "accordion-icon-plus-minus",
    "level": "core",
    "category": "accordion/collapse",
    "directory": "accordion",
    "className": "bsx-accordion-icon-plus-minus",
    "component": "accordion",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "rotate",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ".collapse.show",
      "[aria-expanded]"
    ],
    "bestFor": "disclosure controls",
    "avoidFor": "content that must remain continuously visible",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/accordion/accordion-icon-plus-minus.html",
    "snippet": "<div class=\"accordion bsx-accordion-icon-plus-minus\" id=\"bsxAccordionIconPlusMinus\">\n  <div class=\"accordion-item\">\n    <h2 class=\"accordion-header\">\n      <button class=\"accordion-button\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#bsxAccordionIconPlusMinusBody\" aria-expanded=\"true\" aria-controls=\"bsxAccordionIconPlusMinusBody\">\n        Accordion Icon Plus Minus\n        <span class=\"bsx-accordion-icon ms-auto\" aria-hidden=\"true\"></span>\n      </button>\n    </h2>\n    <div id=\"bsxAccordionIconPlusMinusBody\" class=\"accordion-collapse collapse show\" data-bs-parent=\"#bsxAccordionIconPlusMinus\">\n      <div class=\"accordion-body\">Accessible Bootstrap collapse content.</div>\n    </div>\n  </div>\n</div>"
  },
  {
    "name": "accordion-body-fade",
    "level": "core",
    "category": "accordion/collapse",
    "directory": "accordion",
    "className": "bsx-accordion-body-fade",
    "component": "accordion",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      ".collapse.show",
      "[aria-expanded]"
    ],
    "bestFor": "disclosure controls",
    "avoidFor": "content that must remain continuously visible",
    "reducedMotion": "near-instant opacity or color state",
    "snippetPath": "snippets/core/accordion/accordion-body-fade.html",
    "snippet": "<div class=\"accordion bsx-accordion-body-fade\" id=\"bsxAccordionBodyFade\">\n  <div class=\"accordion-item\">\n    <h2 class=\"accordion-header\">\n      <button class=\"accordion-button\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#bsxAccordionBodyFadeBody\" aria-expanded=\"true\" aria-controls=\"bsxAccordionBodyFadeBody\">\n        Accordion Body Fade\n        <span class=\"bsx-accordion-icon ms-auto\" aria-hidden=\"true\"></span>\n      </button>\n    </h2>\n    <div id=\"bsxAccordionBodyFadeBody\" class=\"accordion-collapse collapse show\" data-bs-parent=\"#bsxAccordionBodyFade\">\n      <div class=\"accordion-body\">Accessible Bootstrap collapse content.</div>\n    </div>\n  </div>\n</div>"
  },
  {
    "name": "collapse-soft",
    "level": "core",
    "category": "accordion/collapse",
    "directory": "accordion",
    "className": "bsx-collapse-soft",
    "component": "accordion",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      ".collapse.show",
      "[aria-expanded]"
    ],
    "bestFor": "disclosure controls",
    "avoidFor": "content that must remain continuously visible",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/accordion/collapse-soft.html",
    "snippet": "<div class=\"accordion bsx-collapse-soft\" id=\"bsxCollapseSoft\">\n  <div class=\"accordion-item\">\n    <h2 class=\"accordion-header\">\n      <button class=\"accordion-button\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#bsxCollapseSoftBody\" aria-expanded=\"true\" aria-controls=\"bsxCollapseSoftBody\">\n        Collapse Soft\n        <span class=\"bsx-accordion-icon ms-auto\" aria-hidden=\"true\"></span>\n      </button>\n    </h2>\n    <div id=\"bsxCollapseSoftBody\" class=\"accordion-collapse collapse show\" data-bs-parent=\"#bsxCollapseSoft\">\n      <div class=\"accordion-body\">Accessible Bootstrap collapse content.</div>\n    </div>\n  </div>\n</div>"
  },
  {
    "name": "collapse-height-smooth",
    "level": "core",
    "category": "accordion/collapse",
    "directory": "accordion",
    "className": "bsx-collapse-height-smooth",
    "component": "accordion",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ".collapse.show",
      "[aria-expanded]"
    ],
    "bestFor": "disclosure controls",
    "avoidFor": "content that must remain continuously visible",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/accordion/collapse-height-smooth.html",
    "snippet": "<div class=\"accordion bsx-collapse-height-smooth\" id=\"bsxCollapseHeightSmooth\">\n  <div class=\"accordion-item\">\n    <h2 class=\"accordion-header\">\n      <button class=\"accordion-button\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#bsxCollapseHeightSmoothBody\" aria-expanded=\"true\" aria-controls=\"bsxCollapseHeightSmoothBody\">\n        Collapse Height Smooth\n        <span class=\"bsx-accordion-icon ms-auto\" aria-hidden=\"true\"></span>\n      </button>\n    </h2>\n    <div id=\"bsxCollapseHeightSmoothBody\" class=\"accordion-collapse collapse show\" data-bs-parent=\"#bsxCollapseHeightSmooth\">\n      <div class=\"accordion-body\">Accessible Bootstrap collapse content.</div>\n    </div>\n  </div>\n</div>"
  },
  {
    "name": "navbar-link-hover-line",
    "level": "core",
    "category": "navbar/sidebar",
    "directory": "navbar",
    "className": "bsx-navbar-link-hover-line",
    "component": "navbar",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "application navigation",
    "avoidFor": "small inline controls",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/navbar/navbar-link-hover-line.html",
    "snippet": "<nav class=\"navbar navbar-expand-md bg-body-tertiary bsx-navbar-link-hover-line\" aria-label=\"Navbar Link Hover Line\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" href=\"#\">BSX</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#bsxNavbarLinkHoverLine\" aria-controls=\"bsxNavbarLinkHoverLine\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"bsxNavbarLinkHoverLine\">\n      <div class=\"navbar-nav\">\n        <a class=\"nav-link active\" aria-current=\"page\" href=\"#\">Home</a>\n        <a class=\"nav-link\" href=\"#\">Catalog</a>\n      </div>\n    </div>\n  </div>\n</nav>"
  },
  {
    "name": "navbar-mobile-collapse-soft",
    "level": "core",
    "category": "navbar/sidebar",
    "directory": "navbar",
    "className": "bsx-navbar-mobile-collapse-soft",
    "component": "navbar",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform",
      "opacity"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "application navigation",
    "avoidFor": "small inline controls",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/navbar/navbar-mobile-collapse-soft.html",
    "snippet": "<nav class=\"navbar navbar-expand-md bg-body-tertiary bsx-navbar-mobile-collapse-soft\" aria-label=\"Navbar Mobile Collapse Soft\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" href=\"#\">BSX</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#bsxNavbarMobileCollapseSoft\" aria-controls=\"bsxNavbarMobileCollapseSoft\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"bsxNavbarMobileCollapseSoft\">\n      <div class=\"navbar-nav\">\n        <a class=\"nav-link active\" aria-current=\"page\" href=\"#\">Home</a>\n        <a class=\"nav-link\" href=\"#\">Catalog</a>\n      </div>\n    </div>\n  </div>\n</nav>"
  },
  {
    "name": "navbar-toggler-morph",
    "level": "core",
    "category": "navbar/sidebar",
    "directory": "navbar",
    "className": "bsx-navbar-toggler-morph",
    "component": "navbar",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "rotate",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "application navigation",
    "avoidFor": "small inline controls",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/navbar/navbar-toggler-morph.html",
    "snippet": "<nav class=\"navbar navbar-expand-md bg-body-tertiary bsx-navbar-toggler-morph\" aria-label=\"Navbar Toggler Morph\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" href=\"#\">BSX</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#bsxNavbarTogglerMorph\" aria-controls=\"bsxNavbarTogglerMorph\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"bsxNavbarTogglerMorph\">\n      <div class=\"navbar-nav\">\n        <a class=\"nav-link active\" aria-current=\"page\" href=\"#\">Home</a>\n        <a class=\"nav-link\" href=\"#\">Catalog</a>\n      </div>\n    </div>\n  </div>\n</nav>"
  },
  {
    "name": "sidebar-slide-in",
    "level": "core",
    "category": "navbar/sidebar",
    "directory": "sidebar",
    "className": "bsx-sidebar-slide-in",
    "component": "sidebar",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "application navigation",
    "avoidFor": "small inline controls",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/sidebar/sidebar-slide-in.html",
    "snippet": "<nav class=\"nav flex-column border rounded p-2 bsx-sidebar-slide-in\" aria-label=\"Sidebar Slide In\">\n  <a class=\"nav-link active\" href=\"#\" aria-current=\"page\">Dashboard</a>\n  <a class=\"nav-link\" href=\"#\">Orders</a>\n  <a class=\"nav-link\" href=\"#\">Customers</a>\n  <div class=\"bsx-sidebar-submenu ps-3\">\n    <a class=\"nav-link\" href=\"#\">Archived</a>\n  </div>\n</nav>"
  },
  {
    "name": "sidebar-item-active-marker",
    "level": "core",
    "category": "navbar/sidebar",
    "directory": "sidebar",
    "className": "bsx-sidebar-item-active-marker",
    "component": "sidebar",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "transform",
      "box-shadow",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "application navigation",
    "avoidFor": "small inline controls",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/sidebar/sidebar-item-active-marker.html",
    "snippet": "<nav class=\"nav flex-column border rounded p-2 bsx-sidebar-item-active-marker\" aria-label=\"Sidebar Item Active Marker\">\n  <a class=\"nav-link active\" href=\"#\" aria-current=\"page\">Dashboard</a>\n  <a class=\"nav-link\" href=\"#\">Orders</a>\n  <a class=\"nav-link\" href=\"#\">Customers</a>\n  <div class=\"bsx-sidebar-submenu ps-3\">\n    <a class=\"nav-link\" href=\"#\">Archived</a>\n  </div>\n</nav>"
  },
  {
    "name": "badge-pop",
    "level": "core",
    "category": "badge/counter",
    "directory": "badge",
    "className": "bsx-badge-pop",
    "component": "badge",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "status and metric updates",
    "avoidFor": "long text content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/badge/badge-pop.html",
    "snippet": "<span class=\"badge text-bg-primary bsx-badge-pop\" role=\"status\">\n  Badge Pop\n  <span class=\"visually-hidden\">status</span>\n</span>"
  },
  {
    "name": "badge-notification-ping",
    "level": "core",
    "category": "badge/counter",
    "directory": "badge",
    "className": "bsx-badge-notification-ping",
    "component": "badge",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "status and metric updates",
    "avoidFor": "long text content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/badge/badge-notification-ping.html",
    "snippet": "<span class=\"badge text-bg-primary bsx-badge-notification-ping\" role=\"status\">\n  Badge Notification Ping\n  <span class=\"visually-hidden\">status</span>\n</span>"
  },
  {
    "name": "badge-status-pulse",
    "level": "core",
    "category": "badge/counter",
    "directory": "badge",
    "className": "bsx-badge-status-pulse",
    "component": "badge",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "status and metric updates",
    "avoidFor": "long text content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/badge/badge-status-pulse.html",
    "snippet": "<span class=\"badge text-bg-primary bsx-badge-status-pulse\" role=\"status\">\n  Badge Status Pulse\n  <span class=\"visually-hidden\">status</span>\n</span>"
  },
  {
    "name": "counter-bump",
    "level": "core",
    "category": "badge/counter",
    "directory": "counter",
    "className": "bsx-counter-bump",
    "component": "counter",
    "requiresJs": true,
    "runtimeBehavior": "counter update",
    "motion": "scale",
    "kind": "feedback-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "status and metric updates",
    "avoidFor": "long text content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/counter/counter-bump.html",
    "snippet": "<!-- Requires Bootstrap bundle and assets/js/bootstrap5-transitions.js. -->\n<div class=\"card bsx-counter-bump\" data-bsx-counter>\n  <div class=\"card-body\">\n    <p class=\"text-body-secondary mb-1\">Counter Bump</p>\n    <p class=\"display-6 mb-3\" data-bsx-counter-value aria-live=\"polite\">24</p>\n    <button type=\"button\" class=\"btn btn-sm btn-outline-primary\" data-bsx-action=\"counter\">Update metric</button>\n  </div>\n</div>"
  },
  {
    "name": "metric-card-update",
    "level": "core",
    "category": "badge/counter",
    "directory": "counter",
    "className": "bsx-metric-card-update",
    "component": "counter",
    "requiresJs": true,
    "runtimeBehavior": "counter update",
    "motion": "color + opacity",
    "kind": "feedback-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "status and metric updates",
    "avoidFor": "long text content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/counter/metric-card-update.html",
    "snippet": "<!-- Requires Bootstrap bundle and assets/js/bootstrap5-transitions.js. -->\n<div class=\"card bsx-metric-card-update\" data-bsx-counter>\n  <div class=\"card-body\">\n    <p class=\"text-body-secondary mb-1\">Metric Card Update</p>\n    <p class=\"display-6 mb-3\" data-bsx-counter-value aria-live=\"polite\">24</p>\n    <button type=\"button\" class=\"btn btn-sm btn-outline-primary\" data-bsx-action=\"counter\">Update metric</button>\n  </div>\n</div>"
  },
  {
    "name": "table-row-hover",
    "level": "core",
    "category": "table/list",
    "directory": "table",
    "className": "bsx-table-row-hover",
    "component": "table",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "component-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "row state and collection changes",
    "avoidFor": "large simultaneous batches",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/table/table-row-hover.html",
    "snippet": "<div class=\"table-responsive bsx-table-row-hover\">\n  <table class=\"table table-hover align-middle\">\n    <thead><tr><th scope=\"col\">Item</th><th scope=\"col\">Status</th><th scope=\"col\"><button class=\"btn btn-sm\" type=\"button\">Updated <span class=\"bsx-sort-icon\" aria-hidden=\"true\">↕</span></button></th></tr></thead>\n    <tbody data-bsx-table-body>\n      <tr><th scope=\"row\">Example row</th><td><span class=\"badge text-bg-success\">Ready</span></td><td>Now</td></tr>\n    </tbody>\n  </table>\n</div>"
  },
  {
    "name": "table-row-insert",
    "level": "core",
    "category": "table/list",
    "directory": "table",
    "className": "bsx-table-row-insert",
    "component": "table",
    "requiresJs": true,
    "runtimeBehavior": "table row mutation",
    "motion": "translate",
    "kind": "component-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "row state and collection changes",
    "avoidFor": "large simultaneous batches",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/table/table-row-insert.html",
    "snippet": "<!-- Requires Bootstrap bundle and assets/js/bootstrap5-transitions.js. -->\n<div class=\"table-responsive bsx-table-row-insert\">\n  <table class=\"table table-hover align-middle\">\n    <thead><tr><th scope=\"col\">Item</th><th scope=\"col\">Status</th><th scope=\"col\"><button class=\"btn btn-sm\" type=\"button\">Updated <span class=\"bsx-sort-icon\" aria-hidden=\"true\">↕</span></button></th></tr></thead>\n    <tbody data-bsx-table-body>\n      <tr><th scope=\"row\">Example row</th><td><span class=\"badge text-bg-success\">Ready</span></td><td>Now</td></tr>\n    </tbody>\n  </table>\n  <button type=\"button\" class=\"btn btn-sm btn-primary\" data-bsx-action=\"table-row\">Change row</button>\n</div>"
  },
  {
    "name": "table-row-remove",
    "level": "core",
    "category": "table/list",
    "directory": "table",
    "className": "bsx-table-row-remove",
    "component": "table",
    "requiresJs": true,
    "runtimeBehavior": "table row mutation",
    "motion": "translate",
    "kind": "component-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "row state and collection changes",
    "avoidFor": "large simultaneous batches",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/table/table-row-remove.html",
    "snippet": "<!-- Requires Bootstrap bundle and assets/js/bootstrap5-transitions.js. -->\n<div class=\"table-responsive bsx-table-row-remove\">\n  <table class=\"table table-hover align-middle\">\n    <thead><tr><th scope=\"col\">Item</th><th scope=\"col\">Status</th><th scope=\"col\"><button class=\"btn btn-sm\" type=\"button\">Updated <span class=\"bsx-sort-icon\" aria-hidden=\"true\">↕</span></button></th></tr></thead>\n    <tbody data-bsx-table-body>\n      <tr><th scope=\"row\">Example row</th><td><span class=\"badge text-bg-success\">Ready</span></td><td>Now</td></tr>\n    </tbody>\n  </table>\n  <button type=\"button\" class=\"btn btn-sm btn-primary\" data-bsx-action=\"table-row\">Change row</button>\n</div>"
  },
  {
    "name": "table-row-update-flash",
    "level": "core",
    "category": "table/list",
    "directory": "table",
    "className": "bsx-table-row-update-flash",
    "component": "table",
    "requiresJs": true,
    "runtimeBehavior": "table row mutation",
    "motion": "opacity",
    "kind": "component-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "row state and collection changes",
    "avoidFor": "large simultaneous batches",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/table/table-row-update-flash.html",
    "snippet": "<!-- Requires Bootstrap bundle and assets/js/bootstrap5-transitions.js. -->\n<div class=\"table-responsive bsx-table-row-update-flash\">\n  <table class=\"table table-hover align-middle\">\n    <thead><tr><th scope=\"col\">Item</th><th scope=\"col\">Status</th><th scope=\"col\"><button class=\"btn btn-sm\" type=\"button\">Updated <span class=\"bsx-sort-icon\" aria-hidden=\"true\">↕</span></button></th></tr></thead>\n    <tbody data-bsx-table-body>\n      <tr><th scope=\"row\">Example row</th><td><span class=\"badge text-bg-success\">Ready</span></td><td>Now</td></tr>\n    </tbody>\n  </table>\n  <button type=\"button\" class=\"btn btn-sm btn-primary\" data-bsx-action=\"table-row\">Change row</button>\n</div>"
  },
  {
    "name": "list-item-stagger",
    "level": "core",
    "category": "table/list",
    "directory": "list",
    "className": "bsx-list-item-stagger",
    "component": "list",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "row state and collection changes",
    "avoidFor": "large simultaneous batches",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/list/list-item-stagger.html",
    "snippet": "<div class=\"bsx-list-item-stagger\">\n  <div class=\"list-group\">\n  <a href=\"#\" class=\"list-group-item list-group-item-action active\" aria-current=\"true\">Active item</a>\n  <a href=\"#\" class=\"list-group-item list-group-item-action\">Second item</a>\n  <a href=\"#\" class=\"list-group-item list-group-item-action\">Third item</a>\n  </div>\n  \n</div>"
  },
  {
    "name": "list-group-active-marker",
    "level": "core",
    "category": "table/list",
    "directory": "list",
    "className": "bsx-list-group-active-marker",
    "component": "list",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "transform",
      "box-shadow",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "row state and collection changes",
    "avoidFor": "large simultaneous batches",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/list/list-group-active-marker.html",
    "snippet": "<div class=\"bsx-list-group-active-marker\">\n  <div class=\"list-group\">\n  <a href=\"#\" class=\"list-group-item list-group-item-action active\" aria-current=\"true\">Active item</a>\n  <a href=\"#\" class=\"list-group-item list-group-item-action\">Second item</a>\n  <a href=\"#\" class=\"list-group-item list-group-item-action\">Third item</a>\n  </div>\n  \n</div>"
  },
  {
    "name": "skeleton-shimmer",
    "level": "core",
    "category": "skeleton/loading",
    "directory": "skeleton",
    "className": "bsx-skeleton-shimmer",
    "component": "skeleton",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "loading-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      "[aria-busy]",
      ".bsx-is-loading"
    ],
    "bestFor": "short loading states",
    "avoidFor": "unknown or very long waits without status",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/skeleton/skeleton-shimmer.html",
    "snippet": "<div class=\"bsx-skeleton-shimmer\" aria-hidden=\"true\">\n  <div class=\"bsx-skeleton-block rounded mb-2\"></div>\n  <div class=\"bsx-skeleton-line rounded mb-2\"></div>\n  <div class=\"bsx-skeleton-line rounded w-75\"></div>\n</div>\n<span class=\"visually-hidden\" role=\"status\">Loading content</span>"
  },
  {
    "name": "skeleton-pulse",
    "level": "core",
    "category": "skeleton/loading",
    "directory": "skeleton",
    "className": "bsx-skeleton-pulse",
    "component": "skeleton",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale + opacity",
    "kind": "loading-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      "[aria-busy]",
      ".bsx-is-loading"
    ],
    "bestFor": "short loading states",
    "avoidFor": "unknown or very long waits without status",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/skeleton/skeleton-pulse.html",
    "snippet": "<div class=\"bsx-skeleton-pulse\" aria-hidden=\"true\">\n  <div class=\"bsx-skeleton-block rounded mb-2\"></div>\n  <div class=\"bsx-skeleton-line rounded mb-2\"></div>\n  <div class=\"bsx-skeleton-line rounded w-75\"></div>\n</div>\n<span class=\"visually-hidden\" role=\"status\">Loading content</span>"
  },
  {
    "name": "skeleton-card",
    "level": "core",
    "category": "skeleton/loading",
    "directory": "skeleton",
    "className": "bsx-skeleton-card",
    "component": "skeleton",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "loading-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      "[aria-busy]",
      ".bsx-is-loading"
    ],
    "bestFor": "short loading states",
    "avoidFor": "unknown or very long waits without status",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/skeleton/skeleton-card.html",
    "snippet": "<div class=\"bsx-skeleton-card\" aria-hidden=\"true\">\n  <div class=\"bsx-skeleton-block rounded mb-2\"></div>\n  <div class=\"bsx-skeleton-line rounded mb-2\"></div>\n  <div class=\"bsx-skeleton-line rounded w-75\"></div>\n</div>\n<span class=\"visually-hidden\" role=\"status\">Loading content</span>"
  },
  {
    "name": "skeleton-table",
    "level": "core",
    "category": "skeleton/loading",
    "directory": "skeleton",
    "className": "bsx-skeleton-table",
    "component": "skeleton",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "loading-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      "[aria-busy]",
      ".bsx-is-loading"
    ],
    "bestFor": "short loading states",
    "avoidFor": "unknown or very long waits without status",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/skeleton/skeleton-table.html",
    "snippet": "<div class=\"bsx-skeleton-table\" aria-hidden=\"true\">\n  <div class=\"bsx-skeleton-block rounded mb-2\"></div>\n  <div class=\"bsx-skeleton-line rounded mb-2\"></div>\n  <div class=\"bsx-skeleton-line rounded w-75\"></div>\n</div>\n<span class=\"visually-hidden\" role=\"status\">Loading content</span>"
  },
  {
    "name": "loader-dots",
    "level": "core",
    "category": "skeleton/loading",
    "directory": "loading",
    "className": "bsx-loader-dots",
    "component": "loading state",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "loading-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "short loading states",
    "avoidFor": "unknown or very long waits without status",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/core/loading/loader-dots.html",
    "snippet": "<div class=\"bsx-loader-dots\" role=\"status\" aria-live=\"polite\">\n  <span class=\"bsx-loader-dot\"></span>\n  <span class=\"bsx-loader-dot\"></span>\n  <span class=\"bsx-loader-dot\"></span>\n  <span class=\"visually-hidden\">Loading</span>\n</div>"
  },
  {
    "name": "page-loading-fade",
    "level": "core",
    "category": "skeleton/loading",
    "directory": "loading",
    "className": "bsx-page-loading-fade",
    "component": "loading state",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "loading-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      "[aria-busy]",
      ".bsx-is-loading"
    ],
    "bestFor": "short loading states",
    "avoidFor": "unknown or very long waits without status",
    "reducedMotion": "near-instant opacity or color state",
    "snippetPath": "snippets/core/loading/page-loading-fade.html",
    "snippet": "<div class=\"bsx-page-loading-fade\" role=\"status\" aria-live=\"polite\">\n  <span class=\"bsx-loader-dot\"></span>\n  <span class=\"bsx-loader-dot\"></span>\n  <span class=\"bsx-loader-dot\"></span>\n  <span class=\"visually-hidden\">Loading</span>\n</div>"
  },
  {
    "name": "modal-scale-sm",
    "level": "extended",
    "category": "modal",
    "directory": "modal",
    "className": "bsx-modal-scale-sm",
    "component": "modal",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "dialogs and confirmations",
    "avoidFor": "dense repeated workflows",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/modal/modal-scale-sm.html",
    "snippet": "<button type=\"button\" class=\"btn btn-primary bsx-button-press\" data-bs-toggle=\"modal\" data-bs-target=\"#bsxModalScaleSm\">\n  Open Modal Scale Sm\n</button>\n\n<div class=\"modal fade bsx-modal-scale-sm\" id=\"bsxModalScaleSm\" tabindex=\"-1\" aria-labelledby=\"bsxModalScaleSmLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h2 class=\"modal-title fs-5\" id=\"bsxModalScaleSmLabel\">Modal Scale Sm</h2>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body\">Bootstrap 5 modal transition.</div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\">Continue</button>\n      </div>\n    </div>\n  </div>\n</div>"
  },
  {
    "name": "modal-scale-lg",
    "level": "extended",
    "category": "modal",
    "directory": "modal",
    "className": "bsx-modal-scale-lg",
    "component": "modal",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "dialogs and confirmations",
    "avoidFor": "dense repeated workflows",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/modal/modal-scale-lg.html",
    "snippet": "<button type=\"button\" class=\"btn btn-primary bsx-button-press\" data-bs-toggle=\"modal\" data-bs-target=\"#bsxModalScaleLg\">\n  Open Modal Scale Lg\n</button>\n\n<div class=\"modal fade bsx-modal-scale-lg\" id=\"bsxModalScaleLg\" tabindex=\"-1\" aria-labelledby=\"bsxModalScaleLgLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h2 class=\"modal-title fs-5\" id=\"bsxModalScaleLgLabel\">Modal Scale Lg</h2>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body\">Bootstrap 5 modal transition.</div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\">Continue</button>\n      </div>\n    </div>\n  </div>\n</div>"
  },
  {
    "name": "modal-slide-down",
    "level": "extended",
    "category": "modal",
    "directory": "modal",
    "className": "bsx-modal-slide-down",
    "component": "modal",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "dialogs and confirmations",
    "avoidFor": "dense repeated workflows",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/modal/modal-slide-down.html",
    "snippet": "<button type=\"button\" class=\"btn btn-primary bsx-button-press\" data-bs-toggle=\"modal\" data-bs-target=\"#bsxModalSlideDown\">\n  Open Modal Slide Down\n</button>\n\n<div class=\"modal fade bsx-modal-slide-down\" id=\"bsxModalSlideDown\" tabindex=\"-1\" aria-labelledby=\"bsxModalSlideDownLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h2 class=\"modal-title fs-5\" id=\"bsxModalSlideDownLabel\">Modal Slide Down</h2>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body\">Bootstrap 5 modal transition.</div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\">Continue</button>\n      </div>\n    </div>\n  </div>\n</div>"
  },
  {
    "name": "modal-slide-left",
    "level": "extended",
    "category": "modal",
    "directory": "modal",
    "className": "bsx-modal-slide-left",
    "component": "modal",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "dialogs and confirmations",
    "avoidFor": "dense repeated workflows",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/modal/modal-slide-left.html",
    "snippet": "<button type=\"button\" class=\"btn btn-primary bsx-button-press\" data-bs-toggle=\"modal\" data-bs-target=\"#bsxModalSlideLeft\">\n  Open Modal Slide Left\n</button>\n\n<div class=\"modal fade bsx-modal-slide-left\" id=\"bsxModalSlideLeft\" tabindex=\"-1\" aria-labelledby=\"bsxModalSlideLeftLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h2 class=\"modal-title fs-5\" id=\"bsxModalSlideLeftLabel\">Modal Slide Left</h2>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body\">Bootstrap 5 modal transition.</div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\">Continue</button>\n      </div>\n    </div>\n  </div>\n</div>"
  },
  {
    "name": "modal-slide-right",
    "level": "extended",
    "category": "modal",
    "directory": "modal",
    "className": "bsx-modal-slide-right",
    "component": "modal",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "dialogs and confirmations",
    "avoidFor": "dense repeated workflows",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/modal/modal-slide-right.html",
    "snippet": "<button type=\"button\" class=\"btn btn-primary bsx-button-press\" data-bs-toggle=\"modal\" data-bs-target=\"#bsxModalSlideRight\">\n  Open Modal Slide Right\n</button>\n\n<div class=\"modal fade bsx-modal-slide-right\" id=\"bsxModalSlideRight\" tabindex=\"-1\" aria-labelledby=\"bsxModalSlideRightLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h2 class=\"modal-title fs-5\" id=\"bsxModalSlideRightLabel\">Modal Slide Right</h2>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body\">Bootstrap 5 modal transition.</div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\">Continue</button>\n      </div>\n    </div>\n  </div>\n</div>"
  },
  {
    "name": "modal-fade-soft",
    "level": "extended",
    "category": "modal",
    "directory": "modal",
    "className": "bsx-modal-fade-soft",
    "component": "modal",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "dialogs and confirmations",
    "avoidFor": "dense repeated workflows",
    "reducedMotion": "near-instant opacity or color state",
    "snippetPath": "snippets/extended/modal/modal-fade-soft.html",
    "snippet": "<button type=\"button\" class=\"btn btn-primary bsx-button-press\" data-bs-toggle=\"modal\" data-bs-target=\"#bsxModalFadeSoft\">\n  Open Modal Fade Soft\n</button>\n\n<div class=\"modal fade bsx-modal-fade-soft\" id=\"bsxModalFadeSoft\" tabindex=\"-1\" aria-labelledby=\"bsxModalFadeSoftLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h2 class=\"modal-title fs-5\" id=\"bsxModalFadeSoftLabel\">Modal Fade Soft</h2>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body\">Bootstrap 5 modal transition.</div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\">Continue</button>\n      </div>\n    </div>\n  </div>\n</div>"
  },
  {
    "name": "modal-zoom-blur",
    "level": "extended",
    "category": "modal",
    "directory": "modal",
    "className": "bsx-modal-zoom-blur",
    "component": "modal",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale + opacity",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform",
      "filter"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "dialogs and confirmations",
    "avoidFor": "dense repeated workflows",
    "reducedMotion": "near-instant opacity or color state",
    "snippetPath": "snippets/extended/modal/modal-zoom-blur.html",
    "snippet": "<button type=\"button\" class=\"btn btn-primary bsx-button-press\" data-bs-toggle=\"modal\" data-bs-target=\"#bsxModalZoomBlur\">\n  Open Modal Zoom Blur\n</button>\n\n<div class=\"modal fade bsx-modal-zoom-blur\" id=\"bsxModalZoomBlur\" tabindex=\"-1\" aria-labelledby=\"bsxModalZoomBlurLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h2 class=\"modal-title fs-5\" id=\"bsxModalZoomBlurLabel\">Modal Zoom Blur</h2>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body\">Bootstrap 5 modal transition.</div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\">Continue</button>\n      </div>\n    </div>\n  </div>\n</div>"
  },
  {
    "name": "modal-fullscreen-soft",
    "level": "extended",
    "category": "modal",
    "directory": "modal",
    "className": "bsx-modal-fullscreen-soft",
    "component": "modal",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "dialogs and confirmations",
    "avoidFor": "dense repeated workflows",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/modal/modal-fullscreen-soft.html",
    "snippet": "<button type=\"button\" class=\"btn btn-primary bsx-button-press\" data-bs-toggle=\"modal\" data-bs-target=\"#bsxModalFullscreenSoft\">\n  Open Modal Fullscreen Soft\n</button>\n\n<div class=\"modal fade bsx-modal-fullscreen-soft\" id=\"bsxModalFullscreenSoft\" tabindex=\"-1\" aria-labelledby=\"bsxModalFullscreenSoftLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered modal-fullscreen\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h2 class=\"modal-title fs-5\" id=\"bsxModalFullscreenSoftLabel\">Modal Fullscreen Soft</h2>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body\">Bootstrap 5 modal transition.</div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\">Continue</button>\n      </div>\n    </div>\n  </div>\n</div>"
  },
  {
    "name": "modal-stack-pop",
    "level": "extended",
    "category": "modal",
    "directory": "modal",
    "className": "bsx-modal-stack-pop",
    "component": "modal",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "dialogs and confirmations",
    "avoidFor": "dense repeated workflows",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/modal/modal-stack-pop.html",
    "snippet": "<button type=\"button\" class=\"btn btn-primary bsx-button-press\" data-bs-toggle=\"modal\" data-bs-target=\"#bsxModalStackPop\">\n  Open Modal Stack Pop\n</button>\n\n<div class=\"modal fade bsx-modal-stack-pop\" id=\"bsxModalStackPop\" tabindex=\"-1\" aria-labelledby=\"bsxModalStackPopLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h2 class=\"modal-title fs-5\" id=\"bsxModalStackPopLabel\">Modal Stack Pop</h2>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body\">Bootstrap 5 modal transition.</div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\">Continue</button>\n      </div>\n    </div>\n  </div>\n</div>"
  },
  {
    "name": "modal-content-stagger",
    "level": "extended",
    "category": "modal",
    "directory": "modal",
    "className": "bsx-modal-content-stagger",
    "component": "modal",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "dialogs and confirmations",
    "avoidFor": "dense repeated workflows",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/modal/modal-content-stagger.html",
    "snippet": "<button type=\"button\" class=\"btn btn-primary bsx-button-press\" data-bs-toggle=\"modal\" data-bs-target=\"#bsxModalContentStagger\">\n  Open Modal Content Stagger\n</button>\n\n<div class=\"modal fade bsx-modal-content-stagger\" id=\"bsxModalContentStagger\" tabindex=\"-1\" aria-labelledby=\"bsxModalContentStaggerLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h2 class=\"modal-title fs-5\" id=\"bsxModalContentStaggerLabel\">Modal Content Stagger</h2>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body\">Bootstrap 5 modal transition.</div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\">Continue</button>\n      </div>\n    </div>\n  </div>\n</div>"
  },
  {
    "name": "dropdown-slide-up",
    "level": "extended",
    "category": "dropdown",
    "directory": "dropdown",
    "className": "bsx-dropdown-slide-up",
    "component": "dropdown",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".dropdown-menu.show"
    ],
    "bestFor": "menus with clear visual hierarchy",
    "avoidFor": "menus requiring instant state changes",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/dropdown/dropdown-slide-up.html",
    "snippet": "<div class=\"dropdown bsx-dropdown-slide-up\">\n  <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n    Dropdown Slide Up\n  </button>\n  <ul class=\"dropdown-menu\">\n    <li><a class=\"dropdown-item\" href=\"#\">Profile</a></li>\n    <li><a class=\"dropdown-item\" href=\"#\">Settings</a></li>\n    <li><hr class=\"dropdown-divider\"></li>\n    <li><a class=\"dropdown-item\" href=\"#\">Sign out</a></li>\n  </ul>\n</div>"
  },
  {
    "name": "dropdown-fade",
    "level": "extended",
    "category": "dropdown",
    "directory": "dropdown",
    "className": "bsx-dropdown-fade",
    "component": "dropdown",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      ".dropdown-menu.show"
    ],
    "bestFor": "menus with clear visual hierarchy",
    "avoidFor": "menus requiring instant state changes",
    "reducedMotion": "near-instant opacity or color state",
    "snippetPath": "snippets/extended/dropdown/dropdown-fade.html",
    "snippet": "<div class=\"dropdown bsx-dropdown-fade\">\n  <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n    Dropdown Fade\n  </button>\n  <ul class=\"dropdown-menu\">\n    <li><a class=\"dropdown-item\" href=\"#\">Profile</a></li>\n    <li><a class=\"dropdown-item\" href=\"#\">Settings</a></li>\n    <li><hr class=\"dropdown-divider\"></li>\n    <li><a class=\"dropdown-item\" href=\"#\">Sign out</a></li>\n  </ul>\n</div>"
  },
  {
    "name": "dropdown-origin-top",
    "level": "extended",
    "category": "dropdown",
    "directory": "dropdown",
    "className": "bsx-dropdown-origin-top",
    "component": "dropdown",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ".dropdown-menu.show"
    ],
    "bestFor": "menus with clear visual hierarchy",
    "avoidFor": "menus requiring instant state changes",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/dropdown/dropdown-origin-top.html",
    "snippet": "<div class=\"dropdown bsx-dropdown-origin-top\">\n  <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n    Dropdown Origin Top\n  </button>\n  <ul class=\"dropdown-menu\">\n    <li><a class=\"dropdown-item\" href=\"#\">Profile</a></li>\n    <li><a class=\"dropdown-item\" href=\"#\">Settings</a></li>\n    <li><hr class=\"dropdown-divider\"></li>\n    <li><a class=\"dropdown-item\" href=\"#\">Sign out</a></li>\n  </ul>\n</div>"
  },
  {
    "name": "dropdown-origin-bottom",
    "level": "extended",
    "category": "dropdown",
    "directory": "dropdown",
    "className": "bsx-dropdown-origin-bottom",
    "component": "dropdown",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ".dropdown-menu.show"
    ],
    "bestFor": "menus with clear visual hierarchy",
    "avoidFor": "menus requiring instant state changes",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/dropdown/dropdown-origin-bottom.html",
    "snippet": "<div class=\"dropdown bsx-dropdown-origin-bottom\">\n  <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n    Dropdown Origin Bottom\n  </button>\n  <ul class=\"dropdown-menu\">\n    <li><a class=\"dropdown-item\" href=\"#\">Profile</a></li>\n    <li><a class=\"dropdown-item\" href=\"#\">Settings</a></li>\n    <li><hr class=\"dropdown-divider\"></li>\n    <li><a class=\"dropdown-item\" href=\"#\">Sign out</a></li>\n  </ul>\n</div>"
  },
  {
    "name": "dropdown-blur",
    "level": "extended",
    "category": "dropdown",
    "directory": "dropdown",
    "className": "bsx-dropdown-blur",
    "component": "dropdown",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "filter"
    ],
    "bootstrapStates": [
      ".dropdown-menu.show"
    ],
    "bestFor": "menus with clear visual hierarchy",
    "avoidFor": "menus requiring instant state changes",
    "reducedMotion": "near-instant opacity or color state",
    "snippetPath": "snippets/extended/dropdown/dropdown-blur.html",
    "snippet": "<div class=\"dropdown bsx-dropdown-blur\">\n  <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n    Dropdown Blur\n  </button>\n  <ul class=\"dropdown-menu\">\n    <li><a class=\"dropdown-item\" href=\"#\">Profile</a></li>\n    <li><a class=\"dropdown-item\" href=\"#\">Settings</a></li>\n    <li><hr class=\"dropdown-divider\"></li>\n    <li><a class=\"dropdown-item\" href=\"#\">Sign out</a></li>\n  </ul>\n</div>"
  },
  {
    "name": "dropdown-item-hover-bg",
    "level": "extended",
    "category": "dropdown",
    "directory": "dropdown",
    "className": "bsx-dropdown-item-hover-bg",
    "component": "dropdown",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ".dropdown-menu.show"
    ],
    "bestFor": "menus with clear visual hierarchy",
    "avoidFor": "menus requiring instant state changes",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/dropdown/dropdown-item-hover-bg.html",
    "snippet": "<div class=\"dropdown bsx-dropdown-item-hover-bg\">\n  <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n    Dropdown Item Hover Bg\n  </button>\n  <ul class=\"dropdown-menu\">\n    <li><a class=\"dropdown-item\" href=\"#\">Profile</a></li>\n    <li><a class=\"dropdown-item\" href=\"#\">Settings</a></li>\n    <li><hr class=\"dropdown-divider\"></li>\n    <li><a class=\"dropdown-item\" href=\"#\">Sign out</a></li>\n  </ul>\n</div>"
  },
  {
    "name": "dropdown-item-active-pop",
    "level": "extended",
    "category": "dropdown",
    "directory": "dropdown",
    "className": "bsx-dropdown-item-active-pop",
    "component": "dropdown",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform",
      "box-shadow",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ".dropdown-menu.show"
    ],
    "bestFor": "menus with clear visual hierarchy",
    "avoidFor": "menus requiring instant state changes",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/dropdown/dropdown-item-active-pop.html",
    "snippet": "<div class=\"dropdown bsx-dropdown-item-active-pop\">\n  <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n    Dropdown Item Active Pop\n  </button>\n  <ul class=\"dropdown-menu\">\n    <li><a class=\"dropdown-item\" href=\"#\">Profile</a></li>\n    <li><a class=\"dropdown-item\" href=\"#\">Settings</a></li>\n    <li><hr class=\"dropdown-divider\"></li>\n    <li><a class=\"dropdown-item\" href=\"#\">Sign out</a></li>\n  </ul>\n</div>"
  },
  {
    "name": "dropdown-user-menu",
    "level": "extended",
    "category": "dropdown",
    "directory": "dropdown",
    "className": "bsx-dropdown-user-menu",
    "component": "dropdown",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ".dropdown-menu.show"
    ],
    "bestFor": "menus with clear visual hierarchy",
    "avoidFor": "menus requiring instant state changes",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/dropdown/dropdown-user-menu.html",
    "snippet": "<div class=\"dropdown bsx-dropdown-user-menu\">\n  <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n    Dropdown User Menu\n  </button>\n  <ul class=\"dropdown-menu\">\n    <li><a class=\"dropdown-item\" href=\"#\">Profile</a></li>\n    <li><a class=\"dropdown-item\" href=\"#\">Settings</a></li>\n    <li><hr class=\"dropdown-divider\"></li>\n    <li><a class=\"dropdown-item\" href=\"#\">Sign out</a></li>\n  </ul>\n</div>"
  },
  {
    "name": "offcanvas-slide-fast",
    "level": "extended",
    "category": "offcanvas",
    "directory": "offcanvas",
    "className": "bsx-offcanvas-slide-fast",
    "component": "offcanvas",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "navigation and mobile panels",
    "avoidFor": "permanent desktop navigation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/offcanvas/offcanvas-slide-fast.html",
    "snippet": "<button class=\"btn btn-primary\" type=\"button\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#bsxOffcanvasSlideFast\" aria-controls=\"bsxOffcanvasSlideFast\">\n  Open panel\n</button>\n\n<div class=\"offcanvas offcanvas-start bsx-offcanvas-slide-fast\" tabindex=\"-1\" id=\"bsxOffcanvasSlideFast\" aria-labelledby=\"bsxOffcanvasSlideFastLabel\">\n  <div class=\"offcanvas-header\">\n    <h2 class=\"offcanvas-title fs-5\" id=\"bsxOffcanvasSlideFastLabel\">Offcanvas Slide Fast</h2>\n    <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"offcanvas\" aria-label=\"Close\"></button>\n  </div>\n  <div class=\"offcanvas-body\">\n    <nav class=\"nav flex-column\" aria-label=\"Demo navigation\">\n      <a class=\"nav-link active\" href=\"#\" aria-current=\"page\">Dashboard</a>\n      <a class=\"nav-link\" href=\"#\">Orders</a>\n      <a class=\"nav-link\" href=\"#\">Settings</a>\n    </nav>\n  </div>\n</div>"
  },
  {
    "name": "offcanvas-slide-slow",
    "level": "extended",
    "category": "offcanvas",
    "directory": "offcanvas",
    "className": "bsx-offcanvas-slide-slow",
    "component": "offcanvas",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "navigation and mobile panels",
    "avoidFor": "permanent desktop navigation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/offcanvas/offcanvas-slide-slow.html",
    "snippet": "<button class=\"btn btn-primary\" type=\"button\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#bsxOffcanvasSlideSlow\" aria-controls=\"bsxOffcanvasSlideSlow\">\n  Open panel\n</button>\n\n<div class=\"offcanvas offcanvas-start bsx-offcanvas-slide-slow\" tabindex=\"-1\" id=\"bsxOffcanvasSlideSlow\" aria-labelledby=\"bsxOffcanvasSlideSlowLabel\">\n  <div class=\"offcanvas-header\">\n    <h2 class=\"offcanvas-title fs-5\" id=\"bsxOffcanvasSlideSlowLabel\">Offcanvas Slide Slow</h2>\n    <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"offcanvas\" aria-label=\"Close\"></button>\n  </div>\n  <div class=\"offcanvas-body\">\n    <nav class=\"nav flex-column\" aria-label=\"Demo navigation\">\n      <a class=\"nav-link active\" href=\"#\" aria-current=\"page\">Dashboard</a>\n      <a class=\"nav-link\" href=\"#\">Orders</a>\n      <a class=\"nav-link\" href=\"#\">Settings</a>\n    </nav>\n  </div>\n</div>"
  },
  {
    "name": "offcanvas-left-soft",
    "level": "extended",
    "category": "offcanvas",
    "directory": "offcanvas",
    "className": "bsx-offcanvas-left-soft",
    "component": "offcanvas",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "navigation and mobile panels",
    "avoidFor": "permanent desktop navigation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/offcanvas/offcanvas-left-soft.html",
    "snippet": "<button class=\"btn btn-primary\" type=\"button\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#bsxOffcanvasLeftSoft\" aria-controls=\"bsxOffcanvasLeftSoft\">\n  Open panel\n</button>\n\n<div class=\"offcanvas offcanvas-start bsx-offcanvas-left-soft\" tabindex=\"-1\" id=\"bsxOffcanvasLeftSoft\" aria-labelledby=\"bsxOffcanvasLeftSoftLabel\">\n  <div class=\"offcanvas-header\">\n    <h2 class=\"offcanvas-title fs-5\" id=\"bsxOffcanvasLeftSoftLabel\">Offcanvas Left Soft</h2>\n    <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"offcanvas\" aria-label=\"Close\"></button>\n  </div>\n  <div class=\"offcanvas-body\">\n    <nav class=\"nav flex-column\" aria-label=\"Demo navigation\">\n      <a class=\"nav-link active\" href=\"#\" aria-current=\"page\">Dashboard</a>\n      <a class=\"nav-link\" href=\"#\">Orders</a>\n      <a class=\"nav-link\" href=\"#\">Settings</a>\n    </nav>\n  </div>\n</div>"
  },
  {
    "name": "offcanvas-right-soft",
    "level": "extended",
    "category": "offcanvas",
    "directory": "offcanvas",
    "className": "bsx-offcanvas-right-soft",
    "component": "offcanvas",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "navigation and mobile panels",
    "avoidFor": "permanent desktop navigation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/offcanvas/offcanvas-right-soft.html",
    "snippet": "<button class=\"btn btn-primary\" type=\"button\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#bsxOffcanvasRightSoft\" aria-controls=\"bsxOffcanvasRightSoft\">\n  Open panel\n</button>\n\n<div class=\"offcanvas offcanvas-start bsx-offcanvas-right-soft\" tabindex=\"-1\" id=\"bsxOffcanvasRightSoft\" aria-labelledby=\"bsxOffcanvasRightSoftLabel\">\n  <div class=\"offcanvas-header\">\n    <h2 class=\"offcanvas-title fs-5\" id=\"bsxOffcanvasRightSoftLabel\">Offcanvas Right Soft</h2>\n    <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"offcanvas\" aria-label=\"Close\"></button>\n  </div>\n  <div class=\"offcanvas-body\">\n    <nav class=\"nav flex-column\" aria-label=\"Demo navigation\">\n      <a class=\"nav-link active\" href=\"#\" aria-current=\"page\">Dashboard</a>\n      <a class=\"nav-link\" href=\"#\">Orders</a>\n      <a class=\"nav-link\" href=\"#\">Settings</a>\n    </nav>\n  </div>\n</div>"
  },
  {
    "name": "offcanvas-bottom-sheet",
    "level": "extended",
    "category": "offcanvas",
    "directory": "offcanvas",
    "className": "bsx-offcanvas-bottom-sheet",
    "component": "offcanvas",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "navigation and mobile panels",
    "avoidFor": "permanent desktop navigation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/offcanvas/offcanvas-bottom-sheet.html",
    "snippet": "<button class=\"btn btn-primary\" type=\"button\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#bsxOffcanvasBottomSheet\" aria-controls=\"bsxOffcanvasBottomSheet\">\n  Open panel\n</button>\n\n<div class=\"offcanvas offcanvas-start bsx-offcanvas-bottom-sheet\" tabindex=\"-1\" id=\"bsxOffcanvasBottomSheet\" aria-labelledby=\"bsxOffcanvasBottomSheetLabel\">\n  <div class=\"offcanvas-header\">\n    <h2 class=\"offcanvas-title fs-5\" id=\"bsxOffcanvasBottomSheetLabel\">Offcanvas Bottom Sheet</h2>\n    <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"offcanvas\" aria-label=\"Close\"></button>\n  </div>\n  <div class=\"offcanvas-body\">\n    <nav class=\"nav flex-column\" aria-label=\"Demo navigation\">\n      <a class=\"nav-link active\" href=\"#\" aria-current=\"page\">Dashboard</a>\n      <a class=\"nav-link\" href=\"#\">Orders</a>\n      <a class=\"nav-link\" href=\"#\">Settings</a>\n    </nav>\n  </div>\n</div>"
  },
  {
    "name": "offcanvas-header-reveal",
    "level": "extended",
    "category": "offcanvas",
    "directory": "offcanvas",
    "className": "bsx-offcanvas-header-reveal",
    "component": "offcanvas",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "navigation and mobile panels",
    "avoidFor": "permanent desktop navigation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/offcanvas/offcanvas-header-reveal.html",
    "snippet": "<button class=\"btn btn-primary\" type=\"button\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#bsxOffcanvasHeaderReveal\" aria-controls=\"bsxOffcanvasHeaderReveal\">\n  Open panel\n</button>\n\n<div class=\"offcanvas offcanvas-start bsx-offcanvas-header-reveal\" tabindex=\"-1\" id=\"bsxOffcanvasHeaderReveal\" aria-labelledby=\"bsxOffcanvasHeaderRevealLabel\">\n  <div class=\"offcanvas-header\">\n    <h2 class=\"offcanvas-title fs-5\" id=\"bsxOffcanvasHeaderRevealLabel\">Offcanvas Header Reveal</h2>\n    <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"offcanvas\" aria-label=\"Close\"></button>\n  </div>\n  <div class=\"offcanvas-body\">\n    <nav class=\"nav flex-column\" aria-label=\"Demo navigation\">\n      <a class=\"nav-link active\" href=\"#\" aria-current=\"page\">Dashboard</a>\n      <a class=\"nav-link\" href=\"#\">Orders</a>\n      <a class=\"nav-link\" href=\"#\">Settings</a>\n    </nav>\n  </div>\n</div>"
  },
  {
    "name": "toast-slide-left",
    "level": "extended",
    "category": "toast",
    "directory": "toast",
    "className": "bsx-toast-slide-left",
    "component": "toast",
    "requiresJs": true,
    "runtimeBehavior": "toast trigger",
    "motion": "translate",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "brief asynchronous feedback",
    "avoidFor": "critical information requiring confirmation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/toast/toast-slide-left.html",
    "snippet": "<!-- Requires Bootstrap bundle and assets/js/bootstrap5-transitions.js. -->\n<button type=\"button\" class=\"btn btn-primary\" data-bsx-action=\"show-toast\" data-bsx-target=\"#bsxToastSlideLeft\">\n  Show toast\n</button>\n\n<div class=\"toast-container position-fixed top-0 end-0 p-3\" aria-live=\"polite\" aria-atomic=\"true\">\n  <div class=\"toast bsx-toast-slide-left\" id=\"bsxToastSlideLeft\" role=\"status\" aria-live=\"polite\" aria-atomic=\"true\">\n    <div class=\"toast-header\">\n      <strong class=\"me-auto\">Toast Slide Left</strong>\n      <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\n    </div>\n    <div class=\"toast-body\">The operation completed successfully.</div>\n  </div>\n</div>"
  },
  {
    "name": "toast-slide-top",
    "level": "extended",
    "category": "toast",
    "directory": "toast",
    "className": "bsx-toast-slide-top",
    "component": "toast",
    "requiresJs": true,
    "runtimeBehavior": "toast trigger",
    "motion": "translate",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "brief asynchronous feedback",
    "avoidFor": "critical information requiring confirmation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/toast/toast-slide-top.html",
    "snippet": "<!-- Requires Bootstrap bundle and assets/js/bootstrap5-transitions.js. -->\n<button type=\"button\" class=\"btn btn-primary\" data-bsx-action=\"show-toast\" data-bsx-target=\"#bsxToastSlideTop\">\n  Show toast\n</button>\n\n<div class=\"toast-container position-fixed top-0 end-0 p-3\" aria-live=\"polite\" aria-atomic=\"true\">\n  <div class=\"toast bsx-toast-slide-top\" id=\"bsxToastSlideTop\" role=\"status\" aria-live=\"polite\" aria-atomic=\"true\">\n    <div class=\"toast-header\">\n      <strong class=\"me-auto\">Toast Slide Top</strong>\n      <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\n    </div>\n    <div class=\"toast-body\">The operation completed successfully.</div>\n  </div>\n</div>"
  },
  {
    "name": "toast-slide-bottom",
    "level": "extended",
    "category": "toast",
    "directory": "toast",
    "className": "bsx-toast-slide-bottom",
    "component": "toast",
    "requiresJs": true,
    "runtimeBehavior": "toast trigger",
    "motion": "translate",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "brief asynchronous feedback",
    "avoidFor": "critical information requiring confirmation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/toast/toast-slide-bottom.html",
    "snippet": "<!-- Requires Bootstrap bundle and assets/js/bootstrap5-transitions.js. -->\n<button type=\"button\" class=\"btn btn-primary\" data-bsx-action=\"show-toast\" data-bsx-target=\"#bsxToastSlideBottom\">\n  Show toast\n</button>\n\n<div class=\"toast-container position-fixed top-0 end-0 p-3\" aria-live=\"polite\" aria-atomic=\"true\">\n  <div class=\"toast bsx-toast-slide-bottom\" id=\"bsxToastSlideBottom\" role=\"status\" aria-live=\"polite\" aria-atomic=\"true\">\n    <div class=\"toast-header\">\n      <strong class=\"me-auto\">Toast Slide Bottom</strong>\n      <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\n    </div>\n    <div class=\"toast-body\">The operation completed successfully.</div>\n  </div>\n</div>"
  },
  {
    "name": "toast-warning-pulse",
    "level": "extended",
    "category": "toast",
    "directory": "toast",
    "className": "bsx-toast-warning-pulse",
    "component": "toast",
    "requiresJs": true,
    "runtimeBehavior": "toast trigger",
    "motion": "scale",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "brief asynchronous feedback",
    "avoidFor": "critical information requiring confirmation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/toast/toast-warning-pulse.html",
    "snippet": "<!-- Requires Bootstrap bundle and assets/js/bootstrap5-transitions.js. -->\n<button type=\"button\" class=\"btn btn-primary\" data-bsx-action=\"show-toast\" data-bsx-target=\"#bsxToastWarningPulse\">\n  Show toast\n</button>\n\n<div class=\"toast-container position-fixed top-0 end-0 p-3\" aria-live=\"polite\" aria-atomic=\"true\">\n  <div class=\"toast bsx-toast-warning-pulse\" id=\"bsxToastWarningPulse\" role=\"status\" aria-live=\"polite\" aria-atomic=\"true\">\n    <div class=\"toast-header\">\n      <strong class=\"me-auto\">Toast Warning Pulse</strong>\n      <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\n    </div>\n    <div class=\"toast-body\">The operation completed successfully.</div>\n  </div>\n</div>"
  },
  {
    "name": "toast-auto-hide-bar",
    "level": "extended",
    "category": "toast",
    "directory": "toast",
    "className": "bsx-toast-auto-hide-bar",
    "component": "toast",
    "requiresJs": true,
    "runtimeBehavior": "toast trigger",
    "motion": "color + opacity",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "brief asynchronous feedback",
    "avoidFor": "critical information requiring confirmation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/toast/toast-auto-hide-bar.html",
    "snippet": "<!-- Requires Bootstrap bundle and assets/js/bootstrap5-transitions.js. -->\n<button type=\"button\" class=\"btn btn-primary\" data-bsx-action=\"show-toast\" data-bsx-target=\"#bsxToastAutoHideBar\">\n  Show toast\n</button>\n\n<div class=\"toast-container position-fixed top-0 end-0 p-3\" aria-live=\"polite\" aria-atomic=\"true\">\n  <div class=\"toast bsx-toast-auto-hide-bar\" id=\"bsxToastAutoHideBar\" role=\"status\" aria-live=\"polite\" aria-atomic=\"true\">\n    <div class=\"toast-header\">\n      <strong class=\"me-auto\">Toast Auto Hide Bar</strong>\n      <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\n    </div>\n    <div class=\"toast-body\">The operation completed successfully.</div>\n  </div>\n</div>"
  },
  {
    "name": "toast-icon-bounce",
    "level": "extended",
    "category": "toast",
    "directory": "toast",
    "className": "bsx-toast-icon-bounce",
    "component": "toast",
    "requiresJs": true,
    "runtimeBehavior": "toast trigger",
    "motion": "scale",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".show"
    ],
    "bestFor": "brief asynchronous feedback",
    "avoidFor": "critical information requiring confirmation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/toast/toast-icon-bounce.html",
    "snippet": "<!-- Requires Bootstrap bundle and assets/js/bootstrap5-transitions.js. -->\n<button type=\"button\" class=\"btn btn-primary\" data-bsx-action=\"show-toast\" data-bsx-target=\"#bsxToastIconBounce\">\n  Show toast\n</button>\n\n<div class=\"toast-container position-fixed top-0 end-0 p-3\" aria-live=\"polite\" aria-atomic=\"true\">\n  <div class=\"toast bsx-toast-icon-bounce\" id=\"bsxToastIconBounce\" role=\"status\" aria-live=\"polite\" aria-atomic=\"true\">\n    <div class=\"toast-header\">\n      <strong class=\"me-auto\">Toast Icon Bounce</strong>\n      <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\n    </div>\n    <div class=\"toast-body\">The operation completed successfully.</div>\n  </div>\n</div>"
  },
  {
    "name": "alert-slide-up",
    "level": "extended",
    "category": "alert",
    "directory": "alert",
    "className": "bsx-alert-slide-up",
    "component": "alert",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "inline feedback and validation summaries",
    "avoidFor": "decorative content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/alert/alert-slide-up.html",
    "snippet": "<div class=\"alert alert-primary  bsx-alert-slide-up\" role=\"alert\">\n  <strong>Alert Slide Up.</strong> Review this contextual message.\n  \n</div>"
  },
  {
    "name": "alert-fade-soft",
    "level": "extended",
    "category": "alert",
    "directory": "alert",
    "className": "bsx-alert-fade-soft",
    "component": "alert",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "inline feedback and validation summaries",
    "avoidFor": "decorative content",
    "reducedMotion": "near-instant opacity or color state",
    "snippetPath": "snippets/extended/alert/alert-fade-soft.html",
    "snippet": "<div class=\"alert alert-primary  bsx-alert-fade-soft\" role=\"alert\">\n  <strong>Alert Fade Soft.</strong> Review this contextual message.\n  \n</div>"
  },
  {
    "name": "alert-danger-flash",
    "level": "extended",
    "category": "alert",
    "directory": "alert",
    "className": "bsx-alert-danger-flash",
    "component": "alert",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "medium",
    "cssProperties": [
      "opacity",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "inline feedback and validation summaries",
    "avoidFor": "decorative content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/alert/alert-danger-flash.html",
    "snippet": "<div class=\"alert alert-primary  bsx-alert-danger-flash\" role=\"alert\">\n  <strong>Alert Danger Flash.</strong> Review this contextual message.\n  \n</div>"
  },
  {
    "name": "alert-warning-attention",
    "level": "extended",
    "category": "alert",
    "directory": "alert",
    "className": "bsx-alert-warning-attention",
    "component": "alert",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "shake",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "inline feedback and validation summaries",
    "avoidFor": "decorative content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/alert/alert-warning-attention.html",
    "snippet": "<div class=\"alert alert-primary  bsx-alert-warning-attention\" role=\"alert\">\n  <strong>Alert Warning Attention.</strong> Review this contextual message.\n  \n</div>"
  },
  {
    "name": "button-hover-slide-bg",
    "level": "extended",
    "category": "button",
    "directory": "button",
    "className": "bsx-button-hover-slide-bg",
    "component": "button",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "direct interaction feedback",
    "avoidFor": "large continuously animated areas",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/button/button-hover-slide-bg.html",
    "snippet": "<button type=\"button\" class=\"btn btn-primary bsx-button-hover-slide-bg\">\n  <span class=\"bsx-icon\" aria-hidden=\"true\">→</span>\n  <span class=\"bsx-button-label\">Button Hover Slide Bg</span>\n  <span class=\"visually-hidden bsx-button-status\" aria-live=\"polite\"></span>\n</button>"
  },
  {
    "name": "button-success-check",
    "level": "extended",
    "category": "button",
    "directory": "button",
    "className": "bsx-button-success-check",
    "component": "button",
    "requiresJs": true,
    "runtimeBehavior": "button loading and success state",
    "motion": "color + opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ".bsx-is-success"
    ],
    "bestFor": "direct interaction feedback",
    "avoidFor": "large continuously animated areas",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/button/button-success-check.html",
    "snippet": "<!-- Requires Bootstrap bundle and assets/js/bootstrap5-transitions.js. -->\n<button type=\"button\" class=\"btn btn-primary bsx-button-success-check\" data-bsx-action=\"button-state\">\n  <span class=\"bsx-icon\" aria-hidden=\"true\">→</span>\n  <span class=\"bsx-button-label\">Button Success Check</span>\n  <span class=\"visually-hidden bsx-button-status\" aria-live=\"polite\"></span>\n</button>"
  },
  {
    "name": "button-danger-pulse",
    "level": "extended",
    "category": "button",
    "directory": "button",
    "className": "bsx-button-danger-pulse",
    "component": "button",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale",
    "kind": "component-state",
    "density": "medium",
    "risk": "medium",
    "cssProperties": [
      "transform",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "direct interaction feedback",
    "avoidFor": "large continuously animated areas",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/button/button-danger-pulse.html",
    "snippet": "<button type=\"button\" class=\"btn btn-danger bsx-button-danger-pulse\">\n  <span class=\"bsx-icon\" aria-hidden=\"true\">→</span>\n  <span class=\"bsx-button-label\">Button Danger Pulse</span>\n  <span class=\"visually-hidden bsx-button-status\" aria-live=\"polite\"></span>\n</button>"
  },
  {
    "name": "button-icon-bounce",
    "level": "extended",
    "category": "button",
    "directory": "button",
    "className": "bsx-button-icon-bounce",
    "component": "button",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "direct interaction feedback",
    "avoidFor": "large continuously animated areas",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/button/button-icon-bounce.html",
    "snippet": "<button type=\"button\" class=\"btn btn-primary bsx-button-icon-bounce\">\n  <span class=\"bsx-icon\" aria-hidden=\"true\">→</span>\n  <span class=\"bsx-button-label\">Button Icon Bounce</span>\n  <span class=\"visually-hidden bsx-button-status\" aria-live=\"polite\"></span>\n</button>"
  },
  {
    "name": "button-group-active-slide",
    "level": "extended",
    "category": "button",
    "directory": "button-group",
    "className": "bsx-button-group-active-slide",
    "component": "button-group",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform",
      "box-shadow",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ".active",
      "[aria-current]"
    ],
    "bestFor": "direct interaction feedback",
    "avoidFor": "large continuously animated areas",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/button-group/button-group-active-slide.html",
    "snippet": "<div class=\"btn-group bsx-button-group-active-slide\" role=\"group\" aria-label=\"Button Group Active Slide\">\n  <button type=\"button\" class=\"btn btn-outline-secondary\">List</button>\n  <button type=\"button\" class=\"btn btn-outline-secondary active\" aria-pressed=\"true\">Table</button>\n  <button type=\"button\" class=\"btn btn-outline-secondary\">Kanban</button>\n</div>"
  },
  {
    "name": "button-disabled-soft",
    "level": "extended",
    "category": "button",
    "directory": "button",
    "className": "bsx-button-disabled-soft",
    "component": "button",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ".disabled",
      "[disabled]",
      "[aria-disabled]"
    ],
    "bestFor": "direct interaction feedback",
    "avoidFor": "large continuously animated areas",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/button/button-disabled-soft.html",
    "snippet": "<button type=\"button\" class=\"btn btn-primary bsx-button-disabled-soft\" disabled aria-disabled=\"true\">\n  <span class=\"bsx-icon\" aria-hidden=\"true\">→</span>\n  <span class=\"bsx-button-label\">Button Disabled Soft</span>\n  <span class=\"visually-hidden bsx-button-status\" aria-live=\"polite\"></span>\n</button>"
  },
  {
    "name": "form-focus-glow",
    "level": "extended",
    "category": "form",
    "directory": "form",
    "className": "bsx-form-focus-glow",
    "component": "form",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "form-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "box-shadow"
    ],
    "bootstrapStates": [
      ".is-valid",
      ".is-invalid",
      ":focus-within"
    ],
    "bestFor": "focus and validation feedback",
    "avoidFor": "replacing native validation semantics",
    "reducedMotion": "near-instant opacity or color state",
    "snippetPath": "snippets/extended/form/form-focus-glow.html",
    "snippet": "<div class=\"bsx-form-focus-glow\">\n  <label class=\"form-label\" for=\"bsxFormFocusGlow\">Form Focus Glow</label>\n  <input class=\"form-control \" id=\"bsxFormFocusGlow\" type=\"text\" aria-describedby=\"bsxFormFocusGlowHelp bsxFormFocusGlowFeedback\">\n  <div class=\"form-text bsx-form-help\" id=\"bsxFormFocusGlowHelp\">Enter a clear value.</div>\n  <div class=\"invalid-feedback\" id=\"bsxFormFocusGlowFeedback\">Validation feedback.</div>\n</div>"
  },
  {
    "name": "form-invalid-pulse",
    "level": "extended",
    "category": "form",
    "directory": "form",
    "className": "bsx-form-invalid-pulse",
    "component": "form",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale",
    "kind": "form-state",
    "density": "medium",
    "risk": "medium",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".is-valid",
      ".is-invalid",
      ":focus-within",
      ".bsx-is-error"
    ],
    "bestFor": "focus and validation feedback",
    "avoidFor": "replacing native validation semantics",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/form/form-invalid-pulse.html",
    "snippet": "<div class=\"bsx-form-invalid-pulse\">\n  <label class=\"form-label\" for=\"bsxFormInvalidPulse\">Form Invalid Pulse</label>\n  <input class=\"form-control is-invalid\" id=\"bsxFormInvalidPulse\" type=\"text\" aria-describedby=\"bsxFormInvalidPulseHelp bsxFormInvalidPulseFeedback\">\n  <div class=\"form-text bsx-form-help\" id=\"bsxFormInvalidPulseHelp\">Enter a clear value.</div>\n  <div class=\"invalid-feedback\" id=\"bsxFormInvalidPulseFeedback\">Validation feedback.</div>\n</div>"
  },
  {
    "name": "form-label-float-soft",
    "level": "extended",
    "category": "form",
    "directory": "form",
    "className": "bsx-form-label-float-soft",
    "component": "form",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "form-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      ".is-valid",
      ".is-invalid",
      ":focus-within"
    ],
    "bestFor": "focus and validation feedback",
    "avoidFor": "replacing native validation semantics",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/form/form-label-float-soft.html",
    "snippet": "<div class=\"bsx-form-label-float-soft\">\n  <label class=\"form-label\" for=\"bsxFormLabelFloatSoft\">Form Label Float Soft</label>\n  <input class=\"form-control \" id=\"bsxFormLabelFloatSoft\" type=\"text\" aria-describedby=\"bsxFormLabelFloatSoftHelp bsxFormLabelFloatSoftFeedback\">\n  <div class=\"form-text bsx-form-help\" id=\"bsxFormLabelFloatSoftHelp\">Enter a clear value.</div>\n  <div class=\"invalid-feedback\" id=\"bsxFormLabelFloatSoftFeedback\">Validation feedback.</div>\n</div>"
  },
  {
    "name": "form-input-clear-pop",
    "level": "extended",
    "category": "form",
    "directory": "form",
    "className": "bsx-form-input-clear-pop",
    "component": "form",
    "requiresJs": true,
    "runtimeBehavior": "input clearing",
    "motion": "scale",
    "kind": "form-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".is-valid",
      ".is-invalid",
      ":focus-within"
    ],
    "bestFor": "focus and validation feedback",
    "avoidFor": "replacing native validation semantics",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/form/form-input-clear-pop.html",
    "snippet": "<!-- Requires Bootstrap bundle and assets/js/bootstrap5-transitions.js. -->\n<div class=\"bsx-form-input-clear-pop\">\n  <label class=\"form-label\" for=\"bsxFormInputClearPop\">Form Input Clear Pop</label>\n  <div class=\"input-group\">\n    <input class=\"form-control\" id=\"bsxFormInputClearPop\" type=\"text\" value=\"Clear this value\">\n    <button class=\"btn btn-outline-secondary bsx-input-clear\" type=\"button\" data-bsx-action=\"clear-input\" aria-label=\"Clear input\">×</button>\n  </div>\n</div>"
  },
  {
    "name": "form-select-open-soft",
    "level": "extended",
    "category": "form",
    "directory": "form",
    "className": "bsx-form-select-open-soft",
    "component": "form",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "form-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      ".is-valid",
      ".is-invalid",
      ":focus-within"
    ],
    "bestFor": "focus and validation feedback",
    "avoidFor": "replacing native validation semantics",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/form/form-select-open-soft.html",
    "snippet": "<div class=\"bsx-form-select-open-soft\">\n  <label class=\"form-label\" for=\"bsxFormSelectOpenSoft\">Form Select Open Soft</label>\n  <select class=\"form-select\" id=\"bsxFormSelectOpenSoft\">\n    <option selected>Choose an option</option>\n    <option value=\"1\">First option</option>\n    <option value=\"2\">Second option</option>\n  </select>\n</div>"
  },
  {
    "name": "form-radio-pop",
    "level": "extended",
    "category": "form",
    "directory": "form",
    "className": "bsx-form-radio-pop",
    "component": "form",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale",
    "kind": "form-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".is-valid",
      ".is-invalid",
      ":focus-within"
    ],
    "bestFor": "focus and validation feedback",
    "avoidFor": "replacing native validation semantics",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/form/form-radio-pop.html",
    "snippet": "<div class=\"form-check bsx-form-radio-pop\">\n  <input class=\"form-check-input\" type=\"radio\" name=\"bsxFormRadioPop\" id=\"bsxFormRadioPop\">\n  <label class=\"form-check-label\" for=\"bsxFormRadioPop\">Form Radio Pop</label>\n</div>"
  },
  {
    "name": "card-hover-border",
    "level": "extended",
    "category": "card",
    "directory": "card",
    "className": "bsx-card-hover-border",
    "component": "card",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "interactive content collections",
    "avoidFor": "non-interactive dense tables",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/card/card-hover-border.html",
    "snippet": "<article class=\"card bsx-card-hover-border\">\n  <div class=\"bsx-card-media\" aria-hidden=\"true\"></div>\n  <div class=\"card-body\">\n    <h2 class=\"card-title h5\">Card Hover Border</h2>\n    <p class=\"card-text\">A copy-paste friendly Bootstrap card interaction.</p>\n    <a class=\"btn btn-primary\" href=\"#\">Open details</a>\n  </div>\n  <div class=\"card-footer bsx-card-footer\">Updated just now</div>\n</article>"
  },
  {
    "name": "card-hover-glow",
    "level": "extended",
    "category": "card",
    "directory": "card",
    "className": "bsx-card-hover-glow",
    "component": "card",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "box-shadow"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "interactive content collections",
    "avoidFor": "non-interactive dense tables",
    "reducedMotion": "near-instant opacity or color state",
    "snippetPath": "snippets/extended/card/card-hover-glow.html",
    "snippet": "<article class=\"card bsx-card-hover-glow\">\n  <div class=\"bsx-card-media\" aria-hidden=\"true\"></div>\n  <div class=\"card-body\">\n    <h2 class=\"card-title h5\">Card Hover Glow</h2>\n    <p class=\"card-text\">A copy-paste friendly Bootstrap card interaction.</p>\n    <a class=\"btn btn-primary\" href=\"#\">Open details</a>\n  </div>\n  <div class=\"card-footer bsx-card-footer\">Updated just now</div>\n</article>"
  },
  {
    "name": "card-click-press",
    "level": "extended",
    "category": "card",
    "directory": "card",
    "className": "bsx-card-click-press",
    "component": "card",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "interactive content collections",
    "avoidFor": "non-interactive dense tables",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/card/card-click-press.html",
    "snippet": "<article class=\"card bsx-card-click-press\">\n  <div class=\"bsx-card-media\" aria-hidden=\"true\"></div>\n  <div class=\"card-body\">\n    <h2 class=\"card-title h5\">Card Click Press</h2>\n    <p class=\"card-text\">A copy-paste friendly Bootstrap card interaction.</p>\n    <a class=\"btn btn-primary\" href=\"#\">Open details</a>\n  </div>\n  <div class=\"card-footer bsx-card-footer\">Updated just now</div>\n</article>"
  },
  {
    "name": "card-reveal",
    "level": "extended",
    "category": "card",
    "directory": "card",
    "className": "bsx-card-reveal",
    "component": "card",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "interactive content collections",
    "avoidFor": "non-interactive dense tables",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/card/card-reveal.html",
    "snippet": "<article class=\"card bsx-card-reveal\">\n  <div class=\"bsx-card-media\" aria-hidden=\"true\"></div>\n  <div class=\"card-body\">\n    <h2 class=\"card-title h5\">Card Reveal</h2>\n    <p class=\"card-text\">A copy-paste friendly Bootstrap card interaction.</p>\n    <a class=\"btn btn-primary\" href=\"#\">Open details</a>\n  </div>\n  <div class=\"card-footer bsx-card-footer\">Updated just now</div>\n</article>"
  },
  {
    "name": "card-footer-reveal",
    "level": "extended",
    "category": "card",
    "directory": "card",
    "className": "bsx-card-footer-reveal",
    "component": "card",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "interactive content collections",
    "avoidFor": "non-interactive dense tables",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/card/card-footer-reveal.html",
    "snippet": "<article class=\"card bsx-card-footer-reveal\">\n  <div class=\"bsx-card-media\" aria-hidden=\"true\"></div>\n  <div class=\"card-body\">\n    <h2 class=\"card-title h5\">Card Footer Reveal</h2>\n    <p class=\"card-text\">A copy-paste friendly Bootstrap card interaction.</p>\n    <a class=\"btn btn-primary\" href=\"#\">Open details</a>\n  </div>\n  <div class=\"card-footer bsx-card-footer\">Updated just now</div>\n</article>"
  },
  {
    "name": "card-action-slide",
    "level": "extended",
    "category": "card",
    "directory": "card",
    "className": "bsx-card-action-slide",
    "component": "card",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "interactive content collections",
    "avoidFor": "non-interactive dense tables",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/card/card-action-slide.html",
    "snippet": "<article class=\"card bsx-card-action-slide\">\n  <div class=\"bsx-card-media\" aria-hidden=\"true\"></div>\n  <div class=\"card-body\">\n    <h2 class=\"card-title h5\">Card Action Slide</h2>\n    <p class=\"card-text\">A copy-paste friendly Bootstrap card interaction.</p>\n    <a class=\"btn btn-primary\" href=\"#\">Open details</a>\n  </div>\n  <div class=\"card-footer bsx-card-footer\">Updated just now</div>\n</article>"
  },
  {
    "name": "tabs-slide-left",
    "level": "extended",
    "category": "tabs/nav",
    "directory": "tabs",
    "className": "bsx-tabs-slide-left",
    "component": "tabs",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".active",
      "[aria-current]"
    ],
    "bestFor": "section navigation and tab state",
    "avoidFor": "rapidly auto-rotating content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/tabs/tabs-slide-left.html",
    "snippet": "<div class=\"bsx-tabs-slide-left\">\n  <ul class=\"nav nav-tabs\" role=\"tablist\">\n    <li class=\"nav-item\" role=\"presentation\">\n      <button class=\"nav-link active\" id=\"bsxTabsSlideLeftOneTab\" data-bs-toggle=\"tab\" data-bs-target=\"#bsxTabsSlideLeftOne\" type=\"button\" role=\"tab\" aria-controls=\"bsxTabsSlideLeftOne\" aria-selected=\"true\">Overview</button>\n    </li>\n    <li class=\"nav-item\" role=\"presentation\">\n      <button class=\"nav-link\" id=\"bsxTabsSlideLeftTwoTab\" data-bs-toggle=\"tab\" data-bs-target=\"#bsxTabsSlideLeftTwo\" type=\"button\" role=\"tab\" aria-controls=\"bsxTabsSlideLeftTwo\" aria-selected=\"false\">Details</button>\n    </li>\n  </ul>\n  <div class=\"tab-content p-3 border border-top-0\">\n    <div class=\"tab-pane fade show active\" id=\"bsxTabsSlideLeftOne\" role=\"tabpanel\" aria-labelledby=\"bsxTabsSlideLeftOneTab\" tabindex=\"0\">Overview content.</div>\n    <div class=\"tab-pane fade\" id=\"bsxTabsSlideLeftTwo\" role=\"tabpanel\" aria-labelledby=\"bsxTabsSlideLeftTwoTab\" tabindex=\"0\">Detailed content.</div>\n  </div>\n</div>"
  },
  {
    "name": "tabs-slide-right",
    "level": "extended",
    "category": "tabs/nav",
    "directory": "tabs",
    "className": "bsx-tabs-slide-right",
    "component": "tabs",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".active",
      "[aria-current]"
    ],
    "bestFor": "section navigation and tab state",
    "avoidFor": "rapidly auto-rotating content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/tabs/tabs-slide-right.html",
    "snippet": "<div class=\"bsx-tabs-slide-right\">\n  <ul class=\"nav nav-tabs\" role=\"tablist\">\n    <li class=\"nav-item\" role=\"presentation\">\n      <button class=\"nav-link active\" id=\"bsxTabsSlideRightOneTab\" data-bs-toggle=\"tab\" data-bs-target=\"#bsxTabsSlideRightOne\" type=\"button\" role=\"tab\" aria-controls=\"bsxTabsSlideRightOne\" aria-selected=\"true\">Overview</button>\n    </li>\n    <li class=\"nav-item\" role=\"presentation\">\n      <button class=\"nav-link\" id=\"bsxTabsSlideRightTwoTab\" data-bs-toggle=\"tab\" data-bs-target=\"#bsxTabsSlideRightTwo\" type=\"button\" role=\"tab\" aria-controls=\"bsxTabsSlideRightTwo\" aria-selected=\"false\">Details</button>\n    </li>\n  </ul>\n  <div class=\"tab-content p-3 border border-top-0\">\n    <div class=\"tab-pane fade show active\" id=\"bsxTabsSlideRightOne\" role=\"tabpanel\" aria-labelledby=\"bsxTabsSlideRightOneTab\" tabindex=\"0\">Overview content.</div>\n    <div class=\"tab-pane fade\" id=\"bsxTabsSlideRightTwo\" role=\"tabpanel\" aria-labelledby=\"bsxTabsSlideRightTwoTab\" tabindex=\"0\">Detailed content.</div>\n  </div>\n</div>"
  },
  {
    "name": "tabs-content-reveal",
    "level": "extended",
    "category": "tabs/nav",
    "directory": "tabs",
    "className": "bsx-tabs-content-reveal",
    "component": "tabs",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".active",
      "[aria-current]"
    ],
    "bestFor": "section navigation and tab state",
    "avoidFor": "rapidly auto-rotating content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/tabs/tabs-content-reveal.html",
    "snippet": "<div class=\"bsx-tabs-content-reveal\">\n  <ul class=\"nav nav-tabs\" role=\"tablist\">\n    <li class=\"nav-item\" role=\"presentation\">\n      <button class=\"nav-link active\" id=\"bsxTabsContentRevealOneTab\" data-bs-toggle=\"tab\" data-bs-target=\"#bsxTabsContentRevealOne\" type=\"button\" role=\"tab\" aria-controls=\"bsxTabsContentRevealOne\" aria-selected=\"true\">Overview</button>\n    </li>\n    <li class=\"nav-item\" role=\"presentation\">\n      <button class=\"nav-link\" id=\"bsxTabsContentRevealTwoTab\" data-bs-toggle=\"tab\" data-bs-target=\"#bsxTabsContentRevealTwo\" type=\"button\" role=\"tab\" aria-controls=\"bsxTabsContentRevealTwo\" aria-selected=\"false\">Details</button>\n    </li>\n  </ul>\n  <div class=\"tab-content p-3 border border-top-0\">\n    <div class=\"tab-pane fade show active\" id=\"bsxTabsContentRevealOne\" role=\"tabpanel\" aria-labelledby=\"bsxTabsContentRevealOneTab\" tabindex=\"0\">Overview content.</div>\n    <div class=\"tab-pane fade\" id=\"bsxTabsContentRevealTwo\" role=\"tabpanel\" aria-labelledby=\"bsxTabsContentRevealTwoTab\" tabindex=\"0\">Detailed content.</div>\n  </div>\n</div>"
  },
  {
    "name": "tabs-content-blur",
    "level": "extended",
    "category": "tabs/nav",
    "directory": "tabs",
    "className": "bsx-tabs-content-blur",
    "component": "tabs",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "filter"
    ],
    "bootstrapStates": [
      ".active",
      "[aria-current]"
    ],
    "bestFor": "section navigation and tab state",
    "avoidFor": "rapidly auto-rotating content",
    "reducedMotion": "near-instant opacity or color state",
    "snippetPath": "snippets/extended/tabs/tabs-content-blur.html",
    "snippet": "<div class=\"bsx-tabs-content-blur\">\n  <ul class=\"nav nav-tabs\" role=\"tablist\">\n    <li class=\"nav-item\" role=\"presentation\">\n      <button class=\"nav-link active\" id=\"bsxTabsContentBlurOneTab\" data-bs-toggle=\"tab\" data-bs-target=\"#bsxTabsContentBlurOne\" type=\"button\" role=\"tab\" aria-controls=\"bsxTabsContentBlurOne\" aria-selected=\"true\">Overview</button>\n    </li>\n    <li class=\"nav-item\" role=\"presentation\">\n      <button class=\"nav-link\" id=\"bsxTabsContentBlurTwoTab\" data-bs-toggle=\"tab\" data-bs-target=\"#bsxTabsContentBlurTwo\" type=\"button\" role=\"tab\" aria-controls=\"bsxTabsContentBlurTwo\" aria-selected=\"false\">Details</button>\n    </li>\n  </ul>\n  <div class=\"tab-content p-3 border border-top-0\">\n    <div class=\"tab-pane fade show active\" id=\"bsxTabsContentBlurOne\" role=\"tabpanel\" aria-labelledby=\"bsxTabsContentBlurOneTab\" tabindex=\"0\">Overview content.</div>\n    <div class=\"tab-pane fade\" id=\"bsxTabsContentBlurTwo\" role=\"tabpanel\" aria-labelledby=\"bsxTabsContentBlurTwoTab\" tabindex=\"0\">Detailed content.</div>\n  </div>\n</div>"
  },
  {
    "name": "nav-link-hover-slide",
    "level": "extended",
    "category": "tabs/nav",
    "directory": "navbar",
    "className": "bsx-nav-link-hover-slide",
    "component": "navbar",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "section navigation and tab state",
    "avoidFor": "rapidly auto-rotating content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/navbar/nav-link-hover-slide.html",
    "snippet": "<nav class=\"navbar navbar-expand-md bg-body-tertiary bsx-nav-link-hover-slide\" aria-label=\"Nav Link Hover Slide\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" href=\"#\">BSX</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#bsxNavLinkHoverSlide\" aria-controls=\"bsxNavLinkHoverSlide\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"bsxNavLinkHoverSlide\">\n      <div class=\"navbar-nav\">\n        <a class=\"nav-link active\" aria-current=\"page\" href=\"#\">Home</a>\n        <a class=\"nav-link\" href=\"#\">Catalog</a>\n      </div>\n    </div>\n  </div>\n</nav>"
  },
  {
    "name": "nav-sidebar-collapse-soft",
    "level": "extended",
    "category": "tabs/nav",
    "directory": "sidebar",
    "className": "bsx-nav-sidebar-collapse-soft",
    "component": "sidebar",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "component-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "transform",
      "opacity"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "section navigation and tab state",
    "avoidFor": "rapidly auto-rotating content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/sidebar/nav-sidebar-collapse-soft.html",
    "snippet": "<nav class=\"nav flex-column border rounded p-2 bsx-nav-sidebar-collapse-soft\" aria-label=\"Nav Sidebar Collapse Soft\">\n  <a class=\"nav-link active\" href=\"#\" aria-current=\"page\">Dashboard</a>\n  <a class=\"nav-link\" href=\"#\">Orders</a>\n  <a class=\"nav-link\" href=\"#\">Customers</a>\n  <div class=\"bsx-sidebar-submenu ps-3\">\n    <a class=\"nav-link\" href=\"#\">Archived</a>\n  </div>\n</nav>"
  },
  {
    "name": "accordion-body-slide",
    "level": "extended",
    "category": "accordion/collapse",
    "directory": "accordion",
    "className": "bsx-accordion-body-slide",
    "component": "accordion",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".collapse.show",
      "[aria-expanded]"
    ],
    "bestFor": "disclosure controls",
    "avoidFor": "content that must remain continuously visible",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/accordion/accordion-body-slide.html",
    "snippet": "<div class=\"accordion bsx-accordion-body-slide\" id=\"bsxAccordionBodySlide\">\n  <div class=\"accordion-item\">\n    <h2 class=\"accordion-header\">\n      <button class=\"accordion-button\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#bsxAccordionBodySlideBody\" aria-expanded=\"true\" aria-controls=\"bsxAccordionBodySlideBody\">\n        Accordion Body Slide\n        <span class=\"bsx-accordion-icon ms-auto\" aria-hidden=\"true\"></span>\n      </button>\n    </h2>\n    <div id=\"bsxAccordionBodySlideBody\" class=\"accordion-collapse collapse show\" data-bs-parent=\"#bsxAccordionBodySlide\">\n      <div class=\"accordion-body\">Accessible Bootstrap collapse content.</div>\n    </div>\n  </div>\n</div>"
  },
  {
    "name": "accordion-header-hover",
    "level": "extended",
    "category": "accordion/collapse",
    "directory": "accordion",
    "className": "bsx-accordion-header-hover",
    "component": "accordion",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ".collapse.show",
      "[aria-expanded]"
    ],
    "bestFor": "disclosure controls",
    "avoidFor": "content that must remain continuously visible",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/accordion/accordion-header-hover.html",
    "snippet": "<div class=\"accordion bsx-accordion-header-hover\" id=\"bsxAccordionHeaderHover\">\n  <div class=\"accordion-item\">\n    <h2 class=\"accordion-header\">\n      <button class=\"accordion-button\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#bsxAccordionHeaderHoverBody\" aria-expanded=\"true\" aria-controls=\"bsxAccordionHeaderHoverBody\">\n        Accordion Header Hover\n        <span class=\"bsx-accordion-icon ms-auto\" aria-hidden=\"true\"></span>\n      </button>\n    </h2>\n    <div id=\"bsxAccordionHeaderHoverBody\" class=\"accordion-collapse collapse show\" data-bs-parent=\"#bsxAccordionHeaderHover\">\n      <div class=\"accordion-body\">Accessible Bootstrap collapse content.</div>\n    </div>\n  </div>\n</div>"
  },
  {
    "name": "accordion-active-glow",
    "level": "extended",
    "category": "accordion/collapse",
    "directory": "accordion",
    "className": "bsx-accordion-active-glow",
    "component": "accordion",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "box-shadow",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ".collapse.show",
      "[aria-expanded]"
    ],
    "bestFor": "disclosure controls",
    "avoidFor": "content that must remain continuously visible",
    "reducedMotion": "near-instant opacity or color state",
    "snippetPath": "snippets/extended/accordion/accordion-active-glow.html",
    "snippet": "<div class=\"accordion bsx-accordion-active-glow\" id=\"bsxAccordionActiveGlow\">\n  <div class=\"accordion-item\">\n    <h2 class=\"accordion-header\">\n      <button class=\"accordion-button\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#bsxAccordionActiveGlowBody\" aria-expanded=\"true\" aria-controls=\"bsxAccordionActiveGlowBody\">\n        Accordion Active Glow\n        <span class=\"bsx-accordion-icon ms-auto\" aria-hidden=\"true\"></span>\n      </button>\n    </h2>\n    <div id=\"bsxAccordionActiveGlowBody\" class=\"accordion-collapse collapse show\" data-bs-parent=\"#bsxAccordionActiveGlow\">\n      <div class=\"accordion-body\">Accessible Bootstrap collapse content.</div>\n    </div>\n  </div>\n</div>"
  },
  {
    "name": "collapse-fade",
    "level": "extended",
    "category": "accordion/collapse",
    "directory": "accordion",
    "className": "bsx-collapse-fade",
    "component": "accordion",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      ".collapse.show",
      "[aria-expanded]"
    ],
    "bestFor": "disclosure controls",
    "avoidFor": "content that must remain continuously visible",
    "reducedMotion": "near-instant opacity or color state",
    "snippetPath": "snippets/extended/accordion/collapse-fade.html",
    "snippet": "<div class=\"accordion bsx-collapse-fade\" id=\"bsxCollapseFade\">\n  <div class=\"accordion-item\">\n    <h2 class=\"accordion-header\">\n      <button class=\"accordion-button\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#bsxCollapseFadeBody\" aria-expanded=\"true\" aria-controls=\"bsxCollapseFadeBody\">\n        Collapse Fade\n        <span class=\"bsx-accordion-icon ms-auto\" aria-hidden=\"true\"></span>\n      </button>\n    </h2>\n    <div id=\"bsxCollapseFadeBody\" class=\"accordion-collapse collapse show\" data-bs-parent=\"#bsxCollapseFade\">\n      <div class=\"accordion-body\">Accessible Bootstrap collapse content.</div>\n    </div>\n  </div>\n</div>"
  },
  {
    "name": "collapse-card-reveal",
    "level": "extended",
    "category": "accordion/collapse",
    "directory": "accordion",
    "className": "bsx-collapse-card-reveal",
    "component": "accordion",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".collapse.show",
      "[aria-expanded]"
    ],
    "bestFor": "disclosure controls",
    "avoidFor": "content that must remain continuously visible",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/accordion/collapse-card-reveal.html",
    "snippet": "<div class=\"accordion bsx-collapse-card-reveal\" id=\"bsxCollapseCardReveal\">\n  <div class=\"accordion-item\">\n    <h2 class=\"accordion-header\">\n      <button class=\"accordion-button\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#bsxCollapseCardRevealBody\" aria-expanded=\"true\" aria-controls=\"bsxCollapseCardRevealBody\">\n        Collapse Card Reveal\n        <span class=\"bsx-accordion-icon ms-auto\" aria-hidden=\"true\"></span>\n      </button>\n    </h2>\n    <div id=\"bsxCollapseCardRevealBody\" class=\"accordion-collapse collapse show\" data-bs-parent=\"#bsxCollapseCardReveal\">\n      <div class=\"accordion-body\">Accessible Bootstrap collapse content.</div>\n    </div>\n  </div>\n</div>"
  },
  {
    "name": "navbar-brand-pop",
    "level": "extended",
    "category": "navbar/sidebar",
    "directory": "navbar",
    "className": "bsx-navbar-brand-pop",
    "component": "navbar",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "application navigation",
    "avoidFor": "small inline controls",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/navbar/navbar-brand-pop.html",
    "snippet": "<nav class=\"navbar navbar-expand-md bg-body-tertiary bsx-navbar-brand-pop\" aria-label=\"Navbar Brand Pop\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" href=\"#\">BSX</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#bsxNavbarBrandPop\" aria-controls=\"bsxNavbarBrandPop\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"bsxNavbarBrandPop\">\n      <div class=\"navbar-nav\">\n        <a class=\"nav-link active\" aria-current=\"page\" href=\"#\">Home</a>\n        <a class=\"nav-link\" href=\"#\">Catalog</a>\n      </div>\n    </div>\n  </div>\n</nav>"
  },
  {
    "name": "navbar-link-hover-bg",
    "level": "extended",
    "category": "navbar/sidebar",
    "directory": "navbar",
    "className": "bsx-navbar-link-hover-bg",
    "component": "navbar",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "application navigation",
    "avoidFor": "small inline controls",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/navbar/navbar-link-hover-bg.html",
    "snippet": "<nav class=\"navbar navbar-expand-md bg-body-tertiary bsx-navbar-link-hover-bg\" aria-label=\"Navbar Link Hover Bg\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" href=\"#\">BSX</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#bsxNavbarLinkHoverBg\" aria-controls=\"bsxNavbarLinkHoverBg\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"bsxNavbarLinkHoverBg\">\n      <div class=\"navbar-nav\">\n        <a class=\"nav-link active\" aria-current=\"page\" href=\"#\">Home</a>\n        <a class=\"nav-link\" href=\"#\">Catalog</a>\n      </div>\n    </div>\n  </div>\n</nav>"
  },
  {
    "name": "navbar-toggler-spin",
    "level": "extended",
    "category": "navbar/sidebar",
    "directory": "navbar",
    "className": "bsx-navbar-toggler-spin",
    "component": "navbar",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "rotate",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "application navigation",
    "avoidFor": "small inline controls",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/navbar/navbar-toggler-spin.html",
    "snippet": "<nav class=\"navbar navbar-expand-md bg-body-tertiary bsx-navbar-toggler-spin\" aria-label=\"Navbar Toggler Spin\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" href=\"#\">BSX</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#bsxNavbarTogglerSpin\" aria-controls=\"bsxNavbarTogglerSpin\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"bsxNavbarTogglerSpin\">\n      <div class=\"navbar-nav\">\n        <a class=\"nav-link active\" aria-current=\"page\" href=\"#\">Home</a>\n        <a class=\"nav-link\" href=\"#\">Catalog</a>\n      </div>\n    </div>\n  </div>\n</nav>"
  },
  {
    "name": "sidebar-item-hover-slide",
    "level": "extended",
    "category": "navbar/sidebar",
    "directory": "sidebar",
    "className": "bsx-sidebar-item-hover-slide",
    "component": "sidebar",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "application navigation",
    "avoidFor": "small inline controls",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/sidebar/sidebar-item-hover-slide.html",
    "snippet": "<nav class=\"nav flex-column border rounded p-2 bsx-sidebar-item-hover-slide\" aria-label=\"Sidebar Item Hover Slide\">\n  <a class=\"nav-link active\" href=\"#\" aria-current=\"page\">Dashboard</a>\n  <a class=\"nav-link\" href=\"#\">Orders</a>\n  <a class=\"nav-link\" href=\"#\">Customers</a>\n  <div class=\"bsx-sidebar-submenu ps-3\">\n    <a class=\"nav-link\" href=\"#\">Archived</a>\n  </div>\n</nav>"
  },
  {
    "name": "sidebar-submenu-reveal",
    "level": "extended",
    "category": "navbar/sidebar",
    "directory": "sidebar",
    "className": "bsx-sidebar-submenu-reveal",
    "component": "sidebar",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "application navigation",
    "avoidFor": "small inline controls",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/sidebar/sidebar-submenu-reveal.html",
    "snippet": "<nav class=\"nav flex-column border rounded p-2 bsx-sidebar-submenu-reveal\" aria-label=\"Sidebar Submenu Reveal\">\n  <a class=\"nav-link active\" href=\"#\" aria-current=\"page\">Dashboard</a>\n  <a class=\"nav-link\" href=\"#\">Orders</a>\n  <a class=\"nav-link\" href=\"#\">Customers</a>\n  <div class=\"bsx-sidebar-submenu ps-3\">\n    <a class=\"nav-link\" href=\"#\">Archived</a>\n  </div>\n</nav>"
  },
  {
    "name": "sidebar-mini-expand",
    "level": "extended",
    "category": "navbar/sidebar",
    "directory": "sidebar",
    "className": "bsx-sidebar-mini-expand",
    "component": "sidebar",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "component-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "transform",
      "clip-path"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "application navigation",
    "avoidFor": "small inline controls",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/sidebar/sidebar-mini-expand.html",
    "snippet": "<nav class=\"nav flex-column border rounded p-2 bsx-sidebar-mini-expand\" aria-label=\"Sidebar Mini Expand\">\n  <a class=\"nav-link active\" href=\"#\" aria-current=\"page\">Dashboard</a>\n  <a class=\"nav-link\" href=\"#\">Orders</a>\n  <a class=\"nav-link\" href=\"#\">Customers</a>\n  <div class=\"bsx-sidebar-submenu ps-3\">\n    <a class=\"nav-link\" href=\"#\">Archived</a>\n  </div>\n</nav>"
  },
  {
    "name": "sidebar-overlay-blur",
    "level": "extended",
    "category": "navbar/sidebar",
    "directory": "sidebar",
    "className": "bsx-sidebar-overlay-blur",
    "component": "sidebar",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "component-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "transform",
      "opacity",
      "filter"
    ],
    "bootstrapStates": [
      "[aria-busy]",
      ".bsx-is-loading"
    ],
    "bestFor": "application navigation",
    "avoidFor": "small inline controls",
    "reducedMotion": "near-instant opacity or color state",
    "snippetPath": "snippets/extended/sidebar/sidebar-overlay-blur.html",
    "snippet": "<nav class=\"nav flex-column border rounded p-2 bsx-sidebar-overlay-blur\" aria-label=\"Sidebar Overlay Blur\">\n  <a class=\"nav-link active\" href=\"#\" aria-current=\"page\">Dashboard</a>\n  <a class=\"nav-link\" href=\"#\">Orders</a>\n  <a class=\"nav-link\" href=\"#\">Customers</a>\n  <div class=\"bsx-sidebar-submenu ps-3\">\n    <a class=\"nav-link\" href=\"#\">Archived</a>\n  </div>\n</nav>"
  },
  {
    "name": "badge-pulse",
    "level": "extended",
    "category": "badge/counter",
    "directory": "badge",
    "className": "bsx-badge-pulse",
    "component": "badge",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "status and metric updates",
    "avoidFor": "long text content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/badge/badge-pulse.html",
    "snippet": "<span class=\"badge text-bg-primary bsx-badge-pulse\" role=\"status\">\n  Badge Pulse\n  <span class=\"visually-hidden\">status</span>\n</span>"
  },
  {
    "name": "badge-count-bump",
    "level": "extended",
    "category": "badge/counter",
    "directory": "badge",
    "className": "bsx-badge-count-bump",
    "component": "badge",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "status and metric updates",
    "avoidFor": "long text content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/badge/badge-count-bump.html",
    "snippet": "<span class=\"badge text-bg-primary bsx-badge-count-bump\" role=\"status\">\n  Badge Count Bump\n  <span class=\"visually-hidden\">status</span>\n</span>"
  },
  {
    "name": "badge-status-dot",
    "level": "extended",
    "category": "badge/counter",
    "directory": "badge",
    "className": "bsx-badge-status-dot",
    "component": "badge",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "status and metric updates",
    "avoidFor": "long text content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/badge/badge-status-dot.html",
    "snippet": "<span class=\"badge text-bg-primary bsx-badge-status-dot\" role=\"status\">\n  Badge Status Dot\n  <span class=\"visually-hidden\">status</span>\n</span>"
  },
  {
    "name": "counter-change-up",
    "level": "extended",
    "category": "badge/counter",
    "directory": "counter",
    "className": "bsx-counter-change-up",
    "component": "counter",
    "requiresJs": true,
    "runtimeBehavior": "counter update",
    "motion": "color + opacity",
    "kind": "feedback-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "status and metric updates",
    "avoidFor": "long text content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/counter/counter-change-up.html",
    "snippet": "<!-- Requires Bootstrap bundle and assets/js/bootstrap5-transitions.js. -->\n<div class=\"card bsx-counter-change-up\" data-bsx-counter>\n  <div class=\"card-body\">\n    <p class=\"text-body-secondary mb-1\">Counter Change Up</p>\n    <p class=\"display-6 mb-3\" data-bsx-counter-value aria-live=\"polite\">24</p>\n    <button type=\"button\" class=\"btn btn-sm btn-outline-primary\" data-bsx-action=\"counter\">Update metric</button>\n  </div>\n</div>"
  },
  {
    "name": "counter-change-down",
    "level": "extended",
    "category": "badge/counter",
    "directory": "counter",
    "className": "bsx-counter-change-down",
    "component": "counter",
    "requiresJs": true,
    "runtimeBehavior": "counter update",
    "motion": "color + opacity",
    "kind": "feedback-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "status and metric updates",
    "avoidFor": "long text content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/counter/counter-change-down.html",
    "snippet": "<!-- Requires Bootstrap bundle and assets/js/bootstrap5-transitions.js. -->\n<div class=\"card bsx-counter-change-down\" data-bsx-counter>\n  <div class=\"card-body\">\n    <p class=\"text-body-secondary mb-1\">Counter Change Down</p>\n    <p class=\"display-6 mb-3\" data-bsx-counter-value aria-live=\"polite\">24</p>\n    <button type=\"button\" class=\"btn btn-sm btn-outline-primary\" data-bsx-action=\"counter\">Update metric</button>\n  </div>\n</div>"
  },
  {
    "name": "price-change-flash",
    "level": "extended",
    "category": "badge/counter",
    "directory": "counter",
    "className": "bsx-price-change-flash",
    "component": "counter",
    "requiresJs": true,
    "runtimeBehavior": "counter update",
    "motion": "opacity",
    "kind": "feedback-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "status and metric updates",
    "avoidFor": "long text content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/counter/price-change-flash.html",
    "snippet": "<!-- Requires Bootstrap bundle and assets/js/bootstrap5-transitions.js. -->\n<div class=\"card bsx-price-change-flash\" data-bsx-counter>\n  <div class=\"card-body\">\n    <p class=\"text-body-secondary mb-1\">Price Change Flash</p>\n    <p class=\"display-6 mb-3\" data-bsx-counter-value aria-live=\"polite\">24</p>\n    <button type=\"button\" class=\"btn btn-sm btn-outline-primary\" data-bsx-action=\"counter\">Update metric</button>\n  </div>\n</div>"
  },
  {
    "name": "table-row-selected",
    "level": "extended",
    "category": "table/list",
    "directory": "table",
    "className": "bsx-table-row-selected",
    "component": "table",
    "requiresJs": true,
    "runtimeBehavior": "table row selection",
    "motion": "color + opacity",
    "kind": "component-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "box-shadow"
    ],
    "bootstrapStates": [
      ".bsx-is-selected"
    ],
    "bestFor": "row state and collection changes",
    "avoidFor": "large simultaneous batches",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/table/table-row-selected.html",
    "snippet": "<!-- Requires Bootstrap bundle and assets/js/bootstrap5-transitions.js. -->\n<div class=\"table-responsive bsx-table-row-selected\">\n  <table class=\"table table-hover align-middle\">\n    <thead><tr><th scope=\"col\">Item</th><th scope=\"col\">Status</th><th scope=\"col\"><button class=\"btn btn-sm\" type=\"button\">Updated <span class=\"bsx-sort-icon\" aria-hidden=\"true\">↕</span></button></th></tr></thead>\n    <tbody data-bsx-table-body>\n      <tr><th scope=\"row\">Example row</th><td><span class=\"badge text-bg-success\">Ready</span></td><td>Now</td></tr>\n    </tbody>\n  </table>\n  <button type=\"button\" class=\"btn btn-sm btn-primary\" data-bsx-action=\"table-row\">Change row</button>\n</div>"
  },
  {
    "name": "table-sort-icon-rotate",
    "level": "extended",
    "category": "table/list",
    "directory": "table",
    "className": "bsx-table-sort-icon-rotate",
    "component": "table",
    "requiresJs": true,
    "runtimeBehavior": "table sort state",
    "motion": "rotate",
    "kind": "component-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "row state and collection changes",
    "avoidFor": "large simultaneous batches",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/table/table-sort-icon-rotate.html",
    "snippet": "<!-- Requires Bootstrap bundle and assets/js/bootstrap5-transitions.js. -->\n<div class=\"table-responsive bsx-table-sort-icon-rotate\">\n  <table class=\"table table-hover align-middle\">\n    <thead><tr><th scope=\"col\">Item</th><th scope=\"col\">Status</th><th scope=\"col\"><button class=\"btn btn-sm\" type=\"button\" data-bsx-action=\"sort\">Updated <span class=\"bsx-sort-icon\" aria-hidden=\"true\">↕</span></button></th></tr></thead>\n    <tbody data-bsx-table-body>\n      <tr><th scope=\"row\">Example row</th><td><span class=\"badge text-bg-success\">Ready</span></td><td>Now</td></tr>\n    </tbody>\n  </table>\n</div>"
  },
  {
    "name": "table-filter-reveal",
    "level": "extended",
    "category": "table/list",
    "directory": "table",
    "className": "bsx-table-filter-reveal",
    "component": "table",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "row state and collection changes",
    "avoidFor": "large simultaneous batches",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/table/table-filter-reveal.html",
    "snippet": "<div class=\"table-responsive bsx-table-filter-reveal\">\n  <table class=\"table table-hover align-middle\">\n    <thead><tr><th scope=\"col\">Item</th><th scope=\"col\">Status</th><th scope=\"col\"><button class=\"btn btn-sm\" type=\"button\">Updated <span class=\"bsx-sort-icon\" aria-hidden=\"true\">↕</span></button></th></tr></thead>\n    <tbody data-bsx-table-body>\n      <tr><th scope=\"row\">Example row</th><td><span class=\"badge text-bg-success\">Ready</span></td><td>Now</td></tr>\n    </tbody>\n  </table>\n</div>"
  },
  {
    "name": "list-item-reveal",
    "level": "extended",
    "category": "table/list",
    "directory": "list",
    "className": "bsx-list-item-reveal",
    "component": "list",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "row state and collection changes",
    "avoidFor": "large simultaneous batches",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/list/list-item-reveal.html",
    "snippet": "<div class=\"bsx-list-item-reveal\">\n  <div class=\"list-group\">\n  <a href=\"#\" class=\"list-group-item list-group-item-action active\" aria-current=\"true\">Active item</a>\n  <a href=\"#\" class=\"list-group-item list-group-item-action\">Second item</a>\n  <a href=\"#\" class=\"list-group-item list-group-item-action\">Third item</a>\n  </div>\n  \n</div>"
  },
  {
    "name": "list-item-remove",
    "level": "extended",
    "category": "table/list",
    "directory": "list",
    "className": "bsx-list-item-remove",
    "component": "list",
    "requiresJs": true,
    "runtimeBehavior": "list item removal",
    "motion": "translate",
    "kind": "component-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "row state and collection changes",
    "avoidFor": "large simultaneous batches",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/list/list-item-remove.html",
    "snippet": "<!-- Requires Bootstrap bundle and assets/js/bootstrap5-transitions.js. -->\n<div class=\"bsx-list-item-remove\">\n  <div class=\"list-group\">\n  <a href=\"#\" class=\"list-group-item list-group-item-action active\" aria-current=\"true\">Active item</a>\n  <a href=\"#\" class=\"list-group-item list-group-item-action\">Second item</a>\n  <a href=\"#\" class=\"list-group-item list-group-item-action\">Third item</a>\n  </div>\n  <button type=\"button\" class=\"btn btn-sm btn-primary mt-3\" data-bsx-action=\"list-item\">Remove first item</button>\n</div>"
  },
  {
    "name": "list-group-hover-slide",
    "level": "extended",
    "category": "table/list",
    "directory": "list",
    "className": "bsx-list-group-hover-slide",
    "component": "list",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "row state and collection changes",
    "avoidFor": "large simultaneous batches",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/list/list-group-hover-slide.html",
    "snippet": "<div class=\"bsx-list-group-hover-slide\">\n  <div class=\"list-group\">\n  <a href=\"#\" class=\"list-group-item list-group-item-action active\" aria-current=\"true\">Active item</a>\n  <a href=\"#\" class=\"list-group-item list-group-item-action\">Second item</a>\n  <a href=\"#\" class=\"list-group-item list-group-item-action\">Third item</a>\n  </div>\n  \n</div>"
  },
  {
    "name": "skeleton-wave",
    "level": "extended",
    "category": "skeleton/loading",
    "directory": "skeleton",
    "className": "bsx-skeleton-wave",
    "component": "skeleton",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "loading-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      "[aria-busy]",
      ".bsx-is-loading"
    ],
    "bestFor": "short loading states",
    "avoidFor": "unknown or very long waits without status",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/skeleton/skeleton-wave.html",
    "snippet": "<div class=\"bsx-skeleton-wave\" aria-hidden=\"true\">\n  <div class=\"bsx-skeleton-block rounded mb-2\"></div>\n  <div class=\"bsx-skeleton-line rounded mb-2\"></div>\n  <div class=\"bsx-skeleton-line rounded w-75\"></div>\n</div>\n<span class=\"visually-hidden\" role=\"status\">Loading content</span>"
  },
  {
    "name": "skeleton-avatar",
    "level": "extended",
    "category": "skeleton/loading",
    "directory": "skeleton",
    "className": "bsx-skeleton-avatar",
    "component": "skeleton",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "loading-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      "[aria-busy]",
      ".bsx-is-loading"
    ],
    "bestFor": "short loading states",
    "avoidFor": "unknown or very long waits without status",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/skeleton/skeleton-avatar.html",
    "snippet": "<div class=\"bsx-skeleton-avatar\" aria-hidden=\"true\">\n  <div class=\"bsx-skeleton-block rounded mb-2\"></div>\n  <div class=\"bsx-skeleton-line rounded mb-2\"></div>\n  <div class=\"bsx-skeleton-line rounded w-75\"></div>\n</div>\n<span class=\"visually-hidden\" role=\"status\">Loading content</span>"
  },
  {
    "name": "skeleton-button",
    "level": "extended",
    "category": "skeleton/loading",
    "directory": "skeleton",
    "className": "bsx-skeleton-button",
    "component": "skeleton",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "loading-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      "[aria-busy]",
      ".bsx-is-loading"
    ],
    "bestFor": "short loading states",
    "avoidFor": "unknown or very long waits without status",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/skeleton/skeleton-button.html",
    "snippet": "<div class=\"bsx-skeleton-button\" aria-hidden=\"true\">\n  <div class=\"bsx-skeleton-block rounded mb-2\"></div>\n  <div class=\"bsx-skeleton-line rounded mb-2\"></div>\n  <div class=\"bsx-skeleton-line rounded w-75\"></div>\n</div>\n<span class=\"visually-hidden\" role=\"status\">Loading content</span>"
  },
  {
    "name": "spinner-fade",
    "level": "extended",
    "category": "skeleton/loading",
    "directory": "loading",
    "className": "bsx-spinner-fade",
    "component": "loading state",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity + rotate",
    "kind": "loading-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      "[aria-busy]",
      ".bsx-is-loading"
    ],
    "bestFor": "short loading states",
    "avoidFor": "unknown or very long waits without status",
    "reducedMotion": "near-instant opacity or color state",
    "snippetPath": "snippets/extended/loading/spinner-fade.html",
    "snippet": "<div class=\"bsx-spinner-fade\" role=\"status\" aria-live=\"polite\">\n  <span class=\"bsx-loader-dot\"></span>\n  <span class=\"bsx-loader-dot\"></span>\n  <span class=\"bsx-loader-dot\"></span>\n  <span class=\"visually-hidden\">Loading</span>\n</div>"
  },
  {
    "name": "spinner-scale",
    "level": "extended",
    "category": "skeleton/loading",
    "directory": "loading",
    "className": "bsx-spinner-scale",
    "component": "loading state",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale + rotate",
    "kind": "loading-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      "[aria-busy]",
      ".bsx-is-loading"
    ],
    "bestFor": "short loading states",
    "avoidFor": "unknown or very long waits without status",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/loading/spinner-scale.html",
    "snippet": "<div class=\"bsx-spinner-scale\" role=\"status\" aria-live=\"polite\">\n  <span class=\"bsx-loader-dot\"></span>\n  <span class=\"bsx-loader-dot\"></span>\n  <span class=\"bsx-loader-dot\"></span>\n  <span class=\"visually-hidden\">Loading</span>\n</div>"
  },
  {
    "name": "loader-bar",
    "level": "extended",
    "category": "skeleton/loading",
    "directory": "loading",
    "className": "bsx-loader-bar",
    "component": "loading state",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "loading-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "short loading states",
    "avoidFor": "unknown or very long waits without status",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/loading/loader-bar.html",
    "snippet": "<div class=\"bsx-loader-bar\" role=\"status\" aria-live=\"polite\">\n  <span class=\"bsx-loader-dot\"></span>\n  <span class=\"bsx-loader-dot\"></span>\n  <span class=\"bsx-loader-dot\"></span>\n  <span class=\"visually-hidden\">Loading</span>\n</div>"
  },
  {
    "name": "image-hover-zoom",
    "level": "extended",
    "category": "image/media",
    "directory": "image",
    "className": "bsx-image-hover-zoom",
    "component": "image",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "media previews and galleries",
    "avoidFor": "essential images that must remain static",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/image/image-hover-zoom.html",
    "snippet": "<figure class=\"figure position-relative overflow-hidden rounded bsx-image-hover-zoom\">\n  <svg class=\"figure-img img-fluid mb-0\" viewBox=\"0 0 640 360\" role=\"img\" aria-labelledby=\"bsxImageHoverZoomTitle\">\n    <title id=\"bsxImageHoverZoomTitle\">Abstract Bootstrap demo image</title>\n    <defs><linearGradient id=\"bsxImageHoverZoomGradient\"><stop stop-color=\"#0d6efd\"/><stop offset=\"1\" stop-color=\"#6f42c1\"/></linearGradient></defs>\n    <rect width=\"640\" height=\"360\" fill=\"url(#bsxImageHoverZoomGradient)\"/>\n    <circle cx=\"500\" cy=\"90\" r=\"54\" fill=\"rgba(255,255,255,.3)\"/>\n  </svg>\n  <figcaption class=\"figure-caption bsx-image-caption p-3\">Image Hover Zoom</figcaption>\n</figure>"
  },
  {
    "name": "image-hover-fade",
    "level": "extended",
    "category": "image/media",
    "directory": "image",
    "className": "bsx-image-hover-fade",
    "component": "image",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "media previews and galleries",
    "avoidFor": "essential images that must remain static",
    "reducedMotion": "near-instant opacity or color state",
    "snippetPath": "snippets/extended/image/image-hover-fade.html",
    "snippet": "<figure class=\"figure position-relative overflow-hidden rounded bsx-image-hover-fade\">\n  <svg class=\"figure-img img-fluid mb-0\" viewBox=\"0 0 640 360\" role=\"img\" aria-labelledby=\"bsxImageHoverFadeTitle\">\n    <title id=\"bsxImageHoverFadeTitle\">Abstract Bootstrap demo image</title>\n    <defs><linearGradient id=\"bsxImageHoverFadeGradient\"><stop stop-color=\"#0d6efd\"/><stop offset=\"1\" stop-color=\"#6f42c1\"/></linearGradient></defs>\n    <rect width=\"640\" height=\"360\" fill=\"url(#bsxImageHoverFadeGradient)\"/>\n    <circle cx=\"500\" cy=\"90\" r=\"54\" fill=\"rgba(255,255,255,.3)\"/>\n  </svg>\n  <figcaption class=\"figure-caption bsx-image-caption p-3\">Image Hover Fade</figcaption>\n</figure>"
  },
  {
    "name": "image-hover-overlay",
    "level": "extended",
    "category": "image/media",
    "directory": "image",
    "className": "bsx-image-hover-overlay",
    "component": "image",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      "[aria-busy]",
      ".bsx-is-loading"
    ],
    "bestFor": "media previews and galleries",
    "avoidFor": "essential images that must remain static",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/image/image-hover-overlay.html",
    "snippet": "<figure class=\"figure position-relative overflow-hidden rounded bsx-image-hover-overlay\">\n  <svg class=\"figure-img img-fluid mb-0\" viewBox=\"0 0 640 360\" role=\"img\" aria-labelledby=\"bsxImageHoverOverlayTitle\">\n    <title id=\"bsxImageHoverOverlayTitle\">Abstract Bootstrap demo image</title>\n    <defs><linearGradient id=\"bsxImageHoverOverlayGradient\"><stop stop-color=\"#0d6efd\"/><stop offset=\"1\" stop-color=\"#6f42c1\"/></linearGradient></defs>\n    <rect width=\"640\" height=\"360\" fill=\"url(#bsxImageHoverOverlayGradient)\"/>\n    <circle cx=\"500\" cy=\"90\" r=\"54\" fill=\"rgba(255,255,255,.3)\"/>\n  </svg>\n  <figcaption class=\"figure-caption bsx-image-caption p-3\">Image Hover Overlay</figcaption>\n</figure>"
  },
  {
    "name": "image-hover-caption-slide",
    "level": "extended",
    "category": "image/media",
    "directory": "image",
    "className": "bsx-image-hover-caption-slide",
    "component": "image",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "media previews and galleries",
    "avoidFor": "essential images that must remain static",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/image/image-hover-caption-slide.html",
    "snippet": "<figure class=\"figure position-relative overflow-hidden rounded bsx-image-hover-caption-slide\">\n  <svg class=\"figure-img img-fluid mb-0\" viewBox=\"0 0 640 360\" role=\"img\" aria-labelledby=\"bsxImageHoverCaptionSlideTitle\">\n    <title id=\"bsxImageHoverCaptionSlideTitle\">Abstract Bootstrap demo image</title>\n    <defs><linearGradient id=\"bsxImageHoverCaptionSlideGradient\"><stop stop-color=\"#0d6efd\"/><stop offset=\"1\" stop-color=\"#6f42c1\"/></linearGradient></defs>\n    <rect width=\"640\" height=\"360\" fill=\"url(#bsxImageHoverCaptionSlideGradient)\"/>\n    <circle cx=\"500\" cy=\"90\" r=\"54\" fill=\"rgba(255,255,255,.3)\"/>\n  </svg>\n  <figcaption class=\"figure-caption bsx-image-caption p-3\">Image Hover Caption Slide</figcaption>\n</figure>"
  },
  {
    "name": "image-lazy-reveal",
    "level": "extended",
    "category": "image/media",
    "directory": "image",
    "className": "bsx-image-lazy-reveal",
    "component": "image",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "media previews and galleries",
    "avoidFor": "essential images that must remain static",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/image/image-lazy-reveal.html",
    "snippet": "<figure class=\"figure position-relative overflow-hidden rounded bsx-image-lazy-reveal\">\n  <svg class=\"figure-img img-fluid mb-0\" viewBox=\"0 0 640 360\" role=\"img\" aria-labelledby=\"bsxImageLazyRevealTitle\">\n    <title id=\"bsxImageLazyRevealTitle\">Abstract Bootstrap demo image</title>\n    <defs><linearGradient id=\"bsxImageLazyRevealGradient\"><stop stop-color=\"#0d6efd\"/><stop offset=\"1\" stop-color=\"#6f42c1\"/></linearGradient></defs>\n    <rect width=\"640\" height=\"360\" fill=\"url(#bsxImageLazyRevealGradient)\"/>\n    <circle cx=\"500\" cy=\"90\" r=\"54\" fill=\"rgba(255,255,255,.3)\"/>\n  </svg>\n  <figcaption class=\"figure-caption bsx-image-caption p-3\">Image Lazy Reveal</figcaption>\n</figure>"
  },
  {
    "name": "avatar-pop",
    "level": "extended",
    "category": "image/media",
    "directory": "image",
    "className": "bsx-avatar-pop",
    "component": "image",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "media previews and galleries",
    "avoidFor": "essential images that must remain static",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/image/avatar-pop.html",
    "snippet": "<figure class=\"figure position-relative overflow-hidden rounded bsx-avatar-pop\">\n  <svg class=\"figure-img img-fluid mb-0\" viewBox=\"0 0 640 360\" role=\"img\" aria-labelledby=\"bsxAvatarPopTitle\">\n    <title id=\"bsxAvatarPopTitle\">Abstract Bootstrap demo image</title>\n    <defs><linearGradient id=\"bsxAvatarPopGradient\"><stop stop-color=\"#0d6efd\"/><stop offset=\"1\" stop-color=\"#6f42c1\"/></linearGradient></defs>\n    <rect width=\"640\" height=\"360\" fill=\"url(#bsxAvatarPopGradient)\"/>\n    <circle cx=\"500\" cy=\"90\" r=\"54\" fill=\"rgba(255,255,255,.3)\"/>\n  </svg>\n  <figcaption class=\"figure-caption bsx-image-caption p-3\">Avatar Pop</figcaption>\n</figure>"
  },
  {
    "name": "avatar-status-pulse",
    "level": "extended",
    "category": "image/media",
    "directory": "image",
    "className": "bsx-avatar-status-pulse",
    "component": "image",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "media previews and galleries",
    "avoidFor": "essential images that must remain static",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/image/avatar-status-pulse.html",
    "snippet": "<figure class=\"figure position-relative overflow-hidden rounded bsx-avatar-status-pulse\">\n  <svg class=\"figure-img img-fluid mb-0\" viewBox=\"0 0 640 360\" role=\"img\" aria-labelledby=\"bsxAvatarStatusPulseTitle\">\n    <title id=\"bsxAvatarStatusPulseTitle\">Abstract Bootstrap demo image</title>\n    <defs><linearGradient id=\"bsxAvatarStatusPulseGradient\"><stop stop-color=\"#0d6efd\"/><stop offset=\"1\" stop-color=\"#6f42c1\"/></linearGradient></defs>\n    <rect width=\"640\" height=\"360\" fill=\"url(#bsxAvatarStatusPulseGradient)\"/>\n    <circle cx=\"500\" cy=\"90\" r=\"54\" fill=\"rgba(255,255,255,.3)\"/>\n  </svg>\n  <figcaption class=\"figure-caption bsx-image-caption p-3\">Avatar Status Pulse</figcaption>\n</figure>"
  },
  {
    "name": "gallery-item-reveal",
    "level": "extended",
    "category": "image/media",
    "directory": "image",
    "className": "bsx-gallery-item-reveal",
    "component": "image",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "media previews and galleries",
    "avoidFor": "essential images that must remain static",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/image/gallery-item-reveal.html",
    "snippet": "<figure class=\"figure position-relative overflow-hidden rounded bsx-gallery-item-reveal\">\n  <svg class=\"figure-img img-fluid mb-0\" viewBox=\"0 0 640 360\" role=\"img\" aria-labelledby=\"bsxGalleryItemRevealTitle\">\n    <title id=\"bsxGalleryItemRevealTitle\">Abstract Bootstrap demo image</title>\n    <defs><linearGradient id=\"bsxGalleryItemRevealGradient\"><stop stop-color=\"#0d6efd\"/><stop offset=\"1\" stop-color=\"#6f42c1\"/></linearGradient></defs>\n    <rect width=\"640\" height=\"360\" fill=\"url(#bsxGalleryItemRevealGradient)\"/>\n    <circle cx=\"500\" cy=\"90\" r=\"54\" fill=\"rgba(255,255,255,.3)\"/>\n  </svg>\n  <figcaption class=\"figure-caption bsx-image-caption p-3\">Gallery Item Reveal</figcaption>\n</figure>"
  },
  {
    "name": "carousel-caption-slide",
    "level": "extended",
    "category": "image/media",
    "directory": "media",
    "className": "bsx-carousel-caption-slide",
    "component": "media",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "media previews and galleries",
    "avoidFor": "essential images that must remain static",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/media/carousel-caption-slide.html",
    "snippet": "<div id=\"bsxCarouselCaptionSlide\" class=\"carousel slide bsx-carousel-caption-slide\">\n  <div class=\"carousel-inner rounded\">\n    <div class=\"carousel-item active\">\n      <div class=\"ratio ratio-16x9 bg-primary\"></div>\n      <div class=\"carousel-caption\"><h2 class=\"h5\">Carousel Caption Slide</h2><p>Bootstrap carousel content.</p></div>\n    </div>\n    <div class=\"carousel-item\"><div class=\"ratio ratio-16x9 bg-secondary\"></div></div>\n  </div>\n  <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#bsxCarouselCaptionSlide\" data-bs-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"visually-hidden\">Previous</span></button>\n  <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#bsxCarouselCaptionSlide\" data-bs-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"visually-hidden\">Next</span></button>\n</div>"
  },
  {
    "name": "carousel-control-hover",
    "level": "extended",
    "category": "image/media",
    "directory": "media",
    "className": "bsx-carousel-control-hover",
    "component": "media",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "media previews and galleries",
    "avoidFor": "essential images that must remain static",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/media/carousel-control-hover.html",
    "snippet": "<div id=\"bsxCarouselControlHover\" class=\"carousel slide bsx-carousel-control-hover\">\n  <div class=\"carousel-inner rounded\">\n    <div class=\"carousel-item active\">\n      <div class=\"ratio ratio-16x9 bg-primary\"></div>\n      <div class=\"carousel-caption\"><h2 class=\"h5\">Carousel Control Hover</h2><p>Bootstrap carousel content.</p></div>\n    </div>\n    <div class=\"carousel-item\"><div class=\"ratio ratio-16x9 bg-secondary\"></div></div>\n  </div>\n  <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#bsxCarouselControlHover\" data-bs-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"visually-hidden\">Previous</span></button>\n  <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#bsxCarouselControlHover\" data-bs-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"visually-hidden\">Next</span></button>\n</div>"
  },
  {
    "name": "tooltip-fade-soft",
    "level": "extended",
    "category": "tooltip/popover",
    "directory": "tooltip",
    "className": "bsx-tooltip-fade-soft",
    "component": "tooltip",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "contextual supporting information",
    "avoidFor": "primary task content",
    "reducedMotion": "near-instant opacity or color state",
    "snippetPath": "snippets/extended/tooltip/tooltip-fade-soft.html",
    "snippet": "<button type=\"button\" class=\"btn btn-primary bsx-tooltip-fade-soft\" data-bs-toggle=\"tooltip\" data-bs-custom-class=\"bsx-tooltip-fade-soft\" data-bs-title=\"Tooltip Fade Soft\">\n  Hover or focus\n</button>"
  },
  {
    "name": "tooltip-slide-up",
    "level": "extended",
    "category": "tooltip/popover",
    "directory": "tooltip",
    "className": "bsx-tooltip-slide-up",
    "component": "tooltip",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "contextual supporting information",
    "avoidFor": "primary task content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/tooltip/tooltip-slide-up.html",
    "snippet": "<button type=\"button\" class=\"btn btn-primary bsx-tooltip-slide-up\" data-bs-toggle=\"tooltip\" data-bs-custom-class=\"bsx-tooltip-slide-up\" data-bs-title=\"Tooltip Slide Up\">\n  Hover or focus\n</button>"
  },
  {
    "name": "tooltip-slide-down",
    "level": "extended",
    "category": "tooltip/popover",
    "directory": "tooltip",
    "className": "bsx-tooltip-slide-down",
    "component": "tooltip",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "contextual supporting information",
    "avoidFor": "primary task content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/tooltip/tooltip-slide-down.html",
    "snippet": "<button type=\"button\" class=\"btn btn-primary bsx-tooltip-slide-down\" data-bs-toggle=\"tooltip\" data-bs-custom-class=\"bsx-tooltip-slide-down\" data-bs-title=\"Tooltip Slide Down\">\n  Hover or focus\n</button>"
  },
  {
    "name": "tooltip-scale",
    "level": "extended",
    "category": "tooltip/popover",
    "directory": "tooltip",
    "className": "bsx-tooltip-scale",
    "component": "tooltip",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "contextual supporting information",
    "avoidFor": "primary task content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/tooltip/tooltip-scale.html",
    "snippet": "<button type=\"button\" class=\"btn btn-primary bsx-tooltip-scale\" data-bs-toggle=\"tooltip\" data-bs-custom-class=\"bsx-tooltip-scale\" data-bs-title=\"Tooltip Scale\">\n  Hover or focus\n</button>"
  },
  {
    "name": "tooltip-pop",
    "level": "extended",
    "category": "tooltip/popover",
    "directory": "tooltip",
    "className": "bsx-tooltip-pop",
    "component": "tooltip",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "contextual supporting information",
    "avoidFor": "primary task content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/tooltip/tooltip-pop.html",
    "snippet": "<button type=\"button\" class=\"btn btn-primary bsx-tooltip-pop\" data-bs-toggle=\"tooltip\" data-bs-custom-class=\"bsx-tooltip-pop\" data-bs-title=\"Tooltip Pop\">\n  Hover or focus\n</button>"
  },
  {
    "name": "popover-soft",
    "level": "extended",
    "category": "tooltip/popover",
    "directory": "popover",
    "className": "bsx-popover-soft",
    "component": "popover",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale + opacity",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "contextual supporting information",
    "avoidFor": "primary task content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/popover/popover-soft.html",
    "snippet": "<button type=\"button\" class=\"btn btn-primary bsx-popover-soft\" data-bs-toggle=\"popover\" data-bs-custom-class=\"bsx-popover-soft\" data-bs-title=\"Popover Soft\" data-bs-content=\"Contextual Bootstrap popover content.\">\n  Toggle popover\n</button>"
  },
  {
    "name": "popover-slide",
    "level": "extended",
    "category": "tooltip/popover",
    "directory": "popover",
    "className": "bsx-popover-slide",
    "component": "popover",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate + scale",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "contextual supporting information",
    "avoidFor": "primary task content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/popover/popover-slide.html",
    "snippet": "<button type=\"button\" class=\"btn btn-primary bsx-popover-slide\" data-bs-toggle=\"popover\" data-bs-custom-class=\"bsx-popover-slide\" data-bs-title=\"Popover Slide\" data-bs-content=\"Contextual Bootstrap popover content.\">\n  Toggle popover\n</button>"
  },
  {
    "name": "popover-blur",
    "level": "extended",
    "category": "tooltip/popover",
    "directory": "popover",
    "className": "bsx-popover-blur",
    "component": "popover",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale + opacity",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform",
      "filter"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "contextual supporting information",
    "avoidFor": "primary task content",
    "reducedMotion": "near-instant opacity or color state",
    "snippetPath": "snippets/extended/popover/popover-blur.html",
    "snippet": "<button type=\"button\" class=\"btn btn-primary bsx-popover-blur\" data-bs-toggle=\"popover\" data-bs-custom-class=\"bsx-popover-blur\" data-bs-title=\"Popover Blur\" data-bs-content=\"Contextual Bootstrap popover content.\">\n  Toggle popover\n</button>"
  },
  {
    "name": "popover-content-stagger",
    "level": "extended",
    "category": "tooltip/popover",
    "directory": "popover",
    "className": "bsx-popover-content-stagger",
    "component": "popover",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate + scale",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "contextual supporting information",
    "avoidFor": "primary task content",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/popover/popover-content-stagger.html",
    "snippet": "<button type=\"button\" class=\"btn btn-primary bsx-popover-content-stagger\" data-bs-toggle=\"popover\" data-bs-custom-class=\"bsx-popover-content-stagger\" data-bs-title=\"Popover Content Stagger\" data-bs-content=\"Contextual Bootstrap popover content.\">\n  Toggle popover\n</button>"
  },
  {
    "name": "popover-dismiss-fade",
    "level": "extended",
    "category": "tooltip/popover",
    "directory": "popover",
    "className": "bsx-popover-dismiss-fade",
    "component": "popover",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale + opacity",
    "kind": "component-state",
    "density": "low",
    "risk": "medium",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "contextual supporting information",
    "avoidFor": "primary task content",
    "reducedMotion": "near-instant opacity or color state",
    "snippetPath": "snippets/extended/popover/popover-dismiss-fade.html",
    "snippet": "<button type=\"button\" class=\"btn btn-primary bsx-popover-dismiss-fade\" data-bs-toggle=\"popover\" data-bs-custom-class=\"bsx-popover-dismiss-fade\" data-bs-title=\"Popover Dismiss Fade\" data-bs-content=\"Contextual Bootstrap popover content.\">\n  Toggle popover\n</button>"
  },
  {
    "name": "progress-fill-soft",
    "level": "extended",
    "category": "progress/stepper",
    "directory": "progress",
    "className": "bsx-progress-fill-soft",
    "component": "progress",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate + opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform",
      "opacity"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "progress and multi-step flows",
    "avoidFor": "indeterminate tasks without a status model",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/progress/progress-fill-soft.html",
    "snippet": "<div class=\"bsx-progress-fill-soft\">\n  <div class=\"progress\" role=\"progressbar\" aria-label=\"Progress Fill Soft\" aria-valuenow=\"64\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n    <div class=\"progress-bar progress-bar-striped\" style=\"width: 64%\">64%</div>\n  </div>\n</div>"
  },
  {
    "name": "progress-striped-motion",
    "level": "extended",
    "category": "progress/stepper",
    "directory": "progress",
    "className": "bsx-progress-striped-motion",
    "component": "progress",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "background-position"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "progress and multi-step flows",
    "avoidFor": "indeterminate tasks without a status model",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/progress/progress-striped-motion.html",
    "snippet": "<div class=\"bsx-progress-striped-motion\">\n  <div class=\"progress\" role=\"progressbar\" aria-label=\"Progress Striped Motion\" aria-valuenow=\"64\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n    <div class=\"progress-bar progress-bar-striped\" style=\"width: 64%\">64%</div>\n  </div>\n</div>"
  },
  {
    "name": "progress-success-pop",
    "level": "extended",
    "category": "progress/stepper",
    "directory": "progress",
    "className": "bsx-progress-success-pop",
    "component": "progress",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ".bsx-is-success"
    ],
    "bestFor": "progress and multi-step flows",
    "avoidFor": "indeterminate tasks without a status model",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/progress/progress-success-pop.html",
    "snippet": "<div class=\"bsx-progress-success-pop\">\n  <div class=\"progress\" role=\"progressbar\" aria-label=\"Progress Success Pop\" aria-valuenow=\"64\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n    <div class=\"progress-bar progress-bar-striped\" style=\"width: 64%\">64%</div>\n  </div>\n</div>"
  },
  {
    "name": "progress-danger-pulse",
    "level": "extended",
    "category": "progress/stepper",
    "directory": "progress",
    "className": "bsx-progress-danger-pulse",
    "component": "progress",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale",
    "kind": "component-state",
    "density": "medium",
    "risk": "medium",
    "cssProperties": [
      "transform",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "progress and multi-step flows",
    "avoidFor": "indeterminate tasks without a status model",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/progress/progress-danger-pulse.html",
    "snippet": "<div class=\"bsx-progress-danger-pulse\">\n  <div class=\"progress\" role=\"progressbar\" aria-label=\"Progress Danger Pulse\" aria-valuenow=\"64\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n    <div class=\"progress-bar progress-bar-striped\" style=\"width: 64%\">64%</div>\n  </div>\n</div>"
  },
  {
    "name": "stepper-active-pop",
    "level": "extended",
    "category": "progress/stepper",
    "directory": "stepper",
    "className": "bsx-stepper-active-pop",
    "component": "stepper",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform",
      "box-shadow",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "progress and multi-step flows",
    "avoidFor": "indeterminate tasks without a status model",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/stepper/stepper-active-pop.html",
    "snippet": "<ol class=\"list-unstyled d-flex bsx-stepper-active-pop\" aria-label=\"Stepper Active Pop\">\n  <li class=\"bsx-step bsx-is-complete\"><span class=\"bsx-step-marker\" aria-hidden=\"true\">✓</span><span class=\"visually-hidden\">Complete: </span>Account</li>\n  <li class=\"bsx-step bsx-is-active\" aria-current=\"step\"><span class=\"bsx-step-marker\" aria-hidden=\"true\">2</span>Profile</li>\n  <li class=\"bsx-step\"><span class=\"bsx-step-marker\" aria-hidden=\"true\">3</span>Confirm</li>\n</ol>"
  },
  {
    "name": "stepper-complete-check",
    "level": "extended",
    "category": "progress/stepper",
    "directory": "stepper",
    "className": "bsx-stepper-complete-check",
    "component": "stepper",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ".bsx-is-success"
    ],
    "bestFor": "progress and multi-step flows",
    "avoidFor": "indeterminate tasks without a status model",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/stepper/stepper-complete-check.html",
    "snippet": "<ol class=\"list-unstyled d-flex bsx-stepper-complete-check\" aria-label=\"Stepper Complete Check\">\n  <li class=\"bsx-step bsx-is-complete\"><span class=\"bsx-step-marker\" aria-hidden=\"true\">✓</span><span class=\"visually-hidden\">Complete: </span>Account</li>\n  <li class=\"bsx-step bsx-is-active\" aria-current=\"step\"><span class=\"bsx-step-marker\" aria-hidden=\"true\">2</span>Profile</li>\n  <li class=\"bsx-step\"><span class=\"bsx-step-marker\" aria-hidden=\"true\">3</span>Confirm</li>\n</ol>"
  },
  {
    "name": "stepper-line-fill",
    "level": "extended",
    "category": "progress/stepper",
    "directory": "stepper",
    "className": "bsx-stepper-line-fill",
    "component": "stepper",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "progress and multi-step flows",
    "avoidFor": "indeterminate tasks without a status model",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/stepper/stepper-line-fill.html",
    "snippet": "<ol class=\"list-unstyled d-flex bsx-stepper-line-fill\" aria-label=\"Stepper Line Fill\">\n  <li class=\"bsx-step bsx-is-complete\"><span class=\"bsx-step-marker\" aria-hidden=\"true\">✓</span><span class=\"visually-hidden\">Complete: </span>Account</li>\n  <li class=\"bsx-step bsx-is-active\" aria-current=\"step\"><span class=\"bsx-step-marker\" aria-hidden=\"true\">2</span>Profile</li>\n  <li class=\"bsx-step\"><span class=\"bsx-step-marker\" aria-hidden=\"true\">3</span>Confirm</li>\n</ol>"
  },
  {
    "name": "wizard-page-slide",
    "level": "extended",
    "category": "progress/stepper",
    "directory": "stepper",
    "className": "bsx-wizard-page-slide",
    "component": "stepper",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "progress and multi-step flows",
    "avoidFor": "indeterminate tasks without a status model",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/stepper/wizard-page-slide.html",
    "snippet": "<ol class=\"list-unstyled d-flex bsx-wizard-page-slide\" aria-label=\"Wizard Page Slide\">\n  <li class=\"bsx-step bsx-is-complete\"><span class=\"bsx-step-marker\" aria-hidden=\"true\">✓</span><span class=\"visually-hidden\">Complete: </span>Account</li>\n  <li class=\"bsx-step bsx-is-active\" aria-current=\"step\"><span class=\"bsx-step-marker\" aria-hidden=\"true\">2</span>Profile</li>\n  <li class=\"bsx-step\"><span class=\"bsx-step-marker\" aria-hidden=\"true\">3</span>Confirm</li>\n</ol>"
  },
  {
    "name": "wizard-page-fade",
    "level": "extended",
    "category": "progress/stepper",
    "directory": "stepper",
    "className": "bsx-wizard-page-fade",
    "component": "stepper",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "progress and multi-step flows",
    "avoidFor": "indeterminate tasks without a status model",
    "reducedMotion": "near-instant opacity or color state",
    "snippetPath": "snippets/extended/stepper/wizard-page-fade.html",
    "snippet": "<ol class=\"list-unstyled d-flex bsx-wizard-page-fade\" aria-label=\"Wizard Page Fade\">\n  <li class=\"bsx-step bsx-is-complete\"><span class=\"bsx-step-marker\" aria-hidden=\"true\">✓</span><span class=\"visually-hidden\">Complete: </span>Account</li>\n  <li class=\"bsx-step bsx-is-active\" aria-current=\"step\"><span class=\"bsx-step-marker\" aria-hidden=\"true\">2</span>Profile</li>\n  <li class=\"bsx-step\"><span class=\"bsx-step-marker\" aria-hidden=\"true\">3</span>Confirm</li>\n</ol>"
  },
  {
    "name": "page-fade-in",
    "level": "extended",
    "category": "page/layout",
    "directory": "page",
    "className": "bsx-page-fade-in",
    "component": "page",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "page and section state changes",
    "avoidFor": "continuous scroll-driven motion",
    "reducedMotion": "near-instant opacity or color state",
    "snippetPath": "snippets/extended/page/page-fade-in.html",
    "snippet": "<section class=\"card bsx-page-fade-in\" data-bsx-reveal>\n  <div class=\"card-body text-center py-5\">\n    <h2 class=\"h4\">Page Fade In</h2>\n    <p class=\"text-body-secondary\">A lightweight page-level transition.</p>\n    <button type=\"button\" class=\"btn btn-primary bsx-button-press\">Continue</button>\n  </div>\n</section>"
  },
  {
    "name": "page-slide-up",
    "level": "extended",
    "category": "page/layout",
    "directory": "page",
    "className": "bsx-page-slide-up",
    "component": "page",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "page and section state changes",
    "avoidFor": "continuous scroll-driven motion",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/page/page-slide-up.html",
    "snippet": "<section class=\"card bsx-page-slide-up\" data-bsx-reveal>\n  <div class=\"card-body text-center py-5\">\n    <h2 class=\"h4\">Page Slide Up</h2>\n    <p class=\"text-body-secondary\">A lightweight page-level transition.</p>\n    <button type=\"button\" class=\"btn btn-primary bsx-button-press\">Continue</button>\n  </div>\n</section>"
  },
  {
    "name": "page-section-reveal",
    "level": "extended",
    "category": "page/layout",
    "directory": "page",
    "className": "bsx-page-section-reveal",
    "component": "page",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "page and section state changes",
    "avoidFor": "continuous scroll-driven motion",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/page/page-section-reveal.html",
    "snippet": "<section class=\"card bsx-page-section-reveal\" data-bsx-reveal>\n  <div class=\"card-body text-center py-5\">\n    <h2 class=\"h4\">Page Section Reveal</h2>\n    <p class=\"text-body-secondary\">A lightweight page-level transition.</p>\n    <button type=\"button\" class=\"btn btn-primary bsx-button-press\">Continue</button>\n  </div>\n</section>"
  },
  {
    "name": "page-section-stagger",
    "level": "extended",
    "category": "page/layout",
    "directory": "page",
    "className": "bsx-page-section-stagger",
    "component": "page",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "page and section state changes",
    "avoidFor": "continuous scroll-driven motion",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/page/page-section-stagger.html",
    "snippet": "<section class=\"card bsx-page-section-stagger\" data-bsx-reveal>\n  <div class=\"card-body text-center py-5\">\n    <h2 class=\"h4\">Page Section Stagger</h2>\n    <p class=\"text-body-secondary\">A lightweight page-level transition.</p>\n    <button type=\"button\" class=\"btn btn-primary bsx-button-press\">Continue</button>\n  </div>\n</section>"
  },
  {
    "name": "page-empty-state-pop",
    "level": "extended",
    "category": "page/layout",
    "directory": "page",
    "className": "bsx-page-empty-state-pop",
    "component": "page",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "page and section state changes",
    "avoidFor": "continuous scroll-driven motion",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/page/page-empty-state-pop.html",
    "snippet": "<section class=\"card bsx-page-empty-state-pop\" data-bsx-reveal>\n  <div class=\"card-body text-center py-5\">\n    <h2 class=\"h4\">Page Empty State Pop</h2>\n    <p class=\"text-body-secondary\">A lightweight page-level transition.</p>\n    <button type=\"button\" class=\"btn btn-primary bsx-button-press\">Continue</button>\n  </div>\n</section>"
  },
  {
    "name": "page-error-shake",
    "level": "extended",
    "category": "page/layout",
    "directory": "page",
    "className": "bsx-page-error-shake",
    "component": "page",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "shake",
    "kind": "component-state",
    "density": "low",
    "risk": "medium",
    "cssProperties": [
      "opacity",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ".bsx-is-error"
    ],
    "bestFor": "page and section state changes",
    "avoidFor": "continuous scroll-driven motion",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/page/page-error-shake.html",
    "snippet": "<section class=\"card bsx-page-error-shake\" data-bsx-reveal>\n  <div class=\"card-body text-center py-5\">\n    <h2 class=\"h4\">Page Error Shake</h2>\n    <p class=\"text-body-secondary\">A lightweight page-level transition.</p>\n    <button type=\"button\" class=\"btn btn-primary bsx-button-press\">Continue</button>\n  </div>\n</section>"
  },
  {
    "name": "page-success-check",
    "level": "extended",
    "category": "page/layout",
    "directory": "page",
    "className": "bsx-page-success-check",
    "component": "page",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ".bsx-is-success"
    ],
    "bestFor": "page and section state changes",
    "avoidFor": "continuous scroll-driven motion",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/page/page-success-check.html",
    "snippet": "<section class=\"card bsx-page-success-check\" data-bsx-reveal>\n  <div class=\"card-body text-center py-5\">\n    <h2 class=\"h4\">Page Success Check</h2>\n    <p class=\"text-body-secondary\">A lightweight page-level transition.</p>\n    <button type=\"button\" class=\"btn btn-primary bsx-button-press\">Continue</button>\n  </div>\n</section>"
  },
  {
    "name": "content-fade-swap",
    "level": "extended",
    "category": "page/layout",
    "directory": "page",
    "className": "bsx-content-fade-swap",
    "component": "page",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "page and section state changes",
    "avoidFor": "continuous scroll-driven motion",
    "reducedMotion": "near-instant opacity or color state",
    "snippetPath": "snippets/extended/page/content-fade-swap.html",
    "snippet": "<section class=\"card bsx-content-fade-swap\" data-bsx-reveal>\n  <div class=\"card-body text-center py-5\">\n    <h2 class=\"h4\">Content Fade Swap</h2>\n    <p class=\"text-body-secondary\">A lightweight page-level transition.</p>\n    <button type=\"button\" class=\"btn btn-primary bsx-button-press\">Continue</button>\n  </div>\n</section>"
  },
  {
    "name": "content-blur-swap",
    "level": "extended",
    "category": "page/layout",
    "directory": "page",
    "className": "bsx-content-blur-swap",
    "component": "page",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "filter"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "page and section state changes",
    "avoidFor": "continuous scroll-driven motion",
    "reducedMotion": "near-instant opacity or color state",
    "snippetPath": "snippets/extended/page/content-blur-swap.html",
    "snippet": "<section class=\"card bsx-content-blur-swap\" data-bsx-reveal>\n  <div class=\"card-body text-center py-5\">\n    <h2 class=\"h4\">Content Blur Swap</h2>\n    <p class=\"text-body-secondary\">A lightweight page-level transition.</p>\n    <button type=\"button\" class=\"btn btn-primary bsx-button-press\">Continue</button>\n  </div>\n</section>"
  },
  {
    "name": "scroll-reveal-lite",
    "level": "extended",
    "category": "page/layout",
    "directory": "page",
    "className": "bsx-scroll-reveal-lite",
    "component": "page",
    "requiresJs": true,
    "runtimeBehavior": "intersection observer",
    "motion": "translate",
    "kind": "component-state",
    "density": "low",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "page and section state changes",
    "avoidFor": "continuous scroll-driven motion",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/page/scroll-reveal-lite.html",
    "snippet": "<!-- Requires Bootstrap bundle and assets/js/bootstrap5-transitions.js. -->\n<section class=\"card bsx-scroll-reveal-lite\" data-bsx-reveal>\n  <div class=\"card-body text-center py-5\">\n    <h2 class=\"h4\">Scroll Reveal Lite</h2>\n    <p class=\"text-body-secondary\">A lightweight page-level transition.</p>\n    <button type=\"button\" class=\"btn btn-primary bsx-button-press\">Continue</button>\n  </div>\n</section>"
  },
  {
    "name": "breadcrumb-current-marker",
    "level": "extended",
    "category": "breadcrumb",
    "directory": "breadcrumb",
    "className": "bsx-breadcrumb-current-marker",
    "component": "breadcrumb",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "navigation-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform",
      "opacity"
    ],
    "bootstrapStates": [
      ".active",
      "[aria-current]",
      ".bsx-is-success"
    ],
    "bestFor": "admin location and hierarchy changes",
    "avoidFor": "purely decorative page titles",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/breadcrumb/breadcrumb-current-marker.html",
    "snippet": "<nav class=\"bsx-breadcrumb-current-marker\" aria-label=\"Breadcrumb\">\n  <ol class=\"breadcrumb mb-0\">\n    <li class=\"breadcrumb-item\"><a href=\"#\">CRM</a></li>\n    <li class=\"breadcrumb-item\"><a href=\"#\">Customers</a></li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Acme profile</li>\n  </ol>\n</nav>"
  },
  {
    "name": "breadcrumb-parent-hover",
    "level": "extended",
    "category": "breadcrumb",
    "directory": "breadcrumb",
    "className": "bsx-breadcrumb-parent-hover",
    "component": "breadcrumb",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "navigation-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      ".active",
      "[aria-current]",
      ".bsx-is-success"
    ],
    "bestFor": "admin location and hierarchy changes",
    "avoidFor": "purely decorative page titles",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/breadcrumb/breadcrumb-parent-hover.html",
    "snippet": "<nav class=\"bsx-breadcrumb-parent-hover\" aria-label=\"Breadcrumb\">\n  <ol class=\"breadcrumb mb-0\">\n    <li class=\"breadcrumb-item\"><a href=\"#\">CRM</a></li>\n    <li class=\"breadcrumb-item\"><a href=\"#\">Customers</a></li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Acme profile</li>\n  </ol>\n</nav>"
  },
  {
    "name": "breadcrumb-path-update",
    "level": "extended",
    "category": "breadcrumb",
    "directory": "breadcrumb",
    "className": "bsx-breadcrumb-path-update",
    "component": "breadcrumb",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "navigation-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      ".active",
      "[aria-current]",
      ".bsx-is-success"
    ],
    "bestFor": "admin location and hierarchy changes",
    "avoidFor": "purely decorative page titles",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/breadcrumb/breadcrumb-path-update.html",
    "snippet": "<nav class=\"bsx-breadcrumb-path-update\" aria-label=\"Breadcrumb\">\n  <ol class=\"breadcrumb mb-0\">\n    <li class=\"breadcrumb-item\"><a href=\"#\">CRM</a></li>\n    <li class=\"breadcrumb-item\"><a href=\"#\">Customers</a></li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Acme profile</li>\n  </ol>\n</nav>"
  },
  {
    "name": "breadcrumb-step-complete",
    "level": "extended",
    "category": "breadcrumb",
    "directory": "breadcrumb",
    "className": "bsx-breadcrumb-step-complete",
    "component": "breadcrumb",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "navigation-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      ".active",
      "[aria-current]",
      ".bsx-is-success"
    ],
    "bestFor": "admin location and hierarchy changes",
    "avoidFor": "purely decorative page titles",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/breadcrumb/breadcrumb-step-complete.html",
    "snippet": "<nav class=\"bsx-breadcrumb-step-complete\" aria-label=\"Breadcrumb\">\n  <ol class=\"breadcrumb mb-0\">\n    <li class=\"breadcrumb-item\"><a href=\"#\">CRM</a></li>\n    <li class=\"breadcrumb-item\"><a href=\"#\">Customers</a></li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Acme profile</li>\n  </ol>\n</nav>"
  },
  {
    "name": "breadcrumb-overflow-menu",
    "level": "extended",
    "category": "breadcrumb",
    "directory": "breadcrumb",
    "className": "bsx-breadcrumb-overflow-menu",
    "component": "breadcrumb",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "navigation-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      ".active",
      "[aria-current]",
      ".bsx-is-success"
    ],
    "bestFor": "admin location and hierarchy changes",
    "avoidFor": "purely decorative page titles",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/breadcrumb/breadcrumb-overflow-menu.html",
    "snippet": "<nav class=\"bsx-breadcrumb-overflow-menu\" aria-label=\"Breadcrumb\">\n  <ol class=\"breadcrumb mb-0\">\n    <li class=\"breadcrumb-item\"><a href=\"#\">CRM</a></li>\n    <li class=\"breadcrumb-item\"><a href=\"#\">Customers</a></li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Acme profile</li>\n  </ol>\n</nav>"
  },
  {
    "name": "breadcrumb-context-return",
    "level": "extended",
    "category": "breadcrumb",
    "directory": "breadcrumb",
    "className": "bsx-breadcrumb-context-return",
    "component": "breadcrumb",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "navigation-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform",
      "opacity"
    ],
    "bootstrapStates": [
      ".active",
      "[aria-current]",
      ".bsx-is-success"
    ],
    "bestFor": "admin location and hierarchy changes",
    "avoidFor": "purely decorative page titles",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/breadcrumb/breadcrumb-context-return.html",
    "snippet": "<nav class=\"bsx-breadcrumb-context-return\" aria-label=\"Breadcrumb\">\n  <ol class=\"breadcrumb mb-0\">\n    <li class=\"breadcrumb-item\"><a href=\"#\">CRM</a></li>\n    <li class=\"breadcrumb-item\"><a href=\"#\">Customers</a></li>\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Acme profile</li>\n  </ol>\n</nav>"
  },
  {
    "name": "pagination-active-marker",
    "level": "extended",
    "category": "pagination",
    "directory": "pagination",
    "className": "bsx-pagination-active-marker",
    "component": "pagination",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "navigation-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "transform",
      "box-shadow",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ".active",
      "[aria-current]"
    ],
    "bestFor": "paged tables and search results",
    "avoidFor": "infinite scroll without page state",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/pagination/pagination-active-marker.html",
    "snippet": "<nav class=\"bsx-pagination-active-marker\" aria-label=\"Pagination Active Marker\">\n  <ul class=\"pagination mb-0\" >\n    <li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\" aria-disabled=\"true\">Previous</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n    <li class=\"page-item active\" aria-current=\"page\"><a class=\"page-link\" href=\"#\">2</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n  </ul>\n</nav>"
  },
  {
    "name": "pagination-page-jump",
    "level": "extended",
    "category": "pagination",
    "directory": "pagination",
    "className": "bsx-pagination-page-jump",
    "component": "pagination",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "navigation-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".active",
      "[aria-current]"
    ],
    "bestFor": "paged tables and search results",
    "avoidFor": "infinite scroll without page state",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/pagination/pagination-page-jump.html",
    "snippet": "<nav class=\"bsx-pagination-page-jump\" aria-label=\"Pagination Page Jump\">\n  <ul class=\"pagination mb-0\" >\n    <li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\" aria-disabled=\"true\">Previous</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n    <li class=\"page-item active\" aria-current=\"page\"><a class=\"page-link\" href=\"#\">2</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n  </ul>\n</nav>"
  },
  {
    "name": "pagination-loading-page",
    "level": "extended",
    "category": "pagination",
    "directory": "pagination",
    "className": "bsx-pagination-loading-page",
    "component": "pagination",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "navigation-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      ".active",
      "[aria-current]",
      "[aria-busy]",
      ".bsx-is-loading"
    ],
    "bestFor": "paged tables and search results",
    "avoidFor": "infinite scroll without page state",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/pagination/pagination-loading-page.html",
    "snippet": "<nav class=\"bsx-pagination-loading-page\" aria-label=\"Pagination Loading Page\">\n  <ul class=\"pagination mb-0\" aria-busy=\"true\">\n    <li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\" aria-disabled=\"true\">Previous</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n    <li class=\"page-item active\" aria-current=\"page\"><a class=\"page-link\" href=\"#\">2</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n  </ul>\n</nav>"
  },
  {
    "name": "pagination-disabled-soft",
    "level": "extended",
    "category": "pagination",
    "directory": "pagination",
    "className": "bsx-pagination-disabled-soft",
    "component": "pagination",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "navigation-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ".active",
      "[aria-current]",
      ".disabled",
      "[disabled]",
      "[aria-disabled]"
    ],
    "bestFor": "paged tables and search results",
    "avoidFor": "infinite scroll without page state",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/pagination/pagination-disabled-soft.html",
    "snippet": "<nav class=\"bsx-pagination-disabled-soft\" aria-label=\"Pagination Disabled Soft\">\n  <ul class=\"pagination mb-0\" >\n    <li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\" aria-disabled=\"true\">Previous</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n    <li class=\"page-item active\" aria-current=\"page\"><a class=\"page-link\" href=\"#\">2</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n  </ul>\n</nav>"
  },
  {
    "name": "pagination-compact-hover",
    "level": "extended",
    "category": "pagination",
    "directory": "pagination",
    "className": "bsx-pagination-compact-hover",
    "component": "pagination",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "navigation-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ".active",
      "[aria-current]"
    ],
    "bestFor": "paged tables and search results",
    "avoidFor": "infinite scroll without page state",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/pagination/pagination-compact-hover.html",
    "snippet": "<nav class=\"bsx-pagination-compact-hover\" aria-label=\"Pagination Compact Hover\">\n  <ul class=\"pagination mb-0\" >\n    <li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\" aria-disabled=\"true\">Previous</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n    <li class=\"page-item active\" aria-current=\"page\"><a class=\"page-link\" href=\"#\">2</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n  </ul>\n</nav>"
  },
  {
    "name": "pagination-count-update",
    "level": "extended",
    "category": "pagination",
    "directory": "pagination",
    "className": "bsx-pagination-count-update",
    "component": "pagination",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "navigation-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ".active",
      "[aria-current]"
    ],
    "bestFor": "paged tables and search results",
    "avoidFor": "infinite scroll without page state",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/pagination/pagination-count-update.html",
    "snippet": "<nav class=\"bsx-pagination-count-update\" aria-label=\"Pagination Count Update\">\n  <ul class=\"pagination mb-0\" >\n    <li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\" aria-disabled=\"true\">Previous</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n    <li class=\"page-item active\" aria-current=\"page\"><a class=\"page-link\" href=\"#\">2</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n  </ul>\n</nav>"
  },
  {
    "name": "button-group-active-marker",
    "level": "extended",
    "category": "button-group",
    "directory": "button-group",
    "className": "bsx-button-group-active-marker",
    "component": "button-group",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "navigation-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform",
      "box-shadow",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ".active",
      "[aria-current]"
    ],
    "bestFor": "segmented controls, density toggles, and bulk modes",
    "avoidFor": "single primary actions",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/button-group/button-group-active-marker.html",
    "snippet": "<div class=\"btn-group bsx-button-group-active-marker\" role=\"group\" aria-label=\"Button Group Active Marker\">\n  <button type=\"button\" class=\"btn btn-outline-secondary\">List</button>\n  <button type=\"button\" class=\"btn btn-outline-secondary active\" aria-pressed=\"true\">Table</button>\n  <button type=\"button\" class=\"btn btn-outline-secondary\">Kanban</button>\n</div>"
  },
  {
    "name": "button-group-segment-press",
    "level": "extended",
    "category": "button-group",
    "directory": "button-group",
    "className": "bsx-button-group-segment-press",
    "component": "button-group",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "scale",
    "kind": "navigation-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".active",
      "[aria-current]"
    ],
    "bestFor": "segmented controls, density toggles, and bulk modes",
    "avoidFor": "single primary actions",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/button-group/button-group-segment-press.html",
    "snippet": "<div class=\"btn-group bsx-button-group-segment-press\" role=\"group\" aria-label=\"Button Group Segment Press\">\n  <button type=\"button\" class=\"btn btn-outline-secondary\">List</button>\n  <button type=\"button\" class=\"btn btn-outline-secondary active\" aria-pressed=\"true\">Table</button>\n  <button type=\"button\" class=\"btn btn-outline-secondary\">Kanban</button>\n</div>"
  },
  {
    "name": "button-group-bulk-ready",
    "level": "extended",
    "category": "button-group",
    "directory": "button-group",
    "className": "bsx-button-group-bulk-ready",
    "component": "button-group",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "navigation-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      ".active",
      "[aria-current]",
      ".bsx-is-success",
      ".bsx-is-selected"
    ],
    "bestFor": "segmented controls, density toggles, and bulk modes",
    "avoidFor": "single primary actions",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/button-group/button-group-bulk-ready.html",
    "snippet": "<div class=\"btn-group bsx-button-group-bulk-ready\" role=\"group\" aria-label=\"Button Group Bulk Ready\">\n  <button type=\"button\" class=\"btn btn-outline-secondary\">List</button>\n  <button type=\"button\" class=\"btn btn-outline-secondary active\" aria-pressed=\"true\">Table</button>\n  <button type=\"button\" class=\"btn btn-outline-secondary\">Kanban</button>\n</div>"
  },
  {
    "name": "button-group-toggle-sync",
    "level": "extended",
    "category": "button-group",
    "directory": "button-group",
    "className": "bsx-button-group-toggle-sync",
    "component": "button-group",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "navigation-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ".active",
      "[aria-current]"
    ],
    "bestFor": "segmented controls, density toggles, and bulk modes",
    "avoidFor": "single primary actions",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/button-group/button-group-toggle-sync.html",
    "snippet": "<div class=\"btn-group bsx-button-group-toggle-sync\" role=\"group\" aria-label=\"Button Group Toggle Sync\">\n  <button type=\"button\" class=\"btn btn-outline-secondary\">List</button>\n  <button type=\"button\" class=\"btn btn-outline-secondary active\" aria-pressed=\"true\">Table</button>\n  <button type=\"button\" class=\"btn btn-outline-secondary\">Kanban</button>\n</div>"
  },
  {
    "name": "button-group-density-switch",
    "level": "extended",
    "category": "button-group",
    "directory": "button-group",
    "className": "bsx-button-group-density-switch",
    "component": "button-group",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "navigation-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ".active",
      "[aria-current]"
    ],
    "bestFor": "segmented controls, density toggles, and bulk modes",
    "avoidFor": "single primary actions",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/button-group/button-group-density-switch.html",
    "snippet": "<div class=\"btn-group bsx-button-group-density-switch\" role=\"group\" aria-label=\"Button Group Density Switch\">\n  <button type=\"button\" class=\"btn btn-outline-secondary\">List</button>\n  <button type=\"button\" class=\"btn btn-outline-secondary active\" aria-pressed=\"true\">Table</button>\n  <button type=\"button\" class=\"btn btn-outline-secondary\">Kanban</button>\n</div>"
  },
  {
    "name": "button-group-filter-active",
    "level": "extended",
    "category": "button-group",
    "directory": "button-group",
    "className": "bsx-button-group-filter-active",
    "component": "button-group",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "navigation-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "box-shadow",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ".active",
      "[aria-current]"
    ],
    "bestFor": "segmented controls, density toggles, and bulk modes",
    "avoidFor": "single primary actions",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/button-group/button-group-filter-active.html",
    "snippet": "<div class=\"btn-group bsx-button-group-filter-active\" role=\"group\" aria-label=\"Button Group Filter Active\">\n  <button type=\"button\" class=\"btn btn-outline-secondary\">List</button>\n  <button type=\"button\" class=\"btn btn-outline-secondary active\" aria-pressed=\"true\">Table</button>\n  <button type=\"button\" class=\"btn btn-outline-secondary\">Kanban</button>\n</div>"
  },
  {
    "name": "input-group-focus-ring",
    "level": "extended",
    "category": "input-group",
    "directory": "input-group",
    "className": "bsx-input-group-focus-ring",
    "component": "input-group",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "form-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "box-shadow"
    ],
    "bootstrapStates": [
      ".is-valid",
      ".is-invalid",
      ":focus-within"
    ],
    "bestFor": "search, copy, validation, and compound form controls",
    "avoidFor": "standalone long-form fields",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/input-group/input-group-focus-ring.html",
    "snippet": "<div class=\"bsx-input-group-focus-ring\">\n  <label class=\"form-label\" for=\"bsxInputGroupFocusRing\">Input Group Focus Ring</label>\n  <div class=\"input-group \" >\n    <span class=\"input-group-text\" id=\"bsxInputGroupFocusRingAddon\">#</span>\n    <input class=\"form-control \" id=\"bsxInputGroupFocusRing\" type=\"text\" value=\"CRM-2048\" aria-describedby=\"bsxInputGroupFocusRingAddon bsxInputGroupFocusRingFeedback\">\n    <button class=\"btn btn-outline-secondary\" type=\"button\">Apply</button>\n    <div class=\"invalid-feedback\" id=\"bsxInputGroupFocusRingFeedback\">Check this value before saving.</div>\n  </div>\n</div>"
  },
  {
    "name": "input-group-addon-highlight",
    "level": "extended",
    "category": "input-group",
    "directory": "input-group",
    "className": "bsx-input-group-addon-highlight",
    "component": "input-group",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "form-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ".is-valid",
      ".is-invalid",
      ":focus-within"
    ],
    "bestFor": "search, copy, validation, and compound form controls",
    "avoidFor": "standalone long-form fields",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/input-group/input-group-addon-highlight.html",
    "snippet": "<div class=\"bsx-input-group-addon-highlight\">\n  <label class=\"form-label\" for=\"bsxInputGroupAddonHighlight\">Input Group Addon Highlight</label>\n  <div class=\"input-group \" >\n    <span class=\"input-group-text\" id=\"bsxInputGroupAddonHighlightAddon\">#</span>\n    <input class=\"form-control \" id=\"bsxInputGroupAddonHighlight\" type=\"text\" value=\"CRM-2048\" aria-describedby=\"bsxInputGroupAddonHighlightAddon bsxInputGroupAddonHighlightFeedback\">\n    <button class=\"btn btn-outline-secondary\" type=\"button\">Apply</button>\n    <div class=\"invalid-feedback\" id=\"bsxInputGroupAddonHighlightFeedback\">Check this value before saving.</div>\n  </div>\n</div>"
  },
  {
    "name": "input-group-copy-confirm",
    "level": "extended",
    "category": "input-group",
    "directory": "input-group",
    "className": "bsx-input-group-copy-confirm",
    "component": "input-group",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "form-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ".is-valid",
      ".is-invalid",
      ":focus-within"
    ],
    "bestFor": "search, copy, validation, and compound form controls",
    "avoidFor": "standalone long-form fields",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/input-group/input-group-copy-confirm.html",
    "snippet": "<div class=\"bsx-input-group-copy-confirm\">\n  <label class=\"form-label\" for=\"bsxInputGroupCopyConfirm\">Input Group Copy Confirm</label>\n  <div class=\"input-group \" >\n    <span class=\"input-group-text\" id=\"bsxInputGroupCopyConfirmAddon\">#</span>\n    <input class=\"form-control \" id=\"bsxInputGroupCopyConfirm\" type=\"text\" value=\"CRM-2048\" aria-describedby=\"bsxInputGroupCopyConfirmAddon bsxInputGroupCopyConfirmFeedback\">\n    <button class=\"btn btn-outline-secondary\" type=\"button\">Apply</button>\n    <div class=\"invalid-feedback\" id=\"bsxInputGroupCopyConfirmFeedback\">Check this value before saving.</div>\n  </div>\n</div>"
  },
  {
    "name": "input-group-search-pending",
    "level": "extended",
    "category": "input-group",
    "directory": "input-group",
    "className": "bsx-input-group-search-pending",
    "component": "input-group",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "form-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      ".is-valid",
      ".is-invalid",
      ":focus-within",
      "[aria-busy]",
      ".bsx-is-loading"
    ],
    "bestFor": "search, copy, validation, and compound form controls",
    "avoidFor": "standalone long-form fields",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/input-group/input-group-search-pending.html",
    "snippet": "<div class=\"bsx-input-group-search-pending\">\n  <label class=\"form-label\" for=\"bsxInputGroupSearchPending\">Input Group Search Pending</label>\n  <div class=\"input-group \" aria-busy=\"true\">\n    <span class=\"input-group-text\" id=\"bsxInputGroupSearchPendingAddon\">#</span>\n    <input class=\"form-control \" id=\"bsxInputGroupSearchPending\" type=\"text\" value=\"CRM-2048\" aria-describedby=\"bsxInputGroupSearchPendingAddon bsxInputGroupSearchPendingFeedback\">\n    <button class=\"btn btn-outline-secondary\" type=\"button\">Apply</button>\n    <div class=\"invalid-feedback\" id=\"bsxInputGroupSearchPendingFeedback\">Check this value before saving.</div>\n  </div>\n</div>"
  },
  {
    "name": "input-group-validation-sync",
    "level": "extended",
    "category": "input-group",
    "directory": "input-group",
    "className": "bsx-input-group-validation-sync",
    "component": "input-group",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "form-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ".is-valid",
      ".is-invalid",
      ":focus-within"
    ],
    "bestFor": "search, copy, validation, and compound form controls",
    "avoidFor": "standalone long-form fields",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/input-group/input-group-validation-sync.html",
    "snippet": "<div class=\"bsx-input-group-validation-sync\">\n  <label class=\"form-label\" for=\"bsxInputGroupValidationSync\">Input Group Validation Sync</label>\n  <div class=\"input-group has-validation\" >\n    <span class=\"input-group-text\" id=\"bsxInputGroupValidationSyncAddon\">#</span>\n    <input class=\"form-control is-invalid\" id=\"bsxInputGroupValidationSync\" type=\"text\" value=\"CRM-2048\" aria-describedby=\"bsxInputGroupValidationSyncAddon bsxInputGroupValidationSyncFeedback\">\n    <button class=\"btn btn-outline-secondary\" type=\"button\">Apply</button>\n    <div class=\"invalid-feedback\" id=\"bsxInputGroupValidationSyncFeedback\">Check this value before saving.</div>\n  </div>\n</div>"
  },
  {
    "name": "input-group-password-toggle",
    "level": "extended",
    "category": "input-group",
    "directory": "input-group",
    "className": "bsx-input-group-password-toggle",
    "component": "input-group",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "form-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ".is-valid",
      ".is-invalid",
      ":focus-within"
    ],
    "bestFor": "search, copy, validation, and compound form controls",
    "avoidFor": "standalone long-form fields",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/input-group/input-group-password-toggle.html",
    "snippet": "<div class=\"bsx-input-group-password-toggle\">\n  <label class=\"form-label\" for=\"bsxInputGroupPasswordToggle\">Input Group Password Toggle</label>\n  <div class=\"input-group \" >\n    <span class=\"input-group-text\" id=\"bsxInputGroupPasswordToggleAddon\">#</span>\n    <input class=\"form-control \" id=\"bsxInputGroupPasswordToggle\" type=\"text\" value=\"CRM-2048\" aria-describedby=\"bsxInputGroupPasswordToggleAddon bsxInputGroupPasswordToggleFeedback\">\n    <button class=\"btn btn-outline-secondary\" type=\"button\">Show</button>\n    <div class=\"invalid-feedback\" id=\"bsxInputGroupPasswordToggleFeedback\">Check this value before saving.</div>\n  </div>\n</div>"
  },
  {
    "name": "close-button-hover-ring",
    "level": "extended",
    "category": "close-button",
    "directory": "close-button",
    "className": "bsx-close-button-hover-ring",
    "component": "close-button",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "medium",
    "cssProperties": [
      "box-shadow"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "dismiss, clear, and close affordances",
    "avoidFor": "destructive actions without confirmation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/close-button/close-button-hover-ring.html",
    "snippet": "<div class=\"alert alert-light border d-flex align-items-center justify-content-between gap-3 bsx-close-button-hover-ring\" role=\"status\">\n  <span>Close Button Hover Ring</span>\n  <button type=\"button\" class=\"btn-close\" aria-label=\"Close\"></button>\n</div>"
  },
  {
    "name": "close-button-confirm-pending",
    "level": "extended",
    "category": "close-button",
    "directory": "close-button",
    "className": "bsx-close-button-confirm-pending",
    "component": "close-button",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "medium",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      "[aria-busy]",
      ".bsx-is-loading"
    ],
    "bestFor": "dismiss, clear, and close affordances",
    "avoidFor": "destructive actions without confirmation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/close-button/close-button-confirm-pending.html",
    "snippet": "<div class=\"alert alert-light border d-flex align-items-center justify-content-between gap-3 bsx-close-button-confirm-pending\" role=\"status\">\n  <span>Close Button Confirm Pending</span>\n  <button type=\"button\" class=\"btn-close\" aria-label=\"Close\"></button>\n</div>"
  },
  {
    "name": "close-button-toast-dismiss",
    "level": "extended",
    "category": "close-button",
    "directory": "close-button",
    "className": "bsx-close-button-toast-dismiss",
    "component": "close-button",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "medium",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "dismiss, clear, and close affordances",
    "avoidFor": "destructive actions without confirmation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/close-button/close-button-toast-dismiss.html",
    "snippet": "<div class=\"alert alert-light border d-flex align-items-center justify-content-between gap-3 bsx-close-button-toast-dismiss\" role=\"status\">\n  <span>Close Button Toast Dismiss</span>\n  <button type=\"button\" class=\"btn-close\" aria-label=\"Close\"></button>\n</div>"
  },
  {
    "name": "close-button-panel-dismiss",
    "level": "extended",
    "category": "close-button",
    "directory": "close-button",
    "className": "bsx-close-button-panel-dismiss",
    "component": "close-button",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "medium",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "dismiss, clear, and close affordances",
    "avoidFor": "destructive actions without confirmation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/close-button/close-button-panel-dismiss.html",
    "snippet": "<div class=\"alert alert-light border d-flex align-items-center justify-content-between gap-3 bsx-close-button-panel-dismiss\" role=\"status\">\n  <span>Close Button Panel Dismiss</span>\n  <button type=\"button\" class=\"btn-close\" aria-label=\"Close\"></button>\n</div>"
  },
  {
    "name": "close-button-clear-filter",
    "level": "extended",
    "category": "close-button",
    "directory": "close-button",
    "className": "bsx-close-button-clear-filter",
    "component": "close-button",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "component-state",
    "density": "medium",
    "risk": "medium",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "dismiss, clear, and close affordances",
    "avoidFor": "destructive actions without confirmation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/close-button/close-button-clear-filter.html",
    "snippet": "<div class=\"alert alert-light border d-flex align-items-center justify-content-between gap-3 bsx-close-button-clear-filter\" role=\"status\">\n  <span>Close Button Clear Filter</span>\n  <button type=\"button\" class=\"btn-close\" aria-label=\"Close\"></button>\n</div>"
  },
  {
    "name": "crud-row-create",
    "level": "extended",
    "category": "admin/crud",
    "directory": "admin/crud",
    "className": "bsx-crud-row-create",
    "component": "admin/crud",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "workflow-state",
    "density": "high",
    "risk": "medium",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "CRUD tables, inline edit, dirty state, save feedback, and bulk actions",
    "avoidFor": "marketing cards",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/admin/crud/crud-row-create.html",
    "snippet": "<div class=\"table-responsive bsx-crud-row-create\">\n  <div class=\"d-flex align-items-center justify-content-between gap-2 mb-2\">\n    <span class=\"small text-body-secondary\">3 selected records</span>\n    <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Bulk actions\">\n      <button type=\"button\" class=\"btn btn-outline-secondary\">Edit</button>\n      <button type=\"button\" class=\"btn btn-outline-danger\">Delete</button>\n    </div>\n  </div>\n  <table class=\"table table-hover align-middle mb-0\">\n    <thead><tr><th scope=\"col\">Customer</th><th scope=\"col\">State</th><th scope=\"col\">Updated</th></tr></thead>\n    <tbody>\n      <tr class=\"\">\n        <th scope=\"row\">Acme Ltd</th>\n        <td><span class=\"badge text-bg-primary\">Open</span></td>\n        <td><span class=\"text-body-secondary\">Now</span></td>\n      </tr>\n    </tbody>\n  </table>\n</div>"
  },
  {
    "name": "crud-row-save-pending",
    "level": "extended",
    "category": "admin/crud",
    "directory": "admin/crud",
    "className": "bsx-crud-row-save-pending",
    "component": "admin/crud",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "workflow-state",
    "density": "high",
    "risk": "medium",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      "[aria-busy]",
      ".bsx-is-loading"
    ],
    "bestFor": "CRUD tables, inline edit, dirty state, save feedback, and bulk actions",
    "avoidFor": "marketing cards",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/admin/crud/crud-row-save-pending.html",
    "snippet": "<div class=\"table-responsive bsx-crud-row-save-pending\">\n  <div class=\"d-flex align-items-center justify-content-between gap-2 mb-2\">\n    <span class=\"small text-body-secondary\">3 selected records</span>\n    <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Bulk actions\">\n      <button type=\"button\" class=\"btn btn-outline-secondary\">Edit</button>\n      <button type=\"button\" class=\"btn btn-outline-danger\">Delete</button>\n    </div>\n  </div>\n  <table class=\"table table-hover align-middle mb-0\">\n    <thead><tr><th scope=\"col\">Customer</th><th scope=\"col\">State</th><th scope=\"col\">Updated</th></tr></thead>\n    <tbody>\n      <tr class=\"bsx-is-loading\">\n        <th scope=\"row\">Acme Ltd</th>\n        <td><span class=\"badge text-bg-primary\">Open</span></td>\n        <td><span class=\"text-body-secondary\">Now</span></td>\n      </tr>\n    </tbody>\n  </table>\n</div>"
  },
  {
    "name": "crud-row-save-success",
    "level": "extended",
    "category": "admin/crud",
    "directory": "admin/crud",
    "className": "bsx-crud-row-save-success",
    "component": "admin/crud",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "workflow-state",
    "density": "high",
    "risk": "medium",
    "cssProperties": [
      "opacity",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ".bsx-is-success"
    ],
    "bestFor": "CRUD tables, inline edit, dirty state, save feedback, and bulk actions",
    "avoidFor": "marketing cards",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/admin/crud/crud-row-save-success.html",
    "snippet": "<div class=\"table-responsive bsx-crud-row-save-success\">\n  <div class=\"d-flex align-items-center justify-content-between gap-2 mb-2\">\n    <span class=\"small text-body-secondary\">3 selected records</span>\n    <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Bulk actions\">\n      <button type=\"button\" class=\"btn btn-outline-secondary\">Edit</button>\n      <button type=\"button\" class=\"btn btn-outline-danger\">Delete</button>\n    </div>\n  </div>\n  <table class=\"table table-hover align-middle mb-0\">\n    <thead><tr><th scope=\"col\">Customer</th><th scope=\"col\">State</th><th scope=\"col\">Updated</th></tr></thead>\n    <tbody>\n      <tr class=\"bsx-is-success\">\n        <th scope=\"row\">Acme Ltd</th>\n        <td><span class=\"badge text-bg-primary\">Open</span></td>\n        <td><span class=\"text-body-secondary\">Now</span></td>\n      </tr>\n    </tbody>\n  </table>\n</div>"
  },
  {
    "name": "crud-row-save-error",
    "level": "extended",
    "category": "admin/crud",
    "directory": "admin/crud",
    "className": "bsx-crud-row-save-error",
    "component": "admin/crud",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "workflow-state",
    "density": "high",
    "risk": "medium",
    "cssProperties": [
      "opacity",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ".bsx-is-error"
    ],
    "bestFor": "CRUD tables, inline edit, dirty state, save feedback, and bulk actions",
    "avoidFor": "marketing cards",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/admin/crud/crud-row-save-error.html",
    "snippet": "<div class=\"table-responsive bsx-crud-row-save-error\">\n  <div class=\"d-flex align-items-center justify-content-between gap-2 mb-2\">\n    <span class=\"small text-body-secondary\">3 selected records</span>\n    <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Bulk actions\">\n      <button type=\"button\" class=\"btn btn-outline-secondary\">Edit</button>\n      <button type=\"button\" class=\"btn btn-outline-danger\">Delete</button>\n    </div>\n  </div>\n  <table class=\"table table-hover align-middle mb-0\">\n    <thead><tr><th scope=\"col\">Customer</th><th scope=\"col\">State</th><th scope=\"col\">Updated</th></tr></thead>\n    <tbody>\n      <tr class=\"bsx-is-error\">\n        <th scope=\"row\">Acme Ltd</th>\n        <td><span class=\"badge text-bg-primary\">Open</span></td>\n        <td><span class=\"text-body-secondary\">Now</span></td>\n      </tr>\n    </tbody>\n  </table>\n</div>"
  },
  {
    "name": "crud-inline-edit-focus",
    "level": "extended",
    "category": "admin/crud",
    "directory": "admin/crud",
    "className": "bsx-crud-inline-edit-focus",
    "component": "admin/crud",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "workflow-state",
    "density": "high",
    "risk": "medium",
    "cssProperties": [
      "transform",
      "opacity",
      "box-shadow"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "CRUD tables, inline edit, dirty state, save feedback, and bulk actions",
    "avoidFor": "marketing cards",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/admin/crud/crud-inline-edit-focus.html",
    "snippet": "<div class=\"table-responsive bsx-crud-inline-edit-focus\">\n  <div class=\"d-flex align-items-center justify-content-between gap-2 mb-2\">\n    <span class=\"small text-body-secondary\">3 selected records</span>\n    <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Bulk actions\">\n      <button type=\"button\" class=\"btn btn-outline-secondary\">Edit</button>\n      <button type=\"button\" class=\"btn btn-outline-danger\">Delete</button>\n    </div>\n  </div>\n  <table class=\"table table-hover align-middle mb-0\">\n    <thead><tr><th scope=\"col\">Customer</th><th scope=\"col\">State</th><th scope=\"col\">Updated</th></tr></thead>\n    <tbody>\n      <tr class=\"\">\n        <th scope=\"row\">Acme Ltd</th>\n        <td><span class=\"badge text-bg-primary\">Open</span></td>\n        <td><span class=\"text-body-secondary\">Now</span></td>\n      </tr>\n    </tbody>\n  </table>\n</div>"
  },
  {
    "name": "crud-inline-edit-dirty",
    "level": "extended",
    "category": "admin/crud",
    "directory": "admin/crud",
    "className": "bsx-crud-inline-edit-dirty",
    "component": "admin/crud",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "workflow-state",
    "density": "high",
    "risk": "medium",
    "cssProperties": [
      "transform",
      "opacity",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ".bsx-is-dirty"
    ],
    "bestFor": "CRUD tables, inline edit, dirty state, save feedback, and bulk actions",
    "avoidFor": "marketing cards",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/admin/crud/crud-inline-edit-dirty.html",
    "snippet": "<div class=\"table-responsive bsx-crud-inline-edit-dirty\">\n  <div class=\"d-flex align-items-center justify-content-between gap-2 mb-2\">\n    <span class=\"small text-body-secondary\">3 selected records</span>\n    <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Bulk actions\">\n      <button type=\"button\" class=\"btn btn-outline-secondary\">Edit</button>\n      <button type=\"button\" class=\"btn btn-outline-danger\">Delete</button>\n    </div>\n  </div>\n  <table class=\"table table-hover align-middle mb-0\">\n    <thead><tr><th scope=\"col\">Customer</th><th scope=\"col\">State</th><th scope=\"col\">Updated</th></tr></thead>\n    <tbody>\n      <tr class=\"bsx-is-dirty\">\n        <th scope=\"row\">Acme Ltd</th>\n        <td><span class=\"badge text-bg-primary\">Open</span></td>\n        <td><span class=\"text-body-secondary\">Now</span></td>\n      </tr>\n    </tbody>\n  </table>\n</div>"
  },
  {
    "name": "crud-bulk-toolbar-reveal",
    "level": "extended",
    "category": "admin/crud",
    "directory": "admin/crud",
    "className": "bsx-crud-bulk-toolbar-reveal",
    "component": "admin/crud",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "workflow-state",
    "density": "high",
    "risk": "medium",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".bsx-is-selected"
    ],
    "bestFor": "CRUD tables, inline edit, dirty state, save feedback, and bulk actions",
    "avoidFor": "marketing cards",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/admin/crud/crud-bulk-toolbar-reveal.html",
    "snippet": "<div class=\"table-responsive bsx-crud-bulk-toolbar-reveal\">\n  <div class=\"d-flex align-items-center justify-content-between gap-2 mb-2\">\n    <span class=\"small text-body-secondary\">3 selected records</span>\n    <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Bulk actions\">\n      <button type=\"button\" class=\"btn btn-outline-secondary\">Edit</button>\n      <button type=\"button\" class=\"btn btn-outline-danger\">Delete</button>\n    </div>\n  </div>\n  <table class=\"table table-hover align-middle mb-0\">\n    <thead><tr><th scope=\"col\">Customer</th><th scope=\"col\">State</th><th scope=\"col\">Updated</th></tr></thead>\n    <tbody>\n      <tr class=\"\">\n        <th scope=\"row\">Acme Ltd</th>\n        <td><span class=\"badge text-bg-primary\">Open</span></td>\n        <td><span class=\"text-body-secondary\">Now</span></td>\n      </tr>\n    </tbody>\n  </table>\n</div>"
  },
  {
    "name": "crud-delete-confirm-row",
    "level": "extended",
    "category": "admin/crud",
    "directory": "admin/crud",
    "className": "bsx-crud-delete-confirm-row",
    "component": "admin/crud",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "workflow-state",
    "density": "high",
    "risk": "medium",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ".bsx-is-error"
    ],
    "bestFor": "CRUD tables, inline edit, dirty state, save feedback, and bulk actions",
    "avoidFor": "marketing cards",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/admin/crud/crud-delete-confirm-row.html",
    "snippet": "<div class=\"table-responsive bsx-crud-delete-confirm-row\">\n  <div class=\"d-flex align-items-center justify-content-between gap-2 mb-2\">\n    <span class=\"small text-body-secondary\">3 selected records</span>\n    <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Bulk actions\">\n      <button type=\"button\" class=\"btn btn-outline-secondary\">Edit</button>\n      <button type=\"button\" class=\"btn btn-outline-danger\">Delete</button>\n    </div>\n  </div>\n  <table class=\"table table-hover align-middle mb-0\">\n    <thead><tr><th scope=\"col\">Customer</th><th scope=\"col\">State</th><th scope=\"col\">Updated</th></tr></thead>\n    <tbody>\n      <tr class=\"bsx-is-error\">\n        <th scope=\"row\">Acme Ltd</th>\n        <td><span class=\"badge text-bg-primary\">Open</span></td>\n        <td><span class=\"text-body-secondary\">Now</span></td>\n      </tr>\n    </tbody>\n  </table>\n</div>"
  },
  {
    "name": "crud-permission-disabled",
    "level": "extended",
    "category": "admin/crud",
    "directory": "admin/crud",
    "className": "bsx-crud-permission-disabled",
    "component": "admin/crud",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "workflow-state",
    "density": "high",
    "risk": "medium",
    "cssProperties": [
      "opacity",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ".disabled",
      "[disabled]",
      "[aria-disabled]"
    ],
    "bestFor": "CRUD tables, inline edit, dirty state, save feedback, and bulk actions",
    "avoidFor": "marketing cards",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/admin/crud/crud-permission-disabled.html",
    "snippet": "<div class=\"table-responsive bsx-crud-permission-disabled\">\n  <div class=\"d-flex align-items-center justify-content-between gap-2 mb-2\">\n    <span class=\"small text-body-secondary\">3 selected records</span>\n    <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Bulk actions\">\n      <button type=\"button\" class=\"btn btn-outline-secondary\">Edit</button>\n      <button type=\"button\" class=\"btn btn-outline-danger\">Delete</button>\n    </div>\n  </div>\n  <table class=\"table table-hover align-middle mb-0\">\n    <thead><tr><th scope=\"col\">Customer</th><th scope=\"col\">State</th><th scope=\"col\">Updated</th></tr></thead>\n    <tbody>\n      <tr class=\"\">\n        <th scope=\"row\">Acme Ltd</th>\n        <td><span class=\"badge text-bg-primary\">Open</span></td>\n        <td><span class=\"text-body-secondary\">Now</span></td>\n      </tr>\n    </tbody>\n  </table>\n</div>"
  },
  {
    "name": "filter-chip-active",
    "level": "extended",
    "category": "filter/search",
    "directory": "filter/search",
    "className": "bsx-filter-chip-active",
    "component": "filter/search",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "workflow-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "box-shadow",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "admin filters, search results, chip removal, and empty results",
    "avoidFor": "static navigation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/filter/search/filter-chip-active.html",
    "snippet": "<section class=\"card bsx-filter-chip-active\">\n  <div class=\"card-body\">\n    <label class=\"form-label\" for=\"bsxFilterChipActive\">Filter Chip Active</label>\n    <div class=\"input-group mb-3\" >\n      <input class=\"form-control\" id=\"bsxFilterChipActive\" type=\"search\" value=\"active customers\">\n      <button class=\"btn btn-outline-secondary\" type=\"button\">Search</button>\n    </div>\n    <div class=\"d-flex flex-wrap gap-2\">\n      <span class=\"badge text-bg-primary bsx-filter-chip\">Status: active</span>\n      <span class=\"badge text-bg-secondary bsx-filter-chip\">Owner: me</span>\n    </div>\n  </div>\n</section>"
  },
  {
    "name": "filter-chip-remove",
    "level": "extended",
    "category": "filter/search",
    "directory": "filter/search",
    "className": "bsx-filter-chip-remove",
    "component": "filter/search",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "workflow-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "admin filters, search results, chip removal, and empty results",
    "avoidFor": "static navigation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/filter/search/filter-chip-remove.html",
    "snippet": "<section class=\"card bsx-filter-chip-remove\">\n  <div class=\"card-body\">\n    <label class=\"form-label\" for=\"bsxFilterChipRemove\">Filter Chip Remove</label>\n    <div class=\"input-group mb-3\" >\n      <input class=\"form-control\" id=\"bsxFilterChipRemove\" type=\"search\" value=\"active customers\">\n      <button class=\"btn btn-outline-secondary\" type=\"button\">Search</button>\n    </div>\n    <div class=\"d-flex flex-wrap gap-2\">\n      <span class=\"badge text-bg-primary bsx-filter-chip\">Status: active</span>\n      <span class=\"badge text-bg-secondary bsx-filter-chip\">Owner: me</span>\n    </div>\n  </div>\n</section>"
  },
  {
    "name": "filter-panel-reveal",
    "level": "extended",
    "category": "filter/search",
    "directory": "filter/search",
    "className": "bsx-filter-panel-reveal",
    "component": "filter/search",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "workflow-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "admin filters, search results, chip removal, and empty results",
    "avoidFor": "static navigation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/filter/search/filter-panel-reveal.html",
    "snippet": "<section class=\"card bsx-filter-panel-reveal\">\n  <div class=\"card-body\">\n    <label class=\"form-label\" for=\"bsxFilterPanelReveal\">Filter Panel Reveal</label>\n    <div class=\"input-group mb-3\" >\n      <input class=\"form-control\" id=\"bsxFilterPanelReveal\" type=\"search\" value=\"active customers\">\n      <button class=\"btn btn-outline-secondary\" type=\"button\">Search</button>\n    </div>\n    <div class=\"d-flex flex-wrap gap-2\">\n      <span class=\"badge text-bg-primary bsx-filter-chip\">Status: active</span>\n      <span class=\"badge text-bg-secondary bsx-filter-chip\">Owner: me</span>\n    </div>\n  </div>\n</section>"
  },
  {
    "name": "filter-reset-flash",
    "level": "extended",
    "category": "filter/search",
    "directory": "filter/search",
    "className": "bsx-filter-reset-flash",
    "component": "filter/search",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "workflow-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "admin filters, search results, chip removal, and empty results",
    "avoidFor": "static navigation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/filter/search/filter-reset-flash.html",
    "snippet": "<section class=\"card bsx-filter-reset-flash\">\n  <div class=\"card-body\">\n    <label class=\"form-label\" for=\"bsxFilterResetFlash\">Filter Reset Flash</label>\n    <div class=\"input-group mb-3\" >\n      <input class=\"form-control\" id=\"bsxFilterResetFlash\" type=\"search\" value=\"active customers\">\n      <button class=\"btn btn-outline-secondary\" type=\"button\">Search</button>\n    </div>\n    <div class=\"d-flex flex-wrap gap-2\">\n      <span class=\"badge text-bg-primary bsx-filter-chip\">Status: active</span>\n      <span class=\"badge text-bg-secondary bsx-filter-chip\">Owner: me</span>\n    </div>\n  </div>\n</section>"
  },
  {
    "name": "search-input-focus",
    "level": "extended",
    "category": "filter/search",
    "directory": "filter/search",
    "className": "bsx-search-input-focus",
    "component": "filter/search",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "workflow-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "box-shadow"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "admin filters, search results, chip removal, and empty results",
    "avoidFor": "static navigation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/filter/search/search-input-focus.html",
    "snippet": "<section class=\"card bsx-search-input-focus\">\n  <div class=\"card-body\">\n    <label class=\"form-label\" for=\"bsxSearchInputFocus\">Search Input Focus</label>\n    <div class=\"input-group mb-3\" aria-busy=\"true\">\n      <input class=\"form-control\" id=\"bsxSearchInputFocus\" type=\"search\" value=\"active customers\">\n      <button class=\"btn btn-outline-secondary\" type=\"button\">Search</button>\n    </div>\n    <div class=\"d-flex flex-wrap gap-2\">\n      <span class=\"badge text-bg-primary bsx-filter-chip\">Status: active</span>\n      <span class=\"badge text-bg-secondary bsx-filter-chip\">Owner: me</span>\n    </div>\n  </div>\n</section>"
  },
  {
    "name": "search-results-update",
    "level": "extended",
    "category": "filter/search",
    "directory": "filter/search",
    "className": "bsx-search-results-update",
    "component": "filter/search",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "workflow-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "admin filters, search results, chip removal, and empty results",
    "avoidFor": "static navigation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/filter/search/search-results-update.html",
    "snippet": "<section class=\"card bsx-search-results-update\">\n  <div class=\"card-body\">\n    <label class=\"form-label\" for=\"bsxSearchResultsUpdate\">Search Results Update</label>\n    <div class=\"input-group mb-3\" aria-busy=\"true\">\n      <input class=\"form-control\" id=\"bsxSearchResultsUpdate\" type=\"search\" value=\"active customers\">\n      <button class=\"btn btn-outline-secondary\" type=\"button\">Search</button>\n    </div>\n    <div class=\"d-flex flex-wrap gap-2\">\n      <span class=\"badge text-bg-primary bsx-filter-chip\">Status: active</span>\n      <span class=\"badge text-bg-secondary bsx-filter-chip\">Owner: me</span>\n    </div>\n  </div>\n</section>"
  },
  {
    "name": "search-no-results-state",
    "level": "extended",
    "category": "filter/search",
    "directory": "filter/search",
    "className": "bsx-search-no-results-state",
    "component": "filter/search",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "workflow-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "admin filters, search results, chip removal, and empty results",
    "avoidFor": "static navigation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/filter/search/search-no-results-state.html",
    "snippet": "<section class=\"card bsx-search-no-results-state\">\n  <div class=\"card-body\">\n    <label class=\"form-label\" for=\"bsxSearchNoResultsState\">Search No Results State</label>\n    <div class=\"input-group mb-3\" aria-busy=\"true\">\n      <input class=\"form-control\" id=\"bsxSearchNoResultsState\" type=\"search\" value=\"active customers\">\n      <button class=\"btn btn-outline-secondary\" type=\"button\">Search</button>\n    </div>\n    <div class=\"d-flex flex-wrap gap-2\">\n      <span class=\"badge text-bg-primary bsx-filter-chip\">Status: active</span>\n      <span class=\"badge text-bg-secondary bsx-filter-chip\">Owner: me</span>\n    </div>\n  </div>\n</section>"
  },
  {
    "name": "form-wizard-step-current",
    "level": "extended",
    "category": "form-wizard",
    "directory": "form-wizard",
    "className": "bsx-form-wizard-step-current",
    "component": "form-wizard",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "form-state",
    "density": "medium",
    "risk": "medium",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ".is-valid",
      ".is-invalid",
      ":focus-within"
    ],
    "bestFor": "multi-step forms with validation and review states",
    "avoidFor": "single-page forms without steps",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/form-wizard/form-wizard-step-current.html",
    "snippet": "<form class=\"bsx-form-wizard-step-current\">\n  <ol class=\"list-unstyled d-flex mb-3\" aria-label=\"Form Wizard Step Current\">\n    <li class=\"bsx-step bsx-is-complete\"><span class=\"bsx-step-marker\" aria-hidden=\"true\">✓</span>Account</li>\n    <li class=\"bsx-step bsx-is-active\" aria-current=\"step\"><span class=\"bsx-step-marker\" aria-hidden=\"true\">2</span>Details</li>\n    <li class=\"bsx-step \"><span class=\"bsx-step-marker\" aria-hidden=\"true\">3</span>Review</li>\n  </ol>\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <label class=\"form-label\" for=\"bsxFormWizardStepCurrent\">Company name</label>\n      <input class=\"form-control \" id=\"bsxFormWizardStepCurrent\" type=\"text\" value=\"Acme Ltd\">\n      <div class=\"invalid-feedback\">Resolve this step before submitting.</div>\n    </div>\n    <div class=\"card-footer d-flex justify-content-end gap-2\">\n      <button type=\"button\" class=\"btn btn-outline-secondary\">Back</button>\n      <button type=\"submit\" class=\"btn btn-primary\">Save step</button>\n    </div>\n  </div>\n</form>"
  },
  {
    "name": "form-wizard-step-complete",
    "level": "extended",
    "category": "form-wizard",
    "directory": "form-wizard",
    "className": "bsx-form-wizard-step-complete",
    "component": "form-wizard",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "form-state",
    "density": "medium",
    "risk": "medium",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ".is-valid",
      ".is-invalid",
      ":focus-within",
      ".bsx-is-success"
    ],
    "bestFor": "multi-step forms with validation and review states",
    "avoidFor": "single-page forms without steps",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/form-wizard/form-wizard-step-complete.html",
    "snippet": "<form class=\"bsx-form-wizard-step-complete\">\n  <ol class=\"list-unstyled d-flex mb-3\" aria-label=\"Form Wizard Step Complete\">\n    <li class=\"bsx-step bsx-is-complete\"><span class=\"bsx-step-marker\" aria-hidden=\"true\">✓</span>Account</li>\n    <li class=\"bsx-step bsx-is-active\" aria-current=\"step\"><span class=\"bsx-step-marker\" aria-hidden=\"true\">2</span>Details</li>\n    <li class=\"bsx-step \"><span class=\"bsx-step-marker\" aria-hidden=\"true\">3</span>Review</li>\n  </ol>\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <label class=\"form-label\" for=\"bsxFormWizardStepComplete\">Company name</label>\n      <input class=\"form-control \" id=\"bsxFormWizardStepComplete\" type=\"text\" value=\"Acme Ltd\">\n      <div class=\"invalid-feedback\">Resolve this step before submitting.</div>\n    </div>\n    <div class=\"card-footer d-flex justify-content-end gap-2\">\n      <button type=\"button\" class=\"btn btn-outline-secondary\">Back</button>\n      <button type=\"submit\" class=\"btn btn-primary\">Save step</button>\n    </div>\n  </div>\n</form>"
  },
  {
    "name": "form-wizard-step-error",
    "level": "extended",
    "category": "form-wizard",
    "directory": "form-wizard",
    "className": "bsx-form-wizard-step-error",
    "component": "form-wizard",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "form-state",
    "density": "medium",
    "risk": "medium",
    "cssProperties": [
      "opacity",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ".is-valid",
      ".is-invalid",
      ":focus-within",
      ".bsx-is-error"
    ],
    "bestFor": "multi-step forms with validation and review states",
    "avoidFor": "single-page forms without steps",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/form-wizard/form-wizard-step-error.html",
    "snippet": "<form class=\"bsx-form-wizard-step-error\">\n  <ol class=\"list-unstyled d-flex mb-3\" aria-label=\"Form Wizard Step Error\">\n    <li class=\"bsx-step bsx-is-complete\"><span class=\"bsx-step-marker\" aria-hidden=\"true\">✓</span>Account</li>\n    <li class=\"bsx-step bsx-is-active\" aria-current=\"step\"><span class=\"bsx-step-marker\" aria-hidden=\"true\">2</span>Details</li>\n    <li class=\"bsx-step bsx-is-error\"><span class=\"bsx-step-marker\" aria-hidden=\"true\">3</span>Review</li>\n  </ol>\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <label class=\"form-label\" for=\"bsxFormWizardStepError\">Company name</label>\n      <input class=\"form-control is-invalid\" id=\"bsxFormWizardStepError\" type=\"text\" value=\"Acme Ltd\">\n      <div class=\"invalid-feedback\">Resolve this step before submitting.</div>\n    </div>\n    <div class=\"card-footer d-flex justify-content-end gap-2\">\n      <button type=\"button\" class=\"btn btn-outline-secondary\">Back</button>\n      <button type=\"submit\" class=\"btn btn-primary\">Save step</button>\n    </div>\n  </div>\n</form>"
  },
  {
    "name": "form-wizard-progress-sync",
    "level": "extended",
    "category": "form-wizard",
    "directory": "form-wizard",
    "className": "bsx-form-wizard-progress-sync",
    "component": "form-wizard",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "form-state",
    "density": "medium",
    "risk": "medium",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ".is-valid",
      ".is-invalid",
      ":focus-within"
    ],
    "bestFor": "multi-step forms with validation and review states",
    "avoidFor": "single-page forms without steps",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/form-wizard/form-wizard-progress-sync.html",
    "snippet": "<form class=\"bsx-form-wizard-progress-sync\">\n  <ol class=\"list-unstyled d-flex mb-3\" aria-label=\"Form Wizard Progress Sync\">\n    <li class=\"bsx-step bsx-is-complete\"><span class=\"bsx-step-marker\" aria-hidden=\"true\">✓</span>Account</li>\n    <li class=\"bsx-step bsx-is-active\" aria-current=\"step\"><span class=\"bsx-step-marker\" aria-hidden=\"true\">2</span>Details</li>\n    <li class=\"bsx-step \"><span class=\"bsx-step-marker\" aria-hidden=\"true\">3</span>Review</li>\n  </ol>\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <label class=\"form-label\" for=\"bsxFormWizardProgressSync\">Company name</label>\n      <input class=\"form-control \" id=\"bsxFormWizardProgressSync\" type=\"text\" value=\"Acme Ltd\">\n      <div class=\"invalid-feedback\">Resolve this step before submitting.</div>\n    </div>\n    <div class=\"card-footer d-flex justify-content-end gap-2\">\n      <button type=\"button\" class=\"btn btn-outline-secondary\">Back</button>\n      <button type=\"submit\" class=\"btn btn-primary\">Save step</button>\n    </div>\n  </div>\n</form>"
  },
  {
    "name": "form-wizard-section-enter",
    "level": "extended",
    "category": "form-wizard",
    "directory": "form-wizard",
    "className": "bsx-form-wizard-section-enter",
    "component": "form-wizard",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "form-state",
    "density": "medium",
    "risk": "medium",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ".is-valid",
      ".is-invalid",
      ":focus-within"
    ],
    "bestFor": "multi-step forms with validation and review states",
    "avoidFor": "single-page forms without steps",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/form-wizard/form-wizard-section-enter.html",
    "snippet": "<form class=\"bsx-form-wizard-section-enter\">\n  <ol class=\"list-unstyled d-flex mb-3\" aria-label=\"Form Wizard Section Enter\">\n    <li class=\"bsx-step bsx-is-complete\"><span class=\"bsx-step-marker\" aria-hidden=\"true\">✓</span>Account</li>\n    <li class=\"bsx-step bsx-is-active\" aria-current=\"step\"><span class=\"bsx-step-marker\" aria-hidden=\"true\">2</span>Details</li>\n    <li class=\"bsx-step \"><span class=\"bsx-step-marker\" aria-hidden=\"true\">3</span>Review</li>\n  </ol>\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <label class=\"form-label\" for=\"bsxFormWizardSectionEnter\">Company name</label>\n      <input class=\"form-control \" id=\"bsxFormWizardSectionEnter\" type=\"text\" value=\"Acme Ltd\">\n      <div class=\"invalid-feedback\">Resolve this step before submitting.</div>\n    </div>\n    <div class=\"card-footer d-flex justify-content-end gap-2\">\n      <button type=\"button\" class=\"btn btn-outline-secondary\">Back</button>\n      <button type=\"submit\" class=\"btn btn-primary\">Save step</button>\n    </div>\n  </div>\n</form>"
  },
  {
    "name": "form-wizard-section-exit",
    "level": "extended",
    "category": "form-wizard",
    "directory": "form-wizard",
    "className": "bsx-form-wizard-section-exit",
    "component": "form-wizard",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "form-state",
    "density": "medium",
    "risk": "medium",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ".is-valid",
      ".is-invalid",
      ":focus-within"
    ],
    "bestFor": "multi-step forms with validation and review states",
    "avoidFor": "single-page forms without steps",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/form-wizard/form-wizard-section-exit.html",
    "snippet": "<form class=\"bsx-form-wizard-section-exit\">\n  <ol class=\"list-unstyled d-flex mb-3\" aria-label=\"Form Wizard Section Exit\">\n    <li class=\"bsx-step bsx-is-complete\"><span class=\"bsx-step-marker\" aria-hidden=\"true\">✓</span>Account</li>\n    <li class=\"bsx-step bsx-is-active\" aria-current=\"step\"><span class=\"bsx-step-marker\" aria-hidden=\"true\">2</span>Details</li>\n    <li class=\"bsx-step \"><span class=\"bsx-step-marker\" aria-hidden=\"true\">3</span>Review</li>\n  </ol>\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <label class=\"form-label\" for=\"bsxFormWizardSectionExit\">Company name</label>\n      <input class=\"form-control \" id=\"bsxFormWizardSectionExit\" type=\"text\" value=\"Acme Ltd\">\n      <div class=\"invalid-feedback\">Resolve this step before submitting.</div>\n    </div>\n    <div class=\"card-footer d-flex justify-content-end gap-2\">\n      <button type=\"button\" class=\"btn btn-outline-secondary\">Back</button>\n      <button type=\"submit\" class=\"btn btn-primary\">Save step</button>\n    </div>\n  </div>\n</form>"
  },
  {
    "name": "form-wizard-review-dirty",
    "level": "extended",
    "category": "form-wizard",
    "directory": "form-wizard",
    "className": "bsx-form-wizard-review-dirty",
    "component": "form-wizard",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "form-state",
    "density": "medium",
    "risk": "medium",
    "cssProperties": [
      "opacity",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ".is-valid",
      ".is-invalid",
      ":focus-within",
      ".bsx-is-dirty"
    ],
    "bestFor": "multi-step forms with validation and review states",
    "avoidFor": "single-page forms without steps",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/form-wizard/form-wizard-review-dirty.html",
    "snippet": "<form class=\"bsx-form-wizard-review-dirty\">\n  <ol class=\"list-unstyled d-flex mb-3\" aria-label=\"Form Wizard Review Dirty\">\n    <li class=\"bsx-step bsx-is-complete\"><span class=\"bsx-step-marker\" aria-hidden=\"true\">✓</span>Account</li>\n    <li class=\"bsx-step bsx-is-active\" aria-current=\"step\"><span class=\"bsx-step-marker\" aria-hidden=\"true\">2</span>Details</li>\n    <li class=\"bsx-step \"><span class=\"bsx-step-marker\" aria-hidden=\"true\">3</span>Review</li>\n  </ol>\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <label class=\"form-label\" for=\"bsxFormWizardReviewDirty\">Company name</label>\n      <input class=\"form-control \" id=\"bsxFormWizardReviewDirty\" type=\"text\" value=\"Acme Ltd\">\n      <div class=\"invalid-feedback\">Resolve this step before submitting.</div>\n    </div>\n    <div class=\"card-footer d-flex justify-content-end gap-2\">\n      <button type=\"button\" class=\"btn btn-outline-secondary\">Back</button>\n      <button type=\"submit\" class=\"btn btn-primary\">Save step</button>\n    </div>\n  </div>\n</form>"
  },
  {
    "name": "form-wizard-submit-ready",
    "level": "extended",
    "category": "form-wizard",
    "directory": "form-wizard",
    "className": "bsx-form-wizard-submit-ready",
    "component": "form-wizard",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "form-state",
    "density": "medium",
    "risk": "medium",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      ".is-valid",
      ".is-invalid",
      ":focus-within",
      ".bsx-is-success"
    ],
    "bestFor": "multi-step forms with validation and review states",
    "avoidFor": "single-page forms without steps",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/form-wizard/form-wizard-submit-ready.html",
    "snippet": "<form class=\"bsx-form-wizard-submit-ready\">\n  <ol class=\"list-unstyled d-flex mb-3\" aria-label=\"Form Wizard Submit Ready\">\n    <li class=\"bsx-step bsx-is-complete\"><span class=\"bsx-step-marker\" aria-hidden=\"true\">✓</span>Account</li>\n    <li class=\"bsx-step bsx-is-active\" aria-current=\"step\"><span class=\"bsx-step-marker\" aria-hidden=\"true\">2</span>Details</li>\n    <li class=\"bsx-step \"><span class=\"bsx-step-marker\" aria-hidden=\"true\">3</span>Review</li>\n  </ol>\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <label class=\"form-label\" for=\"bsxFormWizardSubmitReady\">Company name</label>\n      <input class=\"form-control \" id=\"bsxFormWizardSubmitReady\" type=\"text\" value=\"Acme Ltd\">\n      <div class=\"invalid-feedback\">Resolve this step before submitting.</div>\n    </div>\n    <div class=\"card-footer d-flex justify-content-end gap-2\">\n      <button type=\"button\" class=\"btn btn-outline-secondary\">Back</button>\n      <button type=\"submit\" class=\"btn btn-primary\">Save step</button>\n    </div>\n  </div>\n</form>"
  },
  {
    "name": "state-empty-reveal",
    "level": "extended",
    "category": "state",
    "directory": "state",
    "className": "bsx-state-empty-reveal",
    "component": "state",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "medium",
    "cssProperties": [
      "transform",
      "opacity"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "empty, error, success, warning, offline, lock, and unsaved states",
    "avoidFor": "decorative content blocks",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/state/state-empty-reveal.html",
    "snippet": "<section class=\"card bsx-state-empty-reveal\" >\n  <div class=\"card-body\">\n    <h2 class=\"h5\">State Empty Reveal</h2>\n    <p class=\"text-body-secondary mb-3\">Use this state for admin workflows that need a clear non-motion signal.</p>\n    <button type=\"button\" class=\"btn btn-primary\">Primary action</button>\n  </div>\n</section>"
  },
  {
    "name": "state-error-inline",
    "level": "extended",
    "category": "state",
    "directory": "state",
    "className": "bsx-state-error-inline",
    "component": "state",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "medium",
    "cssProperties": [
      "transform",
      "opacity",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ".bsx-is-error"
    ],
    "bestFor": "empty, error, success, warning, offline, lock, and unsaved states",
    "avoidFor": "decorative content blocks",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/state/state-error-inline.html",
    "snippet": "<section class=\"card bsx-state-error-inline\" >\n  <div class=\"card-body\">\n    <h2 class=\"h5\">State Error Inline</h2>\n    <p class=\"text-body-secondary mb-3\">Use this state for admin workflows that need a clear non-motion signal.</p>\n    <button type=\"button\" class=\"btn btn-danger\">Primary action</button>\n  </div>\n</section>"
  },
  {
    "name": "state-success-inline",
    "level": "extended",
    "category": "state",
    "directory": "state",
    "className": "bsx-state-success-inline",
    "component": "state",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "medium",
    "cssProperties": [
      "transform",
      "opacity",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ".bsx-is-success"
    ],
    "bestFor": "empty, error, success, warning, offline, lock, and unsaved states",
    "avoidFor": "decorative content blocks",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/state/state-success-inline.html",
    "snippet": "<section class=\"card bsx-state-success-inline\" >\n  <div class=\"card-body\">\n    <h2 class=\"h5\">State Success Inline</h2>\n    <p class=\"text-body-secondary mb-3\">Use this state for admin workflows that need a clear non-motion signal.</p>\n    <button type=\"button\" class=\"btn btn-primary\">Primary action</button>\n  </div>\n</section>"
  },
  {
    "name": "state-warning-inline",
    "level": "extended",
    "category": "state",
    "directory": "state",
    "className": "bsx-state-warning-inline",
    "component": "state",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "medium",
    "cssProperties": [
      "transform",
      "opacity",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "empty, error, success, warning, offline, lock, and unsaved states",
    "avoidFor": "decorative content blocks",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/state/state-warning-inline.html",
    "snippet": "<section class=\"card bsx-state-warning-inline\" >\n  <div class=\"card-body\">\n    <h2 class=\"h5\">State Warning Inline</h2>\n    <p class=\"text-body-secondary mb-3\">Use this state for admin workflows that need a clear non-motion signal.</p>\n    <button type=\"button\" class=\"btn btn-primary\">Primary action</button>\n  </div>\n</section>"
  },
  {
    "name": "state-unsaved-changes",
    "level": "extended",
    "category": "state",
    "directory": "state",
    "className": "bsx-state-unsaved-changes",
    "component": "state",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "medium",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ".bsx-is-dirty"
    ],
    "bestFor": "empty, error, success, warning, offline, lock, and unsaved states",
    "avoidFor": "decorative content blocks",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/state/state-unsaved-changes.html",
    "snippet": "<section class=\"card bsx-state-unsaved-changes\" >\n  <div class=\"card-body\">\n    <h2 class=\"h5\">State Unsaved Changes</h2>\n    <p class=\"text-body-secondary mb-3\">Use this state for admin workflows that need a clear non-motion signal.</p>\n    <button type=\"button\" class=\"btn btn-primary\">Primary action</button>\n  </div>\n</section>"
  },
  {
    "name": "state-offline-banner",
    "level": "extended",
    "category": "state",
    "directory": "state",
    "className": "bsx-state-offline-banner",
    "component": "state",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "medium",
    "cssProperties": [
      "transform",
      "opacity"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "empty, error, success, warning, offline, lock, and unsaved states",
    "avoidFor": "decorative content blocks",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/state/state-offline-banner.html",
    "snippet": "<section class=\"card bsx-state-offline-banner\" >\n  <div class=\"card-body\">\n    <h2 class=\"h5\">State Offline Banner</h2>\n    <p class=\"text-body-secondary mb-3\">Use this state for admin workflows that need a clear non-motion signal.</p>\n    <button type=\"button\" class=\"btn btn-primary\">Primary action</button>\n  </div>\n</section>"
  },
  {
    "name": "state-locked-record",
    "level": "extended",
    "category": "state",
    "directory": "state",
    "className": "bsx-state-locked-record",
    "component": "state",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "feedback-state",
    "density": "medium",
    "risk": "medium",
    "cssProperties": [
      "opacity",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ".disabled",
      "[disabled]",
      "[aria-disabled]"
    ],
    "bestFor": "empty, error, success, warning, offline, lock, and unsaved states",
    "avoidFor": "decorative content blocks",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/state/state-locked-record.html",
    "snippet": "<section class=\"card bsx-state-locked-record\" aria-disabled=\"true\">\n  <div class=\"card-body\">\n    <h2 class=\"h5\">State Locked Record</h2>\n    <p class=\"text-body-secondary mb-3\">Use this state for admin workflows that need a clear non-motion signal.</p>\n    <button type=\"button\" class=\"btn btn-primary\">Primary action</button>\n  </div>\n</section>"
  },
  {
    "name": "data-loading-table-overlay",
    "level": "extended",
    "category": "data-loading",
    "directory": "data-loading",
    "className": "bsx-data-loading-table-overlay",
    "component": "data-loading",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "workflow-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "transform",
      "opacity"
    ],
    "bootstrapStates": [
      "[aria-busy]",
      ".bsx-is-loading"
    ],
    "bestFor": "table, card, metric, filter, save, and inline loading states",
    "avoidFor": "unknown long-running jobs without copy",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/data-loading/data-loading-table-overlay.html",
    "snippet": "<section class=\"card bsx-data-loading-table-overlay\" aria-busy=\"true\" aria-live=\"polite\">\n  <div class=\"card-body\">\n    <div class=\"d-flex align-items-center justify-content-between gap-3 mb-3\">\n      <h2 class=\"h6 mb-0\">Data Loading Table Overlay</h2>\n      <span class=\"spinner-border spinner-border-sm\" aria-hidden=\"true\"></span>\n    </div>\n    <div class=\"bsx-skeleton-line rounded mb-2\"></div>\n    <div class=\"bsx-skeleton-line rounded w-75\"></div>\n  </div>\n</section>"
  },
  {
    "name": "data-loading-card-overlay",
    "level": "extended",
    "category": "data-loading",
    "directory": "data-loading",
    "className": "bsx-data-loading-card-overlay",
    "component": "data-loading",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "workflow-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "transform",
      "opacity"
    ],
    "bootstrapStates": [
      "[aria-busy]",
      ".bsx-is-loading"
    ],
    "bestFor": "table, card, metric, filter, save, and inline loading states",
    "avoidFor": "unknown long-running jobs without copy",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/data-loading/data-loading-card-overlay.html",
    "snippet": "<section class=\"card bsx-data-loading-card-overlay\" aria-busy=\"true\" aria-live=\"polite\">\n  <div class=\"card-body\">\n    <div class=\"d-flex align-items-center justify-content-between gap-3 mb-3\">\n      <h2 class=\"h6 mb-0\">Data Loading Card Overlay</h2>\n      <span class=\"spinner-border spinner-border-sm\" aria-hidden=\"true\"></span>\n    </div>\n    <div class=\"bsx-skeleton-line rounded mb-2\"></div>\n    <div class=\"bsx-skeleton-line rounded w-75\"></div>\n  </div>\n</section>"
  },
  {
    "name": "data-loading-row-skeleton",
    "level": "extended",
    "category": "data-loading",
    "directory": "data-loading",
    "className": "bsx-data-loading-row-skeleton",
    "component": "data-loading",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "workflow-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      "[aria-busy]",
      ".bsx-is-loading"
    ],
    "bestFor": "table, card, metric, filter, save, and inline loading states",
    "avoidFor": "unknown long-running jobs without copy",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/data-loading/data-loading-row-skeleton.html",
    "snippet": "<section class=\"card bsx-data-loading-row-skeleton\" aria-busy=\"true\" aria-live=\"polite\">\n  <div class=\"card-body\">\n    <div class=\"d-flex align-items-center justify-content-between gap-3 mb-3\">\n      <h2 class=\"h6 mb-0\">Data Loading Row Skeleton</h2>\n      <span class=\"spinner-border spinner-border-sm\" aria-hidden=\"true\"></span>\n    </div>\n    <div class=\"bsx-skeleton-line rounded mb-2\"></div>\n    <div class=\"bsx-skeleton-line rounded w-75\"></div>\n  </div>\n</section>"
  },
  {
    "name": "data-loading-filter-pending",
    "level": "extended",
    "category": "data-loading",
    "directory": "data-loading",
    "className": "bsx-data-loading-filter-pending",
    "component": "data-loading",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "workflow-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      "[aria-busy]",
      ".bsx-is-loading"
    ],
    "bestFor": "table, card, metric, filter, save, and inline loading states",
    "avoidFor": "unknown long-running jobs without copy",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/data-loading/data-loading-filter-pending.html",
    "snippet": "<section class=\"card bsx-data-loading-filter-pending\" aria-busy=\"true\" aria-live=\"polite\">\n  <div class=\"card-body\">\n    <div class=\"d-flex align-items-center justify-content-between gap-3 mb-3\">\n      <h2 class=\"h6 mb-0\">Data Loading Filter Pending</h2>\n      <span class=\"spinner-border spinner-border-sm\" aria-hidden=\"true\"></span>\n    </div>\n    <div class=\"bsx-skeleton-line rounded mb-2\"></div>\n    <div class=\"bsx-skeleton-line rounded w-75\"></div>\n  </div>\n</section>"
  },
  {
    "name": "data-loading-save-button",
    "level": "extended",
    "category": "data-loading",
    "directory": "data-loading",
    "className": "bsx-data-loading-save-button",
    "component": "data-loading",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "workflow-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      "[aria-busy]",
      ".bsx-is-loading"
    ],
    "bestFor": "table, card, metric, filter, save, and inline loading states",
    "avoidFor": "unknown long-running jobs without copy",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/data-loading/data-loading-save-button.html",
    "snippet": "<section class=\"card bsx-data-loading-save-button\" aria-busy=\"true\" aria-live=\"polite\">\n  <div class=\"card-body\">\n    <div class=\"d-flex align-items-center justify-content-between gap-3 mb-3\">\n      <h2 class=\"h6 mb-0\">Data Loading Save Button</h2>\n      <span class=\"spinner-border spinner-border-sm\" aria-hidden=\"true\"></span>\n    </div>\n    <div class=\"bsx-skeleton-line rounded mb-2\"></div>\n    <div class=\"bsx-skeleton-line rounded w-75\"></div>\n  </div>\n</section>"
  },
  {
    "name": "data-loading-metric-refresh",
    "level": "extended",
    "category": "data-loading",
    "directory": "data-loading",
    "className": "bsx-data-loading-metric-refresh",
    "component": "data-loading",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "opacity",
    "kind": "workflow-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      "[aria-busy]",
      ".bsx-is-loading"
    ],
    "bestFor": "table, card, metric, filter, save, and inline loading states",
    "avoidFor": "unknown long-running jobs without copy",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/data-loading/data-loading-metric-refresh.html",
    "snippet": "<section class=\"card bsx-data-loading-metric-refresh\" aria-busy=\"true\" aria-live=\"polite\">\n  <div class=\"card-body\">\n    <div class=\"d-flex align-items-center justify-content-between gap-3 mb-3\">\n      <h2 class=\"h6 mb-0\">Data Loading Metric Refresh</h2>\n      <span class=\"spinner-border spinner-border-sm\" aria-hidden=\"true\"></span>\n    </div>\n    <div class=\"bsx-skeleton-line rounded mb-2\"></div>\n    <div class=\"bsx-skeleton-line rounded w-75\"></div>\n  </div>\n</section>"
  },
  {
    "name": "data-loading-inline-spinner",
    "level": "extended",
    "category": "data-loading",
    "directory": "data-loading",
    "className": "bsx-data-loading-inline-spinner",
    "component": "data-loading",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate + opacity + rotate",
    "kind": "workflow-state",
    "density": "high",
    "risk": "low",
    "cssProperties": [
      "transform",
      "opacity"
    ],
    "bootstrapStates": [
      "[aria-busy]",
      ".bsx-is-loading"
    ],
    "bestFor": "table, card, metric, filter, save, and inline loading states",
    "avoidFor": "unknown long-running jobs without copy",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/data-loading/data-loading-inline-spinner.html",
    "snippet": "<section class=\"card bsx-data-loading-inline-spinner\" aria-busy=\"true\" aria-live=\"polite\">\n  <div class=\"card-body\">\n    <div class=\"d-flex align-items-center justify-content-between gap-3 mb-3\">\n      <h2 class=\"h6 mb-0\">Data Loading Inline Spinner</h2>\n      <span class=\"spinner-border spinner-border-sm\" aria-hidden=\"true\"></span>\n    </div>\n    <div class=\"bsx-skeleton-line rounded mb-2\"></div>\n    <div class=\"bsx-skeleton-line rounded w-75\"></div>\n  </div>\n</section>"
  },
  {
    "name": "notification-center-panel",
    "level": "extended",
    "category": "notification-center",
    "directory": "notification-center",
    "className": "bsx-notification-center-panel",
    "component": "notification-center",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "workflow-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "notification inbox panels and unread/read transitions",
    "avoidFor": "critical alerts that require modal confirmation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/notification-center/notification-center-panel.html",
    "snippet": "<section class=\"card bsx-notification-center-panel\" aria-label=\"Notification Center Panel\">\n  <div class=\"card-header d-flex align-items-center justify-content-between\">\n    <span>Notifications</span>\n    <span class=\"badge text-bg-primary\">3</span>\n  </div>\n  <div class=\"list-group list-group-flush\">\n    <a href=\"#\" class=\"list-group-item list-group-item-action bsx-is-unread\">New lead assigned</a>\n    <a href=\"#\" class=\"list-group-item list-group-item-action\">Invoice paid</a>\n  </div>\n</section>"
  },
  {
    "name": "notification-item-unread",
    "level": "extended",
    "category": "notification-center",
    "directory": "notification-center",
    "className": "bsx-notification-item-unread",
    "component": "notification-center",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "workflow-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ".bsx-is-success"
    ],
    "bestFor": "notification inbox panels and unread/read transitions",
    "avoidFor": "critical alerts that require modal confirmation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/notification-center/notification-item-unread.html",
    "snippet": "<section class=\"card bsx-notification-item-unread\" aria-label=\"Notification Item Unread\">\n  <div class=\"card-header d-flex align-items-center justify-content-between\">\n    <span>Notifications</span>\n    <span class=\"badge text-bg-primary\">3</span>\n  </div>\n  <div class=\"list-group list-group-flush\">\n    <a href=\"#\" class=\"list-group-item list-group-item-action bsx-is-unread\">New lead assigned</a>\n    <a href=\"#\" class=\"list-group-item list-group-item-action\">Invoice paid</a>\n  </div>\n</section>"
  },
  {
    "name": "notification-item-read",
    "level": "extended",
    "category": "notification-center",
    "directory": "notification-center",
    "className": "bsx-notification-item-read",
    "component": "notification-center",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "workflow-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      ".bsx-is-success"
    ],
    "bestFor": "notification inbox panels and unread/read transitions",
    "avoidFor": "critical alerts that require modal confirmation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/notification-center/notification-item-read.html",
    "snippet": "<section class=\"card bsx-notification-item-read\" aria-label=\"Notification Item Read\">\n  <div class=\"card-header d-flex align-items-center justify-content-between\">\n    <span>Notifications</span>\n    <span class=\"badge text-bg-primary\">3</span>\n  </div>\n  <div class=\"list-group list-group-flush\">\n    <a href=\"#\" class=\"list-group-item list-group-item-action bsx-is-unread\">New lead assigned</a>\n    <a href=\"#\" class=\"list-group-item list-group-item-action\">Invoice paid</a>\n  </div>\n</section>"
  },
  {
    "name": "notification-item-priority",
    "level": "extended",
    "category": "notification-center",
    "directory": "notification-center",
    "className": "bsx-notification-item-priority",
    "component": "notification-center",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "workflow-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "notification inbox panels and unread/read transitions",
    "avoidFor": "critical alerts that require modal confirmation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/notification-center/notification-item-priority.html",
    "snippet": "<section class=\"card bsx-notification-item-priority\" aria-label=\"Notification Item Priority\">\n  <div class=\"card-header d-flex align-items-center justify-content-between\">\n    <span>Notifications</span>\n    <span class=\"badge text-bg-primary\">3</span>\n  </div>\n  <div class=\"list-group list-group-flush\">\n    <a href=\"#\" class=\"list-group-item list-group-item-action bsx-is-unread\">New lead assigned</a>\n    <a href=\"#\" class=\"list-group-item list-group-item-action\">Invoice paid</a>\n  </div>\n</section>"
  },
  {
    "name": "notification-batch-arrive",
    "level": "extended",
    "category": "notification-center",
    "directory": "notification-center",
    "className": "bsx-notification-batch-arrive",
    "component": "notification-center",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "workflow-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity",
      "transform"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "notification inbox panels and unread/read transitions",
    "avoidFor": "critical alerts that require modal confirmation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/notification-center/notification-batch-arrive.html",
    "snippet": "<section class=\"card bsx-notification-batch-arrive\" aria-label=\"Notification Batch Arrive\">\n  <div class=\"card-header d-flex align-items-center justify-content-between\">\n    <span>Notifications</span>\n    <span class=\"badge text-bg-primary\">3</span>\n  </div>\n  <div class=\"list-group list-group-flush\">\n    <a href=\"#\" class=\"list-group-item list-group-item-action bsx-is-unread\">New lead assigned</a>\n    <a href=\"#\" class=\"list-group-item list-group-item-action\">Invoice paid</a>\n  </div>\n</section>"
  },
  {
    "name": "notification-empty-state",
    "level": "extended",
    "category": "notification-center",
    "directory": "notification-center",
    "className": "bsx-notification-empty-state",
    "component": "notification-center",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "workflow-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "opacity"
    ],
    "bootstrapStates": [
      ":hover",
      ":focus-visible"
    ],
    "bestFor": "notification inbox panels and unread/read transitions",
    "avoidFor": "critical alerts that require modal confirmation",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/notification-center/notification-empty-state.html",
    "snippet": "<section class=\"card bsx-notification-empty-state\" aria-label=\"Notification Empty State\">\n  <div class=\"card-header d-flex align-items-center justify-content-between\">\n    <span>Notifications</span>\n    <span class=\"badge text-bg-primary\">3</span>\n  </div>\n  <div class=\"list-group list-group-flush\">\n    <a href=\"#\" class=\"list-group-item list-group-item-action bsx-is-unread\">New lead assigned</a>\n    <a href=\"#\" class=\"list-group-item list-group-item-action\">Invoice paid</a>\n  </div>\n</section>"
  },
  {
    "name": "mobile-sticky-save-bar",
    "level": "extended",
    "category": "mobile",
    "directory": "mobile",
    "className": "bsx-mobile-sticky-save-bar",
    "component": "mobile",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "navigation-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".active",
      "[aria-current]"
    ],
    "bestFor": "mobile admin actions, sticky save bars, bottom nav, and filter sheets",
    "avoidFor": "desktop-only dense grids",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/mobile/mobile-sticky-save-bar.html",
    "snippet": "<section class=\"border rounded p-3 bsx-mobile-sticky-save-bar\" aria-label=\"Mobile Sticky Save Bar\">\n  <div class=\"d-flex align-items-center justify-content-between gap-3\">\n    <span class=\"fw-semibold\">Mobile CRM action</span>\n    <button type=\"button\" class=\"btn btn-primary btn-sm\">Save</button>\n  </div>\n  <nav class=\"nav nav-pills nav-fill mt-3\" aria-label=\"Mobile navigation\">\n    <a class=\"nav-link active\" aria-current=\"page\" href=\"#\">Today</a>\n    <a class=\"nav-link\" href=\"#\">Tasks</a>\n    <a class=\"nav-link\" href=\"#\">More</a>\n  </nav>\n</section>"
  },
  {
    "name": "mobile-filter-sheet",
    "level": "extended",
    "category": "mobile",
    "directory": "mobile",
    "className": "bsx-mobile-filter-sheet",
    "component": "mobile",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "navigation-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".active",
      "[aria-current]"
    ],
    "bestFor": "mobile admin actions, sticky save bars, bottom nav, and filter sheets",
    "avoidFor": "desktop-only dense grids",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/mobile/mobile-filter-sheet.html",
    "snippet": "<section class=\"border rounded p-3 bsx-mobile-filter-sheet\" aria-label=\"Mobile Filter Sheet\">\n  <div class=\"d-flex align-items-center justify-content-between gap-3\">\n    <span class=\"fw-semibold\">Mobile CRM action</span>\n    <button type=\"button\" class=\"btn btn-primary btn-sm\">Save</button>\n  </div>\n  <nav class=\"nav nav-pills nav-fill mt-3\" aria-label=\"Mobile navigation\">\n    <a class=\"nav-link active\" aria-current=\"page\" href=\"#\">Today</a>\n    <a class=\"nav-link\" href=\"#\">Tasks</a>\n    <a class=\"nav-link\" href=\"#\">More</a>\n  </nav>\n</section>"
  },
  {
    "name": "mobile-bulk-action-bar",
    "level": "extended",
    "category": "mobile",
    "directory": "mobile",
    "className": "bsx-mobile-bulk-action-bar",
    "component": "mobile",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "navigation-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "transform"
    ],
    "bootstrapStates": [
      ".active",
      "[aria-current]",
      ".bsx-is-selected"
    ],
    "bestFor": "mobile admin actions, sticky save bars, bottom nav, and filter sheets",
    "avoidFor": "desktop-only dense grids",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/mobile/mobile-bulk-action-bar.html",
    "snippet": "<section class=\"border rounded p-3 bsx-mobile-bulk-action-bar\" aria-label=\"Mobile Bulk Action Bar\">\n  <div class=\"d-flex align-items-center justify-content-between gap-3\">\n    <span class=\"fw-semibold\">Mobile CRM action</span>\n    <button type=\"button\" class=\"btn btn-primary btn-sm\">Save</button>\n  </div>\n  <nav class=\"nav nav-pills nav-fill mt-3\" aria-label=\"Mobile navigation\">\n    <a class=\"nav-link active\" aria-current=\"page\" href=\"#\">Today</a>\n    <a class=\"nav-link\" href=\"#\">Tasks</a>\n    <a class=\"nav-link\" href=\"#\">More</a>\n  </nav>\n</section>"
  },
  {
    "name": "mobile-inline-error",
    "level": "extended",
    "category": "mobile",
    "directory": "mobile",
    "className": "bsx-mobile-inline-error",
    "component": "mobile",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "translate",
    "kind": "navigation-state",
    "density": "medium",
    "risk": "medium",
    "cssProperties": [
      "transform",
      "opacity",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ".active",
      "[aria-current]",
      ".bsx-is-error"
    ],
    "bestFor": "mobile admin actions, sticky save bars, bottom nav, and filter sheets",
    "avoidFor": "desktop-only dense grids",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/mobile/mobile-inline-error.html",
    "snippet": "<section class=\"border rounded p-3 bsx-mobile-inline-error\" aria-label=\"Mobile Inline Error\">\n  <div class=\"d-flex align-items-center justify-content-between gap-3\">\n    <span class=\"fw-semibold\">Mobile CRM action</span>\n    <button type=\"button\" class=\"btn btn-primary btn-sm\">Save</button>\n  </div>\n  <nav class=\"nav nav-pills nav-fill mt-3\" aria-label=\"Mobile navigation\">\n    <a class=\"nav-link active\" aria-current=\"page\" href=\"#\">Today</a>\n    <a class=\"nav-link\" href=\"#\">Tasks</a>\n    <a class=\"nav-link\" href=\"#\">More</a>\n  </nav>\n</section>"
  },
  {
    "name": "mobile-bottom-nav-active",
    "level": "extended",
    "category": "mobile",
    "directory": "mobile",
    "className": "bsx-mobile-bottom-nav-active",
    "component": "mobile",
    "requiresJs": false,
    "runtimeBehavior": null,
    "motion": "color + opacity",
    "kind": "navigation-state",
    "density": "medium",
    "risk": "low",
    "cssProperties": [
      "box-shadow",
      "background-color",
      "border-color",
      "color"
    ],
    "bootstrapStates": [
      ".active",
      "[aria-current]"
    ],
    "bestFor": "mobile admin actions, sticky save bars, bottom nav, and filter sheets",
    "avoidFor": "desktop-only dense grids",
    "reducedMotion": "opacity-only near-instant state",
    "snippetPath": "snippets/extended/mobile/mobile-bottom-nav-active.html",
    "snippet": "<section class=\"border rounded p-3 bsx-mobile-bottom-nav-active\" aria-label=\"Mobile Bottom Nav Active\">\n  <div class=\"d-flex align-items-center justify-content-between gap-3\">\n    <span class=\"fw-semibold\">Mobile CRM action</span>\n    <button type=\"button\" class=\"btn btn-primary btn-sm\">Save</button>\n  </div>\n  <nav class=\"nav nav-pills nav-fill mt-3\" aria-label=\"Mobile navigation\">\n    <a class=\"nav-link active\" aria-current=\"page\" href=\"#\">Today</a>\n    <a class=\"nav-link\" href=\"#\">Tasks</a>\n    <a class=\"nav-link\" href=\"#\">More</a>\n  </nav>\n</section>"
  }
];
