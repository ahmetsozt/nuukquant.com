/**
 * Every user-visible string of NUUK Game, in English (nuukquant.com/game/) and
 * Turkish (nuukquant.com/antrenman/). The engine's own pattern names in
 * patterns.js are test fixtures and are never shown; display names come from here.
 */
import type { Dir, ExitReason, OutcomeCounts, PatternKind, Timeframe } from "./types";

export type GameLang = "en" | "tr";

interface Labelled {
  label: string;
  short: string;
}

interface Rung {
  name: string;
  note: string;
}

interface Step {
  title: string;
  body: string;
}

interface ShareInput {
  label: string;
  total: string;
  discipline: string;
  url: string;
}

export interface TrainerStrings {
  /** BCP 47 tag used to format the chart dates in the results. */
  dateLocale: string;
  terms: { long: string; short: string };
  patterns: Readonly<Record<PatternKind, { names: readonly [bullish: string, bearish: string]; lesson: string }>>;
  reasons: Readonly<Record<ExitReason, string>>;
  timeframes: Readonly<Record<Timeframe, string>>;
  /** Text the chart canvas draws. */
  chart: { stop: string; target: string };
  status: {
    idle: string;
    waiting: string;
    locked: (name: string, dir: string) => string;
    riding: (name: string, dir: string) => string;
    offRule: (dir: string) => string;
    afterExit: (reason: string, r: string) => string;
  };
  session: {
    disclaimer: string;
    dailyLabel: (number: number) => string;
    dailyLabelPlain: string;
    freeLabel: string;
    replayNote: string;
    unsavedNote: string;
    shareText: (input: ShareInput) => string;
  };
  board: {
    idleLabel: string;
    quit: string;
    canvasLabel: string;
    holdLabel: (term: string) => string;
    hints: { long: string; short: string };
    cued: string;
    stats: { total: Labelled; open: Labelled; rule: Labelled; time: Labelled };
  };
  game: {
    intro: string;
    saved: (total: string, discipline: string) => string;
    loading: string;
    error: string;
    retry: string;
  };
  results: {
    heading: (label: string) => string;
    summary: (count: number, wins: number) => string;
    disciplineTitle: string;
    disciplineNone: string;
    disciplineCaption: (count: number, ruleBased: number) => string;
    mechanicalTitle: string;
    mechanicalLine: (counts: OutcomeCounts) => string;
    mechanicalNote: string;
    ridesTitle: string;
    ridesNone: string;
    offRule: string;
    rideDetail: (reason: string, cost: string) => string;
    chartTitle: string;
    chartLine: (timeframe: string) => string;
    replay: string;
    newChart: string;
    share: string;
    shareOpened: string;
    shareCopied: string;
    shareCancelled: string;
    shareFailed: string;
    pastResults: string;
  };
  ladder: { target: Rung; entry: Rung; stop: Rung; caption: string };
  page: {
    meta: { title: string; description: string };
    kicker: string;
    title: string;
    body: string;
    cta: string;
    secondary: string;
    crumb: string;
    /** Section ids the hero buttons jump to. */
    anchors: { game: string; how: string };
    play: { title: string; lead: string; heading: string };
    how: { title: string; steps: readonly Step[] };
    measures: { title: string; lead: string; note: string; educationCta: string; kicker: string; items: readonly string[] };
    risk: { label: string; lead: string; body: string };
  };
  teaser: { kicker: string; heading: string; body: string; points: readonly string[]; cta: string; disclaimer: string };
}

const plural = (count: number, one: string, many: string): string => `${count} ${count === 1 ? one : many}`;

