/**
 * Atmospheric backdrop for the hero: faint grid, an aurora glow and a glowing
 * equity curve that reads as "markets" without any stock imagery.
 */
const series = [12, 18, 15, 22, 27, 24, 31, 36, 33, 41, 46, 43, 52, 58, 55, 63, 70, 66, 74, 82, 79, 88];

function path(data: number[], w: number, h: number) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const pts = data.map((d, i) => [(i / (data.length - 1)) * w, h - ((d - min) / (max - min)) * h * 0.72 - h * 0.12]);
  let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) {
    const [px, py] = pts[i - 1];
    const [x, y] = pts[i];
    const cx = (px + x) / 2;
    d += ` C${cx},${py} ${cx},${y} ${x},${y}`;
  }
  return { line: d, area: `${d} L${w},${h} L0,${h} Z`, last: pts[pts.length - 1] };
}

export default function HeroBackdrop() {
  const { line, area, last } = path(series, 1600, 700);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_80%_10%,rgba(127,232,200,0.16),transparent_60%),radial-gradient(40%_50%_at_10%_100%,rgba(79,143,214,0.12),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(70%_70%_at_60%_40%,#000,transparent)]" />
      <svg className="absolute inset-x-0 bottom-0 h-[78%] w-full" viewBox="0 0 1600 700" preserveAspectRatio="none">
        <defs>
          <linearGradient id="hero-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#7fe8c8" stopOpacity="0.22" />
            <stop offset="1" stopColor="#7fe8c8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#7fe8c8" stopOpacity="0" />
            <stop offset="0.35" stopColor="#7fe8c8" stopOpacity="0.9" />
            <stop offset="1" stopColor="#7fe8c8" />
          </linearGradient>
          <filter id="hero-glow" x="-20%" y="-50%" width="140%" height="200%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>
        <path d={area} fill="url(#hero-area)" />
        <path d={line} fill="none" stroke="#7fe8c8" strokeWidth="6" strokeOpacity="0.35" filter="url(#hero-glow)" />
        <path d={line} fill="none" stroke="url(#hero-line)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        <circle cx={last[0]} cy={last[1]} r="5" fill="#7fe8c8" />
        <circle cx={last[0]} cy={last[1]} r="14" fill="#7fe8c8" fillOpacity="0.18" className="animate-ping [animation-duration:2.4s]" />
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-hero to-transparent" />
    </div>
  );
}
