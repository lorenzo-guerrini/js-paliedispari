// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. - FATTO
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). - FATTO
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// Chiede Pari o dispari
let inputEvenOdd = "";
do {
    inputEvenOdd = prompt("Pari o dispari?").toLowerCase();

} while (!(inputEvenOdd == "pari" || inputEvenOdd == "dispari"))

console.log("Hai inserito " + inputEvenOdd);

//Chiede numero da 1 a 5
let inputNumber = 0;
do {
    inputNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));

} while (inputNumber < 1 || inputNumber > 5 || isNaN(inputNumber));

console.log("Hai inserito " + inputNumber);

//Genera un numero random per il compter
function randomNumberGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const aiNumber = randomNumberGen(1, 5);

console.log("AI inserisce " + aiNumber);

//Gestisce la somma
let sum = inputNumber + aiNumber;

console.log("La somma è " +  sum);

function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

//Stabilisce il vincitore
if ((isEven(sum) && inputEvenOdd == "pari") || (!isEven(sum) && inputEvenOdd == "dispari")) {
    console.log("Vince il giocatore");
} else {
    console.log("Vince AI");
}