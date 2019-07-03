const add = () => {
// console.log(arguments);// to return all argmunets that you send no matter how much you put in the definition of function
return arguments[0] + arguments[1]
}

console.log(add(11,23,71,44));
 
const car = {
    color: 'Red',  
    getSummary(){
        return `The car is ${this.color}`
    }
}

console.log(car.getSummary());