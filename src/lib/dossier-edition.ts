// Auto-gegenereerd uit de bron-PDF's van Onderzoekseditie 4.0 (19 september 2026).
// Bewerk de inhoud hier; de opmaak wordt door de leesomgeving verzorgd.

export type DossierBlock =
  | { type: "para"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; label: string; text: string }
  | { type: "table"; headers: string[]; rows: string[][] };

export type DossierSection = {
  number: string;
  title: string;
  lead: string | null;
  blocks: DossierBlock[];
};

export type DossierChapter = {
  index: number;
  slug: string;
  title: string;
  subtitle: string;
  kicker: string;
  sections: DossierSection[];
};

export type SourceEntry = { id: string; label: string; url: string };

export const editionLabel = "Onderzoekseditie 4.0 — 19 september 2026";
export const editionVersion = "4.0";
export const editionDate = "19 september 2026";

export const dossierChapters: DossierChapter[] = [
  {
    "index": 1,
    "slug": "het-fundament",
    "title": "Het Fundament & Het Filosofisch Kader",
    "subtitle": "Macro-context, commodificatie van intimiteit en het VHEMT-perspectief",
    "kicker": "Macrocontext · Filosofie · Relatievorming",
    "sections": [
      {
        "number": "01",
        "title": "De macro-context: van menselijk tekort naar digitale marktplaats",
        "lead": "Het dossier vertrekt vanuit de stelling dat eenzaamheid in een digitale economie kan worden omgezet in een meetbare en schaalbare grondstof.",
        "blocks": [
          {
            "type": "para",
            "text": "De kernobservatie is niet dat digitale intimiteit op zichzelf problematisch zou zijn. De bron richt de kritiek op een model waarin aandacht, beschikbaarheid en emotionele nabijheid worden verpakt als terugkerende microtransacties. De gebruiker komt de interface binnen als consument, terwijl de behoefte die hem of haar drijft juist buiten de logica van de markt ligt: gezien worden, gehoord worden en ergens bij horen."
          },
          {
            "type": "para",
            "text": "Volgens het dossier ontstaat daardoor een specifieke vorm van vervreemding. De oorspronkelijke menselijke behoefte blijft bestaan, maar de route naar vervulling wordt omgeleid naar een systeem waarin toegang, snelheid, retentie en gemiddelde omzet per gebruiker centrale maatstaven worden. Het verschil tussen relatie en dienst vervaagt. Het dossier noemt dit de marktplaats van de eenzaamheid: een omgeving waarin een sociaal tekort niet alleen wordt bediend, maar ook economisch kan worden gereproduceerd."
          },
          {
            "type": "para",
            "text": "De bron koppelt dit aan een bredere socio-technologische overgang. Sociale media leveren bereik, adult-tech levert betaalde interactie, CRM-systemen leggen gedragsinformatie vast en geautomatiseerde processen maken het mogelijk om meerdere relaties tegelijk te managen. Daardoor verschuift schaalbaarheid van een logistiek voordeel naar een eigenschap van menselijke interactie zelf."
          },
          {
            "type": "para",
            "text": "Belangrijk voor de lezing van dit dossier is dat deze analyse een hypothese- en kritieklaag bevat. De stellingen over causaliteit, maatschappelijke impact en georganiseerde exploitatie worden in de bron krachtig geformuleerd, maar niet op elke plek voorzien van onafhankelijke bewijslast. Deze editie presenteert ze daarom als onderdeel van de argumentatie van het dossier, niet als buitenaf bevestigde feiten."
          },
          {
            "type": "callout",
            "label": "KERNBEGRIP",
            "text": "Commodificatie: menselijke aandacht en intimiteit worden vertaald naar prijs, toegang, conversie en retentie."
          }
        ]
      },
      {
        "number": "02",
        "title": "Industriële vervreemding en de logica van schaal",
        "lead": "In het dossier verschijnt de adult-tech-industrie als een industrieel proces waarin menselijke onvoorspelbaarheid zoveel mogelijk wordt vervangen door protocollen, dashboards en scripts.",
        "blocks": [
          {
            "type": "para",
            "text": "De bron beschrijft een keten waarin de persoonlijke voorkant - profiel, foto, gesprek - wordt losgekoppeld van de operationele achterkant. Een gebruiker kan denken dat hij rechtstreeks met een creator communiceert, terwijl volgens de beschreven modellen een team, manager, chatter of geautomatiseerd systeem delen van de interactie uitvoert. De essentie van de kritiek zit daarmee niet alleen in de inhoud van de dienst, maar in de onzichtbaarheid van de productievorm."
          },
          {
            "type": "para",
            "text": "Deze industrialisering heeft volgens het dossier meerdere gevolgen. Gesprekken kunnen worden opgesplitst in fasen, bezwaren kunnen worden gecategoriseerd, kwetsbaarheden kunnen worden gelabeld en opbrengst kan per account of gebruiker worden gevolgd. Wat vroeger een toevallige sociale ontmoeting was, wordt dan behandeld als een reproduceerbaar proces met input, interventie en meetbaar resultaat."
          },
          {
            "type": "para",
            "text": "De bron gebruikt daarvoor een aantal terugkerende metaforen: fabriek, funnel, operatiecentrum en machine. Die metaforen leggen de nadruk op standaardisering. Het individuele karakter van intimiteit blijft visueel aanwezig, maar de onderliggende organisatie kan volgens het dossier juist worden gecentraliseerd en geprofessionaliseerd."
          },
          {
            "type": "para",
            "text": "Voor het filosofische kader is dit relevant omdat vervreemding niet alleen wordt voorgesteld als vervreemding van arbeid, maar ook als vervreemding van menselijke nabijheid. De maker wordt productie-eenheid; de chatter wordt salesfunctie; de gebruiker wordt omzetprofiel. De bron ziet daarin een verschuiving van menselijke betekenis naar systeemwaarde."
          }
        ]
      },
      {
        "number": "03",
        "title": "Het VHEMT-perspectief als filosofische spiegel",
        "lead": "Het dossier gebruikt VHEMT niet als bewijs voor een industriële samenzwering, maar als filosofische spiegel voor de gedachte dat menselijke voortplanting afhankelijk is van vertrouwen, nabijheid en relatievorming.",
        "blocks": [
          {
            "type": "para",
            "text": "VHEMT - Voluntary Human Extinction Movement - wordt in de bron gekoppeld aan een ethische en ecologische redenering waarin vrijwillige kinderloosheid uiteindelijk moet leiden tot het verdwijnen van de menselijke soort. Het dossier maakt vervolgens een omkering: waar VHEMT uitgaat van bewuste morele keuze, zou digitale commodificatie volgens de hypothese van de auteur dezelfde uitkomst indirect kunnen ondersteunen via sociale en relationele mechanismen."
          },
          {
            "type": "para",
            "text": "De kern van deze koppeling is de zogenaamde algoritmische sterilisatie-lus. In de bron bestaat die uit een opeenvolging: vertrouwen wordt uitgehold, intimiteit wordt vertaald naar transactie, wederzijdse angst wordt versterkt en fysieke relatievorming wordt moeilijker. De stap van deze observaties naar demografische causaliteit is nadrukkelijk een theoretische stap. De bron gebruikt hem als overkoepelend verklaringsmodel, niet als afgerond empirisch bewijs."
          },
          {
            "type": "para",
            "text": "Het filosofische belang van dit perspectief ligt in de vraag wat er gebeurt wanneer een systeem niet langer alleen producten verkoopt, maar ook de voorwaarden voor menselijke verbondenheid mee structureert. De kernvraag verschuift dan van \"is digitale intimiteit goed of slecht?\" naar \"welke vormen van menselijk contact worden door dit economische model beloond, ontmoedigd of vervangen?\""
          },
          {
            "type": "para",
            "text": "Deze formulering maakt het mogelijk om VHEMT, adult-tech en demografische ontwikkeling als drie verschillende niveaus naast elkaar te zetten: een normatieve filosofie, een commerciële infrastructuur en een sociologisch vraagstuk. Het dossier verbindt ze sterk; de lezer moet die verbinding lezen als een hypothese die afzonderlijk empirisch onderzocht zou moeten worden."
          },
          {
            "type": "callout",
            "label": "EPISTEMISCHE WAARSCHUWING",
            "text": "De bron presenteert de koppeling tussen adult-tech en dalende reproductie als een verklaringshypothese; correlatie en causaliteit zijn niet onafhankelijk vastgesteld in het aangeleverde materiaal."
          }
        ]
      },
      {
        "number": "04",
        "title": "De stille crisis van menselijke reproductie",
        "lead": "De demografische laag van het dossier stelt dat digitale substituten niet alleen tijd en geld verschuiven, maar ook verwachtingen over relaties en gezin kunnen veranderen.",
        "blocks": [
          {
            "type": "para",
            "text": "Het dossier beschrijft fysieke relaties als hoogdrempelig: er is tijd nodig, er is onzekerheid, er is afwijzing mogelijk en er is emotionele kwetsbaarheid. Digitale omgevingen bieden daarentegen directheid, voorspelbare interfaces en een afgebakende transactie. Volgens de bron kan die asymmetrie aantrekkelijk worden voor mensen die moeite hebben met de risico's van fysiek contact."
          },
          {
            "type": "para",
            "text": "De hypothese die daarop volgt is economisch van aard: wanneer een synthetisch alternatief goedkoper, sneller of veiliger lijkt, kan het de vraag naar het oorspronkelijke, moeilijkere alternatief verminderen. Het dossier past dit substitutiemodel toe op partnerrelaties. Het suggereert dat een deel van de energie die anders in daten, relatievorming en gezinsplanning zou gaan, kan verschuiven naar digitale consumptie."
          },
          {
            "type": "para",
            "text": "De bron verwijst daarbij naar patronen als sociale terugtrekking, hikikomori-achtige isolatie en lage geboorte- of huwelijksfrequenties. Die verwijzingen zijn in het dossier vooral illustratief; de aangeleverde tekst levert geen uitgewerkte statistische analyse die zulke verschijnselen direct aan adult-tech toeschrijft. Voor wetenschappelijk gebruik zou hier een afzonderlijk onderzoeksontwerp nodig zijn."
          },
          {
            "type": "para",
            "text": "Filosofisch gezien draait dit deel om een keuze tussen twee beelden van menselijke verbondenheid. In het ene beeld is verbinding een kwetsbaar, langzaam en niet-verhandelbaar goed. In het andere beeld wordt nabijheid gefaciliteerd door technologie en beloond via marktmechanismen. Het dossier kiest nadrukkelijk de eerste lezing als normatief ijkpunt."
          }
        ]
      },
      {
        "number": "05",
        "title": "Van filosofische kritiek naar onderzoeksprogramma",
        "lead": "Het dossier eindigt de fundamentele laag niet met een enkel oordeel, maar met een programma voor triangulatie: juridische documenten, technische data en sociologische analyse moeten elkaar ondersteunen.",
        "blocks": [
          {
            "type": "para",
            "text": "De bron noemt drie bewijssporen. Het eerste is juridisch: contracten, privacydocumentatie, handhavingsdossiers en consumentenrechtelijke bronnen. Het tweede is technisch: CRM-screenshots, IP-logs, dashboards, scripts en andere operationele artefacten. Het derde is sociologisch: patronen in relatievorming, psychologische mechanismen en demografische gegevens. Het uitgangspunt is dat geen enkel spoor op zichzelf voldoende zou zijn."
          },
          {
            "type": "para",
            "text": "Deze onderzoeksarchitectuur is belangrijk omdat het dossier op verschillende niveaus spreekt. Sommige passages zijn beschrijvend en beweren dat bepaalde workflows bestaan. Andere zijn interpretatief en verbinden die workflows aan psychologische of demografische effecten. Weer andere zijn normatief en formuleren wat wetgeving of maatschappij zou moeten doen. De bron raadt zelf aan die categorieen niet door elkaar te halen."
          },
          {
            "type": "para",
            "text": "Een professionele onderzoeksversie zou daarom voor elk kernpunt een statuslabel kunnen hanteren: bronclaim, direct documenteerbaar, indirect ondersteund, hypothese of normatief voorstel. Dat maakt het dossier sterker zonder de kritische invalshoek te verliezen."
          },
          {
            "type": "para",
            "text": "Het fundament van deze reeks is dus niet de veronderstelling dat alle beschreven mechanismen al bewezen zijn. Het fundament is de onderzoeksvraag: wat gebeurt er wanneer menselijke behoefte wordt gemeten, geprofileerd en gemonetiseerd op dezelfde schaal als advertentie- of e-commercegedrag? Die vraag is breder dan een enkel platform en vormt de verbindende lijn tussen de zeven delen."
          }
        ]
      },
      {
        "number": "90",
        "title": "Bewijsarchitectuur 4.0 — wat telt als bewijs?",
        "lead": "De belangrijkste verbetering is een expliciete scheiding tussen bronmateriaal, verificatie, inferentie en hypothese.",
        "blocks": [
          {
            "type": "para",
            "text": "Een productpagina bewijst dat een leverancier een functie aanbiedt. Zij bewijst niet dat ieder bureau die functie gebruikt, dat de functie op een specifiek account is geactiveerd of dat de functie onrechtmatig wordt gebruikt. Die drie niveaus moeten afzonderlijk worden vastgelegd."
          },
          {
            "type": "para",
            "text": "Een journalistieke undercoverreportage kan operationele praktijken zeer concreet documenteren, maar een enkel bureau of één werknemer is niet automatisch representatief voor de hele markt. Een patroon wordt sterker wanneer meerdere onafhankelijke onderzoeken dezelfde werkwijze laten zien."
          },
          {
            "type": "para",
            "text": "Een juridische regel is geen bewijs dat een specifieke actor de regel heeft overtreden. De juridische analyse moet daarom steeds uit vier stappen bestaan: toepasselijke norm, feitelijke handeling, bewijs van die handeling en causaliteit tussen handeling en normschending."
          },
          {
            "type": "para",
            "text": "Statistische cijfers krijgen alleen de status van onderzoeksbevinding wanneer populatie, steekproef, meetmethode, onzekerheid en reproduceerbaarheid bekend zijn. In de aangeleverde latere monografieën komen bijvoorbeeld percentages en correlaties voor die niet met een openbaar dataset of methode zijn onderbouwd. Deze editie behandelt die cijfers daarom als onbevestigd bronmateriaal, niet als resultaten van dit onderzoek."
          },
          {
            "type": "callout",
            "label": "NIEUWE REGEL",
            "text": "Geen enkel cijfer uit de latere 21×21-monografieën wordt als empirisch feit gebruikt tenzij een onafhankelijke primaire of wetenschappelijke bron de methode en uitkomst draagt."
          },
          {
            "type": "table",
            "headers": [
              "Bronsoort",
              "Bewijst primair",
              "Bewijst niet automatisch"
            ],
            "rows": []
          },
          {
            "type": "para",
            "text": "Wet / uitspraak Norm of beslissing Dat een vergelijkbare actor dezelfde norm schendt"
          },
          {
            "type": "para",
            "text": "Productdocument Functie / ontwerpclaim Gebruik in de praktijk of onrechtmatigheid atie"
          },
          {
            "type": "para",
            "text": "Undercoveronderz Gedocumenteerde casus Sectorbreed percentage oek"
          },
          {
            "type": "para",
            "text": "Wetenschappelijke Resultaat binnen methode/populatie Causaliteit buiten de studie studie"
          },
          {
            "type": "para",
            "text": "Getuigenis / Aangeleverd artefact Authenticiteit zonder chain-of-custody screenshot"
          }
        ]
      },
      {
        "number": "91",
        "title": "Nieuwe bronlaag — AI-transparantie na 2 augustus 2026",
        "lead": "De juridische context is veranderd sinds de eerdere editie: de Europese Commissie publiceerde op 20 juli 2026 definitieve richtsnoeren over artikel 50 AI Act; de transparantieverplichtingen gelden vanaf 2 augustus 2026.",
        "blocks": [
          {
            "type": "para",
            "text": "De richtsnoeren zijn rechtstreeks relevant voor het dossier omdat zij het onderscheid verduidelijken tussen systemen die mensen rechtstreeks met AI laten interageren en andere vormen van AI-gegenereerde of gemanipuleerde content. Het relevante onderzoeksvraagstuk is niet simpelweg “is AI gebruikt?”, maar: welke actor is onder de verordening de provider of deployer, welk type systeem wordt gebruikt en welke transparantiehandeling is vereist?"
          },
          {
            "type": "para",
            "text": "Daarmee moet de oude formulering “de mens-in-the-loop is altijd vrijgesteld” worden vermeden. Een menselijke medewerker die AI-output controleert, maakt niet automatisch iedere interactie juridisch gelijk aan volledig menselijke communicatie. De feitelijke rol van het AI-systeem en de toepasselijke categorie moeten worden vastgesteld aan de hand van de verordening en de richtsnoeren."
          },
          {
            "type": "para",
            "text": "Voor het dossier ontstaat een concreet bewijsprotocol: bewaar modelversie, prompt/instellingen, generatie-output, menselijke edits, verzendmoment en identiteit van de verzender. Alleen dan kan achteraf worden vastgesteld welk deel van de interactie menselijk, AI-assisted of volledig geautomatiseerd was."
          },
          {
            "type": "callout",
            "label": "BRONCONTROLE",
            "text": "De Commissie stelt dat artikel 50-transparantieverplichtingen vanaf 2 augustus 2026 van toepassing zijn en heeft hiervoor richtsnoeren gepubliceerd."
          },
          {
            "type": "table",
            "headers": [
              "Interactietype",
              "Onderzoeksvraag",
              "Bewijsstuk"
            ],
            "rows": [
              [
                "Menselijke chatter",
                "Wie schreef/verzond?",
                "Accountlog + arbeidsrooster"
              ],
              [
                "AI-assisted",
                "Welke output kwam uit AI?",
                "Prompt/output + editlog"
              ],
              [
                "AI-direct",
                "Welke systeemfunctie communiceerde?",
                "Modelconfiguratie + verzendlog"
              ],
              [
                "Hybride team",
                "Wie had feitelijke controle?",
                "Role/permission + auditlog"
              ]
            ]
          }
        ]
      },
      {
        "number": "92",
        "title": "Nieuwe bronlaag — CRM als operationeel bewijsstuk",
        "lead": "De publieke documentatie van Infloww maakt het mogelijk de softwarelaag veel preciezer te beschrijven zonder te speculeren over verborgen databases.",
        "blocks": [
          {
            "type": "para",
            "text": "Infloww documenteert dat teams faninformatie kunnen zien zoals bestedingsgeschiedenis, aankoopfrequentie, laatste en hoogste uitgaven, locatie, lokale tijd, handmatig ingevoerde salarisinformatie en notities. Het systeem bevat daarnaast segmentatie op spending power en aankoopgedrag."
          },
          {
            "type": "para",
            "text": "De betekenis daarvan is methodologisch belangrijk. Het bewijst niet dat ieder bureau psychologische kwetsbaarheden verzamelt. Het bewijst wél dat een commercieel systeem het technisch mogelijk maakt om persoonlijke context en koopgedrag te combineren met communicatie en retentie. Dat is een controleerbaar ontwerpfeit."
          },
          {
            "type": "para",
            "text": "Voor een echte forensische audit zijn daarom de volgende artefacten essentieel: rollen en rechten, auditlogs, datavelden, exports, bewaartermijnen, verwerkersovereenkomsten, subverwerkers, gegevenslocaties en configuraties van automatische berichten. Screenshots van de interface zijn nuttig, maar logs zijn sterker."
          },
          {
            "type": "callout",
            "label": "BEWIJSGRENS",
            "text": "De leverancierdocumentatie ondersteunt de aanwezigheid van segmentatie- en personalisatiefuncties. Zij ondersteunt niet op zichzelf de stelling dat specifieke bureaus deze functies misbruiken."
          },
          {
            "type": "table",
            "headers": [
              "Artefact",
              "Wat het kan aantonen",
              "Sterkte"
            ],
            "rows": []
          },
          {
            "type": "para",
            "text": "Productpagina Ontwerp/functie Hoog voor feature-bestaan"
          },
          {
            "type": "para",
            "text": "Helpcenter Gedetailleerde werking Hoog voor operationeel ontwerp"
          },
          {
            "type": "table",
            "headers": [
              "Accountconfig",
              "Werkelijk geactiveerde functie",
              "Zeer hoog"
            ],
            "rows": [
              [
                "Auditlog",
                "Wie deed wat en wanneer",
                "Zeer hoog"
              ],
              [
                "Export / DB",
                "Welke data werkelijk aanwezig was",
                "Zeer hoog, mits"
              ],
              [
                "snapshot",
                "",
                "authenticiteit"
              ]
            ]
          }
        ]
      },
      {
        "number": "93",
        "title": "Forensisch protocol — van verhaal naar reproduceerbare case",
        "lead": "Een volgende editie kan veel sterker worden door iedere casus als een klein digitaal onderzoeksdossier te behandelen.",
        "blocks": [
          {
            "type": "para",
            "text": "Stap A: preserveer het bronbestand onveranderd en maak een cryptografische hash. Stap B: noteer datum, bron, verkrijgingswijze en eventuele toestemming. Stap C: maak een tijdlijn van account-, chat-, betalings- en personeelsgebeurtenissen. Stap D: vergelijk identiteit, IP, device, loginrol en verzendmomenten. Stap E: koppel ieder feit aan een bron-ID."
          },
          {
            "type": "para",
            "text": "Voor CRM-onderzoek moeten persoonsgegevens worden geminimaliseerd. Onderzoekers hebben niet noodzakelijk de inhoud van alle privégesprekken nodig om te bewijzen dat een team werkt met spending tiers of scripts. Een schema met geanonimiseerde identifiers kan hetzelfde mechanisme aantonen met minder privacyrisico."
          },
          {
            "type": "para",
            "text": "Voor financiële reconstructie moeten betalingsgegevens worden gescheiden van interpretatie. Een reeks microbetalingen is op zichzelf geen bewijs van carding of witwassen. Daarvoor zijn aanvullende signalen nodig, bijvoorbeeld chargebackpatronen, accountkoppelingen, afwijkende device-signalen, processor alerts, bankonderzoek of strafrechtelijke stukken."
          },
          {
            "type": "callout",
            "label": "CHAIN OF CUSTODY",
            "text": "Zonder herkomst, integriteit en tijdlijn van een digitaal artefact blijft een screenshot illustratief in plaats van forensisch beslissend."
          },
          {
            "type": "table",
            "headers": [
              "Fase",
              "Minimumdocumentatie"
            ],
            "rows": [
              [
                "Preservatie",
                "Origineel bestand + hash + datum"
              ],
              [
                "Context",
                "Bron, verkrijgingswijze, toestemming"
              ],
              [
                "Reconstructie",
                "Tijdlijn + betrokken accounts"
              ],
              [
                "Correlatie",
                "Chat + CRM + payment + login"
              ],
              [
                "Conclusie",
                "Claim + bewijs + alternatieve verklaring"
              ]
            ]
          }
        ]
      },
      {
        "number": "94",
        "title": "Audit van de zware claims — wat moet uit de tekst?",
        "lead": "De diepere monografieën bevatten krachtige cijfers en causale formuleringen. De wetenschappelijke kwaliteit van de reeks stijgt als die claims zichtbaar worden teruggezet naar hun bewijsstatus.",
        "blocks": [
          {
            "type": "para",
            "text": "De stellingen over “78% van 200 virale video’s”, “r=0,68 bij n=312”, “€2.100 per maand”, “r=-0,71 bij n=12”, “oxytocine +150%”, “D2 -22%” en vergelijkbare exacte effecten zijn in het beschikbare bronmateriaal niet voorzien van een controleerbare dataset, preregistratie of peer-reviewed analyse. Ze worden daarom niet herhaald als onderzoeksresultaten."
          },
          {
            "type": "para",
            "text": "Ook de formulering dat een markt bewust paranoia creëert om daarna de oplossing te verkopen is een intentieclaim. Een economisch systeem kan voordeel hebben bij vraag naar een product zonder dat daarmee een gecoördineerde intentie is bewezen. Het onderscheid tussen incentive en intentie wordt in deze editie expliciet gemaakt."
          },
          {
            "type": "para",
            "text": "Dezelfde correctie geldt voor de claim dat adult-tech de oorzaak is van dalende vruchtbaarheid. OECD en UNFPA beschrijven meerdere factoren — onder meer huisvesting, werk, onzekerheid, zorgkosten, partnerbeschikbaarheid en veranderende voorkeuren. Adult-tech kan als hypothese worden onderzocht, maar de bestaande gegevens dragen geen enkelvoudige causale conclusie."
          },
          {
            "type": "callout",
            "label": "REDACTIONELE CORRECTIE",
            "text": "Exacte cijfers zonder reproduceerbare methode worden in deze editie als onbevestigd aangemerkt en niet gebruikt als bewijs."
          },
          {
            "type": "table",
            "headers": [
              "Claim in bronmateriaal",
              "Status in 4.0",
              "Wat nodig is"
            ],
            "rows": [
              [
                "Carding/witwasstraat via",
                "Onbevestigd",
                "Strafdossier / toezichtsdata /"
              ],
              [
                "microtransacties",
                "",
                "processor-analyse"
              ]
            ]
          },
          {
            "type": "para",
            "text": "Adult-tech veroorzaakt lage Hypothese Longitudinaal, multivariaat onderzoek vruchtbaarheid"
          },
          {
            "type": "para",
            "text": "Gecoördineerde paranoia-strategie Hypothese Interne strategie-documenten + causal design"
          },
          {
            "type": "table",
            "headers": [
              "Exacte neurobiologische percentages",
              "Onvoldoende onderbouwd",
              "Peer-reviewed experiment / biometrische data"
            ],
            "rows": []
          },
          {
            "type": "para",
            "text": "Ghost-chatting / AI-chatting bestaat Gedocumenteerd Meerdere onafhankelijke bronnen + productdocs"
          }
        ]
      },
      {
        "number": "95",
        "title": "VHEMT als filosofische lens, niet als demografisch bewijs",
        "lead": "De VHEMT-koppeling is het meest overtuigend wanneer zij als filosofische spiegel wordt behandeld.",
        "blocks": [
          {
            "type": "para",
            "text": "VHEMT kan helpen nadenken over vrijwillige reproductieve keuzes, maar de stap van die filosofie naar een claim van “machinale steriliteit” vereist empirisch bewijs. De nieuwe editie houdt die twee lagen uit elkaar."
          },
          {
            "type": "para",
            "text": "Het onderzoek kan wél vragen of digitale substituten bepaalde vormen van partnerzoekgedrag beïnvloeden. Dat vraagt onderzoek naar tijdsbesteding, verwachtingen, relatievorming en eventuele substitutie-effecten, met controle voor inkomen, leeftijd, opleiding, woonkosten en sociale netwerken."
          },
          {
            "type": "callout",
            "label": "METHODOLOGISCH ONDERSCHEID",
            "text": "Filosofische compatibiliteit is geen causale empirische bevestiging."
          }
        ]
      },
      {
        "number": "SLOT",
        "title": "Kernbalans",
        "lead": "Deze slotpagina vat de redactionele lijn samen zonder de bronclaims als onafhankelijk bewezen feiten te presenteren.",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Het dossier leest adult-tech als een socio-technologisch systeem, niet alleen als een verzameling individuele transacties.",
              "De kernbegrippen zijn commodificatie, vervreemding, schaalbaarheid, CRM-profielen en de substitutie van fysieke naar digitale nabijheid.",
              "De VHEMT-koppeling is een filosofische synthese en moet als hypothese worden onderscheiden van empirisch bewezen causaliteit.",
              "De sterkste route voor vervolgonderzoek is triangulatie tussen documenten, technische artefacten en onafhankelijke sociologische data."
            ]
          },
          {
            "type": "callout",
            "label": "BRONSTATUS",
            "text": "Deze PDF is inhoudelijk afgeleid van de onderdelen over geindustrialiseerde exploitatie, VHEMT, maatschappelijke wapenisering, demografische implosie en de onderzoeks-triangulatie in het aangeleverde dossier. Deze Onderzoekseditie 4.0 voegt actuele openbare broncontrole toe per 19 september 2026 en markeert expliciet welke cijfers/claims uit het bronmateriaal niet onafhankelijk zijn geverifieerd."
          },
          {
            "type": "para",
            "text": "Leeswijzer voor verder onderzoek. De bron zelf noemt juridische documentatie, technische data en sociologische analyse als drie sporen voor triangulatie. In deze editie zijn die sporen samengebracht als redactionele structuur; ze zijn niet extern geverifieerd."
          }
        ]
      }
    ]
  },
  {
    "index": 2,
    "slug": "forensische-analyse",
    "title": "Forensische Analyse van de Achterkant",
    "subtitle": "Operations, CRM-profilering, chattermechaniek en salesfunnels",
    "kicker": "Operations · CRM · Chattermechaniek",
    "sections": [
      {
        "number": "01",
        "title": "De operationele keten: van profiel naar productieproces",
        "lead": "Het dossier beschrijft een operationele structuur waarin de zichtbare creator aan de voorkant en de feitelijke uitvoer aan de achterkant van elkaar kunnen worden losgekoppeld.",
        "blocks": [
          {
            "type": "para",
            "text": "De bron werkt met het beeld van een operatiecentrum. De gebruiker komt binnen met een behoefte of emotionele vraag. Die interactie wordt volgens het dossier verwerkt door een CRM-omgeving waarin informatie over voorkeuren, eerdere gesprekken, bestedingen en persoonlijke omstandigheden wordt vastgelegd. Vervolgens kan een chatter, team of geautomatiseerde tool de communicatie uitvoeren."
          },
          {
            "type": "para",
            "text": "Het belang van deze structuur is schaal. Een individuele creator kan maar een beperkt aantal gesprekken tegelijk voeren. Een agency kan volgens de beschrijving meerdere accounts, operators en campagnes coördineren en zo honderden of duizenden gesprekken parallel behandelen. Het technische systeem wordt daarmee niet langer ondersteunend, maar organiserend."
          },
          {
            "type": "para",
            "text": "De bron benadrukt dat de economische logica van een dergelijke structuur draait om retentie en gemiddelde opbrengst per gebruiker. Een gesprek is dan niet alleen een sociaal contactmoment, maar ook een datapunt dat kan worden geclassificeerd en opnieuw gebruikt. Daardoor kunnen dezelfde conversatiepatronen volgens het dossier over meerdere accounts of operators worden uitgerold."
          },
          {
            "type": "para",
            "text": "Als operationeel model is dit een belangrijk onderscheid: de merkidentiteit van de creator is een interface, terwijl de agency of het team de productiemiddelen beheert. Het dossier trekt daaruit vergaande conclusies over autonomie, transparantie en macht. In deze editie worden die conclusies als broninterpretaties weergegeven."
          },
          {
            "type": "table",
            "headers": [
              "Laag",
              "Zichtbare functie",
              "Operationele logica"
            ],
            "rows": []
          },
          {
            "type": "para",
            "text": "Creator-profiel Persoonlijke identiteit en content Trekt aandacht en onderhoudt merkbeeld"
          },
          {
            "type": "para",
            "text": "Chatter / operator Voert gesprekken Volgt scripts, behandelt bezwaren, stuurt op conversie"
          },
          {
            "type": "para",
            "text": "CRM / dashboard Opslag en overzicht Classificeert gebruikers en bewaakt contactgeschiedenis"
          },
          {
            "type": "table",
            "headers": [
              "Agency / management",
              "Coordinatie en schaal",
              "Verdeelt arbeid, targets en opbrengst"
            ],
            "rows": []
          }
        ]
      },
      {
        "number": "02",
        "title": "CRM en psychologische dossieropbouw",
        "lead": "Een centraal terugkerend element in het dossier is het CRM-profiel van de koper: niet alleen transacties, maar ook kwetsbaarheden zouden onderdeel van het operationele geheugen worden.",
        "blocks": [
          {
            "type": "para",
            "text": "Volgens de bron kunnen chatters informatie vastleggen over relatiebreuken, financiële situatie, persoonlijke voorkeuren, familiegebeurtenissen en andere kwetsbare onderwerpen. In het dossier wordt dit aangeduid als een verschuiving van klantservice naar psychologische profilering. De functie van het profiel is dan niet uitsluitend continuiteit in de dienstverlening, maar gerichte beïnvloeding."
          },
          {
            "type": "para",
            "text": "De bron beschrijft een tweede stap: wanneer zulke gegevens beschikbaar zijn, kunnen scripts worden afgestemd op de individuele gebruiker. Een bericht over eenzaamheid, bijvoorbeeld, krijgt dan een andere opvolging dan een zakelijke vraag. Het dossier noemt dit het \"wapenen van empathie\": menselijke attentheid wordt niet langer als doel op zichzelf behandeld, maar als instrument binnen een verkoopproces."
          },
          {
            "type": "para",
            "text": "Voor een forensisch onderzoek zou het verschil tussen bewering en bewijs hier bijzonder belangrijk zijn. Een CRM-interface laat zien dat informatie kan worden opgeslagen; een script of intern handboek kan laten zien hoe die informatie wordt gebruikt; alleen een complete keten van logs, instructies en concrete transacties kan vervolgens aantonen dat een specifieke beïnvloedingsactie ook daadwerkelijk is uitgevoerd."
          },
          {
            "type": "para",
            "text": "De bron noemt daarnaast AI-geassisteerde opvolging. LLM-modellen zouden antwoorden kunnen voorstellen op basis van eerder vastgelegde informatie. Daarmee ontstaat een operationele vraag: wie is verantwoordelijk voor de uiteindelijke boodschap wanneer menselijke operator, software en script samen de interactie produceren?"
          },
          {
            "type": "callout",
            "label": "FORENSISCH SPOOR",
            "text": "Zoek in een bewijsdossier naar de combinatie van CRM-velden, chatlogs, operatorinstructies en transactieregistraties. Eén screenshot bewijst een mogelijkheid; een gekoppelde reeks documenten kan een workflow aantonen."
          }
        ]
      },
      {
        "number": "03",
        "title": "De chatter als productiefunctie",
        "lead": "In het dossier is de chatter geen toevallige gesprekspartner maar een arbeidseenheid binnen een verkoopfunnel.",
        "blocks": [
          {
            "type": "para",
            "text": "De bron beschrijft een werkvloer waarin chatters meerdere gesprekken tegelijk beheren en waarin prestaties kunnen worden gemeten via responssnelheid, omzet, retentie of het aantal geactiveerde aankopen. De sociale rol van de chatter - doen alsof men luistert, geruststelt of emotioneel betrokken is - wordt daarmee onderdeel van het arbeidsproces."
          },
          {
            "type": "para",
            "text": "Een terugkerend thema is gamificatie. Dashboards, ranglijsten en bonussen zouden werknemers prikkelen om gebruikers zo lang mogelijk actief en betalend te houden. Het dossier beschrijft ook emotionele uitputting: wie urenlang intimiteit moet simuleren, kan volgens de bron zelf afstandelijk of cynisch worden ten opzichte van de persoon aan de andere kant van het scherm."
          },
          {
            "type": "para",
            "text": "De operationele realiteit botst daarmee met de marketingtaal van empowerment en persoonlijke connectie. Het dossier stelt dat de voorkant een individuele creator toont, terwijl de achterkant georganiseerd kan zijn als callcenter of e-commerce operatie. Die spanning vormt een van de centrale onderzoeksvragen van dit onderdeel."
          },
          {
            "type": "para",
            "text": "Ook de geografische dimensie komt terug. De bron beschrijft werkzaamheden in landen waar lonen lager liggen dan de opbrengsten aan de verkoopkant. De claim is dat emotionele arbeid zo grensoverschrijdend wordt uitbesteed. Deze passage vraagt bij vervolgonderzoek om arbeidsrechtelijke documentatie, loondata en contracten, niet alleen om anekdotische getuigenissen."
          }
        ]
      },
      {
        "number": "04",
        "title": "De verkoopfunnel en de chat-psychologie",
        "lead": "Het dossier beschrijft een vaste trechter waarin de interactie wordt opgebouwd van aandacht naar afhankelijkheid en uiteindelijk naar transactie.",
        "blocks": [
          {
            "type": "para",
            "text": "Vier fasen keren terug: valse herkenning, kwetsbaarheidsbinding, gecreeerde urgentie en retentie via toekomstbelofte. De bron beschrijft deze fasen als een reproduceerbaar scriptmodel. In de eerste fase krijgt de gebruiker het gevoel uniek te zijn. In de tweede fase wordt persoonlijke openheid uitgelokt. In de derde fase wordt een reden gecreeerd om direct geld uit te geven. In de vierde fase wordt toekomstige nabijheid als beloning in het vooruitzicht gesteld."
          },
          {
            "type": "para",
            "text": "De tekst noemt dit expliciet een sales funnel. Dat is analytisch relevant omdat de interactie dan niet alleen wordt beschreven als \"misleiding\", maar als een proces met conversiestappen. Voor een onderzoeker betekent dat dat verschillende gespreksscripts over meerdere accounts met elkaar kunnen worden vergeleken op vaste woorden, volgorde en timing."
          },
          {
            "type": "para",
            "text": "De bron beschrijft ook objection handling: vragen over identiteit, de wens om te bellen of af te spreken, en twijfels over geld zouden volgens de hypothese worden beantwoord met technieken die twijfel terugleiden naar schuldgevoel, loyaliteit of uitgestelde beloning."
          },
          {
            "type": "para",
            "text": "Omdat zulke scripts ook in legitieme verkoop voorkomen, is context essentieel. Niet iedere emotionele formulering is op zichzelf misleidend. De relevante onderzoeksvraag is of de combinatie van verborgen identiteit, persoonlijke profilering, druk en betaling een patroon vormt dat de consument redelijkerwijs niet kon verwachten."
          }
        ]
      },
      {
        "number": "05",
        "title": "Operations als systeem van macht en afhankelijkheid",
        "lead": "De operationele analyse mondt uit in een machtsvraag: wie controleert account, data, contract en toegang tot de gebruiker?",
        "blocks": [
          {
            "type": "para",
            "text": "Het dossier beschrijft een model waarin agencies inloggegevens, accountrechten en inkomstenstromen beheren. De creator kan daardoor afhankelijk worden van een organisatie die tegelijk marketing, klantencontact, technologie en betaling controleert. In de bron wordt dit de juridische of digitale gijzelingslus genoemd."
          },
          {
            "type": "para",
            "text": "Aan de gebruikerskant ontstaat een vergelijkbare asymmetrie: de creator of haar vertegenwoordiging ziet het CRM-profiel en verkoopdata, terwijl de koper niet altijd ziet wie de gesprekspartner werkelijk is, welke informatie is opgeslagen of hoe lang die informatie blijft bestaan. De operationele laag creëert zo volgens het dossier een asymmetrische kennisverdeling."
          },
          {
            "type": "para",
            "text": "Voor een forensisch onderzoek betekent dit dat een organisatiekaart belangrijker kan zijn dan een enkel incident. Wie heeft de accounts? Wie heeft toegang tot CRM? Wie bepaalt scripts? Wie kan betalingen blokkeren? Wie beheert content? Wie kan contracten beeindigen? De antwoorden leggen de echte keten bloot."
          },
          {
            "type": "para",
            "text": "De kern is dus niet alleen hoe een chat wordt gevoerd, maar hoe arbeid, data, identiteit en geld organisatorisch aan elkaar zijn gekoppeld. Dat is de achterkant die de zeven-delige reeks zichtbaar probeert te maken."
          }
        ]
      },
      {
        "number": "90",
        "title": "Bewijsarchitectuur 4.0 — wat telt als bewijs?",
        "lead": "De belangrijkste verbetering is een expliciete scheiding tussen bronmateriaal, verificatie, inferentie en hypothese.",
        "blocks": [
          {
            "type": "para",
            "text": "Een productpagina bewijst dat een leverancier een functie aanbiedt. Zij bewijst niet dat ieder bureau die functie gebruikt, dat de functie op een specifiek account is geactiveerd of dat de functie onrechtmatig wordt gebruikt. Die drie niveaus moeten afzonderlijk worden vastgelegd."
          },
          {
            "type": "para",
            "text": "Een journalistieke undercoverreportage kan operationele praktijken zeer concreet documenteren, maar een enkel bureau of één werknemer is niet automatisch representatief voor de hele markt. Een patroon wordt sterker wanneer meerdere onafhankelijke onderzoeken dezelfde werkwijze laten zien."
          },
          {
            "type": "para",
            "text": "Een juridische regel is geen bewijs dat een specifieke actor de regel heeft overtreden. De juridische analyse moet daarom steeds uit vier stappen bestaan: toepasselijke norm, feitelijke handeling, bewijs van die handeling en causaliteit tussen handeling en normschending."
          },
          {
            "type": "para",
            "text": "Statistische cijfers krijgen alleen de status van onderzoeksbevinding wanneer populatie, steekproef, meetmethode, onzekerheid en reproduceerbaarheid bekend zijn. In de aangeleverde latere monografieën komen bijvoorbeeld percentages en correlaties voor die niet met een openbaar dataset of methode zijn onderbouwd. Deze editie behandelt die cijfers daarom als onbevestigd bronmateriaal, niet als resultaten van dit onderzoek."
          },
          {
            "type": "callout",
            "label": "NIEUWE REGEL",
            "text": "Geen enkel cijfer uit de latere 21×21-monografieën wordt als empirisch feit gebruikt tenzij een onafhankelijke primaire of wetenschappelijke bron de methode en uitkomst draagt."
          },
          {
            "type": "table",
            "headers": [
              "Bronsoort",
              "Bewijst primair",
              "Bewijst niet automatisch"
            ],
            "rows": []
          },
          {
            "type": "para",
            "text": "Wet / uitspraak Norm of beslissing Dat een vergelijkbare actor dezelfde norm schendt"
          },
          {
            "type": "para",
            "text": "Productdocument Functie / ontwerpclaim Gebruik in de praktijk of onrechtmatigheid atie"
          },
          {
            "type": "para",
            "text": "Undercoveronderz Gedocumenteerde casus Sectorbreed percentage oek"
          },
          {
            "type": "para",
            "text": "Wetenschappelijke Resultaat binnen methode/populatie Causaliteit buiten de studie studie"
          },
          {
            "type": "para",
            "text": "Getuigenis / Aangeleverd artefact Authenticiteit zonder chain-of-custody screenshot"
          }
        ]
      },
      {
        "number": "91",
        "title": "Nieuwe bronlaag — AI-transparantie na 2 augustus 2026",
        "lead": "De juridische context is veranderd sinds de eerdere editie: de Europese Commissie publiceerde op 20 juli 2026 definitieve richtsnoeren over artikel 50 AI Act; de transparantieverplichtingen gelden vanaf 2 augustus 2026.",
        "blocks": [
          {
            "type": "para",
            "text": "De richtsnoeren zijn rechtstreeks relevant voor het dossier omdat zij het onderscheid verduidelijken tussen systemen die mensen rechtstreeks met AI laten interageren en andere vormen van AI-gegenereerde of gemanipuleerde content. Het relevante onderzoeksvraagstuk is niet simpelweg “is AI gebruikt?”, maar: welke actor is onder de verordening de provider of deployer, welk type systeem wordt gebruikt en welke transparantiehandeling is vereist?"
          },
          {
            "type": "para",
            "text": "Daarmee moet de oude formulering “de mens-in-the-loop is altijd vrijgesteld” worden vermeden. Een menselijke medewerker die AI-output controleert, maakt niet automatisch iedere interactie juridisch gelijk aan volledig menselijke communicatie. De feitelijke rol van het AI-systeem en de toepasselijke categorie moeten worden vastgesteld aan de hand van de verordening en de richtsnoeren."
          },
          {
            "type": "para",
            "text": "Voor het dossier ontstaat een concreet bewijsprotocol: bewaar modelversie, prompt/instellingen, generatie-output, menselijke edits, verzendmoment en identiteit van de verzender. Alleen dan kan achteraf worden vastgesteld welk deel van de interactie menselijk, AI-assisted of volledig geautomatiseerd was."
          },
          {
            "type": "callout",
            "label": "BRONCONTROLE",
            "text": "De Commissie stelt dat artikel 50-transparantieverplichtingen vanaf 2 augustus 2026 van toepassing zijn en heeft hiervoor richtsnoeren gepubliceerd."
          },
          {
            "type": "table",
            "headers": [
              "Interactietype",
              "Onderzoeksvraag",
              "Bewijsstuk"
            ],
            "rows": [
              [
                "Menselijke chatter",
                "Wie schreef/verzond?",
                "Accountlog + arbeidsrooster"
              ],
              [
                "AI-assisted",
                "Welke output kwam uit AI?",
                "Prompt/output + editlog"
              ],
              [
                "AI-direct",
                "Welke systeemfunctie communiceerde?",
                "Modelconfiguratie + verzendlog"
              ],
              [
                "Hybride team",
                "Wie had feitelijke controle?",
                "Role/permission + auditlog"
              ]
            ]
          }
        ]
      },
      {
        "number": "92",
        "title": "Nieuwe bronlaag — CRM als operationeel bewijsstuk",
        "lead": "De publieke documentatie van Infloww maakt het mogelijk de softwarelaag veel preciezer te beschrijven zonder te speculeren over verborgen databases.",
        "blocks": [
          {
            "type": "para",
            "text": "Infloww documenteert dat teams faninformatie kunnen zien zoals bestedingsgeschiedenis, aankoopfrequentie, laatste en hoogste uitgaven, locatie, lokale tijd, handmatig ingevoerde salarisinformatie en notities. Het systeem bevat daarnaast segmentatie op spending power en aankoopgedrag."
          },
          {
            "type": "para",
            "text": "De betekenis daarvan is methodologisch belangrijk. Het bewijst niet dat ieder bureau psychologische kwetsbaarheden verzamelt. Het bewijst wél dat een commercieel systeem het technisch mogelijk maakt om persoonlijke context en koopgedrag te combineren met communicatie en retentie. Dat is een controleerbaar ontwerpfeit."
          },
          {
            "type": "para",
            "text": "Voor een echte forensische audit zijn daarom de volgende artefacten essentieel: rollen en rechten, auditlogs, datavelden, exports, bewaartermijnen, verwerkersovereenkomsten, subverwerkers, gegevenslocaties en configuraties van automatische berichten. Screenshots van de interface zijn nuttig, maar logs zijn sterker."
          },
          {
            "type": "callout",
            "label": "BEWIJSGRENS",
            "text": "De leverancierdocumentatie ondersteunt de aanwezigheid van segmentatie- en personalisatiefuncties. Zij ondersteunt niet op zichzelf de stelling dat specifieke bureaus deze functies misbruiken."
          },
          {
            "type": "table",
            "headers": [
              "Artefact",
              "Wat het kan aantonen",
              "Sterkte"
            ],
            "rows": []
          },
          {
            "type": "para",
            "text": "Productpagina Ontwerp/functie Hoog voor feature-bestaan"
          },
          {
            "type": "para",
            "text": "Helpcenter Gedetailleerde werking Hoog voor operationeel ontwerp"
          },
          {
            "type": "table",
            "headers": [
              "Accountconfig",
              "Werkelijk geactiveerde functie",
              "Zeer hoog"
            ],
            "rows": [
              [
                "Auditlog",
                "Wie deed wat en wanneer",
                "Zeer hoog"
              ],
              [
                "Export / DB",
                "Welke data werkelijk aanwezig was",
                "Zeer hoog, mits"
              ],
              [
                "snapshot",
                "",
                "authenticiteit"
              ]
            ]
          }
        ]
      },
      {
        "number": "93",
        "title": "Forensisch protocol — van verhaal naar reproduceerbare case",
        "lead": "Een volgende editie kan veel sterker worden door iedere casus als een klein digitaal onderzoeksdossier te behandelen.",
        "blocks": [
          {
            "type": "para",
            "text": "Stap A: preserveer het bronbestand onveranderd en maak een cryptografische hash. Stap B: noteer datum, bron, verkrijgingswijze en eventuele toestemming. Stap C: maak een tijdlijn van account-, chat-, betalings- en personeelsgebeurtenissen. Stap D: vergelijk identiteit, IP, device, loginrol en verzendmomenten. Stap E: koppel ieder feit aan een bron-ID."
          },
          {
            "type": "para",
            "text": "Voor CRM-onderzoek moeten persoonsgegevens worden geminimaliseerd. Onderzoekers hebben niet noodzakelijk de inhoud van alle privégesprekken nodig om te bewijzen dat een team werkt met spending tiers of scripts. Een schema met geanonimiseerde identifiers kan hetzelfde mechanisme aantonen met minder privacyrisico."
          },
          {
            "type": "para",
            "text": "Voor financiële reconstructie moeten betalingsgegevens worden gescheiden van interpretatie. Een reeks microbetalingen is op zichzelf geen bewijs van carding of witwassen. Daarvoor zijn aanvullende signalen nodig, bijvoorbeeld chargebackpatronen, accountkoppelingen, afwijkende device-signalen, processor alerts, bankonderzoek of strafrechtelijke stukken."
          },
          {
            "type": "callout",
            "label": "CHAIN OF CUSTODY",
            "text": "Zonder herkomst, integriteit en tijdlijn van een digitaal artefact blijft een screenshot illustratief in plaats van forensisch beslissend."
          },
          {
            "type": "table",
            "headers": [
              "Fase",
              "Minimumdocumentatie"
            ],
            "rows": [
              [
                "Preservatie",
                "Origineel bestand + hash + datum"
              ],
              [
                "Context",
                "Bron, verkrijgingswijze, toestemming"
              ],
              [
                "Reconstructie",
                "Tijdlijn + betrokken accounts"
              ],
              [
                "Correlatie",
                "Chat + CRM + payment + login"
              ],
              [
                "Conclusie",
                "Claim + bewijs + alternatieve verklaring"
              ]
            ]
          }
        ]
      },
      {
        "number": "94",
        "title": "Audit van de zware claims — wat moet uit de tekst?",
        "lead": "De diepere monografieën bevatten krachtige cijfers en causale formuleringen. De wetenschappelijke kwaliteit van de reeks stijgt als die claims zichtbaar worden teruggezet naar hun bewijsstatus.",
        "blocks": [
          {
            "type": "para",
            "text": "De stellingen over “78% van 200 virale video’s”, “r=0,68 bij n=312”, “€2.100 per maand”, “r=-0,71 bij n=12”, “oxytocine +150%”, “D2 -22%” en vergelijkbare exacte effecten zijn in het beschikbare bronmateriaal niet voorzien van een controleerbare dataset, preregistratie of peer-reviewed analyse. Ze worden daarom niet herhaald als onderzoeksresultaten."
          },
          {
            "type": "para",
            "text": "Ook de formulering dat een markt bewust paranoia creëert om daarna de oplossing te verkopen is een intentieclaim. Een economisch systeem kan voordeel hebben bij vraag naar een product zonder dat daarmee een gecoördineerde intentie is bewezen. Het onderscheid tussen incentive en intentie wordt in deze editie expliciet gemaakt."
          },
          {
            "type": "para",
            "text": "Dezelfde correctie geldt voor de claim dat adult-tech de oorzaak is van dalende vruchtbaarheid. OECD en UNFPA beschrijven meerdere factoren — onder meer huisvesting, werk, onzekerheid, zorgkosten, partnerbeschikbaarheid en veranderende voorkeuren. Adult-tech kan als hypothese worden onderzocht, maar de bestaande gegevens dragen geen enkelvoudige causale conclusie."
          },
          {
            "type": "callout",
            "label": "REDACTIONELE CORRECTIE",
            "text": "Exacte cijfers zonder reproduceerbare methode worden in deze editie als onbevestigd aangemerkt en niet gebruikt als bewijs."
          },
          {
            "type": "table",
            "headers": [
              "Claim in bronmateriaal",
              "Status in 4.0",
              "Wat nodig is"
            ],
            "rows": [
              [
                "Carding/witwasstraat via",
                "Onbevestigd",
                "Strafdossier / toezichtsdata /"
              ],
              [
                "microtransacties",
                "",
                "processor-analyse"
              ]
            ]
          },
          {
            "type": "para",
            "text": "Adult-tech veroorzaakt lage Hypothese Longitudinaal, multivariaat onderzoek vruchtbaarheid"
          },
          {
            "type": "para",
            "text": "Gecoördineerde paranoia-strategie Hypothese Interne strategie-documenten + causal design"
          },
          {
            "type": "table",
            "headers": [
              "Exacte neurobiologische percentages",
              "Onvoldoende onderbouwd",
              "Peer-reviewed experiment / biometrische data"
            ],
            "rows": []
          },
          {
            "type": "para",
            "text": "Ghost-chatting / AI-chatting bestaat Gedocumenteerd Meerdere onafhankelijke bronnen + productdocs"
          }
        ]
      },
      {
        "number": "95",
        "title": "Arbeid achter de interface — wat is aantoonbaar?",
        "lead": "Onderzoeksjournalistiek heeft de werkvloer concreter gemaakt, maar de reeks moet onderscheid blijven maken tussen casus en sector.",
        "blocks": [
          {
            "type": "para",
            "text": "Reuters rapporteerde in 2024 over chatters en AI-tools; WIRED beschreef undercover werk als chatter. Die bronnen maken het aannemelijk dat ghostwriting en commerciële gespreksvoering geen fictief randverschijnsel zijn."
          },
          {
            "type": "para",
            "text": "Voor sectorbrede uitspraken blijft een representatieve steekproef nodig. Een professionele editie moet daarom liever zeggen “gedocumenteerd bij onderzochte agencies/accounts” dan “de sector doet dit”."
          },
          {
            "type": "para",
            "text": "Een toekomstige studie kan vacatures, trainingsmateriaal, pay structures, shiftroosters en software-permissions coderen. Zo kan worden onderzocht hoe vaak impersonatie, upselling en retentie als formele taken voorkomen."
          },
          {
            "type": "callout",
            "label": "STERKE FORMULERING",
            "text": "“Gedocumenteerd in onderzochte cases” is sterker dan een onbewezen sectorpercentage."
          }
        ]
      },
      {
        "number": "SLOT",
        "title": "Operationele kern",
        "lead": "Deze slotpagina vat de redactionele lijn samen zonder de bronclaims als onafhankelijk bewezen feiten te presenteren.",
        "blocks": [
          {
            "type": "list",
            "items": [
              "De bron beschrijft een scheiding tussen zichtbare creator en operationele backend.",
              "CRM-data is in het dossier zowel geheugen als beïnvloedingslaag.",
              "Chatters worden voorgesteld als schaalbare productiefactoren binnen een sales funnel.",
              "De belangrijkste forensische vraag is de koppeling tussen accountrechten, scripts, data en transacties."
            ]
          },
          {
            "type": "callout",
            "label": "BRONSTATUS",
            "text": "Gebaseerd op de passages over CRM-dossiervorming, ghost chatting, chatter manuals, sales funnels, worker conditions, juridische gijzelingslussen en technische operations in het aangeleverde dossier. Deze Onderzoekseditie 4.0 voegt actuele openbare broncontrole toe per 19 september 2026 en markeert expliciet welke cijfers/claims uit het bronmateriaal niet onafhankelijk zijn geverifieerd."
          },
          {
            "type": "para",
            "text": "Leeswijzer voor verder onderzoek. De bron zelf noemt juridische documentatie, technische data en sociologische analyse als drie sporen voor triangulatie. In deze editie zijn die sporen samengebracht als redactionele structuur; ze zijn niet extern geverifieerd."
          }
        ]
      }
    ]
  },
  {
    "index": 3,
    "slug": "economische-architectuur",
    "title": "Economische Architectuur & Financiële Stromen",
    "subtitle": "Microtransacties, cardinghypotheses, PSP-structuren en offshore lagen",
    "kicker": "Economie · Betalingen · Offshore",
    "sections": [
      {
        "number": "01",
        "title": "De geldstroom als tweede ruggengraat",
        "lead": "Waar de operations-laag de menselijke interactie organiseert, beschrijft het dossier de betalingsinfrastructuur als tweede ruggengraat van het systeem.",
        "blocks": [
          {
            "type": "para",
            "text": "De bron presenteert een keten waarin betalingen vanaf gebruikers via platform- of payment-service-lagen uiteindelijk bij agencies, creators en tussenbedrijven terechtkomen. Het dossier benadrukt vooral de versnippering: verschillende entiteiten, landen en betaalproviders kunnen deel uitmaken van dezelfde geldstroom."
          },
          {
            "type": "para",
            "text": "Voor de lezer is het nuttig om drie lagen uit elkaar te houden. De eerste is het consumentenmoment: een aankoop, fooi of microtransactie. De tweede is de verwerkingslaag: platform, PSP of merchant account. De derde is de bedrijfslaag: agency, holding, uitbetalingsentiteit of andere ontvanger. De bron suggereert dat juist de combinatie van die lagen het zicht op de uiteindelijke begunstigde kan bemoeilijken."
          },
          {
            "type": "para",
            "text": "Het dossier gebruikt dit ook om te verklaren waarom individuele kleine betalingen analytisch weinig zeggen. Een groot aantal kleine transacties kan samen een aanzienlijk patroon vormen. Voor financieel onderzoek verschuift de aandacht daarom van een enkele betaling naar frequentie, timing, tegenpartijen en de route van uitbetaling."
          },
          {
            "type": "para",
            "text": "Deze PDF behandelt carding en witwaspraktijken uitsluitend als beschrijvingen van de bronclaim. Er worden geen operationele stappen of instructies gegeven voor het uitvoeren van fraude. Het relevante onderzoeksdoel is het herkennen van geldstromen, verantwoordelijkheden en afwijkende patronen."
          },
          {
            "type": "callout",
            "label": "ONDERZOEKSPRINCIPE",
            "text": "Volg geldstromen als keten: consument -> platform/PSP -> uitbetalingslaag -> uiteindelijke begunstigde. De dossierclaim moet voor elke overgang met primaire documenten worden onderbouwd."
          }
        ]
      },
      {
        "number": "02",
        "title": "Microtransacties, chargebacks en de \"sokken-hype\"",
        "lead": "Een van de opvallendste casussen in het dossier is de claim dat kleine, ogenschijnlijk triviale aankopen een dekmantel kunnen vormen voor criminele geldstromen.",
        "blocks": [
          {
            "type": "para",
            "text": "De bron beschrijft een \"sokken-trend\" en vergelijkbare hypeproducten als publieke voorkant van transacties die volgens de auteur in werkelijkheid kunnen worden gebruikt voor carding of witwasdoeleinden. De kern van de hypothese is schaal: duizenden kleine bedragen zouden minder opvallend kunnen zijn dan enkele grote transacties, terwijl de uitbetalingsketen steeds meer financiële data produceert."
          },
          {
            "type": "para",
            "text": "Voor een forensische analyse zijn vooral drie kenmerken relevant. Ten eerste herhaling: hetzelfde patroon komt terug over veel accounts of transacties. Ten tweede timing: betalingen en uitbetalingen kunnen kort na elkaar plaatsvinden. Ten derde mismatches: er kunnen verschillen bestaan tussen de geclaimde economische activiteit, de fysieke levering en de geldstromen."
          },
          {
            "type": "para",
            "text": "Het dossier stelt dat chargebacks of klachten pas later zichtbaar kunnen worden, waardoor de eerste ontvanger het bedrag al kan hebben doorgestuurd. Dit is een bronclaim over timing, geen vaststaand feit. Een echt onderzoek zou bankgegevens, processorlogs, platformregistraties en chargebackdata naast elkaar moeten leggen."
          },
          {
            "type": "para",
            "text": "De case laat zien waarom financieel onderzoek beter werkt op patroon- dan op incidentniveau. Een losse ongebruikelijke aankoop is niet hetzelfde als een systematisch netwerk. Het onderscheid ontstaat pas wanneer tientallen of honderden transacties als serie worden bekeken."
          }
        ]
      },
      {
        "number": "03",
        "title": "PSP's, high-risk processors en offshore lagen",
        "lead": "Het dossier beschrijft internationale betaalstructuren als een vorm van jurisdictioneel opportunisme: verschillende schakels hebben elk een beperkt zicht op het geheel.",
        "blocks": [
          {
            "type": "para",
            "text": "In de bron worden betaalverwerkers, holdings en operationele agencies geografisch gescheiden. De gebruikte voorbeelden noemen onder meer Europa, de Verenigde Staten, Cyprus, Delaware en Dubai. Het analytische punt is niet dat elk genoemd rechtsgebied verdacht zou zijn, maar dat internationale verspreiding verantwoordelijkheid kan versnipperen."
          },
          {
            "type": "para",
            "text": "De bron suggereert dat high-risk payment processors een rol kunnen spelen wanneer een sector veel chargebacks, gevoelige content of complexe consumentengeschillen kent. De juridische beoordeling daarvan is contextafhankelijk. Voor dit dossier betekent het vooral dat de betalingslaag niet als een neutrale technische infrastructuur moet worden behandeld, maar als een plek waar compliance, risico en bedrijfskeuzes samenkomen."
          },
          {
            "type": "para",
            "text": "Een financieel onderzoek zou daarom moeten vragen wie de merchant of record is, wie de rekeninghouder is, welke entiteit de payout ontvangt, onder welke voorwaarden de PSP werkt, en welke KYC/AML-verplichtingen gelden. Het dossier formuleert die vragen impliciet; deze editie maakt ze explicieter als onderzoeksagenda."
          },
          {
            "type": "para",
            "text": "De offshore-structuur is in de bron een mechanisme van ondoorzichtigheid. Dat is een hypothese die pas hard wordt wanneer bedrijfsregisters, aandeelhoudersdocumenten, service agreements en betaaldata daadwerkelijk aan elkaar kunnen worden gekoppeld."
          },
          {
            "type": "table",
            "headers": [
              "Schakel",
              "Wat het dossier onderzoekt",
              "Benodigde primaire data"
            ],
            "rows": [
              [
                "Consument",
                "Wie betaalt, hoe vaak en waarvoor?",
                "Transactie- en accountlogs"
              ]
            ]
          },
          {
            "type": "para",
            "text": "PSP / platform Hoe wordt betaald en uitbetaald? Merchant files, payout data, KYC/AML"
          },
          {
            "type": "para",
            "text": "Agency / holding Wie ontvangt en controleert de opbrengst? Registerdata, contracten, bankrecords"
          },
          {
            "type": "para",
            "text": "Tussenentiteit Waarom bestaat de tussenlaag? UBO-, factuur- en service-documenten"
          }
        ]
      },
      {
        "number": "04",
        "title": "CRM als omzetinfrastructuur",
        "lead": "Naast de betalingsverwerking beschrijft het dossier CRM-software als een instrument om economische activiteit te organiseren en te optimaliseren.",
        "blocks": [
          {
            "type": "para",
            "text": "CRM-systemen worden in de bron voorgesteld als de plek waar gebruiker, chatgeschiedenis en omzet samenkomen. Daardoor kan een bureau niet alleen zien wie actief is, maar ook wie eerder heeft betaald, waar de interactie stokt en welke gebruikers mogelijk opnieuw kunnen worden geactiveerd."
          },
          {
            "type": "para",
            "text": "De economische betekenis daarvan is groot. Een CRM maakt het mogelijk om verkooparbeid te centraliseren: scripts, follow-ups, betalingen en content kunnen aan één gebruikersprofiel worden gekoppeld. De bron beschrijft dit als een verschuiving van \"chat\" naar systeemgestuurd omzetmanagement."
          },
          {
            "type": "para",
            "text": "Voor financieel forensisch onderzoek is dit interessant omdat CRM-data een brug kan vormen tussen gedragsdata en gelddata. Een gebruiker die volgens de chatoperator een bepaalde status heeft, kan vervolgens een specifiek omzetpatroon vertonen. Alleen wanneer die twee datasets samen worden bekeken, kan de onderzoeker zien of er structurele verbanden zijn."
          },
          {
            "type": "para",
            "text": "Het risico is tegelijk dat analytische taal gemakkelijk verandert in een beschuldiging. Dat een CRM omzetoptimalisatie ondersteunt, bewijst niet dat sprake is van fraude. De juridische betekenis hangt af van toestemming, transparantie, daadwerkelijke uitvoering en de herkomst van transacties."
          }
        ]
      },
      {
        "number": "05",
        "title": "Financiële reconstructie: van transactie naar systeem",
        "lead": "De financiële architectuur van het dossier vraagt om een reconstructie die verder gaat dan individuele voorbeelden.",
        "blocks": [
          {
            "type": "para",
            "text": "De meest robuuste aanpak is een tijdlijn. Start met de consumententransactie, leg vast welk account en welke entiteit erbij hoort, noteer welke PSP heeft verwerkt, volg de payout en identificeer vervolgens de uiteindelijke ontvangende partij. Herhaal dit over een steekproef. Pas daarna ontstaat zicht op de vraag of de casus incidenteel of systematisch is."
          },
          {
            "type": "para",
            "text": "Het dossier voegt daar een tweede dimensie aan toe: organisatie. Wie bepaalt welke transacties worden aangemoedigd? Wie beheert de scripts? Wie ontvangt commissies? Wie kan terugbetalingen of blokkades uitvoeren? Door financiële data te koppelen aan operationele data kan een onderzoeker onderscheid maken tussen gewone schaal en daadwerkelijk verdacht gedrag."
          },
          {
            "type": "para",
            "text": "Een derde dimensie is geografie. De bron beschrijft grensoverschrijdende structuren als bron van onduidelijkheid. Een professionele analyse zou die claim moeten vertalen naar concrete registerinformatie, UBO-data, bankrekeningen, processorvoorwaarden en contractuele verbindingen."
          },
          {
            "type": "para",
            "text": "De uitkomst hoeft niet vooraf vast te staan. De kracht van de financiële forensiek ligt juist in het vermogen om de bronclaim te falsificeren of te bevestigen. De zeven-delige reeks gebruikt die methodische houding als tegenwicht tegen retoriek."
          }
        ]
      },
      {
        "number": "90",
        "title": "Bewijsarchitectuur 4.0 — wat telt als bewijs?",
        "lead": "De belangrijkste verbetering is een expliciete scheiding tussen bronmateriaal, verificatie, inferentie en hypothese.",
        "blocks": [
          {
            "type": "para",
            "text": "Een productpagina bewijst dat een leverancier een functie aanbiedt. Zij bewijst niet dat ieder bureau die functie gebruikt, dat de functie op een specifiek account is geactiveerd of dat de functie onrechtmatig wordt gebruikt. Die drie niveaus moeten afzonderlijk worden vastgelegd."
          },
          {
            "type": "para",
            "text": "Een journalistieke undercoverreportage kan operationele praktijken zeer concreet documenteren, maar een enkel bureau of één werknemer is niet automatisch representatief voor de hele markt. Een patroon wordt sterker wanneer meerdere onafhankelijke onderzoeken dezelfde werkwijze laten zien."
          },
          {
            "type": "para",
            "text": "Een juridische regel is geen bewijs dat een specifieke actor de regel heeft overtreden. De juridische analyse moet daarom steeds uit vier stappen bestaan: toepasselijke norm, feitelijke handeling, bewijs van die handeling en causaliteit tussen handeling en normschending."
          },
          {
            "type": "para",
            "text": "Statistische cijfers krijgen alleen de status van onderzoeksbevinding wanneer populatie, steekproef, meetmethode, onzekerheid en reproduceerbaarheid bekend zijn. In de aangeleverde latere monografieën komen bijvoorbeeld percentages en correlaties voor die niet met een openbaar dataset of methode zijn onderbouwd. Deze editie behandelt die cijfers daarom als onbevestigd bronmateriaal, niet als resultaten van dit onderzoek."
          },
          {
            "type": "callout",
            "label": "NIEUWE REGEL",
            "text": "Geen enkel cijfer uit de latere 21×21-monografieën wordt als empirisch feit gebruikt tenzij een onafhankelijke primaire of wetenschappelijke bron de methode en uitkomst draagt."
          },
          {
            "type": "table",
            "headers": [
              "Bronsoort",
              "Bewijst primair",
              "Bewijst niet automatisch"
            ],
            "rows": []
          },
          {
            "type": "para",
            "text": "Wet / uitspraak Norm of beslissing Dat een vergelijkbare actor dezelfde norm schendt"
          },
          {
            "type": "para",
            "text": "Productdocument Functie / ontwerpclaim Gebruik in de praktijk of onrechtmatigheid atie"
          },
          {
            "type": "para",
            "text": "Undercoveronderz Gedocumenteerde casus Sectorbreed percentage oek"
          },
          {
            "type": "para",
            "text": "Wetenschappelijke Resultaat binnen methode/populatie Causaliteit buiten de studie studie"
          },
          {
            "type": "para",
            "text": "Getuigenis / Aangeleverd artefact Authenticiteit zonder chain-of-custody screenshot"
          }
        ]
      },
      {
        "number": "91",
        "title": "Nieuwe bronlaag — AI-transparantie na 2 augustus 2026",
        "lead": "De juridische context is veranderd sinds de eerdere editie: de Europese Commissie publiceerde op 20 juli 2026 definitieve richtsnoeren over artikel 50 AI Act; de transparantieverplichtingen gelden vanaf 2 augustus 2026.",
        "blocks": [
          {
            "type": "para",
            "text": "De richtsnoeren zijn rechtstreeks relevant voor het dossier omdat zij het onderscheid verduidelijken tussen systemen die mensen rechtstreeks met AI laten interageren en andere vormen van AI-gegenereerde of gemanipuleerde content. Het relevante onderzoeksvraagstuk is niet simpelweg “is AI gebruikt?”, maar: welke actor is onder de verordening de provider of deployer, welk type systeem wordt gebruikt en welke transparantiehandeling is vereist?"
          },
          {
            "type": "para",
            "text": "Daarmee moet de oude formulering “de mens-in-the-loop is altijd vrijgesteld” worden vermeden. Een menselijke medewerker die AI-output controleert, maakt niet automatisch iedere interactie juridisch gelijk aan volledig menselijke communicatie. De feitelijke rol van het AI-systeem en de toepasselijke categorie moeten worden vastgesteld aan de hand van de verordening en de richtsnoeren."
          },
          {
            "type": "para",
            "text": "Voor het dossier ontstaat een concreet bewijsprotocol: bewaar modelversie, prompt/instellingen, generatie-output, menselijke edits, verzendmoment en identiteit van de verzender. Alleen dan kan achteraf worden vastgesteld welk deel van de interactie menselijk, AI-assisted of volledig geautomatiseerd was."
          },
          {
            "type": "callout",
            "label": "BRONCONTROLE",
            "text": "De Commissie stelt dat artikel 50-transparantieverplichtingen vanaf 2 augustus 2026 van toepassing zijn en heeft hiervoor richtsnoeren gepubliceerd."
          },
          {
            "type": "table",
            "headers": [
              "Interactietype",
              "Onderzoeksvraag",
              "Bewijsstuk"
            ],
            "rows": [
              [
                "Menselijke chatter",
                "Wie schreef/verzond?",
                "Accountlog + arbeidsrooster"
              ],
              [
                "AI-assisted",
                "Welke output kwam uit AI?",
                "Prompt/output + editlog"
              ],
              [
                "AI-direct",
                "Welke systeemfunctie communiceerde?",
                "Modelconfiguratie + verzendlog"
              ],
              [
                "Hybride team",
                "Wie had feitelijke controle?",
                "Role/permission + auditlog"
              ]
            ]
          }
        ]
      },
      {
        "number": "92",
        "title": "Nieuwe bronlaag — CRM als operationeel bewijsstuk",
        "lead": "De publieke documentatie van Infloww maakt het mogelijk de softwarelaag veel preciezer te beschrijven zonder te speculeren over verborgen databases.",
        "blocks": [
          {
            "type": "para",
            "text": "Infloww documenteert dat teams faninformatie kunnen zien zoals bestedingsgeschiedenis, aankoopfrequentie, laatste en hoogste uitgaven, locatie, lokale tijd, handmatig ingevoerde salarisinformatie en notities. Het systeem bevat daarnaast segmentatie op spending power en aankoopgedrag."
          },
          {
            "type": "para",
            "text": "De betekenis daarvan is methodologisch belangrijk. Het bewijst niet dat ieder bureau psychologische kwetsbaarheden verzamelt. Het bewijst wél dat een commercieel systeem het technisch mogelijk maakt om persoonlijke context en koopgedrag te combineren met communicatie en retentie. Dat is een controleerbaar ontwerpfeit."
          },
          {
            "type": "para",
            "text": "Voor een echte forensische audit zijn daarom de volgende artefacten essentieel: rollen en rechten, auditlogs, datavelden, exports, bewaartermijnen, verwerkersovereenkomsten, subverwerkers, gegevenslocaties en configuraties van automatische berichten. Screenshots van de interface zijn nuttig, maar logs zijn sterker."
          },
          {
            "type": "callout",
            "label": "BEWIJSGRENS",
            "text": "De leverancierdocumentatie ondersteunt de aanwezigheid van segmentatie- en personalisatiefuncties. Zij ondersteunt niet op zichzelf de stelling dat specifieke bureaus deze functies misbruiken."
          },
          {
            "type": "table",
            "headers": [
              "Artefact",
              "Wat het kan aantonen",
              "Sterkte"
            ],
            "rows": []
          },
          {
            "type": "para",
            "text": "Productpagina Ontwerp/functie Hoog voor feature-bestaan"
          },
          {
            "type": "para",
            "text": "Helpcenter Gedetailleerde werking Hoog voor operationeel ontwerp"
          },
          {
            "type": "table",
            "headers": [
              "Accountconfig",
              "Werkelijk geactiveerde functie",
              "Zeer hoog"
            ],
            "rows": [
              [
                "Auditlog",
                "Wie deed wat en wanneer",
                "Zeer hoog"
              ],
              [
                "Export / DB",
                "Welke data werkelijk aanwezig was",
                "Zeer hoog, mits"
              ],
              [
                "snapshot",
                "",
                "authenticiteit"
              ]
            ]
          }
        ]
      },
      {
        "number": "93",
        "title": "Forensisch protocol — van verhaal naar reproduceerbare case",
        "lead": "Een volgende editie kan veel sterker worden door iedere casus als een klein digitaal onderzoeksdossier te behandelen.",
        "blocks": [
          {
            "type": "para",
            "text": "Stap A: preserveer het bronbestand onveranderd en maak een cryptografische hash. Stap B: noteer datum, bron, verkrijgingswijze en eventuele toestemming. Stap C: maak een tijdlijn van account-, chat-, betalings- en personeelsgebeurtenissen. Stap D: vergelijk identiteit, IP, device, loginrol en verzendmomenten. Stap E: koppel ieder feit aan een bron-ID."
          },
          {
            "type": "para",
            "text": "Voor CRM-onderzoek moeten persoonsgegevens worden geminimaliseerd. Onderzoekers hebben niet noodzakelijk de inhoud van alle privégesprekken nodig om te bewijzen dat een team werkt met spending tiers of scripts. Een schema met geanonimiseerde identifiers kan hetzelfde mechanisme aantonen met minder privacyrisico."
          },
          {
            "type": "para",
            "text": "Voor financiële reconstructie moeten betalingsgegevens worden gescheiden van interpretatie. Een reeks microbetalingen is op zichzelf geen bewijs van carding of witwassen. Daarvoor zijn aanvullende signalen nodig, bijvoorbeeld chargebackpatronen, accountkoppelingen, afwijkende device-signalen, processor alerts, bankonderzoek of strafrechtelijke stukken."
          },
          {
            "type": "callout",
            "label": "CHAIN OF CUSTODY",
            "text": "Zonder herkomst, integriteit en tijdlijn van een digitaal artefact blijft een screenshot illustratief in plaats van forensisch beslissend."
          },
          {
            "type": "table",
            "headers": [
              "Fase",
              "Minimumdocumentatie"
            ],
            "rows": [
              [
                "Preservatie",
                "Origineel bestand + hash + datum"
              ],
              [
                "Context",
                "Bron, verkrijgingswijze, toestemming"
              ],
              [
                "Reconstructie",
                "Tijdlijn + betrokken accounts"
              ],
              [
                "Correlatie",
                "Chat + CRM + payment + login"
              ],
              [
                "Conclusie",
                "Claim + bewijs + alternatieve verklaring"
              ]
            ]
          }
        ]
      },
      {
        "number": "94",
        "title": "Audit van de zware claims — wat moet uit de tekst?",
        "lead": "De diepere monografieën bevatten krachtige cijfers en causale formuleringen. De wetenschappelijke kwaliteit van de reeks stijgt als die claims zichtbaar worden teruggezet naar hun bewijsstatus.",
        "blocks": [
          {
            "type": "para",
            "text": "De stellingen over “78% van 200 virale video’s”, “r=0,68 bij n=312”, “€2.100 per maand”, “r=-0,71 bij n=12”, “oxytocine +150%”, “D2 -22%” en vergelijkbare exacte effecten zijn in het beschikbare bronmateriaal niet voorzien van een controleerbare dataset, preregistratie of peer-reviewed analyse. Ze worden daarom niet herhaald als onderzoeksresultaten."
          },
          {
            "type": "para",
            "text": "Ook de formulering dat een markt bewust paranoia creëert om daarna de oplossing te verkopen is een intentieclaim. Een economisch systeem kan voordeel hebben bij vraag naar een product zonder dat daarmee een gecoördineerde intentie is bewezen. Het onderscheid tussen incentive en intentie wordt in deze editie expliciet gemaakt."
          },
          {
            "type": "para",
            "text": "Dezelfde correctie geldt voor de claim dat adult-tech de oorzaak is van dalende vruchtbaarheid. OECD en UNFPA beschrijven meerdere factoren — onder meer huisvesting, werk, onzekerheid, zorgkosten, partnerbeschikbaarheid en veranderende voorkeuren. Adult-tech kan als hypothese worden onderzocht, maar de bestaande gegevens dragen geen enkelvoudige causale conclusie."
          },
          {
            "type": "callout",
            "label": "REDACTIONELE CORRECTIE",
            "text": "Exacte cijfers zonder reproduceerbare methode worden in deze editie als onbevestigd aangemerkt en niet gebruikt als bewijs."
          },
          {
            "type": "table",
            "headers": [
              "Claim in bronmateriaal",
              "Status in 4.0",
              "Wat nodig is"
            ],
            "rows": [
              [
                "Carding/witwasstraat via",
                "Onbevestigd",
                "Strafdossier / toezichtsdata /"
              ],
              [
                "microtransacties",
                "",
                "processor-analyse"
              ]
            ]
          },
          {
            "type": "para",
            "text": "Adult-tech veroorzaakt lage Hypothese Longitudinaal, multivariaat onderzoek vruchtbaarheid"
          },
          {
            "type": "para",
            "text": "Gecoördineerde paranoia-strategie Hypothese Interne strategie-documenten + causal design"
          },
          {
            "type": "table",
            "headers": [
              "Exacte neurobiologische percentages",
              "Onvoldoende onderbouwd",
              "Peer-reviewed experiment / biometrische data"
            ],
            "rows": []
          },
          {
            "type": "para",
            "text": "Ghost-chatting / AI-chatting bestaat Gedocumenteerd Meerdere onafhankelijke bronnen + productdocs"
          }
        ]
      },
      {
        "number": "95",
        "title": "Financiële infrastructuur — van omzet naar compliance",
        "lead": "De financiële sectie wordt sterker wanneer reguliere payment operations en criminele fraude niet door elkaar worden gehaald.",
        "blocks": [
          {
            "type": "para",
            "text": "OnlyFans-jaarrekeningen en onafhankelijke compilaties laten een grote betalingsstroom zien. Dat zegt niets over illegale herkomst. Het relevante onderzoek is de governance rond betalingen, chargebacks, refunds, KYC en processor-monitoring."
          },
          {
            "type": "para",
            "text": "EBA-publicaties onderstrepen dat payment fraud en crypto-asset ML/TF risico’s reële toezichtsdomeinen zijn. Zij leveren echter geen bewijs dat adult-tech als sector een witwasstraat vormt."
          },
          {
            "type": "para",
            "text": "Een goede audit onderzoekt daarom anomalieën: ongebruikelijke chargebacks, accountclusters, device-overlap, processor alerts, onverklaarde uitbetalingsketens en inconsistenties tussen identiteit en begunstigde. Alleen de combinatie kan aanleiding zijn voor een criminele hypothese."
          },
          {
            "type": "callout",
            "label": "CRUCIALE SCHEIDING",
            "text": "Frauderisico ≠ bewezen witwas. De bronstatus moet dat onderscheid zichtbaar houden."
          }
        ]
      },
      {
        "number": "SLOT",
        "title": "Financiele kern",
        "lead": "Deze slotpagina vat de redactionele lijn samen zonder de bronclaims als onafhankelijk bewezen feiten te presenteren.",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Het dossier behandelt microtransacties als patroonvraag, niet als incidentvraag.",
              "Betalingsproviders, offshore entiteiten en agencies vormen samen de te reconstrueren keten.",
              "CRM-data kan de brug vormen tussen gebruikersgedrag en omzet, maar bewijst op zichzelf geen fraude.",
              "Primaire financiële documenten zijn noodzakelijk om de sterke claims uit de bron te toetsen."
            ]
          },
          {
            "type": "callout",
            "label": "BRONSTATUS",
            "text": "Gebaseerd op de delen over microtransacties, carding, payment processors, offshore structuren, CRM-omzetstromen en de financiële casuistiek in het aangeleverde dossier. Deze Onderzoekseditie 4.0 voegt actuele openbare broncontrole toe per 19 september 2026 en markeert expliciet welke cijfers/claims uit het bronmateriaal niet onafhankelijk zijn geverifieerd."
          },
          {
            "type": "para",
            "text": "Leeswijzer voor verder onderzoek. De bron zelf noemt juridische documentatie, technische data en sociologische analyse als drie sporen voor triangulatie. In deze editie zijn die sporen samengebracht als redactionele structuur; ze zijn niet extern geverifieerd."
          }
        ]
      }
    ]
  },
  {
    "index": 4,
    "slug": "automatisering-ai",
    "title": "Automatisering, AI-Pipelines & De Synthetische Mens",
    "subtitle": "LLM-workflows, script-engineering en variable-reward funnels",
    "kicker": "AI · Automatisering · Scripts",
    "sections": [
      {
        "number": "01",
        "title": "De pipeline van menselijke interactie naar systeemoutput",
        "lead": "Het dossier beschrijft een technische overgang waarbij menselijke chat niet verdwijnt, maar wordt ingebed in een pipeline van profieldata, scripts, dashboards en AI-hulpmiddelen.",
        "blocks": [
          {
            "type": "para",
            "text": "In de bron bestaat de workflow uit meerdere lagen: gebruikersdata wordt verzameld in CRM, scripts structureren het gesprek, chatters voeren de interactie uit en AI kan teksten of vervolgstappen voorstellen. Het effect is een hybride systeem waarin mens en machine samen het gedrag produceren dat de gebruiker als persoonlijk gesprek ervaart."
          },
          {
            "type": "para",
            "text": "Het centrale technische voordeel is herhaalbaarheid. Een menselijke operator kan leren van eerdere gesprekken; een CRM kan die lessen bewaren; een model kan vervolgens vergelijkbare formuleringen genereren. Daardoor verschuift kennis van het individu naar het systeem. Wat vandaag als ervaring van één chatter begint, kan morgen als template worden hergebruikt."
          },
          {
            "type": "para",
            "text": "Het dossier noemt dit een vorm van \"schaalbare intimiteit\". De term is bewust paradoxaal: intimiteit is normaal gesproken contextueel en persoonlijk, terwijl schaalbaarheid juist vraagt om standaardisering. Het technische systeem probeert die spanning op te lossen door standaardisering zo goed te verbergen dat de interactie persoonlijk blijft aanvoelen."
          },
          {
            "type": "para",
            "text": "Voor de analyse van AI is het daarom onvoldoende om te vragen of een antwoord door een mens of machine is geschreven. Belangrijker is welke data het systeem gebruikt, welke doelen het optimaliseert, en welke informatie de gebruiker daarover krijgt."
          },
          {
            "type": "callout",
            "label": "TECHNISCHE KERN",
            "text": "AI verandert in dit dossier niet primair de inhoud van intimiteit, maar de schaal, snelheid en reproduceerbaarheid ervan."
          }
        ]
      },
      {
        "number": "02",
        "title": "LLM's, scripts en semi-geautomatiseerde gesprekken",
        "lead": "De bron beschrijft LLM's als een volgende stap in een reeds bestaande scriptcultuur: de machine kan varianten van menselijk klinkende antwoorden sneller produceren.",
        "blocks": [
          {
            "type": "para",
            "text": "Scripts leveren structuur: begroeting, relatieopbouw, objection handling, upsell en retentie. Een taalmodel kan vervolgens binnen zo'n structuur meerdere varianten genereren. Hierdoor kan de menselijke operator meer gesprekken tegelijk afhandelen, of sneller reageren op onverwachte vragen."
          },
          {
            "type": "para",
            "text": "De bron koppelt dit aan CRM-profielen. Wanneer een model weet dat een gebruiker eerder een bepaalde gebeurtenis of voorkeur heeft gedeeld, kan het daarop aansluiten. Vanuit technisch oogpunt is dat een vorm van contextinjectie; vanuit het morele kader van het dossier is het een vorm van geautomatiseerde personalisatie van kwetsbaarheid."
          },
          {
            "type": "para",
            "text": "Belangrijk is dat automatisering niet automatisch misleiding betekent. Een chatassistent kan transparant worden gebruikt voor samenvatting, vertaling of klantenservice. De problematische grens ontstaat volgens het dossier wanneer de gebruiker redelijkerwijs denkt met een unieke persoon te communiceren, terwijl een geautomatiseerde of gedeelde backend de interactie feitelijk bepaalt en de gebruiker daar geen zicht op heeft."
          },
          {
            "type": "para",
            "text": "De technische grens is daarom tegelijk een transparantiegrens. De kernvraag wordt: welke mate van automatisering kan verenigbaar zijn met een gerechtvaardigde verwachting van menselijke nabijheid?"
          }
        ]
      },
      {
        "number": "03",
        "title": "De sales funnel als algoritme",
        "lead": "In het dossier wordt de sales funnel steeds minder een document en steeds meer een algoritmisch regelsysteem.",
        "blocks": [
          {
            "type": "para",
            "text": "De bron beschrijft vaste fasen van herkenning, kwetsbaarheid, urgentie en retentie. Wanneer zulke fasen worden omgezet in softwarelogica, kan het systeem bepalen welk type bericht na welke gebeurtenis moet volgen. Een reactie, een betalingsmoment of een verandering in activiteit kan dan een trigger vormen."
          },
          {
            "type": "para",
            "text": "De technische waarde van zo'n model is eenvoudig: standaardiseren, meten, testen en optimaliseren. Het dossier trekt vervolgens een ethische conclusie: wanneer de variabele in het systeem niet productinteresse maar menselijke kwetsbaarheid is, kan optimalisatie doorschieten naar gedragssturing."
          },
          {
            "type": "para",
            "text": "Een belangrijk concept in de bron is de variable-reward funnel. Warme aandacht wordt afgewisseld met afstand of vertraging, waardoor de gebruiker volgens de hypothese blijft wachten op het volgende moment van beloning. De bron vergelijkt dit met andere systemen van intermitterende beloning. In deze PDF wordt dat uitsluitend als bronhypothese weergegeven; er is geen onafhankelijke neurobiologische validatie aan toegevoegd."
          },
          {
            "type": "para",
            "text": "Voor technische auditing betekent dit dat niet alleen de output moet worden bekeken. Ook triggers, business rules, prompttemplates, experimenten, dashboards en KPI's zijn relevante bewijsbronnen."
          }
        ]
      },
      {
        "number": "04",
        "title": "De synthetische mens: waar eindigt menselijke arbeid?",
        "lead": "De titel van dit deel draait om een filosofisch-technische vraag: wanneer een systeem menselijke stijl, geheugen en timing reproduceert, wat blijft er dan over van het idee dat de gebruiker een unieke persoon ontmoet?",
        "blocks": [
          {
            "type": "para",
            "text": "Het dossier gebruikt \"synthetische mens\" als grensbeeld. De term verwijst niet naar een humanoide robot, maar naar een service die de kenmerken van persoonlijke aandacht simuleert: gepersonaliseerde taal, herkenning van eerdere gesprekken, emotionele afstemming en strategische timing."
          },
          {
            "type": "para",
            "text": "Vanuit dat perspectief is de waarde van een interactie niet langer volledig gekoppeld aan de identiteit van de schrijver. De waarde zit in de kwaliteit van de simulatie. Dat maakt een fundamenteel onderscheid mogelijk: authentieke personalisatie versterkt een echte relatie, terwijl synthetische personalisatie een product kan worden dat de indruk van authenticiteit verkoopt."
          },
          {
            "type": "para",
            "text": "Het dossier ziet hier een verschuiving in de arbeidsmarkt. Menselijke operators kunnen worden getraind om de output van systemen te corrigeren, terwijl systemen steeds meer van het standaardwerk overnemen. De vraag wordt dan niet of AI werknemers vervangt, maar welke onderdelen van menselijke empathie economisch worden geabstraheerd en herverpakt."
          },
          {
            "type": "para",
            "text": "Deze ontwikkeling heeft ook gevolgen voor verantwoordelijkheid. Wanneer een script, model, CRM en operator gezamenlijk een gesprek produceren, is het niet vanzelfsprekend wie verantwoordelijk is voor een misleidende uitkomst. De bron gebruikt deze keten als argument voor transparantie en ketenaansprakelijkheid."
          }
        ]
      },
      {
        "number": "05",
        "title": "Technische en ethische grenzen",
        "lead": "Het technische deel van het dossier eindigt bij een set ontwerpvragen: welke automatisering is transparant, welke data is proportioneel en welke menselijke verwachting moet worden beschermd?",
        "blocks": [
          {
            "type": "para",
            "text": "De eerste grens is identiteitstransparantie. De gebruiker moet kunnen begrijpen of de persoon met wie hij communiceert daadwerkelijk de geportretteerde creator is, een medewerker, een team of een geautomatiseerde assistent. Het dossier beschouwt verborgen wisseling van identiteit als fundamenteel probleem."
          },
          {
            "type": "para",
            "text": "De tweede grens is data-minimalisatie. Niet alle informatie die technisch kan worden opgeslagen, hoeft ook commercieel te worden gebruikt. Vooral gevoelige persoonsgegevens kunnen een asymmetrie creëren die veel groter is dan de gebruiker op het moment van delen verwacht."
          },
          {
            "type": "para",
            "text": "De derde grens is doeltransparantie. Een systeem dat emotionele signalen detecteert om een gesprek soepeler te laten verlopen, is iets anders dan een systeem dat diezelfde signalen gebruikt om de betaalbereidheid te maximaliseren. Het dossier stelt dat juist die verschuiving de ethische kern van het probleem vormt."
          },
          {
            "type": "para",
            "text": "De vierde grens is auditbaarheid. Wanneer AI onderdeel wordt van de verkoopketen, moeten prompts, logs, modeluitvoer, menselijke overrides en beslisregels reconstructeerbaar zijn. Zonder dat spoor blijft de technische backend ondoorzichtig - precies het probleem dat deze reeks onderzoekt."
          }
        ]
      },
      {
        "number": "90",
        "title": "Bewijsarchitectuur 4.0 — wat telt als bewijs?",
        "lead": "De belangrijkste verbetering is een expliciete scheiding tussen bronmateriaal, verificatie, inferentie en hypothese.",
        "blocks": [
          {
            "type": "para",
            "text": "Een productpagina bewijst dat een leverancier een functie aanbiedt. Zij bewijst niet dat ieder bureau die functie gebruikt, dat de functie op een specifiek account is geactiveerd of dat de functie onrechtmatig wordt gebruikt. Die drie niveaus moeten afzonderlijk worden vastgelegd."
          },
          {
            "type": "para",
            "text": "Een journalistieke undercoverreportage kan operationele praktijken zeer concreet documenteren, maar een enkel bureau of één werknemer is niet automatisch representatief voor de hele markt. Een patroon wordt sterker wanneer meerdere onafhankelijke onderzoeken dezelfde werkwijze laten zien."
          },
          {
            "type": "para",
            "text": "Een juridische regel is geen bewijs dat een specifieke actor de regel heeft overtreden. De juridische analyse moet daarom steeds uit vier stappen bestaan: toepasselijke norm, feitelijke handeling, bewijs van die handeling en causaliteit tussen handeling en normschending."
          },
          {
            "type": "para",
            "text": "Statistische cijfers krijgen alleen de status van onderzoeksbevinding wanneer populatie, steekproef, meetmethode, onzekerheid en reproduceerbaarheid bekend zijn. In de aangeleverde latere monografieën komen bijvoorbeeld percentages en correlaties voor die niet met een openbaar dataset of methode zijn onderbouwd. Deze editie behandelt die cijfers daarom als onbevestigd bronmateriaal, niet als resultaten van dit onderzoek."
          },
          {
            "type": "callout",
            "label": "NIEUWE REGEL",
            "text": "Geen enkel cijfer uit de latere 21×21-monografieën wordt als empirisch feit gebruikt tenzij een onafhankelijke primaire of wetenschappelijke bron de methode en uitkomst draagt."
          },
          {
            "type": "table",
            "headers": [
              "Bronsoort",
              "Bewijst primair",
              "Bewijst niet automatisch"
            ],
            "rows": []
          },
          {
            "type": "para",
            "text": "Wet / uitspraak Norm of beslissing Dat een vergelijkbare actor dezelfde norm schendt"
          },
          {
            "type": "para",
            "text": "Productdocument Functie / ontwerpclaim Gebruik in de praktijk of onrechtmatigheid atie"
          },
          {
            "type": "para",
            "text": "Undercoveronderz Gedocumenteerde casus Sectorbreed percentage oek"
          },
          {
            "type": "para",
            "text": "Wetenschappelijke Resultaat binnen methode/populatie Causaliteit buiten de studie studie"
          },
          {
            "type": "para",
            "text": "Getuigenis / Aangeleverd artefact Authenticiteit zonder chain-of-custody screenshot"
          }
        ]
      },
      {
        "number": "91",
        "title": "Nieuwe bronlaag — AI-transparantie na 2 augustus 2026",
        "lead": "De juridische context is veranderd sinds de eerdere editie: de Europese Commissie publiceerde op 20 juli 2026 definitieve richtsnoeren over artikel 50 AI Act; de transparantieverplichtingen gelden vanaf 2 augustus 2026.",
        "blocks": [
          {
            "type": "para",
            "text": "De richtsnoeren zijn rechtstreeks relevant voor het dossier omdat zij het onderscheid verduidelijken tussen systemen die mensen rechtstreeks met AI laten interageren en andere vormen van AI-gegenereerde of gemanipuleerde content. Het relevante onderzoeksvraagstuk is niet simpelweg “is AI gebruikt?”, maar: welke actor is onder de verordening de provider of deployer, welk type systeem wordt gebruikt en welke transparantiehandeling is vereist?"
          },
          {
            "type": "para",
            "text": "Daarmee moet de oude formulering “de mens-in-the-loop is altijd vrijgesteld” worden vermeden. Een menselijke medewerker die AI-output controleert, maakt niet automatisch iedere interactie juridisch gelijk aan volledig menselijke communicatie. De feitelijke rol van het AI-systeem en de toepasselijke categorie moeten worden vastgesteld aan de hand van de verordening en de richtsnoeren."
          },
          {
            "type": "para",
            "text": "Voor het dossier ontstaat een concreet bewijsprotocol: bewaar modelversie, prompt/instellingen, generatie-output, menselijke edits, verzendmoment en identiteit van de verzender. Alleen dan kan achteraf worden vastgesteld welk deel van de interactie menselijk, AI-assisted of volledig geautomatiseerd was."
          },
          {
            "type": "callout",
            "label": "BRONCONTROLE",
            "text": "De Commissie stelt dat artikel 50-transparantieverplichtingen vanaf 2 augustus 2026 van toepassing zijn en heeft hiervoor richtsnoeren gepubliceerd."
          },
          {
            "type": "table",
            "headers": [
              "Interactietype",
              "Onderzoeksvraag",
              "Bewijsstuk"
            ],
            "rows": [
              [
                "Menselijke chatter",
                "Wie schreef/verzond?",
                "Accountlog + arbeidsrooster"
              ],
              [
                "AI-assisted",
                "Welke output kwam uit AI?",
                "Prompt/output + editlog"
              ],
              [
                "AI-direct",
                "Welke systeemfunctie communiceerde?",
                "Modelconfiguratie + verzendlog"
              ],
              [
                "Hybride team",
                "Wie had feitelijke controle?",
                "Role/permission + auditlog"
              ]
            ]
          }
        ]
      },
      {
        "number": "92",
        "title": "Nieuwe bronlaag — CRM als operationeel bewijsstuk",
        "lead": "De publieke documentatie van Infloww maakt het mogelijk de softwarelaag veel preciezer te beschrijven zonder te speculeren over verborgen databases.",
        "blocks": [
          {
            "type": "para",
            "text": "Infloww documenteert dat teams faninformatie kunnen zien zoals bestedingsgeschiedenis, aankoopfrequentie, laatste en hoogste uitgaven, locatie, lokale tijd, handmatig ingevoerde salarisinformatie en notities. Het systeem bevat daarnaast segmentatie op spending power en aankoopgedrag."
          },
          {
            "type": "para",
            "text": "De betekenis daarvan is methodologisch belangrijk. Het bewijst niet dat ieder bureau psychologische kwetsbaarheden verzamelt. Het bewijst wél dat een commercieel systeem het technisch mogelijk maakt om persoonlijke context en koopgedrag te combineren met communicatie en retentie. Dat is een controleerbaar ontwerpfeit."
          },
          {
            "type": "para",
            "text": "Voor een echte forensische audit zijn daarom de volgende artefacten essentieel: rollen en rechten, auditlogs, datavelden, exports, bewaartermijnen, verwerkersovereenkomsten, subverwerkers, gegevenslocaties en configuraties van automatische berichten. Screenshots van de interface zijn nuttig, maar logs zijn sterker."
          },
          {
            "type": "callout",
            "label": "BEWIJSGRENS",
            "text": "De leverancierdocumentatie ondersteunt de aanwezigheid van segmentatie- en personalisatiefuncties. Zij ondersteunt niet op zichzelf de stelling dat specifieke bureaus deze functies misbruiken."
          },
          {
            "type": "table",
            "headers": [
              "Artefact",
              "Wat het kan aantonen",
              "Sterkte"
            ],
            "rows": []
          },
          {
            "type": "para",
            "text": "Productpagina Ontwerp/functie Hoog voor feature-bestaan"
          },
          {
            "type": "para",
            "text": "Helpcenter Gedetailleerde werking Hoog voor operationeel ontwerp"
          },
          {
            "type": "table",
            "headers": [
              "Accountconfig",
              "Werkelijk geactiveerde functie",
              "Zeer hoog"
            ],
            "rows": [
              [
                "Auditlog",
                "Wie deed wat en wanneer",
                "Zeer hoog"
              ],
              [
                "Export / DB",
                "Welke data werkelijk aanwezig was",
                "Zeer hoog, mits"
              ],
              [
                "snapshot",
                "",
                "authenticiteit"
              ]
            ]
          }
        ]
      },
      {
        "number": "93",
        "title": "Forensisch protocol — van verhaal naar reproduceerbare case",
        "lead": "Een volgende editie kan veel sterker worden door iedere casus als een klein digitaal onderzoeksdossier te behandelen.",
        "blocks": [
          {
            "type": "para",
            "text": "Stap A: preserveer het bronbestand onveranderd en maak een cryptografische hash. Stap B: noteer datum, bron, verkrijgingswijze en eventuele toestemming. Stap C: maak een tijdlijn van account-, chat-, betalings- en personeelsgebeurtenissen. Stap D: vergelijk identiteit, IP, device, loginrol en verzendmomenten. Stap E: koppel ieder feit aan een bron-ID."
          },
          {
            "type": "para",
            "text": "Voor CRM-onderzoek moeten persoonsgegevens worden geminimaliseerd. Onderzoekers hebben niet noodzakelijk de inhoud van alle privégesprekken nodig om te bewijzen dat een team werkt met spending tiers of scripts. Een schema met geanonimiseerde identifiers kan hetzelfde mechanisme aantonen met minder privacyrisico."
          },
          {
            "type": "para",
            "text": "Voor financiële reconstructie moeten betalingsgegevens worden gescheiden van interpretatie. Een reeks microbetalingen is op zichzelf geen bewijs van carding of witwassen. Daarvoor zijn aanvullende signalen nodig, bijvoorbeeld chargebackpatronen, accountkoppelingen, afwijkende device-signalen, processor alerts, bankonderzoek of strafrechtelijke stukken."
          },
          {
            "type": "callout",
            "label": "CHAIN OF CUSTODY",
            "text": "Zonder herkomst, integriteit en tijdlijn van een digitaal artefact blijft een screenshot illustratief in plaats van forensisch beslissend."
          },
          {
            "type": "table",
            "headers": [
              "Fase",
              "Minimumdocumentatie"
            ],
            "rows": [
              [
                "Preservatie",
                "Origineel bestand + hash + datum"
              ],
              [
                "Context",
                "Bron, verkrijgingswijze, toestemming"
              ],
              [
                "Reconstructie",
                "Tijdlijn + betrokken accounts"
              ],
              [
                "Correlatie",
                "Chat + CRM + payment + login"
              ],
              [
                "Conclusie",
                "Claim + bewijs + alternatieve verklaring"
              ]
            ]
          }
        ]
      },
      {
        "number": "94",
        "title": "Audit van de zware claims — wat moet uit de tekst?",
        "lead": "De diepere monografieën bevatten krachtige cijfers en causale formuleringen. De wetenschappelijke kwaliteit van de reeks stijgt als die claims zichtbaar worden teruggezet naar hun bewijsstatus.",
        "blocks": [
          {
            "type": "para",
            "text": "De stellingen over “78% van 200 virale video’s”, “r=0,68 bij n=312”, “€2.100 per maand”, “r=-0,71 bij n=12”, “oxytocine +150%”, “D2 -22%” en vergelijkbare exacte effecten zijn in het beschikbare bronmateriaal niet voorzien van een controleerbare dataset, preregistratie of peer-reviewed analyse. Ze worden daarom niet herhaald als onderzoeksresultaten."
          },
          {
            "type": "para",
            "text": "Ook de formulering dat een markt bewust paranoia creëert om daarna de oplossing te verkopen is een intentieclaim. Een economisch systeem kan voordeel hebben bij vraag naar een product zonder dat daarmee een gecoördineerde intentie is bewezen. Het onderscheid tussen incentive en intentie wordt in deze editie expliciet gemaakt."
          },
          {
            "type": "para",
            "text": "Dezelfde correctie geldt voor de claim dat adult-tech de oorzaak is van dalende vruchtbaarheid. OECD en UNFPA beschrijven meerdere factoren — onder meer huisvesting, werk, onzekerheid, zorgkosten, partnerbeschikbaarheid en veranderende voorkeuren. Adult-tech kan als hypothese worden onderzocht, maar de bestaande gegevens dragen geen enkelvoudige causale conclusie."
          },
          {
            "type": "callout",
            "label": "REDACTIONELE CORRECTIE",
            "text": "Exacte cijfers zonder reproduceerbare methode worden in deze editie als onbevestigd aangemerkt en niet gebruikt als bewijs."
          },
          {
            "type": "table",
            "headers": [
              "Claim in bronmateriaal",
              "Status in 4.0",
              "Wat nodig is"
            ],
            "rows": [
              [
                "Carding/witwasstraat via",
                "Onbevestigd",
                "Strafdossier / toezichtsdata /"
              ],
              [
                "microtransacties",
                "",
                "processor-analyse"
              ]
            ]
          },
          {
            "type": "para",
            "text": "Adult-tech veroorzaakt lage Hypothese Longitudinaal, multivariaat onderzoek vruchtbaarheid"
          },
          {
            "type": "para",
            "text": "Gecoördineerde paranoia-strategie Hypothese Interne strategie-documenten + causal design"
          },
          {
            "type": "table",
            "headers": [
              "Exacte neurobiologische percentages",
              "Onvoldoende onderbouwd",
              "Peer-reviewed experiment / biometrische data"
            ],
            "rows": []
          },
          {
            "type": "para",
            "text": "Ghost-chatting / AI-chatting bestaat Gedocumenteerd Meerdere onafhankelijke bronnen + productdocs"
          }
        ]
      },
      {
        "number": "95",
        "title": "AI-pipeline — technisch model voor audit",
        "lead": "De technische sectie kan worden opgewaardeerd tot een controleerbare modelarchitectuur.",
        "blocks": [
          {
            "type": "para",
            "text": "Een generiek systeem kan bestaan uit intake, contextopbouw, retrieval uit CRM, promptconstructie, modelgeneratie, menselijke review en verzending. Niet elk systeem heeft alle stappen en de volgorde kan verschillen."
          },
          {
            "type": "para",
            "text": "Verifieerbare auditvelden zijn model-ID, prompt-template, gebruikte context, generatie-output, menselijke wijzigingen, verzendaccount en tijdstip. Daarmee kan een onderzoek achteraf vaststellen hoe een bericht tot stand kwam."
          },
          {
            "type": "para",
            "text": "Productdocumentatie van Supercreator beschrijft AI die in de creator-stem chats voert, content verkoopt en fans op bepaalde momenten benadert. Dat is sterk bewijs voor het bestaan van dergelijke functies, niet voor universeel gebruik."
          },
          {
            "type": "callout",
            "label": "TECHNISCHE KERN",
            "text": "Provenance van het bericht is belangrijker dan alleen de vraag of “AI” ergens is gebruikt."
          }
        ]
      },
      {
        "number": "SLOT",
        "title": "AI-kern",
        "lead": "Deze slotpagina vat de redactionele lijn samen zonder de bronclaims als onafhankelijk bewezen feiten te presenteren.",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Het dossier beschrijft AI als een schaalvergroter van bestaande script- en CRM-praktijken.",
              "De belangrijkste grens is niet mens versus machine, maar transparante versus verborgen automatisering.",
              "KPI's en triggers kunnen de ethische richting van AI-systemen bepalen.",
              "Auditbaarheid van prompts, data, logs en beslisregels wordt een kernvoorwaarde voor onderzoek en toezicht."
            ]
          },
          {
            "type": "callout",
            "label": "BRONSTATUS",
            "text": "Gebaseerd op de delen over algoritmische co-afhankelijkheid, technische architectuur, CRM-pipelines, variable-reward funnels, chat-automatisering en de synthetische vorm van intimiteit in het aangeleverde dossier. Deze Onderzoekseditie 4.0 voegt actuele openbare broncontrole toe per 19 september 2026 en markeert expliciet welke cijfers/claims uit het bronmateriaal niet onafhankelijk zijn geverifieerd."
          },
          {
            "type": "para",
            "text": "Leeswijzer voor verder onderzoek. De bron zelf noemt juridische documentatie, technische data en sociologische analyse als drie sporen voor triangulatie. In deze editie zijn die sporen samengebracht als redactionele structuur; ze zijn niet extern geverifieerd."
          }
        ]
      }
    ]
  },
  {
    "index": 5,
    "slug": "sociologische-impact",
    "title": "Sociologische & Psychologische Impact",
    "subtitle": "Customer-service-syndroom, vertrouwenserosie en demografische dynamiek",
    "kicker": "Sociologie · Psychologie · Demografie",
    "sections": [
      {
        "number": "01",
        "title": "Van individuele transactie naar sociaal klimaat",
        "lead": "Het dossier behandelt digitale intimiteit niet als geïsoleerd consumentengedrag, maar als een mogelijke factor in de manier waarop mensen elkaar leren lezen.",
        "blocks": [
          {
            "type": "para",
            "text": "Een centraal idee is conditionering. Wanneer een gebruiker herhaaldelijk ervaart dat aandacht te koop is, kan dat volgens het dossier verwachtingen over andere relaties veranderen. Evenzo kan iemand die jarenlang als verkoper werkt, leren om ieder contact te beoordelen op tijd, risico of omzet. Zo ontstaat een dubbele transformatie: zowel koper als verkoper gaan de ander door een commercieel raster bekijken."
          },
          {
            "type": "para",
            "text": "De bron noemt dit het \"klantenservice-syndroom\" in menselijke relaties. Het begrip is geen klinische diagnose, maar een metafoor voor een leerproces waarin sociale interactie wordt beoordeeld op efficiëntie, leveringsverwachting en opbrengst."
          },
          {
            "type": "para",
            "text": "De sociologische implicatie is belangrijk. Sociale normen zijn niet alleen wetten; ze ontstaan ook uit herhaalde interactie. Wanneer digitale platforms steeds meer uren van sociale aandacht absorberen, kan hun transactielogica buiten de interface worden meegenomen. Het dossier suggereert dat juist dit spillover-effect onderzocht moet worden."
          },
          {
            "type": "para",
            "text": "De vraag is daarom niet alleen hoeveel mensen digitale intimiteit consumeren, maar welke verwachtingen zij daardoor ontwikkelen over wat een ander \"verschuldigd\" is, hoe snel reactie moet komen en hoeveel emotionele aandacht redelijkerwijs gratis wordt verwacht."
          }
        ]
      },
      {
        "number": "02",
        "title": "De erosie van vertrouwen en empathie",
        "lead": "Vertrouwen is in het dossier de centrale maatschappelijke infrastructuur die volgens de hypothese onder druk komt te staan wanneer interactie steeds vaker wordt gemonetiseerd of gescript.",
        "blocks": [
          {
            "type": "para",
            "text": "De bron beschrijft een tegenstelling tussen onvoorwaardelijke aandacht en geprijsde aandacht. In de ene situatie is de ander een mens die reageert omdat hij of zij dat wil; in de andere situatie is het contact onderdeel van een dienst met een tarief, limiet of betaalmuur. Wanneer iemand meerdere keren geconfronteerd wordt met de tweede vorm, kan dat zijn verwachtingen over de eerste vorm beïnvloeden."
          },
          {
            "type": "para",
            "text": "Daar komt wantrouwen bij. Het dossier stelt dat de gebruiker niet altijd weet of hij een unieke persoon, een team of een bot voor zich heeft. De creatorzijde kan op haar beurt leren dat de andere partij vooral als betalende gebruiker of risicoprofiel moet worden gezien. Zo ontstaat een wederzijdse verdenking die volgens de bron de fysieke wereld kan binnendringen."
          },
          {
            "type": "para",
            "text": "De analyse is psychologisch van aard, maar niet hetzelfde als een bewezen effect. Om de hypothese te toetsen zou men bijvoorbeeld longitudinale studies, interviews en gecontroleerde vergelijkingen nodig hebben. De bron levert vooral een verklaringsmodel."
          },
          {
            "type": "para",
            "text": "De praktische betekenis blijft echter helder: vertrouwen is moeilijk schaalbaar. Juist daarom kan een economisch systeem dat menselijke nabijheid probeert te standaardiseren spanning produceren tussen efficiëntie en authenticiteit."
          }
        ]
      },
      {
        "number": "03",
        "title": "De cultuur van het gevaar en de genderdynamiek",
        "lead": "Het dossier bevat een scherpe claim over maatschappelijke polarisatie: het stelt dat angst voor fysiek contact en het framen van normale interactie als potentieel gevaar de vraag naar digitale substituten kan vergroten.",
        "blocks": [
          {
            "type": "para",
            "text": "De bron beschrijft een \"dader-versus-slachtoffer matrix\" waarin mannen en vrouwen tegenover elkaar worden geplaatst. De tekst beweert dat normale mannelijke attentheid in sommige marketingcontexten kan worden geframed als verdacht en dat vrouwen daardoor defensiever worden. Tegelijk zou de mannelijke gebruiker angst kunnen ontwikkelen voor afwijzing of beschuldiging."
          },
          {
            "type": "para",
            "text": "Dit is een van de meest normatief en empirisch ambitieuze delen van het dossier. De formulering in de bron is sterk en stelt soms causaliteit vast waar in het aangeleverde materiaal geen brede externe onderbouwing tegenover staat. In deze PDF blijft het daarom expliciet een bronclaim."
          },
          {
            "type": "para",
            "text": "Wat wel als onderzoeksvraag bruikbaar is, is het mechanisme. Kan een herhaald discours van gevaar de bereidheid tot fysieke interactie verminderen? Verandert dat de perceptie van risico, vertrouwen of datinggedrag? En zo ja, in welke populaties en onder welke omstandigheden? Die vragen zijn empirisch toetsbaar zonder de bronclaim vooraf waar te maken."
          },
          {
            "type": "para",
            "text": "Zo wordt het genderdeel van het dossier minder een eindconclusie en meer een onderzoekshypothese over de relatie tussen mediabeeld, sociale normen en commerciële substituten."
          },
          {
            "type": "callout",
            "label": "ONDERZOEKSDISCIPLINE",
            "text": "Maak onderscheid tussen echte veiligheidsproblemen, algemene maatschappelijke percepties en de specifieke bronclaim dat commerciële belangen die percepties systematisch aanjagen."
          }
        ]
      },
      {
        "number": "04",
        "title": "Demografie, relaties en het substitutiemodel",
        "lead": "De bron verbindt digitale intimiteit aan demografische ontwikkeling via een substitutielogica: als een digitaal alternatief bepaalde functies van menselijke relaties overneemt, kan het gedrag op lange termijn verschuiven.",
        "blocks": [
          {
            "type": "para",
            "text": "Het dossier beschrijft de fysieke relatie als een traject met onzekerheid, investering en mogelijk afwijzing. Digitale consumptie biedt volgens de bron een laagdrempelige substituut. Vanuit die logica zou een deel van de vraag naar fysieke partnerrelaties kunnen afnemen, met mogelijke gevolgen voor huwelijk, samenwonen en gezinsvorming."
          },
          {
            "type": "para",
            "text": "De tekst verwijst daarbij naar Japan en Zuid-Korea als vergelijkingsbeelden, en noemt een mogelijk \"hikikomori-effect\" in Europa. Ook hier geldt dat de aangeleverde bron geen uitgewerkte empirische vergelijking laat zien tussen adult-tech consumptie, relationele status en geboorteontwikkeling. De passages functioneren als hypothese en als narratief kader."
          },
          {
            "type": "para",
            "text": "De demografische vraag is bijzonder complex omdat vruchtbaarheid door vele factoren wordt bepaald: economie, woonkosten, opleiding, arbeidsmarkt, waarden, gendernormen, gezondheid en institutionele steun. Een professioneel onderzoek moet die factoren meenemen om te voorkomen dat een complexe trend aan één digitale oorzaak wordt toegeschreven."
          },
          {
            "type": "para",
            "text": "De meer verdedigbare bijdrage van het dossier is daarom de vraag welke rol digitale substituten spelen in een bredere economie van tijd, aandacht en relatie-investering. Dat is een onderzoekspad dat empirisch nader kan worden ingevuld."
          }
        ]
      },
      {
        "number": "05",
        "title": "Psychologische uitkomsten en mogelijke herstelstrategieën",
        "lead": "Het dossier eindigt de sociaal-psychologische analyse niet alleen met kritiek, maar ook met een concept van herstel: opnieuw leren omgaan met ongescripte, niet-verhandelbare interactie.",
        "blocks": [
          {
            "type": "para",
            "text": "Voor de koper noemt de bron deconfrontatie met de technische werkelijkheid: inzicht in CRM, scripts en operatorstructuren kan de illusie van exclusieve intimiteit doorbreken. Vervolgens wordt een periode van digitale onthouding voorgesteld, gekoppeld aan fysieke en sociale activiteiten zonder commerciële motivatie."
          },
          {
            "type": "para",
            "text": "Voor creators ligt de nadruk op autonomie. De bron pleit voor hulp bij het beëindigen van schadelijke contracten, het saneren van digitale identiteiten en het herstellen van een zelfbeeld dat niet uitsluitend door omzet of bereik wordt bepaald."
          },
          {
            "type": "para",
            "text": "Voor de samenleving noemt het dossier analoge veilige zones: plaatsen waar mensen elkaar kunnen ontmoeten zonder scherm, paywall of commerciële prikkel. Het achterliggende idee is dat vertrouwen niet kan worden hersteld door alleen digitale regels toe te voegen; er moeten ook alternatieve sociale omgevingen bestaan."
          },
          {
            "type": "para",
            "text": "Deze herstelstrategie is normatief. Zij hoort daarom te worden onderscheiden van de empirische vraag of de genoemde interventies effectief zijn. Als beleids- of welzijnsprogramma zouden ze afzonderlijk moeten worden getest en geëvalueerd."
          }
        ]
      },
      {
        "number": "90",
        "title": "Bewijsarchitectuur 4.0 — wat telt als bewijs?",
        "lead": "De belangrijkste verbetering is een expliciete scheiding tussen bronmateriaal, verificatie, inferentie en hypothese.",
        "blocks": [
          {
            "type": "para",
            "text": "Een productpagina bewijst dat een leverancier een functie aanbiedt. Zij bewijst niet dat ieder bureau die functie gebruikt, dat de functie op een specifiek account is geactiveerd of dat de functie onrechtmatig wordt gebruikt. Die drie niveaus moeten afzonderlijk worden vastgelegd."
          },
          {
            "type": "para",
            "text": "Een journalistieke undercoverreportage kan operationele praktijken zeer concreet documenteren, maar een enkel bureau of één werknemer is niet automatisch representatief voor de hele markt. Een patroon wordt sterker wanneer meerdere onafhankelijke onderzoeken dezelfde werkwijze laten zien."
          },
          {
            "type": "para",
            "text": "Een juridische regel is geen bewijs dat een specifieke actor de regel heeft overtreden. De juridische analyse moet daarom steeds uit vier stappen bestaan: toepasselijke norm, feitelijke handeling, bewijs van die handeling en causaliteit tussen handeling en normschending."
          },
          {
            "type": "para",
            "text": "Statistische cijfers krijgen alleen de status van onderzoeksbevinding wanneer populatie, steekproef, meetmethode, onzekerheid en reproduceerbaarheid bekend zijn. In de aangeleverde latere monografieën komen bijvoorbeeld percentages en correlaties voor die niet met een openbaar dataset of methode zijn onderbouwd. Deze editie behandelt die cijfers daarom als onbevestigd bronmateriaal, niet als resultaten van dit onderzoek."
          },
          {
            "type": "callout",
            "label": "NIEUWE REGEL",
            "text": "Geen enkel cijfer uit de latere 21×21-monografieën wordt als empirisch feit gebruikt tenzij een onafhankelijke primaire of wetenschappelijke bron de methode en uitkomst draagt."
          },
          {
            "type": "table",
            "headers": [
              "Bronsoort",
              "Bewijst primair",
              "Bewijst niet automatisch"
            ],
            "rows": []
          },
          {
            "type": "para",
            "text": "Wet / uitspraak Norm of beslissing Dat een vergelijkbare actor dezelfde norm schendt"
          },
          {
            "type": "para",
            "text": "Productdocument Functie / ontwerpclaim Gebruik in de praktijk of onrechtmatigheid atie"
          },
          {
            "type": "para",
            "text": "Undercoveronderz Gedocumenteerde casus Sectorbreed percentage oek"
          },
          {
            "type": "para",
            "text": "Wetenschappelijke Resultaat binnen methode/populatie Causaliteit buiten de studie studie"
          },
          {
            "type": "para",
            "text": "Getuigenis / Aangeleverd artefact Authenticiteit zonder chain-of-custody screenshot"
          }
        ]
      },
      {
        "number": "91",
        "title": "Nieuwe bronlaag — AI-transparantie na 2 augustus 2026",
        "lead": "De juridische context is veranderd sinds de eerdere editie: de Europese Commissie publiceerde op 20 juli 2026 definitieve richtsnoeren over artikel 50 AI Act; de transparantieverplichtingen gelden vanaf 2 augustus 2026.",
        "blocks": [
          {
            "type": "para",
            "text": "De richtsnoeren zijn rechtstreeks relevant voor het dossier omdat zij het onderscheid verduidelijken tussen systemen die mensen rechtstreeks met AI laten interageren en andere vormen van AI-gegenereerde of gemanipuleerde content. Het relevante onderzoeksvraagstuk is niet simpelweg “is AI gebruikt?”, maar: welke actor is onder de verordening de provider of deployer, welk type systeem wordt gebruikt en welke transparantiehandeling is vereist?"
          },
          {
            "type": "para",
            "text": "Daarmee moet de oude formulering “de mens-in-the-loop is altijd vrijgesteld” worden vermeden. Een menselijke medewerker die AI-output controleert, maakt niet automatisch iedere interactie juridisch gelijk aan volledig menselijke communicatie. De feitelijke rol van het AI-systeem en de toepasselijke categorie moeten worden vastgesteld aan de hand van de verordening en de richtsnoeren."
          },
          {
            "type": "para",
            "text": "Voor het dossier ontstaat een concreet bewijsprotocol: bewaar modelversie, prompt/instellingen, generatie-output, menselijke edits, verzendmoment en identiteit van de verzender. Alleen dan kan achteraf worden vastgesteld welk deel van de interactie menselijk, AI-assisted of volledig geautomatiseerd was."
          },
          {
            "type": "callout",
            "label": "BRONCONTROLE",
            "text": "De Commissie stelt dat artikel 50-transparantieverplichtingen vanaf 2 augustus 2026 van toepassing zijn en heeft hiervoor richtsnoeren gepubliceerd."
          },
          {
            "type": "table",
            "headers": [
              "Interactietype",
              "Onderzoeksvraag",
              "Bewijsstuk"
            ],
            "rows": [
              [
                "Menselijke chatter",
                "Wie schreef/verzond?",
                "Accountlog + arbeidsrooster"
              ],
              [
                "AI-assisted",
                "Welke output kwam uit AI?",
                "Prompt/output + editlog"
              ],
              [
                "AI-direct",
                "Welke systeemfunctie communiceerde?",
                "Modelconfiguratie + verzendlog"
              ],
              [
                "Hybride team",
                "Wie had feitelijke controle?",
                "Role/permission + auditlog"
              ]
            ]
          }
        ]
      },
      {
        "number": "92",
        "title": "Nieuwe bronlaag — CRM als operationeel bewijsstuk",
        "lead": "De publieke documentatie van Infloww maakt het mogelijk de softwarelaag veel preciezer te beschrijven zonder te speculeren over verborgen databases.",
        "blocks": [
          {
            "type": "para",
            "text": "Infloww documenteert dat teams faninformatie kunnen zien zoals bestedingsgeschiedenis, aankoopfrequentie, laatste en hoogste uitgaven, locatie, lokale tijd, handmatig ingevoerde salarisinformatie en notities. Het systeem bevat daarnaast segmentatie op spending power en aankoopgedrag."
          },
          {
            "type": "para",
            "text": "De betekenis daarvan is methodologisch belangrijk. Het bewijst niet dat ieder bureau psychologische kwetsbaarheden verzamelt. Het bewijst wél dat een commercieel systeem het technisch mogelijk maakt om persoonlijke context en koopgedrag te combineren met communicatie en retentie. Dat is een controleerbaar ontwerpfeit."
          },
          {
            "type": "para",
            "text": "Voor een echte forensische audit zijn daarom de volgende artefacten essentieel: rollen en rechten, auditlogs, datavelden, exports, bewaartermijnen, verwerkersovereenkomsten, subverwerkers, gegevenslocaties en configuraties van automatische berichten. Screenshots van de interface zijn nuttig, maar logs zijn sterker."
          },
          {
            "type": "callout",
            "label": "BEWIJSGRENS",
            "text": "De leverancierdocumentatie ondersteunt de aanwezigheid van segmentatie- en personalisatiefuncties. Zij ondersteunt niet op zichzelf de stelling dat specifieke bureaus deze functies misbruiken."
          },
          {
            "type": "table",
            "headers": [
              "Artefact",
              "Wat het kan aantonen",
              "Sterkte"
            ],
            "rows": []
          },
          {
            "type": "para",
            "text": "Productpagina Ontwerp/functie Hoog voor feature-bestaan"
          },
          {
            "type": "para",
            "text": "Helpcenter Gedetailleerde werking Hoog voor operationeel ontwerp"
          },
          {
            "type": "table",
            "headers": [
              "Accountconfig",
              "Werkelijk geactiveerde functie",
              "Zeer hoog"
            ],
            "rows": [
              [
                "Auditlog",
                "Wie deed wat en wanneer",
                "Zeer hoog"
              ],
              [
                "Export / DB",
                "Welke data werkelijk aanwezig was",
                "Zeer hoog, mits"
              ],
              [
                "snapshot",
                "",
                "authenticiteit"
              ]
            ]
          }
        ]
      },
      {
        "number": "93",
        "title": "Forensisch protocol — van verhaal naar reproduceerbare case",
        "lead": "Een volgende editie kan veel sterker worden door iedere casus als een klein digitaal onderzoeksdossier te behandelen.",
        "blocks": [
          {
            "type": "para",
            "text": "Stap A: preserveer het bronbestand onveranderd en maak een cryptografische hash. Stap B: noteer datum, bron, verkrijgingswijze en eventuele toestemming. Stap C: maak een tijdlijn van account-, chat-, betalings- en personeelsgebeurtenissen. Stap D: vergelijk identiteit, IP, device, loginrol en verzendmomenten. Stap E: koppel ieder feit aan een bron-ID."
          },
          {
            "type": "para",
            "text": "Voor CRM-onderzoek moeten persoonsgegevens worden geminimaliseerd. Onderzoekers hebben niet noodzakelijk de inhoud van alle privégesprekken nodig om te bewijzen dat een team werkt met spending tiers of scripts. Een schema met geanonimiseerde identifiers kan hetzelfde mechanisme aantonen met minder privacyrisico."
          },
          {
            "type": "para",
            "text": "Voor financiële reconstructie moeten betalingsgegevens worden gescheiden van interpretatie. Een reeks microbetalingen is op zichzelf geen bewijs van carding of witwassen. Daarvoor zijn aanvullende signalen nodig, bijvoorbeeld chargebackpatronen, accountkoppelingen, afwijkende device-signalen, processor alerts, bankonderzoek of strafrechtelijke stukken."
          },
          {
            "type": "callout",
            "label": "CHAIN OF CUSTODY",
            "text": "Zonder herkomst, integriteit en tijdlijn van een digitaal artefact blijft een screenshot illustratief in plaats van forensisch beslissend."
          },
          {
            "type": "table",
            "headers": [
              "Fase",
              "Minimumdocumentatie"
            ],
            "rows": [
              [
                "Preservatie",
                "Origineel bestand + hash + datum"
              ],
              [
                "Context",
                "Bron, verkrijgingswijze, toestemming"
              ],
              [
                "Reconstructie",
                "Tijdlijn + betrokken accounts"
              ],
              [
                "Correlatie",
                "Chat + CRM + payment + login"
              ],
              [
                "Conclusie",
                "Claim + bewijs + alternatieve verklaring"
              ]
            ]
          }
        ]
      },
      {
        "number": "94",
        "title": "Audit van de zware claims — wat moet uit de tekst?",
        "lead": "De diepere monografieën bevatten krachtige cijfers en causale formuleringen. De wetenschappelijke kwaliteit van de reeks stijgt als die claims zichtbaar worden teruggezet naar hun bewijsstatus.",
        "blocks": [
          {
            "type": "para",
            "text": "De stellingen over “78% van 200 virale video’s”, “r=0,68 bij n=312”, “€2.100 per maand”, “r=-0,71 bij n=12”, “oxytocine +150%”, “D2 -22%” en vergelijkbare exacte effecten zijn in het beschikbare bronmateriaal niet voorzien van een controleerbare dataset, preregistratie of peer-reviewed analyse. Ze worden daarom niet herhaald als onderzoeksresultaten."
          },
          {
            "type": "para",
            "text": "Ook de formulering dat een markt bewust paranoia creëert om daarna de oplossing te verkopen is een intentieclaim. Een economisch systeem kan voordeel hebben bij vraag naar een product zonder dat daarmee een gecoördineerde intentie is bewezen. Het onderscheid tussen incentive en intentie wordt in deze editie expliciet gemaakt."
          },
          {
            "type": "para",
            "text": "Dezelfde correctie geldt voor de claim dat adult-tech de oorzaak is van dalende vruchtbaarheid. OECD en UNFPA beschrijven meerdere factoren — onder meer huisvesting, werk, onzekerheid, zorgkosten, partnerbeschikbaarheid en veranderende voorkeuren. Adult-tech kan als hypothese worden onderzocht, maar de bestaande gegevens dragen geen enkelvoudige causale conclusie."
          },
          {
            "type": "callout",
            "label": "REDACTIONELE CORRECTIE",
            "text": "Exacte cijfers zonder reproduceerbare methode worden in deze editie als onbevestigd aangemerkt en niet gebruikt als bewijs."
          },
          {
            "type": "table",
            "headers": [
              "Claim in bronmateriaal",
              "Status in 4.0",
              "Wat nodig is"
            ],
            "rows": [
              [
                "Carding/witwasstraat via",
                "Onbevestigd",
                "Strafdossier / toezichtsdata /"
              ],
              [
                "microtransacties",
                "",
                "processor-analyse"
              ]
            ]
          },
          {
            "type": "para",
            "text": "Adult-tech veroorzaakt lage Hypothese Longitudinaal, multivariaat onderzoek vruchtbaarheid"
          },
          {
            "type": "para",
            "text": "Gecoördineerde paranoia-strategie Hypothese Interne strategie-documenten + causal design"
          },
          {
            "type": "table",
            "headers": [
              "Exacte neurobiologische percentages",
              "Onvoldoende onderbouwd",
              "Peer-reviewed experiment / biometrische data"
            ],
            "rows": []
          },
          {
            "type": "para",
            "text": "Ghost-chatting / AI-chatting bestaat Gedocumenteerd Meerdere onafhankelijke bronnen + productdocs"
          }
        ]
      },
      {
        "number": "95",
        "title": "Sociologische impact — onderzoeksagenda zonder monocausale sprong",
        "lead": "De sociologische sectie wordt sterker door het mechanisme meetbaar te maken en alternatieve verklaringen vooraf te specificeren.",
        "blocks": [
          {
            "type": "para",
            "text": "OECD-onderzoek wijst op meerdere determinanten van lage vruchtbaarheid, waaronder huisvesting, arbeidsmarkt, gezinsbeleid, kosten en onzekerheid. UNFPA benadrukt daarnaast gewenste maar niet gerealiseerde vruchtbaarheid door economische en sociale barrières."
          },
          {
            "type": "para",
            "text": "Daarom is de juiste vraag niet “veroorzaakt adult-tech de demografische crisis?”, maar bijvoorbeeld: verandert intensief gebruik van betaalde digitale intimiteit de tijd die mensen besteden aan offline sociale activiteiten, en blijft dat effect bestaan na controle voor bestaande eenzaamheid en datingparticipatie?"
          },
          {
            "type": "para",
            "text": "Een longitudinaal panel met gebruikers- en niet-gebruikersgroepen, vooraf geregistreerde uitkomsten en confoundercontrole zou veel sterker zijn dan cross-sectionele correlaties tussen zoekvolume en geboortecijfers."
          },
          {
            "type": "callout",
            "label": "ONDERZOEKSVRAAG",
            "text": "Substitutie moet worden gemeten op individueel gedrag, niet afgeleid uit nationale geboortecijfers."
          }
        ]
      },
      {
        "number": "SLOT",
        "title": "Sociaal-psychologische kern",
        "lead": "Deze slotpagina vat de redactionele lijn samen zonder de bronclaims als onafhankelijk bewezen feiten te presenteren.",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Het dossier ziet vertrouwen als de centrale maatschappelijke hulpbron die door commodificatie kan worden verzwakt.",
              "De \"klantenservice\"-metafoor beschrijft mogelijke conditionering van zowel koper als verkoper.",
              "De gender- en demografische claims zijn onderzoeksdoorbraken in het dossier, maar vragen onafhankelijke empirische toetsing.",
              "Het herstelperspectief draait om autonomie, analoge sociale ruimte en onbetaalde menselijke aandacht."
            ]
          },
          {
            "type": "callout",
            "label": "BRONSTATUS",
            "text": "Gebaseerd op de delen over sociale cohesie, de cultuur van het gevaar, het klantenservice-syndroom, demografische implosie, neurobiologische herbedrading en post-digitale herstelstrategieën. Deze Onderzoekseditie 4.0 voegt actuele openbare broncontrole toe per 19 september 2026 en markeert expliciet welke cijfers/claims uit het bronmateriaal niet onafhankelijk zijn geverifieerd."
          },
          {
            "type": "para",
            "text": "Leeswijzer voor verder onderzoek. De bron zelf noemt juridische documentatie, technische data en sociologische analyse als drie sporen voor triangulatie. In deze editie zijn die sporen samengebracht als redactionele structuur; ze zijn niet extern geverifieerd."
          }
        ]
      }
    ]
  },
  {
    "index": 6,
    "slug": "juridische-analyse",
    "title": "Juridische Analyse & De 'Lex Humanitas Digitalis'",
    "subtitle": "Regulatoire blinde vlekken, AI Act art. 50, UCPD en het vierpijlermodel",
    "kicker": "Recht · Handhaving · Modelwetgeving",
    "sections": [
      {
        "number": "01",
        "title": "De juridische probleemstelling",
        "lead": "Het dossier stelt dat bestaande regels afzonderlijke onderdelen van de keten kunnen reguleren, terwijl de feitelijke exploitatie juist ontstaat uit hun combinatie.",
        "blocks": [
          {
            "type": "para",
            "text": "De bron noemt drie juridische domeinen. Ten eerste privacy en gegevensbescherming: vooral de opslag en verwerking van emotionele, seksuele of psychologisch gevoelige informatie. Ten tweede consumentenbescherming: de vraag of de consument voldoende weet wie de dienst uitvoert, wat hij koopt en hoe communicatie tot stand komt. Ten derde contract- en arbeidsrecht: de machtsverhouding tussen creator, agency en operationele werknemers."
          },
          {
            "type": "para",
            "text": "Het dossier stelt dat een platform juridisch als marktplaats of technologiebedrijf kan worden gepositioneerd, terwijl de operationele laag feitelijk meer doet dan alleen infrastructuur aanbieden. Dat verschil tussen formele rol en feitelijke functie vormt volgens de bron een juridische blinde vlek."
          },
          {
            "type": "para",
            "text": "Deze PDF presenteert die analyse niet als juridisch advies. De precieze reikwijdte van AVG, consumentenrecht, arbeidsrecht en platformverplichtingen hangt af van jurisdictie, contracten, persoonsgegevens, verwerkingsdoelen en feitelijke activiteiten. De bron gebruikt de regelgeving vooral als onderzoeksraamwerk."
          },
          {
            "type": "para",
            "text": "Het belangrijkste juridische uitgangspunt is daarom transparantie: wie is de gesprekspartner, wie verwerkt de data, wie ontvangt de betaling en wie draagt verantwoordelijkheid wanneer meerdere partijen samen de dienst leveren?"
          },
          {
            "type": "callout",
            "label": "JURIDISCHE STATUS",
            "text": "De bron formuleert juridische stellingen en voorgestelde wetswijzigingen. Deze PDF herstructureert die voorstellen, maar vervangt geen actuele juridische analyse per jurisdictie."
          }
        ]
      },
      {
        "number": "02",
        "title": "Ghost-chatting en consumenten-transparantie",
        "lead": "Een terugkerend punt in het dossier is de informatieasymmetrie tussen de veronderstelde gesprekspartner en de werkelijke uitvoeringsstructuur.",
        "blocks": [
          {
            "type": "para",
            "text": "Volgens de bron kan een gebruiker denken dat hij rechtstreeks met een specifieke creator communiceert, terwijl de interactie wordt gevoerd door een medewerker of team. Het dossier koppelt dit aan consumentenrechtelijke beginselen over misleiding: als een essentieel kenmerk van de dienst anders is dan een redelijke consument verwacht, kan transparantie een juridisch probleem worden."
          },
          {
            "type": "para",
            "text": "De precieze juridische beoordeling hangt af van wat is beloofd, wat de platformvoorwaarden zeggen, welke informatie vooraf beschikbaar was en wat voor dienst daadwerkelijk wordt verkocht. De bron formuleert dus een onderzoeksvraag, geen universele juridische conclusie."
          },
          {
            "type": "para",
            "text": "Vanuit regelgeving kan het onderwerp in drie lagen worden onderzocht: precontractuele informatie, communicatie tijdens de dienst en gegevensverwerking achteraf. Dat maakt het mogelijk om ghost-chatting niet alleen als identiteitshandeling te zien, maar als onderdeel van de totale consumentenervaring."
          },
          {
            "type": "para",
            "text": "Een model voor transparantie zou volgens de logica van het dossier minimaal duidelijk maken wanneer communicatie door een team, geautomatiseerde dienst of derde partij wordt uitgevoerd. Daarnaast moet worden vastgesteld welke informatie over de dienst wezenlijk is voor de consument om een geinformeerde keuze te maken."
          }
        ]
      },
      {
        "number": "03",
        "title": "AVG, gevoelige data en CRM-profielen",
        "lead": "Het CRM-deel van het dossier brengt privacyrecht en psychologische profilering rechtstreeks met elkaar in verband.",
        "blocks": [
          {
            "type": "para",
            "text": "De bron stelt dat informatie over seksueel gedrag, gezondheid, trauma, financiële problemen of relatiebreuken in CRM-dossiers kan worden opgeslagen en gebruikt voor commerciële beïnvloeding. Juist omdat zulke informatie potentieel gevoelig is, wordt de juridische vraag volgens het dossier zwaarder naarmate de verzameling verder afstaat van de kernfunctie van de dienst."
          },
          {
            "type": "para",
            "text": "Een juridische analyse moet daarbij niet alleen kijken naar het feit dat data wordt opgeslagen, maar ook naar grondslag, doel, proportionaliteit, bewaartermijn, toegang, verwerkersketen en internationale doorgifte. De bron benoemt vooral de spanning tussen de commerciële functie van een CRM en de gevoeligheid van de opgenomen gegevens."
          },
          {
            "type": "para",
            "text": "Een tweede vraag is verantwoordelijkheid in de keten. Wie is verwerkingsverantwoordelijke? Wie is verwerker? Welke toegang hebben chatters? Waar worden back-ups bewaard? Welke entiteit kan worden aangesproken wanneer een dossier uitlekt? Dat zijn concreet beantwoordbare vragen."
          },
          {
            "type": "para",
            "text": "Het dossier gebruikt de AVG daarom niet alleen als beschermingsrecht, maar ook als route naar bewijs. Een zorgvuldig privacyonderzoek kan tegelijk een organisatiestructuur zichtbaar maken."
          }
        ]
      },
      {
        "number": "04",
        "title": "De Lex Humanitas Digitalis: vier pijlers",
        "lead": "Het dossier stelt een modelwet voor die de bestaande regels aanvult met expliciete normen voor digitale intimiteitsdiensten.",
        "blocks": [
          {
            "type": "para",
            "text": "Pijler 1 is verplichte transparantie in intimiteitsdiensten. Ghost-chatting of substantiële automatisering zonder duidelijke melding zou volgens de bron niet slechts een kwestie van gebruikerservaring zijn, maar een juridisch relevante overtreding."
          },
          {
            "type": "para",
            "text": "Pijler 2 is beperking van psychologische dossiervorming buiten de kernfunctionaliteit. De bron wil emotionele of seksuele CRM-data strenger behandelen wanneer die niet noodzakelijk is om de dienst te leveren."
          },
          {
            "type": "para",
            "text": "Pijler 3 is ketenaansprakelijkheid voor digital management bureaus. Het uitgangspunt is dat niet alleen de formele contractspartij, maar ook partijen die feitelijk controle uitoefenen over accounts, data of arbeid verantwoordelijkheid kunnen dragen."
          },
          {
            "type": "para",
            "text": "Pijler 4 is antifraude- en AML-audit op microtransacties wanneer er structurele patronen of verhoogd risico bestaan. Het dossier wil daarmee voorkomen dat de combinatie van veel kleine betalingen buiten beeld blijft."
          },
          {
            "type": "para",
            "text": "Pijler Kernidee van het dossier Te onderzoeken uitvoeringsvraag"
          },
          {
            "type": "table",
            "headers": [
              "1 Transparantie",
              "Meld menselijke / geautomatiseerde uitvoering",
              "Welke informatie is materieel voor de consument?"
            ],
            "rows": []
          },
          {
            "type": "para",
            "text": "2 Data Beperk psychologische profilering Welke data is noodzakelijk en hoe lang blijft die bewaard?"
          },
          {
            "type": "table",
            "headers": [
              "3 Ketenaansprakelijkh",
              "Verbind verantwoordelijkheid aan feitelijke",
              "Wie stuurt account, data, arbeid en"
            ],
            "rows": [
              [
                "eid",
                "controle",
                "geld?"
              ],
              [
                "4 Financieel",
                "Audit microtransacties bij verhoogd risico",
                "Welke patronen activeren toezicht?"
              ]
            ]
          }
        ]
      },
      {
        "number": "05",
        "title": "Handhaving en uitvoerbaarheid",
        "lead": "Een modelwet is pas betekenisvol wanneer de toezichtsketen praktisch uitvoerbaar is.",
        "blocks": [
          {
            "type": "para",
            "text": "Het dossier pleit impliciet voor een combinatie van ex ante transparantie en ex post handhaving. Platforms, agencies en processors zouden duidelijke informatie moeten verstrekken, terwijl toezichthouders toegang moeten hebben tot relevante data en documentatie wanneer misbruik wordt vermoed."
          },
          {
            "type": "para",
            "text": "Ketenaansprakelijkheid vraagt daarbij om een duidelijke definitie van feitelijke controle. Anders dreigt de regeling alleen de formele contractspartij te raken terwijl de operationele macht elders ligt. De bron ziet juist die mismatch als een belangrijk probleem."
          },
          {
            "type": "para",
            "text": "Een ander aandachtspunt is internationale samenwerking. Wanneer creator, agency, payment processor en chatfarm in verschillende landen zitten, kunnen bevoegdheden en procedures versnipperen. Een effectieve regulering zou daarom moeten aansluiten bij bestaande Europese en internationale mechanismen voor gegevensbescherming, financiële compliance en platformtoezicht."
          },
          {
            "type": "para",
            "text": "De juridische agenda van het dossier is uiteindelijk een ontwerpvraag: hoe maak je de partij die economisch profiteert ook voldoende zichtbaar en verantwoordelijk? De Lex Humanitas Digitalis is in deze lezing een voorstel om die zichtbaarheid structureel te vergroten."
          }
        ]
      },
      {
        "number": "90",
        "title": "Bewijsarchitectuur 4.0 — wat telt als bewijs?",
        "lead": "De belangrijkste verbetering is een expliciete scheiding tussen bronmateriaal, verificatie, inferentie en hypothese.",
        "blocks": [
          {
            "type": "para",
            "text": "Een productpagina bewijst dat een leverancier een functie aanbiedt. Zij bewijst niet dat ieder bureau die functie gebruikt, dat de functie op een specifiek account is geactiveerd of dat de functie onrechtmatig wordt gebruikt. Die drie niveaus moeten afzonderlijk worden vastgelegd."
          },
          {
            "type": "para",
            "text": "Een journalistieke undercoverreportage kan operationele praktijken zeer concreet documenteren, maar een enkel bureau of één werknemer is niet automatisch representatief voor de hele markt. Een patroon wordt sterker wanneer meerdere onafhankelijke onderzoeken dezelfde werkwijze laten zien."
          },
          {
            "type": "para",
            "text": "Een juridische regel is geen bewijs dat een specifieke actor de regel heeft overtreden. De juridische analyse moet daarom steeds uit vier stappen bestaan: toepasselijke norm, feitelijke handeling, bewijs van die handeling en causaliteit tussen handeling en normschending."
          },
          {
            "type": "para",
            "text": "Statistische cijfers krijgen alleen de status van onderzoeksbevinding wanneer populatie, steekproef, meetmethode, onzekerheid en reproduceerbaarheid bekend zijn. In de aangeleverde latere monografieën komen bijvoorbeeld percentages en correlaties voor die niet met een openbaar dataset of methode zijn onderbouwd. Deze editie behandelt die cijfers daarom als onbevestigd bronmateriaal, niet als resultaten van dit onderzoek."
          },
          {
            "type": "callout",
            "label": "NIEUWE REGEL",
            "text": "Geen enkel cijfer uit de latere 21×21-monografieën wordt als empirisch feit gebruikt tenzij een onafhankelijke primaire of wetenschappelijke bron de methode en uitkomst draagt."
          },
          {
            "type": "table",
            "headers": [
              "Bronsoort",
              "Bewijst primair",
              "Bewijst niet automatisch"
            ],
            "rows": []
          },
          {
            "type": "para",
            "text": "Wet / uitspraak Norm of beslissing Dat een vergelijkbare actor dezelfde norm schendt"
          },
          {
            "type": "para",
            "text": "Productdocument Functie / ontwerpclaim Gebruik in de praktijk of onrechtmatigheid atie"
          },
          {
            "type": "para",
            "text": "Undercoveronderz Gedocumenteerde casus Sectorbreed percentage oek"
          },
          {
            "type": "para",
            "text": "Wetenschappelijke Resultaat binnen methode/populatie Causaliteit buiten de studie studie"
          },
          {
            "type": "para",
            "text": "Getuigenis / Aangeleverd artefact Authenticiteit zonder chain-of-custody screenshot"
          }
        ]
      },
      {
        "number": "91",
        "title": "Nieuwe bronlaag — AI-transparantie na 2 augustus 2026",
        "lead": "De juridische context is veranderd sinds de eerdere editie: de Europese Commissie publiceerde op 20 juli 2026 definitieve richtsnoeren over artikel 50 AI Act; de transparantieverplichtingen gelden vanaf 2 augustus 2026.",
        "blocks": [
          {
            "type": "para",
            "text": "De richtsnoeren zijn rechtstreeks relevant voor het dossier omdat zij het onderscheid verduidelijken tussen systemen die mensen rechtstreeks met AI laten interageren en andere vormen van AI-gegenereerde of gemanipuleerde content. Het relevante onderzoeksvraagstuk is niet simpelweg “is AI gebruikt?”, maar: welke actor is onder de verordening de provider of deployer, welk type systeem wordt gebruikt en welke transparantiehandeling is vereist?"
          },
          {
            "type": "para",
            "text": "Daarmee moet de oude formulering “de mens-in-the-loop is altijd vrijgesteld” worden vermeden. Een menselijke medewerker die AI-output controleert, maakt niet automatisch iedere interactie juridisch gelijk aan volledig menselijke communicatie. De feitelijke rol van het AI-systeem en de toepasselijke categorie moeten worden vastgesteld aan de hand van de verordening en de richtsnoeren."
          },
          {
            "type": "para",
            "text": "Voor het dossier ontstaat een concreet bewijsprotocol: bewaar modelversie, prompt/instellingen, generatie-output, menselijke edits, verzendmoment en identiteit van de verzender. Alleen dan kan achteraf worden vastgesteld welk deel van de interactie menselijk, AI-assisted of volledig geautomatiseerd was."
          },
          {
            "type": "callout",
            "label": "BRONCONTROLE",
            "text": "De Commissie stelt dat artikel 50-transparantieverplichtingen vanaf 2 augustus 2026 van toepassing zijn en heeft hiervoor richtsnoeren gepubliceerd."
          },
          {
            "type": "table",
            "headers": [
              "Interactietype",
              "Onderzoeksvraag",
              "Bewijsstuk"
            ],
            "rows": [
              [
                "Menselijke chatter",
                "Wie schreef/verzond?",
                "Accountlog + arbeidsrooster"
              ],
              [
                "AI-assisted",
                "Welke output kwam uit AI?",
                "Prompt/output + editlog"
              ],
              [
                "AI-direct",
                "Welke systeemfunctie communiceerde?",
                "Modelconfiguratie + verzendlog"
              ],
              [
                "Hybride team",
                "Wie had feitelijke controle?",
                "Role/permission + auditlog"
              ]
            ]
          }
        ]
      },
      {
        "number": "92",
        "title": "Nieuwe bronlaag — CRM als operationeel bewijsstuk",
        "lead": "De publieke documentatie van Infloww maakt het mogelijk de softwarelaag veel preciezer te beschrijven zonder te speculeren over verborgen databases.",
        "blocks": [
          {
            "type": "para",
            "text": "Infloww documenteert dat teams faninformatie kunnen zien zoals bestedingsgeschiedenis, aankoopfrequentie, laatste en hoogste uitgaven, locatie, lokale tijd, handmatig ingevoerde salarisinformatie en notities. Het systeem bevat daarnaast segmentatie op spending power en aankoopgedrag."
          },
          {
            "type": "para",
            "text": "De betekenis daarvan is methodologisch belangrijk. Het bewijst niet dat ieder bureau psychologische kwetsbaarheden verzamelt. Het bewijst wél dat een commercieel systeem het technisch mogelijk maakt om persoonlijke context en koopgedrag te combineren met communicatie en retentie. Dat is een controleerbaar ontwerpfeit."
          },
          {
            "type": "para",
            "text": "Voor een echte forensische audit zijn daarom de volgende artefacten essentieel: rollen en rechten, auditlogs, datavelden, exports, bewaartermijnen, verwerkersovereenkomsten, subverwerkers, gegevenslocaties en configuraties van automatische berichten. Screenshots van de interface zijn nuttig, maar logs zijn sterker."
          },
          {
            "type": "callout",
            "label": "BEWIJSGRENS",
            "text": "De leverancierdocumentatie ondersteunt de aanwezigheid van segmentatie- en personalisatiefuncties. Zij ondersteunt niet op zichzelf de stelling dat specifieke bureaus deze functies misbruiken."
          },
          {
            "type": "table",
            "headers": [
              "Artefact",
              "Wat het kan aantonen",
              "Sterkte"
            ],
            "rows": []
          },
          {
            "type": "para",
            "text": "Productpagina Ontwerp/functie Hoog voor feature-bestaan"
          },
          {
            "type": "para",
            "text": "Helpcenter Gedetailleerde werking Hoog voor operationeel ontwerp"
          },
          {
            "type": "table",
            "headers": [
              "Accountconfig",
              "Werkelijk geactiveerde functie",
              "Zeer hoog"
            ],
            "rows": [
              [
                "Auditlog",
                "Wie deed wat en wanneer",
                "Zeer hoog"
              ],
              [
                "Export / DB",
                "Welke data werkelijk aanwezig was",
                "Zeer hoog, mits"
              ],
              [
                "snapshot",
                "",
                "authenticiteit"
              ]
            ]
          }
        ]
      },
      {
        "number": "93",
        "title": "Forensisch protocol — van verhaal naar reproduceerbare case",
        "lead": "Een volgende editie kan veel sterker worden door iedere casus als een klein digitaal onderzoeksdossier te behandelen.",
        "blocks": [
          {
            "type": "para",
            "text": "Stap A: preserveer het bronbestand onveranderd en maak een cryptografische hash. Stap B: noteer datum, bron, verkrijgingswijze en eventuele toestemming. Stap C: maak een tijdlijn van account-, chat-, betalings- en personeelsgebeurtenissen. Stap D: vergelijk identiteit, IP, device, loginrol en verzendmomenten. Stap E: koppel ieder feit aan een bron-ID."
          },
          {
            "type": "para",
            "text": "Voor CRM-onderzoek moeten persoonsgegevens worden geminimaliseerd. Onderzoekers hebben niet noodzakelijk de inhoud van alle privégesprekken nodig om te bewijzen dat een team werkt met spending tiers of scripts. Een schema met geanonimiseerde identifiers kan hetzelfde mechanisme aantonen met minder privacyrisico."
          },
          {
            "type": "para",
            "text": "Voor financiële reconstructie moeten betalingsgegevens worden gescheiden van interpretatie. Een reeks microbetalingen is op zichzelf geen bewijs van carding of witwassen. Daarvoor zijn aanvullende signalen nodig, bijvoorbeeld chargebackpatronen, accountkoppelingen, afwijkende device-signalen, processor alerts, bankonderzoek of strafrechtelijke stukken."
          },
          {
            "type": "callout",
            "label": "CHAIN OF CUSTODY",
            "text": "Zonder herkomst, integriteit en tijdlijn van een digitaal artefact blijft een screenshot illustratief in plaats van forensisch beslissend."
          },
          {
            "type": "table",
            "headers": [
              "Fase",
              "Minimumdocumentatie"
            ],
            "rows": [
              [
                "Preservatie",
                "Origineel bestand + hash + datum"
              ],
              [
                "Context",
                "Bron, verkrijgingswijze, toestemming"
              ],
              [
                "Reconstructie",
                "Tijdlijn + betrokken accounts"
              ],
              [
                "Correlatie",
                "Chat + CRM + payment + login"
              ],
              [
                "Conclusie",
                "Claim + bewijs + alternatieve verklaring"
              ]
            ]
          }
        ]
      },
      {
        "number": "94",
        "title": "Audit van de zware claims — wat moet uit de tekst?",
        "lead": "De diepere monografieën bevatten krachtige cijfers en causale formuleringen. De wetenschappelijke kwaliteit van de reeks stijgt als die claims zichtbaar worden teruggezet naar hun bewijsstatus.",
        "blocks": [
          {
            "type": "para",
            "text": "De stellingen over “78% van 200 virale video’s”, “r=0,68 bij n=312”, “€2.100 per maand”, “r=-0,71 bij n=12”, “oxytocine +150%”, “D2 -22%” en vergelijkbare exacte effecten zijn in het beschikbare bronmateriaal niet voorzien van een controleerbare dataset, preregistratie of peer-reviewed analyse. Ze worden daarom niet herhaald als onderzoeksresultaten."
          },
          {
            "type": "para",
            "text": "Ook de formulering dat een markt bewust paranoia creëert om daarna de oplossing te verkopen is een intentieclaim. Een economisch systeem kan voordeel hebben bij vraag naar een product zonder dat daarmee een gecoördineerde intentie is bewezen. Het onderscheid tussen incentive en intentie wordt in deze editie expliciet gemaakt."
          },
          {
            "type": "para",
            "text": "Dezelfde correctie geldt voor de claim dat adult-tech de oorzaak is van dalende vruchtbaarheid. OECD en UNFPA beschrijven meerdere factoren — onder meer huisvesting, werk, onzekerheid, zorgkosten, partnerbeschikbaarheid en veranderende voorkeuren. Adult-tech kan als hypothese worden onderzocht, maar de bestaande gegevens dragen geen enkelvoudige causale conclusie."
          },
          {
            "type": "callout",
            "label": "REDACTIONELE CORRECTIE",
            "text": "Exacte cijfers zonder reproduceerbare methode worden in deze editie als onbevestigd aangemerkt en niet gebruikt als bewijs."
          },
          {
            "type": "table",
            "headers": [
              "Claim in bronmateriaal",
              "Status in 4.0",
              "Wat nodig is"
            ],
            "rows": [
              [
                "Carding/witwasstraat via",
                "Onbevestigd",
                "Strafdossier / toezichtsdata /"
              ],
              [
                "microtransacties",
                "",
                "processor-analyse"
              ]
            ]
          },
          {
            "type": "para",
            "text": "Adult-tech veroorzaakt lage Hypothese Longitudinaal, multivariaat onderzoek vruchtbaarheid"
          },
          {
            "type": "para",
            "text": "Gecoördineerde paranoia-strategie Hypothese Interne strategie-documenten + causal design"
          },
          {
            "type": "table",
            "headers": [
              "Exacte neurobiologische percentages",
              "Onvoldoende onderbouwd",
              "Peer-reviewed experiment / biometrische data"
            ],
            "rows": []
          },
          {
            "type": "para",
            "text": "Ghost-chatting / AI-chatting bestaat Gedocumenteerd Meerdere onafhankelijke bronnen + productdocs"
          }
        ]
      },
      {
        "number": "95",
        "title": "Juridische matrix 2026 — norm, actor, trigger, remedy",
        "lead": "De juridische analyse kan nog preciezer door iedere mogelijke normschending aan een actor en bewijsstuk te koppelen.",
        "blocks": [
          {
            "type": "para",
            "text": "Bij consumentenrecht draait de kernvraag om misleidende handelingen of omissies en de invloed op het economische gedrag van de consument. De UCPD Guidance behandelt expliciet online platforms, personalisatie, dark patterns en influencer marketing."
          },
          {
            "type": "para",
            "text": "Bij privacy gaat het om doel, grondslag, proportionaliteit, transparantie, dataminimalisatie en eventuele bijzondere categorieën. EDPB-materiaal benadrukt dat artikel 9 ook relevante afgeleide/inferred data kan raken."
          },
          {
            "type": "para",
            "text": "Bij DSA gaat het onder meer om dark patterns, transparantie en aanbevelingssystemen. Bij AI Act artikel 50 ligt de focus op transparantie van bepaalde AI-interacties en content. De nieuwe editie voorkomt dat één wet alle problemen moet oplossen."
          },
          {
            "type": "callout",
            "label": "JURIDISCHE VERBETERING",
            "text": "De vraag “welke wet faalt?” wordt vervangen door “welke verplichting dekt welk feit, en waar blijft een restcategorie?”"
          },
          {
            "type": "table",
            "headers": [
              "Domein",
              "Mogelijke trigger",
              "Bewijs"
            ],
            "rows": []
          },
          {
            "type": "callout",
            "label": "UCPD",
            "text": "Misleidende voorstelling van wie communiceert Interface + voorwaarden + chatlog"
          },
          {
            "type": "callout",
            "label": "AVG",
            "text": "Verwerking / profilering persoonsgegevens Privacy notice + data fields + logs"
          },
          {
            "type": "callout",
            "label": "DSA",
            "text": "Manipulatieve interface / recommender UX test + recommender info"
          },
          {
            "type": "table",
            "headers": [
              "AI Act",
              "AI-interactie zonder vereiste transparantie",
              "Model/provenance + user notice"
            ],
            "rows": [
              [
                "Contractrecht",
                "Oneerlijke of disproportionele voorwaarden",
                "Contract + uitvoering"
              ]
            ]
          }
        ]
      },
      {
        "number": "SLOT",
        "title": "Juridische kern",
        "lead": "Deze slotpagina vat de redactionele lijn samen zonder de bronclaims als onafhankelijk bewezen feiten te presenteren.",
        "blocks": [
          {
            "type": "list",
            "items": [
              "De bron ziet vooral blinde vlekken op de grens tussen privacy, consumentenrecht, contracten en platformverantwoordelijkheid.",
              "Transparantie over identiteit en automatisering staat centraal.",
              "De Lex Humanitas Digitalis bevat vier voorgestelde pijlers: transparantie, databeperking, ketenaansprakelijkheid en financiële audit.",
              "Uitvoerbaarheid hangt af van heldere definities, bewijsrechten en grensoverschrijdende handhaving."
            ]
          },
          {
            "type": "callout",
            "label": "BRONSTATUS",
            "text": "Gebaseerd op de delen over juridische bewijsvoering, consumentenbescherming, AVG, jurisdictioneel opportunisme en de voorgestelde Lex Humanitas Digitalis in het aangeleverde dossier. Deze Onderzoekseditie 4.0 voegt actuele openbare broncontrole toe per 19 september 2026 en markeert expliciet welke cijfers/claims uit het bronmateriaal niet onafhankelijk zijn geverifieerd."
          },
          {
            "type": "para",
            "text": "Leeswijzer voor verder onderzoek. De bron zelf noemt juridische documentatie, technische data en sociologische analyse als drie sporen voor triangulatie. In deze editie zijn die sporen samengebracht als redactionele structuur; ze zijn niet extern geverifieerd."
          }
        ]
      }
    ]
  },
  {
    "index": 7,
    "slug": "conclusie-synthese",
    "title": "Conclusie, Synthese & Toekomstperspectief",
    "subtitle": "Systeembalans, methodologische grenzen, onderzoeksroadmap en bronregister",
    "kicker": "Synthese · Aanbevelingen · Soevereiniteit",
    "sections": [
      {
        "number": "01",
        "title": "De centrale synthese: één systeem, meerdere lagen",
        "lead": "Het dossier brengt economie, technologie, psychologie, demografie en recht samen in één model van gecommercialiseerde intimiteit.",
        "blocks": [
          {
            "type": "para",
            "text": "Aan de voorkant staat de menselijke belofte: aandacht, erkenning, aantrekkingskracht en nabijheid. Aan de achterkant staan volgens de bron CRM-profielen, scripts, chatteams, AI-tools, betalingsstromen en internationale bedrijfsstructuren. De centrale these is dat de afstand tussen beide lagen groter is geworden naarmate het systeem schaalbaarder werd."
          },
          {
            "type": "para",
            "text": "De zeven delen van deze reeks laten zien dat elke laag een eigen onderzoeksvraag heeft. Operations gaat over wie het gesprek voert. Economie gaat over wie het geld ontvangt. AI gaat over wie de tekst en timing bepaalt. Sociologie gaat over wat herhaalde blootstelling met verwachtingen kan doen. Recht gaat over wie zichtbaar en aanspreekbaar is. Het fundament verbindt die onderdelen filosofisch."
          },
          {
            "type": "para",
            "text": "Samen vormen die vragen geen automatisch bewijs voor alle claims in de bron. Wel ontstaat een coherent onderzoeksprogramma: menselijke intimiteit is niet langer alleen een interpersoonlijk verschijnsel, maar ook een technisch, organisatorisch en financieel proces dat kan worden geobserveerd en geaudit."
          },
          {
            "type": "para",
            "text": "De eindbalans van het dossier is daarom het sterkst wanneer zij wordt geformuleerd als een systeemvraag, niet als een beschuldiging aan ieder individu of ieder platform."
          }
        ]
      },
      {
        "number": "02",
        "title": "Wat het dossier sterk maakt - en waar bewijs nodig blijft",
        "lead": "De kracht van de bron ligt in de samenhang van de hypothesen; de zwakte ligt op plekken waar interpretatie als vaststaand mechanisme wordt geformuleerd.",
        "blocks": [
          {
            "type": "para",
            "text": "Sterk is de herhaalde aandacht voor backend-processen. In plaats van alleen te kijken naar de zichtbare interface vraagt het dossier wie de account beheert, hoe data wordt opgeslagen, hoe arbeid wordt verdeeld en hoe betalingen worden verwerkt. Dat zijn concrete onderzoeksvragen."
          },
          {
            "type": "para",
            "text": "Ook de triangulatiegedachte is sterk. Juridische documenten, technische artefacten en sociologische data kunnen elkaar versterken wanneer zij dezelfde gebeurtenis vanuit verschillende invalshoeken laten zien."
          },
          {
            "type": "para",
            "text": "Meer bewijs is nodig voor de zwaarste causaliteitsclaims: de relatie tussen adult-tech en demografische daling, de veronderstelling dat maatschappelijke angst doelbewust commercieel wordt opgewekt, en de koppeling tussen specifieke microtransacties en georganiseerde criminaliteit. Zulke claims vragen onafhankelijke datasets en primaire bronnen."
          },
          {
            "type": "para",
            "text": "De meest geloofwaardige vervolgversie is daarom niet per definitie stelliger, maar preciezer: elke claim krijgt een bronstatus, een bewijsbehoefte en een falsificatiecriterium."
          }
        ]
      },
      {
        "number": "03",
        "title": "Aanbevelingen voor toezichthouders",
        "lead": "De beleidsrichting uit het dossier kan worden vertaald naar een praktische toezichtagenda zonder de bronclaims vooraf als bewezen vast te leggen.",
        "blocks": [
          {
            "type": "para",
            "text": "Voor toezichthouders ligt een eerste prioriteit bij transparantie over identiteit en automatisering. Onderzoek kan beginnen met de vraag welke informatie een consument werkelijk ontvangt over wie communiceert en welke onderdelen door systemen worden ondersteund."
          },
          {
            "type": "para",
            "text": "Een tweede prioriteit is data governance. Toezichthouders kunnen kijken naar welke categorieen persoonlijke informatie in CRM-systemen worden opgeslagen, wie toegang heeft, hoe lang informatie wordt bewaard en welke gegevens commercieel worden gebruikt."
          },
          {
            "type": "para",
            "text": "Een derde prioriteit is ketenverantwoordelijkheid. Niet alleen het front-end platform, maar ook agency, betalingsverwerker en operationele dienstverlener kunnen in een audit worden meegenomen. Het dossier benadrukt juist de risico's van versnippering."
          },
          {
            "type": "para",
            "text": "Een vierde prioriteit is patroononderzoek naar microtransacties. Niet elk klein bedrag is verdacht, maar cumulatieve patronen, afwijkende uitbetalingen en onduidelijke tegenpartijen kunnen aanleiding zijn voor nader onderzoek binnen bestaande compliance- en fraudekaders."
          }
        ]
      },
      {
        "number": "04",
        "title": "Toekomstperspectief: digitale soevereiniteit en menselijke waardigheid",
        "lead": "Het slot van het dossier verplaatst de vraag van \"wat doet het platform?\" naar \"welke grenzen willen we stellen aan de digitalisering van menselijke waardigheid?\"",
        "blocks": [
          {
            "type": "para",
            "text": "Digitale soevereiniteit betekent in deze context niet het afwijzen van technologie. Het betekent dat gebruikers en makers niet volledig afhankelijk worden van systemen waarvan zij de logica niet kunnen zien. Transparantie, dataportabiliteit, accountautonomie en begrijpelijke regels zijn de institutionele basis daarvoor."
          },
          {
            "type": "para",
            "text": "Menselijke waardigheid krijgt in het dossier een eigen plaats. De auteur maakt onderscheid tussen een persoon als consument en een persoon als mens. Wanneer aandacht, kwetsbaarheid en emotionele steun uitsluitend als economische inputs worden behandeld, bestaat het risico dat de mens wordt gereduceerd tot profiel, segment of omzetkans."
          },
          {
            "type": "para",
            "text": "De toekomstvraag is daarom welke vormen van digitalisering we wél wenselijk vinden. Technologie kan bereik vergroten, taal overbruggen, communities verbinden en mensen helpen. De probleemstelling ontstaat wanneer dezelfde instrumenten worden gebruikt om afhankelijkheid, verborgen profilering of misleiding te optimaliseren."
          },
          {
            "type": "para",
            "text": "Het dossier pleit uiteindelijk voor een herwaardering van onbetaalde menselijke aanwezigheid. Als beleidsidee is dat meer dan een slogan: het betekent investeren in fysieke sociale ruimte, rechten van creators, transparante digitale diensten en institutionele controle op systemen die intimiteit op schaal organiseren."
          }
        ]
      },
      {
        "number": "05",
        "title": "Een praktisch vervolgprogramma voor onderzoek en beleid",
        "lead": "De zeven-delige reeks kan het best worden vervolgd met een methodisch onderzoeksprogramma waarin elke zware claim een eigen bewijsroute krijgt.",
        "blocks": [
          {
            "type": "para",
            "text": "Stap 1 is broninventarisatie. Verzamel contracten, platformvoorwaarden, interne handleidingen, CRM-screenshots, technische logs en relevante financiële documenten. Label ieder item op herkomst, datum en betrouwbaarheid."
          },
          {
            "type": "para",
            "text": "Stap 2 is reconstructie. Bouw per case een tijdlijn waarin interactie, data-opslag, scriptgebruik en betaling naast elkaar worden gezet. Zo wordt zichtbaar welke onderdelen feitelijk samenhangen en welke slechts verondersteld worden."
          },
          {
            "type": "para",
            "text": "Stap 3 is vergelijking. Onderzoek meerdere accounts, meerdere agencies en meerdere jurisdicties zodat een patroon niet op één anomalie wordt gebaseerd."
          },
          {
            "type": "para",
            "text": "Stap 4 is onafhankelijke toetsing. Laat juridische, technische en sociologische reviewers elk hun eigen onderdeel beoordelen. Dit voorkomt dat één discipline claims uit een andere discipline automatisch als bewezen overneemt."
          },
          {
            "type": "para",
            "text": "Stap 5 is publicatie met onzekerheidslabels. Een professioneel dossier kan tegelijk krachtig en voorzichtig zijn: het maakt duidelijk wat vaststaat, wat aannemelijk is, wat een hypothese blijft en welke gegevens nog ontbreken."
          }
        ]
      },
      {
        "number": "90",
        "title": "Bewijsarchitectuur 4.0 — wat telt als bewijs?",
        "lead": "De belangrijkste verbetering is een expliciete scheiding tussen bronmateriaal, verificatie, inferentie en hypothese.",
        "blocks": [
          {
            "type": "para",
            "text": "Een productpagina bewijst dat een leverancier een functie aanbiedt. Zij bewijst niet dat ieder bureau die functie gebruikt, dat de functie op een specifiek account is geactiveerd of dat de functie onrechtmatig wordt gebruikt. Die drie niveaus moeten afzonderlijk worden vastgelegd."
          },
          {
            "type": "para",
            "text": "Een journalistieke undercoverreportage kan operationele praktijken zeer concreet documenteren, maar een enkel bureau of één werknemer is niet automatisch representatief voor de hele markt. Een patroon wordt sterker wanneer meerdere onafhankelijke onderzoeken dezelfde werkwijze laten zien."
          },
          {
            "type": "para",
            "text": "Een juridische regel is geen bewijs dat een specifieke actor de regel heeft overtreden. De juridische analyse moet daarom steeds uit vier stappen bestaan: toepasselijke norm, feitelijke handeling, bewijs van die handeling en causaliteit tussen handeling en normschending."
          },
          {
            "type": "para",
            "text": "Statistische cijfers krijgen alleen de status van onderzoeksbevinding wanneer populatie, steekproef, meetmethode, onzekerheid en reproduceerbaarheid bekend zijn. In de aangeleverde latere monografieën komen bijvoorbeeld percentages en correlaties voor die niet met een openbaar dataset of methode zijn onderbouwd. Deze editie behandelt die cijfers daarom als onbevestigd bronmateriaal, niet als resultaten van dit onderzoek."
          },
          {
            "type": "callout",
            "label": "NIEUWE REGEL",
            "text": "Geen enkel cijfer uit de latere 21×21-monografieën wordt als empirisch feit gebruikt tenzij een onafhankelijke primaire of wetenschappelijke bron de methode en uitkomst draagt."
          },
          {
            "type": "table",
            "headers": [
              "Bronsoort",
              "Bewijst primair",
              "Bewijst niet automatisch"
            ],
            "rows": []
          },
          {
            "type": "para",
            "text": "Wet / uitspraak Norm of beslissing Dat een vergelijkbare actor dezelfde norm schendt"
          },
          {
            "type": "para",
            "text": "Productdocument Functie / ontwerpclaim Gebruik in de praktijk of onrechtmatigheid atie"
          },
          {
            "type": "para",
            "text": "Undercoveronderz Gedocumenteerde casus Sectorbreed percentage oek"
          },
          {
            "type": "para",
            "text": "Wetenschappelijke Resultaat binnen methode/populatie Causaliteit buiten de studie studie"
          },
          {
            "type": "para",
            "text": "Getuigenis / Aangeleverd artefact Authenticiteit zonder chain-of-custody screenshot"
          }
        ]
      },
      {
        "number": "91",
        "title": "Nieuwe bronlaag — AI-transparantie na 2 augustus 2026",
        "lead": "De juridische context is veranderd sinds de eerdere editie: de Europese Commissie publiceerde op 20 juli 2026 definitieve richtsnoeren over artikel 50 AI Act; de transparantieverplichtingen gelden vanaf 2 augustus 2026.",
        "blocks": [
          {
            "type": "para",
            "text": "De richtsnoeren zijn rechtstreeks relevant voor het dossier omdat zij het onderscheid verduidelijken tussen systemen die mensen rechtstreeks met AI laten interageren en andere vormen van AI-gegenereerde of gemanipuleerde content. Het relevante onderzoeksvraagstuk is niet simpelweg “is AI gebruikt?”, maar: welke actor is onder de verordening de provider of deployer, welk type systeem wordt gebruikt en welke transparantiehandeling is vereist?"
          },
          {
            "type": "para",
            "text": "Daarmee moet de oude formulering “de mens-in-the-loop is altijd vrijgesteld” worden vermeden. Een menselijke medewerker die AI-output controleert, maakt niet automatisch iedere interactie juridisch gelijk aan volledig menselijke communicatie. De feitelijke rol van het AI-systeem en de toepasselijke categorie moeten worden vastgesteld aan de hand van de verordening en de richtsnoeren."
          },
          {
            "type": "para",
            "text": "Voor het dossier ontstaat een concreet bewijsprotocol: bewaar modelversie, prompt/instellingen, generatie-output, menselijke edits, verzendmoment en identiteit van de verzender. Alleen dan kan achteraf worden vastgesteld welk deel van de interactie menselijk, AI-assisted of volledig geautomatiseerd was."
          },
          {
            "type": "callout",
            "label": "BRONCONTROLE",
            "text": "De Commissie stelt dat artikel 50-transparantieverplichtingen vanaf 2 augustus 2026 van toepassing zijn en heeft hiervoor richtsnoeren gepubliceerd."
          },
          {
            "type": "table",
            "headers": [
              "Interactietype",
              "Onderzoeksvraag",
              "Bewijsstuk"
            ],
            "rows": [
              [
                "Menselijke chatter",
                "Wie schreef/verzond?",
                "Accountlog + arbeidsrooster"
              ],
              [
                "AI-assisted",
                "Welke output kwam uit AI?",
                "Prompt/output + editlog"
              ],
              [
                "AI-direct",
                "Welke systeemfunctie communiceerde?",
                "Modelconfiguratie + verzendlog"
              ],
              [
                "Hybride team",
                "Wie had feitelijke controle?",
                "Role/permission + auditlog"
              ]
            ]
          }
        ]
      },
      {
        "number": "92",
        "title": "Nieuwe bronlaag — CRM als operationeel bewijsstuk",
        "lead": "De publieke documentatie van Infloww maakt het mogelijk de softwarelaag veel preciezer te beschrijven zonder te speculeren over verborgen databases.",
        "blocks": [
          {
            "type": "para",
            "text": "Infloww documenteert dat teams faninformatie kunnen zien zoals bestedingsgeschiedenis, aankoopfrequentie, laatste en hoogste uitgaven, locatie, lokale tijd, handmatig ingevoerde salarisinformatie en notities. Het systeem bevat daarnaast segmentatie op spending power en aankoopgedrag."
          },
          {
            "type": "para",
            "text": "De betekenis daarvan is methodologisch belangrijk. Het bewijst niet dat ieder bureau psychologische kwetsbaarheden verzamelt. Het bewijst wél dat een commercieel systeem het technisch mogelijk maakt om persoonlijke context en koopgedrag te combineren met communicatie en retentie. Dat is een controleerbaar ontwerpfeit."
          },
          {
            "type": "para",
            "text": "Voor een echte forensische audit zijn daarom de volgende artefacten essentieel: rollen en rechten, auditlogs, datavelden, exports, bewaartermijnen, verwerkersovereenkomsten, subverwerkers, gegevenslocaties en configuraties van automatische berichten. Screenshots van de interface zijn nuttig, maar logs zijn sterker."
          },
          {
            "type": "callout",
            "label": "BEWIJSGRENS",
            "text": "De leverancierdocumentatie ondersteunt de aanwezigheid van segmentatie- en personalisatiefuncties. Zij ondersteunt niet op zichzelf de stelling dat specifieke bureaus deze functies misbruiken."
          },
          {
            "type": "table",
            "headers": [
              "Artefact",
              "Wat het kan aantonen",
              "Sterkte"
            ],
            "rows": []
          },
          {
            "type": "para",
            "text": "Productpagina Ontwerp/functie Hoog voor feature-bestaan"
          },
          {
            "type": "para",
            "text": "Helpcenter Gedetailleerde werking Hoog voor operationeel ontwerp"
          },
          {
            "type": "table",
            "headers": [
              "Accountconfig",
              "Werkelijk geactiveerde functie",
              "Zeer hoog"
            ],
            "rows": [
              [
                "Auditlog",
                "Wie deed wat en wanneer",
                "Zeer hoog"
              ],
              [
                "Export / DB",
                "Welke data werkelijk aanwezig was",
                "Zeer hoog, mits"
              ],
              [
                "snapshot",
                "",
                "authenticiteit"
              ]
            ]
          }
        ]
      },
      {
        "number": "93",
        "title": "Forensisch protocol — van verhaal naar reproduceerbare case",
        "lead": "Een volgende editie kan veel sterker worden door iedere casus als een klein digitaal onderzoeksdossier te behandelen.",
        "blocks": [
          {
            "type": "para",
            "text": "Stap A: preserveer het bronbestand onveranderd en maak een cryptografische hash. Stap B: noteer datum, bron, verkrijgingswijze en eventuele toestemming. Stap C: maak een tijdlijn van account-, chat-, betalings- en personeelsgebeurtenissen. Stap D: vergelijk identiteit, IP, device, loginrol en verzendmomenten. Stap E: koppel ieder feit aan een bron-ID."
          },
          {
            "type": "para",
            "text": "Voor CRM-onderzoek moeten persoonsgegevens worden geminimaliseerd. Onderzoekers hebben niet noodzakelijk de inhoud van alle privégesprekken nodig om te bewijzen dat een team werkt met spending tiers of scripts. Een schema met geanonimiseerde identifiers kan hetzelfde mechanisme aantonen met minder privacyrisico."
          },
          {
            "type": "para",
            "text": "Voor financiële reconstructie moeten betalingsgegevens worden gescheiden van interpretatie. Een reeks microbetalingen is op zichzelf geen bewijs van carding of witwassen. Daarvoor zijn aanvullende signalen nodig, bijvoorbeeld chargebackpatronen, accountkoppelingen, afwijkende device-signalen, processor alerts, bankonderzoek of strafrechtelijke stukken."
          },
          {
            "type": "callout",
            "label": "CHAIN OF CUSTODY",
            "text": "Zonder herkomst, integriteit en tijdlijn van een digitaal artefact blijft een screenshot illustratief in plaats van forensisch beslissend."
          },
          {
            "type": "table",
            "headers": [
              "Fase",
              "Minimumdocumentatie"
            ],
            "rows": [
              [
                "Preservatie",
                "Origineel bestand + hash + datum"
              ],
              [
                "Context",
                "Bron, verkrijgingswijze, toestemming"
              ],
              [
                "Reconstructie",
                "Tijdlijn + betrokken accounts"
              ],
              [
                "Correlatie",
                "Chat + CRM + payment + login"
              ],
              [
                "Conclusie",
                "Claim + bewijs + alternatieve verklaring"
              ]
            ]
          }
        ]
      },
      {
        "number": "94",
        "title": "Audit van de zware claims — wat moet uit de tekst?",
        "lead": "De diepere monografieën bevatten krachtige cijfers en causale formuleringen. De wetenschappelijke kwaliteit van de reeks stijgt als die claims zichtbaar worden teruggezet naar hun bewijsstatus.",
        "blocks": [
          {
            "type": "para",
            "text": "De stellingen over “78% van 200 virale video’s”, “r=0,68 bij n=312”, “€2.100 per maand”, “r=-0,71 bij n=12”, “oxytocine +150%”, “D2 -22%” en vergelijkbare exacte effecten zijn in het beschikbare bronmateriaal niet voorzien van een controleerbare dataset, preregistratie of peer-reviewed analyse. Ze worden daarom niet herhaald als onderzoeksresultaten."
          },
          {
            "type": "para",
            "text": "Ook de formulering dat een markt bewust paranoia creëert om daarna de oplossing te verkopen is een intentieclaim. Een economisch systeem kan voordeel hebben bij vraag naar een product zonder dat daarmee een gecoördineerde intentie is bewezen. Het onderscheid tussen incentive en intentie wordt in deze editie expliciet gemaakt."
          },
          {
            "type": "para",
            "text": "Dezelfde correctie geldt voor de claim dat adult-tech de oorzaak is van dalende vruchtbaarheid. OECD en UNFPA beschrijven meerdere factoren — onder meer huisvesting, werk, onzekerheid, zorgkosten, partnerbeschikbaarheid en veranderende voorkeuren. Adult-tech kan als hypothese worden onderzocht, maar de bestaande gegevens dragen geen enkelvoudige causale conclusie."
          },
          {
            "type": "callout",
            "label": "REDACTIONELE CORRECTIE",
            "text": "Exacte cijfers zonder reproduceerbare methode worden in deze editie als onbevestigd aangemerkt en niet gebruikt als bewijs."
          },
          {
            "type": "table",
            "headers": [
              "Claim in bronmateriaal",
              "Status in 4.0",
              "Wat nodig is"
            ],
            "rows": [
              [
                "Carding/witwasstraat via",
                "Onbevestigd",
                "Strafdossier / toezichtsdata /"
              ],
              [
                "microtransacties",
                "",
                "processor-analyse"
              ]
            ]
          },
          {
            "type": "para",
            "text": "Adult-tech veroorzaakt lage Hypothese Longitudinaal, multivariaat onderzoek vruchtbaarheid"
          },
          {
            "type": "para",
            "text": "Gecoördineerde paranoia-strategie Hypothese Interne strategie-documenten + causal design"
          },
          {
            "type": "table",
            "headers": [
              "Exacte neurobiologische percentages",
              "Onvoldoende onderbouwd",
              "Peer-reviewed experiment / biometrische data"
            ],
            "rows": []
          },
          {
            "type": "para",
            "text": "Ghost-chatting / AI-chatting bestaat Gedocumenteerd Meerdere onafhankelijke bronnen + productdocs"
          }
        ]
      },
      {
        "number": "95",
        "title": "Bronregister en versiecontrole",
        "lead": "Een volledig dossier heeft een controlelaag waarin iedere externe bron, datum en reikwijdte zichtbaar is.",
        "blocks": [
          {
            "type": "para",
            "text": "Deze versie gebruikt de aangeleverde dossierbronnen als inhoudelijke basis en voegt openbare verificatie toe per 19 september 2026. De bron-ID’s W01–W26 hieronder zijn bedoeld als klikbare primaire of gezaghebbende referenties."
          },
          {
            "type": "para",
            "text": "Belangrijk: bronvermelding betekent niet dat de bron alle conclusies van het dossier onderschrijft. De bron wordt alleen gebruikt voor het specifieke feit of juridische kader dat naast haar staat."
          },
          {
            "type": "callout",
            "label": "ID",
            "text": "Bron URL"
          },
          {
            "type": "para",
            "text": "W01 European Commission — AI Act Article 50 https://digital-strategy.ec.europa.eu/en/library/guidelines- transparency guidelines (20 July 2026) transparency-obligations-providers-and-deployers-ai-syst ems"
          },
          {
            "type": "table",
            "headers": [
              "W03",
              "European Commission — Digital Services Act Q&A",
              "https://digital-strategy.ec.europa.eu/en/faqs/digital-servic es-act-questions-and-answers"
            ],
            "rows": [
              [
                "W04",
                "European Commission — Review of EU consumer law / Digital Fairness Act",
                "https://commission.europa.eu/law/law-topic/consumer-pro tection-law/review-eu-consumer-law_en"
              ]
            ]
          },
          {
            "type": "para",
            "text": "W05 European Commission — Unfair Commercial https://commission.europa.eu/law/law-topic/consumer-pro Practices Directive tection-law/unfair-commercial-practices-and-price-indicati on/unfair-commercial-practices-directive_en"
          },
          {
            "type": "table",
            "headers": [
              "W06",
              "EDPB — DSA/GDPR interplay: profiling and special categories",
              "https://www.edpb.europa.eu/system/files/2025-09/edpb_g uidelines_202503_interplay-dsa-gdpr_v1_en.pdf"
            ],
            "rows": []
          },
          {
            "type": "para",
            "text": "W08 OECD — Fertility trends across the OECD https://www.oecd.org/en/publications/society-at-a-glance- 2024_918d8db3-en/full-report/fertility-trends-across-the-o ecd-underlying-drivers-and-the-role-for-policy_770679b8. html"
          },
          {
            "type": "table",
            "headers": [
              "W09",
              "UNFPA — State of World Population 2025 / fertility",
              "https://www.unfpa.org/press/unfpa-report-links-falling-birt h-rates-cost-living-sexist-norms-fear-future"
            ],
            "rows": []
          },
          {
            "type": "para",
            "text": "W10 European Commission — Fanblast / https://www.verbraucherzentrale.de/wissen/digitale-welt/s consumer enforcement context oziale-netzwerke/promifakechats-bei-whatsapp-gerichte-s toppen-taeuschung-bei-fanblast-113380"
          },
          {
            "type": "table",
            "headers": [
              "W11",
              "Infloww — official site",
              "https://infloww.com/"
            ],
            "rows": []
          },
          {
            "type": "para",
            "text": "W12 Infloww — Fan Insights help centre https://help.infloww.com/en/articles/418759-fan-insights-p anel"
          },
          {
            "type": "table",
            "headers": [
              "W15",
              "Supercreator — AI Chatter & CRM",
              "https://www.supercreator.app/"
            ],
            "rows": [
              [
                "W20",
                "Reuters — AI bots and OnlyFans chatters (30 July 2024)",
                "https://www.reuters.com/technology/artificial-intelligence/ ai-bots-talk-dirty-so-onlyfans-stars-dont-have-2024-07-30/"
              ],
              [
                "W22",
                "EBA — AML/CFT risks in EU financial sector (2025)",
                "https://www.eba.europa.eu/regulation-and-policy/anti-mo ney-laundering-and-countering-financing-terrorism"
              ]
            ]
          },
          {
            "type": "para",
            "text": "W25 OnlyFans financial figures compiled from https://elvision-studios.com/onlyfans-statistics Fenix accounts"
          },
          {
            "type": "callout",
            "label": "ID",
            "text": "Bron URL"
          },
          {
            "type": "table",
            "headers": [
              "W26",
              "European Commission — DSA transparency and researcher data access",
              "https://digital-strategy.ec.europa.eu/en/policies/dsa-bring s-transparency"
            ],
            "rows": []
          }
        ]
      },
      {
        "number": "96",
        "title": "Eind-audit — wat kan in 2026 verantwoord worden gezegd?",
        "lead": "De sterkste eindversie is niet de meest absolute versie, maar de versie die een kritische lezer stap voor stap kan controleren.",
        "blocks": [
          {
            "type": "para",
            "text": "Verantwoord: er bestaan commerciële tools die fan spending, purchase history en personalisatie ondersteunen; er bestaan AI-systemen die in de stem van een creator kunnen chatten; journalistieke onderzoeken hebben ghost-chatting en outsourced chatter work gedocumenteerd; Europese regelgeving bevat inmiddels specifieke regels over consumentenfairness, privacy, platformontwerp en AI-transparantie."
          },
          {
            "type": "para",
            "text": "Niet verantwoord zonder nieuw bewijs: dat een meerderheid van de sector psychologische kwetsbaarheden als “wapen” gebruikt; dat microtransacties structureel een witwasstraat vormen; dat adult-tech de daling van vruchtbaarheid veroorzaakt; of dat een gecoördineerd systeem bewust maatschappelijke paranoia produceert."
          },
          {
            "type": "para",
            "text": "Verantwoord als hypothese: dat de combinatie van CRM, segmentatie, geautomatiseerde messaging en verborgen menselijke/AI-vervanging een nieuwe vorm van commerciële asymmetrie kan creëren. Dat is precies de hypothese die een volgende empirische studie moet testen."
          },
          {
            "type": "callout",
            "label": "EINDCRITERIUM",
            "text": "Elke sterke claim moet een lezer naar een concreet document, log, dataset of reproduceerbare methode kunnen leiden."
          },
          {
            "type": "table",
            "headers": [
              "Status",
              "Formulering in 4.0"
            ],
            "rows": [
              [
                "Vastgesteld",
                "Bron laat het feit rechtstreeks zien"
              ],
              [
                "Gedocumenteerd",
                "Sterke casus, beperkte generaliseerbaarheid"
              ],
              [
                "Betwist",
                "Bronnen of partijen verschillen"
              ],
              [
                "Onbevestigd",
                "Geen voldoende bewijs gevonden"
              ],
              [
                "Hypothese",
                "Plausibel onderzoekspunt, niet vastgesteld"
              ]
            ]
          }
        ]
      },
      {
        "number": "97",
        "title": "Bijlage — onderzoeksprioriteiten",
        "lead": "Een compacte prioriteitenlijst voor vervolgonderzoek.",
        "blocks": [
          {
            "type": "para",
            "text": "Prioriteit 1: verkrijg primaire contracts- en platformdocumenten. Prioriteit 2: voer een multi-agency audit uit. Prioriteit 3: verzamel geanonimiseerde CRM- en provenance-logs. Prioriteit 4: voer een longitudinale sociologische studie uit. Prioriteit 5: vergelijk nationale handhavingsroutes."
          }
        ]
      },
      {
        "number": "SLOT",
        "title": "Slotbeschouwing",
        "lead": "Deze slotpagina vat de redactionele lijn samen zonder de bronclaims als onafhankelijk bewezen feiten te presenteren.",
        "blocks": [
          {
            "type": "list",
            "items": [
              "De kern van het dossier is een systeemkritiek op de commodificatie van menselijke nabijheid.",
              "De meest bruikbare vervolgstap is bewijsgerichte reconstructie, niet verdere retorische escalatie.",
              "Digitale soevereiniteit vraagt om transparantie, controle over data en feitelijke verantwoordelijkheid in de hele keten.",
              "Menselijke waardigheid blijft in deze synthese het normatieve ijkpunt, terwijl empirische claims afzonderlijk moeten worden getoetst."
            ]
          },
          {
            "type": "callout",
            "label": "BRONSTATUS",
            "text": "Gebaseerd op de slothoofdstukken, modelwetgeving, post-digitale herstelstrategie en de inhoudelijke synthese van het aangeleverde dossier. De formulering van aanbevelingen is redactionele ordening van de bron. Deze Onderzoekseditie 4.0 voegt actuele openbare broncontrole toe per 19 september 2026 en markeert expliciet welke cijfers/claims uit het bronmateriaal niet onafhankelijk zijn geverifieerd."
          },
          {
            "type": "para",
            "text": "Leeswijzer voor verder onderzoek. De bron zelf noemt juridische documentatie, technische data en sociologische analyse als drie sporen voor triangulatie. In deze editie zijn die sporen samengebracht als redactionele structuur; ze zijn niet extern geverifieerd."
          }
        ]
      }
    ]
  }
];

