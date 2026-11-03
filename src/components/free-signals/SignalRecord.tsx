import data from "@/data/free-signals.json";
import Icon from "@/components/ui/Icon";

type Status = "open" | "waiting" | "tp" | "sl" | "cancelled";
type Signal = {
  id: string;
  symbol: string;
  side: string;
  digits: number;
  entry: number;
  stop: number;
  target: number;
  rr: number;
  publishedAt: string;
  filledAt: string | null;
  closedAt: string | null;
  status: string;
  pips: number | null;
  r: number | null;
};
type Lang = "tr" | "en";

const COPY = {
  tr: {
    liveTitle: "Açık sinyaller",
    liveEmpty: "Şu an açık sinyal yok. Yeni sinyal önce WhatsApp grubuna düşer, ardından bu sayfaya eklenir.",
    recordTitle: "Yayınlanan bütün sinyaller",
    recordLead: "NUUK. | Signals grubuna giden her sinyal burada: hedefe ulaşan, zararı kesilen ve giriş seviyesine hiç gelmeyen.",
    tiles: { published: "yayınlanan sinyal", hitRate: "isabet oranı", tpSl: "TP / SL", netR: "toplam R" },
    cols: { date: "Tarih", symbol: "Parite", side: "Yön", entry: "Giriş", stop: "SL", target: "TP", rr: "R:R", result: "Sonuç" },
    status: { open: "Açık", waiting: "Giriş bekleniyor", tp: "TP", sl: "SL", cancelled: "Girişe gelmedi" },
    pip: "pip",
    updated: "Son güncelleme",
    note: "İsabet oranı yalnız girişi tetiklenip kapanan sinyallerden hesaplanır; girişe gelmeyen sinyal sonuca katılmaz. 1 pip: altında 0,10 $, JPY paritelerinde 0,01, diğer paritelerde 0,0001. Saatler TSİ.",
    risk: "Ücretsiz sinyaller bilgilendirme amaçlıdır, yatırım tavsiyesi değildir. Geçmiş sonuçlar gelecekteki sonuçların göstergesi değildir; kaldıraçlı işlemlerde sermayenizin tamamını kaybedebilirsiniz.",
  },
  en: {
    liveTitle: "Open signals",
    liveEmpty: "No open signal right now. New signals go to the WhatsApp group first and are added to this page after.",
    recordTitle: "Every signal we have published",
    recordLead: "Each signal sent to the NUUK. | Signals group is listed here: the ones that reached target, the ones stopped out and the ones that never reached entry.",
    tiles: { published: "signals published", hitRate: "hit rate", tpSl: "TP / SL", netR: "net R" },
    cols: { date: "Date", symbol: "Pair", side: "Side", entry: "Entry", stop: "SL", target: "TP", rr: "R:R", result: "Result" },
    status: { open: "Open", waiting: "Awaiting entry", tp: "TP", sl: "SL", cancelled: "Entry not reached" },
    pip: "pips",
    updated: "Last updated",
    note: "Hit rate counts only signals whose entry triggered and that have closed; a signal that never reached entry is left out of the result. 1 pip: $0.10 on gold, 0.01 on JPY pairs, 0.0001 on other pairs. Times are GMT+3.",
    risk: "Free signals are for information only and are not investment advice. Past results are not indicative of future results; with leveraged products you can lose all of your capital.",
  },
} as const;

const STATUS_TONE: Record<Status, string> = {
  open: "bg-tint text-primary",
  waiting: "bg-[#fff4d6] text-[#8a5b00]",
  tp: "bg-tint text-up",
  sl: "bg-[#fde8e8] text-down",
  cancelled: "bg-fog text-muted ring-1 ring-black/5",
};

