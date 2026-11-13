import type { Metadata } from "next";
import TrainerPageView, { trainerMetadata } from "@/components/trainer/TrainerPageView";

export const metadata: Metadata = trainerMetadata("tr");

/** NUUK Game in Turkish at nuukquant.com/antrenman/. The English page is /game/. */
export default function TrainerPage() {
  return <TrainerPageView lang="tr" />;
}
