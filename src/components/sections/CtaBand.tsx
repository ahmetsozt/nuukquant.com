import Button from "@/components/ui/Button";
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
  const d = c.pages.ctaBand;
  const action = cta ?? d.cta;
  return (
    <section className="bg-navy py-16 text-white lg:py-20" aria-labelledby="cta-heading">
      <div className="container-x flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 id="cta-heading" className="h2-section text-white">
            {title ?? d.title}
          </h2>
          <p className="mt-3 max-w-[520px] text-[15px] leading-6 text-soft">{body ?? d.body}</p>
        </div>
        <Button href={action.href}>{action.label}</Button>
      </div>
    </section>
  );
}
