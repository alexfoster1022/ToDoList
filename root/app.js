//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);

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
