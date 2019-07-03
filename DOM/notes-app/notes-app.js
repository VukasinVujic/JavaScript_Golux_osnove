let notes =  getSavedNotes()

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
    sortyBy: 'byEdited'
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
    // const forCreate = moment().format("D, MMMM YYYY, h:mm:ss");
    // const forUpdate = moment().format("D, MMMM YYYY, h:mm:ss");
    const timeStamp = moment().valueOf()
    notes.push({
        id: id, 
        title: '',
        body: '',
        // createdAt: forCreate,
        // updatedAt: forUpdate
        createdAt: timeStamp,
        updatedAt: timeStamp
    })
    saveNotes(notes)
    // renderNotes(notes,filters) // ako ides na drug stranicu , sto cinis sa ovim ispod,
    //ovo ponovu ucitavanje ti ne treba
    // const aaa = notes.id
    location.assign(`/edit.html#${id}`) // ovo bukvalno znaci preusmeri ga na stranicu 'edit.html'
})                                  //sa '#' i id-ijem datog note-a

document.querySelector('#search-text').addEventListener('input' , function(e){
    filters.searchText = e.target.value
    renderNotes(notes,filters)
})
document.querySelector('#filter-by').addEventListener('change', function(e){
    // console.log(e.target.value); just printing for that option in html
    filters.sortyBy = e.target.value
    renderNotes(notes,filters)

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
window.addEventListener('storage', function(e){
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})
//Unix epic - January 1st 1970 00:00:00 // ovo je tacka zero kada se date gleda kao broj
// sve pre toga je negativno
// const now = new Date('January 21 2001 6:25:01')
// console.log(now.toString());

/*
const now = new Date()
const timeStamp = now.getTime()
const myDate = new Date(timeStamp)
console.log(myDate.getFullYear());
*/

/*
console.log(`Year is now ${now.getFullYear()}`);
console.log(`Mounth is now  ${now.getMonth()}`);
console.log(`date is now  ${now.getDate()}`);
console.log(`hour is now  ${now.getHours()}`);
console.log(`Minut is now  ${now.getMinutes()}`);
console.log(`Second is now  ${now.getSeconds()}`);
*/


const task1 = new Date('February 23 2014 06:12:34')
const task2 = new Date('March 4 2004 06:12:34')


const timeStamp1 =  task1.getTime()
const timeStamp2 =  task2.getTime()

/*
if(timeStamp1 < timeStamp2) {
    console.log(task1);
} else {
    console.log(task2);
}
*/
/*
const now = moment();

now.add(1, 'week').subtract(50, 'day')
// now.minute(1)
// now.second(20)
// console.log(now.toString());
console.log(now.format('MMMM Do, YYYY'));
console.log(now.fromNow());

const timeStamp3 = now.valueOf()
console.log(moment(nowTimeStamp3).toString());
*/
/*
const trenutak = moment()

trenutak.year(1987).month('February').dayOfYear(12)
console.log(trenutak.format('MMM D,YYYY'));
*/

