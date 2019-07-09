

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName  = firstName
        this.lastName  = lastName
        this.age  = age
        this.likes = likes
    }
    getBio(){
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })
        return bio
    }
    set fullName(fullName){
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}


class Employee extends Person {
    constructor(firstName,lastName,age, position, likes){
        super(firstName,lastName,age,likes)
        this.position = position
    }
    getBio(){
        return `${this.fullName} is a ${this.position}`
    }
    getEarsLeft(){
        return 65 - this.age
    }
}



class Student extends Person {
    constructor(firstName,lastName,age,grade,likes){
        super(firstName,lastName,age,likes)
        this.grade = grade
    }
    getBio(){
        //*****MY WAY******/
        // if(this.grade >= 70) {
        //     return `${this.firstName} ${this.lastName} has passed the exam`
        // } else {
        //     return `${this.firstName} ${this.lastName} has NOT passed the exam`
        // }
        const status = this.grade >= 70 ? 'passsing' : 'failing'
        return `${this.firstName} is  ${status} the class`

    }
    updateGrade(change){
        this.grade += change
        // return this.getBio() //****MY WAY ****/
    }

}

const me = new Employee('Marko', 'Pleki', 23, 'Profesor')
me.fullName = 'Vukasin Vujic'
console.log(me.getBio());
// me.updateGrade(-20)
// console.log(me.getBio());


// const me = new Employee('Pero', 'Petrovic', 34 ,'vatrogasac' , ['citanje' , 'plivanje'])
// console.log(me);
// me.setName('Jovan Jovanovic')
// console.log(me.getBio());
// console.log(me.getEarsLeft());
// Person.prototype.location = 'Tajland' // you can put static thin like this to prototype but it is useless

// const person2 = new Person('Marko', 'Maric', '54')

// Person.prototype.getBio = function () {
//     return 'Testing testing'
// }

// console.log(person2.getBio());





