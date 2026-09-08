import Fill from "@/components/ui/Fill";
import Icon from "@/components/ui/Icon";
import SectionHead from "@/components/ui/SectionHead";
import type { SiteContent } from "@/content/en";

export default function Testimonials({ c }: { c: SiteContent }) {
  return (
    <section className="section-pad bg-white" aria-labelledby="testimonials-heading">
      <div className="container-x">
        <SectionHead title={c.home.testimonialsTitle} align="center" />
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {c.home.testimonials.map((t, i) => (
            <li key={i} className="rv flex flex-col rounded-card bg-fog p-7">
              <span className="flex size-10 items-center justify-center rounded-full bg-primary text-white">
                <Icon name="quote" size={18} />
              </span>
              <blockquote className="mt-5 flex-1 text-[18px] leading-[1.45] font-semibold text-ink">
                <Fill text={t.quote} />
              </blockquote>
              <p className="mt-6 text-[14px] font-semibold text-ink">
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
