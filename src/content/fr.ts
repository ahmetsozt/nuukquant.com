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
    title: "Ahmet S. Öztürk — Économiste, investisseur, fondateur de NUUK",
    description:
      "Économiste et investisseur basé au DIFC, à Dubaï. Systèmes de trading pilotés par l'IA, comptes gérés, partenariats avec des courtiers, signaux de marché et formation des investisseurs.",
  },
  brand: {
    role: "Économiste · Investisseur · Fondateur",
    office: "Dubai International Financial Centre (DIFC), Dubaï, Émirats arabes unis",
  },
  ui: {
    investorLogin: "Accès investisseur",
    pnl: {
      "kicker": "Desk propriétaire",
      "today": "Clôturé aujourd’hui",
      "trades": "trades",
      "winRate": "taux de réussite",
      "updated": "Mis à jour",
      "source": "Compte propre de NUUK, relevé quotidien MT5, net de commission et de swap. Illustre le desk uniquement ; pas un résultat de compte géré."
    },
    contactToOpen: "Contactez-nous pour ouvrir un compte",
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
    test: "En test",
    paused: "En pause",
    soon: "Bientôt",
    pending: "Rapport en attente",
    verificationInProgress: "Rapport en cours",
    updated: "Mis à jour",
    since: "Depuis",
    source: "Source",
    openAccount: "Ouvrir un compte",
    compare: "Comparer les courtiers",
    subscribe: "S'abonner",
    register: "S'inscrire",
    requestDemo: "Demander une démo",
    viewAll: "Tout voir",
    readMore: "Lire la suite",
    fill: "",
    telegram: "Telegram",
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
        { label: "Courtiers partenaires" },
        { label: "Signaux et rapports" },
        { label: "Formation" },
      ],
    },
    { label: "Courtiers" },
    { label: "Track record" },
    { label: "Analyses", items: [{ label: "Notes de marché" }, { label: "Calendrier économique" }] },
    {
      label: "À propos",
      items: [
        { label: "Parcours" },
        { label: "Comment nous gagnons de l’argent" },
        { label: "Contact" },
        { label: "Avertissement sur les risques" },
        { label: "Information IB" },
        { label: "Espace investisseur" },
        { label: "Études de cas" },
      ],
    },
  ],
  legalLinks: [
    { label: "Avertissement sur les risques" },
    { label: "Information IB" },
    { label: "Confidentialité" },
    { label: "Conditions d'utilisation" },
  ],
  socials: [{ label: "LinkedIn" }, { label: "X" }, { label: "Instagram" }],

  home: {
    hero: {
      visualTag: "Trading algorithmique · Gestion de portefeuille",
      visualAlt: "Monoplace de Formule 1 aux couleurs NUUK dans un studio sombre",
      kicker: "Économiste · Investisseur · Fondateur de NUUK",
      title: "Les marchés, lus avec discipline.",
      lead:
        "Je conçois des systèmes de trading pilotés par l’IA, je négocie mon propre capital, je gère des comptes d’investisseurs et j’apprends aux gens à trader par eux-mêmes. Chaque chiffre de ce site indique sa source et sa méthode.",
      primary: { label: "Choisir un courtier" },
      secondary: { label: "Réserver un appel" },
      portraitAlt: "Ahmet S. Öztürk",
      trustLine: ["Courtiers partenaires régulés par la FCA, l'ASIC, la CySEC et la DFSA", "Notre capital dans chaque système", "Basé au DIFC, à Dubaï"],
      trust: [
        { label: "années sur les marchés, depuis un desk FX à Londres en 2009" },
        {"label": "variantes de stratégies back-testées depuis 2026 ; trois en production, documentées sur la page trading IA"},
        { label: "investisseurs formés lors de webinaires et de séminaires" },
        { label: "partenariats avec des courtiers, dont six présentés sur ce site" },
      ],
      pressTitle: "Courtiers partenaires",
    },
    markets: {
      "kicker": "Cours en direct",
      "title": "Les marchés, maintenant",
      "lead": "Cotations en direct via TradingView : forex, matières premières, indices, crypto et les actions que je suis. Cliquez sur une ligne pour ouvrir le graphique.",
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
      title: "Votre compte. Mon exécution. Des limites de risque écrites.",
      body: "Le capital ne quitte jamais votre nom. Vous ouvrez un compte chez un courtier partenaire, je reçois uniquement une autorisation de trading, et un mandat écrit plafonne l'exposition et la perte quotidienne.",
      figureLabel: "comptes gérés, chacun logé dans le propre compte de courtage du client. La garde des fonds n'est jamais transférée.",
      cta: { label: "Comment ça marche" },
    },
    postsLead: "Macro, forex, matières premières, indices, cryptos et IA appliquée au trading. Écrit pour être lu en cinq minutes.",
    pillarsTitle: "Cinq façons de travailler ensemble",
    pillarsLead: "Une seule personne, cinq portes. Choisissez celle qui correspond à votre situation actuelle.",
    pillars: [
      { title: "Systèmes de trading IA", body: "Algorithmes propriétaires codés, testés et exécutés en direct sur le forex, les indices, les matières premières et les actifs numériques.", who: "Pour les allocateurs et les investisseurs techniques" },
      { title: "Track record", body: "Les résultats de mon portefeuille et des systèmes, nets de coûts, avec la source et la méthode de chaque chiffre.", who: "Pour quiconque décide s'il peut me faire confiance" },
      { title: "Comptes gérés", body: "Votre capital reste sur votre propre compte de courtage. Je le trade dans le cadre de limites de risque convenues et d'une commission de performance.", who: "Pour les investisseurs qui préfèrent déléguer" },
      { title: "Courtiers partenaires", body: "Comparatif indépendant des courtiers avec lesquels je travaille, avec un guide d'ouverture de compte étape par étape pour chacun.", who: "Pour les traders autonomes qui choisissent un courtier" },
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
      kicker: "Courtiers partenaires",
      title: "Où je trade, et pourquoi",
      lead: "Je ne référence que des courtiers que j'utilise ou que j'ai audités moi-même. Chaque fiche présente la régulation, les spreads réels et les modalités de dépôt.",
      cta: { label: "Comparer tous les courtiers" },
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
      lead: "Instrument, sens, entrée, stop, objectif et pourquoi. Livrées sur Telegram et par e-mail.",
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
    metaTitle: "À propos d'Ahmet S. Öztürk",
    metaDescription: "Économiste, investisseur et fondateur de NUUK. Dix-sept ans sur les marchés du forex et des CFD, d'un desk de négociation à Londres à une société de trading pilotée par l'IA à Dubaï.",
    kicker: "À propos",
    title: "Économiste d'abord, trader ensuite, ingénieur par nécessité.",
    lead: "J'ai débuté sur le desk FX d'un courtier à Londres en 2009 et j'ai passé les sept années suivantes au sein de sociétés de courtage à Londres et à Istanbul, jusqu'au poste de Head of International FX chez IKON Finance. En 2016, j'ai fondé İşlem Odası, une activité d'apporteur d'affaires (IB) et de suivi de clientèle qui a atteint plus de 700 clients et plus de 26 millions USD d'activité client. En 2025, je me suis installé à Dubaï et j'ai fondé NUUK : une société de trading conçue autour de l'IA, qui construit et exécute des stratégies systématiques sur le forex, l'or, les indices et les actifs numériques, et qui partage la méthode via des comptes gérés, des signaux et de la formation.",
    portraitAlt: "Ahmet S. Öztürk",
    timelineTitle: "Parcours",
    timeline: [
      { title: "Seneca College, Toronto", body: "International Business Administration (en alternance). Là où est née l'habitude de tout lire en chiffres." },
      { title: "FXCM, Londres", body: "Premier poste sur le desk FX d'un courtier. Exécution, liquidité et risque client, appris de l'intérieur." },
      { title: "Tacirler et ALB, Istanbul", body: "Postes de spécialiste FX chez deux courtiers turcs, alors que le marché domestique s'ouvrait au trading à effet de levier." },
      { title: "IKON Finance", body: "Head of International FX. Croissance de 27 % du portefeuille de clients internationaux." },
      { title: "İşlem Odası, Istanbul", body: "Création d'une activité d'apporteur d'affaires (IB) et de suivi de clientèle : plus de 700 clients, plus de 26 M USD d'activité client, 2,5 M USD de revenus partenaires cumulés." },
      { title: "NUUK, Dubaï", body: "Création de NUUK au Dubai International Financial Centre : systèmes de trading pilotés par l'IA, comptes gérés, partenariats avec des courtiers, signaux et formation." },
    ],
    principlesTitle: "Ma façon de travailler",
    principles: [
      { title: "Les preuves avant les opinions", body: "Chaque chiffre de ce site indique sa source et sa méthode. Ce qui ne peut être expliqué n’est pas montré." },
      { title: "Le risque avant le rendement", body: "Taille de position, limites de drawdown et règles de stop sont fixées avant tout trade." },
      { title: "Votre argent reste le vôtre", body: "Les comptes gérés fonctionnent dans votre propre compte de courtage. Je n'assure jamais la garde des fonds." },
      { title: "Transmettre la méthode", body: "L'objectif de la formation est que vous n'ayez plus besoin de moi." },
    ],
    focusTitle: "Marchés couverts",
    focus: ["BIST", "NYSE", "Forex", "Crypto", "Fonds", "Matières premières", "Immobilier", "Fortunes établies"],
    speakingTitle: "Où je publie",
    speaking: [
      "Telegram · @NUUKQuant : notes de marché quotidiennes, idées de trade et rapport mensuel des systèmes",
      "X · @AhmetSTurk : commentaires de marché et fils de recherche",
      "LinkedIn · NUUK. : actualités de l'entreprise et recherche de fond",
      "Instagram · @ahmetsturk : les coulisses du desk",
    ],
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
      { title: "Risque", body: "Taille de position ajustée à la volatilité, limites de perte quotidienne strictes et coupe-circuits qui liquident toutes les positions." },
      { title: "Exécution", body: "API de courtiers et FIX lorsque disponible ; slippage et qualité d'exécution suivis par place de marché." },
      { title: "Revue", body: "Revue hebdomadaire de la performance réelle par rapport à la performance attendue. Les systèmes qui dérivent sont mis en pause, pas retouchés en cours de route." },
    ],
    faqTitle: "Questions fréquentes",
    faq: [
      { q: "Puis-je faire tourner un système sur mon propre compte ?", a: "Oui. Selon le courtier, vous pouvez faire du copy trading, rejoindre une structure MAM/PAMM chez Tickmill, Saxo Bank ou Midas, ou suivre le canal de signaux et exécuter vous-même. Dans tous les cas, le compte reste à votre nom." },
      { q: "Quel est le capital minimum ?", a: "USD 1,000 pour le copy trading ou les signaux. Les comptes gérés MAM/PAMM commencent à l'allocation minimale indiquée sur la page des comptes gérés." },
      { q: "Partagez-vous le code ?", a: "Non. Le code reste propriétaire. Je publie la méthodologie, les règles de risque et les résultats, chacun avec sa source." },
    ],
  },

  trackRecord: {
    metaTitle: "Track record",
    metaDescription: "Performance du portefeuille personnel d’Ahmet S. Öztürk et des systèmes NUUK, avec la source et la méthode de chaque chiffre.",
    kicker: "Track record",
    title: "Chaque chiffre, avec sa source",
    lead: "Les comptes sont détenus chez des courtiers partenaires. Chaque chiffre ci-dessous indique d’où il vient, compte réel, paper trading ou backtest walk-forward, et comment il est calculé. Les performances passées ne préjugent pas des résultats futurs.",
    disclaimer: "Les performances passées ne préjugent pas des résultats futurs. Les chiffres sont nets de frais de trading et bruts de toute commission de performance, sauf indication contraire.",
    methodologyTitle: "Comment lire ces chiffres",
    methodology: [
      { title: "Source", body: "Compte réel, paper trading ou backtest. L’étiquette figure à côté de chaque chiffre et la méthode de calcul est décrite sur cette page." },
      { title: "Drawdown maximal", body: "Plus forte baisse de l'equity du compte entre un sommet et un creux, positions ouvertes comprises." },
      { title: "Profit factor", body: "Gains bruts divisés par pertes brutes. Au-dessus de 1.0, la stratégie a gagné de l'argent sur la période." },
    ],
    pending: "Les chiffres des comptes réels sont publiés à partir des relevés de fin de mois de NUUK. Le taux de 87 % des signaux provient du journal interne.",
  },

  managed: {
    metaTitle: "Comptes gérés",
    metaDescription: "Fonctionnement des comptes gérés : votre capital reste sur votre propre compte de courtage, tradé dans le cadre de limites de risque convenues.",
    kicker: "Comptes gérés",
    title: "Votre compte. Mon exécution. Des limites convenues.",
    lead: "Le capital ne quitte jamais votre nom. Vous ouvrez un compte chez un courtier partenaire, vous le reliez à la structure gérée, et je le trade dans le cadre d'un mandat de risque écrit.",
    cta: { label: "Demander un appel de présentation" },
    howTitle: "Comment ça marche",
    how: [
      { title: "Appel de découverte", body: "Nous discutons de vos objectifs, de votre horizon, de vos besoins de liquidité et du drawdown que vous pouvez réellement supporter." },
      { title: "Ouverture du compte", body: "Vous ouvrez un compte à votre nom chez un courtier partenaire et vous l'approvisionnez. Je reçois uniquement une autorisation de trading, jamais de droit de retrait." },
      { title: "Mandat de risque", body: "Un mandat écrit fixe l'exposition maximale, la limite de perte quotidienne et les instruments. Le système ne peut pas le dépasser." },
      { title: "Reporting", body: "Vous voyez chaque trade en temps réel sur votre propre compte, plus un rapport mensuel et un appel de revue trimestriel." },
    ],
    tiersTitle: "Deux façons d'allouer",
    tiers: [
      {
        "name": "Pool MAM",
        "tagline": "Les systèmes, dans votre propre compte",
        "minimum": "1 000 USD",
        "managementFee": "Aucuns",
        "performanceFee": "25 % des profits au-dessus du high-water mark",
        "lockup": "30 jours, puis retrait à tout moment",
        "structure": "Pool MAM / copy trading chez Tickmill ou Darwinex",
        "forWhom": "Investisseurs autonomes qui veulent les systèmes sans les piloter"
      },
      {
        "name": "Compte dédié",
        "tagline": "Votre mandat, vos limites de risque",
        "minimum": "250 000 USD",
        "managementFee": "1 000 USD par mois (environ 4,8 % par an au minimum, proportionnellement moins au-delà)",
        "performanceFee": "25 % des profits au-dessus du high-water mark",
        "lockup": "Préavis de 30 jours",
        "structure": "PAMM ou compte géré séparément chez Saxo Bank, Tickmill ou Midas",
        "forWhom": "Family offices, trésoreries d'entreprise et investisseurs professionnels"
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
    compliance: "NUUK Quant opère depuis le Dubai International Financial Centre. Les comptes gérés fonctionnent via la structure MAM/PAMM du courtier partenaire, dans son cadre réglementaire : NUUK ne détient que le droit de trader, jamais la conservation ni le droit de retrait. Les 300+ comptes gérés aujourd'hui sont dans le pool MAM ; les mandats dédiés sont ouverts individuellement.",
  },

  brokers: {
    metaTitle: "Courtiers partenaires",
    metaDescription: "Comparatif indépendant des courtiers partenaires : régulation, spreads, moyens de dépôt, plateformes et ouverture de compte étape par étape.",
    kicker: "Courtiers partenaires",
    title: "Les courtiers avec lesquels je travaille",
    lead: "Je n'oriente mes clients que vers des courtiers avec lesquels je trade ou que j'ai audités. Six partenaires aujourd'hui : Pepperstone, Tickmill, Saxo Bank, Capital.com, Midas et Darwinex. Chaque fiche indique qui les régule, ce qu'ils facturent réellement et à quelle vitesse l'argent circule.",
    disclosure: "Les liens de cette page sont des liens d'affiliation. Si vous ouvrez et approvisionnez un compte via ces liens, je perçois une commission du courtier. Cela ne modifie pas les spreads ni les commissions que vous payez.",
    compareTitle: "Côte à côte",
    partner: {
      "kicker": "Programme partenaires",
      "title": "Pour les apporteurs d'affaires et les formateurs",
      "body": "Si vous amenez déjà des clients à ces courtiers, NUUK peut être votre apporteur principal : un partage de rétrocessions transparent versé chaque mois, un accompagnement à l'ouverture de compte et au KYC en turc, en arabe et en anglais, et les mêmes fiches comparatives pour votre propre audience. Les conditions de sous-partenariat sont fixées par écrit, courtier par courtier.",
      "points": [
        "Partage de rétrocessions transparent, versé mensuellement",
        "Accompagnement à l'ouverture de compte et au KYC en trois langues",
        "Fiches comparatives de courtiers réutilisables"
      ],
      "cta": {
        "label": "Discuter d'un partenariat"
      }
    },
    wizard: {
      "title": "Trouvez votre courtier en trois questions",
      "lead": "Répondez à trois questions et nous vous indiquons le partenaire adapté. Ce n’est pas un conseil personnalisé ; vérifiez toujours les conditions en vigueur sur le site du courtier.",
      "q1": "Où résidez-vous ?",
      "o1": [
        "Türkiye",
        "Émirats / Golfe",
        "UE / Royaume-Uni",
        "Ailleurs"
      ],
      "q2": "Que souhaitez-vous trader ?",
      "o2": [
        "Forex, or et CFD sur indices",
        "Actions et ETF",
        "Crypto et CFD multi-actifs",
        "Copy trading / compte géré"
      ],
      "q3": "Capital de départ",
      "o3": [
        "Moins de 1 000 USD",
        "1 000 – 25 000 USD",
        "25 000 – 250 000 USD",
        "Plus de 250 000 USD"
      ],
      "result": "Notre recommandation",
      "alt": "À considérer aussi",
      "restart": "Recommencer",
      "reasons": {
        "pepperstone": "Entité régulée par la DFSA pour les résidents du Golfe, spreads bruts dès 0,0 pip sur le forex et les métaux, MT4/MT5/cTrader/TradingView.",
        "tickmill": "Régulé FCA et CySEC avec un support en turc, spreads bruts dès 0,0 pip et la structure MAM que nous utilisons pour les comptes mutualisés.",
        "saxo": "Conservation de niveau bancaire et plus de 70 000 instruments (actions, ETF, obligations, options), tarification par paliers pour les gros comptes.",
        "capital-com": "Minimum bas, plus de 3 000 CFD dont crypto et actions, application rapide ; adapté aux premiers pas en CFD multi-actifs.",
        "midas": "Application de courtage régulée en Türkiye pour les actions BIST, américaines et européennes dès 1 USD, en turc, avec dépôt en TRY.",
        "darwinex": "Transformez une stratégie systématique en DARWIN investissable ou suivez la nôtre ; régulé FCA, copie et allocation intégrées."
      }
    },
    cardLabels: {
      contactNote: "Les comptes chez {broker} sont ouverts via NUUK dans le cadre de notre accord de partenariat. Contactez-nous et nous vous accompagnerons dans l’ouverture ; les étapes ci-dessous indiquent ce que le courtier vous demandera.",
      regulator: "Régulateur",
      licence: "Licence",
      founded: "Fondé en",
      minDeposit: "Dépôt minimum",
      platforms: "Plateformes",
      spreads: "Spreads typiques",
      commission: "Commission",
      leverage: "Effet de levier max.",
      funding: "Moyens de dépôt",
      withdrawal: "Délai de retrait",
      islamic: "Compte islamique",
      languages: "Support",
      bestFor: "Idéal pour",
      pros: "Points forts",
      cons: "Points de vigilance",
      steps: "Comment ouvrir un compte",
      yes: "Oui",
      no: "Non",
      profile: "Fiche complète",
      allBrokers: "Tous les courtiers",
      atAGlance: "En bref",
      conditions: "Conditions de trading",
      about: "À propos du courtier",
      website: "Site officiel",
      faq: "Questions fréquentes",
      openWith: "Cinq étapes vers un compte approvisionné chez",
      verifyNote: "Conditions vérifiées sur le site du courtier le 8 septembre 2026. Vérifiez toujours les chiffres en vigueur avant d'approvisionner un compte.",
    },
    list: [
      {
        tagline: "Spreads bruts dès 0.0 pip, cinq plateformes, neuf entités agréées",
        regulator: "FCA · ASIC · CySEC · DFSA · BaFin · SCB · CMA",
        licence: "DFSA F004356, Pepperstone Financial Services (DIFC) Ltd · entités du groupe sous FCA, ASIC, CySEC, BaFin, SCB, CMA",
        founded: "2010, Melbourne",
        minDeposit: "$0 · $10 par carte",
        platforms: ["Plateforme Pepperstone", "TradingView", "MT5", "MT4", "cTrader"],
        spreads: [{ value: "0.0 Razor · 1.0 Standard" }, { value: "dès 0.08 Razor" }, { value: "dès 0.4" }],
        commission: "Razor : $3.50 par lot et par côté sur le forex et l'or · Standard : aucune (hors CFD sur actions)",
        leverage: "1:30 pour les particuliers (FCA, ASIC, CySEC, DFSA) · jusqu'à 1:500 SCB · 1:1000 SCB Pro",
        funding: ["Visa / Mastercard", "Apple Pay", "Google Pay", "PayPal", "Skrill", "Neteller", "Virement bancaire", "Crypto"],
        withdrawalTime: "Jusqu'à 1 jour ouvré",
        languages: "24h/24 5j/7 multilingue, 18 h le week-end · pas de service en turc",
        bestFor: "Traders actifs sur le forex et l'or en spreads bruts ; traders algorithmiques sur MT5, cTrader ou TradingView",
        pros: [
          "Compte Razor : spreads dès 0.0 pip avec une commission fixe de $3.50 par lot et par côté",
          "Taux d'exécution de 99.59 % sans intervention d'un dealing desk",
          "Plus de 1,350 marchés : forex, indices, matières premières, actions, ETF et CFD sur cryptos",
          "Dépôts gratuits ; retraits par carte, portefeuille électronique et crypto traités sous un jour ouvré",
          "Régulé dans sept juridictions, fonds des clients ségrégués dans des banques de premier rang",
        ],
        cons: [
          "Effet de levier pour les particuliers plafonné à 1:30 sous les entités FCA, ASIC, CySEC et DFSA",
          "Les retraits par virement international coûtent $20 et peuvent prendre jusqu'à 7 jours ouvrés",
          "CFD uniquement : vous ne détenez jamais l'action ou la crypto sous-jacente",
        ],
        steps: [
          "Ouvrez le lien d'affiliation et cliquez sur Join now. Inscrivez-vous avec votre e-mail et obtenez un compte démo gratuit.",
          "Répondez aux questions d'adéquation (environ 5 minutes).",
          "Vérifiez votre identité : pièce d'identité officielle et justificatif de domicile.",
          "Approvisionnez dès $10 par carte, Apple Pay, PayPal ou portefeuille électronique. Le virement bancaire n'a pas de minimum.",
          "Choisissez Razor ou Standard, puis connectez-vous sur MT5, cTrader, TradingView ou l'application Pepperstone.",
        ],
        summary:
          "Fondé à Melbourne en 2010, Pepperstone est l'un des plus grands courtiers CFD en volume : plus de 900,000 comptes, environ 1,000 milliards de dollars de volume de trading mensuel et neuf entités agréées auprès de la FCA, de l'ASIC, de la CySEC, de la DFSA, de la BaFin, de la SCB et de la CMA. Je détiens un compte Standard auprès de l'entité de Dubaï régulée par la DFSA et je l'utilise pour le trading discrétionnaire de l'or.",
        faq: [
          {
            q: "Razor ou Standard : quel compte choisir ?",
            a: "Razor pour le forex et l'or si vous tradez activement : spreads bruts dès 0.0 pip plus $3.50 par lot et par côté. Standard si vous préférez tout intégrer dans le spread : dès 1.0 pip sur EUR/USD, sans commission sauf sur les CFD sur actions. Les deux donnent accès aux mêmes 1,350+ marchés.",
          },
          {
            q: "Quel est le dépôt minimum ?",
            a: "Il n'y a pas de minimum pour ouvrir le compte. Les dépôts par carte, Apple Pay, Google Pay, PayPal, Skrill et Neteller commencent à $10 ; les virements bancaires domestiques n'ont pas de minimum. Les dépôts sont gratuits.",
          },
          {
            q: "Quel est le délai des retraits ?",
            a: "Cartes, portefeuilles électroniques et crypto sont traités sous un jour ouvré et sont gratuits. Les virements bancaires internationaux coûtent $20 et peuvent prendre jusqu'à 7 jours ouvrés.",
          },
          {
            q: "Pepperstone est-il régulé ?",
            a: "Oui. Les entités du groupe sont agréées par la FCA (Royaume-Uni), l'ASIC (Australie), la CySEC (Chypre), la DFSA (Dubaï), la BaFin (Allemagne), la SCB (Bahamas) et la CMA (Kenya). Les fonds des clients sont conservés sur des comptes ségrégués dans des banques de premier rang et les clients particuliers bénéficient d'une protection contre le solde négatif.",
          },
          {
            q: "De quelle entité dépendra mon compte ?",
            a: "Via mon lien, vous vous inscrivez auprès de Pepperstone Financial Services (DIFC) Limited, l'entité de Dubaï régulée par la DFSA. L'effet de levier pour les particuliers est plafonné à 1:30, les fonds des clients sont ségrégués et les clients particuliers bénéficient d'une protection contre le solde négatif. Les clients professionnels peuvent demander un levier plus élevé.",
          },
          {
            q: "Un lien d'affiliation modifie-t-il mes frais ?",
            a: "Non. Les spreads et commissions sont identiques, que vous vous inscriviez directement ou via mon lien. Le courtier paie ma commission sur ses propres revenus.",
          },
        ],
      },
      {
        tagline: "Tarification brute dès 0.0 pip avec $3 par côté, MT4/MT5 et TradingView",
        regulator: "FCA · CySEC · FSA Seychelles · FSCA",
        licence: "FCA 717270 · CySEC 278/15 · FSA SD008 · FSCA FSP 49464 · bureau de représentation DFSA F007663",
        founded: "2014, Londres",
        minDeposit: "$100",
        platforms: ["MT4", "MT5", "TradingView", "Tickmill Trader", "Tickmill App"],
        spreads: [{ value: "0.0 Raw · 1.6 Classic" }, { value: "dès 0.08 Raw" }, { value: "dès 0.39" }],
        commission: "Raw : $3 par lot et par côté (MT4/MT5), $3.50 sur TradingView · Classic : aucune · indices et actions : aucune",
        leverage: "1:30 pour les particuliers (FCA, CySEC) · jusqu'à 1:1000 sous Tickmill Ltd (Seychelles) · pro 1:500",
        funding: ["Virement bancaire", "Visa / Mastercard", "Skrill", "Neteller", "UnionPay", "Crypto"],
        withdrawalTime: "Traité sous 1 jour ouvré",
        languages: "Lun–ven 07:00–16:00 GMT, 14 langues · pas de service en turc",
        bestFor: "Traders forex et or sensibles aux coûts, scalpeurs et utilisateurs d'EA qui veulent une tarification brute à $3 par côté",
        pros: [
          "Compte Raw : spreads 0.0 pip avec $3 par lot et par côté, classé n°1 pour les commissions et frais par ForexBrokers.com 2021–2024",
          "Entités FCA, CySEC, FSA Seychelles et FSCA ; couverture FSCS et ICF pour les clients britanniques et européens",
          "Comptes ségrégués dans des banques de premier rang, protection contre le solde négatif et assurance Lloyd's pour les soldes de $20k à $1m",
          "Minimum de $100, aucuns frais de dépôt ou de retrait, frais bancaires remboursés sur les virements supérieurs à $5,000",
          "Toutes les stratégies autorisées (scalping, hedging, EA), VPS gratuit, intégration TradingView",
        ],
        cons: [
          "Levier 1:1000 uniquement sous l'entité des Seychelles ; les clients particuliers britanniques et européens sont plafonnés à 1:30",
          "Les spreads du compte Classic démarrent à 1.6 pip, larges par rapport au Raw",
          "Pas de site ni de service client en turc ; USD/TRY, EUR/TRY et GBP/TRY sont en clôture uniquement",
        ],
        steps: [
          "Inscription : renseignez nom, pays, type de client et e-mail sur my.tickmill.com/sign-up pour créer votre Espace client ; si le champ Introducing Broker est vide, saisissez le code IB IB82498200",
          "Vérification : connectez-vous à l'Espace client et téléchargez un justificatif d'identité et un justificatif de domicile",
          "Création du compte : une fois les documents approuvés, ouvrez un compte réel en choisissant Classic, Raw ou TradingView Raw, la devise de base (USD/EUR/GBP/ZAR) et le levier",
          "Dépôt : sélectionnez un moyen de paiement (virement bancaire, carte, Skrill, Neteller, UnionPay, crypto) et approvisionnez dès $100 ; la plupart des méthodes sont créditées instantanément",
          "Trading : téléchargez MT4/MT5, Tickmill Trader ou connectez TradingView avec vos identifiants de compte et commencez à trader",
        ],
        summary:
          "Tickmill Group a été fondé en 2014 par Ingmar et Illimar Mattus et a son siège à Londres, avec des entités régulées au Royaume-Uni (FCA 717270), à Chypre (CySEC 278/15), aux Seychelles (FSA SD008) et en Afrique du Sud (FSCA FSP 49464). Le groupe déclare 1.3 million de comptes enregistrés, plus de 900 millions de transactions et environ 350 milliards de dollars de volume mensuel moyen, et a remporté plus de 60 récompenses sectorielles. C'est ici que je fais tourner le compte papier NUUK Trend Ensemble et la démo intraday, et l'une des trois places utilisées pour les comptes gérés MAM.",
        faq: [
          {
            q: "Quels types de comptes Tickmill propose-t-il ?",
            a: "Trois comptes CFD : Classic (spreads dès 1.6 pip, sans commission), Raw (spreads dès 0.0 pip, $3 par lot et par côté, MT4/MT5) et TradingView Raw / Tickmill Trader (0.0 pip, $3.50 par côté). Tous démarrent à $100, autorisent 0.01 lot et toute stratégie, et peuvent être convertis en compte sans swap. Tickmill UK propose également un compte Futures ($1,000) et un compte multi-actifs IBKR.",
          },
          {
            q: "Quel est le dépôt minimum chez Tickmill ?",
            a: "$100 (ou l'équivalent en EUR/GBP) pour tous les comptes CFD ; les comptes en ZAR ont un minimum inférieur. Le retrait minimum est de $25. Tickmill ne facture aucuns frais de dépôt ou de retrait et rembourse les frais bancaires sur les virements supérieurs à $5,000.",
          },
          {
            q: "Combien de temps prennent les retraits chez Tickmill ?",
            a: "Les demandes de retrait sont traitées sous un jour ouvré. Le délai de réception dépend de la méthode : portefeuilles électroniques et crypto généralement de l'instantané à 48 heures, cartes jusqu'à 8 jours ouvrés, virements bancaires 2 à 7 jours ouvrés. Les fonds retournent d'abord vers le moyen de dépôt d'origine (les dépôts par carte reviennent sur la carte, les profits par virement ou portefeuille électronique).",
          },
          {
            q: "Tickmill est-il régulé et les fonds des clients sont-ils protégés ?",
            a: "Oui. Tickmill UK Ltd est agréé par la FCA (717270), Tickmill Europe Ltd est agréé par la CySEC (278/15), Tickmill Ltd est un négociant en valeurs mobilières agréé par la FSA des Seychelles (SD008) et Tickmill South Africa est agréé par la FSCA (FSP 49464) ; Tickmill UK dispose également d'un bureau de représentation DFSA (F007663). Les fonds des clients sont ségrégués dans des banques de premier rang, la protection contre le solde négatif s'applique, les clients britanniques bénéficient de la couverture FSCS jusqu'à £120,000, les clients européens de la couverture ICF jusqu'à €20,000, et les soldes compris entre $20,000 et $1,000,000 sont assurés auprès de Lloyd's.",
          },
          {
            q: "Quel effet de levier Tickmill propose-t-il ?",
            a: "Jusqu'à 1:1000 sur le forex et les métaux sous Tickmill Ltd (Seychelles) via un levier dynamique, avec 1:200 sur les principales cryptos, 1:100 sur les indices et 1:20 sur les actions. Sous Tickmill Europe, les clients particuliers sont limités à 1:30 et les clients professionnels sur option jusqu'à 1:500 ; les clients particuliers de Tickmill UK sont également plafonnés à 1:30.",
          },
        ],
      },
      {
        tagline: "Banque d'investissement danoise avec plus de 71,000 instruments sur un seul compte",
        regulator: "FSA danoise · FCA · FINMA · MAS · ASIC · SFC · JFSA",
        licence: "Licence bancaire FSA danoise 1149 (Saxo Bank A/S) · bureau de représentation au DIFC régulé par la DFSA",
        founded: "1992, Copenhague",
        minDeposit: "Aucun (Classic) · $5,000 sur le site EAU",
        platforms: ["SaxoTraderGO", "SaxoTraderPRO", "SaxoInvestor", "TradingView", "OpenAPI / FIX"],
        spreads: [{ value: "dès 1.0 Classic · 0.7 VIP" }, { value: "dès 34 cents" }, { value: "dès 0.7" }],
        commission: "CFD forex et indices : spread uniquement · actions US 0.08 % (min $1), 0.03 % VIP · options dès $0.75, futures dès $1",
        leverage: "1:30 pour les particuliers (plafonds de type ESMA) · marge réduite pour les professionnels sur option",
        funding: ["Virement bancaire", "SEPA Instant", "Carte (selon le pays)", "Wise / Revolut après le premier dépôt"],
        withdrawalTime: "Traitement le jour même, 1 à 5 jours ouvrés jusqu'à votre banque",
        languages: "Téléphone, chat et e-mail 24h/24 5j/7 ; bureau à Dubaï · application en 23 langues dont le turc, pas de service en turc",
        bestFor: "Investisseurs multi-actifs qui veulent une garde de niveau bancaire plus le trading forex et CFD sous un seul identifiant",
        pros: [
          "Banque danoise agréée avec statut SIFI ; liquidités couvertes jusqu'à EUR 100,000 par la garantie des dépôts danoise",
          "Plus de 71,000 instruments : 23,000+ actions sur 50+ bourses, 8,200+ ETF, 5,200 obligations, futures, options et 185+ paires de devises",
          "Tarification par paliers de volume : EUR/USD de 1.0 à 0.7 pip, actions US de 0.08 % à 0.03 %, CFD sur indices sans commission",
          "Plateformes propriétaires SaxoTraderGO/PRO et SaxoInvestor plus OpenAPI, FIX et TradingView",
          "Aucuns frais d'inactivité ni de plateforme ; dépôts et retraits gratuits côté Saxo",
        ],
        cons: [
          "Droits de garde de 0.15 % à 0.09 % par an sur les actions, ETF et obligations dans la plupart des régions",
          "Les paliers Platinum et VIP démarrent à EUR 200k et EUR 1M ; le site EAU demande $5,000 pour ouvrir un compte Classic",
          "Pas de compte sans swap ; la présence à Dubaï est un bureau de représentation, les clients des EAU contractent donc avec Saxo Bank A/S au Danemark",
        ],
        steps: [
          "Créez votre compte en ligne sur home.saxo/accounts (18 ans et plus ; numéro d'identification national et fiscal, passeport/carte d'identité, selfie ; justificatif de domicile sur demande)",
          "Faites-vous vérifier – la plupart des demandes sont approuvées numériquement en quelques minutes, sinon sous 2 jours ouvrés",
          "Connectez-vous à SaxoTraderGO ou SaxoInvestor et approvisionnez le compte – le premier dépôt doit provenir d'un compte bancaire à votre nom dans votre pays de résidence",
          "Déposez le montant du palier dans les 30 jours si vous souhaitez la tarification Platinum (EUR 200k+) ou VIP (EUR 1M+)",
          "Passez votre premier ordre – une démo de 20 jours avec USD 100,000 de fonds simulés est disponible pour vous entraîner",
        ],
        summary:
          "Saxo Bank A/S est une banque dont le siège est à Copenhague, agréée par la FSA danoise (licence 1149), désignée établissement d'importance systémique en 2023 et, depuis mars 2026, détenue majoritairement par le groupe J. Safra Sarasin. Fondée en 1992, elle sert plus de 1.5 million de clients dans plus de 180 pays avec plus de 150 milliards EUR d'actifs clients. Aux EAU, elle exploite un bureau de représentation régulé par la DFSA ; les contrats clients sont conclus avec Saxo Bank A/S au Danemark. J'y détiens mon portefeuille multi-actifs, et c'est l'une des trois places utilisées pour les comptes gérés.",
        faq: [
          {
            q: "Que sont les paliers Classic, Platinum et VIP et comment y accéder ?",
            a: "Classic est le palier par défaut. Platinum exige un dépôt de EUR 200,000+ (USD 250,000+ sur le site EAU) ou un volume de trading défini ; VIP exige EUR 1,000,000+ (USD 1,250,000+) ou du volume. Les paliers supérieurs bénéficient de spreads et de commissions réduits et d'un support prioritaire ; Saxo Elite s'adresse aux clients au-delà d'environ EUR 5 millions d'actifs.",
          },
          {
            q: "Y a-t-il un dépôt minimum ?",
            a: "Le site international n'indique aucun montant minimum pour un compte Classic, mais le site EAU/MENA mentionne un financement minimum de USD 5,000. Les dépôts de palier doivent être effectués dans les 30 premiers jours pour accéder à Platinum ou VIP.",
          },
          {
            q: "Quels frais Saxo facture-t-il au-delà des spreads et commissions ?",
            a: "Des droits de garde de 0.15 % (Classic), 0.12 % (Platinum) ou 0.09 % (VIP) par an sur les actions, ETF/ETC et obligations dans la plupart des régions (plus TVA pour les résidents de l'UE), une conversion de devises jusqu'à 0.25 %, des majorations de rollover FX de 0.50 à 0.75 %, et aucuns frais d'inactivité, de plateforme, de dépôt ou de retrait.",
          },
          {
            q: "Qui régule Saxo et est-ce une véritable banque ?",
            a: "Saxo Bank A/S est une banque danoise pleinement agréée, supervisée par la FSA danoise (licence n° 1149) et classée SIFI. Les entités du groupe sont régulées par la FCA, la FINMA, la MAS, l'ASIC, la SFC et la JFSA. À Dubaï, Saxo Bank A/S exploite un bureau de représentation régulé par la DFSA ; l'ancienne licence de Saxo Bank (Dubai) Ltd (F001014) a été retirée en 2017.",
          },
          {
            q: "Que puis-je trader ?",
            a: "Plus de 71,000 instruments : 23,000+ actions sur 50+ bourses, 8,200+ ETF, 5,200 obligations, fonds communs de placement, 185+ paires de devises, options FX, CFD sur indices/actions/matières premières, 250+ futures, 3,100+ options cotées et FX/ETP sur cryptos.",
          },
        ],
      },
      {
        tagline: "CFD sans commission avec TradingView, MT4/MT5 et plus de 5,500 marchés",
        regulator: "FCA · CySEC · ASIC · SCB · SCA (EAU)",
        licence: "FCA 793714 · CySEC 319/17 · ASIC AFSL 513393 · SCB SIA-F245 · EAU 20200000176 (Capital Com MENA, Dubaï)",
        founded: "2016, Londres",
        minDeposit: "$20 par carte · €50 par virement",
        platforms: ["Web et application Capital.com", "TradingView", "MT4", "MT5", "API"],
        spreads: [{ value: "dès ~0.7 (dynamique)" }, { value: "dès ~0.5 (dynamique)" }, { value: "dès ~0.6" }],
        commission: "Aucune sur les CFD, spread uniquement · financement overnight 4 % p.a. ± taux de référence · conversion de devises 0.7 % (0.5 % pro)",
        leverage: "1:30 pour les particuliers dans toutes les entités · jusqu'à 1:500 professionnel",
        funding: ["Visa / Mastercard", "Apple Pay", "Google Pay", "Virement bancaire", "PayPal (UE/AU)", "Skrill", "Neteller", "Lean (EAU)"],
        withdrawalTime: "Traité sous 24 h, 91 % en moins de 5 minutes",
        languages: "24h/24 7j/7 en anglais, 10+ langues aux heures ouvrées · turc non confirmé officiellement",
        bestFor: "Traders particuliers et MENA qui veulent l'exécution via TradingView et un dépôt d'entrée faible",
        pros: [
          "Zéro commission de trading et aucuns frais de dépôt, de retrait ou d'inactivité",
          "Régulé par la FCA, la CySEC, l'ASIC, la SCB et la SCA des EAU ; fonds des clients ségrégués et protection contre le solde négatif",
          "Connexion native à TradingView plus MT4, MT5, plateforme web et mobile propriétaire et une API",
          "Dépôt minimum de $20 ; 91 % des retraits traités en moins de 5 minutes",
          "Comptes sans swap pour les clients MENA et un compte professionnel avec levier 1:500 et remises sur spread",
        ],
        cons: [
          "Spreads dynamiques, non fixes : EUR/USD ~0.7 pip et or ~0.5 sont des valeurs typiques, pas des minimums garantis",
          "Pas de compte à spread brut ni à commission",
          "Le financement overnight de 4 % plus taux de référence rend les positions à levier sur plusieurs jours relativement coûteuses ; conversion de devises de 0.7 % pour les particuliers",
        ],
        steps: [
          "Cliquez sur « Open account » sur capital.com ou téléchargez l'application iOS/Android ; choisissez votre pays de résidence",
          "Inscrivez-vous avec votre e-mail (ou Google/Apple), définissez un mot de passe, acceptez les conditions et confirmez votre e-mail via le lien reçu",
          "Vérifiez votre identité : téléchargez une pièce d'identité valide, un selfie en direct et un justificatif de domicile sur demande (examen généralement sous 24 heures)",
          "Approvisionnez le compte par carte, Apple/Google Pay, virement bancaire ou méthode locale — minimum $10–20 par carte, €50 par virement",
          "Choisissez CFD, sans swap ou (si éligible) passez à un compte Professionnel, puis tradez sur la plateforme web, l'application, TradingView, MT4 ou MT5",
        ],
        summary:
          "Capital.com est un courtier CFD privé fondé en 2016 par Viktor Prokopenya, avec plus de 880,000 comptes actifs et plus de 5,500 instruments sur les actions, indices, forex, matières premières et cryptos. Le volume de trading des clients a dépassé 1,700 milliards de dollars en 2024 et 1,500 milliards au premier semestre 2025, plus de la moitié provenant du Moyen-Orient. Son entité de Dubaï, Capital Com MENA Securities Trading, est agréée par la Securities and Commodities Authority des EAU. J'y conserve un compte CFD personnel pour le trading d'indices.",
        faq: [
          {
            q: "Capital.com est-il régulé et les fonds des clients sont-ils protégés ?",
            a: "Oui. Capital Com (UK) Ltd est régulé par la FCA (793714), Capital Com SV Investments Ltd est agréé par la CySEC (319/17), Capital Com Australia Pty Ltd détient l'AFSL ASIC 513393, Capital Com Online Investments Ltd est agréé par la Securities Commission des Bahamas (SIA-F245) et Capital Com MENA Securities Trading L.L.C. est agréé à Dubaï par la SCA/CMA des EAU (20200000176). Les fonds des clients particuliers sont conservés sur des comptes ségrégués et la protection contre le solde négatif s'applique.",
          },
          {
            q: "Quel est le dépôt minimum et y a-t-il des frais de dépôt ou de retrait ?",
            a: "Le minimum indiqué est de 10 USD/EUR/GBP pour les cartes et Apple Pay sur le site international (20 dans le centre d'aide et pour les clients des EAU), et de €50 pour les virements. Capital.com ne facture aucuns frais de dépôt, de retrait ou d'inactivité ; votre banque ou prestataire de paiement peut appliquer les siens.",
          },
          {
            q: "Quel est le délai des retraits ?",
            a: "Capital.com indique traiter toutes les demandes de retrait sous 24 heures, et 91 % en moins de 5 minutes. Les fonds peuvent ensuite mettre jusqu'à 5 jours ouvrés pour apparaître sur votre carte ou votre compte bancaire. Les retraits reviennent vers le moyen de dépôt d'origine ; le retrait minimum est de 20 USD/EUR/GBP par carte.",
          },
          {
            q: "Quel effet de levier puis-je obtenir ?",
            a: "Les clients particuliers obtiennent jusqu'à 1:30 sur les principales paires forex, 1:20 sur l'or et les principaux indices, 1:10 sur les autres matières premières et indices, 1:5 sur les actions et 1:2 sur les cryptos. Les clients éligibles peuvent passer à un compte Professionnel avec jusqu'à 1:500 sur les principales paires forex, les indices, l'or et le pétrole, 1:100 sur les cryptos et 1:33 sur les principales actions, plus des remises sur spread de 5 à 20 % selon le volume mensuel.",
          },
          {
            q: "Capital.com propose-t-il des comptes sans swap (islamiques) et le trading via TradingView ?",
            a: "Oui. Les comptes sans swap sont disponibles pour les clients des EAU, d'Arabie saoudite, du Qatar, du Koweït, de Bahreïn, d'Oman, de Jordanie, d'Égypte, du Liban, de Tunisie, d'Algérie et du Maroc — clôturez vos positions ouvertes et contactez support@capital.com pour basculer. Capital.com est un courtier officiel TradingView, vous pouvez donc connecter votre compte et passer des ordres directement depuis les graphiques TradingView, en plus de MT4, MT5, de la plateforme web et de l'application.",
          },
        ],
      },
      {
        tagline: "Application régulée par la SPK : BIST sans commission, actions US à $1.50 l'ordre",
        regulator: "SPK (Türkiye) · membre de Borsa İstanbul",
        licence: "Certificat de courtage SPK K-024 (31 mai 2022) · membre BIST depuis 2021 · actifs US sous SIPC",
        founded: "2020, Istanbul",
        minDeposit: "Aucun · actions fractionnées dès $1",
        platforms: ["Application Midas (iOS, Android)", "Plateforme web Atlas"],
        spreads: [{ value: "0 % de commission" }, { value: "$1.50 par ordre" }, { value: "Aucune commission Midas" }],
        commission: "Actions BIST 0 % · actions US $1.50 fixe, actions européennes €1.50 par ordre · options US $1.50 par contrat · VIOP 0.01–0.05 %",
        leverage: "Aucun sur les actions (au comptant) · prêts sur marge BIST à 48.5–66.5 % p.a.",
        funding: ["Virement bancaire en TRY (EFT / FAST)", "Virement bancaire en USD ou EUR", "12 banques partenaires avec crédit instantané"],
        withdrawalTime: "Quelques minutes vers les banques partenaires ; USD sous $50k en quelques minutes",
        languages: "Application en turc et en anglais · support et site en turc uniquement",
        bestFor: "Investisseurs résidant en Türkiye qui veulent les actions BIST, US et européennes dans une seule application à bas coût",
        pros: [
          "Zéro commission sur Borsa İstanbul, sans frais de compte, de garde ni de compensation",
          "$1.50 fixe par ordre US, actions fractionnées dès $1 et données en temps réel gratuites",
          "Courtier agréé par la SPK ; titres BIST au Central Registry Agency, titres US sous protection SIPC",
          "Dépôts et retraits en quelques minutes via 12 banques partenaires, sans frais de virement Midas",
          "Un seul compte pour les actions BIST, US et européennes, les options US, les futures VIOP, les fonds TEFAS et les certificats or",
        ],
        cons: [
          "Résidents de Türkiye uniquement ; pas de compte pour les non-résidents ni pour les résidents fiscaux à l'étranger",
          "Pas de CFD ni de forex à effet de levier ; les prêts sur marge BIST portent des intérêts élevés en TRY",
          "Support et site en turc uniquement ; conversion TRY vers USD au taux propre de Midas plutôt qu'à un tarif publié",
        ],
        steps: [
          "Téléchargez l'application Midas sur l'App Store ou Google Play et inscrivez-vous avec votre numéro de mobile",
          "Vérifiez votre identité avec une carte d'identité turque à puce, une carte bleue ou une carte d'identité pour étrangers ; vous devez avoir 18 ans et plus et résider en Türkiye sans obligations fiscales à l'étranger",
          "Complétez la demande dans l'application et signez électroniquement les conventions de compte d'investissement ; la procédure prend environ 5 minutes",
          "Approvisionnez le compte par virement bancaire en TRY ou USD (depuis n'importe quelle banque ; les virements des banques partenaires sont crédités en environ 2 minutes)",
          "Achetez votre première action : convertissez TRY en USD dans l'application si nécessaire et passez un ordre sur des actions BIST, US ou européennes dès $1/€1",
        ],
        summary:
          "Midas Menkul Değerler A.Ş. est un courtier d'Istanbul agréé par la SPK, fondé en 2020 par Egem Eraslan et détenu à 100 % par Midas Finansal Teknolojiler A.Ş. Il déclarait environ 4 millions d'utilisateurs et un volume de trading mensuel approchant 20 milliards de dollars en mai 2026, et a levé plus de 140 millions de dollars, dont une série B de 80 millions de dollars menée par QED Investors en août 2025. C'est la place que j'utilise pour les actions BIST et US, et l'une des trois places utilisées pour les comptes gérés.",
        faq: [
          {
            q: "Qui peut ouvrir un compte Midas ?",
            a: "Les adultes titulaires d'une carte d'identité turque à puce, d'une carte bleue ou d'une carte d'identité turque pour étrangers, résidant en Türkiye et non résidents fiscaux ailleurs. Des comptes enfant et société sont également disponibles pour les titulaires d'une carte à puce turque résidant en Türkiye. Les non-résidents ne peuvent pas ouvrir de compte.",
          },
          {
            q: "Que facture Midas ?",
            a: "Les ordres sur actions BIST sont sans commission, sans frais de compte, de garde ni de compensation. Les ordres sur actions US coûtent $1.50 fixe et les ordres sur actions européennes €1.50 fixe par ordre. Les options US sont à $1.50 par contrat pour les 500 premiers contrats du mois. Les ordres sur fonds TEFAS ne portent aucune commission Midas. Les dépôts et retraits sont gratuits côté Midas.",
          },
          {
            q: "Puis-je trader des actions US et comment sont-elles protégées ?",
            a: "Oui. Midas donne accès aux actions NYSE, NASDAQ et OTC, aux ETF cotés aux États-Unis et aux options US, avec des actions fractionnées dès $1 et des dividendes versés en USD. Les titres sont détenus à votre nom auprès de dépositaires agréés par la SEC et couverts par l'assurance SIPC jusqu'à $150 millions ($75 millions en titres plus $75 millions en espèces) selon le site Midas.",
          },
          {
            q: "Comment fonctionne la conversion de devises ?",
            a: "Vous pouvez déposer des USD directement ou convertir des TRY en USD ou EUR dans l'application 24h/24 et 7j/7 (paires USD/TRY et EUR/TRY) à partir de votre solde en espèces ; les fonds convertis sont généralement disponibles immédiatement pour trader. Midas applique son propre taux et ne publie pas de commission de conversion distincte.",
          },
          {
            q: "Quel est le délai des retraits ?",
            a: "Les retraits vers les 12 banques partenaires de Midas arrivent en quelques minutes. Les retraits en TRY vers d'autres banques arrivent en quelques minutes dans les limites FAST (montants plus élevés le jour ouvré suivant). Les retraits en USD inférieurs à $50,000 prennent quelques minutes et ceux de $50,000 à $200,000 environ une heure aux heures ouvrées. Midas ne facture aucuns frais de retrait ; des frais SWIFT de banques tierces peuvent s'appliquer aux virements USD hors banques partenaires.",
          },
        ],
      },
      {
        tagline: "Courtier FCA et CNMV qui transforme un track record en DARWIN investissable",
        regulator: "FCA · CNMV · FSA Seychelles",
        licence: "FCA 586466 · CNMV 311 · FSA SD171",
        founded: "2012, Londres",
        minDeposit: "€500 · €1,000 d'equity pour créer un DARWIN",
        platforms: ["MT4", "MT5", "TradingView", "DXtrade", "FIX / API DARWIN", "Interactive Brokers TWS"],
        spreads: [{ value: "0.2–0.3 + $2.5 par lot" }, { value: "~0.4 + 0.0025 %" }, { value: "~0.6 + $0.275 par contrat" }],
        commission: "Forex $2.50 par lot et par ordre · indices $2.75 par contrat · matières premières 0.0025 % · CFD sur actions $0.02 par action · remises jusqu'à 40 %",
        leverage: "1:30 pour les particuliers (FCA, CNMV) · jusqu'à 1:200 professionnel",
        funding: ["Virement bancaire", "Visa / Mastercard", "Skrill"],
        withdrawalTime: "1 à 3 jours ouvrés",
        languages: "Lun–jeu 08:00–17:00 UTC, e-mail et téléphone · site en EN, ES, FR, DE, ZH · pas de turc",
        bestFor: "Traders systématiques qui veulent monétiser un track record vérifié grâce au capital d'investisseurs et aux allocations DarwinIA",
        pros: [
          "Double régulation FCA et CNMV avec protection FSCS (£85k) et FOGAIN (€100k), fonds sur des comptes ségrégués de premier rang",
          "Percevez 15 % de commission de performance sur le capital des investisseurs sans détenir votre propre agrément de gestion d'actifs",
          "DarwinIA finance les meilleures stratégies à hauteur de €30k à €500k par mois ; plus de €11.5M versés aux traders à ce jour",
          "Tarification interbancaire brute, EUR/USD autour de 0.2–0.3 pip plus $2.50 par lot, avec remises talent et volume jusqu'à 40 %",
          "MT4, MT5, TradingView, DXtrade, API FIX et DARWIN, plus actions, futures et ETF via Interactive Brokers",
        ],
        cons: [
          "Pas de compte sans swap, pas de support en turc, et support uniquement du lundi au jeudi de 08:00 à 17:00 UTC",
          "Dépôt minimum de €500, €1,000 d'equity pour créer un DARWIN, plafonds à vie sur les dépôts par carte et Skrill",
          "Levier pour les particuliers plafonné à 1:30 ; le statut professionnel le relève mais fait perdre la couverture FSCS",
        ],
        steps: [
          "Inscrivez-vous sur darwinex.com/register avec nom d'utilisateur, e-mail, mot de passe et pays de résidence fiscale",
          "Complétez l'onboarding MiFID : questionnaire de données personnelles et questionnaire de connaissances financières/solvabilité",
          "Téléchargez vos justificatifs d'identité et de domicile ; le statut de la demande est envoyé par e-mail sous 1 jour ouvré",
          "Approvisionnez votre Darwinex Wallet (min €/$/£500 par virement bancaire, carte ou Skrill) et transférez au moins 500 vers un compte de trading réel",
          "Tradez sur MT4/MT5, TradingView, DXtrade ou IBKR ; après environ un mois (ou instantanément avec un track record importé), créez votre DARWIN et participez à DarwinIA",
        ],
        summary:
          "Darwinex est le nom commercial de Tradeslide Trading Tech Ltd (Londres, 2012 ; agréé FCA depuis 2014) et de Sapiens Markets EU (CNMV, Madrid, 2022), qui opère à la fois comme courtier et comme gestionnaire d'actifs régulé. Un DARWIN encapsule la stratégie d'un trader sous forme d'indice investissable à risque géré : les investisseurs paient 1.2 % de frais de gestion et 20 % de commission de performance, dont 15 % reviennent au trader. La plateforme déclare plus de 3,000 DARWIN, environ 580 millions de dollars investis et des clients dans plus de 80 pays. C'est là que les systèmes NUUK sont packagés pour le capital d'investisseurs tiers.",
        faq: [
          {
            q: "Qu'est-ce qu'un DARWIN ?",
            a: "Un DARWIN est une stratégie de trading packagée par Darwinex sous forme d'indice géré avec son propre ticker et une cotation qui démarre à 100. Il réplique les entrées et sorties du trader sous un moteur de risque indépendant (cible de VaR mensuelle de 3.25 à 6.5 %) sans divulguer les positions ouvertes, de sorte que les investisseurs peuvent l'acheter et que le trader perçoit des commissions de performance sous l'agrément de gestion d'actifs de Darwinex.",
          },
          {
            q: "Quelle est la différence entre Darwinex Zero et un compte réel Darwinex ?",
            a: "Darwinex Zero est un abonnement (€45/mois, €35/mois en annuel, €30/mois sur un plan de 3 ans ; €50 pour les futures) qui donne un compte MT4/MT5 en capital virtuel pour construire un track record vérifié et participer à DarwinIA avec 15 % de commissions de performance réelles, sans capital de trading à risque. Un compte réel Darwinex n'a pas d'abonnement, utilise votre propre argent (€500 minimum) et donne accès au capital des investisseurs dès le premier jour ; un track record Zero peut être migré vers un compte réel.",
          },
          {
            q: "Quels frais paient les investisseurs et comment la commission de performance est-elle répartie ?",
            a: "Les investisseurs paient des frais de gestion de 1.2 % p.a. à Darwinex et une commission de performance de 20 % sur les profits nets, calculée trimestriellement sur un high-water mark. Sur ces 20 %, 15 % sont versés au fournisseur du DARWIN (le trader) et 5 % sont conservés par Darwinex. Les allocations DarwinIA versent également au trader 15 % des profits générés.",
          },
          {
            q: "Quel est le dépôt minimum ?",
            a: "Le premier dépôt est de €/$/£500 pour les comptes individuels et joints et de 10,000 pour les comptes société ; les dépôts suivants sont de 100 minimum (500 par virement bancaire). La création d'un DARWIN exige €1,000 d'equity et la participation à DarwinIA exige $1,000 d'equity maintenus tout au long du mois. Les investisseurs peuvent commencer dès €200 (€10,000 pour le Darwinex INDX).",
          },
          {
            q: "Comment Darwinex est-il régulé ?",
            a: "Tradeslide Trading Tech Ltd est autorisé et régulé par la FCA britannique (FRN 586466, société n° 08061368) en tant que courtier et gestionnaire d'actifs, avec une protection FSCS jusqu'à £85,000. Sapiens Markets EU Sociedad de Valores SA est régulé par la CNMV espagnole (n° 311) avec une couverture FOGAIN jusqu'à €100,000. Tradeslide Global Ltd détient une licence de la FSA des Seychelles (SD171). Les fonds des clients sont conservés sur des comptes ségrégués auprès de banques britanniques de premier rang.",
          },
        ],
      },
    ],
  },

  signals: {
    metaTitle: "Signaux et rapports",
    metaDescription: "Notes de marché quotidiennes, rapports hebdomadaires et idées de trade avec le raisonnement complet, livrés sur Telegram et par e-mail.",
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
      { name: "Signaux", period: "par mois", features: ["Tout ce qui est inclus dans Rapports", "Idées de trade avec raisonnement", "Mises à jour en direct sur Telegram", "Fiche de performance mensuelle"], cta: "S'abonner" },
      { name: "Mentorat", period: "par trimestre", features: ["Tout ce qui est inclus dans Signaux", "Revue individuelle toutes les deux semaines", "Retour sur votre portefeuille", "Accès prioritaire aux webinaires"], cta: "Postuler" },
    ],
    performanceTitle: "Performance des signaux",
    performanceNote: "Les idées clôturées sont consignées chaque mois avec entrée, sortie et résultat dans le canal Telegram. Journal interne à ce jour : 87 % des idées clôturées ont atteint l'objectif avant le stop. La vérification indépendante du journal est en cours.",
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
    "metaDescription": "NUUK se rémunère en négociant son propre capital, par des frais de gestion et de performance sur les portefeuilles gérés, par des partenariats avec des courtiers et par des abonnements à la recherche. Chaque frais est expliqué.",
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
        "body": "Deux structures. Le MAM mutualisé ne facture aucun frais de gestion et 25 % des bénéfices au-dessus du plus-haut historique. Le compte dédié (à partir de 250 000 USD) facture 1 000 USD par mois plus 25 % des bénéfices au-dessus du plus-haut historique, après frais de gestion.",
        "how": "Prélevés par le courtier sur votre compte et visibles sur chaque relevé"
      },
      {
        "title": "Partenariats avec des courtiers",
        "share": "Rétrocessions d’apporteur d’affaires (IB)",
        "body": "Lorsque vous ouvrez un compte chez un courtier partenaire via NUUK, le courtier nous reverse une part du spread ou de la commission qu’il perçoit. Vos conditions de trading sont identiques à celles d’un client direct. La liste complète des partenaires et des conditions figure dans notre information IB.",
        "how": "Payées par le courtier, jamais ajoutées à vos coûts"
      },
      {
        "title": "Recherche et formation",
        "share": "Abonnements et ateliers",
        "body": "Formules de signaux et de recherche à 750, 1 000 et 5 000 USD par mois, ainsi que des ateliers payants et des formations en entreprise. Les webinaires hebdomadaires restent gratuits.",
        "how": "Abonnement fixe ou prix du billet, payés d’avance"
      }
    ],
    "exampleTitle": "À quoi ressemble une année en chiffres",
    "exampleLead": "Chiffres illustratifs pour une année avec un rendement brut de 12 % avant frais. Ce n’est pas une prévision ; les rendements peuvent être négatifs.",
    "examples": [
      {
        "name": "MAM mutualisé",
        "basis": "100 000 USD alloués",
        "rows": [
          [
            "Bénéfice brut (12 %)",
            "12 000 USD"
          ],
          [
            "Frais de gestion",
            "0 USD"
          ],
          [
            "Frais de performance (25 %)",
            "3 000 USD"
          ],
          [
            "Net pour vous",
            "9 000 USD (+9,0 %)"
          ],
          [
            "Revenu de NUUK",
            "3 000 USD"
          ]
        ]
      },
      {
        "name": "Compte dédié",
        "basis": "250 000 USD alloués",
        "rows": [
          [
            "Bénéfice brut (12 %)",
            "30 000 USD"
          ],
          [
            "Frais de gestion (12 × 1 000 USD)",
            "12 000 USD"
          ],
          [
            "Bénéfice après frais de gestion",
            "18 000 USD"
          ],
          [
            "Frais de performance (25 %)",
            "4 500 USD"
          ],
          [
            "Net pour vous",
            "13 500 USD (+5,4 %)"
          ],
          [
            "Revenu de NUUK",
            "16 500 USD"
          ]
        ]
      }
    ],
    "exampleNote": "Lors d’une année perdante, aucun frais de performance n’est facturé et la perte doit être récupérée avant qu’un frais de performance soit à nouveau prélevé. Le compte dédié continue de payer ses frais de gestion mensuels. Les spreads, commissions et swaps sont facturés par le courtier et sont déjà inclus dans le chiffre brut.",
    "neverTitle": "Ce que nous ne faisons jamais",
    "never": [
      "Majorer les spreads, commissions ou swaps",
      "Détenir votre argent ou disposer d’un droit de retrait sur votre compte",
      "Trader contre vous ou vendre votre flux d’ordres",
      "Facturer des frais de performance sur des gains latents ou sur des bénéfices inférieurs au plus-haut historique",
      "Être payés pour recommander un courtier plutôt qu’un autre au-delà de la rétrocession déclarée"
    ],
    "riskTitle": "La gestion du risque est le modèle économique",
    "riskLead": "Les frais n’ont de sens que si le capital survit. Ces limites s’appliquent à nos propres comptes et à chaque mandat que nous gérons.",
    "risk": [
      {
        "title": "Risque fixe par position",
        "body": "Chaque position est dimensionnée sur un montant de risque fixe, 300 USD par trade sur GANN Live, avec un stop fixé par ATR(14) × 1,5 avant l’entrée."
      },
      {
        "title": "Limite de perte quotidienne",
        "body": "Le trading s’arrête pour la journée dès que la limite de perte quotidienne du mandat est atteinte. Le système ne peut pas la contourner."
      },
      {
        "title": "Mandat de drawdown maximal",
        "body": "Chaque mandat fixe un drawdown maximal. L’atteindre met le compte en pause et déclenche une revue avec vous avant toute reprise."
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
        "a": "Pas sur le compte. Le MAM mutualisé n’a pas de frais de gestion, une année perdante ne nous rapporte donc rien. Le compte dédié paie ses frais de gestion mensuels, indiqués avant signature ; aucun frais de performance n’est facturé tant que la perte n’est pas récupérée."
      },
      {
        "q": "Les rétrocessions IB sont-elles un conflit d’intérêts ?",
        "a": "Elles peuvent l’être, c’est pourquoi elles sont déclarées. Nous recommandons les courtiers selon la régulation, l’exécution et les conditions adaptées à votre profil, et chaque partenaire figure avec ses conditions dans l’information IB. Vos conditions de trading ne changent jamais parce que vous venez par nous."
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
    "portalsTitle": "Portails clients des courtiers",
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
        "a": "MAM mutualisé : après les 30 premiers jours, à tout moment. Compte dédié : avec un préavis de 30 jours pour clôturer les positions de façon ordonnée. Les retraits sont effectués par vous, dans le portail du courtier."
      },
      {
        "q": "Où voir les frais prélevés ?",
        "a": "Sur le relevé du courtier, en lignes séparées, et en résumé dans le rapport mensuel."
      }
    ],
    "portals": [
      {
        "slug": "pepperstone",
        "name": "Pepperstone",
        "href": "https://secure.pepperstone.com/"
      },
      {
        "slug": "tickmill",
        "name": "Tickmill",
        "href": "https://my.tickmill.com/"
      },
      {
        "slug": "saxo",
        "name": "Saxo Bank",
        "href": "https://www.saxotrader.com/"
      },
      {
        "slug": "capital-com",
        "name": "Capital.com",
        "href": "https://capital.com/trading/platform/"
      },
      {
        "slug": "midas",
        "name": "Midas",
        "href": "https://www.getmidas.com/"
      },
      {
        "slug": "darwinex",
        "name": "Darwinex",
        "href": "https://www.darwinex.com/login"
      }
    ]
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
      "year": "Une année illustrative à 12 % brut",
      "note": "À noter"
    },
    "items": [
      {
        "name": "Trésorerie d’un family office, Dubaï",
        "profile": "Un family office détenant 500 000 USD de trésorerie devant rester liquide sous 60 jours.",
        "objective": "Préserver le capital d’abord ; viser 8 à 12 % net par an avec un drawdown maximal de 8 %.",
        "structure": "Un compte PAMM dédié chez Saxo Bank au nom du family office, géré sous mandat écrit.",
        "mandate": [
          "Instruments : majeures forex, or, CFD sur indices US et UE",
          "Exposition brute maximale 3× les fonds propres, limite de perte quotidienne 1 %",
          "Drawdown maximal 8 % : compte mis en pause et revu",
          "Préavis de 30 jours pour les retraits"
        ],
        "fees": "1 000 USD par mois (2,4 % par an à cette taille) plus 25 % du bénéfice au-dessus du plus-haut, après frais de gestion.",
        "rows": [
          [
            "Bénéfice brut (12 %)",
            "60 000 USD"
          ],
          [
            "Frais de gestion (12 × 1 000 USD)",
            "12 000 USD"
          ],
          [
            "Frais de performance (25 % de 48 000 USD)",
            "12 000 USD"
          ],
          [
            "Net pour le family office",
            "36 000 USD (+7,2 %)"
          ]
        ],
        "note": "À 500 000 USD, les frais de gestion fixes tombent à 2,4 % par an. Sous 250 000 USD, les mêmes frais seraient trop lourds ; c’est pourquoi le palier dédié commence là."
      },
      {
        "name": "Trader autonome, Istanbul",
        "profile": "Un ingénieur qui trade le forex seul depuis trois ans avec 5 000 USD et veut les systèmes sans les faire tourner.",
        "objective": "Exposition systématique aux systèmes NUUK, sans frais de gestion, avec sortie rapide possible.",
        "structure": "MAM mutualisé chez Tickmill : son propre compte, à son nom, alloué au pool.",
        "mandate": [
          "Mêmes systèmes et limites de risque que le capital propre de NUUK",
          "Risque fixe de 300 USD par trade sur GANN Live, à l’échelle du pool",
          "Pas de frais de gestion ; blocage de 30 jours, puis retrait à tout moment"
        ],
        "fees": "Pas de frais de gestion ; 25 % du bénéfice au-dessus du plus-haut.",
        "rows": [
          [
            "Bénéfice brut (12 %)",
            "600 USD"
          ],
          [
            "Frais de gestion",
            "0 USD"
          ],
          [
            "Frais de performance (25 %)",
            "150 USD"
          ],
          [
            "Net pour le trader",
            "450 USD (+9,0 %)"
          ]
        ],
        "note": "Une année perdante ne lui coûte rien en frais ; le pool doit retrouver son plus-haut avant qu’un frais de performance soit à nouveau prélevé."
      },
      {
        "name": "Formatrice avec une audience, Riyad",
        "profile": "Une formatrice en trading avec 2 000 élèves qui recommande déjà des courtiers de façon informelle.",
        "objective": "Monétiser les recommandations de façon transparente sans devenir courtier ni manipuler l’argent des clients.",
        "structure": "Accord d’apporteur principal avec NUUK : ses élèves ouvrent des comptes via les liens partenaires de NUUK ; la rétrocession est partagée avec elle.",
        "mandate": [
          "Partage de rétrocession écrit, payé mensuellement avec un relevé par client",
          "Accompagnement à l’ouverture de compte et au KYC en arabe et en anglais",
          "Supports de comparaison et calendrier économique réutilisables",
          "Information aux élèves : la rétrocession est payée par le courtier, conditions inchangées"
        ],
        "fees": "Aucun frais pour elle ni ses élèves ; le revenu provient de la rétrocession du courtier, déclarée dans l’information IB.",
        "rows": [],
        "note": "La rétrocession dépend du barème de chaque courtier et du volume de ses élèves ; aucun chiffre n’est donc indiqué ici. Les conditions sont convenues par écrit avant le premier client présenté."
      }
    ]
  },
  contact: {
    metaTitle: "Contact",
    metaDescription: "Réservez un appel, écrivez sur WhatsApp ou Telegram, ou envoyez une demande.",
    kicker: "Contact",
    title: "Parlons-en",
    lead: "Choisissez le canal qui vous convient. Les demandes institutionnelles et professionnelles reçoivent une réponse sous un jour ouvré.",
    channels: [
      { title: "Réserver un appel", body: "30 minutes, en visio ou par téléphone. Réponse sous un jour ouvré.", cta: "Demander un appel" },
      { title: "WhatsApp", body: "Questions rapides et échange de documents.", cta: "Écrire" },
      { title: "Telegram", body: "Canal de signaux et communauté.", cta: "Rejoindre" },
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
      topics: ["Compte géré", "Choix d'un courtier", "Signaux et rapports", "Formation", "Systèmes IA", "Autre"],
      message: "Message",
      messagePlaceholder: "Comment puis-je vous aider ?",
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
        "Les comptes gérés fonctionnent dans le propre compte du client chez un courtier partenaire, dans le cadre de la structure MAM ou PAMM et du cadre réglementaire de ce courtier. NUUK détient uniquement une autorisation de trading et n'assure jamais la garde des fonds des clients. Les frais, les périodes de blocage et les mandats de risque sont définis dans un accord écrit avant tout début de trading.",
        "Les liens vers les courtiers sur ce site sont des liens d'affiliation. NUUK peut percevoir une commission du courtier lorsque vous ouvrez et approvisionnez un compte via ces liens ; cela ne modifie pas les spreads ni les frais que vous payez, et vous restez libre d'ouvrir un compte directement auprès de n'importe quel courtier.",
        "NUUK Quant opère depuis le Dubai International Financial Centre, Dubaï, Émirats arabes unis. Les services ne sont proposés que là où la loi et la réglementation applicables le permettent ; leur disponibilité dépend de votre pays de résidence. Rien sur ce site ne s'adresse à une personne située dans une juridiction où une telle diffusion serait contraire à la législation locale.",
      ],
    },
    "ib-disclosure": {
      title: "Information sur l'activité d'apporteur d'affaires (IB)",
      body: [
        "Ahmet S. Öztürk / NUUK agit en tant que partenaire apporteur d'affaires (IB) pour les courtiers présentés sur ce site. Lorsque vous ouvrez et approvisionnez un compte via un lien d'affiliation, le courtier verse une commission calculée sur votre volume de trading.",
        "Cette commission est payée par le courtier et n'augmente pas les spreads, commissions ou frais que vous payez. Les fiches des courtiers sont rédigées de manière indépendante ; un courtier ne peut pas payer pour modifier une évaluation ou un point faible mentionné.",
        "Vous êtes libre d'ouvrir un compte directement auprès de n'importe quel courtier. Le lien d'affiliation est facultatif.",
        "Partenaires actuels : Pepperstone, Tickmill, Saxo Bank, Capital.com, Midas et Darwinex dans le cadre d'accords d'apporteur d'affaires. Tickmill, Saxo Bank et Midas exploitent en outre les structures MAM/PAMM utilisées pour les comptes gérés, dans le cadre d'accords de gestion de portefeuille distincts.",
      ],
    },
    privacy: {
      title: "Politique de confidentialité",
      body: [
        "Cette politique explique quelles données personnelles NUUK Quant (« NUUK », « nous ») collecte via nuukquant.com, pourquoi, et quels sont vos droits. Dernière mise à jour le 8 septembre 2026.",
        "Données que vous nous communiquez. Lorsque vous nous contactez par e-mail, WhatsApp, Telegram ou via le formulaire de contact, nous recevons les informations que vous envoyez : nom, adresse e-mail, numéro de téléphone et contenu de votre message. Le formulaire de contact ouvre votre propre client de messagerie ; rien de ce que vous saisissez n'est stocké sur ce site.",
        "Données collectées automatiquement. Nous utilisons Google Analytics 4 avec anonymisation des adresses IP pour comprendre comment le site est utilisé : pages consultées, localisation approximative, type d'appareil et boutons cliqués (par exemple un lien vers un courtier ou une offre). Ces données sont agrégées et ne vous identifient pas nominativement. Vous pouvez les bloquer via un paramètre de votre navigateur ou un bloqueur de publicités.",
        "Cookies. Le site lui-même ne dépose aucun cookie. Google Analytics peut déposer des cookies pour distinguer les sessions ; les sites tiers que vous ouvrez depuis nos liens (courtiers, Telegram, Calendly, réseaux sociaux) appliquent leurs propres politiques. Les cotations en direct de ce site sont des widgets TradingView intégrés, chargés depuis les serveurs de TradingView, qui peuvent déposer leurs propres cookies selon la politique de confidentialité de TradingView.",
        "Pourquoi nous traitons les données. Pour répondre à votre demande, pour fournir les services que vous avez sollicités (comptes gérés, signaux, formation), pour respecter nos obligations légales et réglementaires, et pour améliorer le site. La base juridique est votre consentement, l'exécution d'un contrat conclu avec vous, ou notre intérêt légitime à exploiter notre activité.",
        "Partage. Nous ne vendons pas de données personnelles. Nous ne les partageons qu'avec les prestataires nécessaires au fonctionnement du site et des communications (hébergement, e-mail, analytics), avec les courtiers partenaires lorsque vous nous demandez de vous présenter, et avec les autorités lorsque la loi l'exige.",
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
        "Liens tiers. Les liens vers des courtiers, des plateformes et des réseaux sociaux mènent vers des sites que nous ne contrôlons pas. Les liens d'affiliation sont indiqués sur la page d'information IB. Nous ne sommes pas responsables du contenu, de la disponibilité ni des conditions des sites tiers.",
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
      { title: "Réserver un appel", body: "30 minutes pour décider quel service vous convient : courtier, signaux, compte géré ou formation." },
      { title: "Ouvrir un compte de courtage", body: "À votre nom, chez un courtier partenaire. La vérification prend environ 10 minutes avec une pièce d'identité et un justificatif de domicile." },
      {"title": "Financer et connecter", "body": "Financez votre compte courtier : à partir de 1 000 USD pour le pool MAM ou un plan de signaux, 250 000 USD pour un mandat dédié. Connectez-le à la structure choisie."},
      { title: "Commencer à trader", body: "Suivez le plan, examinez les résultats chaque mois et ne prenez jamais un trade que vous ne pouvez pas expliquer." },
    ],
    cta: { label: "Réserver un appel" },
  },

  footer: {
    copyright: "Tous droits réservés.",
    riskTitle: "Avertissement sur les risques",
    legal1:
      "est la marque personnelle d'Ahmet S. Öztürk, économiste et investisseur, et le nom commercial de NUUK Quant, basé au Dubai International Financial Centre. Les services sont proposés aux clients professionnels et institutionnels là où la réglementation le permet ; leur disponibilité dépend de votre juridiction et de la réglementation applicable.",
    legal2:
      "Le contenu de ce site est un commentaire général de marché et un contenu pédagogique. Il ne constitue pas un conseil en investissement personnalisé ni une offre ou une sollicitation d'achat ou de vente d'un quelconque instrument financier ou service.",
    ib: "Les liens vers les courtiers sur ce site sont des liens d'affiliation. Je peux percevoir une commission lorsque vous ouvrez et approvisionnez un compte via ces liens ; cela ne modifie pas les frais que vous payez.",
    risk: "Le trading comporte des risques substantiels et peut entraîner des pertes supérieures à votre investissement initial. Les performances passées ne préjugent pas des résultats futurs.",
  },

  systems: [
    {
      method: "Niveaux de Gann + dimensionnement des positions par ATR(14)",
      riskProfile: "Modéré",
      summary: "Système or et argent : entrées sur les niveaux prix-temps de Gann, chaque position dimensionnée pour un risque fixe de USD 300 avec des stops ATR(14). Aucun trade n'est placé sans stop ; la couche d'exécution le rejette.",
      stats: [
        {
          "label": "En direct depuis",
          "value": "2026"
        },
        {
          "label": "Risque par trade",
          "value": "300 USD"
        },
        {
          "label": "Règle de stop",
          "value": "ATR(14) × 1,5"
        }
      ],
    },
    {
      perf: "+10,9 % par an, backtest",
      assetClass: "Or, argent, indices US et européens",
      method: "Momentum de séries temporelles + Donchian + croisement de moyennes mobiles, en ensemble",
      riskProfile: "Modéré",
      summary: "Ensemble de suivi de tendance quotidien sur les CFD de métaux et d'indices. Testé en walk-forward de 2010 à 2026, swap et commissions inclus ; tourne comme compte papier chez Tickmill depuis juillet 2026.",
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
        { label: "Place", value: "Tickmill MT4/MT5" },
      ],
    },
  ],

  performance: [
    {
      "name": "GANN NUUK Trader AI — Tickmill, capital propre",
      "source": "Relevé détaillé MT4, 9 sept. 2026",
      "updated": "2026-09-09",
      "stats": [
        {
          "label": "Déposé",
          "value": "47 000 USD",
          "tone": "neutral"
        },
        {
          "label": "Bénéfice net réalisé",
          "value": "+12 266 USD (+26,1 %)",
          "tone": "up"
        },
        {
          "label": "Capitaux propres (aucune position ouverte)",
          "value": "59 266 USD",
          "tone": "neutral"
        },
        {
          "label": "Profit factor",
          "value": "3,09",
          "tone": "neutral"
        },
        {
          "label": "Taux de réussite",
          "value": "72,9 % (164 sur 225)",
          "tone": "neutral"
        },
        {
          "label": "Drawdown max",
          "value": "5,16 %",
          "tone": "neutral"
        }
      ]
    },
    {
      name: "Portefeuille personnel — Saxo Bank",
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
      source: "Telegram @NUUKQuant",
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
          "value": "Telegram"
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
