export type BookBlueprint = {
  theme: string;
  pdfPath: string;
  contents: readonly string[];
};

export const bookBlueprints: Record<string, BookBlueprint> = {
  "technologische-deceptie": {
    theme: "Infrastructuur, CRM & Chat-farms",
    pdfPath: "/publicaties/boek-i-de-technologische-deceptie.pdf",
    contents: [
      "De operationele opzet van offshore chat-farms en hoe menselijke identiteiten daar worden gewisseld.",
      "De architectuur van CRM-systemen zoals Infloww, waarin persoonlijke voorkeuren en trauma’s van kopers worden vastgelegd.",
      "De inzet van automatisering en LLM-pipelines om imitatie op schaal te draaien.",
    ],
  },
  "financiele-schaduweconomie": {
    theme: "Carding & Witwassen",
    pdfPath: "/publicaties/boek-ii-de-financiele-schaduweconomie.pdf",
    contents: [
      "De ontmaskering van de ‘sokken-trend’ en virtuele cadeaus als witwasstraten.",
      "Hoe gestolen creditcards via carding-syndicaten en microtransacties op platforms worden witgewassen.",
      "De keten van high-risk payment processors en crypto-arbitrage (USDT/TRON).",
    ],
  },
  "neurobiologie-verslaving": {
    theme: "Variable-reward & Operator-psychologie",
    pdfPath: "/publicaties/boek-iii-de-neurobiologie-van-de-afhankelijkheid.pdf",
    contents: [
      "De psychologische mechanismen achter de variable-reward funnels die kopers vasthouden.",
      "De operationele druk, uitputting en empathische burn-out bij de chat-operators zelf.",
      "Gedragsmatige desensitisatie en moraalontkoppeling binnen de commerciële relatie.",
    ],
  },
  "sociologische-implosie": {
    theme: "Demografie & Digitale Substitutie",
    pdfPath: "/publicaties/boek-iv-de-sociologische-implosie.pdf",
    contents: [
      "De deconstructie van het mannelijke intentie-frame en de opkomst van intermenselijke paranoia.",
      "Een nuchtere sociologische analyse van demografische verschuivingen en het Koreaans/Japans scenario.",
      "De meetbare afname van echte relaties door digitale vervanging, strikt als toetsbare hypothese.",
    ],
  },
  "juridisch-failliet-modelwetgeving": {
    theme: "Lex Humanitas Digitalis",
    pdfPath: "/publicaties/boek-v-het-juridisch-failliet.pdf",
    contents: [
      "De blinde vlekken in de huidige wetgeving: AVG, DSA en artikel 50 van de AI-verordening.",
      "Waarom ketenaansprakelijkheid voor agentschappen noodzakelijk is.",
      "De volledige publicatie van het modelvoorstel Lex Humanitas Digitalis: identiteitstransparantie, dataminimalisatie en contractuele uitgang.",
    ],
  },
  "post-digitale-verzet": {
    theme: "Sanering & Analoge Heropbouw",
    pdfPath: "/publicaties/boek-vi-het-post-digitale-verzet.pdf",
    contents: [
      "Praktische protocollen voor de-programmering en het herstellen van de realiteitszin bij gedupeerde kopers.",
      "Richtlijnen voor juridische amnestie en digitale sanering voor creators.",
      "Handvatten voor de terugkeer naar analoge, onbetaalde menselijke gemeenschappen.",
    ],
  },
};
