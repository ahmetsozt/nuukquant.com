import Link from "next/link";
import Badge from "@/components/ui/Badge";
import BrokerLogo from "@/components/ui/BrokerLogo";
import Button from "@/components/ui/Button";
import Fill from "@/components/ui/Fill";
import Icon from "@/components/ui/Icon";
import type { Broker, SiteContent } from "@/content/en";

export function BrokerCardCompact({ b, c }: { b: Broker; c: SiteContent }) {
  const L = c.brokers.cardLabels;
  return (
    <article className="rv group flex flex-col overflow-hidden rounded-xl bg-white ring-1 ring-black/5 shadow-card transition hover:-translate-y-0.5 hover:shadow-hover">
      <div className="relative flex h-24 items-center justify-center bg-paper">
        <BrokerLogo slug={b.slug} name={b.name} className="h-12 scale-125" />
        <div className="absolute top-3 end-3">
          <Badge status={b.status} c={c} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
      <h3 className="text-[19px] leading-snug">
        <Fill text={b.name} />
      </h3>
      <p className="mt-1 text-[14px] text-body">
        <Fill text={b.tagline} />
      </p>
      <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-[13px]">
        <div>
          <dt className="text-muted">{L.regulator}</dt>
          <dd className="text-ink">
            <Fill text={b.regulator} />
          </dd>
        </div>
        <div>
          <dt className="text-muted">{L.minDeposit}</dt>
          <dd className="num text-ink">
            <Fill text={b.minDeposit} />
          </dd>
        </div>
        <div>
          <dt className="text-muted">EUR/USD</dt>
          <dd className="num text-ink">
            <Fill text={b.spreads[0]?.value ?? ""} />
          </dd>
        </div>
        <div>
          <dt className="text-muted">{L.withdrawal}</dt>
          <dd className="text-ink">
            <Fill text={b.withdrawalTime} />
          </dd>
        </div>
      </dl>
      <p className="mt-4 text-[13px] text-body">
        <span className="text-muted">{L.bestFor}: </span>
        <Fill text={b.bestFor} />
      </p>
      <div className="mt-5 flex items-center gap-3">
        <Button href={b.referralHref} className="py-3">
          {c.ui.openAccount}
        </Button>
        <Link href={`${c.nav[1].href}#${b.slug}`} className="inline-flex items-center gap-1 text-[13px] text-body hover:text-ink">
          {c.ui.learnMore} <Icon name="arrow-up-right" size={13} />
        </Link>
      </div>
      </div>
    </article>
  );
}

export function BrokerCardFull({ b, c }: { b: Broker; c: SiteContent }) {
  const L = c.brokers.cardLabels;
  const rows: [string, string][] = [
    [L.regulator, `${b.regulator} · ${L.licence} ${b.licence}`],
    [L.founded, b.founded],
    [L.minDeposit, b.minDeposit],
    [L.platforms, b.platforms.join(" · ")],
    [L.commission, b.commission],
    [L.leverage, b.leverage],
    [L.funding, b.funding.join(" · ")],
    [L.withdrawal, b.withdrawalTime],
    [L.islamic, b.islamic ? L.yes : L.no],
    [L.languages, b.languages],
  ];
  return (
    <article id={b.slug} className="rv scroll-mt-24 overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-card">
      <div className="grid lg:grid-cols-12">
        <div className="border-b border-black/5 p-6 lg:col-span-4 lg:border-e lg:border-b-0 lg:p-8">
          <div className="flex items-center justify-between">
            <BrokerLogo slug={b.slug} name={b.name} />
            <Badge status={b.status} c={c} />
          </div>
          <h3 className="mt-5 text-[24px] leading-tight">
            <Fill text={b.name} />
          </h3>
          <p className="mt-2 text-[14.5px] text-body">
            <Fill text={b.tagline} />
          </p>
          <p className="mt-4 text-[13.5px] text-body">
            <span className="text-muted">{L.bestFor}: </span>
            <Fill text={b.bestFor} />
          </p>
          <div className="mt-6">
            <Button href={b.referralHref}>{c.ui.openAccount}</Button>
          </div>
          <p className="mt-4 text-[11.5px] leading-5 text-muted">{c.brokers.disclosure}</p>
        </div>
        <div className="grid gap-8 p-6 lg:col-span-8 lg:grid-cols-2 lg:p-8">
          <div>
            <dl className="divide-y divide-black/5 text-[13.5px]">
              {rows.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 py-2.5">
                  <dt className="text-muted">{k}</dt>
                  <dd className="text-end text-ink">
                    <Fill text={v} />
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-[12px] font-medium tracking-wide text-muted uppercase">{L.spreads}</p>
            <ul className="mt-2 grid grid-cols-3 gap-2">
              {b.spreads.map((s) => (
                <li key={s.pair} className="rounded-md bg-paper px-3 py-2">
                  <p className="text-[11.5px] text-muted">{s.pair}</p>
                  <p className="num text-[15px] text-ink">
                    <Fill text={s.value} />
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[12px] font-medium tracking-wide text-muted uppercase">{L.pros}</p>
            <ul className="mt-2 space-y-1.5 text-[13.5px] text-body">
              {b.pros.map((p, i) => (
                <li key={i} className="flex gap-2">
                  <Icon name="check" size={16} className="mt-0.5 flex-none text-primary" />
                  <Fill text={p} />
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[12px] font-medium tracking-wide text-muted uppercase">{L.cons}</p>
            <ul className="mt-2 space-y-1.5 text-[13.5px] text-body">
              {b.cons.map((p, i) => (
                <li key={i} className="flex gap-2">
                  <Icon name="warning" size={16} className="mt-0.5 flex-none text-beige" />
                  <Fill text={p} />
                </li>
              ))}
            </ul>
            <details className="group mt-6 rounded-md bg-paper">
              <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-[13.5px] font-medium text-ink">
                {L.steps}
                <Icon name="chevron" size={16} className="transition-transform group-open:rotate-180" />
              </summary>
              <ol className="space-y-2 px-4 pb-4 text-[13.5px] text-body">
                {b.steps.map((s, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="num text-muted">{String(i + 1).padStart(2, "0")}</span>
                    <Fill text={s} />
                  </li>
                ))}
              </ol>
            </details>
          </div>
        </div>
      </div>
    </article>
  );
}
