/* styledbyira | page logic. Reads window.SITE (data/looks.js) and renders everything. */
(function () {
  "use strict";

  const SITE = window.SITE || { looks: [], socials: [], categories: [] };
  const $ = (sel, root = document) => root.querySelector(sel);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Icons (Tabler outline, one family for the whole page) ---------- */
  const TABLER = "https://cdn.jsdelivr.net/npm/@tabler/icons@3/icons/outline/";
  const SOCIAL_ICON = {
    instagram: "brand-instagram", tiktok: "brand-tiktok", youtube: "brand-youtube", x: "brand-x",
    pinterest: "brand-pinterest", amazon: "brand-amazon", snapchat: "brand-snapchat", threads: "brand-threads",
    facebook: "brand-facebook", email: "mail", website: "world"
  };
  const CATEGORY_ICON = {
    Dresses: "hanger", Tops: "shirt", Bottoms: "hanger", Sets: "hanger", Outerwear: "jacket",
    Shoes: "shoe", Bags: "shopping-bag", Accessories: "sunglasses", Jewelry: "diamond", Beauty: "sparkles"
  };
  const icon = (name, cls = "") => {
    const s = document.createElement("span");
    s.className = "icon " + cls;
    s.style.setProperty("--i", `url("${TABLER}${name}.svg")`);
    s.setAttribute("aria-hidden", "true");
    return s;
  };

  /* ---------- Helpers ---------- */
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };

  // Adds the Amazon Associates tag to amazon.* product links that do not already carry one.
  function shopUrl(url) {
    try {
      const u = new URL(url);
      if (/(^|\.)amazon\./.test(u.hostname) && SITE.amazonTag && !u.searchParams.has("tag")) {
        u.searchParams.set("tag", SITE.amazonTag);
      }
      return u.toString();
    } catch { return url; }
  }

  function storeName(p) {
    if (p.store) return p.store;
    try {
      const h = new URL(p.url).hostname.replace(/^www\./, "");
      if (/amazon\.|amzn\.to/.test(h)) return "Amazon";
      return h.split(".")[0].replace(/^\w/, c => c.toUpperCase());
    } catch { return "Shop"; }
  }

  function formatDate(iso) {
    if (!iso) return "";
    const d = new Date(iso + "T00:00:00");
    return isNaN(d) ? iso : d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
  }

  // Turns a public video link into an embeddable URL. Returns null if it cannot.
  function embedUrl(platform, url) {
    if (!url) return null;
    let m;
    if (platform === "tiktok" && (m = url.match(/\/video\/(\d+)/))) return `https://www.tiktok.com/embed/v2/${m[1]}`;
    if (platform === "instagram" && (m = url.match(/instagram\.com\/(?:[^/]+\/)?(reel|reels|p)\/([A-Za-z0-9_-]+)/))) {
      return `https://www.instagram.com/${m[1] === "p" ? "p" : "reel"}/${m[2]}/embed/`;
    }
    if (platform === "youtube") {
      m = url.match(/(?:youtu\.be\/|v=|\/shorts\/|\/embed\/)([A-Za-z0-9_-]{6,})/);
      if (m) return `https://www.youtube.com/embed/${m[1]}`;
    }
    return null;
  }

  const PLATFORM_LABEL = { tiktok: "TikTok", instagram: "Instagram", youtube: "YouTube" };
  const platformsOf = look => Object.keys(look.video || {}).filter(k => look.video[k]);

  /* ---------- Static text ---------- */
  document.title = `${SITE.name} | Shop the Look`;
  $("#brand").textContent = SITE.name;
  $("#footerName").textContent = SITE.name;
  $("#year").textContent = new Date().getFullYear();
  if (SITE.headline) $("#headline").textContent = SITE.headline;
  if (SITE.intro) $("#intro").textContent = SITE.intro;
  if (SITE.about) $("#aboutText").textContent = SITE.about;
  if (SITE.disclosure) $("#disclosure").textContent = SITE.disclosure;

  const heroPhoto = $("#heroPhoto");
  heroPhoto.onerror = () => { heroPhoto.onerror = null; heroPhoto.src = "https://picsum.photos/seed/styledbyira-portrait/900/1125"; };
  heroPhoto.src = SITE.photo || "";

  /* ---------- Social buttons ---------- */
  function renderSocials(container) {
    container.replaceChildren(...(SITE.socials || []).map(s => {
      const a = el("a", "social");
      a.href = s.url;
      a.setAttribute("aria-label", s.label);
      a.title = s.label;
      if (!s.url.startsWith("mailto:")) { a.target = "_blank"; a.rel = "noopener"; }
      a.append(icon(SOCIAL_ICON[s.id] || "link"), el("span", "social__label", s.label));
      return a;
    }));
  }
  renderSocials($("#socialsBar"));
  renderSocials($("#socialsFooter"));

  /* ---------- Reveal on scroll (IntersectionObserver, no scroll listeners) ---------- */
  const io = reduceMotion ? null : new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
  const observe = node => { if (io) io.observe(node); else node.classList.add("is-visible"); };

  /* ---------- Looks ---------- */
  const looks = (SITE.looks || []).slice().sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  let activeCategory = "All";
  let query = "";

  const usedCategories = new Set(looks.flatMap(l => (l.products || []).map(p => p.category)).filter(Boolean));
  const categories = ["All", ...(SITE.categories || []).filter(c => usedCategories.has(c)),
    ...[...usedCategories].filter(c => !(SITE.categories || []).includes(c))];

  function renderChips() {
    $("#chips").replaceChildren(...categories.map(c => {
      const b = el("button", "chip", c);
      b.type = "button";
      b.setAttribute("aria-pressed", String(c === activeCategory));
      b.addEventListener("click", () => { activeCategory = c; renderChips(); renderLooks(); });
      return b;
    }));
  }

  function matches(look) {
    const inCat = activeCategory === "All" || (look.products || []).some(p => p.category === activeCategory);
    if (!inCat) return false;
    if (!query) return true;
    const hay = [look.title, ...(look.tags || []), ...(look.products || []).map(p => `${p.name} ${p.category}`)].join(" ").toLowerCase();
    return query.split(/\s+/).every(w => hay.includes(w));
  }

  function lookCard(look) {
    const card = el("button", "look");
    card.type = "button";
    card.setAttribute("aria-label", `${look.title}: watch the video and shop the pieces`);

    const media = el("div", "look__media");
    const img = el("img");
    img.src = look.image || `https://picsum.photos/seed/${look.id}/800/1000`;
    img.alt = look.title;
    img.loading = "lazy";
    img.width = 800; img.height = 1000;
    const play = el("span", "look__play");
    play.append(icon("player-play"));
    media.append(img, play);

    const body = el("div", "look__body");
    const count = (look.products || []).length;
    const meta = el("div", "look__meta");
    meta.append(el("span", null, `${count} ${count === 1 ? "piece" : "pieces"}`));
    if (look.date) meta.append(el("span", null, "·"), el("span", null, formatDate(look.date)));
    const plats = el("span", "look__platforms");
    platformsOf(look).forEach(p => plats.append(icon(SOCIAL_ICON[p])));
    meta.append(plats);
    body.append(el("h3", "look__title", look.title), meta);

    card.append(media, body);
    card.addEventListener("click", () => openLook(look));
    return card;
  }

  function renderLooks() {
    const grid = $("#looksGrid");
    const visible = looks.filter(matches);
    grid.replaceChildren(...visible.map(lookCard));
    grid.querySelectorAll(".look").forEach(observe);
    $("#looksEmpty").hidden = visible.length > 0;
  }

  $("#search").addEventListener("input", e => { query = e.target.value.trim().toLowerCase(); renderLooks(); });
  $("#clearFilters").addEventListener("click", () => {
    activeCategory = "All"; query = ""; $("#search").value = ""; renderChips(); renderLooks();
  });

  renderChips();
  renderLooks();

  /* ---------- All products ---------- */
  function productThumb(p, cls) {
    const t = el("div", cls);
    if (p.image) { const i = el("img"); i.src = p.image; i.alt = ""; i.loading = "lazy"; t.append(i); }
    else t.append(icon(CATEGORY_ICON[p.category] || "hanger"));
    return t;
  }

  function shopButton(p, small) {
    const a = el("a", "btn btn--primary" + (small ? " btn--sm" : ""));
    a.href = shopUrl(p.url);
    a.target = "_blank"; a.rel = "noopener sponsored";
    a.textContent = `Shop on ${storeName(p)}`;
    return a;
  }

  function renderProducts() {
    const seen = new Set();
    const items = [];
    looks.forEach(look => (look.products || []).forEach(p => {
      const key = p.url || p.name;
      if (seen.has(key)) return;
      seen.add(key);
      items.push({ p, look });
    }));

    $("#productsGrid").replaceChildren(...items.map(({ p, look }) => {
      const card = el("article", "product");
      const body = el("div", "product__body");
      const from = el("button", "product__from", `Seen in: ${look.title}`);
      from.type = "button";
      from.addEventListener("click", () => openLook(look));
      body.append(
        el("div", "product__name", p.name),
        el("div", "product__price", [p.price, p.category].filter(Boolean).join(" · ")),
        from,
        shopButton(p, true)
      );
      card.append(productThumb(p, "product__media"), body);
      return card;
    }));
    $("#productsGrid").querySelectorAll(".product").forEach(observe);
  }
  renderProducts();

  /* ---------- Modal ---------- */
  const modal = $("#modal");
  let lastFocus = null;

  function fallbackPanel(look, platform) {
    const fb = el("div", "modal__fallback");
    const i = el("img"); i.src = look.image; i.alt = look.title;
    fb.append(i);
    if (platform) {
      const a = el("a", "btn btn--primary");
      a.href = look.video[platform]; a.target = "_blank"; a.rel = "noopener";
      a.textContent = `Watch on ${PLATFORM_LABEL[platform]}`;
      fb.append(el("p", null, "This video opens in the app."), a);
    } else {
      fb.append(el("p", null, "No video linked for this look yet."));
    }
    return fb;
  }

  function showPlatform(look, platform) {
    const frame = $("#modalFrame");
    const src = embedUrl(platform, look.video[platform]);
    frame.replaceChildren();
    if (src) {
      const f = document.createElement("iframe");
      f.src = src;
      f.title = `${look.title} on ${PLATFORM_LABEL[platform]}`;
      f.allow = "autoplay; encrypted-media; picture-in-picture";
      f.setAttribute("allowfullscreen", "");
      f.loading = "lazy";
      frame.append(f);
    } else {
      frame.append(fallbackPanel(look, platform));
    }
    $("#modalTabs").querySelectorAll(".tab").forEach(t => t.setAttribute("aria-selected", String(t.dataset.platform === platform)));
  }

  function openLook(look) {
    lastFocus = document.activeElement;
    $("#modalTitle").textContent = look.title;
    const count = (look.products || []).length;
    $("#modalMeta").textContent = [look.date ? `Posted ${formatDate(look.date)}` : "", `${count} ${count === 1 ? "piece" : "pieces"} linked`].filter(Boolean).join(" · ");

    const plats = platformsOf(look);
    $("#modalTabs").replaceChildren(...plats.map(p => {
      const b = el("button", "tab");
      b.type = "button"; b.dataset.platform = p; b.setAttribute("role", "tab");
      b.append(icon(SOCIAL_ICON[p]), el("span", null, PLATFORM_LABEL[p]));
      b.addEventListener("click", () => showPlatform(look, p));
      return b;
    }));

    if (plats.length) showPlatform(look, plats[0]);
    else $("#modalFrame").replaceChildren(fallbackPanel(look, null));

    $("#modalProducts").replaceChildren(...(look.products || []).map(p => {
      const row = el("div", "item");
      const info = el("div");
      info.append(el("div", "item__name", p.name), el("div", "item__price", [p.price, storeName(p)].filter(Boolean).join(" · ")));
      row.append(productThumb(p, "item__thumb"), info, shopButton(p, true));
      return row;
    }));

    modal.hidden = false;
    document.body.classList.add("modal-open");
    history.replaceState(null, "", `#${look.id}`);
    $(".modal__close").focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    $("#modalFrame").replaceChildren();   // removes the iframe, which stops the video
    history.replaceState(null, "", location.pathname + location.search);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  modal.querySelectorAll("[data-close]").forEach(n => n.addEventListener("click", closeModal));
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

  // Deep link: yoursite.com/#look-005 opens that look directly (handy for video captions and bios).
  function openFromHash() {
    const hashLook = looks.find(l => `#${l.id}` === location.hash);
    if (hashLook) openLook(hashLook);
  }
  openFromHash();
  window.addEventListener("hashchange", openFromHash);
})();
