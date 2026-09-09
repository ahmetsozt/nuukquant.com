"use client";

import { useEffect, useState } from "react";
import { supabase, type EducationItem, type PnlDay, type Report, type SignalPost } from "@/lib/supabase";
import type { SiteContent } from "@/content/en";
import { Card, Empty, Notice, btn, btnOutline, fmtDate, fmtMoney } from "@/components/portal/ui";

export type PanelLink = { link_url?: string | null; link_label?: string | null };

function LinkAction({ link }: { link?: PanelLink }) {
  if (!link?.link_url) return undefined;
  return (
    <a href={link.link_url} target="_blank" rel="noopener noreferrer" className={btn} data-event="panel_link_click">
      {link.link_label || link.link_url}
    </a>
  );
}

type T = SiteContent["portal"];

const dirTone: Record<string, string> = { long: "bg-[#e6f7f1] text-up", short: "bg-[#fdecec] text-down", flat: "bg-fog text-body" };

export function SignalsPanel({ t, link }: { t: T; link?: PanelLink }) {
  const [rows, setRows] = useState<SignalPost[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    supabase()
      .from("signal_posts")
      .select("*")
      .order("published_at", { ascending: false })
      .limit(100)
      .then(({ data, error }) => (error ? setError(error.message) : setRows(data as SignalPost[])));
  }, []);
  return (
    <Card title={t.panelNames.signals} action={<LinkAction link={link} />}>
      {error && <Notice tone="error">{error}</Notice>}
      {rows && rows.length === 0 && <Empty>{t.empty}</Empty>}
      <ul className="space-y-4">
        {rows?.map((s) => (
          <li key={s.id} className="rounded-2xl border border-black/10 p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-[16px] font-bold text-ink">
                {s.instrument && <span className="me-2 font-mono text-primary">{s.instrument}</span>}
                {s.title}
              </p>
              <div className="flex items-center gap-2 text-[12px]">
                {s.direction && <span className={`rounded-pill px-2.5 py-1 font-semibold uppercase ${dirTone[s.direction]}`}>{t.signals.directions[s.direction]}</span>}
                <span className="rounded-pill bg-fog px-2.5 py-1 font-semibold text-body">{t.signals.statuses[s.status]}</span>
                <span className="text-muted">{fmtDate(s.published_at)}</span>
              </div>
            </div>
            <dl className="mt-3 grid grid-cols-3 gap-3 text-[13.5px]">
              {(
                [
                  [t.signals.entry, s.entry],
                  [t.signals.stop, s.stop],
                  [t.signals.target, s.target],
                ] as const
              ).map(([k, v]) => (
                <div key={k} className="rounded-xl bg-fog px-3 py-2">
                  <dt className="text-[11.5px] text-muted">{k}</dt>
                  <dd className="font-semibold tabular-nums text-ink">{v ?? "–"}</dd>
                </div>
              ))}
            </dl>
            {s.rationale && <p className="mt-3 text-[14px] leading-6 text-body">{s.rationale}</p>}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function PnlPanel({ t, link }: { t: T; link?: PanelLink }) {
  const [rows, setRows] = useState<PnlDay[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    supabase()
      .from("pnl_days")
      .select("*")
      .order("date", { ascending: false })
      .limit(60)
      .then(({ data, error }) => (error ? setError(error.message) : setRows(data as PnlDay[])));
  }, []);
  const total = rows?.reduce((a, r) => a + Number(r.closed_pnl), 0) ?? 0;
  return (
    <Card title={t.panelNames["daily-pnl"]} action={<>{rows && rows.length > 0 && <span className={`text-[15px] font-bold tabular-nums ${total >= 0 ? "text-up" : "text-down"}`}>{t.pnl.total}: {fmtMoney(total)}</span>}<LinkAction link={link} /></>}>
      {error && <Notice tone="error">{error}</Notice>}
      {rows && rows.length === 0 && <Empty>{t.empty}</Empty>}
      {rows && rows.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full text-[14px]">
            <thead>
              <tr className="text-start text-[12px] text-muted">
                <th className="py-2 text-start font-medium">{t.pnl.date}</th>
                <th className="py-2 text-end font-medium">{t.pnl.closedPnl}</th>
                <th className="py-2 text-end font-medium">{t.pnl.trades}</th>
                <th className="py-2 text-end font-medium">{t.pnl.winRate}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.date} className="border-t border-black/5">
                  <td className="py-2.5 tabular-nums text-ink">{r.date}</td>
                  <td className={`py-2.5 text-end font-semibold tabular-nums ${Number(r.closed_pnl) >= 0 ? "text-up" : "text-down"}`}>{fmtMoney(Number(r.closed_pnl))}</td>
                  <td className="py-2.5 text-end tabular-nums text-body">{r.trades}</td>
                  <td className="py-2.5 text-end tabular-nums text-body">{r.trades ? Math.round((r.wins / r.trades) * 100) : 0}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  );
}

export function ReportsPanel({ t, link }: { t: T; link?: PanelLink }) {
  const [rows, setRows] = useState<Report[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    supabase()
      .from("reports")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data, error }) => (error ? setError(error.message) : setRows(data as Report[])));
  }, []);
  async function open(r: Report) {
    const { data, error } = await supabase().storage.from("reports").createSignedUrl(r.storage_path, 300);
    if (error || !data) return setError(error?.message ?? t.error);
    window.open(data.signedUrl, "_blank", "noopener");
  }
  return (
    <Card title={t.panelNames.reports} action={<LinkAction link={link} />}>
      {error && <Notice tone="error">{error}</Notice>}
      {rows && rows.length === 0 && <Empty>{t.empty}</Empty>}
      <ul className="divide-y divide-black/5">
        {rows?.map((r) => (
          <li key={r.id} className="flex flex-wrap items-center justify-between gap-3 py-3">
            <div>
              <p className="text-[15px] font-semibold text-ink">{r.title}</p>
              <p className="text-[12.5px] text-muted">
                {r.period ?? ""} · {fmtDate(r.created_at)}
              </p>
            </div>
            <button type="button" onClick={() => open(r)} className={btnOutline}>
              {t.reports.download}
            </button>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function EducationPanel({ t, link, slug = "education" }: { t: T; link?: PanelLink; slug?: string }) {
  const [rows, setRows] = useState<EducationItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    supabase()
      .from("education_items")
      .select("*")
      .eq("panel_slug", slug)
      .order("published_at", { ascending: false })
      .then(({ data, error }) => (error ? setError(error.message) : setRows(data as EducationItem[])));
  }, [slug]);
  return (
    <Card title={t.panelNames[slug as keyof T["panelNames"]] ?? t.panelNames.education} action={<LinkAction link={link} />}>
      {error && <Notice tone="error">{error}</Notice>}
      {rows && rows.length === 0 && <Empty>{t.empty}</Empty>}
      <ul className="grid gap-4 sm:grid-cols-2">
        {rows?.map((e) => (
          <li key={e.id} className="rounded-2xl border border-black/10 p-5">
            <p className="text-[12px] uppercase tracking-wide text-muted">
              {e.kind} · {fmtDate(e.published_at)}
            </p>
            <p className="mt-1 text-[16px] font-bold text-ink">{e.title}</p>
            {e.description && <p className="mt-1 text-[14px] leading-6 text-body">{e.description}</p>}
            <a href={e.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex text-[14px] font-semibold text-primary hover:underline">
              {t.education.open}
            </a>
          </li>
        ))}
      </ul>
    </Card>
  );
}
