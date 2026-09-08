import Badge from "@/components/ui/Badge";
import Fill from "@/components/ui/Fill";
import Sparkline from "@/components/ui/Sparkline";
import Icon from "@/components/ui/Icon";
import type { PerformanceCard, SiteContent } from "@/content/en";

const toneClass = { up: "text-up", down: "text-down", neutral: "text-ink" } as const;

export function PerformanceCardView({ card, c }: { card: PerformanceCard; c: SiteContent }) {
  return (
    <article className="rv flex flex-col rounded-card bg-white p-7 shadow-card ring-1 ring-black/5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-[18px] leading-snug">
            <Fill text={card.name} />
          </h3>
          <p className="mt-1 text-[12.5px] text-muted">
            {c.ui.since} <Fill text={card.since} /> · {c.ui.source}: {card.source}
          </p>
        </div>
        <Badge status={card.status} c={c} />
      </div>
      <div className="mt-5 h-16">
        <Sparkline data={card.series} className="h-full w-full" stroke="#0165fa" />
      </div>
      <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-black/5 pt-5">
        {card.stats.map((s) => (
          <div key={s.label}>
            <dt className="text-[12px] text-muted">{s.label}</dt>
            <dd className={`num mt-1 text-[20px] font-bold ${/\d/.test(s.value) ? toneClass[s.tone ?? "neutral"] : "text-muted"}`}>
              <Fill text={s.value} />
            </dd>
          </div>
        ))}
      </dl>
      <div className="mt-5 flex items-center justify-between text-[12px] text-muted">
        <span>
          {c.ui.updated}: <Fill text={card.updated} />
        </span>
        <a href={card.verifiedHref.startsWith("[") ? "#" : card.verifiedHref} className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
          {c.ui.verified} <Icon name="arrow-up-right" size={13} />
        </a>
      </div>
    </article>
  );
}

export default function PerformanceCards({ c, limit }: { c: SiteContent; limit?: number }) {
  const cards = limit ? c.performance.slice(0, limit) : c.performance;
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => (
        <PerformanceCardView key={card.name} card={card} c={c} />
      ))}
    </div>
  );
}
