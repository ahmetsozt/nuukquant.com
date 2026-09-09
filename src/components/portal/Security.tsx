"use client";

import { useEffect, useState, type FormEvent } from "react";
import { supabase } from "@/lib/supabase";
import type { SiteContent } from "@/content/en";
import { Card, Notice, btn, btnOutline, field, label } from "@/components/portal/ui";

type T = SiteContent["portal"]["security"];
type Factor = { id: string; friendly_name?: string; factor_type: string; status: string };

/** Two-step verification (TOTP) enrolment and management for the signed-in user. */
export default function Security({ t }: { t: T }) {
  const [factors, setFactors] = useState<Factor[]>([]);
  const [enrol, setEnrol] = useState<{ id: string; qr: string; secret: string } | null>(null);
  const [msg, setMsg] = useState<{ tone: "ok" | "error"; text: string } | null>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    supabase()
      .auth.mfa.listFactors()
      .then(({ data }) => data && setFactors((data.totp as Factor[]) ?? []));
  }, [tick]);

  async function start() {
    setMsg(null);
    const { data, error } = await supabase().auth.mfa.enroll({ factorType: "totp", friendlyName: "NUUK portal" });
    if (error || !data) return setMsg({ tone: "error", text: error?.message ?? t.error });
    setEnrol({ id: data.id, qr: data.totp.qr_code, secret: data.totp.secret });
  }
  async function confirm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!enrol) return;
    const code = String(new FormData(e.currentTarget).get("code") ?? "").trim();
    const sb = supabase();
    const { data: ch, error: e1 } = await sb.auth.mfa.challenge({ factorId: enrol.id });
    if (e1 || !ch) return setMsg({ tone: "error", text: e1?.message ?? t.error });
    const { error: e2 } = await sb.auth.mfa.verify({ factorId: enrol.id, challengeId: ch.id, code });
    if (e2) return setMsg({ tone: "error", text: e2.message });
    setEnrol(null);
    setMsg({ tone: "ok", text: t.enabled });
    setTick((n) => n + 1);
  }
  async function remove(id: string) {
    const { error } = await supabase().auth.mfa.unenroll({ factorId: id });
    setMsg(error ? { tone: "error", text: error.message } : { tone: "ok", text: t.disabled });
    setTick((n) => n + 1);
  }

  const [pwMsg, setPwMsg] = useState<{ tone: "ok" | "error"; text: string } | null>(null);
  async function setPassword(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const pw = String(d.get("password") ?? "");
    if (pw.length < 8 || pw !== String(d.get("confirm") ?? "")) return setPwMsg({ tone: "error", text: t.passwordRule });
    const { error } = await supabase().auth.updateUser({ password: pw });
    setPwMsg(error ? { tone: "error", text: error.message } : { tone: "ok", text: t.passwordSaved });
    if (!error) e.currentTarget.reset();
  }

  const active = factors.filter((f) => f.status === "verified");
  return (
    <div className="space-y-6">
    <Card title={t.passwordTitle}>
      <p className="text-[14.5px] leading-6 text-body">{t.passwordLead}</p>
      <form onSubmit={setPassword} className="mt-5 grid gap-3 sm:grid-cols-3">
        <label className="block">
          <span className={label}>{t.newPassword}</span>
          <input name="password" type="password" autoComplete="new-password" required minLength={8} className={field} dir="ltr" />
        </label>
        <label className="block">
          <span className={label}>{t.confirmPassword}</span>
          <input name="confirm" type="password" autoComplete="new-password" required minLength={8} className={field} dir="ltr" />
        </label>
        <div className="flex items-end">
          <button type="submit" className={btn}>{t.savePassword}</button>
        </div>
        {pwMsg && <div className="sm:col-span-3"><Notice tone={pwMsg.tone}>{pwMsg.text}</Notice></div>}
      </form>
    </Card>
    <Card title={t.title}>
      <p className="text-[14.5px] leading-6 text-body">{t.lead}</p>
      {msg && <div className="mt-4"><Notice tone={msg.tone}>{msg.text}</Notice></div>}
      {active.length > 0 ? (
        <ul className="mt-5 divide-y divide-black/5">
          {active.map((f) => (
            <li key={f.id} className="flex items-center justify-between py-3">
              <span className="text-[14.5px] font-semibold text-ink">{f.friendly_name || "TOTP"} · {t.active}</span>
              <button type="button" onClick={() => remove(f.id)} className="text-[13px] font-semibold text-down hover:underline">
                {t.remove}
              </button>
            </li>
          ))}
        </ul>
      ) : enrol ? (
        <form onSubmit={confirm} className="mt-5 grid gap-5 sm:grid-cols-[200px_1fr]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={enrol.qr} alt="QR" width={200} height={200} className="rounded-2xl border border-black/10 bg-white p-2" />
          <div>
            <p className="text-[14px] leading-6 text-body">{t.scan}</p>
            <p className="mt-2 break-all rounded-xl bg-fog px-3 py-2 font-mono text-[12.5px] text-ink" dir="ltr">{enrol.secret}</p>
            <label className="mt-4 block">
              <span className={label}>{t.code}</span>
              <input name="code" inputMode="numeric" autoComplete="one-time-code" required className={`${field} max-w-[200px] tracking-[0.3em]`} dir="ltr" />
            </label>
            <div className="mt-4 flex gap-3">
              <button type="submit" className={btn}>{t.confirm}</button>
              <button type="button" onClick={() => setEnrol(null)} className={btnOutline}>{t.cancel}</button>
            </div>
          </div>
        </form>
      ) : (
        <button type="button" onClick={start} className={`${btn} mt-5`}>
          {t.enable}
        </button>
      )}
    </Card>
    </div>
  );
}

/** Shown after password/link sign-in when the account has a verified TOTP factor. */
export function MfaChallenge({ t, onDone }: { t: T; onDone: () => void }) {
  const [error, setError] = useState<string | null>(null);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const code = String(new FormData(e.currentTarget).get("code") ?? "").trim();
    const sb = supabase();
    const { data } = await sb.auth.mfa.listFactors();
    const factor = data?.totp?.find((f) => f.status === "verified");
    if (!factor) return onDone();
    const { data: ch, error: e1 } = await sb.auth.mfa.challenge({ factorId: factor.id });
    if (e1 || !ch) return setError(e1?.message ?? t.error);
    const { error: e2 } = await sb.auth.mfa.verify({ factorId: factor.id, challengeId: ch.id, code });
    if (e2) return setError(e2.message);
    onDone();
  }
  return (
    <div className="mx-auto max-w-[420px]">
      <Card title={t.challengeTitle}>
        <p className="text-[14px] leading-6 text-body">{t.challengeLead}</p>
        <form onSubmit={submit} className="mt-4 space-y-4">
          <label className="block">
            <span className={label}>{t.code}</span>
            <input name="code" inputMode="numeric" autoComplete="one-time-code" required autoFocus className={`${field} tracking-[0.3em]`} dir="ltr" />
          </label>
          {error && <Notice tone="error">{error}</Notice>}
          <button type="submit" className={btn}>{t.confirm}</button>
        </form>
      </Card>
    </div>
  );
}
