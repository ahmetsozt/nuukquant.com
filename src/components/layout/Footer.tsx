import Link from "next/link";
import type { SiteContent } from "@/content/en";
import type { Locale } from "@/i18n";
import Logo from "@/components/ui/Logo";
import Icon from "@/components/ui/Icon";

export default function Footer({ c, locale }: { c: SiteContent; locale: Locale }) {
  const { brand, pages } = c;
  const f = pages.footer;
  return (
    <footer className="bg-fog pt-12 pb-14 text-body">
      <div className="container-x">
        <div className="grid grid-cols-12 items-center gap-4 border-b border-black/5 pb-8">
          <div className="col-span-12 sm:col-span-3">
            <Logo href={locale === "en" ? "/" : `/${locale}/`} label={c.ui.home} />
          </div>
          <p className="col-span-12 text-[15px] sm:col-span-6">
            {brand.office} ·{" "}
            <a href={brand.phoneHref} className="hover:text-ink" dir="ltr">
              {brand.phone}
            </a>
          </p>
          <div className="col-span-12 sm:col-span-3 sm:text-end">
            <a href={`mailto:${brand.email}`} className="text-[15px] text-body hover:text-ink">
              {brand.email}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-8 py-10 sm:grid-cols-3 lg:grid-cols-5">
          {c.nav.map((group) => (
            <div key={group.label}>
              <p className="mb-3 text-[15px] font-normal text-ink">{group.label}</p>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-[15px] leading-6 hover:text-ink">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-[13px]">
          © 2024-2026 {brand.name}. {f.copyright}
        </p>

        <div className="mt-6 grid gap-6 text-[12px] leading-[1.6] text-muted lg:grid-cols-2">
          <p>
            <span className="text-body">{brand.legalName}</span> {f.legal1}
          </p>
          <p>{f.legal2}</p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
          <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-[13px]">
            {c.legalLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex gap-6">
            {c.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} aria-label={s.label} className="text-body hover:text-ink">
                  <Icon name={s.icon as "in" | "x" | "yt" | "ig"} size={22} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div id="risk" className="mt-10 space-y-4 text-[12px] leading-[1.6] text-muted">
          <p className="text-body">{c.ui.riskDisclosure}</p>
          <p>{f.risk1}</p>
          <p>{f.risk2}</p>
          <p>
            {f.risk3}{" "}
            <a href={`mailto:${brand.email}`} className="text-body underline-offset-2 hover:underline">
              {brand.email}
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
