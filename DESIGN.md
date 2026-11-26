# Design

The site uses one look, called **Terminal**: monospace chrome at a single size,
pure black and white, and nothing but text and space. Articles switch to a sans for reading. Reference: <https://www.evilrabbit.com/>.

All tokens and styles live in `src/styles/global.css`. The page shell lives in
`src/layouts/Base.astro`. Change tokens there, not in components.

## Principles

1. **Mono for the interface, sans for reading.** Everything you scan or click is
   Geist Mono at one size. Only the article title and body are Geist.
2. **Hierarchy without size.** Outside articles, hierarchy comes from colour
   (foreground vs. muted) and spacing. Do not add font sizes to create emphasis.
3. **Monochrome.** There is no accent colour. Nothing is tinted, filled or shadowed.
4. **Space, not lines.** Structure comes from whitespace. No rules under rows,
   no dividers between sections, no underlined chrome links, no cards, no shadows.
5. **Quiet interaction.** Hover states shift a colour by one step over 150ms.
   Nothing moves, grows or draws on hover.
6. **Text only.** No logo, icons or decorative imagery in the chrome.

## Colour

Every colour is a token. Components never use literal colours.

| Token          | Light     | Dark      | Use                                         |
| -------------- | --------- | --------- | ------------------------------------------- |
| `--bg`         | `#ffffff` | `#000000` | Page background                             |
| `--fg`         | `#0a0a0a` | `#ededed` | Primary text, titles, active nav            |
| `--muted`      | `#6b6b6b` | `#8a8a8a` | Secondary text: dates, labels, nav, footer  |
| `--rule`       | `#e6e6e6` | `#262626` | Code block border, prose `hr`               |
| `--rule-hover` | `#b5b5b5` | `#4d4d4d` | Prose link underline, blockquote rule       |
| `--code-bg`    | `#f4f4f4` | `#111111` | Inline code background                      |

`--muted` on `--bg` stays at or above 4.5:1 contrast in both themes. Keep it so.

### Light and dark

- The theme is the system theme (`prefers-color-scheme`). This is the default
  and needs no JavaScript.
- A small text toggle in the footer lets a visitor override it. It sets `data-theme="light" | "dark"` on `<html>` and saves it to
  `localStorage` under `theme`. An inline script in `<head>` applies the saved
  value before first paint.
- The dark palette is declared twice in `global.css`: under
  `@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) }` and
  under `:root[data-theme="dark"]`. Keep the two blocks identical. Any new
  theme-dependent rule needs both selectors.
- Code blocks use Shiki's `github-light` / `github-dark` pair on a transparent
  background (see `astro.config.mjs`).

## Typography

Two faces from one family, both variable and self-hosted through Fontsource
(`@fontsource-variable/geist-mono`, `@fontsource-variable/geist`). Each token
carries a system fallback stack.

| Token         | Face       | Where                                                         |
| ------------- | ---------- | ------------------------------------------------------------- |
| `--font-mono` | Geist Mono | Default. Header, intro, labels, rows, dates, footer, post nav, code |
| `--font-sans` | Geist      | Article title and `.prose` only                               |

| Element                    | Face | Size                      | Weight | Line height | Tracking   | Colour    |
| -------------------------- | ---- | ------------------------- | ------ | ----------- | ---------- | --------- |
| Body, rows, nav, intro     | Mono | `0.875rem`                | 400    | `1.65`      | 0          | `--fg`    |
| Section label, dates, meta | Mono | `0.875rem`                | 400    | `1.65`      | 0          | `--muted` |
| Article title (`h1`)       | Sans | `clamp(1.5rem, 5vw, 1.875rem)` | 600 | `1.15`     | `-0.035em` | `--fg`    |
| Prose body                 | Sans | `1rem`                    | 400    | `1.7`       | 0          | `--fg`    |
| Prose `h2`                 | Sans | `1.25rem`                 | 600    | `1.3`       | `-0.02em`  | `--fg`    |
| Prose `h3`, `h4`           | Sans | `1rem`                    | 600    | `1.3`       | `-0.01em`  | `--fg`    |
| Prose `strong`             | Sans | inherit                   | 600    | inherit     | inherit    | inherit   |
| Code, inline and block     | Mono | `0.875em`                 | 400    | `1.6`       | 0          | `--fg`    |

Rules:

- Sans never appears on the home page, in lists or in navigation. Mono never
  sets running prose.
- Mono text is always `0.875rem`, weight 400. No uppercase, no letter-spacing.
- Tight negative tracking is for sans headings only.
- Dates use `tabular-nums`.

## Layout

- One column, `--measure: 700px`, centred, with a `1rem` side gutter.
- Header: `5rem` tall. Site name on the left, `Writing` on the right in `--muted`.
- Footer: social links and RSS on the left, the theme toggle on the right, all
  in `--muted`, pinned to the bottom of short pages. Social links live only here.
- Vertical rhythm: `2.5rem` above the intro or article header, `3rem` between
  sections (each list sits in its own `<section>`), `0.3rem` of padding inside a row.
- Below `30rem`, a row stacks its title above its metadata.

## Components

- **Intro** (`.intro`): one muted sentence with the name in `--fg`.
- **Section label** (`.section-label`): a muted word above a list. Sentence case.
- **Rows** (`.rows`): the one list pattern, used for posts. Title on the left,
  muted date (`.meta`) on the right, no rule. Use `PostList.astro`.
- **Prose** (`.prose`): rendered Markdown. Blockquotes get a 1px left rule and
  muted text; code blocks get a 1px `--rule` border and scroll horizontally.
- **Post meta** (`.post-meta`): the date, then a muted `Markdown` link to the
  post's Markdown version.
- **Post nav** (`.post-nav`): older on the left, newer on the right.

## Interaction and motion

- **Row hover:** the date goes from `--muted` to `--fg`. 150ms ease.
- **Links:** not underlined, except inside `.prose`, where they carry a 1px
  `--rule-hover` underline that takes the text colour on hover.
- **Nav and footer links:** `--muted` to `--fg` on hover or when current.
- **Focus:** a 1px `--fg` outline offset by 3px. Never remove it.
- **Load:** direct children of `<main>` fade up 8px over 500ms, staggered by
  80ms. Disabled under `prefers-reduced-motion: reduce`.
- **Selection:** inverted (`--fg` background, `--bg` text).

## Do not

- Add an accent colour, gradient, shadow or card.
- Add a third typeface, set chrome in sans, or add font sizes outside the table above.
- Add a logo or icons to the header.
- Add hairlines, dividers or underlines to lists, navigation or the footer.
- Animate layout, or add hover effects that draw, slide or scale.
- Hard-code a colour outside the token blocks.
