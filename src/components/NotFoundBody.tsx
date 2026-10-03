"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

type Labels = { title: string; body: string; home: string; homeHref: string; links: { label: string; href: string }[] };

/** Picks the 404 copy from the URL's locale segment; the page itself is one static file. */
export default function NotFoundBody({ labels }: { labels: Record<string, Labels> }) {
  const pathname = usePathname() || "/";
  const t = labels[pathname.split("/")[1]] ?? labels.en;
  return (
    <section className="section-pad bg-hero text-white">
      <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <p className="num text-[96px] leading-none font-extrabold text-primary lg:text-[140px]">404</p>
          <h1 className="h1-display mt-4 text-white">{t.title}</h1>
          <p className="mt-5 max-w-[560px] text-[17px] leading-7 text-soft">{t.body}</p>
          <div className="mt-8">
            <Button href={t.homeHref}>{t.home}</Button>
          </div>
        </div>
        <ul className="grid gap-2 lg:col-span-5">
          {t.links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="block rounded-xl bg-navy px-5 py-3 text-[15px] font-medium text-white ring-1 ring-white/10 hover:bg-navy-2">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
