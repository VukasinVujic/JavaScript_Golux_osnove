const Hangman = function(word,remainingGuesses){
    this.word = word;
    this.remainingGuesses = remainingGuesses;
}

  


const game1 = new Hangman('pero',4)
console.log(game1);

const game2 = new Hangman('marko',5)
console.log(game2);
