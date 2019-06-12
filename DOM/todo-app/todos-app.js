const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

const incompleteTodos = todos.filter(function(todo){
     return !todo.completed 
})
const summary = document.createElement('h2') // naprvai constantu
summary.textContent =`You have ${incompleteTodos.length} todos left` // napuni constantu
document.querySelector('body').appendChild(summary) // zalepi je na mesto 

todos.forEach(function(todo){
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})

document.querySelector('#jaja').addEventListener('click',function(e){
        console.log('addding new to todo');     
})