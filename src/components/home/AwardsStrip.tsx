import Fill from "@/components/ui/Fill";
import type { SiteContent } from "@/content/en";

function Laurel({ flip = false }: { flip?: boolean }) {
  return (
    <svg viewBox="0 0 24 40" width="14" height="24" className={`text-muted ${flip ? "-scale-x-100" : ""}`} aria-hidden="true">
      <path d="M20 2C8 8 4 20 8 38" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      {[8, 15, 22, 29].map((y, i) => (
        <ellipse key={y} cx={12 - i * 1.2} cy={y} rx="2.4" ry="4.6" fill="currentColor" transform={`rotate(${-30 + i * 6} ${12 - i * 1.2} ${y})`} />
      ))}
    </svg>
  );
}

/** Press / awards strip under the hero, in the laurel-badge style of the reference site. */
export default function AwardsStrip({ c }: { c: SiteContent }) {
  const h = c.home.hero;
  return (
    <section className="border-b border-black/5 bg-white" aria-label={h.pressTitle}>
      <div className="container-x flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-7 lg:justify-between">
        <span className="text-[12px] font-semibold tracking-wider text-muted uppercase">{h.pressTitle}</span>
        {h.press.map((p) => (
          <span key={p} className="inline-flex items-center gap-2 text-[14px] font-semibold text-ink">
            <Laurel />
            <Fill text={p} />
            <Laurel flip />
          </span>
        ))}
      </div>
    </section>
  );
}
