import Icon from "@/components/ui/Icon";
import SectionHead from "@/components/ui/SectionHead";

type Commitment = { title: string; body: string };

/**
 * Stands where a testimonials block would sit. The channel has no member
 * reviews yet, so instead of inventing quotes the section states the four
 * commitments every member can measure NUUK against.
 */
export default function CommunityPromise({ title, lead, items, note }: { title: string; lead: string; items: Commitment[]; note: string }) {
  return (
    <section className="section-pad bg-fog" aria-labelledby="community-heading">
      <div className="container-x">
        <SectionHead title={title} lead={lead} align="center" />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((v) => (
            <li key={v.title} className="rv flex flex-col rounded-card bg-white p-6 shadow-card ring-1 ring-black/5">
              <span className="flex size-9 items-center justify-center rounded-full bg-primary text-white">
                <Icon name="check" size={16} />
              </span>
              <h3 className="mt-4 text-[18px]">{v.title}</h3>
              <p className="mt-2 flex-1 text-[14.5px] leading-6 text-body">{v.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-[13px] text-muted">{note}</p>
      </div>
    </section>
  );
}
