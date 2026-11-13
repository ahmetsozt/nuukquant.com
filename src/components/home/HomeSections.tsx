import type { SiteContent } from "@/content/en";
import type { Locale } from "@/i18n";
import HeroPerson from "@/components/home/HeroPerson";
import DailyPnl from "@/components/market/DailyPnl";
import StatCards from "@/components/home/StatCards";
import DeskJournalTeaser from "@/components/journal/DeskJournalTeaser";
import Pillars from "@/components/home/Pillars";
import PromoBand from "@/components/home/PromoBand";
import RecordStrip from "@/components/home/RecordStrip";
import SystemsPreview from "@/components/home/SystemsPreview";
import SignalPreview from "@/components/home/SignalPreview";
import EducationPreview from "@/components/home/EducationPreview";
import GameTeaser from "@/components/home/GameTeaser";
import LatestPosts from "@/components/home/LatestPosts";
import CtaBand from "@/components/sections/CtaBand";

export default function HomeSections({ c, locale }: { c: SiteContent; locale: Locale }) {
  return (
    <>
      <HeroPerson c={c} locale={locale} />
      <DailyPnl c={c} />
      <StatCards c={c} />
      <DeskJournalTeaser locale={locale} />
      <Pillars c={c} />
      <PromoBand c={c} />
      <RecordStrip c={c} />
      <SystemsPreview c={c} />
      <SignalPreview c={c} />
      <EducationPreview c={c} />
      {/* NUUK Game exists in English and Turkish only, so only those home pages link to it. */}
      {(locale === "en" || locale === "tr") && <GameTeaser lang={locale} />}
      <LatestPosts c={c} />
      <CtaBand c={c} />
    </>
  );
}
