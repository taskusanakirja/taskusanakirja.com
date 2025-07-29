# CSS Customization Guide for Taskusanakirja.com

## Quick Overview
This site uses Tailwind CSS with a custom theme. All styling changes should be made in the configuration files, not directly in CSS.

## Changing Colors

Edit `tailwind.config.js` to modify the color palette:

```javascript
colors: {
  'parchment': '#F4E8D0',    // Light background
  'ochre': '#D4A574',        // Warm accent
  'ink': '#2C3E50',          // Dark text
  'burgundy': '#8B3A3A',     // Deep red accent
  'forest': '#2F4F2F',       // Dark green
  'gold-leaf': '#FFD700'     // Bright accent
}
```

## Changing Fonts

Also in `tailwind.config.js`, modify the font families:

```javascript
fontFamily: {
  'serif': ['Crimson Text', 'serif'],      // Body text
  'display': ['Playfair Display', 'serif'], // Headings
  'mono': ['IBM Plex Mono', 'monospace']    // Code blocks
}
```

To add new Google Fonts, update the `<link>` tags in theme layouts at `/themes/taskusanakirja-theme/layouts/partials/head.html`.

## Dark Mode Colors

Dark mode uses Tailwind's `dark:` prefix. Add dark mode variants in your HTML:
- `dark:bg-gray-800` - Dark backgrounds
- `dark:text-gray-100` - Light text in dark mode

## Applying Changes

1. Make your changes to `tailwind.config.js`
2. Run `npm run dev` to rebuild CSS with hot reload
3. Or run `npm run build-css` for a one-time build
4. The compiled CSS goes to `/themes/taskusanakirja-theme/assets/css/compiled.css`
5. **Important**: Commit the compiled CSS file for deployment

## Custom CSS

For styles Tailwind can't handle, add them to `/themes/taskusanakirja-theme/assets/css/main.css` before the Tailwind directives.

## Typography Scales

The project uses Tailwind's typography plugin. Modify prose styles in `tailwind.config.js` under the `typography` section for consistent text styling.