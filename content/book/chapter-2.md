---
title: "Building the User Interface"
description: "Evolution of the terminal UI from simple search to multi-page application"
date: 2024-01-02
weight: 2
chapter: 2
---

## Beyond Basic Search

Once the core search functionality was working, it became clear that users needed more than just a simple search box. Language learners have different needs: sometimes they want to search by Finnish word, sometimes by English meaning, and sometimes they need to find the correct inflected form of a word. This chapter explores how Taskusanakirja's UI evolved to meet these diverse needs.

## The Page Architecture

The decision to implement a page-based architecture was inspired by traditional terminal applications like `vim` and `tmux`, where different modes provide different functionality. In Taskusanakirja, each page would serve a specific purpose:

- **Main Page**: Primary Finnish word search
- **Inflection Page**: Search for inflected forms
- **Meaning Page**: Reverse search by English meaning
- **Marked Words Page**: Personal vocabulary list

This architecture required a careful balance between consistency (so users could navigate intuitively) and specialization (so each page could excel at its specific task).

## Implementing Page Navigation

The page system needed to feel fluid and responsive. Using tview's `Pages` widget, we could stack different views and switch between them instantly:

```go
pages := tview.NewPages()
pages.AddPage("main", mainPage, true, true)
pages.AddPage("inflection", inflectionPage, true, false)
pages.AddPage("meaning", meaningPage, true, false)
```

Keyboard shortcuts were crucial. Following terminal application conventions, we mapped function keys to different pages: F1 for main search, F2 for inflections, F3 for meanings. This provided muscle memory for power users while keeping the interface discoverable through on-screen hints.

## The Main Search Page

The main search page became the heart of the application. As users type Finnish words, the trie traversal happens in real-time, updating results with each keystroke. But displaying results required careful thought:

- How many results should show at once?
- How should long definitions be truncated?
- What information is most important to display immediately?

The solution was a two-pane layout: search results on the left, detailed definition on the right. This allowed users to quickly scan multiple matches while diving deep into specific entries.

## Marked Words: Building a Personal Dictionary

Language learners often encounter words repeatedly before memorizing them. The marked words feature addressed this need by allowing users to build a personal vocabulary list with a simple keystroke (Ctrl+M).

Implementing this required:
1. Persistent storage of marked words
2. Quick marking/unmarking from any search result
3. A dedicated page to review marked words
4. Export functionality for external study

The technical challenge was maintaining performance while tracking potentially thousands of marked words. The solution involved a separate index that could be quickly queried and updated without affecting search performance.

## Displaying Example Sentences

Context is crucial for language learning. When dictionary entries included example sentences, these needed special treatment in the UI:

```go
if entry.Examples != nil {
    exampleView := tview.NewTextView()
    exampleView.SetText(formatExamples(entry.Examples))
    exampleView.SetBorder(true).SetTitle("Examples")
}
```

The challenge was presenting potentially long example sentences in a terminal's limited space while maintaining readability. The solution involved intelligent wrapping, syntax highlighting for the target word, and collapsible sections for entries with many examples.

## Handling Different Screen Sizes

Terminal applications face a unique challenge: they must work everywhere from a tiny SSH session to a full-screen terminal emulator. Taskusanakirja needed to gracefully handle:

- Minimum viable dimensions (80x24)
- Ultra-wide displays
- Dynamic resizing during use

This required responsive layout logic that could reflow content, hide non-essential elements on small screens, and take advantage of extra space when available.

## Color and Theming

While terminals have color limitations compared to graphical applications, thoughtful use of color significantly improves usability:

- **Syntax highlighting**: Different colors for Finnish words, English translations, and grammatical information
- **Status indicators**: Color-coded feedback for operations like marking words
- **Focus indication**: Clear visual feedback for the currently selected element

The application needed to work with various terminal color schemes, from basic 16-color terminals to full 24-bit true color support.

## Keyboard Navigation Philosophy

Every action in Taskusanakirja needed to be accessible via keyboard. This wasn't just about accessibility—it was about speed and flow. The navigation philosophy followed these principles:

1. **Common actions get simple shortcuts**: Search is just typing, marking is Ctrl+M
2. **Vim-style navigation where appropriate**: j/k for up/down in lists
3. **Escape always goes back**: Consistent escape hatch from any screen
4. **F-keys for page switching**: Quick jumps between major functions

## Performance in the UI Layer

A responsive UI requires more than just fast search algorithms. The UI layer needed its own optimizations:

- **Debouncing**: Search triggers after a brief pause in typing, not on every keystroke
- **Virtual scrolling**: Only render visible items in long lists
- **Async updates**: Search results update without blocking input
- **Caching**: Recently viewed definitions stay in memory

These optimizations ensured the interface felt instant, even when searching through hundreds of thousands of entries.

## Error Handling and User Feedback

Errors in a terminal UI need special consideration. Without popup dialogs or toast notifications, feedback must be integrated into the interface itself:

- Status bar messages for operations
- Color changes for state transitions  
- Inline error messages in search results
- Graceful degradation when data is unavailable

## Looking Forward

With a robust multi-page UI in place, Taskusanakirja was ready for more advanced features. The foundation of pages, keyboard navigation, and responsive layout would support increasingly sophisticated functionality. Chapter 3 will explore how the "Go Deeper" feature and advanced search capabilities were built upon this UI framework.

---

The evolution from a simple search box to a full-featured terminal UI demonstrates a key principle in software development: interfaces should grow with user needs while maintaining consistency and performance. The page-based architecture provided the flexibility for future growth while keeping the core search experience fast and focused.