// HolyCRM Help Center engine.
// Deliberately standalone (no ES module imports from ../assets/js) — this site
// is a separate, fully self-contained static folder: no backend, no build
// step, openable straight off disk (file://) or from any raw static host.
// Content lives as data, not files to fetch: assets/content-data.js (generated
// from help/content/**/*.md by help/generate-content-data.js) sets
// window.HELP_CONTENT_DATA = { manifest, files } before this script runs.
// Browsers block fetch() of local files under file://, so content is never
// fetched at runtime — only read from that inline object.

const DEFAULT_PAGE = "getting-started";
const LANG_STORAGE_KEY = "holycrm_help_lang";

// Chrome strings the engine itself renders (not page content, which lives in
// content/<locale>/*.md). Keep in sync with manifest.json's supported locales.
const UI_STRINGS = {
  en: {
    brandTag: "Help Center",
    searchPlaceholder: "Search guides…",
    loading: "Loading…",
    manifestError: "Couldn't load the Help Center",
    pageError: "Couldn't load this page. Try refreshing.",
    pageMissing: "That help page doesn't exist.",
    backHome: "Back to the Help Center home",
    noMatch: "No matching pages.",
    previous: "Previous",
    next: "Next",
    titleSuffix: " — HolyCRM Help",
  },
  es: {
    brandTag: "Centro de ayuda",
    searchPlaceholder: "Buscar guías…",
    loading: "Cargando…",
    manifestError: "No se pudo cargar el Centro de ayuda",
    pageError: "No se pudo cargar esta página. Intenta actualizar.",
    pageMissing: "Esa página de ayuda no existe.",
    backHome: "Volver al inicio del Centro de ayuda",
    noMatch: "No hay páginas que coincidan.",
    previous: "Anterior",
    next: "Siguiente",
    titleSuffix: " — Ayuda de HolyCRM",
  },
  "pt-BR": {
    brandTag: "Central de Ajuda",
    searchPlaceholder: "Pesquisar guias…",
    loading: "Carregando…",
    manifestError: "Não foi possível carregar a Central de Ajuda",
    pageError: "Não foi possível carregar esta página. Tente atualizar.",
    pageMissing: "Essa página de ajuda não existe.",
    backHome: "Voltar ao início da Central de Ajuda",
    noMatch: "Nenhuma página encontrada.",
    previous: "Anterior",
    next: "Próximo",
    titleSuffix: " — Ajuda do HolyCRM",
  },
  pt: {
    brandTag: "Central de Ajuda",
    searchPlaceholder: "Pesquisar guias…",
    loading: "A carregar…",
    manifestError: "Não foi possível carregar a Central de Ajuda",
    pageError: "Não foi possível carregar esta página. Tente atualizar.",
    pageMissing: "Essa página de ajuda não existe.",
    backHome: "Voltar ao início da Central de Ajuda",
    noMatch: "Nenhuma página encontrada.",
    previous: "Anterior",
    next: "Seguinte",
    titleSuffix: " — Ajuda do HolyCRM",
  },
};

let manifest = null;
let pageOrder = []; // flat list of page ids in nav order, for prev/next
let currentLocale = "en";

const sidebarEl = document.getElementById("help-sidebar-nav");
const contentEl = document.getElementById("help-content");
const crumbEl = document.getElementById("help-crumb");
const pagerEl = document.getElementById("help-pager");
const searchInput = document.getElementById("help-search-input");
const sidebarPanel = document.getElementById("help-sidebar");
const overlayEl = document.getElementById("help-overlay");
const menuToggle = document.getElementById("help-menu-toggle");
const langSelect = document.getElementById("help-lang-select");

function t(key) {
  const dict = UI_STRINGS[currentLocale] || UI_STRINGS.en;
  return dict[key] || UI_STRINGS.en[key] || key;
}

function localized(field, fallbackText) {
  if (!field) return fallbackText || "";
  return field[currentLocale] || field.en || fallbackText || "";
}

// Mirrors index.html's own detection (navigator.language, pt-BR collapsed
// specially, everything else collapsed to its base language) so a first-time
// visitor sees the same language here as in the main app.
function detectBrowserLocale() {
  const nav = navigator.language || navigator.userLanguage || "en";
  return /^pt-br$/i.test(nav) ? "pt-BR" : nav.toLowerCase().split("-")[0];
}

function resolveInitialLocale() {
  let stored = null;
  try {
    stored = localStorage.getItem(LANG_STORAGE_KEY);
  } catch (e) {
    /* private browsing / blocked storage — fall through */
  }
  const supported = manifest.locales.map((l) => l.code);
  if (stored && supported.includes(stored)) return stored;
  const detected = detectBrowserLocale();
  if (supported.includes(detected)) return detected;
  return manifest.defaultLocale || "en";
}

function setLocale(code) {
  currentLocale = code;
  try {
    localStorage.setItem(LANG_STORAGE_KEY, code);
  } catch (e) {
    /* ignore — just won't be remembered next visit */
  }
  document.documentElement.setAttribute("lang", code === "pt-BR" ? "pt-BR" : code);
  if (langSelect) langSelect.value = code;
  searchInput.placeholder = t("searchPlaceholder");
  const brandTagEl = document.getElementById("help-brand-tag");
  if (brandTagEl) brandTagEl.textContent = t("brandTag");
}

function buildLangSelect() {
  if (!langSelect) return;
  langSelect.innerHTML = "";
  for (const loc of manifest.locales) {
    const opt = document.createElement("option");
    opt.value = loc.code;
    opt.textContent = loc.label;
    langSelect.appendChild(opt);
  }
  langSelect.value = currentLocale;
  langSelect.addEventListener("change", () => {
    setLocale(langSelect.value);
    route();
  });
}

