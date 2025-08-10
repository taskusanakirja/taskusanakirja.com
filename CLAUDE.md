# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## Project Overview

This is the Hugo-based website for Taskusanakirja (taskusanakirja.com), a
terminal-based Finnish-English dictionary application. The site serves as the
marketing and documentation platform for the Taskusanakirja CLI tool.

## Key Commands

### Development

```bash
# Install dependencies (first time only)
npm install

# Start development server with Tailwind CSS watch (RECOMMENDED)
npm run dev

# Build the site for production (includes CSS build)
npm run build

# Test that no dark mode code exists
npm run test-no-dark-mode
```

### Individual Commands

```bash
# Build CSS only
npm run build-css

# Watch CSS changes
npm run watch-css

# Start Hugo server only
hugo server -D

# Build Hugo site only
hugo --minify

# Clean the build directory if CSS changes aren't appearing
rm -rf public/ && npm run dev
```

## Architecture

### Two-Theme Setup

The site has two themes installed:

1. `/themes/PaperMod/` - Unused legacy theme (included but not active)
2. `/themes/taskusanakirja-theme/` - Active custom theme with Tailwind CSS

### High-Level Architecture

This is a static marketing site built with:

- **Hugo** - Static site generator handling content and routing
- **Tailwind CSS** - Utility-first CSS framework compiled via npm
- **Custom Theme** - taskusanakirja-theme with specialized templates and styling

The build process involves:

1. Tailwind compiles utility classes from templates into `compiled.css`
2. Hugo builds the static site using the compiled CSS
3. GitHub Actions deploys to taskusanakirja.github.io on push to master

### Critical Files

- `tailwind.config.js` - Defines custom color palette, fonts, and typography
  (prose) variants
- `package.json` - npm scripts for development workflow
- `hugo.toml` - Site configuration, menu structure, and theme selection
- `/themes/taskusanakirja-theme/layouts/` - Template files that define page
  structure
- `/themes/taskusanakirja-theme/assets/css/main.css` - Tailwind entry point
- `/themes/taskusanakirja-theme/assets/css/compiled.css` - Generated CSS
  (tracked in git)

### Content Structure

- `/content/` - Main content pages in Markdown format
  - `_index.md` - Homepage content
  - `details.md` - Product details page
  - `downloads.md` - Download links and installation instructions
  - `about.md` - About page
  - `blog/` - Blog posts directory
- Front matter in content files can override default templates

### Important Configuration

- Base URL: `https://taskusanakirja.com/`
- Theme: `taskusanakirja-theme` (not PaperMod)
- Main branch: `master` (not `main`)
- Deployment: GitHub Actions to GitHub Pages on push to `master`
- Local development: `http://localhost:1313/`

### No Dark Mode

This site does not support dark mode. Any dark mode related code should be
removed to maintain consistency with the design decision.

### Development Workflow

1. **IMPORTANT**: If CSS changes aren't showing, run `rm -rf public/ && npm run dev`
2. Run `npm run dev` to start both Hugo server and Tailwind watcher
3. Edit content in `/content/` or templates in theme layouts
4. Tailwind automatically recompiles CSS on template changes
5. Hugo automatically rebuilds on content/template changes
6. View changes at `http://localhost:1313/`

### Troubleshooting CSS Issues

**First course of action for any CSS problems**: Run `rm -rf public/ && npm run dev`

The `public/` directory can cache old CSS files that prevent new styles from appearing.

**CRITICAL: Check for duplicate CSS files in static/ vs assets/ directories**
- If CSS changes aren't reflecting after rebuilding, IMMEDIATELY check for duplicate `compiled.css` files
- The correct location is `/themes/taskusanakirja-theme/assets/css/compiled.css` (where Tailwind outputs)
- Delete any old file at `/themes/taskusanakirja-theme/static/css/compiled.css` 
- Hugo's asset pipeline (`resources.Get`) should be used in templates, NOT direct static file references
- This has been a recurring issue - always check this FIRST when CSS changes don't appear

### Deployment Workflow

1. Ensure CSS is built: `npm run build-css`
2. Commit changes including `compiled.css` (required for deployment)
3. Push to `master` branch
4. GitHub Action automatically builds and deploys to GitHub Pages
5. Site updates at https://taskusanakirja.com/

### Testing and Validation

- `npm run test-no-dark-mode` - Validates that no dark mode code exists
- Run this test after making changes to ensure dark mode hasn't been reintroduced

## Design System

### Custom Tailwind Color Palette

The site uses a book-inspired color scheme defined in `tailwind.config.js`:
- **parchment**: `#FBF8F1` - Light background color
- **slate**: Various shades for text and accents
- **ochre**: Warm accent colors
- **ink**: Dark text colors
- **burgundy**: `#7C2F3E` - Links and highlights
- **forest**: `#2F4F4F` - Dark green accent
- **gold-leaf**: `#B8860B` - Gold accent

### Typography

- **Font families**:
  - `font-serif`: Crimson Text (body text)
  - `font-display`: Playfair Display (headings)
  - `font-mono`: IBM Plex Mono (code blocks)
- **Prose styling**: Uses `@tailwindcss/typography` plugin with custom configuration

## Common Development Tasks

### Adding a New Page

1. Create a new Markdown file in `/content/` (e.g., `pricing.md`)
2. Add front matter with title and optional layout
3. Add menu entry in `hugo.toml` if needed
4. The page will use the default single template unless specified

### Modifying Templates

- Homepage: `/themes/taskusanakirja-theme/layouts/index.html`
- Default page: `/themes/taskusanakirja-theme/layouts/_default/single.html`
- Blog list: `/themes/taskusanakirja-theme/layouts/blog/list.html`
- Base template: `/themes/taskusanakirja-theme/layouts/_default/baseof.html`

### Adding Blog Posts

1. Create a new Markdown file in `/content/blog/`
2. Include front matter with title, date, and optional author
3. The post automatically appears in the blog listing

## Known Issues and Workarounds

### CSS Changes Not Appearing

This is the most common issue. Solutions in order:
1. Run `rm -rf public/ && npm run dev`
2. Check for duplicate `compiled.css` files:
   - Correct: `/themes/taskusanakirja-theme/assets/css/compiled.css`
   - Delete if exists: `/themes/taskusanakirja-theme/static/css/compiled.css`
3. Ensure templates use Hugo's asset pipeline: `{{ $css := resources.Get "css/compiled.css" }}`

### Port Already in Use

If port 1313 is busy, use a different port:
```bash
hugo server -D -p 1314
```
