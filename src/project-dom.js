import Task from "./tasks.js";
import { renderAddTaskBtn, killDomTasks, appendTaskToDom, savedTaskInputTitle, savedTaskInputDate, savedTaskInputDescription, savedTaskInputPriority } from './task-dom.js';
import Project from "./project.js";
export {createNewProjectBtn, handleProjectForm}

const newProjectBtn = document.querySelector('.new-project');
const projectDialog = document.querySelector('#project-dialog');
const createProjectBtn = document.querySelector('#create-project-btn');
const cancelProjectBtn = document.querySelector('#cancel-project-btn');
const projectTitleInput = document.querySelector('#project-title');
const projectsContainer = document.querySelector('.second-section');
let id = 0;
let savedProjectInputTitle;

const createNewProjectBtn = (() => {
    newProjectBtn.addEventListener('click', showProjectDialog);

    function showProjectDialog() {
        projectDialog.showModal();
    }
})();

const handleProjectForm = (() => {
    createProjectBtn.addEventListener('click', saveProjectFormInput);
    cancelProjectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        projectDialog.close();
    })
})();

function saveProjectFormInput(e) {
    e.preventDefault();

    savedProjectInputTitle = projectTitleInput.value;
    createProject(savedProjectInputTitle);
    projectDialog.close();
};

function createProject(title){
    let new1Project = new Project(title);
    let myTask = new Task('hi', 'vamo la', 'high', 'dia 12');

    new1Project.addTask(myTask);
    console.log(new1Project.projectTasks);
    Project.addProjectToArray(new1Project);
    appendProjectToList(new1Project);

    return new1Project;
}

function appendProjectToList(newProject) {
    const project = document.createElement('button');
    const projectTitle = document.createElement('div');
    const deleteProjectBtn = document.createElement('button');
    const deleteProjectIco = document.createElement('i');
    project.classList.add('project-list');
    project.setAttribute('id', id);
    deleteProjectBtn.classList.add('delete-project-button');
    deleteProjectIco.setAttribute('class', "fa-solid fa-trash-can");
    console.log(newProject.title);
    projectTitle.textContent = newProject.title;

    projectsContainer.appendChild(project);
    project.appendChild(projectTitle);
    project.appendChild(deleteProjectBtn);
    deleteProjectBtn.appendChild(deleteProjectIco);   
    id++

    let renderThisProject = renderProject.bind(newProject);

    project.addEventListener('click', renderThisProject);
};

function createProjectTask(project) {
    let newTask = new Task(savedTaskInputTitle, savedTaskInputDate, savedTaskInputDescription, savedTaskInputPriority);
    project.addTask(newTask);
    Task.addTask(newTask);
}


function renderProject() {
    killDomTasks();
    renderAddTaskBtn();
    this.projectTasks.forEach(obj => {
        appendTaskToDom(obj.title, obj.dueDate, obj.priority);
    })
}






