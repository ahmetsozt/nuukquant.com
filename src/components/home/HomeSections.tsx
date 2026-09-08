import type { SiteContent } from "@/content/en";
import type { Locale } from "@/i18n";
import LiveMarkets from "@/components/market/LiveMarkets";
import HeroPerson from "@/components/home/HeroPerson";
import AwardsStrip from "@/components/home/AwardsStrip";
import StatCards from "@/components/home/StatCards";
import Pillars from "@/components/home/Pillars";
import PromoBand from "@/components/home/PromoBand";
import RecordStrip from "@/components/home/RecordStrip";
import BrokersPreview from "@/components/home/BrokersPreview";
import SystemsPreview from "@/components/home/SystemsPreview";
import SignalPreview from "@/components/home/SignalPreview";
import EducationPreview from "@/components/home/EducationPreview";
import LatestPosts from "@/components/home/LatestPosts";
import CtaBand from "@/components/sections/CtaBand";

export default function HomeSections({ c, locale }: { c: SiteContent; locale: Locale }) {
  return (
    <>
      <HeroPerson c={c} locale={locale} />
      <AwardsStrip c={c} />
      <StatCards c={c} />
      <LiveMarkets c={c} locale={locale} />
      <Pillars c={c} />
      <PromoBand c={c} />
      <RecordStrip c={c} />
      <BrokersPreview c={c} />
      <SystemsPreview c={c} />
      <SignalPreview c={c} />
      <EducationPreview c={c} />
      <LatestPosts c={c} />
      <CtaBand c={c} />
    </>
  );
}
