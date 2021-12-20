// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const input = prompt("Inserisci una parola").toLowerCase();

function isPalindrome(word) {

    //Controlla che sia stata effettivamente inserita una parola
    if (word == "") {
        return false;
    }

    //Inverte la parola inserita salvandola in una variabile
    let wordReversed = "";
    let wordLenght = word.length;

    for (let i = wordLenght - 1; i >= 0; i--) {
        wordReversed += word[i];
    }

    //Controlla che la parola inserita sia uguale a quella invertita
    if (word == wordReversed) {
        return true;
    }

    return false;
}

if (isPalindrome(input)) {
    console.log(input + " è una parola palindroma!")
} else {
    console.log(input + " non è una parola palindroma!")
}