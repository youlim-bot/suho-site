const ARTICLES_KEY = "articles";
const HISTORY_KEY = "history";
const PRODUCTS_KEY = "products";
const PRODUCT_GENRES_KEY = "productGenres";
const LOGOS_KEY = "logos";
const SITE_TEXTS_KEY = "siteTexts";
const ANALYTICS_PREFIX = "analytics:";
const MAX_ANALYTICS_SESSIONS = 8000;
const TOKEN_TTL_SECONDS = 60 * 60 * 8;

const DEFAULT_ARTICLES = [
  {
    id: "snaptag-partnership-2025",
    title: "韓国の非可視性ウォーターマーク先導企業「スナップタグ」と戦略的提携",
    category: "partnership",
    date: "2025.08.04",
    excerpt: "韓国の非可視性ウォーターマーク技術を持つスナップタグ社との戦略的提携を発表しました。デジタルコンテンツ保護と権利管理の強化を推進してまいります。",
    emoji: "🤝",
    featured: true
  },
  {
    id: "naver-cloud-msp-2025",
    title: "韓国ネイバークラウドMSPシルバーランク達成記念割引プロモーション開催",
    category: "corporate",
    date: "2025.04.22",
    excerpt: "ネイバークラウドMSPシルバーランク達成を記念した特別割引プロモーションを実施いたします。",
    emoji: "🏅",
    featured: false
  },
  {
    id: "overseas-expansion-service-2024",
    title: "新たな収益創出への踏み出し『海外進出お任せサービス』をご紹介",
    category: "service",
    date: "2024.04.10",
    excerpt: "海外市場への進出を全面的にサポートする新サービス『海外進出お任せサービス』を開始いたします。",
    emoji: "🌏",
    featured: false
  },
  {
    id: "security-diagnosis-2020",
    title: "Webサイト脆弱性診断サービスが完全無料！ Webサイトの攻撃遮断サービス",
    category: "service",
    date: "2020.09.08",
    excerpt: "Webサイトの脆弱性診断を無償で提供するキャンペーンを実施。サイバー攻撃からWebサイトを守ります。",
    emoji: "🛡️",
    featured: false
  },
  {
    id: "naver-partnership-2020",
    title: "株式会社スホ、韓国ネイバービジネスプラットフォームとパートナー契約を締結",
    category: "partnership",
    date: "2020.07.30",
    excerpt: "韓国最大規模のITプラットフォーム企業、ネイバービジネスプラットフォームとの正式パートナー契約を締結しました。",
    emoji: "🤝",
    featured: false
  },
  {
    id: "whatap-monitoring-2019",
    title: "Whatap ITモニタリングサービスを開始",
    category: "service",
    date: "2019.11.01",
    excerpt: "システムの状態をリアルタイムで可視化するITモニタリングサービス「Whatap」の提供を開始しました。",
    emoji: "📊",
    featured: false
  },
  {
    id: "tgs-2017-gyro-vr",
    title: "東京ゲームショウ2017「GYRO VR」展示のご報告",
    category: "event",
    date: "2017.09.25",
    excerpt: "東京ゲームショウ2017にてVRコンテンツ「GYRO VR」を出展いたしました。",
    emoji: "🥽",
    featured: false
  },
  {
    id: "aryaka-partnership-2016",
    title: "株式会社スホがSDNプラットフォーム供給企業Aryakaとパートナー契約を締結",
    category: "partnership",
    date: "2016.10.27",
    excerpt: "グローバルSDNプラットフォームのリーダー企業Aryakaとの正式パートナーシップを締結しました。",
    emoji: "🌐",
    featured: false
  }
];

