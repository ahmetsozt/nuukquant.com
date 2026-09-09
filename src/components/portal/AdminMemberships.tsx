"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { SiteContent } from "@/content/en";
import { Card, Empty, Notice, btn, field, fmtDate, fmtMoney } from "@/components/portal/ui";

type T = SiteContent["portal"];
type App = {
  id: string;
  created_at: string;
  full_name: string;
  email: string;
  phone: string | null;
  country: string | null;
  plan_slug: string | null;
  experience: string | null;
  capital_band: string | null;
  message: string | null;
  status: keyof T["memberships"]["statuses"];
  notes: string | null;
};
type Member = { email: string; full_name: string | null; role: string; panels: string[] | null; first_ends: string | null; created_at: string };
type Stats = Record<keyof T["memberships"]["stats"], number>;

const STATUS_TONE: Record<string, string> = { new: "bg-tint text-primary-dark", contacted: "bg-fog text-body", awaiting_payment: "bg-[#fff4e5] text-[#b45309]", paid: "bg-[#e6f7f1] text-up", active: "bg-[#e6f7f1] text-up", rejected: "bg-[#fdecec] text-down", expired: "bg-fog text-muted" };

/** Membership desk: KPIs, application pipeline with status and notes, and the member list. */
export default function AdminMemberships({ t }: { t: T }) {
  const m = t.memberships;
  const [stats, setStats] = useState<Stats | null>(null);
  const [apps, setApps] = useState<App[]>([]);
  const [members, setMembers] = useState<Member[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const [msg, setMsg] = useState<{ tone: "ok" | "error"; text: string } | null>(null);
  const [tick, setTick] = useState(0);
  const reload = () => setTick((n) => n + 1);

  useEffect(() => {
    const sb = supabase();
    sb.rpc("admin_stats").then(({ data }) => data && setStats(data as Stats));
    sb.from("applications")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(300)
      .then(({ data }) => data && setApps(data as App[]));
    sb.rpc("admin_members").then(({ data }) => data && setMembers(data as Member[]));
  }, [tick]);

  async function setStatus(id: string, status: string) {
    const { error } = await supabase().from("applications").update({ status }).eq("id", id);
    setMsg(error ? { tone: "error", text: error.message } : null);
    reload();
  }
  async function saveNotes(id: string, notes: string) {
    const { error } = await supabase().from("applications").update({ notes }).eq("id", id);
    setMsg(error ? { tone: "error", text: error.message } : { tone: "ok", text: m.activated.split(".")[0] ? "OK" : "OK" });
    if (!error) setMsg(null);
  }
  async function activate(id: string, until: string) {
    const ends = until ? new Date(until).toISOString() : null;
    // Edge function invites the user if needed and grants the plan's panels; RPC is the fallback when the function is not deployed.
    const { data, error } = await supabase().functions.invoke("admin-activate", { body: { app_id: id, until: ends, redirect: window.location.href } });
    if (error || data?.error) {
      const { error: e2 } = await supabase().rpc("activate_application", { app_id: id, until: ends });
      setMsg(e2 ? { tone: "error", text: e2.message } : { tone: "ok", text: m.activated });
    } else {
      setMsg({ tone: "ok", text: data?.invited ? m.activatedInvited : m.activated });
    }
    reload();
  }

  const shown = apps.filter((a) => filter === "all" || a.status === filter);
  const planName = (slug: string | null) => t.panelNames[slug as keyof T["panelNames"]] ?? slug ?? "–";

  return (
    <div className="space-y-6">
      {msg && <Notice tone={msg.tone}>{msg.text}</Notice>}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {(Object.keys(m.stats) as (keyof Stats)[]).map((k) => (
          <div key={k} className="rounded-card-sm bg-white p-5 shadow-card">
            <p className="text-[12px] text-muted">{m.stats[k]}</p>
            <p className="mt-1 text-[24px] font-extrabold tabular-nums text-ink">{stats ? (k === "mrr" ? fmtMoney(Number(stats[k])) : stats[k]) : "…"}</p>
          </div>
        ))}
      </div>

      <Card
        title={m.applications}
        action={
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className={`${field} w-auto py-2`}>
            <option value="all">{m.filterAll}</option>
            {Object.entries(m.statuses).map(([k, v]) => (
              <option key={k} value={k}>
                {v}
              </option>
            ))}
          </select>
        }
      >
        <p className="mb-4 text-[12.5px] text-muted">{m.activateHint}</p>
        {shown.length === 0 && <Empty>{m.empty}</Empty>}
        <ul className="divide-y divide-black/5">
          {shown.map((a) => (
            <li key={a.id} className="grid gap-3 py-4 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-3">
                <p className="text-[15px] font-bold text-ink">{a.full_name}</p>
                <p className="text-[12.5px] text-muted">{fmtDate(a.created_at)} · {a.country ?? "–"}</p>
                <p className="mt-1 text-[13px] text-body" dir="ltr">
                  <a href={`mailto:${a.email}`} className="text-primary hover:underline">{a.email}</a>
                  {a.phone && <> · {a.phone}</>}
                </p>
              </div>
              <div className="lg:col-span-3">
                <p className="text-[13px] text-body">
                  <span className="text-muted">{m.cols.plan}: </span>
                  <span className="font-semibold text-ink">{a.plan_slug ?? "–"}</span>
                </p>
                <p className="text-[13px] text-body">
                  <span className="text-muted">{m.cols.profile}: </span>
                  {a.experience ?? "–"} · {a.capital_band ?? "–"}
                </p>
                {a.message && <p className="mt-1 text-[13px] italic text-body">“{a.message}”</p>}
              </div>
              <div className="lg:col-span-3">
                <span className={`inline-block rounded-pill px-2.5 py-1 text-[12px] font-semibold ${STATUS_TONE[a.status] ?? ""}`}>{m.statuses[a.status]}</span>
                <select value={a.status} onChange={(e) => setStatus(a.id, e.target.value)} className={`${field} mt-2 py-2`}>
                  {Object.entries(m.statuses).map(([k, v]) => (
                    <option key={k} value={k}>
                      {v}
                    </option>
                  ))}
                </select>
                <form
                  className="mt-2 flex gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    activate(a.id, String(new FormData(e.currentTarget).get("until") ?? ""));
                  }}
                >
                  <input name="until" type="date" title={m.activateUntil} className={`${field} py-2`} />
                  <button type="submit" className={`${btn} whitespace-nowrap px-4 py-2`}>
                    {m.activate}
                  </button>
                </form>
              </div>
              <div className="lg:col-span-3">
                <textarea defaultValue={a.notes ?? ""} rows={3} placeholder={m.cols.notes} className={field} onBlur={(e) => e.target.value !== (a.notes ?? "") && saveNotes(a.id, e.target.value)} />
              </div>
            </li>
          ))}
        </ul>
      </Card>

      <Card title={m.members}>
        {members.length === 0 && <Empty>{m.empty}</Empty>}
        {members.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full text-[13.5px]">
              <thead>
                <tr className="text-[12px] text-muted">
                  <th className="py-2 text-start font-medium">{m.cols.name}</th>
                  <th className="py-2 text-start font-medium">{m.cols.contact}</th>
                  <th className="py-2 text-start font-medium">{m.cols.panels}</th>
                  <th className="py-2 text-start font-medium">{m.cols.expires}</th>
                  <th className="py-2 text-start font-medium">{m.cols.role}</th>
                </tr>
              </thead>
              <tbody>
                {members.map((u) => (
                  <tr key={u.email} className="border-t border-black/5">
                    <td className="py-2.5 font-semibold text-ink">{u.full_name || "–"}</td>
                    <td className="py-2.5" dir="ltr">{u.email}</td>
                    <td className="py-2.5 text-body">{(u.panels ?? []).map(planName).join(", ") || "–"}</td>
                    <td className="py-2.5 tabular-nums">{u.first_ends ? u.first_ends.slice(0, 10) : "∞"}</td>
                    <td className="py-2.5">{u.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
}
