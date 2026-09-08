"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { SiteContent } from "@/content/en";
import { localeNames, locales, switchLocale, type Locale } from "@/i18n";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

function LanguageMenu({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";
  return (
    <div className="group/lang relative flex h-full items-stretch">
      <button type="button" className="flex items-center gap-1 px-3 text-[14px] text-body hover:text-ink" aria-haspopup="true" aria-label={localeNames[locale]}>
        <Icon name="globe-small" size={17} />
        <span className="uppercase">{locale}</span>
      </button>
      <ul className="pointer-events-none absolute top-full end-0 z-50 min-w-40 -translate-y-1 rounded-b bg-white py-1 opacity-0 shadow-menu transition duration-150 group-hover/lang:pointer-events-auto group-hover/lang:translate-y-0 group-hover/lang:opacity-100 group-focus-within/lang:pointer-events-auto group-focus-within/lang:translate-y-0 group-focus-within/lang:opacity-100">
        {locales.map((l) => (
          <li key={l}>
            <Link href={switchLocale(pathname, l)} hrefLang={l} className={`block px-4 py-2 text-[14px] whitespace-nowrap hover:bg-fog hover:text-ink ${l === locale ? "text-ink" : "text-body"}`}>
              {localeNames[l]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Header({ c, locale }: { c: SiteContent; locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";
  const contactHref = c.ctaBand.cta.href;
  const homeHref = locale === "en" ? "/" : `/${locale}/`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      <header className={`fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur transition-[height,box-shadow] duration-200 ${scrolled ? "h-14 shadow-[0_1px_0_rgba(0,0,0,0.06)]" : "h-14 lg:h-18"}`}>
        <div className="container-x flex h-full items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo href={homeHref} label={c.ui.home} height={26} />
            <span className="hidden border-s border-black/10 ps-4 text-[13px] text-muted xl:inline">{c.brand.person}</span>
          </div>

          <nav aria-label="Main navigation" className="hidden h-full lg:block">
            <ul className="flex h-full items-stretch">
              {c.nav.map((group) => (
                <li key={group.label} className="group/menu relative flex h-full items-stretch">
                  <Link href={group.href} className="flex items-center px-4 text-[14.5px] font-normal text-body transition-colors hover:text-ink">
                    {group.label}
                  </Link>
                  {group.items.length > 0 && (
                    <div className="pointer-events-none absolute top-full start-0 z-50 min-w-56 -translate-y-1 rounded-b bg-white pb-2 opacity-0 shadow-menu transition duration-150 group-hover/menu:pointer-events-auto group-hover/menu:translate-y-0 group-hover/menu:opacity-100 group-focus-within/menu:pointer-events-auto group-focus-within/menu:translate-y-0 group-focus-within/menu:opacity-100">
                      <ul className="py-1">
                        {group.items.map((item) => (
                          <li key={item.label}>
                            <Link href={item.href} className="block px-5 py-2 text-[14.5px] whitespace-nowrap text-body hover:bg-fog hover:text-ink">
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

          <div className="hidden h-full items-stretch lg:flex">
            <LanguageMenu locale={locale} />
            <Link href={contactHref} className="flex items-center px-4 text-[14.5px] font-medium text-body hover:text-ink">
              {c.ui.contact}
            </Link>
            <Button href={contactHref} variant="header" arrow={false}>
              {c.ui.getStarted}
            </Button>
          </div>

          <button type="button" className="flex size-9 items-center justify-center text-ink lg:hidden" aria-label={open ? c.ui.closeMenu : c.ui.openMenu} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            <Icon name={open ? "close" : "menu"} size={22} strokeWidth={1.75} />
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 bg-navy/80 transition-opacity duration-150 lg:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`} onClick={() => setOpen(false)} aria-hidden="true" />
      <div className={`fixed inset-y-0 end-0 z-50 flex w-full max-w-md flex-col bg-white pt-14 transition-transform duration-200 ease-out-expo lg:hidden ${open ? "translate-x-0" : "translate-x-full rtl:-translate-x-full"}`} role="dialog" aria-modal="true" aria-label="Menu">
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {c.nav.map((group) =>
            group.items.length ? (
              <details key={group.label} className="group border-b border-fog">
                <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-[17px] text-ink">
                  {group.label}
                  <Icon name="chevron" size={18} className="transition-transform group-open:rotate-180" />
                </summary>
                <ul className="pb-3">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} onClick={() => setOpen(false)} className="block py-2 ps-3 text-[15px] text-body">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ) : (
              <Link key={group.label} href={group.href} onClick={() => setOpen(false)} className="block border-b border-fog py-4 text-[17px] text-ink">
                {group.label}
              </Link>
            ),
          )}
          <div className="py-4">
            <p className="mb-2 flex items-center gap-2 text-[13px] text-muted">
              <Icon name="globe-small" size={16} /> {c.ui.language}
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-[15px]">
              {locales.map((l) => (
                <li key={l}>
                  <Link href={switchLocale(pathname, l)} hrefLang={l} onClick={() => setOpen(false)} className={l === locale ? "text-ink underline underline-offset-4" : "text-body"}>
                    {localeNames[l]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 border-t border-fog p-6">
          <Button href={contactHref} variant="ghost" arrow={false} className="justify-center rounded-md border border-fog">
            {c.ui.contact}
          </Button>
          <Button href={contactHref} arrow={false} className="py-3">
            {c.ui.getStarted}
          </Button>
        </div>
      </div>
    </>
  );
}
