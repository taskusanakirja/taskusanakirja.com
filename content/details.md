---
title: "Command Reference"
description: "A comprehensive guide to all Taskusanakirja commands and features"
layout: "single"
---

Taskusanakirja offers both an interactive Terminal User Interface (TUI) and powerful command-line tools for Finnish language exploration. Whether you prefer the immersive TUI experience or quick command-line lookups, every feature is designed with the scholarly linguist in mind.

## Interactive TUI Mode

Launch Taskusanakirja without arguments to enter the beautiful, responsive Terminal User Interface:

```bash
$ taskusanakirja
```

The TUI provides:
- **Real-time search** as you type
- **Keyboard navigation** through results
- **Detailed word information** with etymology when available
- **Cross-references** to related words
- **History** of your recent searches

## Command-Line Interface

For quick lookups and scripting, use Taskusanakirja's comprehensive CLI commands:

### `find` - Direct Word Lookup

Look up one or more Finnish words directly:

```bash
$ taskusanakirja find kirja
kirja
  book, volume
  writing, scripture
  letter (correspondence)

$ taskusanakirja find kieli sana
kieli
  language, tongue
  speech, idiom
  (anatomy) tongue
  
sana
  word
  term, expression
  promise, word of honor
```

### `rfind` - Reverse Lookup

Find Finnish words by searching their English definitions:

```bash
$ taskusanakirja rfind book
Found 5 Finnish words:
  kirja - book, volume
  opus - book, opus, work
  teos - work, book, opus
  nide - volume, book
  albumi - album, book
```

### `lemma` - Inflection Analysis (Pro)

Discover the base form of inflected Finnish words:

```bash
$ taskusanakirja lemma kirjoissa
✓ Pro feature active
Analyzing: kirjoissa
→ Base form: kirja
Case: Inessive plural ("in the books")

$ taskusanakirja lemma lukemassa
✓ Pro feature active
Analyzing: lukemassa
→ Base form: lukea
Form: Third infinitive inessive ("in the act of reading")
```

### `serve` - Web Interface

Launch a local web server for browser-based access:

```bash
$ taskusanakirja serve
Starting Taskusanakirja web server...
Listening on http://localhost:8080

Open your browser to use Taskusanakirja with a web interface.
Press Ctrl+C to stop the server.
```

### `license` - License Management

Manage your Taskusanakirja Pro license:

```bash
$ taskusanakirja license status
License Status: Free Edition
Pro features: Disabled

$ taskusanakirja license set YOUR-LICENSE-KEY
License key validated successfully!
Pro features: Enabled
Lemmatizer database: Ready
```

### `completion` - Shell Integration

Generate shell completion scripts for enhanced command-line experience:

```bash
# For bash
$ taskusanakirja completion bash > /etc/bash_completion.d/taskusanakirja

# For zsh
$ taskusanakirja completion zsh > "${fpath[1]}/_taskusanakirja"

# For fish
$ taskusanakirja completion fish > ~/.config/fish/completions/taskusanakirja.fish
```

## Pro Features

Taskusanakirja Pro unlocks advanced linguistic analysis:

- **Complete lemmatization** of all Finnish word forms
- **Morphological analysis** showing grammatical cases and forms
- **Etymology information** when available
- **Advanced search filters** in TUI mode
- **Priority support** for linguistic researchers

## Command Options

### Global Flags

- `--debug` - Enable debug logging to `debug.log`
- `-h, --help` - Display help for any command
- `-v, --version` - Show version information

### Quick CLI Mode

For the fastest lookups, provide words directly as arguments:

```bash
$ taskusanakirja koira
koira
  dog
  hound
  (informal) poor fellow, wretch
```

This is equivalent to `taskusanakirja find koira` but saves keystrokes for common use cases.

## Integration Tips

### Vim Integration

Add to your `.vimrc`:

```vim
" Look up Finnish word under cursor
nnoremap <leader>f :!taskusanakirja <cword><CR>
```

### Emacs Integration

Add to your Emacs configuration:

```elisp
(defun taskusanakirja-lookup ()
  "Look up Finnish word at point"
  (interactive)
  (shell-command 
    (format "taskusanakirja %s" (thing-at-point 'word))))

(global-set-key (kbd "C-c f") 'taskusanakirja-lookup)
```

### Shell Aliases

Common aliases for your `.bashrc` or `.zshrc`:

```bash
alias tsk='taskusanakirja'
alias tskr='taskusanakirja rfind'
alias tskl='taskusanakirja lemma'

# Quick TUI launch
alias finnish='taskusanakirja'
```

## Data Sources

Taskusanakirja's lexical database is compiled from scholarly sources and continuously refined. The Pro edition includes comprehensive morphological data covering over 2 million inflected forms mapped to their lemmas.