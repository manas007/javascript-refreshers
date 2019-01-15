const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

const filters = {
    searchText: ''
}


const renderTodos = function(todos, filters){
    console.log(filters)
    const filteredTodos = todos.filter(function (todo){
        console.log(todo.text.toLowerCase().includes(filters.searchText.toLowerCase()))
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    console.log(filteredTodos)
    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(function(todo){
        const newPara = document.createElement('p')
        newPara.textContent = todo.text
        document.querySelector('#todos').appendChild(newPara)
    });
    
}

renderTodos(todos, filters) // for the initial rendering


// Filter todos
document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

 
//Listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', function (e) {
   const newTodo = {};
   newTodo.text  = document.getElementById('new-todo-text').value
   newTodo.completed = false
   todos.push(newTodo)
   renderTodos(todos,filters)
})

