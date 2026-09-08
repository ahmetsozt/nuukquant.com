export default function Sparkline({
  data,
  width = 240,
  height = 64,
  className = "",
  stroke = "currentColor",
}: {
  data: number[];
  width?: number;
  height?: number;
  className?: string;
  stroke?: string;
}) {
  if (data.length < 2) return null;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const pts = data.map((d, i) => [
    (i / (data.length - 1)) * width,
    height - 4 - ((d - min) / (max - min || 1)) * (height - 8),
  ]);
  const line = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const area = `${line} L${width},${height} L0,${height} Z`;
  const id = `sp-${Math.round(min * 7 + max * 13 + data.length)}`;
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className={className} preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={stroke} stopOpacity="0.18" />
          <stop offset="1" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#${id})`} />
      <path d={line} fill="none" stroke={stroke} strokeWidth="1.75" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
