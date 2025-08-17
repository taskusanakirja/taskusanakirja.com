---
title: "Conception and Core Functionality"
description: "The genesis of Taskusanakirja and implementation of its foundational dictionary features"
date: 2024-01-01
weight: 1
chapter: 1
---

## The Beginning

Every software project begins with a problem to solve. For Taskusanakirja, that problem was simple yet profound: how to create a Finnish-English dictionary that could run entirely in the terminal, work offline, and provide instant, prefix-based search capabilities that would feel natural to developers and language learners alike.

The initial commit on [date] marked the beginning of this journey. What started as a simple command-line tool would eventually evolve into a sophisticated application with a full-featured terminal user interface, advanced search capabilities, and a comprehensive licensing system.

## The Core Data Structure: Implementing the Trie

At the heart of any dictionary application lies the fundamental question: how do you store and retrieve hundreds of thousands of word definitions efficiently? For Taskusanakirja, the answer was the trie[^1] data structure.

The trie implementation began with a simple observation: Finnish and English words share common prefixes. By storing words in a tree structure where each node represents a character, we could achieve O(m) lookup time where m is the length of the word, regardless of how many words were in the dictionary.

```go
type TrieNode struct {
    children map[rune]*TrieNode
    isEnd    bool
    data     interface{}
}
```

This seemingly simple structure would become the backbone of Taskusanakirja's lightning-fast search capabilities. As users type, the application traverses the trie character by character, instantly finding all words that match the current prefix.

## Loading and Parsing the Dictionary Data

The next challenge was transforming raw dictionary data into our trie structure. The source data came from Wiktionary dumps and other open sources, requiring careful parsing and normalization.

The `loadGlosses` function became one of the most critical pieces of early code:

```go
func loadGlosses(path string) error {
    // Parse the dictionary file
    // Build the trie structure
    // Index for reverse lookups
}
```

What made this particularly challenging was handling the nuances of Finnish language data: compound words, inflections, and the various forms that Finnish words can take. Each decision made here would have lasting implications for the user experience.

## Building the Terminal User Interface

While the core data structures provided the foundation, users needed a way to interact with the dictionary. The decision to use `tview`[^2] for the terminal UI proved transformative. This Go library provided the building blocks for creating a responsive, keyboard-driven interface that would feel familiar to terminal users.

The initial UI was simple: a search box at the top and results below. But even this basic interface required careful consideration of terminal constraints, color schemes, and keyboard navigation patterns that would feel intuitive.

## The First Search

When the first successful search returned results—a Finnish word typed character by character, with matching entries appearing instantly below—it was clear that the fundamental architecture was sound. The trie structure provided the speed, the parsing logic handled the complexity of the dictionary data, and tview made it all accessible through a clean terminal interface.

## Lessons from the Foundation

Looking back at these early implementation decisions, several key lessons emerge:

1. **Data structure choice matters immensely**: The trie wasn't just a performance optimization; it enabled the entire user experience of instant, prefix-based search.

2. **Build on solid libraries**: Choosing tview for the UI allowed focus on application logic rather than terminal handling minutiae.

3. **Start with the core use case**: By focusing first on basic search functionality, the foundation was laid for all future features.

## What's Next

With the core functionality in place, the stage was set for expanding the user interface and adding more sophisticated search capabilities. Chapter 2 will explore how the simple search interface evolved into a multi-page application with distinct modes for different types of searches.

---

[^1]: A trie, also called a prefix tree, is a tree-like data structure used to store a dynamic set of strings where the keys are usually strings. Unlike a binary search tree, no node in the tree stores the key associated with that node; instead, its position in the tree defines the key with which it is associated.

[^2]: tview is a rich terminal UI library for Go, providing widgets like text views, tables, forms, and more, all designed to work within the constraints of a terminal environment.