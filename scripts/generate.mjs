import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { coreEffects, effects, extendedEffects } from "./effects.mjs";

const root = resolve(import.meta.dirname, "..");
const checkOnly = process.argv.includes("--check");
const changedFiles = [];

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function title(name) {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function idFor(name) {
  return `bsx${title(name).replaceAll(" ", "")}`;
}

function iconMarkup() {
  return '<span class="bsx-icon" aria-hidden="true">→</span>';
}

function snippetMarkupFor(effect) {
  const { name, className, directory, requiresJs } = effect;
  const id = idFor(name);
  const label = title(name);

  switch (directory) {
    case "modal":
      return `<button type="button" class="btn btn-primary bsx-button-press" data-bs-toggle="modal" data-bs-target="#${id}">
  Open ${label}
</button>

<div class="modal fade ${className}" id="${id}" tabindex="-1" aria-labelledby="${id}Label" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered${name.includes("fullscreen") ? " modal-fullscreen" : ""}">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title fs-5" id="${id}Label">${label}</h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">Bootstrap 5 modal transition.</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary">Continue</button>
      </div>
    </div>
  </div>
</div>`;
    case "dropdown":
      return `<div class="dropdown ${className}">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    ${label}
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Profile</a></li>
    <li><a class="dropdown-item" href="#">Settings</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Sign out</a></li>
  </ul>
</div>`;
    case "offcanvas":
      return `<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#${id}" aria-controls="${id}">
  Open panel
</button>

<div class="offcanvas offcanvas-start ${className}" tabindex="-1" id="${id}" aria-labelledby="${id}Label">
  <div class="offcanvas-header">
    <h2 class="offcanvas-title fs-5" id="${id}Label">${label}</h2>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <nav class="nav flex-column" aria-label="Demo navigation">
      <a class="nav-link active" href="#" aria-current="page">Dashboard</a>
      <a class="nav-link" href="#">Orders</a>
      <a class="nav-link" href="#">Settings</a>
    </nav>
  </div>
</div>`;
    case "toast": {
      const stackMarkup = name === "toast-stack-pop"
        ? `
  <div class="toast show mt-2" role="status" aria-live="polite" aria-atomic="true">
    <div class="toast-body">Earlier notification in the stack.</div>
  </div>`
        : "";
      return `<button type="button" class="btn btn-primary" data-bsx-action="show-toast" data-bsx-target="#${id}">
  Show toast
</button>

<div class="toast-container position-fixed top-0 end-0 p-3" aria-live="polite" aria-atomic="true">
  <div class="toast ${className}" id="${id}" role="status" aria-live="polite" aria-atomic="true">
    <div class="toast-header">
      <strong class="me-auto">${label}</strong>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">The operation completed successfully.</div>
  </div>${stackMarkup}
</div>`;
    }
    case "alert":
      return `<div class="alert alert-primary ${name.includes("dismissible") ? "alert-dismissible fade show" : ""} ${className}" role="alert">
  <strong>${label}.</strong> Review this contextual message.
  ${name.includes("dismissible") ? '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' : ""}
</div>`;
    case "button":
      return `<button type="button" class="btn ${name.includes("danger") ? "btn-danger" : "btn-primary"} ${className}"${requiresJs ? ' data-bsx-action="button-state"' : ""}${name.includes("disabled") ? ' disabled aria-disabled="true"' : ""}>
  ${iconMarkup()}
  <span class="bsx-button-label">${label}</span>
  <span class="visually-hidden bsx-button-status" aria-live="polite"></span>
</button>`;
    case "form":
      if (name.includes("switch")) {
        return `<div class="form-check form-switch ${className}">
  <input class="form-check-input" type="checkbox" role="switch" id="${id}">
  <label class="form-check-label" for="${id}">${label}</label>
</div>`;
      }
      if (name.includes("checkbox") || name.includes("radio")) {
        const type = name.includes("radio") ? "radio" : "checkbox";
        return `<div class="form-check ${className}">
  <input class="form-check-input" type="${type}" name="${id}" id="${id}">
  <label class="form-check-label" for="${id}">${label}</label>
</div>`;
      }
      if (name.includes("file")) {
        return `<div class="${className}">
  <label class="form-label" for="${id}">${label}</label>
  <input class="form-control" type="file" id="${id}">
  <div class="form-text">Choose a file or drag it over the field.</div>
</div>`;
      }
      if (name.includes("select")) {
        return `<div class="${className}">
  <label class="form-label" for="${id}">${label}</label>
  <select class="form-select" id="${id}">
    <option selected>Choose an option</option>
    <option value="1">First option</option>
    <option value="2">Second option</option>
  </select>
</div>`;
      }
      if (name.includes("clear")) {
        return `<div class="${className}">
  <label class="form-label" for="${id}">${label}</label>
  <div class="input-group">
    <input class="form-control" id="${id}" type="text" value="Clear this value">
    <button class="btn btn-outline-secondary bsx-input-clear" type="button" data-bsx-action="clear-input" aria-label="Clear input">×</button>
  </div>
</div>`;
      }
      return `<div class="${className}">
  <label class="form-label" for="${id}">${label}</label>
  <input class="form-control ${name.includes("invalid") || name.includes("error") ? "is-invalid" : name.includes("valid") ? "is-valid" : ""}" id="${id}" type="text" aria-describedby="${id}Help ${id}Feedback">
  <div class="form-text bsx-form-help" id="${id}Help">Enter a clear value.</div>
  <div class="${name.includes("valid") && !name.includes("invalid") ? "valid-feedback" : "invalid-feedback"}" id="${id}Feedback">Validation feedback.</div>
</div>`;
    case "card":
      return `<article class="card ${className}">
  <div class="bsx-card-media" aria-hidden="true"></div>
  <div class="card-body">
    <h2 class="card-title h5">${label}</h2>
    <p class="card-text">A copy-paste friendly Bootstrap card interaction.</p>
    <a class="btn btn-primary" href="#">Open details</a>
  </div>
  <div class="card-footer bsx-card-footer">Updated just now</div>
</article>`;
    case "tabs":
      return `<div class="${className}">
  <ul class="nav nav-tabs" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="${id}OneTab" data-bs-toggle="tab" data-bs-target="#${id}One" type="button" role="tab" aria-controls="${id}One" aria-selected="true">Overview</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="${id}TwoTab" data-bs-toggle="tab" data-bs-target="#${id}Two" type="button" role="tab" aria-controls="${id}Two" aria-selected="false">Details</button>
    </li>
  </ul>
  <div class="tab-content p-3 border border-top-0">
    <div class="tab-pane fade show active" id="${id}One" role="tabpanel" aria-labelledby="${id}OneTab" tabindex="0">Overview content.</div>
    <div class="tab-pane fade" id="${id}Two" role="tabpanel" aria-labelledby="${id}TwoTab" tabindex="0">Detailed content.</div>
  </div>
</div>`;
    case "accordion":
      return `<div class="accordion ${className}" id="${id}">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#${id}Body" aria-expanded="true" aria-controls="${id}Body">
        ${label}
        <span class="bsx-accordion-icon ms-auto" aria-hidden="true"></span>
      </button>
    </h2>
    <div id="${id}Body" class="accordion-collapse collapse show" data-bs-parent="#${id}">
      <div class="accordion-body">Accessible Bootstrap collapse content.</div>
    </div>
  </div>
</div>`;
    case "navbar":
      return `<nav class="navbar navbar-expand-md bg-body-tertiary ${className}" aria-label="${label}">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">BSX</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#${id}" aria-controls="${id}" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="${id}">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Catalog</a>
      </div>
    </div>
  </div>
</nav>`;
    case "sidebar":
      return `<nav class="nav flex-column border rounded p-2 ${className}" aria-label="${label}">
  <a class="nav-link active" href="#" aria-current="page">Dashboard</a>
  <a class="nav-link" href="#">Orders</a>
  <a class="nav-link" href="#">Customers</a>
  <div class="bsx-sidebar-submenu ps-3">
    <a class="nav-link" href="#">Archived</a>
  </div>
</nav>`;
    case "badge":
      return `<span class="badge text-bg-primary ${className}" role="status">
  ${label}
  <span class="visually-hidden">status</span>
</span>`;
    case "counter":
      return `<div class="card ${className}" data-bsx-counter>
  <div class="card-body">
    <p class="text-body-secondary mb-1">${label}</p>
    <p class="display-6 mb-3" data-bsx-counter-value aria-live="polite">24</p>
    <button type="button" class="btn btn-sm btn-outline-primary" data-bsx-action="counter">Update metric</button>
  </div>
</div>`;
    case "table":
      const sortAction = name === "table-sort-icon-rotate" ? ' data-bsx-action="sort"' : "";
      const rowAction = ["table-row-insert", "table-row-remove", "table-row-update-flash", "table-row-selected"].includes(name)
        ? '\n  <button type="button" class="btn btn-sm btn-primary" data-bsx-action="table-row">Change row</button>'
        : "";
      return `<div class="table-responsive ${className}">
  <table class="table table-hover align-middle">
    <thead><tr><th scope="col">Item</th><th scope="col">Status</th><th scope="col"><button class="btn btn-sm" type="button"${sortAction}>Updated <span class="bsx-sort-icon" aria-hidden="true">↕</span></button></th></tr></thead>
    <tbody data-bsx-table-body>
      <tr><th scope="row">Example row</th><td><span class="badge text-bg-success">Ready</span></td><td>Now</td></tr>
    </tbody>
  </table>${rowAction}
</div>`;
    case "list":
      return `<div class="${className}">
  <div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">Active item</a>
  <a href="#" class="list-group-item list-group-item-action">Second item</a>
  <a href="#" class="list-group-item list-group-item-action">Third item</a>
  </div>
  ${name === "list-item-remove" ? '<button type="button" class="btn btn-sm btn-primary mt-3" data-bsx-action="list-item">Remove first item</button>' : ""}
</div>`;
    case "skeleton":
      return `<div class="${className}" aria-hidden="true">
  <div class="bsx-skeleton-block rounded mb-2"></div>
  <div class="bsx-skeleton-line rounded mb-2"></div>
  <div class="bsx-skeleton-line rounded w-75"></div>
</div>
<span class="visually-hidden" role="status">Loading content</span>`;
    case "loading":
      return `<div class="${className}" role="status" aria-live="polite">
  <span class="bsx-loader-dot"></span>
  <span class="bsx-loader-dot"></span>
  <span class="bsx-loader-dot"></span>
  <span class="visually-hidden">Loading</span>
</div>`;
    case "image":
      return `<figure class="figure position-relative overflow-hidden rounded ${className}">
  <svg class="figure-img img-fluid mb-0" viewBox="0 0 640 360" role="img" aria-labelledby="${id}Title">
    <title id="${id}Title">Abstract Bootstrap demo image</title>
    <defs><linearGradient id="${id}Gradient"><stop stop-color="#0d6efd"/><stop offset="1" stop-color="#6f42c1"/></linearGradient></defs>
    <rect width="640" height="360" fill="url(#${id}Gradient)"/>
    <circle cx="500" cy="90" r="54" fill="rgba(255,255,255,.3)"/>
  </svg>
  <figcaption class="figure-caption bsx-image-caption p-3">${label}</figcaption>
</figure>`;
    case "media":
      return `<div id="${id}" class="carousel slide ${className}">
  <div class="carousel-inner rounded">
    <div class="carousel-item active">
      <div class="ratio ratio-16x9 bg-primary"></div>
      <div class="carousel-caption"><h2 class="h5">${label}</h2><p>Bootstrap carousel content.</p></div>
    </div>
    <div class="carousel-item"><div class="ratio ratio-16x9 bg-secondary"></div></div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#${id}" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button>
  <button class="carousel-control-next" type="button" data-bs-target="#${id}" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>
</div>`;
    case "tooltip":
      return `<button type="button" class="btn btn-primary ${className}" data-bs-toggle="tooltip" data-bs-custom-class="${className}" data-bs-title="${label}">
  Hover or focus
</button>`;
    case "popover":
      return `<button type="button" class="btn btn-primary ${className}" data-bs-toggle="popover" data-bs-custom-class="${className}" data-bs-title="${label}" data-bs-content="Contextual Bootstrap popover content.">
  Toggle popover
</button>`;
    case "progress":
      return `<div class="${className}">
  <div class="progress" role="progressbar" aria-label="${label}" aria-valuenow="64" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar progress-bar-striped" style="width: 64%">64%</div>
  </div>
</div>`;
    case "stepper":
      return `<ol class="list-unstyled d-flex ${className}" aria-label="${label}">
  <li class="bsx-step bsx-is-complete"><span class="bsx-step-marker" aria-hidden="true">✓</span><span class="visually-hidden">Complete: </span>Account</li>
  <li class="bsx-step bsx-is-active" aria-current="step"><span class="bsx-step-marker" aria-hidden="true">2</span>Profile</li>
  <li class="bsx-step"><span class="bsx-step-marker" aria-hidden="true">3</span>Confirm</li>
</ol>`;
    case "breadcrumb":
      return `<nav class="${className}" aria-label="Breadcrumb">
  <ol class="breadcrumb mb-0">
    <li class="breadcrumb-item"><a href="#">CRM</a></li>
    <li class="breadcrumb-item"><a href="#">Customers</a></li>
    <li class="breadcrumb-item active" aria-current="page">Acme profile</li>
  </ol>
</nav>`;
    case "pagination":
      return `<nav class="${className}" aria-label="${label}">
  <ul class="pagination mb-0" ${name.includes("loading") ? 'aria-busy="true"' : ""}>
    <li class="page-item disabled"><a class="page-link" href="#" aria-disabled="true">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>`;
    case "button-group":
      return `<div class="btn-group ${className}" role="group" aria-label="${label}">
  <button type="button" class="btn btn-outline-secondary">List</button>
  <button type="button" class="btn btn-outline-secondary active" aria-pressed="true">Table</button>
  <button type="button" class="btn btn-outline-secondary">Kanban</button>
</div>`;
    case "input-group":
      return `<div class="${className}">
  <label class="form-label" for="${id}">${label}</label>
  <div class="input-group ${name.includes("validation") ? "has-validation" : ""}" ${name.includes("pending") ? 'aria-busy="true"' : ""}>
    <span class="input-group-text" id="${id}Addon">#</span>
    <input class="form-control ${name.includes("validation") ? "is-invalid" : ""}" id="${id}" type="text" value="CRM-2048" aria-describedby="${id}Addon ${id}Feedback">
    <button class="btn btn-outline-secondary" type="button">${name.includes("password") ? "Show" : "Apply"}</button>
    <div class="invalid-feedback" id="${id}Feedback">Check this value before saving.</div>
  </div>
</div>`;
    case "close-button":
      return `<div class="alert alert-light border d-flex align-items-center justify-content-between gap-3 ${className}" role="status">
  <span>${label}</span>
  <button type="button" class="btn-close" aria-label="Close"></button>
</div>`;
    case "admin/crud":
      return `<div class="table-responsive ${className}">
  <div class="d-flex align-items-center justify-content-between gap-2 mb-2">
    <span class="small text-body-secondary">3 selected records</span>
    <div class="btn-group btn-group-sm" role="group" aria-label="Bulk actions">
      <button type="button" class="btn btn-outline-secondary">Edit</button>
      <button type="button" class="btn btn-outline-danger">Delete</button>
    </div>
  </div>
  <table class="table table-hover align-middle mb-0">
    <thead><tr><th scope="col">Customer</th><th scope="col">State</th><th scope="col">Updated</th></tr></thead>
    <tbody>
      <tr class="${name.includes("error") || name.includes("delete") ? "bsx-is-error" : name.includes("success") ? "bsx-is-success" : name.includes("dirty") ? "bsx-is-dirty" : name.includes("pending") ? "bsx-is-loading" : ""}">
        <th scope="row">Acme Ltd</th>
        <td><span class="badge text-bg-primary">Open</span></td>
        <td><span class="text-body-secondary">Now</span></td>
      </tr>
    </tbody>
  </table>
</div>`;
    case "filter/search":
      return `<section class="card ${className}">
  <div class="card-body">
    <label class="form-label" for="${id}">${label}</label>
    <div class="input-group mb-3" ${name.includes("search") ? 'aria-busy="true"' : ""}>
      <input class="form-control" id="${id}" type="search" value="active customers">
      <button class="btn btn-outline-secondary" type="button">Search</button>
    </div>
    <div class="d-flex flex-wrap gap-2">
      <span class="badge text-bg-primary bsx-filter-chip">Status: active</span>
      <span class="badge text-bg-secondary bsx-filter-chip">Owner: me</span>
    </div>
  </div>
</section>`;
    case "form-wizard":
      return `<form class="${className}">
  <ol class="list-unstyled d-flex mb-3" aria-label="${label}">
    <li class="bsx-step bsx-is-complete"><span class="bsx-step-marker" aria-hidden="true">✓</span>Account</li>
    <li class="bsx-step bsx-is-active" aria-current="step"><span class="bsx-step-marker" aria-hidden="true">2</span>Details</li>
    <li class="bsx-step ${name.includes("error") ? "bsx-is-error" : ""}"><span class="bsx-step-marker" aria-hidden="true">3</span>Review</li>
  </ol>
  <div class="card">
    <div class="card-body">
      <label class="form-label" for="${id}">Company name</label>
      <input class="form-control ${name.includes("error") ? "is-invalid" : ""}" id="${id}" type="text" value="Acme Ltd">
      <div class="invalid-feedback">Resolve this step before submitting.</div>
    </div>
    <div class="card-footer d-flex justify-content-end gap-2">
      <button type="button" class="btn btn-outline-secondary">Back</button>
      <button type="submit" class="btn btn-primary">Save step</button>
    </div>
  </div>
</form>`;
    case "state":
      return `<section class="card ${className}" ${name.includes("locked") ? 'aria-disabled="true"' : ""}>
  <div class="card-body">
    <h2 class="h5">${label}</h2>
    <p class="text-body-secondary mb-3">Use this state for admin workflows that need a clear non-motion signal.</p>
    <button type="button" class="btn ${name.includes("error") ? "btn-danger" : "btn-primary"}">Primary action</button>
  </div>
</section>`;
    case "data-loading":
      return `<section class="card ${className}" aria-busy="true" aria-live="polite">
  <div class="card-body">
    <div class="d-flex align-items-center justify-content-between gap-3 mb-3">
      <h2 class="h6 mb-0">${label}</h2>
      <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    </div>
    <div class="bsx-skeleton-line rounded mb-2"></div>
    <div class="bsx-skeleton-line rounded w-75"></div>
  </div>
</section>`;
    case "notification-center":
      return `<section class="card ${className}" aria-label="${label}">
  <div class="card-header d-flex align-items-center justify-content-between">
    <span>Notifications</span>
    <span class="badge text-bg-primary">3</span>
  </div>
  <div class="list-group list-group-flush">
    <a href="#" class="list-group-item list-group-item-action bsx-is-unread">New lead assigned</a>
    <a href="#" class="list-group-item list-group-item-action">Invoice paid</a>
  </div>
</section>`;
    case "mobile":
      return `<section class="border rounded p-3 ${className}" aria-label="${label}">
  <div class="d-flex align-items-center justify-content-between gap-3">
    <span class="fw-semibold">Mobile CRM action</span>
    <button type="button" class="btn btn-primary btn-sm">Save</button>
  </div>
  <nav class="nav nav-pills nav-fill mt-3" aria-label="Mobile navigation">
    <a class="nav-link active" aria-current="page" href="#">Today</a>
    <a class="nav-link" href="#">Tasks</a>
    <a class="nav-link" href="#">More</a>
  </nav>
</section>`;
    default:
      return `<section class="card ${className}" data-bsx-reveal>
  <div class="card-body text-center py-5">
    <h2 class="h4">${label}</h2>
    <p class="text-body-secondary">A lightweight page-level transition.</p>
    <button type="button" class="btn btn-primary bsx-button-press">Continue</button>
  </div>
</section>`;
  }
}

function snippetFor(effect) {
  const markup = snippetMarkupFor(effect);
  if (!effect.requiresJs) {
    return markup;
  }

  return `<!-- Requires Bootstrap bundle and assets/js/bootstrap5-transitions.js. -->
${markup}`;
}

async function write(relativePath, content) {
  const path = resolve(root, relativePath);
  const normalizedContent = normalizeGeneratedContent(content);

  if (checkOnly) {
    let currentContent = "";
    try {
      currentContent = await readFile(path, "utf8");
    } catch {
      changedFiles.push(relativePath);
      return;
    }

    if (currentContent !== normalizedContent) {
      changedFiles.push(relativePath);
    }
    return;
  }

  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, normalizedContent, "utf8");
}

