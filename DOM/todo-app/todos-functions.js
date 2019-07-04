console.log(uuidv4());



// fetching existing todos from localstorage
const getSaveTodos = () => {
const todosJSON = localStorage.getItem('todos');

try {
    return todosJSON ? JSON.parse(todosJSON) : []
} catch(e){
    return []
}

// !== null(after todosJSONn) addition don't need 

    // if(todosJSON !== null) {
    //     return JSON.parse(todosJSON)
    // }else {
    //     return []
    // }

}
// saving data in loacalstorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// remove todo by id
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id )
    if(todoIndex > -1){
        todos.splice(todoIndex,1);
    }
}

// update todo by id 
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id )
    if(todo){
        todo.completed = !todo.completed
    }
}

//render todos in local storage
const renderTodos = (todos, filters) =>  {
    let filteredTodos = todos.filter((todo) => {
    
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
    const incompleteTodos = todos.filter((todo) => !todo.completed )
   document.querySelector('#todos').innerHTML = ''// ovo radimo da se text izbrise svaki pu
   //kada pritisnemo dugme

   document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))
   
   filteredTodos.forEach(function (todo) {
       document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
    
}
 
//Get the DOM elements for the individual note
const generateTodoDOM = (todo) => {
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

    removeButton.addEventListener('click',(e) => {
        removeTodo(todo.id)
        saveTodos(todo)
        renderTodos(todos,filters) // nakon sto izbrise i sacuva ponovo izrenduje, ucita, na neki nacin ucita
    })
    checkBox.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todo)
        renderTodos(todos,filters)
    })

    return todoEl
}
//get the dom elements for list sumary 
const generateSummaryDOM = (incompleteTodos) => {
   
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}