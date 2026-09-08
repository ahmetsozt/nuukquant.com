import Button from "@/components/ui/Button";
import CountUp from "@/components/ui/CountUp";
import Fill from "@/components/ui/Fill";
import Portrait from "@/components/ui/Portrait";
import HeroBackdrop from "@/components/home/HeroBackdrop";
import Ticker from "@/components/home/Ticker";
import type { SiteContent } from "@/content/en";

export default function HeroPerson({ c }: { c: SiteContent }) {
  const h = c.home.hero;
  return (
    <section className="relative overflow-hidden bg-hero text-white" aria-labelledby="hero-heading">
      <HeroBackdrop />
      <div className="container-x relative grid gap-12 pt-16 pb-12 lg:grid-cols-12 lg:items-end lg:gap-8 lg:pt-24 lg:pb-0">
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
                <p className="num text-[30px] leading-none text-white">
                  {t.value.includes("[FILL") ? <Fill text={t.value} /> : <CountUp value={t.value} />}
                </p>
                <p className="mt-2 text-[13px] text-soft/80">{t.label}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-5">
          <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
            {/* frame + glow */}
            <div className="absolute -inset-3 rounded-[32px] bg-[conic-gradient(from_200deg,rgba(127,232,200,0.35),transparent_30%,transparent_70%,rgba(79,143,214,0.35))] blur-md" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] ring-1 ring-white/15">
              <Portrait alt={h.portraitAlt} />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-hero via-hero/60 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <div>
                  <p className="font-serif text-[26px] leading-none text-white">{c.brand.person}</p>
                  <p className="mt-2 text-[12.5px] tracking-wide text-soft/90 uppercase">{c.brand.role}</p>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] tracking-wider text-mint uppercase ring-1 ring-white/15 backdrop-blur">DIFC · Dubai</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-8 lg:mt-0">
        <Ticker />
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
