// L'utente clicca su un bottone 
// selezioniamo il  bottone 
// Al clic attraverso addventlistner il bottone deve
// Generare una grglia 
// che genererà una griglia di gioco quadrata. 
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// selezioniamo il  bottone 
const buttonElement = document.querySelector(`button`);

// Selezioniamo il conatiner dalla DOM 
const gridElement = document.querySelector(`.grid`);

// Una variabile con i numeri delle celle 
let cellNumbers = 100


// Al clic attraverso addventlistner il bottone deve generare un griglia 
// Ogni cella ha un numero progressivo, da 1 a 100.
// Generiamo dei numeri da 1 a 100 


buttonElement.addEventListener('click', function () {
    // Puliamo la griglia prima di rigenerarla
    gridElement.innerHTML = '';

    // Generiamo la griglia
    for (let i = 1; i <= cellNumbers; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = i;

        // Al click, cambia colore e stampa il numero
        cell.addEventListener('click', function () {
            cell.classList.toggle('lightblue');
            console.log(`Hai cliccato sulla cella numero ${i}`);
        });

        gridElement.appendChild(cell);
    }
});