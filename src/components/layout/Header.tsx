"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { SiteContent } from "@/content/en";
import { localeNames, localePath, locales, switchLocale, type Locale } from "@/i18n";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

function LanguageMenu({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";
  return (
    <div className="group/lang relative flex h-full items-stretch">
      <button type="button" className="flex items-center gap-1.5 text-[13px] text-white/85 hover:text-white" aria-haspopup="true" aria-label={localeNames[locale]}>
        <Icon name="globe-small" size={15} />
        <span>{localeNames[locale]}</span>
        <Icon name="chevron" size={12} />
      </button>
      <ul className="pointer-events-none absolute top-full end-0 z-50 min-w-44 -translate-y-1 rounded-2xl bg-white py-2 text-ink opacity-0 shadow-menu transition duration-150 group-hover/lang:pointer-events-auto group-hover/lang:translate-y-0 group-hover/lang:opacity-100 group-focus-within/lang:pointer-events-auto group-focus-within/lang:translate-y-0 group-focus-within/lang:opacity-100">
        {locales.map((l) => (
          <li key={l}>
            <Link href={switchLocale(pathname, l)} hrefLang={l} className={`block px-4 py-2 text-[14px] whitespace-nowrap hover:bg-fog ${l === locale ? "font-semibold text-primary" : "text-body"}`}>
              {localeNames[l]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Header({ c, locale }: { c: SiteContent; locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";
  const contactHref = c.ctaBand.cta.href;
  const homeHref = locale === "en" ? "/" : `/${locale}/`;
  const quick = [
    { label: c.ui.telegram, href: c.brand.telegram },
    { label: c.ui.whatsapp, href: c.brand.whatsapp },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Risk warning bar */}
      <div className="bg-tint text-ink">
        <p className="container-x py-2.5 text-[12.5px] leading-5">
          {c.ui.riskBar.pre} <strong>{c.ui.riskBar.strong}</strong> {c.ui.riskBar.post}
        </p>
      </div>

      {/* Utility bar */}
      <div className="relative z-[60] hidden bg-ink text-white lg:block">
        <div className="container-x flex h-10 items-center justify-between text-[13px]">
          <ul className="flex items-center gap-6">
            {quick.map((q) => (
              <li key={q.label}>
                <a href={q.href.startsWith("[") ? "#" : q.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-white/85 hover:text-white">
                  {q.label}
                  <Icon name="arrow-up-right" size={12} />
                </a>
              </li>
            ))}
            <li>
              <Link href={localePath(locale, "/investors/")} className="inline-flex items-center gap-1 text-white/85 hover:text-white">
                <Icon name="shield" size={12} />
                {c.ui.investorLogin}
              </Link>
            </li>
          </ul>
          <LanguageMenu locale={locale} />
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-ink text-white shadow-[0_1px_0_rgba(255,255,255,0.06)]">
        <div className="container-x flex h-16 items-center justify-between lg:h-18">
          <Logo href={homeHref} label={c.ui.home} dark height={28} />

          <nav aria-label="Main navigation" className="hidden h-full lg:block">
            <ul className="flex h-full items-center gap-1">
              {c.nav.map((group) => (
                <li key={group.label} className="group/menu relative flex h-full items-center">
                  <Link href={group.href} className="rounded-pill px-3.5 py-2 text-[14px] font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white">
                    {group.label}
                  </Link>
                  {group.items.length > 0 && (
                    <div className="pointer-events-none absolute top-full start-0 z-50 min-w-60 -translate-y-1 rounded-2xl bg-white py-2 text-ink opacity-0 shadow-menu transition duration-150 group-hover/menu:pointer-events-auto group-hover/menu:translate-y-0 group-hover/menu:opacity-100 group-focus-within/menu:pointer-events-auto group-focus-within/menu:translate-y-0 group-focus-within/menu:opacity-100">
                      <ul>
                        {group.items.map((item) => (
                          <li key={item.label}>
                            <Link href={item.href} className="block px-5 py-2.5 text-[14px] whitespace-nowrap text-body hover:bg-fog hover:text-ink">
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href={contactHref} className="px-2 text-[14px] font-medium text-white/85 hover:text-white">
              {c.ui.contact}
            </Link>
            <Button href={contactHref} variant="header" size="sm" className="py-3.5 text-[15px]" event="cta_click" eventLabel="header">
              {c.ui.getStarted}
            </Button>
          </div>

          <button type="button" className="flex size-10 items-center justify-center text-white lg:hidden" aria-label={open ? c.ui.closeMenu : c.ui.openMenu} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            <Icon name={open ? "close" : "menu"} size={22} strokeWidth={1.75} />
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 bg-black/70 transition-opacity duration-150 lg:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`} onClick={() => setOpen(false)} aria-hidden="true" />
      <div className={`fixed inset-y-0 end-0 z-50 flex w-full max-w-md flex-col bg-ink pt-16 text-white transition-transform duration-200 ease-out-expo lg:hidden ${open ? "translate-x-0" : "translate-x-full rtl:-translate-x-full"}`} role="dialog" aria-modal="true" aria-label="Menu">
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {c.nav.map((group) =>
            group.items.length ? (
              <details key={group.label} className="group border-b border-white/10">
                <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-[17px] font-semibold text-white">
                  {group.label}
                  <Icon name="chevron" size={18} className="transition-transform group-open:rotate-180" />
                </summary>
                <ul className="pb-3">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} onClick={() => setOpen(false)} className="block py-2 ps-3 text-[15px] text-white/80">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ) : (
              <Link key={group.label} href={group.href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-4 text-[17px] font-semibold text-white">
                {group.label}
              </Link>
            ),
          )}
          <div className="py-4">
            <p className="mb-2 flex items-center gap-2 text-[13px] text-white/60">
              <Icon name="globe-small" size={16} /> {c.ui.language}
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-[15px]">
              {locales.map((l) => (
                <li key={l}>
                  <Link href={switchLocale(pathname, l)} hrefLang={l} onClick={() => setOpen(false)} className={l === locale ? "font-semibold text-cyan" : "text-white/80"}>
                    {localeNames[l]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 border-t border-white/10 p-6">
          <Button href={contactHref} variant="outline" size="sm" className="justify-center">
            {c.ui.contact}
          </Button>
          <Button href={contactHref} size="sm" className="justify-center" event="cta_click" eventLabel="mobile_menu">
            {c.ui.getStarted}
          </Button>
        </div>
      </div>
    </>
  );
}
