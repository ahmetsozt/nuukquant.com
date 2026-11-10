/** Oyunun tum sabitleri tek yerde. */
export const CONFIG = Object.freeze({
  /** Tur baslamadan once ekranda gorunen gecmis mum sayisi. */
  WARMUP_BARS: 70,
  /** Bir turda oynanan mum sayisi. */
  PLAY_BARS: 150,
  /** Oynatma hizi. 150 mum / 2.5 = 60 saniye. */
  BARS_PER_SECOND: 2.5,
  /** Setup olustuktan sonra kurala uygun giris icin taninan mum sayisi. */
  ENTRY_WINDOW_BARS: 4,
  /** Hedef, riskin kac kati. */
  TARGET_R: 2,
  /** Gidis-donus islem maliyeti, baz puan. R hesabindan duser. */
  FEE_BPS_ROUND_TRIP: 6,
  /** Setup disi giriste kullanilan stop mesafesi, ATR kati. */
  FALLBACK_STOP_ATR: 1.5,
  /** Kurala uygun giriste R birimi en az bu kadardir (ATR kati); stop'a cok yakin giris R'yi sisirmez. */
  MIN_RISK_ATR: 0.5,
  ATR_PERIOD: 14,
  /** Iki setup arasinda birakilan en az mum sayisi. */
  SETUP_SPACING_BARS: 5,
  /** Gunluk grafik secerken denenen aday pencere sayisi. */
  WINDOW_CANDIDATES: 24,
  /** Mekanik sonuc hesabinda tur bitiminden sonra bakilan mum sayisi. */
  RESOLVE_LOOKAHEAD_BARS: 60,
  /** Gunluk sayacin baslangic gunu (UTC). */
  DAILY_EPOCH: '2026-11-10',
});
