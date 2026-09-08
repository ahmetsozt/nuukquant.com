import Button from "@/components/ui/Button";
import Fill from "@/components/ui/Fill";
import type { SiteContent } from "@/content/en";

export default function CtaBand({
  c,
  title,
  body,
  cta,
}: {
  c: SiteContent;
  title?: string;
  body?: string;
  cta?: { label: string; href: string };
}) {
  const d = c.ctaBand;
  const action = cta ?? d.cta;
  return (
    <section className="bg-paper py-16 lg:py-20" aria-labelledby="cta-heading">
      <div className="container-x flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-[640px]">
          <h2 id="cta-heading" className="h2-section">
            <Fill text={title ?? d.title} />
          </h2>
          <p className="mt-3 text-[16px] leading-7 text-body">
            <Fill text={body ?? d.body} />
          </p>
        </div>
        <Button href={action.href}>{action.label}</Button>
      </div>
    </section>
  );
}
