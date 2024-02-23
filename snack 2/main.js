console.log("Hello again");

// L’utente inserisce due parole in successione, con due prompt.
const firstWord = prompt("Type a number")
const secondWord = prompt("Type another number")
let longestWord= false;

// Il software stampa prima la parola più corta, poi la parola più lunga.

if (firstWord.length > secondWord.length){
    longestWord = true;
    console.log(firstWord);
    console.log(secondWord);
} else if(firstWord.length == secondWord.length){
    console.log("Your two words have the same lenght");
}
else {
    console.log(secondWord);
    console.log(firstWord);
}