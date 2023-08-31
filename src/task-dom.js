import Task from "./tasks.js";
export { killDomTasks, appendTaskToDom, handleCreateNewTaskBtn, handleTaskForm, savedTaskInputTitle, savedTaskInputDate, savedTaskInputDescription, savedTaskInputPriority };

const newTaskBtn = document.querySelector('.add-task');
const addTaskBtn = document.querySelector('#add-task-btn');
const cancelTaskBtn = document.querySelector('#cancel-task-btn');
const taskDialog = document.querySelector('#task-dialog');
const taskTitle = document.querySelector('#task-title');
const taskDate = document.querySelector('#dueDate');
const taskDescription = document.querySelector('#description');
const taskPriority = document.querySelector('#priority');
const taskContainer = document.querySelector('.main-content');
let savedTaskInputTitle;
let savedTaskInputDate;
let savedTaskInputDescription;
let savedTaskInputPriority;

const handleCreateNewTaskBtn = () => {
    newTaskBtn.addEventListener('click', showTaskDialog);

    function showTaskDialog() {
        taskDialog.showModal();
    }
};

const handleTaskForm = (() => {
    addTaskBtn.addEventListener('click', saveTaskValues);
    cancelTaskBtn.addEventListener('click', (e) => {
        e.preventDefault();
        taskDialog.close();
    })
})();

function saveTaskValues(e) {
    e.preventDefault();

    savedTaskInputTitle = taskTitle.value;
    savedTaskInputDate = taskDate.value;
    savedTaskInputDescription = taskDescription.value;
    savedTaskInputPriority = taskPriority.value;

};


function appendTaskToDom(objectTitle, objectDate, objectPriority) {
    const domTask = document.createElement('button');
    const domTitle = document.createElement('div');
    const domDate = document.createElement('div');
    const domDone = document.createElement('div');
    const domEdit = document.createElement('div');
    const domTitleValue = document.createElement('div');
    const domDateValue = document.createElement('div');
    const domNoteBtn = document.createElement('button');
    const domDoneBtn = document.createElement('button');
    const doneIco = document.createElement('i');
    const domEditBtn = document.createElement('button');
    const editIco = document.createElement('i');

    domTask.classList.add('listed-task');
    domTitle.classList.add('task-header', 'domTitle');
    domDate.classList.add('task-header', 'domDate');
    domDone.classList.add('task-header', 'domDone');
    domEdit.classList.add('task-header', 'domEdit');
    domTitleValue.classList.add('title-value');
    domDateValue.classList.add('date-value');
    domNoteBtn.classList.add('note-btn');
    domDoneBtn.classList.add('done-btn');
    doneIco.setAttribute('class', 'fa-solid fa-circle-check');
    domEditBtn.classList.add('edit-btn');
    editIco.setAttribute('class', 'fa-solid fa-pen-to-square');

    taskContainer.appendChild(domTask);
    domTask.appendChild(domTitle);
    domTask.appendChild(domDate);
    domTask.appendChild(domDone);
    domTask.appendChild(domEdit);
    domTask.appendChild(domTitleValue);
    domTask.appendChild(domDateValue);
    domTask.appendChild(domNoteBtn);
    domDoneBtn.appendChild(doneIco);
    domTask.appendChild(domDoneBtn);
    domEditBtn.appendChild(editIco);
    domTask.appendChild(domEditBtn);

    domTitle.textContent = "Title";
    domDate.textContent = "Due Date";
    domDone.textContent = "Done";
    domEdit.textContent = "Edit";
    domTitleValue.textContent = objectTitle;
    domDateValue.textContent = objectDate;
    domNoteBtn.textContent = "New Note";

    if (objectPriority === 'low') {
        domTask.setAttribute("style", "border-color: green");
    } else if (objectPriority === 'medium') {
        domTask.setAttribute("style", "border-color: yellow");
    } else if (objectPriority === 'high') {
        domTask.setAttribute("style", "border-color: red");
    }
};

function killDomTasks() {
    while (taskContainer.firstChild) {
        taskContainer.firstChild.remove();
    };
};

function renderAddTaskBtn () {
    
}