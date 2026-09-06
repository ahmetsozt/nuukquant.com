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
            Nearest representative office: {brand.office}, {brand.phone}
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
            <span className="text-body">Dubai.</span> {brand.legalName} operates from the Dubai International
            Financial Centre. Services are offered to professional and institutional clients; availability
            depends on your jurisdiction and applicable regulation.
          </p>
          <p>
            Any information contained on this website is provided to you for informational purposes only and
            should not be regarded as an offer or solicitation of an offer to buy or sell any investments or
            related services that may be referenced here.
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
          <p className="text-body">
            {brand.name} is a broker for professionals. Direct access to over 50 financial markets through one
            account.
          </p>
          <p>
            Investing in certain instruments, including stocks, options, futures, foreign currencies, bonds and
            digital assets involves a high level of risk. Trading on margin comes with substantial risk as well.
            You must be aware of these risks before opening an account to trade. The income you may get from
            online investing may go down as well as up.
          </p>
          <p>
            Dear Clients and Visitors! Since there is an abundance of fraud activity on the Internet, please make
            sure you match any mention of {brand.name} with our legal name and official domain nuukquant.com. If
            you witness any unauthorised use of our brand on a third-party website, please let us know at{" "}
            <a href={`mailto:${brand.email}`} className="text-body underline-offset-2 hover:underline">
              {brand.email}
            </a>
            .
          </p>
          <p className="inline-flex items-center gap-2 text-body">
            <Icon name="warning" size={16} className="text-beige" /> Warning: Beware of Fraudulent Websites
          </p>
        </div>
      </div>
    </footer>
  );
}
