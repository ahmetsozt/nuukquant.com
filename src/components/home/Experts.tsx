import Button from "@/components/ui/Button";
import PlatformMock from "@/components/home/PlatformMock";
import { home } from "@/content/site";
import { optionalImage } from "@/lib/images";

export default function Experts() {
  const { experts } = home;
  const photo = optionalImage("devices");
  return (
    <section
      className="relative overflow-hidden bg-navy bg-[linear-gradient(rgba(255,255,255,0.05),rgba(255,255,255,0))] text-white"
      aria-labelledby="experts-heading"
    >
      <div className="container-x grid gap-12 py-20 xl:grid-cols-12 xl:items-center xl:py-24 2xl:py-30">
        <div className="xl:col-span-5">
          <h2 id="experts-heading" className="h2-section text-white rv">
            {experts.title}
          </h2>
          <ul className="mt-8 space-y-6">
            {experts.items.map((it) => (
              <li key={it.title} className="rv">
                <strong className="font-display block text-[22px] leading-[1.35] font-normal text-white">
                  {it.title}
                </strong>
                <p className="mt-1 text-[15px] leading-6 text-soft">{it.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href={experts.cta.href} variant="outline">
              {experts.cta.label}
            </Button>
          </div>
        </div>
        <div className="xl:col-span-7 xl:translate-x-6 rv">
          {photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={photo} alt="NUUK trading platform on desktop, laptop and phone" loading="lazy" className="h-auto w-full max-w-[1100px]" />
          ) : (
            <PlatformMock />
          )}
        </div>
      </div>
    </section>
  );
}
