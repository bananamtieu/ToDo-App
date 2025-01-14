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

