/** Large equity-curve chart: gradient area, baseline, quiet horizontal guides and an end marker. */
export default function EquityChart({ data, className = "" }: { data: number[]; className?: string }) {
  const w = 1000;
  const h = 320;
  const pad = 16;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const pts = data.map((d, i) => [pad + (i / (data.length - 1)) * (w - pad * 2), h - pad - ((d - min) / range) * (h - pad * 2)]);
  let line = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) {
    const [px, py] = pts[i - 1];
    const [x, y] = pts[i];
    const cx = (px + x) / 2;
    line += ` C${cx},${py} ${cx},${y} ${x},${y}`;
  }
  const area = `${line} L${pts[pts.length - 1][0]},${h} L${pts[0][0]},${h} Z`;
  const baseY = h - pad - ((data[0] - min) / range) * (h - pad * 2);
  const [ex, ey] = pts[pts.length - 1];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={className} preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="eq-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0165fa" stopOpacity="0.28" />
          <stop offset="1" stopColor="#0165fa" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((f) => (
        <line key={f} x1={pad} x2={w - pad} y1={pad + (h - pad * 2) * f} y2={pad + (h - pad * 2) * f} stroke="#0a0a0a" strokeOpacity="0.06" />
      ))}
      <line x1={pad} x2={w - pad} y1={baseY} y2={baseY} stroke="#0a0a0a" strokeOpacity="0.18" strokeDasharray="4 6" />
      <path d={area} fill="url(#eq-area)" />
      <path d={line} fill="none" stroke="#0165fa" strokeWidth="2.5" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
      <circle cx={ex} cy={ey} r="6" fill="#0165fa" />
      <circle cx={ex} cy={ey} r="6" fill="none" stroke="#0165fa" strokeOpacity="0.35" strokeWidth="10" />
    </svg>
  );
}
