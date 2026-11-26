import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";
import { getPosts, postUrl } from "../lib/posts";

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: postUrl(post),
      author: SITE_TITLE,
      categories: post.data.tags,
      // Full post HTML, so readers and agents don't need a second fetch.
      content: post.rendered?.html,
    })),
  });
}
