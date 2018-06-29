var guessesLeft = document.getElementById("guesses-left");
var userGuess = document.getElementById("guessed-letters");

var characters = ["tommy", "chuckie", "phil", "lil", "angelica", "reptar", "arnold", "gerald", "helga", "harold", "grandpa", "phoebe", "eugene", "stinky", "spongebob", "patrick", "squidward", "mr krabs", "plankton", "sandy", "gary", "mermaid man", "barnacle boy", "otto", "reggie", "twister", "squid", "tito", "raymundo"];
var wins = 0;
var wonGame = true;
var guessesLeft = 5;
var randWord = '';
var underScores = [];
var userGuess = [];
var wrongLetter = [];

//new game
function startGame() {

//picks random word from characters array
randWord = characters[Math.floor(Math.random() * characters.length)];
console.log(randWord);

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
//-----------------------------------------------------------------------------------------------------

//if letter guessed matches, it fills in underscore. If it does not, it gets added to the "already guessed" box and you lose a life
document.onkeyup = function(event) {
    var userGuess = event.key;

    if(randWord.indexOf(userGuess) > -1) {
        for(var i = 0; i < randWord.length; i++) {
            if(randWord[i] == userGuess) {
                underScores[i] = userGuess;
            }
        }
    } else {
        wrongLetter.push(userGuess);
        guessesLeft--;
    }
    //if guessesLeft get to 0, alert the player that they lost
    if(guessesLeft === 0){
        alert("You lose!");
        guessesLeft = 5;
        wrongLetter = [];
        underScores = [];
        startGame();
    }

    document.getElementById('underscores').textContent = underScores.join(" ");
    document.getElementById('guesses-left').textContent = guessesLeft;
    document.getElementById('guessed-letters').textContent = wrongLetter.join(" ");
}

startGame();




