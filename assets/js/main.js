// L'utente clicca su un bottone 
    //Craere un bottone su html 
    // selezioniamo il  bottone 
    // Al clic attraverso addventlistner il bottone deve scomparire 
    // Per far spazio ad una grglia 



// che genererà una griglia di gioco quadrata. 
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// selezioniamo il  bottone 
const buttonElement = document.querySelector(`button`)


// Al clic attraverso addventlistner il bottone deve scomparire 
// buttonElement.addEventListener(`click`, function () {
//     console.log(`Ho cliccato sul pulsante`);
    
// })


// Generare una gliglia di gioco 
    // Selezioniamo il conatiner dalla DOM 
    // Attraverso il queryselctor 
    // Creiamo una constante con il markup da inserire nell'HTML 
    // Una variabile con i numeri delle celle 
 
const containerElement = document.querySelector(`.container`)

const cell = `<div class="cell"></div>`

let cellNumbers = 100

let cellList = document.getElementsByClassName(`cell`)

// funzione

for (let i = 0; i < cellNumbers ; i++) {
    containerElement.innerHTML += cell
        
 }

 for (let i = 0; i < cellList.length; i++) {
    const selectedCell = cellList[i];
    selectedCell.addEventListener(`click`, function () {
    selectedCell.classList.toggle(`green`)
        
    })
}


    

