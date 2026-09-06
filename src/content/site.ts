export type NavLink = { label: string; href: string; external?: boolean };
export type NavGroup = { label: string; href: string; items: NavLink[] };

export const brand = {
  name: "NUUK",
  legalName: "NUUK Quant",
  tagline: "Financial AI Infrastructure",
  email: "info@nuukquant.com",
  phone: "+971 58 688 4464",
  phoneHref: "tel:+971586884464",
  office: "Dubai International Financial Centre (DIFC), Dubai, UAE",
  loginHref: "#login",
  getStartedHref: "/contact-us/",
};

export const nav: NavGroup[] = [
  {
    label: "Clients",
    href: "/clients/",
    items: [
      { label: "Banks", href: "/clients/banks/" },
      { label: "Brokerages", href: "/clients/brokerages/" },
      { label: "Asset Managers", href: "/clients/asset-managers/" },
      { label: "Family Offices", href: "/clients/family-offices/" },
      { label: "Professional Traders", href: "/clients/professional-traders/" },
      { label: "Individual Investors", href: "/clients/individual-investors/" },
    ],
  },
  {
    label: "Trading",
    href: "/markets/",
    items: [
      { label: "All Markets", href: "/markets/" },
      { label: "Stocks & ETFs", href: "/markets/#stocks" },
      { label: "Currencies", href: "/markets/#currencies" },
      { label: "Futures", href: "/markets/#futures" },
      { label: "Options", href: "/markets/#options" },
      { label: "Metals", href: "/markets/#metals" },
      { label: "Bonds", href: "/markets/#bonds" },
      { label: "Digital Assets", href: "/markets/#crypto" },
      { label: "Pricing Overview", href: "/markets/pricing-overview/" },
      { label: "Rates & Commissions", href: "/markets/pricing-overview/#rates" },
    ],
  },
  {
    label: "Technology",
    href: "/technology/",
    items: [
      { label: "Platforms", href: "/technology/" },
      { label: "API Integration", href: "/technology/#api" },
      { label: "White Label", href: "/technology/#white-label" },
      { label: "AI Intelligence", href: "/technology/#ai" },
    ],
  },
  {
    label: "Insights",
    href: "/#pulse",
    items: [
      { label: "Market Insights", href: "/#pulse" },
      { label: "Market Updates", href: "/#pulse" },
      { label: "Events", href: "/#pulse" },
    ],
  },
  {
    label: "About Us",
    href: "/company/",
    items: [
      { label: "Our Story", href: "/company/" },
      { label: "Contact Us", href: "/contact-us/" },
      { label: "Careers", href: "mailto:info@nuukquant.com?subject=Careers" },
      { label: "Help Centre", href: "mailto:info@nuukquant.com?subject=Support" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Cookie Declaration", href: "#" },
  { label: "Trading risk warning", href: "#risk" },
  { label: "GDPR Compliance", href: "#" },
  { label: "Document Centre", href: "#" },
  { label: "Site map", href: "#" },
  { label: "Commissions", href: "/markets/pricing-overview/" },
];

export const socials = [
  { label: "LinkedIn", href: "#", icon: "in" },
  { label: "X", href: "#", icon: "x" },
  { label: "YouTube", href: "#", icon: "yt" },
  { label: "Instagram", href: "#", icon: "ig" },
];

export const home = {
  hero: {
    title: ["Global.", "Prime.", "Broker."],
    kicker: "AI-ENGINEERED TRADING INFRASTRUCTURE",
    body:
      "NUUK provides access to global stocks, ETFs, bonds, futures, options, commodities, currencies and digital assets through a proprietary platform, backed by a dedicated service. Headquartered in DIFC, Dubai.",
    cta: { label: "Contact Us", href: "/contact-us/" },
  },
  audiences: [
    { label: "Banks", href: "/clients/banks/" },
    { label: "Brokerages", href: "/clients/brokerages/" },
    { label: "Asset Managers", href: "/clients/asset-managers/" },
    { label: "Family Offices", href: "/clients/family-offices/" },
    { label: "Professional Traders", href: "/clients/professional-traders/" },
    { label: "Individual Investors", href: "/clients/individual-investors/" },
  ],
  core: [
    {
      title: ["Asset", "Diversification"],
      body: "Expand your portfolio with global stocks, ETFs, bonds, futures, options, metals, FX and digital assets across 50+ markets.",
      href: "/markets/",
      icon: "diversification",
    },
    {
      title: ["Proprietary", "Technology"],
      body: "A customisable trading platform available on desktop and web, with FIX and HTTP API access and AI-driven analytics.",
      href: "/technology/",
      icon: "technology",
    },
    {
      title: ["Transparent", "Pricing"],
      body: "Customisable rates. Zero custody fees on stocks and ETFs. Flat trading, withdrawal and data feed charges. Clear shorting and overnight commissions.",
      href: "/markets/pricing-overview/",
      icon: "pricing",
    },
    {
      title: ["Personalised", "Service"],
      body: "A dedicated relationship manager, supported by our back office, trade desk and technology teams.",
      href: "/contact-us/",
      icon: "service",
    },
  ],
  servicing: {
    title: "Our Teams Service Institutions and Professional Investors Worldwide",
    items: [
      "Fast onboarding with instant access to platforms and API tools",
      "A global team, speaking your language in your timezone",
      "Professional trade desk support and management of OTC trades",
      "Post-trade support covering clearance and reconciliation",
    ],
    cta: { label: "Get Started", href: "/contact-us/" },
  },
  network: {
    title: "Our Network",
    partners: [
      "Tier-1 FX ECNs",
      "Global Futures Exchanges",
      "Equity Index Pools",
      "Digital Asset Venues",
      "Prime Custodians",
      "Liquidity Providers",
    ],
  },
  experts: {
    title: "Proprietary Trading Platforms",
    items: [
      {
        title: "Experts in Technology",
        body: "Synchronised desktop and web platforms accessible through a single, multi-currency account.",
      },
      {
        title: "Customisation and Integrations",
        body: "Bespoke white label, FIX/HTTP API, tailored instruments and end-client setups. No minimum commitment required for API access.",
      },
      {
        title: "Distributed Network",
        body: "Backed by distributed, co-located infrastructure across global trading hubs.",
      },
    ],
    cta: { label: "Learn More", href: "/technology/" },
  },
  exchanges: {
    title: "One Platform. All Exchanges",
    groups: [
      [
        { city: "Atlanta, United States", codes: ["ICE"] },
        { city: "Chicago, United States", codes: ["CBOT", "CBOE", "CME", "COMEX", "NYMEX", "NYSE ARCA"] },
        { city: "Lenexa, United States", codes: ["BATS"] },
        { city: "New York, United States", codes: ["NYSE AMEX", "NASDAQ", "NYSE", "OTCMKTS"] },
      ],
      [
        { city: "London, United Kingdom", codes: ["LSE", "LSEIOB"] },
        { city: "Prague, Czech Republic", codes: ["PSE"] },
        { city: "Frankfurt, Germany", codes: ["EUREX", "FWB", "XETRA"] },
        { city: "Milan, Italy", codes: ["MIL"] },
      ],
      [
        { city: "Stockholm, Sweden", codes: ["SOMX"] },
        { city: "Zurich, Switzerland", codes: ["SIX"] },
        { city: "Dubai, UAE", codes: ["DGCX"] },
      ],
      [
        { city: "Hong Kong, China", codes: ["HKEX"] },
        { city: "Tokyo, Japan", codes: ["TSE"] },
        { city: "Singapore", codes: ["SGX"] },
      ],
    ],
  },
  broker: {
    title: "Your Trusted Broker",
    body:
      "NUUK Quant operates from the Dubai International Financial Centre and serves professional and institutional clients through a network of regulated venues, custodians and liquidity providers.",
    cta: { label: "About NUUK", href: "/company/" },
    items: [
      { title: "Institutional Discipline", body: "Systematic governance across execution, risk and reporting." },
      { title: "Trusted Partners", body: "Long-standing relationships with regulated venues and liquidity providers." },
      { title: "Secure Custody", body: "Safe asset custody with established custodians." },
      { title: "Asset Segregation", body: "Client assets held separately from company funds." },
    ],
  },
  pulse: {
    title: "NUUK Pulse",
    tabs: ["All Posts", "Insights", "Press", "Events", "Blog"],
    posts: [
      {
        title: "Is US growth outrunning hiring?",
        excerpt: "A modest payroll rebound would leave labour-market momentum subdued despite accelerating services activity.",
        tag: "Daily",
        category: "Insights",
        date: "Sep 4, 2026",
        tone: "stocks",
      },
      {
        title: "Gold holds near record as real yields soften",
        excerpt: "Metals stay bid while the market re-prices the path of policy rates into year-end.",
        tag: "Daily",
        category: "Insights",
        date: "Sep 3, 2026",
        tone: "metals",
      },
      {
        title: "NUUK expands multi-venue connectivity",
        excerpt: "New direct connections add depth across FX, futures and digital asset venues.",
        tag: "Press",
        category: "Press",
        date: "Sep 2, 2026",
        tone: "currencies",
      },
      {
        title: "Meet NUUK in Dubai this autumn",
        excerpt: "Join our team for a series of institutional roundtables at DIFC.",
        tag: "Event",
        category: "Events",
        date: "Sep 1, 2026",
        tone: "crypto",
      },
    ],
  },
};

export const audiences: Record<
  string,
  { title: string; intro: string; highlights: { title: string; body: string }[] }
> = {
  banks: {
    title: "Banks",
    intro:
      "Prime brokerage, integration and execution services for banks seeking multi-asset market access through a single counterparty.",
    highlights: [
      { title: "Direct API", body: "FIX and HTTP connectivity for order routing, market data and reporting." },
      { title: "White Label", body: "Deploy our platform under your brand with tailored instruments and permissions." },
      { title: "Dedicated Support", body: "Institutional trade desk and post-trade teams in your timezone." },
    ],
  },
  brokerages: {
    title: "Brokerages",
    intro: "Extend your product range with global multi-asset access, competitive pricing and a scalable back office.",
    highlights: [
      { title: "Omnibus & Sub-Accounts", body: "Flexible account structures for end-client setups." },
      { title: "White Label", body: "A ready-made trading front end that carries your brand." },
      { title: "Dedicated Support", body: "Onboarding, trade desk and reconciliation support." },
    ],
  },
  "asset-managers": {
    title: "Asset Managers",
    intro: "Execute across 50+ markets from one multi-currency account with institutional reporting and custody.",
    highlights: [
      { title: "Multi-Asset Execution", body: "Stocks, ETFs, bonds, futures, options, metals, FX and digital assets." },
      { title: "Portfolio Dashboards", body: "Real-time risk, exposure and P&L analytics." },
      { title: "Dedicated Support", body: "A relationship manager backed by our trade desk." },
    ],
  },
  "family-offices": {
    title: "Family Offices",
    intro: "Discreet, personalised service with global diversification and secure custody.",
    highlights: [
      { title: "Global Diversification", body: "Access to global exchanges and OTC markets." },
      { title: "Secure Custody", body: "Segregated assets with established custodians." },
      { title: "Dedicated Support", body: "A single point of contact for every request." },
    ],
  },
  "professional-traders": {
    title: "Professional Traders",
    intro: "Low-latency execution, live market depth and algorithmic tools built by professionals for professionals.",
    highlights: [
      { title: "Live Market Depth", body: "Full order book transparency across venues." },
      { title: "Algo Trading", body: "Automate execution with triggered buy and sell orders." },
      { title: "Advanced Option Board", body: "Real-time options chains in a customisable layout." },
    ],
  },
  "individual-investors": {
    title: "Individual Investors",
    intro: "Unlock new asset classes through one account and a platform that grows with you.",
    highlights: [
      { title: "Unlock New Asset Classes", body: "Trade global stocks, ETFs, bonds, metals and digital assets." },
      { title: "Transparent Pricing", body: "Flat, clear commissions with zero custody fees on stocks and ETFs." },
      { title: "Dedicated Support", body: "Human support when you need it." },
    ],
  },
};

export const toneBg: Record<string, string> = {
  stocks: "bg-stocks",
  currencies: "bg-currencies",
  futures: "bg-futures",
  options: "bg-options",
  metals: "bg-metals",
  bonds: "bg-bonds",
  crypto: "bg-crypto",
};

export const assetClasses = [
  { id: "stocks", label: "Stocks & ETFs", tone: "stocks", body: "Global equities and ETFs across US, European and Asian exchanges." },
  { id: "currencies", label: "Currencies", tone: "currencies", body: "Spot FX majors, minors and exotics with institutional liquidity." },
  { id: "futures", label: "Futures", tone: "futures", body: "Index, rates, energy and agricultural futures on major exchanges." },
  { id: "options", label: "Options", tone: "options", body: "Listed equity, index and futures options with a real-time option board." },
  { id: "metals", label: "Metals", tone: "metals", body: "Gold, silver, platinum and palladium, spot and futures." },
  { id: "bonds", label: "Bonds", tone: "bonds", body: "Government and corporate bonds, OTC and exchange-traded." },
  { id: "crypto", label: "Digital Assets", tone: "crypto", body: "Major digital assets via regulated venues, 24/7." },
];

export const technologyFeatures = [
  { title: "Live Market Depth", body: "Full order book transparency." },
  { title: "Multi-Asset Basket Trader", body: "Execute complex strategies across markets, instantly." },
  { title: "Algo Trading", body: "Automate execution using triggered buy/sell orders." },
  { title: "FIX API Integration", body: "Low-latency connectivity for your trading setup." },
  { title: "Advanced Option Board", body: "View real-time options chains through a customisable layout." },
  { title: "Portfolio Dashboards", body: "Real-time risk, exposure and P&L analytics." },
  { title: "AI-Powered Pulse", body: "Market intelligence built into your platform." },
  { title: "White Label Solutions", body: "Your brand on our infrastructure, engineered for control." },
];

export const rateCategories = [
  { title: "Overnight Rates", body: "Financing applied to leveraged positions held overnight, quoted per instrument." },
  { title: "Short Positions", body: "Borrow costs for short equity positions, disclosed before execution." },
  { title: "Inactivity Fee", body: "Charged only after a prolonged period without trading activity." },
  { title: "Margin Trading", body: "Margin requirements per asset class with cross-margining across your portfolio." },
  { title: "Interest Rates", body: "Interest paid or charged on cash balances by currency." },
  { title: "Other Fees", body: "Data feeds, withdrawals and OTC execution at flat, published rates." },
];