function normalizeGeneratedContent(content) {
  const lfContent = content.replace(/\r\n/g, "\n");
  return `${lfContent.replace(/\n*$/u, "")}\n`;
}

function catalogFor(items, heading) {
  const summaryTable = [
    "| Class | Level | Component | Requires JS | Kind | Density | Risk | Motion | Best for | Avoid for | Reduced motion | Snippet |",
    "|---|---|---|---|---|---|---|---|---|---|---|---|",
    ...items.map((effect) => [
      `| \`${effect.className}\``,
      effect.level,
      effect.component,
      effect.requiresJs ? "yes" : "no",
      effect.kind,
      effect.density,
      effect.risk,
      effect.motion,
      effect.bestFor,
      effect.avoidFor,
      effect.reducedMotion,
      `\`${effect.snippetPath}\` |`,
    ].join(" | ")),
  ].join("\n");

  const blocks = items.map((effect) => [
    `## ${effect.name}`,
    "",
    `- Category: ${effect.category}`,
    `- Class: \`${effect.className}\``,
    `- Level: ${effect.level}`,
    `- Bootstrap component: ${effect.component}`,
    `- Requires JS: ${effect.requiresJs ? "yes" : "no"}`,
    `- Runtime behavior: ${effect.runtimeBehavior ?? "none"}`,
    `- Kind: ${effect.kind}`,
    `- Density: ${effect.density}`,
    `- Risk: ${effect.risk}`,
    `- CSS properties: ${effect.cssProperties.map((property) => `\`${property}\``).join(", ")}`,
    `- Bootstrap states: ${effect.bootstrapStates.map((state) => `\`${state}\``).join(", ")}`,
    `- Motion: ${effect.motion}`,
    `- Best for: ${effect.bestFor}`,
    `- Avoid for: ${effect.avoidFor}`,
    `- Reduced motion: ${effect.reducedMotion}`,
    `- Snippet: \`${effect.snippetPath}\``,
  ].join("\n"));

  return [
    `# ${heading}`,
    "",
    "Generated from `scripts/effects.mjs`. Every entry maps one CSS class to one copy-paste snippet. Entries marked `Requires JS: yes` also require `assets/js/bootstrap5-transitions.js` after the Bootstrap bundle.",
    "",
    "## Summary",
    "",
    summaryTable,
    "",
    blocks.join("\n\n"),
  ].join("\n");
}

for (const effect of effects) {
  await write(effect.snippetPath, snippetFor(effect));
}

await write(
  "references/catalog.md",
  catalogFor(effects, "Bootstrap 5 Transitions Catalog"),
);

await write(
  ".agents/skills/bootstrap5-transitions/references/catalog.md",
  catalogFor(effects, "Bootstrap 5 Transitions Skill Catalog"),
);

const clientEffects = effects.map((effect) => ({
  ...effect,
  snippet: snippetFor(effect),
}));

await write(
  "assets/js/effects-data.js",
  `window.bsxEffects = ${JSON.stringify(clientEffects, null, 2)};`,
);

if (checkOnly && changedFiles.length) {
  console.error("Generated files are out of date:");
  changedFiles.forEach((file) => console.error(`- ${file}`));
  process.exitCode = 1;
} else if (checkOnly) {
  console.log(`Generated files are current for ${effects.length} effects.`);
} else {
  console.log(
    `Generated ${coreEffects.length} core and ${extendedEffects.length} extended effects (${effects.length} total).`,
  );
}
