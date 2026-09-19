# Bibliotheek scherpstellen: exacte titels, zoekfunctie en blauwdruk

De site staat er al: donkere, redactionele stijl, menu met Manifest, Onderzoek, Bibliotheek en Juridisch, oude dossier- en essaypagina's leiden al door naar het onderzoek, en de zeven PDF's zijn downloadbaar. Wat ontbreekt zijn de exacte titels uit jouw specificatie, een zoekfunctie, extra metadata en de inhoudelijke blauwdruk per boek.

De geüploade PDF blijft buiten beschouwing, de bestaande boek-PDF's blijven ongewijzigd en er komt geen beheerscherm.

## 1. Titels en indeling exact volgens specificatie

De zeven publicaties krijgen de titels en ondertitels die je opgaf:

- Pers-whitepaper: Lex Humanitas Digitalis & Systeemanalyse (A4)
- Boek 01: De Technologische Deceptie — Infrastructuur, CRM & Chat-farms
- Boek 02: De Financiële Schaduweconomie — Carding & Witwassen
- Boek 03: De Neurobiologie van de Verslaving — Variable-reward & Operator-psychologie
- Boek 04: De Sociologische Implosie — Demografie & Digitale Substitutie
- Boek 05: Het Juridisch Failliet & Modelwetgeving — Lex Humanitas Digitalis
- Boek 06: Het Post-Digitale Verzet — Sanering & Analoge Heropbouw

De Bibliotheek toont ze in twee duidelijk gescheiden blokken: "Startpunt / Pers" (1 item) en "De Hexalogie" (6 genummerde boeken).

## 2. Nieuwe gegevens per publicatie

Elke publicatie krijgt er drie velden bij: ondertitel, categorie (techniek, financiën, neurobiologie, sociologie, recht, herstel, pers) en publicatiedatum. Paginatelling en bestandsgrootte staan er al; die blijven staan en worden op de kaart getoond naast een categoriebadge en de datum.

## 3. Zoeken en filteren

Boven het overzicht komt een zoekveld plus categorieknoppen. Zoeken werkt op titel, ondertitel, beschrijving, categorie en trefwoorden; filteren gebeurt direct terwijl je typt. De zoekterm komt in het webadres te staan, zodat een filterweergave deelbaar is. Bij geen resultaat verschijnt een nette melding met een knop om te wissen.

## 4. Inhoudelijke blauwdruk per boek

Elke onderzoekspijler (Boek 01 t/m 06) krijgt op zijn pagina een blok "Wat staat er in dit boek": het thema plus de drie à vier inhoudspunten die je beschreef, gevolgd door een directe downloadknop voor de bijbehorende PDF. De bestaande onderzoeksteksten blijven behouden.

## 5. Controle

Na de wijzigingen loop ik de site in de browser na: alle zeven kaarten zichtbaar, zoeken en filteren werkt, elke downloadknop opent de juiste PDF, geen dode links, mobiel en desktop netjes.

## Technisch

- Migratie op `publications`: kolommen `subtitle`, `category`, `published_on`, `keywords` toevoegen; daarna de zeven rijen bijwerken met de definitieve titels, ondertitels, categorieën en datums.
- `src/lib/publications.functions.ts` uitbreiden met de nieuwe velden.
- `src/routes/archief.tsx` herschrijven: twee secties, zoek- en filterbalk via `validateSearch` met `fallback`, client-side filtering op de loaderdata.
- Blauwdrukdata toevoegen aan `src/lib/research-content.ts` en renderen in `src/routes/onderzoek.$slug.tsx`.
- Styling via bestaande tokens in de globale stylesheet; geen hardgecodeerde kleuren.
