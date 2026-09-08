import Button from "@/components/ui/Button";
import Fill from "@/components/ui/Fill";
import Icon from "@/components/ui/Icon";
import type { SiteContent } from "@/content/en";

type Event = SiteContent["education"]["events"][number];

export default function EventCard({ e, c }: { e: Event; c: SiteContent }) {
  const L = c.education.eventLabels;
  return (
    <article className="rv grid gap-6 rounded-card bg-white p-7 shadow-card ring-1 ring-black/5 lg:grid-cols-12 lg:items-center">
      <div className="flex items-center gap-4 lg:col-span-3">
        <span className="flex size-12 flex-none items-center justify-center rounded-full bg-tint text-primary">
          <Icon name="calendar" size={22} />
        </span>
        <div>
          <p className="num text-[15px] font-semibold text-ink">
            <Fill text={e.date} />
          </p>
          <p className="text-[13px] text-muted">
            <Fill text={e.time} />
          </p>
        </div>
      </div>
      <div className="lg:col-span-5">
        <h3 className="text-[19px] leading-snug">
          <Fill text={e.title} />
        </h3>
        <p className="mt-1 text-[13px] text-body">
          {e.format} · {L.language}: {e.language}
        </p>
      </div>
      <dl className="grid grid-cols-2 gap-3 text-[13px] lg:col-span-2">
        <div>
          <dt className="text-muted">{L.price}</dt>
          <dd className="font-semibold text-ink">
            <Fill text={e.price} />
          </dd>
        </div>
        <div>
          <dt className="text-muted">{L.seats}</dt>
          <dd className="num font-semibold text-ink">
            <Fill text={e.seats} />
          </dd>
        </div>
      </dl>
      <div className="lg:col-span-2 lg:text-end">
        <Button href={e.href} size="sm" event="event_register_click" eventLabel={e.title}>
          {L.register}
        </Button>
      </div>
    </article>
  );
}
