// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://mikeldking.github.io",
  // Emit `foo.html` instead of `foo/index.html` so existing Jekyll URLs
  // (e.g. /2025/01/05/becoming-an-oss-engineer.html, /archive.html) keep working.
  build: { format: "file" },
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
    },
  },
});
