console.log("Hello there!");

// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

const firstNumber = prompt("Type a number")
const secondNumber = prompt("Type another number")
let greatestNumber = false;

if (firstNumber > secondNumber){
    greatestNumber = true;
    console.log(firstNumber);
} else {
    console.log(secondNumber);
}