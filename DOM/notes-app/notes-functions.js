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
    console.log('aaaaa');
    localStorage.setItem('notes', JSON.stringify(notes))
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
// render application notes
const renderNotes = function(notes, filters){
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

