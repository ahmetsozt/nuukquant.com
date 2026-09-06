import Button from "@/components/ui/Button";
import { home } from "@/content/site";
import { optionalImage } from "@/lib/images";

function Skyline() {
  // Abstract night skyline: towers with lit windows, drawn in SVG so no licensed imagery is needed.
  const towers = [
    { x: 620, w: 70, h: 260 },
    { x: 700, w: 110, h: 420 },
    { x: 820, w: 60, h: 300 },
    { x: 890, w: 90, h: 360 },
    { x: 990, w: 140, h: 500 },
    { x: 1140, w: 80, h: 330 },
    { x: 1230, w: 100, h: 410 },
    { x: 1340, w: 70, h: 280 },
    { x: 1420, w: 120, h: 460 },
    { x: 1550, w: 90, h: 340 },
    { x: 1650, w: 140, h: 390 },
    { x: 1800, w: 80, h: 300 },
  ];
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1920 600"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0d1117" />
          <stop offset="1" stopColor="#141b23" />
        </linearGradient>
        <radialGradient id="glow" cx="0.72" cy="0.4" r="0.5">
          <stop offset="0" stopColor="#7fe8c8" stopOpacity="0.22" />
          <stop offset="1" stopColor="#7fe8c8" stopOpacity="0" />
        </radialGradient>
        <pattern id="win" width="10" height="14" patternUnits="userSpaceOnUse">
          <rect x="2" y="2" width="4" height="6" fill="#ffe9b3" opacity="0.55" />
        </pattern>
        <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0d1117" stopOpacity="0" />
          <stop offset="1" stopColor="#0d1117" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <rect width="1920" height="600" fill="url(#sky)" />
      <rect width="1920" height="600" fill="url(#glow)" />
      {towers.map((t, i) => (
        <g key={i}>
          <rect x={t.x} y={600 - t.h} width={t.w} height={t.h} fill="#1b2430" />
          <rect x={t.x + 4} y={604 - t.h} width={t.w - 8} height={t.h} fill="url(#win)" opacity="0.7" />
          <rect x={t.x} y={600 - t.h} width={t.w} height={2} fill="#7fe8c8" opacity="0.5" />
        </g>
      ))}
      <rect width="1920" height="600" fill="url(#fade)" />
    </svg>
  );
}

export default function Hero() {
  const { hero } = home;
  const photo = optionalImage("hero");
  return (
    <section className="relative overflow-hidden bg-hero text-white" aria-labelledby="hero-heading">
      {photo ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,17,23,0.92)_0%,rgba(13,17,23,0.55)_45%,rgba(13,17,23,0.15)_100%)]" />
        </>
      ) : (
        <Skyline />
      )}
      <div className="container-x relative z-10 pt-28 pb-28 lg:pt-32 lg:pb-30 2xl:pt-48 2xl:pb-40">
        <h1 id="hero-heading" className="text-[48px] leading-[1.15] text-white lg:text-[56px] lg:leading-[70px]">
          {hero.title.map((w, i) => (
            <span key={w} className={i === 2 ? "text-mint" : ""}>
              {w}{" "}
            </span>
          ))}
        </h1>
        <p className="mt-3 text-[16px] font-light tracking-[3px] uppercase lg:mt-4 lg:text-[20px]">
          {hero.kicker}
        </p>
        <p className="mt-6 max-w-[400px] text-[17px] leading-[1.5] text-white/90">{hero.body}</p>
        <div className="mt-8">
          <Button href={hero.cta.href}>{hero.cta.label}</Button>
        </div>
      </div>
    </section>
  );
}
