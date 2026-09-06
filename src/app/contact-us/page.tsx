import type { Metadata } from "next";
import PageIntro from "@/components/sections/PageIntro";
import CtaBand from "@/components/sections/CtaBand";
import ContactForm from "@/app/contact-us/ContactForm";
import { brand } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Talk to a local account manager about onboarding, pricing and integration.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro title="Contact Us" kicker="About Us" body="Customer support, account management and enquiries." />
      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="text-[22px] font-light text-ink">Customer Support</h3>
            <p className="mt-2 text-[15px] leading-6">
              <a href={`mailto:${brand.email}`} className="text-primary hover:underline">
                {brand.email}
              </a>
              <br />
              <a href={brand.phoneHref} className="hover:text-ink">
                {brand.phone}
              </a>
            </p>
            <h2 className="h2-section mt-10">Talk to a local account manager</h2>
            <p className="mt-4 text-[15px] leading-6">{brand.office}</p>
          </div>
          <div className="lg:col-span-7">
            <h3 className="text-[22px] font-light text-ink">Suggestions &amp; Enquiries</h3>
            <ContactForm />
          </div>
        </div>
      </section>
      <CtaBand body="Institutional and professional enquiries are answered within one business day." cta={{ label: "Email us", href: `mailto:${brand.email}` }} />
    </>
  );
}
