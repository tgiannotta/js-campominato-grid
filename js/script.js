/* FUNZIONE IN BASE ALLA SCELTA DELLA DIFFICOLTA' */


const numeroCelle = 100;
let generatedNumbers = generateNumArray(numeroCelle);

const contenitoreCelle = document.getElementById('prova')

for(let i = 0; i < generatedNumbers.length; i++){
    const thisNum = generatedNumbers[i];
    const nuovaCellaCreata = creoCella(thisNum)
    contenitoreCelle.appendChild(nuovaCellaCreata);

}

/* FUNZIONI GENERICHE */
/* Crea array di numeri casuali */
function generateNumArray(contNum) {
    const numArray = [];
    while (numArray.length < contNum){
        const randomNum = getRndInteger(1, contNum)
        if (!numArray.includes(randomNum)){
            numArray.push(randomNum);
        }
    }   
    return numArray;
}


/* Crea Numero casuale singolo */
function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/* Crea cellette da inserire in html */
function creoCella (number){
    const nuovaCella = document.createElement('div')
    nuovaCella.classList.add('cell' + 'flex');
    nuovaCella.innerHTML = ` <span>${number}</span> `

}