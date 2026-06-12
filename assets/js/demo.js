(() => {
  "use strict";

  const ee_effects = Array.isArray(window.bsxEffects) ? window.bsxEffects : [];
  const ee_grid = document.querySelector("#bsxEffectGrid");
  const ee_search = document.querySelector("#bsxEffectSearch");
  const ee_category = document.querySelector("#bsxCategoryFilter");
  const ee_count = document.querySelector("#bsxResultCount");
  const ee_empty = document.querySelector("#bsxEmptyState");
  const ee_copyToastElement = document.querySelector("#bsxCopyToast");
  const ee_copyToastMessage = document.querySelector("#bsxCopyToastMessage");
  const ee_copyToast = ee_copyToastElement && window.bootstrap
    ? bootstrap.Toast.getOrCreateInstance(ee_copyToastElement, { delay: 1800 })
    : null;

  let ee_level = "core";

  function ee_escape(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function ee_showStatus(message) {
    if (ee_copyToastMessage) {
      ee_copyToastMessage.textContent = message;
    }
    ee_copyToast?.show();
  }

  async function ee_copyText(text, label) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const ee_textarea = document.createElement("textarea");
        ee_textarea.value = text;
        ee_textarea.setAttribute("readonly", "");
        ee_textarea.style.position = "fixed";
        ee_textarea.style.opacity = "0";
        document.body.append(ee_textarea);
        ee_textarea.select();
        document.execCommand("copy");
        ee_textarea.remove();
      }
      ee_showStatus(`${label} copied.`);
    } catch {
      ee_showStatus("Copy failed. Select the text manually.");
    }
  }

  function ee_cardMarkup(effect) {
    return `
      <div class="col-12 col-xl-6" data-effect-column>
        <article class="card bsx-demo-effect-card" data-effect="${ee_escape(effect.name)}" data-directory="${ee_escape(effect.directory)}">
          <div class="card-header bg-transparent d-flex align-items-start justify-content-between gap-3">
            <div>
              <h2 class="h5 mb-1">${ee_escape(effect.name)}</h2>
              <code class="small bsx-demo-code">.${ee_escape(effect.className)}</code>
            </div>
            <span class="badge text-bg-secondary">${ee_escape(effect.category)}</span>
          </div>
          <div class="card-body">
            <div class="bsx-demo-preview mb-3" data-preview>
              ${effect.snippet}
            </div>
            <dl class="row small mb-3">
              <dt class="col-4">Motion</dt><dd class="col-8">${ee_escape(effect.motion)}</dd>
              <dt class="col-4">Custom JS</dt><dd class="col-8">${effect.requiresJs ? "yes" : "no"}</dd>
              <dt class="col-4">Reduced</dt><dd class="col-8">${ee_escape(effect.reducedMotion)}</dd>
            </dl>
            <div class="d-flex flex-wrap gap-2">
              <button class="btn btn-sm btn-primary bsx-button-press" type="button" data-action="replay">Replay</button>
              <button class="btn btn-sm btn-outline-secondary" type="button" data-action="copy-html">Copy HTML</button>
              <button class="btn btn-sm btn-outline-secondary" type="button" data-action="copy-class">Copy CSS class</button>
            </div>
          </div>
        </article>
      </div>`;
  }

  function ee_filteredEffects() {
    const ee_term = ee_search.value.trim().toLowerCase();
    const ee_selectedCategory = ee_category.value;

    return ee_effects.filter((effect) => {
      if (effect.level !== ee_level) {
        return false;
      }
      if (ee_selectedCategory !== "all" && effect.category !== ee_selectedCategory) {
        return false;
      }
      if (!ee_term) {
        return true;
      }
      return [effect.name, effect.className, effect.category, effect.motion]
        .some((value) => value.toLowerCase().includes(ee_term));
    });
  }

  function ee_updateCategories() {
    const ee_previous = ee_category.value;
    const ee_categories = [...new Set(
      ee_effects
        .filter((effect) => effect.level === ee_level)
        .map((effect) => effect.category),
    )].sort();

    ee_category.innerHTML = [
      '<option value="all">All categories</option>',
      ...ee_categories.map((category) => `<option value="${ee_escape(category)}">${ee_escape(category)}</option>`),
    ].join("");

    if (ee_categories.includes(ee_previous)) {
      ee_category.value = ee_previous;
    }
  }

  function ee_initializeBootstrap() {
    if (!window.bootstrap) {
      return;
    }

    ee_grid.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((element) => {
      bootstrap.Tooltip.getOrCreateInstance(element);
    });

    ee_grid.querySelectorAll('[data-bs-toggle="popover"]').forEach((element) => {
      bootstrap.Popover.getOrCreateInstance(element);
    });
  }

  function ee_disposeBootstrapOverlays() {
    if (!window.bootstrap) {
      return;
    }

    ee_grid.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((element) => {
      bootstrap.Tooltip.getInstance(element)?.dispose();
    });

    ee_grid.querySelectorAll('[data-bs-toggle="popover"]').forEach((element) => {
      bootstrap.Popover.getInstance(element)?.dispose();
    });
  }

  function ee_render() {
    const ee_items = ee_filteredEffects();
    ee_disposeBootstrapOverlays();
    ee_grid.innerHTML = ee_items.map(ee_cardMarkup).join("");
    ee_count.textContent = `${ee_items.length} ${ee_level} effects shown`;
    ee_empty.classList.toggle("d-none", ee_items.length > 0);
    ee_initializeBootstrap();
    window.bsxTransitions?.refresh(ee_grid);
  }

  function ee_restartClass(element, className) {
    if (!element) {
      return;
    }
    element.classList.remove(className);
    void element.offsetWidth;
    element.classList.add(className);
  }

  function ee_effectForCard(card) {
    return ee_effects.find((effect) => effect.name === card?.dataset.effect);
  }

  function ee_replay(card) {
    const ee_effect = ee_effectForCard(card);
    const ee_preview = card.querySelector("[data-preview]");
    if (!ee_effect || !ee_preview) {
      return;
    }
    const ee_target = ee_preview.querySelector(`.${CSS.escape(ee_effect.className)}`);

    switch (ee_effect.directory) {
      case "modal": {
        const ee_modal = ee_preview.querySelector(".modal");
        bootstrap.Modal.getOrCreateInstance(ee_modal).show();
        break;
      }
      case "dropdown": {
        const ee_toggle = ee_preview.querySelector('[data-bs-toggle="dropdown"]');
        bootstrap.Dropdown.getOrCreateInstance(ee_toggle).show();
        window.setTimeout(() => bootstrap.Dropdown.getOrCreateInstance(ee_toggle).hide(), 1300);
        break;
      }
      case "offcanvas": {
        const ee_panel = ee_preview.querySelector(".offcanvas");
        bootstrap.Offcanvas.getOrCreateInstance(ee_panel).show();
        break;
      }
      case "toast": {
        const ee_toast = ee_preview.querySelector(".toast");
        bootstrap.Toast.getOrCreateInstance(ee_toast, { delay: 1600 }).show();
        break;
      }
      case "tooltip": {
        const ee_trigger = ee_preview.querySelector('[data-bs-toggle="tooltip"]');
        const ee_tooltip = bootstrap.Tooltip.getOrCreateInstance(ee_trigger);
        ee_tooltip.show();
        window.setTimeout(() => ee_tooltip.hide(), 1300);
        break;
      }
      case "popover": {
        const ee_trigger = ee_preview.querySelector('[data-bs-toggle="popover"]');
        const ee_popover = bootstrap.Popover.getOrCreateInstance(ee_trigger);
        ee_popover.show();
        window.setTimeout(() => ee_popover.hide(), 1300);
        break;
      }
      case "media": {
        const ee_carousel = ee_preview.querySelector(".carousel");
        bootstrap.Carousel.getOrCreateInstance(ee_carousel).next();
        break;
      }
      case "tabs": {
        const ee_tabs = ee_preview.querySelectorAll('[data-bs-toggle="tab"]');
        bootstrap.Tab.getOrCreateInstance(ee_tabs[1]).show();
        window.setTimeout(() => bootstrap.Tab.getOrCreateInstance(ee_tabs[0]).show(), 650);
        break;
      }
      case "accordion": {
        const ee_collapse = ee_preview.querySelector(".accordion-collapse");
        bootstrap.Collapse.getOrCreateInstance(ee_collapse).toggle();
        break;
      }
      case "counter":
        window.bsxTransitions?.updateCounter(card);
        break;
      case "table":
        if (ee_effect.name === "table-sort-icon-rotate") {
          ee_target?.classList.toggle("bsx-is-sorted");
        } else if (ee_effect.name === "table-filter-reveal" || ee_effect.name === "table-row-hover") {
          ee_restartClass(ee_target, ee_effect.className);
        } else {
          window.bsxTransitions?.changeTableRow(card);
        }
        break;
      case "list":
        if (ee_effect.name === "list-item-remove") {
          window.bsxTransitions?.removeListItem(card);
        } else {
          ee_restartClass(ee_target, ee_effect.className);
        }
        break;
      default:
        ee_restartClass(ee_target, ee_effect.className);
        ee_target?.classList.remove("bsx-is-invalid", "bsx-is-success", "bsx-is-updated", "bsx-is-swapping");
        void ee_target?.offsetWidth;
        ee_target?.classList.add("bsx-is-invalid", "bsx-is-success", "bsx-is-updated", "bsx-is-swapping", "bsx-is-visible");
        window.setTimeout(() => {
          ee_target?.classList.remove("bsx-is-invalid", "bsx-is-success", "bsx-is-updated", "bsx-is-swapping");
        }, 1000);
    }
  }

  document.addEventListener("click", (event) => {
    const ee_actionButton = event.target.closest("[data-action]");
    const ee_card = event.target.closest("[data-effect]");

    if (event.target.closest(".bsx-demo-preview a[href='#']")) {
      event.preventDefault();
    }

    if (ee_actionButton && ee_card) {
      const ee_effect = ee_effectForCard(ee_card);
      if (ee_actionButton.dataset.action === "replay") {
        ee_replay(ee_card);
      }
      if (ee_actionButton.dataset.action === "copy-html") {
        ee_copyText(ee_effect.snippet, `${ee_effect.name} HTML`);
      }
      if (ee_actionButton.dataset.action === "copy-class") {
        ee_copyText(ee_effect.className, `${ee_effect.name} class`);
      }
      return;
    }

    if (event.target.closest("[data-copy-import]")) {
      ee_copyText('<link rel="stylesheet" href="assets/css/bootstrap5-transitions.css">', "CSS import");
    }
  });

  ee_search.addEventListener("input", ee_render);
  ee_category.addEventListener("change", ee_render);

  document.querySelectorAll("[data-level]").forEach((button) => {
    button.addEventListener("click", () => {
      ee_level = button.dataset.level;
      document.querySelectorAll("[data-level]").forEach((item) => {
        const ee_active = item === button;
        item.classList.toggle("active", ee_active);
        item.setAttribute("aria-selected", String(ee_active));
      });
      ee_updateCategories();
      ee_render();
    });
  });

  ee_updateCategories();
  ee_render();
})();
