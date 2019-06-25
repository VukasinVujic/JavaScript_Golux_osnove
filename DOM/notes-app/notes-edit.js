
const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')

const noteId = location.hash.substring(1)
let  notes = getSavedNotes()
let note = notes.find(function(note){
    return note.id === noteId // checking if id from note is equal with the one in URL 
})

if(note === undefined){
     location.assign('/index.html')
}

titleElement.value = note.title // adding value to the HTML element in DOM by the id of note-titl
bodyElement.value = note.body  // same as abouve but with id note-body

titleElement.addEventListener('input', function(e){
    note.title = e.target.value // you change something
    saveNotes(notes)    // you save after shanging and it has to be notes, because you set up
})                  // the function that way

bodyElement.addEventListener('input', function(e){
    note.body = e.target.value
    saveNotes(notes)
})

removeElement.addEventListener('click', function(e){
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
}) 

window.addEventListener('storage', function(e){
    
    if(e.key === 'notes'){
       notes = JSON.parse(e.newValue)
       let note = notes.find(function(note){
        return note.id === noteId // checking if id from note is equal with the one in URL 
    })
    
    if(note === undefined){
         location.assign('/index.html')
    }
    
    titleElement.value = note.title // adding value to the HTML element in DOM by the id of note-titl
    bodyElement.value = note.body  // same as abouve but with id note-body
    
   }
})