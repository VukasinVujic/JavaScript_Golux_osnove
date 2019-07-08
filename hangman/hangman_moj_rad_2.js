
const Hangman = function(word, remaingGuesses){
    this.word = word.toLowerCase().split('')
    this.remaingGuesses = remaingGuesses
    this.guessedLetters = []
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

    return puzzle
}

Hangman.prototype.makeQuess = function(character){
if(this.remaingGuesses > 1){
     if(this.guessedLetters.includes(character)){
        return `This value has been guessed already BREEE`
    } else if(this.word.includes(character)) {
        const index = this.word.indexOf(character)
        this.guessedLetters[index] = character
        return this.getPuzzle()
    } else {
        this.remaingGuesses -= 1 
        return this.remaingGuesses
    }
    } else {
        return `Nema vise reamaingin guesses`
    }
}


const game1 = new Hangman('Cat',2)
// console.log(game1.getPuzzle());

const game2 = new Hangman('new jersey' , 4)
// console.log(game2.getPuzzle());

console.log(game1.makeQuess('a'));

console.log(game1.makeQuess('q'));
console.log(game1.makeQuess('u'));





