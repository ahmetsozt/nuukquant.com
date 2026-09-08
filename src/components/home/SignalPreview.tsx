import Button from "@/components/ui/Button";
import Fill from "@/components/ui/Fill";
import SectionHead from "@/components/ui/SectionHead";
import type { SiteContent } from "@/content/en";

export function SignalSample({ c }: { c: SiteContent }) {
  const s = c.home.signals.sample;
  const cells: [string, string][] = [
    ["Entry", s.entry],
    ["Stop", s.stop],
    ["Target", s.target],
    ["R:R", s.rr],
  ];
  return (
    <div className="rounded-xl bg-navy p-6 text-white ring-1 ring-white/10">
      <div className="flex items-center justify-between">
        <p className="num text-[13px] text-soft/80">
          <Fill text={s.date} />
        </p>
        <span className="rounded-full bg-primary/20 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-mint uppercase">{s.direction}</span>
      </div>
      <p className="num mt-4 text-[28px] text-white">{s.instrument}</p>
      <dl className="mt-4 grid grid-cols-4 gap-3 border-y border-white/10 py-4">
        {cells.map(([k, v]) => (
          <div key={k}>
            <dt className="text-[11.5px] text-soft/70">{k}</dt>
            <dd className="num mt-1 text-[15px]">
              <Fill text={v} />
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-[14px] leading-6 text-soft">
        <Fill text={s.note} />
      </p>
    </div>
  );
}

export default function SignalPreview({ c }: { c: SiteContent }) {
  const s = c.home.signals;
  return (
    <section className="section-pad" aria-labelledby="signals-heading">
      <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <SectionHead kicker={s.kicker} title={s.title} lead={s.lead} />
          <div className="mt-8">
            <Button href={s.cta.href}>{s.cta.label}</Button>
          </div>
        </div>
        <div className="lg:col-span-6">
          <SignalSample c={c} />
        </div>
      </div>
    </section>
  );
}
