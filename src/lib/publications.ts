export type Publication = {
  id: string;
  sort_order: number;
  code: string;
  kind: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  format: string;
  audience: string;
  page_count: number;
  file_size: string;
  pdf_path: string;
  published_on: string;
  keywords: readonly string[];
};

export const publications: readonly Publication[] = [
  {
    id: "wp",
    sort_order: 1,
    code: "WP",
    kind: "PERS-WHITEPAPER",
    title: "Pers-whitepaper: Lex Humanitas Digitalis & Systeemanalyse",
    subtitle: "Systeemanalyse en modelwetgeving in beknopte persvorm",
    description:
      "Een beknopte systeemanalyse voor pers, beleid en toezicht: kernbevindingen, het juridische gat en concrete modelwetgeving.",
    category: "Pers",
    format: "A4",
    audience: "Pers · beleid · toezicht",
    page_count: 2,
    file_size: "98 kB",
    pdf_path: "/publicaties/achter-het-profiel-whitepaper.pdf",
    published_on: "2026-09-19",
    keywords: ["pers", "whitepaper", "lex humanitas digitalis", "systeemanalyse", "samenvatting"],
  },
  {
    id: "boek-01",
    sort_order: 2,
    code: "01",
    kind: "BOEK I",
    title: "De Technologische Deceptie",
    subtitle: "Infrastructuur, CRM & Chat-farms",
    description:
      "Infrastructuur, CRM-dossiers, chat-farms en de geautomatiseerde productie van persoonlijk contact.",
    category: "Techniek",
    format: "21 × 21 cm",
    audience: "Techniek · onderzoek",
    page_count: 26,
    file_size: "1,4 MB",
    pdf_path: "/publicaties/boek-i-de-technologische-deceptie.pdf",
    published_on: "2026-09-19",
    keywords: ["chat-farms", "crm", "infloww", "automatisering", "llm", "ghost-chatting", "infrastructuur"],
  },
  {
    id: "boek-02",
    sort_order: 3,
    code: "02",
    kind: "BOEK II",
    title: "De Financiële Schaduweconomie",
    subtitle: "Carding & Witwassen",
    description:
      "Carding, betaalstromen, witwasrisico’s en de verdeling van opbrengsten tussen platform, bureau en creator.",
    category: "Financiën",
    format: "21 × 21 cm",
    audience: "Financiën · toezicht",
    page_count: 18,
    file_size: "1,2 MB",
    pdf_path: "/publicaties/boek-ii-de-financiele-schaduweconomie.pdf",
    published_on: "2026-09-19",
    keywords: ["carding", "witwassen", "microtransacties", "crypto", "usdt", "tron", "payment processors"],
  },
  {
    id: "boek-03",
    sort_order: 4,
    code: "03",
    kind: "BOEK III",
    title: "De Neurobiologie van de Verslaving",
    subtitle: "Variable-reward & Operator-psychologie",
    description:
      "Variable-reward, gedragsmatige binding en de psychologische belasting van gebruikers en operators.",
    category: "Neurobiologie",
    format: "21 × 21 cm",
    audience: "Gedrag · gezondheid",
    page_count: 15,
    file_size: "1,1 MB",
    pdf_path: "/publicaties/boek-iii-de-neurobiologie-van-de-afhankelijkheid.pdf",
    published_on: "2026-09-19",
    keywords: ["variable reward", "verslaving", "operator", "burnout", "gedrag", "desensitisatie"],
  },
  {
    id: "boek-04",
    sort_order: 5,
    code: "04",
    kind: "BOEK IV",
    title: "De Sociologische Implosie",
    subtitle: "Demografie & Digitale Substitutie",
    description:
      "Harde demografische data en objectieve substitutie-effecten, met Korea en Japan als begrensd vergelijkingskader.",
    category: "Sociologie",
    format: "21 × 21 cm",
    audience: "Demografie · sociologie",
    page_count: 14,
    file_size: "1,0 MB",
    pdf_path: "/publicaties/boek-iv-de-sociologische-implosie.pdf",
    published_on: "2026-09-19",
    keywords: ["demografie", "substitutie", "korea", "japan", "relaties", "paranoia"],
  },
  {
    id: "boek-05",
    sort_order: 6,
    code: "05",
    kind: "BOEK V",
    title: "Het Juridisch Failliet & Modelwetgeving",
    subtitle: "Lex Humanitas Digitalis",
    description:
      "Het bestaande juridische kader, de handhavingskloof en Lex Humanitas Digitalis als toetsbaar modelvoorstel.",
    category: "Recht",
    format: "21 × 21 cm",
    audience: "Recht · beleid",
    page_count: 17,
    file_size: "1,2 MB",
    pdf_path: "/publicaties/boek-v-het-juridisch-failliet.pdf",
    published_on: "2026-09-19",
    keywords: ["avg", "dsa", "ai-verordening", "ketenaansprakelijkheid", "modelwetgeving", "transparantie"],
  },
  {
    id: "boek-06",
    sort_order: 7,
    code: "06",
    kind: "BOEK VI",
    title: "Het Post-Digitale Verzet",
    subtitle: "Sanering & Analoge Heropbouw",
    description:
      "Sanering, herstelprotocollen en analoge heropbouw voor gebruikers, makers en toezichthouders.",
    category: "Herstel",
    format: "21 × 21 cm",
    audience: "Herstel · praktijk",
    page_count: 18,
    file_size: "1,2 MB",
    pdf_path: "/publicaties/boek-vi-het-post-digitale-verzet.pdf",
    published_on: "2026-09-19",
    keywords: ["de-programmering", "sanering", "amnestie", "analoog", "gemeenschap", "herstel"],
  },
  {
    id: "integraal-dossier",
    sort_order: 8,
    code: "ID",
    kind: "INTEGRAAL DOSSIER",
    title: "Integraal Dossier — Editie 01 (21 × 21)",
    subtitle: "De volledige systeemanalyse in één opgemaakte uitgave",
    description:
      "Het gebundelde dossier: alle onderzoekslijnen, tabellen en het bronregister in één doorlopende, opgemaakte uitgave voor e-reader of tablet.",
    category: "Uitgave",
    format: "21 × 21 cm",
    audience: "Onderzoek · pers · beleid",
    page_count: 8,
    file_size: "20 kB",
    pdf_path: "/publicaties/integraal-dossier-editie-01-21x21.pdf",
    published_on: "2026-09-19",
    keywords: ["integraal", "dossier", "editie 01", "volledig", "bundel", "21x21"],
  },
  {
    id: "executive-summary",
    sort_order: 9,
    code: "ES",
    kind: "EXECUTIVE SUMMARY",
    title: "Executive Summary (A4)",
    subtitle: "Kernbevindingen en modelwetgeving in beknopte vorm",
    description:
      "De beknopte leesversie voor redacties, beleidsmakers en toezichthouders: bevindingen, bewijsgrenzen en het voorstel Lex Humanitas Digitalis.",
    category: "Uitgave",
    format: "A4",
    audience: "Pers · beleid · toezicht",
    page_count: 1,
    file_size: "12 kB",
    pdf_path: "/publicaties/executive-summary-a4.pdf",
    published_on: "2026-09-19",
    keywords: ["executive summary", "samenvatting", "beleid", "pers", "kernbevindingen"],
  },
  {
    id: "boek-reader",
    sort_order: 10,
    code: "BR",
    kind: "BOEK-READER",
    title: "Boek-Reader — Commodificatie van de Ziel (21 × 21)",
    subtitle: "Doorlopende leesversie van de hexalogie",
    description:
      "De leesuitgave met de doorlopende argumentatielijn van Boek I tot VI, geoptimaliseerd voor rustig lezen op tablet of e-reader.",
    category: "Uitgave",
    format: "21 × 21 cm",
    audience: "Algemeen · onderzoek",
    page_count: 2,
    file_size: "12 kB",
    pdf_path: "/publicaties/boek-reader-commodificatie-van-de-ziel-21x21.pdf",
    published_on: "2026-09-19",
    keywords: ["reader", "leesversie", "commodificatie", "hexalogie", "doorlopend"],
  },
];

export function publicationSection(publication: Publication): "pers" | "hexalogie" | "uitgave" {
  if (publication.id === "wp") return "pers";
  if (publication.id.startsWith("boek-0")) return "hexalogie";
  return "uitgave";
}

export function formatPublicationDate(value: string) {
  const date = new Date(`${value}T00:00:00Z`);
  return new Intl.DateTimeFormat("nl-BE", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(date);
}

export function matchesQuery(publication: Publication, query: string) {
  const needle = query.trim().toLowerCase();
  if (!needle) return true;
  const haystack = [
    publication.code, publication.kind, publication.title, publication.subtitle,
    publication.description, publication.category, publication.audience, publication.format,
    ...publication.keywords,
  ].join(" ").toLowerCase();
  return needle.split(/\s+/).every((term) => haystack.includes(term));
}
