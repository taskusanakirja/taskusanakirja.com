---
title: "Details"
description: "A comprehensive guide to all Taskusanakirja commands and features"
layout: "single"
---

{{< video-section webm="taskusanakirja.webm" mp4="taskusanakirja.mp4" >}}
Example text.
{{< /video-section >}}

Taskusanakirja offers both an interactive Terminal User Interface (TUI) and
powerful command-line tools for Finnish language exploration. Whether you prefer
the immersive TUI experience or quick command-line lookups, every feature is
designed with the scholarly linguist in mind.

## Interactive TUI Mode

By default, running Taskusanakirja without any arguments launches the beautiful, responsive Terminal User Interface:

```bash
taskusanakirja
```

The TUI provides:

- **Real-time search** as you type
- **Keyboard navigation** through results
- **Detailed word information** with etymology when available
- **Cross-references** to related words
- **History** of your recent searches

## Command-Line Interface

For quick lookups and scripting, use Taskusanakirja's comprehensive CLI
commands:

### `find` - Direct Word Lookup

Look up one or more Finnish words directly with complete linguistic detail. You don't need to know the part of speech beforehand - just type the word as you encountered it, and Taskusanakirja will show all possible forms and meanings:

```bash
$ taskusanakirja find kirja
---
kirja (noun)

- book (collection of sheets of paper bound together containing printed or written material)
- book (long work fit for publication)
- book (major division of a long work)
- book (record of betting)
- document
- quire (twenty-five, or rarely twenty-four, sheets of paper of the same size and quality)

---
```

Multiple words can be looked up in a single command:

```bash
$ taskusanakirja find kieli sana
---
kieli (noun)

- language (form of communication)
- language, tongue (manner of expression; particular words or structures used in a speech or a passage of text)
- language, tongue (particular form of oral or spoken communication used by a community)
- tang, tongue, projecting part
- clapper, clanger, tongue (in a bell)
- pointer, needle (on a balance scale)
- reed (vibrating part in the mouthpiece of a woodwind instrument)
- string (tightly tensioned wire that produces a tone)
- tongue (in a shoe)
- tongue (organ)

kieli (verb)

- inflection of kieliä:
  ~> kieliä (noun)
      - partitive plural of kieli
         ~> kieli (noun)
             - language (form of communication)
             - language, tongue (manner of expression; particular words or structures used in a speech or a passage of text)
             - language, tongue (particular form of oral or spoken communication used by a community)
             - tang, tongue, projecting part
             - clapper, clanger, tongue (in a bell)
             - pointer, needle (on a balance scale)
             - reed (vibrating part in the mouthpiece of a woodwind instrument)
             - string (tightly tensioned wire that produces a tone)
             - tongue (in a shoe)
             - tongue (organ)
         ~> kieli (verb)
             - inflection of kieliä:
             - present active indicative connegative
             - second-person singular present active imperative connegative
             - second-person singular present imperative
             - third-person singular past indicative
  ~> kieliä (verb)
      - to indicate, suggest
      - to inform, snitch, gossip about
- present active indicative connegative
- second-person singular present active imperative connegative
- second-person singular present imperative
- third-person singular past indicative

---
sana (noun)

- lesson (section of the Bible or other religious text read as part of a divine service)
- lyrics (words to a song)
- word; say (figuratively: someone's opinion or statement, especially a decisive or emphatic one, or a promise)
- Word, Scripture
- word (unit of language, text or storage)

---
```

#### "Go Deeper" Feature

Taskusanakirja's unique "go deeper" functionality automatically expands inflected forms to show their base forms and related meanings. Notice how `kieli` as a verb is traced back through its inflections:

```
- inflection of kieliä:
  ~> kieliä (noun)
      - partitive plural of kieli
         ~> kieli (noun)
             - language (form of communication)
             ...
```

This nested display helps language learners understand the relationships between different word forms and their root meanings.

#### Designed for Language Learners

Notice how `kieli` appears as both a noun and a verb in the results above. Taskusanakirja understands that Finnish learners often don't know which part of speech they're looking at - is "kieli" a noun meaning "language" or a verb form? The tool shows you all possibilities, letting you quickly recognize the correct meaning from context. This approach eliminates the guesswork and frustration common with traditional dictionaries that require you to know the grammatical category beforehand.

### `rfind` - Reverse Lookup

Find Finnish words by searching their English definitions. Perfect for when you're thinking "What's the Finnish word for...?" or when you're trying to expand your vocabulary in a specific topic area:

