# Dark Mode Heading Color Fix Attempts

This document records the attempts made to fix heading colors in dark mode that
did NOT work.

## Problem Description

- Headings (h2-h6) in prose sections don't change color in dark mode
- They remain as `#111827` (from `--tw-prose-headings` variable)
- Regular paragraph text fix worked by adding `text-ink-800 dark:text-ochre-200`
  to the prose div

## Failed Attempts

### Attempt 1: Direct CSS Overrides with !important

Added to `main.css`:

```css
.dark .prose :where(h1):not(:where([class~="not-prose"] *)),
.dark .prose :where(h2):not(:where([class~="not-prose"] *)),
.dark .prose :where(h3):not(:where([class~="not-prose"] *)),
.dark .prose :where(h4):not(:where([class~="not-prose"] *)),
.dark .prose :where(h5):not(:where([class~="not-prose"] *)),
.dark .prose :where(h6):not(:where([class~="not-prose"] *)) {
  color: rgb(247 240 227) !important;
}
```

**Result**: Did not work. The styles were in the compiled CSS but didn't
override the prose styles.

### Attempt 2: Additional Specific Selectors

Added more specific selectors without the `:where()` pseudo-class:

```css
/* Additional specificity for headings in dark mode */
.dark .prose h1,
.dark .prose h2,
.dark .prose h3,
.dark .prose h4,
.dark .prose h5,
.dark .prose h6 {
  color: rgb(247 240 227) !important;
}

/* Even more specific selectors for prose-lg */
.dark .prose-lg h1,
.dark .prose-lg h2,
.dark .prose-lg h3,
.dark .prose-lg h4,
.dark .prose-lg h5,
.dark .prose-lg h6 {
  color: rgb(247 240 227) !important;
}
```

**Result**: Did not work. These were also compiled but didn't take effect.

### Attempt 3: CSS Variable Overrides

Tried overriding the CSS custom properties that Tailwind Typography uses:

```css
.dark .prose {
  --tw-prose-body: rgb(239 225 199);
  --tw-prose-headings: rgb(247 240 227);
  --tw-prose-lead: rgb(239 225 199);
  --tw-prose-links: rgb(231 210 171);
  --tw-prose-bold: rgb(247 240 227);
  /* ... etc ... */
}
```

**Result**: Did not work. The variables were set but the headings still didn't
change color.

## What DID Work

Adding explicit Tailwind utility classes to the prose container:

```html
<div class="prose prose-lg max-w-none text-ink-800 dark:text-ochre-200"></div>
```

This successfully changed the paragraph text color in dark mode.

## Attempted Solution (Later Rolled Back)

We attempted to use the `dark:prose-invert` class along with CSS overrides to
fix heading colors:

1. Added `dark:prose-invert` to all prose containers in templates
2. Added CSS overrides to force prose-invert headings to use ochre color:

```css
.dark
  .prose-invert
  :where(h1):not(:where([class~="not-prose"], [class~="not-prose"] *)),
.dark
  .prose-invert
  :where(h2):not(:where([class~="not-prose"], [class~="not-prose"] *)),
.dark
  .prose-invert
  :where(h3):not(:where([class~="not-prose"], [class~="not-prose"] *)),
.dark
  .prose-invert
  :where(h4):not(:where([class~="not-prose"], [class~="not-prose"] *)),
.dark
  .prose-invert
  :where(h5):not(:where([class~="not-prose"], [class~="not-prose"] *)),
.dark
  .prose-invert
  :where(h6):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  color: rgb(247 240 227) !important;
}
```

**Result**: This caused a regression and was rolled back. The issue remains
unresolved.

## Current State (Partial Fix)

We have a partial fix that handles most prose elements EXCEPT headings:

- Body text, links, code blocks, lists, etc. all have proper dark mode colors
- Headings (h1-h6) still remain in their default dark color in dark mode
- The CSS uses explicit selectors with `!important` to override the prose styles

## Technical Notes

- The Tailwind Typography plugin uses CSS custom properties (variables) for
  theming
- The plugin's specificity is very high due to the `:where()` pseudo-class usage
- The `prose-invert` class exists but requires proper CSS generation
- Custom CSS overrides with matching specificity patterns work reliably
