import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/sections/PageIntro";
import CtaBand from "@/components/sections/CtaBand";
import { resolve, type LocaleParams } from "@/lib/page";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { c } = await resolve(params);
  return { title: c.pages.clients.metaTitle, description: c.pages.clients.metaDescription };
}

export default async function ClientsPage({ params }: { params: LocaleParams }) {
  const { c } = await resolve(params);
  const p = c.pages.clients;
  return (
    <>
      <PageIntro title={p.title} kicker={p.kicker} body={p.intro} cta={c.pages.ctaBand.cta} />
      <section className="section-pad">
        <div className="container-x">
          <h2 className="h2-section rv">{p.whyTitle}</h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {p.reasons.map((r) => (
              <li key={r.title} className="rounded-md border border-fog p-6 rv">
                <h3 className="font-display text-[22px] leading-[1.35] font-light text-ink">{r.title}</h3>
                <p className="mt-2 text-[15px] leading-6">{r.body}</p>
              </li>
            ))}
          </ul>
          <h2 className="h2-section mt-20 rv">{p.whoTitle}</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.home.audiences.map((a, i) => {
              const slug = Object.keys(c.audiences)[i] as keyof typeof c.audiences;
              const info = c.audiences[slug];
              return (
                <li key={a.label} className="rv">
                  <Link
                    href={a.href}
                    className="group block rounded-md bg-white p-6 shadow-card ring-1 ring-black/5 transition hover:-translate-y-0.5"
                  >
                    <h3 className="text-[20px] font-normal text-ink group-hover:text-primary">{info.title}</h3>
                    <p className="mt-2 line-clamp-2 text-[15px] leading-6">{info.intro}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <CtaBand c={c} title={p.ctaTitle} />
    </>
  );
}
