"use client";

import Link from "next/link";
import { useEffect, useId, useState, useSyncExternalStore } from "react";
import type { SiteContent } from "@/content/en";
import { buttonClass } from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { hubCall, type PaymentInfo } from "@/lib/membership";

type Copy = SiteContent["membership"];
const KEY_STORE = "nuuk-pay-key";

/**
 * Reads the private ?k= once, keeps it in sessionStorage and removes it from the
 * address bar, so analytics, history and shared links never carry it.
 */
let takenKey: string | null | undefined;
function takeKeyOnce(): string | null {
  if (takenKey === undefined) takenKey = takeKey();
  return takenKey;
}
const subscribeNever = () => () => {};

function takeKey(): string | null {
  const url = new URL(window.location.href);
  const fromUrl = url.searchParams.get("k");
  if (fromUrl) {
    try {
      sessionStorage.setItem(KEY_STORE, fromUrl);
    } catch {}
    url.searchParams.delete("k");
    window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}${url.hash}`);
    return fromUrl;
  }
  try {
    return sessionStorage.getItem(KEY_STORE);
  } catch {
    return null;
  }
}

const svgDataUrl = (svg: string) => `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

function CopyButton({ text, label, done }: { text: string; label: string; done: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 2000);
        } catch {}
      }}
      className={`${buttonClass("outline-dark", "sm")} gap-2`}
    >
      <Icon name={copied ? "check" : "send"} size={15} />
      <span aria-live="polite">{copied ? done : label}</span>
    </button>
  );
}

type Load = { state: "loading" } | { state: "invalid" } | { state: "error" } | { state: "ready"; info: PaymentInfo };

