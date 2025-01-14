// Select DOM elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Add event listener to the form
todoForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    const taskText = todoInput.value.trim();
    if (taskText) {
        addTask(taskText);
        todoInput.value = ''; // Clear input field
    }
});

// Add a new task
function addTask(taskText) {
    const li = document.createElement('li');

    // Add task text
    li.textContent = taskText;

    // Add a 'completed' toggle
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Add a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.style.marginLeft = '10px';
    deleteBtn.style.color = 'red';
    deleteBtn.style.border = 'none';
    deleteBtn.style.background = 'transparent';
    deleteBtn.style.cursor = 'pointer';

    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    li.append(deleteBtn);
    todoList.appendChild(li);
}