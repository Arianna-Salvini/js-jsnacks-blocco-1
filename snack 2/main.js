console.log("Hello again");

// L’utente inserisce due parole in successione, con due prompt.

const firstWord = prompt("Type a word")

const secondWord = prompt("Type another word")

console.log(firstWord, secondWord);

// Il software stampa prima la parola più corta, poi la parola più lunga.

if (firstWord.length > secondWord.length)}{
    majorWord = firstWord
    console.log(firstWord);
} else {
    console.log(secondWord);
}

if (firstWord.length < secondWord.length)}{
    majorWord = firstWord
    console.log(secondWord);
} else {
    console.log(firstWord);
}
