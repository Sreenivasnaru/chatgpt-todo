// JavaScript code for handling Todo list

// Function to add a new task to the list
function addTask() {
    const newTaskInput = document.getElementById('new-task');
    const taskText = newTaskInput.value.trim();

    if (taskText === '') {
        return; // Don't add empty tasks
    }

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-button">Delete</button>
    `;

    // Add an event listener to the delete button
    const deleteButton = taskItem.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
        taskItem.remove();
    });

    taskList.appendChild(taskItem);
    newTaskInput.value = ''; // Clear the input field
}

// Event listener for the "Add" button
const addButton = document.getElementById('add-button');
addButton.addEventListener('click', addTask);

// Event listener for pressing Enter in the input field
const newTaskInput = document.getElementById('new-task');
newTaskInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
