let tasks = [
    { id: 1, description: "Cotizar repuestos", completed: false },
    { id: 2, description: "Comprar repuestos", completed: false },
    { id: 3, description: "Reparar", completed: false }
];

function updateTaskList() {
    const taskList = document.getElementById('taskList');
    const totalTasks = document.getElementById('totalTasks');
    const completedTasks = document.getElementById('completedTasks');
    
    taskList.innerHTML = '';
    
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.description + (task.completed ? " (Realizada)" : "");
        
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Cambiar estado';
        completeButton.onclick = () => toggleTaskCompletion(task.id);
        li.appendChild(completeButton);
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = () => deleteTask(task.id);
        li.appendChild(deleteButton);
        
        taskList.appendChild(li);
    });
    
    totalTasks.textContent = tasks.length;
    completedTasks.textContent = tasks.filter(task => task.completed).length;
}

function addTask() {
    const taskInput = document.getElementById('newTask');
    const description = taskInput.value;
    if (description !== "") {
        const newTask = {
            id: tasks.length + 1,
            description: description,
            completed: false
        };
        tasks.push(newTask);
        taskInput.value = '';
        updateTaskList();
    }
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    updateTaskList();
}

function toggleTaskCompletion(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        updateTaskList();
    }
}

document.getElementById('addTaskButton').addEventListener('click', addTask);

document.getElementById('newTask').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask(); 
    }
});

updateTaskList();
