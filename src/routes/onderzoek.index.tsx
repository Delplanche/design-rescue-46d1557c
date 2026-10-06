import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { EditorialPage, SectionLabel } from "@/components/editorial-page";
import { useT } from "@/lib/i18n";
import { useContent } from "@/lib/content";

export const Route = createFileRoute("/onderzoek/")({
  head: () => ({ meta: [
    { title: "Onderzoek — De Marktplaats van de Ziel" },
    { name: "description", content: "Zes feitelijke onderzoekspijlers over techniek, financiën, neurobiologie, sociologie, recht en herstel." },
    { property: "og:title", content: "De zes onderzoekspijlers" },
    { property: "og:description", content: "De inhoudelijke kern van De Marktplaats van de Ziel, modulair en controleerbaar opgebouwd." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: ResearchPage,
});

function ResearchPage() {
  const t = useT();
  const { researchPillars } = useContent();
  return <EditorialPage kind="Onderzoek" title={t("Zes pijlers. Eén systeemanalyse.", "Six pillars. One systems analysis.")} deck={t("De Hexalogie ontleedt de infrastructuur, geldstromen, gedragsmechanismen, demografie, rechtsorde en herstelroutes als afzonderlijke maar verbonden onderzoeksvelden.", "The Hexalogy dissects infrastructure, money flows, behavioural mechanisms, demography, legal order and recovery routes as separate but connected fields of research.")} next={{ to: "/archief", label: t("Open de Bibliotheek", "Open the Library") }}>
    <aside className="evidence-note"><strong>{t("Redactionele regel", "Editorial rule")}</strong><p>{t("Vaststelling, interpretatie en voorstel blijven zichtbaar gescheiden. Iedere pijler benoemt ook de grens van het beschikbare bewijs.", "Finding, interpretation and proposal remain visibly separate. Each pillar also states the limit of the available evidence.")}</p></aside>
    <section><SectionLabel>{t("De inhoud · Boek I–VI", "Contents · Books I–VI")}</SectionLabel><div className="research-grid">{researchPillars.map((pillar) => <Link key={pillar.slug} to="/onderzoek/$slug" params={{ slug: pillar.slug }} className="research-card"><div><code>{pillar.number}</code><span>{pillar.book}</span></div><h2>{pillar.shortTitle}</h2><p>{pillar.deck}</p><span className="read-label">{t("Open pijler", "Open pillar")} <ArrowRight /></span></Link>)}</div></section>
    <section><SectionLabel>{t("Integraal overzicht", "Complete overview")}</SectionLabel><Link to="/editie" className="policy-link"><span><small>07 · {t("Onderzoekseditie 4.0", "Research Edition 4.0")}</small>{t("Het volledige dossier in zeven delen", "The full dossier in seven parts")}</span><ArrowRight /></Link></section>
  </EditorialPage>;
}
