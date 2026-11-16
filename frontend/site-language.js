const SiteLanguageContext = q.createContext(null);
const siteMessages = {
  zh: {
    projectLinks: "项目链接",
    comingSoon: "即将推出",
    contents: "页面目录",
    viewCases: "查看案例 ",
    scrollToExplore: "滚动展开",
    mediaPlaceholder: " · 展示占位（视频 / 截图 / 交互）",
    view: "视图",
    benchmarkPlaceholder: "Benchmark 评测图预留区域",
    fullscreen: "全屏",
    exitFullscreen: "退出全屏",
    loadDemo: "点击加载交互演示",
    loadingDemo: "正在加载演示…",
    switchLanguage: "切换为英文",
    contact: "联系",
    citation: "引用",
    copyCitation: "复制 BibTeX",
    copiedCitation: "已复制",
    citationCopyFailed: "请选中下方引用并手动复制。",
    pageTitle: "书生 S2.1 Flash",
    pageDescription: "以推理探索，以行动求证。",
  },
  en: {
    projectLinks: "Project links",
    comingSoon: "Coming soon",
    contents: "On this page",
    viewCases: "Explore demos ",
    scrollToExplore: "Scroll to explore",
    mediaPlaceholder: " · Media placeholder (video / image / interactive demo)",
    view: "View",
    benchmarkPlaceholder: "Placeholder for the benchmark chart",
    fullscreen: "Fullscreen",
    exitFullscreen: "Exit fullscreen",
    loadDemo: "Click to load interactive demo",
    loadingDemo: "Loading demo…",
    switchLanguage: "Switch to Chinese",
    contact: "Contact",
    citation: "Citation",
    copyCitation: "Copy BibTeX",
    copiedCitation: "Copied",
    citationCopyFailed: "Select the citation below to copy it manually.",
    pageTitle: "Sage S2.1 Flash",
    pageDescription: "Explore through reasoning. Verify through action.",
  },
};

function readSiteLanguage() {
  try {
    return window.localStorage.getItem("sage-2.1-language-v1") === "en" ? "en" : "zh";
  } catch {
    return "zh";
  }
}

function useSiteLabels() {
  return siteMessages[q.useContext(SiteLanguageContext).language];
}

function SiteLanguageSwitch() {
  const { language, setLanguage } = q.useContext(SiteLanguageContext);
  const targetLanguage = language === "zh" ? "en" : "zh";
  return x.jsx("button", {
    type: "button",
    className: "nav__quicklink nav__language",
    lang: targetLanguage === "zh" ? "zh-CN" : "en",
    "aria-label": siteMessages[language].switchLanguage,
    title: siteMessages[language].switchLanguage,
    onClick: () => setLanguage(targetLanguage),
    children: x.jsxs("span", {
      className: "nav__language-options",
      children: [
        x.jsx("span", {
          className: `nav__language-option ${language === "zh" ? "is-active" : ""}`,
          children: language === "en" ? "ZH" : "中文",
        }),
        x.jsx("span", {
          className: `nav__language-option ${language === "en" ? "is-active" : ""}`,
          children: "EN",
        }),
      ],
    }),
  });
}

function SiteCitation() {
  const labels = useSiteLabels();
  const [status, setStatus] = q.useState("");
  const copy = async () => {
    let copied = false;
    try {
      if (window.isSecureContext && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(siteCitationBibtex);
        copied = true;
      }
    } catch {}
    if (!copied) {
      const previousFocus = document.activeElement;
      const field = document.createElement("textarea");
      field.value = siteCitationBibtex;
      field.setAttribute("readonly", "");
      field.style.cssText = "position:fixed;left:-9999px;top:0;opacity:0";
      document.body.appendChild(field);
      try {
        field.select();
        copied = document.execCommand("copy");
      } catch {} finally {
        field.remove();
        previousFocus?.focus({ preventScroll: true });
      }
    }
    setStatus(copied ? "copiedCitation" : "citationCopyFailed");
  };
  return x.jsxs("section", {
    className: "site-citation",
    "aria-labelledby": "citation-title",
    children: [
      x.jsxs("div", {
        className: "site-citation__header",
        children: [
          x.jsx("h2", { id: "citation-title", className: "h", children: labels.citation }),
          x.jsx("button", { type: "button", className: "site-citation__copy", onClick: copy, children: labels.copyCitation }),
        ],
      }),
      x.jsx("p", {
        className: "site-citation__paper",
        children: x.jsx("a", { href: "https://arxiv.org/abs/2609.15818", children: "Sage S2.1 Flash: The Dawn of Agentic Superintelligence" }),
      }),
      x.jsx("pre", {
        className: "site-citation__code",
        tabIndex: 0,
        "aria-label": "BibTeX",
        children: x.jsx("code", { children: siteCitationBibtex }),
      }),
      x.jsx("span", { className: "site-citation__status", role: "status", children: status ? labels[status] : "" }),
    ],
  });
}

function SiteApp() {
  const [language, setLanguage] = q.useState(readSiteLanguage);
  q.useEffect(() => {
    document.documentElement.lang = language === "en" ? "en" : "zh-CN";
    document.title = siteMessages[language].pageTitle;
    document.querySelector('meta[name="description"]').content = siteMessages[language].pageDescription;
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", siteMessages[language].pageTitle);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", siteMessages[language].pageDescription);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", siteMessages[language].pageTitle);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", siteMessages[language].pageDescription);
    try {
      window.localStorage.setItem("sage-2.1-language-v1", language);
    } catch {}
  }, [language]);
  return x.jsx(SiteLanguageContext.Provider, {
    value: { language, setLanguage },
    children: x.jsxs(x.Fragment, {
      children: [
        x.jsx(Qv, { content: language === "en" ? siteEnglishContent : En }),

        x.jsxs("footer", {
          className: "site-footer wrap",
          children: [
            x.jsx("span", { children: siteMessages[language].pageTitle }),
            x.jsx("a", { href: "https://intern-ai.org.cn/home", children: "Intern AI ↗", target: "_blank", rel: "noreferrer" }),
          ],
        }),
      ],
    }),
  });
}
