---
title: "Implementing 'Go Deeper' and Advanced Search"
description: "Recursive definition exploration and sophisticated search capabilities"
date: 2024-01-03
weight: 3
chapter: 3
---

## The Need for Depth

In language learning, understanding often requires following a chain of definitions. A Finnish word might be defined using another Finnish word that the learner doesn't know, requiring them to look up that word, and potentially continue this process several levels deep. This chapter explores how Taskusanakirja's "Go Deeper" feature addresses this fundamental challenge.

## Designing Recursive Exploration

The "Go Deeper" feature (accessible via Ctrl+G) represents one of Taskusanakirja's most innovative capabilities. When a user encounters an unfamiliar word within a definition, they can instantly explore its meaning without losing their place in the original search.

The technical implementation required careful consideration of several factors:

```go
type DepthStack struct {
    entries []DictionaryEntry
    current int
    maxDepth int
}
```

This stack-based approach allows users to navigate through multiple levels of definitions while maintaining a clear path back to their original search. Each "go deeper" action pushes a new entry onto the stack, while "go back" (Escape) pops the most recent entry.

## Managing State Across Depths

One of the key challenges was maintaining UI state across different depth levels. Users needed to see:
- Their current depth level
- The path they took to get there
- A way to navigate back through their history

The solution involved creating a breadcrumb system that shows the chain of lookups:

```
koira → eläin → olento → [current]
```

This visual representation helps users understand their exploration path and prevents them from getting lost in deep definition chains.

## Reverse Search by English Meaning

While Finnish-to-English lookup serves as the primary use case, learners often need to find Finnish words from English meanings. The reverse search feature (F3) addresses this need, but presents unique challenges due to the many-to-many nature of language translation.

### The Indexing Challenge

Unlike the straightforward prefix search for Finnish words, English meaning search requires a different approach:

1. **Tokenization**: English definitions must be broken into searchable tokens
2. **Relevance scoring**: Multiple Finnish words might have similar English meanings
3. **Performance**: Full-text search across hundreds of thousands of definitions

The implementation uses an inverted index:

```go
type InvertedIndex struct {
    tokens map[string][]EntryReference
    scores map[EntryReference]float64
}
```

## Inflection Search: The Morphological Challenge

Finnish is a highly inflected language—a single word can have dozens of different forms. The inflection search feature (F2) helps users find the base form (lemma) of an inflected word they encounter in text.

### Building the Inflection Database

The inflection database required processing massive amounts of morphological data:

```go
type InflectionEntry struct {
    inflected string
    lemma     string
    form      string // e.g., "genitive singular"
}
```

This involved:
1. Parsing Wiktionary's inflection tables
2. Generating inflected forms from morphological rules
3. Creating an efficient lookup structure for millions of word forms

### Handling Ambiguity

Many inflected forms can correspond to multiple lemmas. For example, "kissan" could be:
- Genitive singular of "kissa" (cat)
- Accusative singular of "kissa"

The UI needed to present these possibilities clearly:

```
kissan →
  1. kissa (genitive singular) - cat
  2. kissa (accusative singular) - cat
```

## Search Performance Optimization

With three different search modes, each with different performance characteristics, optimization became crucial:

### Lazy Loading

Not all search modes are used in every session. The application uses lazy loading to defer expensive initialization:

```go
func (s *SearchEngine) initializeIfNeeded(mode SearchMode) {
    if !s.initialized[mode] {
        switch mode {
        case MainSearch:
            s.loadMainIndex()
        case InflectionSearch:
            s.loadInflectionIndex()
        case MeaningSearch:
            s.loadInvertedIndex()
        }
        s.initialized[mode] = true
    }
}
```

### Concurrent Search

When searching by meaning, the application searches multiple indices concurrently:

```go
results := make(chan SearchResult)
go searchDefinitions(query, results)
go searchExamples(query, results)
go searchCompounds(query, results)
```

## Integrating Advanced Search with the UI

Each search mode required its own UI considerations:

### Visual Differentiation

Different search modes use distinct visual cues:
- **Main search**: Standard white on black
- **Inflection search**: Blue accent color
- **Meaning search**: Green accent color

This helps users immediately understand which mode they're in.

### Contextual Help

Each search mode provides mode-specific help text and examples:
- Main: "Type Finnish words..."
- Inflection: "Type inflected Finnish forms..."
- Meaning: "Type English words to find Finnish translations..."

## The Power of Composition

What makes these features truly powerful is how they work together. A user might:

1. Search for an inflected form they found in text (F2)
2. Find the base form and switch to main search (F1)
3. Read the definition and "go deeper" on unfamiliar words (Ctrl+G)
4. Mark interesting words for later study (Ctrl+M)

This seamless integration transforms Taskusanakirja from a simple lookup tool into a comprehensive language exploration environment.

## Lessons Learned

Implementing advanced search taught several valuable lessons:

1. **Different search problems require different data structures**: Tries for prefix search, inverted indices for full-text search, hash maps for inflection lookup.

2. **User interface must adapt to data characteristics**: Inflection search needs to handle ambiguity differently than main search.

3. **Performance optimization must be holistic**: It's not enough to optimize individual searches; the transitions between modes must also be instant.

4. **Complex features need progressive disclosure**: Advanced features should be discoverable but not overwhelming for new users.

## Looking Ahead

With sophisticated search capabilities in place, the next challenge was monetization. Chapter 4 explores the implementation of Taskusanakirja Pro's licensing system, which needed to be both secure and user-friendly while working entirely offline.