import type { Metadata } from "next";
import Shell from "@/components/layout/Shell";
import PageIntro from "@/components/sections/PageIntro";
import InstrumentCloud from "@/components/free-signals/InstrumentCloud";
import SignalRecord from "@/components/free-signals/SignalRecord";
import Button from "@/components/ui/Button";
import { getContent } from "@/i18n";
import { SITE } from "@/lib/seo";

const URL = `${SITE}/free-signals/`;
const TITLE = "Ücretsiz Sinyaller · NUUK AI";
const DESCRIPTION =
  "NUUK AI'ın WhatsApp grubunda yayınladığı ücretsiz forex ve altın sinyalleri: giriş, SL, TP ve her sinyalin sonucu, zararla kapananlar dahil.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL, languages: { tr: URL, en: `${SITE}/en/free-signals/` } },
  openGraph: {
    type: "website",
    siteName: "NUUK",
    url: URL,
    locale: "tr_TR",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: `${SITE}/og/free-signals.png`, width: 1200, height: 630, alt: "NUUK AI ücretsiz sinyaller" }],
  },
};

/**
 * Public free-signals record at the short URL nuukquant.com/free-signals/ (linked from
 * the Facebook page bio and the WhatsApp group). Data: src/data/free-signals.json,
 * rebuilt by scripts/free-signals/publish.sh after each signal event.
 */
export default function FreeSignalsRecordPage() {
  const c = getContent("tr");
  const p = c.freeSignals;
  const group = c.brand.whatsappChannel;
  return (
    <Shell locale="tr">
      <PageIntro
        tone="dark"
        kicker={p.brandLine}
        title="Ücretsiz sinyaller, sonuçlarıyla birlikte."
        body="NUUK AI'ın WhatsApp grubunda yayınladığı her sinyal bu sayfada: giriş, zarar kes (SL), hedef (TP) ve sinyalin nasıl kapandığı. Yeni sinyal önce grupta yayınlanır."
        cta={{ label: "WhatsApp grubuna katıl", href: group }}
        secondary={{ label: "Sinyaller nasıl üretiliyor", href: "/tr/free-signals/" }}
        visual={<InstrumentCloud instruments={p.instruments} />}
        crumbs={[{ label: c.ui.home, href: "/tr/" }, { label: "Ücretsiz sinyaller" }]}
      />

      <SignalRecord lang="tr" />

      <section className="bg-primary py-12 lg:py-16" aria-labelledby="join-heading">
        <div className="container-x">
          <div className="rounded-card bg-white px-6 py-10 text-center shadow-card lg:px-16 lg:py-14">
            <h2 id="join-heading" className="h2-section mx-auto max-w-[720px]">
              Sinyali yayınlandığı anda almak için gruba katıl.
            </h2>
            <p className="mx-auto mt-4 max-w-[600px] text-[16px] leading-6 text-body">
              Giriş, SL ve TP gerçekleştiğinde grupta ayrıca bildirilir. Katılım ücretsizdir.
            </p>
            <div className="mt-8">
              <Button href={group} event="cta_click" eventLabel="free_signals_record_join">
                WhatsApp grubuna katıl
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
