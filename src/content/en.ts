/**
 * Single source of truth for all site copy. Other locales override parts of this
 * object (see src/i18n.ts). Anything marked "[FILL]" is a placeholder waiting for
 * real data from Ahmet.
 */
export type NavLink = { label: string; href: string };
export type NavGroup = { label: string; href: string; items: NavLink[] };
export type Cta = { label: string; href: string };
export type Status = "live" | "verified" | "test" | "paused" | "soon" | "pending";

export type Broker = {
  slug: string;
  name: string;
  tagline: string;
  regulator: string;
  licence: string;
  founded: string;
  minDeposit: string;
  platforms: string[];
  spreads: { pair: string; value: string }[];
  commission: string;
  leverage: string;
  funding: string[];
  withdrawalTime: string;
  islamic: boolean;
  languages: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  referralHref: string;
  steps: string[];
  status: Status;
  /** 2–3 sentence profile used on the broker's landing page. */
  summary: string;
  website: string;
  faq: { q: string; a: string }[];
};

export type TradingSystem = {
  slug: string;
  name: string;
  assetClass: string;
  timeframe: string;
  method: string;
  riskProfile: string;
  status: Status;
  since: string;
  summary: string;
  stats: { label: string; value: string }[];
  series: number[];
};

export type PerformanceCard = {
  name: string;
  source: string;
  verifiedHref: string;
  status: Status;
  since: string;
  updated: string;
  stats: { label: string; value: string; tone?: "up" | "down" | "neutral" }[];
  series: number[];
};

