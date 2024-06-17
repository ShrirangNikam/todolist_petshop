// script.js

let todos = [];

// Function to add a new to-do
function addTodo() {
    const newTodoInput = document.getElementById('new-todo');
    const newTodoText = newTodoInput.value.trim();
    
    if (newTodoText !== "") {
        const newTodo = { id: Date.now(), text: newTodoText };
        todos.push(newTodo);
        newTodoInput.value = "";
        renderTodos();
    }
}

// Function to render the to-do list
function renderTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = "";
    
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${todo.text}</span>
            <button class="edit" onclick="editTodo(${todo.id})">Edit</button>
            <button class="delete" onclick="deleteTodo(${todo.id})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}

// Function to edit a to-do
function editTodo(id) {
    const newText = prompt("Edit your to-do:");
    
    if (newText !== null && newText.trim() !== "") {
        const todo = todos.find(todo => todo.id === id);
        if (todo) {
            todo.text = newText.trim();
            renderTodos();
        }
    }
}

// Function to delete a to-do
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}

// Initial rendering of the to-do list
renderTodos();
