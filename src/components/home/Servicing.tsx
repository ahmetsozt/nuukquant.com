import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import type { SiteContent } from "@/content/en";
import { optionalImage } from "@/lib/images";

const icons = ["onboarding", "globe", "desk", "posttrade"] as const;

function HexCollage() {
  // Hexagon collage standing in for the team portrait grid.
  const hex = "M50 2 L94 27 L94 77 L50 102 L6 77 L6 27 Z";
  const cells = [
    { x: 60, y: 20, tone: "#12a37f", op: 1 },
    { x: 180, y: 0, tone: "#e9edee", op: 0.5 },
    { x: 300, y: 20, tone: "#7fe8c8", op: 1 },
    { x: 420, y: 0, tone: "#e9edee", op: 0.5 },
    { x: 0, y: 125, tone: "#e9edee", op: 0.5 },
    { x: 120, y: 105, tone: "#1d242c", op: 1 },
    { x: 240, y: 125, tone: "#e9edee", op: 0.6 },
    { x: 360, y: 105, tone: "#12a37f", op: 1 },
    { x: 480, y: 125, tone: "#e9edee", op: 0.5 },
    { x: 60, y: 230, tone: "#7fe8c8", op: 1 },
    { x: 180, y: 210, tone: "#e9edee", op: 0.5 },
    { x: 300, y: 230, tone: "#1d242c", op: 1 },
    { x: 420, y: 210, tone: "#e9edee", op: 0.5 },
  ];
  return (
    <svg viewBox="0 0 590 340" className="h-auto w-full" aria-hidden="true">
      {cells.map((c, i) => (
        <g key={i} transform={`translate(${c.x} ${c.y})`} opacity={c.op}>
          <path d={hex} fill={c.tone} />
          <circle cx="50" cy="42" r="14" fill="#fff" opacity="0.85" />
          <path d="M26 82c4-16 14-24 24-24s20 8 24 24" fill="#fff" opacity="0.85" />
        </g>
      ))}
    </svg>
  );
}

export default function Servicing({ c }: { c: SiteContent }) {
  const { servicing } = c.home;
  const photo = optionalImage("team");
  return (
    <section className="pb-20 lg:pb-14 2xl:pb-30" aria-labelledby="servicing-heading">
      <div className="container-x">
        <h2 id="servicing-heading" className="h2-section max-w-[760px] rv">
          {servicing.title}
        </h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <ul className="grid gap-x-5 gap-y-6 sm:grid-cols-2">
              {servicing.items.map((text, i) => (
                <li key={text} className="flex items-start gap-4 rv">
                  <span className="mt-0.5 flex size-10 flex-none items-center justify-center rounded-md bg-fog text-primary">
                    <Icon name={icons[i]} size={22} />
                  </span>
                  <p className="text-[15px] leading-6">{text}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href={servicing.cta.href}>{servicing.cta.label}</Button>
            </div>
          </div>
          <div className="lg:col-span-6 rv">
            {photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={photo} alt={c.brand.name} loading="lazy" className="h-auto w-full" />
            ) : (
              <HexCollage />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
