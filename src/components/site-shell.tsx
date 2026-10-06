import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LangToggle, useT } from "@/lib/i18n";
import { useContent, statusLabel } from "@/lib/content";

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const t = useT();
  const { researchPillars } = useContent();
  const close = () => setOpen(false);
  return <div className="dossier-canvas min-h-screen text-foreground">
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="site-wordmark" aria-label={t("De Marktplaats van de Ziel, voorpagina", "The Marketplace of the Soul, home")}>
          <span>{t("De Marktplaats", "The Marketplace")}</span><span>{t("van de Ziel", "of the Soul")}</span>
        </Link>
        <nav className="desktop-nav" aria-label={t("Hoofdnavigatie", "Main navigation")}>
          <Link to="/" className="nav-link" activeOptions={{ exact: true }}>Manifest</Link>
          <div className="nav-group">
            <Link to="/onderzoek" className="nav-link">{t("Onderzoek", "Research")}</Link>
            <div className="nav-panel" role="menu">
              {researchPillars.map((pillar) => (
                <Link key={pillar.slug} to="/onderzoek/$slug" params={{ slug: pillar.slug }} role="menuitem">
                  <code>{pillar.number}</code><span>{pillar.title}</span>
                </Link>
              ))}
              <Link to="/editie" role="menuitem">
                <code>07</code><span>{t("Integraal overzicht · Onderzoekseditie", "Complete overview · Research Edition")}</span>
              </Link>
            </div>
          </div>
          <Link to="/archief" className="nav-link nav-link-accent">{t("Bibliotheek / Archief", "Library / Archive")}</Link>
        </nav>
        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? t("Menu sluiten", "Close menu") : t("Menu openen", "Open menu")}>{open ? <X/> : <Menu/>}</Button>
        </div>
      </div>
      {open && <nav className="mobile-nav" aria-label={t("Mobiele navigatie", "Mobile navigation")}>
        <Link to="/" onClick={close}>Manifest</Link>
        <Link to="/onderzoek" onClick={close}>{t("Onderzoek", "Research")}</Link>
        {researchPillars.map((pillar) => (
          <Link key={pillar.slug} to="/onderzoek/$slug" params={{ slug: pillar.slug }} onClick={close} className="mobile-sub">
            <code>{pillar.number}</code> {pillar.title}
          </Link>
        ))}
        <Link to="/editie" onClick={close} className="mobile-sub"><code>07</code> {t("Integraal overzicht", "Complete overview")}</Link>
        <Link to="/archief" onClick={close}>{t("Bibliotheek / Archief", "Library / Archive")}</Link>
      </nav>}
    </header>
    {children}
    <footer className="archive-footer">
      <div className="footer-inner">
        <section className="footer-project">
          <p className="footer-kicker">{t("Onafhankelijke onderzoeksbibliotheek", "Independent research library")}</p>
          <p className="footer-title">{t("De Marktplaats van de Ziel", "The Marketplace of the Soul")}</p>
          <p>{t("Zes onderzoeksboeken en één pers-whitepaper · record-versie 2026.", "Six research books and one press white paper · record version 2026.")}</p>
        </section>
        <nav className="footer-sitemap" aria-label="Sitemap">
          <p className="footer-kicker">{t("Documentatie", "Documentation")}</p>
          <Link to="/">Manifest</Link><Link to="/onderzoek">{t("Onderzoek", "Research")}</Link>
          <Link to="/editie">{t("Onderzoekseditie", "Research Edition")}</Link><Link to="/archief">{t("Bibliotheek", "Library")}</Link>
          <Link to="/juridisch">{t("Juridisch", "Legal")}</Link><Link to="/claims">{t("Claimregister", "Claims register")}</Link>
          <Link to="/bronnen">{t("Bronnen", "Sources")}</Link><Link to="/editie/bronregister">{t("Bronregister", "Source registry")} W01–W26</Link>
          <Link to="/methodologie">{t("Methode & correcties", "Method & corrections")}</Link>
        </nav>
        <section className="footer-colophon">
          <p className="footer-kicker">{t("Colofon", "Colophon")}</p>
          <a className="colophon-platform" href="https://delplanche.cloud" target="_blank" rel="noreferrer">{t("Architectuur & Platform door Delplanche", "Architecture & Platform by Delplanche")} <ArrowUpRight/></a>
        </section>
      </div>
      <div className="footer-base"><p>{t("© 2026 · Publiek archief voor controle en debat. Vrij verspreidbaar voor educatieve en onderzoeksdoeleinden.", "© 2026 · Public archive for scrutiny and debate. Freely distributable for educational and research purposes.")}</p></div>
    </footer>
  </div>;
}

export function StatusBadge({ status }: { status: string }) {
  const t = useT();
  const key = status.toLowerCase().replaceAll(" ", "-");
  return <span className={`status-badge status-${key}`}><i />{t(status, statusLabel[status] ?? status)}</span>;
}
