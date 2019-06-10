const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

console.log('a' < 'b');

const sortNotes = function(notes) {
    notes.sort(function(a,b){
        if(a.title.toLowerCase()< b.title.toLowerCase()){
            return -1
        } else if(b.title.toLowerCase()< a.title.toLowerCase()){
            return 1
        } else {
            return 0
        }
    })
}   
const findNote = function(notes,noteTitle){
    return notes.find(function(note,index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })    
}
const findNotes = function(notes, query) {
        return notes.filter(function (note){
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase()) 
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return  isTitleMatch || isBodyMatch ;
    })
}
// const findNote = function(notes,noteTitle){
//     const index = notes.findIndex(function(note,index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }
// const note = findNote(notes, 'office modification')
// console.log(findNotes(notes, 'eating'));

sortNotes(notes); 
console.log(notes);
