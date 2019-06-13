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


const filters = {
    searchText: ''
}

const renderTodos = function(todos,filters){
    const check = todos.filter(function(todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    const incompleteTodos = check.filter(function(todo){
         return !todo.completed 
    })

    document.querySelector('#divElement').innerHTML = ''
    
    const summary = document.createElement('h2') // naprvai constantu
    summary.textContent =`You have ${incompleteTodos.length} todos left` // napuni constantu
    document.querySelector('#divElement').appendChild(summary) // zalepi je na mesto 
    
    check.forEach(function(element){
        const newElement = document.createElement('p')
        newElement.textContent = element.text   
        document.querySelector('#divElement').appendChild(newElement)
    })
}

renderTodos(todos,filters) // ovo mora jer kada se u filter ubaci prazno polje to svi imaju
    // i sammim tim se svi prikazu, kada ne bi ovo stavio ne bi bio prikazan text uopste

// todos.forEach(function(todo){
//     const p = document.createElement('p')
//     p.textContent = todo.texttodostodos
//     document.querySelector('body').appendChild(p)
// })

// document.querySelector('#jaja').addEventListener('click',function(e){
//         console.log('addding new to todo');     
// })

const addingNewElement = function (todos, newElementToAdd){
    
    document.querySelector('#divElement').innerHTML = ''
    
    todos.push(newElementToAdd)
    const incompleteTodos = todos.filter(function(todo){
        return !todo.completed 
   })
    
    const summary = document.createElement('h2') // naprvai constantu
    summary.textContent =`You have ${incompleteTodos.length} todos left` // napuni constantu
    document.querySelector('#divElement').appendChild(summary) // zalepi je na mesto 
    
    todos.forEach(function(element) {
        const oldElements = document.createElement('p')
        oldElements.textContent = element.text
        document.querySelector('#divElement').appendChild(oldElements)
    })
    console.log(todos);

}

// listen for input change  on div elelment
document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#formId').addEventListener('submit', function(e){
    e.preventDefault()
    let fromEvent = e.target.elements.firstName.value
    
    let newElementToAdd = {
        text: fromEvent,
        completed: false
    }
    e.target.elements.firstName.value = ''
    addingNewElement(todos,newElementToAdd) 

} )