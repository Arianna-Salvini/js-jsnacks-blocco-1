console.log('hello');

// Chiedi un numero di 4 cifre all’utente
// Calcola la somma di tutte le cifre che compongono il numero.

let numb4Digit = Number(prompt("inserisci un numero a 4 cifre"));
console.log(numb4Digit);
let sum = 0

if ( numb4Digit.length === 4){

    for (let i = 0; i < numb4Digit.length; i++) {
        sum += digit[i]
        console.log(sum);
    }
}
