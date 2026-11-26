import { SITE_DESCRIPTION, SITE_TITLE, SOCIALS } from "../consts";
import { getPosts, postUrl, type Post } from "./posts";

/** Absolute URL for a site path. */
export function abs(path: string, site: URL): string {
  return new URL(path, site).href;
}

/** Path of the Markdown version of a page: `/foo.html` -> `/foo.md`, `/` -> `/index.md`. */
export function markdownPath(pagePath: string): string {
  const path = pagePath.replace(/\.html$/, "");
  return path === "/" || path === "/index" ? "/index.md" : `${path}.md`;
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function markdownResponse(body: string): Response {
  return new Response(body, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}

function yamlString(value: string): string {
  return JSON.stringify(value);
}

/** One post as a standalone Markdown document with YAML front matter. */
export function postMarkdown(post: Post, site: URL): string {
  const { title, description, date, tags } = post.data;
  const frontmatter = [
    "---",
    `title: ${yamlString(title)}`,
    description ? `description: ${yamlString(description)}` : null,
    `author: ${yamlString(SITE_TITLE)}`,
    `date: ${isoDate(date)}`,
    tags.length ? `tags: [${tags.map(yamlString).join(", ")}]` : null,
    `url: ${abs(postUrl(post), site)}`,
    "---",
  ].filter(Boolean);

  return `${frontmatter.join("\n")}\n\n# ${title}\n\n${(post.body ?? "").trim()}\n`;
}

/** A Markdown list item linking to a post's Markdown version. */
export function postListItem(post: Post, site: URL): string {
  const link = `[${post.data.title}](${abs(markdownPath(postUrl(post)), site)})`;
  const notes = [isoDate(post.data.date), post.data.description].filter(Boolean).join(". ");
  return `- ${link}: ${notes}`;
}

export async function homeMarkdown(site: URL): Promise<string> {
  const posts = await getPosts();
  return [
    `# ${SITE_TITLE}`,
    `> ${SITE_DESCRIPTION}`,
    "## Writing",
    posts.map((post) => postListItem(post, site)).join("\n"),
    "## Elsewhere",
    SOCIALS.map((s) => `- [${s.label}](${s.href})`).join("\n"),
  ].join("\n\n") + "\n";
}

export async function archiveMarkdown(site: URL): Promise<string> {
  const posts = await getPosts();
  const byYear = new Map<number, Post[]>();
  for (const post of posts) {
    const year = post.data.date.getUTCFullYear();
    byYear.set(year, [...(byYear.get(year) ?? []), post]);
  }
  const sections = [...byYear].map(
    ([year, yearPosts]) =>
      `## ${year}\n\n${yearPosts.map((post) => postListItem(post, site)).join("\n")}`,
  );
  return [`# Writing`, `> All posts by ${SITE_TITLE}, newest first.`, ...sections].join("\n\n") + "\n";
}
