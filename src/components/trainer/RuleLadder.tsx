const RUNGS = [
  { r: "+2R", name: "Hedef", note: "Fiyat buraya gelince işlem kendiliğinden kapanır.", color: "text-up", dot: "bg-up" },
  { r: "0", name: "Giriş", note: "Formasyon kilitlenince, kendi yönünde.", color: "text-white", dot: "bg-white" },
  { r: "−1R", name: "Stop", note: "Gerçekten çalışır. Zarar, baştan belli olan risktir.", color: "text-down", dot: "bg-down" },
] as const;

/**
 * Hero visual for the trainer page: the rule itself, as a ladder from stop to target.
 * PageIntro gives the visual a 5:4 box; the card fills it and grows past it when the
 * text needs more room, so nothing spills out at in-between widths. The per-rung notes
 * show from lg up.
 */
export default function RuleLadder() {
  return (
    <figure className="flex min-h-full flex-col justify-center rounded-card bg-navy p-6 ring-1 ring-white/10 lg:p-10">
      <ol className="border-s-2 border-dashed border-white/25 ps-6">
        {RUNGS.map((rung, i) => (
          <li key={rung.name} className={`relative grid grid-cols-[4.5rem_1fr] items-center gap-x-4 lg:grid-cols-[5.5rem_1fr] lg:items-baseline ${i < RUNGS.length - 1 ? "pb-5 lg:pb-8" : ""}`}>
            <span className={`absolute -start-[31px] top-2.5 size-3 rounded-full ${rung.dot}`} aria-hidden="true" />
            <span className={`num text-[28px] font-bold leading-none lg:row-span-2 lg:text-[36px] ${rung.color}`}>{rung.r}</span>
            <span className={`text-[13px] font-semibold uppercase tracking-[0.08em] ${rung.color}`}>{rung.name}</span>
            <span className="hidden text-[13.5px] leading-5 text-soft lg:col-start-2 lg:block">{rung.note}</span>
          </li>
        ))}
      </ol>
      <figcaption className="mt-5 border-t border-white/10 pt-4 text-[13px] leading-5 text-soft/80 lg:mt-7 lg:pt-5">R, o işlemde aldığın riskin katıdır. Sonuç para ile değil R ile yazılır.</figcaption>
    </figure>
  );
}
