# Definitieve tweetalige leesomgeving

## Doel
De website wordt een volledig tweetalig digitaal leesboek met een consistente lichte, donkere en systeemgestuurde weergave. De Nederlandse editie blijft leidend; de Engelse editie bevat dezelfde volledige inhoud, bewijsgrenzen, tabellen, registers en metadata.

## Uitvoering

### 1. Thema zonder flits of leesverlies
- Voeg één centrale thema-instelling toe met **Licht**, **Donker** en **Systeem**.
- Plaats een compacte, toegankelijke keuzeknop in zowel de hoofdheader als de vaste dossierheader; op mobiel blijft deze naast het menu bruikbaar.
- Bewaar de keuze lokaal, volg systeemwijzigingen live wanneer “Systeem” actief is en stel het thema vóór de eerste zichtbare weergave in om een kleurflits te voorkomen.
- Maak alle hoofdsite- en dossierkleuren semantisch. Vervang de vaste donkere zinc-kleuren in hoofdstukken, kaarten, tabellen, bronregister en zijbalk door lichte/donkere kleurrollen.
- Behoud in donker de huidige grafiet/zinc-uitstraling; maak licht helder wit/lichtgrijs met rustig contrast voor lange leestijd.
- Respecteer verminderde beweging bij de themaovergang.

### 2. Volledige NL/EN-editie
- Bouw één centrale taalvoorziening met Nederlands als standaard en Engels als volledige parallelle editie.
- De taalkeuze komt compact in beide headers en blijft tijdens navigatie bewaard.
- Vertaal alle zichtbare teksten: startpagina, onderzoeksoverzicht, zes pijlers, bibliotheek en filters, juridische pagina’s, claims, bronnen, methode, foutmeldingen, navigatie en footer.
- Vertaal ook alle zeven lange dossierdelen, secties, callouts, tabellen en het bronregister W01–W26 zonder inkorting of inhoudelijke verruiming.
- Lokaliseer paginatitels, beschrijvingen, Open Graph-tekst, datumnotatie, zoeklabels en aantallen. De documenttitels en bronlabels blijven waar nodig hun officiële naam behouden.
- Werk met deelbare Engelse URL’s onder `/en/...`; bestaande Nederlandse URL’s blijven intact. Alle Engelse links wijzen onderling naar Engelse pagina’s en iedere taalkeuze schakelt naar het equivalent van de huidige pagina.
- Zet het documenttaalattribuut correct op `nl` of `en` en voorkom dubbele of dode routes.

### 3. Navigatie als leesboek
- Laat **Onderzoek / Research** rechtstreeks uitkomen bij het volledige monografie-overzicht: Boek I–VI plus het integrale dossier.
- Houd het hoofdmenu sober: manifest, onderzoek/monografieën en bibliotheek; de zeven dossierdelen blijven rechtstreeks bereikbaar in de onderzoeksnavigatie.
- Controleer alle verwijzingen naar documentatie, claimregister, bronnen, methodologie, juridisch kader, bronregister en downloads.
- Behoud oude openbare adressen alleen als permanente doorverwijzingen, zodat bestaande externe links niet breken.

### 4. Forensische inhoud en gegevensintegriteit
- Behoud alle huidige paragrafen, bronverwijzingen, bewijsstatussen en methodologische waarschuwingen in beide talen.
- Benoem de IP-discrepanties expliciet binnen het forensische vergelijkingsprotocol.
- Harmoniseer de LLM-workflow naar exact zes controleerbare stappen door intake en contextopbouw samen te voegen; behoud review en menselijke verantwoordelijkheid.
- Voeg MCC-misbruik/misclassificatie als afzonderlijk financieel bewijsspoor toe, met duidelijke scheiding tussen vaststelling, hypothese en vereiste primaire documentatie.
- Behoud de VHEMT-synthese nadrukkelijk als filosofische lens, niet als bewezen causaliteit.
- Behoud de vier pilaren van Lex Humanitas Digitalis als modelvoorstel, niet als geldend recht.
- Laat tabellen op smalle schermen veilig horizontaal scrollen zonder tekstoverlap.

### 5. Bibliotheek en download-hub
- Behoud de statische, externe-databasevrije publicatiestructuur en alle bestaande definitieve PDF-koppelingen.
- Lokaliseer bibliotheektekst, zoekfunctie, categorieën, metadata en secties, zonder PDF-reader of extra beheerscherm toe te voegen.
- Controleer iedere download op een succesvolle respons en de juiste bestandsnaam.

### 6. Minimalistische footer
- Verwijder `Jona Zeno De Smet` volledig uit de colofon.
- Laat onder **COLOFON / COLOPHON** uitsluitend `Architectuur & Platform door Delplanche` / `Architecture & Platform by Delplanche` staan, gekoppeld aan `https://delplanche.cloud`.
- Behoud uppercase sectiekoppen met lichte letterspacing, subtiele scheidingslijnen en exact de opgegeven Nederlandse copyrightregel; voeg de betekenisgetrouwe Engelse versie toe.

## Technische aanpak
- Maak herbruikbare taal- en themaproviders plus compacte, toegankelijke headerbediening; geen externe vertaaldienst en geen database.
- Splits de grote dossierinhoud in een Nederlandse en Engelse gegevensmodule met identieke ids/slugs en structurele validatie, zodat tabellen en navigatie één-op-één blijven.
- Gebruik gedeelde paginaonderdelen voor NL en EN om vorm- en functiedrift te voorkomen.
- Werk uitsluitend met de bestaande TanStack-router en bestaande ontwerpcomponenten.

## Controle
- Controleer TypeScript en de relevante routes na elke structurele wijziging.
- Test desktop en mobiel in Licht, Donker en Systeem, inclusief bewaren van voorkeuren en systeemwissel.
- Test NL→EN en EN→NL vanaf startpagina, hoofdstuk, bronregister en bibliotheek.
- Doorloop alle interne links en alle PDF-downloads; er mogen geen consolefouten, laadfouten, 404’s of overlappende elementen zijn.
- Vergelijk de vijf gevraagde forensische kernpunten in beide talen en bevestig dat tabellen, aantallen en bron-ids gelijk blijven.