function currentPageId() {
  const hash = decodeURIComponent(location.hash.replace(/^#\/?/, ""));
  return hash || DEFAULT_PAGE;
}

function loadManifest() {
  const data = window.HELP_CONTENT_DATA;
  if (!data || !data.manifest) {
    throw new Error("content-data.js not loaded");
  }
  manifest = data.manifest;
  pageOrder = manifest.categories.flatMap((c) => c.pages);
}

function buildSidebar(filterText) {
  const q = (filterText || "").trim().toLowerCase();
  sidebarEl.innerHTML = "";
  const active = currentPageId();
  let anyVisible = false;

  for (const cat of manifest.categories) {
    const catLabel = localized(cat.label, cat.id);
    const matchingPages = cat.pages.filter((pid) => {
      const page = manifest.pages[pid];
      if (!page) return false;
      if (!q) return true;
      const title = localized(page.title, pid).toLowerCase();
      return title.includes(q) || catLabel.toLowerCase().includes(q);
    });
    if (matchingPages.length === 0) continue;
    anyVisible = true;

    const h2 = document.createElement("h2");
    h2.textContent = catLabel;
    sidebarEl.appendChild(h2);

    const ul = document.createElement("ul");
    ul.className = "help-nav-list";
    for (const pid of matchingPages) {
      const page = manifest.pages[pid];
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#/" + pid;
      a.textContent = localized(page.title, pid);
      if (pid === active) a.classList.add("active");
      li.appendChild(a);
      ul.appendChild(li);
    }
    sidebarEl.appendChild(ul);
  }

  if (!anyVisible) {
    const p = document.createElement("p");
    p.className = "help-nav-empty";
    p.textContent = t("noMatch");
    sidebarEl.appendChild(p);
  }
}

function renderCrumb(pageId) {
  const cat = manifest.categories.find((c) => c.pages.includes(pageId));
  const page = manifest.pages[pageId];
  crumbEl.innerHTML = "";
  const home = document.createElement("a");
  home.href = "#/" + DEFAULT_PAGE;
  home.textContent = t("brandTag");
  crumbEl.appendChild(home);
  crumbEl.append(" / ");
  if (cat) {
    const span = document.createElement("span");
    span.textContent = localized(cat.label, cat.id);
    crumbEl.appendChild(span);
    crumbEl.append(" / ");
  }
  const cur = document.createElement("span");
  cur.textContent = page ? localized(page.title, pageId) : pageId;
  crumbEl.appendChild(cur);
}

function renderPager(pageId) {
  const idx = pageOrder.indexOf(pageId);
  pagerEl.innerHTML = "";
  if (idx === -1) return;

  const prevId = idx > 0 ? pageOrder[idx - 1] : null;
  const nextId = idx < pageOrder.length - 1 ? pageOrder[idx + 1] : null;

  if (prevId) {
    const a = document.createElement("a");
    a.href = "#/" + prevId;
    a.innerHTML = `<span class="pager-label">&larr; ${t("previous")}</span>${localized(manifest.pages[prevId].title, prevId)}`;
    pagerEl.appendChild(a);
  } else {
    pagerEl.appendChild(document.createElement("span"));
  }

  if (nextId) {
    const a = document.createElement("a");
    a.href = "#/" + nextId;
    a.className = "pager-next";
    a.innerHTML = `<span class="pager-label">${t("next")} &rarr;</span>${localized(manifest.pages[nextId].title, nextId)}`;
    pagerEl.appendChild(a);
  }
}

function closeMobileSidebar() {
  sidebarPanel.classList.remove("open");
  overlayEl.classList.remove("open");
}

// Looks up a content file for the current locale, falling back to the
// default locale (English) when a page hasn't been translated yet rather
// than showing an error — partial translation coverage should never
// dead-end.
function localizedContent(file) {
  const files = (window.HELP_CONTENT_DATA && window.HELP_CONTENT_DATA.files) || {};
  const primary = files[`${currentLocale}/${file}`];
  if (primary != null) return primary;

  const fallbackLocale = manifest.defaultLocale || "en";
  if (currentLocale !== fallbackLocale) {
    const fallback = files[`${fallbackLocale}/${file}`];
    if (fallback != null) return fallback;
  }
  throw new Error("content not found: " + file);
}

function renderPage(pageId) {
  const page = manifest.pages[pageId];
  if (!page) {
    contentEl.innerHTML = `<p class="help-error">${t("pageMissing")}</p>
      <p><a href="#/${DEFAULT_PAGE}">${t("backHome")}</a></p>`;
    crumbEl.innerHTML = "";
    pagerEl.innerHTML = "";
    return;
  }
  try {
    const md = localizedContent(page.file);
    contentEl.innerHTML = window.marked.parse(md);
    document.title = localized(page.title, pageId) + t("titleSuffix");
  } catch (err) {
    contentEl.innerHTML = `<p class="help-error">${t("pageError")}</p>`;
  }
  renderCrumb(pageId);
  renderPager(pageId);
  buildSidebar(searchInput.value);
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  closeMobileSidebar();
}

function route() {
  renderPage(currentPageId());
}

function init() {
  try {
    loadManifest();
  } catch (err) {
    contentEl.innerHTML = `<p class="help-error">${UI_STRINGS.en.manifestError} (${err.message}).</p>`;
    return;
  }
  setLocale(resolveInitialLocale());
  buildLangSelect();
  buildSidebar("");
  route();

  window.addEventListener("hashchange", route);
  searchInput.addEventListener("input", () => buildSidebar(searchInput.value));
  menuToggle.addEventListener("click", () => {
    sidebarPanel.classList.toggle("open");
    overlayEl.classList.toggle("open");
  });
  overlayEl.addEventListener("click", closeMobileSidebar);
}

init();
