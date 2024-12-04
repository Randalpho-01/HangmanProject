import prompt from "picoprompt";
import wordbank from "./word-bank.js";

const chosenWord = "rudy";
let guessedWord = "_".repeat(chosenWord.length);
let remainingGuesses = 6;
let incorrectGuesses = [];

console.log("Welcome to Hangman!");
console.log("Guess the word: " + guessedWord.split("").join(" "));

function guessLetter() {
    const letter = prompt("Guess a letter:").toLowerCase();
   
    if (chosenWord.includes(letter)) {
        for (let i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i] === letter) {
                guessedWord = guessedWord.substring(0, i) + letter + guessedWord.substring(i + 1);
            }
        }
       
        console.log("Correct guess!");
    } else {
        remainingGuesses--;
        incorrectGuesses.push(letter);
        console.log("Incorrect guess! Remaining guesses: " + remainingGuesses);
    }
   
    console.log("Word: " + guessedWord.split("").join(" "));
    console.log("Incorrect guesses: " + incorrectGuesses.join(", "));
   
    if (guessedWord === chosenWord) {
        console.log("Congratulations! You guessed the word: " + chosenWord);
    } else if (remainingGuesses > 0) {
        guessLetter();
    } else {
        console.log("Out of guesses! The word was: " + chosenWord);
    }
}

guessLetter();



