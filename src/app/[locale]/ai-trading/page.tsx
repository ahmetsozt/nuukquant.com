import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import CtaBand from "@/components/sections/CtaBand";
import SectionHead from "@/components/ui/SectionHead";
import Fill from "@/components/ui/Fill";
import SystemCard from "@/components/home/SystemCard";
import { resolve, type LocaleParams } from "@/lib/page";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { c } = await resolve(params);
  return { title: c.aiTrading.metaTitle, description: c.aiTrading.metaDescription };
}

export default async function AiTradingPage({ params }: { params: LocaleParams }) {
  const { c } = await resolve(params);
  const p = c.aiTrading;
  return (
    <>
      <PageIntro tone="dark" kicker={p.kicker} title={p.title} body={p.lead} cta={p.cta} />
      <section className="bg-hero pb-20 text-white lg:pb-24">
        <div className="container-x">
          <h2 className="sr-only">{p.systemsTitle}</h2>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {c.systems.map((s) => (
              <SystemCard key={s.slug} s={s} c={c} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <SectionHead title={p.methodTitle} />
          <ol className="mt-10 grid gap-px overflow-hidden rounded-xl bg-black/5 ring-1 ring-black/5 md:grid-cols-5">
            {p.method.map((m) => (
              <li key={m.step} className="rv bg-white p-6">
                <p className="num text-[12px] text-primary">{m.step}</p>
                <h3 className="mt-3 text-[18px]">{m.title}</h3>
                <p className="mt-2 text-[14px] leading-6 text-body">{m.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-paper py-20 lg:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHead title={p.faqTitle} />
          </div>
          <div className="divide-y divide-black/10 lg:col-span-8">
            {p.faq.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-[17px] text-ink">
                  {f.q}
                  <span className="text-muted transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-[15px] leading-6 text-body">
                  <Fill text={f.a} />
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <CtaBand c={c} />
    </>
  );
}
