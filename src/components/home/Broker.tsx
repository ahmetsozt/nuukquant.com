import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import type { SiteContent } from "@/content/en";
import { optionalImage } from "@/lib/images";

const icons = ["shield", "handshake", "vault", "segregation"] as const;

function Columns() {
  // Stylised classical columns, right-aligned like the reference background.
  const cols = [
    { x: 1560, w: 80, h: 230 },
    { x: 1660, w: 110, h: 400 },
    { x: 1790, w: 90, h: 310 },
  ];
  return (
    <svg
      className="pointer-events-none absolute inset-0 hidden h-full w-full opacity-60 lg:block"
      viewBox="0 0 1920 600"
      preserveAspectRatio="xMaxYMax slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="colgrad" x1="0" x2="1">
          <stop offset="0" stopColor="#2f3841" />
          <stop offset="0.5" stopColor="#3b444e" />
          <stop offset="1" stopColor="#252d36" />
        </linearGradient>
      </defs>
      {cols.map((c, i) => (
        <g key={i}>
          <rect x={c.x - 12} y={600 - c.h - 18} width={c.w + 24} height={18} rx="3" fill="#3b444e" />
          <rect x={c.x} y={600 - c.h} width={c.w} height={c.h} fill="url(#colgrad)" />
          {Array.from({ length: 5 }).map((_, j) => (
            <rect
              key={j}
              x={c.x + 6 + j * (c.w / 5)}
              y={600 - c.h}
              width={2}
              height={c.h}
              fill="#1d242c"
              opacity="0.6"
            />
          ))}
        </g>
      ))}
    </svg>
  );
}

export default function Broker({ c }: { c: SiteContent }) {
  const { broker } = c.home;
  const photo = optionalImage("broker-bg");
  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(180deg,#1f2830,#171d24)] py-20 text-white lg:py-24 2xl:py-30"
      aria-labelledby="broker-heading"
      style={photo ? { backgroundImage: `url(${photo})`, backgroundSize: "cover", backgroundPosition: "70% center" } : undefined}
    >
      {photo ? (
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,29,36,0.92)_0%,rgba(23,29,36,0.8)_55%,rgba(23,29,36,0.7)_100%)]" />
      ) : (
        <Columns />
      )}
      <div className="container-x relative z-10 grid gap-12 lg:grid-cols-2 lg:gap-14">
        <div>
          <h2 id="broker-heading" className="h2-section text-white rv">
            {broker.title}
          </h2>
          <p className="mt-6 text-[15px] leading-6 text-soft rv">{broker.body}</p>
          <div className="mt-8">
            <Button href={broker.cta.href} variant="outline-beige">
              {broker.cta.label}
            </Button>
          </div>
        </div>
        <ul className="grid gap-x-14 gap-y-10 sm:grid-cols-2">
          {broker.items.map((it, i) => (
            <li key={it.title} className="rv">
              <Icon name={icons[i]} size={32} className="text-mint" strokeWidth={1.25} />
              <strong className="font-display mt-4 block text-[22px] leading-[1.35] font-normal text-white">
                {it.title}
              </strong>
              <p className="mt-1 text-[15px] leading-6 text-soft">{it.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
