console.log('Hi there!');

// Genera un numero casuale compreso tra 1 e 100. 
let numberRandom  = Math.round(Math.random() * 100) +1;
console.log(numberRandom);

// Chiedi all'utente di indovinare il numero. 

// Dopo ogni tentativo, fornisci un suggerimento se il numero inserito è maggiore o minore del numero segreto. 
let checkedNumber = true;
let tryNumb = 0

do{
    const userNumber = prompt("Indovina il numero da 1 a 100")
   
    if (userNumber < numberRandom ) {
        alert( `Il numero è più grande di ${userNumber}`);
    } else if (userNumber > numberRandom){
        alert(`Il numero è minore di ${userNumber} `);
    } else {
       checkedNumber = false;
    }

 tryNumb++

} while (checkedNumber=false ) {
    alert(`Hai vinto! Dopo ${tryNumb} tentativi`)
}


// Fornisci anche il numero totale di tentativi effettuati.