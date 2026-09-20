import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { researchPillars } from "@/lib/research-content";

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className="dossier-canvas min-h-screen text-foreground">
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="site-wordmark" aria-label="De Marktplaats van de Ziel, voorpagina">
          <span>De Marktplaats</span><span>van de Ziel</span>
        </Link>
        <nav className="desktop-nav" aria-label="Hoofdnavigatie">
          <Link to="/" className="nav-link" activeOptions={{ exact: true }}>Manifest</Link>
          <div className="nav-group">
            <Link to="/onderzoek" className="nav-link">Onderzoek</Link>
            <div className="nav-panel" role="menu">
              {researchPillars.map((pillar) => (
                <Link key={pillar.slug} to="/onderzoek/$slug" params={{ slug: pillar.slug }} role="menuitem">
                  <code>{pillar.number}</code><span>{pillar.title}</span>
                </Link>
              ))}
            </div>
          </div>
          <Link to="/archief" className="nav-link nav-link-accent">Bibliotheek / Archief</Link>
          <Link to="/editie" className="nav-link">Onderzoekseditie</Link>
        </nav>
        <Button variant="ghost" size="icon" className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Menu sluiten" : "Menu openen"}>{open ? <X/> : <Menu/>}</Button>
      </div>
      {open && <nav className="mobile-nav" aria-label="Mobiele navigatie">
        <Link to="/" onClick={() => setOpen(false)}>Manifest</Link>
        <Link to="/onderzoek" onClick={() => setOpen(false)}>Onderzoek</Link>
        {researchPillars.map((pillar) => (
          <Link key={pillar.slug} to="/onderzoek/$slug" params={{ slug: pillar.slug }} onClick={() => setOpen(false)} className="mobile-sub">
            <code>{pillar.number}</code> {pillar.title}
          </Link>
        ))}
        <Link to="/archief" onClick={() => setOpen(false)}>Bibliotheek / Archief</Link>
        <Link to="/editie" onClick={() => setOpen(false)}>Onderzoekseditie</Link>
      </nav>}
    </header>
    {children}
    <footer className="archive-footer">
      <div className="footer-inner">
        <section className="footer-project">
          <p className="footer-kicker">Onafhankelijke onderzoeksbibliotheek</p>
          <p className="footer-title">De Marktplaats van de Ziel</p>
          <p>Zes onderzoeksboeken en één pers-whitepaper · record-versie 2026.</p>
        </section>
        <nav className="footer-sitemap" aria-label="Sitemap">
          <p className="footer-kicker">Documentatie</p>
          <Link to="/">Manifest</Link><Link to="/onderzoek">Onderzoek</Link>
          <Link to="/editie">Onderzoekseditie</Link><Link to="/archief">Bibliotheek</Link>
          <Link to="/juridisch">Juridisch</Link><Link to="/claims">Claimregister</Link>
          <Link to="/bronnen">Bronnen</Link><Link to="/methodologie">Methode & correcties</Link>
        </nav>
        <section className="footer-colophon">
          <p className="footer-kicker">Colofon</p>
          <p className="colophon-author">Jona Zeno De Smet</p>
          <a className="colophon-platform" href="https://delplanche.cloud" target="_blank" rel="noreferrer">Architectuur & Platform door Delplanche <ArrowUpRight/></a>
        </section>
      </div>
      <div className="footer-base"><p>© 2026 · Publiek archief voor controle en debat. Vrij verspreidbaar voor educatieve en onderzoeksdoeleinden.</p></div>
    </footer>
  </div>;
}

export function StatusBadge({ status }: { status: string }) {
  const key = status.toLowerCase().replaceAll(" ", "-");
  return <span className={`status-badge status-${key}`}><i />{status}</span>;
}