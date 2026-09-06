import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import CtaBand from "@/components/sections/CtaBand";
import ContactForm from "@/app/[locale]/contact-us/ContactForm";
import { resolve, type LocaleParams } from "@/lib/page";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { c } = await resolve(params);
  return { title: c.pages.contact.metaTitle, description: c.pages.contact.metaDescription };
}

export default async function ContactPage({ params }: { params: LocaleParams }) {
  const { c } = await resolve(params);
  const p = c.pages.contact;
  const { brand } = c;
  return (
    <>
      <PageIntro title={p.title} kicker={p.kicker} body={p.intro} />
      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="text-[22px] font-light text-ink">{p.supportTitle}</h3>
            <p className="mt-2 text-[15px] leading-6">
              <a href={`mailto:${brand.email}`} className="text-primary hover:underline">
                {brand.email}
              </a>
              <br />
              <a href={brand.phoneHref} className="hover:text-ink" dir="ltr">
                {brand.phone}
              </a>
            </p>
            <h2 className="h2-section mt-10">{p.managerTitle}</h2>
            <p className="mt-4 text-[15px] leading-6">{brand.office}</p>
          </div>
          <div className="lg:col-span-7">
            <h3 className="text-[22px] font-light text-ink">{p.formTitle}</h3>
            <ContactForm labels={p.form} email={brand.email} />
          </div>
        </div>
      </section>
      <CtaBand c={c} body={p.ctaBody} cta={{ label: p.ctaLabel, href: `mailto:${brand.email}` }} />
    </>
  );
}
