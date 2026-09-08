import Blob from "@/components/ui/Blob";
import Button from "@/components/ui/Button";
import Fill from "@/components/ui/Fill";
import Icon from "@/components/ui/Icon";
import Portrait from "@/components/ui/Portrait";
import HeroBackdrop from "@/components/home/HeroBackdrop";
import LiveTape from "@/components/market/LiveTape";
import type { Locale } from "@/i18n";
import type { SiteContent } from "@/content/en";

export default function HeroPerson({ c, locale }: { c: SiteContent; locale: Locale }) {
  const h = c.home.hero;
  return (
    <section className="relative overflow-hidden bg-hero text-white" aria-labelledby="hero-heading">
      <HeroBackdrop />
      <div className="container-x relative grid gap-12 pt-14 pb-14 lg:grid-cols-12 lg:items-center lg:gap-8 lg:pt-24 lg:pb-24">
        <div className="lg:col-span-6">
          <p className="kicker text-cyan">{h.kicker}</p>
          <h1 id="hero-heading" className="h1-display mt-5 max-w-[640px] text-white">
            <Fill text={h.title} />
          </h1>
          <p className="mt-6 max-w-[520px] text-[17px] leading-[1.55] text-white/80">
            <Fill text={h.lead} />
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={h.primary.href} event="cta_click" eventLabel="hero_primary">
              {h.primary.label}
            </Button>
            <Button href={h.secondary.href} variant="outline" event="cta_click" eventLabel="hero_secondary">
              {h.secondary.label}
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[13.5px] text-white/75">
            {h.trustLine.map((t) => (
              <li key={t} className="inline-flex items-center gap-2">
                <Icon name="check" size={14} className="text-cyan" />
                <Fill text={t} />
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-6">
          <div className="relative mx-auto aspect-[5/4] w-full max-w-[440px] lg:max-w-[640px]">
            <Blob className="h-full w-full">
              <Portrait alt={h.portraitAlt} />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#00164a]/80 to-transparent" />
            </Blob>
            <div className="absolute bottom-3 start-3 rounded-card-sm bg-white/95 px-5 py-3.5 text-ink shadow-card backdrop-blur lg:bottom-8 lg:-start-4">
              <p className="text-[16px] font-bold">{c.brand.person}</p>
              <p className="mt-0.5 text-[12.5px] text-body">{c.brand.role} · DIFC, Dubai</p>
            </div>
          </div>
        </div>
      </div>
      <LiveTape locale={locale} />
    </section>
  );
}
