import type { ContentOverride } from "@/i18n";

/**
 * Spanish (neutral international) overrides. Deep-merged onto src/content/en.ts:
 * objects merge by key, arrays merge index-wise, so every array here keeps the
 * same length and order as English. Keys omitted fall back to English on purpose
 * (hrefs, slugs, icons, numeric values, brand names, "[FILL…]" placeholders and
 * insights post categories, which the tab filter compares against the English tabs).
 */
export const es: ContentOverride = {
  meta: {
    title: "NUUK — Trading basado en IA y gestión de carteras, Dubái",
    description:
      "NUUK es una empresa de trading basada en IA con sede en el DIFC, Dubái: sistemas de trading algorítmico, cuentas gestionadas, investigación, señales y formación para inversores.",
  },
  brand: {
    role: "Trading algorítmico · Gestión de carteras",
    office: "Dubai International Financial Centre (DIFC), Dubái, EAU",
  },
  ui: {
    "partnerPopup": {
      "title": "",
      "alt": "",
      "cta": "",
      "close": "Cerrar"
    },
    investorLogin: "Acceso inversores",
    pnl: {
      "kicker": "Mesa propia",
      "today": "Cierre de hoy",
      "trades": "operaciones",
      "winRate": "tasa de acierto",
      "updated": "Actualizado",
      "source": "Cuenta propia de NUUK, extracto diario de MT5, neto de comisión y swap. Solo ilustra la mesa; no es un resultado de cuenta gestionada."
    },
    contactToOpen: "Abra su cuenta con nosotros",
    scrollDown: "Desplazarse hacia abajo",
    contact: "Contacto",
    getStarted: "Reservar una llamada",
    contactUs: "Contacto",
    learnMore: "Más información",
    language: "Idioma",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    home: "Inicio",
    noPosts: "Todavía no hay publicaciones en esta categoría.",
    riskDisclosure: "Advertencia de riesgo",
    verified: "Verificado",
    live: "En vivo",
    model: "Cartera modelo",
    test: "En pruebas",
    paused: "En pausa",
    soon: "Próximamente",
    pending: "Informe pendiente",
    verificationInProgress: "Informe en preparación",
    updated: "Actualizado",
    since: "Desde",
    source: "Fuente",
    openAccount: "Abrir cuenta",
    compare: "",
    subscribe: "Suscribirse",
    register: "Inscribirse",
    requestDemo: "Solicitar una demo",
    viewAll: "Ver todo",
    readMore: "Leer más",
    fill: "",
    whatsapp: "WhatsApp",
    legal: "Información legal",
    followUs: "Seguir",
    riskBar: {
      pre: "Operar con productos apalancados como los CFD y el forex conlleva un alto riesgo de perder dinero rápidamente.",
      strong: "Los resultados pasados no garantizan resultados futuros.",
      post: "Nada de lo publicado en este sitio constituye asesoramiento de inversión personalizado.",
    },
  },
  nav: [
    {
      label: "Servicios",
      items: [
        { label: "Sistemas de trading con IA" },
        { label: "Historial verificado" },
        { label: "Cuentas gestionadas" },
        { label: "Señales e informes" },
        { label: "Formación" },
      ],
    },
    { label: "Historial verificado" },
    { label: "Masterclass" },
    { label: "Análisis", items: [{ label: "Notas de mercado" }, { label: "Calendario económico" }] },
    {
      label: "Sobre mí",
      items: [
        { label: "Mi historia" },
        { label: "Cómo ganamos dinero" },
        { label: "Contacto" },
        { label: "Advertencia de riesgo" },
        { label: "Portal del inversor" },
        { label: "Casos prácticos" },
      ],
    },
  ],
  legalLinks: [
    { label: "Advertencia de riesgo" },
    { label: "Privacidad" },
    { label: "Términos" },
  ],

  home: {
    hero: {
      visualTag: "Trading algorítmico · Gestión de carteras",
      visualAlt: "Monoplaza de Fórmula 1 con los colores de NUUK en un estudio oscuro",
      kicker: "Empresa de trading basada en IA · DIFC, Dubái",
      title: "Los mercados, leídos con disciplina.",
      lead:
        "NUUK diseña sistemas de trading basados en IA, los opera primero con su propio capital, gestiona cuentas de inversores y enseña a los inversores a operar de forma autónoma. Cada cifra de este sitio indica su fuente y su método.",
      primary: { label: "Abrir una cuenta en un bróker" },
      secondary: { label: "Reservar una llamada" },
      trustLine: ["Capital propio en cada sistema", "Con sede en el DIFC, Dubái"],
      trust: [
        { label: "años de experiencia en mesas de negociación entre Estambul y Londres detrás de la firma" },
        {"label": "variantes de estrategia sometidas a backtest desde 2026; tres en producción, documentadas en la página de trading con IA"},
        { label: "inversores formados en webinars y seminarios" },
      ],
      pressTitle: "Bróker",
    },
    markets: {
      "kicker": "Precios en vivo",
      "title": "Los mercados, ahora mismo",
      "lead": "Cotizaciones en directo desde TradingView: forex, materias primas, índices, cripto y las acciones que sigue la mesa. Haga clic en una fila para abrir el gráfico.",
      "tabs": [
        "Forex",
        "Materias primas",
        "Índices",
        "Cripto",
        "Acciones"
      ],
      "note": "Las cotizaciones las proporcionan TradingView y sus socios de datos; algunos feeds bursátiles llegan con retraso. Las condiciones de trading, los spreads y la ejecución son los del bróker con el que opera."
    },
    numbersTitle: "NUUK en cifras*",
    numbersNote: "*Cifras a septiembre de 2026, de los registros propios de NUUK.",
    promo: {
      kicker: "Cuentas gestionadas",
      title: "Su cuenta. La ejecución de NUUK. Límites de riesgo por escrito.",
      body: "El capital nunca sale de su nombre. Usted abre una cuenta en el bróker, NUUK recibe únicamente permiso de negociación y un mandato escrito limita la exposición y la pérdida diaria.",
      figureLabel: "cuentas gestionadas, todas ellas dentro de la propia cuenta de bróker del cliente. La custodia nunca se transfiere.",
      cta: { label: "Cómo funciona" },
    },
    postsLead: "Macro, FX, materias primas, índices, cripto e IA aplicada al trading. Escrito para leerse en cinco minutos.",
    pillarsTitle: "Cuatro formas de trabajar juntos",
    pillarsLead: "Cuatro servicios, una regla: el capital permanece siempre en la propia cuenta del cliente.",
    pillars: [
      { title: "Sistemas de trading con IA", body: "Algoritmos propios programados, probados y ejecutados en vivo en FX, índices, materias primas y activos digitales.", who: "Para asignadores de capital e inversores técnicos" },
      { title: "Historial", body: "Los resultados de la cartera propia de NUUK y de los sistemas, netos de costes, con la fuente y el método de cada cifra.", who: "Para quien esté decidiendo si confiar en NUUK" },
      { title: "Cuentas gestionadas", body: "Su capital permanece en su propia cuenta de bróker. NUUK la opera bajo límites de riesgo acordados y una comisión de éxito.", who: "Para inversores que prefieren delegar la ejecución" },
      { title: "Señales, informes y formación", body: "Notas diarias, informes semanales, ideas de trading con el razonamiento completo y webinars en vivo que enseñan el método.", who: "Para traders que quieren aprender y mantenerse informados" },
    ],
    record: {
      kicker: "Historial verificado",
      title: "Los resultados, con el método detrás",
      lead: "Los resultados se presentan netos de costes de operativa. Cada cifra indica su fuente: cuenta real, paper trading o backtest.",
      featuredLabel: "Curva de capital",
      featuredNote: "Backtest walk-forward 2010–2026, neto de swaps y comisiones, base 100. Rentabilidad anualizada +10,9%, drawdown máximo 6,7%, ratio de Sharpe 1,36.",
      cta: { label: "Ver el historial completo" },
    },
    brokers: {
      kicker: "Bróker",
      title: "Su cuenta permanece en el bróker",
      lead: "Cada inversor de NUUK mantiene una cuenta de bróker a su propio nombre. NUUK nunca custodia el dinero de los clientes; pregúntenos cómo se abre la cuenta.",
      cta: { label: "Contacto" },
    },
    systems: {
      kicker: "Trading con IA",
      title: "Sistemas desarrollados internamente",
      lead: "Cada sistema está documentado: datos, modelo, reglas de riesgo, ejecución y si está en vivo o todavía en pruebas.",
      cta: { label: "Explorar los sistemas" },
    },
    signals: {
      kicker: "Señales e informes",
      title: "Ideas de trading con el razonamiento incluido",
      lead: "Instrumento, dirección, entrada, stop, objetivo y el porqué. Entregadas por WhatsApp y por correo electrónico.",
      sample: {
        "entry": "4,392",
        "stop": "4,368",
        "target": "4,464",
        "rr": "1:3",
        "note": "El oro sostuvo la zona de demanda 4.380–4.400 tras un dato de empleo fuerte, mientras los rendimientos reales no marcaron un nuevo máximo. Compra por encima de 4.392 con el stop bajo la zona en 4.368; objetivo 4.464 en el máximo previo. Riesgo del 0,5% del capital; se reduce la posición a la mitad si el IPC de EE. UU. sale por encima del 3,4%.",
        "date": "8 sep 2026 · ejemplo ilustrativo"
      },
      cta: { label: "Ver planes" },
    },
    education: {
      kicker: "Formación",
      title: "Próxima sesión en vivo",
      cta: { label: "Todos los eventos" },
    },
    testimonialsTitle: "Lo que dicen los inversores",
    postsTitle: "Últimos análisis",
  },

  about: {
    "metaTitle": "Sobre NUUK",
    "metaDescription": "NUUK es una empresa de trading basada en IA y gestión de carteras fundada en el DIFC de Dubái en 2025, construida sobre diecisiete años de experiencia en mesas de negociación de Estambul y Londres.",
    "kicker": "Sobre NUUK",
    "title": "Diecisiete años en la mesa. Una empresa creada para demostrarlo.",
    "lead": "NUUK se fundó en el Dubai International Financial Centre en 2025 sobre diecisiete años de experiencia en mesas de negociación: desde una sala de intermediación de FX en Londres en 2009, pasando por las mesas institucionales de Estambul, hasta un negocio de introductor con más de 700 clientes. Esa experiencia se convirtió en una sola convicción: los mercados premian la disciplina, no la opinión. NUUK la traduce en estrategias sistemáticas, las opera primero con su propio capital y comparte el método a través de cuentas gestionadas, investigación y formación.",
    "facts": [
      {
        "value": "2025",
        "label": "fundada en el DIFC, Dubái"
      },
      {
        "value": "17",
        "label": "años de experiencia en mesas de Estambul y Londres detrás de la firma"
      },
      {
        "value": "3",
        "label": "sistemas en producción, 87 variantes de estrategia probadas"
      }
    ],
    "activitiesTitle": "Qué hace NUUK",
    "activitiesLead": "Cuatro actividades y una regla que las atraviesa todas: el capital del cliente permanece en su propia cuenta.",
    "activities": [
      {
        "title": "Sistemas de trading algorítmico",
        "body": "Estrategias diseñadas, sometidas a backtesting y forward testing internamente, y después operadas en real con el capital propio de NUUK en FX, oro, índices y activos digitales. GANN NUUK Trader AI opera como cartera modelo."
      },
      {
        "title": "Gestión de carteras",
        "body": "Cuentas gestionadas dentro de la propia cuenta de bróker del cliente mediante estructuras MAM/PAMM, bajo un mandato de riesgo por escrito, una comisión de gestión y una comisión de éxito sobre el beneficio neto."
      },
      {
        "title": "Investigación y señales",
        "body": "Notas diarias de la mesa, un informe semanal e ideas de trading con el razonamiento completo, a través del portal del inversor y WhatsApp."
      },
      {
        "title": "Formación para inversores",
        "body": "Webinars, seminarios y mentoría: más de 3.000 inversores formados para leer los mercados con la misma disciplina que usa la mesa."
      }
    ],
    "timelineTitle": "La historia",
    "timeline": [
      {
        "year": "2009",
        "title": "Londres",
        "body": "La experiencia de mesa que hay detrás de NUUK empieza en una sala de intermediación de FX en la City: ejecución, liquidez y riesgo de cliente, aprendidos desde dentro."
      },
      {
        "year": "2011",
        "title": "Estambul",
        "body": "Cobertura institucional de FX en brókeres de Estambul mientras Turquía se abre al trading apalancado; la cartera de clientes internacionales crece un 27%."
      },
      {
        "year": "2016",
        "title": "Un negocio de clientes",
        "body": "Un negocio de introductor y cobertura de clientes crece hasta más de 700 clientes y más de 26 M USD en negocio de clientes."
      },
      {
        "year": "2025",
        "title": "NUUK, Dubái",
        "body": "Fundación en el Dubai International Financial Centre como empresa de trading basada en IA: sistemas, cuentas gestionadas, investigación y formación."
      },
      {
        "year": "2026",
        "title": "Sistemas en producción",
        "body": "87 variantes de estrategia sometidas a backtesting, tres en producción. GANN NUUK Trader AI opera como cartera modelo y se publica en la página de resultados."
      },
      {
        "year": "Hoy",
        "title": "Una mesa multilingüe",
        "body": "Un portal del inversor y un sitio en seis idiomas al servicio de inversores desde Estambul hasta el Golfo."
      }
    ],
    "principlesTitle": "Cómo trabaja NUUK",
    "principles": [
      {
        "title": "Evidencia antes que opinión",
        "body": "Cada cifra de este sitio indica su fuente y su método. Lo que no puede explicarse no se muestra."
      },
      {
        "title": "Riesgo antes que rentabilidad",
        "body": "El tamaño de la posición, los límites de drawdown y las reglas de stop se deciden antes de cualquier operación."
      },
      {
        "title": "Su dinero sigue siendo suyo",
        "body": "Las cuentas gestionadas operan dentro de su propia cuenta de bróker. NUUK nunca asume la custodia."
      },
      {
        "title": "Primero el capital propio",
        "body": "Ningún sistema llega a una cuenta de cliente antes de haber operado con el dinero propio de NUUK."
      }
    ],
    "focusTitle": "Mercados cubiertos",
    "focus": [
      "BIST",
      "NYSE",
      "Forex",
      "Cripto",
      "Fondos",
      "Materias primas",
      "Inmobiliario",
      "Patrimonio tradicional"
    ],
    "speakingTitle": "Dónde publica NUUK",
    "speaking": [
      "Grupo de WhatsApp: notas diarias de mercado, ideas de trading y el informe mensual de sistemas",
      "LinkedIn · NUUK: novedades de la empresa e investigación en profundidad",
      "Portal del inversor: investigación, señales, P&L diario y formación para suscriptores"
    ]
  },

  aiTrading: {
    metaTitle: "Sistemas de trading con IA",
    metaDescription: "Sistemas propios de trading algorítmico: metodología, reglas de riesgo y estado en vivo.",
    kicker: "Trading con IA",
    title: "Sistemas, no señales salidas de una caja negra",
    lead: "Cada sistema se construye, se somete a backtest y a prueba en adelante (forward test) antes de tocar capital real. A continuación, qué hace cada uno, cómo gestiona el riesgo y si está en vivo hoy.",
    cta: { label: "Solicitar una demo" },
    systemsTitle: "Los sistemas",
    methodTitle: "Metodología",
    method: [
      { title: "Datos", body: "Datos tick y de barras de los mercados primarios, depurados y alineados en el tiempo. Datos alternativos solo cuando se ganan su lugar." },
      { title: "Modelo", body: "Señales basadas en reglas combinadas con filtros de aprendizaje automático. No opera nada que no pueda explicarse en un párrafo." },
      { title: "Riesgo", body: "El riesgo se tiene en cuenta en cada etapa del proceso." },
      { title: "Ejecución", body: "APIs de bróker y FIX cuando están disponibles; deslizamiento (slippage) y calidad de ejecución monitorizados por mercado." },
      { title: "Revisión", body: "Revisión semanal del rendimiento real frente al esperado. Los sistemas que se desvían se pausan, no se ajustan sobre la marcha." },
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      { q: "¿Puedo ejecutar un sistema en mi propia cuenta?", a: "Sí, en una cuenta de bróker a su propio nombre. Puede hacer copy trading, unirse a una estructura MAM/PAMM en el bróker, o seguir el canal de señales y ejecutar usted mismo. En todos los casos la cuenta permanece a su nombre." },
      { q: "¿Cuál es el capital mínimo?", a: "250 USD para las señales de WhatsApp y 1.000 USD para NUUK AI - Premium. Las cuentas gestionadas MAM/PAMM parten de la asignación mínima indicada en la página de cuentas gestionadas." },
      { q: "¿Comparte el código?", a: "No. El código sigue siendo propietario. NUUK publica la metodología, las reglas de riesgo y los resultados, cada uno con su fuente." },
    ],
  },

  trackRecord: {
    metaTitle: "Historial verificado",
    metaDescription: "Rendimiento de la cartera propia de NUUK y de sus sistemas de trading, con la fuente y el método de cada cifra.",
    kicker: "Historial verificado",
    title: "Cada cifra, con su fuente",
    lead: "Las cuentas de los inversores se mantienen en el bróker. Los resultados de esta página pertenecen a la cartera modelo de NUUK, una cuenta distinta de las cuentas de los inversores. Cada cifra indica de dónde procede y cómo se calcula. El rendimiento pasado no garantiza resultados futuros.",
    disclaimer: "Los resultados pasados no garantizan resultados futuros. Las cifras son netas de costes de negociación y brutas de cualquier comisión de éxito, salvo que se indique lo contrario.",
    methodologyTitle: "Cómo leer estas cifras",
    methodology: [
      { title: "Fuente", body: "Cuenta real, paper trading o backtest. La etiqueta aparece junto a cada cifra y el método de cálculo se describe en esta página." },
      { title: "Drawdown máximo", body: "Mayor caída desde un máximo hasta un mínimo en el capital de la cuenta, incluidas las posiciones abiertas." },
      { title: "Factor de beneficio", body: "Beneficio bruto dividido entre pérdida bruta. Por encima de 1,0 significa que la estrategia ganó dinero en el periodo." },
    ],
    pending: "Las cifras se generan a partir del historial de operaciones cerradas del extracto MT4. La mesa funciona como cartera modelo.",
  },

  managed: {
    metaTitle: "Cuentas gestionadas",
    metaDescription: "Cómo funcionan las cuentas gestionadas: su capital permanece en su propia cuenta de bróker, operado bajo límites de riesgo acordados.",
    kicker: "Cuentas gestionadas",
    title: "Su cuenta. La ejecución de NUUK. Límites acordados.",
    lead: "El capital nunca sale de su nombre. Usted abre una cuenta en el bróker, la conecta a la estructura gestionada y NUUK la opera dentro de un mandato de riesgo por escrito.",
    cta: { label: "Solicitar una llamada introductoria" },
    howTitle: "Cómo funciona",
    how: [
      { title: "Llamada de descubrimiento", body: "Hablamos de objetivos, horizonte, necesidades de liquidez y cuánto drawdown puede tolerar realmente." },
      { title: "Apertura de la cuenta", body: "Usted abre una cuenta en el bróker a su propio nombre y la financia. NUUK recibe únicamente permiso de negociación, nunca derechos de retiro." },
      { title: "Mandato de riesgo", body: "Los límites de riesgo se acuerdan en un mandato escrito." },
      { title: "Informes", body: "Usted ve cada operación en tiempo real en su propia cuenta, además de un informe mensual y una llamada de revisión trimestral." },
    ],
    tiersTitle: "Tres formas de asignar",
    tiers: [
      {
        "name": "Señales por WhatsApp",
        "tagline": "Las señales le llegan; usted abre las operaciones",
        "minimum": "250 USD (una cuenta de bróker a su propio nombre)",
        "managementFee": "49 USD al mes por la membresía de IA",
        "performanceFee": "Ninguna",
        "lockup": "Ninguno; puede salir cuando quiera",
        "structure": "Una cuenta de bróker a su propio nombre; las señales llegan por WhatsApp",
        "forWhom": "Quienes empiezan con un saldo pequeño y quieren operar ellos mismos",
        "join": "Unirse",
        "joinText": "Hola. Quiero unirme al programa de señales."
      },
      {
        "name": "NUUK AI - Premium",
        "tagline": "Los sistemas, dentro de su propia cuenta",
        "minimum": "1.000 USD",
        "managementFee": "99 USD al mes",
        "performanceFee": "25% del beneficio neto semanal",
        "lockup": "30 días; después, retiro en cualquier momento",
        "structure": "Pool MAM / copy trading en el bróker",
        "forWhom": "Inversores autónomos que quieren los sistemas sin operarlos",
        "join": "Unirse",
        "joinText": "Hola. Quiero unirme al programa NUUK AI - Premium."
      },
      {
        "name": "Cuenta dedicada",
        "tagline": "Su propio mandato, sus propios límites de riesgo",
        "minimum": "250.000 USD",
        "managementFee": "1.000 USD al mes (cerca del 4,8% anual en el mínimo; proporcionalmente menos por encima)",
        "performanceFee": "25% de los beneficios por encima del high-water mark",
        "lockup": "Preaviso de 30 días",
        "structure": "PAMM o cuenta gestionada por separado en el bróker",
        "forWhom": "Family offices, tesorerías corporativas e inversores profesionales",
        "join": "Unirse",
        "joinText": "Hola. Quiero abrir una cuenta dedicada."
      }
    ],
    tierLabels: {
      "minimum": "Asignación mínima",
      "managementFee": "Comisión de gestión",
      "performanceFee": "Comisión de éxito",
      "lockup": "Periodo de bloqueo",
      "structure": "Estructura",
      "forWhom": "Diseñado para"
    },
    termsTitle: "Condiciones de un vistazo",
    terms: [
      {
        "label": "Custodia",
        "value": "Siempre a su nombre en el bróker; NUUK solo tiene permiso de trading"
      },
      {
        "label": "Informes",
        "value": "En tiempo real en su cuenta; extracto mensual; llamada de revisión trimestral"
      },
      {
        "label": "Mandato de riesgo",
        "value": "Por escrito para cada cuenta: exposición máxima, límite de pérdida diaria, instrumentos permitidos"
      },
      {
        "label": "Derechos de retiro",
        "value": "Solo suyos; NUUK nunca tiene derechos de retiro ni de transferencia"
      }
    ],
    fitTitle: "Para quién es",
    fit: ["Inversores que quieren ejecución profesional sin renunciar a la custodia", "Family offices que buscan una asignación satélite a estrategias sistemáticas", "Empresarios con saldos de tesorería inactivos"],
    notFitTitle: "Para quién no es",
    notFit: ["Quien no pueda tolerar un drawdown del 20%", "Capital que se necesite en menos de 3 meses", "Quien espere rentabilidades fijas o garantizadas"],
    compliance: "NUUK Quant opera desde el Dubai International Financial Centre. Las cuentas gestionadas funcionan a través de la estructura MAM/PAMM propia del bróker y bajo su marco regulatorio: NUUK solo tiene permiso de trading, nunca custodia ni derechos de retiro. Las más de 300 cuentas gestionadas hoy están en el pool MAM; los mandatos dedicados se abren individualmente.",
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
    metaTitle: "Señales e informes",
    metaDescription: "Notas diarias de mercado, informes semanales e ideas de trading con el razonamiento completo, entregados por WhatsApp y por correo electrónico.",
    kicker: "Señales e informes",
    title: "Ideas con el razonamiento incluido",
    lead: "Sin alertas a ciegas. Cada idea incluye instrumento, dirección, entrada, stop, objetivo, ratio riesgo-beneficio y un párrafo que explica el porqué. Aprende mientras opera.",
    whatTitle: "Qué recibe",
    what: [
      { title: "Nota macro diaria", body: "Una página antes de la apertura de Londres: qué importa hoy, niveles clave y riesgos programados." },
      { title: "Informe semanal", body: "Posicionamiento, temas y la semana que viene en FX, índices, metales y activos digitales." },
      { title: "Ideas de trading", body: "Más de 100 ideas al mes de media, cada una con entrada, stop, objetivo y razonamiento." },
      { title: "Actualizaciones en vivo", body: "Gestión de las ideas abiertas: salidas parciales, movimientos de stop, invalidación." },
    ],
    formatTitle: "Formato de las ideas",
    plansTitle: "Planes",
    plans: [
      { name: "Informes", period: "al mes", features: ["Nota macro diaria", "Informe semanal", "Acceso al archivo"], cta: "Suscribirse" },
      { name: "Señales", period: "al mes", features: ["Todo lo incluido en Informes", "Ideas de trading con razonamiento", "Actualizaciones en vivo por WhatsApp", "Hoja de rendimiento mensual"], cta: "Suscribirse" },
      { name: "Mentoría", period: "por trimestre", features: ["Todo lo incluido en Señales", "Revisión individual quincenal", "Feedback sobre la cartera", "Acceso prioritario a los webinars"], cta: "Solicitar" },
    ],
    performanceTitle: "Rendimiento de las señales",
    performanceNote: "Las ideas cerradas se registran mensualmente con entrada, salida y resultado en el grupo de WhatsApp. Registro interno hasta la fecha: el 87% de las ideas cerradas alcanzó el objetivo antes que el stop. La verificación independiente del registro está en curso.",
    disclaimer: "Las señales son contenido educativo y comentario general de mercado. No constituyen asesoramiento de inversión personalizado y no tienen en cuenta sus circunstancias.",
  },

  education: {
    metaTitle: "Webinars y seminarios",
    metaDescription: "Webinars en vivo y seminarios presenciales que enseñan a los inversores a operar por sí mismos.",
    kicker: "Formación",
    title: "Aprenda el método y después opérelo usted mismo",
    lead: "Sesiones en vivo, no cursos grabados vendidos en piloto automático. Grupos reducidos, gráficos reales, reglas de riesgo reales.",
    upcomingTitle: "Próximas sesiones",
    events: [
      {
        "title": "Briefing semanal de mercados: oro, índices y la Fed",
        "format": "Webinar en línea",
        "language": "Inglés",
        "price": "Gratis",
        "seats": "100"
      },
      {
        "title": "Taller de trading sistemático en oro",
        "format": "Presencial, Dubái",
        "language": "Turco",
        "price": "250 USD",
        "seats": "25"
      }
    ],
    eventLabels: { format: "Formato", language: "Idioma", price: "Precio", seats: "Plazas", register: "Inscribirse" },
    curriculumTitle: "Programa",
    curriculum: [
      { level: "Básico", title: "Primero el riesgo", topics: ["Dimensionamiento de posiciones", "Colocación del stop", "Esperanza matemática", "Diario de trading"] },
      { level: "Intermedio", title: "Leer el mercado", topics: ["Impulsores macro", "Estructura técnica", "Correlaciones", "Horarios de sesión"] },
      { level: "Avanzado", title: "Trading sistemático", topics: ["Diseño de estrategias", "Trampas del backtesting", "Fundamentos de automatización", "Cartera de estrategias"] },
    ],
    corporateTitle: "Formación corporativa",
    corporateBody: "Programas a medida para brókeres, family offices y equipos de tesorería. Formato de medio día o dos días, presencial en Dubái o Estambul o en línea, construido sobre sus propios instrumentos y política de riesgo.",
    corporateCta: { label: "Consultar" },
    archiveTitle: "Biblioteca de sesiones",
  },

  insights: {
    notesTitle: "Notas de la mesa",
    newsTitle: "Noticias de mercado en directo",
    newsLead: "Titulares y análisis de agencias profesionales y colaboradores de TradingView, emitidos según se publican. Horas en su zona horaria.",
    techTitle: "Instantánea técnica",
    techLead: "Lecturas agregadas de osciladores y medias móviles en los instrumentos que más operan nuestros sistemas, en marco diario.",
    feedNote: "Fuentes de TradingView. El contenido de terceros no es la opinión de NUUK ni constituye asesoramiento de inversión.",
    metaTitle: "Análisis",
    metaDescription: "Comentario de mercado sobre macro, FX, materias primas, índices, cripto e IA aplicada al trading.",
    kicker: "Análisis",
    title: "Notas desde la mesa",
    tabs: ["Todo", "Macro", "FX", "Materias primas", "Índices", "Cripto", "IA"],
  },

  calendar: {
    metaTitle: "Calendario económico",
    metaDescription: "Calendario económico en directo: decisiones de bancos centrales, inflación, empleo y PIB con consenso y datos anteriores.",
    kicker: "Calendario económico",
    title: "Las publicaciones de la semana que mueven el mercado",
    lead: "Decisiones de bancos centrales, inflación, empleo y crecimiento en una sola vista, con consenso y datos anteriores. Las horas se muestran en su zona horaria.",
    note: "Datos de TradingView. Los eventos de alto impacto llevan tres barras. Los sistemas de NUUK reducen el tamaño de posición en torno a esas publicaciones; los traders discrecionales deberían evitar abrir posiciones nuevas en los 15 minutos previos.",
    tipsTitle: "Cómo leemos el calendario",
    tips: ["Compare el dato real con el consenso, no con el anterior; lo que mueve el mercado es la sorpresa.", "Vigile la revisión del dato del mes pasado; una revisión grande suele importar más que el titular.", "Las decisiones de tipos mueven el mercado dos veces: en la decisión y en la rueda de prensa unos 30 minutos después."],
  },
  money: {
    "metaTitle": "Cómo ganamos dinero",
    "metaDescription": "NUUK obtiene ingresos operando con su propio capital, con comisiones de gestión y de éxito sobre las carteras gestionadas y con suscripciones de análisis. Cada comisión, explicada.",
    "kicker": "Cómo ganamos dinero",
    "title": "Ganamos cuando usted gana. Nuestro capital va primero.",
    "lead": "NUUK no es un bróker y no toma la contraparte de sus operaciones. Nuestros ingresos proceden de tres fuentes transparentes, y la mayor es la misma operativa que gestionamos para usted.",
    "principlesTitle": "Cuatro principios detrás de cada comisión",
    "principles": [
      {
        "title": "Primero nuestro capital",
        "body": "Cada sistema opera con nuestro dinero antes de gestionar el de nadie. Tomamos las mismas operaciones, al mismo tiempo, con los mismos límites de riesgo."
      },
      {
        "title": "Cobro sobre el beneficio neto",
        "body": "La comisión de éxito se aplica solo al beneficio realizado por encima del máximo histórico (high-water mark) de su cuenta. Las pérdidas deben recuperarse antes de que volvamos a cobrar."
      },
      {
        "title": "Nada oculto",
        "body": "Sin recargo en spreads ni comisiones, sin cuotas de plataforma, sin cargos escondidos en los swaps. Lo que ve en esta página es la lista completa."
      },
      {
        "title": "El riesgo antes que la rentabilidad",
        "body": "Cada mandato empieza con un drawdown máximo y un límite de pérdida diaria. Preferimos ganar menos a incumplirlos."
      }
    ],
    "streamsTitle": "De dónde proceden nuestros ingresos",
    "streamsLead": "Por orden de tamaño.",
    "streams": [
      {
        "title": "Operativa con capital propio",
        "share": "Mayor fuente",
        "body": "Operamos nuestro propio capital con los mismos sistemas algorítmicos que ofrecemos a los clientes: GANN Live en producción y el Trend Ensemble en paper trading. Es el ingreso que nos mantiene honestos: si los sistemas dejan de funcionar, lo notamos primero.",
        "how": "Resultado de la operativa en las cuentas propias de NUUK"
      },
      {
        "title": "Gestión de carteras",
        "share": "Comisiones de gestión y de éxito",
        "body": "Tres estructuras. Las señales de WhatsApp no cobran comisión de rendimiento, solo 49 USD al mes por la membresía de IA. NUUK AI - Premium (desde 1.000 USD) cobra 99 USD al mes más un 25% del beneficio neto semanal. La cuenta dedicada (desde 250.000 USD) cobra 1.000 USD al mes más un 25% sobre los beneficios por encima del máximo histórico, después de la comisión de gestión.",
        "how": "Las deduce el bróker de su cuenta y aparecen en cada extracto"
      },
      {
        "title": "Análisis y formación",
        "share": "Suscripciones y talleres",
        "body": "Planes de señales y análisis por 750, 1.000 y 5.000 USD al mes, además de talleres de pago y formación corporativa. Los webinarios semanales siguen siendo gratuitos.",
        "how": "Suscripción fija o precio de entrada, pagados por adelantado"
      }
    ],
    "exampleTitle": "Cómo es un año en cifras",
    "exampleLead": "",
    "examples": [],
    "exampleNote": "En un año con pérdidas no hay comisión de éxito, y la pérdida debe recuperarse antes de volver a cobrarla. La cuenta dedicada sigue pagando su comisión de gestión mensual. Los spreads, comisiones y swaps los cobra el bróker y ya están incluidos en la cifra bruta.",
    "neverTitle": "Lo que nunca hacemos",
    "never": [
      "Recargar spreads, comisiones o swaps",
      "Custodiar su dinero o tener derecho de retirada sobre su cuenta",
      "Operar en su contra o vender su flujo de órdenes",
      "Cobrar comisión de éxito sobre ganancias no realizadas o sobre beneficios por debajo del máximo histórico"
    ],
    "riskTitle": "La gestión del riesgo es el modelo de negocio",
    "riskLead": "Las comisiones solo funcionan si el capital sobrevive; por eso el riesgo va primero.",
    "risk": [
      {
        "title": "Riesgo controlado",
        "body": "Cada posición se dimensiona teniendo en cuenta el riesgo."
      },
      {
        "title": "Límites de riesgo",
        "body": "Los límites de riesgo se acuerdan con usted por escrito antes de empezar."
      },
      {
        "title": "Mandato de drawdown máximo",
        "body": "Cada mandato fija un drawdown máximo acordado con usted por escrito."
      },
      {
        "title": "Revisión semanal real frente a esperado",
        "body": "Los sistemas que se desvían de su comportamiento probado se pausan; no se retocan en marcha."
      }
    ],
    "faqTitle": "Preguntas sobre comisiones",
    "faq": [
      {
        "q": "¿Ganan algo si mi cuenta pierde dinero?",
        "a": "Solo la comisión de gestión mensual, comunicada antes de firmar. NUUK AI - Premium cobra la comisión de éxito sobre el beneficio neto semanal, así que una semana con pérdidas no paga comisión de éxito. La cuenta dedicada no paga comisión de éxito hasta recuperar la pérdida."
      },
      {
        "q": "¿Existe algún conflicto de interés?",
        "a": "Todas las comisiones que cobra NUUK figuran en esta página. Su cuenta está en el bróker, a su propio nombre, y NUUK nunca custodia el dinero de los clientes."
      },
      {
        "q": "¿Cómo se calcula el máximo histórico?",
        "a": "Es el mayor valor de fin de mes de su cuenta desde el inicio, ajustado por depósitos y retiradas. La comisión de éxito se cobra solo sobre la parte del valor de fin de mes que lo supera."
      },
      {
        "q": "¿Dónde puedo ver las comisiones cobradas?",
        "a": "En el extracto de su bróker. Las comisiones las deduce el bróker dentro de su propia cuenta, de modo que cada cargo es visible en tiempo real y en el informe mensual que enviamos."
      }
    ],
    "cta": {
      "label": "Hablar de un mandato",
      "href": "/contact-us/"
    },
    "feesLink": {
      "label": "Ver la tabla de comisiones completa",
      "href": "/portfolio-management/"
    },
    "ibLink": {
      "label": "Leer la declaración de IB",
      "href": "/legal/ib-disclosure/"
    }
  },
  investors: {
    loginCta: { label: "Entrar en el portal" },
    "metaTitle": "Portal del inversor",
    "metaDescription": "Dónde inician sesión los clientes de cuentas gestionadas, qué informa NUUK cada mes y cómo solicitar acceso.",
    "kicker": "Portal del inversor",
    "title": "Su cuenta, su acceso, sus informes",
    "lead": "Las cuentas gestionadas están en el bróker, a su nombre. Inicie sesión en el portal de clientes de su bróker para ver los extractos en tiempo real; NUUK añade el informe mensual y la revisión trimestral.",
    "portalsTitle": "Portal de clientes del bróker",
    "portalLabel": "Portal de clientes",
    "reportsTitle": "Lo que recibe de NUUK",
    "reports": [
      {
        "title": "Extractos en tiempo real",
        "body": "Cada operación, comisión y saldo es visible en su cuenta del bróker en el momento. No informamos de nada que no pueda ver allí."
      },
      {
        "title": "Informe mensual",
        "body": "Antes del quinto día hábil: rendimiento neto, comisiones cobradas, exposición por instrumento, drawdown frente al mandato y un breve comentario."
      },
      {
        "title": "Revisión trimestral",
        "body": "Una llamada de 30 minutos para revisar el mandato, los límites de riesgo y cualquier cambio en sus objetivos o necesidades de liquidez."
      },
      {
        "title": "Resumen anual de comisiones",
        "body": "Una página para su contable: comisiones de gestión y de éxito, historial del máximo histórico y retiradas."
      }
    ],
    "accessTitle": "Solicitar acceso al portal",
    "accessBody": "Los informes se envían al correo de su mandato. Para cambiar la dirección, añadir un segundo destinatario o pedir un informe que no encuentra, contáctenos con su número de cuenta.",
    "accessCta": {
      "label": "Contactar con la mesa",
      "href": "/contact-us/"
    },
    "faqTitle": "Acceso y retiradas",
    "faq": [
      {
        "q": "¿Quién custodia mi dinero?",
        "a": "El bróker, en una cuenta a su nombre. NUUK solo tiene permiso de operativa y no puede retirar ni transferir fondos."
      },
      {
        "q": "¿Puedo retirar en cualquier momento?",
        "a": "NUUK AI - Premium: tras los primeros 30 días, en cualquier momento. Cuenta dedicada: con 30 días de preaviso para cerrar posiciones de forma ordenada. Las retiradas las hace usted en el portal del bróker."
      },
      {
        "q": "¿Dónde veo las comisiones cobradas?",
        "a": "En el extracto del bróker, como partidas separadas, y se recogen en el informe mensual."
      }
    ],
    "portals": []
  },
  caseStudies: {
    "metaTitle": "Casos prácticos",
    "metaDescription": "Tres escenarios ilustrativos que muestran cómo NUUK estructura un mandato, fija los límites de riesgo y cobra sus comisiones. No se representa a ningún cliente.",
    "kicker": "Casos prácticos",
    "title": "Cómo se construye un mandato, en tres escenarios",
    "lead": "Escenarios ilustrativos, no historias de clientes. Los perfiles son compuestos; las comisiones, límites y cálculos son exactamente los que aplicamos.",
    "badge": "Escenario ilustrativo",
    "labels": {
      "profile": "Perfil",
      "objective": "Objetivo",
      "structure": "Lo que propondríamos",
      "mandate": "Mandato",
      "fees": "Comisiones",
      "year": "",
      "note": "Qué observar"
    },
    "items": [
      {
        "name": "Tesorería de un family office, Dubái",
        "profile": "Un family office con 500.000 USD de tesorería que debe seguir siendo líquida en 60 días.",
        "objective": "Preservar el capital primero; drawdown máximo del 8%.",
        "structure": "Una cuenta PAMM dedicada en el bróker a nombre del family office, operada bajo mandato escrito.",
        "mandate": [
          "Instrumentos: pares mayores de forex, oro, CFD sobre índices de EE. UU. y la UE",
          "Exposición bruta máxima 3× el patrimonio, límite de pérdida diaria del 1%",
          "Drawdown máximo del 8%: cuenta en pausa y revisión",
          "Preaviso de 30 días para retiradas"
        ],
        "fees": "1.000 USD al mes (2,4% anual a este tamaño) más el 25% del beneficio por encima del máximo histórico, tras la comisión de gestión.",
        "rows": [],
        "note": "Con 500.000 USD la comisión de gestión fija baja al 2,4% anual. Por debajo de 250.000 USD la misma comisión sería demasiado pesada; por eso el nivel dedicado empieza ahí."
      },
      {
        "name": "Trader autónomo, Estambul",
        "profile": "Un ingeniero que opera forex por su cuenta desde hace tres años con 5.000 USD y quiere los sistemas sin ejecutarlos.",
        "objective": "Exposición sistemática a los sistemas NUUK, sin comisión de gestión y con salida rápida.",
        "structure": "MAM agrupado en el bróker: su propia cuenta, a su nombre, asignada al pool.",
        "mandate": [
          "Los mismos sistemas y límites de riesgo que el capital propio de NUUK",
          "Riesgo fijo de 300 USD por operación en GANN Live, escalado al tamaño del pool",
          "Sin comisión de gestión; bloqueo de 30 días y después retirada en cualquier momento"
        ],
        "fees": "Sin comisión de gestión; 25% del beneficio por encima del máximo histórico.",
        "rows": [],
        "note": "Un año con pérdidas no le cuesta nada en comisiones; el pool debe recuperar el máximo histórico antes de volver a cobrar la comisión de éxito."
      },
      {
        "name": "Formadora con audiencia, Riad",
        "profile": "Una formadora de trading con 2.000 alumnos que ya recomienda brókeres de manera informal.",
        "objective": "Ofrecer a sus alumnos análisis y una estructura clara sin convertirse en bróker ni manejar dinero de clientes.",
        "structure": "Acuerdo de formación por escrito con NUUK: sus alumnos abren cuentas de bróker a su propio nombre y usan los análisis y webinars de NUUK.",
        "mandate": [
          "Condiciones por escrito, acordadas antes de que se incorpore el primer alumno",
          "Orientación sobre la apertura de cuenta y el KYC en árabe e inglés",
          "Material comparativo y calendario económico reutilizables",
          "Aviso claro a los alumnos: las cuentas siguen a su propio nombre en el bróker"
        ],
        "fees": "Sin coste para ella ni para sus alumnos.",
        "rows": [],
        "note": "Las condiciones se acuerdan por escrito antes de presentar al primer cliente."
      }
    ]
  },
  contact: {
    metaTitle: "Contacto",
    metaDescription: "Reserve una llamada o envíe una consulta.",
    kicker: "Contacto",
    title: "Hablemos",
    lead: "Elija el canal que más le convenga. Las consultas institucionales y profesionales se responden en un día hábil.",
    channels: [
      { title: "Reservar una llamada", body: "30 minutos, por vídeo o teléfono. Respuesta en un día hábil.", cta: "Solicitar una llamada" },
      { title: "Grupo de WhatsApp", body: "Canal de señales y comunidad.", cta: "Unirse" },
    ],
    formTitle: "Enviar una consulta",
    form: {
      sending: "Enviando…",
      success: "Gracias. Su mensaje se ha enviado; respondemos en un día laborable.",
      sendError: "No se pudo enviar el mensaje. Escríbanos directamente:",
      name: "Nombre",
      namePlaceholder: "Su nombre",
      email: "Correo electrónico",
      emailPlaceholder: "usted@empresa.com",
      topic: "Asunto",
      topics: ["Cuenta gestionada", "Señales e informes", "Formación", "Sistemas de IA", "Otro"],
      message: "Mensaje",
      messagePlaceholder: "¿En qué podemos ayudarle?",
      submit: "Enviar",
      note: "Esto abre su cliente de correo con el mensaje ya redactado. No se almacena ningún dato en este sitio.",
      errorRequired: "Por favor, indique su nombre, correo electrónico y mensaje.",
      errorEmail: "Por favor, introduzca una dirección de correo electrónico válida.",
      subject: "Consulta",
    },
  },

  legal: {
    "risk-disclosure": {
      title: "Advertencia de riesgo",
      body: [
        "Operar con divisas, contratos por diferencia (CFD), materias primas, índices, acciones, fondos y activos digitales conlleva un alto nivel de riesgo y no es adecuado para todo el mundo. Los productos apalancados pueden generar pérdidas superiores a su depósito inicial, y las pérdidas pueden acumularse rápidamente en mercados volátiles.",
        "Antes de operar debe considerar sus objetivos de inversión, su nivel de experiencia y su apetito por el riesgo, y nunca comprometer capital que no pueda permitirse perder. En caso de duda, solicite asesoramiento a un asesor financiero independiente y autorizado en su jurisdicción.",
        "El rendimiento pasado de cualquier cartera, modelo, estrategia, servicio de señales o sistema de trading mostrado en este sitio web no es un indicador fiable de resultados futuros. Los historiales describen lo que ocurrió, no lo que ocurrirá. Los resultados de backtesting, simulados o de paper trading tienen limitaciones inherentes: se elaboran con conocimiento retrospectivo, no implican riesgo financiero y pueden no reflejar el impacto del deslizamiento, la liquidez o los costes de ejecución.",
        "Nada de lo publicado en este sitio web constituye asesoramiento de inversión personalizado, una recomendación personal ni una oferta o solicitud de compra o venta de ningún instrumento financiero. El contenido es comentario general de mercado y material educativo, y no tiene en cuenta su situación financiera, sus objetivos ni sus necesidades.",
        "Las cuentas gestionadas operan dentro de la propia cuenta del cliente en el bróker, bajo su estructura MAM o PAMM y su marco regulatorio. NUUK dispone únicamente de permiso de negociación y nunca asume la custodia de los fondos de los clientes. Las comisiones, los periodos de permanencia y los mandatos de riesgo se establecen en un acuerdo escrito antes de que comience cualquier operativa.",
        "NUUK Quant opera desde el Dubai International Financial Centre, Dubái, Emiratos Árabes Unidos. Los servicios se ofrecen únicamente donde lo permitan la legislación y la regulación aplicables; la disponibilidad depende de su país de residencia. Nada de lo publicado en este sitio web está dirigido a ninguna persona en una jurisdicción donde dicha distribución sea contraria a la legislación local.",
      ],
    },
    "ib-disclosure": {
      title: "Declaración de introductor de negocio (IB)",
      body: [],
    },
    privacy: {
      title: "Política de privacidad",
      body: [
        "Esta política explica qué datos personales recopila NUUK Quant (\"NUUK\", \"nosotros\") a través de nuukquant.com, con qué finalidad y qué derechos tiene usted. Última actualización: 8 de septiembre de 2026.",
        "Datos que usted nos facilita. Cuando nos contacta por correo electrónico, WhatsApp o el formulario de consulta, recibimos los datos que nos envía: nombre, dirección de correo electrónico, número de teléfono y el contenido de su mensaje. El formulario de consulta abre su propio cliente de correo; nada de lo que escribe se almacena en este sitio web.",
        "Datos recopilados automáticamente. Utilizamos Google Analytics 4 con anonimización de IP para entender cómo se usa el sitio: páginas vistas, ubicación aproximada, tipo de dispositivo y qué botones se pulsan (por ejemplo, un enlace de bróker o un plan). Estos datos están agregados y no le identifican por su nombre. Puede bloquearlos mediante una configuración del navegador o un bloqueador de anuncios.",
        "Cookies y analítica de visitantes. Google Analytics puede instalar cookies para distinguir sesiones. Apollo.io registra las visitas a las páginas y, cuando la visita procede de una red corporativa, puede identificar la empresa detrás de la dirección IP; además enriquece las direcciones de correo profesionales introducidas en nuestros formularios con datos de empresa disponibles públicamente. Ambos pueden instalar cookies. Los sitios de terceros que abra desde nuestros enlaces (brókeres, WhatsApp, redes sociales) aplican sus propias políticas. Las cotizaciones en directo de este sitio son widgets de TradingView incrustados, que se cargan desde los servidores de TradingView y pueden instalar sus propias cookies según la política de privacidad de TradingView. Puede bloquear todo esto con una extensión del navegador o desactivando los scripts de terceros; el sitio funciona sin ellos.",
        "Por qué tratamos los datos. Para responder a su consulta, para prestar los servicios que ha solicitado (cuentas gestionadas, señales, formación), para cumplir obligaciones legales y regulatorias, y para mejorar el sitio web. La base legal es su consentimiento, la ejecución de un acuerdo con usted o nuestro interés legítimo en gestionar el negocio.",
        "Cesión de datos. No vendemos datos personales. Solo los compartimos con los proveedores de servicios necesarios para operar el sitio web y las comunicaciones (alojamiento, correo electrónico, analítica), con el bróker cuando usted nos pide que le presentemos, y con las autoridades cuando la ley lo exija.",
        "Conservación y seguridad. Los datos de las consultas se conservan durante el tiempo necesario para atender la solicitud y hasta cinco años cuando se establece una relación comercial, de acuerdo con las obligaciones regulatorias de conservación de registros. Los datos se almacenan en sistemas con control de acceso.",
        "Sus derechos. Puede solicitar qué datos tenemos sobre usted, pedir que se corrijan o eliminen, oponerse al tratamiento o retirar su consentimiento en cualquier momento escribiendo a info@nuukquant.com. Si reside en la UE, el Reino Unido o el DIFC, también tiene derecho a presentar una reclamación ante su autoridad de protección de datos.",
      ],
    },
    terms: {
      title: "Términos de uso",
      body: [
        "Estos términos regulan su uso de nuukquant.com, operado por NUUK Quant, Dubai International Financial Centre, Dubái, Emiratos Árabes Unidos. Al utilizar el sitio web, usted los acepta. Última actualización: 8 de septiembre de 2026.",
        "Solo información. El contenido de este sitio web es comentario general de mercado y material educativo. No constituye asesoramiento de inversión personalizado, una recomendación personal ni una oferta o solicitud de compra o venta de ningún instrumento financiero. Usted es responsable de sus propias decisiones de inversión y de confirmar que cualquier servicio está disponible para usted en su país de residencia.",
        "Sin garantía. Operar implica un riesgo sustancial; consulte la advertencia de riesgo. Los resultados pasados, los backtests y los resultados en paper trading no garantizan resultados futuros. Las cifras marcadas como pendientes o ilustrativas no son datos de rendimiento verificados.",
        "Servicios. Las cuentas gestionadas, las suscripciones a señales, la mentoría y los eventos se prestan bajo acuerdos escritos separados que establecen comisiones, alcance, cancelación y límites de riesgo. Dichos acuerdos prevalecen sobre este sitio web en caso de discrepancia.",
        "Enlaces de terceros. Los enlaces a brókeres, plataformas y redes sociales conducen a sitios que no controlamos. No somos responsables del contenido, la disponibilidad ni las condiciones de los sitios de terceros.",
        "Propiedad intelectual. Los textos, gráficos, logotipos, gráficos de datos y descripciones de sistemas de este sitio web pertenecen a NUUK o a sus licenciantes. Puede ver e imprimir páginas para uso personal; cualquier otra reproducción requiere autorización por escrito. Los nombres y logotipos de los brókeres son propiedad de sus respectivos titulares y se utilizan únicamente con fines identificativos.",
        "Responsabilidad. El sitio web se ofrece tal cual. En la medida en que lo permita la ley, NUUK excluye toda responsabilidad por cualquier pérdida derivada del uso del sitio web o de la confianza en su contenido, incluidas pérdidas de trading, pérdida de datos o interrupción del servicio.",
        "Modificaciones y ley aplicable. Podemos modificar estos términos y el sitio web en cualquier momento; la versión vigente se publica siempre aquí. Estos términos se rigen por la legislación aplicable en el Dubai International Financial Centre, y las controversias quedan sometidas a la jurisdicción de los Tribunales del DIFC.",
      ],
    },
  },

  ctaBand: {
    title: "¿Listo para empezar?",
    body: "Cuatro pasos desde la primera llamada hasta la primera operación. La mayoría de las personas está operativa en una semana.",
    steps: [
      { title: "Reserve una llamada", body: "30 minutos para decidir qué servicio encaja: señales, cuenta gestionada o formación." },
      { title: "Abra una cuenta en un bróker", body: "A su propio nombre. La verificación tarda unos 10 minutos con documento de identidad y comprobante de domicilio." },
      {"title": "Financiar y conectar", "body": "Financie su cuenta de bróker: desde 250 USD para las señales de WhatsApp, 1.000 USD para NUUK AI - Premium y 250.000 USD para un mandato dedicado. Conéctela a la estructura elegida."},
      { title: "Empiece a operar", body: "Siga el plan, revise los resultados cada mes y nunca abra una operación que no pueda explicar." },
    ],
    cta: { label: "Reservar una llamada" },
  },

  footer: {
    copyright: "Todos los derechos reservados.",
    riskTitle: "Advertencia de riesgo",
    legal1:
      "es el nombre comercial de NUUK Quant, empresa de trading basada en IA y gestión de carteras con sede en el Dubai International Financial Centre. Los servicios se ofrecen a clientes profesionales e institucionales donde esté permitido; la disponibilidad depende de su jurisdicción y de la regulación aplicable.",
    legal2:
      "El contenido de este sitio web es comentario general de mercado y material educativo. No constituye asesoramiento de inversión personalizado ni una oferta o solicitud de compra o venta de ningún instrumento financiero o servicio.",
    ib: "Las cuentas de bróker se abren a su propio nombre y se aplican las comisiones y condiciones del propio bróker. NUUK nunca custodia el dinero de los clientes.",
    risk: "Operar implica un riesgo sustancial y puede generar pérdidas superiores a su inversión inicial. Los resultados pasados no garantizan resultados futuros.",
  },

  systems: [
    {
      assetClass: "XAU/USD, XAG/USD",
      timeframe: "H1 / H4",
      method: "Niveles de Gann",
      riskProfile: "Moderado",
      summary: "Sistema para oro y plata basado en niveles precio-tiempo de Gann.",
      stats: [
        {
          "label": "En vivo desde",
          "value": "2026"
        },
        {
          "label": "Instrumentos",
          "value": "XAU/USD, XAG/USD"
        },
        {
          "label": "Marco temporal",
          "value": "H1 / H4"
        }
      ],
    },
    {
      perf: "+10,9% anual, backtest",
      assetClass: "Oro, plata, índices de EE. UU. y la UE",
      timeframe: "D1",
      method: "Momentum de series temporales + Donchian + cruce de medias móviles, en conjunto (ensemble)",
      riskProfile: "Moderado",
      summary: "Conjunto (ensemble) diario de seguimiento de tendencia sobre CFD de metales e índices. Probado con walk-forward de 2010 a 2026 con swap y comisiones incluidos; operando como cartera modelo desde julio de 2026.",
      stats: [
        { label: "Prueba en adelante desde" },
        { label: "Sharpe del backtest" },
        { label: "Drawdown máx. del backtest" },
      ],
    },
    {
      assetClass: "US500, NAS100, US30, GER40, XAU, XAG",
      timeframe: "M15 / H1",
      method: "Ruptura del rango de apertura + Donchian horario",
      riskProfile: "Alto",
      summary: "Ruptura del rango de apertura de 15 minutos en CFD sobre índices y Donchian de 1 hora en metales, ejecutado a través del NUUK SignalBridge hacia MT4. En demo desde julio de 2026; pasa a vivo solo tras superar un filtro de 200 operaciones en paper.",
      stats: [
        { label: "Estado", value: "Demo, filtro en paper" },
        { label: "Lanzamiento previsto", value: "Tras 200 operaciones en paper" },
        { label: "Bróker", value: "Cartera modelo · MT4/MT5" },
      ],
    },
  ],

  performance: [
    {
      "name": "GANN NUUK Trader AI — mesa XAUUSD y XAGUSD",
      "source": "Cartera modelo · informe detallado MT4, 3 nov 2026",
      "updated": "2026-11-03",
      "stats": [
        {
          "label": "Periodo",
          "value": "2 sep – 3 nov 2026 · 39 días de negociación",
          "tone": "neutral"
        },
        {
          "label": "Rentabilidad del periodo",
          "value": "+142,3 %",
          "tone": "up"
        },
        {
          "label": "Factor de beneficio",
          "value": "2,44",
          "tone": "neutral"
        },
        {
          "label": "Tasa de acierto",
          "value": "73,3 % (5.784 de 7.891)",
          "tone": "neutral"
        },
        {
          "label": "Máxima caída",
          "value": "13,61 %",
          "tone": "neutral"
        },
        {
          "label": "Días verdes / rojos",
          "value": "39 / 0",
          "tone": "neutral"
        }
      ]
    },
    {
      name: "Cartera personal",
      source: "Extracto del bróker",
      updated: "Mensual",
      stats: [
        {
          "label": "Desde",
          "value": "2025"
        },
        {
          "label": "Instrumentos",
          "value": "Acciones, ETF, divisas"
        },
        {
          "label": "Enfoque",
          "value": "Cartera núcleo a largo plazo"
        },
        {
          "label": "Informes",
          "value": "Extracto mensual"
        }
      ],
    },
    {
      name: "Estrategia gestionada — GANN Algo",
      source: "Extracto MAM",
      updated: "Mensual",
      stats: [
        {
          "label": "Desde",
          "value": "2026"
        },
        {
          "label": "Cuentas",
          "value": "300+"
        },
        {
          "label": "Estructura",
          "value": "MAM / PAMM"
        },
        {
          "label": "Comisión de éxito",
          "value": "25% sobre HWM"
        }
      ],
    },
    {
      name: "Registro de señales — ideas cerradas",
      source: "Grupo de WhatsApp",
      updated: "Mensual",
      stats: [
        {
          "label": "Tasa de acierto",
          "value": "87%"
        },
        {
          "label": "Ideas al mes",
          "value": "100+"
        },
        {
          "label": "Canal",
          "value": "WhatsApp"
        },
        {
          "label": "Registro",
          "value": "Mensual"
        }
      ],
    },
    {
      "name": "NUUK Trend Ensemble — backtest walk-forward",
      "chartLabel": "+10,9% anual, backtest",
      "source": "Backtest 2010–2026, neto de swaps y comisiones",
      "updated": "2026-07",
      "stats": [
        {
          "label": "Rentabilidad neta, anualizada",
          "value": "+10.9%"
        },
        {
          "label": "Drawdown máximo",
          "value": "6.7%"
        },
        {
          "label": "Ratio de Sharpe",
          "value": "1.36"
        },
        {
          "label": "Trading en papel desde",
          "value": "2026-07"
        }
      ]
    },
  ],
};
