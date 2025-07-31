# Taskusanakirja Website Guide

## What is this?

This is the website for Taskusanakirja (taskusanakirja.com), built with Hugo (a
static site generator) and styled with Tailwind CSS.

## Prerequisites

You need these installed on your computer:

- **Node.js** (includes npm) - [Download here](https://nodejs.org/)
- **Hugo** - [Installation guide](https://gohugo.io/installation/)

To check if they're installed:

```bash
node --version    # Should show something like v18.x.x
npm --version     # Should show something like 9.x.x
hugo version      # Should show something like v0.xxx.x
```

## First Time Setup

1. **Clone the repository** (if you haven't already):

   ```bash
   git clone [your-repo-url]
   cd taskusanakirja.com
   ```

2. **Install the npm packages**:

   ```bash
   npm install
   ```

   This downloads all the tools needed to compile the CSS (mainly Tailwind CSS).

## Daily Development Workflow

### Start the Development Server

```bash
npm run dev
```

This single command does two things simultaneously:

- Starts the Hugo development server (your website preview)
- Watches for CSS changes and recompiles them automatically

**What you'll see:**

- Your site will be available at `http://localhost:1313/`
- Any changes you make will automatically refresh in your browser
- CSS changes will be compiled instantly

### Making Changes

1. **Content changes** (text, pages):
   - Edit files in the `/content/` folder
   - Changes appear instantly in your browser

2. **Style changes** (colors, spacing, etc.):
   - The CSS is controlled by Tailwind classes in your HTML templates
   - Located in `/themes/taskusanakirja-theme/layouts/`
   - Changes are compiled automatically while `npm run dev` is running

3. **After making changes**:
   - The development server shows your changes instantly
   - When you're happy, commit your changes to git

## Building for Production

When you're ready to deploy:

```bash
npm run build
```

This:

1. Compiles your CSS for production (optimized and minified)
2. Builds the entire Hugo site with minification
3. Creates a `/public/` folder with your ready-to-deploy website

## Understanding the Commands

### What is npm?

- **npm** = Node Package Manager
- It's like an app store for JavaScript tools
- `package.json` lists what tools this project needs
- `npm install` downloads those tools into `node_modules/`

### What do the npm scripts do?

Look in `package.json` under "scripts":

- `npm run dev` = Start development (Hugo server + CSS watching)
- `npm run build` = Build everything for production
- `npm run build-css` = Just compile the CSS
- `npm run watch-css` = Just watch CSS changes

### Why npm for a Hugo site?

Hugo is great at building static sites, but modern CSS tools like Tailwind need
JavaScript to compile. npm manages these JavaScript tools for us.

## Common Issues

### "Command not found" errors

- Make sure Node.js/npm and Hugo are installed
- Try closing and reopening your terminal

### CSS changes not appearing

- Make sure `npm run dev` is running
- Check the terminal for error messages
- Try `npm run build-css` manually

### Site won't start

- Check if port 1313 is already in use
- Try `hugo server -D -p 1314` to use a different port

## File Structure Quick Reference

```
taskusanakirja.com/
├── content/              # Your website pages (Markdown files)
├── themes/
│   └── taskusanakirja-theme/  # Your active theme
│       ├── layouts/      # HTML templates
│       └── assets/css/   # CSS files
├── package.json          # npm configuration
├── hugo.toml            # Hugo configuration
└── public/              # Built site (don't edit - regenerated each build)
```

## Deployment

The site automatically deploys when you push to the `master` branch on GitHub.
No manual deployment needed!

## Need Help?

- **Hugo documentation**: <https://gohugo.io/documentation/>
- **Tailwind CSS docs**: <https://tailwindcss.com/docs>
- **npm basics**: <https://docs.npmjs.com/getting-started>

Remember: `npm run dev` is your friend - it handles all the complicated stuff
automatically!
