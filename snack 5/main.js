console.log('hello');

const listOddNumber = []

for (let i = 0; i < 6; i++) {
    let inputNumber = parseInt(prompt('Inserisci un numero'))
    
if (inputNumber % 2 !== 0) {
    listOddNumber.push(inputNumber)
}
}


console.log(listOddNumber);