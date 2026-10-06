import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { useT } from "@/lib/i18n";
import { useContent } from "@/lib/content";

export const Route = createFileRoute("/bronnen")({ head:()=>({meta:[{title:"Bronnenregister — De Marktplaats van de Ziel"},{name:"description",content:"Het openbare bronnenregister bij het onderzoek De Marktplaats van de Ziel."},{property:"og:title",content:"Bronnenregister — De Marktplaats van de Ziel"},{property:"og:description",content:"Journalistiek, wetgeving, toezicht en productbronnen, volledig herleidbaar."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"}]}), component:SourcesPage });

function SourcesPage(){
  const t = useT();
  const { sources } = useContent();
  return <SiteShell><main className="page-wrap"><header className="page-intro"><p className="content-kind kind-archief">{t("Archief · bronnenregister","Archive · source register")}</p><h1>{t("Controleer het spoor.","Check the trail.")}</h1><p>{t("Bronnen zijn geselecteerd op directe relevantie, gezag en herleidbaarheid. Een platformbron toont wat een product belooft; niet of iedere klant het zo gebruikt.","Sources are selected for direct relevance, authority and traceability. A platform source shows what a product promises, not whether every customer uses it that way.")}</p></header><div className="source-list">{sources.map(s=><a key={s.id} href={s.url} target="_blank" rel="noreferrer" className="source-row"><code>{s.id}</code><div><span className="source-type">{s.type}</span><h2>{s.title}</h2><p>{s.publisher} · {s.date}</p></div><ExternalLink size={17}/></a>)}</div><p className="registry-date">{t("Laatste redactionele controle: 19 september 2026 · Externe links kunnen wijzigen.","Last editorial check: 19 September 2026 · External links may change.")}</p></main></SiteShell>}
