
const square1 = (num) =>  num * num

const square = (num) => {
    return num * num
}
console.log(square(5));
console.log(square1(5000));

const people = [{
    name:'Andrew',
    age:27  
},{
    name: 'Vukasin',
    age:32
},{
    name: 'Krle',
    age:35
}]

// const under30 = people.filter(function(person){
//     return person.age < 30;
// })

const under30 = people.filter((person) =>  person.age < 30)

// const age32 = people.filter((person)=> person.age === 32)
const age32 = people.find((person) => person.age === 32 ) 

// console.log(under30);
console.log(age32);