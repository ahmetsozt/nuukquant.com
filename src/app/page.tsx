import Shell from "@/components/layout/Shell";
import HomeSections from "@/components/home/HomeSections";
import { getContent } from "@/i18n";

/** English home served at the site root. Other locales live under /{locale}/. */
export default function RootHomePage() {
  return (
    <Shell locale="en">
      <HomeSections c={getContent("en")} />
    </Shell>
  );
}
