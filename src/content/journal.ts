import type { Locale } from "@/i18n";

/** Copy for the public desk trading journal (track record page + home teaser). */
export type JournalCopy = {
  kicker: string;
  title: string;
  lead: string;
  label: string;
  source: string;
  period: string;
  updated: string;
  cards: {
    return: string;
    returnHint: string;
    net: string;
    netHint: string;
    winRate: string;
    winRateHint: string;
    profitFactor: string;
    profitFactorHint: string;
    greenDays: string;
    greenDaysHint: string;
    trades: string;
    tradesHint: string;
    drawdown: string;
    drawdownHint: string;
    bestDay: string;
  };
  curveTitle: string;
  calendarTitle: string;
  calendarLegend: string;
  weekdays: string[];
  bySymbolTitle: string;
  symbolCols: { symbol: string; trades: string; net: string; winRate: string; median: string };
  minutes: string;
  byHourTitle: string;
  byHourNote: string;
  byDurationTitle: string;
  durations: Record<string, string>;
  tradesWord: string;
  noTradeDay: string;
  teaserCta: string;
  tradeListNote: string;
};

const en: JournalCopy = {
  kicker: "Desk journal",
  title: "The desk's statement, day by day",
  lead: "Every closed trade from the desk's MT4 statement, turned into a journal: return, win rate, profit factor, a daily calendar and when and where the edge shows up.",
  label: "Model portfolio",
  source: "Source: MT4 detailed statement (all history)",
  period: "Period",
  updated: "Last updated",
  cards: {
    return: "Return",
    returnHint: "time-weighted",
    net: "Net P&L",
    netHint: "after commission and swap",
    winRate: "Win rate",
    winRateHint: "winning trades",
    profitFactor: "Profit factor",
    profitFactorHint: "gross profit ÷ gross loss",
    greenDays: "Green days",
    greenDaysHint: "trading days in profit",
    trades: "Trades",
    tradesHint: "{n} per day on average",
    drawdown: "Deepest drawdown",
    drawdownHint: "peak to trough, closed P&L",
    bestDay: "Best day",
  },
  curveTitle: "Cumulative return",
  calendarTitle: "Daily calendar",
  calendarLegend: "Each cell: net P&L and that day's return on the opening balance.",
  weekdays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  bySymbolTitle: "By symbol",
  symbolCols: { symbol: "Symbol", trades: "Trades", net: "Net", winRate: "Win rate", median: "Median hold" },
  minutes: "min",
  byHourTitle: "By hour of day",
  byHourNote: "Opening hour, broker server time (GMT+3). Bar height = net P&L.",
  byDurationTitle: "By holding time",
  durations: { "0-5m": "0–5 min", "5-30m": "5–30 min", "30m-2h": "30 min–2 h", "2-8h": "2–8 h", "8h+": "8 h+" },
  tradesWord: "trades",
  noTradeDay: "no trading",
  teaserCta: "Open the full journal",
  tradeListNote: "The trade-by-trade list is added with the next full statement export.",
};

const tr: JournalCopy = {
  kicker: "Masa günlüğü",
  title: "Masanın ekstresi, gün gün",
  lead: "Masanın MT4 ekstresindeki her kapanmış işlem bir günlüğe dönüştü: getiri, isabet oranı, kâr faktörü, günlük takvim ve kazancın hangi saatte, hangi sembolde geldiği.",
  label: "Model portföy",
  source: "Kaynak: MT4 detaylı ekstre (tüm geçmiş)",
  period: "Dönem",
  updated: "Son güncelleme",
  cards: {
    return: "Getiri",
    returnHint: "zaman ağırlıklı",
    net: "Net K/Z",
    netHint: "komisyon ve swap dahil",
    winRate: "İsabet oranı",
    winRateHint: "kârla kapanan işlemler",
    profitFactor: "Kâr faktörü",
    profitFactorHint: "brüt kâr ÷ brüt zarar",
    greenDays: "Yeşil gün",
    greenDaysHint: "kârla biten işlem günleri",
    trades: "İşlem",
    tradesHint: "günde ortalama {n}",
    drawdown: "En derin düşüş",
    drawdownHint: "zirveden dibe, kapanmış K/Z",
    bestDay: "En iyi gün",
  },
  curveTitle: "Birikimli getiri",
  calendarTitle: "Günlük takvim",
  calendarLegend: "Her hücrede o günün net K/Z'si ve gün başı bakiyeye göre getirisi.",
  weekdays: ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"],
  bySymbolTitle: "Sembole göre",
  symbolCols: { symbol: "Sembol", trades: "İşlem", net: "Net", winRate: "İsabet", median: "Medyan süre" },
  minutes: "dk",
  byHourTitle: "Saate göre",
  byHourNote: "İşlemin açıldığı saat, broker sunucu saati (GMT+3). Çubuk yüksekliği net K/Z.",
  byDurationTitle: "Pozisyon süresine göre",
  durations: { "0-5m": "0–5 dk", "5-30m": "5–30 dk", "30m-2h": "30 dk–2 sa", "2-8h": "2–8 sa", "8h+": "8 sa+" },
  tradesWord: "işlem",
  noTradeDay: "işlem yok",
  teaserCta: "Günlüğün tamamını aç",
  tradeListNote: "İşlem işlem liste, bir sonraki tam ekstreyle eklenecek.",
};

