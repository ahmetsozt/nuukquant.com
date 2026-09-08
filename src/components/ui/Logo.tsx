import Link from "next/link";

/**
 * NUUK. brand marks as inline SVG (vectors from the supplied Canva/PDF logo).
 * Letters take `currentColor`, so the logo is navy on light and white on dark
 * surfaces; the square "period" is always brand green.
 */
export const BRAND_GREEN = "#6aa84f";
export const BRAND_NAVY = "#0c1223";

/* Glyph outlines, baseline at y=0, cap height 180. */
const N =
  "M63.75 0H26.25C23.08 0 20.79-.71 19.38-2.13 17.96-3.54 17.25-5.83 17.25-9V-171c0-3.16.71-5.46 2.13-6.88C20.79-179.29 23.08-180 26.25-180h26c3.16 0 5.88.5 8.13 1.5 2.25 1 4.46 2.75 6.63 5.25l48.5 55.5V-171c0-3.16.71-5.46 2.13-6.88 1.41-1.41 3.71-2.12 6.88-2.12H162c3.16 0 5.46.71 6.88 2.13 1.41 1.41 2.12 3.71 2.12 6.88V-9c0 3.17-.71 5.46-2.13 6.88C167.46-.71 165.16 0 162 0h-37.5c-3.17 0-5.46-.71-6.88-2.13-1.41-1.41-2.12-3.71-2.12-6.88v-30.75l-42.75-51.75V-9c0 3.17-.71 5.46-2.13 6.88C69.21-.71 66.91 0 63.75 0Z";
const U =
  "M170.5-47.25c0 7.67-1.13 14.63-3.38 20.88-2.25 6.25-6.25 11.58-12 16-5.75 4.42-13.62 7.88-23.62 10.38-10 2.5-22.75 3.75-38.25 3.75s-28.25-1.25-38.25-3.75c-10-2.5-17.88-5.96-23.63-10.38-5.75-4.42-9.75-9.75-12-16C17.13-32.62 16-39.58 16-47.25V-171c0-3.16.71-5.46 2.13-6.88C19.54-179.29 21.83-180 25-180h39.25c3.16 0 5.46.71 6.88 2.13 1.41 1.41 2.12 3.71 2.12 6.88v114c0 3.34 1.25 6.13 3.75 8.38 2.5 2.25 8.08 3.37 16.75 3.37 8.83 0 14.5-1.12 17-3.37 2.5-2.25 3.75-5.04 3.75-8.38V-171c0-3.16.71-5.46 2.13-6.88 1.41-1.41 3.71-2.12 6.88-2.12h38c3.16 0 5.46.71 6.88 2.13 1.41 1.41 2.12 3.71 2.12 6.88Z";
const K =
  "M65 0H26.25C23.08 0 20.79-.71 19.38-2.13 17.96-3.54 17.25-5.83 17.25-9V-171c0-3.16.71-5.46 2.13-6.88C20.79-179.29 23.08-180 26.25-180H65c3.16 0 5.46.71 6.88 2.13 1.41 1.41 2.12 3.71 2.12 6.88v57.5h10l25.75-58.25c1.16-3 2.75-5.13 4.75-6.38 2-1.25 4.58-1.87 7.75-1.87h38.5c2.83 0 4.75.71 5.75 2.13 1 1.41.91 3.46-.25 6.12l-25.5 58.25c9.33.5 16.79 3.79 22.38 9.88 5.58 6.08 8.37 14.12 8.37 24.12V-9c0 3.17-.71 5.46-2.13 6.88C167.96-.71 165.66 0 162.5 0H124c-3.17 0-5.46-.71-6.88-2.13-1.41-1.41-2.12-3.71-2.12-6.88v-48.75c0-2.66-.67-4.75-2-6.25-1.34-1.5-3.34-2.25-6-2.25H74V-9c0 3.17-.71 5.46-2.13 6.88C70.46-.71 68.16 0 65 0Z";
const DOT =
  "M73.25 0h-50.5c-3.17 0-5.46-.71-6.88-2.13C14.46-3.54 13.75-5.83 13.75-9v-50.75c0-3.16.71-5.46 2.13-6.88 1.41-1.41 3.71-2.12 6.87-2.12h50.5c3.16 0 5.46.71 6.88 2.13 1.41 1.41 2.12 3.71 2.12 6.87V-9c0 3.17-.71 5.46-2.13 6.88C78.46-.71 76.16 0 73.25 0Z";

/* Wordmark "NUUK." — tight box 813 × 184 */
export const WORDMARK_RATIO = 813 / 184;
export function WordmarkSvg({ className = "", title = "NUUK." }: { className?: string; title?: string }) {
  return (
    <svg viewBox="0 0 813 184" className={className} role="img" aria-label={title}>
      <g transform="translate(-40.371 -102.554)">
        <g fill="currentColor">
          <path d={N} transform="translate(23.121 282.554)" />
          <path d={U} transform="translate(211.369 282.554)" />
          <path d={U} transform="translate(397.867 282.554)" />
          <path d={K} transform="translate(584.364 282.554)" />
        </g>
        <path d={DOT} fill={BRAND_GREEN} transform="translate(770.871 282.554)" />
      </g>
    </svg>
  );
}

/* Mark "N." — tight box 254 × 180 */
export const MARK_RATIO = 254 / 180;
export function MarkSvg({ className = "", title = "N." }: { className?: string; title?: string }) {
  return (
    <svg viewBox="0 0 254 180" className={className} role="img" aria-label={title}>
      <g transform="translate(-55.312 -513.517)">
        <path d={N} fill="currentColor" transform="translate(38.062 693.517)" />
        <path d={DOT} fill={BRAND_GREEN} transform="translate(226.312 693.517)" />
      </g>
    </svg>
  );
}

/** "N." symbol. Takes `currentColor` for the letter. */
export function LogoMark({ className = "", size = 34 }: { className?: string; size?: number }) {
  return (
    <span aria-hidden="true" className={`inline-block flex-none ${className}`} style={{ width: Math.round(size * MARK_RATIO), height: size }}>
      <MarkSvg className="h-full w-full" />
    </span>
  );
}

/** Full "NUUK." wordmark, linked to the home page. */
export default function Logo({
  dark = false,
  className = "",
  height = 28,
  href = "/",
  label = "NUUK home",
}: {
  dark?: boolean;
  className?: string;
  height?: number;
  href?: string;
  label?: string;
}) {
  return (
    <Link href={href} aria-label={label} className={`inline-flex items-center ${dark ? "text-white" : "text-[#0c1223]"} ${className}`}>
      <span className="inline-block flex-none" dir="ltr" style={{ width: Math.round(height * WORDMARK_RATIO), height }}>
        <WordmarkSvg className="h-full w-full" />
      </span>
    </Link>
  );
}
