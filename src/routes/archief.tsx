import { useT, useLang } from "@/lib/i18n";
import { useContent } from "@/lib/content";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowDownToLine, ArrowRight, Search } from "lucide-react";
import { EditorialPage, SectionLabel } from "@/components/editorial-page";
import { formatPublicationDate, matchesQuery, publicationSection, type Publication } from "@/lib/publications";

type ArchiveSearch = { q?: string; categorie?: string };

export const Route = createFileRoute("/archief")({
  validateSearch: (search: Record<string, unknown>): ArchiveSearch => ({
    q: typeof search["q"] === "string" ? search["q"].slice(0, 120) : "",
    categorie: typeof search["categorie"] === "string" ? search["categorie"].slice(0, 40) : "",
  }),
  head: () => ({ meta: [
    { title: "Bibliotheek — De Marktplaats van de Ziel" },
    { name: "description", content: "Doorzoek en download de pers-whitepaper en de zes boeken van de Hexalogie." },
    { property: "og:title", content: "Bibliotheek — De Marktplaats van de Ziel" },
    { property: "og:description", content: "De enige officiële downloadplek voor de volledige Hexalogie en de pers-whitepaper." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
  errorComponent: () => <EditorialPage kind="Archief" title="Bibliotheek tijdelijk niet beschikbaar" deck="De publicatiegegevens konden niet worden geladen. Probeer het later opnieuw."><Link to="/onderzoek">Lees het onderzoek</Link></EditorialPage>,
  component: ArchivePage,
});

function PublicationCard({ publication }: { publication: Publication }) {
  const t = useT();
  const { lang } = useLang();
  return <article>
    <div className="publication-index">
      <span>{publication.code}</span>
      <code>PDF · {publication.kind}</code>
      <span className="category-badge">{publication.category}</span>
    </div>
    <div>
      <h2>{publication.title}</h2>
      {publication.subtitle && <p className="publication-subtitle">{publication.subtitle}</p>}
      <p>{publication.description}</p>
      <dl>
        <div><dt>{t("Formaat", "Format")}</dt><dd>{publication.format}</dd></div>
        <div><dt>{t("Omvang", "Length")}</dt><dd>{publication.page_count} {t("pagina’s", "pages")} · {publication.file_size}</dd></div>
        <div><dt>{t("Gepubliceerd", "Published")}</dt><dd>{lang === "en" ? new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(new Date(publication.published_on)) : formatPublicationDate(publication.published_on)}</dd></div>
        <div><dt>{t("Voor", "For")}</dt><dd>{publication.audience}</dd></div>
      </dl>
    </div>
    <a className="download-link" href={publication.pdf_path} download>{t("Download PDF", "Download PDF")} <ArrowDownToLine /></a>
  </article>;
}

function ArchivePage() {
  const search = Route.useSearch();
  const q = search.q ?? "";
  const categorie = search.categorie ?? "";
  const navigate = useNavigate({ from: "/archief" });
  const t = useT();
  const { publications } = useContent();
  const setSearch = (next: Partial<ArchiveSearch>) =>
    navigate({ search: (prev) => ({ ...prev, ...next }), replace: true });

  const categories = [...new Set(publications.map((item) => item.category))];
  const activeCategory = categories.includes(categorie) ? categorie : "";
  const filtered = publications.filter((item) =>
    matchesQuery(item, q) && (!activeCategory || item.category === activeCategory));
  const press = filtered.filter((item) => publicationSection(item) === "pers");
  const books = filtered.filter((item) => publicationSection(item) === "hexalogie");
  const editions = filtered.filter((item) => publicationSection(item) === "uitgave");

  return <EditorialPage kind="Archief" title={t("De Bibliotheek", "The Library")} deck={t("De pers-whitepaper, de zes onderzoeksboeken en de integrale uitgaven. Dit is de enige officiële downloadplek.", "The press white paper, the six research books and the complete editions. This is the only official download location.")}>
    <section>
      <SectionLabel>{t("Doorzoek het archief", "Search the archive")}</SectionLabel>
      <div className="archive-search">
        <label className="archive-search-field">
          <Search aria-hidden />
          <input
            type="search"
            value={q}
            onChange={(event) => setSearch({ q: event.target.value })}
            placeholder={t("Zoek op titel, categorie of trefwoord (bijv. carding, CRM, wetgeving)", "Search by title, category or keyword (e.g. carding, CRM, legislation)")}
            aria-label={t("Zoek in de bibliotheek", "Search the library")}
          />
        </label>
        <div className="archive-filters" role="group" aria-label={t("Filter op categorie", "Filter by category")}>
          <button type="button" className={activeCategory ? "" : "is-active"} onClick={() => setSearch({ categorie: "" })}>{t("Alles", "All")}</button>
          {categories.map((category) => <button key={category} type="button" className={activeCategory === category ? "is-active" : ""} onClick={() => setSearch({ categorie: activeCategory === category ? "" : category })}>{category}</button>)}
        </div>
        <p className="archive-count">{filtered.length} {t("van", "of")} {publications.length} {t("publicaties", "publications")}</p>
      </div>
    </section>

    {filtered.length === 0 && <section>
      <div className="archive-empty">
        <p>{t("Geen publicatie gevonden voor deze zoekopdracht.", "No publication found for this search.")}</p>
        <button type="button" onClick={() => setSearch({ q: "", categorie: "" })}>{t("Wis filters", "Clear filters")}</button>
      </div>
    </section>}

    {press.length > 0 && <section>
      <SectionLabel>{t("Startpunt · Pers", "Starting point · Press")}</SectionLabel>
      <div className="publication-ledger">{press.map((publication) => <PublicationCard key={publication.id} publication={publication} />)}</div>
    </section>}

    {books.length > 0 && <section>
      <SectionLabel>{t("De Hexalogie · Boek 01 tot 06", "The Hexalogy · Book 01 to 06")}</SectionLabel>
      <div className="publication-ledger">{books.map((publication) => <PublicationCard key={publication.id} publication={publication} />)}</div>
    </section>}

    {editions.length > 0 && <section>
      <SectionLabel>{t("Integrale uitgaven · dossier, summary en reader", "Complete editions · dossier, summary and reader")}</SectionLabel>
      <div className="publication-ledger">{editions.map((publication) => <PublicationCard key={publication.id} publication={publication} />)}</div>
    </section>}

    <section>
      <SectionLabel>{t("Openbare registers", "Public registers")}</SectionLabel>
      <nav className="archive-links">
        <Link to="/claims">{t("Claimregister", "Claims register")} <ArrowRight /></Link>
        <Link to="/bronnen">{t("Bronnenregister", "Source register")} <ArrowRight /></Link>
        <Link to="/methodologie">{t("Methodologie en correcties", "Methodology and corrections")} <ArrowRight /></Link>
      </nav>
    </section>

    <section>
      <SectionLabel>{t("Versiebeleid", "Version policy")}</SectionLabel>
      <div className="version-list"><div><time>{t("19 september 2026", "19 September 2026")}</time><strong>{t("Hexalogie 01", "Hexalogy 01")}</strong><p>{t("De definitieve reeks vervangt alle eerdere dossiers, readers en losse edities. Correcties worden centraal geregistreerd.", "The definitive series replaces all earlier dossiers, readers and separate editions. Corrections are registered centrally.")}</p></div></div>
    </section>
  </EditorialPage>;
}
