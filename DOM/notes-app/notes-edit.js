const noteId = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find(function(note){
    return note.id === noteId // checking if id from note is equal with the one in URL 
})

if(note === undefined){
     location.assign('/index.html')
}

document.querySelector('#note-title').value = note.title
document.querySelector('#note-body').value = note.body 