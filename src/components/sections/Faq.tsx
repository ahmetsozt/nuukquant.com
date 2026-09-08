import Fill from "@/components/ui/Fill";
import SectionHead from "@/components/ui/SectionHead";

export type FaqItem = { q: string; a: string };

/** Accordion FAQ block: title left, questions right. */
export default function Faq({ title, items, tone = "light" }: { title: string; items: FaqItem[]; tone?: "light" | "fog" }) {
  return (
    <section className={`${tone === "fog" ? "bg-fog" : "bg-white"} section-pad`} aria-label={title}>
      <div className="container-x grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHead title={title} />
        </div>
        <div className="lg:col-span-8">
          <div className="divide-y divide-black/10 rounded-card bg-white px-6 ring-1 ring-black/5 lg:px-8">
            {items.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[17px] font-semibold text-ink">
                  <Fill text={f.q} />
                  <span className="flex size-8 flex-none items-center justify-center rounded-full bg-fog text-[18px] leading-none text-ink transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-[680px] text-[15px] leading-6 text-body">
                  <Fill text={f.a} />
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
