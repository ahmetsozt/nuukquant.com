import type { SiteContent } from "@/content/en";

type StoreLabels = SiteContent["ui"]["store"];

/** https store link from a build-time env value, or null when unset / malformed. */
function storeUrl(raw: string | undefined): string | null {
  if (!raw) return null;
  try {
    const url = new URL(raw.trim());
    return url.protocol === "https:" ? url.toString() : null;
  } catch {
    return null;
  }
}

function AppleGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.37 12.62c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.74-.78-2.87-.76-1.47.02-2.83.86-3.59 2.18-1.53 2.66-.39 6.6 1.1 8.76.73 1.06 1.6 2.24 2.73 2.2 1.1-.04 1.51-.71 2.84-.71 1.32 0 1.7.71 2.86.69 1.18-.02 1.93-1.07 2.65-2.13.84-1.23 1.18-2.42 1.2-2.48-.03-.01-2.3-.88-2.32-3.5ZM14.2 6.16c.6-.73 1.01-1.75.9-2.76-.87.04-1.92.58-2.54 1.31-.56.64-1.05 1.67-.92 2.66.97.07 1.96-.49 2.56-1.21Z" />
    </svg>
  );
}

function PlayGlyph({ muted }: { muted: boolean }) {
  const [blue, green, yellow, red] = muted ? ["#8a8a8a", "#a3a3a3", "#bdbdbd", "#737373"] : ["#4285f4", "#34a853", "#fbbc04", "#ea4335"];
  return (
    <svg width="20" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path fill={blue} d="M3.6 2.3 13.5 12l-9.9 9.7c-.3-.25-.5-.65-.5-1.15V3.45c0-.5.2-.9.5-1.15Z" />
      <path fill={green} d="M3.6 2.3 13.5 12l3.3-3.3L5.1 2c-.55-.3-1.1-.2-1.5.3Z" />
      <path fill={yellow} d="m16.8 8.7-3.3 3.3 3.3 3.3 3.6-2.05c1-.57 1-1.93 0-2.5L16.8 8.7Z" />
      <path fill={red} d="M3.6 21.7 13.5 12l3.3 3.3L5.1 22c-.55.3-1.1.2-1.5-.3Z" />
    </svg>
  );
}

/**
 * App Store + Google Play buttons. Links come from NEXT_PUBLIC_APP_STORE_URL and
 * NEXT_PUBLIC_GOOGLE_PLAY_URL at build time; a store without a URL renders greyed,
 * reading "coming soon" instead of being a dead link. Text buttons with drawn glyphs,
 * not the official badge artwork (none is licensed into this repo yet).
 */
export default function StoreBadges({ labels, size = "md", className = "" }: { labels: StoreLabels; size?: "md" | "sm"; className?: string }) {
  const stores = [
    { key: "app_store", url: storeUrl(process.env.NEXT_PUBLIC_APP_STORE_URL), pre: labels.appStorePre, name: labels.appStore, glyph: () => <AppleGlyph /> },
    { key: "google_play", url: storeUrl(process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL), pre: labels.playPre, name: labels.play, glyph: (muted: boolean) => <PlayGlyph muted={muted} /> },
  ];
  const pad = size === "sm" ? "h-11 px-3.5 gap-2.5" : "h-[52px] px-4 gap-3";
  const nameSize = size === "sm" ? "text-[15px]" : "text-[17px]";
  return (
    <ul className={`flex flex-wrap gap-3 ${className}`}>
      {stores.map((s) => {
        const body = (
          <>
            {s.glyph(!s.url)}
            <span className="flex flex-col text-start leading-none">
              {s.url ? (
                <span className="text-[10.5px] font-medium tracking-[0.02em] opacity-80">{s.pre}</span>
              ) : (
                <span className="text-[10.5px] font-semibold tracking-[0.04em] text-cyan uppercase">{labels.soon}</span>
              )}
              <span className={`mt-1 font-semibold tracking-[-0.01em] ${nameSize}`}>{s.name}</span>
            </span>
          </>
        );
        return (
          <li key={s.key}>
            {s.url ? (
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                data-event="app_store_click"
                data-label={s.key}
                className={`flex items-center rounded-xl bg-ink text-white ring-1 ring-white/20 transition-[background-color,box-shadow] duration-200 hover:bg-navy-3 hover:ring-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${pad}`}
              >
                {body}
              </a>
            ) : (
              <span aria-disabled="true" className={`flex cursor-not-allowed items-center rounded-xl bg-ink/60 text-white/70 ring-1 ring-white/15 ${pad}`}>
                {body}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
