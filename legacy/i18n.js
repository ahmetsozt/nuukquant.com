/* NUUK — multilingual layer (EN base + TR / AR / RU / FR / ES)
   Translates static copy in place so the live chart/ticker keep working. */
(function(){
  const IDX = { tr:0, ar:1, ru:2, fr:3, es:4 };
  const NATIVE = { en:'English', tr:'Türkçe', ar:'العربية', ru:'Русский', fr:'Français', es:'Español' };
  const CODE = { en:'EN', tr:'TR', ar:'AR', ru:'RU', fr:'FR', es:'ES' };

  // --- plain-text strings: key = English, value = [tr, ar, ru, fr, es] ---
  const T = {
    "Technology":["Teknoloji","التقنية","Технологии","Technologie","Tecnología"],
    "AI Intelligence":["Yapay Zekâ","الذكاء الاصطناعي","ИИ-интеллект","Intelligence IA","Inteligencia IA"],
    "Infrastructure":["Altyapı","البنية التحتية","Инфраструктура","Infrastructure","Infraestructura"],
    "Performance":["Performans","الأداء","Производительность","Performance","Rendimiento"],
    "Contact":["İletişim","تواصل معنا","Контакты","Contact","Contacto"],
    "Get Free Access":["Ücretsiz Erişim","احصل على وصول مجاني","Бесплатный доступ","Accès gratuit","Acceso gratuito"],
    "Live trading · 24/7 · global markets":["Canlı işlem · 7/24 · küresel piyasalar","تداول مباشر · 24/7 · أسواق عالمية","Торговля · 24/7 · мировые рынки","Trading en direct · 24/7 · marchés mondiaux","Trading en vivo · 24/7 · mercados globales"],
    "Where capital meets machine intelligence. NUUK is AI-engineered quantitative trading, operating exclusively in global financial markets — FX, commodities, indices, and digital assets.":[
      "Sermayenin makine zekâsıyla buluştuğu yer. NUUK, yalnızca küresel finansal piyasalarda — döviz, emtia, endeksler ve dijital varlıklar — faaliyet gösteren, yapay zekâ ile tasarlanmış kantitatif bir işlem altyapısıdır.",
      "حيث يلتقي رأس المال بذكاء الآلة. NUUK تداول كمّي مهندَس بالذكاء الاصطناعي، يعمل حصريًا في الأسواق المالية العالمية — العملات والسلع والمؤشرات والأصول الرقمية.",
      "Там, где капитал встречается с машинным интеллектом. NUUK — количественная торговля на основе ИИ, работающая исключительно на мировых финансовых рынках: валюты, сырьё, индексы и цифровые активы.",
      "Là où le capital rencontre l'intelligence des machines. NUUK est un trading quantitatif conçu par IA, opérant exclusivement sur les marchés financiers mondiaux — forex, matières premières, indices et actifs numériques.",
      "Donde el capital se encuentra con la inteligencia de las máquinas. NUUK es trading cuantitativo diseñado por IA que opera exclusivamente en los mercados financieros globales: divisas, materias primas, índices y activos digitales."],
    "Get free access →":["Ücretsiz erişim →","وصول مجاني →","Получить доступ →","Accès gratuit →","Acceso gratuito →"],
    "Explore our systems":["Sistemlerimizi keşfedin","استكشف أنظمتنا","Изучить наши системы","Découvrir nos systèmes","Explorar nuestros sistemas"],
    "Live market · BTC/USD":["Canlı piyasa · BTC/USD","السوق المباشر · BTC/USD","Рынок в реальном времени · BTC/USD","Marché en direct · BTC/USD","Mercado en vivo · BTC/USD"],
    "Live trading":["Canlı işlem","تداول مباشر","Торговля 24/7","Trading en direct","Trading en vivo"],
    "Global markets":["Küresel piyasalar","أسواق عالمية","Мировые рынки","Marchés mondiaux","Mercados globales"],
    "AI models":["Yapay zekâ modelleri","نماذج الذكاء الاصطناعي","ИИ-модели","Modèles IA","Modelos de IA"],
    "Active algorithms":["Aktif algoritmalar","خوارزميات نشطة","Активные алгоритмы","Algorithmes actifs","Algoritmos activos"],
    "Execution":["Yürütme","التنفيذ","Исполнение","Exécution","Ejecución"],
    "Average latency":["Ortalama gecikme","متوسط زمن الاستجابة","Средняя задержка","Latence moyenne","Latencia media"],
    "Risk control":["Risk kontrolü","التحكم في المخاطر","Контроль рисков","Contrôle du risque","Control de riesgo"],
    "System uptime":["Sistem çalışma süresi","مدة تشغيل النظام","Время безотказной работы","Disponibilité du système","Tiempo de actividad"],
    "Institutional-grade trading infrastructure":["Kurumsal düzeyde işlem altyapısı","بنية تحتية للتداول بمستوى مؤسسي","Торговая инфраструктура институционального уровня","Infrastructure de trading de niveau institutionnel","Infraestructura de trading de nivel institucional"],
    "NUUK is an AI-engineered quantitative trading company operating exclusively in global financial markets. We build proprietary algorithms, machine-learning models, and institutional execution systems designed for disciplined, risk-controlled trading across FX, commodities, indices, and digital assets.":[
      "NUUK, yalnızca küresel finansal piyasalarda faaliyet gösteren, yapay zekâ ile tasarlanmış kantitatif bir işlem şirketidir. Döviz, emtia, endeksler ve dijital varlıklar genelinde disiplinli ve risk kontrollü işlem için tasarlanmış özel algoritmalar, makine öğrenimi modelleri ve kurumsal yürütme sistemleri geliştiriyoruz.",
      "NUUK شركة تداول كمّي مهندَسة بالذكاء الاصطناعي تعمل حصريًا في الأسواق المالية العالمية. نبني خوارزميات خاصة ونماذج تعلّم آلي وأنظمة تنفيذ مؤسسية مصمّمة لتداول منضبط ومضبوط المخاطر عبر العملات والسلع والمؤشرات والأصول الرقمية.",
      "NUUK — компания количественной торговли на основе ИИ, работающая исключительно на мировых финансовых рынках. Мы создаём собственные алгоритмы, модели машинного обучения и институциональные системы исполнения для дисциплинированной торговли с контролем рисков на валютах, сырье, индексах и цифровых активах.",
      "NUUK est une société de trading quantitatif conçue par IA, opérant exclusivement sur les marchés financiers mondiaux. Nous développons des algorithmes propriétaires, des modèles d'apprentissage automatique et des systèmes d'exécution institutionnels pour un trading discipliné et maîtrisé en risque sur le forex, les matières premières, les indices et les actifs numériques.",
      "NUUK es una empresa de trading cuantitativo diseñada por IA que opera exclusivamente en los mercados financieros globales. Construimos algoritmos propios, modelos de aprendizaje automático y sistemas de ejecución institucionales para un trading disciplinado y controlado en riesgo en divisas, materias primas, índices y activos digitales."],
    "Our infrastructure connects to a diversified network of regulated global brokerages and liquidity providers — enabling automated, multi-venue execution with data integrity, latency efficiency, and complete systematic governance.":[
      "Altyapımız, düzenlemeye tabi küresel aracı kurumlardan ve likidite sağlayıcılardan oluşan çeşitlendirilmiş bir ağa bağlanır — veri bütünlüğü, gecikme verimliliği ve eksiksiz sistematik yönetişimle otomatik, çok mekânlı yürütmeyi mümkün kılar.",
      "تتصل بنيتنا التحتية بشبكة متنوعة من شركات الوساطة العالمية المنظَّمة ومزوّدي السيولة — مما يتيح تنفيذًا آليًا متعدد المنصّات مع سلامة البيانات وكفاءة زمن الاستجابة وحوكمة منهجية كاملة.",
      "Наша инфраструктура подключена к диверсифицированной сети регулируемых мировых брокеров и поставщиков ликвидности, обеспечивая автоматическое исполнение на нескольких площадках с целостностью данных, эффективностью задержек и полным системным управлением.",
      "Notre infrastructure se connecte à un réseau diversifié de courtiers mondiaux réglementés et de fournisseurs de liquidité — permettant une exécution automatisée multi-places avec intégrité des données, efficacité de latence et gouvernance systématique complète.",
      "Nuestra infraestructura se conecta a una red diversificada de brókers globales regulados y proveedores de liquidez, permitiendo una ejecución automatizada en múltiples plataformas con integridad de datos, eficiencia de latencia y gobernanza sistemática completa."],
    "AI intelligence":["Yapay zekâ","الذكاء الاصطناعي","ИИ-интеллект","Intelligence IA","Inteligencia IA"],
    "Next-generation AI intelligence.":["Yeni nesil yapay zekâ.","ذكاء اصطناعي من الجيل التالي.","ИИ нового поколения.","Une IA nouvelle génération.","IA de nueva generación."],
    "Powered by advanced machine learning, neural networks, and deep learning architectures.":[
      "Gelişmiş makine öğrenimi, sinir ağları ve derin öğrenme mimarileriyle güçlendirilmiştir.",
      "مدعوم بتعلّم آلي متقدّم وشبكات عصبية وبُنى تعلّم عميق.",
      "На основе передового машинного обучения, нейросетей и архитектур глубокого обучения.",
      "Propulsé par l'apprentissage automatique avancé, les réseaux de neurones et les architectures d'apprentissage profond.",
      "Impulsado por aprendizaje automático avanzado, redes neuronales y arquitecturas de aprendizaje profundo."],
    "Deep Learning Networks":["Derin Öğrenme Ağları","شبكات التعلّم العميق","Сети глубокого обучения","Réseaux d'apprentissage profond","Redes de aprendizaje profundo"],
    "Multi-layered neural networks trained on billions of data points, capable of identifying complex market patterns invisible to traditional analysis. Our proprietary architectures combine LSTM, transformer models, and reinforcement learning for adaptive decision-making.":[
      "Milyarlarca veri noktası üzerinde eğitilmiş, geleneksel analizle görülemeyen karmaşık piyasa örüntülerini tanıyabilen çok katmanlı sinir ağları. Özel mimarilerimiz, uyarlanabilir karar alma için LSTM, dönüştürücü modeller ve pekiştirmeli öğrenmeyi birleştirir.",
      "شبكات عصبية متعددة الطبقات مدرَّبة على مليارات نقاط البيانات، قادرة على تحديد أنماط سوقية معقّدة لا يراها التحليل التقليدي. تجمع بُنانا الخاصة بين نماذج LSTM والمحوّلات والتعلّم المعزّز لاتخاذ قرارات تكيّفية.",
      "Многослойные нейросети, обученные на миллиардах точек данных, способные выявлять сложные рыночные закономерности, невидимые для традиционного анализа. Наши собственные архитектуры сочетают LSTM, трансформеры и обучение с подкреплением для адаптивных решений.",
      "Des réseaux de neurones multicouches entraînés sur des milliards de points de données, capables d'identifier des schémas de marché complexes invisibles à l'analyse traditionnelle. Nos architectures propriétaires combinent LSTM, modèles transformeurs et apprentissage par renforcement pour une prise de décision adaptative.",
      "Redes neuronales multicapa entrenadas con miles de millones de puntos de datos, capaces de identificar patrones de mercado complejos invisibles para el análisis tradicional. Nuestras arquitecturas propias combinan LSTM, modelos transformer y aprendizaje por refuerzo para una toma de decisiones adaptativa."],
    "Neural networks":["Sinir ağları","شبكات عصبية","Нейросети","Réseaux de neurones","Redes neuronales"],
    "Pattern recognition":["Örüntü tanıma","التعرّف على الأنماط","Распознавание паттернов","Reconnaissance de motifs","Reconocimiento de patrones"],
    "Real-time learning":["Gerçek zamanlı öğrenme","تعلّم فوري","Обучение в реальном времени","Apprentissage en temps réel","Aprendizaje en tiempo real"],
    "Predictive Analytics Engine":["Tahmine Dayalı Analitik Motoru","محرّك التحليلات التنبؤية","Движок предиктивной аналитики","Moteur d'analyse prédictive","Motor de análisis predictivo"],
    "Advanced forecasting models that analyze market sentiment, order flow, volatility patterns, and macroeconomic indicators to predict price movements with unprecedented accuracy. Continuously validated against real-world outcomes.":[
      "Piyasa duyarlılığını, emir akışını, oynaklık örüntülerini ve makroekonomik göstergeleri analiz ederek fiyat hareketlerini benzeri görülmemiş doğrulukla tahmin eden gelişmiş öngörü modelleri. Gerçek dünya sonuçlarına karşı sürekli doğrulanır.",
      "نماذج تنبؤ متقدّمة تحلّل معنويات السوق وتدفّق الأوامر وأنماط التقلّب والمؤشرات الاقتصادية الكلية للتنبؤ بحركات الأسعار بدقة غير مسبوقة. يتم التحقّق منها باستمرار مقابل النتائج الواقعية.",
      "Передовые прогнозные модели, анализирующие настроения рынка, поток ордеров, паттерны волатильности и макроэкономические показатели для прогнозирования движения цен с беспрецедентной точностью. Постоянно проверяются на реальных результатах.",
      "Des modèles de prévision avancés qui analysent le sentiment du marché, le flux d'ordres, les schémas de volatilité et les indicateurs macroéconomiques pour prédire les mouvements de prix avec une précision inédite. Validés en continu par rapport aux résultats réels.",
      "Modelos de previsión avanzados que analizan el sentimiento del mercado, el flujo de órdenes, los patrones de volatilidad y los indicadores macroeconómicos para predecir los movimientos de precios con una precisión sin precedentes. Validados continuamente frente a resultados reales."],
    "Market prediction":["Piyasa tahmini","التنبؤ بالسوق","Прогноз рынка","Prévision de marché","Predicción de mercado"],
    "Sentiment analysis":["Duyarlılık analizi","تحليل المعنويات","Анализ настроений","Analyse de sentiment","Análisis de sentimiento"],
    "Risk modeling":["Risk modelleme","نمذجة المخاطر","Моделирование рисков","Modélisation du risque","Modelado de riesgo"],
    "Data points analyzed daily":["Günlük analiz edilen veri noktası","نقاط بيانات تُحلَّل يوميًا","Точек данных в день","Points de données par jour","Puntos de datos al día"],
    "Model accuracy rate":["Model doğruluk oranı","معدّل دقة النموذج","Точность модели","Taux de précision du modèle","Tasa de precisión del modelo"],
    "Decision latency":["Karar gecikmesi","زمن اتخاذ القرار","Задержка решения","Latence de décision","Latencia de decisión"],
    "Advanced technology stack.":["Gelişmiş teknoloji yığını.","حزمة تقنية متقدّمة.","Передовой технологический стек.","Une pile technologique avancée.","Stack tecnológico avanzado."],
    "Enterprise-grade systems engineered for speed, reliability, and performance.":[
      "Hız, güvenilirlik ve performans için tasarlanmış kurumsal düzeyde sistemler.",
      "أنظمة بمستوى المؤسسات مصمّمة للسرعة والموثوقية والأداء.",
      "Системы корпоративного уровня, созданные для скорости, надёжности и производительности.",
      "Des systèmes de niveau entreprise conçus pour la vitesse, la fiabilité et la performance.",
      "Sistemas de nivel empresarial diseñados para velocidad, fiabilidad y rendimiento."],
    "Proprietary ML Models":["Özel ML Modelleri","نماذج تعلّم آلي خاصة","Собственные ML-модели","Modèles ML propriétaires","Modelos ML propios"],
    "Custom-built machine learning algorithms trained on decades of market data, continuously adapting to evolving conditions with real-time pattern recognition and automated strategy optimization.":[
      "On yıllarca süren piyasa verisi üzerinde eğitilmiş, gerçek zamanlı örüntü tanıma ve otomatik strateji optimizasyonuyla değişen koşullara sürekli uyum sağlayan özel olarak geliştirilmiş makine öğrenimi algoritmaları.",
      "خوارزميات تعلّم آلي مصمّمة خصيصًا ومدرَّبة على عقود من بيانات السوق، تتكيّف باستمرار مع الظروف المتغيّرة عبر التعرّف الفوري على الأنماط وتحسين الاستراتيجيات آليًا.",
      "Специально созданные алгоритмы машинного обучения, обученные на десятилетиях рыночных данных, постоянно адаптирующиеся к меняющимся условиям благодаря распознаванию паттернов в реальном времени и автоматической оптимизации стратегий.",
      "Des algorithmes d'apprentissage automatique sur mesure, entraînés sur des décennies de données de marché, s'adaptant en continu à l'évolution des conditions grâce à la reconnaissance de motifs en temps réel et à l'optimisation automatisée des stratégies.",
      "Algoritmos de aprendizaje automático personalizados, entrenados con décadas de datos de mercado, que se adaptan continuamente a las condiciones cambiantes con reconocimiento de patrones en tiempo real y optimización automatizada de estrategias."],
    "Adaptive learning systems":["Uyarlanabilir öğrenme sistemleri","أنظمة تعلّم تكيّفية","Адаптивные обучающиеся системы","Systèmes d'apprentissage adaptatif","Sistemas de aprendizaje adaptativo"],
    "Multi-strategy frameworks":["Çoklu strateji çerçeveleri","أطر متعددة الاستراتيجيات","Мультистратегические фреймворки","Cadres multi-stratégies","Marcos multiestrategia"],
    "Real-time model validation":["Gerçek zamanlı model doğrulama","التحقّق الفوري من النماذج","Проверка моделей в реальном времени","Validation de modèle en temps réel","Validación de modelos en tiempo real"],
    "Ultra-Low Latency Execution":["Ultra Düşük Gecikmeli Yürütme","تنفيذ بزمن استجابة فائق الانخفاض","Исполнение со сверхнизкой задержкой","Exécution à ultra-faible latence","Ejecución de latencia ultrabaja"],
    "High-frequency trading infrastructure with microsecond precision. Co-located servers at major exchanges ensure optimal trade timing, minimal slippage, and maximum execution quality.":[
      "Mikrosaniye hassasiyetli yüksek frekanslı işlem altyapısı. Büyük borsalarda ortak yerleşimli sunucular, en uygun işlem zamanlamasını, minimum kaymayı ve maksimum yürütme kalitesini sağlar.",
      "بنية تحتية للتداول عالي التردّد بدقة الميكروثانية. خوادم مشترَكة الموقع في البورصات الكبرى تضمن التوقيت الأمثل للصفقات وأدنى انزلاق سعري وأعلى جودة تنفيذ.",
      "Инфраструктура высокочастотной торговли с микросекундной точностью. Серверы рядом с крупнейшими биржами обеспечивают оптимальное время сделок, минимальное проскальзывание и максимальное качество исполнения.",
      "Une infrastructure de trading haute fréquence avec une précision à la microseconde. Des serveurs colocalisés sur les grandes places boursières garantissent un timing optimal, un slippage minimal et une qualité d'exécution maximale.",
      "Infraestructura de trading de alta frecuencia con precisión de microsegundos. Los servidores coubicados en las principales bolsas garantizan un timing óptimo, un slippage mínimo y la máxima calidad de ejecución."],
    "Sub-millisecond response times":["Milisaniye altı yanıt süreleri","أزمنة استجابة دون المللي ثانية","Время отклика менее миллисекунды","Temps de réponse infra-milliseconde","Tiempos de respuesta submilisegundo"],
    "Direct market access":["Doğrudan piyasa erişimi","وصول مباشر إلى السوق","Прямой доступ к рынку","Accès direct au marché","Acceso directo al mercado"],
    "Smart order routing":["Akıllı emir yönlendirme","توجيه ذكي للأوامر","Умная маршрутизация ордеров","Routage intelligent des ordres","Enrutamiento inteligente de órdenes"],
    "Advanced Risk Management":["Gelişmiş Risk Yönetimi","إدارة مخاطر متقدّمة","Продвинутое управление рисками","Gestion avancée du risque","Gestión avanzada de riesgos"],
    "Multi-layered risk controls with real-time monitoring. Automated position sizing, dynamic stop-loss systems, and portfolio diversification ensure capital protection at all times.":[
      "Gerçek zamanlı izlemeyle çok katmanlı risk kontrolleri. Otomatik pozisyon boyutlandırma, dinamik zarar durdurma sistemleri ve portföy çeşitlendirmesi her zaman sermaye korumasını sağlar.",
      "ضوابط مخاطر متعددة الطبقات مع مراقبة فورية. تحجيم تلقائي للمراكز وأنظمة وقف خسارة ديناميكية وتنويع المحفظة تضمن حماية رأس المال في كل الأوقات.",
      "Многоуровневый контроль рисков с мониторингом в реальном времени. Автоматический расчёт размера позиций, динамические стоп-лоссы и диверсификация портфеля обеспечивают защиту капитала в любой момент.",
      "Des contrôles de risque multicouches avec surveillance en temps réel. Le dimensionnement automatique des positions, les stop-loss dynamiques et la diversification du portefeuille garantissent la protection du capital à tout moment.",
      "Controles de riesgo multicapa con monitorización en tiempo real. El dimensionamiento automático de posiciones, los stop-loss dinámicos y la diversificación de la cartera garantizan la protección del capital en todo momento."],
    "Real-time risk analytics":["Gerçek zamanlı risk analizi","تحليلات مخاطر فورية","Аналитика рисков в реальном времени","Analyse de risque en temps réel","Analítica de riesgo en tiempo real"],
    "Automated circuit breakers":["Otomatik devre kesiciler","قواطع تداول آلية","Автоматические предохранители","Coupe-circuits automatisés","Cortacircuitos automatizados"],
    "Stress testing systems":["Stres testi sistemleri","أنظمة اختبار الضغط","Системы стресс-тестирования","Systèmes de tests de résistance","Sistemas de pruebas de estrés"],
    "Global trading infrastructure.":["Küresel işlem altyapısı.","بنية تحتية للتداول عالمية.","Глобальная торговая инфраструктура.","Une infrastructure de trading mondiale.","Infraestructura de trading global."],
    "Connected to the world's most liquid markets with institutional-grade connectivity.":[
      "Kurumsal düzeyde bağlantı ile dünyanın en likit piyasalarına bağlı.",
      "متصلة بأكثر أسواق العالم سيولة عبر اتصال بمستوى مؤسسي.",
      "Подключена к самым ликвидным рынкам мира с возможностями институционального уровня.",
      "Connectée aux marchés les plus liquides du monde avec une connectivité de niveau institutionnel.",
      "Conectada a los mercados más líquidos del mundo con conectividad de nivel institucional."],
    "Multi-Venue Connectivity":["Çoklu Mekân Bağlantısı","اتصال متعدّد المنصّات","Подключение к множеству площадок","Connectivité multi-places","Conectividad multiplataforma"],
    "Direct connections to 50+ regulated global exchanges and liquidity providers across FX, commodities, equity indices, and digital assets. Redundant network architecture ensures zero downtime.":[
      "Döviz, emtia, hisse senedi endeksleri ve dijital varlıklar genelinde 50'den fazla düzenlemeye tabi küresel borsa ve likidite sağlayıcısına doğrudan bağlantı. Yedekli ağ mimarisi sıfır kesinti sağlar.",
      "اتصالات مباشرة بأكثر من 50 بورصة عالمية منظَّمة ومزوّدي سيولة عبر العملات والسلع ومؤشرات الأسهم والأصول الرقمية. بنية شبكة احتياطية تضمن عدم التوقّف.",
      "Прямые подключения к более чем 50 регулируемым мировым биржам и поставщикам ликвидности на валютах, сырье, фондовых индексах и цифровых активах. Резервированная сетевая архитектура исключает простои.",
      "Des connexions directes à plus de 50 bourses mondiales réglementées et fournisseurs de liquidité sur le forex, les matières premières, les indices boursiers et les actifs numériques. Une architecture réseau redondante garantit zéro interruption.",
      "Conexiones directas a más de 50 bolsas globales reguladas y proveedores de liquidez en divisas, materias primas, índices bursátiles y activos digitales. Una arquitectura de red redundante garantiza cero interrupciones."],
    "Real-Time Data Aggregation":["Gerçek Zamanlı Veri Toplama","تجميع البيانات الفوري","Агрегация данных в реальном времени","Agrégation de données en temps réel","Agregación de datos en tiempo real"],
    "Processing millions of market data points per second from multiple sources. Advanced normalization and validation ensure data accuracy for optimal decision-making.":[
      "Birden fazla kaynaktan saniyede milyonlarca piyasa veri noktasının işlenmesi. Gelişmiş normalleştirme ve doğrulama, en uygun karar alma için veri doğruluğunu sağlar.",
      "معالجة ملايين نقاط بيانات السوق في الثانية من مصادر متعددة. التطبيع والتحقّق المتقدّمان يضمنان دقة البيانات لاتخاذ القرار الأمثل.",
      "Обработка миллионов рыночных точек данных в секунду из множества источников. Продвинутая нормализация и проверка обеспечивают точность данных для оптимальных решений.",
      "Traitement de millions de points de données de marché par seconde provenant de multiples sources. Une normalisation et une validation avancées garantissent l'exactitude des données pour une prise de décision optimale.",
      "Procesamiento de millones de puntos de datos de mercado por segundo desde múltiples fuentes. La normalización y validación avanzadas garantizan la exactitud de los datos para una toma de decisiones óptima."],
    "Bank-Grade Security":["Banka Düzeyinde Güvenlik","أمان بمستوى البنوك","Безопасность банковского уровня","Sécurité de niveau bancaire","Seguridad de nivel bancario"],
    "Military-grade encryption, multi-factor authentication, and hardware security modules. Full compliance with international financial regulations and audit standards.":[
      "Askeri düzeyde şifreleme, çok faktörlü kimlik doğrulama ve donanım güvenlik modülleri. Uluslararası finansal düzenlemelere ve denetim standartlarına tam uyum.",
      "تشفير بمستوى عسكري ومصادقة متعدّدة العوامل ووحدات أمان مادية. امتثال كامل للوائح المالية الدولية ومعايير التدقيق.",
      "Шифрование военного уровня, многофакторная аутентификация и аппаратные модули безопасности. Полное соответствие международным финансовым нормам и стандартам аудита.",
      "Chiffrement de niveau militaire, authentification multifacteur et modules de sécurité matériels. Conformité totale avec les réglementations financières internationales et les normes d'audit.",
      "Cifrado de nivel militar, autenticación multifactor y módulos de seguridad por hardware. Cumplimiento total de las regulaciones financieras internacionales y los estándares de auditoría."],
    "Global market coverage":["Küresel piyasa kapsamı","تغطية الأسواق العالمية","Охват мировых рынков","Couverture des marchés mondiaux","Cobertura de mercados globales"],
    "All systems live":["Tüm sistemler aktif","جميع الأنظمة تعمل","Все системы работают","Tous les systèmes actifs","Todos los sistemas activos"],
    "Foreign Exchange (FX)":["Döviz (FX)","صرف العملات (FX)","Валютный рынок (FX)","Change (FX)","Divisas (FX)"],
    "Commodities":["Emtialar","السلع","Сырьевые товары","Matières premières","Materias primas"],
    "Equity Indices":["Hisse Senedi Endeksleri","مؤشرات الأسهم","Фондовые индексы","Indices boursiers","Índices bursátiles"],
    "Digital Assets":["Dijital Varlıklar","الأصول الرقمية","Цифровые активы","Actifs numériques","Activos digitales"],
    "Active":["Aktif","نشط","Активно","Actif","Activo"],
    "A live look at how NUUK turns raw market data into disciplined, risk-controlled execution.":[
      "NUUK'un ham piyasa verisini nasıl disiplinli ve risk kontrollü yürütmeye dönüştürdüğüne canlı bir bakış.",
      "نظرة حيّة على كيفية تحويل NUUK لبيانات السوق الخام إلى تنفيذ منضبط ومضبوط المخاطر.",
      "Живой взгляд на то, как NUUK превращает сырые рыночные данные в дисциплинированное исполнение с контролем рисков.",
      "Un aperçu en direct de la façon dont NUUK transforme les données brutes du marché en une exécution disciplinée et maîtrisée en risque.",
      "Una mirada en vivo a cómo NUUK convierte los datos brutos del mercado en una ejecución disciplinada y controlada en riesgo."],
    "Signal generation":["Sinyal üretimi","توليد الإشارات","Генерация сигналов","Génération de signaux","Generación de señales"],
    "Neural models score thousands of instruments in real time, surfacing only the highest-conviction setups.":[
      "Sinir modelleri binlerce enstrümanı gerçek zamanlı puanlar, yalnızca en yüksek güvenilirlikteki kurulumları öne çıkarır.",
      "تقوم النماذج العصبية بتقييم آلاف الأدوات فوريًا، مُبرِزة فقط الإعدادات الأعلى ثقة.",
      "Нейронные модели в реальном времени оценивают тысячи инструментов, выделяя только сетапы с наивысшей уверенностью.",
      "Les modèles neuronaux notent des milliers d'instruments en temps réel, ne faisant ressortir que les configurations à plus forte conviction.",
      "Los modelos neuronales puntúan miles de instrumentos en tiempo real, destacando solo las configuraciones de mayor convicción."],
    "Smart order routing splits and places orders across venues with sub-millisecond precision.":[
      "Akıllı emir yönlendirme, emirleri milisaniye altı hassasiyetle mekânlar arasında böler ve yerleştirir.",
      "يقوم التوجيه الذكي للأوامر بتقسيم الأوامر وتوزيعها عبر المنصّات بدقة دون المللي ثانية.",
      "Умная маршрутизация дробит и размещает ордера по площадкам с точностью менее миллисекунды.",
      "Le routage intelligent des ordres fractionne et place les ordres sur plusieurs places avec une précision infra-milliseconde.",
      "El enrutamiento inteligente divide y coloca órdenes entre plataformas con precisión submilisegundo."],
    "Risk governance":["Risk yönetişimi","حوكمة المخاطر","Управление рисками","Gouvernance du risque","Gobernanza del riesgo"],
    "Real-time exposure limits, circuit breakers, and stress tests guard capital around the clock.":[
      "Gerçek zamanlı maruziyet limitleri, devre kesiciler ve stres testleri sermayeyi 7/24 korur.",
      "حدود التعرّض الفورية وقواطع التداول واختبارات الضغط تحمي رأس المال على مدار الساعة.",
      "Лимиты экспозиции в реальном времени, предохранители и стресс-тесты круглосуточно защищают капитал.",
      "Des limites d'exposition en temps réel, des coupe-circuits et des tests de résistance protègent le capital 24h/24.",
      "Los límites de exposición en tiempo real, los cortacircuitos y las pruebas de estrés protegen el capital las 24 horas."],
    "Signal feed · live models":["Sinyal akışı · canlı modeller","تدفّق الإشارات · نماذج مباشرة","Поток сигналов · живые модели","Flux de signaux · modèles en direct","Flujo de señales · modelos en vivo"],
    "150 algorithms":["150 algoritma","150 خوارزمية","150 алгоритмов","150 algorithmes","150 algoritmos"],
    "Conviction > 0.80":["Güven > 0,80","الثقة > 0.80","Уверенность > 0,80","Conviction > 0,80","Convicción > 0,80"],
    "Refresh · 0.3ms":["Yenileme · 0,3ms","تحديث · 0.3ms","Обновление · 0,3 мс","Rafraîchissement · 0,3ms","Actualización · 0,3ms"],
    "Auto-execute on":["Otomatik yürütme açık","التنفيذ التلقائي مفعّل","Автоисполнение вкл.","Exécution auto activée","Ejecución automática activada"],
    "Order routing · last 1,000 fills":["Emir yönlendirme · son 1.000 işlem","توجيه الأوامر · آخر 1000 تنفيذ","Маршрутизация · последние 1000 исполнений","Routage des ordres · 1 000 derniers fills","Enrutamiento · últimas 1.000 ejecuciones"],
    "<5ms avg":["ort. <5ms","<5ms متوسط","<5 мс средн.","<5ms moy.","<5ms prom."],
    "Avg slippage · 0.4 bps":["Ort. kayma · 0,4 bps","متوسط الانزلاق · 0.4 نقطة أساس","Средн. проскальзывание · 0,4 б.п.","Slippage moyen · 0,4 pb","Slippage medio · 0,4 pb"],
    "Fill rate · 99.6%":["Gerçekleşme oranı · %99,6","معدّل التنفيذ · 99.6%","Доля исполнения · 99,6%","Taux d'exécution · 99,6%","Tasa de ejecución · 99,6%"],
    "Risk monitor · real-time":["Risk izleyici · gerçek zamanlı","مراقب المخاطر · فوري","Монитор рисков · в реальном времени","Moniteur de risque · temps réel","Monitor de riesgo · tiempo real"],
    "Within limits":["Limitler içinde","ضمن الحدود","В пределах лимитов","Dans les limites","Dentro de los límites"],
    "Gross exposure":["Brüt maruziyet","التعرّض الإجمالي","Валовая экспозиция","Exposition brute","Exposición bruta"],
    "62% of limit":["Limitin %62'si","62% من الحد","62% от лимита","62% de la limite","62% del límite"],
    "Drawdown guard":["Düşüş koruması","حارس التراجع","Защита от просадки","Garde anti-drawdown","Protección de drawdown"],
    "30% of budget used":["Bütçenin %30'u kullanıldı","استُخدم 30% من الميزانية","Использовано 30% бюджета","30% du budget utilisé","30% del presupuesto usado"],
    "Value-at-Risk (95%)":["Riske Maruz Değer (%95)","القيمة المعرّضة للمخاطر (95%)","Стоимость под риском (95%)","Valeur à risque (95%)","Valor en riesgo (95%)"],
    "41% of ceiling":["Tavanın %41'i","41% من السقف","41% от потолка","41% du plafond","41% del techo"],
    "● Circuit breakers armed":["● Devre kesiciler hazır","● قواطع التداول مفعّلة","● Предохранители активны","● Coupe-circuits armés","● Cortacircuitos armados"],
    "Stress test · passed":["Stres testi · geçti","اختبار الضغط · ناجح","Стресс-тест · пройден","Test de résistance · réussi","Prueba de estrés · superada"],
    "Auto position sizing":["Otomatik pozisyon boyutlandırma","تحجيم تلقائي للمراكز","Авторазмер позиций","Dimensionnement auto des positions","Dimensionamiento automático"],
    "Disciplined, risk-controlled trading powered by the most advanced AI systems in quantitative finance.":[
      "Kantitatif finanstaki en gelişmiş yapay zekâ sistemleriyle güçlendirilmiş, disiplinli ve risk kontrollü işlem.",
      "تداول منضبط ومضبوط المخاطر مدعوم بأكثر أنظمة الذكاء الاصطناعي تقدّمًا في التمويل الكمّي.",
      "Дисциплинированная торговля с контролем рисков на основе самых передовых систем ИИ в количественных финансах.",
      "Un trading discipliné et maîtrisé en risque, propulsé par les systèmes d'IA les plus avancés de la finance quantitative.",
      "Trading disciplinado y controlado en riesgo, impulsado por los sistemas de IA más avanzados de las finanzas cuantitativas."],
    "Partner with NUUK →":["NUUK ile ortak olun →","شارِك NUUK →","Сотрудничать с NUUK →","Devenir partenaire de NUUK →","Asóciate con NUUK →"],
    "Institutional inquiries only":["Yalnızca kurumsal başvurular","للاستفسارات المؤسسية فقط","Только институциональные запросы","Demandes institutionnelles uniquement","Solo consultas institucionales"],
    "Institutional-grade quantitative trading infrastructure powered by artificial intelligence.":[
      "Yapay zekâ ile güçlendirilmiş, kurumsal düzeyde kantitatif işlem altyapısı.",
      "بنية تحتية للتداول الكمّي بمستوى مؤسسي مدعومة بالذكاء الاصطناعي.",
      "Количественная торговая инфраструктура институционального уровня на основе искусственного интеллекта.",
      "Une infrastructure de trading quantitatif de niveau institutionnel propulsée par l'intelligence artificielle.",
      "Infraestructura de trading cuantitativo de nivel institucional impulsada por inteligencia artificial."],
    "Quick links":["Hızlı bağlantılar","روابط سريعة","Быстрые ссылки","Liens rapides","Enlaces rápidos"],
    "Dubai Financial Centre (DIFC) · Dubai, UAE":["Dubai Finans Merkezi (DIFC) · Dubai, BAE","مركز دبي المالي العالمي (DIFC) · دبي، الإمارات","Дубайский финансовый центр (DIFC) · Дубай, ОАЭ","Centre financier de Dubaï (DIFC) · Dubaï, EAU","Centro Financiero de Dubái (DIFC) · Dubái, EAU"],
    "© 2024 NUUK. All rights reserved.":["© 2024 NUUK. Tüm hakları saklıdır.","© 2024 NUUK. جميع الحقوق محفوظة.","© 2024 NUUK. Все права защищены.","© 2024 NUUK. Tous droits réservés.","© 2024 NUUK. Todos los derechos reservados."],
    "Operating globally with institutional discipline":["Kurumsal disiplinle küresel ölçekte faaliyet","نعمل عالميًا بانضباط مؤسسي","Работаем по всему миру с институциональной дисциплиной","Une présence mondiale avec une discipline institutionnelle","Operando globalmente con disciplina institucional"],
    "Trading involves substantial risk. Live market figures shown (crypto via CoinGecko, FX via Frankfurter) are third-party data provided for informational purposes and may be delayed; system telemetry panels are illustrative. This page is a design demonstration and does not constitute financial advice or an offer of services.":[
      "İşlem önemli ölçüde risk içerir. Gösterilen canlı piyasa verileri (kripto için CoinGecko, döviz için Frankfurter) bilgilendirme amacıyla üçüncü taraflarca sağlanır ve gecikmeli olabilir; sistem telemetri panelleri örnekleyicidir. Bu sayfa bir tasarım gösterimidir ve finansal tavsiye ya da hizmet teklifi niteliği taşımaz.",
      "ينطوي التداول على مخاطر كبيرة. أرقام السوق المباشرة المعروضة (العملات المشفّرة عبر CoinGecko والعملات عبر Frankfurter) بيانات من أطراف خارجية لأغراض إعلامية وقد تكون متأخّرة؛ ولوحات تتبّع النظام توضيحية. هذه الصفحة عرض تصميمي ولا تُعدّ نصيحة مالية أو عرضًا لخدمات.",
      "Торговля сопряжена со значительным риском. Показанные рыночные данные (криптовалюты через CoinGecko, валюты через Frankfurter) предоставлены третьими сторонами в информационных целях и могут поступать с задержкой; панели телеметрии иллюстративны. Эта страница — демонстрация дизайна и не является финансовой консультацией или предложением услуг.",
      "Le trading comporte un risque substantiel. Les chiffres de marché en direct affichés (crypto via CoinGecko, forex via Frankfurter) sont des données tierces fournies à titre informatif et peuvent être différées ; les panneaux de télémétrie système sont illustratifs. Cette page est une démonstration de design et ne constitue ni un conseil financier ni une offre de services.",
      "El trading conlleva un riesgo sustancial. Las cifras de mercado en vivo mostradas (cripto vía CoinGecko, divisas vía Frankfurter) son datos de terceros proporcionados con fines informativos y pueden estar retrasados; los paneles de telemetría son ilustrativos. Esta página es una demostración de diseño y no constituye asesoramiento financiero ni una oferta de servicios."]
  };

  // --- rich (innerHTML) headings: selector -> per-language HTML ---
  const HDEFS = [
    { sel:'h1.display', html:{
      en:"The next generation of<br><em>AI trading</em> investments.",
      tr:"Yeni nesil<br><em>AI işlem</em> yatırımları.",
      ar:"الجيل التالي من<br>استثمارات <em>التداول بالذكاء الاصطناعي</em>.",
      ru:"Новое поколение<br>инвестиций в <em>ИИ-трейдинг</em>.",
      fr:"La nouvelle génération<br>d'investissements en <em>trading IA</em>.",
      es:"La nueva generación de<br>inversiones en <em>trading con IA</em>." }},
    { sel:'#about h2.sec', html:{
      en:"Precision-engineered for<br><em>maximum performance.</em>",
      tr:"Hassas mühendislikle<br><em>maksimum performans.</em>",
      ar:"هندسة دقيقة من أجل<br><em>أقصى أداء.</em>",
      ru:"Точная инженерия для<br><em>максимальной производительности.</em>",
      fr:"Une ingénierie de précision pour<br><em>une performance maximale.</em>",
      es:"Ingeniería de precisión para<br><em>el máximo rendimiento.</em>" }},
    { sel:'#performance h2.sec', html:{
      en:"The system, <em>in motion.</em>",
      tr:"Sistem, <em>hareket hâlinde.</em>",
      ar:"النظام، <em>قيد العمل.</em>",
      ru:"Система <em>в движении.</em>",
      fr:"Le système, <em>en mouvement.</em>",
      es:"El sistema, <em>en movimiento.</em>" }},
    { sel:'.cta h2', html:{
      en:"Where capital meets<br><em>machine intelligence.</em>",
      tr:"Sermayenin buluştuğu yer:<br><em>makine zekâsı.</em>",
      ar:"حيث يلتقي رأس المال<br><em>بذكاء الآلة.</em>",
      ru:"Где капитал встречает<br><em>машинный интеллект.</em>",
      fr:"Là où le capital rencontre<br><em>l'intelligence des machines.</em>",
      es:"Donde el capital se encuentra con<br><em>la inteligencia de las máquinas.</em>" }}
  ];

  function injectCSS(){
    const css = `
    .lang{position:relative}
    .lang-btn{display:inline-flex;align-items:center;gap:7px;font-family:"JetBrains Mono",monospace;font-size:12.5px;color:var(--muted);background:var(--bg-3);border:1px solid var(--line);border-radius:10px;padding:9px 11px;cursor:pointer;transition:.2s}
    .lang-btn:hover{color:var(--ink)}
    .lang-btn svg{width:15px;height:15px;stroke:currentColor;fill:none;stroke-width:1.6}
    .lang-btn .car{font-size:9px;opacity:.7}
    .lang-menu{position:absolute;top:calc(100% + 8px);right:0;background:var(--bg-2);border:1px solid var(--line);border-radius:12px;padding:6px;min-width:158px;display:none;flex-direction:column;gap:2px;box-shadow:0 20px 50px -20px oklch(0.10 0.02 245 / .9);z-index:60}
    .lang-menu.open{display:flex}
    .lang-menu button{text-align:left;background:none;border:0;color:var(--muted);font-size:14px;padding:9px 12px;border-radius:8px;cursor:pointer;transition:.15s;font-family:inherit;display:flex;justify-content:space-between;align-items:center;gap:12px}
    .lang-menu button:hover{background:var(--bg-3);color:var(--ink)}
    .lang-menu button.on{color:var(--mint)}
    .lang-menu button .cd{font-family:"JetBrains Mono",monospace;font-size:11px;color:var(--faint)}
    [dir=rtl] .lang-menu{right:auto;left:0;text-align:right}
    [dir=rtl] .lang-menu button{text-align:right}
    [dir=rtl] body{text-align:right}
    [dir=rtl] .hero,[dir=rtl] .sec-head:not(.center),[dir=rtl] .tab{text-align:right}
    [dir=rtl] .foot-bot,[dir=rtl] .cov-top,[dir=rtl] .mock-h,[dir=rtl] .pf-top{flex-direction:row-reverse}
    `;
    const s=document.createElement('style'); s.textContent=css; document.head.appendChild(s);
  }

  function buildSwitcher(){
    const navCta=document.querySelector('.nav-cta');
    if(!navCta) return;
    const wrap=document.createElement('div'); wrap.className='lang'; wrap.id='lang';
    wrap.innerHTML=`
      <button class="lang-btn" id="langBtn" aria-haspopup="true" aria-expanded="false">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18"/></svg>
        <span id="langCur">EN</span><span class="car">▼</span>
      </button>
      <div class="lang-menu" id="langMenu">
        ${Object.keys(NATIVE).map(c=>`<button data-lang="${c}"><span>${NATIVE[c]}</span><span class="cd">${CODE[c]}</span></button>`).join('')}
      </div>`;
    navCta.insertBefore(wrap, navCta.firstChild);
  }

  let textTargets=[], htmlTargets=[];
  function initTargets(){
    const htmlEls=HDEFS.map(d=>({def:d, el:document.querySelector(d.sel)})).filter(x=>x.el);
    htmlEls.forEach(x=>htmlTargets.push({el:x.el, html:x.def.html}));
    const excludeSel='#ticker,#seg,#pfval,#pfchgwrap,#chart,#holds,.lang';
    ['nav','main','footer'].forEach(tag=>{
      const root=document.querySelector(tag); if(!root)return;
      const w=document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
      let n;
      while((n=w.nextNode())){
        if(!n.nodeValue.trim()) continue;
        const p=n.parentElement; if(!p) continue;
        if(p.closest(excludeSel)) continue;
        if(htmlEls.some(x=>x.el.contains(n))) continue;
        textTargets.push({node:n, orig:n.nodeValue});
      }
    });
  }

  function lookup(key, lang){
    if(lang==='en') return key;
    const e=T[key]; if(!e) return key;
    return e[IDX[lang]] || key;
  }

  function apply(lang){
    const isAr = lang==='ar';
    document.documentElement.lang = lang;
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';
    textTargets.forEach(t=>{
      const m=t.orig.match(/^(\s*)([\s\S]*?)(\s*)$/);
      const lead=m[1], body=m[2], trail=m[3];
      t.node.nodeValue = lead + lookup(body, lang) + trail;
    });
    htmlTargets.forEach(t=>{ t.el.innerHTML = t.html[lang] || t.html.en; });
    const cur=document.getElementById('langCur'); if(cur) cur.textContent=CODE[lang];
    document.querySelectorAll('#langMenu button').forEach(b=>b.classList.toggle('on', b.dataset.lang===lang));
    try{ localStorage.setItem('nuuk_lang', lang); }catch(e){}
  }

  function wire(){
    const btn=document.getElementById('langBtn'), menu=document.getElementById('langMenu');
    if(!btn) return;
    btn.addEventListener('click', e=>{ e.stopPropagation(); const open=menu.classList.toggle('open'); btn.setAttribute('aria-expanded', open); });
    document.addEventListener('click', ()=>menu.classList.remove('open'));
    menu.addEventListener('click', e=>{
      const b=e.target.closest('button[data-lang]'); if(!b) return;
      apply(b.dataset.lang); menu.classList.remove('open');
    });
  }

  function start(){
    injectCSS();
    buildSwitcher();
    initTargets();
    wire();
    let saved='en';
    try{ saved=localStorage.getItem('nuuk_lang')||'en'; }catch(e){}
    if(!NATIVE[saved]) saved='en';
    apply(saved);
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
