import type { SiteContent } from "@/content/en";
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
import Testimonials from "@/components/home/Testimonials";
import LatestPosts from "@/components/home/LatestPosts";
import CtaBand from "@/components/sections/CtaBand";

export default function HomeSections({ c }: { c: SiteContent }) {
  return (
    <>
      <HeroPerson c={c} />
      <AwardsStrip c={c} />
      <StatCards c={c} />
      <Pillars c={c} />
      <PromoBand c={c} />
      <RecordStrip c={c} />
      <BrokersPreview c={c} />
      <SystemsPreview c={c} />
      <SignalPreview c={c} />
      <EducationPreview c={c} />
      <Testimonials c={c} />
      <LatestPosts c={c} />
      <CtaBand c={c} />
    </>
  );
}
