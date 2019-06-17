//Read existing notes from loacalstorage

const getSavedNotes = function(){
    
const notesJson = localStorage.getItem('notes')

if(notesJson !== null ) {
    return JSON.parse(notesJSON)
} else {
    return []
}

}

//Save the notes to the local storage
const saveNotes = function(notes) {
    localStorage.setItem('notes', JSON.stringify(notes))

}

//generat the dom structure for the note 
const generateNoteDOM = function(note){
    const noteEl = document.createElement('div')
    const textEl = document.createElement('span')
    const button = document.createElement('button')
    
    //setup the remove note button
    button.textContent = 'x'
    noteEl.appendChild(button)

        //setup the note tittle text
        if(note.title.length > 0){
            textEl.textContent = note.title
        } else {
            textEl.textContent = 'Nema naslova BRE'
        }
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