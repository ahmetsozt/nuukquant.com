import type { JournalCopy } from "@/content/journal";
import type { DeskJournal, JournalFormat } from "@/lib/deskJournal";

type Tone = "up" | "down" | "ink";
type Card = { label: string; value: string; hint: string; tone: Tone; hero?: boolean };

const toneClass: Record<Tone, string> = { up: "text-up", down: "text-down", ink: "text-ink" };

export function journalCards(j: DeskJournal, t: JournalCopy, f: JournalFormat): Card[] {
  const s = j.summary;
  const cards: Card[] = [
    { label: t.cards.return, value: f.pct(s.twrPct, 2), hint: t.cards.returnHint, tone: s.twrPct >= 0 ? "up" : "down", hero: true },
    { label: t.cards.net, value: f.money(s.net), hint: t.cards.netHint, tone: s.net >= 0 ? "up" : "down" },
    { label: t.cards.winRate, value: f.pct(s.winRate * 100, 1, false), hint: t.cards.winRateHint, tone: "ink" },
    { label: t.cards.profitFactor, value: f.ratio(s.profitFactor), hint: t.cards.profitFactorHint, tone: "ink" },
    { label: t.cards.greenDays, value: `${s.greenDays}/${s.days}`, hint: t.cards.greenDaysHint, tone: "up" },
    { label: t.cards.trades, value: f.int(s.trades), hint: t.cards.tradesHint.replace("{n}", f.int(s.avgTradesPerDay)), tone: "ink" },
  ];
  if (s.maxDrawdownUsd !== null) cards.push({ label: t.cards.drawdown, value: f.money(s.maxDrawdownUsd), hint: t.cards.drawdownHint, tone: "down" });
  const best = j.daily.reduce((a, b) => (b.net > a.net ? b : a));
  cards.push({ label: t.cards.bestDay, value: f.money(best.net), hint: `${f.date(best.date)} · ${f.pct(best.retPct, 2)}`, tone: best.net >= 0 ? "up" : "down" });
  return cards;
}

export default function JournalCards({ cards, limit }: { cards: Card[]; limit?: number }) {
  const shown = limit ? cards.slice(0, limit) : cards;
  return (
    <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {shown.map((c) => (
        <div
          key={c.label}
          className={`rv rounded-card p-5 ring-1 transition-shadow duration-200 hover:shadow-card ${c.hero ? "bg-ink text-white ring-ink" : "bg-white ring-black/5"}`}
        >
          <dt className={`text-[12px] font-semibold uppercase tracking-[0.08em] ${c.hero ? "text-white/60" : "text-muted"}`}>{c.label}</dt>
          <dd className={`num mt-2 text-[26px] font-extrabold leading-none tabular-nums md:text-[30px] ${c.hero ? "text-[#5ee0b8]" : toneClass[c.tone]}`}>{c.value}</dd>
          <dd className={`mt-2 text-[12.5px] ${c.hero ? "text-white/60" : "text-muted"}`}>{c.hint}</dd>
        </div>
      ))}
    </dl>
  );
}
