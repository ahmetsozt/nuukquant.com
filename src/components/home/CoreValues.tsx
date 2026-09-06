import Link from "next/link";
import Icon from "@/components/ui/Icon";
import type { SiteContent } from "@/content/en";

type IconName = "diversification" | "technology" | "pricing" | "service";

export default function CoreValues({ c }: { c: SiteContent }) {
  return (
    <section className="pb-20 lg:pb-22 2xl:pb-30" aria-label="Why NUUK">
      <div className="container-x">
        <ul className="grid grid-cols-6 gap-8 sm:grid-cols-12 lg:gap-10">
          {c.home.core.map((c) => (
            <li key={c.title.join(" ")} className="col-span-6 sm:col-span-6 xl:col-span-3">
              <Link href={c.href} className="group block rv">
                <div className="mb-3 flex items-center gap-4 2xl:mb-4 2xl:flex-col 2xl:items-start">
                  <span className="flex size-[72px] flex-none items-center justify-center rounded-md bg-fog-2 text-primary ring-1 ring-black/5 transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon name={c.icon as IconName} size={32} strokeWidth={1.25} />
                  </span>
                  <h3 className="font-display text-[22px] leading-[1.35] font-light text-ink">
                    {c.title[0]}
                    <br />
                    {c.title[1]}
                  </h3>
                </div>
                <p className="text-[15px] leading-6">{c.body}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
