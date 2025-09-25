# Examen in het Nederlands

### Beschrijving

---

In deze repository vind je twee programma's:

- Programma 1 - een frontend in Svelte verbonden met programma 2
- Programma 2 - een backend Pets microservice

De Pet microservice implementeert de volgende routes.

| Methode | Route | Beschrijving |
| --- | --- | --- |
| GET | /pets | Geeft alle huisdieren in het systeem |
| GET | /pets/:id | Geeft een specifiek huisdier |

De frontend haalt gegevens op van de backend en toont deze.

### Opdracht - Frontend (15 punten)

![alle huisdieren in een tabel](start.png)

---
Begin met deze opdracht! Voor deze opdracht heb je zowel de frontend als de backend nodig.

Enkele uitgangspunten

1. Je mag de backend niet aanpassen.
2. Je hoeft het ontwerp niet pixel perfect te volgen; de functionaliteiten moeten er wel in zitten.

Gegeven is het bovenstaande plaatje; dit is hoe het uiteindelijk er uit zou moeten zien.

1. (5 punten). Op de hoofdpagina; haal door middel van een server request de gegevens op van alle pets `/pets` en toon deze woorden in de gegeven tabel zoals in het voorbeeld figuur staat.
2. (5 punten). Geef de data van de fetch uit 1 door aan het component `<Pet />`.
3. (5 punten). In Pets worden alle individuele dier types doorgegeven aan het `<Filter>` component. In filter kun je op een item klikken. Als dit item wordt geklikt dan worden alleen die dieren in het overzicht getoond. Je gebruikt hier reactivity voor door middel van de context API in Sveltekit.

### Opdracht - Backend (15 punten)

---
Voor deze opdracht heb je alleen de backend microservice nodig

1. Fix (zie de fixme en de todo in de functie) en gebruik (voeg de juiste route toe) de updatePet functie in de petsController. 
   De functie moet - gegeven de id - ten minste de naam van het huisdier bijwerken en een juiste foutmelding geven als de id niet bestaat. (3 punten)
2. Voeg en implementeer een route toe die alle Spiders vindt en de relevante id's retourneert. (3 punten)
3. Voeg en implementeer een route toe die meerdere huisdieren op basis van id's verwijdert. (3 punten)
4. Zorg ervoor dat alle statuscodes correct zijn en dat alle nieuwe functionaliteit indien nodig een foutmeldingen geeft. (3 punten)
5. Voeg en implementeer een nieuwe middlewarefunctie toe die de hostname van de client afdrukt in de consolelog. (3 punten)

Het datamodel moet te allen tijde in een consistente toestand blijven. Dit geldt ook bij het herstarten van de backend microservice. Ook is de locatie van toegevoegde functionaliteit in de code belangrijk. Er worden maximaal 5 punten afgetrokken als de toegevoegde code niet in de meest logische secties (d.w.z. controller, middleware, router) van de gegeven codebase is geplaatst en/of als het datamodel inconsistent wordt na een herstart.

Je backend code zal worden getest via postman.