import Fill from "@/components/ui/Fill";
import Icon from "@/components/ui/Icon";
import SectionHead from "@/components/ui/SectionHead";

type Voice = { quote: string; name: string; city: string };

/** Member quotes in a four-up grid, with the "results vary" line underneath. */
export default function CommunityVoices({ title, voices, note }: { title: string; voices: Voice[]; note: string }) {
  return (
    <section className="section-pad bg-fog" aria-labelledby="voices-heading">
      <div className="container-x">
        <SectionHead title={title} align="center" />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {voices.map((v, i) => (
            <li key={i} className="rv flex flex-col rounded-card bg-white p-6 shadow-card ring-1 ring-black/5">
              <span className="flex size-9 items-center justify-center rounded-full bg-primary text-white">
                <Icon name="quote" size={16} />
              </span>
              <blockquote className="mt-4 flex-1 text-[15px] leading-6 text-ink">
                <Fill text={v.quote} />
              </blockquote>
              <p className="mt-5 text-[14px] font-semibold text-ink">
                <Fill text={v.name} />
              </p>
              <p className="text-[12.5px] text-muted">
                <Fill text={v.city} />
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-[13px] text-muted">{note}</p>
      </div>
    </section>
  );
}
