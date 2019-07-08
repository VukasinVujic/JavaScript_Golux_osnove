// *************************************************************************
// ****** you need to add a hangman id on body in index.html for this to work ****
// **************************************************************************
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

/*
console.log(game1.getPuzzle()); // how to see the result only in console 
console.log(game1.remaingGuesses);// how to see the result only in console
*/

window.addEventListener('load',function(e){
    const wordToGuess = this.document.createElement('p');
    wordToGuess.textContent = game1.getPuzzle();
    this.document.getElementById('hangman').appendChild(wordToGuess)

    const numberOfRemainGuesses = this.document.createElement('p');
    numberOfRemainGuesses.textContent = game1.remaingGuesses;
    this.document.getElementById('hangman').appendChild(numberOfRemainGuesses)


})

window.addEventListener('keypress', function(e){ //event with presssed any key of a letter or number
    const guess = String.fromCharCode(e.charCode)
    game1.makeQuess(guess)

    const wordToGuess = this.document.createElement('p');
    const numberOfRemainGuesses = this.document.createElement('p');
    this.document.getElementById('hangman').appendChild(wordToGuess)
    
    numberOfRemainGuesses.textContent = game1.remaingGuesses;
    this.document.getElementById('hangman').appendChild(numberOfRemainGuesses)
    wordToGuess.textContent = game1.getPuzzle();
    


    console.log(game1.getPuzzle());
    console.log(game1.remaingGuesses);
})

