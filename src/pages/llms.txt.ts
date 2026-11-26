import type { APIContext } from "astro";
import { SITE_TITLE, SOCIALS } from "../consts";
import { abs, postListItem } from "../lib/markdown";
import { getPosts } from "../lib/posts";

// https://llmstxt.org/ — an index of the site for LLMs and agents.
export async function GET(context: APIContext) {
  const site = context.site!;
  const posts = await getPosts();

  const body = [
    `# ${SITE_TITLE}`,
    `> Personal site and blog of ${SITE_TITLE}, a software builder and open-source engineer. Posts are about building software and open source.`,
    [
      "Every page on this site has a Markdown version. Append `.md` to a page URL, or replace `.html` with `.md`",
      `(the home page is [index.md](${abs("/index.md", site)})).`,
      `All posts are also available in a single file: [llms-full.txt](${abs("/llms-full.txt", site)}).`,
    ].join(" "),
    "## Writing",
    posts.map((post) => postListItem(post, site)).join("\n"),
    "## Optional",
    [
      `- [All posts in one file](${abs("/llms-full.txt", site)}): Full Markdown text of every post`,
      `- [Archive](${abs("/archive.md", site)}): Every post, grouped by year`,
      `- [RSS feed](${abs("/feed.xml", site)}): New posts, with full text`,
      `- [Sitemap](${abs("/sitemap-index.xml", site)}): Every HTML page`,
      ...SOCIALS.filter((s) => s.href.startsWith("https://")).map(
        (s) => `- [${s.label}](${s.href}): ${SITE_TITLE} on ${s.label}`,
      ),
    ].join("\n"),
  ].join("\n\n");

  return new Response(body + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
