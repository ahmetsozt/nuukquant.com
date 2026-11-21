import Button from "@/components/ui/Button";
import Fill from "@/components/ui/Fill";
import type { SiteContent } from "@/content/en";
import { noDot } from "@/lib/text";

/** Promo band on the off-white surface with a figure card on the left. */
export default function PromoBand({ c }: { c: SiteContent }) {
  const p = c.home.promo;
  return (
    <section className="bg-fog py-16 lg:py-24" aria-labelledby="promo-heading">
      <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <div className="rv flex aspect-[4/3] flex-col justify-end rounded-card bg-white p-8 ring-1 ring-black/5">
            <span className="num text-[96px] leading-none font-medium text-ink lg:text-[128px]">
              <Fill text={p.figure} />
            </span>
            <p className="mt-3 max-w-[320px] text-[15px] leading-6 text-body">
              <Fill text={p.figureLabel} />
            </p>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="kicker">{p.kicker}</p>
          <h2 id="promo-heading" className="h2-section mt-3">
            <Fill text={noDot(p.title)} />
          </h2>
          <p className="mt-5 max-w-[560px] text-[17px] leading-[1.55] text-body">
            <Fill text={p.body} />
          </p>
          <div className="mt-8">
            <Button href={p.cta.href} variant="outline-dark" event="cta_click" eventLabel="promo">
              {p.cta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
