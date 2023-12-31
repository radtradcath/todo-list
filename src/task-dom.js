import Task from "./tasks.js";
import Project from "./project.js";
import { thisProjectId } from "./project-dom.js";
import { currentWindow, promptConfirmation, renderAllTasks, renderTodayTasks, renderTomorrowTasks } from "./main-dom.js";
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO'
import { updateProjectsLocalStorage } from "./index.js";
export { renderAddTaskBtn, killDomTasks, appendTaskToDom, handleTaskForm };

const taskForm = document.querySelector('#task-form');
const taskDialog = document.querySelector('#task-dialog');
const taskTitle = document.querySelector('#task-title');
const taskDate = document.querySelector('#dueDate');
const taskDescription = document.querySelector('#description');
const taskPriority = document.querySelector('#priority');
const taskContainer = document.querySelector('.main-content');
const dialogTitle = taskDialog.querySelector('p');
const addTaskBtn = document.querySelector('#add-task-btn');
const cancelTaskBtn = document.querySelector('#cancel-task-btn');
let editingTask = false;
let taskToBeEdited;
let projectThatHasTaskToBeEdited;


const handleCreateNewTaskBtn = () => {
    const newTaskBtn = document.querySelector('.add-task');
    addTaskBtn.textContent = 'Add';
    newTaskBtn.addEventListener('click', showTaskDialog);

    function showTaskDialog() {
        clearInputs();
        dialogTitle.textContent = 'New Task';
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

function setInputsDefaultValues(title, description, priority, dueDate) {
    taskTitle.value = title;
    taskDescription.value = description;
    taskPriority.value = priority;
    taskDate.value = dueDate;
}

function clearInputs() {
    taskTitle.value = '';
    taskDescription.value = '';
    taskPriority.value = '';
    taskDate.value = '';
}

function handleEditBtn(e) {
    e.stopPropagation();
    taskDialog.showModal();
    Project.myProjects.forEach(project => {
        project.projectTasks.forEach(task => {
            e.currentTarget.parentNode.id == `listed-task-${task.id}` ? projectThatHasTaskToBeEdited = project : "";         
        })
    })

    Task.myTasks.forEach(task => {
        e.currentTarget.parentNode.id == `listed-task-${task.id}` ? taskToBeEdited = task : "";
    })
    
    setInputsDefaultValues(taskToBeEdited.title, taskToBeEdited.description, taskToBeEdited.priority, taskToBeEdited.dueDate);
    dialogTitle.textContent = 'Edit Task';
    addTaskBtn.textContent = 'Edit';
    editingTask = true;
}

function saveTaskValues(e) {
    e.preventDefault();

    let isValid = taskForm.checkValidity();
    if (!isValid) {
        taskForm.reportValidity();
    } else {
        if (editingTask === true) {
            console.log(taskToBeEdited)
            let editedTask = taskToBeEdited.editTask(taskTitle.value, taskDescription.value, taskPriority.value, format(parseISO(taskDate.value), 'PPPP'));
            console.log(taskToBeEdited)
            projectThatHasTaskToBeEdited.removeTask(taskToBeEdited);
            projectThatHasTaskToBeEdited.addTask(editedTask);
            editingTask = false;
            if (currentWindow === 'all-tasks') {
                renderAllTasks();
            } else if (currentWindow === 'project') {
                updateDomProjectTasks(projectThatHasTaskToBeEdited);
            } else if (currentWindow === 'today') {
                renderTodayTasks();
            } else {
                renderTodayTasks();
            }
        } else {
            createTask(taskTitle.value, taskDescription.value, taskPriority.value, format(parseISO(taskDate.value), 'PPPP'));

        }

        taskDialog.close();
    }
    updateProjectsLocalStorage();
};



function createTask(inputTitle, inputDescription, inputPriority, inputDate) {
    let newTask = new Task(inputTitle, inputDescription, inputPriority, inputDate);
    console.log(newTask);
    let thisProject = Project.myProjects.find(obj => obj.id == thisProjectId);
    thisProject.addTask(newTask);
    Task.addTask(newTask);

    updateDomProjectTasks(thisProject);
    updateProjectsLocalStorage();
};

function updateDomProjectTasks(project) {
    killDomTasks();
    renderAddTaskBtn(project.id);
    project.projectTasks.forEach(task => {
        appendTaskToDom(task.title, task.dueDate, task.priority, task.id);
    });
}

function appendTaskToDom(objectTitle, objectDate, objectPriority, objectId) {
    const domTask = document.createElement('button');
    const domTitle = document.createElement('div');
    const domDate = document.createElement('div');
    const domDone = document.createElement('div');
    const domEdit = document.createElement('div');
    const domTitleValue = document.createElement('div');
    const domDateValue = document.createElement('div');
    const domDoneBtn = document.createElement('button');
    const doneIco = document.createElement('i');
    const domEditBtn = document.createElement('button');
    const editIco = document.createElement('i');

    domTask.classList.add('listed-task');
    domTask.setAttribute('id', `listed-task-${objectId}`);
    domTitle.classList.add('task-header', 'domTitle');
    domDate.classList.add('task-header', 'domDate');
    domDone.classList.add('task-header', 'domDone');
    domEdit.classList.add('task-header', 'domEdit');
    domTitleValue.classList.add('title-value');
    domDateValue.classList.add('date-value');
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

    if (objectPriority === 'low') {
        domTask.setAttribute("style", "border-color: green");
    } else if (objectPriority === 'medium') {
        domTask.setAttribute("style", "border-color: yellow");
    } else if (objectPriority === 'high') {
        domTask.setAttribute("style", "border-color: red");
    }

    domDoneBtn.addEventListener('click', killThisTask);
    domEditBtn.addEventListener('click', handleEditBtn);
    domTask.addEventListener('click', handleTaskContentDialog);
    updateProjectsLocalStorage();
};

const thisTaskDialog = document.querySelector('#this-task-dialog');
const thisTaskTitle = document.querySelector('.this-task-title');
const thisTaskDate = document.querySelector('.this-task-date');
const thisTaskDescription = document.querySelector('.this-task-description');
const thisTaskClose = document.querySelector('#this-task-dialog > button');

function handleTaskContentDialog(e) {
    thisTaskDialog.setAttribute('style', 'display: grid;');
    let thisTask = Task.myTasks.find(task => e.currentTarget.id == `listed-task-${task.id}`);
    thisTaskTitle.textContent = thisTask.title;
    thisTaskDate.textContent = thisTask.dueDate;
    thisTaskDescription.textContent = thisTask.description;
    thisTaskDialog.showModal();
    thisTaskClose.addEventListener('click', () => {
        thisTaskDialog.setAttribute('style', 'display: none;');
        thisTaskDialog.close()
    });
}

function killThisTask(e) {
    e.stopPropagation();
    let projectThatHasTask;
    let taskToKill;
    
    Project.myProjects.forEach(project => {
        project.projectTasks.forEach(task => {
            e.currentTarget.parentNode.id == `listed-task-${task.id}` ? projectThatHasTask = project : "";
            e.currentTarget.parentNode.id == `listed-task-${task.id}` ? taskToKill = task : "";
        })
    })

    console.log(projectThatHasTask);
    e.currentTarget.parentNode.remove();
    Task.removeTask(taskToKill);
    projectThatHasTask.removeTask(taskToKill);
    updateProjectsLocalStorage();
}

function killDomTasks() {
    const allDomTasks = document.querySelectorAll('.add-task');
    while (taskContainer.firstChild) {
        taskContainer.firstChild.remove();
    };

    allDomTasks.forEach(element => {
        element.remove();
    })
};

function renderAddTaskBtn(projectId) {
    const newTaskBtn = document.createElement('button');
    newTaskBtn.classList.add('add-task');
    newTaskBtn.setAttribute('id', `add-task-${projectId}`);
    const newTaskIco = document.createElement('i');
    newTaskIco.classList.add('fa-solid', 'fa-file-circle-plus');
    const newTaskLabel = document.createElement('span');
    newTaskLabel.textContent = 'New Task';
    newTaskLabel.classList.add('new-task-button');

    taskContainer.appendChild(newTaskBtn);
    newTaskBtn.appendChild(newTaskIco);
    newTaskBtn.appendChild(newTaskLabel);

    newTaskBtn.addEventListener('click', handleCreateNewTaskBtn);
};

