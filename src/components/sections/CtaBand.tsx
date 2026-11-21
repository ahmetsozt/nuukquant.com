import Button from "@/components/ui/Button";
import Fill from "@/components/ui/Fill";
import type { SiteContent } from "@/content/en";
import { noDot } from "@/lib/text";

/**
 * Closing call to action: a white card on the off-white band with the four
 * onboarding steps, so every page ends on "how to start".
 */
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
    <section className="bg-fog py-12 lg:py-16" aria-labelledby="cta-heading">
      <div className="container-x">
        <div className="rounded-card bg-white px-6 py-10 text-center ring-1 ring-black/5 lg:px-16 lg:py-14">
          <h2 id="cta-heading" className="h2-section mx-auto max-w-[720px]">
            <Fill text={noDot(title ?? d.title)} />
          </h2>
          <p className="mx-auto mt-4 max-w-[640px] text-[16px] leading-6 text-body">
            <Fill text={body ?? d.body} />
          </p>
          <ol className="mx-auto mt-10 grid max-w-[1040px] gap-8 text-start sm:grid-cols-2 lg:grid-cols-4">
            {d.steps.map((s, i) => (
              <li key={s.title} className="rv">
                <span className="num flex size-8 items-center justify-center rounded-md text-[13px] font-medium text-ink ring-1 ring-black/10">{i + 1}</span>
                <h3 className="mt-4 text-[17px]">{s.title}</h3>
                <p className="mt-1.5 text-[14px] leading-6 text-body">
                  <Fill text={s.body} />
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <Button href={action.href} event="cta_click" eventLabel="cta_band">
              {action.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
