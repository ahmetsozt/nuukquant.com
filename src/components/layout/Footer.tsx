import Link from "next/link";
import type { SiteContent } from "@/content/en";
import type { Locale } from "@/i18n";
import Logo, { LogoMark } from "@/components/ui/Logo";
import Icon from "@/components/ui/Icon";
import Fill from "@/components/ui/Fill";

export default function Footer({ c, locale }: { c: SiteContent; locale: Locale }) {
  const { brand, footer } = c;
  const columns = c.nav.filter((g) => g.items.length);
  return (
    <footer className="relative overflow-hidden bg-ink pt-16 pb-10 text-soft">
      <LogoMark className="pointer-events-none absolute -end-16 -bottom-20 text-white opacity-[0.05]" size={460} />
      <div className="container-x relative">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((group) => (
            <div key={group.label}>
              <p className="mb-4 text-[13px] font-semibold text-white">{group.label}</p>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-[14px] text-soft hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="mb-4 text-[13px] font-semibold text-white">{c.ui.contact}</p>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <a href={`mailto:${brand.email}`} className="hover:text-white">
                  {brand.email}
                </a>
              </li>
              <li>
                <a href={brand.phoneHref} className="hover:text-white" dir="ltr">
                  {brand.phone}
                </a>
              </li>
              <li className="leading-6">{brand.office}</li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-[13px] font-semibold text-white">{c.ui.legal}</p>
            <ul className="space-y-2.5">
              {c.legalLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[14px] text-soft hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8">
          <Logo href={locale === "en" ? "/" : `/${locale}/`} label={c.ui.home} dark height={28} />
          <div className="flex items-center gap-3">
            <span className="text-[13px] text-soft">{c.ui.followUs}</span>
            <ul className="flex gap-2">
              {c.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href.startsWith("[") ? "#" : s.href} aria-label={s.label} className="flex size-8 items-center justify-center rounded-full bg-primary text-white hover:bg-primary-dark">
                    <Icon name={s.icon as "in" | "x" | "yt" | "ig"} size={15} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 text-[12.5px] text-soft/80">
          © 2024-2026 {brand.name} · {footer.copyright}
        </p>

        <div className="mt-8 border-t border-white/10 pt-6 text-[12.5px] leading-5 text-soft/80">
          <p className="text-[14px] font-semibold text-white">{footer.riskTitle}</p>
          <p className="mt-3">
            <span className="text-white">{brand.name}</span> <Fill text={footer.legal1} />
          </p>
          <p className="mt-2">{footer.legal2}</p>
          <p className="mt-2 font-semibold text-white">{footer.risk}</p>
          <p className="mt-2">{footer.ib}</p>
        </div>
      </div>
    </footer>
  );
}
