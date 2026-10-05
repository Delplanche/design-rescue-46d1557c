// Language-aware access to all editorial content. Dutch is the source edition;
// English mirrors it one-to-one (same ids, slugs, table shapes) from ./en/*.json.
import { useLang } from "@/lib/i18n";
import { dossierChapters, sourceRegistry, type DossierChapter, type SourceEntry } from "@/lib/dossier-edition";
import { publications, type Publication } from "@/lib/publications";
import { researchPillars, type ResearchPillar } from "@/lib/research-content";
import { bookBlueprints, type BookBlueprint } from "@/lib/book-blueprints";
import { chapters, claims, sources, glossary } from "@/lib/dossier-data";
import { legalPillars, legalTests } from "@/lib/legal-content";
import enDossier from "@/lib/en/dossier.json";
import enData from "@/lib/en/data.json";

const nl = { dossierChapters, sourceRegistry, publications, researchPillars, bookBlueprints, chapters, claims, sources, glossary, legalPillars, legalTests };
const en = {
  dossierChapters: enDossier.chapters as unknown as DossierChapter[],
  sourceRegistry: enDossier.sources as unknown as SourceEntry[],
  publications: enData.publications as unknown as readonly Publication[],
  researchPillars: enData.researchPillars as unknown as readonly ResearchPillar[],
  bookBlueprints: enData.bookBlueprints as unknown as Record<string, BookBlueprint>,
  chapters: enData.chapters as unknown as typeof chapters,
  claims: enData.claims as unknown as typeof claims,
  sources: enData.sources as unknown as typeof sources,
  glossary: enData.glossary as unknown as typeof glossary,
  legalPillars: enData.legalPillars as unknown as typeof legalPillars,
  legalTests: enData.legalTests as unknown as typeof legalTests,
};

export function useContent() {
  const { lang } = useLang();
  return lang === "en" ? en : nl;
}

export const statusLabel: Record<string, string> = {
  Onderbouwd: "Substantiated",
  Aantijging: "Allegation",
  Betwist: "Disputed",
  Onbevestigd: "Unconfirmed",
};
