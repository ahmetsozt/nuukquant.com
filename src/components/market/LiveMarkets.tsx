import TvWidget from "@/components/market/TvWidget";
import SectionHead from "@/components/ui/SectionHead";
import type { SiteContent } from "@/content/en";
import type { Locale } from "@/i18n";

const tabs = (c: SiteContent) => [
  { title: c.home.markets.tabs[0], symbols: [{ s: "FX:EURUSD", d: "EUR/USD" }, { s: "FX:GBPUSD", d: "GBP/USD" }, { s: "FX:USDJPY", d: "USD/JPY" }, { s: "FX:AUDUSD", d: "AUD/USD" }, { s: "FX_IDC:USDTRY", d: "USD/TRY" }, { s: "FX_IDC:EURTRY", d: "EUR/TRY" }] },
  { title: c.home.markets.tabs[1], symbols: [{ s: "OANDA:XAUUSD", d: "Gold" }, { s: "OANDA:XAGUSD", d: "Silver" }, { s: "TVC:UKOIL", d: "Brent" }, { s: "TVC:USOIL", d: "WTI" }, { s: "CAPITALCOM:NATURALGAS", d: "Natural gas" }] },
  { title: c.home.markets.tabs[2], symbols: [{ s: "CAPITALCOM:US500", d: "US500" }, { s: "CAPITALCOM:US100", d: "NAS100" }, { s: "CAPITALCOM:US30", d: "US30" }, { s: "CAPITALCOM:DE40", d: "GER40" }, { s: "CAPITALCOM:UK100", d: "UK100" }, { s: "BIST:XU100", d: "BIST 100" }] },
  { title: c.home.markets.tabs[3], symbols: [{ s: "BITSTAMP:BTCUSD", d: "Bitcoin" }, { s: "BITSTAMP:ETHUSD", d: "Ethereum" }, { s: "BINANCE:SOLUSDT", d: "Solana" }, { s: "BINANCE:XRPUSDT", d: "XRP" }] },
  { title: c.home.markets.tabs[4], symbols: [{ s: "NASDAQ:AAPL", d: "Apple" }, { s: "NASDAQ:NVDA", d: "Nvidia" }, { s: "NASDAQ:MSFT", d: "Microsoft" }, { s: "NASDAQ:TSLA", d: "Tesla" }, { s: "BIST:THYAO", d: "Türk Hava Yolları" }, { s: "BIST:ASELS", d: "Aselsan" }] },
];

/** "Live prices" section: TradingView market-quotes widget with asset-class tabs. */
export default function LiveMarkets({ c, locale }: { c: SiteContent; locale: Locale }) {
  const m = c.home.markets;
  return (
    <section className="section-pad bg-fog" aria-labelledby="markets-heading">
      <div className="container-x">
        <SectionHead kicker={m.kicker} title={m.title} lead={m.lead} split />
        <div className="mt-10 overflow-hidden rounded-card bg-white shadow-card ring-1 ring-black/5">
          <TvWidget
            locale={locale}
            src="https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js"
            config={{ width: "100%", height: 760, symbolsGroups: tabs(c).map((t) => ({ name: t.title, symbols: t.symbols.map((x) => ({ name: x.s, displayName: x.d })) })), showSymbolLogo: true, isTransparent: true, colorTheme: "light" }}
            className="h-[760px]"
          />
        </div>
        <p className="mt-4 text-[12px] text-muted">{m.note}</p>
      </div>
    </section>
  );
}
