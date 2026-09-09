import type { ContentOverride } from "@/i18n";

/**
 * Türkçe içerik. Yalnızca çevrilen alanlar yer alır; eksik anahtarlar İngilizceye düşer
 * (bkz. src/i18n.ts). Diziler indeks bazlı birleştirildiği için uzunluk ve sıra
 * en.ts ile birebir aynıdır. "[FILL…]" yer tutucuları bilinçli olarak İngilizce bırakılmıştır.
 * insights.posts[].category çevrilmez: InsightsList filtresi İngilizce sekme adlarıyla eşleşir.
 */
export const tr: ContentOverride = {
  meta: {
    "title": "Ahmet S. Öztürk | Ekonomist, Yatırımcı, NUUK Kurucusu",
    "description": "DIFC (Dubai) merkezli ekonomist ve yatırımcı. Yapay zekâ destekli sistematik işlem stratejileri, portföy yönetimi, aracı kurum ortaklıkları, araştırma ve sinyal hizmetleri, yatırımcı eğitimi."
  },
  brand: {
    "role": "Ekonomist · Yatırımcı · Kurucu",
    "office": "Dubai Uluslararası Finans Merkezi (DIFC), Dubai, BAE"
  },
  ui: {
    "scrollDown": "Aşağı kaydır",
    "contact": "İletişim",
    "getStarted": "Görüşme Talep Edin",
    "contactUs": "İletişim",
    "learnMore": "Ayrıntılı bilgi",
    "language": "Dil",
    "openMenu": "Menüyü aç",
    "closeMenu": "Menüyü kapat",
    "home": "Ana Sayfa",
    "noPosts": "Bu kategoride henüz yayın bulunmuyor.",
    "riskDisclosure": "Risk Bildirimi",
    "verified": "Doğrulanmış",
    "live": "Canlı",
    "test": "Test aşamasında",
    "paused": "Askıda",
    "soon": "Yakında",
    "pending": "Doğrulama sürecinde",
    "verificationInProgress": "Doğrulama sürecinde",
    "updated": "Güncelleme",
    "since": "Başlangıç",
    "source": "Kaynak",
    "openAccount": "Hesap Açın",
    "compare": "Aracı kurumları karşılaştırın",
    "subscribe": "Abone Olun",
    "register": "Kayıt Olun",
    "requestDemo": "Demo Talep Edin",
    "viewAll": "Tümünü Görüntüle",
    "readMore": "Devamını okuyun",
    "fill": "",
    "telegram": "Telegram",
    "whatsapp": "WhatsApp",
    "legal": "Yasal",
    "followUs": "Takip edin",
    "riskBar": {
      "pre": "CFD ve forex gibi kaldıraçlı ürünlerde işlem yapmak yüksek risk içerir; sermayenizin tamamını hızla kaybedebilirsiniz.",
      "strong": "Geçmiş performans gelecekteki sonuçların göstergesi değildir.",
      "post": "Bu sitedeki hiçbir içerik kişisel yatırım tavsiyesi niteliği taşımaz."
    }
  },
  nav: [
    {
      "label": "Hizmetler",
      "items": [
        {
          "label": "Algoritmik İşlem Sistemleri"
        },
        {
          "label": "Performans Kaydı"
        },
        {
          "label": "Portföy Yönetimi"
        },
        {
          "label": "Aracı Kurum Ortaklıkları"
        },
        {
          "label": "Araştırma ve Sinyaller"
        },
        {
          "label": "Yatırımcı Eğitimi"
        }
      ]
    },
    {
      "label": "Aracı Kurumlar"
    },
    {
      "label": "Performans"
    },
    {
      "label": "Analizler"
    },
    {
      "label": "Kurumsal",
      "items": [
        {
          "label": "Hakkında"
        },
        {
          "label": "İletişim"
        },
        {
          "label": "Risk Bildirimi"
        },
        {
          "label": "Tanıtım Aracısı (IB) Bildirimi"
        }
      ]
    }
  ],
  legalLinks: [
    {
      "label": "Risk Bildirimi"
    },
    {
      "label": "IB Bildirimi"
    },
    {
      "label": "Gizlilik Politikası"
    },
    {
      "label": "Kullanım Koşulları"
    }
  ],
  socials: [{ label: "LinkedIn" }, { label: "X" }, { label: "Instagram" }],

  home: {
    "hero": {
      "visualTag": "Algoritmik İşlem · Portföy Yönetimi",
      "visualAlt": "Karanlık stüdyoda NUUK renklerinde Formula 1 aracı",
      "kicker": "Ekonomist · Yatırımcı · NUUK Kurucusu",
      "title": "Piyasalarda disiplinli, sistematik yaklaşım.",
      "lead": "NUUK, yapay zekâ destekli sistematik işlem stratejileri geliştiren, kurucusunun kendi sermayesini ve yatırımcı portföylerini yazılı risk limitleri dâhilinde yöneten, düzenlemeye tabi aracı kurumlarla çalışan bir yatırım kuruluşudur. Sunulan her rakam doğrulanabilir kaynaklara dayanır.",
      "primary": {
        "label": "Aracı Kurum Seçin"
      },
      "secondary": {
        "label": "Görüşme Talep Edin"
      },
      "portraitAlt": "Ahmet S. Öztürk",
      "trustLine": [
        "FCA, ASIC, CySEC ve DFSA denetimindeki ortak aracı kurumlar",
        "Bağımsız doğrulama sürecindeki performans kaydı",
        "DIFC, Dubai merkezli"
      ],
      "trust": [
        {
          "value": "17",
          "label": "yıllık piyasa deneyimi; 2009'da Londra'da bir FX işlem masasında başladı"
        },
        {
          "value": "87",
          "label": "2026'dan bu yana geriye dönük testten geçirilen strateji varyantı; üçü üretimde ve algoritmik sistemler sayfasında belgelenmiş durumda"
        },
        {
          "value": "3,000+",
          "label": "webinar ve seminerlerde eğitim verilen yatırımcı"
        },
        {
          "value": "10+",
          "label": "aracı kurum ortaklığı; altısı bu sitede listelenmektedir"
        }
      ],
      "pressTitle": "Partner Aracı Kurumlar"
    },
    "markets": {
      "kicker": "Canlı fiyatlar",
      "title": "Piyasalar, şu anda",
      "lead": "TradingView üzerinden canlı akan kotasyonlar: forex, emtia, endeksler, kripto varlıklar ve takip edilen hisseler.",
      "tabs": [
        "Forex",
        "Emtia",
        "Endeksler",
        "Kripto",
        "Hisseler"
      ],
      "note": "Kotasyonlar TradingView ve veri ortakları tarafından sağlanır; bazı borsa verileri gecikmeli olabilir. İşlem koşulları, spread'ler ve emir gerçekleştirme, işlem yaptığınız aracı kuruma aittir."
    },
    "numbersTitle": "Doğrulanabilir rakamlar*",
    "numbersNote": "*Rakamlar Eylül 2026 itibarıyladır. Doğrulama bağlantıları, her salt okunur hesap bağlantısı devreye alındıkça performans kaydı sayfasına eklenir.",
    "promo": {
      "kicker": "Portföy yönetimi",
      "title": "Hesap sizin adınıza. İşlem yetkisi NUUK'ta. Limitler yazılı.",
      "body": "Sermaye hiçbir aşamada müşterinin adından çıkmaz. Ortak aracı kurumda kendi adınıza hesap açarsınız; NUUK yalnızca işlem yetkisi alır ve yazılı risk mandası toplam pozisyon ile günlük zarar limitini belirler.",
      "figure": "300+",
      "figureLabel": "yönetilen hesap; her biri müşterinin kendi aracı kurum hesabında. Saklama hiçbir zaman el değiştirmez.",
      "cta": {
        "label": "Nasıl çalışır?"
      }
    },
    "postsLead": "Makro, FX, emtia, endeksler, kripto varlıklar ve algoritmik işlem. Beş dakikada okunacak biçimde hazırlanır.",
    "pillarsTitle": "Hizmet alanları",
    "pillarsLead": "Beş hizmet alanı, tek ilke: sermaye her zaman müşterinin kendi hesabında kalır.",
    "pillars": [
      {
        "title": "Algoritmik İşlem Sistemleri",
        "body": "FX, endeksler, kıymetli madenler ve dijital varlıklarda geliştirilen, geriye ve ileriye dönük testlerden geçirilen ve canlı çalıştırılan özel algoritmalar.",
        "who": "Fon yöneticileri ve nicel yatırımcılar için"
      },
      {
        "title": "Doğrulanmış Performans Kaydı",
        "body": "Kurucunun kendi portföyü ve yönetilen stratejiler, bağımsız doğrulama servisleri üzerinden raporlanır.",
        "who": "Karar öncesi kanıt görmek isteyen yatırımcılar için"
      },
      {
        "title": "Portföy Yönetimi",
        "body": "Sermaye müşterinin kendi aracı kurum hesabında kalır; işlemler yazılı risk mandası ve performans ücreti esasıyla yürütülür.",
        "who": "Profesyonel yönetim isteyen yatırımcılar için"
      },
      {
        "title": "Aracı Kurum Ortaklıkları",
        "body": "Birlikte çalışılan aracı kurumların bağımsız karşılaştırması ve her biri için adım adım hesap açma rehberi.",
        "who": "Aracı kurum seçen, işlemini kendisi yapan yatırımcılar için"
      },
      {
        "title": "Araştırma, Sinyal ve Eğitim",
        "body": "Günlük piyasa notları, haftalık raporlar, gerekçeli işlem fikirleri ve yöntemi öğreten canlı eğitimler.",
        "who": "Bilgi ve yöntem edinmek isteyen yatırımcılar için"
      }
    ],
    "record": {
      "kicker": "Performans kaydı",
      "title": "Bağımsız olarak doğrulanabilir sonuçlar",
      "lead": "Sonuçlar işlem maliyetleri düşülmüş olarak raporlanır. Canlı hesap ekstreleri, her aracı kurum bağlantısı devreye alındıkça yayımlanır.",
      "featuredLabel": "Özkaynak eğrisi",
      "featuredNote": "Walk-forward backtest 2010–2026, swap ve komisyon düşülmüş, 100'e endekslenmiş. Yıllıklandırılmış getiri +%10,9, maksimum düşüş %6,7, Sharpe oranı 1,36.",
      "cta": {
        "label": "Performans kaydının tamamı"
      }
    },
    "brokers": {
      "kicker": "Aracı kurum ortaklıkları",
      "title": "Birlikte çalışılan aracı kurumlar",
      "lead": "Yalnızca fiilen işlem yapılan veya incelenen aracı kurumlar listelenir. Her kartta düzenleyici otorite, gerçek spread'ler ve para yatırma/çekme koşulları yer alır.",
      "cta": {
        "label": "Tüm aracı kurumları karşılaştırın"
      }
    },
    "systems": {
      "kicker": "Algoritmik işlem",
      "title": "Kurum içinde geliştirilen sistemler",
      "lead": "Her sistem belgelenmiştir: veri, model, risk kuralları, emir gerçekleştirme ve güncel durum (canlı veya test aşamasında).",
      "cta": {
        "label": "Sistemleri inceleyin"
      }
    },
    "signals": {
      "kicker": "Araştırma ve sinyaller",
      "title": "Gerekçesi ile sunulan işlem fikirleri",
      "lead": "Enstrüman, yön, giriş, zarar durdur, hedef ve gerekçe. Telegram ve e-posta ile iletilir.",
      "sample": {
        "entry": "4,392",
        "stop": "4,368",
        "target": "4,464",
        "rr": "1:3",
        "note": "Altın, güçlü tarım dışı istihdam verisine rağmen 4.380–4.400 talep bölgesini korudu; reel getiriler yeni zirve yapmadı. 4.392 üzerinde alım, zarar durdur bölgenin altında 4.368; hedef önceki tepe olan 4.464. Risk özkaynağın %0,5'i; ABD TÜFE %3,4'ün üzerinde gelirse pozisyon yarıya indirilir.",
        "date": "8 Eyl 2026 · temsili örnek"
      },
      "cta": {
        "label": "Planları inceleyin"
      }
    },
    "education": {
      "kicker": "Yatırımcı eğitimi",
      "title": "Yaklaşan canlı oturum",
      "cta": {
        "label": "Tüm etkinlikler"
      }
    },
    "testimonialsTitle": "Yatırımcı görüşleri",
    "postsTitle": "Güncel analizler"
  },

  about: {
    "metaTitle": "Ahmet S. Öztürk Hakkında",
    "metaDescription": "Ekonomist, yatırımcı ve NUUK kurucusu. FX ve CFD piyasalarında on yedi yıl: Londra'daki bir işlem masasından Dubai'de yapay zekâ destekli bir yatırım kuruluşuna.",
    "kicker": "Hakkında",
    "title": "Ekonomist bakışı, işlemci disiplini, mühendis titizliği.",
    "lead": "Kariyerime 2009'da Londra'da bir FX aracı kurumunun işlem masasında başladım; sonraki yedi yılı Londra ve İstanbul'daki aracı kurumlarda geçirdim ve IKON Finance'te Uluslararası FX Bölüm Başkanı olarak tamamladım. 2016'da kurduğum İşlem Odası, 700'ün üzerinde müşteriye ve 26 milyon USD'yi aşan müşteri hacmine ulaşan bir tanıtım aracısı (IB) ve müşteri ilişkileri kuruluşudur. 2025'te Dubai'ye taşınarak NUUK'u kurdum: FX, altın, endeksler ve dijital varlıklarda sistematik stratejiler geliştiren ve bunları portföy yönetimi, araştırma hizmetleri ve eğitim yoluyla yatırımcılara sunan bir yatırım kuruluşu.",
    "portraitAlt": "Ahmet S. Öztürk",
    "timelineTitle": "Kariyer",
    "timeline": [
      {
        "year": "2005–2008",
        "title": "Seneca College, Toronto",
        "body": "Uluslararası İşletme Yönetimi (co-op programı)."
      },
      {
        "year": "2009–2011",
        "title": "FXCM, Londra",
        "body": "FX aracı kurum işlem masası: emir gerçekleştirme, likidite ve müşteri riski yönetimi."
      },
      {
        "year": "2011–2014",
        "title": "Tacirler Yatırım ve ALB Menkul, İstanbul",
        "body": "Yurt içi piyasanın kaldıraçlı işlemlere açıldığı dönemde iki aracı kurumda FX uzmanlığı."
      },
      {
        "year": "2014–2016",
        "title": "IKON Finance",
        "body": "Uluslararası FX Bölüm Başkanı; uluslararası müşteri portföyü %27 büyütüldü."
      },
      {
        "year": "2016–2025",
        "title": "İşlem Odası, İstanbul",
        "body": "Tanıtım aracısı (IB) ve müşteri ilişkileri kuruluşu: 700'ün üzerinde müşteri, 26 milyon USD'yi aşan müşteri hacmi, 2,5 milyon USD kümülatif ortaklık geliri."
      },
      {
        "year": "2025",
        "title": "NUUK, Dubai",
        "body": "Dubai Uluslararası Finans Merkezi'nde kuruluş: algoritmik işlem sistemleri, portföy yönetimi, aracı kurum ortaklıkları, araştırma ve eğitim."
      }
    ],
    "principlesTitle": "Çalışma ilkeleri",
    "principles": [
      {
        "title": "Kanıt esası",
        "body": "Bu sitedeki her iddia doğrulanabilir bir kaynağa dayanır; dayanmıyorsa yayımlanmaz."
      },
      {
        "title": "Önce risk, sonra getiri",
        "body": "Pozisyon büyüklüğü, maksimum düşüş limitleri ve zarar durdur kuralları her işlemden önce belirlenir."
      },
      {
        "title": "Saklama müşteride kalır",
        "body": "Yönetilen hesaplar müşterinin kendi aracı kurum hesabında çalışır. NUUK hiçbir zaman saklama yetkisi üstlenmez."
      },
      {
        "title": "Yöntem aktarımı",
        "body": "Eğitimin amacı, yatırımcının kendi kararlarını bağımsız olarak verebilmesidir."
      }
    ],
    "focusTitle": "Takip edilen piyasalar",
    "focus": [
      "BIST",
      "NYSE",
      "Forex",
      "Kripto varlıklar",
      "Fonlar",
      "Emtia",
      "Gayrimenkul",
      "Aile servetleri"
    ],
    "speakingTitle": "Yayın kanalları",
    "speaking": [
      "Telegram · @NUUKQuant: günlük piyasa notları, işlem fikirleri ve aylık sistem raporu",
      "X · @AhmetSTurk: piyasa değerlendirmeleri ve araştırma dizileri",
      "LinkedIn · NUUK.: kurumsal duyurular ve kapsamlı araştırmalar",
      "Instagram · @ahmetsturk: işlem masasından notlar"
    ]
  },

  aiTrading: {
    "metaTitle": "Algoritmik İşlem Sistemleri",
    "metaDescription": "Özel algoritmik işlem sistemleri: metodoloji, risk kuralları ve canlı durum.",
    "kicker": "Algoritmik işlem",
    "title": "Kara kutu değil, belgelenmiş sistemler",
    "lead": "Her sistem gerçek sermayeye alınmadan önce geliştirilir, geriye dönük ve ileriye dönük testlerden geçirilir. Aşağıda her sistemin işlem evreni, risk yönetimi ve güncel durumu yer almaktadır.",
    "cta": {
      "label": "Demo Talep Edin"
    },
    "systemsTitle": "Sistemler",
    "methodTitle": "Metodoloji",
    "method": [
      {
        "title": "Veri",
        "body": "Birincil piyasalardan tick ve bar verisi; temizlenmiş ve zaman ekseninde hizalanmış. Katma değer sağladığı ölçüde alternatif veri."
      },
      {
        "title": "Model",
        "body": "Kural tabanlı sinyaller ile makine öğrenimi filtrelerinin bileşimi. Tek paragrafta açıklanamayan hiçbir mantık işleme alınmaz."
      },
      {
        "title": "Risk",
        "body": "Volatiliteye göre ölçeklenen pozisyon büyüklüğü, katı günlük zarar limitleri ve tüm pozisyonları kapatan devre kesiciler."
      },
      {
        "title": "Emir gerçekleştirme",
        "body": "Aracı kurum API'leri ve mümkün olduğunda FIX bağlantısı; kayma ve gerçekleşme kalitesi piyasa bazında izlenir."
      },
      {
        "title": "Gözden geçirme",
        "body": "Canlı ve beklenen performansın haftalık karşılaştırması. Sapma gösteren sistemler askıya alınır; işlem sırasında parametre değiştirilmez."
      }
    ],
    "faqTitle": "Sık sorulan sorular",
    "faq": [
      {
        "q": "Sistemleri kendi hesabımda çalıştırabilir miyim?",
        "a": "Evet. Aracı kuruma bağlı olarak kopya işlem yapabilir, Tickmill, Saxo Bank veya Midas'taki MAM/PAMM yapısına katılabilir ya da sinyal kanalını takip ederek işlemleri kendiniz gerçekleştirebilirsiniz. Her durumda hesap sizin adınıza kalır."
      },
      {
        "q": "Minimum sermaye ne kadardır?",
        "a": "Kopya işlem ve sinyal hizmetleri için 1.000 USD. Portföy yönetimi kapsamındaki MAM/PAMM hesapları, portföy yönetimi sayfasında belirtilen minimum tahsis tutarından başlar."
      },
      {
        "q": "Kaynak kod paylaşılıyor mu?",
        "a": "Hayır. Kod NUUK'un fikrî mülkiyetidir. Yayımlanan unsurlar metodoloji, risk kuralları ve doğrulanmış sonuçlardır."
      }
    ]
  },

  trackRecord: {
    "metaTitle": "Performans Kaydı",
    "metaDescription": "Ahmet S. Öztürk'ün kendi portföyüne ve yönetilen stratejilere ait, bağımsız doğrulamaya tabi performans kaydı.",
    "kicker": "Performans kaydı",
    "title": "Yalnızca doğrulanabilir sonuçlar yayımlanır",
    "lead": "Hesaplar Tickmill, Saxo Bank, Scope Markets, Dukascopy, Midas ve Capital.com nezdinde tutulmaktadır. Her hesap salt okunur bir doğrulama servisine bağlanmaktadır; bağlantı devreye alındıkça rakamlar bu sayfada otomatik olarak yayımlanır. Doğrulanamayan hiçbir rakam bu sayfada yer almaz.",
    "disclaimer": "Geçmiş performans gelecekteki sonuçların göstergesi değildir. Aksi belirtilmedikçe rakamlar işlem maliyetleri düşülmüş, performans ücreti düşülmemiş hâldedir.",
    "methodologyTitle": "Rakamların okunması",
    "methodology": [
      {
        "title": "Doğrulanmış",
        "body": "Aracı kurum hesabına salt okunur bağlantıyla bağlıdır. Rakamlar bu site tarafından değil, doğrulama servisi tarafından hesaplanır."
      },
      {
        "title": "Maksimum düşüş (drawdown)",
        "body": "Açık pozisyonlar dâhil, hesap özkaynağındaki en büyük zirve-dip düşüşü."
      },
      {
        "title": "Kâr faktörü",
        "body": "Brüt kârın brüt zarara oranı. 1,0'ın üzeri, stratejinin dönem boyunca net kazanç sağladığını gösterir."
      }
    ],
    "pending": "Canlı hesap ekstreleri, her aracı kurumun salt okunur bağlantısı devreye alındıkça eklenir. %87 sinyal başarı oranı kurum içi kayda dayanır."
  },

  managed: {
    "metaTitle": "Portföy Yönetimi",
    "metaDescription": "Portföy yönetimi nasıl çalışır: sermaye müşterinin kendi aracı kurum hesabında kalır ve yazılı risk limitleri dâhilinde yönetilir.",
    "kicker": "Portföy yönetimi",
    "title": "Hesap sizin adınıza. İşlem yetkisi NUUK'ta. Limitler yazılı.",
    "lead": "Sermaye hiçbir aşamada müşterinin adından çıkmaz. Ortak aracı kurumda kendi adınıza hesap açar ve yönetilen yapıya bağlarsınız; NUUK işlemleri yazılı risk mandası dâhilinde yürütür.",
    "cta": {
      "label": "Tanışma Görüşmesi Talep Edin"
    },
    "howTitle": "Süreç",
    "how": [
      {
        "title": "Tanışma görüşmesi",
        "body": "Hedefler, vade, likidite ihtiyacı ve gerçekçi olarak tahammül edilebilecek maksimum düşüş belirlenir."
      },
      {
        "title": "Hesap kurulumu",
        "body": "Ortak aracı kurumda kendi adınıza hesap açar ve fonlarsınız. NUUK yalnızca işlem yetkisi alır; para çekme yetkisi hiçbir zaman devredilmez."
      },
      {
        "title": "Risk mandası",
        "body": "Yazılı manda; maksimum pozisyon, günlük zarar limiti ve izin verilen enstrümanları belirler. Sistem bu sınırları aşamaz."
      },
      {
        "title": "Raporlama",
        "body": "Her işlem kendi hesabınızda gerçek zamanlı görüntülenir; ayrıca aylık rapor ve üç ayda bir değerlendirme görüşmesi yapılır."
      }
    ],
    "tiersTitle": "İki tahsis modeli",
    "tiers": [
      {
        "name": "Havuz MAM",
        "tagline": "Sistemler, kendi hesabınızın içinde",
        "minimum": "1.000 USD",
        "managementFee": "Yok",
        "performanceFee": "Yüksek su işaretinin (high-water mark) üzerindeki kârın %25'i",
        "lockup": "30 gün; ardından dilediğiniz zaman çekebilirsiniz",
        "structure": "Tickmill veya Darwinex'te MAM / kopya işlem havuzu",
        "forWhom": "Sistemleri kendisi çalıştırmak istemeyen bireysel yatırımcılar"
      },
      {
        "name": "Özel Hesap",
        "tagline": "Size özel manda ve risk limitleri",
        "minimum": "250.000 USD",
        "managementFee": "Aylık 1.000 USD (minimum tutarda yıllık yaklaşık %4,8; üzerinde oransal olarak düşer)",
        "performanceFee": "Yüksek su işaretinin (high-water mark) üzerindeki kârın %25'i",
        "lockup": "30 gün önceden bildirim",
        "structure": "Saxo Bank, Tickmill veya Midas'ta PAMM ya da ayrı yönetilen hesap",
        "forWhom": "Aile ofisleri, kurumsal hazineler ve profesyonel yatırımcılar"
      }
    ],
    "tierLabels": {
      "minimum": "Minimum tahsis",
      "managementFee": "Yönetim ücreti",
      "performanceFee": "Performans ücreti",
      "lockup": "Kilit süresi",
      "structure": "Yapı",
      "forWhom": "Hedef kitle"
    },
    "termsTitle": "Genel koşullar",
    "terms": [
      {
        "label": "Saklama",
        "value": "Her zaman aracı kurumda ve müşterinin adına; NUUK yalnızca işlem yetkisine sahiptir"
      },
      {
        "label": "Raporlama",
        "value": "Hesabınızda gerçek zamanlı; aylık ekstre; üç ayda bir değerlendirme görüşmesi"
      },
      {
        "label": "Risk mandası",
        "value": "Her hesap için yazılı: maksimum pozisyon, günlük zarar limiti, izin verilen enstrümanlar"
      },
      {
        "label": "Para çekme yetkisi",
        "value": "Yalnızca müşteride; NUUK hiçbir zaman para çekme veya transfer yetkisine sahip değildir"
      }
    ],
    "fitTitle": "Uygun yatırımcı profili",
    "fit": [
      "Saklamayı devretmeden profesyonel emir gerçekleştirme isteyen yatırımcılar",
      "Sistematik stratejilere uydu tahsis arayan aile ofisleri",
      "Atıl hazine bakiyesi bulunan işletme sahipleri"
    ],
    "notFitTitle": "Uygun olmayan profil",
    "notFit": [
      "%20 düzeyinde maksimum düşüşe tahammül edemeyen yatırımcılar",
      "Önümüzdeki 3 ay içinde ihtiyaç duyulacak sermaye",
      "Sabit veya garantili getiri bekleyen yatırımcılar"
    ],
    "compliance": "NUUK Quant, Dubai Uluslararası Finans Merkezi'nde faaliyet göstermektedir. Yönetilen hesaplar, ortak aracı kurumun kendi MAM/PAMM yapısı üzerinden ve o kurumun düzenleyici çerçevesi dâhilinde çalışır: NUUK yalnızca işlem yetkisine sahiptir; saklama veya para çekme yetkisi hiçbir zaman NUUK'a geçmez. Bugün yönetilen 300'ün üzerindeki hesap havuz MAM yapısındadır; özel mandalar bireysel olarak açılır."
  },

  brokers: {
    metaTitle: "Aracı Kurum Ortaklıkları",
    metaDescription: "Ortak aracı kurumların bağımsız karşılaştırması: düzenleyici otorite, spread'ler, para yatırma, platformlar ve adım adım hesap açma.",
    kicker: "Aracı kurum ortaklıkları",
    title: "Birlikte çalışılan aracı kurumlar",
    lead: "Yatırımcılar yalnızca fiilen işlem yapılan veya incelenen aracı kurumlara yönlendirilir. Güncel ortaklar: Pepperstone, Tickmill, Saxo Bank, Capital.com, Midas ve Darwinex. Her kartta düzenleyici otorite, gerçek işlem maliyetleri ve para yatırma/çekme koşulları yer alır.",
    disclosure: "Bu sayfadaki bağlantılar yönlendirme (referral) bağlantılarıdır. Bu bağlantılar üzerinden hesap açıp fonlamanız hâlinde NUUK aracı kurumdan komisyon elde eder. Bu durum ödediğiniz spread veya komisyonları değiştirmez.",
    compareTitle: "Karşılaştırma tablosu",
    partner: {
      "kicker": "Ortaklık programı",
      "title": "Tanıtım aracıları ve eğitmenler için",
      "body": "Bu aracı kurumlara hâlihazırda müşteri yönlendiriyorsanız NUUK ana tanıtım aracınız (master IB) olarak çalışabilir: aylık ödenen şeffaf komisyon paylaşımı, Türkçe, Arapça ve İngilizce hesap açma ve KYC desteği ve kendi kitleniz için kullanabileceğiniz aracı kurum karşılaştırma materyalleri. Alt ortaklık koşulları her aracı kurum için yazılı olarak belirlenir.",
      "points": [
        "Aylık ödenen şeffaf komisyon paylaşımı",
        "Üç dilde hesap açma ve KYC desteği",
        "Yeniden kullanılabilir aracı kurum karşılaştırma materyalleri"
      ],
      "cta": {
        "label": "Ortaklık görüşmesi talep edin"
      }
    },
    cardLabels: {
      "regulator": "Düzenleyici otorite",
      "licence": "Lisans",
      "founded": "Kuruluş",
      "minDeposit": "Minimum yatırım",
      "platforms": "Platformlar",
      "spreads": "Tipik spread'ler",
      "commission": "Komisyon",
      "leverage": "Maksimum kaldıraç",
      "funding": "Para yatırma",
      "withdrawal": "Para çekme süresi",
      "islamic": "Swap-free (İslami) hesap",
      "languages": "Müşteri desteği",
      "bestFor": "Uygun profil",
      "pros": "Güçlü yönler",
      "cons": "Dikkat edilmesi gerekenler",
      "steps": "Hesap açma adımları",
      "yes": "Evet",
      "no": "Hayır",
      "profile": "Tam profil",
      "allBrokers": "Tüm aracı kurumlar",
      "atAGlance": "Özet",
      "conditions": "İşlem koşulları",
      "about": "Aracı kurum hakkında",
      "website": "Resmî web sitesi",
      "faq": "Sık sorulan sorular",
      "openWith": "Fonlanmış bir hesaba beş adımda:",
      "verifyNote": "Koşullar 8 Eylül 2026 tarihinde aracı kurumun web sitesinden doğrulanmıştır. Fonlama öncesinde güncel değerleri kontrol ediniz."
    },
    list: [
      {
        tagline: "0,0 pip'ten başlayan ham spread'ler, beş platform, dokuz lisanslı kuruluş",
        regulator: "FCA · ASIC · CySEC · DFSA · BaFin · SCB · CMA",
        licence: "DFSA F004356, Pepperstone Financial Services (DIFC) Ltd · grup şirketleri FCA, ASIC, CySEC, BaFin, SCB, CMA altında",
        founded: "2010, Melbourne",
        minDeposit: "$0 · kartla $10",
        spreads: [{ value: "0,0 Razor · 1,0 Standard" }, { value: "Razor'da 0,08'den itibaren" }, { value: "0,4'ten itibaren" }],
        commission: "Razor: FX ve altında lot başına, işlem yönü başına $3,50 · Standard: yok (hisse CFD'leri hariç)",
        leverage: "Bireysel 1:30 (FCA, ASIC, CySEC, DFSA) · SCB'de 1:500'e kadar · SCB Pro 1:1000",
        funding: ["Visa / Mastercard", "Apple Pay", "Google Pay", "PayPal", "Skrill", "Neteller", "Banka havalesi", "Kripto"],
        withdrawalTime: "En fazla 1 iş günü",
        languages: "24/5 çok dilli, hafta sonu 18 saat · Türkçe destek masası yok",
        bestFor: "Ham spread'lerle işlem yapan aktif FX ve altın yatırımcıları; MT5, cTrader veya TradingView'da algoritmik işlem yapanlar",
        pros: [
          "Razor hesabı: 0,0 pip'ten başlayan spread'ler ve lot başına, işlem yönü başına sabit $3,50",
          "Dealing desk müdahalesi olmadan %99,59 emir gerçekleşme oranı",
          "1.350'den fazla piyasa: FX, endeksler, emtia, hisseler, ETF'ler ve kripto CFD'leri",
          "Ücretsiz para yatırma; kart, e-cüzdan ve kripto çekimleri bir iş günü içinde işlenir",
          "Yedi yargı bölgesinde düzenlenir, müşteri fonları birinci sınıf bankalarda ayrıştırılmış hesaplarda tutulur",
        ],
        cons: [
          "FCA, ASIC, CySEC ve DFSA kuruluşlarında bireysel kaldıraç 1:30 ile sınırlı",
          "Uluslararası banka havalesiyle çekimler $20 ücrete tabi ve 7 iş gününe kadar sürebilir",
          "Yalnızca CFD: dayanak hisseye veya coine hiçbir zaman sahip olmazsınız",
        ],
        steps: [
          "Yönlendirme bağlantısını açın ve Join now'a tıklayın. E-postanızla kayıt olun ve ücretsiz demo alın.",
          "Uygunluk sorularını yanıtlayın (yaklaşık 5 dakika).",
          "Kimliğinizi doğrulayın: resmî kimlik belgesi ve ikametgâh belgesi.",
          "Kart, Apple Pay, PayPal veya e-cüzdanla $10'dan itibaren fonlayın. Banka havalesinde alt sınır yok.",
          "Razor veya Standard'ı seçin, ardından MT5, cTrader, TradingView veya Pepperstone uygulamasından giriş yapın.",
        ],
        summary:
          "2010'da Melbourne'da kurulan Pepperstone, hacim bazında en büyük CFD aracı kurumlarından biridir: 900.000'den fazla hesap, aylık yaklaşık 1 trilyon dolar işlem hacmi ve FCA, ASIC, CySEC, DFSA, BaFin, SCB ve CMA altında dokuz lisanslı kuruluş. DFSA tarafından düzenlenen Dubai kuruluşunda bir Standard hesabım var ve bunu takdire dayalı altın işlemleri için kullanıyorum.",
        faq: [
          {
            q: "Razor mı Standard mı: hangi hesabı seçmeliyim?",
            a: "Aktif işlem yapıyorsanız FX ve altın için Razor: 0,0 pip'ten başlayan ham spread'ler artı lot başına, işlem yönü başına $3,50. Her şeyin spread içinde olmasını tercih ediyorsanız Standard: EUR/USD'de 1,0 pip'ten itibaren, hisse CFD'leri dışında komisyon yok. Her ikisi de aynı 1.350'den fazla piyasaya erişim sağlar.",
          },
          {
            q: "Minimum yatırım tutarı nedir?",
            a: "Hesap açmak için alt sınır yok. Kart, Apple Pay, Google Pay, PayPal, Skrill ve Neteller ile yatırımlar $10'dan başlar; yurt içi banka havalelerinde alt sınır yok. Para yatırma ücretsizdir.",
          },
          {
            q: "Para çekme ne kadar sürer?",
            a: "Kart, e-cüzdan ve kripto çekimleri bir iş günü içinde işlenir ve ücretsizdir. Uluslararası banka havaleleri $20 ücrete tabidir ve 7 iş gününe kadar sürebilir.",
          },
          {
            q: "Pepperstone düzenlemeye tabi mi?",
            a: "Evet. Grup şirketleri FCA (Birleşik Krallık), ASIC (Avustralya), CySEC (Kıbrıs), DFSA (Dubai), BaFin (Almanya), SCB (Bahamalar) ve CMA (Kenya) tarafından lisanslanmıştır. Müşteri fonları birinci sınıf bankalarda ayrıştırılmış hesaplarda tutulur ve bireysel müşteriler negatif bakiye korumasına sahiptir.",
          },
          {
            q: "Hesabım hangi kuruluş altında olacak?",
            a: "Bağlantım üzerinden, DFSA tarafından düzenlenen Dubai kuruluşu Pepperstone Financial Services (DIFC) Limited'e kayıt olursunuz. Bireysel kaldıraç 1:30 ile sınırlıdır, müşteri parası ayrıştırılır ve bireysel müşteriler negatif bakiye korumasına sahiptir. Profesyonel müşteriler daha yüksek kaldıraç için başvurabilir.",
          },
          {
            q: "Yönlendirme bağlantısı ücretlerimi değiştirir mi?",
            a: "Hayır. Doğrudan veya bağlantım üzerinden kayıt olmanız fark etmeksizin spread'ler ve komisyonlar aynıdır. Aracı kurum komisyonumu kendi gelirinden öder.",
          },
        ],
      },
      {
        tagline: "İşlem yönü başına $3 ile 0,0 pip'ten başlayan ham fiyatlama, MT4/MT5 ve TradingView",
        regulator: "FCA · CySEC · FSA Seyşeller · FSCA",
        licence: "FCA 717270 · CySEC 278/15 · FSA SD008 · FSCA FSP 49464 · DFSA temsilcilik ofisi F007663",
        founded: "2014, Londra",
        minDeposit: "$100",
        spreads: [{ value: "0,0 Raw · 1,6 Classic" }, { value: "Raw'da 0,08'den itibaren" }, { value: "0,39'dan itibaren" }],
        commission: "Raw: lot başına, işlem yönü başına $3 (MT4/MT5), TradingView'da $3,50 · Classic: yok · endeksler ve hisseler: yok",
        leverage: "Bireysel 1:30 (FCA, CySEC) · Tickmill Ltd (Seyşeller) altında 1:1000'e kadar · profesyonel 1:500",
        funding: ["Banka havalesi", "Visa / Mastercard", "Skrill", "Neteller", "UnionPay", "Kripto"],
        withdrawalTime: "1 iş günü içinde işlenir",
        languages: "Pzt–Cum 07:00–16:00 GMT, 14 dil · Türkçe destek masası yok",
        bestFor: "İşlem yönü başına $3 ile ham fiyatlama isteyen, maliyete duyarlı FX ve altın yatırımcıları, scalper'lar ve EA kullanıcıları",
        pros: ["Raw hesabı: lot başına, işlem yönü başına $3 ile 0,0 pip spread; ForexBrokers.com tarafından 2021–2024'te komisyon ve ücretlerde 1 numara seçildi", "FCA, CySEC, FSA Seyşeller ve FSCA kuruluşları; Birleşik Krallık ve AB müşterileri için FSCS ve ICF güvencesi", "Birinci sınıf bankalarda ayrıştırılmış hesaplar, negatif bakiye koruması ve $20 bin–$1 milyon arası bakiyeler için Lloyd's sigortası", "$100 minimum, para yatırma veya çekme ücreti yok, $5.000 üzeri havalelerde banka masrafları iade edilir", "Tüm stratejilere izin verilir (scalping, hedging, EA), ücretsiz VPS, TradingView entegrasyonu"],
        cons: ["1:1000 kaldıraç yalnızca Seyşeller kuruluşunda; Birleşik Krallık ve AB bireysel müşterileri 1:30 ile sınırlı", "Classic hesap spread'leri 1,6 pip'ten başlar; Raw'a kıyasla geniş", "Türkçe web sitesi veya destek masası yok; USD/TRY, EUR/TRY ve GBP/TRY yalnızca pozisyon kapatmaya açık"],
        steps: ["Kayıt: my.tickmill.com/sign-up adresinde ad, ülke, müşteri türü ve e-posta girerek Müşteri Alanınızı oluşturun; Introducing Broker alanı boşsa IB kodu olarak IB82498200 girin", "Doğrulama: Müşteri Alanına giriş yapın ve kimlik belgesi ile ikametgâh belgesini yükleyin", "Hesap oluşturma: belgeler onaylandıktan sonra Classic, Raw veya TradingView Raw hesap türünü, ana para birimini (USD/EUR/GBP/ZAR) ve kaldıracı seçerek gerçek hesap açın", "Para yatırma: bir ödeme yöntemi seçin (banka havalesi, kart, Skrill, Neteller, UnionPay, kripto) ve $100'dan itibaren fonlayın; çoğu yöntem anında hesaba geçer", "İşlem: MT4/MT5 veya Tickmill Trader'ı indirin ya da hesap bilgilerinizle TradingView'ı bağlayın ve işleme başlayın"],
        summary: "Tickmill Group, 2014'te Ingmar ve Illimar Mattus tarafından kuruldu; merkezi Londra'dadır ve Birleşik Krallık (FCA 717270), Kıbrıs (CySEC 278/15), Seyşeller (FSA SD008) ve Güney Afrika'da (FSCA FSP 49464) düzenlemeye tabi kuruluşlara sahiptir. 1,3 milyon kayıtlı hesap, 900 milyonun üzerinde işlem ve aylık ortalama yaklaşık 350 milyar dolar hacim bildirmekte olup 60'tan fazla sektör ödülü kazanmıştır. NUUK Trend Ensemble kâğıt üstü (paper) hesabını ve gün içi demoyu burada çalıştırıyorum; ayrıca yönetilen MAM hesapları için kullanılan üç kurumdan biridir.",
        faq: [{ q: "Tickmill hangi hesap türlerini sunuyor?", a: "Üç CFD hesabı: Classic (1,6 pip'ten başlayan spread, komisyon yok), Raw (0,0 pip'ten başlayan spread, lot başına ve işlem yönü başına $3, MT4/MT5) ve TradingView Raw / Tickmill Trader (0,0 pip, işlem yönü başına $3,50). Tümü $100'dan başlar, 0,01 lota ve her stratejiye izin verir, faizsiz (swap-free) yapılabilir. Tickmill UK ayrıca bir Vadeli İşlemler hesabı ($1.000) ve bir IBKR çoklu varlık hesabı sunar." }, { q: "Tickmill'de minimum yatırım nedir?", a: "Tüm CFD hesapları için $100 (veya EUR/GBP karşılığı); ZAR hesaplarında alt sınır daha düşüktür. Minimum çekim $25'tır. Tickmill para yatırma veya çekme ücreti almaz ve $5.000 üzeri havale yatırımlarında banka masraflarını iade eder." }, { q: "Tickmill'de para çekme ne kadar sürer?", a: "Çekim talepleri bir iş günü içinde işlenir. Hesaba ulaşma süresi yönteme bağlıdır: e-cüzdanlar ve kripto genellikle anında ile 48 saat arası, kartlar 8 iş gününe kadar, banka havaleleri 2–7 iş günü. Fonlar önce orijinal yatırım yöntemine iade edilir (kartla yatırılanlar karta, kârlar banka veya e-cüzdan yoluyla)." }, { q: "Tickmill düzenlemeye tabi mi ve müşteri fonları güvende mi?", a: "Evet. Tickmill UK Ltd FCA yetkilidir (717270), Tickmill Europe Ltd CySEC lisanslıdır (278/15), Tickmill Ltd FSA Seyşeller menkul kıymet aracısıdır (SD008) ve Tickmill South Africa FSCA lisanslıdır (FSP 49464); Tickmill UK ayrıca bir DFSA temsilcilik ofisi (F007663) işletir. Müşteri parası birinci sınıf bankalarda ayrıştırılır, negatif bakiye koruması uygulanır, Birleşik Krallık müşterileri £120.000'e kadar FSCS, AB müşterileri €20.000'e kadar ICF güvencesi alır ve $20.000 ile $1.000.000 arası bakiyeler Lloyd's ile sigortalıdır." }, { q: "Tickmill hangi kaldıracı sunuyor?", a: "Tickmill Ltd (Seyşeller) altında dinamik kaldıraçla forex ve kıymetli madenlerde 1:1000'e kadar; başlıca kriptolarda 1:200, endekslerde 1:100 ve hisselerde 1:20. Tickmill Europe altında bireysel müşteriler en fazla 1:30, tercihe bağlı profesyonel müşteriler 1:500'e kadar alır; Tickmill UK bireysel müşterileri de 1:30 ile sınırlıdır." }],
      },
      {
        tagline: "Tek hesapta 71.000'den fazla enstrüman sunan Danimarkalı yatırım bankası",
        regulator: "Danimarka FSA · FCA · FINMA · MAS · ASIC · SFC · JFSA",
        licence: "Danimarka FSA bankacılık lisansı 1149 (Saxo Bank A/S) · DFSA tarafından düzenlenen DIFC temsilcilik ofisi",
        founded: "1992, Kopenhag",
        minDeposit: "Yok (Classic) · BAE sitesinde $5.000",
        spreads: [{ value: "Classic'te 1,0 · VIP'te 0,7'den itibaren" }, { value: "34 sentten itibaren" }, { value: "0,7'den itibaren" }],
        commission: "FX ve endeks CFD'leri yalnızca spread · ABD hisseleri %0,08 (min $1), VIP %0,03 · opsiyonlar $0,75'ten, vadeli işlemler $1'dan itibaren",
        leverage: "Bireysel 1:30 (ESMA tarzı sınırlar) · tercihe bağlı profesyoneller için daha düşük teminat",
        funding: ["Banka havalesi", "SEPA Instant", "Kart (ülkeye bağlı)", "İlk yatırımdan sonra Wise / Revolut"],
        withdrawalTime: "Aynı gün işlenir, bankanıza 1–5 iş günü",
        languages: "24/5 telefon, sohbet ve e-posta; Dubai ofisi · uygulama Türkçe dâhil 23 dilde, Türkçe destek masası yok",
        bestFor: "Tek girişle banka düzeyinde saklama artı FX ve CFD işlemi isteyen çoklu varlık yatırımcıları",
        pros: ["SIFI statüsüne sahip lisanslı Danimarka bankası; nakit, Danimarka mevduat güvencesiyle 100.000 EUR'ya kadar korunur", "71.000'den fazla enstrüman: 50'den fazla borsada 23.000'den fazla hisse, 8.200'den fazla ETF, 5.200 tahvil, vadeli işlemler, opsiyonlar ve 185'ten fazla FX paritesi", "Hacme göre kademeli fiyatlama: EUR/USD 1,0'dan 0,7 pip'e, ABD hisseleri %0,08'den %0,03'e, endeks CFD'lerinde komisyon yok", "Kendi SaxoTraderGO/PRO ve SaxoInvestor platformları artı OpenAPI, FIX ve TradingView", "Hareketsizlik veya platform ücreti yok; Saxo tarafında para yatırma ve çekme ücretsiz"],
        cons: ["Çoğu bölgede hisse, ETF ve tahvillerde yıllık %0,15 ile %0,09 arası saklama ücreti", "Platinum ve VIP kademeleri 200 bin EUR ve 1 milyon EUR'dan başlar; BAE sitesi Classic hesap açmak için $5.000 ister", "Faizsiz (swap-free) hesap yok; Dubai'deki varlık bir temsilcilik ofisi olduğundan BAE müşterileri Danimarka'daki Saxo Bank A/S ile sözleşme yapar"],
        steps: ["home.saxo/accounts adresinden çevrimiçi hesap oluşturun (18 yaş üstü; ulusal kimlik ve vergi numarası, pasaport/kimlik kartı, selfie; istenirse ikametgâh belgesi)", "Doğrulanın – başvuruların çoğu dakikalar içinde dijital olarak onaylanır, aksi hâlde 2 iş gününe kadar sürer", "SaxoTraderGO veya SaxoInvestor'a giriş yapın ve hesabı fonlayın – ilk yatırım, ikamet ettiğiniz ülkede kendi adınıza açılmış bir banka hesabından gelmelidir", "Platinum (200 bin EUR+) veya VIP (1 milyon EUR+) fiyatlaması istiyorsanız kademe tutarını 30 gün içinde yatırın", "İlk işleminizi yapın – önce alıştırma için 100.000 USD sanal bakiyeli 20 günlük demo mevcuttur"],
        summary: "Saxo Bank A/S, Danimarka FSA tarafından lisanslanmış (lisans 1149), 2023'te sistemik öneme sahip kuruluş olarak belirlenmiş ve Mart 2026'dan bu yana çoğunluk hissesi J. Safra Sarasin Group'a ait, merkezi Kopenhag'da bulunan bir bankadır. 1992'de kurulmuş olup 180'den fazla ülkede 1,5 milyondan fazla müşteriye 150 milyar EUR'nun üzerinde müşteri varlığıyla hizmet vermektedir. BAE'de DFSA tarafından düzenlenen bir temsilcilik ofisi işletir; müşteri sözleşmeleri Danimarka'daki Saxo Bank A/S ile yapılır. Çoklu varlık portföyümü burada tutuyorum ve yönetilen hesaplar için kullanılan üç kurumdan biridir.",
        faq: [{ q: "Classic, Platinum ve VIP kademeleri nedir ve nasıl hak kazanırım?", a: "Classic varsayılan kademedir. Platinum için 200.000 EUR+ (BAE sitesinde 250.000 USD+) yatırım veya belirli bir işlem hacmi; VIP için 1.000.000 EUR+ (1.250.000 USD+) veya hacim gerekir. Üst kademeler daha düşük spread ve komisyon ile öncelikli destek alır; Saxo Elite, yaklaşık 5 milyon EUR üzeri varlığa sahip müşteriler içindir." }, { q: "Minimum yatırım var mı?", a: "Uluslararası site Classic hesap için minimum fonlama şartı olmadığını belirtir; ancak BAE/MENA sitesi 5.000 USD minimum fonlama listeler. Platinum veya VIP'e hak kazanmak için kademe tutarları ilk 30 gün içinde yatırılmalıdır." }, { q: "Saxo spread ve komisyon dışında hangi ücretleri alıyor?", a: "Çoğu bölgede hisse, ETF/ETC ve tahvillerde yıllık %0,15 (Classic), %0,12 (Platinum) veya %0,09 (VIP) saklama ücreti (AB'de ikamet edenler için artı KDV), %0,25'e kadar döviz dönüşümü, FX taşıma (rollover) marjı %0,50–0,75; hareketsizlik, platform, para yatırma veya çekme ücreti yok." }, { q: "Saxo'yu kim düzenliyor ve gerçek bir banka mı?", a: "Saxo Bank A/S, Danimarka FSA tarafından denetlenen (lisans no. 1149) ve SIFI olarak sınıflandırılan tam lisanslı bir Danimarka bankasıdır. Grup şirketleri FCA, FINMA, MAS, ASIC, SFC ve JFSA tarafından düzenlenir. Dubai'de Saxo Bank A/S, DFSA tarafından düzenlenen bir temsilcilik ofisi işletir; eski Saxo Bank (Dubai) Ltd lisansı (F001014) 2017'de geri çekilmiştir." }, { q: "Neler işlem yapabilirim?", a: "71.000'den fazla enstrüman: 50'den fazla borsada 23.000'den fazla hisse, 8.200'den fazla ETF, 5.200 tahvil, yatırım fonları, 185'ten fazla FX paritesi, FX opsiyonları, endeks/hisse/emtia CFD'leri, 250'den fazla vadeli işlem, 3.100'den fazla borsa opsiyonu ve kripto FX/ETP'ler." }],
      },
      {
        tagline: "TradingView, MT4/MT5 ve 5.500'den fazla piyasada komisyonsuz CFD",
        regulator: "FCA · CySEC · ASIC · SCB · SCA (BAE)",
        licence: "FCA 793714 · CySEC 319/17 · ASIC AFSL 513393 · SCB SIA-F245 · BAE 20200000176 (Capital Com MENA, Dubai)",
        founded: "2016, Londra",
        minDeposit: "Kartla $20 · havaleyle €50",
        spreads: [{ value: "~0,7'den itibaren (dinamik)" }, { value: "~0,5'ten itibaren (dinamik)" }, { value: "~0,6'dan itibaren" }],
        commission: "CFD'lerde yok, yalnızca spread · gecelik taşıma yıllık %4 ± referans faiz · %0,7 döviz dönüşümü (profesyonel %0,5)",
        leverage: "Tüm kuruluşlarda bireysel 1:30 · profesyonel 1:500'e kadar",
        funding: ["Visa / Mastercard", "Apple Pay", "Google Pay", "Banka havalesi", "PayPal (AB/AU)", "Skrill", "Neteller", "Lean (BAE)"],
        withdrawalTime: "24 saat içinde işlenir, %91'i 5 dakika içinde",
        languages: "İngilizce 7/24, mesai saatlerinde 10'dan fazla dil · Türkçe resmî olarak teyit edilmemiş",
        bestFor: "TradingView üzerinden emir gerçekleştirme ve düşük giriş yatırımı isteyen bireysel ve MENA yatırımcıları",
        pros: ["Sıfır işlem komisyonu; para yatırma, çekme veya hareketsizlik ücreti yok", "FCA, CySEC, ASIC, SCB ve BAE SCA tarafından düzenlenir; ayrıştırılmış müşteri parası ve negatif bakiye koruması", "Yerel TradingView bağlantısı artı MT4, MT5, kendi web ve mobil platformu ve API", "$20 minimum yatırım; çekimlerin %91'i 5 dakika içinde işlenir", "MENA müşterileri için faizsiz (swap-free) hesaplar ve 1:500 kaldıraç ile spread iadesi sunan profesyonel hesap"],
        cons: ["Spread'ler sabit değil, dinamik: EUR/USD ~0,7 pip ve altın ~0,5 tipik değerlerdir, garanti edilen alt sınırlar değil", "Ham spread veya komisyon bazlı hesap yok", "Yıllık %4 artı referans faizlik gecelik taşıma, çok günlük kaldıraçlı pozisyonları görece pahalı kılar; bireysel müşteriler için %0,7 döviz dönüşümü"],
        steps: ["capital.com'da 'Open account'a tıklayın veya iOS/Android uygulamasını indirin; ikamet ülkenizi seçin", "E-postanızla (veya Google/Apple ile) kayıt olun, şifre belirleyin, koşulları kabul edin ve gönderilen bağlantıyla e-postanızı onaylayın", "Kimliğinizi doğrulayın: geçerli bir kimlik belgesi, canlı selfie ve istenirse ikametgâh belgesi yükleyin (genellikle 24 saat içinde incelenir)", "Hesabı kart, Apple/Google Pay, banka havalesi veya yerel bir yöntemle fonlayın — kartla minimum $10–20, havaleyle €50", "CFD, faizsiz (swap-free) veya (uygunsanız) Profesyonel hesaba yükseltmeyi seçin; ardından web platformu, uygulama, TradingView, MT4 veya MT5'te işlem yapın"],
        summary: "Capital.com, 2016'da Viktor Prokopenya tarafından kurulan, 880.000'den fazla aktif hesaba ve hisse, endeks, forex, emtia ve kripto genelinde 5.500'den fazla enstrümana sahip, özel sermayeli bir CFD aracı kurumudur. Müşteri işlem hacmi 2024'te 1,7 trilyon doları, 2025'in ilk yarısında 1,5 trilyon doları aştı; bunun yarısından fazlası Orta Doğu'dan geldi. Dubai kuruluşu Capital Com MENA Securities Trading, BAE Menkul Kıymetler ve Emtia Otoritesi tarafından lisanslanmıştır. Endeks işlemleri için burada kişisel bir CFD hesabı tutuyorum.",
        faq: [{ q: "Capital.com düzenlemeye tabi mi ve müşteri fonları güvende mi?", a: "Evet. Capital Com (UK) Ltd FCA tarafından düzenlenir (793714), Capital Com SV Investments Ltd CySEC lisanslıdır (319/17), Capital Com Australia Pty Ltd ASIC AFSL 513393'e sahiptir, Capital Com Online Investments Ltd Bahamalar Menkul Kıymetler Komisyonu tarafından lisanslanmıştır (SIA-F245) ve Capital Com MENA Securities Trading L.L.C. Dubai'de BAE SCA/CMA tarafından lisanslanmıştır (20200000176). Bireysel müşteri parası ayrıştırılmış hesaplarda tutulur ve negatif bakiye koruması uygulanır." }, { q: "Minimum yatırım nedir, para yatırma veya çekme ücreti var mı?", a: "Belirtilen minimum, uluslararası sitede kart ve Apple Pay için 10 USD/EUR/GBP (yardım merkezinde ve BAE müşterileri için 20), havale için €50'dir. Capital.com para yatırma, çekme veya hareketsizlik ücreti almaz; bankanız veya ödeme sağlayıcınız kendi ücretini uygulayabilir." }, { q: "Para çekme ne kadar sürer?", a: "Capital.com tüm çekim taleplerini 24 saat içinde, %91'ini ise 5 dakika içinde işlediğini belirtir. Fonların kartınıza veya banka hesabınıza ulaşması 5 iş gününe kadar sürebilir. Çekimler orijinal fonlama yöntemine iade edilir; kartla minimum çekim 20 USD/EUR/GBP'dir." }, { q: "Ne kadar kaldıraç alabilirim?", a: "Bireysel müşteriler başlıca FX paritelerinde 1:30'a, altın ve başlıca endekslerde 1:20'ye, diğer emtia ve endekslerde 1:10'a, hisselerde 1:5'e ve kriptoda 1:2'ye kadar alır. Uygun müşteriler, başlıca FX, endeksler, altın ve petrolde 1:500'e, kriptoda 1:100'e ve başlıca hisselerde 1:33'e kadar kaldıraç ile aylık hacme göre %5–20 spread iadesi sunan Profesyonel hesaba yükseltebilir." }, { q: "Capital.com faizsiz (İslami) hesap ve TradingView işlemi sunuyor mu?", a: "Evet. Faizsiz hesaplar BAE, Suudi Arabistan, Katar, Kuveyt, Bahreyn, Umman, Ürdün, Mısır, Lübnan, Tunus, Cezayir ve Fas'taki müşterilere açıktır — geçiş için açık işlemleri kapatıp support@capital.com ile iletişime geçin. Capital.com resmî bir TradingView aracı kurumudur; hesabınızı bağlayıp MT4, MT5, web platformu ve uygulamanın yanı sıra doğrudan TradingView grafiklerinden emir verebilirsiniz." }],
      },
      {
        tagline: "SPK düzenlemesine tabi uygulama: komisyonsuz BIST, sabit $1,50 ABD hisse işlemi",
        regulator: "SPK (Türkiye) · Borsa İstanbul üyesi",
        licence: "SPK aracılık yetki belgesi K-024 (31 Mayıs 2022) · 2021'den beri BIST üyesi · ABD varlıkları SIPC güvencesinde",
        founded: "2020, İstanbul",
        minDeposit: "Yok · $1'dan itibaren küsuratlı hisse",
        spreads: [{ value: "%0 komisyon" }, { value: "İşlem başına $1,50" }, { value: "Midas komisyonu yok" }],
        commission: "BIST hisseleri %0 · ABD hisseleri sabit $1,50, Avrupa hisseleri işlem başına €1,50 · ABD opsiyonları kontrat başına $1,50 · VİOP %0,01–0,05",
        leverage: "Hisselerde yok (nakit) · BIST kredili işlem yıllık %48,5–66,5",
        funding: ["TL banka transferi (EFT / FAST)", "USD veya EUR banka transferi", "Anında hesaba geçen 12 anlaşmalı banka"],
        withdrawalTime: "Anlaşmalı bankalara dakikalar içinde; $50 bin altı USD dakikalar içinde",
        languages: "Uygulama Türkçe ve İngilizce · destek ve web sitesi yalnızca Türkçe",
        bestFor: "BIST, ABD ve Avrupa hisselerini tek bir düşük maliyetli uygulamada isteyen Türkiye'de yerleşik yatırımcılar",
        pros: ["Borsa İstanbul'da sıfır komisyon; hesap, saklama veya takas ücreti yok", "ABD işlemi başına sabit $1,50, $1'dan itibaren küsuratlı hisse ve ücretsiz canlı veri", "SPK lisanslı aracı kurum; BIST varlıkları Merkezi Kayıt Kuruluşu'nda, ABD varlıkları SIPC güvencesinde", "12 anlaşmalı banka üzerinden dakikalar içinde para yatırma ve çekme, Midas transfer ücreti yok", "BIST, ABD ve Avrupa hisseleri, ABD opsiyonları, VİOP vadeli işlemleri, TEFAS fonları ve altın sertifikaları için tek hesap"],
        cons: ["Yalnızca Türkiye'de yerleşikler; yurt dışında yerleşik veya yurt dışında vergi mükellefi olanlara hesap yok", "CFD veya kaldıraçlı forex yok; BIST kredili işlemde yüksek TL faizi", "Destek ve web sitesi yalnızca Türkçe; TL'den USD'ye dönüşüm yayımlanmış bir ücret yerine Midas'ın kendi kurundan"],
        steps: ["Midas uygulamasını App Store veya Google Play'den indirin ve cep telefonu numaranızla kayıt olun", "Kimliğinizi çipli T.C. kimlik kartı, mavi kart veya yabancı kimlik kartı ile doğrulayın; 18 yaş üstü, Türkiye'de yerleşik ve yurt dışında vergi yükümlülüğü olmayan biri olmalısınız", "Uygulama içi başvuruyu tamamlayın ve yatırım hesabı sözleşmelerini e-imzalayın; süreç yaklaşık 5 dakika sürer", "Hesabı TL veya USD banka transferiyle fonlayın (herhangi bir bankadan; anlaşmalı banka transferleri yaklaşık 2 dakika içinde hesaba geçer)", "İlk hissenizi alın: gerekirse uygulama içinde TL'yi USD'ye çevirin ve $1/€1'dan itibaren BIST, ABD veya Avrupa hisseleri için emir verin"],
        summary: "Midas Menkul Değerler A.Ş., 2020'de Egem Eraslan tarafından kurulan ve tamamı Midas Finansal Teknolojiler A.Ş.'ye ait, SPK lisanslı bir İstanbul aracı kurumudur. Mayıs 2026'da yaklaşık 4 milyon kullanıcı ve 20 milyar dolara yaklaşan aylık işlem hacmi bildirmiş olup, Ağustos 2025'te QED Investors liderliğindeki 80 milyon dolarlık Seri B dâhil 140 milyon doların üzerinde yatırım almıştır. BIST ve ABD hisseleri için kullandığım kurumdur ve yönetilen hesaplar için kullanılan üç kurumdan biridir.",
        faq: [{ q: "Midas hesabını kimler açabilir?", a: "Türkiye'de yaşayan ve başka bir ülkede vergi mükellefi olmayan, çipli T.C. kimlik kartı, mavi kart veya Türk yabancı kimlik kartı sahibi yetişkinler. Türkiye'de yerleşik çipli kimlik sahipleri için çocuk ve şirket hesapları da mevcuttur. Yurt dışında yerleşikler hesap açamaz." }, { q: "Midas hangi ücretleri alıyor?", a: "BIST hisse işlemleri komisyonsuzdur; hesap, saklama veya takas ücreti yoktur. ABD hisse işlemleri sabit $1,50, Avrupa hisse işlemleri işlem başına sabit €1,50'dir. ABD opsiyonları ayda ilk 500 kontrat için kontrat başına $1,50'dir. TEFAS fon emirlerinde Midas komisyonu yoktur. Midas tarafında para yatırma ve çekme ücretsizdir." }, { q: "ABD hisseleri alabilir miyim ve nasıl korunuyor?", a: "Evet. Midas, $1'dan itibaren küsuratlı hisse ve USD olarak ödenen temettülerle NYSE, NASDAQ ve OTC hisselerine, ABD'de kote ETF'lere ve ABD opsiyonlarına erişim sağlar. Hisseler SEC yetkili saklama kuruluşlarında sizin adınıza tutulur ve Midas sitesine göre 150 milyon dolara kadar (75 milyon dolar menkul kıymet artı 75 milyon dolar nakit) SIPC sigortası kapsamındadır." }, { q: "Döviz dönüşümü nasıl çalışıyor?", a: "Doğrudan USD yatırabilir veya nakit bakiyenizi kullanarak uygulama içinde 7/24 TL'yi USD veya EUR'ya çevirebilirsiniz (USD/TRY ve EUR/TRY pariteleri); dönüştürülen fonlar genellikle hemen işleme açıktır. Midas kendi kurunu verir ve ayrı bir dönüşüm komisyonu yayımlamaz." }, { q: "Para çekme ne kadar sürer?", a: "Midas'ın 12 anlaşmalı bankasına çekimler dakikalar içinde ulaşır. Diğer bankalara TL çekimleri FAST limitleri dâhilinde dakikalar içinde gelir (daha büyük tutarlar sonraki iş günü). $50.000 altı USD çekimleri dakikalar, $50.000–$200.000 arası mesai saatlerinde yaklaşık bir saat sürer. Midas çekim ücreti almaz; anlaşmalı olmayan bankalara USD transferlerinde üçüncü taraf bankaların SWIFT ücretleri uygulanabilir." }],
      },
      {
        tagline: "Performans geçmişini yatırım yapılabilir bir DARWIN'e dönüştüren FCA ve CNMV aracı kurumu",
        regulator: "FCA · CNMV · FSA Seyşeller",
        licence: "FCA 586466 · CNMV 311 · FSA SD171",
        founded: "2012, Londra",
        minDeposit: "€500 · DARWIN oluşturmak için €1.000 özkaynak",
        spreads: [{ value: "0,2–0,3 + lot başına $2,5" }, { value: "~0,4 + %0,0025" }, { value: "~0,6 + kontrat başına $0,275" }],
        commission: "FX lot başına, emir başına $2,50 · endeksler kontrat başına $2,75 · emtia %0,0025 · hisse CFD'leri hisse başına $0,02 · %40'a kadar iade",
        leverage: "Bireysel 1:30 (FCA, CNMV) · profesyonel 1:200'e kadar",
        funding: ["Banka havalesi", "Visa / Mastercard", "Skrill"],
        withdrawalTime: "1–3 iş günü",
        languages: "Pzt–Per 08:00–17:00 UTC, e-posta ve telefon · site EN, ES, FR, DE, ZH · Türkçe yok",
        bestFor: "Doğrulanmış performans geçmişini yatırımcı sermayesi ve DarwinIA tohum tahsisleriyle gelire dönüştürmek isteyen sistematik yatırımcılar",
        pros: ["FSCS (£85 bin) ve FOGAIN (€100 bin) korumasıyla çifte FCA ve CNMV düzenlemesi, fonlar birinci sınıf ayrıştırılmış hesaplarda", "Kendi portföy yönetimi lisansınız olmadan yatırımcı sermayesi üzerinden %15 performans ücreti kazanın", "DarwinIA en iyi stratejilere ayda €30 bin ile €500 bin arası tohum sermaye sağlar; bugüne kadar yatırımcılara €11,5 milyondan fazla ödendi", "Ham bankalararası fiyatlama, EUR/USD yaklaşık 0,2–0,3 pip artı lot başına $2,50, yetenek ve hacim iadeleri %40'a kadar", "MT4, MT5, TradingView, DXtrade, FIX ve DARWIN API'leri; ayrıca Interactive Brokers üzerinden hisse, vadeli işlem ve ETF'ler"],
        cons: ["Faizsiz (swap-free) hesap yok, Türkçe destek yok ve destek yalnızca Pzt–Per 08:00–17:00 UTC", "€500 minimum yatırım, DARWIN oluşturmak için €1.000 özkaynak, kart ve Skrill yatırımlarında ömür boyu üst sınır", "Bireysel kaldıraç 1:30 ile sınırlı; profesyonel statü bunu yükseltir ancak FSCS güvencesinden feragat edilir"],
        steps: ["darwinex.com/register adresinde kullanıcı adı, e-posta, şifre ve vergi ikamet ülkesiyle kayıt olun", "MiFID onboarding sürecini tamamlayın: kişisel bilgiler anketi ile finansal bilgi/ödeme gücü anketi", "Kimlik ve adres belgelerini yükleyin; başvuru durumu 1 iş günü içinde e-postayla bildirilir", "Darwinex Cüzdanınızı fonlayın (banka havalesi, kart veya Skrill ile min €/$/£500) ve en az 500'ü gerçek işlem hesabına aktarın", "MT4/MT5, TradingView, DXtrade veya IBKR'de işlem yapın; yaklaşık bir ay sonra (veya içe aktarılan bir performans geçmişiyle anında) DARWIN'inizi oluşturun ve DarwinIA'ya katılın"],
        summary: "Darwinex, hem aracı kurum hem de düzenlemeye tabi portföy yöneticisi olarak faaliyet gösteren Tradeslide Trading Tech Ltd (Londra, 2012; 2014'ten beri FCA yetkili) ve Sapiens Markets EU'nun (CNMV, Madrid, 2022) ticari adıdır. Bir DARWIN, bir yatırımcının stratejisini risk yönetimli, yatırım yapılabilir bir endeks olarak paketler: yatırımcılar %1,2 yönetim ve %20 performans ücreti öder; bunun %15'i stratejinin sahibine gider. Platform 3.000'den fazla DARWIN, yaklaşık 580 milyon dolar yatırım ve 80'den fazla ülkede müşteri bildirmektedir. NUUK sistemlerinin üçüncü taraf yatırımcı sermayesi için paketlendiği yerdir.",
        faq: [{ q: "DARWIN nedir?", a: "DARWIN, Darwinex tarafından kendi sembolü ve 100'den başlayan fiyatıyla yönetilen bir endeks olarak paketlenmiş bir işlem stratejisidir. Açık işlemleri ifşa etmeden, bağımsız bir risk motoru altında (aylık %3,25–6,5 VaR hedefi) stratejinin giriş ve çıkışlarını kopyalar; böylece yatırımcılar onu satın alabilir ve strateji sahibi Darwinex'in portföy yönetimi lisansı altında performans ücreti kazanır." }, { q: "Darwinex Zero ile Darwinex gerçek hesap arasındaki fark nedir?", a: "Darwinex Zero, doğrulanmış bir performans geçmişi oluşturmak ve hiçbir işlem sermayesi riske atmadan %15 gerçek performans ücreti için DarwinIA'ya katılmak üzere sanal sermayeli bir MT4/MT5 hesabı sunan bir aboneliktir (aylık €45, yıllık planda aylık €35, 3 yıllık planda aylık €30; vadeli işlemler için €50). Darwinex gerçek hesabın aboneliği yoktur, kendi paranızı kullanır (€500 minimum) ve ilk günden yatırımcı sermayesine erişim sağlar; Zero performans geçmişi gerçek hesaba taşınabilir." }, { q: "Yatırımcılar hangi ücretleri ödüyor ve performans ücreti nasıl paylaşılıyor?", a: "Yatırımcılar Darwinex'e yıllık %1,2 yönetim ücreti ve yüksek su işareti (high-water mark) esasıyla üç ayda bir hesaplanan net kâr üzerinden %20 performans ücreti öder. Bu %20'nin %15'i DARWIN sağlayıcısına (strateji sahibine) ödenir, %5'i Darwinex'te kalır. DarwinIA tohum tahsisleri de elde edilen kârın %15'ini strateji sahibine öder." }, { q: "Minimum yatırım nedir?", a: "İlk yatırım bireysel ve ortak hesaplar için €/$/£500, kurumsal hesaplar için 10.000'dir; sonraki yatırımlar minimum 100'dür (banka havalesiyle 500). DARWIN oluşturmak €1.000 özkaynak, DarwinIA'ya katılım ay boyunca korunan $1.000 özkaynak gerektirir. Yatırımcılar €200'dan başlayabilir (Darwinex INDX için €10.000)." }, { q: "Darwinex nasıl düzenleniyor?", a: "Tradeslide Trading Tech Ltd, aracı kurum ve portföy yöneticisi olarak Birleşik Krallık FCA tarafından yetkilendirilmiş ve düzenlenmiştir (FRN 586466, şirket no. 08061368); £85.000'e kadar FSCS koruması vardır. Sapiens Markets EU Sociedad de Valores SA, İspanya CNMV tarafından düzenlenir (no. 311) ve €100.000'e kadar FOGAIN güvencesi sağlar. Tradeslide Global Ltd, Seyşeller FSA lisansına (SD171) sahiptir. Müşteri fonları birinci sınıf Birleşik Krallık bankalarında ayrıştırılmış hesaplarda tutulur." }],
      },
    ],
  },

  signals: {
    "metaTitle": "Araştırma ve Sinyal Hizmetleri",
    "metaDescription": "Günlük piyasa notları, haftalık raporlar ve gerekçeli işlem fikirleri; Telegram ve e-posta ile iletilir.",
    "kicker": "Araştırma ve sinyaller",
    "title": "Gerekçesi ile sunulan işlem fikirleri",
    "lead": "Gerekçesiz uyarı gönderilmez. Her fikir enstrüman, yön, giriş, zarar durdur, hedef, risk/getiri oranı ve gerekçeyi açıklayan bir paragrafla iletilir.",
    "whatTitle": "Hizmet kapsamı",
    "what": [
      {
        "title": "Günlük makro notu",
        "body": "Londra açılışından önce tek sayfa: günün gündemi, kilit seviyeler, takvimdeki riskler."
      },
      {
        "title": "Haftalık rapor",
        "body": "FX, endeksler, kıymetli madenler ve dijital varlıklarda pozisyonlanma, temalar ve gelecek haftanın görünümü."
      },
      {
        "title": "İşlem fikirleri",
        "body": "Ayda ortalama 100'ün üzerinde fikir; her biri giriş, zarar durdur, hedef ve gerekçe ile."
      },
      {
        "title": "Canlı güncellemeler",
        "body": "Açık fikirlerin yönetimi: kısmi çıkışlar, zarar durdur güncellemeleri, geçersizleşme koşulları."
      }
    ],
    "formatTitle": "Fikir formatı",
    "plansTitle": "Abonelik planları",
    "plans": [
      {
        "name": "Raporlar",
        "price": "$750",
        "period": "aylık",
        "features": [
          "Günlük makro notu",
          "Haftalık rapor",
          "Arşiv erişimi"
        ],
        "cta": "Abone Olun"
      },
      {
        "name": "Sinyaller",
        "price": "$1,000",
        "period": "aylık",
        "features": [
          "Raporlar planının tamamı",
          "Gerekçeli işlem fikirleri",
          "Telegram üzerinden canlı güncellemeler",
          "Aylık performans tablosu"
        ],
        "cta": "Abone Olun"
      },
      {
        "name": "Mentorluk",
        "price": "$5,000",
        "period": "üç aylık",
        "features": [
          "Sinyaller planının tamamı",
          "İki haftada bir birebir değerlendirme",
          "Portföy geri bildirimi",
          "Eğitimlere öncelikli erişim"
        ],
        "cta": "Başvurun"
      }
    ],
    "performanceTitle": "Sinyal performansı",
    "performanceNote": "Kapanan fikirler her ay giriş, çıkış ve sonuç bilgisiyle Telegram kanalında kayıt altına alınır. Bugüne kadarki kurum içi kayıt: kapanan fikirlerin %87'si zarar durdur seviyesinden önce hedefe ulaşmıştır. Kaydın bağımsız doğrulaması sürmektedir.",
    "disclaimer": "Sinyaller eğitim içeriği ve genel piyasa yorumu niteliğindedir. Kişisel yatırım tavsiyesi değildir ve bireysel koşullarınızı dikkate almaz."
  },

  education: {
    metaTitle: "Webinarlar ve Seminerler",
    metaDescription: "Yatırımcılara yöntemi öğreten canlı webinarlar ve yüz yüze seminerler.",
    kicker: "Yatırımcı eğitimi",
    title: "Yöntemi öğrenin, kararlarınızı kendiniz verin",
    lead: "Otomatik satılan kayıtlı kurslar değil, canlı oturumlar. Küçük gruplar, gerçek grafikler, gerçek risk kuralları.",
    upcomingTitle: "Yaklaşan oturumlar",
    events: [
      {
        "title": "Haftalık piyasa brifingi: altın, endeksler ve Fed",
        "format": "Online webinar",
        "language": "İngilizce",
        "price": "Ücretsiz",
        "seats": "100"
      },
      {
        "title": "Sistematik altın ticareti atölyesi",
        "format": "Yüz yüze, Dubai",
        "language": "Türkçe",
        "price": "250 USD",
        "seats": "25"
      }
    ],
    eventLabels: {
      "format": "Format",
      "language": "Dil",
      "price": "Ücret",
      "seats": "Kontenjan",
      "register": "Kayıt Olun"
    },
    curriculumTitle: "Müfredat",
    curriculum: [
      {
        "level": "Temel",
        "title": "Önce risk",
        "topics": [
          "Pozisyon büyüklüğü",
          "Zarar durdur yerleşimi",
          "Beklenen değer",
          "İşlem günlüğü"
        ]
      },
      {
        "level": "Orta",
        "title": "Piyasayı okumak",
        "topics": [
          "Makro sürücüler",
          "Teknik yapı",
          "Korelasyonlar",
          "Seans zamanlaması"
        ]
      },
      {
        "level": "İleri",
        "title": "Sistematik işlem",
        "topics": [
          "Strateji tasarımı",
          "Geriye dönük test tuzakları",
          "Otomasyonun temelleri",
          "Strateji portföyü"
        ]
      }
    ],
    corporateTitle: "Kurumsal eğitim",
    corporateBody: "Aracı kurumlar, aile ofisleri ve hazine ekipleri için özel programlar. Yarım günlük veya iki günlük format; Dubai veya İstanbul'da yerinde ya da çevrimiçi; kurumun kendi enstrümanları ve risk politikası üzerine kurgulanır.",
    corporateCta: {
      "label": "Bilgi Alın"
    },
    archiveTitle: "Oturum arşivi",
  },

  insights: {
    metaTitle: "Analizler",
    metaDescription: "Makro, FX, emtia, endeksler, kripto ve işlemlerde yapay zekâ üzerine piyasa yorumları.",
    kicker: "Analizler",
    title: "İşlem masasından notlar",
    tabs: ["Tümü", "Makro", "FX", "Emtia", "Endeksler", "Kripto", "Yapay zekâ"],
  },

  contact: {
    "metaTitle": "İletişim",
    "metaDescription": "Görüşme talep edin, WhatsApp veya Telegram üzerinden ulaşın ya da bilgi talebi gönderin.",
    "kicker": "İletişim",
    "title": "Bize ulaşın",
    "lead": "Size uygun kanalı seçin. Kurumsal ve profesyonel talepler bir iş günü içinde yanıtlanır.",
    "channels": [
      {
        "title": "Görüşme talep edin",
        "body": "30 dakika, görüntülü veya telefonla. Bir iş günü içinde dönüş.",
        "cta": "Görüşme Talep Edin"
      },
      {
        "title": "WhatsApp",
        "body": "Kısa sorular ve belge paylaşımı.",
        "cta": "Mesaj Gönderin"
      },
      {
        "title": "Telegram",
        "body": "Sinyal kanalı ve topluluk.",
        "cta": "Katılın"
      }
    ],
    "formTitle": "Bilgi talebi",
    "form": {
      "name": "Ad Soyad",
      "namePlaceholder": "Adınız",
      "email": "E-posta",
      "emailPlaceholder": "ad@sirket.com",
      "topic": "Konu",
      "topics": [
        "Portföy yönetimi",
        "Aracı kurum seçimi",
        "Araştırma ve sinyaller",
        "Eğitim",
        "Algoritmik sistemler",
        "Diğer"
      ],
      "message": "Mesaj",
      "messagePlaceholder": "Size nasıl yardımcı olabiliriz?",
      "submit": "Gönder",
      "note": "Bu işlem, mesaj önceden doldurulmuş olarak e-posta istemcinizi açar. Bu sitede hiçbir veri saklanmaz.",
      "errorRequired": "Lütfen adınızı, e-posta adresinizi ve mesajınızı giriniz.",
      "errorEmail": "Lütfen geçerli bir e-posta adresi giriniz.",
      "subject": "Bilgi talebi"
    }
  },

  legal: {
    "risk-disclosure": {
      title: "Risk bildirimi",
      body: [
        "Döviz, fark sözleşmeleri (CFD), emtia, endeksler, hisse senetleri, fonlar ve dijital varlıklarda işlem yapmak yüksek düzeyde risk taşır ve herkes için uygun değildir. Kaldıraçlı ürünler başlangıç yatırımınızı aşan zararlara yol açabilir ve dalgalı piyasalarda zararlar hızla birikebilir.",
        "İşlem yapmadan önce yatırım hedeflerinizi, deneyim düzeyinizi ve risk iştahınızı değerlendirmeli, kaybetmeyi göze alamayacağınız sermayeyi asla riske atmamalısınız. Herhangi bir tereddüdünüz varsa bulunduğunuz ülkede bağımsız, lisanslı bir finansal danışmandan görüş alın.",
        "Bu web sitesinde gösterilen herhangi bir portföy, model, strateji, sinyal hizmeti veya işlem sisteminin geçmiş performansı, gelecekteki sonuçların güvenilir bir göstergesi değildir. Performans geçmişleri ne olacağını değil, ne olduğunu anlatır. Geriye dönük test, simülasyon veya kâğıt üstü (paper trading) sonuçlarının doğal sınırlamaları vardır: geriye dönük bakışla hazırlanır, finansal risk içermez ve kayma (slippage), likidite veya emir gerçekleştirme maliyetlerinin etkisini yansıtmayabilir.",
        "Bu web sitesindeki hiçbir içerik kişisel yatırım tavsiyesi, kişisel öneri ya da herhangi bir finansal aracı alma veya satma teklifi ya da daveti niteliği taşımaz. İçerik genel piyasa yorumu ve eğitim amaçlıdır; mali durumunuzu, hedeflerinizi veya ihtiyaçlarınızı dikkate almaz.",
        "Yönetilen hesaplar, ortak aracı kurumdaki müşterinin kendi hesabının içinde, o aracı kurumun MAM veya PAMM yapısı ve düzenleyici çerçevesi altında çalışır. NUUK yalnızca işlem yetkisine sahiptir ve müşteri fonlarının saklamasını hiçbir zaman üstlenmez. Ücretler, kilit süreleri ve risk yetki belgeleri, herhangi bir işlem başlamadan önce yazılı bir sözleşmede belirlenir.",
        "Bu web sitesindeki aracı kurum bağlantıları yönlendirme (referral) bağlantılarıdır. Bunlar üzerinden hesap açıp fonladığınızda NUUK aracı kurumdan komisyon alabilir; bu durum ödediğiniz spread'leri veya ücretleri değiştirmez ve dilediğiniz aracı kurumda doğrudan hesap açmakta serbestsiniz.",
        "NUUK Quant, Dubai Uluslararası Finans Merkezi, Dubai, Birleşik Arap Emirlikleri'nden faaliyet gösterir. Hizmetler yalnızca geçerli yasa ve düzenlemelerin izin verdiği yerlerde sunulur; erişilebilirlik ikamet ettiğiniz ülkeye bağlıdır. Bu web sitesindeki hiçbir içerik, böyle bir dağıtımın yerel yasalara aykırı olacağı bir yargı bölgesindeki kişilere yönelik değildir.",
      ],
    },
    "ib-disclosure": {
      title: "Tanıtım aracısı (IB) bildirimi",
      body: [
        "Ahmet S. Öztürk / NUUK, bu web sitesinde listelenen aracı kurumlar için tanıtım aracısı (IB) olarak hareket eder. Bir yönlendirme bağlantısı üzerinden hesap açıp fonladığınızda aracı kurum, işlem hacminize dayalı bir komisyon öder.",
        "Bu komisyon aracı kurum tarafından ödenir ve ödediğiniz spread'leri, komisyonları veya ücretleri artırmaz. Aracı kurum kartları bağımsız olarak yazılır; bir aracı kurum, bir değerlendirmeyi veya listelenen bir zayıf yönü değiştirmek için ödeme yapamaz.",
        "Dilediğiniz aracı kurumda doğrudan hesap açmakta serbestsiniz. Yönlendirme bağlantısı isteğe bağlıdır.",
        "Mevcut ortaklar: tanıtım aracısı sözleşmeleri kapsamında Pepperstone, Tickmill, Saxo Bank, Capital.com, Midas ve Darwinex. Tickmill, Saxo Bank ve Midas ayrıca, ayrı portföy yönetimi sözleşmeleri kapsamında yönetilen hesaplar için kullanılan MAM/PAMM yapılarını işletir.",
      ],
    },
    privacy: {
      title: "Gizlilik politikası",
      body: [
        "Bu politika, NUUK Quant'ın (\"NUUK\", \"biz\") nuukquant.com üzerinden hangi kişisel verileri, neden topladığını ve hangi haklara sahip olduğunuzu açıklar. Son güncelleme: 8 Eylül 2026.",
        "Bize verdiğiniz veriler. E-posta, WhatsApp, Telegram veya talep formu üzerinden bizimle iletişime geçtiğinizde gönderdiğiniz bilgileri alırız: ad, e-posta adresi, telefon numarası ve mesajınızın içeriği. Talep formu kendi e-posta istemcinizi açar; yazdığınız hiçbir şey bu web sitesinde saklanmaz.",
        "Otomatik olarak toplanan veriler. Sitenin nasıl kullanıldığını anlamak için IP anonimleştirmeli Google Analytics 4 kullanırız: görüntülenen sayfalar, yaklaşık konum, cihaz türü ve hangi düğmelere tıklandığı (örneğin bir aracı kurum bağlantısı veya bir plan). Bu veriler toplu hâldedir ve sizi isim olarak tanımlamaz. Tarayıcı ayarı veya reklam engelleyici ile engelleyebilirsiniz.",
        "Çerezler. Sitenin kendisi çerez ayarlamaz. Google Analytics oturumları ayırt etmek için çerez ayarlayabilir; bağlantılarımızdan açtığınız üçüncü taraf siteler (aracı kurumlar, Telegram, Calendly, sosyal ağlar) kendi politikalarını uygular. Bu sitedeki canlı piyasa kotasyonları gömülü TradingView bileşenleridir; TradingView sunucularından yüklenir ve TradingView'ın gizlilik politikası kapsamında kendi çerezlerini bırakabilir.",
        "Verileri neden işliyoruz? Talebinizi yanıtlamak, istediğiniz hizmetleri sunmak (yönetilen hesaplar, sinyaller, eğitim), yasal ve düzenleyici yükümlülükleri yerine getirmek ve web sitesini geliştirmek için. Hukuki dayanak, rızanız, sizinle yapılan bir sözleşmenin ifası veya işi yürütmedeki meşru menfaatimizdir.",
        "Paylaşım. Kişisel verileri satmayız. Yalnızca web sitesini ve iletişimi yürütmek için gereken hizmet sağlayıcılarla (barındırma, e-posta, analitik), sizi tanıtmamızı istediğinizde ortak aracı kurumlarla ve yasaların gerektirdiği durumlarda yetkili makamlarla paylaşırız.",
        "Saklama ve güvenlik. Talep verileri, talebin işlenmesi için gerektiği sürece ve bir iş ilişkisi kurulması hâlinde düzenleyici kayıt tutma yükümlülüklerine uygun olarak beş yıla kadar saklanır. Veriler erişim kontrollü sistemlerde tutulur.",
        "Haklarınız. info@nuukquant.com adresine yazarak hakkınızda hangi verileri tuttuğumuzu sorabilir, düzeltilmesini veya silinmesini isteyebilir, işlemeye itiraz edebilir veya rızanızı istediğiniz zaman geri çekebilirsiniz. AB, Birleşik Krallık veya DIFC'de bulunuyorsanız veri koruma otoritenize şikâyette bulunma hakkına da sahipsiniz.",
      ],
    },
    terms: {
      title: "Kullanım koşulları",
      body: [
        "Bu koşullar, NUUK Quant (Dubai Uluslararası Finans Merkezi, Dubai, Birleşik Arap Emirlikleri) tarafından işletilen nuukquant.com'u kullanımınızı düzenler. Web sitesini kullanarak bu koşulları kabul etmiş olursunuz. Son güncelleme: 8 Eylül 2026.",
        "Yalnızca bilgilendirme. Bu web sitesinin içeriği genel piyasa yorumu ve eğitim amaçlıdır. Kişisel yatırım tavsiyesi, kişisel öneri ya da herhangi bir finansal aracı alma veya satma teklifi ya da daveti değildir. Kendi yatırım kararlarınızdan ve herhangi bir hizmetin ikamet ettiğiniz ülkede size sunulup sunulamayacağını teyit etmekten siz sorumlusunuz.",
        "Garanti yok. İşlem yapmak önemli ölçüde risk içerir; risk bildirimine bakın. Geçmiş performans, geriye dönük testler ve kâğıt üstü (paper) sonuçlar gelecekteki sonuçların garantisi değildir. Doğrulama bekliyor veya temsili olarak işaretlenen rakamlar doğrulanmış performans verisi değildir.",
        "Hizmetler. Yönetilen hesaplar, sinyal abonelikleri, mentorluk ve etkinlikler; ücretleri, kapsamı, iptali ve risk limitlerini belirleyen ayrı yazılı sözleşmeler kapsamında sunulur. Farklılık olması hâlinde bu sözleşmeler web sitesine göre önceliklidir.",
        "Üçüncü taraf bağlantıları. Aracı kurumlara, platformlara ve sosyal ağlara verilen bağlantılar kontrolümüz dışındaki sitelere yönlendirir. Yönlendirme bağlantıları IB bildirimi sayfasında açıklanmıştır. Üçüncü taraf sitelerin içeriğinden, erişilebilirliğinden veya koşullarından sorumlu değiliz.",
        "Fikrî mülkiyet. Bu web sitesindeki metinler, grafikler, logolar, çizelgeler ve sistem açıklamaları NUUK'a veya lisans verenlerine aittir. Sayfaları kişisel kullanım için görüntüleyebilir ve yazdırabilirsiniz; diğer her türlü çoğaltma yazılı izin gerektirir. Aracı kurum adları ve logoları ilgili sahiplerinin mülkiyetindedir ve yalnızca tanımlama amacıyla kullanılır.",
        "Sorumluluk. Web sitesi olduğu gibi sunulur. Yasaların izin verdiği ölçüde NUUK, işlem zararları, veri kaybı veya hizmet kesintisi dâhil olmak üzere web sitesinin kullanımından veya içeriğine dayanılmasından kaynaklanan her türlü zarara ilişkin sorumluluğu reddeder.",
        "Değişiklikler ve uygulanacak hukuk. Bu koşulları ve web sitesini istediğimiz zaman değiştirebiliriz; güncel sürüm her zaman burada yayımlanır. Bu koşullar Dubai Uluslararası Finans Merkezi'nde geçerli yasalara tabidir ve uyuşmazlıklar DIFC Mahkemelerinin yargı yetkisindedir.",
      ],
    },
  },

  ctaBand: {
    "title": "Başlamaya hazır mısınız?",
    "body": "İlk görüşmeden ilk işleme dört adım. Kurulum çoğunlukla bir hafta içinde tamamlanır.",
    "steps": [
      {
        "title": "Görüşme talep edin",
        "body": "Uygun hizmetin belirlenmesi için 30 dakika: aracı kurum, sinyaller, portföy yönetimi veya eğitim."
      },
      {
        "title": "Aracı kurum hesabı açın",
        "body": "Ortak aracı kurumda, kendi adınıza. Kimlik ve ikametgâh belgesiyle doğrulama yaklaşık 10 dakika sürer."
      },
      {
        "title": "Fonlayın ve bağlayın",
        "body": "Aracı kurum hesabınızı fonlayın: havuz MAM veya sinyal planı için 1.000 USD'den, özel manda için 250.000 USD'den itibaren. Ardından seçtiğiniz yapıya bağlayın."
      },
      {
        "title": "İşleme başlayın",
        "body": "Planı uygulayın, sonuçları aylık değerlendirin ve gerekçesini açıklayamadığınız hiçbir işleme girmeyin."
      }
    ],
    "cta": {
      "label": "Görüşme Talep Edin"
    }
  },

  footer: {
    "copyright": "Tüm hakları saklıdır.",
    "riskTitle": "Risk uyarısı",
    "legal1": "ekonomist ve yatırımcı Ahmet S. Öztürk'ün kişisel markası ve Dubai Uluslararası Finans Merkezi merkezli NUUK Quant'ın ticari unvanıdır. Hizmetler, mevzuatın izin verdiği ülkelerde profesyonel ve kurumsal müşterilere sunulur; erişilebilirlik bulunduğunuz ülkeye ve ilgili düzenlemelere bağlıdır.",
    "legal2": "Bu web sitesindeki içerik genel piyasa yorumu ve eğitim amaçlıdır. Kişisel yatırım tavsiyesi değildir; herhangi bir finansal araç veya hizmetin alım ya da satımına yönelik teklif veya davet niteliği taşımaz.",
    "ib": "Bu web sitesindeki aracı kurum bağlantıları yönlendirme (referral) bağlantılarıdır. Bu bağlantılar üzerinden hesap açıp fonlamanız hâlinde NUUK komisyon elde edebilir; bu durum ödediğiniz ücretleri değiştirmez.",
    "risk": "İşlem yapmak önemli ölçüde risk içerir ve başlangıç sermayenizi aşan zararlarla sonuçlanabilir. Geçmiş performans gelecekteki sonuçların göstergesi değildir."
  },

  systems: [
    {
      method: "Gann seviyeleri + ATR(14) pozisyon büyüklüğü",
      riskProfile: "Orta",
      summary: "Altın ve gümüş sistemi: girişler Gann fiyat-zaman seviyelerinde, her pozisyon ATR(14) stop'larıyla sabit 300 USD riske göre boyutlandırılır. Stop'suz hiçbir işlem açılmaz; emir gerçekleştirme katmanı bunu reddeder.",
      stats: [
        {
          "label": "Canlıya alınma",
          "value": "2026"
        },
        {
          "label": "İşlem başına risk",
          "value": "300 USD"
        },
        {
          "label": "Stop kuralı",
          "value": "ATR(14) × 1,5"
        }
      ],
    },
    {
      perf: "yıllık +%10,9, backtest",
      assetClass: "Altın, gümüş, ABD ve AB endeksleri",
      method: "Zaman serisi momentumu + Donchian + hareketli ortalama kesişimi, topluluk (ensemble)",
      riskProfile: "Orta",
      summary: "Kıymetli maden ve endeks CFD'lerinde günlük trend takip topluluğu. Swap ve komisyon dâhil edilerek 2010–2026 döneminde ileriye yürüyen (walk-forward) testten geçti; Temmuz 2026'dan beri Tickmill'de kâğıt üstü (paper) hesap olarak çalışıyor.",
      stats: [{ label: "İleriye dönük test başlangıcı" }, { label: "Backtest Sharpe" }, { label: "Backtest maks. düşüş" }],
    },
    {
      method: "Açılış aralığı kırılımı + saatlik Donchian",
      riskProfile: "Yüksek",
      summary: "Endeks CFD'lerinde 15 dakikalık açılış aralığı kırılımı ve kıymetli madenlerde 1 saatlik Donchian; NUUK SignalBridge üzerinden MT4'te gerçekleştirilir. Temmuz 2026'dan beri demoda; yalnızca 200 işlemlik kâğıt üstü (paper) eşiği geçildikten sonra canlıya alınacak.",
      stats: [{ label: "Durum", value: "Demo, kâğıt üstü eşik" }, { label: "Hedef lansman", value: "200 kâğıt üstü işlemden sonra" }, { label: "Kurum" }],
    },
  ],

  performance: [
    {
      name: "Kişisel portföy — Tickmill",
      source: "Aracı kurum ekstresi",
      updated: "Aylık",
      stats: [
        {
          "label": "Başlangıç",
          "value": "2026"
        },
        {
          "label": "Enstrümanlar",
          "value": "Altın, gümüş, endeksler"
        },
        {
          "label": "İşlem başına risk",
          "value": "300 USD"
        },
        {
          "label": "Raporlama",
          "value": "Aylık ekstre"
        }
      ],
    },
    {
      name: "Kişisel portföy — Saxo Bank",
      source: "Aracı kurum ekstresi",
      updated: "Aylık",
      stats: [
        {
          "label": "Başlangıç",
          "value": "2025"
        },
        {
          "label": "Enstrümanlar",
          "value": "Hisse, ETF, FX"
        },
        {
          "label": "Yaklaşım",
          "value": "Uzun vadeli çekirdek portföy"
        },
        {
          "label": "Raporlama",
          "value": "Aylık ekstre"
        }
      ],
    },
    {
      name: "Yönetilen strateji — GANN Algo",
      source: "MAM ekstresi",
      updated: "Aylık",
      stats: [
        {
          "label": "Başlangıç",
          "value": "2026"
        },
        {
          "label": "Hesap sayısı",
          "value": "300+"
        },
        {
          "label": "Yapı",
          "value": "MAM / PAMM"
        },
        {
          "label": "Performans ücreti",
          "value": "HWM üzeri %25"
        }
      ],
    },
    {
      name: "Sinyal kaydı — kapanan fikirler",
      source: "Telegram @NUUKQuant",
      updated: "Aylık",
      stats: [
        {
          "label": "Kazanma oranı",
          "value": "87%"
        },
        {
          "label": "Aylık fikir",
          "value": "100+"
        },
        {
          "label": "Kanal",
          "value": "Telegram"
        },
        {
          "label": "Kayıt",
          "value": "Aylık"
        }
      ],
    },
    {
      "name": "NUUK Trend Ensemble — walk-forward backtest",
      "chartLabel": "yıllık +%10,9, backtest",
      "source": "Backtest 2010–2026, swap ve komisyon dahil",
      "updated": "2026-07",
      "stats": [
        {
          "label": "Net getiri, test dönemi",
          "value": "+10.9%"
        },
        {
          "label": "Maksimum düşüş (drawdown)",
          "value": "6.7%"
        },
        {
          "label": "Sharpe oranı",
          "value": "1.36"
        },
        {
          "label": "Kâğıt işlem başlangıcı",
          "value": "2026-07"
        }
      ]
    },
  ],
};
