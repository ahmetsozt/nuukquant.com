import type { ReactNode } from "react";

/**
 * Organic blob visual with a blue glow and concentric rings, echoing the
 * reference site's 3D shield artwork. Pass children (e.g. a portrait) to
 * fill the shape; otherwise it renders as decorative art.
 */
export default function Blob({
  children,
  tone = "dark",
  className = "",
  alt = false,
}: {
  children?: ReactNode;
  tone?: "dark" | "light";
  className?: string;
  alt?: boolean;
}) {
  const shape = alt ? "blob-alt" : "blob";
  const glow = tone === "dark" ? "bg-[radial-gradient(60%_60%_at_50%_45%,rgba(1,101,250,0.55),transparent_70%)]" : "bg-[radial-gradient(60%_60%_at_50%_45%,rgba(1,101,250,0.28),transparent_70%)]";
  return (
    <div className={`relative ${className}`} aria-hidden={children ? undefined : true}>
      <div className={`absolute -inset-[12%] ${glow} blur-2xl`} />
      <div className={`${shape} relative h-full w-full overflow-hidden bg-[linear-gradient(160deg,#0a3fb0_0%,#0165fa_45%,#00164a_100%)] shadow-[0_40px_80px_-20px_rgba(1,101,250,0.45)]`}>
        {!children && (
          <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full opacity-70" aria-hidden="true">
            <defs>
              <linearGradient id="blob-ring" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#fff" stopOpacity="0.55" />
                <stop offset="1" stopColor="#fff" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            {[150, 115, 80, 45].map((r, i) => (
              <ellipse key={r} cx="205" cy="200" rx={r * 1.15} ry={r} fill="none" stroke="url(#blob-ring)" strokeWidth={2.5 - i * 0.4} transform={`rotate(${-18 + i * 6} 205 200)`} />
            ))}
            <ellipse cx="205" cy="200" rx="26" ry="22" fill="#fff" fillOpacity="0.9" transform="rotate(-18 205 200)" />
          </svg>
        )}
        {children}
      </div>
    </div>
  );
}
