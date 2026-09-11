import type { MetadataRoute } from "next";
import { en } from "@/content/en";

export const dynamic = "force-static";

/** Installable-app metadata, also read by some search and store crawlers. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NUUK — AI-Engineered Trading & Portfolio Management",
    short_name: "NUUK",
    description: en.meta.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    orientation: "portrait",
    categories: ["finance", "business", "education"],
    lang: "en",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
