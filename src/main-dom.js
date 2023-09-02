import { appendTaskToDom } from "./task-dom.js";
import Project from './project.js';
export {handleAllTasksBtn};

const tasksContainer = document.querySelector('.main-content');
const allTasksBtn = document.querySelector('.all');

const handleAllTasksBtn = (function() {
     allTasksBtn.addEventListener('click', renderAllTasks);
})();


function renderAllTasks() {
    killAllContent();
    
    Project.myProjects.forEach(project => {
        project.projectTasks.forEach(task => {
            appendTaskToDom(task.title, task.dueDate, task.priority);
        })
    });
};

function killAllContent() {
    while(tasksContainer.firstChild) {
        tasksContainer.firstChild.remove();
    };
};