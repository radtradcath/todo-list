import { appendTaskToDom } from "./task-dom.js";
import Project from './project.js';
export { handleAllTasksBtn, currentWindow, setCurrentWindow, renderAllTasks };

const tasksContainer = document.querySelector('.main-content');
const allTasksBtn = document.querySelector('.all');
let currentWindow;
let setCurrentWindow = function(window) {
    currentWindow = window;
}

const handleAllTasksBtn = (function () {
    allTasksBtn.addEventListener('click', renderAllTasks);
})();


function renderAllTasks() {
    setCurrentWindow('all-tasks');
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