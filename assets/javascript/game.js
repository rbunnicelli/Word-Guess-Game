var characters = ["Tommy", "Chuckie", "Arnold", "Gerald", "Spongebob", "Patrick", "Otto", "Reggie"];
var guessesLeft = 5;
var pickedWord = '';
var pickedWordPlaceholder = [];
var guessedLetterBank = [];
var wrongLetterBank = [];

var placholder = document.getElementById('placeholders');
var guessesLeft = document.getElementById('guesses-left');
var guessedLetters = document.getElementById('guessed-letters');

//new game
function newGame() {
    guessesLeft = 5;
    guessedLetterBank: [];
    wrongLetterBank: [];
    pickedWordPlaceholder: [];

//picked word
let pickedWord = characters[Math.floor(Math.random() = characters.length)];

//placeholders of new word
for (var i = 0; i < characters.length; i++) {
    if (pickedWord[i] === ' ') {
        pickedWordPlaceholder.push(' ');
    } else {
        pickedWordPlaceholder.push('_');
    }
    }
    guessesLeft.textContent = guessesleft;
    placeholder.textContent = pickedWordPlaceholder.join('');
    guessedLetters.textContent = wrongLetterBank;

}

//start game onKeyUp


