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
    title: "Ahmet S. Öztürk — Economista, inversor y fundador de NUUK",
    description:
      "Economista e inversor con sede en el DIFC, Dubái. Sistemas de trading basados en IA, cuentas gestionadas, alianzas con brókeres, señales de mercado y formación para inversores.",
  },
  brand: {
    role: "Economista · Inversor · Fundador",
    office: "Dubai International Financial Centre (DIFC), Dubái, EAU",
  },
  ui: {
    contactToOpen: "Contáctenos para abrir una cuenta",
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
    test: "En pruebas",
    paused: "En pausa",
    soon: "Próximamente",
    pending: "Informe pendiente",
    verificationInProgress: "Informe en preparación",
    updated: "Actualizado",
    since: "Desde",
    source: "Fuente",
    openAccount: "Abrir cuenta",
    compare: "Comparar brókeres",
    subscribe: "Suscribirse",
    register: "Inscribirse",
    requestDemo: "Solicitar una demo",
    viewAll: "Ver todo",
    readMore: "Leer más",
    fill: "",
    telegram: "Telegram",
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
        { label: "Brókeres asociados" },
        { label: "Señales e informes" },
        { label: "Formación" },
      ],
    },
    { label: "Brókeres" },
    { label: "Historial verificado" },
    { label: "Análisis", items: [{ label: "Notas de mercado" }, { label: "Calendario económico" }] },
    {
      label: "Sobre mí",
      items: [
        { label: "Mi historia" },
        { label: "Cómo ganamos dinero" },
        { label: "Contacto" },
        { label: "Advertencia de riesgo" },
        { label: "Declaración de IB" },
      ],
    },
  ],
  legalLinks: [
    { label: "Advertencia de riesgo" },
    { label: "Declaración de IB" },
    { label: "Privacidad" },
    { label: "Términos" },
  ],

  home: {
    hero: {
      visualTag: "Trading algorítmico · Gestión de carteras",
      visualAlt: "Monoplaza de Fórmula 1 con los colores de NUUK en un estudio oscuro",
      kicker: "Economista · Inversor · Fundador de NUUK",
      title: "Los mercados, leídos con disciplina.",
      lead:
        "Diseño sistemas de trading basados en IA, opero mi propio capital, gestiono cuentas de inversores y enseño a operar de forma autónoma. Cada cifra de este sitio indica su fuente y su método.",
      primary: { label: "Elegir un bróker" },
      secondary: { label: "Reservar una llamada" },
      portraitAlt: "Ahmet S. Öztürk",
      trustLine: ["Brókeres asociados regulados por la FCA, ASIC, CySEC y DFSA", "Capital propio en cada sistema", "Con sede en el DIFC, Dubái"],
      trust: [
        { label: "años en los mercados, desde una mesa de FX en Londres en 2009" },
        {"label": "variantes de estrategia sometidas a backtest desde 2026; tres en producción, documentadas en la página de trading con IA"},
        { label: "inversores formados en webinars y seminarios" },
        { label: "alianzas con brókeres, seis de ellas publicadas en este sitio" },
      ],
      pressTitle: "Brókers asociados",
    },
    markets: {
      "kicker": "Precios en vivo",
      "title": "Los mercados, ahora mismo",
      "lead": "Cotizaciones en directo desde TradingView: forex, materias primas, índices, cripto y las acciones que sigo. Haga clic en una fila para abrir el gráfico.",
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
      title: "Su cuenta. Mi ejecución. Límites de riesgo por escrito.",
      body: "El capital nunca sale de su nombre. Usted abre una cuenta en un bróker asociado, yo recibo únicamente permiso de negociación y un mandato escrito limita la exposición y la pérdida diaria.",
      figureLabel: "cuentas gestionadas, todas ellas dentro de la propia cuenta de bróker del cliente. La custodia nunca se transfiere.",
      cta: { label: "Cómo funciona" },
    },
    postsLead: "Macro, FX, materias primas, índices, cripto e IA aplicada al trading. Escrito para leerse en cinco minutos.",
    pillarsTitle: "Cinco formas de trabajar juntos",
    pillarsLead: "Una persona, cinco puertas. Elija la que encaje con el punto en el que se encuentra hoy.",
    pillars: [
      { title: "Sistemas de trading con IA", body: "Algoritmos propios programados, probados y ejecutados en vivo en FX, índices, materias primas y activos digitales.", who: "Para asignadores de capital e inversores técnicos" },
      { title: "Historial", body: "Los resultados de mi cartera y de los sistemas, netos de costes, con la fuente y el método de cada cifra.", who: "Para quien esté decidiendo si confiar en mí" },
      { title: "Cuentas gestionadas", body: "Su capital permanece en su propia cuenta de bróker. Yo la opero bajo límites de riesgo acordados y una comisión de éxito.", who: "Para inversores que prefieren delegar la ejecución" },
      { title: "Brókeres asociados", body: "Comparativa independiente de los brókeres con los que trabajo, con una guía paso a paso para abrir cuenta en cada uno.", who: "Para traders autónomos que eligen bróker" },
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
      kicker: "Brókeres asociados",
      title: "Dónde opero, y por qué",
      lead: "Solo publico brókeres que uso o que he auditado personalmente. Cada tarjeta muestra regulación, spreads reales y condiciones de depósito.",
      cta: { label: "Comparar todos los brókeres" },
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
      lead: "Instrumento, dirección, entrada, stop, objetivo y el porqué. Entregadas por Telegram y por correo electrónico.",
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
    metaTitle: "Sobre Ahmet S. Öztürk",
    metaDescription: "Economista, inversor y fundador de NUUK. Diecisiete años en los mercados de FX y CFD, desde una mesa de negociación en Londres hasta una empresa de trading basada en IA en Dubái.",
    kicker: "Sobre mí",
    title: "Economista primero, trader después, ingeniero por necesidad.",
    lead: "Empecé en una mesa de intermediación de FX en Londres en 2009 y pasé los siete años siguientes dentro de brókeres en Londres y Estambul, terminando como Head of International FX en IKON Finance. En 2016 fundé İşlem Odası, un negocio de introductor de negocio (IB) y cobertura de clientes que creció hasta más de 700 clientes y más de 26 millones de USD en negocio de clientes. En 2025 me trasladé a Dubái y fundé NUUK: una empresa de trading diseñada con IA que construye y ejecuta estrategias sistemáticas en FX, oro, índices y activos digitales, y comparte el método a través de cuentas gestionadas, señales y formación.",
    portraitAlt: "Ahmet S. Öztürk",
    timelineTitle: "Trayectoria",
    timeline: [
      { title: "Seneca College, Toronto", body: "Administración de Negocios Internacionales (co-op). Donde nació el hábito de leerlo todo en cifras." },
      { title: "FXCM, Londres", body: "Primer puesto en una mesa de intermediación de FX. Ejecución, liquidez y riesgo de cliente, aprendidos desde dentro." },
      { title: "Tacirler y ALB, Estambul", body: "Puestos de especialista en FX en dos brókeres turcos mientras el mercado local se abría al trading apalancado." },
      { title: "IKON Finance", body: "Head of International FX. Hizo crecer la cartera de clientes internacionales un 27%." },
      { title: "İşlem Odası, Estambul", body: "Fundé un negocio de introductor de negocio y cobertura de clientes: más de 700 clientes, más de 26 M USD en negocio de clientes y 2,5 M USD de ingresos acumulados de partners." },
      { title: "NUUK, Dubái", body: "Fundé NUUK en el Dubai International Financial Centre: sistemas de trading basados en IA, cuentas gestionadas, alianzas con brókeres, señales y formación." },
    ],
    principlesTitle: "Cómo trabajo",
    principles: [
      { title: "Evidencia antes que opinión", body: "Cada cifra de este sitio indica su fuente y su método. Lo que no puede explicarse no se muestra." },
      { title: "Riesgo antes que rentabilidad", body: "El tamaño de la posición, los límites de drawdown y las reglas de stop se deciden antes de cualquier operación." },
      { title: "Su dinero sigue siendo suyo", body: "Las cuentas gestionadas operan dentro de su propia cuenta de bróker. Nunca asumo la custodia." },
      { title: "Enseñar el método", body: "El objetivo de la formación es que usted deje de necesitarme." },
    ],
    focusTitle: "Mercados que cubro",
    focus: ["BIST", "NYSE", "Forex", "Cripto", "Fondos", "Materias primas", "Inmobiliario", "Patrimonio tradicional"],
    speakingTitle: "Dónde publico",
    speaking: [
      "Telegram · @NUUKQuant: notas diarias de mercado, ideas de trading y el informe mensual de sistemas",
      "X · @AhmetSTurk: comentario de mercado e hilos de investigación",
      "LinkedIn · NUUK.: novedades de la empresa e investigación en profundidad",
      "Instagram · @ahmetsturk: detrás de la mesa de operaciones",
    ],
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
      { title: "Riesgo", body: "Dimensionamiento de posiciones ajustado a la volatilidad, límites estrictos de pérdida diaria y cortacircuitos que cierran todas las posiciones." },
      { title: "Ejecución", body: "APIs de bróker y FIX cuando están disponibles; deslizamiento (slippage) y calidad de ejecución monitorizados por mercado." },
      { title: "Revisión", body: "Revisión semanal del rendimiento real frente al esperado. Los sistemas que se desvían se pausan, no se ajustan sobre la marcha." },
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      { q: "¿Puedo ejecutar un sistema en mi propia cuenta?", a: "Sí. Según el bróker, puede hacer copy trading, unirse a una estructura MAM/PAMM en Tickmill, Saxo Bank o Midas, o seguir el canal de señales y ejecutar usted mismo. En todos los casos la cuenta permanece a su nombre." },
      { q: "¿Cuál es el capital mínimo?", a: "1.000 USD para copy trading o señales. Las cuentas gestionadas MAM/PAMM parten de la asignación mínima indicada en la página de cuentas gestionadas." },
      { q: "¿Comparte el código?", a: "No. El código sigue siendo propietario. Publico la metodología, las reglas de riesgo y los resultados, cada uno con su fuente." },
    ],
  },

  trackRecord: {
    metaTitle: "Historial verificado",
    metaDescription: "Rendimiento de la cartera propia de Ahmet S. Öztürk y de los sistemas NUUK, con la fuente y el método de cada cifra.",
    kicker: "Historial verificado",
    title: "Cada cifra, con su fuente",
    lead: "Las cuentas se mantienen en brókeres asociados. Cada cifra indica de dónde procede, cuenta real, paper trading o backtest walk-forward, y cómo se calcula. El rendimiento pasado no garantiza resultados futuros.",
    disclaimer: "Los resultados pasados no garantizan resultados futuros. Las cifras son netas de costes de negociación y brutas de cualquier comisión de éxito, salvo que se indique lo contrario.",
    methodologyTitle: "Cómo leer estas cifras",
    methodology: [
      { title: "Fuente", body: "Cuenta real, paper trading o backtest. La etiqueta aparece junto a cada cifra y el método de cálculo se describe en esta página." },
      { title: "Drawdown máximo", body: "Mayor caída desde un máximo hasta un mínimo en el capital de la cuenta, incluidas las posiciones abiertas." },
      { title: "Factor de beneficio", body: "Beneficio bruto dividido entre pérdida bruta. Por encima de 1,0 significa que la estrategia ganó dinero en el periodo." },
    ],
    pending: "Las cifras de cuentas reales se publican a partir de los registros de fin de mes de NUUK. El 87% de las señales procede del registro interno.",
  },

  managed: {
    metaTitle: "Cuentas gestionadas",
    metaDescription: "Cómo funcionan las cuentas gestionadas: su capital permanece en su propia cuenta de bróker, operado bajo límites de riesgo acordados.",
    kicker: "Cuentas gestionadas",
    title: "Su cuenta. Mi ejecución. Límites acordados.",
    lead: "El capital nunca sale de su nombre. Usted abre una cuenta en un bróker asociado, la conecta a la estructura gestionada y yo la opero dentro de un mandato de riesgo por escrito.",
    cta: { label: "Solicitar una llamada introductoria" },
    howTitle: "Cómo funciona",
    how: [
      { title: "Llamada de descubrimiento", body: "Hablamos de objetivos, horizonte, necesidades de liquidez y cuánto drawdown puede tolerar realmente." },
      { title: "Apertura de la cuenta", body: "Usted abre una cuenta en un bróker asociado a su propio nombre y la financia. Yo recibo únicamente permiso de negociación, nunca derechos de retiro." },
      { title: "Mandato de riesgo", body: "Un mandato escrito fija la exposición máxima, el límite de pérdida diaria y los instrumentos. El sistema no puede superarlo." },
      { title: "Informes", body: "Usted ve cada operación en tiempo real en su propia cuenta, además de un informe mensual y una llamada de revisión trimestral." },
    ],
    tiersTitle: "Dos formas de asignar",
    tiers: [
      {
        "name": "Pool MAM",
        "tagline": "Los sistemas, dentro de su propia cuenta",
        "minimum": "1.000 USD",
        "managementFee": "Ninguna",
        "performanceFee": "25% de los beneficios por encima del high-water mark",
        "lockup": "30 días; después, retiro en cualquier momento",
        "structure": "Pool MAM / copy trading en Tickmill o Darwinex",
        "forWhom": "Inversores autónomos que quieren los sistemas sin operarlos"
      },
      {
        "name": "Cuenta dedicada",
        "tagline": "Su propio mandato, sus propios límites de riesgo",
        "minimum": "250.000 USD",
        "managementFee": "1.000 USD al mes (cerca del 4,8% anual en el mínimo; proporcionalmente menos por encima)",
        "performanceFee": "25% de los beneficios por encima del high-water mark",
        "lockup": "Preaviso de 30 días",
        "structure": "PAMM o cuenta gestionada por separado en Saxo Bank, Tickmill o Midas",
        "forWhom": "Family offices, tesorerías corporativas e inversores profesionales"
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
    compliance: "NUUK Quant opera desde el Dubai International Financial Centre. Las cuentas gestionadas funcionan a través de la estructura MAM/PAMM del bróker asociado y bajo su marco regulatorio: NUUK solo tiene permiso de trading, nunca custodia ni derechos de retiro. Las más de 300 cuentas gestionadas hoy están en el pool MAM; los mandatos dedicados se abren individualmente.",
  },

  brokers: {
    metaTitle: "Brókeres asociados",
    metaDescription: "Comparativa independiente de brókeres asociados: regulación, spreads, métodos de depósito, plataformas y apertura de cuenta paso a paso.",
    kicker: "Brókeres asociados",
    title: "Los brókeres con los que trabajo",
    lead: "Solo refiero clientes a brókeres con los que opero o que he auditado. Seis socios a día de hoy: Pepperstone, Tickmill, Saxo Bank, Capital.com, Midas y Darwinex. Cada tarjeta muestra quién los regula, qué cobran realmente y con qué rapidez se mueve el dinero.",
    disclosure: "Los enlaces de esta página son enlaces de referido. Si abre y financia una cuenta a través de ellos, recibo una comisión del bróker. Esto no modifica los spreads ni las comisiones que usted paga.",
    compareTitle: "Comparativa",
    partner: {
      "kicker": "Programa de socios",
      "title": "Para introductores y formadores",
      "body": "Si ya lleva clientes a estos brókers, NUUK puede actuar como su introductor principal: un reparto de rebates transparente pagado cada mes, apoyo en la apertura de cuenta y el KYC en turco, árabe e inglés, y el mismo material comparativo de brókers para su propia audiencia. Las condiciones de subsocio se acuerdan por escrito para cada bróker.",
      "points": [
        "Reparto de rebates transparente, pagado mensualmente",
        "Apoyo en apertura de cuenta y KYC en tres idiomas",
        "Material comparativo de brókers reutilizable"
      ],
      "cta": {
        "label": "Hablar de una alianza"
      }
    },
    cardLabels: {
      contactNote: "Las cuentas en {broker} se abren a través de NUUK en virtud de nuestro acuerdo de colaboración. Contáctenos y le acompañaremos en la apertura; los pasos siguientes muestran lo que le pedirá el bróker.",
      regulator: "Regulador",
      licence: "Licencia",
      founded: "Fundado",
      minDeposit: "Depósito mínimo",
      platforms: "Plataformas",
      spreads: "Spreads típicos",
      commission: "Comisión",
      leverage: "Apalancamiento máximo",
      funding: "Métodos de depósito",
      withdrawal: "Plazo de retiro",
      islamic: "Cuenta islámica",
      languages: "Atención al cliente",
      bestFor: "Ideal para",
      pros: "Puntos fuertes",
      cons: "A tener en cuenta",
      steps: "Cómo abrir una cuenta",
      yes: "Sí",
      no: "No",
      profile: "Perfil completo",
      allBrokers: "Todos los brókeres",
      atAGlance: "De un vistazo",
      conditions: "Condiciones de negociación",
      about: "Sobre el bróker",
      website: "Sitio web oficial",
      faq: "Preguntas frecuentes",
      openWith: "Cinco pasos hasta una cuenta financiada en",
      verifyNote: "Condiciones verificadas en el sitio web del bróker el 8 de septiembre de 2026. Compruebe siempre las cifras vigentes antes de depositar.",
    },
    list: [
      {
        tagline: "Spreads raw desde 0,0 pips, cinco plataformas, nueve entidades con licencia",
        regulator: "FCA · ASIC · CySEC · DFSA · BaFin · SCB · CMA",
        licence: "DFSA F004356, Pepperstone Financial Services (DIFC) Ltd · entidades del grupo bajo FCA, ASIC, CySEC, BaFin, SCB y CMA",
        founded: "2010, Melbourne",
        minDeposit: "$0 · $10 con tarjeta",
        platforms: ["Plataforma Pepperstone", "TradingView", "MT5", "MT4", "cTrader"],
        spreads: [
          { value: "0,0 Razor · 1,0 Standard" },
          { value: "desde 0,08 Razor" },
          { value: "desde 0,4" },
        ],
        commission: "Razor: $3,50 por lote y lado en FX y oro · Standard: ninguna (excepto CFD sobre acciones)",
        leverage: "1:30 minorista (FCA, ASIC, CySEC, DFSA) · hasta 1:500 SCB · 1:1000 SCB Pro",
        funding: ["Visa / Mastercard", "Apple Pay", "Google Pay", "PayPal", "Skrill", "Neteller", "Transferencia bancaria", "Cripto"],
        withdrawalTime: "Hasta 1 día hábil",
        languages: "24/5 multilingüe, 18 h los fines de semana · sin mesa en turco",
        bestFor: "Traders activos de FX y oro con spreads raw; traders algorítmicos en MT5, cTrader o TradingView",
        pros: [
          "Cuenta Razor: spreads desde 0,0 pips con una comisión fija de $3,50 por lote y lado",
          "99,59% de tasa de ejecución sin intervención de mesa de negociación",
          "Más de 1.350 mercados: FX, índices, materias primas, acciones, ETF y CFD sobre cripto",
          "Depósitos gratuitos; retiros con tarjeta, monedero electrónico y cripto procesados en un día hábil",
          "Regulado en siete jurisdicciones, fondos de clientes segregados en bancos de primer nivel",
        ],
        cons: [
          "Apalancamiento minorista limitado a 1:30 en las entidades FCA, ASIC, CySEC y DFSA",
          "Los retiros por transferencia bancaria internacional cuestan $20 y pueden tardar hasta 7 días hábiles",
          "Solo CFD: nunca posee la acción o la moneda subyacente",
        ],
        steps: [
          "Abra el enlace de referido y haga clic en Join now. Regístrese con su correo electrónico y obtenga una demo gratuita.",
          "Responda las preguntas de idoneidad (unos 5 minutos).",
          "Verifique su identidad: documento de identidad oficial más comprobante de domicilio.",
          "Deposite desde $10 con tarjeta, Apple Pay, PayPal o monedero electrónico. La transferencia bancaria no tiene mínimo.",
          "Elija Razor o Standard y, a continuación, inicie sesión en MT5, cTrader, TradingView o la app de Pepperstone.",
        ],
        summary:
          "Fundado en Melbourne en 2010, Pepperstone es uno de los mayores brókeres de CFD por volumen: más de 900.000 cuentas, alrededor de 1 billón de dólares de volumen mensual negociado y nueve entidades con licencia bajo la FCA, ASIC, CySEC, DFSA, BaFin, SCB y CMA. Mantengo una cuenta Standard en la entidad de Dubái regulada por la DFSA y la uso para el trading discrecional de oro.",
        faq: [
          {
            q: "Razor o Standard: ¿qué cuenta debo elegir?",
            a: "Razor para FX y oro si opera de forma activa: spreads raw desde 0,0 pips más $3,50 por lote y lado. Standard si prefiere que todo vaya incluido en el spread: desde 1,0 pip en EUR/USD, sin comisión salvo en CFD sobre acciones. Ambas dan acceso a los mismos más de 1.350 mercados.",
          },
          {
            q: "¿Cuál es el depósito mínimo?",
            a: "No hay mínimo para abrir la cuenta. Los depósitos con tarjeta, Apple Pay, Google Pay, PayPal, Skrill y Neteller empiezan en $10; las transferencias bancarias nacionales no tienen mínimo. Los depósitos son gratuitos.",
          },
          {
            q: "¿Con qué rapidez se procesan los retiros?",
            a: "Tarjetas, monederos electrónicos y cripto se procesan en un día hábil y son gratuitos. Las transferencias bancarias internacionales cuestan $20 y pueden tardar hasta 7 días hábiles.",
          },
          {
            q: "¿Está regulado Pepperstone?",
            a: "Sí. Las entidades del grupo cuentan con licencia de la FCA (Reino Unido), ASIC (Australia), CySEC (Chipre), DFSA (Dubái), BaFin (Alemania), SCB (Bahamas) y CMA (Kenia). Los fondos de los clientes se mantienen en cuentas segregadas en bancos de primer nivel y los clientes minoristas cuentan con protección contra saldo negativo.",
          },
          {
            q: "¿Bajo qué entidad estará mi cuenta?",
            a: "A través de mi enlace se registra en Pepperstone Financial Services (DIFC) Limited, la entidad de Dubái regulada por la DFSA. El apalancamiento minorista está limitado a 1:30, el dinero de los clientes está segregado y los clientes minoristas cuentan con protección contra saldo negativo. Los clientes profesionales pueden solicitar un apalancamiento mayor.",
          },
          {
            q: "¿Un enlace de referido cambia mis comisiones?",
            a: "No. Los spreads y las comisiones son idénticos tanto si se registra directamente como a través de mi enlace. El bróker paga mi comisión con cargo a sus propios ingresos.",
          },
        ],
      },
      {
        tagline: "Precios raw desde 0,0 pips con $3 por lado, MT4/MT5 y TradingView",
        regulator: "FCA · CySEC · FSA Seychelles · FSCA",
        licence: "FCA 717270 · CySEC 278/15 · FSA SD008 · FSCA FSP 49464 · oficina de representación DFSA F007663",
        founded: "2014, Londres",
        minDeposit: "$100",
        platforms: ["MT4", "MT5", "TradingView", "Tickmill Trader", "App de Tickmill"],
        spreads: [{ value: "0,0 Raw · 1,6 Classic" }, { value: "desde 0,08 Raw" }, { value: "desde 0,39" }],
        commission: "Raw: $3 por lote y lado (MT4/MT5), $3,50 en TradingView · Classic: ninguna · índices y acciones: ninguna",
        leverage: "1:30 minorista (FCA, CySEC) · hasta 1:1000 bajo Tickmill Ltd (Seychelles) · profesional 1:500",
        funding: ["Transferencia bancaria", "Visa / Mastercard", "Skrill", "Neteller", "UnionPay", "Cripto"],
        withdrawalTime: "Procesado en 1 día hábil",
        languages: "Lun–vie 07:00–16:00 GMT, 14 idiomas · sin mesa en turco",
        bestFor: "Traders de FX y oro sensibles a los costes, scalpers y usuarios de EA que buscan precios raw con $3 por lado",
        pros: ["Cuenta Raw: spreads de 0,0 pips con $3 por lote y lado, n.º 1 en comisiones y costes según ForexBrokers.com 2021–2024", "Entidades FCA, CySEC, FSA Seychelles y FSCA; cobertura FSCS e ICF para clientes del Reino Unido y la UE", "Cuentas segregadas en bancos de primer nivel, protección contra saldo negativo y seguro de Lloyd's para saldos de $20k a $1M", "Mínimo de $100, sin comisiones de depósito ni retiro, gastos bancarios reembolsados en transferencias superiores a $5.000", "Todas las estrategias permitidas (scalping, cobertura, EA), VPS gratuito e integración con TradingView"],
        cons: ["Apalancamiento 1:1000 solo bajo la entidad de Seychelles; los clientes minoristas del Reino Unido y la UE están limitados a 1:30", "Los spreads de la cuenta Classic empiezan en 1,6 pips, amplios en comparación con Raw", "Sin sitio web ni mesa de soporte en turco; USD/TRY, EUR/TRY y GBP/TRY solo admiten cierres"],
        steps: ["Regístrese: introduzca nombre, país, tipo de cliente y correo electrónico en my.tickmill.com/sign-up para crear su Área de Cliente; si el campo Introducing Broker está vacío, introduzca el código IB IB82498200", "Verifique: inicie sesión en el Área de Cliente y suba un comprobante de identidad y otro de domicilio", "Cree la cuenta: una vez aprobados los documentos, abra una cuenta real eligiendo Classic, Raw o TradingView Raw, la divisa base (USD/EUR/GBP/ZAR) y el apalancamiento", "Deposite: seleccione un método de pago (transferencia bancaria, tarjeta, Skrill, Neteller, UnionPay, cripto) y financie desde $100; la mayoría de los métodos se acreditan al instante", "Opere: descargue MT4/MT5 o Tickmill Trader, o conecte TradingView con sus credenciales de cuenta y empiece a operar"],
        summary: "Tickmill Group fue fundado en 2014 por Ingmar e Illimar Mattus y tiene su sede en Londres, con entidades reguladas en el Reino Unido (FCA 717270), Chipre (CySEC 278/15), Seychelles (FSA SD008) y Sudáfrica (FSCA FSP 49464). Declara 1,3 millones de cuentas registradas, más de 900 millones de operaciones y alrededor de 350.000 millones de dólares de volumen mensual medio, y ha recibido más de 60 premios del sector. Aquí es donde ejecuto la cuenta paper de NUUK Trend Ensemble y la demo intradía, y es uno de los tres brókeres utilizados para las cuentas gestionadas MAM.",
        faq: [{ q: "¿Qué tipos de cuenta ofrece Tickmill?", a: "Tres cuentas de CFD: Classic (spreads desde 1,6 pips, sin comisión), Raw (spreads desde 0,0 pips, $3 por lote y lado, MT4/MT5) y TradingView Raw / Tickmill Trader (0,0 pips, $3,50 por lado). Todas empiezan en $100, permiten 0,01 lotes y cualquier estrategia, y pueden convertirse en cuentas sin swap. Tickmill UK también ofrece una cuenta de futuros ($1.000) y una cuenta multiactivo IBKR." }, { q: "¿Cuál es el depósito mínimo en Tickmill?", a: "$100 (o su equivalente en EUR/GBP) para todas las cuentas de CFD; las cuentas en ZAR tienen un mínimo inferior. El retiro mínimo es de $25. Tickmill no cobra comisiones de depósito ni de retiro y reembolsa los gastos bancarios en depósitos por transferencia superiores a $5.000." }, { q: "¿Cuánto tardan los retiros en Tickmill?", a: "Las solicitudes de retiro se procesan en un día hábil. La llegada depende del método: monederos electrónicos y cripto suelen ser instantáneos o tardar hasta 48 horas, tarjetas hasta 8 días hábiles, transferencias bancarias de 2 a 7 días hábiles. Los fondos vuelven primero al método de depósito original (los depósitos con tarjeta regresan a la tarjeta; los beneficios, por banco o monedero electrónico)." }, { q: "¿Está regulado Tickmill y están seguros los fondos de los clientes?", a: "Sí. Tickmill UK Ltd está autorizada por la FCA (717270), Tickmill Europe Ltd tiene licencia de la CySEC (278/15), Tickmill Ltd es un intermediario de valores de la FSA de Seychelles (SD008) y Tickmill South Africa tiene licencia de la FSCA (FSP 49464); Tickmill UK también opera una oficina de representación en la DFSA (F007663). El dinero de los clientes está segregado en bancos de primer nivel, se aplica protección contra saldo negativo, los clientes del Reino Unido tienen cobertura FSCS hasta £120.000, los clientes de la UE cobertura ICF hasta €20.000, y los saldos entre $20.000 y $1.000.000 están asegurados con Lloyd's." }, { q: "¿Qué apalancamiento ofrece Tickmill?", a: "Hasta 1:1000 en forex y metales bajo Tickmill Ltd (Seychelles) mediante apalancamiento dinámico, con 1:200 en las principales cripto, 1:100 en índices y 1:20 en acciones. Bajo Tickmill Europe los clientes minoristas obtienen un máximo de 1:30 y los clientes profesionales electivos hasta 1:500; los clientes minoristas de Tickmill UK también están limitados a 1:30." }],
      },
      {
        tagline: "Banco de inversión danés con más de 71.000 instrumentos en una sola cuenta",
        regulator: "FSA danesa · FCA · FINMA · MAS · ASIC · SFC · JFSA",
        licence: "Licencia bancaria 1149 de la FSA danesa (Saxo Bank A/S) · oficina de representación en el DIFC regulada por la DFSA",
        founded: "1992, Copenhague",
        minDeposit: "Ninguno (Classic) · $5.000 en el sitio de EAU",
        platforms: ["SaxoTraderGO", "SaxoTraderPRO", "SaxoInvestor", "TradingView", "OpenAPI / FIX"],
        spreads: [{ value: "desde 1,0 Classic · 0,7 VIP" }, { value: "desde 34 centavos" }, { value: "desde 0,7" }],
        commission: "CFD sobre FX e índices solo spread · acciones de EE. UU. 0,08% (mín. $1), 0,03% VIP · opciones desde $0,75, futuros desde $1",
        leverage: "1:30 minorista (límites tipo ESMA) · margen inferior para profesionales electivos",
        funding: ["Transferencia bancaria", "SEPA Instant", "Tarjeta (según el país)", "Wise / Revolut tras el primer depósito"],
        withdrawalTime: "Procesado el mismo día, de 1 a 5 días hábiles hasta su banco",
        languages: "24/5 por teléfono, chat y correo electrónico; oficina en Dubái · app en 23 idiomas, incluido el turco, sin mesa en turco",
        bestFor: "Inversores multiactivo que quieren custodia de nivel bancario más trading de FX y CFD con un único acceso",
        pros: ["Banco danés con licencia y estatus SIFI; efectivo cubierto hasta 100.000 EUR por la garantía de depósitos danesa", "Más de 71.000 instrumentos: más de 23.000 acciones en más de 50 bolsas, más de 8.200 ETF, 5.200 bonos, futuros, opciones y más de 185 pares de FX", "Precios escalonados por volumen: EUR/USD de 1,0 a 0,7 pips, acciones de EE. UU. de 0,08% a 0,03%, CFD sobre índices sin comisión", "Plataformas propias SaxoTraderGO/PRO y SaxoInvestor, además de OpenAPI, FIX y TradingView", "Sin comisiones de inactividad ni de plataforma; depósitos y retiros gratuitos por parte de Saxo"],
        cons: ["Comisión de custodia del 0,15% al 0,09% anual sobre acciones, ETF y bonos en la mayoría de las regiones", "Los niveles Platinum y VIP empiezan en 200.000 EUR y 1 M EUR; el sitio de EAU pide $5.000 para abrir una cuenta Classic", "Sin cuenta sin swap; la presencia en Dubái es una oficina de representación, por lo que los clientes de EAU contratan con Saxo Bank A/S en Dinamarca"],
        steps: ["Cree su cuenta en línea en home.saxo/accounts (mayores de 18 años; documento nacional de identidad y número fiscal, pasaporte o DNI, selfie; comprobante de domicilio si se solicita)", "Verifíquese: la mayoría de las solicitudes se aprueban digitalmente en minutos; en caso contrario, hasta 2 días hábiles", "Inicie sesión en SaxoTraderGO o SaxoInvestor y financie la cuenta: el primer depósito debe proceder de una cuenta bancaria a su nombre en su país de residencia", "Deposite el importe del nivel en un plazo de 30 días si desea precios Platinum (200.000 EUR o más) o VIP (1 M EUR o más)", "Haga su primera operación: dispone de una demo de 20 días con 100.000 USD de fondos simulados para practicar primero"],
        summary: "Saxo Bank A/S es un banco con sede en Copenhague, con licencia de la FSA danesa (licencia 1149), designado entidad de importancia sistémica en 2023 y, desde marzo de 2026, propiedad mayoritaria del grupo J. Safra Sarasin. Fundado en 1992, atiende a más de 1,5 millones de clientes en más de 180 países con más de 150.000 millones de EUR en activos de clientes. En EAU opera una oficina de representación regulada por la DFSA; los contratos de cliente se formalizan con Saxo Bank A/S en Dinamarca. Aquí mantengo mi cartera multiactivo, y es uno de los tres brókeres utilizados para las cuentas gestionadas.",
        faq: [{ q: "¿Qué son los niveles Classic, Platinum y VIP y cómo accedo a ellos?", a: "Classic es el nivel por defecto. Platinum requiere un depósito de 200.000 EUR o más (250.000 USD o más en el sitio de EAU) o un volumen de negociación determinado; VIP requiere 1.000.000 EUR o más (1.250.000 USD o más) o volumen. Los niveles superiores obtienen spreads y comisiones más bajos y soporte prioritario; Saxo Elite está reservado a clientes con más de aproximadamente 5 millones de EUR en activos." }, { q: "¿Hay depósito mínimo?", a: "El sitio internacional no indica un requisito mínimo de financiación para una cuenta Classic, pero el sitio de EAU/MENA establece un mínimo de 5.000 USD. Los depósitos de nivel deben realizarse dentro de los primeros 30 días para acceder a Platinum o VIP." }, { q: "¿Qué comisiones cobra Saxo además de spreads y comisiones de negociación?", a: "Una comisión de custodia del 0,15% (Classic), 0,12% (Platinum) o 0,09% (VIP) anual sobre acciones, ETF/ETC y bonos en la mayoría de las regiones (más IVA para residentes en la UE), conversión de divisa de hasta el 0,25%, recargos en el rollover de FX del 0,50–0,75%, y ninguna comisión de inactividad, plataforma, depósito o retiro." }, { q: "¿Quién regula a Saxo y es un banco de verdad?", a: "Saxo Bank A/S es un banco danés con licencia completa supervisado por la FSA danesa (licencia n.º 1149) y clasificado como SIFI. Las entidades del grupo están reguladas por la FCA, FINMA, MAS, ASIC, SFC y JFSA. En Dubái, Saxo Bank A/S opera una oficina de representación regulada por la DFSA; la antigua licencia de Saxo Bank (Dubai) Ltd (F001014) fue retirada en 2017." }, { q: "¿Qué puedo negociar?", a: "Más de 71.000 instrumentos: más de 23.000 acciones en más de 50 bolsas, más de 8.200 ETF, 5.200 bonos, fondos de inversión, más de 185 pares de FX, opciones sobre FX, CFD sobre índices, acciones y materias primas, más de 250 futuros, más de 3.100 opciones cotizadas y FX/ETP de cripto." }],
      },
      {
        tagline: "CFD sin comisiones con TradingView, MT4/MT5 y más de 5.500 mercados",
        regulator: "FCA · CySEC · ASIC · SCB · SCA (EAU)",
        licence: "FCA 793714 · CySEC 319/17 · ASIC AFSL 513393 · SCB SIA-F245 · EAU 20200000176 (Capital Com MENA, Dubái)",
        founded: "2016, Londres",
        minDeposit: "$20 con tarjeta · €50 por transferencia",
        platforms: ["Web y app de Capital.com", "TradingView", "MT4", "MT5", "API"],
        spreads: [{ value: "desde ~0,7 (dinámico)" }, { value: "desde ~0,5 (dinámico)" }, { value: "desde ~0,6" }],
        commission: "Ninguna en CFD, solo spread · financiación nocturna 4% anual ± tipo de referencia · 0,7% de conversión de divisa (0,5% profesional)",
        leverage: "1:30 minorista en todas las entidades · hasta 1:500 profesional",
        funding: ["Visa / Mastercard", "Apple Pay", "Google Pay", "Transferencia bancaria", "PayPal (UE/AU)", "Skrill", "Neteller", "Lean (EAU)"],
        withdrawalTime: "Procesado en 24 h, el 91% en 5 minutos",
        languages: "24/7 en inglés, más de 10 idiomas en horario laboral · turco no confirmado oficialmente",
        bestFor: "Traders minoristas y de la región MENA que quieren ejecución en TradingView y un depósito de entrada bajo",
        pros: ["Cero comisiones de negociación y sin comisiones de depósito, retiro ni inactividad", "Regulado por la FCA, CySEC, ASIC, SCB y la SCA de EAU; dinero de clientes segregado y protección contra saldo negativo", "Conexión nativa con TradingView, además de MT4, MT5, plataforma web y móvil propia y una API", "Depósito mínimo de $20; el 91% de los retiros se procesan en 5 minutos", "Cuentas sin swap para clientes de MENA y una cuenta profesional con apalancamiento 1:500 y reembolsos de spread"],
        cons: ["Los spreads son dinámicos, no fijos: EUR/USD ~0,7 pips y oro ~0,5 son valores típicos, no mínimos garantizados", "Sin cuenta de spread raw ni basada en comisiones", "La financiación nocturna del 4% más el tipo de referencia encarece relativamente las posiciones apalancadas de varios días; 0,7% de conversión de divisa para minoristas"],
        steps: ["Haga clic en «Abrir cuenta» en capital.com o descargue la app para iOS/Android; elija su país de residencia", "Regístrese con su correo electrónico (o Google/Apple), establezca una contraseña, acepte los términos y confirme su correo mediante el enlace enviado", "Verifique su identidad: suba un documento de identidad válido, un selfie en vivo y un comprobante de domicilio si se solicita (normalmente se revisa en 24 horas)", "Financie la cuenta con tarjeta, Apple/Google Pay, transferencia bancaria o un método local: mínimo de $10–20 con tarjeta, €50 por transferencia", "Elija CFD, sin swap o (si cumple los requisitos) pase a una cuenta Profesional, y opere en la plataforma web, la app, TradingView, MT4 o MT5"],
        summary: "Capital.com es un bróker de CFD de capital privado fundado en 2016 por Viktor Prokopenya, con más de 880.000 cuentas activas y más de 5.500 instrumentos entre acciones, índices, forex, materias primas y cripto. El volumen negociado por los clientes superó los 1,7 billones de dólares en 2024 y los 1,5 billones en el primer semestre de 2025, más de la mitad procedente de Oriente Medio. Su entidad de Dubái, Capital Com MENA Securities Trading, tiene licencia de la Securities and Commodities Authority de EAU. Mantengo aquí una cuenta personal de CFD para operar índices.",
        faq: [{ q: "¿Está regulado Capital.com y están seguros los fondos de los clientes?", a: "Sí. Capital Com (UK) Ltd está regulada por la FCA (793714), Capital Com SV Investments Ltd tiene licencia de la CySEC (319/17), Capital Com Australia Pty Ltd posee la AFSL 513393 de la ASIC, Capital Com Online Investments Ltd tiene licencia de la Securities Commission de Bahamas (SIA-F245) y Capital Com MENA Securities Trading L.L.C. tiene licencia en Dubái de la SCA/CMA de EAU (20200000176). El dinero de los clientes minoristas se mantiene en cuentas segregadas y se aplica protección contra saldo negativo." }, { q: "¿Cuál es el depósito mínimo y hay comisiones de depósito o retiro?", a: "El mínimo declarado es de 10 USD/EUR/GBP para tarjetas y Apple Pay en el sitio internacional (20 en el centro de ayuda y para clientes de EAU), y de €50 para transferencias bancarias. Capital.com no cobra comisiones de depósito, retiro ni inactividad; su banco o proveedor de pagos puede aplicar las suyas." }, { q: "¿Con qué rapidez se procesan los retiros?", a: "Capital.com declara que procesa todas las solicitudes de retiro en 24 horas, y el 91% en 5 minutos. Los fondos pueden tardar después hasta 5 días hábiles en aparecer en su tarjeta o cuenta bancaria. Los retiros vuelven al método de financiación original; el retiro mínimo es de 20 USD/EUR/GBP con tarjeta." }, { q: "¿Qué apalancamiento puedo obtener?", a: "Los clientes minoristas obtienen hasta 1:30 en los principales pares de FX, 1:20 en oro e índices principales, 1:10 en otras materias primas e índices, 1:5 en acciones y 1:2 en cripto. Los clientes que cumplan los requisitos pueden pasar a una cuenta Profesional con hasta 1:500 en FX principales, índices, oro y petróleo, 1:100 en cripto y 1:33 en acciones principales, además de reembolsos de spread del 5–20% según el volumen mensual." }, { q: "¿Ofrece Capital.com cuentas sin swap (islámicas) y trading desde TradingView?", a: "Sí. Las cuentas sin swap están disponibles para clientes de EAU, Arabia Saudí, Catar, Kuwait, Baréin, Omán, Jordania, Egipto, Líbano, Túnez, Argelia y Marruecos: cierre las operaciones abiertas y contacte con support@capital.com para cambiar. Capital.com es un bróker oficial de TradingView, por lo que puede conectar su cuenta y operar directamente desde los gráficos de TradingView, además de MT4, MT5, la plataforma web y la app." }],
      },
      {
        tagline: "App regulada por la SPK: BIST sin comisiones, operaciones en acciones de EE. UU. por $1,50 fijos",
        regulator: "SPK (Turquía) · miembro de Borsa İstanbul",
        licence: "Certificado de intermediación SPK K-024 (31 de mayo de 2022) · miembro de BIST desde 2021 · activos de EE. UU. bajo SIPC",
        founded: "2020, Estambul",
        minDeposit: "Ninguno · acciones fraccionadas desde $1",
        platforms: ["App Midas (iOS, Android)", "Plataforma web Atlas"],
        spreads: [{ value: "0% de comisión" }, { value: "$1,50 por operación" }, { value: "Sin comisión de Midas" }],
        commission: "Acciones BIST 0% · acciones de EE. UU. $1,50 fijos, acciones europeas €1,50 por operación · opciones de EE. UU. $1,50 por contrato · VIOP 0,01–0,05%",
        leverage: "Ninguno en acciones (contado) · préstamos de margen BIST al 48,5–66,5% anual",
        funding: ["Transferencia bancaria en TRY (EFT / FAST)", "Transferencia bancaria en USD o EUR", "12 bancos asociados con abono instantáneo"],
        withdrawalTime: "Minutos hacia los bancos asociados; USD por debajo de $50k en minutos",
        languages: "App en turco e inglés · soporte y sitio web solo en turco",
        bestFor: "Inversores residentes en Turquía que quieren acciones de BIST, EE. UU. y Europa en una sola app de bajo coste",
        pros: ["Cero comisiones en Borsa İstanbul, sin comisiones de cuenta, custodia ni liquidación", "$1,50 fijos por operación en EE. UU., acciones fraccionadas desde $1 y datos en tiempo real gratuitos", "Intermediario con licencia de la SPK; posiciones en BIST en la Agencia Central de Registro, posiciones en EE. UU. bajo protección SIPC", "Depósitos y retiros en minutos a través de 12 bancos asociados, sin comisiones de transferencia por parte de Midas", "Una sola cuenta para acciones de BIST, EE. UU. y Europa, opciones de EE. UU., futuros VIOP, fondos TEFAS y certificados de oro"],
        cons: ["Solo residentes en Turquía; sin cuentas para no residentes ni para quien tenga residencia fiscal en el extranjero", "Sin CFD ni forex apalancado; los préstamos de margen BIST conllevan intereses elevados en TRY", "Soporte y sitio web solo en turco; conversión de TRY a USD al tipo propio de Midas en lugar de una comisión publicada"],
        steps: ["Descargue la app Midas desde la App Store o Google Play y regístrese con su número de móvil", "Verifique su identidad con un documento de identidad turco con chip, tarjeta azul o documento de identidad para extranjeros; debe ser mayor de 18 años y residir en Turquía sin obligaciones fiscales en el extranjero", "Complete la solicitud en la app y firme electrónicamente los contratos de cuenta de inversión; el proceso dura unos 5 minutos", "Financie la cuenta por transferencia bancaria en TRY o USD (desde cualquier banco; las transferencias desde bancos asociados se acreditan en unos 2 minutos)", "Compre su primera acción: convierta TRY a USD en la app si es necesario y envíe una orden de acciones de BIST, EE. UU. o Europa desde $1/€1"],
        summary: "Midas Menkul Değerler A.Ş. es un intermediario de Estambul con licencia de la SPK, fundado en 2020 por Egem Eraslan y propiedad al 100% de Midas Finansal Teknolojiler A.Ş. Declaró unos 4 millones de usuarios y un volumen mensual negociado cercano a los 20.000 millones de dólares en mayo de 2026, y ha captado más de 140 millones de dólares, incluida una Serie B de 80 millones liderada por QED Investors en agosto de 2025. Es el bróker que uso para acciones de BIST y EE. UU., y uno de los tres utilizados para las cuentas gestionadas.",
        faq: [{ q: "¿Quién puede abrir una cuenta en Midas?", a: "Adultos con documento de identidad turco con chip, tarjeta azul o documento de identidad turco para extranjeros que residan en Turquía y no tengan residencia fiscal en otro país. También hay cuentas para menores y para empresas destinadas a titulares de documento de identidad turco con chip residentes en Turquía. Los no residentes no pueden abrir cuenta." }, { q: "¿Qué cobra Midas?", a: "Las operaciones con acciones de BIST no tienen comisión ni gastos de cuenta, custodia o liquidación. Las operaciones con acciones de EE. UU. cuestan $1,50 fijos y las de acciones europeas €1,50 fijos por operación. Las opciones de EE. UU. cuestan $1,50 por contrato para los primeros 500 contratos al mes. Las órdenes de fondos TEFAS no tienen comisión de Midas. Los depósitos y retiros son gratuitos por parte de Midas." }, { q: "¿Puedo operar acciones de EE. UU. y cómo están protegidas?", a: "Sí. Midas da acceso a acciones de NYSE, NASDAQ y OTC, ETF cotizados en EE. UU. y opciones de EE. UU., con acciones fraccionadas desde $1 y dividendos pagados en USD. Las acciones se mantienen a su nombre en custodios autorizados por la SEC y están cubiertas por el seguro SIPC hasta 150 millones de dólares (75 millones en valores más 75 millones en efectivo) según el sitio de Midas." }, { q: "¿Cómo funciona la conversión de divisa?", a: "Puede depositar USD directamente o convertir TRY a USD o EUR dentro de la app las 24 horas (pares USD/TRY y EUR/TRY) usando su saldo en efectivo; los fondos convertidos suelen estar disponibles para operar de inmediato. Midas aplica su propio tipo de cambio y no publica una comisión de conversión aparte." }, { q: "¿Con qué rapidez se procesan los retiros?", a: "Los retiros hacia los 12 bancos asociados de Midas llegan en minutos. Los retiros en TRY a otros bancos llegan en minutos dentro de los límites de FAST (importes mayores, el siguiente día hábil). Los retiros en USD inferiores a $50.000 tardan minutos y los de $50.000–$200.000 alrededor de una hora en horario laboral. Midas no cobra comisión de retiro; en transferencias en USD a bancos no asociados pueden aplicarse gastos SWIFT de terceros." }],
      },
      {
        tagline: "Bróker regulado por la FCA y la CNMV que convierte un historial en un DARWIN invertible",
        regulator: "FCA · CNMV · FSA Seychelles",
        licence: "FCA 586466 · CNMV 311 · FSA SD171",
        founded: "2012, Londres",
        minDeposit: "€500 · €1.000 de capital para crear un DARWIN",
        platforms: ["MT4", "MT5", "TradingView", "DXtrade", "FIX / API DARWIN", "Interactive Brokers TWS"],
        spreads: [{ value: "0,2–0,3 + $2,5 por lote" }, { value: "~0,4 + 0,0025%" }, { value: "~0,6 + $0,275 por contrato" }],
        commission: "FX $2,50 por lote y orden · índices $2,75 por contrato · materias primas 0,0025% · CFD sobre acciones $0,02 por acción · reembolsos de hasta el 40%",
        leverage: "1:30 minorista (FCA, CNMV) · hasta 1:200 profesional",
        funding: ["Transferencia bancaria", "Visa / Mastercard", "Skrill"],
        withdrawalTime: "De 1 a 3 días hábiles",
        languages: "Lun–jue 08:00–17:00 UTC, correo electrónico y teléfono · sitio en EN, ES, FR, DE, ZH · sin turco",
        bestFor: "Traders sistemáticos que quieren monetizar un historial verificado mediante capital de inversores y asignaciones semilla de DarwinIA",
        pros: ["Doble regulación FCA y CNMV con protección FSCS (£85k) y FOGAIN (€100k), fondos en cuentas segregadas de primer nivel", "Gane el 15% de comisión de éxito sobre el capital de los inversores sin necesidad de tener su propia licencia de gestión de activos", "DarwinIA asigna capital semilla de 30.000 a 500.000 EUR al mes a las mejores estrategias; más de 11,5 M EUR pagados a traders hasta la fecha", "Precios interbancarios raw, EUR/USD en torno a 0,2–0,3 pips más $2,50 por lote, con reembolsos por talento y volumen de hasta el 40%", "MT4, MT5, TradingView, DXtrade, FIX y las API de DARWIN, además de acciones, futuros y ETF a través de Interactive Brokers"],
        cons: ["Sin cuenta sin swap, sin soporte en turco, y el soporte solo funciona de lunes a jueves de 08:00 a 17:00 UTC", "Depósito mínimo de €500, €1.000 de capital para crear un DARWIN y límites de por vida en los depósitos con tarjeta y Skrill", "Apalancamiento minorista limitado a 1:30; el estatus profesional lo eleva, pero renuncia a la cobertura FSCS"],
        steps: ["Regístrese en darwinex.com/register con nombre de usuario, correo electrónico, contraseña y país de residencia fiscal", "Complete el onboarding MiFID: cuestionario de datos personales y cuestionario de conocimientos financieros y solvencia", "Suba los documentos de identidad y domicilio; el estado de la solicitud se comunica por correo electrónico en 1 día hábil", "Financie su Darwinex Wallet (mín. €/$/£500 por transferencia bancaria, tarjeta o Skrill) y transfiera al menos 500 a una cuenta de trading real", "Opere en MT4/MT5, TradingView, DXtrade o IBKR; tras aproximadamente un mes (o al instante con un historial importado) cree su DARWIN y participe en DarwinIA"],
        summary: "Darwinex es el nombre comercial de Tradeslide Trading Tech Ltd (Londres, 2012; autorizada por la FCA desde 2014) y Sapiens Markets EU (CNMV, Madrid, 2022), que opera como bróker y como gestor de activos regulado. Un DARWIN empaqueta la estrategia de un trader como un índice invertible con gestión de riesgo: los inversores pagan un 1,2% de comisión de gestión y un 20% de comisión de éxito, de la que el 15% va al trader. La plataforma declara más de 3.000 DARWIN, unos 580 M USD invertidos y clientes en más de 80 países. Es donde los sistemas de NUUK se empaquetan para capital de inversores externos.",
        faq: [{ q: "¿Qué es un DARWIN?", a: "Un DARWIN es una estrategia de trading empaquetada por Darwinex como un índice gestionado con su propio ticker y una cotización que parte de 100. Replica las entradas y salidas del trader bajo un motor de riesgo independiente (objetivo de VaR mensual del 3,25–6,5%) sin revelar las operaciones abiertas, de modo que los inversores pueden comprarlo y el trader cobra comisiones de éxito bajo la licencia de gestión de activos de Darwinex." }, { q: "¿Cuál es la diferencia entre Darwinex Zero y una cuenta real de Darwinex?", a: "Darwinex Zero es una suscripción (€45/mes, €35/mes en plan anual, €30/mes en plan de 3 años; €50 para futuros) que ofrece una cuenta MT4/MT5 con capital virtual para construir un historial verificado y participar en DarwinIA por un 15% de comisión de éxito real, sin capital de trading en riesgo. Una cuenta real de Darwinex no tiene suscripción, usa su propio dinero (mínimo €500) y da acceso a capital de inversores desde el primer día; un historial de Zero puede migrarse a una cuenta real." }, { q: "¿Qué comisiones pagan los inversores y cómo se reparte la comisión de éxito?", a: "Los inversores pagan una comisión de gestión del 1,2% anual a Darwinex y una comisión de éxito del 20% sobre los beneficios netos, calculada trimestralmente sobre un high-water mark (marca de agua). Del 20%, el 15% se paga al proveedor del DARWIN (el trader) y el 5% lo retiene Darwinex. Las asignaciones semilla de DarwinIA también pagan al trader el 15% de los beneficios generados." }, { q: "¿Cuál es el depósito mínimo?", a: "El primer depósito es de €/$/£500 para cuentas individuales y conjuntas y de 10.000 para cuentas de empresa; los depósitos posteriores tienen un mínimo de 100 (500 por transferencia bancaria). Crear un DARWIN requiere €1.000 de capital y participar en DarwinIA requiere mantener $1.000 de capital durante todo el mes. Los inversores pueden empezar desde €200 (€10.000 para el Darwinex INDX)." }, { q: "¿Cómo está regulado Darwinex?", a: "Tradeslide Trading Tech Ltd está autorizada y regulada por la FCA del Reino Unido (FRN 586466, n.º de sociedad 08061368) como bróker y gestor de activos, con protección FSCS hasta £85.000. Sapiens Markets EU Sociedad de Valores SA está regulada por la CNMV de España (n.º 311) con cobertura FOGAIN hasta €100.000. Tradeslide Global Ltd posee una licencia de la FSA de Seychelles (SD171). Los fondos de los clientes se mantienen en cuentas segregadas en bancos británicos de primer nivel." }],
      },
    ],
  },

  signals: {
    metaTitle: "Señales e informes",
    metaDescription: "Notas diarias de mercado, informes semanales e ideas de trading con el razonamiento completo, entregados por Telegram y por correo electrónico.",
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
      { name: "Señales", period: "al mes", features: ["Todo lo incluido en Informes", "Ideas de trading con razonamiento", "Actualizaciones en vivo por Telegram", "Hoja de rendimiento mensual"], cta: "Suscribirse" },
      { name: "Mentoría", period: "por trimestre", features: ["Todo lo incluido en Señales", "Revisión individual quincenal", "Feedback sobre la cartera", "Acceso prioritario a los webinars"], cta: "Solicitar" },
    ],
    performanceTitle: "Rendimiento de las señales",
    performanceNote: "Las ideas cerradas se registran mensualmente con entrada, salida y resultado en el canal de Telegram. Registro interno hasta la fecha: el 87% de las ideas cerradas alcanzó el objetivo antes que el stop. La verificación independiente del registro está en curso.",
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
    "metaDescription": "NUUK obtiene ingresos operando con su propio capital, con comisiones de gestión y de éxito sobre las carteras gestionadas, con acuerdos con brókeres y con suscripciones de análisis. Cada comisión, explicada.",
    "kicker": "Cómo ganamos dinero",
    "title": "Ganamos cuando usted gana. Nuestro capital va primero.",
    "lead": "NUUK no es un bróker y no toma la contraparte de sus operaciones. Nuestros ingresos proceden de cuatro fuentes transparentes, y la mayor es la misma operativa que gestionamos para usted.",
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
        "body": "Dos estructuras. El MAM agrupado no cobra comisión de gestión y aplica un 25% sobre los beneficios por encima del máximo histórico. La cuenta dedicada (desde 250.000 USD) cobra 1.000 USD al mes más un 25% sobre los beneficios por encima del máximo histórico, después de la comisión de gestión.",
        "how": "Las deduce el bróker de su cuenta y aparecen en cada extracto"
      },
      {
        "title": "Acuerdos con brókeres",
        "share": "Retrocesiones de introductor (IB)",
        "body": "Cuando abre una cuenta en un bróker asociado a través de NUUK, el bróker nos paga una parte del spread o de la comisión que obtiene. Sus condiciones de operativa son idénticas a las de un cliente directo. La lista completa de socios y condiciones está en nuestra declaración de IB.",
        "how": "Las paga el bróker; nunca se añaden a sus costes"
      },
      {
        "title": "Análisis y formación",
        "share": "Suscripciones y talleres",
        "body": "Planes de señales y análisis por 750, 1.000 y 5.000 USD al mes, además de talleres de pago y formación corporativa. Los webinarios semanales siguen siendo gratuitos.",
        "how": "Suscripción fija o precio de entrada, pagados por adelantado"
      }
    ],
    "exampleTitle": "Cómo es un año en cifras",
    "exampleLead": "Cifras ilustrativas para un año con una rentabilidad bruta del 12% antes de comisiones. No son una previsión; la rentabilidad puede ser negativa.",
    "examples": [
      {
        "name": "MAM agrupado",
        "basis": "100.000 USD asignados",
        "rows": [
          [
            "Beneficio bruto (12%)",
            "12.000 USD"
          ],
          [
            "Comisión de gestión",
            "0 USD"
          ],
          [
            "Comisión de éxito (25%)",
            "3.000 USD"
          ],
          [
            "Neto para usted",
            "9.000 USD (+9,0%)"
          ],
          [
            "Ingreso de NUUK",
            "3.000 USD"
          ]
        ]
      },
      {
        "name": "Cuenta dedicada",
        "basis": "250.000 USD asignados",
        "rows": [
          [
            "Beneficio bruto (12%)",
            "30.000 USD"
          ],
          [
            "Comisión de gestión (12 × 1.000 USD)",
            "12.000 USD"
          ],
          [
            "Beneficio tras la comisión de gestión",
            "18.000 USD"
          ],
          [
            "Comisión de éxito (25%)",
            "4.500 USD"
          ],
          [
            "Neto para usted",
            "13.500 USD (+5,4%)"
          ],
          [
            "Ingreso de NUUK",
            "16.500 USD"
          ]
        ]
      }
    ],
    "exampleNote": "En un año con pérdidas no hay comisión de éxito, y la pérdida debe recuperarse antes de volver a cobrarla. La cuenta dedicada sigue pagando su comisión de gestión mensual. Los spreads, comisiones y swaps los cobra el bróker y ya están incluidos en la cifra bruta.",
    "neverTitle": "Lo que nunca hacemos",
    "never": [
      "Recargar spreads, comisiones o swaps",
      "Custodiar su dinero o tener derecho de retirada sobre su cuenta",
      "Operar en su contra o vender su flujo de órdenes",
      "Cobrar comisión de éxito sobre ganancias no realizadas o sobre beneficios por debajo del máximo histórico",
      "Cobrar por recomendar un bróker frente a otro más allá de la retrocesión declarada"
    ],
    "riskTitle": "La gestión del riesgo es el modelo de negocio",
    "riskLead": "Las comisiones solo funcionan si el capital sobrevive. Estos límites se aplican a nuestras propias cuentas y a cada mandato que gestionamos.",
    "risk": [
      {
        "title": "Riesgo fijo por operación",
        "body": "Cada posición se dimensiona con un importe de riesgo fijo, 300 USD por operación en GANN Live, con el stop fijado por ATR(14) × 1,5 antes de entrar."
      },
      {
        "title": "Límite de pérdida diaria",
        "body": "La operativa se detiene el resto del día cuando se alcanza el límite de pérdida diaria del mandato. El sistema no puede anularlo."
      },
      {
        "title": "Mandato de drawdown máximo",
        "body": "Cada mandato fija un drawdown máximo. Alcanzarlo pausa la cuenta y activa una revisión con usted antes de reanudar nada."
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
        "a": "No de la cuenta. El MAM agrupado no tiene comisión de gestión, así que un año con pérdidas no nos paga nada. La cuenta dedicada paga su comisión de gestión mensual, comunicada antes de firmar; no se cobra comisión de éxito hasta recuperar la pérdida."
      },
      {
        "q": "¿Las retrocesiones de IB son un conflicto de interés?",
        "a": "Pueden serlo, por eso se declaran. Recomendamos brókeres por regulación, ejecución y condiciones adecuadas a su perfil, y cada socio figura con sus condiciones en la declaración de IB. Sus condiciones de operativa nunca cambian por venir a través de nosotros."
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
  contact: {
    metaTitle: "Contacto",
    metaDescription: "Reserve una llamada, escriba por WhatsApp o Telegram, o envíe una consulta.",
    kicker: "Contacto",
    title: "Hablemos",
    lead: "Elija el canal que más le convenga. Las consultas institucionales y profesionales se responden en un día hábil.",
    channels: [
      { title: "Reservar una llamada", body: "30 minutos, por vídeo o teléfono. Respuesta en un día hábil.", cta: "Solicitar una llamada" },
      { title: "WhatsApp", body: "Preguntas rápidas e intercambio de documentos.", cta: "Enviar mensaje" },
      { title: "Telegram", body: "Canal de señales y comunidad.", cta: "Unirse" },
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
      topics: ["Cuenta gestionada", "Elección de bróker", "Señales e informes", "Formación", "Sistemas de IA", "Otro"],
      message: "Mensaje",
      messagePlaceholder: "¿En qué puedo ayudarle?",
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
        "Las cuentas gestionadas operan dentro de la propia cuenta del cliente en un bróker asociado, bajo la estructura MAM o PAMM y el marco regulatorio de dicho bróker. NUUK dispone únicamente de permiso de negociación y nunca asume la custodia de los fondos de los clientes. Las comisiones, los periodos de permanencia y los mandatos de riesgo se establecen en un acuerdo escrito antes de que comience cualquier operativa.",
        "Los enlaces a brókeres de este sitio web son enlaces de referido. NUUK puede recibir una comisión del bróker cuando usted abre y financia una cuenta a través de ellos; esto no modifica los spreads ni las comisiones que usted paga, y usted sigue siendo libre de abrir una cuenta directamente con cualquier bróker.",
        "NUUK Quant opera desde el Dubai International Financial Centre, Dubái, Emiratos Árabes Unidos. Los servicios se ofrecen únicamente donde lo permitan la legislación y la regulación aplicables; la disponibilidad depende de su país de residencia. Nada de lo publicado en este sitio web está dirigido a ninguna persona en una jurisdicción donde dicha distribución sea contraria a la legislación local.",
      ],
    },
    "ib-disclosure": {
      title: "Declaración de introductor de negocio (IB)",
      body: [
        "Ahmet S. Öztürk / NUUK actúa como partner introductor para los brókeres publicados en este sitio web. Cuando usted abre y financia una cuenta a través de un enlace de referido, el bróker paga una comisión basada en su volumen de negociación.",
        "Esta comisión la paga el bróker y no aumenta los spreads, comisiones ni gastos que usted paga. Las fichas de los brókeres se redactan de forma independiente; un bróker no puede pagar para modificar una valoración ni una debilidad señalada.",
        "Usted es libre de abrir una cuenta directamente con cualquier bróker. El enlace de referido es opcional.",
        "Socios actuales: Pepperstone, Tickmill, Saxo Bank, Capital.com, Midas y Darwinex bajo acuerdos de introductor de negocio. Tickmill, Saxo Bank y Midas operan además las estructuras MAM/PAMM utilizadas para las cuentas gestionadas bajo acuerdos separados de gestión de carteras.",
      ],
    },
    privacy: {
      title: "Política de privacidad",
      body: [
        "Esta política explica qué datos personales recopila NUUK Quant (\"NUUK\", \"nosotros\") a través de nuukquant.com, con qué finalidad y qué derechos tiene usted. Última actualización: 8 de septiembre de 2026.",
        "Datos que usted nos facilita. Cuando nos contacta por correo electrónico, WhatsApp, Telegram o el formulario de consulta, recibimos los datos que nos envía: nombre, dirección de correo electrónico, número de teléfono y el contenido de su mensaje. El formulario de consulta abre su propio cliente de correo; nada de lo que escribe se almacena en este sitio web.",
        "Datos recopilados automáticamente. Utilizamos Google Analytics 4 con anonimización de IP para entender cómo se usa el sitio: páginas vistas, ubicación aproximada, tipo de dispositivo y qué botones se pulsan (por ejemplo, un enlace de bróker o un plan). Estos datos están agregados y no le identifican por su nombre. Puede bloquearlos mediante una configuración del navegador o un bloqueador de anuncios.",
        "Cookies. El sitio en sí no instala cookies. Google Analytics puede instalar cookies para distinguir sesiones; los sitios de terceros que abra desde nuestros enlaces (brókeres, Telegram, Calendly, redes sociales) aplican sus propias políticas. Las cotizaciones en directo de este sitio son widgets de TradingView incrustados, que se cargan desde los servidores de TradingView y pueden instalar sus propias cookies según la política de privacidad de TradingView.",
        "Por qué tratamos los datos. Para responder a su consulta, para prestar los servicios que ha solicitado (cuentas gestionadas, señales, formación), para cumplir obligaciones legales y regulatorias, y para mejorar el sitio web. La base legal es su consentimiento, la ejecución de un acuerdo con usted o nuestro interés legítimo en gestionar el negocio.",
        "Cesión de datos. No vendemos datos personales. Solo los compartimos con los proveedores de servicios necesarios para operar el sitio web y las comunicaciones (alojamiento, correo electrónico, analítica), con los brókeres asociados cuando usted nos pide que le presentemos, y con las autoridades cuando la ley lo exija.",
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
        "Enlaces de terceros. Los enlaces a brókeres, plataformas y redes sociales conducen a sitios que no controlamos. Los enlaces de referido se declaran en la página de declaración de IB. No somos responsables del contenido, la disponibilidad ni las condiciones de los sitios de terceros.",
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
      { title: "Reserve una llamada", body: "30 minutos para decidir qué servicio encaja: bróker, señales, cuenta gestionada o formación." },
      { title: "Abra una cuenta de bróker", body: "A su propio nombre, a través de un bróker asociado. La verificación tarda unos 10 minutos con documento de identidad y comprobante de domicilio." },
      {"title": "Financiar y conectar", "body": "Financie su cuenta de bróker: desde 1.000 USD para el pool MAM o un plan de señales, 250.000 USD para un mandato dedicado. Conéctela a la estructura elegida."},
      { title: "Empiece a operar", body: "Siga el plan, revise los resultados cada mes y nunca abra una operación que no pueda explicar." },
    ],
    cta: { label: "Reservar una llamada" },
  },

  footer: {
    copyright: "Todos los derechos reservados.",
    riskTitle: "Advertencia de riesgo",
    legal1:
      "es la marca personal de Ahmet S. Öztürk, economista e inversor, y el nombre comercial de NUUK Quant, con sede en el Dubai International Financial Centre. Los servicios se ofrecen a clientes profesionales e institucionales donde esté permitido; la disponibilidad depende de su jurisdicción y de la regulación aplicable.",
    legal2:
      "El contenido de este sitio web es comentario general de mercado y material educativo. No constituye asesoramiento de inversión personalizado ni una oferta o solicitud de compra o venta de ningún instrumento financiero o servicio.",
    ib: "Los enlaces a brókeres de este sitio web son enlaces de referido. Puedo recibir una comisión cuando usted abre y financia una cuenta a través de ellos; esto no modifica las comisiones que usted paga.",
    risk: "Operar implica un riesgo sustancial y puede generar pérdidas superiores a su inversión inicial. Los resultados pasados no garantizan resultados futuros.",
  },

  systems: [
    {
      assetClass: "XAU/USD, XAG/USD",
      timeframe: "H1 / H4",
      method: "Niveles de Gann + dimensionamiento de posiciones por ATR(14)",
      riskProfile: "Moderado",
      summary: "Sistema para oro y plata: entradas en niveles precio-tiempo de Gann, cada posición dimensionada a un riesgo fijo de 300 USD con stops por ATR(14). No se abre ninguna operación sin stop; la capa de ejecución la rechaza.",
      stats: [
        {
          "label": "En vivo desde",
          "value": "2026"
        },
        {
          "label": "Riesgo por operación",
          "value": "300 USD"
        },
        {
          "label": "Regla de stop",
          "value": "ATR(14) × 1,5"
        }
      ],
    },
    {
      perf: "+10,9% anual, backtest",
      assetClass: "Oro, plata, índices de EE. UU. y la UE",
      timeframe: "D1",
      method: "Momentum de series temporales + Donchian + cruce de medias móviles, en conjunto (ensemble)",
      riskProfile: "Moderado",
      summary: "Conjunto (ensemble) diario de seguimiento de tendencia sobre CFD de metales e índices. Probado con walk-forward de 2010 a 2026 con swap y comisiones incluidos; operando como cuenta paper en Tickmill desde julio de 2026.",
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
        { label: "Bróker", value: "Tickmill MT4/MT5" },
      ],
    },
  ],

  performance: [
    {
      name: "Cartera personal — Tickmill",
      source: "Extracto del bróker",
      updated: "Mensual",
      stats: [
        {
          "label": "Desde",
          "value": "2026"
        },
        {
          "label": "Instrumentos",
          "value": "Oro, plata, índices"
        },
        {
          "label": "Riesgo por operación",
          "value": "300 USD"
        },
        {
          "label": "Informes",
          "value": "Extracto mensual"
        }
      ],
    },
    {
      name: "Cartera personal — Saxo Bank",
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
      source: "Telegram @NUUKQuant",
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
          "value": "Telegram"
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
