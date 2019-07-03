// const myAge  = 27
// let message = myAge > 18 ? 'You can vote' : 'You can not vote' // replacing that down if conditional
// console.log(message);

// if(myAge >= 18){
//     message = 'You can vote'
// } else {
//     message = 'You can not vote'
// }


const myAge = 20
const showPage = () => {
    return 'showing the page'
}

const showErrorPage = () => {
    return 'Show error page'
}

const message =  myAge > 21 ? showPage() : showErrorPage()

console.log(message);

const team = ['Tyler', 'Porter','Pero', 'Marko', 'djole']
console.log(team.length <=40 ? `Team size: ${team.length}`: `Too many on the team` );