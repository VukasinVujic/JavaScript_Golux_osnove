// 
/*
const product = {
    name: 'influence'
}

Object.prototype.someNewMethod = () => 'This is a new function BREEEE' // a way to make a new inbuild function

console.log(product.someNewMethod());

*/
// CHAIN OF INHERETANCEE 
// Object: myObject --> Object.prototype -->null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunction --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

/*
const team =  new Array ['Luke', 'Marko']
console.log(team);
console.log(team.hasOwnProperty('length'));
*/
/*
const getScore = () => 1
console.log(getScore);
*/

// const status = document.querySelector('#status')
const puzzleEl = document.querySelector('#puzzle')
const guessesEL = document.querySelector('#guesses')
const message = document.querySelector('#message')
const game1 = new Hangman('Cat dog',2)

// status.textContent = game1.showStatus() //my way
puzzleEl.textContent = game1.puzzle
guessesEL.textContent = game1.remaingGuesses
message.textContent = game1.statusMessage
console.log(game1.status);

window.addEventListener('keypress',(e) => { //event with presssed any key of a letter or number
    const guess = String.fromCharCode(e.charCode)
    game1.makeQuess(guess)

    //status.textContent = game1.showStatus() //my way
    puzzleEl.textContent = game1.puzzle
    guessesEL.textContent = game1.remaingGuesses
    message.textContent = game1.statusMessage
    console.log(game1.status);

})

const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
     if(e.target.readyState === 4){
         const data = JSON.parse(e.target.responseText)  
         console.log(data);
     }
})

request.open('GET','http://puzzle.mead.io/puzzle')
request.send()