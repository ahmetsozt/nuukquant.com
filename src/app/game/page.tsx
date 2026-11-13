import type { Metadata } from "next";
import TrainerPageView, { trainerMetadata } from "@/components/trainer/TrainerPageView";

export const metadata: Metadata = trainerMetadata("en");

/** NUUK Game in English at nuukquant.com/game/. The Turkish page is /antrenman/. */
export default function GamePage() {
  return <TrainerPageView lang="en" />;
}
