// const todos = ['todos1', 'todos2', 'todos3','todos4' ,'todos5' ];

// console.log(`The last: ${todos[todos.length-1]} , second last: ${todos[todos.length-1]}`);

// todos.shift();
// todos.unshift('aaaa');object
// todos.splice(0,1, 'boli me kita');object

// todos.splice(2,1);
// todos.push('novi element');
// todos.shift();
// console.log(todos);

// todos.forEach(function(item,index){
//     console.log(`${index+1}. item: ${item}`);
// })

const todos = [{
    text: 'todos1',
    completed:true
    },
    {
    text: 'todos2',
    completed:false
    },
    {
    text: 'todos3',
    completed:true
    },
    {
    text: 'todos4',
    completed:false
    },
    {
    text: 'todos5',
    completed:true
    },
]
const deleteByText = function(todos,text){
    const index = todos.findIndex(function(todo){
         return todo.text.toLowerCase() === text.toLowerCase()
    })
    if(index > -1){
        todos.splice(index,1);
    }
}

const getThingsToDo = function(todos,forChecking){
        return todos.filter(function(note){
            if(!note.completed){
                return true;
            }  
        })
}

const sortTodos = function(todos){
    todos.sort(function(a,b){
        if(a.completed >  b.completed){
            return 1
        } else {
            return -1
        }
    })
}

// deleteByText(todos,'dddtodos5');
// console.log(todos);

// console.log(getThingsToDo(todos));

sortTodos(todos);
console.log(todos);




