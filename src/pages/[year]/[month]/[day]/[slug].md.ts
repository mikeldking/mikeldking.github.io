import type { APIContext, GetStaticPaths } from "astro";
import { markdownResponse, postMarkdown } from "../../../../lib/markdown";
import { getPosts, postParams, type Post } from "../../../../lib/posts";

export const getStaticPaths = (async () => {
  const posts = await getPosts();
  return posts.map((post) => {
    const [year, month, day, slug] = postParams(post);
    return { params: { year, month, day, slug }, props: { post } };
  });
}) satisfies GetStaticPaths;

export function GET(context: APIContext<{ post: Post }>) {
  return markdownResponse(postMarkdown(context.props.post, context.site!));
}
