# Volledige Engelse editie afronden

## Huidige stand
- De taalknop NL / EN werkt in het dossier, en de bibliotheek, de pijlerpagina's en de paginakoppen zijn al tweetalig.
- De automatische vertaling van de lange teksten is verloren gegaan, omdat de werkomgeving opnieuw is opgestart. De Engelse tekstbestanden bevatten daardoor nog de Nederlandse tekst.

## Uitvoering
1. **Lange teksten opnieuw vertalen**: de zeven dossierdelen, het bronregister W01–W26, de publicaties, de zes pijlers, de boekblauwdrukken, het claimregister, de bronnen en de vier pijlers van Lex Humanitas Digitalis. De vertaling gaat in kleine, rustige porties, zodat de limiet van de vertaaldienst niet geraakt wordt. Elke afgewerkte portie wordt meteen in het project bewaard, zodat een herstart niets meer kost.
2. **Structuur controleren**: per onderdeel worden het aantal secties, tabellen, rijen, bron-id's, nummers, links en PDF-paden vergeleken. Die moeten gelijk blijven aan het Nederlands.
3. **Resterende pagina's tweetalig maken**: het hoofdmenu en het mobiele menu, met de taalknop naast de themaknop. Daarna de voettekst en de startpagina, het onderzoeksoverzicht, het claimregister (met vertaalde statuslabels), de bronnen, de methodologie, de twee juridische pagina's en de foutpagina's.
4. **Middenblok op de startpagina**: het claimblok volgt voortaan het donkere thema.
5. **Footer**: de colofon in het Engels wordt "Architecture & Platform by Delplanche". De Nederlandse copyrightregel blijft letterlijk zoals hij is; daarnaast komt een betekenisgetrouwe Engelse versie.

## Controle
- In beide talen alle interne links en PDF-downloads nalopen.
- Wisselen tussen NL en EN testen op de startpagina, een dossierdeel, het bronregister en de bibliotheek.
- Licht en donker bekijken, op computer en mobiel, en nakijken dat er geen consolefouten zijn.

## Technische details
- De taalkeuze wordt in de browser bewaard, het documenttaalattribuut gaat mee en de adressen blijven ongewijzigd. Er worden geen aparte /en-adressen toegevoegd, om dubbele routes te vermijden.
- Vertalingen staan als vaste bestanden in het project. Er is geen database en de site roept bij het bezoek geen externe dienst aan.
