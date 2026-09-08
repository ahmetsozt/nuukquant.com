import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import Fill from "@/components/ui/Fill";
import Icon from "@/components/ui/Icon";
import ContactForm from "@/app/[locale]/contact-us/ContactForm";
import { resolve, type LocaleParams } from "@/lib/page";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { c } = await resolve(params);
  return { title: c.contact.metaTitle, description: c.contact.metaDescription };
}

const icons = ["calendar", "chat", "send"] as const;

export default async function ContactPage({ params }: { params: LocaleParams }) {
  const { c } = await resolve(params);
  const p = c.contact;
  const { brand } = c;
  return (
    <>
      <PageIntro kicker={p.kicker} title={p.title} body={p.lead} />
      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            {p.channels.map((ch, i) => (
              <a key={ch.title} href={ch.href} className="rv flex items-center gap-4 rounded-xl border border-black/5 p-5 transition hover:border-primary/40 hover:bg-paper">
                <span className="flex size-11 flex-none items-center justify-center rounded-md bg-navy text-mint">
                  <Icon name={icons[i] ?? "chat"} size={20} />
                </span>
                <span className="flex-1">
                  <span className="block text-[17px] text-ink">{ch.title}</span>
                  <span className="block text-[13.5px] text-body">{ch.body}</span>
                </span>
                <span className="text-[13px] font-medium text-primary">{ch.cta}</span>
              </a>
            ))}
            <div className="pt-4 text-[14px] leading-6 text-body">
              <a href={`mailto:${brand.email}`} className="text-ink hover:text-primary">
                {brand.email}
              </a>
              <br />
              <a href={brand.phoneHref} className="hover:text-ink" dir="ltr">
                {brand.phone}
              </a>
              <br />
              <Fill text={brand.office} />
            </div>
          </div>
          <div className="lg:col-span-7">
            <h2 className="h2-section text-[28px] lg:text-[32px]">{p.formTitle}</h2>
            <ContactForm labels={p.form} email={brand.email} />
          </div>
        </div>
      </section>
    </>
  );
}
