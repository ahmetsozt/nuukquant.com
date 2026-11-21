import CountUp from "@/components/ui/CountUp";
import Fill from "@/components/ui/Fill";
import type { SiteContent } from "@/content/en";

/** "Our numbers" block: label and figure on quiet raised surfaces. */
export default function StatCards({ c }: { c: SiteContent }) {
  const h = c.home;
  const stats = h.hero.trust;
  return (
    <section className="bg-hero py-16 text-white lg:py-24" aria-labelledby="numbers-heading">
      <div className="container-x">
        <h2 id="numbers-heading" className="h2-section max-w-[640px] text-white">
          {h.numbersTitle}
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((t) => (
            <li key={t.label} className="rv flex min-h-[200px] flex-col justify-between rounded-card bg-navy p-6 ring-1 ring-white/10 lg:p-8">
              <p className="num text-[44px] font-medium leading-none lg:text-[52px]">{t.value.includes("[FILL") ? <Fill text={t.value} /> : <CountUp value={t.value} />}</p>
              <p className="mt-6 max-w-[320px] text-[14px] leading-[1.5] text-soft">{t.label}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[12.5px] text-white/50">{h.numbersNote}</p>
      </div>
    </section>
  );
}
