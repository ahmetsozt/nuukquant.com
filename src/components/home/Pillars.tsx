import Link from "next/link";
import Icon, { type IconName } from "@/components/ui/Icon";
import SectionHead from "@/components/ui/SectionHead";
import type { SiteContent } from "@/content/en";

export default function Pillars({ c }: { c: SiteContent }) {
  return (
    <section id="services" className="section-pad scroll-mt-20" aria-labelledby="pillars-heading">
      <div className="container-x">
        <SectionHead title={c.home.pillarsTitle} lead={c.home.pillarsLead} />
        <ol className="mt-12 grid gap-px overflow-hidden rounded-xl bg-black/5 ring-1 ring-black/5 sm:grid-cols-2 lg:grid-cols-5">
          {c.home.pillars.map((p, i) => (
            <li key={p.title} className="rv bg-white">
              <Link href={p.href} className="group flex h-full flex-col p-6 transition-colors hover:bg-paper">
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-md bg-navy text-mint">
                    <Icon name={p.icon as IconName} size={20} />
                  </span>
                  <span className="num text-[12px] text-muted">0{i + 1}</span>
                </div>
                <h3 className="mt-6 text-[19px] leading-snug">{p.title}</h3>
                <p className="mt-2 flex-1 text-[14.5px] leading-6 text-body">{p.body}</p>
                <p className="mt-4 text-[12.5px] text-muted">{p.who}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-primary">
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