export const en = {
  meta: {
    title: "Ahmet S. Öztürk — Economist, Investor, Founder of NUUK",
    description:
      "Economist and investor based in DIFC, Dubai. AI-driven trading systems, managed accounts, broker partnerships, market signals and investor education.",
  },
  brand: {
    name: "NUUK",
    person: "Ahmet S. Öztürk",
    role: "Economist · Investor · Founder",
    legalName: "NUUK Quant",
    email: "info@nuukquant.com",
    phone: "+971 58 688 4464",
    phoneHref: "tel:+971586884464",
    whatsapp: "https://wa.me/971586884464",
    telegram: "https://t.me/NUUKQuant",
    calendly: "mailto:info@nuukquant.com?subject=Call%20request",
    office: "Dubai International Financial Centre (DIFC), Dubai, UAE",
  },
  ui: {
    contact: "Contact",
    getStarted: "Book a call",
    contactUs: "Contact",
    learnMore: "Learn more",
    language: "Language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    home: "Home",
    noPosts: "No posts in this category yet.",
    riskDisclosure: "Risk disclosure",
    verified: "Verified",
    live: "Live",
    test: "Testing",
    paused: "Paused",
    soon: "Coming soon",
    pending: "Verification pending",
    verificationInProgress: "Verification in progress",
    updated: "Updated",
    since: "Since",
    source: "Source",
    openAccount: "Open account",
    compare: "Compare brokers",
    subscribe: "Subscribe",
    register: "Register",
    requestDemo: "Request a demo",
    viewAll: "View all",
    readMore: "Read more",
    fill: "",
    telegram: "Telegram",
    whatsapp: "WhatsApp",
    legal: "Legal",
    followUs: "Follow",
    riskBar: {
      pre: "Trading leveraged products such as CFDs and forex carries a high risk of losing money rapidly.",
      strong: "Past performance is not a guarantee of future results.",
      post: "Nothing on this site is personal investment advice.",
    },
  },
  nav: [
    {
      label: "Services",
      href: "/#services",
      items: [
        { label: "AI trading systems", href: "/ai-trading/" },
        { label: "Track record", href: "/track-record/" },
        { label: "Managed accounts", href: "/portfolio-management/" },
        { label: "Broker partners", href: "/brokers/" },
        { label: "Signals & reports", href: "/signals/" },
        { label: "Education", href: "/education/" },
      ],
    },
    { label: "Brokers", href: "/brokers/", items: [] },
    { label: "Track record", href: "/track-record/", items: [] },
    { label: "Insights", href: "/insights/", items: [] },
    {
      label: "About",
      href: "/about/",
      items: [
        { label: "Story", href: "/about/" },
        { label: "Contact", href: "/contact-us/" },
        { label: "Risk disclosure", href: "/legal/risk-disclosure/" },
        { label: "IB disclosure", href: "/legal/ib-disclosure/" },
      ],
    },
  ] as NavGroup[],
  legalLinks: [
    { label: "Risk disclosure", href: "/legal/risk-disclosure/" },
    { label: "IB disclosure", href: "/legal/ib-disclosure/" },
    { label: "Privacy", href: "/legal/privacy/" },
    { label: "Terms", href: "/legal/terms/" },
  ] as NavLink[],
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/nuukquant/", icon: "in" },
    { label: "X", href: "https://x.com/AhmetSTurk", icon: "x" },
    { label: "Instagram", href: "https://www.instagram.com/ahmetsturk/", icon: "ig" },
  ],

  home: {
    hero: {
      kicker: "Economist · Investor · Founder of NUUK",
      title: "Markets, read with discipline.",
      lead:
        "I build AI-driven trading systems, run my own capital, manage investor accounts and teach people to trade for themselves. Everything here is backed by a verifiable track record.",
      primary: { label: "Choose a broker", href: "/brokers/" },
      secondary: { label: "Book a call", href: "/contact-us/" },
      portraitAlt: "Ahmet S. Öztürk",
      trustLine: ["Partner brokers regulated by FCA, ASIC, CySEC and DFSA", "Track record under independent verification", "Based in DIFC, Dubai"],
      trust: [
        { value: "17", label: "years in markets, since an FX desk in London in 2009" },
        { value: "87", label: "strategies running live across FX, metals, indices and crypto" },
        { value: "3,000+", label: "investors trained in webinars and seminars" },
        { value: "10+", label: "broker partnerships, six listed on this site" },
      ],
      pressTitle: "Partner brokers",
    },
    numbersTitle: "Numbers you can verify*",
    numbersNote: "*Figures as of September 2026. Verification links are added to the track record page as each read-only connection goes live.",
    promo: {
      kicker: "Managed accounts",
      title: "Your account. My execution. Written risk limits.",
      body: "Capital never leaves your name. You open an account at a partner broker, I receive trading permission only, and a written mandate caps exposure and daily loss.",
      figure: "300+",
      figureLabel: "managed accounts, every one of them inside the client's own broker account. Custody never transfers.",
      cta: { label: "How it works", href: "/portfolio-management/" },
    },
    postsLead: "Macro, FX, commodities, indices, crypto and AI in trading. Written to be read in five minutes.",
    pillarsTitle: "Five ways we work together",
    pillarsLead: "One person, five doors. Pick the one that fits where you are today.",
    pillars: [
      { icon: "cpu", title: "AI trading systems", body: "Proprietary algorithms coded, tested and run live across FX, indices, commodities and digital assets.", who: "For allocators and technical investors", href: "/ai-trading/" },
      { icon: "chart", title: "Verified track record", body: "My own portfolio and managed strategies, reported through independent verification.", who: "For anyone deciding whether to trust me", href: "/track-record/" },
      { icon: "briefcase", title: "Managed accounts", body: "Your capital stays in your own broker account. I trade it under agreed risk limits and a performance fee.", who: "For investors who want it done for them", href: "/portfolio-management/" },
      { icon: "handshake", title: "Broker partners", body: "Independent comparison of the brokers I work with, with a step-by-step account guide for each.", who: "For self-directed traders choosing a broker", href: "/brokers/" },
      { icon: "signal", title: "Signals, reports & education", body: "Daily notes, weekly reports, trade ideas with full reasoning, and live webinars that teach the method.", who: "For traders who want to learn and stay informed", href: "/signals/" },
    ],
    record: {
      kicker: "Track record",
      title: "Numbers you can check yourself",
      lead: "Every figure below is pulled from an independent verification service, not typed in by hand.",
      featuredLabel: "Equity curve",
      featuredNote: "Illustrative curve until the read-only verification link is live. Cumulative return, net of trading costs, rebased to 100.",
      cta: { label: "See the full track record", href: "/track-record/" },
    },
    brokers: {
      kicker: "Broker partners",
      title: "Where I trade, and why",
      lead: "I only list brokers I use or have audited myself. Each card shows regulation, real spreads and funding details.",
      cta: { label: "Compare all brokers", href: "/brokers/" },
    },
    systems: {
      kicker: "AI trading",
      title: "Systems built in-house",
      lead: "Each system is documented: data, model, risk rules, execution and whether it is live or still in testing.",
      cta: { label: "Explore the systems", href: "/ai-trading/" },
    },
    signals: {
      kicker: "Signals & reports",
      title: "Trade ideas with the reasoning attached",
      lead: "Instrument, direction, entry, stop, target and why. Delivered on Telegram and by email.",
      sample: {
        "instrument": "XAU/USD",
        "direction": "Long",
        "entry": "4,392",
        "stop": "4,368",
        "target": "4,464",
        "rr": "1:3",
        "note": "Gold held the 4,380–4,400 demand zone after a hot payrolls print while real yields failed to make a new high. Long above 4,392 with the stop under the zone at 4,368; target 4,464 at the prior swing high. Risk 0.5% of equity; halve the position if US CPI prints above 3.4%.",
        "date": "8 Sep 2026 · illustrative example"
      },
      cta: { label: "See plans", href: "/signals/" },
    },
    education: {
      kicker: "Education",
      title: "Next live session",
      cta: { label: "All events", href: "/education/" },
    },
    testimonialsTitle: "What investors say",
    testimonials: [] as { quote: string; name: string; role: string }[],
    postsTitle: "Latest insights",
  },

  about: {
    metaTitle: "About Ahmet S. Öztürk",
    metaDescription: "Economist, investor and founder of NUUK. Seventeen years in FX and CFD markets, from a London dealing desk to an AI-driven trading company in Dubai.",
    kicker: "About",
    title: "Economist first, trader second, engineer by necessity.",
    lead: "I started on an FX brokerage desk in London in 2009 and spent the next seven years inside brokerages in London and Istanbul, finishing as Head of International FX at IKON Finance. In 2016 I founded İşlem Odası, an introducing-broker and client-coverage business that grew to 700+ clients and more than USD 26 million in client business. In 2025 I moved to Dubai and founded NUUK: an AI-engineered trading company that builds and runs systematic strategies across FX, gold, indices and digital assets, and shares the method through managed accounts, signals and education.",
    portraitAlt: "Ahmet S. Öztürk",
    timelineTitle: "Timeline",
    timeline: [
      { year: "2005–2008", title: "Seneca College, Toronto", body: "International Business Administration (co-op). Where the habit of reading everything as numbers started." },
      { year: "2009–2011", title: "FXCM, London", body: "First seat on an FX brokerage desk. Execution, liquidity and client risk, learned from the inside." },
      { year: "2011–2014", title: "Tacirler and ALB, Istanbul", body: "FX specialist roles at two Turkish brokerages as the domestic market opened up to leveraged trading." },
      { year: "2014–2016", title: "IKON Finance", body: "Head of International FX. Grew the international client book by 27%." },
      { year: "2016–2025", title: "İşlem Odası, Istanbul", body: "Founded an introducing-broker and client-coverage business: 700+ clients, USD 26M+ in client business, USD 2.5M cumulative partner revenue." },
      { year: "2025", title: "NUUK, Dubai", body: "Founded NUUK in the Dubai International Financial Centre: AI-driven trading systems, managed accounts, broker partnerships, signals and education." },
    ],
    principlesTitle: "How I work",
    principles: [
      { title: "Evidence over opinion", body: "Every claim on this site links to a verifiable source or it is not made." },
      { title: "Risk before return", body: "Position size, drawdown limits and stop rules are decided before any trade." },
      { title: "Your money stays yours", body: "Managed accounts run inside your own broker account. I never take custody." },
      { title: "Teach the method", body: "The goal of education is that you no longer need me." },
    ],
    focusTitle: "Markets I cover",
    focus: ["BIST", "NYSE", "Forex", "Crypto", "Funds", "Commodities", "Real estate", "Old money"],
    speakingTitle: "Where I publish",
    speaking: [
      "Telegram · @NUUKQuant: daily market notes, trade ideas and the monthly system report",
      "X · @AhmetSTurk: market commentary and research threads",
      "LinkedIn · NUUK.: company updates and long-form research",
      "Instagram · @ahmetsturk: behind the desk",
    ],
  },

  aiTrading: {
    metaTitle: "AI Trading Systems",
    metaDescription: "Proprietary algorithmic trading systems: methodology, risk rules and live status.",
    kicker: "AI trading",
    title: "Systems, not signals from a black box",
    lead: "Every system is built, back-tested and forward-tested before it touches real capital. Below is what each one does, how it manages risk and whether it is live today.",
    cta: { label: "Request a demo", href: "/contact-us/" },
    systemsTitle: "The systems",
    methodTitle: "Methodology",
    method: [
      { step: "01", title: "Data", body: "Tick and bar data from primary venues, cleaned and time-aligned. Alternative data where it earns its place." },
      { step: "02", title: "Model", body: "Rule-based signals combined with machine-learning filters. Nothing trades that cannot be explained in one paragraph." },
      { step: "03", title: "Risk", body: "Volatility-scaled position sizing, hard daily loss limits and circuit breakers that flatten everything." },
      { step: "04", title: "Execution", body: "Broker APIs and FIX where available; slippage and fill quality tracked per venue." },
      { step: "05", title: "Review", body: "Weekly review of live vs. expected performance. Systems that drift are paused, not tweaked mid-flight." },
    ],
    faqTitle: "Common questions",
    faq: [
      { q: "Can I run a system on my own account?", a: "Yes. Depending on the broker you can copy-trade, join a MAM/PAMM structure at Tickmill, Saxo Bank or Midas, or follow the signal channel and execute yourself. In every case the account stays in your own name." },
      { q: "What is the minimum capital?", a: "USD 1,000 for copy trading or signals. Managed MAM/PAMM accounts start at the minimum allocation shown on the managed-accounts page." },
      { q: "Do you share the code?", a: "No. The code stays proprietary. What I publish is the methodology, the risk rules and the verified results." },
    ],
  },

  trackRecord: {
    metaTitle: "Track Record",
    metaDescription: "Independently verified performance of Ahmet S. Öztürk's own portfolio and managed strategies.",
    kicker: "Track record",
    title: "Verified, or not shown",
    lead: "Accounts are held at Tickmill, Saxo Bank, Scope Markets, Dukascopy, Midas and Capital.com. Each one is being linked to a read-only verification service and figures appear here automatically as each link goes live. If a number cannot be verified, it is not on this page.",
    disclaimer: "Past performance is not a guarantee of future results. Figures are net of trading costs and gross of any performance fee unless stated otherwise.",
    methodologyTitle: "How to read these numbers",
    methodology: [
      { title: "Verified", body: "Linked to the broker account via a read-only connection. The verification service, not this site, calculates the figures." },
      { title: "Max drawdown", body: "Largest peak-to-trough decline in account equity, including open positions." },
      { title: "Profit factor", body: "Gross profit divided by gross loss. Above 1.0 means the strategy made money over the period." },
    ],
    pending: "Verification is being set up for these accounts. Figures marked pending will populate automatically once the read-only link is live. The 87% signal win rate comes from the internal log and is not yet independently verified.",
  },

  managed: {
    metaTitle: "Managed Accounts",
    metaDescription: "How managed accounts work: your capital stays in your own broker account, traded under agreed risk limits.",
    kicker: "Managed accounts",
    title: "Your account. My execution. Agreed limits.",
    lead: "Capital never leaves your name. You open an account with a partner broker, connect it to the managed structure, and I trade it within a written risk mandate.",
    cta: { label: "Request an introductory call", href: "/contact-us/" },
    howTitle: "How it works",
    how: [
      { step: "01", title: "Discovery call", body: "We discuss objectives, horizon, liquidity needs and how much drawdown you can genuinely tolerate." },
      { step: "02", title: "Account setup", body: "You open an account at a partner broker in your own name and fund it. I receive trading permission only, never withdrawal rights." },
      { step: "03", title: "Risk mandate", body: "A written mandate sets maximum exposure, daily loss limit and instruments. It cannot be exceeded by the system." },
      { step: "04", title: "Reporting", body: "You see every trade in real time in your own account, plus a monthly report and a quarterly review call." },
    ],
    termsTitle: "Terms at a glance",
    terms: [
      { label: "Minimum allocation", value: "USD 25,000" },
      { label: "Performance fee", value: "25% of profits above the high-water mark" },
      { label: "Management fee", value: "USD 1,000 per month" },
      { label: "Lock-up", value: "30 days, then withdraw any time" },
      { label: "Reporting", value: "Real time in your account; monthly statement" },
      { label: "Structure", value: "MAM / PAMM inside your own account at Tickmill, Saxo Bank or Midas" },
    ],
    fitTitle: "Who it is for",
    fit: ["Investors who want professional execution without giving up custody", "Family offices seeking a satellite allocation to systematic strategies", "Business owners with idle treasury balances"],
    notFitTitle: "Who it is not for",
    notFit: ["Anyone who cannot tolerate a 20% drawdown", "Capital needed within 3 months", "Anyone expecting fixed or guaranteed returns"],
    compliance: "NUUK Quant operates from the Dubai International Financial Centre. Managed accounts run through the partner broker's own MAM/PAMM structure under that broker's regulatory framework: NUUK holds trading permission only, never custody or withdrawal rights. More than 300 accounts are managed this way today.",
  },

  brokers: {
    metaTitle: "Broker Partners",
    metaDescription: "Independent comparison of partner brokers: regulation, spreads, funding, platforms and step-by-step account opening.",
    kicker: "Broker partners",
    title: "The brokers I work with",
    lead: "I refer clients only to brokers I trade with or have audited. Six partners today: Pepperstone, Tickmill, Saxo Bank, Capital.com, Midas and Darwinex. Each card shows who regulates them, what they really charge and how fast money moves.",
    disclosure: "Links on this page are referral links. If you open and fund an account through them I earn a commission from the broker. This does not change the spreads or commissions you pay.",
    compareTitle: "Side by side",
    cardLabels: {
      regulator: "Regulator",
      licence: "Licence",
      founded: "Founded",
      minDeposit: "Minimum deposit",
      platforms: "Platforms",
      spreads: "Typical spreads",
      commission: "Commission",
      leverage: "Max leverage",
      funding: "Funding",
      withdrawal: "Withdrawal time",
      islamic: "Islamic account",
      languages: "Support",
      bestFor: "Best for",
      pros: "Strengths",
      cons: "Watch out for",
      steps: "How to open an account",
      yes: "Yes",
      no: "No",
      profile: "Full profile",
      allBrokers: "All brokers",
      atAGlance: "At a glance",
      conditions: "Trading conditions",
      about: "About the broker",
      website: "Official website",
      faq: "Common questions",
      openWith: "Five steps to a funded account with",
      verifyNote: "Conditions verified on the broker's website on 8 September 2026. Always check the live figures before funding.",
    },
    list: [
      {
        slug: "pepperstone",
        name: "Pepperstone",
        tagline: "Raw spreads from 0.0 pips, five platforms, nine licensed entities",
        regulator: "FCA · ASIC · CySEC · DFSA · BaFin · SCB · CMA",
        licence: "DFSA F004356, Pepperstone Financial Services (DIFC) Ltd · group entities under FCA, ASIC, CySEC, BaFin, SCB, CMA",
        founded: "2010, Melbourne",
        minDeposit: "$0 · $10 by card",
        platforms: ["Pepperstone platform", "TradingView", "MT5", "MT4", "cTrader"],
        spreads: [
          { pair: "EUR/USD", value: "0.0 Razor · 1.0 Standard" },
          { pair: "XAU/USD", value: "from 0.08 Razor" },
          { pair: "US500", value: "from 0.4" },
        ],
        commission: "Razor: $3.50 per lot per side on FX and gold · Standard: none (share CFDs excepted)",
        leverage: "1:30 retail (FCA, ASIC, CySEC, DFSA) · up to 1:500 SCB · 1:1000 SCB Pro",
        funding: ["Visa / Mastercard", "Apple Pay", "Google Pay", "PayPal", "Skrill", "Neteller", "Bank transfer", "Crypto"],
        withdrawalTime: "Up to 1 business day",
        islamic: true,
        languages: "24/5 multilingual, 18 h at weekends · no Turkish desk",
        bestFor: "Active FX and gold traders on raw spreads; algo traders on MT5, cTrader or TradingView",
        pros: [
          "Razor account: spreads from 0.0 pips with a flat $3.50 per lot per side",
          "99.59% fill rate with no dealing-desk intervention",
          "1,350+ markets: FX, indices, commodities, shares, ETFs and crypto CFDs",
          "Free deposits; card, e-wallet and crypto withdrawals processed within one business day",
          "Regulated in seven jurisdictions, client funds segregated at tier-1 banks",
        ],
        cons: [
          "Retail leverage capped at 1:30 under the FCA, ASIC, CySEC and DFSA entities",
          "International bank withdrawals cost $20 and can take up to 7 business days",
          "CFDs only: you never own the underlying share or coin",
        ],
        referralHref:
          "https://pepperstone.com/en?irclickid=UaOy823GzxyZTpIW-sTmzTmUUkr2ioT9XTblTQ0&transaction_id=UaOy823GzxyZTpIW-sTmzTmUUkr2ioT9XTblTQ0_35888&irgwc=1&afsrc=1&utm_source=affiliate-6292990&utm_medium=ONLINE_TRACKING_LINK&utm_campaign=Online%20Tracking%20Link&utm_content=impact&irpid=6292990&sharedid=35888&utm_term=www.dailyforex.com",
        steps: [
          "Open the referral link and click Join now. Register with your email and get a free demo.",
          "Answer the appropriateness questions (about 5 minutes).",
          "Verify identity: government ID plus proof of address.",
          "Fund from $10 by card, Apple Pay, PayPal or e-wallet. Bank transfer has no minimum.",
          "Choose Razor or Standard, then log in on MT5, cTrader, TradingView or the Pepperstone app.",
        ],
        status: "live",
        summary:
          "Founded in Melbourne in 2010, Pepperstone is one of the largest CFD brokers by volume: over 900,000 accounts, around $1 trillion in monthly trading volume and nine licensed entities across the FCA, ASIC, CySEC, DFSA, BaFin, SCB and CMA. I hold a Standard account with the DFSA-regulated Dubai entity and use it for discretionary gold trading.",
        website: "https://pepperstone.com",
        faq: [
          {
            q: "Razor or Standard: which account should I choose?",
            a: "Razor for FX and gold if you trade actively: raw spreads from 0.0 pips plus $3.50 per lot per side. Standard if you prefer everything inside the spread: from 1.0 pip on EUR/USD, no commission except on share CFDs. Both give access to the same 1,350+ markets.",
          },
          {
            q: "What is the minimum deposit?",
            a: "There is no minimum to open the account. Card, Apple Pay, Google Pay, PayPal, Skrill and Neteller deposits start at $10; domestic bank transfers have no minimum. Deposits are free.",
          },
          {
            q: "How fast are withdrawals?",
            a: "Cards, e-wallets and crypto are processed within one business day and are free. International bank transfers cost $20 and can take up to 7 business days.",
          },
          {
            q: "Is Pepperstone regulated?",
            a: "Yes. Group entities are licensed by the FCA (UK), ASIC (Australia), CySEC (Cyprus), DFSA (Dubai), BaFin (Germany), SCB (Bahamas) and CMA (Kenya). Client funds are held in segregated accounts at tier-1 banks and retail clients have negative balance protection.",
          },
          {
            q: "Which entity will my account be under?",
            a: "Through my link you register with Pepperstone Financial Services (DIFC) Limited, the Dubai entity regulated by the DFSA. Retail leverage is capped at 1:30, client money is segregated and retail clients have negative balance protection. Professional clients can apply for higher leverage.",
          },
          {
            q: "Does a referral link change my fees?",
            a: "No. Spreads and commissions are identical whether you register directly or through my link. The broker pays my commission from its own revenue.",
          },
        ],
      },
      {
        slug: "tickmill",
        name: "Tickmill",
        tagline: "Raw pricing from 0.0 pips with $3 per side, MT4/MT5 and TradingView",
        regulator: "FCA · CySEC · FSA Seychelles · FSCA",
        licence: "FCA 717270 · CySEC 278/15 · FSA SD008 · FSCA FSP 49464 · DFSA rep. office F007663",
        founded: "2014, London",
        minDeposit: "$100",
        platforms: ["MT4", "MT5", "TradingView", "Tickmill Trader", "Tickmill App"],
        spreads: [{"pair": "EUR/USD", "value": "0.0 Raw · 1.6 Classic"}, {"pair": "XAU/USD", "value": "from 0.08 Raw"}, {"pair": "US500", "value": "from 0.39"}],
        commission: "Raw: $3 per lot per side (MT4/MT5), $3.50 on TradingView · Classic: none · indices and stocks: none",
        leverage: "1:30 retail (FCA, CySEC) · up to 1:1000 under Tickmill Ltd (Seychelles) · pro 1:500",
        funding: ["Bank wire", "Visa / Mastercard", "Skrill", "Neteller", "UnionPay", "Crypto"],
        withdrawalTime: "Processed within 1 working day",
        islamic: true,
        languages: "Mon–Fri 07:00–16:00 GMT, 14 languages · no Turkish desk",
        bestFor: "Cost-sensitive FX and gold traders, scalpers and EA users who want $3-per-side raw pricing",
        pros: ["Raw account: 0.0 pip spreads with $3 per lot per side, ranked #1 for commissions and fees by ForexBrokers.com 2021–2024", "FCA, CySEC, FSA Seychelles and FSCA entities; FSCS and ICF cover for UK and EU clients", "Segregated tier-1 bank accounts, negative balance protection and Lloyd's insurance for balances of $20k to $1m", "$100 minimum, no deposit or withdrawal fees, bank fees refunded on wires above $5,000", "All strategies allowed (scalping, hedging, EAs), free VPS, TradingView integration"],
        cons: ["1:1000 leverage only under the Seychelles entity; UK and EU retail clients are capped at 1:30", "Classic account spreads start at 1.6 pips, wide compared with Raw", "No Turkish website or support desk; USD/TRY, EUR/TRY and GBP/TRY are close-only"],
        referralHref: "https://www.tickmill.com/",
        steps: ["Register: fill in name, country, client type and email at my.tickmill.com/sign-up to create your Client Area", "Verify: log in to the Client Area and upload proof of identity and proof of address", "Create account: once documents are approved, open a live account choosing Classic, Raw or TradingView Raw, base currency (USD/EUR/GBP/ZAR) and leverage", "Deposit: select a payment method (bank wire, card, Skrill, Neteller, UnionPay, crypto) and fund from $100; most methods credit instantly", "Trade: download MT4/MT5, Tickmill Trader or connect TradingView with your account credentials and start trading"],
        status: "live",
        summary: "Tickmill Group was founded in 2014 by Ingmar and Illimar Mattus and is headquartered in London, with regulated entities in the UK (FCA 717270), Cyprus (CySEC 278/15), Seychelles (FSA SD008) and South Africa (FSCA FSP 49464). It reports 1.3 million registered accounts, over 900 million trades and around $350 billion in average monthly volume, and has won more than 60 industry awards. This is where I run the NUUK Trend Ensemble paper account and the intraday demo, and one of the three venues used for managed MAM accounts.",
        website: "https://www.tickmill.com/",
        faq: [{"q": "What account types does Tickmill offer?", "a": "Three CFD accounts: Classic (spreads from 1.6 pips, no commission), Raw (spreads from 0.0 pips, $3 per lot per side, MT4/MT5) and TradingView Raw / Tickmill Trader (0.0 pips, $3.50 per side). All start at $100, allow 0.01 lots and any strategy, and can be made swap-free. Tickmill UK also offers a Futures account ($1,000) and an IBKR multi-asset account."}, {"q": "What is the minimum deposit at Tickmill?", "a": "$100 (or equivalent in EUR/GBP) for all CFD accounts; ZAR accounts have a lower minimum. Minimum withdrawal is $25. Tickmill charges no deposit or withdrawal fees and refunds bank fees on wire deposits above $5,000."}, {"q": "How long do Tickmill withdrawals take?", "a": "Withdrawal requests are processed within one working day. Arrival depends on the method: e-wallets and crypto are typically instant to 48 hours, cards up to 8 working days, bank wires 2-7 working days. Funds return to the original deposit method first (card deposits back to the card, profits via bank or e-wallet)."}, {"q": "Is Tickmill regulated and are client funds safe?", "a": "Yes. Tickmill UK Ltd is FCA-authorised (717270), Tickmill Europe Ltd is CySEC-licensed (278/15), Tickmill Ltd is an FSA Seychelles securities dealer (SD008) and Tickmill South Africa is FSCA-licensed (FSP 49464); Tickmill UK also runs a DFSA representative office (F007663). Client money is segregated at tier-1 banks, negative balance protection applies, UK clients get FSCS cover up to £120,000, EU clients ICF cover up to €20,000, and balances between $20,000 and $1,000,000 are insured with Lloyd's."}, {"q": "What leverage does Tickmill offer?", "a": "Up to 1:1000 on forex and metals under Tickmill Ltd (Seychelles) via dynamic leverage, with 1:200 on major crypto, 1:100 on indices and 1:20 on stocks. Under Tickmill Europe retail clients get a maximum of 1:30 and elective professional clients up to 1:500; Tickmill UK retail clients are also capped at 1:30."}],
      },
      {
        slug: "saxo",
        name: "Saxo Bank",
        tagline: "Danish investment bank with 71,000+ instruments in one account",
        regulator: "Danish FSA · FCA · FINMA · MAS · ASIC · SFC · JFSA",
        licence: "Danish FSA banking licence 1149 (Saxo Bank A/S) · DIFC representative office regulated by the DFSA",
        founded: "1992, Copenhagen",
        minDeposit: "None (Classic) · $5,000 on the UAE site",
        platforms: ["SaxoTraderGO", "SaxoTraderPRO", "SaxoInvestor", "TradingView", "OpenAPI / FIX"],
        spreads: [{"pair": "EUR/USD", "value": "from 1.0 Classic · 0.7 VIP"}, {"pair": "XAU/USD", "value": "from 34 cents"}, {"pair": "US500", "value": "from 0.7"}],
        commission: "FX and index CFDs spread-only · US stocks 0.08% (min $1), 0.03% VIP · options from $0.75, futures from $1",
        leverage: "1:30 retail (ESMA-style caps) · lower margin for elective professionals",
        funding: ["Bank transfer", "SEPA Instant", "Card (country-dependent)", "Wise / Revolut after first deposit"],
        withdrawalTime: "Same-day processing, 1–5 business days to your bank",
        islamic: false,
        languages: "24/5 phone, chat and email; Dubai office · app in 23 languages incl. Turkish, no Turkish desk",
        bestFor: "Multi-asset investors who want bank-grade custody plus FX and CFD trading under one login",
        pros: ["Licensed Danish bank with SIFI status; cash covered up to EUR 100,000 by the Danish deposit guarantee", "71,000+ instruments: 23,000+ stocks on 50+ exchanges, 8,200+ ETFs, 5,200 bonds, futures, options and 185+ FX pairs", "Volume-tiered pricing: EUR/USD 1.0 to 0.7 pip, US stocks 0.08% to 0.03%, index CFDs with no commission", "Own SaxoTraderGO/PRO and SaxoInvestor platforms plus OpenAPI, FIX and TradingView", "No inactivity or platform fees; deposits and withdrawals free on Saxo's side"],
        cons: ["Custody fee of 0.15% to 0.09% a year on stocks, ETFs and bonds in most regions", "Platinum and VIP tiers start at EUR 200k and EUR 1M; the UAE site asks for $5,000 to open a Classic account", "No swap-free account; the Dubai presence is a representative office, so UAE clients contract with Saxo Bank A/S in Denmark"],
        referralHref: "https://www.home.saxo",
        steps: ["Create your account online at home.saxo/accounts (18+; national ID and tax ID, passport/ID card, selfie; proof of residence if requested)", "Get verified – most applications are approved digitally within minutes, otherwise up to 2 business days", "Log in to SaxoTraderGO or SaxoInvestor and fund the account – first deposit must come from a bank account in your own name in your country of residence", "Deposit the tier amount within 30 days if you want Platinum (EUR 200k+) or VIP (EUR 1M+) pricing", "Make your first trade – a 20-day demo with USD 100,000 simulated funds is available to practise first"],
        status: "live",
        summary: "Saxo Bank A/S is a Copenhagen-headquartered bank licensed by the Danish FSA (licence 1149), designated a systemically important institution in 2023 and, since March 2026, majority-owned by the J. Safra Sarasin Group. Founded in 1992, it serves more than 1.5 million clients in 180+ countries with over EUR 150 billion in client assets. In the UAE it operates a DFSA-regulated representative office; client agreements are made with Saxo Bank A/S in Denmark. I hold my multi-asset portfolio here, and it is one of the three venues used for managed accounts.",
        website: "https://www.home.saxo",
        faq: [{"q": "What are the Classic, Platinum and VIP tiers and how do I qualify?", "a": "Classic is the default tier. Platinum requires a deposit of EUR 200,000+ (USD 250,000+ on the UAE site) or a set trading volume; VIP requires EUR 1,000,000+ (USD 1,250,000+) or volume. Higher tiers get lower spreads and commissions and priority support; Saxo Elite is for clients above roughly EUR 5 million in assets."}, {"q": "Is there a minimum deposit?", "a": "The international site states no minimum funding requirement for a Classic account, but the UAE/MENA site lists USD 5,000 minimum funding. Tier deposits must be funded within the first 30 days to qualify for Platinum or VIP."}, {"q": "What fees does Saxo charge beyond spreads and commissions?", "a": "A custody fee of 0.15% (Classic), 0.12% (Platinum) or 0.09% (VIP) per year on stocks, ETFs/ETCs and bonds in most regions (plus VAT for EU residents), currency conversion of up to 0.25%, FX rollover markups of 0.50–0.75%, and no inactivity, platform, deposit or withdrawal fees."}, {"q": "Who regulates Saxo and is it a real bank?", "a": "Saxo Bank A/S is a fully licensed Danish bank supervised by the Danish FSA (licence no. 1149) and classified as a SIFI. Group entities are regulated by the FCA, FINMA, MAS, ASIC, SFC and JFSA. In Dubai, Saxo Bank A/S operates a DFSA-regulated representative office; the former Saxo Bank (Dubai) Ltd licence (F001014) was withdrawn in 2017."}, {"q": "What can I trade?", "a": "71,000+ instruments: 23,000+ stocks on 50+ exchanges, 8,200+ ETFs, 5,200 bonds, mutual funds, 185+ FX pairs, FX options, CFDs on indices/stocks/commodities, 250+ futures, 3,100+ listed options and crypto FX/ETPs."}],
      },
      {
        slug: "capital-com",
        name: "Capital.com",
        tagline: "Commission-free CFDs with TradingView, MT4/MT5 and 5,500+ markets",
        regulator: "FCA · CySEC · ASIC · SCB · SCA (UAE)",
        licence: "FCA 793714 · CySEC 319/17 · ASIC AFSL 513393 · SCB SIA-F245 · UAE 20200000176 (Capital Com MENA, Dubai)",
        founded: "2016, London",
        minDeposit: "$20 by card · €50 by wire",
        platforms: ["Capital.com web and app", "TradingView", "MT4", "MT5", "API"],
        spreads: [{"pair": "EUR/USD", "value": "from ~0.7 (dynamic)"}, {"pair": "XAU/USD", "value": "from ~0.5 (dynamic)"}, {"pair": "US500", "value": "from ~0.6"}],
        commission: "None on CFDs, spread-only · overnight funding 4% p.a. ± benchmark · 0.7% FX conversion (0.5% pro)",
        leverage: "1:30 retail across all entities · up to 1:500 professional",
        funding: ["Visa / Mastercard", "Apple Pay", "Google Pay", "Bank transfer", "PayPal (EU/AU)", "Skrill", "Neteller", "Lean (UAE)"],
        withdrawalTime: "Processed within 24 h, 91% within 5 minutes",
        islamic: true,
        languages: "24/7 in English, 10+ languages in business hours · Turkish not confirmed officially",
        bestFor: "Retail and MENA traders who want TradingView execution and a low entry deposit",
        pros: ["Zero trading commission and no deposit, withdrawal or inactivity fees", "Regulated by the FCA, CySEC, ASIC, SCB and the UAE SCA; segregated client money and negative balance protection", "Native TradingView connection plus MT4, MT5, own web and mobile platform and an API", "$20 minimum deposit; 91% of withdrawals processed within 5 minutes", "Swap-free accounts for MENA clients and a professional account with 1:500 leverage and spread rebates"],
        cons: ["Spreads are dynamic, not fixed: EUR/USD ~0.7 pips and gold ~0.5 are typical, not guaranteed minimums", "No raw-spread or commission-based account", "Overnight funding of 4% plus benchmark makes multi-day leveraged positions relatively expensive; 0.7% FX conversion for retail"],
        referralHref: "https://capital.com",
        steps: ["Click 'Open account' on capital.com or download the iOS/Android app; choose your country of residence", "Register with your email (or Google/Apple), set a password, accept the terms and confirm your email via the link sent", "Verify your identity: upload a valid ID document, a live selfie and proof of address if requested (typically reviewed within 24 hours)", "Fund the account by card, Apple/Google Pay, bank transfer or a local method — minimum $10–20 by card, €50 by wire", "Choose CFD, swap-free or (where eligible) upgrade to a Professional account, then trade on the web platform, app, TradingView, MT4 or MT5"],
        status: "live",
        summary: "Capital.com is a privately held CFD broker founded in 2016 by Viktor Prokopenya, with 880,000+ active accounts and 5,500+ instruments across shares, indices, forex, commodities and crypto. Client trading volume exceeded $1.7 trillion in 2024 and $1.5 trillion in the first half of 2025, more than half of it from the Middle East. Its Dubai entity, Capital Com MENA Securities Trading, is licensed by the UAE Securities and Commodities Authority. I keep a personal CFD account here for index trading.",
        website: "https://capital.com",
        faq: [{"q": "Is Capital.com regulated and are client funds safe?", "a": "Yes. Capital Com (UK) Ltd is FCA-regulated (793714), Capital Com SV Investments Ltd is CySEC-licensed (319/17), Capital Com Australia Pty Ltd holds ASIC AFSL 513393, Capital Com Online Investments Ltd is licensed by the Securities Commission of The Bahamas (SIA-F245) and Capital Com MENA Securities Trading L.L.C. is licensed in Dubai by the UAE SCA/CMA (20200000176). Retail client money is held in segregated accounts and negative-balance protection applies."}, {"q": "What is the minimum deposit and are there deposit or withdrawal fees?", "a": "The stated minimum is 10 USD/EUR/GBP for cards and Apple Pay on the international site (20 in the help centre and for UAE clients), and €50 for wire transfers. Capital.com charges no deposit, withdrawal or inactivity fees; your bank or payment provider may apply its own."}, {"q": "How fast are withdrawals?", "a": "Capital.com states it processes all withdrawal requests within 24 hours, and 91% within 5 minutes. Funds can then take up to 5 business days to appear on your card or bank account. Withdrawals go back to the original funding method; minimum withdrawal is 20 USD/EUR/GBP by card."}, {"q": "What leverage can I get?", "a": "Retail clients get up to 1:30 on major FX, 1:20 on gold and major indices, 1:10 on other commodities and indices, 1:5 on shares and 1:2 on crypto. Eligible clients can upgrade to a Professional account with up to 1:500 on major FX, indices, gold and oil, 1:100 on crypto and 1:33 on major shares, plus spread rebates of 5–20% by monthly volume."}, {"q": "Does Capital.com offer swap-free (Islamic) accounts and TradingView trading?", "a": "Yes. Swap-free accounts are available to clients in the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, Jordan, Egypt, Lebanon, Tunisia, Algeria and Morocco — close open trades and contact support@capital.com to switch. Capital.com is an official TradingView broker, so you can connect your account and place trades directly from TradingView charts, alongside MT4, MT5, the web platform and app."}],
      },
      {
        slug: "midas",
        name: "Midas",
        tagline: "SPK-regulated app: zero-commission BIST, flat $1.50 US stock trades",
        regulator: "SPK (Türkiye) · Borsa İstanbul member",
        licence: "SPK brokerage certificate K-024 (31 May 2022) · BIST member since 2021 · US assets under SIPC",
        founded: "2020, Istanbul",
        minDeposit: "None · fractional shares from $1",
        platforms: ["Midas app (iOS, Android)", "Atlas web platform"],
        spreads: [{"pair": "BIST stocks", "value": "0% commission"}, {"pair": "US stocks", "value": "$1.50 per trade"}, {"pair": "TEFAS funds", "value": "No Midas commission"}],
        commission: "BIST equities 0% · US stocks flat $1.50, European stocks €1.50 per trade · US options $1.50 per contract · VIOP 0.01–0.05%",
        leverage: "None on equities (cash) · BIST margin loans at 48.5–66.5% p.a.",
        funding: ["TRY bank transfer (EFT / FAST)", "USD or EUR bank transfer", "12 partner banks with instant crediting"],
        withdrawalTime: "Minutes to partner banks; USD under $50k in minutes",
        islamic: true,
        languages: "App in Turkish and English · support and website Turkish only",
        bestFor: "Türkiye-resident investors who want BIST, US and European stocks in one low-cost app",
        pros: ["Zero commission on Borsa İstanbul with no account, custody or clearing fees", "Flat $1.50 per US trade, fractional shares from $1 and free live data", "SPK-licensed brokerage; BIST holdings at the Central Registry Agency, US holdings under SIPC protection", "Funding and withdrawals in minutes via 12 partner banks, no Midas transfer fees", "One account for BIST, US and European stocks, US options, VIOP futures, TEFAS funds and gold certificates"],
        cons: ["Türkiye residents only; no accounts for non-residents or anyone tax-resident abroad", "No CFDs or leveraged forex; BIST margin loans carry high TRY interest", "Support and website in Turkish only; TRY to USD conversion at Midas's own rate rather than a published fee"],
        referralHref: "https://www.getmidas.com/",
        steps: ["Download the Midas app from the App Store or Google Play and sign up with your mobile number", "Verify your identity with a Turkish chip ID card, blue card or foreign ID card; you must be 18+ and resident in Türkiye with no tax obligations abroad", "Complete the in-app application and e-sign the investment account agreements; the process takes about 5 minutes", "Fund the account by bank transfer in TRY or USD (from any bank; partner-bank transfers are credited within about 2 minutes)", "Buy your first stock: convert TRY to USD in-app if needed and place an order for BIST, US or European shares from $1/€1"],
        status: "live",
        summary: "Midas Menkul Değerler A.Ş. is an SPK-licensed Istanbul brokerage founded in 2020 by Egem Eraslan and wholly owned by Midas Finansal Teknolojiler A.Ş. It reported about 4 million users and monthly trading volume approaching $20 billion in May 2026, and has raised more than $140 million, including an $80 million Series B led by QED Investors in August 2025. It is the venue I use for BIST and US equities, and one of the three venues used for managed accounts.",
        website: "https://www.getmidas.com/",
        faq: [{"q": "Who can open a Midas account?", "a": "Adults holding a Turkish chip ID card, a blue card or a Turkish foreign ID card who live in Türkiye and are not tax-resident elsewhere. Child and company accounts are also available for Turkish chip-ID holders resident in Türkiye. Non-residents cannot open an account."}, {"q": "What does Midas charge?", "a": "BIST stock trades are commission-free with no account, custody or clearing fees. US stock trades cost a flat $1.50 and European stock trades a flat €1.50 per trade. US options are $1.50 per contract for the first 500 contracts a month. TEFAS fund orders carry no Midas commission. Deposits and withdrawals are free from Midas's side."}, {"q": "Can I trade US stocks and how are they protected?", "a": "Yes. Midas gives access to NYSE, NASDAQ and OTC stocks, US-listed ETFs and US options, with fractional shares from $1 and dividends paid in USD. Shares are held in your name at SEC-authorised custodians and covered by SIPC insurance up to $150 million ($75 million securities plus $75 million cash) per the Midas site."}, {"q": "How does currency conversion work?", "a": "You can deposit USD directly or convert TRY to USD or EUR inside the app 24/7 (USD/TRY and EUR/TRY pairs) using your cash balance; converted funds are usually available to trade immediately. Midas quotes its own rate and does not publish a separate conversion commission."}, {"q": "How fast are withdrawals?", "a": "Withdrawals to Midas's 12 partner banks arrive within minutes. TRY withdrawals to other banks arrive in minutes within FAST limits (larger amounts next business day). USD withdrawals under $50,000 take minutes and $50,000–$200,000 about an hour in business hours. Midas charges no withdrawal fee; SWIFT fees from third-party banks may apply to non-partner USD transfers."}],
      },
      {
        slug: "darwinex",
        name: "Darwinex",
        tagline: "FCA and CNMV broker that turns a track record into an investable DARWIN",
        regulator: "FCA · CNMV · FSA Seychelles",
        licence: "FCA 586466 · CNMV 311 · FSA SD171",
        founded: "2012, London",
        minDeposit: "€500 · €1,000 equity to create a DARWIN",
        platforms: ["MT4", "MT5", "TradingView", "DXtrade", "FIX / DARWIN API", "Interactive Brokers TWS"],
        spreads: [{"pair": "EUR/USD", "value": "0.2–0.3 + $2.5 per lot"}, {"pair": "XAU/USD", "value": "~0.4 + 0.0025%"}, {"pair": "US500", "value": "~0.6 + $0.275 per contract"}],
        commission: "FX $2.50 per lot per order · indices $2.75 per contract · commodities 0.0025% · stock CFDs $0.02 per share · rebates up to 40%",
        leverage: "1:30 retail (FCA, CNMV) · up to 1:200 professional",
        funding: ["Bank transfer", "Visa / Mastercard", "Skrill"],
        withdrawalTime: "1–3 business days",
        islamic: false,
        languages: "Mon–Thu 08:00–17:00 UTC, email and phone · site in EN, ES, FR, DE, ZH · no Turkish",
        bestFor: "Systematic traders who want to monetise a verified track record through investor capital and DarwinIA seed allocations",
        pros: ["Dual FCA and CNMV regulation with FSCS (£85k) and FOGAIN (€100k) protection, funds in segregated tier-1 accounts", "Earn 15% performance fees on investor capital without holding your own asset-management licence", "DarwinIA seeds top strategies with €30k to €500k a month; more than €11.5M paid to traders so far", "Raw interbank pricing, EUR/USD around 0.2–0.3 pips plus $2.50 per lot, with talent and volume rebates up to 40%", "MT4, MT5, TradingView, DXtrade, FIX and DARWIN APIs, plus stocks, futures and ETFs through Interactive Brokers"],
        cons: ["No swap-free account, no Turkish support, and support runs Mon–Thu 08:00–17:00 UTC only", "€500 minimum deposit, €1,000 equity to create a DARWIN, lifetime caps on card and Skrill deposits", "Retail leverage capped at 1:30; professional status lifts it but forfeits FSCS cover"],
        referralHref: "https://www.darwinex.com/",
        steps: ["Register at darwinex.com/register with username, email, password and country of tax residence", "Complete the MiFID onboarding: personal-details questionnaire and financial-knowledge/solvency questionnaire", "Upload identity and address documents; application status is emailed within 1 business day", "Fund your Darwinex Wallet (min €/$/£500 by bank transfer, card or Skrill) and transfer at least 500 to a live trading account", "Trade on MT4/MT5, TradingView, DXtrade or IBKR; after about a month (or instantly with an imported track record) create your DARWIN and enter DarwinIA"],
        status: "live",
        summary: "Darwinex is the trading name of Tradeslide Trading Tech Ltd (London, 2012; FCA-authorised since 2014) and Sapiens Markets EU (CNMV, Madrid, 2022), operating as both a broker and a regulated asset manager. A DARWIN wraps a trader's strategy as a risk-managed investable index: investors pay 1.2% management and 20% performance fees, of which 15% goes to the trader. The platform reports 3,000+ DARWINs, around $580M invested and clients in 80+ countries. It is where NUUK systems are packaged for third-party investor capital.",
        website: "https://www.darwinex.com/",
        faq: [{"q": "What is a DARWIN?", "a": "A DARWIN is a trading strategy packaged by Darwinex as a managed index with its own ticker and a quote starting at 100. It replicates the trader's entries and exits under an independent risk engine (3.25–6.5% monthly VaR target) without disclosing open trades, so investors can buy it and the trader earns performance fees under Darwinex's asset-management licence."}, {"q": "What is the difference between Darwinex Zero and a Darwinex live account?", "a": "Darwinex Zero is a subscription (€45/month, €35/month yearly, €30/month on a 3-year plan; €50 for futures) that gives a virtual-capital MT4/MT5 account to build a verified track record and take part in DarwinIA for 15% real performance fees, with no trading capital at risk. A Darwinex live account has no subscription, uses your own money (€500 minimum), and gives investor capital access from day one; a Zero track record can be migrated to live."}, {"q": "What fees do investors pay and how is the performance fee split?", "a": "Investors pay a 1.2% p.a. management fee to Darwinex and a 20% performance fee on net profits calculated quarterly on a high-water mark. Of the 20%, 15% is paid to the DARWIN provider (trader) and 5% is retained by Darwinex. DarwinIA seed allocations also pay the trader 15% of the profits generated."}, {"q": "What is the minimum deposit?", "a": "The first deposit is €/$/£500 for individual and joint accounts and 10,000 for corporate accounts; subsequent deposits are 100 minimum (500 by bank wire). Creating a DARWIN requires €1,000 equity and DarwinIA participation requires $1,000 equity maintained throughout the month. Investors can start from €200 (€10,000 for the Darwinex INDX)."}, {"q": "How is Darwinex regulated?", "a": "Tradeslide Trading Tech Ltd is authorised and regulated by the UK FCA (FRN 586466, company no. 08061368) as a broker and asset manager, with FSCS protection up to £85,000. Sapiens Markets EU Sociedad de Valores SA is regulated by Spain's CNMV (no. 311) with FOGAIN cover up to €100,000. Tradeslide Global Ltd holds a Seychelles FSA licence (SD171). Client funds are held in segregated accounts at Tier-1 UK banks."}],
      },
    ] as Broker[],
  },

  signals: {
    metaTitle: "Signals & Reports",
    metaDescription: "Daily market notes, weekly reports and trade ideas with full reasoning, delivered on Telegram and by email.",
    kicker: "Signals & reports",
    title: "Ideas with the reasoning attached",
    lead: "No blind alerts. Every idea comes with instrument, direction, entry, stop, target, risk-reward and a paragraph explaining why. You learn while you trade.",
    whatTitle: "What you receive",
    what: [
      { title: "Daily macro note", body: "One page before the London open: what matters today, key levels, scheduled risk." },
      { title: "Weekly report", body: "Positioning, themes and the week ahead across FX, indices, metals and digital assets." },
      { title: "Trade ideas", body: "100+ ideas per month on average, each with entry, stop, target and reasoning." },
      { title: "Live updates", body: "Management of open ideas: partial exits, stop moves, invalidation." },
    ],
    formatTitle: "Idea format",
    plansTitle: "Plans",
    plans: [
      { name: "Reports", price: "$750", period: "per month", features: ["Daily macro note", "Weekly report", "Archive access"], cta: "Subscribe", highlight: false },
      { name: "Signals", price: "$1,000", period: "per month", features: ["Everything in Reports", "Trade ideas with reasoning", "Live updates on Telegram", "Monthly performance sheet"], cta: "Subscribe", highlight: true },
      { name: "Mentorship", price: "$5,000", period: "per quarter", features: ["Everything in Signals", "Fortnightly 1:1 review", "Portfolio feedback", "Priority access to webinars"], cta: "Apply", highlight: false },
    ],
    performanceTitle: "Signal performance",
    performanceNote: "Closed ideas are logged monthly with entry, exit and result in the Telegram channel. Internal log to date: 87% of closed ideas reached target before stop. Independent verification of the log is in progress.",
    disclaimer: "Signals are educational content and general market commentary. They are not personal investment advice and do not take your circumstances into account.",
  },

  education: {
    metaTitle: "Webinars & Seminars",
    metaDescription: "Live webinars and in-person seminars that teach investors to trade for themselves.",
    kicker: "Education",
    title: "Learn the method, then trade it yourself",
    lead: "Live sessions, not recorded courses sold on autopilot. Small groups, real charts, real risk rules.",
    upcomingTitle: "Upcoming sessions",
    events: [
      {
        "date": "2026-09-15",
        "time": "19:00 GST",
        "title": "Weekly market briefing: gold, indices and the Fed",
        "format": "Online webinar",
        "language": "English",
        "price": "Free",
        "seats": "100",
        "href": "https://t.me/NUUKQuant"
      },
      {
        "date": "2026-10-10",
        "time": "14:00 GST",
        "title": "Systematic gold trading workshop",
        "format": "In-person, Dubai",
        "language": "Turkish",
        "price": "USD 250",
        "seats": "25",
        "href": "mailto:info@nuukquant.com?subject=Seminar%20registration"
      }
    ],
    eventLabels: { format: "Format", language: "Language", price: "Price", seats: "Seats", register: "Register" },
    curriculumTitle: "Curriculum",
    curriculum: [
      { level: "Foundation", title: "Risk first", topics: ["Position sizing", "Stop placement", "Expectancy", "Journaling"] },
      { level: "Intermediate", title: "Reading the market", topics: ["Macro drivers", "Technical structure", "Correlations", "Session timing"] },
      { level: "Advanced", title: "Systematic trading", topics: ["Strategy design", "Back-testing pitfalls", "Automation basics", "Portfolio of strategies"] },
    ],
    corporateTitle: "Corporate training",
    corporateBody: "Custom programmes for brokerages, family offices and treasury teams. Half-day or two-day formats, on site in Dubai or Istanbul or online, built around your own instruments and risk policy.",
    corporateCta: { label: "Enquire", href: "/contact-us/" },
    archiveTitle: "Session library",
    archive: [
      {
        "date": "2026-06",
        "title": "Position sizing with ATR: the USD 300 rule",
        "href": "https://t.me/NUUKQuant"
      },
      {
        "date": "2026-07",
        "title": "Why most intraday systems fail after costs",
        "href": "https://t.me/NUUKQuant"
      }
    ],
  },

  insights: {
    metaTitle: "Insights",
    metaDescription: "Market commentary on macro, FX, commodities, indices, crypto and AI in trading.",
    kicker: "Insights",
    title: "Notes from the desk",
    tabs: ["All", "Macro", "FX", "Commodities", "Indices", "Crypto", "AI"],
    posts: [
      {
        "title": "September hikes: what a Fed move means for gold and the dollar",
        "excerpt": "Markets price hikes from the Fed, RBA and BoJ this month. Where the surprise risk sits and how I position ahead of CPI.",
        "category": "Macro",
        "date": "2026-09-07",
        "tone": "stocks",
        "href": "https://t.me/NUUKQuant"
      },
      {
        "title": "Gold at 4,400: the level that decides the next leg",
        "excerpt": "Payrolls capped the bounce. Why 4,400 is the line between bulls and bears, and the two data prints that settle it.",
        "category": "Commodities",
        "date": "2026-09-06",
        "tone": "metals",
        "href": "https://t.me/NUUKQuant"
      },
      {
        "title": "AUD strength in 2026: carry, copper and the RBA",
        "excerpt": "The Australian dollar is the strongest G10 currency this year. What is driving it and where the trade still has room.",
        "category": "FX",
        "date": "2026-09-04",
        "tone": "currencies",
        "href": "https://t.me/NUUKQuant"
      },
      {
        "title": "Why our intraday ensemble stays in paper mode",
        "excerpt": "Hourly bars, retail costs, no edge. The walk-forward result behind the decision to keep intraday systems off live capital.",
        "category": "AI",
        "date": "2026-09-02",
        "tone": "crypto",
        "href": "https://t.me/NUUKQuant"
      }
    ],
  },

  contact: {
    metaTitle: "Contact",
    metaDescription: "Book a call, message on WhatsApp or Telegram, or send an enquiry.",
    kicker: "Contact",
    title: "Let's talk",
    lead: "Choose the channel that suits you. Institutional and professional enquiries are answered within one business day.",
    channels: [
      { title: "Book a call", body: "30 minutes, video or phone. Reply within one business day.", cta: "Request a call", href: "mailto:info@nuukquant.com?subject=Call%20request" },
      { title: "WhatsApp", body: "Quick questions and document exchange.", cta: "Message", href: "https://wa.me/971586884464" },
      { title: "Telegram", body: "Signals channel and community.", cta: "Join", href: "https://t.me/NUUKQuant" },
    ],
    formTitle: "Send an enquiry",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@company.com",
      topic: "Topic",
      topics: ["Managed account", "Broker selection", "Signals & reports", "Education", "AI systems", "Other"],
      message: "Message",
      messagePlaceholder: "How can I help?",
      submit: "Send",
      note: "This opens your email client with the message pre-filled. No data is stored on this site.",
      errorRequired: "Please fill in your name, email and message.",
      errorEmail: "Please enter a valid email address.",
      subject: "Enquiry",
    },
  },

  legal: {
    "risk-disclosure": {
      title: "Risk disclosure",
      body: [
        "Trading foreign exchange, contracts for difference (CFDs), commodities, indices, equities, funds and digital assets carries a high level of risk and is not suitable for everyone. Leveraged products can produce losses that exceed your initial deposit, and losses can accumulate rapidly in volatile markets.",
        "Before trading you should consider your investment objectives, level of experience and risk appetite, and never commit capital you cannot afford to lose. If you are in any doubt, seek advice from an independent, licensed financial adviser in your jurisdiction.",
        "Past performance of any portfolio, model, strategy, signal service or trading system shown on this website is not a reliable indicator of future results. Track records describe what happened, not what will happen. Back-tested, simulated or paper-trading results have inherent limitations: they are prepared with hindsight, do not involve financial risk and may not reflect the impact of slippage, liquidity or execution costs.",
        "Nothing on this website constitutes personal investment advice, a personal recommendation, or an offer or solicitation to buy or sell any financial instrument. Content is general market commentary and education and does not take into account your financial situation, objectives or needs.",
        "Managed accounts operate inside the client's own account at a partner broker under that broker's MAM or PAMM structure and regulatory framework. NUUK holds trading permission only and never takes custody of client funds. Fees, lock-up periods and risk mandates are set out in a written agreement before any trading begins.",
        "Broker links on this website are referral links. NUUK may receive a commission from the broker when you open and fund an account through them; this does not change the spreads or fees you pay, and you remain free to open an account with any broker directly.",
        "NUUK Quant operates from the Dubai International Financial Centre, Dubai, United Arab Emirates. Services are offered only where permitted by applicable law and regulation; availability depends on your country of residence. Nothing on this website is directed at any person in a jurisdiction where such distribution would be contrary to local law.",
      ],
    },
    "ib-disclosure": {
      title: "Introducing broker disclosure",
      body: [
        "Ahmet S. Öztürk / NUUK acts as an introducing partner for the brokers listed on this website. When you open and fund an account through a referral link, the broker pays a commission based on your trading volume.",
        "This commission is paid by the broker and does not increase the spreads, commissions or fees you pay. Broker cards are written independently; a broker cannot pay to change a rating or a listed weakness.",
        "You are free to open an account with any broker directly. The referral link is optional.",
        "Current partners: Pepperstone, Tickmill, Saxo Bank, Capital.com, Midas and Darwinex under introducing-broker agreements. Tickmill, Saxo Bank and Midas additionally operate the MAM/PAMM structures used for managed accounts under separate portfolio-management agreements.",
      ],
    },
    privacy: {
      title: "Privacy policy",
      body: [
        "This policy explains what personal data NUUK Quant (\"NUUK\", \"we\") collects through nuukquant.com, why, and what rights you have. Last updated 8 September 2026.",
        "Data you give us. When you contact us by email, WhatsApp, Telegram or the enquiry form, we receive the details you send: name, email address, phone number and the content of your message. The enquiry form opens your own email client; nothing you type is stored on this website.",
        "Data collected automatically. We use Google Analytics 4 with IP anonymisation to understand how the site is used: pages viewed, approximate location, device type and which buttons are clicked (for example a broker link or a plan). This data is aggregated and does not identify you by name. You can block it with a browser setting or an ad blocker.",
        "Cookies. The site itself sets no cookies. Google Analytics may set cookies to distinguish sessions; third-party sites you open from our links (brokers, Telegram, Calendly, social networks) apply their own policies.",
        "Why we process data. To answer your enquiry, to provide services you have asked for (managed accounts, signals, education), to meet legal and regulatory obligations, and to improve the website. The legal basis is your consent, the performance of an agreement with you, or our legitimate interest in running the business.",
        "Sharing. We do not sell personal data. We share it only with service providers needed to run the website and communications (hosting, email, analytics), with partner brokers when you ask us to introduce you, and with authorities where the law requires it.",
        "Retention and security. Enquiry data is kept for as long as needed to handle the request and for up to five years where a business relationship follows, in line with regulatory record-keeping. Data is stored on access-controlled systems.",
        "Your rights. You can ask what data we hold about you, ask for it to be corrected or deleted, object to processing, or withdraw consent at any time by writing to info@nuukquant.com. If you are in the EU, UK or DIFC you also have the right to complain to your data protection authority.",
      ],
    },
    terms: {
      title: "Terms of use",
      body: [
        "These terms govern your use of nuukquant.com, operated by NUUK Quant, Dubai International Financial Centre, Dubai, United Arab Emirates. By using the website you accept them. Last updated 8 September 2026.",
        "Information only. The content of this website is general market commentary and education. It is not personal investment advice, a personal recommendation, or an offer or solicitation to buy or sell any financial instrument. You are responsible for your own investment decisions and for confirming that any service is available to you in your country of residence.",
        "No guarantee. Trading involves substantial risk; see the risk disclosure. Past performance, back-tests and paper results are not a guarantee of future results. Figures marked pending or illustrative are not verified performance data.",
        "Services. Managed accounts, signal subscriptions, mentorship and events are provided under separate written agreements that set out fees, scope, cancellation and risk limits. Those agreements take precedence over this website where they differ.",
        "Third-party links. Links to brokers, platforms and social networks lead to sites we do not control. Referral links are disclosed on the IB disclosure page. We are not responsible for the content, availability or terms of third-party sites.",
        "Intellectual property. Text, graphics, logos, charts and system descriptions on this website belong to NUUK or its licensors. You may view and print pages for personal use; any other reproduction requires written permission. Broker names and logos are the property of their respective owners and are used for identification only.",
        "Liability. The website is provided as is. To the extent permitted by law, NUUK excludes liability for any loss arising from use of the website or reliance on its content, including trading losses, data loss or interruption of service.",
        "Changes and governing law. We may change these terms and the website at any time; the current version is always published here. These terms are governed by the laws applicable in the Dubai International Financial Centre, and disputes are subject to the jurisdiction of the DIFC Courts.",
      ],
    },
  },

  ctaBand: {
    title: "Ready to start?",
    body: "Four steps from first call to first trade. Most people are set up within a week.",
    steps: [
      { title: "Book a call", body: "30 minutes to decide which service fits: broker, signals, managed account or education." },
      { title: "Open a broker account", body: "In your own name, through a partner broker. Verification takes about 10 minutes with ID and proof of address." },
      { title: "Fund and connect", body: "Deposit from $10 by card. Connect the account to the managed structure or signal channel if you chose one." },
      { title: "Start trading", body: "Follow the plan, review results monthly, and never take a trade you cannot explain." },
    ],
    cta: { label: "Book a call", href: "/contact-us/" },
  },

  footer: {
    copyright: "All rights reserved.",
    riskTitle: "Risk disclaimer",
    legal1:
      "is the personal brand of Ahmet S. Öztürk, economist and investor, and the trading name of NUUK Quant, based in the Dubai International Financial Centre. Services are offered to professional and institutional clients where permitted; availability depends on your jurisdiction and applicable regulation.",
    legal2:
      "Content on this website is general market commentary and education. It is not personal investment advice and not an offer or solicitation to buy or sell any financial instrument or service.",
    ib: "Broker links on this website are referral links. I may earn a commission when you open and fund an account through them; this does not change the fees you pay.",
    risk: "Trading involves substantial risk and can result in losses exceeding your initial investment. Past performance is not a guarantee of future results.",
  },

  systems: [
    {
      slug: "gann-live",
      name: "GANN Live",
      assetClass: "XAU/USD, XAG/USD",
      timeframe: "H1 / H4",
      method: "Gann levels + ATR(14) position sizing",
      riskProfile: "Moderate",
      status: "live",
      since: "2026",
      summary: "Gold and silver system: entries on Gann price-time levels, every position sized to a fixed USD 300 risk with ATR(14) stops. No trade is placed without a stop; the execution layer rejects it.",
      stats: [
        { label: "Live since", value: "2026" },
        { label: "Risk per trade", value: "USD 300" },
        { label: "Max drawdown", value: "Pending" },
      ],
      series: [100, 102, 101, 105, 108, 107, 112, 115, 113, 119, 124, 122, 128, 133],
    },
    {
      slug: "trend-ensemble",
      name: "NUUK Trend Ensemble",
      assetClass: "Gold, silver, US and EU indices",
      timeframe: "D1",
      method: "Time-series momentum + Donchian + MA cross, ensemble",
      riskProfile: "Moderate",
      status: "test",
      since: "2026-07",
      summary: "Daily trend-following ensemble on metal and index CFDs. Walk-forward tested 2010–2026 with swap and commission included; running as a paper account at Tickmill since July 2026.",
      stats: [
        { label: "Forward test since", value: "2026-07" },
        { label: "Backtest Sharpe", value: "1.36" },
        { label: "Backtest max DD", value: "6.7%" },
      ],
      series: [100, 103, 99, 104, 109, 106, 111, 110, 116, 114, 120, 118, 123, 127],
    },
    {
      slug: "intraday",
      name: "NUUK Intraday",
      assetClass: "US500, NAS100, US30, GER40, XAU, XAG",
      timeframe: "M15 / H1",
      method: "Opening-range breakout + hourly Donchian",
      riskProfile: "High",
      status: "soon",
      since: "",
      summary: "15-minute opening-range breakout on index CFDs and 1-hour Donchian on metals, executed through the NUUK SignalBridge into MT4. In demo since July 2026; goes live only after a 200-trade paper gate.",
      stats: [
        { label: "Status", value: "Demo, paper gate" },
        { label: "Target launch", value: "After 200 paper trades" },
        { label: "Venue", value: "Tickmill MT4/MT5" },
      ],
      series: [100, 100, 101, 101, 102, 102, 103, 103, 104, 104, 105, 105, 106, 106],
    },
  ] as TradingSystem[],

  performance: [
    {
      name: "Personal portfolio — Tickmill",
      source: "Broker statement",
      verifiedHref: "",
      status: "pending",
      since: "2026",
      updated: "Pending",
      stats: [
        { label: "Return YTD", value: "Pending", tone: "up" },
        { label: "Max drawdown", value: "Pending", tone: "down" },
        { label: "Profit factor", value: "Pending", tone: "neutral" },
        { label: "Trades", value: "Pending", tone: "neutral" },
      ],
      series: [100, 103, 101, 106, 109, 108, 114, 118, 116, 121, 125, 123, 129],
    },
    {
      name: "Personal portfolio — Saxo Bank",
      source: "Broker statement",
      verifiedHref: "",
      status: "pending",
      since: "2025",
      updated: "Pending",
      stats: [
        { label: "Return YTD", value: "Pending", tone: "up" },
        { label: "Max drawdown", value: "Pending", tone: "down" },
        { label: "Profit factor", value: "Pending", tone: "neutral" },
        { label: "Trades", value: "Pending", tone: "neutral" },
      ],
      series: [100, 101, 104, 103, 107, 110, 109, 113, 112, 117, 119, 122, 124],
    },
    {
      name: "Managed strategy — GANN Algo",
      source: "MAM statement",
      verifiedHref: "",
      status: "pending",
      since: "2026",
      updated: "Pending",
      stats: [
        { label: "Return YTD", value: "Pending", tone: "up" },
        { label: "Max drawdown", value: "Pending", tone: "down" },
        { label: "Profit factor", value: "Pending", tone: "neutral" },
        { label: "Accounts", value: "300+", tone: "neutral" },
      ],
      series: [100, 102, 105, 104, 108, 111, 110, 114, 117, 116, 120, 123, 125],
    },
    {
      name: "Signal log — closed ideas",
      source: "Telegram @NUUKQuant",
      verifiedHref: "https://t.me/NUUKQuant",
      status: "pending",
      since: "2025",
      updated: "Monthly",
      stats: [
        { label: "Ideas closed", value: "Pending", tone: "neutral" },
        { label: "Win rate", value: "87%", tone: "up" },
        { label: "Avg R", value: "Pending", tone: "neutral" },
        { label: "Net R", value: "Pending", tone: "neutral" },
      ],
      series: [100, 102, 104, 103, 106, 108, 111, 110, 113, 115, 118, 120, 121],
    },
  ] as PerformanceCard[],
};

export type SiteContent = typeof en;

export const toneBg: Record<string, string> = {
  stocks: "bg-stocks",
  currencies: "bg-currencies",
  futures: "bg-futures",
  options: "bg-options",
  metals: "bg-metals",
  bonds: "bg-bonds",
  crypto: "bg-crypto",
};
