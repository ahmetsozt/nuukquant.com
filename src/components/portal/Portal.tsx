"use client";

import { useEffect, useState, type FormEvent } from "react";
import type { Session } from "@supabase/supabase-js";
import { portalConfigured, supabase, type Entitlement, type Panel, type Profile } from "@/lib/supabase";
import type { SiteContent } from "@/content/en";
import { EducationPanel, PnlPanel, ReportsPanel, SignalsPanel } from "@/components/portal/panels";
import AdminPanel from "@/components/portal/AdminPanel";
import AdminMemberships from "@/components/portal/AdminMemberships";
import { Card, Notice, btn, btnOutline, field, label } from "@/components/portal/ui";

type T = SiteContent["portal"];

const PANEL_VIEWS: Record<string, (t: T, p: Panel) => React.ReactNode> = {
  signals: (t, p) => <SignalsPanel t={t} link={p} />,
  "daily-pnl": (t, p) => <PnlPanel t={t} link={p} />,
  reports: (t, p) => <ReportsPanel t={t} link={p} />,
  education: (t, p) => <EducationPanel t={t} link={p} />,
  research: (t, p) => <EducationPanel t={t} link={p} slug="research" />,
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function Portal({ c }: { c: SiteContent }) {
  const t = c.portal;
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [panels, setPanels] = useState<Panel[]>([]);
  const [ents, setEnts] = useState<Entitlement[]>([]);
  const [tab, setTab] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!portalConfigured) return;
    const sb = supabase();
    sb.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setReady(true);
    });
    const { data: sub } = sb.auth.onAuthStateChange((_e, s) => {
      setSession(s);
      if (!s) {
        setProfile(null);
        setEnts([]);
        setTab("");
      }
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) return;
    const sb = supabase();
    Promise.all([
      sb.from("profiles").select("*").eq("id", session.user.id).single(),
      sb.from("panels").select("*").order("sort"),
      sb.from("entitlements").select("panel_slug, ends_at"),
    ]).then(([p, pa, en]) => {
      if (p.data) setProfile(p.data as Profile);
      setPanels((pa.data as Panel[]) ?? []);
      setEnts((en.data as Entitlement[]) ?? []);
    });
  }, [session]);

  const isAdmin = profile?.role === "admin";
  const active = new Set(ents.filter((e) => !e.ends_at || new Date(e.ends_at) > new Date()).map((e) => e.panel_slug));
  const visible = panels.filter((p) => isAdmin || active.has(p.slug));
  const current = tab || (isAdmin ? "memberships" : visible[0]?.slug || "");

  if (!portalConfigured) return <Notice>{t.notConfigured}</Notice>;
  if (!ready) return <p className="text-muted">…</p>;
  if (!session) return <Login t={t} />;

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <aside className="lg:col-span-3">
        <div className="rounded-card bg-white p-5 shadow-card">
          <p className="text-[12px] text-muted">{t.welcome}</p>
          <p className="truncate text-[15px] font-bold text-ink" dir="ltr">
            {profile?.full_name || session.user.email}
          </p>
          <nav className="mt-5 flex flex-col gap-1" aria-label={t.kicker}>
            {visible.map((p) => (
              <button key={p.slug} type="button" onClick={() => setTab(p.slug)} className={`rounded-xl px-3 py-2.5 text-start text-[14px] font-semibold ${current === p.slug ? "bg-ink text-white" : "text-body hover:bg-fog"}`}>
                {t.panelNames[p.slug as keyof T["panelNames"]] ?? p.name}
              </button>
            ))}
            {isAdmin && (
              <>
                <p className="mt-3 px-3 text-[11px] font-semibold uppercase tracking-wide text-muted">{t.admin.title}</p>
                <button type="button" onClick={() => setTab("memberships")} className={`rounded-xl px-3 py-2.5 text-start text-[14px] font-semibold ${current === "memberships" ? "bg-primary text-white" : "text-primary hover:bg-tint"}`}>
                  {t.admin.memberships}
                </button>
                <button type="button" onClick={() => setTab("admin")} className={`rounded-xl px-3 py-2.5 text-start text-[14px] font-semibold ${current === "admin" ? "bg-primary text-white" : "text-primary hover:bg-tint"}`}>
                  {t.admin.content}
                </button>
              </>
            )}
          </nav>
          <button
            type="button"
            onClick={async () => {
              await supabase().auth.signOut();
              setTab("");
            }}
            className="mt-6 text-[13px] font-semibold text-muted hover:text-ink"
          >
            {t.signOut}
          </button>
        </div>
      </aside>
      <div className="lg:col-span-9">
        {error && <Notice tone="error">{error}</Notice>}
        {current === "memberships" && isAdmin ? (
          <AdminMemberships t={t} />
        ) : current === "admin" && isAdmin ? (
          <AdminPanel t={t} panels={panels} />
        ) : current && PANEL_VIEWS[current] ? (
          PANEL_VIEWS[current](t, panels.find((p) => p.slug === current) ?? { slug: current, name: current, description: null, sort: 0 })
        ) : (
          <Card title={t.noPanelsTitle}>
            <p className="text-[15px] leading-7 text-body">{t.noPanels}</p>
            <a href={t.subscribe.href} className={`${btn} mt-5`} onClick={() => setError(null)}>
              {t.subscribe.label}
            </a>
          </Card>
        )}
      </div>
    </div>
  );
}

function Login({ t }: { t: T }) {
  const [mode, setMode] = useState<"link" | "password">("link");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ tone: "ok" | "error"; text: string } | null>(null);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const email = String(d.get("email") ?? "").trim();
    const password = String(d.get("password") ?? "");
    setBusy(true);
    setMsg(null);
    const sb = supabase();
    const { error } =
      mode === "link"
        ? await sb.auth.signInWithOtp({ email, options: { emailRedirectTo: window.location.href, shouldCreateUser: false } })
        : await sb.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) return setMsg({ tone: "error", text: error.message });
    window.gtag?.("event", "portal_login", { event_label: mode });
    if (mode === "link") setMsg({ tone: "ok", text: t.linkSent });
  }

  return (
    <div className="mx-auto max-w-[480px]">
      <Card title={t.signIn}>
        <p className="text-[14px] leading-6 text-body">{t.signInLead}</p>
        <form onSubmit={submit} className="mt-5 space-y-4">
          <label className="block">
            <span className={label}>{t.email}</span>
            <input name="email" type="email" required autoComplete="email" className={field} dir="ltr" />
          </label>
          {mode === "password" && (
            <label className="block">
              <span className={label}>{t.password}</span>
              <input name="password" type="password" required autoComplete="current-password" className={field} dir="ltr" />
            </label>
          )}
          {msg && <Notice tone={msg.tone}>{msg.text}</Notice>}
          <div className="flex flex-wrap items-center gap-3">
            <button type="submit" disabled={busy} className={btn}>
              {mode === "link" ? t.sendLink : t.signInPassword}
            </button>
            <button type="button" onClick={() => setMode(mode === "link" ? "password" : "link")} className={btnOutline}>
              {mode === "link" ? t.usePassword : t.useLink}
            </button>
          </div>
        </form>
        <p className="mt-5 text-[12.5px] leading-5 text-muted">{t.inviteOnly}</p>
      </Card>
    </div>
  );
}
