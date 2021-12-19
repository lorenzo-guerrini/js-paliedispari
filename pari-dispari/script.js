// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. - FATTO
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let inputEvenOdd = "";

do {
    inputEvenOdd = prompt("Pari o dispari?").toLowerCase();

} while (!(inputEvenOdd == "pari" || inputEvenOdd == "dispari"))

let inputNumber = 0;

do {
    inputNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));

} while (inputNumber < 1 || inputNumber > 5 || isNaN(inputNumber));

console.log(inputNumber);