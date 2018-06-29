var characters = ["Tommy", "Chuckie", "Phil", "Lil", "Angelica", "Reptar", "Arnold", "Gerald", "Helga", "Harold", "Grandpa", "Phoebe", "Eugene", "Stinky", "Spongebob", "Patrick", "Squidward", "Mr Krabs", "Plankton", "Sandy", "Gary", "Mermaid Man", "Barnacle Boy", "Otto", "Reggie", "Twister", "Squid", "Tito", "Raymundo"];
var guessesLeft = 5;
var randWord = '';
var underScores = [];
var userGuess = [];
var wrongLetter = [];

var placholder = document.getElementById('placeholders');
var guessesLeft = document.getElementById('guesses-left');
var guessedLetters = document.getElementById('guessed-letters');

//new game
function startGame() {

//picks random word from characters array
randWord = characters[Math.floor(Math.random() * characters.length)];
//Creates underscore for every letter of the random word chosen
for(var i = 0; i < randWord.length; i++) {
    underScores.push('_');
}
//Connects with HTML element, underscores and prints the text of character name chosen. Join keeps "," from seperating letters
document.getElementById('underscores').textContent = underScores.join(" ");

//resets wrongLetter to an empty array and guessesLeft to 5
wrongLetter = [];
guessesLeft = 5;

// Connects with HTML element, guesses-left and prints the amount of guessesLeft from javascript var
document.getElementById('guesses-left').textContent = guessesLeft;
}

document.onkeyup = function(event) {
    userGuess = event.key;
//Checks to see if letter the user presses is in the randWord selected
    if(randWord.indexOf(userGuess) > -1)
    { //if letter in random word matches the user guess then fill underscore with that letter
       for(var i = 0; i < randWord.length; i++) {
        if(randWord[i] == userGuess) {
            underScores[i] = userGuess;
        }
    } //if the letter is not an exact match then guesses left subtracts by 1
 }  else {
        wrongLetter.push(userGuess);
        guessesLeft--;
    }
}



startGame();





