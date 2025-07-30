#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const compiledCssPath = path.join(__dirname, '../themes/taskusanakirja-theme/assets/css/compiled.css');

// Check if compiled CSS exists
if (!fs.existsSync(compiledCssPath)) {
  console.error('❌ Error: Compiled CSS file not found at:', compiledCssPath);
  console.error('   Run "npm run build-css" first');
  process.exit(1);
}

// Read the compiled CSS
const cssContent = fs.readFileSync(compiledCssPath, 'utf8');

// Check for essential prose-invert classes (handle both minified and non-minified)
const checks = [
  {
    pattern: /\.prose-invert[:{]/,
    name: 'Base .prose-invert class',
    critical: true
  },
  {
    pattern: /\.dark\\:prose-invert:is\(.dark\s*\*\)[:{]/,
    name: 'Dark mode prose-invert variant',
    critical: true
  },
  {
    pattern: /prose-invert\s*:where\(h[1-6]\)/,
    name: 'Prose-invert heading styles',
    critical: true
  },
  {
    pattern: /prose-invert.*:where\(a\)/,
    name: 'Prose-invert link styles',
    critical: true
  },
  {
    pattern: /prose-invert\s*:where\(code\)/,
    name: 'Prose-invert code styles',
    critical: true
  },
  {
    pattern: /color:#f7f0e3/,
    name: 'Ochre-100 color for dark mode text',
    critical: false
  },
  {
    pattern: /color:#e7d2ab/,
    name: 'Ochre-300 color for dark mode links',
    critical: false
  }
];

let hasErrors = false;
let proseInvertCount = 0;

console.log('🔍 Checking prose-invert styles in compiled CSS...\n');

// Count total occurrences
const matches = cssContent.match(/prose-invert/g);
if (matches) {
  proseInvertCount = matches.length;
}

// Run checks
checks.forEach(check => {
  if (check.pattern.test(cssContent)) {
    console.log(`✅ Found: ${check.name}`);
  } else {
    if (check.critical) {
      console.error(`❌ Missing: ${check.name} (CRITICAL)`);
      hasErrors = true;
    } else {
      console.warn(`⚠️  Missing: ${check.name} (optional)`);
    }
  }
});

console.log(`\n📊 Total prose-invert occurrences: ${proseInvertCount}`);

if (proseInvertCount < 40) {
  console.error('❌ Warning: Low count of prose-invert classes (expected 40+)');
  hasErrors = true;
}

// Check file size (basic sanity check)
const stats = fs.statSync(compiledCssPath);
const fileSizeKB = stats.size / 1024;
console.log(`📦 CSS file size: ${fileSizeKB.toFixed(1)} KB`);

if (fileSizeKB < 40) {
  console.error('❌ Warning: CSS file seems too small, might be missing styles');
  hasErrors = true;
}

// Final result
console.log('\n' + '='.repeat(50));
if (hasErrors) {
  console.error('❌ FAILED: Critical prose-invert styles are missing!');
  console.error('\nTo fix:');
  console.error('1. Check tailwind.config.js has the invert variant defined');
  console.error('2. Ensure templates use "dark:prose-invert" class');
  console.error('3. Run "npm run build-css" to rebuild');
  process.exit(1);
} else {
  console.log('✅ SUCCESS: All critical prose-invert styles found!');
  process.exit(0);
}