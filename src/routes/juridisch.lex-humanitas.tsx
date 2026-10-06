import { createFileRoute } from "@tanstack/react-router";
import { EditorialPage, SectionLabel } from "@/components/editorial-page";
import { useT } from "@/lib/i18n";
import { useContent } from "@/lib/content";

export const Route = createFileRoute("/juridisch/lex-humanitas")({head:()=>({meta:[{title:"Lex Humanitas Digitalis — Modelvoorstel"},{name:"description",content:"Vier bespreekbare beleidsprincipes voor transparantie, data, contracten en toezicht."},{property:"og:title",content:"Lex Humanitas Digitalis — Modelvoorstel"},{property:"og:description",content:"Een modelvoorstel, nadrukkelijk geen geldend recht."},{property:"og:type",content:"article"},{name:"twitter:card",content:"summary"}]}),component:LexPage});

function LexPage(){
  const t = useT();
  const { legalPillars, legalTests } = useContent();
  return <EditorialPage kind="Voorstel" title="Lex Humanitas Digitalis" deck={t("Vier beginselen voor publiek debat over digitale intimiteit — toetsbaar, aanpasbaar en nadrukkelijk nog geen wet.","Four principles for public debate on digital intimacy — testable, adaptable and explicitly not yet law.")} next={{to:"/juridisch",label:t("Terug naar het juridisch kader","Back to the legal framework")}}><aside className="evidence-note proposal-note"><strong>{t("Status: concept","Status: draft")}</strong><p>{t("Deze beginselen moeten nog worden getoetst op proportionaliteit, uitvoerbaarheid, grondrechten en ongewenste neveneffecten.","These principles have yet to be tested for proportionality, enforceability, fundamental rights and unintended side effects.")}</p></aside><section><SectionLabel>{t("Vier pijlers","Four pillars")}</SectionLabel><div className="method-grid">{legalPillars.map(p=><section key={p[0]}><code>{p[0]}</code><h2>{p[1]}</h2><p>{p[2]}</p></section>)}</div></section><section><SectionLabel>{t("Juridische stresstest","Legal stress test")}</SectionLabel><div className="legal-table">{legalTests.map(test=><div key={test[0]}><strong>{test[0]}</strong><p>{test[1]}</p></div>)}</div></section></EditorialPage>}
