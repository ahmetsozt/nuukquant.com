import Button from "@/components/ui/Button";

export default function CtaBand({
  title = "Where capital meets machine intelligence.",
  body = "Talk to our team about onboarding, fees and integration.",
  cta = { label: "Contact Us", href: "/contact-us/" },
}: {
  title?: string;
  body?: string;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="bg-navy py-16 text-white lg:py-20" aria-labelledby="cta-heading">
      <div className="container-x flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 id="cta-heading" className="h2-section text-white">
            {title}
          </h2>
          <p className="mt-3 max-w-[520px] text-[15px] leading-6 text-soft">{body}</p>
        </div>
        <Button href={cta.href}>{cta.label}</Button>
      </div>
    </section>
  );
}
