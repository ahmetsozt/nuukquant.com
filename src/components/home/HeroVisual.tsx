import type { SiteContent } from "@/content/en";

/** Hero photo in a quiet frame: the NUUK-liveried car, nothing laid over it. */
export default function HeroVisual({ c }: { c: SiteContent; scrollTo?: string }) {
  const h = c.home.hero;
  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-[440px] overflow-hidden rounded-card bg-[#050505] ring-1 ring-white/10 lg:max-w-[640px]">
      <picture>
        <source media="(max-width: 640px)" srcSet="/images/hero-car-960.webp" />
        <img
          src="/images/hero-car.webp"
          alt={h.visualAlt}
          width={1600}
          height={893}
          fetchPriority="high"
          className="absolute inset-x-0 bottom-0 h-auto w-full"
        />
      </picture>
    </div>
  );
}
