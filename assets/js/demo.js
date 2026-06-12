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
  let ee_observer = null;

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

  function ee_initializeRevealObserver() {
    ee_observer?.disconnect();
    if (!("IntersectionObserver" in window)) {
      ee_grid.querySelectorAll(".bsx-scroll-reveal-lite").forEach((element) => {
        element.classList.add("bsx-is-visible");
      });
      return;
    }

    ee_observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("bsx-is-visible");
          ee_observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    ee_grid.querySelectorAll(".bsx-scroll-reveal-lite").forEach((element) => {
      ee_observer.observe(element);
    });
  }

  function ee_render() {
    const ee_items = ee_filteredEffects();
    ee_grid.innerHTML = ee_items.map(ee_cardMarkup).join("");
    ee_count.textContent = `${ee_items.length} ${ee_level} effects shown`;
    ee_empty.classList.toggle("d-none", ee_items.length > 0);
    ee_initializeBootstrap();
    ee_initializeRevealObserver();
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

  function ee_updateCounter(card) {
    const ee_counter = card.querySelector("[data-bsx-counter]");
    const ee_value = card.querySelector("[data-bsx-counter-value]");
    if (!ee_counter || !ee_value) {
      return;
    }

    const ee_direction = card.dataset.effect?.includes("down") ? -1 : 1;
    ee_value.textContent = String(Number(ee_value.textContent) + (ee_direction * (1 + Math.floor(Math.random() * 8))));
    ee_counter.classList.remove("bsx-is-updated");
    void ee_counter.offsetWidth;
    ee_counter.classList.add("bsx-is-updated");
    window.setTimeout(() => ee_counter.classList.remove("bsx-is-updated"), 900);
  }

  function ee_changeTableRow(card) {
    const ee_body = card.querySelector("[data-bsx-table-body]");
    const ee_row = ee_body?.querySelector("tr");
    const ee_effect = card.dataset.effect;
    if (!ee_body || !ee_row) {
      return;
    }

    if (ee_effect === "table-row-insert") {
      const ee_newRow = document.createElement("tr");
      ee_newRow.className = "bsx-row-inserted";
      ee_newRow.innerHTML = '<th scope="row">Inserted row</th><td><span class="badge text-bg-info">New</span></td><td>Now</td>';
      ee_body.prepend(ee_newRow);
      window.setTimeout(() => ee_newRow.classList.remove("bsx-row-inserted"), 700);
      return;
    }

    if (ee_effect === "table-row-remove") {
      ee_row.classList.add("bsx-row-removing");
      window.setTimeout(() => {
        ee_row.remove();
        if (!ee_body.children.length) {
          ee_body.insertAdjacentHTML("beforeend", '<tr><th scope="row">Restored row</th><td><span class="badge text-bg-success">Ready</span></td><td>Now</td></tr>');
        }
      }, 240);
      return;
    }

    if (ee_effect === "table-row-selected") {
      ee_row.classList.toggle("bsx-is-selected");
      return;
    }

    ee_row.classList.remove("bsx-row-updated");
    void ee_row.offsetWidth;
    ee_row.classList.add("bsx-row-updated");
  }

  function ee_removeListItem(card) {
    const ee_list = card.querySelector(".bsx-list-item-remove .list-group");
    const ee_item = ee_list?.querySelector(".list-group-item");
    if (!ee_list || !ee_item) {
      return;
    }

    ee_item.classList.add("bsx-is-removing");
    window.setTimeout(() => {
      ee_item.remove();
      if (!ee_list.children.length) {
        ee_list.insertAdjacentHTML(
          "beforeend",
          '<a href="#" class="list-group-item list-group-item-action active" aria-current="true">Restored item</a>',
        );
      }
    }, 240);
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
        bootstrap.Tooltip.getOrCreateInstance(ee_trigger).show();
        break;
      }
      case "popover": {
        const ee_trigger = ee_preview.querySelector('[data-bs-toggle="popover"]');
        bootstrap.Popover.getOrCreateInstance(ee_trigger).show();
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
        ee_updateCounter(card);
        break;
      case "table":
        if (ee_effect.name === "table-sort-icon-rotate") {
          ee_target?.classList.toggle("bsx-is-sorted");
        } else if (ee_effect.name === "table-filter-reveal" || ee_effect.name === "table-row-hover") {
          ee_restartClass(ee_target, ee_effect.className);
        } else {
          ee_changeTableRow(card);
        }
        break;
      case "list":
        if (ee_effect.name === "list-item-remove") {
          ee_removeListItem(card);
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

  function ee_buttonState(button, event) {
    if (button.classList.contains("bsx-button-ripple-lite")) {
      const ee_rect = button.getBoundingClientRect();
      const ee_ripple = document.createElement("span");
      const ee_size = Math.max(ee_rect.width, ee_rect.height);
      ee_ripple.className = "bsx-ripple";
      ee_ripple.style.height = `${ee_size}px`;
      ee_ripple.style.width = `${ee_size}px`;
      ee_ripple.style.left = `${event.clientX - ee_rect.left}px`;
      ee_ripple.style.top = `${event.clientY - ee_rect.top}px`;
      button.append(ee_ripple);
      window.setTimeout(() => ee_ripple.remove(), 560);
    }

    button.classList.add("bsx-is-loading");
    button.setAttribute("aria-busy", "true");
    const ee_status = button.querySelector(".bsx-button-status");
    if (ee_status) {
      ee_status.textContent = "Working";
    }

    window.setTimeout(() => {
      button.classList.remove("bsx-is-loading");
      button.classList.add("bsx-is-success");
      button.removeAttribute("aria-busy");
      if (ee_status) {
        ee_status.textContent = "Complete";
      }
      window.setTimeout(() => button.classList.remove("bsx-is-success"), 900);
    }, 850);
  }

  document.addEventListener("click", (event) => {
    const ee_actionButton = event.target.closest("[data-action]");
    const ee_demoAction = event.target.closest("[data-bsx-action]");
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
      return;
    }

    if (!ee_demoAction) {
      return;
    }

    switch (ee_demoAction.dataset.bsxAction) {
      case "show-toast": {
        const ee_toast = ee_card.querySelector(ee_demoAction.dataset.bsxTarget);
        bootstrap.Toast.getOrCreateInstance(ee_toast, { delay: 2200 }).show();
        break;
      }
      case "button-state":
        ee_buttonState(ee_demoAction, event);
        break;
      case "counter":
        ee_updateCounter(ee_card);
        break;
      case "table-row":
        ee_changeTableRow(ee_card);
        break;
      case "sort":
        ee_card.querySelector(".table-responsive")?.classList.toggle("bsx-is-sorted");
        break;
      case "list-item":
        ee_removeListItem(ee_card);
        break;
      case "clear-input": {
        const ee_input = ee_demoAction.closest(".input-group")?.querySelector("input");
        if (ee_input) {
          ee_input.value = "";
          ee_input.focus();
        }
        break;
      }
    }
  });

  document.addEventListener("close.bs.alert", (event) => {
    const ee_alert = event.target;
    if (!ee_alert.classList.contains("bsx-alert-dismissible-exit") || ee_alert.dataset.bsxExitReady) {
      return;
    }
    event.preventDefault();
    ee_alert.classList.add("bsx-is-exiting");
    window.setTimeout(() => {
      ee_alert.dataset.bsxExitReady = "true";
      bootstrap.Alert.getOrCreateInstance(ee_alert).close();
    }, 220);
  });

  document.addEventListener("dragenter", (event) => {
    event.target.closest(".bsx-form-file-drop-highlight")?.classList.add("bsx-is-dragover");
  });

  document.addEventListener("dragleave", (event) => {
    event.target.closest(".bsx-form-file-drop-highlight")?.classList.remove("bsx-is-dragover");
  });

  document.addEventListener("drop", (event) => {
    event.target.closest(".bsx-form-file-drop-highlight")?.classList.remove("bsx-is-dragover");
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
