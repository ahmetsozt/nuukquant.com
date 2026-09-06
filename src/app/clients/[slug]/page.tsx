import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageIntro from "@/components/sections/PageIntro";
import CoreValues from "@/components/home/CoreValues";
import Broker from "@/components/home/Broker";
import Network from "@/components/home/Network";
import CtaBand from "@/components/sections/CtaBand";
import { audiences } from "@/content/site";

export function generateStaticParams() {
  return Object.keys(audiences).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = audiences[slug];
  return a ? { title: `NUUK for ${a.title}`, description: a.intro } : {};
}

export default async function AudiencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = audiences[slug];
  if (!a) notFound();

  return (
    <>
      <PageIntro title={a.title} kicker="Clients" body={a.intro} cta={{ label: "Contact Us", href: "/contact-us/" }} />
      <div className="pt-20 lg:pt-22 2xl:pt-30">
        <CoreValues />
      </div>
      <Broker />
      <Network />
      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-3">
          {a.highlights.map((h) => (
            <div key={h.title} className="rv">
              <h2 className="h2-section">{h.title}</h2>
              <p className="mt-4 text-[15px] leading-6">{h.body}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBand title="Dedicated Support" body="A relationship manager, trade desk and technology team in your timezone." />
    </>
  );
}
