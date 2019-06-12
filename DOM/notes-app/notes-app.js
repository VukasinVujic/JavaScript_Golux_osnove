const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

// const p = document.querySelector('h1')
// p.remove()

// const ps = document.querySelectorAll('p')
// ps.forEach(function (p){
//     p.textContent = '******'
//     //  console.log(p.textContent);
// })

// const newElement = document.createElement('p')
// newElement.textContent = 'Novi text vrednost'
// document.querySelector('body').appendChild(newElement)

document.getElementById('create-note').addEventListener('click', function(e){
    e.target.textContent = 'the button was clicked'
})

document.querySelector('#remove-all').addEventListener('click', function(e){
    document.querySelectorAll('.note').forEach(function(note){
        note.remove()
    })
})