const DEFAULT_PRODUCTS = [
  {
    id: "suho-data-platform",
    title: "SUHO DataPlatform",
    description: "企業データを一元管理するクラウドネイティブなデータプラットフォーム。リアルタイム分析からMLまで対応します。",
    category: "platform",
    genre: "データ基盤",
    logo: "",
    link: "#contact",
    linkType: "internal"
  },
  {
    id: "suho-secure-edge",
    title: "SUHO SecureEdge",
    description: "ゼロトラストセキュリティモデルに基づいた包括的なセキュリティプラットフォーム。クラウド・オンプレ両対応です。",
    category: "platform",
    genre: "ゼロトラスト",
    logo: "",
    link: "#contact",
    linkType: "internal"
  },
  {
    id: "suho-ai-studio",
    title: "SUHO AI Studio",
    description: "ノーコード/ローコードでAIモデルを開発・デプロイできるMLOpsプラットフォーム。専門知識不要で始められます。",
    category: "platform",
    genre: "MLOps",
    logo: "",
    link: "#contact",
    linkType: "internal"
  },
  {
    id: "healthcare-solution",
    title: "医療・ヘルスケア",
    description: "電子カルテ連携AIから医療画像診断支援まで、医療DXを包括的にサポートします。",
    category: "industry",
    genre: "医療DX",
    logo: "",
    link: "#contact",
    linkType: "internal"
  },
  {
    id: "manufacturing-solution",
    title: "製造業",
    description: "スマートファクトリー実現に向けたIoT基盤とAIによる品質管理・予知保全ソリューション。",
    category: "industry",
    genre: "スマートファクトリー",
    logo: "",
    link: "#contact",
    linkType: "internal"
  },
  {
    id: "fintech-solution",
    title: "金融・フィンテック",
    description: "不正検知AIからリスク分析まで、金融規制に準拠したセキュアなクラウドソリューションを提供します。",
    category: "industry",
    genre: "フィンテック",
    logo: "",
    link: "#contact",
    linkType: "internal"
  },
  {
    id: "microsoft-partner",
    title: "Microsoft",
    description: "クラウド、ライセンス、業務基盤の導入から運用まで支援します。",
    category: "partner",
    genre: "Gold Partner",
    logo: "",
    link: "https://www.microsoft.com/",
    linkType: "external"
  },
  {
    id: "aws-partner",
    title: "AWS",
    description: "クラウドインフラの設計、移行、運用最適化を支援します。",
    category: "partner",
    genre: "Advanced Tier",
    logo: "",
    link: "https://aws.amazon.com/",
    linkType: "external"
  },
  {
    id: "datadog-partner",
    title: "Datadog",
    description: "監視、可観測性、インシデント対応の運用品質向上を支えます。",
    category: "partner",
    genre: "Technology Partner",
    logo: "",
    link: "https://www.datadoghq.com/",
    linkType: "external"
  }
];

const DEFAULT_PRODUCT_GENRES = [
  "データ基盤",
  "セキュリティ",
  "ゼロトラスト",
  "AI/ML",
  "MLOps",
  "医療DX",
  "製造DX",
  "スマートファクトリー",
  "金融DX",
  "フィンテック",
  "MSP",
  "WAF",
  "CDN",
  "監視・運用",
  "パートナー商品",
  "Gold Partner",
  "Advanced Tier",
  "Technology Partner"
].map((name, index) => ({ id: `genre-${index + 1}`, name }));

const DEFAULT_LOGOS = [
  ["KDDI", "assets/logos/KDDI.png", 180],
  ["NEXON", "assets/logos/넥슨.webp", 130],
  ["BAROQUE", "assets/logos/바로크.png", 130],
  ["Hyundai Marine & Fire Insurance", "assets/logos/현대해상보험.png", 180],
  ["KOCCA", "assets/logos/kocca.png", 170],
  ["Hyundai", "assets/logos/현대.png", 150],
  ["SoftBank", "assets/logos/소프트뱅크.png", 180],
  ["Samsung", "assets/logos/삼성.png", 150],
  ["KT", "assets/logos/KT.png", 120],
  ["Samsung Electro-Mechanics", "assets/logos/삼성전기.png", 180],
  ["Samsung SDS", "assets/logos/삼성 SDS.webp", 170],
  ["Korean Cultural Center", "assets/logos/문화원.webp", 170],
  ["Penta Security", "assets/logos/펜타시큐리티.png", 170],
  ["Pinkfong Japan", "assets/logos/핑크퐁 재팬.png", 120],
  ["Netmarble Japan", "assets/logos/넷마블 재팬.png", 120],
  ["ADK", "assets/logos/ADK.png", 130],
  ["Quad Miners", "assets/logos/쿼드마이너.png", 160],
  ["Hakuhodo", "assets/logos/하쿠호도.png", 180],
  ["Marvelous", "assets/logos/마블러스.png", 160],
  ["NAVER Cloud", "assets/logos/네이버 클라우드3.png", 180],
  ["GS Neotek", "assets/logos/GS 네오텍.png", 160]
].map(([title, src, width], index) => ({
  id: `logo-${index + 1}`,
  title,
  src,
  width,
  scale: 1,
  x: 0,
  y: 0
}));

