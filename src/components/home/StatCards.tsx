import CountUp from "@/components/ui/CountUp";
import Fill from "@/components/ui/Fill";
import type { SiteContent } from "@/content/en";

/** "Our numbers" block: big stat cards on black, the last one solid blue. */
export default function StatCards({ c }: { c: SiteContent }) {
  const h = c.home;
  const stats = h.hero.trust;
  const last = stats.length - 1;
  return (
    <section className="bg-hero py-16 text-white lg:py-24" aria-labelledby="numbers-heading">
      <div className="container-x">
        <h2 id="numbers-heading" className="h2-section max-w-[640px] text-white">
          {h.numbersTitle}
        </h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((t, i) => (
            <li key={t.label} className={`rv relative flex min-h-[240px] flex-col justify-between overflow-hidden rounded-card p-8 ${i === last ? "bg-primary" : "bg-[linear-gradient(160deg,#0d1f3c_0%,#0a0a0a_70%)] ring-1 ring-white/10"}`}>
              {i !== last && <div className="blob absolute -end-12 -bottom-12 size-44 bg-primary/40 blur-2xl" aria-hidden="true" />}
              <p className="num relative text-[44px] font-bold leading-none lg:text-[52px]">{t.value.includes("[FILL") ? <Fill text={t.value} /> : <CountUp value={t.value} />}</p>
              <p className="relative mt-6 text-[14px] text-white/80">{t.label}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[12.5px] text-white/50">{h.numbersNote}</p>
      </div>
    </section>
  );
}
