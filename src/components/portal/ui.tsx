import type { ReactNode } from "react";

export const field =
  "w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-[14.5px] text-ink placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";
export const label = "mb-1.5 block text-[12.5px] font-semibold text-ink";
export const btn = "inline-flex items-center justify-center rounded-pill bg-primary px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-primary-dark disabled:cursor-wait disabled:opacity-60";
export const btnOutline = "inline-flex items-center justify-center rounded-pill border border-black/15 px-5 py-2.5 text-[14px] font-semibold text-ink hover:border-primary hover:text-primary";

export function Card({ title, children, action }: { title: string; children: ReactNode; action?: ReactNode }) {
  return (
    <section className="rounded-card bg-white p-6 shadow-card lg:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-[20px] font-bold text-ink">{title}</h2>
        {action}
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export function Notice({ tone = "info", children }: { tone?: "info" | "error" | "ok"; children: ReactNode }) {
  const cls = tone === "error" ? "bg-[#fdecec] text-down" : tone === "ok" ? "bg-[#e6f7f1] text-up" : "bg-tint text-primary-dark";
  return (
    <p role={tone === "error" ? "alert" : "status"} className={`rounded-2xl px-4 py-3 text-[14px] font-medium ${cls}`}>
      {children}
    </p>
  );
}

export function Empty({ children }: { children: ReactNode }) {
  return <p className="rounded-2xl border border-dashed border-black/15 px-4 py-8 text-center text-[14px] text-muted">{children}</p>;
}

export function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

export function fmtMoney(n: number, currency = "USD") {
  return new Intl.NumberFormat(undefined, { style: "currency", currency, maximumFractionDigits: 0 }).format(n);
}