const DEFAULT_SITE_TEXTS = [
  ["hero.eyebrow", "メイン / ラベル", "AI & Cloud Innovation"],
  ["hero.title", "メイン / 見出し", "ビジネスを 次のステージへ\n進化させる"],
  ["hero.lead", "メイン / 説明", "AIとクラウドの力で、あなたのビジネスに革命をもたらします。最先端のテクノロジーと深い専門知識で、未来を共に創ります。"],
  ["hero.primaryCta", "メイン / ボタン1", "サービスを見る"],
  ["hero.secondaryCta", "メイン / ボタン2", "お問い合わせ"],
  ["services.kicker", "01 AI / ラベル", "01 - AI Innovation"],
  ["services.title", "01 AI / 見出し", "AI活用で実現する\n業務変革と効率化"],
  ["services.lead", "01 AI / 説明", "Local LLMの導入支援から、業務課題に合わせたAIソリューションの選定・設計・運用まで、現場で使える形で導入をサポートします。"],
  ["cloud.kicker", "02 Cloud / ラベル", "02 - Cloud Consulting"],
  ["cloud.title", "02 Cloud / 見出し", "クラウドで実現する\nスケーラブルな未来"],
  ["cloud.lead", "02 Cloud / 説明", "AWS・NAVER CLOUD PLATFORM・NHN Cloudのマルチクラウド戦略から移行支援、コスト最適化まで、クラウドジャーニーの全てをサポートします。"],
  ["managed.kicker", "03 Managed / ラベル", "03 - Managed Service"],
  ["managed.title", "03 Managed / 見出し", "24/7 監視・運用で\n安心のインフラ管理"],
  ["managed.lead", "03 Managed / 説明", "インフラ運用をスホに委託し、\nコア事業に集中できる環境を実現します。プロアクティブな監視で障害を未然に防ぎます。"],
  ["managed.step1.title", "03 Managed / 01 見出し", "24/7 監視体制"],
  ["managed.step1.desc", "03 Managed / 01 説明", "専任チームが24時間365日システムを監視し、インシデントへ迅速に対応します。"],
  ["managed.step2.title", "03 Managed / 02 見出し", "自動化運用"],
  ["managed.step2.desc", "03 Managed / 02 説明", "AIOpsを活用した自動スケーリング・自動修復により、安定稼働を支えます。"],
  ["managed.step3.title", "03 Managed / 03 見出し", "コスト最適化"],
  ["managed.step3.desc", "03 Managed / 03 説明", "リソース利用状況を継続的に分析し、クラウドコストを適正化します。"],
  ["products.kicker", "04 Products / ラベル", "04 - Security & Products"],
  ["products.title", "04 Products / 見出し", "セキュリティ＆プロダクト"],
  ["products.lead", "04 Products / 説明", "ゼロトラストセキュリティから業界特化ソリューション、パートナー製品まで、課題に合わせた導入を支援します。"],
  ["about.kicker", "05 About / ラベル", "05 - About"],
  ["about.title", "05 About / 見出し", "会社概要"],
  ["about.lead", "05 About / 説明", "株式会社スホは、クラウドプラットフォーム、データセンター、プロダクト販売、ソリューション、運用支援、ゲーム事業まで幅広いITサービスを提供しています。"],
  ["contact.title", "お問い合わせ / 見出し", "さあ、始めましょう"],
  ["contact.lead", "お問い合わせ / 説明", "ビジネスのデジタル変革について、まずはお気軽にご相談ください。\ncontact@suhojapan.com"],
  ["footer.tagline", "フッター / タグライン", "AIとクラウドの力で日本のビジネスを変革する"]
].map(([key, label, value]) => ({ key, label, value }));

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type,Authorization",
  "Access-Control-Max-Age": "86400"
};

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") return new Response(null, { headers: CORS_HEADERS });

    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, "") || "/";

    try {
      if (request.method === "GET" && path === "/articles") {
        return json({ articles: await getArticles(env) });
      }

      if (request.method === "GET" && path === "/history") {
        return json({ history: await getHistory(env) });
      }

      if (request.method === "GET" && path === "/products") {
        return json({ products: await getProducts(env) });
      }

      if (request.method === "GET" && path === "/product-genres") {
        return json({ genres: await getProductGenres(env) });
      }

      if (request.method === "GET" && path === "/logos") {
        return json({ logos: await getLogos(env) });
      }

      if (request.method === "GET" && path === "/site-texts") {
        return json({ texts: await getSiteTexts(env) });
      }

      if (request.method === "POST" && path === "/analytics/event") {
        const body = await request.json().catch(() => ({}));
        await recordAnalyticsEvent(env, body);
        return json({ ok: true });
      }

      if (request.method === "POST" && path === "/login") {
        const body = await request.json().catch(() => ({}));
        const hash = await sha256(String(body.password || ""));
        if (!env.ADMIN_PASSWORD_HASH || hash !== env.ADMIN_PASSWORD_HASH) {
          return json({ error: "Invalid password" }, 401);
        }
        return json({ token: await signToken(env) });
      }

      if (request.method === "GET" && path === "/analytics/summary") {
        await requireAdmin(request, env);
        const days = clampNumber(url.searchParams.get("days"), 1, 90, 30);
        return json(await getAnalyticsSummary(env, days));
      }

      if (path === "/articles" && request.method === "PUT") {
        await requireAdmin(request, env);
        const body = await request.json();
        const articles = validateArticles(body.articles);
        await env.NEWS_KV.put(ARTICLES_KEY, JSON.stringify(articles));
        return json({ articles });
      }

      if (path === "/articles" && request.method === "POST") {
        await requireAdmin(request, env);
        const article = validateArticle(await request.json());
        const articles = await getArticles(env);
        const next = [{ ...article, id: article.id || crypto.randomUUID() }, ...articles];
        await env.NEWS_KV.put(ARTICLES_KEY, JSON.stringify(next));
        return json({ articles: next });
      }

      if (path.startsWith("/articles/")) {
        await requireAdmin(request, env);
        const id = decodeURIComponent(path.split("/").pop());
        const articles = await getArticles(env);

        if (request.method === "PUT") {
          const updated = validateArticle({ ...(await request.json()), id });
          const next = articles.map((item) => item.id === id ? updated : item);
          await env.NEWS_KV.put(ARTICLES_KEY, JSON.stringify(next));
          return json({ articles: next });
        }

        if (request.method === "DELETE") {
          const next = articles.filter((item) => item.id !== id);
          await env.NEWS_KV.put(ARTICLES_KEY, JSON.stringify(next));
          return json({ articles: next });
        }
      }

      if (path === "/history" && request.method === "PUT") {
        await requireAdmin(request, env);
        const body = await request.json();
        const history = validateHistory(body.history);
        await env.NEWS_KV.put(HISTORY_KEY, JSON.stringify(history));
        return json({ history });
      }

      if (path === "/history" && request.method === "POST") {
        await requireAdmin(request, env);
        const item = validateHistoryItem(await request.json());
        const history = await getHistory(env);
        const next = sortHistory([{ ...item, id: item.id || crypto.randomUUID() }, ...history]);
        await env.NEWS_KV.put(HISTORY_KEY, JSON.stringify(next));
        return json({ history: next });
      }

      if (path.startsWith("/history/")) {
        await requireAdmin(request, env);
        const id = decodeURIComponent(path.split("/").pop());
        const history = await getHistory(env);

        if (request.method === "PUT") {
          const updated = validateHistoryItem({ ...(await request.json()), id });
          const next = sortHistory(history.map((item) => item.id === id ? updated : item));
          await env.NEWS_KV.put(HISTORY_KEY, JSON.stringify(next));
          return json({ history: next });
        }

        if (request.method === "DELETE") {
          const next = history.filter((item) => item.id !== id);
          await env.NEWS_KV.put(HISTORY_KEY, JSON.stringify(next));
          return json({ history: next });
        }
      }

      if (path === "/products" && request.method === "PUT") {
        await requireAdmin(request, env);
        const body = await request.json();
        const products = validateProducts(body.products);
        await env.NEWS_KV.put(PRODUCTS_KEY, JSON.stringify(products));
        return json({ products });
      }

      if (path === "/products" && request.method === "POST") {
        await requireAdmin(request, env);
        const product = validateProduct(await request.json());
        const products = await getProducts(env);
        const next = [{ ...product, id: product.id || crypto.randomUUID() }, ...products];
        await env.NEWS_KV.put(PRODUCTS_KEY, JSON.stringify(next));
        return json({ products: next });
      }

      if (path.startsWith("/products/")) {
        await requireAdmin(request, env);
        const id = decodeURIComponent(path.split("/").pop());
        const products = await getProducts(env);

        if (request.method === "PUT") {
          const updated = validateProduct({ ...(await request.json()), id });
          const next = products.map((item) => item.id === id ? updated : item);
          await env.NEWS_KV.put(PRODUCTS_KEY, JSON.stringify(next));
          return json({ products: next });
        }

        if (request.method === "DELETE") {
          const next = products.filter((item) => item.id !== id);
          await env.NEWS_KV.put(PRODUCTS_KEY, JSON.stringify(next));
          return json({ products: next });
        }
      }

      if (path === "/product-genres" && request.method === "PUT") {
        await requireAdmin(request, env);
        const body = await request.json();
        const genres = validateProductGenres(body.genres);
        await env.NEWS_KV.put(PRODUCT_GENRES_KEY, JSON.stringify(genres));
        return json({ genres });
      }

      if (path === "/product-genres" && request.method === "POST") {
        await requireAdmin(request, env);
        const genre = validateProductGenre(await request.json());
        const genres = await getProductGenres(env);
        if (genres.some((item) => item.name === genre.name)) throw httpError("genre already exists", 400);
        const next = [...genres, { ...genre, id: genre.id || crypto.randomUUID() }];
        await env.NEWS_KV.put(PRODUCT_GENRES_KEY, JSON.stringify(next));
        return json({ genres: next });
      }

      if (path.startsWith("/product-genres/")) {
        await requireAdmin(request, env);
        const id = decodeURIComponent(path.split("/").pop());
        const genres = await getProductGenres(env);

        if (request.method === "PUT") {
          const updated = validateProductGenre({ ...(await request.json()), id });
          if (genres.some((item) => item.id !== id && item.name === updated.name)) {
            throw httpError("genre already exists", 400);
          }
          const next = genres.map((item) => item.id === id ? updated : item);
          await env.NEWS_KV.put(PRODUCT_GENRES_KEY, JSON.stringify(next));
          return json({ genres: next });
        }

        if (request.method === "DELETE") {
          const next = genres.filter((item) => item.id !== id);
          await env.NEWS_KV.put(PRODUCT_GENRES_KEY, JSON.stringify(next));
          return json({ genres: next });
        }
      }

      if (path === "/logos" && request.method === "PUT") {
        await requireAdmin(request, env);
        const body = await request.json();
        const logos = validateLogos(body.logos);
        await env.NEWS_KV.put(LOGOS_KEY, JSON.stringify(logos));
        return json({ logos });
      }

      if (path === "/site-texts" && request.method === "PUT") {
        await requireAdmin(request, env);
        const body = await request.json();
        const texts = validateSiteTexts(body.texts);
        await env.NEWS_KV.put(SITE_TEXTS_KEY, JSON.stringify(texts));
        return json({ texts });
      }

      if (path === "/logos" && request.method === "POST") {
        await requireAdmin(request, env);
        const logo = validateLogo(await request.json());
        const logos = await getLogos(env);
        const next = [...logos, { ...logo, id: logo.id || crypto.randomUUID() }];
        await env.NEWS_KV.put(LOGOS_KEY, JSON.stringify(next));
        return json({ logos: next });
      }

      if (path.startsWith("/logos/")) {
        await requireAdmin(request, env);
        const id = decodeURIComponent(path.split("/").pop());
        const logos = await getLogos(env);

        if (request.method === "PUT") {
          const updated = validateLogo({ ...(await request.json()), id });
          const next = logos.map((item) => item.id === id ? updated : item);
          await env.NEWS_KV.put(LOGOS_KEY, JSON.stringify(next));
          return json({ logos: next });
        }

        if (request.method === "DELETE") {
          const next = logos.filter((item) => item.id !== id);
          await env.NEWS_KV.put(LOGOS_KEY, JSON.stringify(next));
          return json({ logos: next });
        }
      }

      return json({ error: "Not found" }, 404);
    } catch (error) {
      const status = error.status || 500;
      return json({ error: error.message || "Server error" }, status);
    }
  }
};

