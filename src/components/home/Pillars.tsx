import Link from "next/link";
import Icon, { type IconName } from "@/components/ui/Icon";
import SectionHead from "@/components/ui/SectionHead";
import type { SiteContent } from "@/content/en";

export default function Pillars({ c }: { c: SiteContent }) {
  return (
    <section id="services" className="section-pad scroll-mt-20 bg-fog" aria-labelledby="pillars-heading">
      <div className="container-x">
        <SectionHead title={c.home.pillarsTitle} lead={c.home.pillarsLead} split />
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {c.home.pillars.map((p) => (
            <li key={p.title} className="rv">
              <Link href={p.href} className="group flex h-full flex-col rounded-card bg-white p-7 shadow-card transition hover:-translate-y-1 hover:shadow-hover">
                <span className="flex size-12 items-center justify-center rounded-full bg-tint text-primary">
                  <Icon name={p.icon as IconName} size={22} />
                </span>
                <h3 className="mt-6 text-[19px] leading-snug">{p.title}</h3>
                <p className="mt-2 flex-1 text-[14.5px] leading-6 text-body">{p.body}</p>
                <p className="mt-4 text-[12.5px] text-muted">{p.who}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-[14px] font-semibold text-primary">
                  {c.ui.learnMore}
                  <Icon name="arrow-up-right" size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
