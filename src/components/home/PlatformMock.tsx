const series = [42, 44, 41, 47, 52, 50, 56, 61, 58, 64, 70, 66, 72, 78, 75, 82, 88, 84, 91, 96];

function pathFrom(data: number[], w: number, h: number) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const pts = data.map((d, i) => [
    (i / (data.length - 1)) * w,
    h - ((d - min) / (max - min || 1)) * (h - 10) - 5,
  ]);
  return {
    line: pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`).join(" "),
    area:
      pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ") +
      ` L${w},${h} L0,${h} Z`,
  };
}

const watch = [
  ["EUR/USD", "1.1390", "+0.34%"],
  ["XAU/USD", "3,412.10", "+0.82%"],
  ["US500", "6,210.4", "+0.21%"],
  ["BTC/USD", "79,968", "+0.34%"],
  ["AAPL", "241.18", "-0.12%"],
  ["TSLA", "318.55", "+1.04%"],
];

const book = [
  ["1.13906", "20K"],
  ["1.13904", "5M"],
  ["1.13903", "18M"],
  ["1.13902", "4M"],
  ["1.13901", "12M"],
];

/** A self-drawn trading platform mock (desktop + phone) used instead of licensed device photos. */
export default function PlatformMock() {
  const { line, area } = pathFrom(series, 420, 150);
  return (
    <div className="relative mx-auto w-full max-w-[720px]" aria-hidden="true">
      {/* Desktop window */}
      <div className="rounded-xl border border-line bg-[#12171d] p-3 shadow-[0_40px_80px_-30px_rgba(0,0,0,.8)]">
        <div className="mb-3 flex items-center gap-2 border-b border-line/60 pb-2 text-[10px] text-muted">
          <span className="size-2 rounded-full bg-[#ff5f57]" />
          <span className="size-2 rounded-full bg-[#febc2e]" />
          <span className="size-2 rounded-full bg-[#28c840]" />
          <span className="ml-3">NUUK Terminal · EUR/USD · 1 Day</span>
          <span className="ml-auto rounded bg-primary/20 px-2 py-0.5 text-mint">LIVE</span>
        </div>
        <div className="grid grid-cols-12 gap-3">
          <ul className="col-span-3 space-y-1.5 text-[10px]">
            {watch.map(([s, , c]) => (
              <li key={s} className="flex items-center justify-between rounded bg-white/[.03] px-2 py-1.5">
                <span className="text-white/80">{s}</span>
                <span className={c.startsWith("-") ? "text-[#f1486e]" : "text-mint"}>{c}</span>
              </li>
            ))}
          </ul>
          <div className="col-span-6 rounded bg-white/[.03] p-2">
            <svg viewBox="0 0 420 150" className="h-auto w-full">
              <defs>
                <linearGradient id="mockfill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#7fe8c8" stopOpacity="0.35" />
                  <stop offset="1" stopColor="#7fe8c8" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[30, 60, 90, 120].map((y) => (
                <line key={y} x1="0" x2="420" y1={y} y2={y} stroke="#fff" strokeOpacity="0.06" />
              ))}
              <path d={area} fill="url(#mockfill)" />
              <path d={line} fill="none" stroke="#7fe8c8" strokeWidth="2" strokeLinejoin="round" />
            </svg>
            <div className="mt-2 flex gap-2 text-[10px]">
              <span className="flex-1 rounded bg-[#f1486e]/80 py-1 text-center text-white">SELL 1.13904</span>
              <span className="flex-1 rounded bg-primary py-1 text-center text-white">BUY 1.13906</span>
            </div>
          </div>
          <div className="col-span-3 text-[10px]">
            <div className="mb-1 flex justify-between text-muted">
              <span>Price</span>
              <span>Size</span>
            </div>
            <ul className="space-y-1">
              {book.map(([price, size], i) => (
                <li key={price} className="flex justify-between rounded bg-white/[.03] px-2 py-1">
                  <span className={i < 2 ? "text-[#f1486e]" : "text-mint"}>{price}</span>
                  <span className="text-white/70">{size}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Phone */}
      <div className="absolute -bottom-6 -left-2 w-[112px] rounded-[18px] border border-line bg-[#12171d] p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,.8)] sm:left-6 sm:w-[130px]">
        <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-white/20" />
        <p className="text-[9px] text-white/80">EUR/USD</p>
        <svg viewBox="0 0 420 150" className="mt-1 h-auto w-full">
          <path d={area} fill="url(#mockfill)" />
          <path d={line} fill="none" stroke="#7fe8c8" strokeWidth="3" />
        </svg>
        <div className="mt-2 grid grid-cols-2 gap-1 text-[8px] text-white">
          <span className="rounded bg-[#f1486e]/80 py-1 text-center">1.1390</span>
          <span className="rounded bg-primary py-1 text-center">1.1391</span>
        </div>
      </div>
    </div>
  );
}
