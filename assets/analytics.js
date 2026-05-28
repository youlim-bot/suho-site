(function () {
  const API_URL = "https://suho-site-news-api.biz-e3c.workers.dev";
  const sessionKey = "suho_analytics_session";
  const previousKey = "suho_analytics_previous_path";

  if (location.pathname.startsWith("/admin")) return;
  if (navigator.doNotTrack === "1" || window.doNotTrack === "1") return;

  function sessionId() {
    try {
      let value = localStorage.getItem(sessionKey);
      if (!value) {
        value = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
        localStorage.setItem(sessionKey, value);
      }
      return value;
    } catch {
      return "";
    }
  }

  function currentPath() {
    const path = location.pathname === "/index.html" ? "/" : location.pathname;
    return `${path}${location.hash && path === "/" ? location.hash : ""}`;
  }

  function previousPath() {
    try {
      return sessionStorage.getItem(previousKey) || "";
    } catch {
      return "";
    }
  }

  function rememberPath(path) {
    try {
      sessionStorage.setItem(previousKey, path);
    } catch {
      // Ignore storage restrictions.
    }
  }

  function device() {
    const width = window.innerWidth || 0;
    if (width <= 767) return "Mobile";
    if (width <= 1024) return "Tablet";
    return "Desktop";
  }

  function track() {
    const path = currentPath();
    const payload = {
      sessionId: sessionId(),
      path,
      previousPath: previousPath(),
      referrer: document.referrer || "",
      device: device(),
      userAgent: navigator.userAgent || ""
    };

    const body = JSON.stringify(payload);
    if (navigator.sendBeacon) {
      const blob = new Blob([body], { type: "application/json" });
      navigator.sendBeacon(`${API_URL}/analytics/event`, blob);
    } else {
      fetch(`${API_URL}/analytics/event`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true
      }).catch(() => {});
    }
    rememberPath(path);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", track, { once: true });
  } else {
    track();
  }
})();
