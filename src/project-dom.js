import Task from "./tasks.js";
import { renderAddTaskBtn, killDomTasks, appendTaskToDom } from './task-dom.js';
import Project from "./project.js";
export {createNewProjectBtn, handleProjectForm, thisProjectId, renderProject};

const newProjectBtn = document.querySelector('.new-project');
const projectDialog = document.querySelector('#project-dialog');
const createProjectBtn = document.querySelector('#create-project-btn');
const cancelProjectBtn = document.querySelector('#cancel-project-btn');
const projectTitleInput = document.querySelector('#project-title');
const projectsContainer = document.querySelector('.second-section');
let savedProjectInputTitle;
let thisProjectId = 0;
let id = 0;

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
    projectTitle.textContent = newProject.title;

    projectsContainer.appendChild(project);
    project.appendChild(projectTitle);
    project.appendChild(deleteProjectBtn);
    deleteProjectBtn.appendChild(deleteProjectIco);   
    

    let renderThisProject = renderProject.bind(newProject);

    project.addEventListener('click', renderThisProject);
    id++
};

function renderProject() {
    thisProjectId = this.id;
    killDomTasks();
    renderAddTaskBtn();
    this.projectTasks.forEach(obj => {        
        appendTaskToDom(obj.title, obj.dueDate, obj.priority);
    })
}






