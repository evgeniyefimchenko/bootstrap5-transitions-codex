(() => {
  "use strict";

  let ee_revealObserver = null;

  function ee_effectName(scope) {
    if (scope?.dataset.effect) {
      return scope.dataset.effect;
    }

    const ee_effectRoot = scope?.matches?.('[class*="bsx-"]')
      ? scope
      : scope?.querySelector?.('[class*="bsx-"]');

    return [...(ee_effectRoot?.classList ?? [])]
      .find((className) => /^bsx-(?:counter-|metric-|price-|table-row-|list-item-)/.test(className))
      ?.replace(/^bsx-/, "");
  }

  function ee_scopeFor(element) {
    return element.closest("[data-effect]") ?? element.closest('[class*="bsx-"]') ?? document;
  }

  function ee_showToast(button) {
    if (!window.bootstrap) {
      return;
    }

    const ee_selector = button.dataset.bsxTarget;
    const ee_toast = ee_selector ? document.querySelector(ee_selector) : null;
    if (!ee_toast) {
      return;
    }

    const ee_toasts = ee_toast.classList.contains("bsx-toast-stack-pop")
      ? ee_toast.closest(".toast-container")?.querySelectorAll(".toast")
      : [ee_toast];

    ee_toasts?.forEach((toast) => {
      bootstrap.Toast.getOrCreateInstance(toast, { delay: 2200 }).show();
    });
  }

  function ee_buttonState(button, event) {
    if (button.disabled || button.getAttribute("aria-busy") === "true") {
      return;
    }

    if (button.classList.contains("bsx-button-ripple-lite")) {
      const ee_rect = button.getBoundingClientRect();
      const ee_ripple = document.createElement("span");
      const ee_size = Math.max(ee_rect.width, ee_rect.height);
      const ee_hasPointerPosition = event.clientX || event.clientY;
      ee_ripple.className = "bsx-ripple";
      ee_ripple.style.height = `${ee_size}px`;
      ee_ripple.style.width = `${ee_size}px`;
      ee_ripple.style.left = `${ee_hasPointerPosition ? event.clientX - ee_rect.left : ee_rect.width / 2}px`;
      ee_ripple.style.top = `${ee_hasPointerPosition ? event.clientY - ee_rect.top : ee_rect.height / 2}px`;
      button.append(ee_ripple);
      window.setTimeout(() => ee_ripple.remove(), 560);
    }

    const ee_status = button.querySelector(".bsx-button-status");
    button.classList.remove("bsx-is-success");
    button.classList.add("bsx-is-loading");
    button.setAttribute("aria-busy", "true");
    button.disabled = true;

    if (ee_status) {
      ee_status.textContent = "Working";
    }

    window.setTimeout(() => {
      button.classList.remove("bsx-is-loading");
      button.classList.add("bsx-is-success");
      button.removeAttribute("aria-busy");
      button.disabled = false;

      if (ee_status) {
        ee_status.textContent = "Complete";
      }

      window.setTimeout(() => button.classList.remove("bsx-is-success"), 900);
    }, 850);
  }

  function ee_updateCounter(scope) {
    const ee_counter = scope.querySelector?.("[data-bsx-counter]");
    const ee_value = scope.querySelector?.("[data-bsx-counter-value]");
    if (!ee_counter || !ee_value) {
      return;
    }

    const ee_name = ee_effectName(scope) ?? "";
    const ee_direction = ee_name.includes("down") ? -1 : 1;
    const ee_currentValue = Number.parseInt(ee_value.textContent, 10) || 0;
    ee_value.textContent = String(ee_currentValue + (ee_direction * (1 + Math.floor(Math.random() * 8))));
    ee_counter.classList.remove("bsx-is-updated");
    void ee_counter.offsetWidth;
    ee_counter.classList.add("bsx-is-updated");
    window.setTimeout(() => ee_counter.classList.remove("bsx-is-updated"), 900);
  }

  function ee_changeTableRow(scope) {
    const ee_body = scope.querySelector?.("[data-bsx-table-body]");
    const ee_row = ee_body?.querySelector("tr");
    const ee_effect = ee_effectName(scope);
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
          ee_body.insertAdjacentHTML(
            "beforeend",
            '<tr><th scope="row">Restored row</th><td><span class="badge text-bg-success">Ready</span></td><td>Now</td></tr>',
          );
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

  function ee_removeListItem(scope) {
    const ee_list = scope.querySelector?.(".bsx-list-item-remove .list-group")
      ?? scope.querySelector?.(".list-group");
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

  function ee_flashClass(element, className, delay = 900) {
    if (!element) {
      return;
    }

    element.classList.remove(className);
    void element.offsetWidth;
    element.classList.add(className);
    window.setTimeout(() => element.classList.remove(className), delay);
  }

  function ee_copyInput(action) {
    const ee_scope = ee_scopeFor(action);
    const ee_input = ee_scope.querySelector?.("input, textarea");
    const ee_value = ee_input?.value ?? "";
    const ee_done = () => {
      ee_scope.classList.add("bsx-is-success");
      action.classList.add("bsx-is-success");
      window.setTimeout(() => {
        ee_scope.classList.remove("bsx-is-success");
        action.classList.remove("bsx-is-success");
      }, 900);
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(ee_value).then(ee_done, ee_done);
      return;
    }

    ee_input?.select?.();
    try {
      document.execCommand("copy");
    } catch {
      // Visual confirmation still helps in HTTP/local-file demos.
    }
    ee_done();
  }

  function ee_paginationLoading(action) {
    const ee_scope = ee_scopeFor(action);
    const ee_pagination = ee_scope.matches?.(".pagination") ? ee_scope : ee_scope.querySelector?.(".pagination");
    const ee_busyTarget = ee_pagination ?? ee_scope;

    ee_scope.classList.add("bsx-is-loading");
    ee_busyTarget?.setAttribute("aria-busy", "true");
    window.setTimeout(() => {
      ee_scope.classList.remove("bsx-is-loading");
      ee_busyTarget?.removeAttribute("aria-busy");
      ee_flashClass(ee_scope, "bsx-is-updated", 700);
    }, 650);
  }

  function ee_crudInlineSave(action) {
    const ee_scope = ee_scopeFor(action);
    const ee_row = action.closest("tr") ?? ee_scope.querySelector?.("tbody tr");
    if (!ee_row) {
      return;
    }

    ee_row.classList.remove("bsx-is-success", "bsx-is-error");
    ee_row.classList.add("bsx-is-loading");
    ee_row.setAttribute("aria-busy", "true");
    window.setTimeout(() => {
      ee_row.classList.remove("bsx-is-loading");
      ee_row.classList.add("bsx-is-success", "bsx-is-updated");
      ee_row.removeAttribute("aria-busy");
      window.setTimeout(() => ee_row.classList.remove("bsx-is-success", "bsx-is-updated"), 900);
    }, 650);
  }

  function ee_crudBulkToggle(action) {
    const ee_scope = ee_scopeFor(action);
    const ee_rows = ee_scope.querySelectorAll?.("tbody tr");
    const ee_selected = !ee_scope.classList.contains("bsx-is-selected");

    ee_scope.classList.toggle("bsx-is-selected", ee_selected);
    ee_rows?.forEach((row) => row.classList.toggle("bsx-is-selected", ee_selected));
    action.setAttribute("aria-pressed", String(ee_selected));
  }

  function ee_filterChipRemove(action) {
    const ee_chip = action.closest(".bsx-filter-chip") ?? action;
    ee_chip.classList.add("bsx-is-removing");
    window.setTimeout(() => ee_chip.remove(), 240);
  }

  function ee_filterReset(action) {
    const ee_scope = ee_scopeFor(action);
    ee_scope.querySelectorAll?.("input").forEach((input) => {
      input.value = "";
      input.dispatchEvent(new Event("input", { bubbles: true }));
    });
    ee_scope.querySelectorAll?.(".bsx-filter-chip").forEach((chip) => chip.remove());
    ee_flashClass(ee_scope, "bsx-is-updated", 700);
  }

  function ee_wizardStep(action) {
    const ee_scope = ee_scopeFor(action);
    const ee_steps = [...(ee_scope.querySelectorAll?.(".bsx-step") ?? [])];
    if (!ee_steps.length) {
      ee_scope.setAttribute("aria-busy", "true");
      window.setTimeout(() => ee_scope.removeAttribute("aria-busy"), 700);
      return;
    }

    const ee_currentIndex = Math.max(0, ee_steps.findIndex((step) => step.classList.contains("bsx-is-active")));
    const ee_nextIndex = Math.min(ee_steps.length - 1, ee_currentIndex + 1);
    ee_steps[ee_currentIndex]?.classList.remove("bsx-is-active");
    ee_steps[ee_currentIndex]?.classList.add("bsx-is-complete");
    ee_steps[ee_nextIndex]?.classList.add("bsx-is-active");
    ee_steps[ee_nextIndex]?.setAttribute("aria-current", "step");
  }

  function ee_retryState(action) {
    const ee_scope = ee_scopeFor(action);
    ee_scope.classList.remove("bsx-is-error");
    ee_scope.classList.add("bsx-is-loading");
    ee_scope.setAttribute("aria-busy", "true");
    window.setTimeout(() => {
      ee_scope.classList.remove("bsx-is-loading");
      ee_scope.classList.add("bsx-is-success");
      ee_scope.removeAttribute("aria-busy");
      window.setTimeout(() => ee_scope.classList.remove("bsx-is-success"), 900);
    }, 650);
  }

  function ee_dataRefresh(action) {
    const ee_scope = ee_scopeFor(action);
    ee_scope.setAttribute("aria-busy", "true");
    ee_scope.classList.add("bsx-is-loading");
    window.setTimeout(() => {
      ee_scope.removeAttribute("aria-busy");
      ee_scope.classList.remove("bsx-is-loading");
      ee_flashClass(ee_scope, "bsx-is-updated", 900);
    }, 700);
  }

  function ee_notificationRemove(action) {
    const ee_item = action.closest(".list-group-item") ?? action;
    ee_item.classList.add("bsx-is-removing");
    window.setTimeout(() => ee_item.remove(), 240);
  }

  function ee_mobileFabToggle(action) {
    const ee_scope = ee_scopeFor(action);
    const ee_open = !ee_scope.classList.contains("bsx-is-open");
    ee_scope.classList.toggle("bsx-is-open", ee_open);
    action.setAttribute("aria-expanded", String(ee_open));
  }

  function ee_mobileSwipeAction(action) {
    ee_scopeFor(action).classList.toggle("bsx-is-revealed");
  }

  function ee_refresh(root = document) {
    ee_revealObserver?.disconnect();

    const ee_elements = root.querySelectorAll(".bsx-scroll-reveal-lite");
    if (!("IntersectionObserver" in window)) {
      ee_elements.forEach((element) => element.classList.add("bsx-is-visible"));
      return;
    }

    ee_revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("bsx-is-visible");
          ee_revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    ee_elements.forEach((element) => ee_revealObserver.observe(element));
  }

  document.addEventListener("click", (event) => {
    const ee_action = event.target.closest("[data-bsx-action]");
    if (!ee_action) {
      return;
    }

    if (ee_action.matches('a[href="#"]')) {
      event.preventDefault();
    }

    const ee_scope = ee_scopeFor(ee_action);

    switch (ee_action.dataset.bsxAction) {
      case "show-toast":
        ee_showToast(ee_action);
        break;
      case "button-state":
        ee_buttonState(ee_action, event);
        break;
      case "counter":
        ee_updateCounter(ee_scope);
        break;
      case "table-row":
        ee_changeTableRow(ee_scope);
        break;
      case "sort":
        ee_scope.querySelector?.(".table-responsive")?.classList.toggle("bsx-is-sorted");
        if (ee_scope.matches?.(".table-responsive")) {
          ee_scope.classList.toggle("bsx-is-sorted");
        }
        break;
      case "list-item":
        ee_removeListItem(ee_scope);
        break;
      case "copy-input":
        ee_copyInput(ee_action);
        break;
      case "pagination-loading":
        ee_paginationLoading(ee_action);
        break;
      case "crud-inline-save":
        ee_crudInlineSave(ee_action);
        break;
      case "crud-bulk-toggle":
        ee_crudBulkToggle(ee_action);
        break;
      case "filter-chip-remove":
        ee_filterChipRemove(ee_action);
        break;
      case "filter-reset":
        ee_filterReset(ee_action);
        break;
      case "wizard-step":
        ee_wizardStep(ee_action);
        break;
      case "retry-state":
        ee_retryState(ee_action);
        break;
      case "data-refresh":
        ee_dataRefresh(ee_action);
        break;
      case "notification-remove":
        ee_notificationRemove(ee_action);
        break;
      case "mobile-fab-toggle":
        ee_mobileFabToggle(ee_action);
        break;
      case "mobile-swipe-action":
        ee_mobileSwipeAction(ee_action);
        break;
      case "clear-input": {
        const ee_input = ee_action.closest(".input-group")?.querySelector("input");
        if (ee_input) {
          ee_input.value = "";
          ee_input.dispatchEvent(new Event("input", { bubbles: true }));
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

  document.addEventListener("dragover", (event) => {
    if (event.target.closest(".bsx-form-file-drop-highlight")) {
      event.preventDefault();
    }
  });

  document.addEventListener("dragleave", (event) => {
    const ee_dropZone = event.target.closest(".bsx-form-file-drop-highlight");
    if (ee_dropZone && !ee_dropZone.contains(event.relatedTarget)) {
      ee_dropZone.classList.remove("bsx-is-dragover");
    }
  });

  document.addEventListener("drop", (event) => {
    const ee_dropZone = event.target.closest(".bsx-form-file-drop-highlight");
    if (ee_dropZone) {
      event.preventDefault();
      ee_dropZone.classList.remove("bsx-is-dragover");
    }
  });

  window.bsxTransitions = Object.freeze({
    buttonState: ee_buttonState,
    changeTableRow: ee_changeTableRow,
    copyInput: ee_copyInput,
    dataRefresh: ee_dataRefresh,
    filterReset: ee_filterReset,
    refresh: ee_refresh,
    removeListItem: ee_removeListItem,
    retryState: ee_retryState,
    updateCounter: ee_updateCounter,
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => ee_refresh(document), { once: true });
  } else {
    ee_refresh(document);
  }
})();
