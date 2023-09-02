import { appendTaskToDom } from "./task-dom.js";
import Project from './project.js';
export { handleAllTasksBtn, currentWindow, renderAllTasks };

const tasksContainer = document.querySelector('.main-content');
const allTasksBtn = document.querySelector('.all');
let currentWindow;

const handleAllTasksBtn = (function () {
    allTasksBtn.addEventListener('click', renderAllTasks);
})();


function renderAllTasks() {
    currentWindow = 'all-tasks';
    killAllContent();

    Project.myProjects.forEach(project => {
        project.projectTasks.forEach(task => {
            appendTaskToDom(task.title, task.dueDate, task.priority, task.id);
        })
    });
};

function killAllContent() {
    while (tasksContainer.firstChild) {
        tasksContainer.firstChild.remove();
    };
};