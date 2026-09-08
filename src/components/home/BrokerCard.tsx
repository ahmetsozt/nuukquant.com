import Link from "next/link";
import Badge from "@/components/ui/Badge";
import BrokerLogo from "@/components/ui/BrokerLogo";
import Button from "@/components/ui/Button";
import Fill from "@/components/ui/Fill";
import Icon from "@/components/ui/Icon";
import type { Broker, SiteContent } from "@/content/en";

/** Link to the broker's own landing page under /brokers/{slug}/. */
export function brokerHref(c: SiteContent, b: Broker) {
  return `${c.nav[1].href}${b.slug}/`;
}

export function BrokerCardCompact({ b, c }: { b: Broker; c: SiteContent }) {
  const L = c.brokers.cardLabels;
  return (
    <article className="rv group flex flex-col overflow-hidden rounded-card bg-white shadow-card ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-hover">
      <div className="relative flex h-28 items-center justify-center bg-fog">
        <BrokerLogo slug={b.slug} name={b.name} className="h-12 scale-125" />
        <div className="absolute top-4 end-4">
          <Badge status={b.status} c={c} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-[20px] leading-snug">
          <Fill text={b.name} />
        </h3>
        <p className="mt-1 text-[14px] text-body">
          <Fill text={b.tagline} />
        </p>
        <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-[13px]">
          <div>
            <dt className="text-muted">{L.regulator}</dt>
            <dd className="font-semibold text-ink">
              <Fill text={b.regulator} />
            </dd>
          </div>
          <div>
            <dt className="text-muted">{L.minDeposit}</dt>
            <dd className="num font-semibold text-ink">
              <Fill text={b.minDeposit} />
            </dd>
          </div>
          <div>
            <dt className="text-muted">EUR/USD</dt>
            <dd className="num font-semibold text-ink">
              <Fill text={b.spreads[0]?.value ?? ""} />
            </dd>
          </div>
          <div>
            <dt className="text-muted">{L.withdrawal}</dt>
            <dd className="font-semibold text-ink">
              <Fill text={b.withdrawalTime} />
            </dd>
          </div>
        </dl>
        <p className="mt-4 text-[13px] text-body">
          <span className="text-muted">{L.bestFor}: </span>
          <Fill text={b.bestFor} />
        </p>
        <div className="mt-6 flex items-center gap-4">
          <Button href={b.referralHref} size="sm" event="broker_cta_click" eventLabel={b.slug}>
            {c.ui.openAccount}
          </Button>
          <Link href={brokerHref(c, b)} className="inline-flex items-center gap-1 text-[13.5px] font-semibold text-ink hover:text-primary">
            {L.profile} <Icon name="arrow-up-right" size={13} />
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
    <article id={b.slug} className="rv scroll-mt-24 overflow-hidden rounded-card bg-white shadow-card ring-1 ring-black/5">
      <div className="grid lg:grid-cols-12">
        <div className="border-b border-black/5 p-6 lg:col-span-4 lg:border-e lg:border-b-0 lg:p-8">
          <div className="flex items-center justify-between">
            <BrokerLogo slug={b.slug} name={b.name} />
            <Badge status={b.status} c={c} />
          </div>
          <h3 className="mt-5 text-[26px] leading-tight">
            <Fill text={b.name} />
          </h3>
          <p className="mt-2 text-[14.5px] text-body">
            <Fill text={b.tagline} />
          </p>
          <p className="mt-4 text-[13.5px] text-body">
            <span className="text-muted">{L.bestFor}: </span>
            <Fill text={b.bestFor} />
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button href={b.referralHref} event="broker_cta_click" eventLabel={b.slug}>
              {c.ui.openAccount}
            </Button>
            <Link href={brokerHref(c, b)} className="inline-flex items-center gap-1 text-[14px] font-semibold text-ink hover:text-primary">
              {L.profile} <Icon name="arrow-up-right" size={14} />
            </Link>
          </div>
          <p className="mt-4 text-[11.5px] leading-5 text-muted">{c.brokers.disclosure}</p>
        </div>
        <div className="grid gap-8 p-6 lg:col-span-8 lg:grid-cols-2 lg:p-8">
          <div>
            <dl className="divide-y divide-black/5 text-[13.5px]">
              {rows.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 py-2.5">
                  <dt className="text-muted">{k}</dt>
                  <dd className="text-end font-medium text-ink">
                    <Fill text={v} />
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-[12px] font-semibold tracking-wide text-muted uppercase">{L.spreads}</p>
            <ul className="mt-2 grid grid-cols-3 gap-2">
              {b.spreads.map((s) => (
                <li key={s.pair} className="rounded-2xl bg-fog px-3 py-2.5">
                  <p className="text-[11.5px] text-muted">{s.pair}</p>
                  <p className="num text-[15px] font-bold text-ink">
                    <Fill text={s.value} />
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[12px] font-semibold tracking-wide text-muted uppercase">{L.pros}</p>
            <ul className="mt-2 space-y-1.5 text-[13.5px] text-body">
              {b.pros.map((p, i) => (
                <li key={i} className="flex gap-2">
                  <Icon name="check" size={16} className="mt-0.5 flex-none text-primary" />
                  <Fill text={p} />
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[12px] font-semibold tracking-wide text-muted uppercase">{L.cons}</p>
            <ul className="mt-2 space-y-1.5 text-[13.5px] text-body">
              {b.cons.map((p, i) => (
                <li key={i} className="flex gap-2">
                  <Icon name="warning" size={16} className="mt-0.5 flex-none text-beige" />
                  <Fill text={p} />
                </li>
              ))}
            </ul>
            <details className="group mt-6 rounded-2xl bg-fog">
              <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-[13.5px] font-semibold text-ink">
                {L.steps}
                <Icon name="chevron" size={16} className="transition-transform group-open:rotate-180" />
              </summary>
              <ol className="space-y-2 px-4 pb-4 text-[13.5px] text-body">
                {b.steps.map((s, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex size-6 flex-none items-center justify-center rounded-full bg-primary text-[11px] font-bold text-white">{i + 1}</span>
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
