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
  contactHref: "/contact-us/",
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
    label: "Markets",
    href: "/markets/",
    items: [
      { label: "All Markets", href: "/markets/" },
      { label: "Foreign Exchange", href: "/markets/#fx" },
      { label: "Commodities", href: "/markets/#commodities" },
      { label: "Equity Indices", href: "/markets/#indices" },
      { label: "Equities & ETFs", href: "/markets/#equities" },
      { label: "Fixed Income", href: "/markets/#bonds" },
      { label: "Metals", href: "/markets/#metals" },
      { label: "Digital Assets", href: "/markets/#crypto" },
      { label: "Fee Structure", href: "/markets/pricing-overview/" },
    ],
  },
  {
    label: "Technology",
    href: "/technology/",
    items: [
      { label: "Platform", href: "/technology/" },
      { label: "API Integration", href: "/technology/#api" },
      { label: "AI Intelligence", href: "/technology/#ai" },
      { label: "Infrastructure", href: "/technology/#infrastructure" },
    ],
  },
  {
    label: "Insights",
    href: "/#insights",
    items: [
      { label: "Market Insights", href: "/#insights" },
      { label: "Press", href: "/#insights" },
      { label: "Events", href: "/#insights" },
    ],
  },
  {
    label: "About Us",
    href: "/company/",
    items: [
      { label: "Our Story", href: "/company/" },
      { label: "Contact Us", href: "/contact-us/" },
      { label: "Careers", href: "mailto:info@nuukquant.com?subject=Careers" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Risk Disclosure", href: "#risk" },
  { label: "Privacy", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Cookies", href: "#" },
  { label: "Fee Structure", href: "/markets/pricing-overview/" },
];

export const socials = [
  { label: "LinkedIn", href: "#", icon: "in" },
  { label: "X", href: "#", icon: "x" },
  { label: "YouTube", href: "#", icon: "yt" },
  { label: "Instagram", href: "#", icon: "ig" },
];

export const home = {
  hero: {
    title: ["Precision.", "Intelligence.", "Execution."],
    kicker: "AI-ENGINEERED TRADING INFRASTRUCTURE",
    body:
      "NUUK is an AI-engineered quantitative trading company operating in global financial markets. We build proprietary algorithms, machine-learning models and institutional execution systems for disciplined, risk-controlled trading across FX, commodities, indices, equities and digital assets.",
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
      title: ["Multi-Asset", "Coverage"],
      body: "FX, commodities, equity indices, equities, fixed income, metals and digital assets, reached through a diversified network of regulated venues and liquidity providers.",
      href: "/markets/",
      icon: "diversification",
    },
    {
      title: ["Proprietary", "Technology"],
      body: "Custom-built machine-learning models, ultra-low-latency execution and a web platform with FIX and HTTP API access.",
      href: "/technology/",
      icon: "technology",
    },
    {
      title: ["Transparent", "Fee Structure"],
      body: "Clear execution, financing and data charges agreed up front. No hidden mark-ups.",
      href: "/markets/pricing-overview/",
      icon: "pricing",
    },
    {
      title: ["Institutional", "Service"],
      body: "A dedicated relationship manager backed by our execution desk, risk team and engineers.",
      href: "/contact-us/",
      icon: "service",
    },
  ],
  servicing: {
    title: "One Team Serving Institutions and Professional Investors Worldwide",
    items: [
      "Structured onboarding with access to the platform and API tools from day one",
      "Coverage across time zones from our base in DIFC, Dubai",
      "Execution desk support for block, OTC and multi-venue orders",
      "Post-trade reporting, reconciliation and risk analytics",
    ],
    cta: { label: "Get Started", href: "/contact-us/" },
  },
  network: {
    title: "Our Network",
    partners: [
      "Tier-1 FX ECNs",
      "Global Futures Exchanges",
      "Equity Index Venues",
      "Digital Asset Venues",
      "Prime Custodians",
      "Liquidity Providers",
    ],
  },
  experts: {
    title: "Proprietary Trading Platform",
    items: [
      {
        title: "Built by Engineers",
        body: "A web platform and execution engine designed in-house, delivered through a single multi-currency account.",
      },
      {
        title: "Customisation and Integrations",
        body: "FIX and HTTP APIs, tailored instrument sets and white-label deployments for partners who need their own front end.",
      },
      {
        title: "Distributed Infrastructure",
        body: "Co-located, redundant infrastructure across the major trading hubs with sub-millisecond internal latency.",
      },
    ],
    cta: { label: "Learn More", href: "/technology/" },
  },
  exchanges: {
    title: "Global Venue Coverage",
    groups: [
      [
        { city: "New York, United States", codes: ["NYSE", "NASDAQ"] },
        { city: "Chicago, United States", codes: ["CME", "CBOT", "CBOE"] },
        { city: "Atlanta, United States", codes: ["ICE"] },
      ],
      [
        { city: "London, United Kingdom", codes: ["LSE", "ICE Futures Europe"] },
        { city: "Frankfurt, Germany", codes: ["Eurex", "Xetra"] },
        { city: "Zurich, Switzerland", codes: ["SIX"] },
      ],
      [
        { city: "Dubai, UAE", codes: ["DGCX", "DFM"] },
        { city: "Abu Dhabi, UAE", codes: ["ADX"] },
      ],
      [
        { city: "Hong Kong", codes: ["HKEX"] },
        { city: "Singapore", codes: ["SGX"] },
        { city: "Tokyo, Japan", codes: ["JPX"] },
      ],
    ],
  },
  broker: {
    title: "Built on Governance",
    body:
      "Our infrastructure connects to a diversified network of regulated venues, custodians and liquidity providers, enabling automated, multi-venue execution with data integrity, latency efficiency and complete systematic governance.",
    cta: { label: "About NUUK", href: "/company/" },
    items: [
      { title: "Systematic Governance", body: "Every decision is rule-based, logged and auditable." },
      { title: "Trusted Counterparties", body: "Regulated venues and established liquidity providers only." },
      { title: "Secure Custody", body: "Client assets held with established custodians." },
      { title: "Segregated Assets", body: "Client assets kept separate from company funds." },
    ],
  },
  pulse: {
    title: "NUUK Insights",
    tabs: ["All Posts", "Insights", "Press", "Events"],
    posts: [
      {
        title: "Rates, growth and the dollar into year-end",
        excerpt: "What our macro models are pricing across FX and rates as the policy path is repriced.",
        tag: "Insight",
        category: "Insights",
        date: "Sep 4, 2026",
        tone: "stocks",
      },
      {
        title: "Gold near record highs: what the signal engine sees",
        excerpt: "Metals stay bid while real yields soften. A look at our momentum and mean-reversion signals.",
        tag: "Insight",
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
        title: "Institutional roundtables at DIFC this autumn",
        excerpt: "Join our team for a series of closed-door sessions on AI in execution and risk.",
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
      "Execution, connectivity and AI-driven analytics for banks that need multi-asset market access through a single, disciplined counterparty.",
    highlights: [
      { title: "Direct API", body: "FIX and HTTP connectivity for order routing, market data and reporting." },
      { title: "White Label", body: "Deploy our platform under your brand with tailored instruments and permissions." },
      { title: "Dedicated Support", body: "Execution desk and post-trade teams in your time zone." },
    ],
  },
  brokerages: {
    title: "Brokerages",
    intro: "Extend your product range with multi-asset coverage, competitive execution and a scalable back office.",
    highlights: [
      { title: "Omnibus & Sub-Accounts", body: "Flexible account structures for end-client setups." },
      { title: "White Label", body: "A ready-made trading front end that carries your brand." },
      { title: "Dedicated Support", body: "Onboarding, execution desk and reconciliation support." },
    ],
  },
  "asset-managers": {
    title: "Asset Managers",
    intro: "Execute across global venues from one multi-currency account with institutional reporting and custody.",
    highlights: [
      { title: "Multi-Asset Execution", body: "FX, commodities, indices, equities, fixed income, metals and digital assets." },
      { title: "Portfolio Dashboards", body: "Real-time risk, exposure and P&L analytics." },
      { title: "Dedicated Support", body: "A relationship manager backed by our execution desk." },
    ],
  },
  "family-offices": {
    title: "Family Offices",
    intro: "Discreet, personalised service with global diversification and secure custody.",
    highlights: [
      { title: "Global Diversification", body: "Access to exchange-traded and OTC markets worldwide." },
      { title: "Secure Custody", body: "Segregated assets with established custodians." },
      { title: "Dedicated Support", body: "A single point of contact for every request." },
    ],
  },
  "professional-traders": {
    title: "Professional Traders",
    intro: "Low-latency execution, live market depth and algorithmic tools built by engineers who trade.",
    highlights: [
      { title: "Live Market Depth", body: "Full order-book transparency across venues." },
      { title: "Algorithmic Execution", body: "Automate entries and exits with rule-based orders." },
      { title: "Risk Controls", body: "Position sizing, circuit breakers and real-time exposure limits." },
    ],
  },
  "individual-investors": {
    title: "Individual Investors",
    intro: "Access new asset classes through one account and a platform that grows with you.",
    highlights: [
      { title: "New Asset Classes", body: "Equities, indices, metals and digital assets from one account." },
      { title: "Transparent Fees", body: "Clear execution and financing charges, agreed up front." },
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
  { id: "fx", label: "Foreign Exchange", tone: "currencies", body: "Spot FX majors, minors and exotics with Tier-1 ECN liquidity." },
  { id: "commodities", label: "Commodities", tone: "futures", body: "Energy, agricultural and metals futures on major exchanges." },
  { id: "indices", label: "Equity Indices", tone: "options", body: "Global index futures and CFDs with deep liquidity." },
  { id: "equities", label: "Equities & ETFs", tone: "stocks", body: "Listed equities and ETFs across US, European and Asian venues." },
  { id: "bonds", label: "Fixed Income", tone: "bonds", body: "Government and corporate bonds, exchange-traded and OTC." },
  { id: "metals", label: "Metals", tone: "metals", body: "Gold, silver, platinum and palladium, spot and futures." },
  { id: "crypto", label: "Digital Assets", tone: "crypto", body: "Major digital assets via regulated venues, 24/7." },
];

export const technologyFeatures = [
  { title: "Proprietary ML Models", body: "Adaptive learning systems trained on decades of market data." },
  { title: "Ultra-Low Latency Execution", body: "Co-located servers, direct market access and smart order routing." },
  { title: "Advanced Risk Management", body: "Automated position sizing, circuit breakers and stress testing." },
  { title: "Multi-Venue Connectivity", body: "Direct connections to 50+ regulated venues and liquidity providers." },
  { title: "Real-Time Data Aggregation", body: "Millions of market data points per second, normalised and validated." },
  { title: "Bank-Grade Security", body: "Encryption, multi-factor authentication and hardware security modules." },
  { title: "Portfolio Dashboards", body: "Real-time risk, exposure and P&L analytics." },
  { title: "White Label Solutions", body: "Your brand on our infrastructure, engineered for control." },
];

export const rateCategories = [
  { title: "Execution Commissions", body: "Per-instrument commissions agreed in your fee schedule, disclosed before every trade." },
  { title: "Financing", body: "Overnight financing on leveraged positions, quoted per instrument and currency." },
  { title: "Borrow Costs", body: "Stock and asset borrow costs for short positions, disclosed before execution." },
  { title: "Data & Connectivity", body: "Market data and API connectivity at flat, published rates." },
  { title: "Custody & Settlement", body: "Custody, settlement and withdrawal charges listed in your schedule." },
  { title: "Inactivity", body: "Applied only after a prolonged period without activity." },
];