const ar: JournalCopy = {
  ...en,
  kicker: "سجل المكتب",
  title: "كشف حساب المكتب، يومًا بيوم",
  lead: "كل صفقة مغلقة من كشف MT4 الخاص بالمكتب في سجل واحد: العائد، نسبة الربح، عامل الربح، تقويم يومي، ومتى وأين يظهر التفوق.",
  label: "محفظة نموذجية · أداء افتراضي",
  source: "المصدر: حساب تجريبي لدى Tickmill، كشف MT4 المفصل (السجل الكامل)",
  period: "الفترة",
  updated: "آخر تحديث",
  cards: {
    return: "العائد",
    returnHint: "مرجّح زمنيًا",
    net: "صافي الربح/الخسارة",
    netHint: "بعد العمولة والتبييت",
    winRate: "نسبة الربح",
    winRateHint: "الصفقات الرابحة",
    profitFactor: "عامل الربح",
    profitFactorHint: "إجمالي الربح ÷ إجمالي الخسارة",
    greenDays: "أيام رابحة",
    greenDaysHint: "أيام تداول بربح",
    trades: "الصفقات",
    tradesHint: "{n} في المتوسط يوميًا",
    drawdown: "أعمق تراجع",
    drawdownHint: "من القمة إلى القاع، صفقات مغلقة",
    bestDay: "أفضل يوم",
  },
  curveTitle: "العائد التراكمي",
  calendarTitle: "التقويم اليومي",
  calendarLegend: "كل خانة: صافي الربح وعائد ذلك اليوم على رصيد بداية اليوم.",
  weekdays: ["إث", "ثل", "أر", "خم", "جم", "سب", "أح"],
  bySymbolTitle: "حسب الرمز",
  symbolCols: { symbol: "الرمز", trades: "الصفقات", net: "الصافي", winRate: "نسبة الربح", median: "متوسط المدة" },
  minutes: "د",
  byHourTitle: "حسب ساعة اليوم",
  byHourNote: "ساعة فتح الصفقة بتوقيت خادم الوسيط (GMT+3). ارتفاع العمود = صافي الربح.",
  byDurationTitle: "حسب مدة الاحتفاظ",
  durations: { "0-5m": "0–5 د", "5-30m": "5–30 د", "30m-2h": "30 د–2 س", "2-8h": "2–8 س", "8h+": "8 س+" },
  tradesWord: "صفقة",
  noTradeDay: "لا تداول",
  teaserCta: "افتح السجل كاملًا",
  tradeListNote: "تُضاف قائمة الصفقات التفصيلية مع تصدير الكشف الكامل التالي.",
};

const ru: JournalCopy = {
  ...en,
  kicker: "Журнал деска",
  title: "Выписка деска, день за днём",
  lead: "Каждая закрытая сделка из MT4-выписки деска в одном журнале: доходность, доля прибыльных сделок, профит-фактор, дневной календарь и то, где и когда появляется преимущество.",
  label: "Модельный портфель · Гипотетическая доходность",
  source: "Источник: демо-счёт Tickmill, подробная выписка MT4 (вся история)",
  period: "Период",
  updated: "Обновлено",
  cards: {
    return: "Доходность",
    returnHint: "взвешенная по времени",
    net: "Чистый P&L",
    netHint: "с учётом комиссии и свопа",
    winRate: "Прибыльные сделки",
    winRateHint: "доля в плюс",
    profitFactor: "Профит-фактор",
    profitFactorHint: "валовая прибыль ÷ валовый убыток",
    greenDays: "Зелёные дни",
    greenDaysHint: "дни в плюс",
    trades: "Сделки",
    tradesHint: "в среднем {n} в день",
    drawdown: "Наибольшая просадка",
    drawdownHint: "от пика до дна, закрытый P&L",
    bestDay: "Лучший день",
  },
  curveTitle: "Накопленная доходность",
  calendarTitle: "Дневной календарь",
  calendarLegend: "В каждой ячейке: чистый P&L и доходность дня к балансу на начало дня.",
  weekdays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
  bySymbolTitle: "По инструментам",
  symbolCols: { symbol: "Инструмент", trades: "Сделки", net: "Чистый", winRate: "В плюс", median: "Медиана удержания" },
  minutes: "мин",
  byHourTitle: "По часам",
  byHourNote: "Час открытия, серверное время брокера (GMT+3). Высота столбца — чистый P&L.",
  byDurationTitle: "По времени удержания",
  durations: { "0-5m": "0–5 мин", "5-30m": "5–30 мин", "30m-2h": "30 мин–2 ч", "2-8h": "2–8 ч", "8h+": "8 ч+" },
  tradesWord: "сделок",
  noTradeDay: "без торговли",
  teaserCta: "Открыть весь журнал",
  tradeListNote: "Список по сделкам появится со следующей полной выпиской.",
};

