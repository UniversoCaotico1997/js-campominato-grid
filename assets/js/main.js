// L'utente clicca su un bottone 
    //Craere un bottone su html 
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

buttonElement.addEventListener(`click`,function () {
    console.log(`Ho cliccato sul pulsante`);

    for (let i = 0; i < cellNumbers; i++) {
        // console.log(cellNumbers);
        // creiamo il nostro markup attraverso una costante  da inserire nella dom 
        let cellElement = `<div class="cell"></div>`

        // Utilizziamo insertAd
        gridElement.insertAdjacentHTML('beforeend', cellElement) 

    }
    // Ogni cella ha un numero progressivo, da 1 a 100.
        // Generiamo dei numeri da 1 a 100 
        // Creiamo un arry 
     const numbersInsideTheCells = []

     for (let i = 0; i < numbersInsideTheCells.length; i++) {
         const allNumbers = numbersInsideTheCells[i];
         console.log(allNumbers);
         allNumbers.addEventListener(`click`, function () {
         allNumbers.classList.toggle(`lightblue`)
         })


        
     }
    
    
    
     // Quando l'utente cliccherà sulla cella essa si deve colorare di blu
        // selezioniamo la singola cella
        // utliazziamo un eventListner 
        // - aggiungo un event listener alla cella selezionata
    // cellElement.addEventListener(`click`, function () {
    //     this.style.backgroundColor = 'lightblue'
    //     this.classList.toggle('active')
    // })
})
   

    
    