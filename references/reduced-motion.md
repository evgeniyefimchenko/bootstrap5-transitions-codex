# Reduced Motion Policy

The project keeps every component functional when the operating system requests reduced motion. Transitions become near-instant; Bootstrap visibility and state classes continue to work.

```css
@media (prefers-reduced-motion: reduce) {
  .bsx-animated,
  .bsx-animated::before,
  .bsx-animated::after,
  .bsx-animated *,
  .bsx-animated *::before,
  .bsx-animated *::after,
  [class*="bsx-"],
  [class*="bsx-"]::before,
  [class*="bsx-"]::after,
  [class*="bsx-"] *,
  [class*="bsx-"] *::before,
  [class*="bsx-"] *::after {
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
    scroll-behavior: auto !important;
  }
}
```

Do not hide content in the fallback. Effects based on movement should resolve to their final visible state with an opacity-only or near-instant change.
