import type { APIContext } from "astro";
import { archiveMarkdown, markdownResponse } from "../lib/markdown";

export async function GET(context: APIContext) {
  return markdownResponse(await archiveMarkdown(context.site!));
}
