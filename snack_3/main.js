console.log('hell');

// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let numbersList = []

// for (let i = 0; i < 10; i++) {
//     let userNumber = prompt("Inserisci un numero")
//     // console.log(userNumber);
//     numbersList.push(userNumber)

//     console.log(numbersList);

//     let sum = 0

//     sum += numbersList[i]

// }
let i = 0
while (i < 10) {
    let userNumber = prompt("Inserisci un numero")
    console.log(userNumber);
    numbersList.push(userNumber)

    console.log(numbersList);

    let sum = 0

    sum += numbersList[i]
    
    i++
}