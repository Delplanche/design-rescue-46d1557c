import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "nl" | "en";
const KEY = "mvdz-lang";

type Ctx = { lang: Lang; setLang: (l: Lang) => void };
const LangContext = createContext<Ctx>({ lang: "nl", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("nl");

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    if (saved === "en" || saved === "nl") setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    localStorage.setItem(KEY, l);
    setLangState(l);
  };

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

/** Pick the Dutch or English variant. */
export function useT() {
  const { lang } = useLang();
  return (nl: string, en: string) => (lang === "en" ? en : nl);
}

export function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="theme-toggle lang-toggle" role="group" aria-label={lang === "en" ? "Language" : "Taal"}>
      {(["nl", "en"] as const).map((l) => (
        <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)} title={l === "nl" ? "Nederlands" : "English"}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