function fmt(lang: Lang) {
  const locale = lang === "tr" ? "tr-TR" : "en-GB";
  const tz = "Europe/Istanbul";
  return {
    price: (n: number, digits: number) => n.toLocaleString(locale, { minimumFractionDigits: digits, maximumFractionDigits: digits }),
    num: (n: number, d = 1) => n.toLocaleString(locale, { minimumFractionDigits: d, maximumFractionDigits: d }),
    signed: (n: number, d = 1) => `${n > 0 ? "+" : ""}${n.toLocaleString(locale, { minimumFractionDigits: d, maximumFractionDigits: d })}`,
    day: (iso: string) => new Intl.DateTimeFormat(locale, { day: "numeric", month: "short", timeZone: tz }).format(new Date(iso)),
    stamp: (iso: string) => new Intl.DateTimeFormat(locale, { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit", timeZone: tz }).format(new Date(iso)),
  };
}

function StatusPill({ status, label }: { status: Status; label: string }) {
  return <span className={`inline-flex rounded-pill px-2.5 py-0.5 text-[12px] font-semibold whitespace-nowrap ${STATUS_TONE[status]}`}>{label}</span>;
}

function LiveCard({ s, t, f }: { s: Signal; t: (typeof COPY)[Lang]; f: ReturnType<typeof fmt> }) {
  const cells: [string, string, string][] = [
    [t.cols.entry, f.price(s.entry, s.digits), "text-white"],
    [t.cols.target, f.price(s.target, s.digits), "text-up"],
    [t.cols.stop, f.price(s.stop, s.digits), "text-down"],
    [t.cols.rr, f.num(s.rr, 2), "text-cyan"],
  ];
  return (
    <li className="relative overflow-hidden rounded-card-sm bg-ink p-6 text-white ring-1 ring-white/10">
      <div className="flex items-center justify-between gap-3">
        <p className="num text-[22px] font-bold">{s.symbol}</p>
        <span className="rounded-pill bg-cyan px-3 py-1 text-[11.5px] font-bold tracking-wide text-navy-deep uppercase">{s.side}</span>
      </div>
      <dl className="mt-4 grid grid-cols-4 gap-2 border-y border-white/10 py-3">
        {cells.map(([k, v, tone]) => (
          <div key={k}>
            <dt className="text-[11px] text-soft/70">{k}</dt>
            <dd className={`num mt-0.5 text-[14.5px] font-semibold ${tone}`}>{v}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-[13px] text-soft">
        {f.stamp(s.publishedAt)} · {t.status[s.status as Status]}
      </p>
    </li>
  );
}

/** Public record of every free signal: open ones as cards, the full history as a table. */
export default function SignalRecord({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  const f = fmt(lang);
  const { summary, signals, updatedAt } = data as { summary: typeof data.summary; signals: Signal[]; updatedAt: string };
  const live = signals.filter((s) => s.status === "open" || s.status === "waiting");
  const tiles: [string, string][] = [
    [String(summary.published), t.tiles.published],
    [summary.hitRate === null ? "—" : lang === "tr" ? `%${f.num(summary.hitRate)}` : `${f.num(summary.hitRate)}%`, t.tiles.hitRate],
    [`${summary.tp} / ${summary.sl}`, t.tiles.tpSl],
    [`${f.signed(summary.netR, 2)}R`, t.tiles.netR],
  ];

  return (
    <>
      <section className="section-pad bg-white" aria-labelledby="live-heading">
        <div className="container-x">
          <h2 id="live-heading" className="h2-section">{t.liveTitle}</h2>
          {live.length ? (
            <ul className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {live.map((s) => (
                <LiveCard key={s.id} s={s} t={t} f={f} />
              ))}
            </ul>
          ) : (
            <p className="mt-6 flex max-w-[720px] gap-3 rounded-card bg-fog p-6 text-[15.5px] leading-6 text-body">
              <Icon name="signal" size={20} className="mt-0.5 flex-none text-primary" />
              {t.liveEmpty}
            </p>
          )}
        </div>
      </section>

      <section className="section-pad bg-fog" aria-labelledby="record-heading">
        <div className="container-x">
          <h2 id="record-heading" className="h2-section">{t.recordTitle}</h2>
          <p className="mt-4 max-w-[760px] text-[16px] leading-7 text-body">{t.recordLead}</p>

          <dl className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {tiles.map(([v, k]) => (
              <div key={k} className="flex flex-col-reverse rounded-card bg-white p-6 ring-1 ring-black/5">
                <dt className="mt-1 text-[13px] text-muted">{k}</dt>
                <dd className="num text-[30px] font-bold text-ink tabular-nums">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 overflow-x-auto rounded-card bg-white p-5 ring-1 ring-black/5 md:p-6">
            <table className="w-full min-w-[760px] text-[14px]">
              <thead>
                <tr className="border-b border-black/5 text-[11.5px] uppercase tracking-wide text-muted">
                  <th className="py-2 text-start font-semibold">{t.cols.date}</th>
                  <th className="py-2 text-start font-semibold">{t.cols.symbol}</th>
                  <th className="py-2 text-start font-semibold">{t.cols.side}</th>
                  <th className="py-2 text-end font-semibold">{t.cols.entry}</th>
                  <th className="py-2 text-end font-semibold">{t.cols.stop}</th>
                  <th className="py-2 text-end font-semibold">{t.cols.target}</th>
                  <th className="py-2 text-end font-semibold">{t.cols.rr}</th>
                  <th className="py-2 text-end font-semibold">{t.cols.result}</th>
                </tr>
              </thead>
              <tbody>
                {signals.map((s) => (
                  <tr key={s.id} className="border-b border-black/5 last:border-0 hover:bg-fog-2">
                    <td className="py-2.5 text-body whitespace-nowrap">{f.day(s.publishedAt)}</td>
                    <td className="py-2.5 font-bold text-ink">{s.symbol}</td>
                    <td className="py-2.5 text-[12.5px] font-semibold tracking-wide text-body">{s.side}</td>
                    <td className="num py-2.5 text-end tabular-nums">{f.price(s.entry, s.digits)}</td>
                    <td className="num py-2.5 text-end tabular-nums text-down">{f.price(s.stop, s.digits)}</td>
                    <td className="num py-2.5 text-end tabular-nums text-up">{f.price(s.target, s.digits)}</td>
                    <td className="num py-2.5 text-end tabular-nums text-body">{f.num(s.rr, 2)}</td>
                    <td className="py-2.5 text-end">
                      <span className="inline-flex items-center justify-end gap-2">
                        {s.pips !== null && (
                          <span className={`num text-[13px] font-semibold tabular-nums ${s.pips >= 0 ? "text-up" : "text-down"}`}>
                            {f.signed(s.pips)} {t.pip}
                          </span>
                        )}
                        <StatusPill status={s.status as Status} label={t.status[s.status as Status]} />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-5 text-[12.5px] leading-5 text-muted">
            {t.updated}: {f.stamp(updatedAt)} · {t.note}
          </p>
          <p className="mt-3 flex gap-2 text-[12.5px] leading-5 text-muted">
            <Icon name="warning" size={15} className="mt-0.5 flex-none" />
            {t.risk}
          </p>
        </div>
      </section>
    </>
  );
}
