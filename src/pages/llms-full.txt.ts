import type { APIContext } from "astro";
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";
import { abs, isoDate } from "../lib/markdown";
import { getPosts, postUrl } from "../lib/posts";

// Every post's full Markdown in one file, newest first.
export async function GET(context: APIContext) {
  const site = context.site!;
  const posts = await getPosts();

  const sections = posts.map((post) =>
    [
      `# ${post.data.title}`,
      `Published: ${isoDate(post.data.date)}\nURL: ${abs(postUrl(post), site)}`,
      (post.body ?? "").trim(),
    ].join("\n\n"),
  );

  const body = [`# ${SITE_TITLE}\n\n> ${SITE_DESCRIPTION} Full text of every post.`, ...sections].join(
    "\n\n---\n\n",
  );

  return new Response(body + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
