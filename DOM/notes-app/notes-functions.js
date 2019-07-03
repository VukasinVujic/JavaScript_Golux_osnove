// console.log(uuidv4());

//Read existing notes from loacalstorage

// const getSavedNotes = function(){
const getSavedNotes = function () {    

const notesJson = localStorage.getItem('notes')

    if(notesJson !== null ) {
        return JSON.parse(notesJson)
    } else {
        return []
    }
}

//Save the notes to the local storage
// const saveNotes = function(notes) {
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
    // localStorage.getItem('notes') //just checking local storage 
}
//remove note from the list

const removeNote = function (id){
// const removeNote = (id)=>{

    // const noteIndex = notes.findIndex(function(note){
    const noteIndex = notes.findIndex((note) => note.id === id)
    if(noteIndex > -1){
        notes.splice(noteIndex,1)
    }
}

//generat the dom structure for the note 
const generateNoteDOM = function(note){
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')
    
    //setup the remove note button
    button.textContent = 'x'
    noteEl.appendChild(button)
    button.addEventListener('click', function(){
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
const sortNotes = function(notes, sortBy){
    if(sortBy === 'byEdited'){
        return notes.sort(function (a,b){ // always comparing two items of the notes
            if(a.updatedAt > b.updatedAt) { // checking which one is last updated and putting that one up
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated'){
        return notes.sort(function(a,b) { // checking which one is last build and putting that one up
            if(a.createdAt > b.createdAt){
                return -1
            } else if (a.createdAt < b.createdAt){
                return 1
            } else {
                return 0
            }
        }) 
    } else if (sortBy === 'alphabetical'){
        return notes.sort(function (a,b){
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
const renderNotes = function(notes, filters){
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    document.querySelector('#notes').innerHTML = ''
    
        filteredNotes.forEach(function(note){
        const noteEl = generateNoteDOM(note)

        document.querySelector('#notes').appendChild(noteEl)
    })
}

//generate the last edited massage 

const generateLastEdited = function(timeStamp){
    return `Last time edited ${moment(timeStamp).fromNow()}`
}