```bash
$ taskusanakirja rfind 'dog paddle'
Found 2 word(s) with definitions containing 'dog paddle':
---
koira
koiranuinti
---
```

You can then look up the found words to see their full definitions:

```bash
$ taskusanakirja find koira koiranuinti
---
koira (noun)

- dog (Canis lupus familiaris)
- Ellipsis of koiranuinti ("dog paddle (swimming stroke)").
  ~> koiranuinti (noun)
      - dog paddle (swimming stroke)
- military police

---
koiranuinti (noun)

- dog paddle (swimming stroke)

---
```

#### Why Reverse Lookup Matters

Reverse lookup is invaluable for active language production. When writing or speaking Finnish, you often know the concept you want to express but can't recall the Finnish word. Rather than reaching for a translation app, `rfind` helps you discover authentic Finnish vocabulary. In the example above, searching for "dog paddle" reveals not just the compound word `koiranuinti` but also that `koira` itself can refer to this swimming stroke through ellipsis - a natural language pattern you might never discover through direct translation.

### `lemma` - Inflection Analysis (Pro only)

Discover the base form of inflected Finnish words. **You must have a Taskusanakirja Pro license to use the inflection database.**

```bash
$ taskusanakirja lemma kirjoissa    # pro feature only
Found possible base form(s) for 'kirjoissa':
---
kirjoissa ~> kirjoissa
kirjoissa ~> kirja
kirjoissa ~> kirjo
kirjoissaan ~> kirja
kirjoissaan ~> kirjo
kirjoissani ~> kirja
kirjoissani ~> kirjo
kirjoissasi ~> kirja
kirjoissasi ~> kirjo
kirjoissamme ~> kirja
kirjoissamme ~> kirjo
kirjoissanne ~> kirja
kirjoissanne ~> kirjo
kirjoissansa ~> kirja
kirjoissansa ~> kirjo
---
$ taskusanakirja lemma lukemassa    # pro feature only
Found possible base form(s) for 'lukemassa':
---
lukemassa ~> lukea
lukemassa ~> lukema
lukemassaan ~> lukema
lukemassani ~> lukema
lukemassasi ~> lukema
lukemassamme ~> lukema
lukemassanne ~> lukema
lukemassansa ~> lukema
---
```

#### Why Lemmatization Matters

Finnish is one of the world's more morphologically complex languages. Tolkien wasn't obsessed with it for no reason!

Not only is each noun, pronoun, and adjective ("nominals") capable of taking at least 15 cases across singular and plural forms, but there is a slew of possibly stem-affecting personal possessive suffixes and enclitics which must be considered. Verbs similarly conjugate across persons, tenses, and moods - potentially generating hundreds of distinct surface forms from a single root word. And don't even get us started on the controversial adverbial cases. This brick wall of complexity is a formidable barrier to entry - but with a capable lemmatizer by your side, you can practice and learn to intuit the rules much more sharply.

When encountering "kirjoissaan" in a text, a learner must recognize it as the inessive case of "kirja" (book) with a possessive suffix, not a completely different word. Without automatic lemmatization, looking up inflected forms becomes an exercise in frustration, requiring learners to mentally reverse-engineer grammatical transformations before they can even find the dictionary entry. For foreign professionals working in Finnish environments, this tool transforms what would be dozens of failed lookups into instant comprehension, letting them focus on understanding content rather than wrestling with morphology.

### `serve` - Web Interface (Beta)

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

## Complete Command Reference

Here's the full output of `taskusanakirja help` showing all available commands and options:

```
taskusanakirja is an interactive and command-line Finnish dictionary.

    Run without arguments to launch the interactive TUI, or provide words
    as arguments to get their definitions directly.

Usage:
  taskusanakirja [word...] [flags]
  taskusanakirja [command]

Available Commands:
  completion           Generate the autocompletion script for the specified shell
  download-inflections Download the inflections database
  find                 Look up definitions for one or more Finnish words.
  help                 Help about any command
  lemma                Find the base form (lemma) of an inflected Finnish word.
  license              Manage the application license.
  rfind                Find Finnish words by searching their English definitions.
  serve                Run a local web server to use taskusanakirja in a browser.
  tui                  Launch the interactive Terminal User Interface.

Flags:
      --debug     Enable debug logging to debug.log
  -h, --help      help for taskusanakirja
  -v, --version   version for taskusanakirja

Use "taskusanakirja [command] --help" for more information about a command.
```
