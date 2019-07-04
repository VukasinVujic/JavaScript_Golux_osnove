
const getTip = (amount)=> {
    // return amount === 'number' ? amount * .25 : 'NOT A NUMBER BRE'

    if(typeof amount === 'number'){
        return amount * .25
    } else {
        throw Error ('Argument must be a number')
    }

    }

    try {
        const result = getTip(10)
        console.log(result);
    } catch(e) {
        console.log('catch blog radi UUUUU');
        

    }

// const result = getTip(true)
// console.log(result);





