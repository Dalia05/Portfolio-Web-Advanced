//elementen selecteren
let form = document.getElementById('form');
let input = document.getElementById('input');
let list = document.getElementById('list');

//gebruik van een constante
const STORAGE_KEY = 'tasks';

//JSON manipuleren en weergeven
let loadTasks = () => {
    //gebruik van LocalStorage
    let tasksJSON = localStorage.getItem(STORAGE_KEY);
    return tasksJSON ? JSON.parse(tasksJSON) : [];
};

//JSON manipuleren en weergeven
let saveTaskList = (taskList) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(taskList));
};

//spread operator
let addTaskItem = (taskItem) => {
    let taskList = [...loadTasks(), taskItem];
    saveTaskList(taskList);
    renderTasks();
};

//taken verwijderen
let removeTaskItem = (taskIndex) => {
    let taskList = loadTasks().filter((_, index) => index !== taskIndex);
    saveTaskList(taskList);
    renderTasks();
};

//taken weergeven
let renderTasks = () => {
    list.innerHTML = '';

    let taskList = loadTasks();

    //iteration over een array
    taskList.forEach((taskItem, index) => {
        let element = document.createElement('div');
        element.className = 'task';

        let taskText = document.createElement('span');
        taskText.textContent = taskItem;

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => removeTaskItem(index);

        element.appendChild(taskText);
        element.appendChild(deleteButton);

        list.appendChild(element);
    });
};

// Event koppelen aan het formulier + callback function
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Formulier valideren
    if (input.value.trim()) {
        addTaskItem(input.value.trim());
        input.value = '';
    }
});

renderTasks();