const en: TrainerStrings = {
  dateLocale: "en-GB",
  terms: { long: "LONG", short: "SHORT" },
  patterns: {
    star: {
      names: ["Morning Star", "Evening Star"],
      lesson: "A strong candle is followed by a small, indecisive one, then by a strong close in the opposite direction. It shows momentum changing hands.",
    },
    engulfing: {
      names: ["Bullish Engulfing", "Bearish Engulfing"],
      lesson: "The body of the second candle completely covers the body of the one before it. It shows the previous move being rejected.",
    },
    hammer: {
      names: ["Hammer", "Shooting Star"],
      lesson: "The long wick shows price being pushed back hard from that area. The tip of the wick is the natural stop level.",
    },
  },
  reasons: { stop: "Stop hit", target: "Target reached", manual: "Closed by hand", time: "Time ran out" },
  timeframes: { "5m": "5-minute", "15m": "15-minute", "1h": "1-hour" },
  chart: { stop: "STOP", target: "+2R" },
  status: {
    idle: "Patterns are announced here once the round starts.",
    waiting: "Waiting for a setup. Entering when there is no pattern is off-rule.",
    locked: (name, dir) => `${name} locked. Hold ${dir} to enter.`,
    riding: (name, dir) => `${name} · ${dir}. Stop and target are live; release to close.`,
    offRule: (dir) => `Off-rule entry · ${dir}. There was no pattern; release to close.`,
    afterExit: (reason, r) => `${reason}: ${r}. Release the key and wait for the next setup.`,
  },
  session: {
    disclaimer: "Educational simulation, not investment advice.",
    dailyLabel: (number) => `Chart of the day #${number}`,
    dailyLabelPlain: "Chart of the day",
    freeLabel: "Free practice",
    replayNote: "This round was a replay. The recorded result for the day is the first round you played.",
    unsavedNote: "This result was not saved because your browser does not allow storage.",
    shareText: ({ label, total, discipline, url }) => `NUUK Game · ${label}\nTotal: ${total} · Discipline: ${discipline}\n${en.session.disclaimer}\n${url}`,
  },
  board: {
    idleLabel: "60-second round",
    quit: "Quit round",
    canvasLabel: "Running candlestick chart. The status line is read out below the chart.",
    holdLabel: (term) => `${term}: hold to stay in, release to close`,
    hints: { long: "hold · ↑ or W", short: "hold · ↓ or S" },
    cued: "setup locked · hold",
    stats: {
      total: { label: "Total", short: "Total" },
      open: { label: "Open position", short: "Open" },
      rule: { label: "Rule-based entries", short: "Rule" },
      time: { label: "Time", short: "Time" },
    },
  },
  game: {
    intro: "Play the same chart as everyone else, or practise freely on a random chart. The market and the date are revealed when the round ends.",
    saved: (total, discipline) => `Today's result: ${total} · discipline ${discipline}. You can play again; the first result stays on record.`,
    loading: "Loading chart…",
    error: "The chart data could not be loaded. Check your connection and try again.",
    retry: "Try again",
  },
  results: {
    heading: (label) => `${label} · result`,
    summary: (count, wins) => `${plural(count, "trade", "trades")} · ${plural(wins, "win", "wins")} · net result, costs included`,
    disciplineTitle: "Discipline",
    disciplineNone: "You made no entries, so no score was calculated.",
    disciplineCaption: (count, ruleBased) => `${ruleBased} of ${plural(count, "entry was", "entries were")} in the direction of the locked pattern.`,
    mechanicalTitle: "If the rule had been applied mechanically",
    mechanicalLine: (counts) =>
      `${plural(counts.total, "setup", "setups")}: ${counts.target} target, ${counts.stop} stop` +
      (counts.open > 0 ? `, ${counts.open} unresolved` : "") +
      (counts.invalid > 0 ? `, ${counts.invalid} invalid because of a gap` : "") +
      ".",
    mechanicalNote: "Each setup was played from the open of the next candle, costs included. A single chart is not a statistic.",
    ridesTitle: "Your trades",
    ridesNone: "You opened no trades. Waiting is a decision too; play again to try an entry when a pattern locks.",
    offRule: "Off-rule entry",
    rideDetail: (reason, cost) => `${reason} · cost ${cost}R`,
    chartTitle: "Chart",
    chartLine: (timeframe) => `${timeframe} candles · source: Hyperliquid`,
    replay: "Replay the same chart",
    newChart: "New chart",
    share: "Share result",
    shareOpened: "Share sheet opened.",
    shareCopied: "Result copied to the clipboard.",
    shareCancelled: "Sharing cancelled.",
    shareFailed: "Could not share. Your browser may not allow clipboard access.",
    pastResults: "Past results do not indicate future results.",
  },
  ladder: {
    target: { name: "Target", note: "When price gets here, the trade closes on its own." },
    entry: { name: "Entry", note: "When the pattern locks, in its direction." },
    stop: { name: "Stop", note: "It really triggers. The loss is the risk known from the start." },
    caption: "R is a multiple of the risk you took on that trade. The result is written in R, not in money.",
  },
  page: {
    meta: {
      title: "NUUK Game · the 60-second rule game",
      description:
        "A 60-second rule game on a real historical chart: enter when the pattern locks, respect the stop, wait for the target. The result is measured in R, not in money. Educational simulation, not investment advice.",
    },
    kicker: "NUUK Game · educational simulation",
    title: "Rules, not PnL.",
    body: "A real historical chart runs. Enter when the pattern locks, respect the stop, wait for the target. The result is measured in R, the multiple of the risk you took, not in money.",
    cta: "Start the game",
    secondary: "How to play",
    crumb: "NUUK Game",
    anchors: { game: "play", how: "how-to-play" },
    play: {
      title: "60 seconds, one rule set.",
      lead: "You are in the position for as long as you hold the key; the moment you let go, it closes. On desktop you can also play with the arrow keys or W and S.",
      heading: "Game round",
    },
    how: {
      title: "How to play",
      steps: [
        { title: "The chart runs", body: "Real historical price action plays as 150 candles in 60 seconds. Which market and which date it is are revealed when the round ends." },
        { title: "A pattern locks", body: "When a hammer, engulfing or star pattern forms, the chart marks it and shows the stop level." },
        { title: "Hold, then release", body: "You are in the position for as long as you hold the LONG or SHORT key. It closes on its own at the stop (−1R) or at the target (+2R)." },
        { title: "R and discipline", body: "The result is written in R, with the trading cost deducted. The discipline score shows how many of your entries followed the rule." },
      ],
    },
    measures: {
      title: "What NUUK Game measures",
      lead: "This is process practice, not a game about making money. At the end of every round you also see what the rule did mechanically on that chart.",
      note: "The patterns here are general teaching examples, not NUUK's trading systems. They should not be assumed to provide a profitable edge on their own.",
      educationCta: "Education programme",
      kicker: "What counts towards the discipline score",
      items: [
        "Waiting: entering when there is no pattern counts as off-rule.",
        "Respecting the stop: the loss stays limited to the risk known from the start.",
        "Waiting for the target: an early exit shrinks the result in R.",
        "One setup, one entry: entering the same pattern a second time is off-rule.",
      ],
    },
    risk: {
      label: "Risk warning",
      lead: "Educational simulation.",
      body: "It is played on historical market data; no real trades are placed and no real money is used. Not investment advice. Results in the simulation do not represent real trading results; past results do not indicate future results.",
    },
  },
  teaser: {
    kicker: "NUUK Game · educational simulation",
    heading: "You know the rule. Can you follow it for 60 seconds?",
    body: "A real historical chart runs. Enter when the pattern locks, respect the stop, wait for the target. At the end of the round you see your result and your discipline score.",
    points: ["60 seconds, a real historical chart", "The score is not PnL: R and a discipline score", "Free, no membership needed"],
    cta: "Start the game",
    disclaimer: "Educational simulation; no real trades are placed. Not investment advice.",
  },
};

