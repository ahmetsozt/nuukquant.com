import Link from "next/link";
import { brand, legalLinks, nav, socials } from "@/content/site";
import Logo from "@/components/ui/Logo";
import Icon from "@/components/ui/Icon";

export default function Footer() {
  return (
    <footer className="bg-fog pt-12 pb-14 text-body">
      <div className="container-x">
        <div className="grid grid-cols-12 items-center gap-4 border-b border-black/5 pb-8">
          <div className="col-span-12 sm:col-span-3">
            <Logo />
          </div>
          <p className="col-span-12 text-[15px] sm:col-span-6">
            {brand.office} ·{" "}
            <a href={brand.phoneHref} className="hover:text-ink">
              {brand.phone}
            </a>
          </p>
          <div className="col-span-12 sm:col-span-3 sm:text-right">
            <button
              type="button"
              className="inline-flex items-center gap-2 text-[15px] text-body hover:text-ink"
              aria-label="Language: English"
            >
              <Icon name="globe-small" size={16} /> English <Icon name="chevron" size={14} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-8 py-10 sm:grid-cols-3 lg:grid-cols-5">
          {nav.map((group) => (
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

        <p className="text-[13px]">© 2024-2026 {brand.name}. All rights reserved.</p>

        <div className="mt-6 grid gap-6 text-[12px] leading-[1.6] text-muted lg:grid-cols-2">
          <p>
            <span className="text-body">{brand.legalName}</span> is an AI-engineered quantitative trading and
            trading-infrastructure company based in the Dubai International Financial Centre. Services are
            offered to professional and institutional clients; availability depends on your jurisdiction and
            applicable regulation.
          </p>
          <p>
            Any information on this website is provided for informational purposes only and does not
            constitute investment advice or an offer or solicitation to buy or sell any financial instrument
            or service.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
          <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-[13px]">
            {legalLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex gap-6">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} aria-label={s.label} className="text-body hover:text-ink">
                  <Icon name={s.icon as "in" | "x" | "yt" | "ig"} size={22} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div id="risk" className="mt-10 space-y-4 text-[12px] leading-[1.6] text-muted">
          <p className="text-body">Risk disclosure</p>
          <p>
            Trading involves substantial risk. Investing in FX, commodities, indices, equities, fixed income,
            metals and digital assets can result in losses that exceed your initial investment, and trading on
            margin carries additional risk. Past performance of any model, strategy or system is not a
            guarantee of future results. Make sure you understand these risks before engaging any service.
          </p>
          <p>
            Live market figures and system telemetry shown on this website are illustrative and may be
            delayed. Institutional enquiries only.
          </p>
          <p>
            Please verify that any communication claiming to come from {brand.name} originates from the
            nuukquant.com domain. Report suspected misuse of our name to{" "}
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
