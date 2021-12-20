// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const input = prompt("Inserisci una parola o una frase");

function isPalindrome(word) {

    //Controlla che sia stata effettivamente inserito qualcosa e trasforma in lowercase
    if (word == "") {
        return false;
    }
    word = word.toLowerCase();

    //Rimuove gli spazi dall'input inserito
    let wordNoSpaces = "";
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== " ") {
            wordNoSpaces += word[i];
        }
    }

    //Inverte la parola inserita salvandola in una variabile
    let wordReversed = "";
    for (let i = wordNoSpaces.length - 1; i >= 0; i--) {
        wordReversed += wordNoSpaces[i];
    }

    //Controlla che la parola inserita sia uguale a quella invertita
    if (wordNoSpaces == wordReversed) {
        return true;
    }
    return false;
}

if (isPalindrome(input)) {
    console.log(input + " è palindroma!")
} else {
    console.log(input + " non è palindroma!")
}