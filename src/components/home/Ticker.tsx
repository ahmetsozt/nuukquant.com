/**
 * Static market tape (sample values, clearly illustrative). Pure CSS marquee,
 * pauses on hover and respects reduced-motion via globals.css.
 */
const items: [string, string, string][] = [
  ["EUR/USD", "1.0934", "+0.21%"],
  ["XAU/USD", "3,412.10", "+0.82%"],
  ["US500", "6,210.4", "+0.34%"],
  ["BTC/USD", "79,968", "+1.12%"],
  ["USD/TRY", "41.85", "-0.05%"],
  ["BRENT", "76.40", "-0.63%"],
  ["DXY", "103.21", "+0.10%"],
  ["ETH/USD", "2,501", "+1.77%"],
  ["NAS100", "21,880", "+0.48%"],
  ["XAG/USD", "38.12", "+0.95%"],
];

export default function Ticker({ label = "Illustrative" }: { label?: string }) {
  const track = [...items, ...items];
  return (
    <div className="ticker relative border-y border-white/10 bg-black/30 text-[13px]" aria-hidden="true">
      <div className="ticker-track flex w-max items-center gap-10 py-3">
        {track.map(([s, p, c], i) => (
          <span key={i} className="num inline-flex items-center gap-2.5 whitespace-nowrap">
            <span className="text-white/90">{s}</span>
            <span className="text-soft/80">{p}</span>
            <span className={c.startsWith("-") ? "text-down" : "text-mint"}>{c}</span>
          </span>
        ))}
      </div>
      <span className="absolute end-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/10 px-2 py-0.5 text-[10px] tracking-wider text-soft/70 uppercase backdrop-blur sm:inline">{label}</span>
    </div>
  );
}
