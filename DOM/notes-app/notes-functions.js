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
    const noteEl = document.createElement('p')
        
        if(note.title.length > 0){
            noteEl.textContent = note.title
        } else {
            noteEl.textContent = 'Nema naslova BRE'
        }
        return notEle
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