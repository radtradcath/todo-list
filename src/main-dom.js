import Task from "./tasks.js";
export { createNewTaskBtn };
export { handleForm };

const newTaskBtn = document.querySelector('.new-task-button');
const dialog = document.querySelector('#task-dialog');
const taskTitle = document.querySelector('#task-title');
const taskDate = document.querySelector('#dueDate');
const taskDescription = document.querySelector('#description');
const taskPriority = document.querySelector('#priority');
const taskContainer = document.querySelector('.main-content');

const createNewTaskBtn = (function createNewTask() {
    newTaskBtn.addEventListener('click', showDialog);

    function showDialog() {
        dialog.showModal();
    }
})();

const handleForm = (function handleForm() {
    const addTaskBtn = document.querySelector('#add-task-btn');
    const cancelTaskBtn = document.querySelector('#cancel-task-btn');

    addTaskBtn.addEventListener('click', createTask);
    cancelTaskBtn.addEventListener('click', (e) => {
        e.preventDefault();
        dialog.close();
    })
})();


function appendTask(task) {
    const myTask = document.createElement('div');
    myTask.classList.add('myTask');
    
}

function createTask(e) {
    e.preventDefault();

    let inputTitle = taskTitle.value;
    let inputDate = taskDate.value;
    let inputDescription = taskDescription.value;
    let inputPriority = taskPriority.value;

    let newTask = new Task(inputTitle, inputDescription, inputPriority, inputDate);
    Task.addTask(newTask);
    console.log(Task.myTasks);
    dialog.close();
};



