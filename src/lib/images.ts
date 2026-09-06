import { existsSync } from "node:fs";
import { join } from "node:path";

const EXTENSIONS = ["webp", "jpg", "jpeg", "png"];

/**
 * Build-time lookup for optional artwork in /public/images.
 * Returns the public URL of the first matching file, or null so the
 * component can fall back to its SVG illustration.
 */
export function optionalImage(name: string): string | null {
  for (const ext of EXTENSIONS) {
    const file = join(process.cwd(), "public", "images", `${name}.${ext}`);
    if (existsSync(file)) return `/images/${name}.${ext}`;
  }
  return null;
}
