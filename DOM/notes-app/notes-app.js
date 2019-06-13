const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

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



const renderNotes = function(notes, filters){
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    document.querySelector('#notes').innerHTML = '<p>TEST</P>'

    filteredNotes.forEach(function(note){
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes,filters)

document.getElementById('create-note').addEventListener('click', function(e){
    e.target.textContent = 'the button was clicked'
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