import { renderAddTaskBtn, killDomTasks, appendTaskToDom } from './task-dom.js';
import Task from './tasks.js';
import Project from "./project.js";
import { updateProjectsLocalStorage } from './index.js';
import { setCurrentWindow } from './main-dom.js';
export { appendProjectToList, createNewProjectBtn, handleProjectForm, thisProjectId };

const newProjectBtn = document.querySelector('.new-project');
const projectDialog = document.querySelector('#project-dialog');
const createProjectBtn = document.querySelector('#create-project-btn');
const cancelProjectBtn = document.querySelector('#cancel-project-btn');
const projectTitleInput = document.querySelector('#project-title');
const projectsContainer = document.querySelector('.second-section');
let thisProjectId;

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
    let savedProjectInputTitle = projectTitleInput.value;
    createProject(savedProjectInputTitle);
    projectDialog.close();
};

// 

function createProject(title) {
    let new1Project = new Project(title);

    Project.addProjectToArray(new1Project);
    appendProjectToList(new1Project);
    updateProjectsLocalStorage();
}

function appendProjectToList(newProject) {
    const project = document.createElement('button');
    const projectTitle = document.createElement('div');
    const deleteProjectBtn = document.createElement('button');
    const deleteProjectIco = document.createElement('i');
    project.classList.add('project-list');
    project.setAttribute('id', newProject.id);
    deleteProjectBtn.classList.add('delete-project-button');
    deleteProjectIco.setAttribute('class', "fa-solid fa-trash-can");
    projectTitle.textContent = newProject.title;

    projectsContainer.appendChild(project);
    project.appendChild(projectTitle);
    project.appendChild(deleteProjectBtn);
    deleteProjectBtn.appendChild(deleteProjectIco);

    project.addEventListener('click', renderThisProjectTasks);
    deleteProjectBtn.addEventListener('click', killThisProject);
};

function renderThisProjectTasks(e) {
    setCurrentWindow('projects');
    thisProjectId = e.currentTarget.id;
    let thisProject = Project.myProjects.find(project => e.currentTarget.id == project.id);
   
    killDomTasks();
    renderAddTaskBtn(thisProjectId);

    thisProject.projectTasks.forEach(task => {
        appendTaskToDom(task.title, task.dueDate, task.priority, task.id);
    });
    updateProjectsLocalStorage()
};

function killThisProject(e) {
    e.stopPropagation();

    const projectDomList = document.querySelectorAll('.project-list');
    projectDomList.forEach(domProject => {
        domProject.id == e.currentTarget.parentNode.id ? domProject.remove() : "";
    });

    let projectToKill = Project.myProjects.find(project => e.currentTarget.parentNode.id == project.id);
    killDomTasks();

    let thisProjectTasks = projectToKill.projectTasks;

    thisProjectTasks.forEach(obj => {
        Task.removeTask(obj);
    })

    Project.removeProjectFromArray(projectToKill);
    updateProjectsLocalStorage();
};












