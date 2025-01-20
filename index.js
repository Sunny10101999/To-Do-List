// Get DOM elements
const displayTasks = document.getElementById("todoList");
const deleteBtn = document.getElementById("deleteButton");
const itemsCount = document.getElementById("total-items-Display");
const addBtn = document.getElementById("searchButton");
const todoInput = document.getElementById("todoInput");

let tasks = [];

// Function to update the task list display
const updateTaskDisplay = () => {
  displayTasks.innerHTML = ''; // Clear the current list

  tasks.forEach((task, index) => {
    const taskElement = document.createElement("li");
    taskElement.textContent = task;

    const taskDeleteBtn = document.createElement("button");
    taskDeleteBtn.textContent = "Delete";
    taskDeleteBtn.className = "delete-btn";
    taskDeleteBtn.addEventListener('click', () => deleteTask(index));

    taskElement.appendChild(taskDeleteBtn);
    displayTasks.appendChild(taskElement);
  });

  itemsCount.textContent = `${tasks.length} items total`;
};

// Function to add a task
const addTask = () => {
  const task = todoInput.value.trim();
  if (task) {
    tasks.push(task);
    updateTaskDisplay();
    todoInput.value = ''; // Clear input field
  }
};

// Function to delete a task
const deleteTask = (index) => {
  tasks.splice(index, 1);
  updateTaskDisplay();
};

// Add event listener for "Add" button click
addBtn.addEventListener('click', addTask);

// Add event listener for Enter key press to add task
todoInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

// Optional: Clear all tasks when "Delete all" button is clicked
deleteBtn.addEventListener('click', () => {
  tasks = [];
  updateTaskDisplay();
});
