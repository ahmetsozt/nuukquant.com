import Button from "@/components/ui/Button";
import SectionHead from "@/components/ui/SectionHead";
import SystemCard from "@/components/home/SystemCard";
import type { SiteContent } from "@/content/en";

export default function SystemsPreview({ c }: { c: SiteContent }) {
  const s = c.home.systems;
  return (
    <section className="section-pad bg-hero text-white" aria-labelledby="systems-heading">
      <div className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead kicker={s.kicker} title={s.title} lead={s.lead} dark />
          <Button href={s.cta.href} variant="outline">
            {s.cta.label}
          </Button>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {c.systems.map((sys) => (
            <SystemCard key={sys.slug} s={sys} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
