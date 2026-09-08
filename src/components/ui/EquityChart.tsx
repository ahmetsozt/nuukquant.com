/**
 * Equity-curve chart with percentage gridlines (relative to the first value),
 * a dashed baseline and an end-of-series label so the rise is legible at a glance.
 */
export default function EquityChart({ data, className = "", endLabel }: { data: number[]; className?: string; endLabel?: string }) {
  const w = 1000;
  const h = 320;
  const padL = 16;
  const padR = 92;
  const padY = 24;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const x = (i: number) => padL + (i / (data.length - 1)) * (w - padL - padR);
  const y = (v: number) => h - padY - ((v - min) / range) * (h - padY * 2);
  const pts = data.map((d, i) => [x(i), y(d)]);
  let line = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) {
    const [px, py] = pts[i - 1];
    const [cx, cy] = pts[i];
    const mx = (px + cx) / 2;
    line += ` C${mx},${py} ${mx},${cy} ${cx},${cy}`;
  }
  const area = `${line} L${pts[pts.length - 1][0]},${h} L${pts[0][0]},${h} Z`;
  const base = data[0];
  // Percentage gridlines: pick a step so that 3–5 lines fit the range.
  const totalPct = ((max - base) / base) * 100;
  const step = totalPct > 250 ? 100 : totalPct > 120 ? 50 : totalPct > 40 ? 20 : totalPct > 15 ? 10 : totalPct > 6 ? 5 : 2;
  const grid: number[] = [];
  for (let p = 0; base * (1 + p / 100) <= max + 1e-9; p += step) grid.push(p);
  const [ex, ey] = pts[pts.length - 1];
  const endPct = ((data[data.length - 1] - base) / base) * 100;
  const label = endLabel ?? `${endPct >= 0 ? "+" : ""}${endPct.toFixed(1)}%`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={className} preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="eq-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0165fa" stopOpacity="0.28" />
          <stop offset="1" stopColor="#0165fa" stopOpacity="0" />
        </linearGradient>
      </defs>
      {grid.map((p) => {
        const gy = y(base * (1 + p / 100));
        return (
          <g key={p}>
            <line x1={padL} x2={w - padR + 8} y1={gy} y2={gy} stroke="#0a0a0a" strokeOpacity={p === 0 ? 0.18 : 0.07} strokeDasharray={p === 0 ? "4 6" : undefined} />
            <text x={w - padR + 14} y={gy + 4} fontSize="12" fill="#6b7280" fontFamily="inherit">
              {p === 0 ? "0%" : `+${p}%`}
            </text>
          </g>
        );
      })}
      <path d={area} fill="url(#eq-area)" />
      <path d={line} fill="none" stroke="#0165fa" strokeWidth="2.5" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
      <circle cx={ex} cy={ey} r="6" fill="#0165fa" />
      <circle cx={ex} cy={ey} r="6" fill="none" stroke="#0165fa" strokeOpacity="0.35" strokeWidth="10" />
      <g transform={`translate(${ex - (label.length * 7.4 + 18) - 14}, ${Math.max(ey - 34, 6)})`}>
        <rect x="0" y="0" width={label.length * 7.4 + 18} height="24" rx="12" fill="#0a0a0a" />
        <text x="9" y="16" fontSize="12.5" fontWeight="700" fill="#fff" fontFamily="inherit">
          {label}
        </text>
      </g>
    </svg>
  );
}
