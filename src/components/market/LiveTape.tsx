import TvWidget from "@/components/market/TvWidget";
import type { Locale } from "@/i18n";

const symbols = [
  { proName: "OANDA:XAUUSD", title: "XAU/USD" },
  { proName: "OANDA:XAGUSD", title: "XAG/USD" },
  { proName: "FX:EURUSD", title: "EUR/USD" },
  { proName: "FX:GBPUSD", title: "GBP/USD" },
  { proName: "FX_IDC:USDTRY", title: "USD/TRY" },
  { proName: "CAPITALCOM:US500", title: "US500" },
  { proName: "CAPITALCOM:US100", title: "NAS100" },
  { proName: "CAPITALCOM:DE40", title: "GER40" },
  { proName: "TVC:UKOIL", title: "Brent" },
  { proName: "CAPITALCOM:DXY", title: "DXY" },
  { proName: "BITSTAMP:BTCUSD", title: "BTC/USD" },
  { proName: "BITSTAMP:ETHUSD", title: "ETH/USD" },
];

/** Live market tape under the hero (TradingView ticker-tape widget). */
export default function LiveTape({ locale }: { locale: Locale }) {
  return (
    <div className="relative z-10 border-t border-black/5 bg-fog" aria-label="Live market tape">
      <TvWidget
        locale={locale}
        src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
        config={{ symbols, showSymbolLogo: false, isTransparent: true, displayMode: "adaptive", colorTheme: "light" }}
        className="h-[46px]"
      />
    </div>
  );
}
