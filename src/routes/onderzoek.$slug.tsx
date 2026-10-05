import { useT } from "@/lib/i18n";
import { useContent } from "@/lib/content";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowDownToLine, ArrowLeft, ArrowRight } from "lucide-react";
import { EditorialPage, SectionLabel } from "@/components/editorial-page";
import { researchPillarBySlug } from "@/lib/research-content";

export const Route = createFileRoute("/onderzoek/$slug")({
  loader: ({ params }) => { const pillar = researchPillarBySlug(params.slug); if (!pillar) throw notFound(); return pillar; },
  head: ({ loaderData }) => ({ meta: [
    { title: loaderData ? `${loaderData.title} — De Marktplaats van de Ziel` : "Onderzoek niet gevonden" },
    { name: "description", content: loaderData?.deck ?? "Deze onderzoekspijler bestaat niet." },
    { property: "og:title", content: loaderData?.title ?? "Onderzoek niet gevonden" },
    { property: "og:description", content: loaderData?.deck ?? "Deze onderzoekspijler bestaat niet." },
    { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: ResearchDetail,
  notFoundComponent: () => <EditorialPage kind="Onderzoek" title="Pijler niet gevonden" deck="Deze onderzoekspijler bestaat niet of is verplaatst."><Link to="/onderzoek">Terug naar Onderzoek</Link></EditorialPage>,
});

function ResearchDetail() {
  const nlPillar = Route.useLoaderData();
  const t = useT();
  const { researchPillars, bookBlueprints } = useContent();
  const pillar = researchPillars.find((p) => p.slug === nlPillar.slug) ?? nlPillar;
  const index = researchPillars.findIndex((item) => item.slug === pillar.slug);
  const previous = researchPillars[index - 1];
  const next = researchPillars[index + 1];
  const blueprint = bookBlueprints[pillar.slug];
  return <EditorialPage kind="Onderzoek" title={pillar.title} deck={pillar.deck}>
    <aside className="evidence-note"><strong>{t("Bewijsbasis", "Evidence base")}</strong><p>{pillar.evidence}</p></aside>
    {blueprint && <section className="book-blueprint">
      <SectionLabel>{t("Wat staat er in dit boek", "What this book contains")}</SectionLabel>
      <p className="blueprint-theme">{t("Thema", "Theme")} · {blueprint.theme}</p>
      <ul>{blueprint.contents.map((item) => <li key={item}>{item}</li>)}</ul>
      <a className="download-link" href={blueprint.pdfPath} download>{t(`Download ${pillar.book} als PDF`, `Download ${pillar.book} as PDF`)} <ArrowDownToLine /></a>
    </section>}
    <section className="prose-sections"><SectionLabel>{pillar.book} · {t("Pijler", "Pillar")} {pillar.number}</SectionLabel>{pillar.sections.map((section, sectionIndex) => <div key={section.heading}><code>0{sectionIndex + 1}</code><h2>{section.heading}</h2><p>{section.body}</p></div>)}</section>
    <nav className="pillar-nav">{previous ? <Link to="/onderzoek/$slug" params={{ slug: previous.slug }}><ArrowLeft /><span><small>{t("Vorige pijler", "Previous pillar")}</small>{previous.shortTitle}</span></Link> : <Link to="/onderzoek"><ArrowLeft /><span><small>{t("Overzicht", "Overview")}</small>{t("Onderzoek", "Research")}</span></Link>}{next ? <Link to="/onderzoek/$slug" params={{ slug: next.slug }}><span><small>{t("Volgende pijler", "Next pillar")}</small>{next.shortTitle}</span><ArrowRight /></Link> : <Link to="/archief"><span><small>{t("Verder", "Continue")}</small>{t("Bibliotheek", "Library")}</span><ArrowRight /></Link>}</nav>
  </EditorialPage>;
}
