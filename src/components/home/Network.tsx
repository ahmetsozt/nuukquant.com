import type { SiteContent } from "@/content/en";

export default function Network({ c }: { c: SiteContent }) {
  const { network } = c.home;
  return (
    <section id="our-network" className="bg-navy py-12 text-center lg:py-14" aria-label={network.title}>
      <div className="container-x flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
        <h5 className="text-[18px] font-light text-white lg:w-[155px] lg:text-left">{network.title}</h5>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 lg:flex-1 lg:justify-around">
          {network.partners.map((p) => (
            <li
              key={p}
              className="font-display text-[15px] font-light tracking-[0.12em] whitespace-nowrap text-soft uppercase lg:text-[16px]"
            >
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
