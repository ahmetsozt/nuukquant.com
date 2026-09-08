import Link from "next/link";
import type { SiteContent } from "@/content/en";
import type { Locale } from "@/i18n";
import Logo from "@/components/ui/Logo";
import Icon from "@/components/ui/Icon";
import Fill from "@/components/ui/Fill";

export default function Footer({ c, locale }: { c: SiteContent; locale: Locale }) {
  const { brand, footer } = c;
  const columns = c.nav.filter((g) => g.items.length);
  return (
    <footer className="bg-navy pt-14 pb-10 text-soft">
      <div className="container-x">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo href={locale === "en" ? "/" : `/${locale}/`} label={c.ui.home} dark />
            <p className="mt-4 max-w-[420px] text-[14px] leading-6">
              <span className="text-white">{brand.person}</span> · {brand.role}
              <br />
              {brand.office}
            </p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[14px]">
              <a href={`mailto:${brand.email}`} className="hover:text-white">
                {brand.email}
              </a>
              <a href={brand.phoneHref} className="hover:text-white" dir="ltr">
                {brand.phone}
              </a>
            </div>
            <ul className="mt-5 flex gap-5">
              {c.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} aria-label={s.label} className="text-soft hover:text-white">
                    <Icon name={s.icon as "in" | "x" | "yt" | "ig"} size={20} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-7 lg:grid-cols-2">
            {columns.map((group) => (
              <div key={group.label}>
                <p className="mb-3 text-[13px] font-medium tracking-wide text-white uppercase">{group.label}</p>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="text-[14.5px] leading-6 hover:text-white">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 py-8 text-[12px] leading-[1.65] text-soft/80 lg:grid-cols-3">
          <p>
            <span className="text-white">{brand.name}</span> <Fill text={footer.legal1} />
          </p>
          <p>{footer.legal2}</p>
          <p>
            <span className="text-white">{c.ui.riskDisclosure}.</span> {footer.risk}
          </p>
        </div>
        <p className="border-t border-white/10 pt-6 text-[12px] leading-[1.65] text-soft/80">{footer.ib}</p>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-[12px]">
          <p>
            © 2024-2026 {brand.name}. {footer.copyright}
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1.5">
            {c.legalLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
