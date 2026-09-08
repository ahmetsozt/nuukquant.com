import Badge from "@/components/ui/Badge";
import Fill from "@/components/ui/Fill";
import Sparkline from "@/components/ui/Sparkline";
import type { SiteContent, TradingSystem } from "@/content/en";

export default function SystemCard({ s, c }: { s: TradingSystem; c: SiteContent }) {
  const dim = s.status === "soon";
  return (
    <article className="rv group relative flex flex-col overflow-hidden rounded-xl bg-navy p-6 text-white ring-1 ring-white/10 transition hover:ring-mint/40">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 opacity-70 transition-opacity group-hover:opacity-100">
        <Sparkline data={s.series} className="h-full w-full" stroke={dim ? "#8e9aa3" : "#7fe8c8"} />
      </div>
      <div className="relative flex items-start justify-between gap-3">
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
      <p className="relative mt-3 text-[14px] leading-6 text-soft">
        <Fill text={s.summary} />
      </p>
      <dl className="relative mt-5 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
        {s.stats.map((st) => (
          <div key={st.label}>
            <dt className="text-[11.5px] text-soft/70">{st.label}</dt>
            <dd className="num mt-1 text-[15px] text-white">
              <Fill text={st.value} />
            </dd>
          </div>
        ))}
      </dl>
      <p className="relative mt-4 mb-16 text-[12px] text-soft/70">
        {s.method} · {s.riskProfile}
      </p>
    </article>
  );
}
