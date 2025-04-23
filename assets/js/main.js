// Creaiamo una griglia dinamica con all'interno dei numeri casuali 
// al click la casella deve cambiare colore, se il numero
// al suo interno è pari diventerà rosso altirmimenti 
// blu se dispari 

const elContainer = document.querySelector('.container')

let numberCell = 50


//Function genera numeri all'interno della cella 
function generateCellNumber(min, max) {
    const arrayNumbers = []
    while (arrayNumbers.length !== max) {

        const randomNumber = generateRandomNumber(min, max)

        if (!arrayNumbers.includes(randomNumber)) {
            arrayNumbers.push(randomNumber)
        }

    }
    return arrayNumbers
}



// Funzione Markup
function generateMarkup(number) {
    const circleElement = document.createElement('div')
    circleElement.className = 'circle'
    circleElement.innerText = number
    return circleElement
}

// Funzione generatore di celle 
function generateGrid(max, domEl) {
    const cellNumbers = generateCellNumber(1, numberCell)
    for (let i = 0; i < max; i++) {
        const thisNumber = cellNumbers[i]
        const cellElement = generateMarkup(thisNumber)
        console.log(cellElement);
        domEl.insertAdjacentElement('beforeend', cellElement)
        // selezioniamo la cella corrente e la coloriamo 
        cellElement.addEventListener('click', function () {
            console.log('ho cliccato');
            if (pariDispari(thisNumber)) {
                cellElement.classList.toggle('red')
                console.log(`ho cliccato la casella ${thisNumber}`);
            } else {
                cellElement.classList.toggle('blue')
                console.log(`ho cliccato la casella ${thisNumber}`);
            }
        })
    }
}

// Funzione pari dispari
function pariDispari(numb) {
    if (numb % 2 === 0) {
        return true
    }
    return false
}

// funzione Generatore di numeri random 
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



generateGrid(numberCell, elContainer)