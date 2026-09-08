import Badge from "@/components/ui/Badge";
import Fill from "@/components/ui/Fill";
import Sparkline from "@/components/ui/Sparkline";
import type { SiteContent, TradingSystem } from "@/content/en";

export default function SystemCard({ s, c }: { s: TradingSystem; c: SiteContent }) {
  const dim = s.status === "soon";
  return (
    <article className="rv group relative flex flex-col overflow-hidden rounded-card bg-navy p-7 text-white ring-1 ring-white/10 transition hover:ring-cyan/40">
      {s.perf && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 opacity-70 transition-opacity group-hover:opacity-100">
          <Sparkline data={s.series} className="h-full w-full" stroke={dim ? "#6b7280" : "#00d3f3"} />
          <span className="num absolute end-5 bottom-4 rounded-pill bg-cyan px-2.5 py-1 text-[11px] font-bold text-navy-deep">{s.perf}</span>
        </div>
      )}
      <div className="relative flex items-start justify-between gap-3">
        <div>
          <p className="num text-[12px] font-semibold tracking-wider text-cyan uppercase">
            {s.assetClass} · {s.timeframe}
          </p>
          <h3 className="mt-2 text-[21px] leading-snug text-white">
            <Fill text={s.name} />
          </h3>
        </div>
        <Badge status={s.status} c={c} className="bg-white/10 text-white" />
      </div>
      <p className="relative mt-3 text-[14px] leading-6 text-soft">
        <Fill text={s.summary} />
      </p>
      <dl className="relative mt-5 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
        {s.stats.map((st) => (
          <div key={st.label}>
            <dt className="text-[11.5px] text-soft/70">{st.label}</dt>
            <dd className="num mt-1 text-[15px] font-semibold text-white">
              <Fill text={st.value} />
            </dd>
          </div>
        ))}
      </dl>
      <p className={`relative mt-4 text-[12px] text-soft/70 ${s.perf ? "mb-16" : "mb-2"}`}>
        {s.method} · {s.riskProfile}
      </p>
    </article>
  );
}
