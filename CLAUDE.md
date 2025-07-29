# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Hugo-based website for Taskusanakirja (taskusanakirja.com), a terminal-based Finnish-English dictionary application. The site serves as the marketing and documentation platform for the Taskusanakirja CLI tool.

## Key Commands

### Development
```bash
# Install dependencies (first time only)
npm install

# Start development server with Tailwind CSS watch
npm run dev

# Build the site for production
npm run build

# Alternative commands:
# Build CSS only
npm run build-css

# Watch CSS changes
npm run watch-css

# Start Hugo server only
hugo server -D

# Build Hugo site only
hugo --minify
```

### Deployment
The site is automatically deployed via GitHub Actions when changes are pushed to the master branch. The workflow:
- Builds the site using `hugo --minify` (without CSS compilation)
- Deploys to the `taskusanakirja/taskusanakirja.github.io` repository
- Workflow configuration: `.github/workflows/hugo.yml`
- **Note**: The GitHub Action currently references `main` branch but should be `master`

## Architecture

### Two-Theme Setup
The site has two themes installed:
1. `/themes/PaperMod/` - Unused legacy theme (included but not active)
2. `/themes/taskusanakirja-theme/` - Active custom theme with Tailwind CSS

### Content Structure
- `/content/` - Main content pages in Markdown format
  - `_index.md` - Homepage content
  - `details.md` - Product details page
  - `downloads.md` - Download links and installation instructions
  - `about.md` - About page
  - `blog/` - Blog posts directory
- `hugo.toml` - Site configuration with menu structure and theme settings

### Important Configuration
- Base URL: `https://taskusanakirja.com/`
- Theme: `taskusanakirja-theme` (not PaperMod)
- Main branch: `master` (not `main`)
- Deployment target: `taskusanakirja/taskusanakirja.github.io` repository

### Custom Theme Details
- Tailwind CSS compilation required before deployment
- Custom color palette defined in `tailwind.config.js`:
  - Parchment, Ochre, Ink, Burgundy, Forest, Gold-leaf colors
  - Custom fonts: Crimson Text, Playfair Display, IBM Plex Mono
- Theme layouts in `/themes/taskusanakirja-theme/layouts/`
  - Custom downloads page template: `downloads.html`
  - Blog-specific templates in `blog/` subdirectory
- Compiled CSS output: `/themes/taskusanakirja-theme/assets/css/compiled.css`

### Development Workflow
1. CSS changes require running `npm run dev` or `npm run watch-css`
2. Tailwind processes `/themes/taskusanakirja-theme/assets/css/main.css`
3. Output goes to `/themes/taskusanakirja-theme/assets/css/compiled.css`
4. The compiled CSS is tracked in git (required for deployment)

### Content Guidelines
- The site focuses on marketing the Taskusanakirja CLI tool
- Downloads page includes platform-specific binaries and Pro version instructions
- Keep content concise and developer-focused
- When updating download URLs, ensure all platform links are updated consistently