import type { ContentOverride } from "@/i18n";

/**
 * French overrides. Deep-merged onto src/content/en.ts: objects merge by key,
 * arrays merge index-wise, so every array here keeps the same length and order
 * as English. Keys omitted fall back to English on purpose (hrefs, slugs, icons,
 * numeric values, brand names, "[FILL…]" placeholders and insights post
 * categories, which the tab filter compares against the English tabs).
 * Typography: non-breaking spaces (U+00A0) before : ; ? ! as in French usage.
 */
export const fr: ContentOverride = {
  meta: {
    title: "NUUK — Trading piloté par l'IA et gestion de portefeuille, Dubaï",
    description:
      "NUUK est une société de trading pilotée par l'IA basée au DIFC, à Dubaï : systèmes de trading algorithmique, comptes gérés, recherche, signaux et formation des investisseurs.",
  },
  brand: {
    role: "Trading algorithmique · Gestion de portefeuille",
    office: "Dubai International Financial Centre (DIFC), Dubaï, Émirats arabes unis",
  },
  ui: {
    "partnerPopup": {
      "title": "",
      "alt": "",
      "cta": "",
      "close": "Fermer"
    },
    investorLogin: "Accès investisseur",
    pnl: {
      "kicker": "Desk propriétaire",
      "today": "Clôturé aujourd’hui",
      "trades": "trades",
      "winRate": "taux de réussite",
      "updated": "Mis à jour",
      "source": "Compte propre de NUUK, relevé quotidien MT5, net de commission et de swap. Illustre le desk uniquement ; pas un résultat de compte géré."
    },
    contactToOpen: "Ouvrir un compte avec nous",
    scrollDown: "Faire défiler",
    contact: "Contact",
    getStarted: "Réserver un appel",
    contactUs: "Contact",
    learnMore: "En savoir plus",
    language: "Langue",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    home: "Accueil",
    noPosts: "Aucun article dans cette catégorie pour le moment.",
    riskDisclosure: "Avertissement sur les risques",
    verified: "Vérifié",
    live: "En direct",
    model: "Portefeuille modèle",
    test: "En test",
    paused: "En pause",
    soon: "Bientôt",
    pending: "Rapport en attente",
    verificationInProgress: "Rapport en cours",
    updated: "Mis à jour",
    since: "Depuis",
    source: "Source",
    openAccount: "Ouvrir un compte",
    compare: "",
    subscribe: "S'abonner",
    register: "S'inscrire",
    requestDemo: "Demander une démo",
    viewAll: "Tout voir",
    readMore: "Lire la suite",
    fill: "",
    whatsapp: "WhatsApp",
    legal: "Mentions légales",
    followUs: "Suivre",
    riskBar: {
      pre: "Le trading de produits à effet de levier tels que les CFD et le forex comporte un risque élevé de perdre rapidement de l'argent.",
      strong: "Les performances passées ne préjugent pas des résultats futurs.",
      post: "Rien sur ce site ne constitue un conseil en investissement personnalisé.",
    },
  },
  nav: [
    {
      label: "Services",
      items: [
        { label: "Systèmes de trading IA" },
        { label: "Track record" },
        { label: "Comptes gérés" },
        { label: "Signaux et rapports" },
        { label: "Formation" },
      ],
    },
    { label: "Track record" },
    { label: "Masterclass" },
    { label: "Analyses", items: [{ label: "Notes de marché" }, { label: "Calendrier économique" }] },
    {
      label: "À propos",
      items: [
        { label: "Parcours" },
        { label: "Comment nous gagnons de l’argent" },
        { label: "Contact" },
        { label: "Avertissement sur les risques" },
        { label: "Espace investisseur" },
        { label: "Études de cas" },
      ],
    },
  ],
  legalLinks: [
    { label: "Avertissement sur les risques" },
    { label: "Confidentialité" },
    { label: "Conditions d'utilisation" },
  ],
  socials: [{ label: "LinkedIn" }, { label: "X" }, { label: "Instagram" }],

  home: {
    hero: {
      visualTag: "Trading algorithmique · Gestion de portefeuille",
      visualAlt: "Monoplace de Formule 1 aux couleurs NUUK dans un studio sombre",
      kicker: "Société de trading pilotée par l'IA · DIFC, Dubaï",
      title: "Les marchés, lus avec discipline.",
      lead:
        "NUUK conçoit des systèmes de trading pilotés par l'IA, les exploite d'abord sur son propre capital, gère des comptes d'investisseurs et apprend aux investisseurs à trader par eux-mêmes. Chaque chiffre de ce site indique sa source et sa méthode.",
      primary: { label: "Ouvrir un compte de courtage" },
      secondary: { label: "Réserver un appel" },
      trustLine: ["Notre capital dans chaque système", "Basé au DIFC, à Dubaï"],
      trust: [
        { label: "années d'expérience de desk entre Istanbul et Londres derrière la société" },
        {"label": "variantes de stratégies back-testées depuis 2026 ; trois en production, documentées sur la page trading IA"},
        { label: "investisseurs formés lors de webinaires et de séminaires" },
      ],
      pressTitle: "Courtier",
    },
    markets: {
      "kicker": "Cours en direct",
      "title": "Les marchés, maintenant",
      "lead": "Cotations en direct via TradingView : forex, matières premières, indices, crypto et les actions suivies par le desk. Cliquez sur une ligne pour ouvrir le graphique.",
      "tabs": [
        "Forex",
        "Matières premières",
        "Indices",
        "Crypto",
        "Actions"
      ],
      "note": "Les cotations sont fournies par TradingView et ses partenaires de données ; certains flux boursiers sont différés. Les conditions de trading, les spreads et l'exécution sont ceux du courtier avec lequel vous tradez."
    },
    numbersTitle: "NUUK en chiffres*",
    numbersNote: "*Chiffres à septembre 2026, issus des registres de NUUK.",
    promo: {
      kicker: "Comptes gérés",
      title: "Votre compte. L'exécution de NUUK. Des limites de risque écrites.",
      body: "Le capital ne quitte jamais votre nom. Vous ouvrez un compte chez le courtier, NUUK reçoit uniquement une autorisation de trading, et un mandat écrit plafonne l'exposition et la perte quotidienne.",
      figureLabel: "comptes gérés, chacun logé dans le propre compte de courtage du client. La garde des fonds n'est jamais transférée.",
      cta: { label: "Comment ça marche" },
    },
    postsLead: "Macro, forex, matières premières, indices, cryptos et IA appliquée au trading. Écrit pour être lu en cinq minutes.",
    pillarsTitle: "Quatre façons de travailler ensemble",
    pillarsLead: "Quatre services, une règle : le capital reste toujours sur le propre compte du client.",
    pillars: [
      { title: "Systèmes de trading IA", body: "Algorithmes propriétaires codés, testés et exécutés en direct sur le forex, les indices, les matières premières et les actifs numériques.", who: "Pour les allocateurs et les investisseurs techniques" },
      { title: "Track record", body: "Les résultats du portefeuille propre de NUUK et des systèmes, nets de coûts, avec la source et la méthode de chaque chiffre.", who: "Pour quiconque décide s'il peut faire confiance à NUUK" },
      { title: "Comptes gérés", body: "Votre capital reste sur votre propre compte de courtage. NUUK le trade dans le cadre de limites de risque convenues et d'une commission de performance.", who: "Pour les investisseurs qui préfèrent déléguer" },
      { title: "Signaux, rapports et formation", body: "Notes quotidiennes, rapports hebdomadaires, idées de trade avec le raisonnement complet, et webinaires en direct qui enseignent la méthode.", who: "Pour les traders qui veulent apprendre et rester informés" },
    ],
    record: {
      kicker: "Track record",
      title: "Les résultats, et la méthode derrière",
      lead: "Les résultats sont nets des coûts de trading. Chaque chiffre indique sa source : compte réel, paper trading ou backtest.",
      featuredLabel: "Courbe d'equity",
      featuredNote: "Backtest walk-forward 2010–2026, net de swaps et de commissions, base 100. Rendement annualisé +10,9 %, drawdown maximal 6,7 %, ratio de Sharpe 1,36.",
      cta: { label: "Voir le track record complet" },
    },
    brokers: {
      kicker: "Courtier",
      title: "Votre compte reste chez le courtier",
      lead: "Chaque investisseur NUUK détient un compte de courtage à son propre nom. NUUK ne détient jamais l'argent des clients ; demandez-nous comment se déroule l'ouverture du compte.",
      cta: { label: "Nous contacter" },
    },
    systems: {
      kicker: "Trading IA",
      title: "Des systèmes conçus en interne",
      lead: "Chaque système est documenté : données, modèle, règles de risque, exécution, et s'il est en direct ou encore en test.",
      cta: { label: "Découvrir les systèmes" },
    },
    signals: {
      kicker: "Signaux et rapports",
      title: "Des idées de trade avec le raisonnement",
      lead: "Instrument, sens, entrée, stop, objectif et pourquoi. Livrées sur WhatsApp et par e-mail.",
      sample: {
        "entry": "4,392",
        "stop": "4,368",
        "target": "4,464",
        "rr": "1:3",
        "note": "L'or a tenu la zone de demande 4 380–4 400 après un rapport sur l'emploi solide, tandis que les rendements réels n'ont pas fait de nouveau plus haut. Achat au-dessus de 4 392 avec le stop sous la zone à 4 368 ; objectif 4 464 sur le précédent sommet. Risque de 0,5 % du capital ; position réduite de moitié si l'IPC américain ressort au-dessus de 3,4 %.",
        "date": "8 sept. 2026 · exemple illustratif"
      },
      cta: { label: "Voir les offres" },
    },
    education: {
      kicker: "Formation",
      title: "Prochaine session en direct",
      cta: { label: "Tous les événements" },
    },
    testimonialsTitle: "Ce que disent les investisseurs",
    postsTitle: "Dernières analyses",
  },

  about: {
    "metaTitle": "À propos de NUUK",
    "metaDescription": "NUUK est une société de trading pilotée par l'IA et de gestion de portefeuille fondée au DIFC de Dubaï en 2025, bâtie sur dix-sept ans d'expérience de desk entre Istanbul et Londres.",
    "kicker": "À propos de NUUK",
    "title": "Dix-sept ans sur le desk. Une société créée pour le prouver.",
    "lead": "NUUK a été fondée au Dubai International Financial Centre en 2025 sur dix-sept ans d'expérience de desk : d'une salle de courtage FX à Londres en 2009, en passant par les desks institutionnels d'Istanbul, jusqu'à une activité d'apporteur d'affaires de plus de 700 clients. Cette expérience est devenue une conviction unique : les marchés récompensent la discipline, pas l'opinion. NUUK la transforme en stratégies systématiques, les exploite d'abord sur son propre capital et partage la méthode par des comptes gérés, de la recherche et de la formation.",
    "facts": [
      {
        "value": "2025",
        "label": "fondée au DIFC, Dubaï"
      },
      {
        "value": "17",
        "label": "années d'expérience de desk entre Istanbul et Londres"
      },
      {
        "value": "3",
        "label": "systèmes en production, 87 variantes de stratégies testées"
      }
    ],
    "activitiesTitle": "Ce que fait NUUK",
    "activitiesLead": "Quatre activités et une règle commune à toutes : le capital du client reste sur son propre compte.",
    "activities": [
      {
        "title": "Systèmes de trading algorithmique",
        "body": "Des stratégies conçues, back-testées et testées en avant en interne, puis exploitées en réel sur le capital propre de NUUK sur le forex, l'or, les indices et les actifs numériques. GANN NUUK Trader AI fonctionne en portefeuille modèle."
      },
      {
        "title": "Gestion de portefeuille",
        "body": "Des comptes gérés dans le propre compte de courtage du client via des structures MAM/PAMM, sous mandat de risque écrit, avec des frais de gestion et une commission de performance sur le bénéfice net."
      },
      {
        "title": "Recherche et signaux",
        "body": "Notes quotidiennes du desk, rapport hebdomadaire et idées de trade avec le raisonnement complet, diffusés via le portail investisseurs et WhatsApp."
      },
      {
        "title": "Formation des investisseurs",
        "body": "Webinaires, séminaires et mentorat : plus de 3 000 investisseurs formés à lire les marchés avec la même discipline que le desk."
      }
    ],
    "timelineTitle": "L'histoire",
    "timeline": [
      {
        "year": "2009",
        "title": "Londres",
        "body": "L'expérience de desk derrière NUUK commence dans une salle de courtage FX de la City : exécution, liquidité et risque client, appris de l'intérieur."
      },
      {
        "year": "2011",
        "title": "Istanbul",
        "body": "Couverture FX institutionnelle chez des courtiers d'Istanbul alors que la Turquie s'ouvre au trading à effet de levier ; le portefeuille de clients internationaux croît de 27 %."
      },
      {
        "year": "2016",
        "title": "Une activité de clientèle",
        "body": "Une activité d'apporteur d'affaires et de suivi de clientèle atteint plus de 700 clients et plus de 26 M USD d'activité client."
      },
      {
        "year": "2025",
        "title": "NUUK, Dubaï",
        "body": "Création au Dubai International Financial Centre d'une société de trading pilotée par l'IA : systèmes, comptes gérés, recherche et formation."
      },
      {
        "year": "2026",
        "title": "Systèmes en production",
        "body": "87 variantes de stratégies back-testées, trois en production. GANN NUUK Trader AI fonctionne en portefeuille modèle et figure sur la page de performance."
      },
      {
        "year": "Aujourd'hui",
        "title": "Un desk multilingue",
        "body": "Un portail investisseurs et un site en six langues, au service des investisseurs d'Istanbul au Golfe."
      }
    ],
    "principlesTitle": "Comment NUUK travaille",
    "principles": [
      {
        "title": "Les preuves avant les opinions",
        "body": "Chaque chiffre de ce site indique sa source et sa méthode. Ce qui ne peut être expliqué n'est pas montré."
      },
      {
        "title": "Le risque avant le rendement",
        "body": "Taille de position, limites de drawdown et règles de stop sont fixées avant tout trade."
      },
      {
        "title": "Votre argent reste le vôtre",
        "body": "Les comptes gérés fonctionnent dans votre propre compte de courtage. NUUK n'assure jamais la garde des fonds."
      },
      {
        "title": "Le capital propre d'abord",
        "body": "Aucun système n'atteint un compte client avant d'avoir tourné sur l'argent propre de NUUK."
      }
    ],
    "focusTitle": "Marchés couverts",
    "focus": [
      "BIST",
      "NYSE",
      "Forex",
      "Crypto",
      "Fonds",
      "Matières premières",
      "Immobilier",
      "Fortunes établies"
    ],
    "speakingTitle": "Où NUUK publie",
    "speaking": [
      "Groupe WhatsApp : notes de marché quotidiennes, idées de trade et rapport mensuel des systèmes",
      "LinkedIn · NUUK : actualités de l'entreprise et recherche de fond",
      "Portail investisseurs : recherche, signaux, P&L quotidien et formation pour les abonnés"
    ]
  },

  aiTrading: {
    metaTitle: "Systèmes de trading IA",
    metaDescription: "Systèmes de trading algorithmique propriétaires : méthodologie, règles de risque et statut en direct.",
    kicker: "Trading IA",
    title: "Des systèmes, pas des signaux sortis d'une boîte noire",
    lead: "Chaque système est construit, backtesté et testé en conditions réelles avant de toucher du capital réel. Voici ce que fait chacun d'eux, comment il gère le risque et s'il est en direct aujourd'hui.",
    cta: { label: "Demander une démo" },
    systemsTitle: "Les systèmes",
    methodTitle: "Méthodologie",
    method: [
      { title: "Données", body: "Données tick et barres provenant des places primaires, nettoyées et alignées dans le temps. Données alternatives lorsqu'elles méritent leur place." },
      { title: "Modèle", body: "Signaux fondés sur des règles, combinés à des filtres d'apprentissage automatique. Rien ne trade qui ne puisse être expliqué en un paragraphe." },
      { title: "Risque", body: "Le risque est pris en compte à chaque étape du processus." },
      { title: "Exécution", body: "API de courtiers et FIX lorsque disponible ; slippage et qualité d'exécution suivis par place de marché." },
      { title: "Revue", body: "Revue hebdomadaire de la performance réelle par rapport à la performance attendue. Les systèmes qui dérivent sont mis en pause, pas retouchés en cours de route." },
    ],
    faqTitle: "Questions fréquentes",
    faq: [
      { q: "Puis-je faire tourner un système sur mon propre compte ?", a: "Oui, sur un compte de courtage à votre nom. Vous pouvez faire du copy trading, rejoindre une structure MAM/PAMM chez le courtier, ou suivre le canal de signaux et exécuter vous-même. Dans tous les cas, le compte reste à votre nom." },
      { q: "Quel est le capital minimum ?", a: "250 USD pour les signaux WhatsApp et 1 000 USD pour NUUK AI - Premium. Les comptes gérés MAM/PAMM commencent à l'allocation minimale indiquée sur la page des comptes gérés." },
      { q: "Partagez-vous le code ?", a: "Non. Le code reste propriétaire. NUUK publie la méthodologie, les règles de risque et les résultats, chacun avec sa source." },
    ],
  },

  trackRecord: {
    metaTitle: "Track record",
    metaDescription: "Performance du portefeuille propre de NUUK et de ses systèmes de trading, avec la source et la méthode de chaque chiffre.",
    kicker: "Track record",
    title: "Chaque chiffre, avec sa source",
    lead: "Les comptes des investisseurs sont détenus chez le courtier. Les résultats de cette page appartiennent au portefeuille modèle NUUK, un compte distinct des comptes des investisseurs. Chaque chiffre indique d’où il vient et comment il est calculé. Les performances passées ne préjugent pas des résultats futurs.",
    disclaimer: "Les performances passées ne préjugent pas des résultats futurs. Les chiffres sont nets de frais de trading et bruts de toute commission de performance, sauf indication contraire.",
    methodologyTitle: "Comment lire ces chiffres",
    methodology: [
      { title: "Source", body: "Compte réel, paper trading ou backtest. L’étiquette figure à côté de chaque chiffre et la méthode de calcul est décrite sur cette page." },
      { title: "Drawdown maximal", body: "Plus forte baisse de l'equity du compte entre un sommet et un creux, positions ouvertes comprises." },
      { title: "Profit factor", body: "Gains bruts divisés par pertes brutes. Au-dessus de 1.0, la stratégie a gagné de l'argent sur la période." },
    ],
    pending: "Les chiffres proviennent de l'historique des positions clôturées du relevé MT4. Le desk fonctionne comme un portefeuille modèle.",
  },

  managed: {
    metaTitle: "Comptes gérés",
    metaDescription: "Fonctionnement des comptes gérés : votre capital reste sur votre propre compte de courtage, tradé dans le cadre de limites de risque convenues.",
    kicker: "Comptes gérés",
    title: "Votre compte. L'exécution de NUUK. Des limites convenues.",
    lead: "Le capital ne quitte jamais votre nom. Vous ouvrez un compte chez le courtier, vous le reliez à la structure gérée, et NUUK le trade dans le cadre d'un mandat de risque écrit.",
    cta: { label: "Demander un appel de présentation" },
    howTitle: "Comment ça marche",
    how: [
      { title: "Appel de découverte", body: "Nous discutons de vos objectifs, de votre horizon, de vos besoins de liquidité et du drawdown que vous pouvez réellement supporter." },
      { title: "Ouverture du compte", body: "Vous ouvrez un compte à votre nom chez le courtier et vous l'approvisionnez. NUUK reçoit uniquement une autorisation de trading, jamais de droit de retrait." },
      { title: "Mandat de risque", body: "Les limites de risque sont convenues dans un mandat écrit." },
      { title: "Reporting", body: "Vous voyez chaque trade en temps réel sur votre propre compte, plus un rapport mensuel et un appel de revue trimestriel." },
    ],
    tiersTitle: "Trois façons d'allouer",
    tiers: [
      {
        "name": "Signaux WhatsApp",
        "tagline": "Les signaux vous parviennent ; vous passez les ordres",
        "minimum": "250 USD (votre propre compte de courtage)",
        "managementFee": "49 USD par mois pour l'abonnement IA",
        "performanceFee": "Aucuns",
        "lockup": "Aucun ; vous partez quand vous voulez",
        "structure": "Votre propre compte de courtage ; les signaux arrivent sur WhatsApp",
        "forWhom": "Ceux qui démarrent avec un petit solde et veulent passer les ordres eux-mêmes",
        "join": "Rejoindre",
        "joinText": "Bonjour. Je souhaite rejoindre le programme de signaux."
      },
      {
        "name": "NUUK AI - Premium",
        "tagline": "Les systèmes, dans votre propre compte",
        "minimum": "1 000 USD",
        "managementFee": "99 USD par mois",
        "performanceFee": "25 % du bénéfice net hebdomadaire",
        "lockup": "30 jours, puis retrait à tout moment",
        "structure": "Pool MAM / copy trading chez le courtier",
        "forWhom": "Investisseurs autonomes qui veulent les systèmes sans les piloter",
        "join": "Rejoindre",
        "joinText": "Bonjour. Je souhaite rejoindre le programme NUUK AI - Premium."
      },
      {
        "name": "Compte dédié",
        "tagline": "Votre mandat, vos limites de risque",
        "minimum": "250 000 USD",
        "managementFee": "1 000 USD par mois (environ 4,8 % par an au minimum, proportionnellement moins au-delà)",
        "performanceFee": "25 % des profits au-dessus du high-water mark",
        "lockup": "Préavis de 30 jours",
        "structure": "PAMM ou compte géré séparément chez le courtier",
        "forWhom": "Family offices, trésoreries d'entreprise et investisseurs professionnels",
        "join": "Rejoindre",
        "joinText": "Bonjour. Je souhaite ouvrir un compte dédié."
      }
    ],
    tierLabels: {
      "minimum": "Allocation minimale",
      "managementFee": "Frais de gestion",
      "performanceFee": "Commission de performance",
      "lockup": "Période de blocage",
      "structure": "Structure",
      "forWhom": "Conçu pour"
    },
    termsTitle: "Les conditions en bref",
    terms: [
      {
        "label": "Conservation",
        "value": "Toujours à votre nom chez le courtier ; NUUK ne détient que le droit de trader"
      },
      {
        "label": "Reporting",
        "value": "En temps réel sur votre compte ; relevé mensuel ; point trimestriel"
      },
      {
        "label": "Mandat de risque",
        "value": "Écrit par compte : exposition maximale, limite de perte journalière, instruments autorisés"
      },
      {
        "label": "Droits de retrait",
        "value": "Les vôtres uniquement ; NUUK ne détient jamais de droit de retrait ou de transfert"
      }
    ],
    fitTitle: "À qui cela s'adresse",
    fit: ["Investisseurs qui veulent une exécution professionnelle sans renoncer à la garde de leurs fonds", "Family offices à la recherche d'une allocation satellite vers des stratégies systématiques", "Chefs d'entreprise disposant de trésorerie inutilisée"],
    notFitTitle: "À qui cela ne s'adresse pas",
    notFit: ["Quiconque ne peut pas supporter un drawdown de 20 %", "Capital nécessaire dans les 3 mois", "Quiconque attend des rendements fixes ou garantis"],
    compliance: "NUUK Quant opère depuis le Dubai International Financial Centre. Les comptes gérés fonctionnent via la structure MAM/PAMM du courtier, dans son cadre réglementaire : NUUK ne détient que le droit de trader, jamais la conservation ni le droit de retrait. Les 300+ comptes gérés aujourd'hui sont dans le pool MAM ; les mandats dédiés sont ouverts individuellement.",
  },

  brokers: {
    metaTitle: "",
    metaDescription: "",
    kicker: "",
    title: "",
    lead: "",
    disclosure: "",
    hub: {
      kicker: "",
      title: "",
      points: [],
      modelNote: "",
      openAccount: "",
      openAccountHref: "",
      lp: "",
      lpHref: "",
    },
    compareTitle: "",
    partner: {
      "kicker": "",
      "title": "",
      "body": "",
      "points": [],
      "cta": {
        "label": ""
      }
    },
    cardLabels: {
      contactNote: "",
      regulator: "",
      licence: "",
      founded: "",
      minDeposit: "",
      platforms: "",
      spreads: "",
      commission: "",
      leverage: "",
      funding: "",
      withdrawal: "",
      islamic: "",
      languages: "",
      bestFor: "",
      pros: "",
      cons: "",
      steps: "",
      yes: "",
      no: "",
      profile: "",
      allBrokers: "",
      atAGlance: "",
      conditions: "",
      about: "",
      website: "",
      faq: "",
      openWith: "",
      verifyNote: "",
    },
    list: [],
  },

  signals: {
    metaTitle: "Signaux et rapports",
    metaDescription: "Notes de marché quotidiennes, rapports hebdomadaires et idées de trade avec le raisonnement complet, livrés sur WhatsApp et par e-mail.",
    kicker: "Signaux et rapports",
    title: "Des idées avec le raisonnement",
    lead: "Pas d'alertes aveugles. Chaque idée est accompagnée de l'instrument, du sens, de l'entrée, du stop, de l'objectif, du ratio risque/rendement et d'un paragraphe expliquant pourquoi. Vous apprenez en tradant.",
    whatTitle: "Ce que vous recevez",
    what: [
      { title: "Note macro quotidienne", body: "Une page avant l'ouverture de Londres : ce qui compte aujourd'hui, niveaux clés, risques programmés." },
      { title: "Rapport hebdomadaire", body: "Positionnement, thèmes et semaine à venir sur le forex, les indices, les métaux et les actifs numériques." },
      { title: "Idées de trade", body: "Plus de 100 idées par mois en moyenne, chacune avec entrée, stop, objectif et raisonnement." },
      { title: "Mises à jour en direct", body: "Gestion des idées ouvertes : sorties partielles, déplacements de stop, invalidation." },
    ],
    formatTitle: "Format d'une idée",
    plansTitle: "Offres",
    plans: [
      { name: "Rapports", period: "par mois", features: ["Note macro quotidienne", "Rapport hebdomadaire", "Accès aux archives"], cta: "S'abonner" },
      { name: "Signaux", period: "par mois", features: ["Tout ce qui est inclus dans Rapports", "Idées de trade avec raisonnement", "Mises à jour en direct sur WhatsApp", "Fiche de performance mensuelle"], cta: "S'abonner" },
      { name: "Mentorat", period: "par trimestre", features: ["Tout ce qui est inclus dans Signaux", "Revue individuelle toutes les deux semaines", "Retour sur votre portefeuille", "Accès prioritaire aux webinaires"], cta: "Postuler" },
    ],
    performanceTitle: "Performance des signaux",
    performanceNote: "Les idées clôturées sont consignées chaque mois avec entrée, sortie et résultat dans le groupe WhatsApp. Journal interne à ce jour : 87 % des idées clôturées ont atteint l'objectif avant le stop. La vérification indépendante du journal est en cours.",
    disclaimer: "Les signaux sont un contenu pédagogique et un commentaire général de marché. Ils ne constituent pas un conseil en investissement personnalisé et ne tiennent pas compte de votre situation.",
  },

  education: {
    metaTitle: "Webinaires et séminaires",
    metaDescription: "Webinaires en direct et séminaires en présentiel qui apprennent aux investisseurs à trader par eux-mêmes.",
    kicker: "Formation",
    title: "Apprenez la méthode, puis tradez-la vous-même",
    lead: "Des sessions en direct, pas des cours enregistrés vendus en pilote automatique. Petits groupes, vrais graphiques, vraies règles de risque.",
    upcomingTitle: "Prochaines sessions",
    events: [
      {
        "title": "Briefing hebdomadaire des marchés : or, indices et Fed",
        "format": "Webinaire en ligne",
        "language": "Anglais",
        "price": "Gratuit",
        "seats": "100"
      },
      {
        "title": "Atelier de trading systématique sur l'or",
        "format": "En présentiel, Dubaï",
        "language": "Turc",
        "price": "250 USD",
        "seats": "25"
      }
    ],
    eventLabels: { format: "Format", language: "Langue", price: "Prix", seats: "Places", register: "S'inscrire" },
    curriculumTitle: "Programme",
    curriculum: [
      { level: "Fondamentaux", title: "Le risque d'abord", topics: ["Taille de position", "Placement du stop", "Espérance de gain", "Tenue d'un journal"] },
      { level: "Intermédiaire", title: "Lire le marché", topics: ["Moteurs macro", "Structure technique", "Corrélations", "Timing des sessions"] },
      { level: "Avancé", title: "Trading systématique", topics: ["Conception de stratégie", "Pièges du backtesting", "Bases de l'automatisation", "Portefeuille de stratégies"] },
    ],
    corporateTitle: "Formation en entreprise",
    corporateBody: "Programmes sur mesure pour les sociétés de courtage, les family offices et les équipes de trésorerie. Format d'une demi-journée ou de deux jours, sur site à Dubaï ou Istanbul ou en ligne, construit autour de vos instruments et de votre politique de risque.",
    corporateCta: { label: "Demander des informations" },
    archiveTitle: "Bibliothèque des sessions",
  },

  insights: {
    notesTitle: "Notes du desk",
    newsTitle: "Actualité des marchés en direct",
    newsLead: "Titres et analyses des agences professionnelles et des contributeurs TradingView, diffusés dès publication. Heures dans votre fuseau.",
    techTitle: "Instantané technique",
    techLead: "Lectures agrégées des oscillateurs et moyennes mobiles sur les instruments que nos systèmes tradent le plus, en journalier.",
    feedNote: "Flux fournis par TradingView. Les contenus tiers ne reflètent pas l’avis de NUUK et ne constituent pas un conseil en investissement.",
    metaTitle: "Analyses",
    metaDescription: "Commentaires de marché sur la macro, le forex, les matières premières, les indices, les cryptos et l'IA appliquée au trading.",
    kicker: "Analyses",
    title: "Notes du desk",
    tabs: ["Tout", "Macro", "Forex", "Matières premières", "Indices", "Crypto", "IA"],
  },

  calendar: {
    metaTitle: "Calendrier économique",
    metaDescription: "Calendrier économique en direct : décisions des banques centrales, inflation, emploi et PIB avec consensus et valeurs précédentes.",
    kicker: "Calendrier économique",
    title: "Les publications de la semaine qui font bouger les marchés",
    lead: "Décisions des banques centrales, inflation, emploi et croissance sur un seul écran, avec consensus et valeurs précédentes. Les horaires sont affichés dans votre fuseau horaire.",
    note: "Données TradingView. Les événements à fort impact portent trois barres. Les systèmes NUUK réduisent la taille des positions autour de ces publications ; les traders discrétionnaires devraient éviter d’ouvrir de nouvelles positions dans les 15 minutes qui les précèdent.",
    tipsTitle: "Comment nous lisons le calendrier",
    tips: ["Comparez le chiffre réel au consensus, pas à la valeur précédente ; c’est la surprise qui fait bouger le marché.", "Surveillez la révision du chiffre du mois dernier ; une forte révision compte souvent plus que le chiffre principal.", "Les décisions de taux font bouger le marché deux fois : à l’annonce, puis à la conférence de presse environ 30 minutes plus tard."],
  },
  money: {
    "metaTitle": "Comment nous gagnons de l’argent",
    "metaDescription": "NUUK se rémunère en négociant son propre capital, par des frais de gestion et de performance sur les portefeuilles gérés et par des abonnements à la recherche. Chaque frais est expliqué.",
    "kicker": "Comment nous gagnons de l’argent",
    "title": "Nous gagnons quand vous gagnez. Notre capital passe en premier.",
    "lead": "NUUK n’est pas un courtier et ne prend pas la contrepartie de vos ordres. Nos revenus proviennent de quatre sources transparentes, et la plus importante est le trading que nous menons aussi pour vous.",
    "principlesTitle": "Quatre principes derrière chaque frais",
    "principles": [
      {
        "title": "Notre capital d’abord",
        "body": "Chaque système tourne avec notre argent avant de gérer celui d’autrui. Nous prenons les mêmes positions, au même moment, avec les mêmes limites de risque."
      },
      {
        "title": "Rémunérés sur le bénéfice net",
        "body": "Les frais de performance ne s’appliquent qu’au bénéfice réalisé au-dessus du plus-haut historique (high-water mark) de votre compte. Les pertes doivent être récupérées avant que nous gagnions à nouveau."
      },
      {
        "title": "Rien de caché",
        "body": "Aucune majoration des spreads ou des commissions, aucun frais de plateforme, aucune charge dissimulée dans les swaps. Ce que vous voyez sur cette page est la liste complète."
      },
      {
        "title": "Le risque avant le rendement",
        "body": "Chaque mandat commence par un drawdown maximal et une limite de perte quotidienne. Nous préférons gagner moins que les dépasser."
      }
    ],
    "streamsTitle": "D’où viennent nos revenus",
    "streamsLead": "Par ordre d’importance.",
    "streams": [
      {
        "title": "Trading pour compte propre",
        "share": "Première source",
        "body": "Nous négocions notre propre capital avec les mêmes systèmes algorithmiques proposés aux clients : GANN Live en production, le Trend Ensemble en paper trading. C’est le revenu qui nous garde honnêtes : si les systèmes cessent de fonctionner, nous le sentons en premier.",
        "how": "Résultat de trading sur les comptes propres de NUUK"
      },
      {
        "title": "Gestion de portefeuille",
        "share": "Frais de gestion et de performance",
        "body": "Trois structures. Les signaux WhatsApp ne facturent aucune commission de performance, seulement 49 USD par mois pour l'abonnement IA. NUUK AI - Premium (à partir de 1 000 USD) facture 99 USD par mois plus 25 % du bénéfice net hebdomadaire. Le compte dédié (à partir de 250 000 USD) facture 1 000 USD par mois plus 25 % des bénéfices au-dessus du plus-haut historique, après frais de gestion.",
        "how": "Prélevés par le courtier sur votre compte et visibles sur chaque relevé"
      },
      {
        "title": "Recherche et formation",
        "share": "Abonnements et ateliers",
        "body": "Formules de signaux et de recherche à 750, 1 000 et 5 000 USD par mois, ainsi que des ateliers payants et des formations en entreprise. Les webinaires hebdomadaires restent gratuits.",
        "how": "Abonnement fixe ou prix du billet, payés d’avance"
      }
    ],
    "exampleTitle": "À quoi ressemble une année en chiffres",
    "exampleLead": "",
    "examples": [],
    "exampleNote": "Lors d’une année perdante, aucun frais de performance n’est facturé et la perte doit être récupérée avant qu’un frais de performance soit à nouveau prélevé. Le compte dédié continue de payer ses frais de gestion mensuels. Les spreads, commissions et swaps sont facturés par le courtier et sont déjà inclus dans le chiffre brut.",
    "neverTitle": "Ce que nous ne faisons jamais",
    "never": [
      "Majorer les spreads, commissions ou swaps",
      "Détenir votre argent ou disposer d’un droit de retrait sur votre compte",
      "Trader contre vous ou vendre votre flux d’ordres",
      "Facturer des frais de performance sur des gains latents ou sur des bénéfices inférieurs au plus-haut historique"
    ],
    "riskTitle": "La gestion du risque est le modèle économique",
    "riskLead": "Les frais n’ont de sens que si le capital survit ; le risque passe donc en premier.",
    "risk": [
      {
        "title": "Risque maîtrisé",
        "body": "Chaque position est dimensionnée en tenant compte du risque."
      },
      {
        "title": "Limites de risque",
        "body": "Les limites de risque sont convenues par écrit avec vous avant de commencer."
      },
      {
        "title": "Mandat de drawdown maximal",
        "body": "Chaque mandat fixe un drawdown maximal convenu par écrit avec vous."
      },
      {
        "title": "Revue hebdomadaire réel contre attendu",
        "body": "Les systèmes qui s’écartent de leur comportement testé sont mis en pause, pas retouchés en vol."
      }
    ],
    "faqTitle": "Questions sur les frais",
    "faq": [
      {
        "q": "Gagnez-vous quelque chose si mon compte perd de l’argent ?",
        "a": "Uniquement les frais de gestion mensuels, indiqués avant signature. NUUK AI - Premium prélève sa commission de performance sur le bénéfice net hebdomadaire : une semaine perdante n’en paie aucune. Le compte dédié ne paie aucune commission de performance tant que la perte n’est pas récupérée."
      },
      {
        "q": "Y a-t-il un conflit d’intérêts ?",
        "a": "Tous les frais facturés par NUUK figurent sur cette page. Votre compte est ouvert à votre nom chez le courtier, et NUUK ne détient jamais l’argent des clients."
      },
      {
        "q": "Comment le plus-haut historique est-il calculé ?",
        "a": "C’est la valeur de fin de mois la plus élevée de votre compte depuis l’ouverture, ajustée des dépôts et retraits. Un frais de performance n’est prélevé que sur la partie de la valeur de fin de mois qui le dépasse."
      },
      {
        "q": "Où puis-je voir les frais prélevés ?",
        "a": "Sur votre relevé de courtier. Les frais sont prélevés par le courtier à l’intérieur de votre propre compte ; chaque prélèvement est visible en temps réel et dans le rapport mensuel que nous envoyons."
      }
    ],
    "cta": {
      "label": "Discuter d’un mandat",
      "href": "/contact-us/"
    },
    "feesLink": {
      "label": "Voir la grille tarifaire complète",
      "href": "/portfolio-management/"
    },
    "ibLink": {
      "label": "Lire l’information IB",
      "href": "/legal/ib-disclosure/"
    }
  },
  investors: {
    loginCta: { label: "Se connecter à l’espace" },
    "metaTitle": "Espace investisseur",
    "metaDescription": "Où les clients des comptes gérés se connectent, ce que NUUK rapporte chaque mois et comment demander l’accès.",
    "kicker": "Espace investisseur",
    "title": "Votre compte, votre accès, vos rapports",
    "lead": "Les comptes gérés sont chez le courtier, à votre nom. Connectez-vous au portail client du courtier pour les relevés en temps réel ; NUUK ajoute le rapport mensuel et la revue trimestrielle.",
    "portalsTitle": "Portail client du courtier",
    "portalLabel": "Portail client",
    "reportsTitle": "Ce que vous recevez de NUUK",
    "reports": [
      {
        "title": "Relevés en temps réel",
        "body": "Chaque opération, frais et solde est visible dans votre compte de courtage à l’instant même. Nous ne rapportons rien que vous ne puissiez y voir."
      },
      {
        "title": "Rapport mensuel",
        "body": "Avant le cinquième jour ouvré : performance nette, frais prélevés, exposition par instrument, drawdown par rapport au mandat et bref commentaire."
      },
      {
        "title": "Revue trimestrielle",
        "body": "Un appel de 30 minutes pour revoir le mandat, les limites de risque et tout changement de vos objectifs ou besoins de liquidité."
      },
      {
        "title": "Relevé annuel des frais",
        "body": "Une page pour votre comptable : frais de gestion et de performance, historique du plus-haut et retraits."
      }
    ],
    "accessTitle": "Demander l’accès au portail",
    "accessBody": "Les rapports sont envoyés à l’e-mail figurant sur votre mandat. Pour changer d’adresse, ajouter un second destinataire ou demander un rapport introuvable, contactez-nous avec votre numéro de compte.",
    "accessCta": {
      "label": "Contacter le desk",
      "href": "/contact-us/"
    },
    "faqTitle": "Accès et retraits",
    "faq": [
      {
        "q": "Qui détient mon argent ?",
        "a": "Le courtier, sur un compte à votre nom. NUUK ne dispose que d’un droit de négociation et ne peut ni retirer ni transférer des fonds."
      },
      {
        "q": "Puis-je retirer à tout moment ?",
        "a": "NUUK AI - Premium : après les 30 premiers jours, à tout moment. Compte dédié : avec un préavis de 30 jours pour clôturer les positions de façon ordonnée. Les retraits sont effectués par vous, dans le portail du courtier."
      },
      {
        "q": "Où voir les frais prélevés ?",
        "a": "Sur le relevé du courtier, en lignes séparées, et en résumé dans le rapport mensuel."
      }
    ],
    "portals": []
  },
  caseStudies: {
    "metaTitle": "Études de cas",
    "metaDescription": "Trois scénarios illustratifs montrant comment NUUK structure un mandat, fixe les limites de risque et facture ses frais. Aucun client n’est représenté.",
    "kicker": "Études de cas",
    "title": "Comment un mandat se construit, en trois scénarios",
    "lead": "Des scénarios illustratifs, pas des histoires de clients. Les profils sont composites ; les frais, limites et calculs sont exactement ceux que nous appliquons.",
    "badge": "Scénario illustratif",
    "labels": {
      "profile": "Profil",
      "objective": "Objectif",
      "structure": "Ce que nous proposerions",
      "mandate": "Mandat",
      "fees": "Frais",
      "year": "",
      "note": "À noter"
    },
    "items": [
      {
        "name": "Trésorerie d’un family office, Dubaï",
        "profile": "Un family office détenant 500 000 USD de trésorerie devant rester liquide sous 60 jours.",
        "objective": "Préserver le capital d’abord ; drawdown maximal de 8 %.",
        "structure": "Un compte PAMM dédié chez le courtier au nom du family office, géré sous mandat écrit.",
        "mandate": [
          "Instruments : majeures forex, or, CFD sur indices US et UE",
          "Exposition brute maximale 3× les fonds propres, limite de perte quotidienne 1 %",
          "Drawdown maximal 8 % : compte mis en pause et revu",
          "Préavis de 30 jours pour les retraits"
        ],
        "fees": "1 000 USD par mois (2,4 % par an à cette taille) plus 25 % du bénéfice au-dessus du plus-haut, après frais de gestion.",
        "rows": [],
        "note": "À 500 000 USD, les frais de gestion fixes tombent à 2,4 % par an. Sous 250 000 USD, les mêmes frais seraient trop lourds ; c’est pourquoi le palier dédié commence là."
      },
      {
        "name": "Trader autonome, Istanbul",
        "profile": "Un ingénieur qui trade le forex seul depuis trois ans avec 5 000 USD et veut les systèmes sans les faire tourner.",
        "objective": "Exposition systématique aux systèmes NUUK, sans frais de gestion, avec sortie rapide possible.",
        "structure": "MAM mutualisé chez le courtier : son propre compte, à son nom, alloué au pool.",
        "mandate": [
          "Mêmes systèmes et limites de risque que le capital propre de NUUK",
          "Risque fixe de 300 USD par trade sur GANN Live, à l’échelle du pool",
          "Pas de frais de gestion ; blocage de 30 jours, puis retrait à tout moment"
        ],
        "fees": "Pas de frais de gestion ; 25 % du bénéfice au-dessus du plus-haut.",
        "rows": [],
        "note": "Une année perdante ne lui coûte rien en frais ; le pool doit retrouver son plus-haut avant qu’un frais de performance soit à nouveau prélevé."
      },
      {
        "name": "Formatrice avec une audience, Riyad",
        "profile": "Une formatrice en trading avec 2 000 élèves qui recommande déjà des courtiers de façon informelle.",
        "objective": "Offrir à ses élèves un cadre transparent sans devenir courtier ni manipuler l’argent des clients.",
        "structure": "Une collaboration écrite avec NUUK : chaque élève ouvre son compte à son propre nom chez le courtier et suit la recherche et la formation de NUUK.",
        "mandate": [
          "Conditions de collaboration fixées par écrit",
          "Accompagnement à l’ouverture de compte et au KYC en arabe et en anglais",
          "Supports de comparaison et calendrier économique réutilisables",
          "Information aux élèves : chaque compte reste à leur nom et NUUK ne détient jamais leur argent"
        ],
        "fees": "Les conditions sont convenues par écrit avant le début de la collaboration.",
        "rows": [],
        "note": "Les conditions sont convenues par écrit avant le premier client présenté."
      }
    ]
  },
  contact: {
    metaTitle: "Contact",
    metaDescription: "Réservez un appel, écrivez sur WhatsApp, ou envoyez une demande.",
    kicker: "Contact",
    title: "Parlons-en",
    lead: "Choisissez le canal qui vous convient. Les demandes institutionnelles et professionnelles reçoivent une réponse sous un jour ouvré.",
    channels: [
      { title: "Réserver un appel", body: "30 minutes, en visio ou par téléphone. Réponse sous un jour ouvré.", cta: "Demander un appel" },
      { title: "WhatsApp", body: "Questions rapides et échange de documents.", cta: "Écrire" },
      { title: "WhatsApp", body: "Canal de signaux et communauté.", cta: "Rejoindre" },
    ],
    formTitle: "Envoyer une demande",
    form: {
      sending: "Envoi…",
      success: "Merci. Votre message a été envoyé ; nous répondons sous un jour ouvré.",
      sendError: "Le message n’a pas pu être envoyé. Écrivez-nous directement :",
      name: "Nom",
      namePlaceholder: "Votre nom",
      email: "E-mail",
      emailPlaceholder: "vous@entreprise.com",
      topic: "Sujet",
      topics: ["Compte géré", "Signaux et rapports", "Formation", "Systèmes IA", "Autre"],
      message: "Message",
      messagePlaceholder: "Comment pouvons-nous vous aider ?",
      submit: "Envoyer",
      note: "Cela ouvre votre client de messagerie avec le message prérempli. Aucune donnée n'est stockée sur ce site.",
      errorRequired: "Veuillez renseigner votre nom, votre e-mail et votre message.",
      errorEmail: "Veuillez saisir une adresse e-mail valide.",
      subject: "Demande d'information",
    },
  },

  legal: {
    "risk-disclosure": {
      title: "Avertissement sur les risques",
      body: [
        "Le trading sur le marché des changes, les contrats sur la différence (CFD), les matières premières, les indices, les actions, les fonds et les actifs numériques comporte un niveau de risque élevé et ne convient pas à tout le monde. Les produits à effet de levier peuvent générer des pertes supérieures à votre dépôt initial, et les pertes peuvent s'accumuler rapidement sur des marchés volatils.",
        "Avant de trader, vous devez tenir compte de vos objectifs d'investissement, de votre niveau d'expérience et de votre appétence au risque, et ne jamais engager de capital que vous ne pouvez pas vous permettre de perdre. En cas de doute, demandez conseil à un conseiller financier indépendant et agréé dans votre juridiction.",
        "Les performances passées de tout portefeuille, modèle, stratégie, service de signaux ou système de trading présenté sur ce site ne constituent pas un indicateur fiable des résultats futurs. Un track record décrit ce qui s'est passé, pas ce qui se passera. Les résultats issus de backtests, de simulations ou de trading papier présentent des limites intrinsèques : ils sont établis a posteriori, n'impliquent aucun risque financier et peuvent ne pas refléter l'impact du slippage, de la liquidité ou des coûts d'exécution.",
        "Rien sur ce site ne constitue un conseil en investissement personnalisé, une recommandation personnalisée, ni une offre ou une sollicitation d'achat ou de vente d'un quelconque instrument financier. Le contenu est un commentaire général de marché et un contenu pédagogique qui ne tient pas compte de votre situation financière, de vos objectifs ni de vos besoins.",
        "Les comptes gérés fonctionnent dans le propre compte du client chez le courtier, dans le cadre de sa structure MAM ou PAMM et de son cadre réglementaire. NUUK détient uniquement une autorisation de trading et n'assure jamais la garde des fonds des clients. Les frais, les périodes de blocage et les mandats de risque sont définis dans un accord écrit avant tout début de trading.",
        "NUUK Quant opère depuis le Dubai International Financial Centre, Dubaï, Émirats arabes unis. Les services ne sont proposés que là où la loi et la réglementation applicables le permettent ; leur disponibilité dépend de votre pays de résidence. Rien sur ce site ne s'adresse à une personne située dans une juridiction où une telle diffusion serait contraire à la législation locale.",
      ],
    },
    "ib-disclosure": {
      title: "Information sur l'activité d'apporteur d'affaires (IB)",
      body: [],
    },
    privacy: {
      title: "Politique de confidentialité",
      body: [
        "Cette politique explique quelles données personnelles NUUK Quant (« NUUK », « nous ») collecte via nuukquant.com, pourquoi, et quels sont vos droits. Dernière mise à jour le 8 septembre 2026.",
        "Données que vous nous communiquez. Lorsque vous nous contactez par e-mail, WhatsApp ou via le formulaire de contact, nous recevons les informations que vous envoyez : nom, adresse e-mail, numéro de téléphone et contenu de votre message. Le formulaire de contact ouvre votre propre client de messagerie ; rien de ce que vous saisissez n'est stocké sur ce site.",
        "Données collectées automatiquement. Nous utilisons Google Analytics 4 avec anonymisation des adresses IP pour comprendre comment le site est utilisé : pages consultées, localisation approximative, type d'appareil et boutons cliqués (par exemple un lien vers un courtier ou une offre). Ces données sont agrégées et ne vous identifient pas nominativement. Vous pouvez les bloquer via un paramètre de votre navigateur ou un bloqueur de publicités.",
        "Cookies et analyse des visiteurs. Google Analytics peut déposer des cookies pour distinguer les sessions. Apollo.io enregistre les visites de pages et, lorsque la visite provient d'un réseau d'entreprise, peut identifier la société derrière l'adresse IP ; il enrichit également les adresses e-mail professionnelles saisies dans nos formulaires avec des données d'entreprise publiquement disponibles. Les deux peuvent déposer des cookies. Les sites tiers que vous ouvrez depuis nos liens (courtiers, WhatsApp, réseaux sociaux) appliquent leurs propres politiques. Les cotations en direct de ce site sont des widgets TradingView intégrés, chargés depuis les serveurs de TradingView, qui peuvent déposer leurs propres cookies selon la politique de confidentialité de TradingView. Vous pouvez bloquer tout cela avec une extension de navigateur ou en désactivant les scripts tiers ; le site fonctionne sans eux.",
        "Pourquoi nous traitons les données. Pour répondre à votre demande, pour fournir les services que vous avez sollicités (comptes gérés, signaux, formation), pour respecter nos obligations légales et réglementaires, et pour améliorer le site. La base juridique est votre consentement, l'exécution d'un contrat conclu avec vous, ou notre intérêt légitime à exploiter notre activité.",
        "Partage. Nous ne vendons pas de données personnelles. Nous ne les partageons qu'avec les prestataires nécessaires au fonctionnement du site et des communications (hébergement, e-mail, analytics), avec le courtier lorsque vous nous demandez de vous présenter, et avec les autorités lorsque la loi l'exige.",
        "Conservation et sécurité. Les données de contact sont conservées aussi longtemps que nécessaire pour traiter la demande et jusqu'à cinq ans lorsqu'une relation d'affaires s'ensuit, conformément aux obligations réglementaires de conservation. Les données sont stockées sur des systèmes à accès contrôlé.",
        "Vos droits. Vous pouvez demander quelles données nous détenons à votre sujet, en demander la rectification ou la suppression, vous opposer au traitement ou retirer votre consentement à tout moment en écrivant à info@nuukquant.com. Si vous résidez dans l'UE, au Royaume-Uni ou au DIFC, vous avez également le droit d'introduire une réclamation auprès de votre autorité de protection des données.",
      ],
    },
    terms: {
      title: "Conditions d'utilisation",
      body: [
        "Les présentes conditions régissent votre utilisation de nuukquant.com, exploité par NUUK Quant, Dubai International Financial Centre, Dubaï, Émirats arabes unis. En utilisant le site, vous les acceptez. Dernière mise à jour le 8 septembre 2026.",
        "À titre d'information uniquement. Le contenu de ce site est un commentaire général de marché et un contenu pédagogique. Il ne constitue pas un conseil en investissement personnalisé, une recommandation personnalisée, ni une offre ou une sollicitation d'achat ou de vente d'un quelconque instrument financier. Vous êtes responsable de vos propres décisions d'investissement et de la vérification qu'un service est disponible dans votre pays de résidence.",
        "Aucune garantie. Le trading comporte des risques substantiels ; consultez l'avertissement sur les risques. Les performances passées, les backtests et les résultats de trading papier ne garantissent pas les résultats futurs. Les chiffres marqués « en attente » ou « illustratif » ne sont pas des données de performance vérifiées.",
        "Services. Les comptes gérés, les abonnements aux signaux, le mentorat et les événements sont fournis dans le cadre d'accords écrits distincts qui définissent les frais, le périmètre, les conditions de résiliation et les limites de risque. En cas de divergence, ces accords prévalent sur ce site.",
        "Liens tiers. Les liens vers des courtiers, des plateformes et des réseaux sociaux mènent vers des sites que nous ne contrôlons pas. Nous ne sommes pas responsables du contenu, de la disponibilité ni des conditions des sites tiers.",
        "Propriété intellectuelle. Les textes, graphiques, logos, tableaux et descriptions de systèmes présents sur ce site appartiennent à NUUK ou à ses concédants. Vous pouvez consulter et imprimer des pages pour un usage personnel ; toute autre reproduction nécessite une autorisation écrite. Les noms et logos des courtiers sont la propriété de leurs détenteurs respectifs et ne sont utilisés qu'à des fins d'identification.",
        "Responsabilité. Le site est fourni en l'état. Dans la mesure permise par la loi, NUUK exclut toute responsabilité pour toute perte découlant de l'utilisation du site ou de la confiance accordée à son contenu, y compris les pertes de trading, les pertes de données ou les interruptions de service.",
        "Modifications et droit applicable. Nous pouvons modifier ces conditions et le site à tout moment ; la version en vigueur est toujours publiée ici. Les présentes conditions sont régies par le droit applicable au Dubai International Financial Centre, et tout litige relève de la compétence des tribunaux du DIFC (DIFC Courts).",
      ],
    },
  },

  ctaBand: {
    title: "Prêt à commencer ?",
    body: "Quatre étapes du premier appel au premier trade. La plupart des gens sont opérationnels en une semaine.",
    steps: [
      { title: "Réserver un appel", body: "30 minutes pour décider quel service vous convient : signaux, compte géré ou formation." },
      { title: "Ouvrir un compte de courtage", body: "Le compte est ouvert à votre nom chez le courtier. La vérification prend environ 10 minutes avec une pièce d'identité et un justificatif de domicile." },
      {"title": "Financer et connecter", "body": "Financez votre compte de courtage : à partir de 250 USD pour les signaux WhatsApp, 1 000 USD pour NUUK AI - Premium, 250 000 USD pour un mandat dédié. Connectez-le à la structure choisie."},
      { title: "Commencer à trader", body: "Suivez le plan, examinez les résultats chaque mois et ne prenez jamais un trade que vous ne pouvez pas expliquer." },
    ],
    cta: { label: "Réserver un appel" },
  },

  footer: {
    copyright: "Tous droits réservés.",
    riskTitle: "Avertissement sur les risques",
    legal1:
      "est le nom commercial de NUUK Quant, société de trading pilotée par l'IA et de gestion de portefeuille basée au Dubai International Financial Centre. Les services sont proposés aux clients professionnels et institutionnels là où la réglementation le permet ; leur disponibilité dépend de votre juridiction et de la réglementation applicable.",
    legal2:
      "Le contenu de ce site est un commentaire général de marché et un contenu pédagogique. Il ne constitue pas un conseil en investissement personnalisé ni une offre ou une sollicitation d'achat ou de vente d'un quelconque instrument financier ou service.",
    ib: "Les comptes sont ouverts au nom de chaque client chez le courtier ; NUUK ne détient jamais l'argent des clients.",
    risk: "Le trading comporte des risques substantiels et peut entraîner des pertes supérieures à votre investissement initial. Les performances passées ne préjugent pas des résultats futurs.",
  },

  systems: [
    {
      method: "Niveaux de Gann",
      riskProfile: "Modéré",
      summary: "Système or et argent fondé sur les niveaux prix-temps de Gann.",
      stats: [
        {
          "label": "En direct depuis",
          "value": "2026"
        },
        {
          "label": "Instruments",
          "value": "XAU/USD, XAG/USD"
        },
        {
          "label": "Unité de temps",
          "value": "H1 / H4"
        }
      ],
    },
    {
      perf: "+10,9 % par an, backtest",
      assetClass: "Or, argent, indices US et européens",
      method: "Momentum de séries temporelles + Donchian + croisement de moyennes mobiles, en ensemble",
      riskProfile: "Modéré",
      summary: "Ensemble de suivi de tendance quotidien sur les CFD de métaux et d'indices. Testé en walk-forward de 2010 à 2026, swap et commissions inclus ; fonctionne en portefeuille modèle depuis juillet 2026.",
      stats: [
        { label: "Forward test depuis" },
        { label: "Sharpe du backtest" },
        { label: "Drawdown max. du backtest" },
      ],
    },
    {
      method: "Cassure de l'opening range + Donchian horaire",
      riskProfile: "Élevé",
      summary: "Cassure de l'opening range de 15 minutes sur les CFD d'indices et Donchian 1 heure sur les métaux, exécutés via le NUUK SignalBridge vers MT4. En démo depuis juillet 2026 ; passera en direct uniquement après une phase de validation de 200 trades papier.",
      stats: [
        { label: "Statut", value: "Démo, phase de validation papier" },
        { label: "Lancement prévu", value: "Après 200 trades papier" },
        { label: "Place", value: "Portefeuille modèle · MT4/MT5" },
      ],
    },
  ],

  performance: [
    {
      "name": "GANN NUUK Trader AI — desk XAUUSD & XAGUSD",
      "source": "Portefeuille modèle · relevé détaillé MT4, 3 nov. 2026",
      "updated": "2026-11-03",
      "stats": [
        {
          "label": "Période",
          "value": "2 sept. – 3 nov. 2026 · 39 jours de bourse",
          "tone": "neutral"
        },
        {
          "label": "Rendement de la période",
          "value": "+142,3 %",
          "tone": "up"
        },
        {
          "label": "Facteur de profit",
          "value": "2,44",
          "tone": "neutral"
        },
        {
          "label": "Taux de réussite",
          "value": "73,3 % (5 784 sur 7 891)",
          "tone": "neutral"
        },
        {
          "label": "Perte maximale",
          "value": "13,61 %",
          "tone": "neutral"
        },
        {
          "label": "Jours verts / rouges",
          "value": "39 / 0",
          "tone": "neutral"
        }
      ]
    },
    {
      name: "Portefeuille personnel",
      source: "Relevé de courtier",
      updated: "Mensuel",
      stats: [
        {
          "label": "Depuis",
          "value": "2025"
        },
        {
          "label": "Instruments",
          "value": "Actions, ETF, devises"
        },
        {
          "label": "Approche",
          "value": "Portefeuille cœur long terme"
        },
        {
          "label": "Reporting",
          "value": "Relevé mensuel"
        }
      ],
    },
    {
      name: "Stratégie gérée — GANN Algo",
      source: "Relevé MAM",
      updated: "Mensuel",
      stats: [
        {
          "label": "Depuis",
          "value": "2026"
        },
        {
          "label": "Comptes",
          "value": "300+"
        },
        {
          "label": "Structure",
          "value": "MAM / PAMM"
        },
        {
          "label": "Commission de performance",
          "value": "25 % au-dessus du HWM"
        }
      ],
    },
    {
      name: "Journal des signaux — idées clôturées",
      source: "Groupe WhatsApp",
      updated: "Mensuel",
      stats: [
        {
          "label": "Taux de réussite",
          "value": "87%"
        },
        {
          "label": "Idées par mois",
          "value": "100+"
        },
        {
          "label": "Canal",
          "value": "WhatsApp"
        },
        {
          "label": "Journal",
          "value": "Mensuel"
        }
      ],
    },
    {
      "name": "NUUK Trend Ensemble — backtest walk-forward",
      "chartLabel": "+10,9 % par an, backtest",
      "source": "Backtest 2010–2026, net de swaps et de commissions",
      "updated": "2026-07",
      "stats": [
        {
          "label": "Rendement net, annualisé",
          "value": "+10.9%"
        },
        {
          "label": "Drawdown maximal",
          "value": "6.7%"
        },
        {
          "label": "Ratio de Sharpe",
          "value": "1.36"
        },
        {
          "label": "Trading papier depuis",
          "value": "2026-07"
        }
      ]
    },
  ],
};
