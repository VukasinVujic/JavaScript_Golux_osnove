// console.log(uuidv4());

//Read existing notes from loacalstorage

// const getSavedNotes = function(){ //normal function
const getSavedNotes = () => {    // arrow function

const notesJson = localStorage.getItem('notes')

return notesJson ? JSON.parse(notesJson) : [] // using ternarny operator as substitution for if
// !== null // taking it from above(after first notesJson) because it is not nessary, the coud would do the same withou it, Truty/Falsy
    
// if(notesJson !== null ) {
    //     return JSON.parse(notesJson)
    // } else {
    //     return []
    // }

    
}

//Save the notes to the local storage
// const saveNotes = function(notes) { //normal function
const saveNotes = (notes) => { // arrow function
    localStorage.setItem('notes', JSON.stringify(notes))
    // localStorage.getItem('notes') //just checking local storage 
}
//remove note from the list

// const removeNote = function (id){ //normal function
const removeNote = (id)=>{ // arrow function

    // const noteIndex = notes.findIndex(function(note){ //normal function
    //return note.id === id
    // }
    const noteIndex = notes.findIndex((note) => note.id === id) // arrow function
    if(noteIndex > -1){
        notes.splice(noteIndex,1)
    } 
}

//generat the dom structure for the note 
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')
    
    //setup the remove note button
    button.textContent = 'x'
    noteEl.appendChild(button)
    button.addEventListener('click', () => {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes,filters)
    })


    //setup the note tittle text
    if(note.title.length > 0){
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Nema naslova BRE'
    }
    textEl.setAttribute('href', `/edit.html#${note.id}`)
    noteEl.appendChild(textEl)

    return noteEl
}
// function for that option thing in HTML, sorting notes by three ways, alhpabetic...
const sortNotes = (notes, sortBy) =>{
    if(sortBy === 'byEdited'){
        return notes.sort((a,b) => { // always comparing two items of the notes
            if(a.updatedAt > b.updatedAt) { // checking which one is last updated and putting that one up
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated'){
        return notes.sort((a,b) => { // checking which one is last build and putting that one up
            if(a.createdAt > b.createdAt){
                return -1
            } else if (a.createdAt < b.createdAt){
                return 1
            } else {
                return 0
            }
        }) 
    } else if (sortBy === 'alphabetical'){
        return notes.sort((a,b) => {
            if(a.title.toLowerCase() < b.title.toLowerCase()){
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()){
                return 1
            } else {
                return 0
            } 
        })
    } else {
        return notes
    }
}

// render application notes
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))
    
    document.querySelector('#notes').innerHTML = ''
    
        filteredNotes.forEach(function(note){
        const noteEl = generateNoteDOM(note)

        document.querySelector('#notes').appendChild(noteEl)
    })
}

//generate the last edited massage 

const generateLastEdited = (timeStamp) => `Last time edited ${moment(timeStamp).fromNow()}`