async function getArticles(env) {
  const stored = await env.NEWS_KV.get(ARTICLES_KEY, "json");
  const articles = Array.isArray(stored) ? stored : DEFAULT_ARTICLES;
  return articles.sort((a, b) => String(b.date).localeCompare(String(a.date)));
}

async function getHistory(env) {
  const stored = await env.NEWS_KV.get(HISTORY_KEY, "json");
  return sortHistory(Array.isArray(stored) ? stored : []);
}

async function getProducts(env) {
  const stored = await env.NEWS_KV.get(PRODUCTS_KEY, "json");
  return Array.isArray(stored) ? stored : DEFAULT_PRODUCTS;
}

async function getProductGenres(env) {
  const stored = await env.NEWS_KV.get(PRODUCT_GENRES_KEY, "json");
  return Array.isArray(stored) ? validateProductGenres(stored) : DEFAULT_PRODUCT_GENRES;
}

async function getLogos(env) {
  const stored = await env.NEWS_KV.get(LOGOS_KEY, "json");
  return Array.isArray(stored) ? stored : DEFAULT_LOGOS;
}

async function getSiteTexts(env) {
  const stored = await env.NEWS_KV.get(SITE_TEXTS_KEY, "json");
  const storedMap = new Map(Array.isArray(stored) ? stored.map((item) => [item.key, item.value]) : []);
  return DEFAULT_SITE_TEXTS.map((item) => ({
    ...item,
    value: storedMap.has(item.key) ? String(storedMap.get(item.key)) : item.value
  }));
}

