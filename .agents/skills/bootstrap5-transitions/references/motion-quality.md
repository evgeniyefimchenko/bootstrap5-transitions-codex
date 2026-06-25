# Motion Quality

- Use CSS transitions for interactive state changes because they are interruptible.
- Use keyframes only for one-shot effects: skeleton shimmer, first reveal, success confirmation, progress animation.
- Keep normal interaction duration between `120ms` and `240ms`.
- Use longer duration only for page/section entry, usually `280ms`-`420ms`.
- Exit animations should be shorter and quieter than enter animations.
- Use `scale(0.96)` for press feedback.
- Never use press scale below `0.95`.
- Use small fixed movement: usually `4px`-`12px`.
- Never use `transition: all`.
- Do not animate `width`, `height`, `top`, `left`, `right`, `bottom`, `margin`, or `padding`, unless Bootstrap itself already requires a height transition.
- Use `will-change` only for `transform`, `opacity`, or `filter`, and only when there is visible first-frame stutter.
- Respect `prefers-reduced-motion` for the element, descendants, and pseudo-elements.
