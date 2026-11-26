import type { APIContext } from "astro";
import { homeMarkdown, markdownResponse } from "../lib/markdown";

export async function GET(context: APIContext) {
  return markdownResponse(await homeMarkdown(context.site!));
}
