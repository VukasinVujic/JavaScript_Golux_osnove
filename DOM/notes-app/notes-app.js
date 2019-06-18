const notes =  getSavedNotes()

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

const filters = {
    searchText: '',
}

// const user = {
//     name : 'Vukasin',
//     age: '32'
// }

// const userJSON = JSON.stringify(user)
// console.log(userJSON);

// localStorage.setItem('user', userJSON)

// const userJSON = localStorage.getItem('user')
// const user = JSON.parse(userJSON)
// console.log(`${user.name} is ${user.age}`);


renderNotes(notes,filters)

document.querySelector('#create-note').addEventListener('click', function(e){
    // e.target.textContent = 'the button was clicked'
    const id  = uuidv4()
    notes.push({
        id: id, 
        title: '',
        body: ''

    })
    saveNotes(notes)
    // renderNotes(notes,filters) // ako ides na drug stranicu , sto cinis sa ovim ispod,
    //ovo ponovu ucitavanje ti ne treba
    // const aaa = notes.id
    // console.log(aaa);
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input' , function(e){
    filters.searchText = e.target.value
    renderNotes(notes,filters)
})
document.querySelector('#filter-by').addEventListener('change', function(e){
    console.log(e.target.value);
})

// document.querySelector('#name-form').addEventListener('submit', function(e){
//     e.preventDefault()
//     console.log(e.target.elements.firstName.value); 
//     e.target.elements.firstName.value = ''

// })
/*
document.querySelector('#for-fun').addEventListener('change',function(e){
        console.log(e.target.checked);  
        
})

*/