export default function PaymentView({ m, hub, membershipHref }: { m: Copy; hub: string | null; membershipHref: string }) {
  const p = m.payment;
  const id = useId();
  const key = useSyncExternalStore(subscribeNever, takeKeyOnce, () => null);
  const hydrated = useSyncExternalStore(subscribeNever, () => true, () => false);
  const [fetched, setFetched] = useState<Load>({ state: "loading" });
  const [network, setNetwork] = useState("");
  const [tx, setTx] = useState("");
  const [txState, setTxState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [txError, setTxError] = useState<string | null>(null);

  useEffect(() => {
    if (!key || !hub) return;
    let live = true;
    void hubCall<PaymentInfo>(`${hub}/v1/membership/payment?k=${encodeURIComponent(key)}`).then((res) => {
      if (!live) return;
      if (res.ok) {
        setFetched({ state: "ready", info: res.data });
        setNetwork(res.data.payNetwork ?? res.data.wallets[0]?.network ?? "");
      } else setFetched({ state: res.status === 404 || res.status === 400 ? "invalid" : "error" });
    });
    return () => {
      live = false;
    };
  }, [key, hub]);

  const load: Load = !hydrated ? { state: "loading" } : !key ? { state: "invalid" } : !hub ? { state: "error" } : fetched;
  const setLoad = setFetched;

  const reportTx = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!hub || !key) return;
    const hash = tx.trim();
    if (!/^(0x)?[A-Za-z0-9]{40,100}$/.test(hash) || !network) {
      setTxState("error");
      setTxError(p.txError);
      return;
    }
    setTxState("sending");
    setTxError(null);
    const res = await hubCall<PaymentInfo>(`${hub}/v1/membership/payment/tx`, { method: "POST", body: JSON.stringify({ k: key, network, txHash: hash }) });
    if (res.ok) {
      setLoad({ state: "ready", info: res.data });
      setTxState("sent");
    } else {
      setTxState("error");
      setTxError(res.error ?? p.txError);
    }
  };

  if (load.state === "loading") {
    return <p className="rounded-card bg-white p-8 text-[15px] text-body shadow-card">{p.loading}</p>;
  }
  if (load.state !== "ready") {
    return (
      <div className="rounded-card bg-white p-8 shadow-card">
        <p className="text-[15.5px] leading-6 text-ink">{load.state === "invalid" ? p.invalid : m.form.errors.network}</p>
        <Link href={membershipHref} className={`${buttonClass("outline-dark")} mt-6`}>
          {p.back}
        </Link>
      </div>
    );
  }

  const info = load.info;
  const price = String(info.priceUsd);
  const reported = info.status === "payment_submitted";
  const paid = info.status === "paid";
  const closed = info.status === "rejected" || info.status === "cancelled";

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="space-y-6 lg:col-span-7">
        <div className="rounded-card bg-ink p-7 text-white">
          <p className="flex items-center gap-2 text-[14px] font-semibold text-cyan">
            <Icon name="shield" size={16} />
            {p.cryptoOnly}
          </p>
          <dl className="mt-6 grid gap-5 sm:grid-cols-3">
            <div>
              <dt className="text-[12px] tracking-wider text-soft/70 uppercase">{p.amount}</dt>
              <dd className="num mt-1 text-[30px] font-bold">{p.amountValue.replace("{price}", price)}</dd>
            </div>
            <div>
              <dt className="text-[12px] tracking-wider text-soft/70 uppercase">{p.ref}</dt>
              <dd className="num mt-1 text-[20px] font-bold">{info.ref}</dd>
            </div>
            <div>
              <dt className="text-[12px] tracking-wider text-soft/70 uppercase">{p.status}</dt>
              <dd className={`mt-1 text-[15px] font-semibold ${paid ? "text-up" : reported ? "text-cyan" : "text-white"}`}>{p.statuses[info.status as keyof typeof p.statuses] ?? info.status}</dd>
            </div>
          </dl>
          <p className="mt-5 text-[13.5px] leading-5 text-soft">{p.amountHint.replace("{price}", price)}</p>
        </div>

        {paid ? (
          <p className="rounded-card bg-white p-7 text-[15.5px] leading-6 text-ink shadow-card">{p.paidBody.replace("{email}", p.paidEmailNote)}</p>
        ) : closed ? (
          <p className="rounded-card bg-white p-7 text-[15.5px] leading-6 text-ink shadow-card">{p.invalid}</p>
        ) : (
          <section aria-labelledby={`${id}-wallets`} className="rounded-card bg-white p-7 shadow-card">
            <h2 id={`${id}-wallets`} className="text-[20px]">
              {p.walletsTitle}
            </h2>
            {info.wallets.length === 0 ? (
              <p className="mt-4 text-[15px] leading-6 text-body">{p.noWallet}</p>
            ) : (
              <ul className="mt-5 space-y-5">
                {info.wallets.map((w) => (
                  <li key={`${w.asset}-${w.network}`} className="grid gap-4 rounded-card-sm bg-fog p-5 sm:grid-cols-[148px_1fr] sm:items-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={svgDataUrl(w.qrSvg)} alt={p.qrAlt.replace("{network}", w.network)} width={148} height={148} className="rounded-xl bg-white p-2" />
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold tracking-wider text-primary uppercase">
                        {w.asset} · {p.network}: {w.network}
                      </p>
                      <p className="num mt-2 text-[14.5px] leading-6 break-all text-ink select-all">{w.address}</p>
                      <div className="mt-3">
                        <CopyButton text={w.address} label={p.copy} done={p.copied} />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <ul className="mt-6 space-y-2 text-[13.5px] leading-5 text-body">
              {p.warnings.map((wn) => (
                <li key={wn} className="flex gap-2">
                  <Icon name="warning" size={16} className="mt-0.5 flex-none text-beige" />
                  {wn}
                </li>
              ))}
              <li className="flex gap-2">
                <Icon name="warning" size={16} className="mt-0.5 flex-none text-beige" />
                {m.custodyNote}
              </li>
            </ul>
          </section>
        )}
      </div>

      <aside className="lg:col-span-5">
        {!paid && !closed && info.wallets.length > 0 && (
          <form onSubmit={reportTx} noValidate className="rounded-card bg-white p-7 shadow-card" aria-labelledby={`${id}-tx`}>
            <h2 id={`${id}-tx`} className="text-[20px]">
              {p.txTitle}
            </h2>
            <p className="mt-3 text-[14px] leading-6 text-body">{p.txLead}</p>
            {reported || txState === "sent" ? (
              <p role="status" className="mt-5 rounded-xl bg-tint px-4 py-3 text-[14px] leading-6 text-ink">
                {p.txSent}
                {info.txHash && <span className="num mt-1 block text-[12.5px] break-all text-body">{info.payNetwork} · {info.txHash}</span>}
              </p>
            ) : null}
            <label htmlFor={`${id}-net`} className="mt-5 mb-1.5 block text-[14px] font-semibold text-ink">
              {p.txNetwork}
            </label>
            <select id={`${id}-net`} value={network} onChange={(e) => setNetwork(e.target.value)} className="w-full rounded-xl border-[1.5px] border-line bg-white px-4 py-3 text-[16px] text-ink outline-none focus:border-primary">
              {info.wallets.map((w) => (
                <option key={w.network} value={w.network}>
                  {w.asset} · {w.network}
                </option>
              ))}
            </select>
            <label htmlFor={`${id}-hash`} className="mt-4 mb-1.5 block text-[14px] font-semibold text-ink">
              {p.txHash}
            </label>
            <input
              id={`${id}-hash`}
              value={tx}
              onChange={(e) => setTx(e.target.value)}
              placeholder={p.txHashPh}
              autoComplete="off"
              autoCapitalize="none"
              spellCheck={false}
              maxLength={110}
              aria-invalid={txState === "error"}
              className="num w-full rounded-xl border-[1.5px] border-line bg-white px-4 py-3 text-[15px] text-ink outline-none focus:border-primary"
            />
            {txError && (
              <p role="alert" className="mt-2 text-[13px] font-semibold text-down">
                {txError}
              </p>
            )}
            <button type="submit" disabled={txState === "sending"} className={`${buttonClass("primary")} mt-5 w-full disabled:cursor-wait disabled:opacity-60`} data-event="membership_tx_submit">
              {txState === "sending" ? p.txSending : p.txSubmit}
            </button>
          </form>
        )}
        <p className="mt-5 px-1 text-[13px] leading-5 text-body">{p.help}</p>
        <Link href={membershipHref} className="mt-3 inline-flex px-1 text-[14px] font-semibold text-primary hover:underline">
          ← {p.back}
        </Link>
      </aside>
    </div>
  );
}