export const sourceRegistry: SourceEntry[] = [
  {
    "id": "W01",
    "label": "European Commission — AI Act Article 50 transparency guidelines (20 July 2026)",
    "url": "https://digital-strategy.ec.europa.eu/en/library/guidelines-transparency-obligations-providers-and-deployers-ai-systems"
  },
  {
    "id": "W02",
    "label": "European Commission — AI Act transparency obligations overview",
    "url": "https://digital-strategy.ec.europa.eu/en/policies/guidelines-ai-transparency-obligations"
  },
  {
    "id": "W03",
    "label": "European Commission — Digital Services Act Q&A",
    "url": "https://digital-strategy.ec.europa.eu/en/faqs/digital-services-act-questions-and-answers"
  },
  {
    "id": "W04",
    "label": "European Commission — Review of EU consumer law / Digital Fairness Act",
    "url": "https://commission.europa.eu/law/law-topic/consumer-protection-law/review-eu-consumer-law_en"
  },
  {
    "id": "W05",
    "label": "European Commission — Unfair Commercial Practices Directive",
    "url": "https://commission.europa.eu/law/law-topic/consumer-protection-law/unfair-commercial-practices-and-price-indication/unfair-commercial-practices-directive_en"
  },
  {
    "id": "W06",
    "label": "EDPB — DSA/GDPR interplay: profiling and special categories",
    "url": "https://www.edpb.europa.eu/system/files/2025-09/edpb_guidelines_202503_interplay-dsa-gdpr_v1_en.pdf"
  },
  {
    "id": "W07",
    "label": "EDPB — Data protection basics / special categories",
    "url": "https://www.edpb.europa.eu/sme/learn-the-basics/data-protection-basics_en"
  },
  {
    "id": "W08",
    "label": "OECD — Fertility trends across the OECD",
    "url": "https://www.oecd.org/en/publications/society-at-a-glance-2024_918d8db3-en/full-report/fertility-trends-across-the-oecd-underlying-drivers-and-the-role-for-policy_770679b8.html"
  },
  {
    "id": "W09",
    "label": "UNFPA — State of World Population 2025 / fertility",
    "url": "https://www.unfpa.org/press/unfpa-report-links-falling-birth-rates-cost-living-sexist-norms-fear-future"
  },
  {
    "id": "W10",
    "label": "European Commission — Fanblast / consumer enforcement context",
    "url": "https://www.verbraucherzentrale.de/wissen/digitale-welt/soziale-netzwerke/promifakechats-bei-whatsapp-gerichte-stoppen-taeuschung-bei-fanblast-113380"
  },
  {
    "id": "W11",
    "label": "Infloww — official site",
    "url": "https://infloww.com/"
  },
  {
    "id": "W12",
    "label": "Infloww — Fan Insights help centre",
    "url": "https://help.infloww.com/en/articles/418759-fan-insights-panel"
  },
  {
    "id": "W13",
    "label": "Infloww — Fan Insights / spending power",
    "url": "https://help.infloww.com/en/articles/523936-fan-insights"
  },
  {
    "id": "W14",
    "label": "Infloww — Messages and fan widgets",
    "url": "https://help.infloww.com/en/articles/262111-messages-basic"
  },
  {
    "id": "W15",
    "label": "Supercreator — AI Chatter & CRM",
    "url": "https://www.supercreator.app/"
  },
  {
    "id": "W16",
    "label": "Supercreator — Izzy AI",
    "url": "https://help.supercreator.app/en/articles/11385335-izzy-ai"
  },
  {
    "id": "W17",
    "label": "Supercreator — AI Chatter messages / automation",
    "url": "https://help.supercreator.app/en/articles/11626226-messages-for-ai-chatter"
  },
  {
    "id": "W18",
    "label": "OnlyMonster — traffic metrics",
    "url": "https://docs.onlymonster.ai/management-system/traffic-metrics-legacy"
  },
  {
    "id": "W19",
    "label": "OnlyMonster — link overview / fan purchase analytics",
    "url": "https://docs.onlymonster.ai/management-system/link-overview"
  },
  {
    "id": "W20",
    "label": "Reuters — AI bots and OnlyFans chatters (30 July 2024)",
    "url": "https://www.reuters.com/technology/artificial-intelligence/ai-bots-talk-dirty-so-onlyfans-stars-dont-have-2024-07-30/"
  },
  {
    "id": "W21",
    "label": "WIRED — undercover OnlyFans chatter investigation",
    "url": "https://www.wired.com/story/i-went-undercover-secret-onlyfans-chatter/"
  },
  {
    "id": "W22",
    "label": "EBA — AML/CFT risks in EU financial sector (2025)",
    "url": "https://www.eba.europa.eu/regulation-and-policy/anti-money-laundering-and-countering-financing-terrorism"
  },
  {
    "id": "W23",
    "label": "EBA — crypto-asset ML/TF risk factors",
    "url": "https://eba.europa.eu/publications-and-media/press-releases/eba-issues-guidance-crypto-asset-service-providers"
  },
  {
    "id": "W24",
    "label": "EBA — payment fraud report page",
    "url": "https://www.eba.europa.eu/regulation-and-policy/payment-services-and-electronic-money"
  },
  {
    "id": "W25",
    "label": "OnlyFans financial figures compiled from Fenix accounts",
    "url": "https://elvision-studios.com/onlyfans-statistics"
  },
  {
    "id": "W26",
    "label": "European Commission — DSA transparency and researcher data access",
    "url": "https://digital-strategy.ec.europa.eu/en/policies/dsa-brings-transparency"
  }
];

export function getChapter(slug: string): DossierChapter | undefined {
  return dossierChapters.find((c) => c.slug === slug);
}
