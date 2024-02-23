console.log("Hello, from Gatsby");

// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
// chiedi all’utente il suo nome 
const invitedFromGatsby = [ "Nick Carraway", "Daisy Buchanan", "Tom Buchanan", "Jordan Baker", "Arianna Salvini"]
let userName = prompt("What's your name?");
let invitedToParty = false ;

//  comunicagli se può partecipare o no alla festa

for (let i = 0; i < invitedFromGatsby.length; i++) {
    let inviteCheck = invitedFromGatsby[i];
    
    if (userName == inviteCheck) {
        invitedToParty = true
        console.log(invitedToParty);
    }   
}

if (invitedToParty) {
    console.log("Gatsby, is happy to see you!");
} else {
    console.log("Sorry, your name is not in the list, you're not invited.");    
}
    