async function recordAnalyticsEvent(env, value) {
  const event = validateAnalyticsEvent(value);
  if (!event.path) return;
  const key = `${ANALYTICS_PREFIX}${event.date}`;
  const current = await env.NEWS_KV.get(key, "json");
  const bucket = normalizeAnalyticsBucket(current, event.date);

  bucket.pageviews += 1;
  bucket.lastUpdated = new Date().toISOString();
  increment(bucket.pages, event.path);
  increment(bucket.referrers, event.referrer || "Direct");
  increment(bucket.devices, event.device);

  if (event.sessionId) {
    bucket.sessions[event.sessionId] = 1;
    if (Object.keys(bucket.sessions).length > MAX_ANALYTICS_SESSIONS) {
      bucket.sessions = Object.fromEntries(Object.keys(bucket.sessions).slice(-MAX_ANALYTICS_SESSIONS).map((id) => [id, 1]));
    }
  }

  if (event.previousPath && event.previousPath !== event.path) {
    increment(bucket.flows, `${event.previousPath} → ${event.path}`);
  }

  await env.NEWS_KV.put(key, JSON.stringify(bucket), {
    expirationTtl: 60 * 60 * 24 * 120
  });
}

async function getAnalyticsSummary(env, days) {
  const dates = recentDates(days);
  const buckets = await Promise.all(dates.map(async (date) => normalizeAnalyticsBucket(await env.NEWS_KV.get(`${ANALYTICS_PREFIX}${date}`, "json"), date)));
  const totals = {
    pageviews: 0,
    visitors: 0,
    pages: {},
    referrers: {},
    flows: {},
    devices: {}
  };

  const daily = buckets.map((bucket) => {
    const visitors = Object.keys(bucket.sessions || {}).length;
    totals.pageviews += bucket.pageviews || 0;
    totals.visitors += visitors;
    mergeCounts(totals.pages, bucket.pages);
    mergeCounts(totals.referrers, bucket.referrers);
    mergeCounts(totals.flows, bucket.flows);
    mergeCounts(totals.devices, bucket.devices);
    return {
      date: bucket.date,
      pageviews: bucket.pageviews || 0,
      visitors
    };
  });

  return {
    days,
    generatedAt: new Date().toISOString(),
    totals: {
      pageviews: totals.pageviews,
      visitors: totals.visitors,
      avgViewsPerVisitor: totals.visitors ? Number((totals.pageviews / totals.visitors).toFixed(2)) : 0
    },
    daily,
    pages: topCounts(totals.pages, 12),
    referrers: topCounts(totals.referrers, 8),
    flows: topCounts(totals.flows, 10),
    devices: topCounts(totals.devices, 6)
  };
}

