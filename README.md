# Nyaldee Homepage

<p align="center">
  <img src="Nyaldee Homepage.png" alt="Nyaldee Homepage screenshot">
</p>

*[Lire en français](README.fr.md)*

A personal browser start page / new-tab replacement, built with **zero external dependencies and zero build step**: pure HTML5, CSS, and vanilla JavaScript. No `npm install`, no bundler, no dev server — just double-click `index.html` and it opens directly over `file://`.

## Features

- Category buttons for your bookmarks, each showing its own cloud of links below the row on click
- Fuzzy search (ported from [MAGI Launcher](https://github.com/Nyaldee/MAGI-Launcher)'s ranking algorithm) that filters links live and can open several matching categories at once
- Full keyboard navigation — arrow keys work everywhere, not just while the search bar is focused, and never steal focus away from it
- Live clock next to the search bar
- Per-site search shortcuts in the bottom-left corner (Google, YouTube, GitHub...) — type a query and hit Enter to search directly on that site
- 100% responsive layout: `%`, `vw`, `vh`, `em` only, no fixed pixel sizing (besides the border stroke width, which isn't a layout dimension)
- Same color theme system as MAGI Launcher/[Ports Launcher](https://github.com/Nyaldee/Ports-Launcher) — 70+ built-in palettes, switch the active one by editing a single line

## Keyboard shortcuts

| Key | Action |
|---|---|
| Type in the search bar | Fuzzy-filters links live; matching categories open automatically, several at once if needed |
| `→` / `←` | Move across the category buttons, or across the visible links inside an open category |
| `↓` | From the category row: enter the selected category's link cloud. From a link: jump to the link directly below it |
| `↑` | From a link: jump to the link directly above it, or back up to its category button from the first row |
| `Enter` | Open/close the selected category, or follow the selected link |
| Click a category button | Toggle it open/closed. Outside a search, only one category stays open at a time; during a search, each one toggles independently without affecting the others |

## Search

Typing in the search bar ranks every link, in order:

1. **Name starts with the query** — top of the list
2. **Name contains the query** — next
3. **Fuzzy subsequence match** (`gh` finds "GitHub") — last resort, so a typo never means an empty screen

If nothing matches at all (even fuzzily), every link is shown instead of a blank page. There's no accent-folding: an unaccented query won't directly match an accented name (e.g. "credit" vs "Crédit Agricole") — it falls back to showing everything rather than nothing.

## Configuration

Everything is data-driven from two plain JavaScript files, loaded as ordinary `<script>` tags (no `fetch()`/JSON — blocked by browsers on local files) so the app works straight from `file://`.

### `links.js`

```js
const linksData = {
  community: [
    { text: "MyAnimeList", url: "https://myanimelist.net/" }
  ],
  tools: [
    { text: "Discord Developer Portal", url: "https://discord.com/developers/applications" }
  ]
};
```

Each top-level key becomes a category button (its displayed name is just the key, capitalized). Each `{ text, url }` inside becomes a link button. Add, remove, or reorder freely — nothing else needs to be touched.

`links.js` also holds `siteSearches`, the per-site search shortcuts shown bottom-left:

```js
const siteSearches = [
  { name: "Google", url: "https://www.google.com/search?q=%s" }
];
```

`%s` is replaced with the typed text (URL-encoded) when you hit Enter. Add, remove, or reorder entries freely — same rule as `linksData`.

### `themes.js`

```js
const THEMES_DATA = {
  theme: "nier_yorha",
  font_family: "Segoe UI",
  border: 2,
  themes: {
    nier_yorha: {
      search_background: "#bab5a1",
      search_text: "#6a6355",
      list_background: "#d1cdb7",
      list_text: "#454138",
      selected_background: "#454138",
      selected_text: "#d1cdb7",
      border: "#454138"
    }
  }
};
```

Same theme catalog (70+ palettes, mostly character/game color schemes) as MAGI Launcher and Ports Launcher. Switch the active one by changing `theme` at the top.

## Project structure

```
index.html    markup + all app logic: theme application, rendering, fuzzy search, keyboard navigation
style.css     responsive layout (%, vw, vh, em only)
links.js      your bookmarks (linksData)
themes.js     color palettes (THEMES_DATA), shared catalog with MAGI Launcher/Ports Launcher
favicon.png   browser tab icon
```

## Why no dependencies?

The whole point is a page that opens instantly, offline, forever, with nothing to install or keep updated — no framework, no package manager, no build step to go stale. Editing `links.js` or `themes.js` and refreshing the page is the entire workflow.

## Credits

Built together with [Claude](https://claude.com) (Anthropic's AI coding assistant).

## License

Copyright (C) 2026 Nyaldee. Licensed under the [GNU General Public License v3.0](LICENSE) — see the `LICENSE` file for the full text.
