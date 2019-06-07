// const notes = ['notes1', 'notes2' ,'notes3'];
const notes = [{},{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]



const index = notes.findIndex(function(note, index){
    console.log(note);
    return note.title === 'Habbits to work on';
})

console.log(index);