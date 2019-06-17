console.log(uuidv4());



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

// remove todo by id
const removeTodo = function(id){
    const todoIndex = todos.findIndex(function(todo){
        return todo.id === id
    })
    if(todoIndex > -1){
        todos.splice(todoIndex,1);
    }
}

// update todo by id 
const toggleTodo = function(id){
    const todo = todos.find(function(todo){
        return todo.id === id
    })
    if(todo !== undefined){
        todo.completed = !todo.completed
    }
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
    const todoEl = document.createElement('div')
    const checkBox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')
    
    //set up todo checkbox
    checkBox.setAttribute('type','checkbox')
    checkBox.checked = todo.completed 
    todoEl.appendChild(checkBox)

    //set the text todo
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)    

    //set the remove button
    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)

    removeButton.addEventListener('click', function(e){
        removeTodo(todo.id)
        saveTodos(todo)
        renderTodos(todos,filters) // nakon sto izbrise i sacuva ponovo izrenduje, ucita, na neki nacin ucita
    })
    checkBox.addEventListener('change', function(){
        toggleTodo(todo.id)
        saveTodos(todo)
        renderTodos(todos,filters)
    })

    return todoEl
}
//get the dom elements for list sumary 
const generateSummaryDOM = function (incompleteTodos){
   
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}