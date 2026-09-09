"use client";

import { useEffect, useState, type FormEvent } from "react";
import { supabase, type Panel } from "@/lib/supabase";
import type { SiteContent } from "@/content/en";
import { Card, Notice, btn, field, label } from "@/components/portal/ui";

type T = SiteContent["portal"];
type Row = { email: string; full_name: string | null; panel_slug: string; ends_at: string | null; note: string | null };

/** Admin tools: grant/revoke panels, publish signals, add P&L days, upload client reports. */
export default function AdminPanel({ t, panels }: { t: T; panels: Panel[] }) {
  const a = t.admin;
  const [rows, setRows] = useState<Row[]>([]);
  const [msg, setMsg] = useState<{ tone: "ok" | "error"; text: string } | null>(null);
  const [busy, setBusy] = useState(false);

  const [tick, setTick] = useState(0);
  const reload = () => setTick((n) => n + 1);
  useEffect(() => {
    supabase()
      .rpc("admin_entitlements")
      .then(({ data, error }) => !error && setRows((data as Row[]) ?? []));
  }, [tick]);

  async function run(fn: () => PromiseLike<{ error: { message: string } | null }>, okText: string, form?: HTMLFormElement) {
    setBusy(true);
    setMsg(null);
    const { error } = await fn();
    setBusy(false);
    if (error) return setMsg({ tone: "error", text: error.message });
    setMsg({ tone: "ok", text: okText });
    form?.reset();
    reload();
  }

  function grant(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const d = new FormData(f);
    const until = String(d.get("until") ?? "");
    run(() => supabase().rpc("grant_panel", { target_email: d.get("email"), slug: d.get("panel"), until: until ? new Date(until).toISOString() : null, memo: d.get("note") || null }), a.granted, f);
  }
  function revoke(email: string, slug: string) {
    run(() => supabase().rpc("revoke_panel", { target_email: email, slug }), a.revoked);
  }
  function publish(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const d = Object.fromEntries(new FormData(f)) as Record<string, string>;
    run(
      () => supabase().from("signal_posts").insert({ title: d.title, instrument: d.instrument || null, direction: d.direction || null, entry: d.entry || null, stop: d.stop || null, target: d.target || null, rationale: d.rationale || null }),
      a.published,
      f,
    );
  }
  function addDay(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const d = Object.fromEntries(new FormData(f)) as Record<string, string>;
    run(() => supabase().from("pnl_days").upsert({ date: d.date, closed_pnl: Number(d.closed_pnl), trades: Number(d.trades || 0), wins: Number(d.wins || 0), note: d.note || null }), a.saved, f);
  }
  async function upload(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const d = new FormData(f);
    const file = d.get("file") as File | null;
    if (!file || !file.size) return;
    setBusy(true);
    setMsg(null);
    const { data: uid, error: e1 } = await supabase().rpc("user_id_by_email", { target_email: d.get("email") });
    if (e1 || !uid) {
      setBusy(false);
      return setMsg({ tone: "error", text: e1?.message ?? a.noUser });
    }
    const path = `${uid}/${Date.now()}-${file.name.replace(/[^\w.\-]+/g, "_")}`;
    const { error: e2 } = await supabase().storage.from("reports").upload(path, file, { contentType: file.type || "application/pdf" });
    if (e2) {
      setBusy(false);
      return setMsg({ tone: "error", text: e2.message });
    }
    const { error: e3 } = await supabase().from("reports").insert({ user_id: uid, title: d.get("title"), period: d.get("period") || null, storage_path: path });
    setBusy(false);
    if (e3) return setMsg({ tone: "error", text: e3.message });
    setMsg({ tone: "ok", text: a.uploaded });
    f.reset();
  }

  function addEducation(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const d = Object.fromEntries(new FormData(f)) as Record<string, string>;
    run(() => supabase().from("education_items").insert({ title: d.title, url: d.url, kind: d.kind || "video", description: d.description || null }), a.saved, f);
  }

  const [settings, setSettings] = useState<Record<string, string>>({});
  useEffect(() => {
    supabase()
      .from("settings")
      .select("key,value")
      .then(({ data }) => data && setSettings(Object.fromEntries(data.map((r: { key: string; value: string | null }) => [r.key, r.value ?? ""]))));
  }, []);
  function saveSettings(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const rows = ["notify_email", "telegram_bot_token", "telegram_chat_id"].map((key) => ({ key, value: d[key]?.trim() || null, updated_at: new Date().toISOString() }));
    run(() => supabase().from("settings").upsert(rows), a.saved);
  }
  function savePanelLink(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    run(() => supabase().from("panels").update({ link_url: d.link_url || null, link_label: d.link_label || null }).eq("slug", d.panel), a.saved);
  }

  const panelOptions = panels.map((p) => (
    <option key={p.slug} value={p.slug}>
      {t.panelNames[p.slug as keyof T["panelNames"]] ?? p.name}
    </option>
  ));

  return (
    <div className="space-y-6">
      {msg && <Notice tone={msg.tone}>{msg.text}</Notice>}
      <Card title={a.grant}>
        <form onSubmit={grant} className="grid gap-3 sm:grid-cols-4">
          <label className="block sm:col-span-2">
            <span className={label}>{a.email}</span>
            <input name="email" type="email" required className={field} dir="ltr" />
          </label>
          <label className="block">
            <span className={label}>{a.panel}</span>
            <select name="panel" className={field}>
              {panelOptions}
            </select>
          </label>
          <label className="block">
            <span className={label}>{a.until}</span>
            <input name="until" type="date" className={field} />
          </label>
          <label className="block sm:col-span-3">
            <span className={label}>{a.note}</span>
            <input name="note" className={field} placeholder={a.notePlaceholder} />
          </label>
          <div className="flex items-end">
            <button type="submit" disabled={busy} className={`${btn} w-full`}>
              {a.grantBtn}
            </button>
          </div>
        </form>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-[13.5px]">
            <thead>
              <tr className="text-[12px] text-muted">
                <th className="py-2 text-start font-medium">{a.email}</th>
                <th className="py-2 text-start font-medium">{a.panel}</th>
                <th className="py-2 text-start font-medium">{a.until}</th>
                <th className="py-2 text-start font-medium">{a.note}</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={`${r.email}-${r.panel_slug}`} className="border-t border-black/5">
                  <td className="py-2 text-ink" dir="ltr">{r.email}</td>
                  <td className="py-2">{t.panelNames[r.panel_slug as keyof T["panelNames"]] ?? r.panel_slug}</td>
                  <td className="py-2 tabular-nums">{r.ends_at ? r.ends_at.slice(0, 10) : "∞"}</td>
                  <td className="py-2 text-body">{r.note ?? ""}</td>
                  <td className="py-2 text-end">
                    <button type="button" onClick={() => revoke(r.email, r.panel_slug)} className="text-[13px] font-semibold text-down hover:underline">
                      {a.revoke}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card title={a.notifications}>
        <form onSubmit={saveSettings} className="grid gap-3 sm:grid-cols-6" key={Object.keys(settings).length}>
          <label className="block sm:col-span-2">
            <span className={label}>{a.notifyEmail}</span>
            <input name="notify_email" type="email" defaultValue={settings.notify_email ?? ""} className={field} dir="ltr" />
          </label>
          <label className="block sm:col-span-2">
            <span className={label}>{a.telegramToken}</span>
            <input name="telegram_bot_token" defaultValue={settings.telegram_bot_token ?? ""} className={field} dir="ltr" placeholder="123456:ABC…" />
          </label>
          <label className="block">
            <span className={label}>{a.telegramChat}</span>
            <input name="telegram_chat_id" defaultValue={settings.telegram_chat_id ?? ""} className={field} dir="ltr" />
          </label>
          <div className="flex items-end">
            <button type="submit" disabled={busy} className={`${btn} w-full`}>
              {a.save}
            </button>
          </div>
          <p className="text-[12.5px] text-muted sm:col-span-6">{a.telegramHint}</p>
        </form>
      </Card>

      <Card title={a.panelLink}>
        <form onSubmit={savePanelLink} className="grid gap-3 sm:grid-cols-6">
          <label className="block">
            <span className={label}>{a.panel}</span>
            <select name="panel" className={field}>
              {panelOptions}
            </select>
          </label>
          <label className="block sm:col-span-2">
            <span className={label}>{a.linkLabel}</span>
            <input name="link_label" className={field} placeholder={a.linkLabelPlaceholder} />
          </label>
          <label className="block sm:col-span-2">
            <span className={label}>{a.url}</span>
            <input name="link_url" type="url" className={field} dir="ltr" placeholder="https://t.me/+…" />
          </label>
          <div className="flex items-end">
            <button type="submit" disabled={busy} className={`${btn} w-full`}>
              {a.save}
            </button>
          </div>
        </form>
      </Card>

      <Card title={a.newSignal}>
        <form onSubmit={publish} className="grid gap-3 sm:grid-cols-6">
          <label className="block sm:col-span-3">
            <span className={label}>{a.title}</span>
            <input name="title" required className={field} />
          </label>
          <label className="block sm:col-span-2">
            <span className={label}>{t.signals.instrument}</span>
            <input name="instrument" className={field} placeholder="XAU/USD" dir="ltr" />
          </label>
          <label className="block">
            <span className={label}>{t.signals.direction}</span>
            <select name="direction" className={field}>
              <option value="long">{t.signals.directions.long}</option>
              <option value="short">{t.signals.directions.short}</option>
              <option value="flat">{t.signals.directions.flat}</option>
            </select>
          </label>
          {(["entry", "stop", "target"] as const).map((k) => (
            <label key={k} className="block sm:col-span-2">
              <span className={label}>{t.signals[k]}</span>
              <input name={k} className={field} dir="ltr" />
            </label>
          ))}
          <label className="block sm:col-span-5">
            <span className={label}>{t.signals.rationale}</span>
            <textarea name="rationale" rows={3} className={field} />
          </label>
          <div className="flex items-end">
            <button type="submit" disabled={busy} className={`${btn} w-full`}>
              {a.publish}
            </button>
          </div>
        </form>
      </Card>

      <Card title={a.addPnl}>
        <form onSubmit={addDay} className="grid gap-3 sm:grid-cols-6">
          <label className="block sm:col-span-2">
            <span className={label}>{t.pnl.date}</span>
            <input name="date" type="date" required className={field} />
          </label>
          <label className="block">
            <span className={label}>{t.pnl.closedPnl}</span>
            <input name="closed_pnl" type="number" step="0.01" required className={field} dir="ltr" />
          </label>
          <label className="block">
            <span className={label}>{t.pnl.trades}</span>
            <input name="trades" type="number" min={0} className={field} dir="ltr" />
          </label>
          <label className="block">
            <span className={label}>{a.wins}</span>
            <input name="wins" type="number" min={0} className={field} dir="ltr" />
          </label>
          <div className="flex items-end">
            <button type="submit" disabled={busy} className={`${btn} w-full`}>
              {a.save}
            </button>
          </div>
        </form>
      </Card>

      <Card title={a.addEducation}>
        <form onSubmit={addEducation} className="grid gap-3 sm:grid-cols-6">
          <label className="block sm:col-span-2">
            <span className={label}>{a.title}</span>
            <input name="title" required className={field} />
          </label>
          <label className="block sm:col-span-2">
            <span className={label}>{a.url}</span>
            <input name="url" type="url" required className={field} dir="ltr" placeholder="https://" />
          </label>
          <label className="block">
            <span className={label}>{a.kind}</span>
            <select name="kind" className={field}>
              <option value="video">video</option>
              <option value="pdf">pdf</option>
              <option value="slides">slides</option>
            </select>
          </label>
          <div className="flex items-end">
            <button type="submit" disabled={busy} className={`${btn} w-full`}>
              {a.save}
            </button>
          </div>
          <label className="block sm:col-span-6">
            <span className={label}>{a.description}</span>
            <input name="description" className={field} />
          </label>
        </form>
      </Card>

      <Card title={a.uploadReport}>
        <form onSubmit={upload} className="grid gap-3 sm:grid-cols-6">
          <label className="block sm:col-span-2">
            <span className={label}>{a.forEmail}</span>
            <input name="email" type="email" required className={field} dir="ltr" />
          </label>
          <label className="block sm:col-span-2">
            <span className={label}>{a.title}</span>
            <input name="title" required className={field} />
          </label>
          <label className="block">
            <span className={label}>{a.period}</span>
            <input name="period" className={field} placeholder="2026-09" dir="ltr" />
          </label>
          <label className="block sm:col-span-5">
            <span className={label}>{a.file}</span>
            <input name="file" type="file" accept="application/pdf,.pdf,.csv,.xlsx" required className="block w-full text-[14px]" />
          </label>
          <div className="flex items-end">
            <button type="submit" disabled={busy} className={`${btn} w-full`}>
              {a.upload}
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
}
