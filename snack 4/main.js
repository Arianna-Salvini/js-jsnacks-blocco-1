console.log("Hello, from Gatsby");

// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
let userName = prompt("What's your name?");
const invitedFromGatsby = [ "Nick Carraway", "Daisy Buchanan", "Tom Buchanan", "Jordan Baker", "Arianna  Salvini"]
console.log(invitedFromGatsby);
// chiedi all’utente il suo nome 
let invited = false;

//  comunicagli se può partecipare o no alla festa
for (let i = 0; i < invitedFromGatsby.length; i++){
    let userCheck = invitedFromGatsby[i]

    if (userName = userCheck ){
        invited = true
    } 
}

if (invited){
    console.log("Hello from Gatsby")
} else {
    console.log("Sorry, ypur name is not on the list");
}