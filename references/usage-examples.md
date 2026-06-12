# Usage Examples

Include the aggregate stylesheet before using a snippet:

```html
<link rel="stylesheet" href="assets/css/bootstrap5-transitions.css">
```

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
<div class="toast bsx-toast-slide-right" role="status" aria-live="polite" aria-atomic="true">
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
