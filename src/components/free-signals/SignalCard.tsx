import Fill from "@/components/ui/Fill";

export type Sample = { instrument: string; direction: string; entry: string; target: string; stop: string; rr: string; note: string };
export type SampleLabels = { entry: string; target: string; stop: string; rr: string };

/** One Telegram-style signal message: instrument, direction, levels, one-line reason. */
export default function SignalCard({ s, labels }: { s: Sample; labels: SampleLabels }) {
  const cells: [string, string, string][] = [
    [labels.entry, s.entry, "text-white"],
    [labels.target, s.target, "text-up"],
    [labels.stop, s.stop, "text-down"],
    [labels.rr, s.rr, "text-cyan"],
  ];
  return (
    <li className="rv relative flex flex-col overflow-hidden rounded-card-sm bg-ink p-6 text-white ring-1 ring-white/10">
      <div className="blob absolute -end-14 -top-14 size-40 bg-primary/40 blur-2xl" aria-hidden="true" />
      <div className="relative flex items-center justify-between">
        <p className="num text-[22px] font-bold">{s.instrument}</p>
        <span className="rounded-pill bg-cyan px-3 py-1 text-[11.5px] font-bold tracking-wide text-navy-deep uppercase">{s.direction}</span>
      </div>
      <dl className="relative mt-4 grid grid-cols-4 gap-2 border-y border-white/10 py-3">
        {cells.map(([k, v, tone]) => (
          <div key={k}>
            <dt className="text-[11px] text-soft/70">{k}</dt>
            <dd className={`num mt-0.5 text-[14.5px] font-semibold ${tone}`}>{v}</dd>
          </div>
        ))}
      </dl>
      <p className="relative mt-3 text-[13.5px] leading-5 text-soft">
        <Fill text={s.note} />
      </p>
    </li>
  );
}
