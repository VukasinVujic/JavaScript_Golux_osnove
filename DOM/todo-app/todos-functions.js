// fetching existing todos from localstorage
const getSaveTodos = function (){

const todosJSON = localStorage.getItem('todos');

if(todosJSON !== null) {
    return JSON.parse(todosJSON)
}else {
    return []
}

}
// saving data in loacalstorage
const saveTodos = function(todos){
    localStorage.setItem('todos', JSON.stringify(todos))
}

//render todos in local storage
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
   
   document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))
   
   filteredTodos.forEach(function (todo) {
       document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
    
}

//Get the DOM elements for the individual note
const generateTodoDOM = function(todo){
    const p = document.createElement('p')
    p.textContent = todo.text
    return p
}

//get the dom elements for list sumary 
const generateSummaryDOM = function (incompleteTodos){
   
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}