const Hangman = function(word, remaingGuesses){
    this.word = word.toLowerCase().split('')
    this.remaingGuesses = remaingGuesses
    this.guessedLetters = ['c','e']
}

Hangman.prototype.getPuzzle = function(){
    let puzzle = ''

    this.word.forEach( (letter) => {
         if(this.guessedLetters.includes(letter) || letter === ' '){
            puzzle += letter
         }else {
            puzzle  += '*'
         }
    });

    return puzzle;
}


const game1 = new Hangman('Cat',2)
console.log(game1.getPuzzle());

const game2 = new Hangman('new jersey' , 4)
console.log(game2.getPuzzle());