function validateArticles(value) {
  if (!Array.isArray(value)) throw httpError("articles must be an array", 400);
  return value.map(validateArticle);
}

function validateArticle(value) {
  const article = {
    id: String(value.id || crypto.randomUUID()),
    title: String(value.title || "").trim(),
    category: String(value.category || "corporate").trim(),
    date: String(value.date || "").trim(),
    excerpt: String(value.excerpt || "").trim(),
    link: String(value.link || "").trim(),
    emoji: String(value.emoji || "📰").trim(),
    image: String(value.image || "").trim(),
    featured: Boolean(value.featured)
  };

  if (!article.title || !article.date || !article.excerpt) {
    throw httpError("title, date, and excerpt are required", 400);
  }
  if (!["corporate", "service", "partnership", "event"].includes(article.category)) {
    throw httpError("invalid category", 400);
  }
  if (article.link) {
    try {
      const url = new URL(article.link);
      if (!["http:", "https:"].includes(url.protocol)) throw new Error("invalid protocol");
    } catch {
      throw httpError("invalid link", 400);
    }
  }
  if (article.image) {
    if (!/^data:image\/(png|jpe?g|webp|gif);base64,/i.test(article.image)) {
      throw httpError("invalid image", 400);
    }
    if (article.image.length > 1800000) {
      throw httpError("image is too large", 400);
    }
  }
  return article;
}

function validateHistory(value) {
  if (!Array.isArray(value)) throw httpError("history must be an array", 400);
  return sortHistory(value.map(validateHistoryItem));
}

