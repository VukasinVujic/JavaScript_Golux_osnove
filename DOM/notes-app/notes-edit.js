
const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const dateElement = document.querySelector('#last-edited')
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
dateElement.textContent = generateLastEdited(note.updatedAt)

titleElement.addEventListener('input', function(e){
    note.title = e.target.value // you change something
                                // const newTime = new Date();
    const forUpdate = moment().format("D, MMMM YYYY, h:mm:ss");
    note.updatedAt = forUpdate;
    dateElement.textContent = generateLastEdited(note.updatedAt)

    saveNotes(notes)    // you save after shanging and it has to be notes, because you set up
})                  // the function that way

bodyElement.addEventListener('input', function(e){// sam thing like the one above 
    const forUpdate = moment().format("D, MMMM YYYY, h:mm:ss");
    note.updatedAt = forUpdate;
    note.body = e.target.value
    dateElement.textContent = generateLastEdited(note.updatedAt)
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
    dateElement.textContent = generateLastEdited(note.updatedAt)

   }
})