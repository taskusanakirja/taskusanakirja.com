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
- Builds the site using `hugo --minify`
- Deploys to the `taskusanakirja/taskusanakirja.github.io` repository
- Workflow configuration: `.github/workflows/hugo.yml`

## Architecture

### Content Structure
- `/content/` - Main content pages in Markdown format
  - `_index.md` - Homepage content
  - `downloads.md` - Download links and installation instructions
  - `about.md` - About page
- `/themes/PaperMod/` - Hugo theme (included as part of the repository)
- `hugo.toml` - Site configuration including menu structure and theme settings

### Important Configuration
- Base URL: `https://taskusanakirja.com/`
- Theme: taskusanakirja-theme (custom theme with Tailwind CSS)
- Main branch: `master` (not `main`)
- Deployment target: `taskusanakirja/taskusanakirja.github.io` repository

### Custom Theme Details
- The site uses a custom theme located in `/themes/taskusanakirja-theme/`
- Tailwind CSS is used for styling with a custom color palette (Finnish blue, accent gold)
- The theme includes a professional landing page with animated SVG
- Downloads page has a custom layout with styled download cards
- All CSS must be compiled using `npm run build-css` before deployment

### Content Guidelines
- The site focuses on marketing the Taskusanakirja CLI tool
- Downloads page includes platform-specific binaries and Pro version instructions
- Keep content concise and developer-focused
- When updating download URLs, ensure all platform links are updated consistently