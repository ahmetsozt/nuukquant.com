import type { Metadata } from "next";
import Shell from "@/components/layout/Shell";
import PageIntro from "@/components/sections/PageIntro";
import SectionHead from "@/components/ui/SectionHead";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import RuleLadder from "@/components/trainer/RuleLadder";
import TrainerGame from "@/components/trainer/TrainerGame";
import { getContent } from "@/i18n";
import { SITE } from "@/lib/seo";

const URL = `${SITE}/antrenman/`;
const TITLE = "Antrenman · NUUK";
const DESCRIPTION =
  "Gerçek geçmiş grafikte 60 saniyelik kural antrenmanı: formasyon kilitlenince gir, stop'a sadık kal, hedefe sabret. Sonuç para ile değil R ile ölçülür. Eğitim simülasyonudur, yatırım tavsiyesi değildir.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { type: "website", siteName: "NUUK", url: URL, locale: "tr_TR", title: TITLE, description: DESCRIPTION },
};

const STEPS = [
  { title: "Grafik akar", body: "Gerçek geçmiş fiyat hareketi 60 saniyede 150 mum olarak oynar. Hangi piyasa ve hangi tarih olduğu tur bitince açıklanır." },
  { title: "Formasyon kilitlenir", body: "Çekiç, yutan mum ya da yıldız formasyonu oluştuğunda grafik onu işaretler ve stop seviyesini gösterir." },
  { title: "Basılı tut, bırak", body: "LONG ya da SHORT tuşunu basılı tuttuğun sürece pozisyondasın. Stop −1R'de, hedef +2R'de kendiliğinden kapanır." },
  { title: "R ve disiplin", body: "Sonuç R ile yazılır ve işlem maliyeti düşülür. Disiplin puanı, girişlerinin kaçının kurala uygun olduğunu gösterir." },
] as const;

const MEASURES = [
  "Beklemek: formasyon yokken girmek kural dışı sayılır.",
  "Stop'a sadık kalmak: zarar, baştan belli olan riskle sınırlı kalır.",
  "Hedefe sabretmek: erken çıkış sonucu R olarak küçültür.",
  "Bir setup, bir giriş: aynı formasyona ikinci kez girmek kural dışıdır.",
] as const;

/**
 * NUUK Antrenman at the short URL nuukquant.com/antrenman/ (Turkish only).
 * The game is a client component; candles are static files in public/trainer/,
 * rebuilt by scripts/trainer/fetch-candles.mjs.
 */
export default function TrainerPage() {
  const c = getContent("tr");
  return (
    <Shell locale="tr">
      <PageIntro
        tone="dark"
        kicker="NUUK Antrenman · eğitim simülasyonu"
        title="PnL değil, kural."
        body="Gerçek geçmiş grafik akar. Formasyon kilitlenince gir, stop'a sadık kal, hedefe sabret. Sonuç para ile değil R ile, yani aldığın riskin katıyla ölçülür."
        cta={{ label: "Antrenmana başla", href: "#antrenman" }}
        secondary={{ label: "Nasıl oynanır", href: "#nasil-oynanir" }}
        visual={<RuleLadder />}
        crumbs={[{ label: c.ui.home, href: "/tr/" }, { label: "Antrenman" }]}
      />

      <section id="antrenman" className="section-pad scroll-mt-[var(--header-h)] bg-hero text-white" aria-labelledby="trainer-heading">
        <div className="container-x">
          <SectionHead title="60 saniye, tek kural seti." lead="Tuşu basılı tuttuğun sürece pozisyondasın, bıraktığın an kapanır. Masaüstünde ok tuşları ya da W ve S ile de oynanır." dark split />
          <h2 id="trainer-heading" className="sr-only">
            Antrenman turu
          </h2>
          <div className="mt-10">
            <TrainerGame />
          </div>
        </div>
      </section>

      <section id="nasil-oynanir" className="section-pad scroll-mt-[var(--header-h)] bg-white" aria-labelledby="how-heading">
        <div className="container-x">
          <SectionHead title="Nasıl oynanır" />
          <ol className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {STEPS.map((step, i) => (
              <li key={step.title} className="rv rounded-card bg-fog p-7">
                <span className="flex size-8 items-center justify-center rounded-full bg-primary text-[13px] font-bold text-white">{i + 1}</span>
                <h3 className="mt-5 text-[19px]">{step.title}</h3>
                <p className="mt-2 text-[14.5px] leading-6 text-body">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad bg-fog" aria-labelledby="measures-heading">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <SectionHead title="Antrenman neyi ölçer" lead="Bu bir kazanç oyunu değil, süreç çalışmasıdır. Her turun sonunda kuralın o grafikte mekanik olarak ne yaptığını da görürsün." />
            <p className="mt-6 text-[16px] leading-7 text-body">
              {"Buradaki formasyonlar genel eğitim örnekleridir, NUUK'un işlem sistemleri değildir. Tek başlarına kazanç avantajı sağladıkları varsayılmamalıdır."}
            </p>
            <div className="mt-8">
              <Button href="/tr/education/" variant="outline-dark">
                Eğitim programı
              </Button>
            </div>
          </div>
          <div className="rounded-card bg-white p-8 shadow-card lg:col-span-6">
            <p className="kicker mb-5">Disiplin puanına girenler</p>
            <ul className="space-y-4">
              {MEASURES.map((measure) => (
                <li key={measure} className="flex gap-3 text-[16px] leading-6 text-ink">
                  <span className="mt-0.5 flex size-6 flex-none items-center justify-center rounded-full bg-primary text-white">
                    <Icon name="check" size={13} />
                  </span>
                  {measure}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-primary py-10 lg:py-12" aria-label="Risk uyarısı">
        <div className="container-x flex gap-3 text-white/85">
          <Icon name="warning" size={18} className="mt-0.5 flex-none" />
          <p className="text-[13px] leading-5">
            <strong className="text-white">Eğitim simülasyonudur.</strong> Geçmiş piyasa verisi üzerinde oynanır, gerçek işlem yapılmaz ve gerçek para kullanılmaz. Yatırım tavsiyesi değildir. Simülasyondaki sonuçlar gerçek işlem sonuçlarını temsil etmez; geçmiş sonuçlar geleceği göstermez.
          </p>
        </div>
      </section>
    </Shell>
  );
}
