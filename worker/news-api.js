const ARTICLES_KEY = "articles";
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

      if (request.method === "POST" && path === "/login") {
        const body = await request.json().catch(() => ({}));
        const hash = await sha256(String(body.password || ""));
        if (!env.ADMIN_PASSWORD_HASH || hash !== env.ADMIN_PASSWORD_HASH) {
          return json({ error: "Invalid password" }, 401);
        }
        return json({ token: await signToken(env) });
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
