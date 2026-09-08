import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import CtaBand from "@/components/sections/CtaBand";
import SectionHead from "@/components/ui/SectionHead";
import Fill from "@/components/ui/Fill";
import Badge from "@/components/ui/Badge";
import BrokerLogo from "@/components/ui/BrokerLogo";
import { BrokerCardFull } from "@/components/home/BrokerCard";
import { resolve, type LocaleParams } from "@/lib/page";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { c } = await resolve(params);
  return { title: c.brokers.metaTitle, description: c.brokers.metaDescription };
}

export default async function BrokersPage({ params }: { params: LocaleParams }) {
  const { c } = await resolve(params);
  const p = c.brokers;
  const L = p.cardLabels;
  const cols: [string, (b: (typeof p.list)[number]) => string][] = [
    [L.regulator, (b) => b.regulator],
    [L.minDeposit, (b) => b.minDeposit],
    ["EUR/USD", (b) => b.spreads[0]?.value ?? ""],
    ["XAU/USD", (b) => b.spreads[1]?.value ?? ""],
    [L.commission, (b) => b.commission],
    [L.leverage, (b) => b.leverage],
    [L.platforms, (b) => b.platforms.join(", ")],
    [L.withdrawal, (b) => b.withdrawalTime],
    [L.islamic, (b) => (b.islamic ? L.yes : L.no)],
  ];
  return (
    <>
      <PageIntro kicker={p.kicker} title={p.title} body={p.lead}>
        <p className="mt-8 max-w-[720px] rounded-md bg-white p-4 text-[13px] leading-5 text-body ring-1 ring-black/5">{p.disclosure}</p>
      </PageIntro>

      <section className="section-pad">
        <div className="container-x">
          <SectionHead title={p.compareTitle} />
          <div className="mt-8 overflow-x-auto rounded-xl ring-1 ring-black/5 scroll-row">
            <table className="w-full min-w-[820px] border-collapse text-[13.5px]">
              <thead>
                <tr className="bg-paper text-start">
                  <th className="px-4 py-3 text-start font-medium text-muted"></th>
                  {p.list.map((b) => (
                    <th key={b.slug} className="px-4 py-3 text-start font-medium">
                      <div className="flex items-center gap-3">
                        <BrokerLogo slug={b.slug} name={b.name} />
                        <div>
                          <a href={`#${b.slug}`} className="text-ink hover:text-primary">
                            <Fill text={b.name} />
                          </a>
                          <div className="mt-1">
                            <Badge status={b.status} c={c} />
                          </div>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {cols.map(([label, get]) => (
                  <tr key={label}>
                    <th className="px-4 py-3 text-start font-normal text-muted">{label}</th>
                    {p.list.map((b) => (
                      <td key={b.slug} className="num px-4 py-3 text-ink">
                        <Fill text={get(b)} />
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <th className="px-4 py-3"></th>
                  {p.list.map((b) => (
                    <td key={b.slug} className="px-4 py-3">
                      <a href={b.referralHref} className="inline-flex rounded-md bg-primary px-4 py-2 text-[13px] font-medium text-white hover:bg-primary-dark">
                        {c.ui.openAccount}
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 lg:py-24">
        <div className="container-x space-y-8">
          {p.list.map((b) => (
            <BrokerCardFull key={b.slug} b={b} c={c} />
          ))}
        </div>
      </section>
      <CtaBand c={c} />
    </>
  );
}
