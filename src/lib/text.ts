/**
 * Headings end without a period. Drops a single trailing full stop from a
 * one-sentence title; multi-sentence titles and ellipses are left alone.
 */
export function noDot(title: string): string {
  const t = title.trimEnd();
  if (!t.endsWith(".") || t.endsWith("..")) return title;
  const body = t.slice(0, -1);
  return /[.!?]\s/.test(body) ? title : body;
}
