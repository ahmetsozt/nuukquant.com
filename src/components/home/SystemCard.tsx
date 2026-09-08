import Badge from "@/components/ui/Badge";
import Fill from "@/components/ui/Fill";
import type { SiteContent, TradingSystem } from "@/content/en";

export default function SystemCard({ s, c }: { s: TradingSystem; c: SiteContent }) {
  return (
    <article className="rv flex flex-col rounded-xl bg-navy p-6 text-white ring-1 ring-white/10">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="num text-[11px] tracking-wider text-mint uppercase">
            {s.assetClass} · {s.timeframe}
          </p>
          <h3 className="mt-2 text-[20px] leading-snug text-white">
            <Fill text={s.name} />
          </h3>
        </div>
        <Badge status={s.status} c={c} className="bg-white/10 text-white ring-white/20" />
      </div>
      <p className="mt-3 text-[14px] leading-6 text-soft">
        <Fill text={s.summary} />
      </p>
      <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
        {s.stats.map((st) => (
          <div key={st.label}>
            <dt className="text-[11.5px] text-soft/70">{st.label}</dt>
            <dd className="num mt-1 text-[15px] text-white">
              <Fill text={st.value} />
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-[12px] text-soft/70">
        {s.method} · {s.riskProfile}
      </p>
    </article>
  );
}
