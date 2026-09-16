import { existsSync } from "node:fs";
import path from "node:path";

const EXTENSIONS = ["webp", "avif", "jpg", "jpeg", "png"];

/**
 * Looks for official vehicle photography in public/models.
 *
 * Drop a file named after the model slug, for example
 * public/models/volkswagen-taigun.webp, and every card, model page and ad
 * landing page starts using it. No code change needed. Until a file exists
 * the site falls back to the vector illustration.
 *
 * Only runs on the server, at build time for the static pages.
 */
export function findModelImage(slug: string): string | null {
  const dir = path.join(process.cwd(), "public", "models");

  for (const extension of EXTENSIONS) {
    const file = `${slug}.${extension}`;
    if (existsSync(path.join(dir, file))) return `/models/${file}`;
  }

  return null;
}
