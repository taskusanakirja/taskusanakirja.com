---
title: "Frequently Asked Questions"
description: "Your friendly guide to the Finnish dictionary that fits in your pocket (well, digitally)"
layout: "single"
---

# Taskusanakirja FAQ

## Table of Contents

- [Getting Started](#getting-started)
- [Basic Usage](#basic-usage)
- [Pro vs Free](#pro-vs-free)
- [Technical Stuff](#technical-stuff)
- [Troubleshooting](#troubleshooting)
- [Language Learning](#language-learning)
- [Advanced Usage](#advanced-usage)
- [Support & Community](#support--community)

---

## Getting Started

### What is Taskusanakirja?

Taskusanakirja (literally "pocket dictionary" in Finnish) is a fast, offline-first Finnish-English dictionary designed for the command line. But don't let that scare you off! It's a single, portable file that just works – no installation wizardry required. Think of it as your Finnish language sidekick that provides instant search-as-you-type, handles inflected words, shows example sentences, and more.

### How do I install it?

**The super simple way:**

1. Download the file for your operating system from our [Downloads page](/downloads/)
2. Double-click it. That's it!

**For the terminal enthusiasts:**

- Rename it to `taskusanakirja` for easier typing
- Make it executable (Linux/Mac: `chmod +x taskusanakirja`)
- Optionally add it to your PATH

No dependencies, no package managers, no headaches. Just download and run!

### What platforms does it work on?

Pretty much everything:

- **Windows** (32-bit and 64-bit)
- **macOS** (Intel and Apple Silicon M1/M2/M3)
- **Linux** (amd64 and arm64)

Each platform gets a native binary that runs without any extra software.

### Do I need command line experience?

Nope! While it's technically a command-line tool, you can use it without knowing anything about terminals:

1. **Double-click** the downloaded file
2. **Type** your Finnish word
3. **Use arrow keys** to browse
4. **Press 'q'** or Esc to quit

The interactive interface (TUI) is designed to be intuitive even if you've never touched a terminal before.

### Does it work offline?

Yes! The entire dictionary is baked into that one file you downloaded. You only need internet for:

- Activating a Pro license
- Downloading the inflections database (Pro feature, one-time 2.6GB download)
- Occasional license checks (Pro users only, like once a month)

---

## Basic Usage

### How do I look up a Finnish word?

**Interactive mode (the easy way):**

```bash
./taskusanakirja
```

Then just start typing! Results appear instantly as you type.

**Quick lookup from command line:**

```bash
./taskusanakirja find kissa
./taskusanakirja koira  # 'find' is optional
```

### How do I find Finnish words when I only know the English?

**In the TUI:** Press `Ctrl-F` to toggle reverse search mode

**From command line:**

```bash
./taskusanakirja rfind house
./taskusanakirja rfind "small flying insect"
```

### What are all these keyboard shortcuts?

Here are the ones you'll actually use:

| Key             | What it does                      |
| --------------- | --------------------------------- |
| `Up/Down`       | Navigate word list                |
| `Tab/Shift-Tab` | Scroll through definitions        |
| `Ctrl-E`        | Toggle inflection search (Pro)    |
| `Ctrl-F`        | Switch to English→Finnish search  |
| `Ctrl-T`        | Show example sentences            |
| `Ctrl-S`        | Save word to your vocabulary list |
| `Ctrl-L`        | Show your saved words             |
| `Ctrl-H`        | Help (when you forget these)      |
| `Esc` or `q`    | Exit                              |

### What's this "Go Deeper" feature?

When you're looking at a definition, other Finnish words within that definition become clickable links. It's like Wikipedia rabbit holes, but for Finnish vocabulary. Super useful when one word leads you to discover five more.


### What are example sentences?

Real Finnish sentences from the Tatoeba project showing how words are actually used. Press `Ctrl-T` in the TUI to see them. Way better than memorizing isolated words!

---

## Pro vs Free

### What's the difference?

**Free Version (already pretty awesome):**

- Complete Finnish-English dictionary
- English-to-Finnish reverse lookup
- Interactive TUI and command line modes
- Basic inflection handling
- Example sentences
- Vocabulary builder
- 100% offline dictionary

**Pro Version (for the serious learners):**

- **The killer feature:** Complete lemmatization – finds base forms of ANY inflected word
- Comprehensive morphological analysis
- Etymology information when available
- Advanced search filters
- Priority support

### Do I really need Pro?

**You'll love Pro if:**

- You're reading real Finnish texts and constantly encounter words like "kissoilleen" and wonder "what the heck is the base form?"
- You're serious about learning Finnish
- You want to understand not just what a word means, but how it's constructed
- You value your time (manually figuring out inflections is tedious)

**Free is probably fine if:**

- You're just starting with Finnish
- You mainly look up basic vocabulary
- You're mostly dealing with dictionary forms

### How much does Pro cost?

**15 euros**. One time. No subscriptions, no recurring fees, no nonsense. Buy once, use forever.

### How do I activate my Pro license?

After purchasing:

```bash
./taskusanakirja license set YOUR-LICENSE-KEY-HERE
./taskusanakirja download-inflections  # This downloads 2.6GB
```

Your license key looks like: `XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX`

### What's this inflection search everyone's raving about?

Finnish words change form like crazy. The word "talo" (house) has forms like talossa, talosta, taloihin, taloilla... Pro's inflection search instantly tells you that "taloilla" = "talo" + locative plural. Game changer for reading comprehension.

```bash
# Pro feature examples
./taskusanakirja lemma kissojen  # → kissa (cat) + genitive plural
./taskusanakirja lemma juoksentelisin  # → juoksennella + conditional
```

---

## Technical Stuff

### How big is this thing?

- **The app itself:** ~60-65MB (all platforms)
- **Pro inflections database:** Additional 2.6GB
- **Total with Pro:** About 2.7GB

### Where does it store files?

Everything lives in `~/.config/taskusanakirja/`:

- `config.yaml` - Your settings
- `license.bin` - Pro license (encrypted)
- `inflections.db` - The big inflections database (Pro)
- `debug.log` - Debug info when things go wrong

### Is the source code available?

Taskusanakirja is a closed-source application. We focus on providing a high-quality, well-tested binary distribution that works reliably across all supported platforms.

### Is my data private?

Absolutely:

- **No tracking** - Your searches stay on your computer
- **No analytics** - We don't know what you're looking up
- **No cloud** - Everything runs locally
- **License checks only** - Pro version phones home occasionally just to verify your license

---

## Troubleshooting

### It won't start

**macOS:** "Unidentified developer" warning? Go to System Preferences → Security & Privacy → Click "Open Anyway"

**Windows:** "Windows protected your PC"? Click "More info" → "Run anyway"

**Linux:** Make it executable first: `chmod +x taskusanakirja`

### License activation is failing

1. **Check your internet** - You need to be online for activation
2. **Try 2-3 times** - There's a quirk where `license check` sometimes needs multiple attempts
3. **Verify the key** - Make sure you copied the whole UUID
4. **Still stuck?** Email <andrew@siilikuin.com>

### The inflection database download keeps failing

It's a big file (2.6GB), so:

- Check you have 3GB+ free disk space
- Use a stable internet connection
- Just retry - it happens
- Check your firewall isn't blocking it

### TUI looks weird/broken

Your terminal needs to:

- Support UTF-8 (for Finnish characters)
- Support colors
- Be reasonably sized (not 10 columns wide)

Try a different terminal emulator if yours is ancient.

### "Command not found"

Either:

- Use `./taskusanakirja` (with the ./ prefix)
- Or add it to your PATH
- Or you're in the wrong directory

---

## Language Learning

### Is this good for beginners?

Absolutely! While the Pro features shine for intermediate/advanced learners, beginners love:

- Instant lookups without context switching
- Multiple meanings shown clearly
- Example sentences for context
- The vocabulary builder for tracking progress

### How accurate is it?

The data comes from Wiktionary and Tatoeba - both solid, community-maintained sources. Coverage is excellent for:

- Common vocabulary
- Standard Finnish
- Most inflected forms

Very specialized jargon or brand-new slang might be missing.

### Does it show pronunciation?

Not yet. For pronunciation, pair it with:

- Forvo for audio
- Any Finnish learning app with audio
- IPA guides if you're into that

### What about those crazy long compound words?

Finnish loves its compound words! Taskusanakirja handles many of them, and the "go deeper" feature often helps you understand the components. Pro version's morphological analysis is especially helpful here.

---

## Advanced Usage

### Can I script with it?

Oh yes! It's very script-friendly:

```bash
# Batch lookups
for word in koira kissa omena; do
    ./taskusanakirja find "$word"
done

# Process a word list
cat words.txt | xargs ./taskusanakirja find

# Use in conditions
if ./taskusanakirja find "$word" | grep -q "noun"; then
    echo "$word is a noun"
fi
```

### Shell completion?

Generate completion scripts for your shell:

```bash
# Bash
./taskusanakirja completion bash > /etc/bash_completion.d/taskusanakirja

# Zsh
./taskusanakirja completion zsh > "${fpath[1]}/_taskusanakirja"

# Fish
./taskusanakirja completion fish > ~/.config/fish/completions/taskusanakirja.fish
```

### Can I run multiple searches at once?

Yep! Just list them:

```bash
./taskusanakirja find koira kissa lintu omena
```

### Docker?

Works, but remember the TUI needs terminal allocation:

```bash
docker run -it your-container ./taskusanakirja
```

---

## Support & Community

### How do I get help?

1. **This FAQ** (you're already here!)
2. **Built-in help:** `./taskusanakirja --help`
3. **Email:** <andrew@siilikuin.com> (Pro users get priority)
4. **Email:** <andrew@siilikuin.com> for bugs and feature requests

### Can I contribute?

Yes! Since we use open-source data:

- Add Finnish words to [Wiktionary](https://en.wiktionary.org/)
- Add example sentences to [Tatoeba](https://tatoeba.org/)
- Report bugs or request features via email

### Where does the dictionary data come from?

- **Words & definitions:** Wiktionary (CC BY-SA license)
- **Example sentences:** Tatoeba (CC BY 2.0 FR)
- **Inflections:** Curated database (Pro feature)

All properly attributed and legally used!

### Is this open source?

The app itself is proprietary, but it's built entirely on open-source linguistic data. The Pro inflections database is also available under open licenses to Pro users.

---

## Quick Fixes for Common Issues

| Problem                | Solution                                                  |
| ---------------------- | --------------------------------------------------------- |
| Won't start            | Check security settings, make executable, or "Run anyway" |
| Can't find a word      | Try the base form or check spelling                       |
| License won't activate | Check internet, try 2-3 times, verify key                 |
| Download interrupted   | Just run `download-inflections` again                     |
| TUI looks broken       | Use a modern terminal with UTF-8 support                  |
| Slow performance       | Check disk space (need 3GB for Pro)                       |

---

**Still stuck?** Drop a line to **<andrew@siilikuin.com>**

_Remember: The Finnish language has 15 grammatical cases. Taskusanakirja has just one case: making your Finnish learning journey easier. 🇫🇮_

---

_Last updated: January 2025 | Version compatible with all releases_

