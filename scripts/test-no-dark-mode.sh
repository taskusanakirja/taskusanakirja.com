#!/bin/bash
# Test to ensure no dark mode functionality exists in the codebase

set -e

echo "🔍 Testing for absence of dark mode..."

# Function to check for patterns and fail if found
check_absence() {
    local pattern="$1"
    local description="$2"
    
    echo -n "  Checking for $description... "
    
    # Search only in active theme and content directories
    if grep -r "$pattern" \
        ./themes/taskusanakirja-theme \
        ./content \
        ./tailwind.config.js \
        ./hugo.toml \
        ./package.json \
        ./CSS_CUSTOMIZATION_GUIDE.md \
        ./CLAUDE.md \
        --include="*.html" \
        --include="*.js" \
        --include="*.css" \
        --include="*.json" \
        --include="*.toml" \
        --include="*.md" \
        --exclude="compiled.css" \
        > /dev/null 2>&1; then
        echo "❌ FOUND!"
        echo "  Dark mode remnants detected with pattern: $pattern"
        grep -r "$pattern" \
            ./themes/taskusanakirja-theme \
            ./content \
            ./tailwind.config.js \
            ./hugo.toml \
            ./package.json \
            ./CSS_CUSTOMIZATION_GUIDE.md \
            ./CLAUDE.md \
            --include="*.html" \
            --include="*.js" \
            --include="*.css" \
            --include="*.json" \
            --include="*.toml" \
            --include="*.md" \
            --exclude="compiled.css" \
            -n | head -5
        exit 1
    else
        echo "✅ OK"
    fi
}

# Check for various dark mode patterns
check_absence "dark:" "dark: prefix in CSS classes"
check_absence "theme-toggle" "theme toggle elements"
check_absence "localStorage.*theme" "theme persistence code"
check_absence "prefers-color-scheme" "system theme detection"
check_absence "\\bdark\\s*mode\\b.*toggle\\|\\bdark\\s*mode\\b.*enable\\|\\bdark\\s*mode\\b.*switch" "dark mode functionality"
check_absence "sun.*moon" "sun/moon toggle icons"
check_absence "prose-invert" "prose-invert classes"
check_absence "defaultTheme" "theme configuration"
check_absence "darkMode" "Tailwind dark mode config"

echo ""
echo "✅ All dark mode tests passed! No dark mode functionality detected."