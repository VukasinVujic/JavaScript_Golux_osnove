
const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const dateElement = document.querySelector('#last-edited')
const noteId = location.hash.substring(1) // just going in the location(inside console) in that part where it is 
                                        //is written hash and cutting of the '#' whos index is '0'
let  notes = getSavedNotes()
let note = notes.find((note) => note.id === noteId ) // checking if id from note is equal with the one in URL 

if(!note){
     location.assign('/index.html')
}

titleElement.value = note.title // adding value to the HTML element in DOM by the id of note-titl
bodyElement.value = note.body  // same as abouve but with id note-body
dateElement.textContent = generateLastEdited(note.updatedAt)

titleElement.addEventListener('input',(e) => {
    note.title = e.target.value // you change something
                                // const newTime = new Date();
    // const forUpdate = moment().format("D, MMMM YYYY, h:mm:ss");
    note.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updatedAt)

    saveNotes(notes)    // you save after shanging and it has to be notes, because you set up
})                  // the function that way

bodyElement.addEventListener('input', (e) => {// sam thing like the one above 
    // const forUpdate = moment().format("D, MMMM YYYY, h:mm:ss");
    note.body = e.target.value
    note.updatedAt = moment().valueOf();
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

removeElement.addEventListener('click',(e) => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
}) 

window.addEventListener('storage', (e) => {
    
    if(e.key === 'notes'){
       notes = JSON.parse(e.newValue)
        note = notes.find((note) => note.id === noteId) // checking if id from note is equal with the one in URL 
    
    if(!note){
         location.assign('/index.html')
    }
    
    titleElement.value = note.title // adding value to the HTML element in DOM by the id of note-titl
    bodyElement.value = note.body  // same as abouve but with id note-body
    dateElement.textContent = generateLastEdited(note.updatedAt)

   }
})