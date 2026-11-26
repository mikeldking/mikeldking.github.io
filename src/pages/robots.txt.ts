import type { APIContext } from "astro";
import { abs } from "../lib/markdown";

// Everything is open to crawlers and agents. Content-Signal states how the
// content may be used (https://contentsignals.org/): search indexing, use as
// AI input (answers, retrieval), and AI training are all allowed.
export function GET(context: APIContext) {
  const body = [
    "User-agent: *",
    "Content-Signal: search=yes, ai-input=yes, ai-train=yes",
    "Allow: /",
    "",
    `Sitemap: ${abs("/sitemap-index.xml", context.site!)}`,
    "",
    `# LLM-friendly index of this site: ${abs("/llms.txt", context.site!)}`,
  ].join("\n");

  return new Response(body + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
