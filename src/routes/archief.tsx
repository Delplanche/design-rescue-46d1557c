import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowDownToLine, ArrowRight, Search } from "lucide-react";
import { EditorialPage, SectionLabel } from "@/components/editorial-page";
import { publications, formatPublicationDate, matchesQuery, publicationSection, type Publication } from "@/lib/publications";

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
        <div><dt>Formaat</dt><dd>{publication.format}</dd></div>
        <div><dt>Omvang</dt><dd>{publication.page_count} pagina’s · {publication.file_size}</dd></div>
        <div><dt>Gepubliceerd</dt><dd>{formatPublicationDate(publication.published_on)}</dd></div>
        <div><dt>Voor</dt><dd>{publication.audience}</dd></div>
      </dl>
    </div>
    <a className="download-link" href={publication.pdf_path} download>Download PDF <ArrowDownToLine /></a>
  </article>;
}

function ArchivePage() {
  const search = Route.useSearch();
  const q = search.q ?? "";
  const categorie = search.categorie ?? "";
  const navigate = useNavigate({ from: "/archief" });
  const setSearch = (next: Partial<ArchiveSearch>) =>
    navigate({ search: (prev) => ({ ...prev, ...next }), replace: true });

  const categories = [...new Set(publications.map((item) => item.category))];
  const activeCategory = categories.includes(categorie) ? categorie : "";
  const filtered = publications.filter((item) =>
    matchesQuery(item, q) && (!activeCategory || item.category === activeCategory));
  const press = filtered.filter((item) => publicationSection(item) === "pers");
  const books = filtered.filter((item) => publicationSection(item) === "hexalogie");
  const editions = filtered.filter((item) => publicationSection(item) === "uitgave");

  return <EditorialPage kind="Archief" title="De Bibliotheek" deck="Eén pers-whitepaper en zes onderzoeksboeken. Dit is de enige officiële downloadplek.">
    <section>
      <SectionLabel>Doorzoek het archief</SectionLabel>
      <div className="archive-search">
        <label className="archive-search-field">
          <Search aria-hidden />
          <input
            type="search"
            value={q}
            onChange={(event) => setSearch({ q: event.target.value })}
            placeholder="Zoek op titel, categorie of trefwoord (bijv. carding, CRM, wetgeving)"
            aria-label="Zoek in de bibliotheek"
          />
        </label>
        <div className="archive-filters" role="group" aria-label="Filter op categorie">
          <button type="button" className={activeCategory ? "" : "is-active"} onClick={() => setSearch({ categorie: "" })}>Alles</button>
          {categories.map((category) => <button key={category} type="button" className={activeCategory === category ? "is-active" : ""} onClick={() => setSearch({ categorie: activeCategory === category ? "" : category })}>{category}</button>)}
        </div>
        <p className="archive-count">{filtered.length} van {publications.length} publicaties</p>
      </div>
    </section>

    {filtered.length === 0 && <section>
      <div className="archive-empty">
        <p>Geen publicatie gevonden voor deze zoekopdracht.</p>
        <button type="button" onClick={() => setSearch({ q: "", categorie: "" })}>Wis filters</button>
      </div>
    </section>}

    {press.length > 0 && <section>
      <SectionLabel>Startpunt · Pers</SectionLabel>
      <div className="publication-ledger">{press.map((publication) => <PublicationCard key={publication.id} publication={publication} />)}</div>
    </section>}

    {books.length > 0 && <section>
      <SectionLabel>De Hexalogie · Boek 01 tot 06</SectionLabel>
      <div className="publication-ledger">{books.map((publication) => <PublicationCard key={publication.id} publication={publication} />)}</div>
    </section>}

    <section>
      <SectionLabel>Openbare registers</SectionLabel>
      <nav className="archive-links">
        <Link to="/claims">Claimregister <ArrowRight /></Link>
        <Link to="/bronnen">Bronnenregister <ArrowRight /></Link>
        <Link to="/methodologie">Methodologie en correcties <ArrowRight /></Link>
      </nav>
    </section>

    <section>
      <SectionLabel>Versiebeleid</SectionLabel>
      <div className="version-list"><div><time>19 september 2026</time><strong>Hexalogie 01</strong><p>De definitieve reeks vervangt alle eerdere dossiers, readers en losse edities. Correcties worden centraal geregistreerd.</p></div></div>
    </section>
  </EditorialPage>;
}
