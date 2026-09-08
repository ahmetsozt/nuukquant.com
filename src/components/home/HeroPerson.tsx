import Button from "@/components/ui/Button";
import Fill from "@/components/ui/Fill";
import Portrait from "@/components/ui/Portrait";
import type { SiteContent } from "@/content/en";

export default function HeroPerson({ c }: { c: SiteContent }) {
  const h = c.home.hero;
  return (
    <section className="relative overflow-hidden bg-hero text-white" aria-labelledby="hero-heading">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_70%_at_85%_30%,rgba(127,232,200,0.14),transparent_60%)]" />
      <div className="container-x relative grid gap-10 pt-16 pb-14 lg:grid-cols-12 lg:items-end lg:gap-8 lg:pt-24 lg:pb-0">
        <div className="lg:col-span-7 lg:pb-20">
          <p className="kicker text-mint">{h.kicker}</p>
          <h1 id="hero-heading" className="h1-display mt-5 text-white">
            <Fill text={h.title} />
          </h1>
          <p className="mt-6 max-w-[560px] text-[17px] leading-[1.65] text-soft">
            <Fill text={h.lead} />
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={h.primary.href}>{h.primary.label}</Button>
            <Button href={h.secondary.href} variant="outline">
              {h.secondary.label}
            </Button>
          </div>
          <ul className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            {h.trust.map((t) => (
              <li key={t.label}>
                <p className="num text-[28px] leading-none text-white">
                  <Fill text={t.value} />
                </p>
                <p className="mt-2 text-[13px] text-soft/80">{t.label}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-t-[28px] lg:max-w-none">
            <Portrait alt={h.portraitAlt} />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-hero to-transparent" />
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 bg-black/20">
        <div className="container-x flex flex-wrap items-center gap-x-10 gap-y-3 py-5">
          <span className="text-[12px] tracking-widest text-soft/70 uppercase">{h.pressTitle}</span>
          {h.press.map((p) => (
            <span key={p} className="font-display text-[15px] text-soft/80">
              <Fill text={p} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
