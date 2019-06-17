let todos = getSaveTodos()

const filters = {
    searchText: '',
    hideCompleted : false
}

// renderTodos(todos, filters)// ovo mora jer kada se u filter ubaci prazno polje to svi imaju
// i sammim tim se svi prikazu, kada ne bi ovo stavio ne bi bio prikazan text uopste


document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    })
    saveTodos(todos)

    renderTodos(todos, filters)
    e.target.elements.text.value = ''
}) 
// todos.forEach(function(todo){
//     const p = document.createElement('p')
//     p.textContent = todo.texttodostodos
//     document.querySelector('body').appendChild(p)
// })
// document.querySelector('#jaja').addEventListener('click',function(e){
    //         console.log('addding new to todo');     
    // })    
/* MOJ NACIN
const addingNewElement = function (todos, newElementToAdd){
    
    document.querySelector('#todos').innerHTML = ''
    
    todos.push(newElementToAdd)
    const incompleteTodos = todos.filter(function(todo){
        return !todo.completed 
   })
    
    const summary = document.createElement('h2') // naprvai constantu
    summary.textContent =`You have ${incompleteTodos.length} todos left` // napuni constantu
    document.querySelector('#todos').appendChild(summary) // zalepi je na mesto 
    
    todos.forEach(function(element) {
        const oldElements = document.createElement('p')
        oldElements.textContent = element.text
        document.querySelector('#todos').appendChild(oldElements)
    })
    console.log(todos);

}
*/
// listen for input change  on div elelment

/* MOJ NACIN
document.querySelector('#new-todo').addEventListener('submit', function(e){
    e.preventDefault()
    let fromEvent = e.target.elements.firstName.value
    
    let newElementToAdd = {
        text: fromEvent,
        completed: false
    }
    e.target.elements.firstName.value = ''
    addingNewElement(todos,newElementToAdd) 

} )
*/
document.querySelector('#hide-completed').addEventListener('change', function(e){
    filters.hideCompleted = e.target.checked
    renderTodos(todos,filters)
}) 