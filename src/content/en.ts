/**
 * Single source of truth for all site copy. Other locales override parts of this
 * object (see src/i18n.ts). Anything marked "[FILL]" is a placeholder waiting for
 * real data from Ahmet.
 */
export type NavLink = { label: string; href: string };
export type NavGroup = { label: string; href: string; items: NavLink[] };
export type Cta = { label: string; href: string };
export type Status = "live" | "verified" | "test" | "paused" | "soon";

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
    telegram: "[FILL: Telegram channel link]",
    calendly: "[FILL: Calendly link]",
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
    fill: "[FILL]",
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
    { label: "LinkedIn", href: "[FILL: LinkedIn URL]", icon: "in" },
    { label: "X", href: "[FILL: X URL]", icon: "x" },
    { label: "YouTube", href: "[FILL: YouTube URL]", icon: "yt" },
    { label: "Instagram", href: "[FILL: Instagram URL]", icon: "ig" },
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
      trustLine: ["Partner brokers regulated by FCA, ASIC and DFSA", "Independently verified track record", "Based in DIFC, Dubai"],
      trust: [
        { value: "[FILL]", label: "years in markets" },
        { value: "[FILL]", label: "strategies running live" },
        { value: "[FILL]", label: "investors trained" },
        { value: "[FILL]", label: "broker partners" },
      ],
      pressTitle: "Featured in",
      press: ["[FILL: media 1]", "[FILL: media 2]", "[FILL: media 3]", "[FILL: media 4]"],
    },
    numbersTitle: "Numbers you can verify*",
    numbersNote: "*Each figure links to its source: verification service, broker statement or event register.",
    promo: {
      kicker: "Managed accounts",
      title: "Your account. My execution. Written risk limits.",
      body: "Capital never leaves your name. You open an account at a partner broker, I receive trading permission only, and a written mandate caps exposure and daily loss.",
      figure: "0",
      figureLabel: "custody transferred. Your money stays in your own broker account, visible to you in real time.",
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
      featuredNote: "Cumulative return, net of trading costs. Rebased to 100 at inception.",
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
        instrument: "XAU/USD",
        direction: "Long",
        entry: "[FILL]",
        stop: "[FILL]",
        target: "[FILL]",
        rr: "[FILL]",
        note: "[FILL: one-paragraph reasoning for the sample idea]",
        date: "[FILL: date]",
      },
      cta: { label: "See plans", href: "/signals/" },
    },
    education: {
      kicker: "Education",
      title: "Next live session",
      cta: { label: "All events", href: "/education/" },
    },
    testimonialsTitle: "What investors say",
    testimonials: [
      { quote: "[FILL: real, approved testimonial]", name: "[FILL: name]", role: "[FILL: role, city]" },
      { quote: "[FILL: real, approved testimonial]", name: "[FILL: name]", role: "[FILL: role, city]" },
      { quote: "[FILL: real, approved testimonial]", name: "[FILL: name]", role: "[FILL: role, city]" },
    ],
    postsTitle: "Latest insights",
  },

  about: {
    metaTitle: "About Ahmet S. Öztürk",
    metaDescription: "Economist, investor and founder of NUUK. Career, approach and what I stand for.",
    kicker: "About",
    title: "Economist first, trader second, engineer by necessity.",
    lead: "[FILL: 2–3 sentence personal introduction: background, why markets, what NUUK is.]",
    portraitAlt: "Ahmet S. Öztürk",
    timelineTitle: "Timeline",
    timeline: [
      { year: "[FILL]", title: "[FILL: milestone]", body: "[FILL: one sentence]" },
      { year: "[FILL]", title: "[FILL: milestone]", body: "[FILL: one sentence]" },
      { year: "[FILL]", title: "[FILL: milestone]", body: "[FILL: one sentence]" },
      { year: "[FILL]", title: "[FILL: milestone]", body: "[FILL: one sentence]" },
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
    speakingTitle: "Speaking & media",
    speaking: ["[FILL: event or publication]", "[FILL: event or publication]", "[FILL: event or publication]"],
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
      { q: "Can I run a system on my own account?", a: "[FILL: yes/no and how — copy trading, MAM, licence]" },
      { q: "What is the minimum capital?", a: "[FILL]" },
      { q: "Do you share the code?", a: "[FILL]" },
    ],
  },

  trackRecord: {
    metaTitle: "Track Record",
    metaDescription: "Independently verified performance of Ahmet S. Öztürk's own portfolio and managed strategies.",
    kicker: "Track record",
    title: "Verified, or not shown",
    lead: "Performance is reported through third-party verification linked to the broker account. If a number cannot be verified, it is not on this page.",
    disclaimer: "Past performance is not a guarantee of future results. Figures are net of trading costs and gross of any performance fee unless stated otherwise.",
    methodologyTitle: "How to read these numbers",
    methodology: [
      { title: "Verified", body: "Linked to the broker account via a read-only connection. The verification service, not this site, calculates the figures." },
      { title: "Max drawdown", body: "Largest peak-to-trough decline in account equity, including open positions." },
      { title: "Profit factor", body: "Gross profit divided by gross loss. Above 1.0 means the strategy made money over the period." },
    ],
    pending: "Verification is being set up for this account. Figures will appear here automatically once the read-only link is live.",
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
      { label: "Minimum allocation", value: "[FILL]" },
      { label: "Performance fee", value: "[FILL: e.g. 20% above high-water mark]" },
      { label: "Management fee", value: "[FILL: e.g. none]" },
      { label: "Lock-up", value: "[FILL: e.g. none, withdraw any time]" },
      { label: "Reporting", value: "Real time in your account; monthly statement" },
      { label: "Structure", value: "[FILL: MAM / PAMM / copy trading via partner broker]" },
    ],
    fitTitle: "Who it is for",
    fit: ["Investors who want professional execution without giving up custody", "Family offices seeking a satellite allocation to systematic strategies", "Business owners with idle treasury balances"],
    notFitTitle: "Who it is not for",
    notFit: ["Anyone who cannot tolerate a [FILL]% drawdown", "Capital needed within [FILL] months", "Anyone expecting fixed or guaranteed returns"],
    compliance: "[FILL: authorisation status. Until confirmed, this service is described as a managed-account arrangement operated through the partner broker's own structure.]",
  },

  brokers: {
    metaTitle: "Broker Partners",
    metaDescription: "Independent comparison of partner brokers: regulation, spreads, funding, platforms and step-by-step account opening.",
    kicker: "Broker partners",
    title: "The brokers I work with",
    lead: "I refer clients only to brokers I trade with or have audited. Cards below show what matters: who regulates them, what they really charge and how fast money moves.",
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
      verifyNote: "Conditions verified on the broker's website on [FILL: date]. Always check the live figures before funding.",
    },
    list: [
      {
        slug: "pepperstone",
        name: "Pepperstone",
        tagline: "Raw spreads from 0.0 pips, five platforms, nine licensed entities",
        regulator: "FCA · ASIC · CySEC · DFSA · BaFin · SCB · CMA",
        licence: "SCB SIA-F217 (Pepperstone Markets Ltd) [FILL: confirm the entity your link onboards to]",
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
        languages: "24/5 multilingual, 18 h at weekends · Turkish [FILL: confirm]",
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
          "Founded in Melbourne in 2010, Pepperstone is one of the largest CFD brokers by volume: over 900,000 accounts, around $1 trillion in monthly trading volume and nine licensed entities across the FCA, ASIC, CySEC, DFSA, BaFin, SCB and CMA. [FILL: one sentence on how you use Pepperstone yourself, e.g. which account and platform]",
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
            a: "[FILL: the entity your referral link onboards to, and what that means for leverage and negative balance protection]",
          },
          {
            q: "Does a referral link change my fees?",
            a: "No. Spreads and commissions are identical whether you register directly or through my link. The broker pays my commission from its own revenue.",
          },
        ],
      },
      {
        slug: "broker-two",
        name: "[FILL: Broker 2]",
        tagline: "[FILL: one line]",
        regulator: "[FILL]",
        licence: "[FILL]",
        founded: "[FILL]",
        minDeposit: "[FILL]",
        platforms: ["MT4", "MT5"],
        spreads: [
          { pair: "EUR/USD", value: "[FILL]" },
          { pair: "XAU/USD", value: "[FILL]" },
          { pair: "US500", value: "[FILL]" },
        ],
        commission: "[FILL]",
        leverage: "[FILL]",
        funding: ["Bank wire", "Crypto", "[FILL]"],
        withdrawalTime: "[FILL]",
        islamic: false,
        languages: "[FILL]",
        bestFor: "[FILL: profile]",
        pros: ["[FILL]", "[FILL]", "[FILL]"],
        cons: ["[FILL]", "[FILL]"],
        referralHref: "[FILL: referral link]",
        steps: ["Open the referral link and choose the account type", "Verify identity", "Fund the account", "Log in to the platform"],
        status: "live",
        summary: "[FILL: 2–3 sentence profile of the broker and how you use it]",
        website: "[FILL: broker website]",
        faq: [
          { q: "[FILL: question]", a: "[FILL: answer]" },
          { q: "[FILL: question]", a: "[FILL: answer]" },
          { q: "Does a referral link change my fees?", a: "No. Spreads and commissions are identical whether you register directly or through my link. The broker pays my commission from its own revenue." },
        ],
      },
      {
        slug: "broker-three",
        name: "[FILL: Broker 3]",
        tagline: "[FILL: one line]",
        regulator: "[FILL]",
        licence: "[FILL]",
        founded: "[FILL]",
        minDeposit: "[FILL]",
        platforms: ["Proprietary", "MT5"],
        spreads: [
          { pair: "EUR/USD", value: "[FILL]" },
          { pair: "XAU/USD", value: "[FILL]" },
          { pair: "US500", value: "[FILL]" },
        ],
        commission: "[FILL]",
        leverage: "[FILL]",
        funding: ["Bank wire", "Card"],
        withdrawalTime: "[FILL]",
        islamic: true,
        languages: "[FILL]",
        bestFor: "[FILL: profile]",
        pros: ["[FILL]", "[FILL]", "[FILL]"],
        cons: ["[FILL]", "[FILL]"],
        referralHref: "[FILL: referral link]",
        steps: ["Open the referral link and choose the account type", "Verify identity", "Fund the account", "Log in to the platform"],
        status: "soon",
        summary: "[FILL: 2–3 sentence profile of the broker and how you use it]",
        website: "[FILL: broker website]",
        faq: [
          { q: "[FILL: question]", a: "[FILL: answer]" },
          { q: "Does a referral link change my fees?", a: "No. Spreads and commissions are identical whether you register directly or through my link. The broker pays my commission from its own revenue." },
        ],
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
      { title: "Trade ideas", body: "[FILL] ideas per month on average, each with entry, stop, target and reasoning." },
      { title: "Live updates", body: "Management of open ideas: partial exits, stop moves, invalidation." },
    ],
    formatTitle: "Idea format",
    plansTitle: "Plans",
    plans: [
      { name: "Reports", price: "[FILL]", period: "per month", features: ["Daily macro note", "Weekly report", "Archive access"], cta: "Subscribe", highlight: false },
      { name: "Signals", price: "[FILL]", period: "per month", features: ["Everything in Reports", "Trade ideas with reasoning", "Live updates on Telegram", "Monthly performance sheet"], cta: "Subscribe", highlight: true },
      { name: "Mentorship", price: "[FILL]", period: "per quarter", features: ["Everything in Signals", "Fortnightly 1:1 review", "Portfolio feedback", "Priority access to webinars"], cta: "Apply", highlight: false },
    ],
    performanceTitle: "Signal performance",
    performanceNote: "Closed ideas are logged monthly with entry, exit and result. [FILL: link to the public log]",
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
      { date: "[FILL: 2026-10-01]", time: "[FILL: 19:00 GST]", title: "[FILL: session title]", format: "Online webinar", language: "English", price: "[FILL: Free / price]", seats: "[FILL]", href: "[FILL: registration link]" },
      { date: "[FILL]", time: "[FILL]", title: "[FILL: session title]", format: "In-person, Dubai", language: "Turkish", price: "[FILL]", seats: "[FILL]", href: "[FILL]" },
    ],
    eventLabels: { format: "Format", language: "Language", price: "Price", seats: "Seats", register: "Register" },
    curriculumTitle: "Curriculum",
    curriculum: [
      { level: "Foundation", title: "Risk first", topics: ["Position sizing", "Stop placement", "Expectancy", "Journaling"] },
      { level: "Intermediate", title: "Reading the market", topics: ["Macro drivers", "Technical structure", "Correlations", "Session timing"] },
      { level: "Advanced", title: "Systematic trading", topics: ["Strategy design", "Back-testing pitfalls", "Automation basics", "Portfolio of strategies"] },
    ],
    corporateTitle: "Corporate training",
    corporateBody: "Custom programmes for brokerages, family offices and treasury teams. [FILL: one sentence on format and past clients]",
    corporateCta: { label: "Enquire", href: "/contact-us/" },
    archiveTitle: "Past sessions",
    archive: [
      { date: "[FILL]", title: "[FILL: recorded session]", href: "[FILL: recording link]" },
      { date: "[FILL]", title: "[FILL: recorded session]", href: "[FILL]" },
    ],
  },

  insights: {
    metaTitle: "Insights",
    metaDescription: "Market commentary on macro, FX, commodities, indices, crypto and AI in trading.",
    kicker: "Insights",
    title: "Notes from the desk",
    tabs: ["All", "Macro", "FX", "Commodities", "Indices", "Crypto", "AI"],
    posts: [
      { title: "[FILL: post title]", excerpt: "[FILL: two-line summary]", category: "Macro", date: "[FILL: date]", tone: "stocks", href: "#" },
      { title: "[FILL: post title]", excerpt: "[FILL: two-line summary]", category: "Commodities", date: "[FILL: date]", tone: "metals", href: "#" },
      { title: "[FILL: post title]", excerpt: "[FILL: two-line summary]", category: "FX", date: "[FILL: date]", tone: "currencies", href: "#" },
      { title: "[FILL: post title]", excerpt: "[FILL: two-line summary]", category: "AI", date: "[FILL: date]", tone: "crypto", href: "#" },
    ],
  },

  contact: {
    metaTitle: "Contact",
    metaDescription: "Book a call, message on WhatsApp or Telegram, or send an enquiry.",
    kicker: "Contact",
    title: "Let's talk",
    lead: "Choose the channel that suits you. Institutional and professional enquiries are answered within one business day.",
    channels: [
      { title: "Book a call", body: "30 minutes, video or phone.", cta: "Open calendar", href: "[FILL: Calendly link]" },
      { title: "WhatsApp", body: "Quick questions and document exchange.", cta: "Message", href: "https://wa.me/971586884464" },
      { title: "Telegram", body: "Signals channel and community.", cta: "Join", href: "[FILL: Telegram link]" },
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
        "Trading involves substantial risk. Investing in FX, commodities, indices, equities, fixed income, metals and digital assets can result in losses that exceed your initial investment, and trading on margin carries additional risk.",
        "Past performance of any model, strategy, signal service or system is not a guarantee of future results. Verified track records describe what happened, not what will happen.",
        "Nothing on this website is personal investment advice. Content is general market commentary and education and does not take your financial situation, objectives or risk tolerance into account.",
        "[FILL: jurisdiction-specific wording, authorisation status]",
      ],
    },
    "ib-disclosure": {
      title: "Introducing broker disclosure",
      body: [
        "Ahmet S. Öztürk / NUUK acts as an introducing partner for the brokers listed on this website. When you open and fund an account through a referral link, the broker pays a commission based on your trading volume.",
        "This commission is paid by the broker and does not increase the spreads, commissions or fees you pay. Broker cards are written independently; a broker cannot pay to change a rating or a listed weakness.",
        "You are free to open an account with any broker directly. The referral link is optional.",
        "Current partners: Pepperstone (introducing partner agreement via the Impact affiliate network). [FILL: other brokers and the nature of each agreement]",
      ],
    },
    privacy: { title: "Privacy", body: ["[FILL: privacy policy]"] },
    terms: { title: "Terms of use", body: ["[FILL: terms of use]"] },
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
      slug: "system-one",
      name: "[FILL: System 1 name]",
      assetClass: "FX majors",
      timeframe: "H1 / H4",
      method: "Trend + ML regime filter",
      riskProfile: "Moderate",
      status: "live",
      since: "[FILL: 2025-01]",
      summary: "[FILL: two-sentence description of what it trades and the edge it exploits]",
      stats: [
        { label: "Live since", value: "[FILL]" },
        { label: "Max drawdown", value: "[FILL]" },
        { label: "Trades / month", value: "[FILL]" },
      ],
      series: [100, 102, 101, 105, 108, 107, 112, 115, 113, 119, 124, 122, 128, 133],
    },
    {
      slug: "system-two",
      name: "[FILL: System 2 name]",
      assetClass: "Gold, US indices",
      timeframe: "M15 / H1",
      method: "Mean reversion, session-aware",
      riskProfile: "Moderate-high",
      status: "test",
      since: "[FILL]",
      summary: "[FILL]",
      stats: [
        { label: "Forward test since", value: "[FILL]" },
        { label: "Max drawdown", value: "[FILL]" },
        { label: "Trades / month", value: "[FILL]" },
      ],
      series: [100, 103, 99, 104, 109, 106, 111, 110, 116, 114, 120, 118, 123, 127],
    },
    {
      slug: "system-three",
      name: "[FILL: System 3 name]",
      assetClass: "BTC, ETH",
      timeframe: "H4 / D1",
      method: "Momentum with volatility targeting",
      riskProfile: "High",
      status: "soon",
      since: "[FILL]",
      summary: "[FILL]",
      stats: [
        { label: "Status", value: "In development" },
        { label: "Target launch", value: "[FILL]" },
        { label: "Venue", value: "[FILL]" },
      ],
      series: [100, 100, 101, 101, 102, 102, 103, 103, 104, 104, 105, 105, 106, 106],
    },
  ] as TradingSystem[],

  performance: [
    {
      name: "Personal portfolio — [FILL: broker]",
      source: "Myfxbook",
      verifiedHref: "[FILL: verification link]",
      status: "verified",
      since: "[FILL: 2024-01]",
      updated: "[FILL: auto]",
      stats: [
        { label: "Return YTD", value: "[FILL]", tone: "up" },
        { label: "Max drawdown", value: "[FILL]", tone: "down" },
        { label: "Profit factor", value: "[FILL]", tone: "neutral" },
        { label: "Trades", value: "[FILL]", tone: "neutral" },
      ],
      series: [100, 103, 101, 106, 109, 108, 114, 118, 116, 121, 125, 123, 129],
    },
    {
      name: "Managed strategy A — [FILL]",
      source: "FX Blue",
      verifiedHref: "[FILL]",
      status: "verified",
      since: "[FILL]",
      updated: "[FILL]",
      stats: [
        { label: "Return YTD", value: "[FILL]", tone: "up" },
        { label: "Max drawdown", value: "[FILL]", tone: "down" },
        { label: "Profit factor", value: "[FILL]", tone: "neutral" },
        { label: "Trades", value: "[FILL]", tone: "neutral" },
      ],
      series: [100, 101, 104, 103, 107, 110, 109, 113, 112, 117, 119, 122, 124],
    },
    {
      name: "Signal log — closed ideas",
      source: "Public log",
      verifiedHref: "[FILL]",
      status: "soon",
      since: "[FILL]",
      updated: "[FILL]",
      stats: [
        { label: "Ideas closed", value: "[FILL]", tone: "neutral" },
        { label: "Win rate", value: "[FILL]", tone: "neutral" },
        { label: "Avg R", value: "[FILL]", tone: "neutral" },
        { label: "Net R", value: "[FILL]", tone: "up" },
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
