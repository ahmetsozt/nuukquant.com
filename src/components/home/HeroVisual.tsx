import Icon from "@/components/ui/Icon";
import { MARK_RATIO, MarkSvg, WORDMARK_RATIO, WordmarkSvg } from "@/components/ui/Logo";
import type { SiteContent } from "@/content/en";

const WORDMARK_HEIGHT = 30;
const MARK_HEIGHT = 30;

/**
 * Hero artwork in the style of a motorsport partnership reveal: an organic
 * blob clipping a NUUK-liveried car, a logo lock-up on the black headroom
 * above it, and a scroll cue that drops the visitor to the next section.
 */
export default function HeroVisual({ c, scrollTo = "#partners" }: { c: SiteContent; scrollTo?: string }) {
  const h = c.home.hero;
  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-[440px] lg:max-w-[640px]">
      <div className="pointer-events-none absolute -inset-[10%] bg-[radial-gradient(55%_55%_at_55%_50%,rgba(1,101,250,0.5),transparent_70%)] blur-2xl" />
      <div className="blob relative h-full w-full overflow-hidden bg-[#050505] shadow-[0_40px_80px_-20px_rgba(1,101,250,0.5)] ring-1 ring-white/10">
        <picture>
          <source media="(max-width: 640px)" srcSet="/images/hero-car-960.webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-car.webp"
            alt={h.visualAlt}
            width={1600}
            height={893}
            fetchPriority="high"
            className="absolute inset-x-0 bottom-0 h-auto w-full"
          />
        </picture>
        <div className="absolute inset-x-0 top-[9%] flex flex-col items-center gap-2.5 text-white lg:top-[15%] lg:gap-5">
          <div className="flex origin-top scale-[0.72] items-center gap-5 sm:scale-100 lg:gap-7" dir="ltr">
            <span className="inline-block" style={{ width: Math.round(WORDMARK_HEIGHT * WORDMARK_RATIO), height: WORDMARK_HEIGHT }}>
              <WordmarkSvg className="h-full w-full" />
            </span>
            <span className="h-14 w-px bg-white/40" aria-hidden="true" />
            <span className="inline-block" style={{ width: Math.round(MARK_HEIGHT * MARK_RATIO), height: MARK_HEIGHT }}>
              <MarkSvg className="h-full w-full" />
            </span>
          </div>
          <p className="px-6 text-center text-[9.5px] font-semibold uppercase tracking-[0.2em] text-white/85 sm:text-[11px] lg:text-[13px]">{h.visualTag}</p>
        </div>
      </div>
      <a
        href={scrollTo}
        aria-label={c.ui.scrollDown}
        className="blob-alt absolute bottom-[4%] start-[2%] flex h-16 w-16 items-center justify-center bg-primary text-white shadow-[0_16px_32px_-8px_rgba(1,101,250,0.7)] transition-transform duration-200 hover:translate-y-0.5 lg:h-[76px] lg:w-[76px]"
      >
        <Icon name="arrow-down" size={26} />
      </a>
    </div>
  );
}
