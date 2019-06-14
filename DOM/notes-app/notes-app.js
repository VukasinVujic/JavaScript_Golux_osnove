let notes = []

// const p = document.querySelector('h1')
// p.remove()

// const ps = document.querySelectorAll('p')
// ps.forEach(function (p){
//     p.textContent = '******'
//     //  console.log(p.textContent);
// })

// const newElement = document.createElement('p')
// newElement.textContent = 'Novi text vrednost'
// document.querySelector('body').appendChild(newElement)

const filters = {
    searchText: '',
}

// const user = {
//     name : 'Vukasin',
//     age: '32'
// }

// const userJSON = JSON.stringify(user)
// console.log(userJSON);

// localStorage.setItem('user', userJSON)

// const userJSON = localStorage.getItem('user')
// const user = JSON.parse(userJSON)
// console.log(`${user.name} is ${user.age}`);

const notesJson = localStorage.getItem('notes')

if(notesJson !== null ) {
    notes = JSON.parse(notesJSON)
} 

const renderNotes = function(notes, filters){
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    document.querySelector('#notes').innerHTML = ''
    
    filteredNotes.forEach(function(note){
        const noteEl = document.createElement('p')
        
        if(note.title.length > 0){
            noteEl.textContent = note.title
        } else {
            noteEl.textContent = 'Nema naslova BRE'
        }
        document.querySelector('#notes').appendChild(noteEl)
    })
}
renderNotes(notes,filters)

document.querySelector('#create-note').addEventListener('click', function(e){
    // e.target.textContent = 'the button was clicked'
    notes.push({
        title: '',
        body: ''
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes,filters)
})

document.querySelector('#search-text').addEventListener('input' , function(e){
    filters.searchText = e.target.value
    renderNotes(notes,filters)
})

// document.querySelector('#name-form').addEventListener('submit', function(e){
//     e.preventDefault()
//     console.log(e.target.elements.firstName.value); 
//     e.target.elements.firstName.value = ''

// })
/*
document.querySelector('#for-fun').addEventListener('change',function(e){
        console.log(e.target.checked);  
        
})
*/

document.querySelector('#filter-by').addEventListener('change', function(e){
    console.log(e.target.value);
})