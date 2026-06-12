# Usage Examples

Include the aggregate stylesheet before using a snippet:

```html
<link rel="stylesheet" href="assets/css/bootstrap5-transitions.css">
```

For catalog entries marked `Requires JS: yes`, load the runtime after Bootstrap Bundle:

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
<script src="assets/js/bootstrap5-transitions.js"></script>
```

Do not load `assets/js/demo.js` in an application. It only renders and filters the repository demo.

## Modal

```html
<div class="modal fade bsx-modal-scale" id="confirmModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog"><div class="modal-content">...</div></div>
</div>
```

## Button

```html
<button class="btn btn-primary bsx-button-press">Save</button>
```

## Form Validation

```html
<div class="bsx-form-invalid-shake">
  <input class="form-control is-invalid" aria-describedby="emailError">
  <div class="invalid-feedback" id="emailError">Enter a valid email.</div>
</div>
```

## Toast

```html
<button type="button" class="btn btn-primary" data-bsx-action="show-toast" data-bsx-target="#savedToast">
  Show status
</button>
<div class="toast bsx-toast-slide-right" id="savedToast" role="status" aria-live="polite" aria-atomic="true">
  <div class="toast-body">Saved.</div>
</div>
```

## Card

```html
<article class="card bsx-card-hover-lift">
  <div class="card-body">...</div>
</article>
```

## Table Row

```html
<div class="table-responsive bsx-table-row-hover">
  <table class="table"><tbody><tr><td>Order #42</td></tr></tbody></table>
</div>
```
