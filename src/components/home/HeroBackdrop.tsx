/**
 * Atmospheric backdrop for the hero: blue glow, faint grid and a quiet equity
 * curve so the black background still reads as "markets".
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
  return { line: d, area: `${d} L${w},${h} L0,${h} Z` };
}

export default function HeroBackdrop() {
  const { line, area } = path(series, 1600, 700);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(55%_70%_at_85%_20%,rgba(1,101,250,0.28),transparent_60%),radial-gradient(40%_50%_at_5%_100%,rgba(0,211,243,0.10),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.3] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(70%_70%_at_40%_40%,#000,transparent)]" />
      <svg className="absolute inset-x-0 bottom-0 h-[70%] w-full opacity-60" viewBox="0 0 1600 700" preserveAspectRatio="none">
        <defs>
          <linearGradient id="hero-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0165fa" stopOpacity="0.22" />
            <stop offset="1" stopColor="#0165fa" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#0165fa" stopOpacity="0" />
            <stop offset="0.4" stopColor="#0165fa" stopOpacity="0.8" />
            <stop offset="1" stopColor="#00d3f3" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#hero-area)" />
        <path d={line} fill="none" stroke="url(#hero-line)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-hero to-transparent" />
    </div>
  );
}
