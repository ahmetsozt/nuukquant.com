import Button from "@/components/ui/Button";
import Fill from "@/components/ui/Fill";
import type { SiteContent } from "@/content/en";

/** Full-bleed blue promo band with a figure card on the left. */
export default function PromoBand({ c }: { c: SiteContent }) {
  const p = c.home.promo;
  return (
    <section className="bg-primary py-16 text-white lg:py-24" aria-labelledby="promo-heading">
      <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <div className="rv relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-card bg-[linear-gradient(160deg,#0052d6_0%,#00164a_100%)] p-8 ring-1 ring-white/15">
            <div className="blob-alt absolute -end-16 -top-16 size-64 bg-cyan/25 blur-2xl" aria-hidden="true" />
            <span className="num relative text-[120px] leading-none font-extrabold text-white lg:text-[160px]">
              <Fill text={p.figure} />
            </span>
            <p className="relative mt-3 max-w-[320px] text-[15px] leading-6 text-white/80">
              <Fill text={p.figureLabel} />
            </p>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="kicker text-cyan">{p.kicker}</p>
          <h2 id="promo-heading" className="h2-section mt-4 text-white">
            <Fill text={p.title} />
          </h2>
          <p className="mt-5 max-w-[560px] text-[17px] leading-[1.55] text-white/85">
            <Fill text={p.body} />
          </p>
          <div className="mt-8">
            <Button href={p.cta.href} variant="cyan" event="cta_click" eventLabel="promo">
              {p.cta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
