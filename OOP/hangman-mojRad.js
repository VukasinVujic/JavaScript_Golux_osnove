const Hangman = function(word,remainingGuesses){
    
    this.word =  word.toLowerCase().split('')
    this.guessedLetters = []
    this.remainingGuesses = remainingGuesses;
    this.starsWord = word.split('').fill('*',0,this.word.length) // chaning all elements of array to stars
}

Hangman.prototype.checkAndAdd = function(letter){
    
    if(this.remainingGuesses ){
        this.remainingGuesses -= 1

        this.word.forEach((element, index) => {
        if(letter === element)
        this.starsWord[index] = letter
        })
        return `Number of left guesses is: ${this.remainingGuesses} \n and the word is: ${this.starsWord}`

    } else {
        return `Nema vise pokusaja BREEEEE obesen si `
    }
}

const game1 = new Hangman('peRRRo',4)
// console.log(game1);

const game2 = new Hangman('marko',5)
// console.log(game2);

// console.log(game1.checkAndAdd('r'));
// console.log(game1.guessedLetters[3]);
// console.log(game1.starsWord);
// console.log(game1.word);
console.log(game1.checkAndAdd('r'));
console.log();
console.log(game1.checkAndAdd('p'));
console.log(game1.checkAndAdd('q'));

console.log(game1.checkAndAdd('w'));




