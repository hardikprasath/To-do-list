const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('new-task');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const taskText = todoInput.value.trim();

  if (taskText !== "") {
    addTodoItem(taskText);
    todoInput.value = ""; 
  }
});


function addTodoItem(task) {
  const listItem = document.createElement('li');
  listItem.classList.add('todo-item');

  const taskText = document.createElement('span');
  taskText.textContent = task;

  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';
  completeBtn.classList.add('complete-btn');
  completeBtn.addEventListener('click', completeTask);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', deleteTask);

  listItem.appendChild(taskText);
  listItem.appendChild(completeBtn);
  listItem.appendChild(deleteBtn);

  todoList.appendChild(listItem);
}

function completeTask() {
  const listItem = this.parentElement;
  listItem.classList.toggle('completed');
}

function deleteTask() {
  const listItem = this.parentElement;
  todoList.removeChild(listItem);
}
