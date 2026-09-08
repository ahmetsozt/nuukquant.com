import Button from "@/components/ui/Button";
import SectionHead from "@/components/ui/SectionHead";
import EventCard from "@/components/home/EventCard";
import type { SiteContent } from "@/content/en";

export default function EducationPreview({ c }: { c: SiteContent }) {
  const e = c.home.education;
  return (
    <section className="section-pad bg-fog" aria-labelledby="education-heading">
      <div className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead kicker={e.kicker} title={e.title} />
          <Button href={e.cta.href} variant="outline-dark">
            {e.cta.label}
          </Button>
        </div>
        <div className="mt-10 space-y-4">
          {c.education.events.slice(0, 1).map((ev, i) => (
            <EventCard key={i} e={ev} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
