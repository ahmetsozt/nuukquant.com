import Fill from "@/components/ui/Fill";
import Icon from "@/components/ui/Icon";
import SectionHead from "@/components/ui/SectionHead";
import type { SiteContent } from "@/content/en";

export default function Testimonials({ c }: { c: SiteContent }) {
  return (
    <section className="section-pad" aria-labelledby="testimonials-heading">
      <div className="container-x">
        <SectionHead title={c.home.testimonialsTitle} align="center" />
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {c.home.testimonials.map((t, i) => (
            <li key={i} className="rv rounded-xl border border-black/5 bg-white p-6">
              <Icon name="quote" size={22} className="text-primary" />
              <blockquote className="mt-4 font-serif text-[19px] leading-[1.45] text-ink">
                <Fill text={t.quote} />
              </blockquote>
              <p className="mt-5 text-[13.5px] text-ink">
                <Fill text={t.name} />
              </p>
              <p className="text-[12.5px] text-muted">
                <Fill text={t.role} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
