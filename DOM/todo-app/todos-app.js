let todos = []

const filters = {
    searchText: '',
    hideCompleted : false
}

const todosJSON = localStorage.getItem('todos');

if(todosJSON !== null) {
    todos = JSON.parse(todosJSON)
}
// const bbb = JSON.parse('aaa')


const renderTodos = function (todos, filters) {
    let filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        // return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        return searchTextMatch && hideCompletedMatch
    })
    /*
    filteredTodos = filteredTodos.filter(function(todo){
      //drugi nacin
        return !filters.hideCompleted || !todo.completed       
       //Prvi nacin
        // if(filters.hideCompleted) {
        //     return !todo.completed
        // } else {
        //     return true
        // }
    })
    */
    const incompleteTodos = todos.filter(function(todo){
        return !todo.completed 
   })
   
    document.querySelector('#todos').innerHTML = ''// ovo radimo da se text izbrise svaki pu
                                    //kada pritisnemo dugme
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(function (todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })
}

renderTodos(todos, filters)// ovo mora jer kada se u filter ubaci prazno polje to svi imaju
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
    localStorage.setItem('todos', JSON.stringify(todos))
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