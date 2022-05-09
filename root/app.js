//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);
document.addEventListener('DOMContentLoaded', getTodos);

//Functions
function addTodo(e){
//Prevent form from submitting
    e.preventDefault();
//Todo Div
const todoDiv = document.createElement('div');
todoDiv.classList.add('todo');
//Create Li   
const newTodo = document.createElement('li');
newTodo.innerText = todoInput.value;
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);
//Add todo to local storage
saveLocalTodos(todoInput.value);
//Check box
const completedButton = document.createElement('button');
completedButton.innerHTML = `<i class="fas fa-check"></i>`;
completedButton.classList.add('complete-btn');
todoDiv.appendChild(completedButton);
//Delete button
const deleteButton = document.createElement('button');
deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
deleteButton.classList.add('delete-btn');
todoDiv.appendChild(deleteButton);
//Append to list
todoList.appendChild(todoDiv);
//Clear input value
todoInput.value = "";
}

function deleteCheck(e) {
const item = e.target;
//Delete Todo
if(item.classList[0] === 'delete-btn'){
    const todo = item.parentElement;
    //Animation
    todo.classList.add('fall');
    removeLocalTodos(todo);
    todo.addEventListener('transitionend', function(){
        todo.remove();
    });
 }

//Check box
if(item.classList[0] === "complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle('complete');
    }
}

//Filter
function filterTodo(e) {
 const todos = todoList.childNodes;
 todos.forEach(function(todo) {
     switch(e.target.value){
        case "all":
            todo.style.display = 'flex';
             break;
        case "complete":
            if(todo.classList.contains('complete')){
                todo.style.display = 'flex';
            } else {
                todo.style.display = 'none'
            }
            break;
        case "incomplete":
            if(!todo.classList.contains('complete')){
                todo.style.display = "flex";
            } else {
                todo.style.display = "none";
            }
            break;
     }
 });
}

function saveLocalTodos(todo) {
  //Check if already in storage
let todos;
if(localStorage.getItem('todos') === null){
   todos = []; 
} else {
    todos = JSON.parse(localStorage.getItem('todos'))
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
    let todos;
if(localStorage.getItem('todos') === null){
   todos = []; 
} else {
    todos = JSON.parse(localStorage.getItem('todos'))
 }
 todos.forEach(function(todo) {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create Li   
    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    
    //Check box
    const completedButton = document.createElement('button');
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //Delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);
    //Append to list
    todoList.appendChild(todoDiv)
 });
}

function removeLocalTodos(todo) {
    let todos;
    if(localStorage.getItem('todos') === null){
       todos = []; 
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
     }
   const todoIndex = todo.children[0].innerText;
   todos.splice(todos.indexOf(todoIndex), 1); 
   localStorage.setItem('todos', JSON.stringify(todos)); 
}