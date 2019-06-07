let todos = ['todos1', 'todos2', 'todos3','todos4' ,'todos5' ];

// console.log(`The last: ${todos[todos.length-1]} , second last: ${todos[todos.length-1]}`);

// todos.shift();
// todos.unshift('aaaa');
// todos.splice(0,1, 'boli me kita');

todos.splice(2,1);
todos.push('novi element');
todos.shift();

console.log(todos);


todos.forEach(function(item,index){
    console.log(`${index+1}. item: ${item}`);
})


