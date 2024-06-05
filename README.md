# Portfolio-Web-Advanced

## Overzicht

Deze portfolio bevat twee websites: een Task Manager en een Quotes Generator. Hieronder volgt een uitleg per onderwerp waarin wordt aangegeven waar en hoe deze onderwerpen in de websites zijn gebruikt. 

## Task Manager

1. **Elementen selecteren**
   -Elementen worden geselecteerd met `getElementById`, zoals `form`, `input` en `list`.

2. **Elementen manipuleren**
   -Elementen worden gemanipuleerd door taken toe te voegen aan de `list` en tekst te wijzigen in `taskText`.

3. **Event aan een element koppelen**
   -Het `submit`-event van het `form` wordt gekoppeld aan een eventlistener.

4. **Formulier valideren**
   -Valideert of de invoer niet leeg is voordat een taak wordt toegevoegd.

5. **Gebruiken van een constante**
   -De constante `STORAGE_KEY` wordt gebruikt voor LocalStorage.

6. **Spread & Rest operator**
   -De spread operator wordt gebruikt in `addTaskItem` om taken diep te kopiëren en referentieproblemen te voorkomen.

7. **Iteration over een array**
   -`forEach` wordt gebruikt om door de takenlijst te itereren en taken weer te geven.

8. **Arrow function**
    -Arrow functions worden gebruikt in de `form.addEventListener` callback en andere functies zoals `removeTaskItem`.

9. **Callback function**
    -Callback functions worden gebruikt bij event listeners en bij het manipuleren van de takenlijst.

10. **Gebruiken van een flexbox of CSS grid**
    -Flexbox wordt gebruikt om de container en taken te centreren en uit te lijnen.

11. **Gebruik van LocalStorage**
    -LocalStorage wordt gebruikt om taken op te slaan en te laden zodat ze persistent zijn tussen pagina verversingen.

## Quotes Generator

1. **Elementen selecteren**
   -Elementen zoals `quote`, `authorE` en `button` worden geselecteerd met `getElementById`.

2. **Elementen manipuleren**
   -De tekst van `quote` en `authorE` wordt bijgewerkt om nieuwe citaten weer te geven.

3. **Event aan een element koppelen**
   -Het `click`-event van de `button` wordt gekoppeld aan een async functie.

4. **Gebruiken van template literals**
   -Template literals worden gebruikt om de quote en auteur in `displayQuote` weer te geven.

5. **Destructuring**
   -Destructuring wordt gebruikt in de `displayQuote` functie om `content` en `author` uit het quote object te halen.

6. **Arrow function**
    -Arrow functions worden gebruikt in de `button.addEventListener` callback en `fetchQuote`.

7. **Promise**
    -`fetchQuote` retourneert een Promise.

8. **Async & Await**
    -`async` en `await` worden gebruikt in de `fetchQuote` functie en de `button` event handler.

9. **Self executing function**
    -De hoofdfunctionaliteit is verpakt in een IIFE (Immediately Invoked Function Expression).

10. **Fetch om data op te halen**
    -`fetch` wordt gebruikt om een willekeurig citaat op te halen van de API.

11. **JSON manipuleren en weergeven**
    -Het JSON antwoord van de API wordt gemanipuleerd en weergegeven in de `displayQuote` functie.

12. **Basis CSS Animatie**
    -CSS animaties worden gebruikt voor de typanimatie en het knipperende careteffect.

13. **Gebruiken van een flexbox of CSS grid**
    -Flexbox wordt gebruikt om de container te centreren in de viewport.

