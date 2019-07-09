
class Hangman {
    constructor(word, remaingGuesses){
    this.word = word.toLowerCase().split('')
    this.remaingGuesses = remaingGuesses
    this.guessedLetters = []
    this.status = 'playing'    
    }
    get statusMessage(){
        if(this.status === 'playing') {
            return `Guesses left: ${this.remaingGuesses}`
        } else if (this.status === 'finished') {
            return `You are victories`
        } else if (this.status === 'failed'){
            // return `You failed, the word was: ${this.word.join().replace(/,/g,'')}`
            return `You failed, the word was: ${this.word.join('')}`
        }   
    }
    get puzzle(){
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

    makeQuess(guess) { // making a guess 
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
    calculateStatus(){
           // his second way how to do it
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ') // every test that 
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
    }

