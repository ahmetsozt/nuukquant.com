import type { ReactNode } from "react";

/**
 * Neutral frame for a page visual such as a photo. Without children it renders
 * nothing: an empty decorative shape says nothing about the product.
 */
export default function Blob({
  children,
  tone = "dark",
  className = "",
}: {
  children?: ReactNode;
  tone?: "dark" | "light";
  className?: string;
  alt?: boolean;
}) {
  if (!children) return null;
  const surface = tone === "dark" ? "bg-navy ring-white/10" : "bg-fog ring-black/5";
  return <div className={`relative overflow-hidden rounded-card ring-1 ${surface} ${className}`}>{children}</div>;
}
