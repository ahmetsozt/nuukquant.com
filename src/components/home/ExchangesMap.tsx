import type { SiteContent } from "@/content/en";
import { optionalImage } from "@/lib/images";

function Spikes() {
  // Abstract "market activity" spikes echoing the 3D map of the reference design.
  const spikes = [
    [120, 60], [160, 40], [200, 75], [260, 55], [470, 30], [500, 70], [540, 45], [580, 60],
    [620, 35], [700, 80], [760, 50], [840, 40], [900, 65], [960, 30], [1020, 55],
  ];
  return (
    <svg
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] w-full opacity-70"
      viewBox="0 0 1200 200"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {spikes.map(([x, h], i) => (
        <path
          key={i}
          d={`M${x - 6},200 L${x},${200 - h * 2} L${x + 6},200 Z`}
          fill="#12a37f"
          opacity={0.25 + (i % 3) * 0.2}
        />
      ))}
    </svg>
  );
}

export default function ExchangesMap({ c }: { c: SiteContent }) {
  const { exchanges } = c.home;
  const photo = optionalImage("map");
  return (
    <section
      className={`relative overflow-hidden bg-fog-2 pt-20 pb-14 lg:min-h-[760px] lg:pt-24 2xl:pt-30 ${photo ? "" : "dot-grid"}`}
      aria-labelledby="exchanges-heading"
    >
      {photo ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photo} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,251,251,0.92)_0%,rgba(250,251,251,0.55)_40%,rgba(250,251,251,0.2)_100%)]" />
        </>
      ) : (
        <Spikes />
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="container-x relative z-10">
        <h2 id="exchanges-heading" className="h2-section rv">
          {exchanges.title}
        </h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {exchanges.groups.map((group, gi) => (
            <div key={gi} className="space-y-6 rv">
              {group.map((g) => (
                <div key={g.city}>
                  <h6 className="text-[11px] font-normal tracking-wide text-body uppercase">{g.city}</h6>
                  <ul className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                    {g.codes.map((c) => (
                      <li key={c} className="font-display text-[20px] font-light text-ink">
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
