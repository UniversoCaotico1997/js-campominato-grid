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
// Ogni cella ha un numero progressivo, da 1 a 100.
    // Generiamo dei numeri da 1 a 100 

    buttonElement.addEventListener(`click`,function () {
        // console.log(`Ho cliccato sul pulsante`);
    
        for (let i = 1; i <= cellNumbers; i++) {
            // console.log(cellNumbers);
            // creiamo il nostro markup attraverso una costante  da inserire nella dom 
            let cellElement = `<div class="cell">${i}</div>`
            // Utilizziamo insertAd
            gridElement.insertAdjacentHTML('beforeend', cellElement); 
        }    
        // Quando l'utente cliccherà sulla cella essa si deve colorare di blu
           // selezionare la singola cella
           // vedere se la cella selezionata corrisponda 
           const selectedCell = document.querySelectorAll(`.cell`);
           // console.log(singleCell);
           
           // Creiamo un ciclo for .length per ciclare all'interno 
           for (let i = 1; i <= selectedCell.length; i++) {
               const singleCell = selectedCell[i];
                 // console.log(singleCell);
               
               // utliazziamo un eventListner 
                 // aggiungo un event listener alla cella selezionata
                singleCell.addEventListener(`click`,function () {
                 // console.log(`ho cliccato`);

                 // al click la cella si colorerà di blu
                singleCell.classList.toggle(`lightblue`);
                })  
                 // stampiamo in console la cella selezionata 
                console.log(`la cella selezionata è ${singleCell.innerHTML}`);
           }
    
    })    