function validateHistoryItem(value) {
  const item = {
    id: String(value.id || crypto.randomUUID()),
    year: String(value.year || "").trim(),
    month: String(value.month || "").trim().padStart(2, "0"),
    content: String(value.content || "").trim()
  };

  if (!/^\d{4}$/.test(item.year)) throw httpError("invalid year", 400);
  if (!/^(0[1-9]|1[0-2])$/.test(item.month)) throw httpError("invalid month", 400);
  if (!item.content) throw httpError("content is required", 400);
  return item;
}

function validateProducts(value) {
  if (!Array.isArray(value)) throw httpError("products must be an array", 400);
  return value.map(validateProduct);
}

function validateProductGenres(value) {
  if (!Array.isArray(value)) throw httpError("genres must be an array", 400);
  const seen = new Set();
  return value.map(validateProductGenre).filter((genre) => {
    if (seen.has(genre.name)) return false;
    seen.add(genre.name);
    return true;
  });
}

function validateProductGenre(value) {
  const genre = {
    id: String(value.id || crypto.randomUUID()),
    name: String(value.name || "").trim()
  };
  if (!genre.name) throw httpError("genre name is required", 400);
  if (genre.name.length > 40) throw httpError("genre name is too long", 400);
  return genre;
}

function validateProduct(value) {
  const product = {
    id: String(value.id || crypto.randomUUID()),
    title: String(value.title || "").trim(),
    description: String(value.description || "").trim(),
    category: String(value.category || "platform").trim(),
    genre: String(value.genre || "").trim(),
    logo: String(value.logo || "").trim(),
    link: String(value.link || "").trim(),
    linkType: String(value.linkType || "internal").trim()
  };

  if (!product.title || !product.description || !product.genre) {
    throw httpError("title, description, and genre are required", 400);
  }
  if (!["platform", "industry", "partner"].includes(product.category)) {
    throw httpError("invalid category", 400);
  }
  if (!["internal", "external"].includes(product.linkType)) {
    throw httpError("invalid link type", 400);
  }
  if (product.link) {
    if (product.linkType === "external") {
      try {
        const url = new URL(product.link);
        if (!["http:", "https:"].includes(url.protocol)) throw new Error("invalid protocol");
      } catch {
        throw httpError("invalid link", 400);
      }
    } else if (!/^(#|\/|\.{1,2}\/|[a-z0-9_-]+\/)/i.test(product.link)) {
      throw httpError("invalid internal link", 400);
    }
  }
  if (product.logo) {
    if (!/^data:image\/(png|jpe?g|webp|gif|svg\+xml);base64,/i.test(product.logo)) {
      throw httpError("invalid logo", 400);
    }
    if (product.logo.length > 900000) {
      throw httpError("logo is too large", 400);
    }
  }
  return product;
}

function validateAnalyticsEvent(value) {
  const path = normalizeAnalyticsPath(value.path || "/");
  const previousPath = normalizeAnalyticsPath(value.previousPath || "");
  return {
    date: new Date().toISOString().slice(0, 10),
    path,
    previousPath: previousPath === path ? "" : previousPath,
    referrer: normalizeReferrer(value.referrer || ""),
    sessionId: String(value.sessionId || "").replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 80),
    device: normalizeDevice(value.device || value.userAgent || "")
  };
}

function normalizeAnalyticsPath(value) {
  const path = String(value || "").trim().slice(0, 140);
  if (!path || path.startsWith("/admin")) return "";
  if (path === "/index.html") return "/";
  return path.startsWith("/") ? path : `/${path}`;
}

function normalizeReferrer(value) {
  const referrer = String(value || "").trim();
  if (!referrer) return "Direct";
  try {
    const url = new URL(referrer);
    if (/suho-site\.pages\.dev$/i.test(url.hostname)) return "Internal";
    return url.hostname.replace(/^www\./i, "").slice(0, 80);
  } catch {
    return referrer.slice(0, 80);
  }
}

function normalizeDevice(value) {
  const source = String(value || "").toLowerCase();
  if (/mobile|iphone|android/.test(source)) return "Mobile";
  if (/ipad|tablet/.test(source)) return "Tablet";
  return "Desktop";
}

function normalizeAnalyticsBucket(value, date) {
  const bucket = value && typeof value === "object" ? value : {};
  return {
    date,
    pageviews: Number(bucket.pageviews) || 0,
    pages: isPlainObject(bucket.pages) ? bucket.pages : {},
    referrers: isPlainObject(bucket.referrers) ? bucket.referrers : {},
    flows: isPlainObject(bucket.flows) ? bucket.flows : {},
    devices: isPlainObject(bucket.devices) ? bucket.devices : {},
    sessions: isPlainObject(bucket.sessions) ? bucket.sessions : {},
    lastUpdated: String(bucket.lastUpdated || "")
  };
}

