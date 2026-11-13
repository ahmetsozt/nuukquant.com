import type { ContentOverride } from "@/i18n";

/**
 * Türkçe içerik. Yalnızca çevrilen alanlar yer alır; eksik anahtarlar İngilizceye düşer
 * (bkz. src/i18n.ts). Diziler indeks bazlı birleştirildiği için uzunluk ve sıra
 * en.ts ile birebir aynıdır. "[FILL…]" yer tutucuları bilinçli olarak İngilizce bırakılmıştır.
 * insights.posts[].category çevrilmez: InsightsList filtresi İngilizce sekme adlarıyla eşleşir.
 */
export const tr: ContentOverride = {
  meta: {
    "title": "NUUK | Yapay Zekâ Destekli Yatırım ve Portföy Yönetimi, Dubai",
    "description": "NUUK, DIFC (Dubai) merkezli yapay zekâ destekli bir yatırım kuruluşudur: algoritmik işlem sistemleri, portföy yönetimi, araştırma ve sinyal hizmetleri, yatırımcı eğitimi."
  },
  brand: {
    "role": "Algoritmik işlem · Portföy yönetimi",
    "office": "Dubai Uluslararası Finans Merkezi (DIFC), Dubai, BAE"
  },
  ui: {
    "investorLogin": "Yatırımcı girişi",
    pnl: {
      "kicker": "Kendi masamız",
      "today": "Bugün kapanış",
      "trades": "işlem",
      "winRate": "kazanma oranı",
      "updated": "Güncelleme",
      "source": "NUUK'un kendi hesabı, MT5 günlük ekstresi; komisyon ve swap düşülmüş. Yalnızca masayı temsil eder; yönetilen hesap sonucu değildir."
    },
    "contactToOpen": "Bizimle hesap açın",
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
    "model": "Model portföy",
    "test": "Test aşamasında",
    "paused": "Askıda",
    "soon": "Yakında",
    "pending": "Raporlama bekliyor",
    "verificationInProgress": "Raporlama sürüyor",
    "updated": "Güncelleme",
    "since": "Başlangıç",
    "source": "Kaynak",
    "openAccount": "Hesap Açın",
    "compare": "",
    "subscribe": "Abone Olun",
    "register": "Kayıt Olun",
    "requestDemo": "Demo Talep Edin",
    "viewAll": "Tümünü Görüntüle",
    "readMore": "Devamını okuyun",
    "fill": "",
    "whatsapp": "WhatsApp",
    "whatsappChannel": "WhatsApp grubu",
    "partnerPopup": {
      "title": "",
      "alt": "",
      "cta": "",
      "close": "Kapat"
    },
    "cookie": {
      "text": "Ziyaretçi analitiği ve reklam ölçümü için çerez kullanıyoruz. Siz seçim yapana kadar hiçbir çerez yerleştirilmez.",
      "accept": "Kabul et",
      "reject": "Reddet",
      "more": "Gizlilik politikası"
    },
    "notFound": {
      "title": "Bu sayfa mevcut değil",
      "body": "Adres değişmiş ya da yanlış yazılmış olabilir. Aşağıdaki bağlantılar ana bölümlere götürür.",
      "home": "Ana sayfaya dön"
    },
    "legal": "Yasal",
    "followUs": "Takip edin",
    "riskBar": {
      "pre": "CFD ve forex gibi kaldıraçlı ürünlerde işlem yapmak yüksek risk içerir; sermayenizin tamamını hızla kaybedebilirsiniz.",
      "strong": "Geçmiş performans gelecekteki sonuçların göstergesi değildir.",
      "post": "Bu sitedeki hiçbir içerik kişisel yatırım tavsiyesi niteliği taşımaz."
    },
    store: {
      appLabel: "NUUK uygulaması",
      appStorePre: "İndir",
      appStore: "App Store",
      playPre: "İndir",
      play: "Google Play",
      soon: "Yakında",
    },
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
          "label": "Araştırma ve Sinyaller"
        },
        {
          "label": "Yatırımcı Eğitimi"
        },
        { "label": "Ücretsiz AI Sinyaller", "href": "/free-signals/" },
        { "label": "NUUK Uygulaması ve Üyelik" }
      ]
    },
    {
      "label": "Performans"
    },
    { "label": "Masterclass", "href": "https://www.nuukquant.com/masterclass/" },
    {
      "label": "Analizler",
      "items": [
        { "label": "Piyasa Notları" },
        { "label": "Ekonomik Takvim" }
      ]
    },
    {
      "label": "Kurumsal",
      "items": [
        {
          "label": "Hakkında"
        },
        { "label": "Nasıl Para Kazanıyoruz" },
        {
          "label": "İletişim"
        },
        {
          "label": "Risk Bildirimi"
        },
        { "label": "Yatırımcı Portalı" },
        { "label": "Vaka Çalışmaları" },
      ]
    }
  ],
  legalLinks: [
    {
      "label": "Risk Bildirimi"
    },
    {
      "label": "Gizlilik Politikası"
    },
    {
      "label": "Kullanım Koşulları"
    },
    { "label": "Abonelik Şartları" }
  ],
  socials: [{ label: "LinkedIn" }, { label: "X" }, { label: "Instagram" }],

  home: {
    "hero": {
      "visualTag": "Algoritmik İşlem · Portföy Yönetimi",
      "visualAlt": "Karanlık stüdyoda NUUK renklerinde Formula 1 aracı",
      "kicker": "Yapay zekâ destekli yatırım kuruluşu · DIFC, Dubai",
      "title": "Piyasalarda disiplinli, sistematik yaklaşım.",
      "lead": "NUUK, yapay zekâ destekli sistematik işlem stratejileri geliştirir; bunları önce kendi sermayesiyle çalıştırır, yatırımcı portföylerini yönetir ve yatırımcılara kendi başlarına işlem yapmayı öğretir. Sitedeki her rakam kaynağını ve yöntemini belirtir.",
      "primary": {
        "label": "Hesap Açın"
      },
      "secondary": {
        "label": "Görüşme Talep Edin"
      },
      "trustLine": [
        "Her sistemde kendi sermayemiz",
        "DIFC, Dubai merkezli"
      ],
      "trust": [
        {
          "value": "17",
          "label": "yıllık İstanbul–Londra işlem masası tecrübesi"
        },
        {
          "value": "87",
          "label": "2026'dan bu yana geriye dönük testten geçirilen strateji varyantı; üçü üretimde ve algoritmik sistemler sayfasında belgelenmiş durumda"
        },
        {
          "value": "3,000+",
          "label": "webinar ve seminerlerde eğitim verilen yatırımcı"
        }
      ],
      "pressTitle": "Aracı Kurum Ortağı"
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
    "numbersTitle": "Rakamlarla NUUK*",
    "numbersNote": "*Rakamlar Eylül 2026 itibarıyla NUUK'un kendi kayıtlarından alınmıştır.",
    "promo": {
      "kicker": "Portföy yönetimi",
      "title": "Hesap sizin adınıza. İşlem yetkisi NUUK'ta. Limitler yazılı.",
      "body": "Sermaye hiçbir aşamada müşterinin adından çıkmaz. Aracı kurumda kendi adınıza hesap açarsınız; NUUK yalnızca işlem yetkisi alır ve yazılı risk mandası toplam pozisyon ile günlük zarar limitini belirler.",
      "figure": "300+",
      "figureLabel": "yönetilen hesap; her biri müşterinin kendi aracı kurum hesabında. Saklama hiçbir zaman el değiştirmez.",
      "cta": {
        "label": "Nasıl çalışır?"
      }
    },
    "postsLead": "Makro, FX, emtia, endeksler, kripto varlıklar ve algoritmik işlem. Beş dakikada okunacak biçimde hazırlanır.",
    "pillarsTitle": "Hizmet alanları",
    "pillarsLead": "Dört hizmet alanı, tek ilke: sermaye her zaman müşterinin kendi hesabında kalır.",
    "pillars": [
      {
        "title": "Algoritmik İşlem Sistemleri",
        "body": "FX, endeksler, kıymetli madenler ve dijital varlıklarda geliştirilen, geriye ve ileriye dönük testlerden geçirilen ve canlı çalıştırılan özel algoritmalar.",
        "who": "Fon yöneticileri ve nicel yatırımcılar için"
      },
      {
        "title": "Performans Kaydı",
        "body": "NUUK'un kendi portföyü ve sistemlerin sonuçları; maliyetler düşülmüş, her rakamın kaynağı ve yöntemi belirtilmiş olarak.",
        "who": "Karar öncesi kanıt görmek isteyen yatırımcılar için"
      },
      {
        "title": "Portföy Yönetimi",
        "body": "Sermaye müşterinin kendi aracı kurum hesabında kalır; işlemler yazılı risk mandası ve performans ücreti esasıyla yürütülür.",
        "who": "Profesyonel yönetim isteyen yatırımcılar için"
      },
      {
        "title": "Araştırma, Sinyal ve Eğitim",
        "body": "Günlük piyasa notları, haftalık raporlar, gerekçeli işlem fikirleri ve yöntemi öğreten canlı eğitimler.",
        "who": "Bilgi ve yöntem edinmek isteyen yatırımcılar için"
      }
    ],
    "record": {
      "kicker": "Performans kaydı",
      "title": "Sonuçlar ve arkasındaki yöntem",
      "lead": "Sonuçlar işlem maliyetleri düşülmüş olarak raporlanır. Her rakam kaynağını belirtir: canlı hesap, kâğıt üzerinde işlem veya backtest.",
      "featuredLabel": "Özkaynak eğrisi",
      "featuredNote": "Walk-forward backtest 2010–2026, swap ve komisyon düşülmüş, 100'e endekslenmiş. Yıllıklandırılmış getiri +%10,9, maksimum düşüş %6,7, Sharpe oranı 1,36.",
      "cta": {
        "label": "Performans kaydının tamamı"
      }
    },
    "brokers": {
      "kicker": "Aracı kurum ortağı",
      "title": "Hesap her zaman sizin adınıza",
      "lead": "Her NUUK yatırımcısı hesabını aracı kurumda kendi adına açar. Düzenleyici otoriteyi, spread'leri ve para yatırma/çekme koşullarını hesap açmadan önce birlikte gözden geçiririz.",
      "cta": {
        "label": "Bize ulaşın"
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
      "lead": "Enstrüman, yön, giriş, zarar durdur, hedef ve gerekçe. WhatsApp ve e-posta ile iletilir.",
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
    "metaTitle": "NUUK Hakkında",
    "metaDescription": "NUUK, 2025'te Dubai Uluslararası Finans Merkezi'nde (DIFC) kurulan, on yedi yıllık İstanbul–Londra işlem masası tecrübesi üzerine inşa edilmiş yapay zekâ destekli bir yatırım ve portföy yönetimi kuruluşudur.",
    "kicker": "NUUK Hakkında",
    "title": "On yedi yıl işlem masasında. Bunu kanıtlamak için kurulan bir şirket.",
    "lead": "NUUK, 2025 yılında Dubai Uluslararası Finans Merkezi'nde kuruldu. Arkasında 2009'da Londra'daki bir FX aracı kurumunun işlem masasında başlayan, İstanbul'un kurumsal masalarından geçen ve 700'ün üzerinde müşteriye ulaşan bir tanıtım aracılığı işine uzanan on yedi yıllık tecrübe var. Bu tecrübe tek bir kanaate dönüştü: piyasalar görüşü değil, disiplini ödüllendirir. NUUK bu kanaati sistematik stratejilere çevirir, önce kendi sermayesiyle çalıştırır; yöntemi portföy yönetimi, araştırma ve eğitim yoluyla yatırımcılarla paylaşır.",
    "facts": [
      {
        "value": "2025",
        "label": "DIFC, Dubai'de kuruluş"
      },
      {
        "value": "17",
        "label": "yıllık İstanbul–Londra işlem masası tecrübesi"
      },
      {
        "value": "3",
        "label": "canlı sistem; 87 strateji varyantı test edildi"
      }
    ],
    "activitiesTitle": "NUUK ne yapar",
    "activitiesLead": "Dört faaliyet alanı ve hepsinden geçen tek kural: müşteri sermayesi her zaman müşterinin kendi hesabında kalır.",
    "activities": [
      {
        "title": "Algoritmik işlem sistemleri",
        "body": "Stratejiler şirket içinde tasarlanır, geriye ve ileriye dönük test edilir; ardından FX, altın, endeksler ve dijital varlıklarda NUUK'un kendi sermayesiyle canlıya alınır. GANN NUUK Trader AI, Model portföy olarak çalışıyor."
      },
      {
        "title": "Portföy yönetimi",
        "body": "MAM/PAMM yapılarıyla müşterinin kendi aracı kurum hesabında yönetilen portföyler; yazılı risk mandası, yönetim ücreti ve net kâr üzerinden performans ücreti."
      },
      {
        "title": "Araştırma ve sinyaller",
        "body": "Günlük masa notları, haftalık rapor ve gerekçesi tam yazılmış işlem fikirleri; yatırımcı paneli ve WhatsApp üzerinden."
      },
      {
        "title": "Yatırımcı eğitimi",
        "body": "Webinar, seminer ve mentorluk: 3.000'den fazla yatırımcı, masanın kullandığı disiplinle piyasa okumayı öğrendi."
      }
    ],
    "timelineTitle": "Hikâye",
    "timeline": [
      {
        "year": "2009",
        "title": "Londra",
        "body": "NUUK'un arkasındaki masa tecrübesi, Londra'da bir FX aracı kurumunun işlem masasında başlar: emir gerçekleştirme, likidite ve müşteri riski, içeriden öğrenilir."
      },
      {
        "year": "2011",
        "title": "İstanbul",
        "body": "Türkiye piyasası kaldıraçlı işlemlere açılırken İstanbul aracı kurumlarında kurumsal FX; uluslararası müşteri portföyü %27 büyür."
      },
      {
        "year": "2016",
        "title": "Müşteri işi",
        "body": "Tanıtım aracılığı ve müşteri ilişkileri işi 700'ün üzerinde müşteriye ve 26 milyon USD'yi aşan müşteri hacmine ulaşır."
      },
      {
        "year": "2025",
        "title": "NUUK, Dubai",
        "body": "Dubai Uluslararası Finans Merkezi'nde yapay zekâ destekli bir yatırım kuruluşu olarak kurulur: sistemler, portföy yönetimi, araştırma ve eğitim."
      },
      {
        "year": "2026",
        "title": "Canlı sistemler",
        "body": "87 strateji varyantı test edildi; üçü üretimde. GANN NUUK Trader AI, Model portföy olarak çalışıyor; sonuçları performans sayfasında."
      },
      {
        "year": "Bugün",
        "title": "Çok dilli bir masa",
        "body": "Yatırımcı paneli ve İstanbul'dan Körfez'e yatırımcılara altı dilde hizmet veren bir site."
      }
    ],
    "principlesTitle": "NUUK nasıl çalışır",
    "principles": [
      {
        "title": "Kanıt esası",
        "body": "Sitedeki her rakam kaynağını ve yöntemini belirtir. Açıklanamayan rakam gösterilmez."
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
        "title": "Önce kendi sermayesi",
        "body": "Hiçbir sistem, NUUK'un kendi parasıyla çalışmadan bir müşteri hesabına ulaşmaz."
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
      "WhatsApp grubu: günlük piyasa notları, işlem fikirleri ve aylık sistem raporu",
      "LinkedIn · NUUK: kurumsal duyurular ve kapsamlı araştırmalar",
      "Yatırımcı paneli: aboneler için araştırma, sinyaller, günlük K/Z ve eğitim"
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
        "body": "Risk, sürecin her aşamasında gözetilir."
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
        "a": "Evet, kendi adınıza açılan aracı kurum hesabınızla. Kopya işlem yapabilir, aracı kurumdaki MAM/PAMM yapısına katılabilir ya da sinyal kanalını takip ederek işlemleri kendiniz gerçekleştirebilirsiniz. Her durumda hesap sizin adınıza kalır."
      },
      {
        "q": "Minimum sermaye ne kadardır?",
        "a": "WhatsApp sinyalleri için 250 USD, NUUK AI - Premium için 1.000 USD. Portföy yönetimi kapsamındaki MAM/PAMM hesapları, portföy yönetimi sayfasında belirtilen minimum tahsis tutarından başlar."
      },
      {
        "q": "Kaynak kod paylaşılıyor mu?",
        "a": "Hayır. Kod özel kalır. Yayımladığımız şey yöntem, risk kuralları ve kaynağı belirtilmiş sonuçlardır."
      }
    ]
  },

  trackRecord: {
    "metaTitle": "Performans Kaydı",
    "metaDescription": "NUUK'un kendi portföyünün ve işlem sistemlerinin performansı; her rakamın kaynağı ve yöntemiyle.",
    "kicker": "Performans kaydı",
    "title": "Her rakam, kaynağıyla",
    "lead": "Yatırımcı hesapları aracı kurumda, yatırımcının kendi adına tutulur. Bu sayfadaki sonuçlar NUUK Model portföy hesabına aittir; bu hesap yatırımcı hesaplarından ayrıdır. Her rakam nereden geldiğini ve nasıl hesaplandığını belirtir. Geçmiş performans gelecekteki sonuçların garantisi değildir.",
    "disclaimer": "Geçmiş performans gelecekteki sonuçların göstergesi değildir. Aksi belirtilmedikçe rakamlar işlem maliyetleri düşülmüş, performans ücreti düşülmemiş hâldedir.",
    "methodologyTitle": "Rakamların okunması",
    "methodology": [
      {
        "title": "Kaynak",
        "body": "Canlı hesap, kâğıt üzerinde işlem veya backtest. Etiket her rakamın yanında yer alır; hesaplama yöntemi bu sayfada açıklanır."
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
    "pending": "Rakamlar hesabın MT4 ekstresindeki kapanmış işlem geçmişinden üretilir. Masa model portföy olarak çalışır."
  },

  managed: {
    "metaTitle": "Portföy Yönetimi",
    "metaDescription": "Portföy yönetimi nasıl çalışır: sermaye müşterinin kendi aracı kurum hesabında kalır ve yazılı risk limitleri dâhilinde yönetilir.",
    "kicker": "Portföy yönetimi",
    "title": "Hesap sizin adınıza. İşlem yetkisi NUUK'ta. Limitler yazılı.",
    "lead": "Sermaye hiçbir aşamada müşterinin adından çıkmaz. Aracı kurumda kendi adınıza hesap açar ve yönetilen yapıya bağlarsınız; NUUK işlemleri yazılı risk mandası dâhilinde yürütür.",
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
        "body": "Aracı kurumda kendi adınıza hesap açar ve fonlarsınız. NUUK yalnızca işlem yetkisi alır; para çekme yetkisi hiçbir zaman devredilmez."
      },
      {
        "title": "Risk mandası",
        "body": "Risk limitleri yazılı yetki belgesinde belirlenir."
      },
      {
        "title": "Raporlama",
        "body": "Her işlem kendi hesabınızda gerçek zamanlı görüntülenir; ayrıca aylık rapor ve üç ayda bir değerlendirme görüşmesi yapılır."
      }
    ],
    "tiersTitle": "Üç tahsis modeli",
    "tiers": [
      {
        "name": "WhatsApp Sinyalleri",
        "tagline": "Sinyaller size gelir, işlemi siz açarsınız",
        "minimum": "250 USD (aracı kurumdaki kendi hesabınız)",
        "managementFee": "Aylık 49 USD AI üyelik ücreti",
        "performanceFee": "Yok",
        "lockup": "Yok; istediğiniz zaman ayrılırsınız",
        "structure": "Aracı kurumdaki kendi hesabınız; sinyaller WhatsApp'tan gelir",
        "forWhom": "Küçük bakiyeyle başlayıp işlemi kendi eliyle açmak isteyenler",
        "join": "Katıl",
        "joinText": "Merhaba. Sinyal programına katılmak istiyorum."
      },
      {
        "name": "NUUK AI - Premium",
        "tagline": "Sistemler, kendi hesabınızın içinde",
        "minimum": "1.000 USD",
        "managementFee": "Aylık 99 USD",
        "performanceFee": "Haftalık net kâr üzerinden %25",
        "lockup": "30 gün; ardından dilediğiniz zaman çekebilirsiniz",
        "structure": "Aracı kurumda MAM / kopya işlem havuzu",
        "forWhom": "Sistemleri kendisi çalıştırmak istemeyen bireysel yatırımcılar",
        "join": "Katıl",
        "joinText": "Merhaba. NUUK AI - Premium programına katılmak istiyorum."
      },
      {
        "name": "Özel Hesap",
        "tagline": "Size özel manda ve risk limitleri",
        "minimum": "250.000 USD",
        "managementFee": "Aylık 1.000 USD (minimum tutarda yıllık yaklaşık %4,8; üzerinde oransal olarak düşer)",
        "performanceFee": "Yüksek su işaretinin (high-water mark) üzerindeki kârın %25'i",
        "lockup": "30 gün önceden bildirim",
        "structure": "Aracı kurumda PAMM ya da ayrı yönetilen hesap",
        "forWhom": "Aile ofisleri, kurumsal hazineler ve profesyonel yatırımcılar",
        "join": "Katıl",
        "joinText": "Merhaba. Özel hesap açmak istiyorum."
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
    "compliance": "NUUK Quant, Dubai Uluslararası Finans Merkezi'nde faaliyet göstermektedir. Yönetilen hesaplar, aracı kurumun kendi MAM/PAMM yapısı üzerinden ve onun düzenleyici çerçevesi dâhilinde çalışır: NUUK yalnızca işlem yetkisine sahiptir; saklama veya para çekme yetkisi hiçbir zaman NUUK'a geçmez. Bugün yönetilen 300'ün üzerindeki hesap havuz MAM yapısındadır; özel mandalar bireysel olarak açılır."
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
      "contactNote": "",
      "regulator": "",
      "licence": "",
      "founded": "",
      "minDeposit": "",
      "platforms": "",
      "spreads": "",
      "commission": "",
      "leverage": "",
      "funding": "",
      "withdrawal": "",
      "islamic": "",
      "languages": "",
      "bestFor": "",
      "pros": "",
      "cons": "",
      "steps": "",
      "yes": "",
      "no": "",
      "profile": "",
      "allBrokers": "",
      "atAGlance": "",
      "conditions": "",
      "about": "",
      "website": "",
      "faq": "",
      "openWith": "",
      "verifyNote": ""
    },
    list: [],
  },

  freeSignals: {
    "metaTitle": "NUUK AI Ücretsiz Forex Sinyalleri ve Algoritmik İşlem",
    "metaDescription": "WhatsApp grubumuzda ücretsiz, yapay zekâ üretimi forex, endeks ve emtia sinyalleri. Her fikirde giriş, hedef ve zarar durdur seviyesi. NUUK'un algoritmik işlem masasından eğitim içeriği; yatırım tavsiyesi değildir.",
    "brandLine": "NUUK AI · Ücretsiz Forex Sinyalleri ve Algoritmik İşlem",
    "kicker": "Ücretsiz sinyaller",
    "title": "Daha bilinçli işlemler için ücretsiz günlük yapay zekâ forex sinyalleri",
    "lead": "Döviz pariteleri, endeksler ve emtialar NUUK'un algoritmik sistemleri tarafından taranır ve WhatsApp grubumuzda ücretsiz paylaşılır. Her fikirde giriş, hedef ve zarar durdur seviyesi bulunur; böylece işlemi kendi planınıza göre değerlendirebilirsiniz.",
    "cta": { "label": "Ücretsiz Gruba Katıl" },
    "secondary": { "label": "Algoritmalar nasıl çalışır?" },
    "instruments": [
      { "name": "EUR/USD" },
      { "name": "ABD Doları" },
      { "name": "Altın" },
      { "name": "Brent / WTI" },
      { "name": "GBP/USD" }
    ],
    "startTitle": "Başlangıç",
    "chatTitle": "Bizimle sohbet et",
    "chatLink": "WhatsApp grubumuza katıl",
    "chatBody": "Grubumuz ücretsizdir ve eğitim amacıyla yürütülür. Piyasa analizlerini ve sinyalleri üyelerimiz öğrensin diye paylaşıyoruz; gruptaki hiçbir içerik yatırım tavsiyesi değildir.",
    "chatCta": "Ücretsiz Gruba Katıl",
    "dailyTitle": "Her gün ne gelir?",
    "daily": [
      "Kısa bir sabah notu: bugün ne önemli ve kilit seviyeler neler",
      "Tek mesajda giriş, hedef ve zarar durdur seviyeli sinyaller",
      "Her fikir için tek satırlık gerekçe; mantığı da öğrenirsiniz",
      "Kapanan her fikrin sonucu, kazanç ya da kayıp"
    ],
    "riskLine": "Forex ve CFD işlemleri ciddi bir kayıp riski taşır ve her yatırımcı için uygun değildir. Geçmiş performans, gelecekteki sonuçların göstergesi değildir.",
    "accessTitle": "Ücretsiz günlük forex sinyallerine erişin",
    "accessBody1": "Kendi piyasa analizinizi desteklemek için her gün ücretsiz forex sinyalleri alın. Sinyaller döviz paritelerini, endeksleri ve emtiaları kapsar; amaç, piyasadaki hareketleri daha yakından takip etmenizi kolaylaştırmaktır.",
    "accessBody2": "Algoritmik sistemlerimizin ürettiği ve masamızın gözden geçirdiği günlük sinyalleri ve piyasa yorumlarını takip etmek için NUUK'a katılın. Paylaşılan sinyaller yalnızca bilgilendirme amaçlıdır, yatırım tavsiyesi niteliği taşımaz.",
    "accessCta": "Ücretsiz Gruba Katıl",
    "sampleLabel": "Mesaj formatını gösteren örneklerdir, canlı sinyal değildir",
    "labels": { "entry": "Giriş", "target": "Hedef", "stop": "Stop", "rr": "R:R" },
    "samples": [
      { "direction": "Al", "note": "Dolar endeksi direnç altında dururken haftalık talep bölgesinden dönüş." },
      { "direction": "Al", "note": "Altın tarım dışı istihdam sonrası 4.380–4.400 bölgesini korudu; reel getiriler yeni zirve yapamadı." },
      { "direction": "Al", "note": "20 günlük ortalamanın üzerinde trend devamı; açılışa doğru piyasa genişliği iyileşiyor." }
    ],
    "howTitle": "NUUK AI bir sinyali nasıl üretir?",
    "howLead": "Ücretsiz fikirleri, kendi algoritmik işlem sistemlerimizi çalıştıran aynı hat üretir. Hiçbir şey sonradan elle seçilmez.",
    "how": [
      { "title": "Veri", "body": "40'tan fazla enstrüman için fiyat, hacim, oynaklık ve ekonomik takvim; sürekli güncellenir." },
      { "title": "Modeller", "body": "Trend, ortalamaya dönüş ve olay modelleri her enstrümanı puanlar; yönde uzlaşır ya da pozisyon almaz." },
      { "title": "Risk filtresi", "body": "Her aday, geçmeden önce tanımlı bir stop, gerçekçi bir hedef ve kabul edilebilir bir risk/getiri oranı göstermek zorundadır." },
      { "title": "Yayın", "body": "Filtreyi geçen fikirler giriş, hedef, stop ve tek satır gerekçeyle WhatsApp grubuna düşer. Kapandığında sonucu kaydedilir." }
    ],
    "communityTitle": "Her üyenin bizden bekleyebileceği dört söz",
    "communityLead": "Grup yeni; henüz üye yorumumuz yok. Yorum uydurmak yerine, her üyenin ilk günden itibaren bizi ölçebileceği dört taahhüdü paylaşıyoruz.",
    "commitments": [
      { "title": "Her gün değil, seçici", "body": "Sistemlerin tasarlandığı koşulları bekleriz. Sinyal olmayan günler normaldir ve açıkça söylenir." },
      { "title": "Her şey tek mesajda", "body": "Enstrüman, yön, giriş, hedef, stop ve tek satır gerekçe. Hiçbir sinyal yalnızca \"al\" ya da \"sat\" olarak gelmez." },
      { "title": "Her sonuç, kazanç ya da kayıp", "body": "Kapanan fikirler giriş, çıkış ve sonuçla raporlanır. Kayıplar da kazançlarla aynı formatta paylaşılır." },
      { "title": "Karar her zaman sizin", "body": "Sinyaller kendi analizinizi destekler, yerine geçmez. Risk her fikirde belirtilir, hiçbir sonuç vaat edilmez." }
    ],
    "communityNote": "Gerçek üyeler yorumlarını paylaştığında burada yer alacak. İşlem yapmak kayıp riski taşır.",
    "aimTitle": "Amacımız",
    "aim": [
      "En büyük algoritmik forex topluluklarından birini kuruyoruz. Farklı deneyim seviyelerinden yatırımcıları bir araya getiriyor, birbirlerinden öğrenmelerini ve piyasayı birlikte takip etmelerini sağlıyoruz.",
      "Çoğu kişi forex piyasasına hiç adım atmıyor, çünkü nereden başlayacağını bilmiyor. Biz de bunu değiştirmek için buradayız: günlük yapay zekâ sinyalleri, piyasa analizleri ve her seviyeden yatırımcıya açık, destekleyici bir topluluk.",
      "Yatırım tavsiyesi vermiyoruz ve kimseye sonuç vaat etmiyoruz. Sunduğumuz şey eğitim, günlük piyasa analizi ve kendi risk yönetiminizi, kendi işlem disiplininizi oluştururken yanınızda olan bir topluluk.",
      "Günlük ortalama 9,6 trilyon dolarlık işlem hacmiyle forex, dünyanın en büyük ve en likit finansal piyasası. Topluluğumuza katılın, öğrenmeye bugün başlayın."
    ],
    "aboutTitle": "Hakkımızda",
    "aboutLead": "NUUK, Dubai DIFC merkezli, yapay zekâ ile tasarlanmış bir işlem şirketidir; İstanbul ve Londra'da on yedi yıllık masa deneyimi üzerine kuruludur. Forex piyasasının nasıl işlediğini sade ve uygulanabilir analizlerle anlatır; her stratejiyi yayına almadan önce model portföyde test eder.",
    "servicesTitle": "Sunduğumuz hizmetler",
    "services": ["Forex, endeks ve emtia için yapay zekâ üretimi sinyaller", "Yayınlanmış performans kaydıyla sistemli algoritmik işlem sistemleri", "Piyasa trendlerini okurken ve riski yönetirken yol gösteren rehberlik"],
    "aboutClose": "Kısayollara değil; disipline, risk yönetimine ve sabırlı bir öğrenme sürecine inanıyoruz. Amacımız, forex piyasasında kendi kararlarınızı bilinçli şekilde verebilmeniz için gereken bilgiyi ve topluluğu size sunmak.",
    "aboutCta": { "label": "Performans kaydını görün" },
    "faqTitle": "Sıkça sorulan sorular",
    "faq": [
      { "q": "Forex nedir?", "a": "Forex, döviz paritelerinin alınıp satıldığı küresel piyasadır. Yatırımcılar kurlardaki hareketlerden yararlanmayı hedefler. Her işlem türünde olduğu gibi burada da kayıp riski vardır." },
      { "q": "Forex piyasası nasıl işler?", "a": "Her işlem bir çifttir: bir para birimi alınırken diğeri satılır. EUR/USD gibi paritelerin yanı sıra altın, gümüş gibi metaller ve endeksler de aynı mantıkla işlem görür. Piyasa hafta içi 24 saat açıktır." },
      { "q": "Ana döviz pariteleri hangileridir?", "a": "En çok işlem gören pariteler EUR/USD, USD/JPY, GBP/USD, USD/CHF, AUD/USD ve USD/CAD'dir. Bunlara majör pariteler denir; hacimleri yüksek olduğu için spreadleri genellikle daha düşüktür." },
      { "q": "Forex fiyatlarını ne belirler?", "a": "Fiyatlar; faiz kararları, enflasyon ve büyüme verileri gibi ekonomik göstergelerden, merkez bankası açıklamalarından, jeopolitik gelişmelerden ve piyasanın genel beklentisinden etkilenir." },
      { "q": "Kaldıraç nedir?", "a": "Kaldıraç, küçük bir teminatla daha büyük pozisyon taşımanıza imkân verir. Kazancı büyüttüğü kadar zararı da büyütür; yatırdığınız tutarın tamamını kaybetmenize yol açabilir. Bu yüzden dikkatle kullanılması gerekir." },
      { "q": "Forex indikatörleri ne işe yarar?", "a": "İndikatörler, fiyat ve hacim verilerini işleyerek piyasadaki eğilimleri okumanıza yardımcı olur. Kesin sonuç vermezler; karar verirken başvurduğunuz girdilerden yalnızca biridir." },
      { "q": "Forex brokeri nedir?", "a": "Broker, bireysel ve kurumsal yatırımcıların forex piyasasına erişmesini sağlayan aracı kurumdur. Seçim tamamen size aittir; kurumun bulunduğunuz ülkede yetkili bir otorite tarafından denetlenip denetlenmediğini mutlaka kontrol edin." },
      { "q": "Pip nedir?", "a": "Pip, bir paritenin standart en küçük fiyat hareketidir. Alış-satış farkını (spread) ölçmek, işlem maliyetini hesaplamak ve kâr-zarar takibi yapmak için kullanılır." },
      { "q": "Forex stratejisi nedir?", "a": "Strateji, bir işleme ne zaman girip ne zaman çıkacağınızı belirleyen kurallar bütünüdür. İyi bir strateji, hangi durumda işlem yapmayacağınızı da tanımlar ve risk yönetimini içerir." },
      { "q": "Forex'e nasıl başlanır?", "a": "Önce piyasanın nasıl işlediğini öğrenin, ardından gerçek para koymadan demo hesapta pratik yapın. Bu süreçte günlük sinyalleri ve piyasa yorumlarını takip etmek için ücretsiz WhatsApp grubumuza katılabilirsiniz." },
      { "q": "Ne kadar yatırım yapmalıyım?", "a": "Bu tamamen finansal durumunuza, risk toleransınıza, deneyiminize ve hedeflerinize bağlıdır. Yatırım tavsiyesi vermediğimiz için bir tutar öneremeyiz. Genel ilke şudur: kaybetmeyi göze alamayacağınız parayla işlem yapmayın." },
      { "q": "Sinyalleri uygulamak zorunda mıyım?", "a": "Hayır. Her üye piyasayı kendi analiziyle değerlendirmekte ve kendi işlemini açmakta serbesttir. Sinyaller bu süreci desteklemek ve zaman kazandırmak için vardır; karar her zaman size aittir." },
      { "q": "Forex riskli mi?", "a": "Evet. Forex yüksek kayıp riski taşır ve bireysel yatırımcıların önemli bir bölümü para kaybeder. Garantili sonuç yoktur; geçmiş performans geleceğin göstergesi değildir. Sinyal, analiz ve eğitim paylaşarak kendi kararınızı vermenize destek oluruz. Sonuç her zaman sizin tercihlerinize, risk yönetiminize ve piyasa koşullarına bağlıdır." }
    ],
    "closingTitle": "Daha akıllı işlemler sizi bekliyor",
    "closingBody": "Ücretsiz NUUK WhatsApp grubuna katılın, gerekçesiyle birlikte paylaşılan yapay zekâ sinyallerini takip edin.",
    "closingCta": "Hemen Başla",
    "riskTitle": "Risk uyarısı",
    "riskBody": "Forex ve CFD işlemleri ciddi bir kayıp riski taşır ve her yatırımcı için uygun değildir. Yatırdığınız sermayenin tamamını kaybedebilirsiniz. NUUK'un paylaştığı sinyaller, analizler ve eğitim içerikleri genel piyasa yorumudur; kişisel yatırım tavsiyesi değildir ve bireysel koşullarınızı dikkate almaz. Geçmiş performans, gelecekteki sonuçların göstergesi değildir. Yalnızca kaybetmeyi göze alabileceğiniz parayla işlem yapın."
  },

  signals: {
    "metaTitle": "Araştırma ve Sinyal Hizmetleri",
    "metaDescription": "Günlük piyasa notları, haftalık raporlar ve gerekçeli işlem fikirleri; WhatsApp ve e-posta ile iletilir.",
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
          "WhatsApp üzerinden canlı güncellemeler",
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
    "performanceNote": "Kapanan fikirler her ay giriş, çıkış ve sonuç bilgisiyle WhatsApp grubunda kayıt altına alınır. Bugüne kadarki kurum içi kayıt: kapanan fikirlerin %87'si zarar durdur seviyesinden önce hedefe ulaşmıştır. Kaydın bağımsız doğrulaması sürmektedir.",
    "disclaimer": "Sinyaller eğitim içeriği ve genel piyasa yorumu niteliğindedir. Kişisel yatırım tavsiyesi değildir ve bireysel koşullarınızı dikkate almaz."
  },

  membership: {
    metaTitle: "NUUK üyelik: ücretsiz WhatsApp grubu ve Premium",
    metaDescription:
      "Ücretsiz NUUK WhatsApp sinyal grubuna katıl ya da NUUK Premium'a (aylık 99 USD) başvur: anlık sinyaller, tüm analizler ve NUUK uygulaması. Ödemeler şimdilik yalnızca kripto ile alınır.",
    kicker: "NUUK üyelik",
    title: "NUUK Masa'yı takip etmenin iki yolu",
    lead: "WhatsApp grubumuzda ücretsiz başla ya da anlık sinyaller, tüm analizler ve NUUK uygulaması için Premium'a geç. Planını seç, kısa formu doldur, gerisini biz halledelim.",
    heroCta: { label: "Planını seç" },
    freeCta: "Ücretsiz gruba katıl",
    plansTitle: "Planını seç",
    plansLead: "İkisi de aynı kısa formla başlar. Premium aylık, ABD doları üzerinden; ödemeleri şimdilik yalnızca kripto para ile kabul ediyoruz.",
    recommended: "Önerilen",
    promo: "Ekim'e özel ilk ay 49 $",
    selected: "Seçtiğin plan",
    free: "Ücretsiz",
    forever: "süresiz",
    perMonth: "/ ay",
    plans: {
      free: {
        name: "Ücretsiz WhatsApp grubu",
        tagline: "Masayı her gün takip et",
        features: [
          "Kilit seviyelerle günlük sabah notu",
          "Tek mesajda giriş, hedef ve stop seviyeli sinyaller",
          "Her fikir için tek satırlık gerekçe",
          "Kapanan her sonucun paylaşımı, kazanç ya da kayıp",
        ],
        cta: "Ücretsiz katıl",
      },
      premium: {
        name: "Premium",
        tagline: "Anlık, NUUK uygulamasında",
        everything: "Ücretsiz gruptaki her şey, artı:",
        cta: "Premium'a başvur",
      },
    },
    cryptoNote: "Ödemeleri şimdilik yalnızca kripto para (USDT gibi stablecoin'ler) ile kabul ediyoruz. Adres, başvurundan sonra sana özel ödeme sayfasında gösterilir.",
    custodyNote: "Bu ödeme yalnızca üyelik ücretidir. NUUK yatırım parası kabul etmez; yatırım fonlaması her zaman kendi adına açılan aracı kurum hesabına yapılır.",
    form: {
      title: "Üyelik başvurusu",
      leadFree: "Bilgilerini gir; grup bağlantısı hemen açılır.",
      leadPremium: "Bilgilerini gir; ardından ödeme sayfan açılır.",
      plan: "Plan",
      name: "Ad soyad",
      namePh: "Adın ve soyadın",
      phone: "Telefon (WhatsApp)",
      phonePh: "+90 532 123 45 67",
      phoneHint: "{country} cep numarası: {n} hane, örn. {example}",
      country: "Ülke kodu",
      email: "E-posta",
      emailPh: "ornek@eposta.com",
      emailHint: "Premium, NUUK uygulamasında bu adrese açılır.",
      funding: "Fonlamayı düşündüğün tutar (USD)",
      fundingPh: "örn. 5000",
      fundingHint: "Sana uygun aracı kurum hesabını önerebilmemiz için. Fonlamayı kendi adına açılan aracı kurum hesabına sen yaparsın; NUUK müşteri parası tutmaz.",
      consent: "{privacy} okudum; başvuru bilgilerimin NUUK tarafından işlenmesini kabul ediyorum.",
      consentPremium: "{privacy} ve {terms} okudum; başvuru bilgilerimin NUUK tarafından işlenmesini kabul ediyorum.",
      privacy: "Gizlilik politikasını",
      terms: "abonelik şartlarını",
      risk: "Sinyallerin genel piyasa yorumu olduğunu, yatırım tavsiyesi olmadığını ve kaldıraçlı işlemlerde para kaybedebileceğimi biliyorum ({risk}).",
      riskLink: "risk bildirimi",
      submit: "Başvuruyu gönder",
      submitting: "Gönderiliyor…",
      close: "Kapat",
      errors: {
        generic: "Bir şeyler ters gitti. Tekrar dene ya da info@nuukquant.com adresine yaz.",
        network: "Sunucuya ulaşılamadı. Bağlantını kontrol edip tekrar dene.",
        rate: "Çok fazla deneme oldu. Birkaç dakika sonra tekrar dene.",
        name: "Adını ve soyadını gir.",
        nameChars: "Ad soyad yalnızca harflerden oluşmalı.",
        nameFake: "Bu gerçek bir ad gibi görünmüyor. Kendi adını gir.",
        phone: "Bu numara {country} için geçerli değil. Kontrol edip tekrar dene.",
        phoneShort: "{country} cep numaraları {n} haneli; sen {d} hane girdin.",
        phoneLong: "{country} cep numaraları {n} haneli; sen {d} hane girdin.",
        phoneNotMobile: "Cep telefonu numarası gir: grup WhatsApp üzerinden yürüyor.",
        phonePattern: "Bu numara gerçek görünmüyor (tekrar eden ya da ardışık rakamlar). Kendi numaranı gir.",
        phoneCountry: "Ülke seç ya da numarayı + ülke koduyla yaz.",
        email: "Geçerli bir e-posta adresi gir, örn. ad@gmail.com.",
        emailPlaceholder: "Bu bir örnek adres. Gerçek e-postanı gir.",
        emailDisposable: "Geçici e-posta adresleri kabul edilmiyor.",
        emailFake: "Bu adres gerçek görünmüyor. Kendi e-postanı gir.",
        emailTypo: "Bunu mu demek istedin: {suggestion}?",
        emailUseSuggestion: "Kullan",
        emailNoMx: "Bu alan adı e-posta almıyor. Adresi kontrol et.",
        funding: "Tutarı tam sayı olarak ABD doları cinsinden gir (0 veya üzeri).",
        consent: "Gizlilik politikasını onayla.",
        risk: "Risk ifadesini onayla.",
      },
      freeDoneTitle: "Hoş geldin",
      freeDoneBody: "Ücretsiz NUUK WhatsApp grubuna katılmak için aşağıya dokun. Bağlantıyı e-postayla da gönderdik. Başvuru numaran: {ref}",
      joinGroup: "WhatsApp grubunu aç",
      unavailable: "Başvurular kısa bir süreliğine kapalı. info@nuukquant.com adresine yaz, seni elle ekleyelim.",
    },
    payment: {
      metaTitle: "Premium ödeme",
      kicker: "NUUK Premium",
      title: "Premium ödemeni tamamla",
      lead: "Merhaba {name}, aşağıdaki tutarı adreslerimizden birine gönder, ardından doğrulayabilmemiz için işlem hash'ini paylaş.",
      cryptoOnly: "Ödemeleri şimdilik yalnızca kripto para ile kabul ediyoruz.",
      amount: "Tutar",
      amountValue: "{price} USDT",
      amountHint: "Tam olarak {price} USDT gönder (aynı ağda USDC de olur). Ağ ücretini gönderen öder.",
      ref: "Başvuru no",
      status: "Durum",
      statuses: {
        new: "Alındı",
        awaiting_payment: "Ödeme bekleniyor",
        payment_submitted: "Ödeme bildirildi, doğrulanıyor",
        paid: "Ödendi, Premium onaylandı",
        joined: "Aktif",
        rejected: "Kapatıldı",
        cancelled: "İptal edildi",
      },
      walletsTitle: "Ödeme adresleri",
      network: "Ağ",
      copy: "Adresi kopyala",
      copied: "Kopyalandı",
      qrAlt: "{network} adresinin QR kodu",
      noWallet: "Ödeme adresi hazırlanıyor. En geç 24 saat içinde e-postayla göndereceğiz; şimdilik yapman gereken başka bir şey yok.",
      warnings: [
        "Adresin yanında yazan ağı kullan. Başka bir ağdan ya da başka bir adrese gönderilen kripto kalıcı olarak kaybolabilir.",
        "NUUK senden asla yatırım parası istemez ve bu sayfadakiler dışında bir adrese ödeme yapmanı istemez.",
      ],
      txTitle: "Ödemeni bildir",
      txLead: "Gönderdikten sonra cüzdanındaki ya da borsandaki işlem hash'ini (TxID) yapıştır. Zincir üzerinde, genellikle 24 saat içinde doğrular ve Premium açıldığında e-postayla haber veririz.",
      txNetwork: "Kullandığın ağ",
      txHash: "İşlem hash (TxID)",
      txHashPh: "TxID'yi yapıştır",
      txSubmit: "Ödeme bilgisini gönder",
      txSending: "Gönderiliyor…",
      txSent: "Teşekkürler. Ödeme bilgin bize ulaştı; doğrulandığında e-postayla onaylayacağız.",
      txError: "Ağı ve TxID'yi kontrol edip tekrar dene.",
      paidBody: "Ödemen doğrulandı. Premium'u kullanmak için NUUK uygulamasına {email} ile giriş yap.",
      paidEmailNote: "başvuruda kullandığın e-posta",
      invalid: "Bu ödeme bağlantısı geçersiz ya da süresi dolmuş. Üyelik sayfasından yeniden başvur ya da info@nuukquant.com adresine yaz.",
      loading: "Ödeme bilgilerin yükleniyor…",
      back: "Üyelik sayfasına dön",
      help: "Ödemenle ilgili sorun mu var? Başvuru numaranla birlikte info@nuukquant.com adresine yaz.",
    },
    features: {
      markets: "Piyasalar ve izleme listesi",
      calendar_news: "Ekonomik takvim ve haberler",
      academy: "Akademi ve araçlar",
      signals_delayed: "Masa sinyalleri (15 dk gecikmeli)",
      signals_realtime: "Anlık Masa sinyalleri",
      push_signals: "Sinyal push bildirimleri",
      analysis_full: "Tüm NUUK analizleri",
      price_alerts: "Fiyat alarmları",
      copy_demo_paper: "Demo MT5 / paper hesaplara otomatik kopya",
      risk_panel: "Hesap başına risk paneli",
      execution_reports: "Yürütme raporları",
      broker_partner: "Aracı kurumda gerçek hesap",
      priority_support: "Öncelikli destek",
    },
    stepsTitle: "Nasıl işler",
    steps: [
      { title: "Planını seç, formu doldur", body: "Ad soyad, telefon, e-posta ve fonlamayı düşündüğün tutar. Bir dakika sürer." },
      { title: "Ücretsiz: gruba katıl. Premium: kripto ile öde", body: "Ücretsiz plan WhatsApp grubunu hemen açar. Premium'da adreslerimizin olduğu sana özel ödeme sayfası açılır." },
      { title: "E-postayla onaylarız", body: "Ödeme zincir üzerinde doğrulanınca Premium, başvurduğun e-postayla NUUK uygulamasında açılır." },
    ],
    appTitle: "NUUK uygulamasını indir",
    appLead: "Piyasalar, takvim, akademi ve NUUK Masa tek uygulamada. İndirmesi ücretsiz; Premium başvurduğun e-postaya açılır.",
    faqTitle: "Sık sorulanlar",
    faq: [
      {
        q: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
        a: "Şimdilik yalnızca kripto: ödeme sayfanda listelenen ağlarda USDT gibi stablecoin'ler. Kartla ödeme daha sonra gelecek. Ödeme yalnızca üyelik ücretini kapsar.",
      },
      {
        q: "Premium uygulamada nasıl açılır?",
        a: "NUUK uygulamasında kullandığın (ya da kullanacağın) e-postayla başvur ve sana özel ödeme sayfasından öde. İşlemi doğruladıktan sonra Premium o e-postaya açılır ve sana e-postayla haber veririz; genellikle 24 saat içinde.",
      },
      {
        q: "Fonlama tutarını neden soruyorsunuz?",
        a: "Sana uygun aracı kurum hesap türünü önerebilmek için. Fonlamayı her zaman kendi adına açılan aracı kurum hesabına yaparsın; NUUK yatırım parası kabul etmez ve tutmaz.",
      },
      {
        q: "Premium otomatik yenilenir mi?",
        a: "Hayır. Kripto ödemeler kendiliğinden yenilenmez. Ay bitmeden sana e-posta göndeririz; yeniden ödeme yapmazsan hesap ücretsiz özelliklere döner.",
      },
      {
        q: "WhatsApp grubu gerçekten ücretsiz mi?",
        a: "Evet. Formu doldur, ücretsiz planı seç, grup bağlantısı açılır. Gruptan istediğin zaman çıkabilirsin.",
      },
    ],
    fine: [
      "Sinyaller ve analizler genel piyasa yorumudur, kişisel yatırım tavsiyesi değildir.",
      "Geçmiş performans gelecek sonuçların garantisi değildir. Kaldıraçlı ürünler yüksek kayıp riski taşır.",
      "Uygulama içi otomatik kopya demo ve paper hesaplar içindir. Gerçek hesap kopyası yalnızca aracı kurum üzerinden yapılır.",
    ],
    legalTitle: "Şartlar ve politikalar",
    legal: [{ label: "Abonelik şartları" }, { label: "Kullanım koşulları" }, { label: "Gizlilik politikası" }, { label: "Risk bildirimi" }],
    support: "info@nuukquant.com",
    thanks: {
      metaTitle: "Üyeliğin onaylandı",
      kicker: "NUUK üyelik",
      title: "Üyeliğin onaylandı",
      lead: "Premium üyeliğin aktif. Uygulamayı aç ve başvurduğun e-postayla giriş yap.",
      stepsTitle: "Sıradaki adımlar",
      steps: [
        { title: "NUUK uygulamasını aç", body: "Telefonunda yoksa aşağıdan indir." },
        { title: "Başvurduğun e-postayla giriş yap", body: "Gönderdiğimiz 6 haneli kodu gir; Premium hesabında hazır." },
        { title: "Onay e-postanı sakla", body: "Başvuru numaran ve ödeme bilgilerin orada." },
      ],
      help: "Premium açılmadı mı? Başvurduğun e-postadan, başvuru numaranla info@nuukquant.com adresine yaz.",
      back: { label: "Üyelik sayfasına dön" },
    },
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
    "notesTitle": "Masa notları",
    "newsTitle": "Canlı piyasa haberleri",
    "newsLead": "Profesyonel haber ajansları ve TradingView analistlerinden başlıklar ve analizler, yayımlandıkça akar. Saatler yerel saat diliminizde.",
    "techTitle": "Teknik görünüm",
    "techLead": "Sistemlerimizin en çok işlem yaptığı enstrümanlarda, günlük periyotta osilatör ve hareketli ortalama okumalarının toplulaştırılmış özeti.",
    "feedNote": "Akışlar TradingView tarafından sağlanır. Üçüncü taraf içerikleri NUUK'un görüşü değildir ve yatırım tavsiyesi niteliği taşımaz.",
    metaTitle: "Analizler",
    metaDescription: "Makro, FX, emtia, endeksler, kripto ve işlemlerde yapay zekâ üzerine piyasa yorumları.",
    kicker: "Analizler",
    title: "İşlem masasından notlar",
    tabs: ["Tümü", "Makro", "FX", "Emtia", "Endeksler", "Kripto", "Yapay zekâ"],
  },

  "calendar": {
    "metaTitle": "Ekonomik Takvim",
    "metaDescription": "Canlı ekonomik takvim: merkez bankası kararları, enflasyon, istihdam ve büyüme verileri; beklenti ve önceki değerlerle birlikte.",
    "kicker": "Ekonomik Takvim",
    "title": "Bu haftanın piyasayı hareket ettirecek verileri",
    "lead": "Merkez bankası kararları, enflasyon, istihdam ve büyüme verileri tek ekranda; beklenti ve önceki değerlerle birlikte. Saatler bulunduğunuz saat diliminde gösterilir.",
    "note": "Veri sağlayıcı TradingView. Yüksek etkili olaylar üç çubukla işaretlenir. NUUK sistemleri yüksek etkili açıklamalar çevresinde pozisyon büyüklüğünü azaltır; manuel işlem yapanlar böyle bir veriden önceki 15 dakika içinde yeni pozisyon açmaktan kaçınmalıdır.",
    "tipsTitle": "Takvimi nasıl okuyoruz",
    "tips": ["Gerçekleşen rakamı önceki değerle değil, beklentiyle karşılaştırın; piyasayı hareket ettiren sürprizdir.", "Geçen ayın rakamındaki revizyona bakın; büyük bir revizyon çoğu zaman manşet veriden daha önemlidir.", "Faiz kararları piyasayı iki kez hareket ettirir: kararda ve yaklaşık 30 dakika sonraki basın toplantısında."],
  },
  money: {
    "metaTitle": "Nasıl Para Kazanıyoruz",
    "metaDescription": "NUUK gelirini kendi sermayesiyle yaptığı işlemlerden, yönettiği portföylerdeki yönetim ve performans ücretlerinden ve araştırma aboneliklerinden elde eder. Her ücret açıklanmıştır.",
    "kicker": "Nasıl Para Kazanıyoruz",
    "title": "Siz kazandığınızda kazanırız. Önce kendi sermayemiz.",
    "lead": "NUUK bir aracı kurum değildir ve işlemlerinizin karşı tarafında yer almaz. Gelirimiz dört şeffaf kaynaktan gelir; en büyüğü, sizin için de çalıştırdığımız aynı işlemlerdir.",
    "principlesTitle": "Her ücretin arkasındaki dört ilke",
    "principles": [
      {
        "title": "Önce kendi sermayemiz",
        "body": "Her sistem, başkasının parasını yönetmeden önce kendi paramızla çalışır. Aynı işlemleri, aynı anda, aynı risk limitleriyle alırız."
      },
      {
        "title": "Net kâr üzerinden ücret",
        "body": "Performans ücreti yalnızca hesabınızın en yüksek değer seviyesinin (high-water mark) üzerindeki gerçekleşmiş kârdan alınır. Zarar telafi edilmeden yeniden kazanmayız."
      },
      {
        "title": "Gizli hiçbir şey yok",
        "body": "Spread veya komisyon üzerine ek marj yok, platform ücreti yok, swaplara gömülü kesinti yok. Bu sayfada gördükleriniz listenin tamamıdır."
      },
      {
        "title": "Getiriden önce risk",
        "body": "Her yetki belgesi bir maksimum düşüş ve günlük zarar limitiyle başlar. Bunları aşmaktansa daha az kazanmayı tercih ederiz."
      }
    ],
    "streamsTitle": "Gelirimiz nereden geliyor",
    "streamsLead": "Büyüklük sırasına göre.",
    "streams": [
      {
        "title": "Kendi sermayemizle işlem",
        "share": "En büyük kaynak",
        "body": "Müşterilere sunduğumuz aynı algoritmik sistemlerle kendi sermayemizi işletiriz: GANN Live üretimde, Trend Ensemble kâğıt üzerinde işlemde. Bizi dürüst tutan gelir budur: sistemler çalışmayı bırakırsa bunu ilk biz hissederiz.",
        "how": "NUUK'un kendi hesaplarındaki işlem kâr ve zararı"
      },
      {
        "title": "Portföy yönetimi",
        "share": "Yönetim ve performans ücretleri",
        "body": "Üç yapı. WhatsApp sinyallerinde performans ücreti yoktur, yalnız aylık 49 USD AI üyelik ücreti alınır. NUUK AI - Premium'da (1.000 USD'den itibaren) aylık 99 USD yönetim ücreti ve haftalık net kâr üzerinden %25 performans ücreti alınır. Özel hesapta (250.000 USD'den itibaren) aylık 1.000 USD yönetim ücreti ve yönetim ücreti düşüldükten sonra en yüksek değer seviyesinin üzerindeki kârın %25'i alınır.",
        "how": "Aracı kurum tarafından hesabınızdan kesilir ve her ekstrede görünür"
      },
      {
        "title": "Araştırma ve eğitim",
        "share": "Abonelikler ve atölyeler",
        "body": "Aylık 750, 1.000 ve 5.000 USD'lik sinyal ve araştırma planları ile ücretli atölyeler ve kurumsal eğitimler. Haftalık webinarlar ücretsiz kalır.",
        "how": "Sabit abonelik veya bilet bedeli, peşin ödenir"
      }
    ],
    "exampleTitle": "Rakamlarla bir yıl",
    "exampleLead": "",
    "examples": [],
    "exampleNote": "Zararla kapanan yılda performans ücreti alınmaz; yeniden performans ücreti alınabilmesi için zararın telafi edilmesi gerekir. Özel hesap aylık yönetim ücretini ödemeye devam eder. Aracı kurumun spread, komisyon ve swapları aracı kurum tarafından tahsil edilir ve brüt rakamın içindedir.",
    "neverTitle": "Asla yapmadıklarımız",
    "never": [
      "Spread, komisyon veya swap üzerine marj eklemek",
      "Paranızı tutmak ya da hesabınızda para çekme yetkisine sahip olmak",
      "Size karşı işlem yapmak veya emir akışınızı satmak",
      "Gerçekleşmemiş kazançlardan ya da en yüksek değer seviyesinin altındaki kârdan performans ücreti almak"
    ],
    "riskTitle": "Risk yönetimi iş modelinin kendisidir",
    "riskLead": "Ücretler ancak sermaye ayakta kalırsa işe yarar; bu yüzden önce risk gelir.",
    "risk": [
      {
        "title": "Kontrollü risk",
        "body": "Her pozisyon risk gözetilerek belirlenir."
      },
      {
        "title": "Risk limitleri",
        "body": "Risk limitleri başlamadan önce sizinle yazılı olarak belirlenir."
      },
      {
        "title": "Maksimum düşüş yetkisi",
        "body": "Her yetki belgesi, sizinle yazılı olarak belirlenen bir maksimum düşüş içerir."
      },
      {
        "title": "Haftalık canlı-beklenen karşılaştırması",
        "body": "Test edilmiş davranışından sapan sistemler durdurulur; uçuş sırasında ayar yapılmaz."
      }
    ],
    "faqTitle": "Ücretlerle ilgili sorular",
    "faq": [
      {
        "q": "Hesabım zarar ederse bir şey kazanıyor musunuz?",
        "a": "Yalnız aylık yönetim ücreti, o da imzadan önce açıklanır. NUUK AI - Premium'da performans ücreti haftalık net kâr üzerinden alınır; zararla kapanan haftada performans ücreti yoktur. Özel hesapta zarar telafi edilene kadar performans ücreti alınmaz."
      },
      {
        "q": "Burada bir çıkar çatışması var mı?",
        "a": "NUUK'un aldığı her ücret bu sayfada yazılıdır. Hesabınız aracı kurumda kendi adınıza açılır ve NUUK müşteri parasını hiçbir zaman elinde tutmaz."
      },
      {
        "q": "En yüksek değer seviyesi nasıl hesaplanır?",
        "a": "Hesabınızın başlangıçtan bu yana, para yatırma ve çekmelere göre düzeltilmiş en yüksek ay sonu değeridir. Performans ücreti yalnızca ay sonu değerinin bu seviyeyi aşan kısmından alınır."
      },
      {
        "q": "Aldığınız ücretleri nerede görebilirim?",
        "a": "Aracı kurum ekstrenizde. Ücretler aracı kurum tarafından kendi hesabınızın içinden kesilir; her kesinti gerçek zamanlı olarak ve gönderdiğimiz aylık raporda görünür."
      }
    ],
    "cta": {
      "label": "Bir yetki görüşelim",
      "href": "/contact-us/"
    },
    "feesLink": {
      "label": "Tam ücret tablosunu görün",
      "href": "/portfolio-management/"
    },
    "ibLink": {
      "label": "IB bildirimini okuyun",
      "href": "/legal/ib-disclosure/"
    }
  },
  investors: {
    "loginCta": { "label": "Panele giriş yapın", "href": "/portal/" },
    "metaTitle": "Yatırımcı Portalı",
    "metaDescription": "Yönetilen hesap müşterileri nereden giriş yapar, NUUK her ay ne raporlar ve erişim nasıl talep edilir.",
    "kicker": "Yatırımcı Portalı",
    "title": "Hesabınız, girişiniz, raporlarınız",
    "lead": "Yönetilen hesaplar aracı kurumda, kendi adınıza tutulur. Gerçek zamanlı ekstre için aracı kurumun müşteri portalına giriş yapın; NUUK aylık raporu ve üç aylık değerlendirmeyi ekler.",
    "portalsTitle": "Aracı kurum müşteri portalı",
    "portalLabel": "Müşteri portalı",
    "reportsTitle": "NUUK'tan ne alırsınız",
    "reports": [
      {
        "title": "Gerçek zamanlı ekstre",
        "body": "Her işlem, ücret ve bakiye gerçekleştiği anda aracı kurum hesabınızda görünür. Orada göremeyeceğiniz hiçbir şeyi biz raporlamayız."
      },
      {
        "title": "Aylık rapor",
        "body": "Beşinci iş gününe kadar: net performans, alınan ücretler, enstrüman bazında maruziyet, yetki belgesine göre düşüş ve kısa bir yorum."
      },
      {
        "title": "Üç aylık değerlendirme",
        "body": "Yetki belgesini, risk limitlerini ve hedefleriniz ya da likidite ihtiyacınızdaki değişiklikleri gözden geçirmek için 30 dakikalık görüşme."
      },
      {
        "title": "Yıllık ücret dökümü",
        "body": "Muhasebeciniz için tek sayfa: yönetim ve performans ücretleri, en yüksek değer seviyesi geçmişi ve para çekimleri."
      }
    ],
    "accessTitle": "Portal erişimi talep edin",
    "accessBody": "Raporlar yetki belgenizdeki e-posta adresine gönderilir. Adresi değiştirmek, ikinci bir alıcı eklemek veya bulamadığınız bir raporu istemek için hesap numaranızla bize ulaşın.",
    "accessCta": {
      "label": "Masayla iletişime geçin",
      "href": "/contact-us/"
    },
    "faqTitle": "Erişim ve para çekme",
    "faq": [
      {
        "q": "Paramı kim tutuyor?",
        "a": "Aracı kurum, kendi adınıza açılmış hesapta. NUUK yalnızca işlem yetkisine sahiptir; para çekemez veya transfer edemez."
      },
      {
        "q": "İstediğim zaman para çekebilir miyim?",
        "a": "NUUK AI - Premium: ilk 30 günden sonra istediğiniz zaman. Özel hesap: açık pozisyonların düzenli kapatılabilmesi için 30 gün önceden bildirimle. Para çekme işlemini aracı kurum portalında siz yaparsınız."
      },
      {
        "q": "Aldığınız ücretleri nerede görürüm?",
        "a": "Aracı kurum ekstresinde ayrı kalemler olarak ve aylık raporda özet halinde."
      }
    ],
    "portals": []
  },
  caseStudies: {
    "metaTitle": "Vaka Çalışmaları",
    "metaDescription": "NUUK'un bir yetki belgesini nasıl yapılandırdığını, risk limitlerini nasıl belirlediğini ve ücretlendirdiğini gösteren üç temsili senaryo. Gerçek müşteri anlatılmamaktadır.",
    "kicker": "Vaka Çalışmaları",
    "title": "Bir yetki nasıl kurulur: üç senaryo",
    "lead": "Temsili senaryolar; müşteri hikâyesi değildir. Profiller kurgusaldır; ücretler, limitler ve hesaplamalar birebir kullandıklarımızdır.",
    "badge": "Temsili senaryo",
    "labels": {
      "profile": "Profil",
      "objective": "Hedef",
      "structure": "Önerimiz",
      "mandate": "Yetki belgesi",
      "fees": "Ücretler",
      "year": "",
      "note": "Dikkat edilecek nokta"
    },
    "items": [
      {
        "name": "Aile ofisi hazinesi, Dubai",
        "profile": "60 gün içinde likit kalması gereken 500.000 USD hazine nakdi tutan tek aileli bir ofis.",
        "objective": "Önce sermayeyi koru; maksimum %8 düşüş.",
        "structure": "Aracı kurumda ofisin kendi adına özel PAMM hesabı; yazılı yetki belgesiyle işlem.",
        "mandate": [
          "Enstrümanlar: ana FX pariteleri, altın, ABD ve AB endeks CFD'leri",
          "Maksimum brüt maruziyet özkaynağın 3 katı, günlük zarar limiti %1",
          "Maksimum düşüş %8: hesap durdurulur ve değerlendirilir",
          "Para çekimde 30 gün önceden bildirim"
        ],
        "fees": "Aylık 1.000 USD (bu büyüklükte yıllık %2,4) artı yönetim ücreti sonrası en yüksek değer seviyesinin üzerindeki kârın %25'i.",
        "rows": [],
        "note": "500.000 USD'de sabit yönetim ücreti yıllık %2,4'e düşer. 250.000 USD altında aynı ücret fazla ağır olurdu; özel kademenin oradan başlamasının nedeni budur."
      },
      {
        "name": "Kendi işlem yapan yatırımcı, İstanbul",
        "profile": "Üç yıldır 5.000 USD ile kendi başına FX işlemi yapan ve sistemleri çalıştırmadan kullanmak isteyen bir mühendis.",
        "objective": "NUUK sistemlerine sistematik maruziyet, yönetim ücreti yok, hızlı çıkış imkânı.",
        "structure": "Aracı kurumda havuz MAM: kendi adına kendi hesabı, havuza tahsisli.",
        "mandate": [
          "NUUK'un kendi sermayesiyle aynı sistemler ve risk limitleri",
          "GANN Live'da işlem başına sabit 300 USD risk, havuz büyüklüğüne ölçeklenir",
          "Yönetim ücreti yok; 30 gün kilit süresi, sonra istediğinde çekim"
        ],
        "fees": "Yönetim ücreti yok; en yüksek değer seviyesinin üzerindeki kârın %25'i.",
        "rows": [],
        "note": "Zararlı bir yıl ona ücret olarak hiçbir şeye mal olmaz; yeniden performans ücreti alınabilmesi için havuzun en yüksek değer seviyesini geri kazanması gerekir."
      },
      {
        "name": "Kitlesi olan eğitmen, Riyad",
        "profile": "2.000 öğrencisi olan ve zaten gayriresmî olarak aracı kurum öneren bir işlem eğitmeni.",
        "objective": "Öğrencilerine hesap açılışında şeffaf bir yol sunmak ve müşteri parasına hiç dokunmamak.",
        "structure": "Yazılı iş birliği anlaşması: öğrencileri hesaplarını aracı kurumda kendi adlarına açar; NUUK eğitim ve hesap açılışı desteği verir.",
        "mandate": [
          "Yazılı iş birliği şartları; aylık rapor ve müşteri bazında döküm",
          "Arapça ve İngilizce hesap açılışı ve KYC rehberliği",
          "Yeniden kullanabileceği eğitim materyali ve ekonomik takvim",
          "Öğrencilere açık bilgilendirme: hesap ve para her zaman öğrencinin kendi adına kalır"
        ],
        "fees": "Ona veya öğrencilerine ücret yok; şartlar yazılı olarak belirlenir.",
        "rows": [],
        "note": "Şartlar ilk müşteri tanıtılmadan önce yazılı olarak kararlaştırılır."
      }
    ]
  },
  portal: {
    notRegistered: "Bu e-posta portalda kayıtlı değil. Aboneliğinizin kayıtlı olduğu adresi kullanın ya da davet için bizimle iletişime geçin.",
    badPassword: "E-posta veya şifre hatalı. Henüz şifre belirlemediyseniz e-posta bağlantısıyla giriş yapın.",
    linkExpired: "Bu giriş bağlantısının süresi dolmuş ya da daha önce kullanılmış. E-postanızı girin, yenisini gönderelim.",
    security: {
      passwordTitle: "Şifre",
      passwordLead: "İsteğe bağlı. Her zaman e-posta bağlantısıyla giriş yapabilirsiniz; şifreyle girmeyi tercih ederseniz burada belirleyin.",
      newPassword: "Yeni şifre",
      confirmPassword: "Şifre (tekrar)",
      savePassword: "Şifreyi kaydet",
      passwordRule: "En az 8 karakter kullanın ve aynı şifreyi iki kez girin.",
      passwordSaved: "Şifre kaydedildi.",
      "title": "Güvenlik",
      "lead": "İki adımlı doğrulama, her girişte kimlik doğrulama uygulamasından (Google Authenticator, 1Password, Authy) tek kullanımlık kod ister. Yönetici hesapları için şiddetle önerilir.",
      "enable": "İki adımlı doğrulamayı aç",
      "scan": "QR kodu kimlik doğrulama uygulamanızla tarayın ya da gizli anahtarı elle girin, sonra 6 haneli kodu yazın.",
      "code": "6 haneli kod",
      "confirm": "Onayla",
      "cancel": "Vazgeç",
      "enabled": "İki adımlı doğrulama açık.",
      "disabled": "İki adımlı doğrulama kapalı.",
      "active": "aktif",
      "remove": "Kaldır",
      "challengeTitle": "İki adımlı doğrulama",
      "challengeLead": "Kimlik doğrulama uygulamanızdaki kodu girin.",
      "error": "Bir sorun oluştu."
    },
    memberships: {
      "activateHint": "Aktifleştir, başvuranı (hesabı yoksa) otomatik davet eder ve planındaki tüm panelleri belirlediğiniz tarihe kadar açar.",
      "activatedInvited": "Davet gönderildi ve paneller tanımlandı; üye e-postadaki bağlantıdan şifresini belirler.",
      "title": "Üyelikler",
      "stats": {
        "new_applications": "Yeni başvuru",
        "awaiting_payment": "Ödeme bekleyen",
        "active_members": "Aktif üye",
        "expiring_7d": "7 gün içinde biten",
        "mrr": "Aylık gelir (aktif planlar)"
      },
      "applications": "Başvurular",
      "members": "Üyeler",
      "cols": {
        "date": "Tarih",
        "name": "Ad",
        "contact": "İletişim",
        "plan": "Plan",
        "profile": "Deneyim · sermaye",
        "status": "Durum",
        "notes": "Notlar",
        "panels": "Paneller",
        "expires": "Bitiş",
        "role": "Rol"
      },
      "statuses": {
        "new": "Yeni",
        "contacted": "Ulaşıldı",
        "awaiting_payment": "Ödeme bekliyor",
        "paid": "Ödendi",
        "active": "Aktif",
        "rejected": "Reddedildi",
        "expired": "Süresi doldu"
      },
      "activate": "Aktifleştir",
      "activateUntil": "Erişim bitişi",
      "activated": "Üyelik aktifleştirildi, paneller tanımlandı.",
      "saveNotes": "Kaydet",
      "filterAll": "Tümü",
      "inviteHint": "Aktifleştirmeden önce başvuranı Supabase'de davet edin (Authentication → Users → Invite user) ki hesabı oluşsun.",
      "empty": "Kayıt yok."
    },
    "metaTitle": "Yatırımcı Paneli",
    "kicker": "Yatırımcı Paneli",
    "title": "Panellerinize giriş yapın",
    "lead": "Aboneler ve yönetilen hesap müşterileri buradan giriş yapar. Yalnızca aboneliğinize dahil panelleri görürsünüz.",
    "notConfigured": "Panel henüz bağlanmadı. Supabase projesi yapılandırıldığında bu sayfa giriş ekranı olur.",
    "signIn": "Giriş yap",
    "signInLead": "Aboneliğinizin kayıtlı olduğu e-posta adresini girin. Tek kullanımlık giriş bağlantısı göndeririz; şifre gerekmez.",
    "email": "E-posta",
    "password": "Şifre",
    "sendLink": "Giriş bağlantısı gönder",
    "linkSent": "Gelen kutunuzu kontrol edin: giriş bağlantısı bir saat geçerlidir.",
    "signInPassword": "Giriş yap",
    "usePassword": "Şifreyle giriş yap",
    "useLink": "E-posta bağlantısıyla giriş yap",
    "inviteOnly": "Erişim yalnızca davetle verilir. Abone olduysanız ve giriş yapamıyorsanız, abonelikte kullandığınız adresten bize ulaşın.",
    "welcome": "Giriş yapan",
    "signOut": "Çıkış yap",
    "noPanelsTitle": "Bu hesapta henüz panel yok",
    "noPanels": "Hesabınız var ancak henüz panel tanımlanmamış. Bugün abone olduysanız birkaç saat bekleyin; aksi halde aşağıdan bir plan seçin.",
    "subscribe": {
      "label": "Abonelik planlarını görün",
      "href": "/signals/"
    },
    "empty": "Henüz yayın yok.",
    "error": "Bir sorun oluştu.",
    "panelNames": {
      "research": "Araştırma ve raporlar",
      "signals": "Sinyal akışı",
      "daily-pnl": "Masa K/Z",
      "reports": "Raporlarım",
      "education": "Oturum kütüphanesi"
    },
    "signals": {
      "instrument": "Enstrüman",
      "direction": "Yön",
      "entry": "Giriş",
      "stop": "Zarar durdur",
      "target": "Hedef",
      "rationale": "Gerekçe",
      "directions": {
        "long": "Alış",
        "short": "Satış",
        "flat": "Nötr"
      },
      "statuses": {
        "open": "Açık",
        "target": "Hedefe ulaştı",
        "stopped": "Durduruldu",
        "closed": "Kapandı"
      }
    },
    "pnl": {
      "date": "Tarih",
      "closedPnl": "Kapanmış K/Z",
      "trades": "İşlem",
      "winRate": "Kazanma oranı",
      "total": "Gösterilen toplam"
    },
    "reports": {
      "download": "Aç"
    },
    "education": {
      "open": "Aç"
    },
    "admin": {
      "notifications": "Bildirimler",
      "notifyEmail": "Yeni başvuruda bildirim e-postası",
      "telegramToken": "Telegram bot token",
      "telegramChat": "Telegram sohbet ID",
      "telegramHint": "Telegram: @BotFather ile bir bot oluşturun, token'ı yapıştırın, bota bir mesaj gönderin ve sohbet ID'nizi (@userinfobot) girin. Her yeni başvuru anında telefonunuza düşer.",
      "panelLink": "Panel bağlantısı (örn. özel WhatsApp grubu)",
      "linkLabel": "Buton etiketi",
      "linkLabelPlaceholder": "Özel WhatsApp grubuna katıl",
      "addEducation": "Oturum ekle",
      "url": "Bağlantı (video veya dosya)",
      "kind": "Tür",
      "description": "Açıklama",
      "content": "İçerik",
      "memberships": "Üyelikler",
      "title": "Başlık",
      "grant": "Panel tanımla",
      "email": "E-posta",
      "panel": "Panel",
      "until": "Geçerlilik sonu",
      "note": "Not",
      "notePlaceholder": "örn. Pro plan, 2026-09 ödendi",
      "grantBtn": "Tanımla",
      "granted": "Panel tanımlandı.",
      "revoke": "Kaldır",
      "revoked": "Panel kaldırıldı.",
      "newSignal": "Yeni sinyal",
      "publish": "Yayınla",
      "published": "Sinyal yayınlandı.",
      "addPnl": "K/Z günü ekle",
      "wins": "Kazanan işlem",
      "save": "Kaydet",
      "saved": "Kaydedildi.",
      "uploadReport": "Müşteri raporu yükle",
      "forEmail": "Müşteri e-postası",
      "period": "Dönem",
      "file": "Dosya",
      "upload": "Yükle",
      "uploaded": "Rapor yüklendi.",
      "noUser": "Bu e-postayla kullanıcı yok; önce davet edin."
    }
  },
  apply: {
    "metaTitle": "Üyelik Başvurusu",
    "kicker": "Üyelik",
    "title": "Başvurun, sonra planınızı seçin",
    "lead": "Kim olduğunuzu ve hangi planı istediğinizi söyleyin. Her başvuruyu bir iş günü içinde inceler, ödeme bağlantısını gönderir ve ödeme onaylanınca panellerinizi açarız.",
    "link": {
      "label": "Üyelik başvurusu",
      "href": "/apply/"
    },
    "form": {
      "plan": "Plan",
      "fullName": "Ad Soyad",
      "email": "E-posta",
      "phone": "Telefon (ülke koduyla)",
      "country": "İkamet ülkesi",
      "experience": "İşlem deneyimi",
      "experiences": [
        "1 yıldan az",
        "1–3 yıl",
        "3–10 yıl",
        "10+ yıl"
      ],
      "capital": "İşlem yaptığınız sermaye",
      "capitals": [
        "10.000 USD altı",
        "10.000 – 50.000 USD",
        "50.000 – 250.000 USD",
        "250.000 USD üzeri"
      ],
      "message": "Bilmemiz gereken bir şey (isteğe bağlı)",
      "terms": "Kullanım şartlarını ve gizlilik politikasını kabul ediyorum.",
      "risk": "Risk bildirimini okudum; geçmiş performansın gelecekteki sonuçların garantisi olmadığını anlıyorum.",
      "submit": "Başvuruyu gönder",
      "sending": "Gönderiliyor…",
      "errorRequired": "Lütfen zorunlu alanları doldurun ve iki onay kutusunu işaretleyin.",
      "errorEmail": "Lütfen geçerli bir e-posta adresi girin.",
      "error": "Başvuru gönderilemedi. Lütfen bize e-posta gönderin."
    },
    "success": {
      "title": "Başvurunuz alındı",
      "body": "Başvuruları bir iş günü içinde inceler ve ödeme bağlantısını verdiğiniz adrese e-posta ile göndeririz. Ödemeden sonraki 24 saat içinde panelleriniz açılır; yatırımcı paneline aynı e-posta ile giriş yaparsınız.",
      "pay": "Ödemeye geç",
      "portal": "Yatırımcı paneli"
    },
    "steps": [
      "Başvuru",
      "E-posta ile ödeme bağlantısı",
      "Paneller açılır, giriş yapın"
    ]
  },
  contact: {
    "metaTitle": "İletişim",
    "metaDescription": "Görüşme talep edin ya da bilgi talebi gönderin.",
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
        "title": "WhatsApp grubu",
        "body": "Sinyal grubu ve topluluk.",
        "cta": "Katılın"
      }
    ],
    "formTitle": "Bilgi talebi",
    "form": {
      "sending": "Gönderiliyor…",
      "success": "Teşekkürler. Mesajınız iletildi; bir iş günü içinde yanıtlıyoruz.",
      "sendError": "Mesaj gönderilemedi. Lütfen doğrudan e-posta gönderin:",
      "name": "Ad Soyad",
      "namePlaceholder": "Adınız",
      "email": "E-posta",
      "emailPlaceholder": "ad@sirket.com",
      "topic": "Konu",
      "topics": [
        "Portföy yönetimi",
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
        "Yönetilen hesaplar, müşterinin aracı kurumdaki kendi hesabının içinde, aracı kurumun MAM veya PAMM yapısı ve düzenleyici çerçevesi altında çalışır. NUUK yalnızca işlem yetkisine sahiptir ve müşteri fonlarının saklamasını hiçbir zaman üstlenmez. Ücretler, kilit süreleri ve risk yetki belgeleri, herhangi bir işlem başlamadan önce yazılı bir sözleşmede belirlenir.",
        "NUUK Quant, Dubai Uluslararası Finans Merkezi, Dubai, Birleşik Arap Emirlikleri'nden faaliyet gösterir. Hizmetler yalnızca geçerli yasa ve düzenlemelerin izin verdiği yerlerde sunulur; erişilebilirlik ikamet ettiğiniz ülkeye bağlıdır. Bu web sitesindeki hiçbir içerik, böyle bir dağıtımın yerel yasalara aykırı olacağı bir yargı bölgesindeki kişilere yönelik değildir.",
      ],
    },
    "ib-disclosure": {
      title: "Tanıtım aracısı (IB) bildirimi",
      body: [],
    },
    privacy: {
      title: "Gizlilik politikası",
      body: [
        "Bu politika, NUUK Quant'ın (\"NUUK\", \"biz\") nuukquant.com üzerinden hangi kişisel verileri, neden topladığını ve hangi haklara sahip olduğunuzu açıklar. Son güncelleme: 6 Ekim 2026.",
        "Bize verdiğiniz veriler. E-posta, WhatsApp veya talep formu üzerinden bizimle iletişime geçtiğinizde gönderdiğiniz bilgileri alırız: ad, e-posta adresi, telefon numarası ve mesajınızın içeriği. Talep formu kendi e-posta istemcinizi açar; yazdığınız hiçbir şey bu web sitesinde saklanmaz.",
        "Üyelik başvuruları. nuukquant.com/uyelik formunda verdiğiniz ad soyad, telefon, e-posta, fonlamayı düşündüğünüz tutar, onay zamanı ile IP adresi ve tarayıcı bilgisi; Premium için ayrıca bildirdiğiniz ağ ve işlem hash'i (TxID) saklanır. Bu bilgiler başvurunuzu yürütmek, ödemenizi doğrulamak ve Premium'u açmak için kullanılır. NUUK sunucusunda ve yalnızca NUUK'un erişebildiği bir Google E-Tablolar dosyasında tutulur; başvuru ve ödeme e-postaları Resend üzerinden gönderilir. Kripto işlemleri herkese açık blok zincirlerinde kalıcıdır ve silinemez.",
        "Otomatik olarak toplanan veriler. Sitenin nasıl kullanıldığını anlamak için IP anonimleştirmeli Google Analytics 4 kullanırız: görüntülenen sayfalar, yaklaşık konum, cihaz türü ve hangi düğmelere tıklandığı (örneğin bir aracı kurum bağlantısı veya bir plan). Bu veriler toplu hâldedir ve sizi isim olarak tanımlamaz. Tarayıcı ayarı veya reklam engelleyici ile engelleyebilirsiniz.",
        "Çerezler ve ziyaretçi analitiği. Google Analytics oturumları ayırt etmek için çerez ayarlayabilir. Apollo.io sayfa ziyaretlerini kaydeder ve ziyaret bir kurumsal ağdan geliyorsa IP adresinin arkasındaki şirketi tanımlayabilir; ayrıca formlarımıza girilen kurumsal e-posta adreslerini kamuya açık şirket verileriyle zenginleştirir. Reklamlarımızın etkisini ölçmek için Meta Pixel kullanırız: sayfa görüntülemelerini ve WhatsApp grubumuza giden tıklamaları Meta Platforms'a (Facebook/Instagram) iletir; Meta bu verileri kendi gizlilik politikası kapsamında işler ve yurt dışında saklayabilir. Hepsi çerez bırakabilir. Bağlantılarımızdan açtığınız üçüncü taraf siteler (aracı kurumlar, WhatsApp, sosyal ağlar) kendi politikalarını uygular. Bu sitedeki canlı piyasa kotasyonları gömülü TradingView bileşenleridir; TradingView sunucularından yüklenir ve TradingView'ın gizlilik politikası kapsamında kendi çerezlerini bırakabilir. Bunların tümünü bir tarayıcı eklentisiyle veya üçüncü taraf betikleri kapatarak engelleyebilirsiniz; site bunlar olmadan da çalışır.",
        "Verileri neden işliyoruz? Talebinizi yanıtlamak, istediğiniz hizmetleri sunmak (yönetilen hesaplar, sinyaller, eğitim), yasal ve düzenleyici yükümlülükleri yerine getirmek ve web sitesini geliştirmek için. Hukuki dayanak, rızanız, sizinle yapılan bir sözleşmenin ifası veya işi yürütmedeki meşru menfaatimizdir.",
        "Paylaşım. Kişisel verileri satmayız. Yalnızca web sitesini ve iletişimi yürütmek için gereken hizmet sağlayıcılarla (barındırma, e-posta, analitik), sizi tanıtmamızı istediğinizde ilgili aracı kurumla ve yasaların gerektirdiği durumlarda yetkili makamlarla paylaşırız.",
        "Saklama ve güvenlik. Talep verileri, talebin işlenmesi için gerektiği sürece ve bir iş ilişkisi kurulması hâlinde düzenleyici kayıt tutma yükümlülüklerine uygun olarak beş yıla kadar saklanır. Veriler erişim kontrollü sistemlerde tutulur.",
        "Haklarınız. info@nuukquant.com adresine yazarak hakkınızda hangi verileri tuttuğumuzu sorabilir, düzeltilmesini veya silinmesini isteyebilir, işlemeye itiraz edebilir veya rızanızı istediğiniz zaman geri çekebilirsiniz. AB, Birleşik Krallık veya DIFC'de bulunuyorsanız veri koruma otoritenize şikâyette bulunma hakkına da sahipsiniz.",
      ],
    },
    terms: {
      title: "Kullanım koşulları",
      body: [
        "Bu koşullar, NUUK Quant (Dubai Uluslararası Finans Merkezi, Dubai, Birleşik Arap Emirlikleri) tarafından işletilen nuukquant.com'u kullanımınızı düzenler. Web sitesini kullanarak bu koşulları kabul etmiş olursunuz. Son güncelleme: 6 Ekim 2026.",
        "Yalnızca bilgilendirme. Bu web sitesinin içeriği genel piyasa yorumu ve eğitim amaçlıdır. Kişisel yatırım tavsiyesi, kişisel öneri ya da herhangi bir finansal aracı alma veya satma teklifi ya da daveti değildir. Kendi yatırım kararlarınızdan ve herhangi bir hizmetin ikamet ettiğiniz ülkede size sunulup sunulamayacağını teyit etmekten siz sorumlusunuz.",
        "Garanti yok. İşlem yapmak önemli ölçüde risk içerir; risk bildirimine bakın. Geçmiş performans, geriye dönük testler ve kâğıt üstü (paper) sonuçlar gelecekteki sonuçların garantisi değildir. Doğrulama bekliyor veya temsili olarak işaretlenen rakamlar doğrulanmış performans verisi değildir.",
        "Hizmetler. Yönetilen hesaplar, sinyal abonelikleri, mentorluk ve etkinlikler; ücretleri, kapsamı, iptali ve risk limitlerini belirleyen ayrı yazılı sözleşmeler kapsamında sunulur. Farklılık olması hâlinde bu sözleşmeler web sitesine göre önceliklidir.",
        "Üçüncü taraf bağlantıları. Aracı kurumlara, platformlara ve sosyal ağlara verilen bağlantılar kontrolümüz dışındaki sitelere yönlendirir. Üçüncü taraf sitelerin içeriğinden, erişilebilirliğinden veya koşullarından sorumlu değiliz.",
        "Fikrî mülkiyet. Bu web sitesindeki metinler, grafikler, logolar, çizelgeler ve sistem açıklamaları NUUK'a veya lisans verenlerine aittir. Sayfaları kişisel kullanım için görüntüleyebilir ve yazdırabilirsiniz; diğer her türlü çoğaltma yazılı izin gerektirir. Aracı kurum adları ve logoları ilgili sahiplerinin mülkiyetindedir ve yalnızca tanımlama amacıyla kullanılır.",
        "Sorumluluk. Web sitesi olduğu gibi sunulur. Yasaların izin verdiği ölçüde NUUK, işlem zararları, veri kaybı veya hizmet kesintisi dâhil olmak üzere web sitesinin kullanımından veya içeriğine dayanılmasından kaynaklanan her türlü zarara ilişkin sorumluluğu reddeder.",
        "Değişiklikler ve uygulanacak hukuk. Bu koşulları ve web sitesini istediğimiz zaman değiştirebiliriz; güncel sürüm her zaman burada yayımlanır. Bu koşullar Dubai Uluslararası Finans Merkezi'nde geçerli yasalara tabidir ve uyuşmazlıklar DIFC Mahkemelerinin yargı yetkisindedir.",
      ],
    },
    // NUUK uygulaması üyelikleri için abonelik şartları (kurucu onayı 2026-10-05).
    "subscription-terms": {
      title: "Abonelik şartları",
      body: [
        "Bu şartlar, nuukquant.com üzerinden NUUK Quant'tan (Dubai Uluslararası Finans Merkezi, Dubai, Birleşik Arap Emirlikleri) alınan NUUK Premium üyeliğine uygulanır. Web sitesi kullanım koşullarına ve risk bildirimine ek niteliktedir. Ücretsiz WhatsApp grubu bu şartların kapsamında değildir. Son güncelleme 6 Ekim 2026.",
        "Başvuru. Premium, nuukquant.com/uyelik sayfasındaki başvuru formuyla (ad soyad, telefon, e-posta ve fonlamayı düşündüğünüz tutar) başlar. Başvurudan sonra size özel bir ödeme sayfası açılır ve aynı bilgiler e-postanıza gönderilir.",
        "Ücret ve ödeme yöntemi. Premium ücreti aylık 99 ABD dolarıdır. Ödemeler şimdilik yalnızca kripto para ile, ödeme sayfanızda gösterilen ağ ve adreslerden birine USDT veya USDC gibi ABD dolarına endeksli bir stablecoin gönderilerek kabul edilir. Ağ ücretleri gönderene aittir. Yanlış ağdan, yanlış adrese veya eksik tutarda yapılan gönderimler geri alınamayabilir; bu tür kayıplardan NUUK sorumlu değildir. NUUK, ödeme sayfanızdaki adresler dışında hiçbir adrese ödeme istemez.",
        "Yalnızca üyelik ücreti. Bu ödeme yalnızca üyelik ücretidir. NUUK yatırım parası kabul etmez, saklamaz ve yönetmez; işlem hesabınızı her zaman kendi adınıza açılan bir aracı kurum hesabında fonlarsınız. Formda belirttiğiniz fonlama tutarı yalnızca size uygun hesap yapısını önerebilmemiz içindir.",
        "Etkinleştirme. Ödeme sayfanızdan işlem hash'ini (TxID) bildirdikten sonra işlemi zincir üzerinde doğrularız; bu genellikle 24 saat içinde tamamlanır. Doğrulamanın ardından Premium, başvuruda verdiğiniz e-posta adresini kullanan NUUK uygulama hesabında açılır ve size e-postayla onay gönderilir. Uygulamaya bu adresle giriş yapın.",
        "Süre ve yenileme. Her ödeme, onay tarihinden itibaren bir aylık Premium dönemini kapsar. Kripto ödemeler otomatik yenilenmez: dönem bitmeden size hatırlatma göndeririz; yeniden ödeme yapılmazsa hesap ücretsiz özelliklere döner.",
        "İade. Doğrulanmış bir dönem için yapılan ödemeler, kısmi aylar dâhil, yürürlükteki mevzuat gerektirmedikçe iade edilmez. Kripto iadelerinde ağ ücretleri ve kur farkları alıcıya yansıtılabilir.",
        "Fiyat değişiklikleri. Üyelik fiyatını değiştirebiliriz. Yeni fiyat, bir sonraki döneminiz başlamadan en az 30 gün önce e-postayla bildirilir.",
        "Üyeliğin kapsamı. Uygulama özelliklerine erişim: piyasalar, takvim ve haberler, akademi, anlık Masa sinyalleri ve analizleri, fiyat alarmları ve demo MT5 veya paper hesaplara otomatik kopya. Sinyaller ve analizler genel piyasa yorumudur, kişisel yatırım tavsiyesi değildir. Uygulama içi otomatik kopya demo ve paper hesaplar içindir; gerçek hesap kopyası yalnızca aracı kurum üzerinden, onun kendi sözleşmeleriyle yapılır. Geçmiş performans gelecek sonuçların garantisi değildir; kaldıraçlı ürünler yüksek risk içerir.",
        "İletişim. Ödeme veya üyelikle ilgili sorular, başvuru numaranızla birlikte: info@nuukquant.com.",
      ],
    },
  },

  ctaBand: {
    "title": "Başlamaya hazır mısınız?",
    "body": "İlk görüşmeden ilk işleme dört adım. Kurulum çoğunlukla bir hafta içinde tamamlanır.",
    "steps": [
      {
        "title": "Görüşme talep edin",
        "body": "Uygun hizmetin belirlenmesi için 30 dakika: sinyaller, portföy yönetimi veya eğitim."
      },
      {
        "title": "Aracı kurum hesabı açın",
        "body": "Her NUUK yatırımcısı için zorunlu; hesap kendi adınıza açılır. Kimlik ve ikametgâh belgesiyle doğrulama yaklaşık 10 dakika sürer."
      },
      {
        "title": "Fonlayın ve bağlayın",
        "body": "Aracı kurum hesabınızı fonlayın: WhatsApp sinyalleri için 250 USD'den, NUUK AI - Premium için 1.000 USD'den, özel manda için 250.000 USD'den itibaren. Ardından seçtiğiniz yapıya bağlayın."
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
    "legal1": "Dubai Uluslararası Finans Merkezi merkezli, yapay zekâ destekli bir yatırım ve portföy yönetimi kuruluşu olan NUUK Quant'ın ticari unvanıdır. Hizmetler, mevzuatın izin verdiği ülkelerde profesyonel ve kurumsal müşterilere sunulur; erişilebilirlik bulunduğunuz ülkeye ve ilgili düzenlemelere bağlıdır.",
    "legal2": "Bu web sitesindeki içerik genel piyasa yorumu ve eğitim amaçlıdır. Kişisel yatırım tavsiyesi değildir; herhangi bir finansal araç veya hizmetin alım ya da satımına yönelik teklif veya davet niteliği taşımaz.",
    "ib": "Hesabınızı aracı kurumda kendi adınıza açarsınız; NUUK müşteri parası tutmaz.",
    "risk": "İşlem yapmak önemli ölçüde risk içerir ve başlangıç sermayenizi aşan zararlarla sonuçlanabilir. Geçmiş performans gelecekteki sonuçların göstergesi değildir."
  },

  systems: [
    {
      method: "Gann seviyeleri",
      riskProfile: "Orta",
      summary: "Gann fiyat-zaman seviyelerine dayanan altın ve gümüş sistemi.",
      stats: [
        {
          "label": "Canlıya alınma",
          "value": "2026"
        },
        {
          "label": "Enstrümanlar",
          "value": "XAU/USD, XAG/USD"
        },
        {
          "label": "Zaman dilimi",
          "value": "H1 / H4"
        }
      ],
    },
    {
      perf: "yıllık +%10,9, backtest",
      assetClass: "Altın, gümüş, ABD ve AB endeksleri",
      method: "Zaman serisi momentumu + Donchian + hareketli ortalama kesişimi, topluluk (ensemble)",
      riskProfile: "Orta",
      summary: "Kıymetli maden ve endeks CFD'lerinde günlük trend takip topluluğu. Swap ve komisyon dâhil edilerek 2010–2026 döneminde ileriye yürüyen (walk-forward) testten geçti; Temmuz 2026'dan beri Model portföy olarak çalışıyor.",
      stats: [{ label: "İleriye dönük test başlangıcı" }, { label: "Backtest Sharpe" }, { label: "Backtest maks. düşüş" }],
    },
    {
      method: "Açılış aralığı kırılımı + saatlik Donchian",
      riskProfile: "Yüksek",
      summary: "Endeks CFD'lerinde 15 dakikalık açılış aralığı kırılımı ve kıymetli madenlerde 1 saatlik Donchian; NUUK SignalBridge üzerinden MT4'te gerçekleştirilir. Temmuz 2026'dan beri demoda; yalnızca 200 işlemlik kâğıt üstü (paper) eşiği geçildikten sonra canlıya alınacak.",
      stats: [{ label: "Durum", value: "Demo, kâğıt üstü eşik" }, { label: "Hedef lansman", value: "200 kâğıt üstü işlemden sonra" }, { label: "İşlem yeri", value: "Model portföy · MT4/MT5" }],
    },
  ],

  performance: [
    {
      "name": "GANN NUUK Trader AI — XAUUSD & XAGUSD masası",
      "source": "Model portföy · MT4 detaylı rapor, 3 Kas 2026",
      "updated": "2026-11-03",
      "stats": [
        {
          "label": "Dönem",
          "value": "2 Eyl – 3 Kas 2026 · 39 işlem günü",
          "tone": "neutral"
        },
        {
          "label": "Dönem getirisi",
          "value": "+%142,3",
          "tone": "up"
        },
        {
          "label": "Kâr faktörü",
          "value": "2,44",
          "tone": "neutral"
        },
        {
          "label": "Kazanma oranı",
          "value": "%73,3 (7.891 işlemde 5.784)",
          "tone": "neutral"
        },
        {
          "label": "Maks. düşüş",
          "value": "%13,61",
          "tone": "neutral"
        },
        {
          "label": "Yeşil / kırmızı gün",
          "value": "39 / 0",
          "tone": "neutral"
        }
      ]
    },
    {
      name: "Kişisel portföy",
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
      source: "WhatsApp grubu",
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
          "value": "WhatsApp"
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
