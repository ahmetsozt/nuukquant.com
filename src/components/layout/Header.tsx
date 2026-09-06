"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { brand, nav } from "@/content/site";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

  const height = scrolled ? "h-14" : "h-14 lg:h-18";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-white transition-[height,box-shadow] duration-200 ${height} ${
          scrolled ? "shadow-[0_1px_0_rgba(0,0,0,0.06)]" : ""
        }`}
      >
        <div className="container-x flex h-full items-center justify-between">
          <Logo />

          <nav aria-label="Main navigation" className="hidden h-full lg:block">
            <ul className="flex h-full items-stretch">
              {nav.map((group) => (
                <li key={group.label} className="group/menu relative flex h-full items-stretch">
                  <Link
                    href={group.href}
                    className="flex items-center px-4 text-[15px] font-normal text-body transition-colors hover:text-ink xl:px-5"
                  >
                    {group.label}
                  </Link>
                  <div className="pointer-events-none absolute top-full left-0 z-50 min-w-48 -translate-y-1 rounded-b bg-white pb-2 opacity-0 shadow-menu transition duration-150 group-hover/menu:pointer-events-auto group-hover/menu:translate-y-0 group-hover/menu:opacity-100 group-focus-within/menu:pointer-events-auto group-focus-within/menu:translate-y-0 group-focus-within/menu:opacity-100">
                    <ul className="py-1">
                      {group.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className="block px-5 py-2 text-[15px] whitespace-nowrap text-body hover:bg-fog hover:text-ink"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden h-full items-stretch lg:flex">
            <button
              type="button"
              className="flex items-center px-3 text-body hover:text-ink"
              aria-label="Language: English"
            >
              <Icon name="globe-small" size={18} />
            </button>
            <Link href={brand.contactHref} className="flex items-center px-5 text-[15px] font-medium text-body hover:text-ink">
              Contact
            </Link>
            <Button href={brand.getStartedHref} variant="header" arrow={false}>
              Get Started
            </Button>
          </div>

          <button
            type="button"
            className="flex size-9 items-center justify-center text-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} size={22} strokeWidth={1.75} />
          </button>
        </div>
      </header>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-0 z-40 bg-navy/80 transition-opacity duration-150 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-white pt-14 transition-transform duration-200 ease-out-expo lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {nav.map((group) => (
            <details key={group.label} className="group border-b border-fog">
              <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-[17px] text-ink">
                {group.label}
                <Icon name="chevron" size={18} className="transition-transform group-open:rotate-180" />
              </summary>
              <ul className="pb-3">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 pl-3 text-[15px] text-body"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
          <div className="flex items-center gap-2 py-4 text-[15px] text-body">
            <Icon name="globe-small" size={18} /> English
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 border-t border-fog p-6">
          <Button href={brand.contactHref} variant="ghost" arrow={false} className="justify-center border border-fog rounded-md">
            Contact
          </Button>
          <Button href={brand.getStartedHref} arrow={false} className="py-3">
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
}