function recentDates(days) {
  return Array.from({ length: days }, (_, index) => {
    const date = new Date();
    date.setUTCDate(date.getUTCDate() - (days - index - 1));
    return date.toISOString().slice(0, 10);
  });
}

function increment(target, key) {
  if (!key) return;
  target[key] = (Number(target[key]) || 0) + 1;
}

function mergeCounts(target, source) {
  Object.entries(source || {}).forEach(([key, count]) => {
    target[key] = (Number(target[key]) || 0) + (Number(count) || 0);
  });
}

function topCounts(source, limit) {
  return Object.entries(source || {})
    .map(([label, value]) => ({ label, value: Number(value) || 0 }))
    .filter((item) => item.label && item.value > 0)
    .sort((a, b) => b.value - a.value)
    .slice(0, limit);
}

function validateLogos(value) {
  if (!Array.isArray(value)) throw httpError("logos must be an array", 400);
  return value.map(validateLogo);
}

function validateSiteTexts(value) {
  if (!Array.isArray(value)) throw httpError("texts must be an array", 400);
  const allowed = new Map(DEFAULT_SITE_TEXTS.map((item) => [item.key, item]));
  return value.map((item) => {
    const key = String(item.key || "").trim();
    const template = allowed.get(key);
    if (!template) throw httpError("invalid text key", 400);
    const text = {
      key,
      label: template.label,
      value: String(item.value || "").trim()
    };
    if (text.value.length > 1200) throw httpError("text is too long", 400);
    return text;
  });
}

function validateLogo(value) {
  const logo = {
    id: String(value.id || crypto.randomUUID()),
    title: String(value.title || "").trim(),
    src: String(value.src || "").trim(),
    width: clampNumber(value.width, 80, 260, 160),
    scale: clampNumber(value.scale, 0.5, 4, 1),
    x: clampNumber(value.x, -100, 100, 0),
    y: clampNumber(value.y, -100, 100, 0)
  };

  if (!logo.title || !logo.src) throw httpError("title and image are required", 400);
  if (!isValidLogoSource(logo.src)) throw httpError("invalid logo image", 400);
  if (logo.src.startsWith("data:") && logo.src.length > 900000) {
    throw httpError("logo image is too large", 400);
  }
  return logo;
}

function isValidLogoSource(src) {
  if (/^data:image\/(png|jpe?g|webp|gif|svg\+xml);base64,/i.test(src)) return true;
  return /^assets\/logos\/[^?#]+\.(png|webp|jpe?g|gif|svg)$/i.test(src);
}

function clampNumber(value, min, max, fallback) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.min(max, Math.max(min, number));
}

function isPlainObject(value) {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

function sortHistory(history) {
  return [...history].sort((a, b) => {
    const left = `${b.year}.${b.month}`;
    const right = `${a.year}.${a.month}`;
    return left.localeCompare(right);
  });
}

async function requireAdmin(request, env) {
  const token = request.headers.get("Authorization")?.replace(/^Bearer\s+/i, "");
  if (!token || !await verifyToken(token, env)) throw httpError("Unauthorized", 401);
}

async function signToken(env) {
  const payload = {
    exp: Math.floor(Date.now() / 1000) + TOKEN_TTL_SECONDS,
    nonce: crypto.randomUUID()
  };
  const body = base64url(JSON.stringify(payload));
  const signature = await hmac(body, env.SESSION_SECRET);
  return `${body}.${signature}`;
}

async function verifyToken(token, env) {
  const [body, signature] = token.split(".");
  if (!body || !signature) return false;
  const expected = await hmac(body, env.SESSION_SECRET);
  if (signature !== expected) return false;
  const payload = JSON.parse(atob(body.replace(/-/g, "+").replace(/_/g, "/")));
  return payload.exp > Math.floor(Date.now() / 1000);
}

async function hmac(value, secret) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret || "missing-secret"),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(value));
  return base64url(sig);
}

async function sha256(value) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...CORS_HEADERS,
      "Content-Type": "application/json; charset=utf-8"
    }
  });
}

function httpError(message, status) {
  const error = new Error(message);
  error.status = status;
  return error;
}

function base64url(value) {
  const bytes = typeof value === "string" ? new TextEncoder().encode(value) : new Uint8Array(value);
  let binary = "";
  bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
