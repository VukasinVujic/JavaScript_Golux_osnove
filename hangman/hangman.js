
const Hangman = function(word, remaingGuesses){
    this.word = word.toLowerCase().split('')
    this.remaingGuesses = remaingGuesses
    this.guessedLetters = []
    this.status = 'playing'
}

Hangman.prototype.getStatusMessage = function (){
    if(this.status === 'playing') {
        return `Guesses left: ${this.remaingGuesses}`
    } else if (this.status === 'finished') {
        return `You are victories`
    } else if (this.status === 'failed'){
        // return `You failed, the word was: ${this.word.join().replace(/,/g,'')}`
        return `You failed, the word was: ${this.word.join('')}`
    }
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
    // if(this.remaingGuesses > 0) { //*****my way*****
    if(this.status !== 'playing') {
        return
    }
    if(isUnique) {
        this.guessedLetters.push(guess)
    }
    if(isUnique && badGuess ) {
         this.remaingGuesses--
    }
    this.calculateStatus()
    } 
    
    /*
    else { // ****mY WAY ****
        return `No more guesses`
        }
    //} 
    */


Hangman.prototype.calculateStatus = function (){
// his second way how to do it
const finished = this.word.every((letter) => this.guessedLetters.includes(letter)) // every test that 
//every element of "word" is true and we use arrow function as way to check and return true of an 
// array of "guessedLetters"
if(this.remaingGuesses === 0){
    this.status = 'failed'
} else if (finished) {
    this.status = 'finished'
} else {
    this.status = 'playing'
    }
}

// ****his first way how to do it ****
// let finished = true

// this.word.forEach((letter) => {
//     if(this.guessedLetters.includes(letter))  {

//     } else {
//         finished = false
//     }
// })

/* ******** MY WAY AND THE HEIGH WAY *************
Hangman.prototype.showStatus = function(){
    if(this.remaingGuesses > 0 && this.getPuzzle().includes('*')){
        this.status = 'playing'
        return `You are still playing`
    } 
    if (this.remaingGuesses === 0 && this.getPuzzle().includes('*')){
        this.status = 'failed'
        return `YOU FAILED `
    } 
    if(this.remaingGuesses > 0 && !this.getPuzzle().includes('*'))
        this.staus = 'failed' 
        return `URA URA you are a winner`
    
}
*/

// game1.makeQuess('t');// witout client side, just by using consel

/*
console.log(game1.getPuzzle()); // how to see the result only in console 
console.log(game1.remaingGuesses);// how to see the result only in console
*/


