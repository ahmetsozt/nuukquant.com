import Link from "next/link";
import type { SiteContent } from "@/content/en";

export default function AudienceCards({ c }: { c: SiteContent }) {
  return (
    <section className="relative z-10 -mt-10 pb-20 lg:pb-22 2xl:pb-30" aria-label="Who we serve">
      <div className="container-x">
        <ul className="grid auto-rows-fr grid-cols-2 shadow-card lg:grid-cols-3 xl:grid-cols-6">
          {c.home.audiences.map((a, i, arr) => {
            const first = i === 0;
            const last = i === arr.length - 1;
            return (
              <li key={a.label} className="min-w-0">
                <Link
                  href={a.href}
                  className={`aud-card flex h-full min-h-20 items-center justify-center bg-white px-4 py-6 text-center text-[16px] font-normal text-body transition-colors lg:px-6 lg:py-8 xl:text-[18px] 2xl:text-[20px] ${
                    first ? "rounded-tl-md xl:rounded-l-md xl:rounded-tr-none" : ""
                  } ${last ? "rounded-br-md xl:rounded-r-md xl:rounded-bl-none" : ""} ${
                    i === 1 ? "rounded-tr-md xl:rounded-none" : ""
                  } ${i === arr.length - 2 ? "rounded-bl-md xl:rounded-none" : ""}`}
                >
                  <span className="relative z-10">{a.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
