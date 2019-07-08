
const Hangman = function(word, remaingGuesses){
    this.word = word.toLowerCase().split('')
    this.remaingGuesses = remaingGuesses
    this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function(){ // just to show the word you are guessing with *** and guesses letters
    let puzzle = ''

    this.word.forEach( (letter) => {
         if(this.guessedLetters.includes(letter) || letter === ' '){
            puzzle += letter
         }else {
            puzzle  += '*'
         }
    });

    return puzzle
}

Hangman.prototype.makeQuess = function(guess){ // making a guess 
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess) 
    const badGuess = !this.word.includes(guess)
    if(isUnique) {
        this.guessedLetters.push(guess)
    }
    if(isUnique && badGuess ) {
         this.remaingGuesses--
    }
}
const game1 = new Hangman('Cat',2)
// game1.makeQuess('t');// witout client side, just by using consel
console.log(game1.getPuzzle());
console.log(game1.remaingGuesses);

window.addEventListener('keypress', function(e){ //event with presssed any key of a letter or number
    const guess = String.fromCharCode(e.charCode)
    game1.makeQuess(guess)
    console.log(game1.getPuzzle());
    console.log(game1.remaingGuesses);
})