const tr: TrainerStrings = {
  dateLocale: "tr-TR",
  terms: { long: "LONG", short: "SHORT" },
  patterns: {
    star: {
      names: ["Sabah Yıldızı", "Akşam Yıldızı"],
      lesson: "Güçlü bir mumun ardından kararsız küçük bir mum, sonra ters yönde güçlü bir kapanış gelir. Momentumun el değiştirdiğini anlatır.",
    },
    engulfing: {
      names: ["Yutan Boğa", "Yutan Ayı"],
      lesson: "İkinci mumun gövdesi bir önceki mumun gövdesini tamamen kaplar. Önceki hareketin reddedildiğini gösterir.",
    },
    hammer: {
      names: ["Çekiç", "Kayan Yıldız"],
      lesson: "Uzun fitil, fiyatın o bölgeden sert biçimde geri çevrildiğini gösterir. Fitilin ucu doğal stop seviyesidir.",
    },
  },
  reasons: { stop: "Stop çalıştı", target: "Hedef alındı", manual: "Elle kapatıldı", time: "Süre bitti" },
  timeframes: { "5m": "5 dakikalık", "15m": "15 dakikalık", "1h": "1 saatlik" },
  chart: { stop: "STOP", target: "+2R" },
  status: {
    idle: "Tur başlayınca formasyonlar burada duyurulur.",
    waiting: "Setup bekleniyor. Formasyon yokken girmek kural dışıdır.",
    locked: (name, dir) => `${name} kilitlendi. ${dir} için basılı tut.`,
    riding: (name, dir) => `${name} · ${dir}. Stop ve hedef çalışıyor, bırakınca kapanır.`,
    offRule: (dir) => `Kural dışı giriş · ${dir}. Formasyon yoktu, bırakınca kapanır.`,
    afterExit: (reason, r) => `${reason}: ${r}. Elini bırak, sonraki setup'ı bekle.`,
  },
  session: {
    disclaimer: "Eğitim simülasyonudur, yatırım tavsiyesi değildir.",
    dailyLabel: (number) => `Günün grafiği #${number}`,
    dailyLabelPlain: "Günün grafiği",
    freeLabel: "Serbest antrenman",
    replayNote: "Bu tur tekrar oyunuydu. Günün kayıtlı sonucu ilk oynadığın turdur.",
    unsavedNote: "Tarayıcın kayıt tutmaya izin vermediği için bu sonuç saklanmadı.",
    shareText: ({ label, total, discipline, url }) => `NUUK Game · ${label}\nToplam: ${total} · Disiplin: ${discipline}\n${tr.session.disclaimer}\n${url}`,
  },
  board: {
    idleLabel: "60 saniyelik tur",
    quit: "Turu bırak",
    canvasLabel: "Akan mum grafiği. Durum satırı grafiğin altında okunur.",
    holdLabel: (term) => `${term}: basılı tut, bırakınca kapanır`,
    hints: { long: "basılı tut · ↑ veya W", short: "basılı tut · ↓ veya S" },
    cued: "setup kilitlendi · basılı tut",
    stats: {
      total: { label: "Toplam", short: "Toplam" },
      open: { label: "Açık pozisyon", short: "Açık" },
      rule: { label: "Kurala uygun giriş", short: "Kural" },
      time: { label: "Süre", short: "Süre" },
    },
  },
  game: {
    intro: "Herkes aynı grafiği oynar ya da rastgele bir grafikte serbest çalışırsın. Piyasa ve tarih tur bitince açıklanır.",
    saved: (total, discipline) => `Bugünkü sonucun: ${total} · disiplin ${discipline}. Tekrar oynayabilirsin, ilk sonuç kayıtlı kalır.`,
    loading: "Grafik yükleniyor…",
    error: "Grafik verisi yüklenemedi. Bağlantını kontrol edip tekrar dene.",
    retry: "Tekrar dene",
  },
  results: {
    heading: (label) => `${label} · sonuç`,
    summary: (count, wins) => `${count} işlem · ${wins} kazanç · maliyet dahil net sonuç`,
    disciplineTitle: "Disiplin",
    disciplineNone: "Hiç giriş yapmadın, puan hesaplanmadı.",
    disciplineCaption: (count, ruleBased) => `${count} girişin ${ruleBased} tanesi kilitlenen formasyonun yönündeydi.`,
    mechanicalTitle: "Kural mekanik uygulansaydı",
    mechanicalLine: (counts) =>
      `${counts.total} setup: ${counts.target} hedef, ${counts.stop} stop` +
      (counts.open > 0 ? `, ${counts.open} sonuçlanmadı` : "") +
      (counts.invalid > 0 ? `, ${counts.invalid} boşluk nedeniyle geçersiz` : "") +
      ".",
    mechanicalNote: "Her setup sonraki mumun açılışından oynatıldı, maliyet dahil. Tek grafik istatistik değildir.",
    ridesTitle: "İşlemlerin",
    ridesNone: "Hiç işlem açmadın. Beklemek de bir karardır; formasyon kilitlendiğinde denemek için tekrar oyna.",
    offRule: "Kural dışı giriş",
    rideDetail: (reason, cost) => `${reason} · maliyet ${cost}R`,
    chartTitle: "Grafik",
    chartLine: (timeframe) => `${timeframe} mumlar · kaynak: Hyperliquid`,
    replay: "Aynı grafiği tekrar oyna",
    newChart: "Yeni grafik",
    share: "Sonucu paylaş",
    shareOpened: "Paylaşım açıldı.",
    shareCopied: "Sonuç panoya kopyalandı.",
    shareCancelled: "Paylaşım iptal edildi.",
    shareFailed: "Paylaşılamadı. Tarayıcın panoya erişime izin vermiyor olabilir.",
    pastResults: "Geçmiş sonuçlar geleceği göstermez.",
  },
  ladder: {
    target: { name: "Hedef", note: "Fiyat buraya gelince işlem kendiliğinden kapanır." },
    entry: { name: "Giriş", note: "Formasyon kilitlenince, kendi yönünde." },
    stop: { name: "Stop", note: "Gerçekten çalışır. Zarar, baştan belli olan risktir." },
    caption: "R, o işlemde aldığın riskin katıdır. Sonuç para ile değil R ile yazılır.",
  },
  page: {
    meta: {
      title: "NUUK Game · 60 saniyelik kural oyunu",
      description:
        "Gerçek geçmiş grafikte 60 saniyelik kural oyunu: formasyon kilitlenince gir, stop'a sadık kal, hedefe sabret. Sonuç para ile değil R ile ölçülür. Eğitim simülasyonudur, yatırım tavsiyesi değildir.",
    },
    kicker: "NUUK Game · eğitim simülasyonu",
    title: "PnL değil, kural.",
    body: "Gerçek geçmiş grafik akar. Formasyon kilitlenince gir, stop'a sadık kal, hedefe sabret. Sonuç para ile değil R ile, yani aldığın riskin katıyla ölçülür.",
    cta: "Oyuna başla",
    secondary: "Nasıl oynanır",
    crumb: "NUUK Game",
    anchors: { game: "oyun", how: "nasil-oynanir" },
    play: {
      title: "60 saniye, tek kural seti.",
      lead: "Tuşu basılı tuttuğun sürece pozisyondasın, bıraktığın an kapanır. Masaüstünde ok tuşları ya da W ve S ile de oynanır.",
      heading: "Oyun turu",
    },
    how: {
      title: "Nasıl oynanır",
      steps: [
        { title: "Grafik akar", body: "Gerçek geçmiş fiyat hareketi 60 saniyede 150 mum olarak oynar. Hangi piyasa ve hangi tarih olduğu tur bitince açıklanır." },
        { title: "Formasyon kilitlenir", body: "Çekiç, yutan mum ya da yıldız formasyonu oluştuğunda grafik onu işaretler ve stop seviyesini gösterir." },
        { title: "Basılı tut, bırak", body: "LONG ya da SHORT tuşunu basılı tuttuğun sürece pozisyondasın. Stop −1R'de, hedef +2R'de kendiliğinden kapanır." },
        { title: "R ve disiplin", body: "Sonuç R ile yazılır ve işlem maliyeti düşülür. Disiplin puanı, girişlerinin kaçının kurala uygun olduğunu gösterir." },
      ],
    },
    measures: {
      title: "NUUK Game neyi ölçer",
      lead: "Bu bir kazanç oyunu değil, süreç çalışmasıdır. Her turun sonunda kuralın o grafikte mekanik olarak ne yaptığını da görürsün.",
      note: "Buradaki formasyonlar genel eğitim örnekleridir, NUUK'un işlem sistemleri değildir. Tek başlarına kazanç avantajı sağladıkları varsayılmamalıdır.",
      educationCta: "Eğitim programı",
      kicker: "Disiplin puanına girenler",
      items: [
        "Beklemek: formasyon yokken girmek kural dışı sayılır.",
        "Stop'a sadık kalmak: zarar, baştan belli olan riskle sınırlı kalır.",
        "Hedefe sabretmek: erken çıkış sonucu R olarak küçültür.",
        "Bir setup, bir giriş: aynı formasyona ikinci kez girmek kural dışıdır.",
      ],
    },
    risk: {
      label: "Risk uyarısı",
      lead: "Eğitim simülasyonudur.",
      body: "Geçmiş piyasa verisi üzerinde oynanır, gerçek işlem yapılmaz ve gerçek para kullanılmaz. Yatırım tavsiyesi değildir. Simülasyondaki sonuçlar gerçek işlem sonuçlarını temsil etmez; geçmiş sonuçlar geleceği göstermez.",
    },
  },
  teaser: {
    kicker: "NUUK Game · eğitim simülasyonu",
    heading: "Kuralı biliyorsun. 60 saniye uygulayabiliyor musun?",
    body: "Gerçek geçmiş grafik akar. Formasyon kilitlenince gir, stop'a sadık kal, hedefe sabret. Tur sonunda sonucunu ve disiplin puanını görürsün.",
    points: ["60 saniye, gerçek geçmiş grafik", "Skor PnL değil: R ve disiplin puanı", "Ücretsiz, üyelik yok"],
    cta: "Oyuna başla",
    disclaimer: "Eğitim simülasyonudur, gerçek işlem yapılmaz. Yatırım tavsiyesi değildir.",
  },
};

const STRINGS: Readonly<Record<GameLang, TrainerStrings>> = { en, tr };

export function getStrings(lang: GameLang): TrainerStrings {
  return STRINGS[lang];
}

export function dirLabel(t: TrainerStrings, dir: Dir): string {
  return dir > 0 ? t.terms.long : t.terms.short;
}

/** Display name of a pattern: the bullish name for a long setup, the bearish one for a short. */
export function patternName(t: TrainerStrings, kind: PatternKind, dir: Dir): string {
  return t.patterns[kind].names[dir > 0 ? 0 : 1];
}
