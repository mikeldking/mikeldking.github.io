# Agent guide

Personal site and blog, built with Astro and deployed to GitHub Pages
(`.github/workflows/deploy.yml`). Pages are emitted as `foo.html`.

- `npm run dev` to preview, `npm run build` to verify. There are no tests.
- Posts are Markdown files in `src/content/posts/`; the schema is in
  `src/content.config.ts`.
- Visual rules are in [DESIGN.md](DESIGN.md). Follow them for any UI change.

## The site is built to be read by agents

Keep these working when you add or change pages:

| What | Where | Source |
| ---- | ----- | ------ |
| Site index for LLMs ([llmstxt.org](https://llmstxt.org/)) | `/llms.txt` | `src/pages/llms.txt.ts` |
| Every post in one file | `/llms-full.txt` | `src/pages/llms-full.txt.ts` |
| Markdown version of every page | `/foo.md` and `/foo.html.md` | `src/pages/**/*.md.ts`, `src/lib/markdown.ts` |
| Crawl rules and AI usage signals | `/robots.txt` | `src/pages/robots.txt.ts` |
| Full-text feed | `/feed.xml` | `src/pages/feed.xml.ts` |
| Discovery links and JSON-LD in `<head>` | every page | `src/layouts/Base.astro` |

Rules:

- **Every HTML page needs a Markdown twin.** `Base.astro` links to it from every
  page as `<link rel="alternate" type="text/markdown">`, using `markdownPath()`.
  A new page at `src/pages/foo.astro` needs `foo.md.ts` and a one-line
  `foo.html.md.ts` that re-exports it. Posts are covered automatically.
- **Markdown output is the source, not converted HTML.** Post twins are the
  post's own Markdown with YAML front matter (title, description, author, date,
  tags, canonical URL) and an `# H1`.
- **`llms.txt` stays short.** It links to Markdown versions with absolute URLs,
  and puts secondary links under `## Optional`.
- **Content must not depend on JavaScript.** All content is in the static HTML;
  the only script is the theme toggle.
- GitHub Pages cannot set response headers, so there is no `Link` header and no
  `Accept: text/markdown` negotiation. Discovery relies on the `<link>` tags.