const fr: JournalCopy = {
  ...en,
  kicker: "Journal du desk",
  title: "Le relevé du desk, jour après jour",
  lead: "Chaque trade clôturé du relevé MT4 du desk réuni dans un journal : rendement, taux de réussite, profit factor, calendrier quotidien et où et quand l'avantage apparaît.",
  label: "Portefeuille modèle · Performance hypothétique",
  source: "Source : compte démo Tickmill, relevé détaillé MT4 (tout l'historique)",
  period: "Période",
  updated: "Dernière mise à jour",
  cards: {
    return: "Rendement",
    returnHint: "pondéré dans le temps",
    net: "P&L net",
    netHint: "après commission et swap",
    winRate: "Taux de réussite",
    winRateHint: "trades gagnants",
    profitFactor: "Profit factor",
    profitFactorHint: "gain brut ÷ perte brute",
    greenDays: "Jours positifs",
    greenDaysHint: "jours de trading en gain",
    trades: "Trades",
    tradesHint: "{n} par jour en moyenne",
    drawdown: "Plus forte baisse",
    drawdownHint: "du pic au creux, P&L clôturé",
    bestDay: "Meilleur jour",
  },
  curveTitle: "Rendement cumulé",
  calendarTitle: "Calendrier quotidien",
  calendarLegend: "Chaque case : P&L net et rendement du jour sur le solde d'ouverture.",
  weekdays: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
  bySymbolTitle: "Par symbole",
  symbolCols: { symbol: "Symbole", trades: "Trades", net: "Net", winRate: "Réussite", median: "Durée médiane" },
  minutes: "min",
  byHourTitle: "Par heure",
  byHourNote: "Heure d'ouverture, heure du serveur du courtier (GMT+3). Hauteur = P&L net.",
  byDurationTitle: "Par durée de détention",
  durations: { "0-5m": "0–5 min", "5-30m": "5–30 min", "30m-2h": "30 min–2 h", "2-8h": "2–8 h", "8h+": "8 h+" },
  tradesWord: "trades",
  noTradeDay: "pas de trading",
  teaserCta: "Ouvrir le journal complet",
  tradeListNote: "La liste trade par trade arrive avec le prochain relevé complet.",
};

const es: JournalCopy = {
  ...en,
  kicker: "Diario del desk",
  title: "El extracto del desk, día a día",
  lead: "Cada operación cerrada del extracto MT4 del desk convertida en un diario: rentabilidad, tasa de acierto, profit factor, calendario diario y cuándo y dónde aparece la ventaja.",
  label: "Cartera modelo · Rendimiento hipotético",
  source: "Fuente: cuenta demo de Tickmill, extracto detallado MT4 (todo el historial)",
  period: "Periodo",
  updated: "Última actualización",
  cards: {
    return: "Rentabilidad",
    returnHint: "ponderada en el tiempo",
    net: "P&L neto",
    netHint: "tras comisión y swap",
    winRate: "Tasa de acierto",
    winRateHint: "operaciones ganadoras",
    profitFactor: "Profit factor",
    profitFactorHint: "beneficio bruto ÷ pérdida bruta",
    greenDays: "Días en verde",
    greenDaysHint: "días con beneficio",
    trades: "Operaciones",
    tradesHint: "{n} al día de media",
    drawdown: "Mayor caída",
    drawdownHint: "de pico a valle, P&L cerrado",
    bestDay: "Mejor día",
  },
  curveTitle: "Rentabilidad acumulada",
  calendarTitle: "Calendario diario",
  calendarLegend: "Cada casilla: P&L neto y rentabilidad del día sobre el saldo de apertura.",
  weekdays: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
  bySymbolTitle: "Por símbolo",
  symbolCols: { symbol: "Símbolo", trades: "Operaciones", net: "Neto", winRate: "Acierto", median: "Duración mediana" },
  minutes: "min",
  byHourTitle: "Por hora",
  byHourNote: "Hora de apertura, hora del servidor del bróker (GMT+3). Altura = P&L neto.",
  byDurationTitle: "Por tiempo en posición",
  durations: { "0-5m": "0–5 min", "5-30m": "5–30 min", "30m-2h": "30 min–2 h", "2-8h": "2–8 h", "8h+": "8 h+" },
  tradesWord: "operaciones",
  noTradeDay: "sin operar",
  teaserCta: "Abrir el diario completo",
  tradeListNote: "La lista operación por operación llega con el próximo extracto completo.",
};

const copies: Record<Locale, JournalCopy> = { en, tr, ar, ru, fr, es };

export function journalCopy(locale: Locale): JournalCopy {
  return copies[locale];
}
