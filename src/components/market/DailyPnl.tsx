"use client";

import { useEffect, useState } from "react";
import type { SiteContent } from "@/content/en";

type Day = { date: string; closedPnl: number; trades: number; wins: number };
type Feed = { currency: string; updated: string | null; days: Day[] };

const FEED_URL = "/data/daily-pnl.json";
const BAR_DAYS = 30;

/**
 * Closed P&L strip for the proprietary desk. Reads a JSON feed written by the
 * MT5 statement importer (scripts/pnl); renders nothing until real days exist.
 */
export default function DailyPnl({ c }: { c: SiteContent }) {
  const [feed, setFeed] = useState<Feed | null>(null);
  useEffect(() => {
    fetch(FEED_URL, { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((j: Feed | null) => j && Array.isArray(j.days) && j.days.length > 0 && setFeed(j))
      .catch(() => undefined);
  }, []);
  if (!feed) return null;
  const t = c.ui.pnl;
  const days = [...feed.days].sort((a, b) => a.date.localeCompare(b.date));
  const last = days[days.length - 1];
  const recent = days.slice(-BAR_DAYS);
  const peak = Math.max(...recent.map((d) => Math.abs(d.closedPnl)), 1);
  const fmt = new Intl.NumberFormat(undefined, { style: "currency", currency: feed.currency, maximumFractionDigits: 0 });
  const winRate = last.trades > 0 ? Math.round((last.wins / last.trades) * 100) : 0;
  const up = last.closedPnl >= 0;
  return (
    <section className="border-b border-black/5 bg-white" aria-label={t.kicker}>
      <div className="container-x flex flex-wrap items-center justify-between gap-6 py-5">
        <div>
          <p className="kicker">{t.kicker}</p>
          <p className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="text-[14px] text-muted">{t.today}</span>
            <span className={`text-[30px] font-extrabold tabular-nums ${up ? "text-up" : "text-down"}`}>
              {up ? "+" : ""}
              {fmt.format(last.closedPnl)}
            </span>
            <span className="text-[13.5px] text-body">
              {last.trades} {t.trades} · {winRate}% {t.winRate}
            </span>
          </p>
        </div>
        <div className="flex h-12 items-end gap-[3px]" aria-hidden="true">
          {recent.map((d) => (
            <span
              key={d.date}
              title={`${d.date}: ${fmt.format(d.closedPnl)}`}
              className={`w-[6px] rounded-sm ${d.closedPnl >= 0 ? "bg-primary" : "bg-down"}`}
              style={{ height: `${Math.max(4, (Math.abs(d.closedPnl) / peak) * 48)}px` }}
            />
          ))}
        </div>
        <p className="w-full text-[12px] text-muted lg:w-auto lg:max-w-[360px]">
          {t.updated} {last.date}. {t.source}
        </p>
      </div>
    </section>
  );
}
