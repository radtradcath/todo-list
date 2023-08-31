import Task from "./tasks.js";
import { appendTaskToDom } from "./task-dom";
export {handleAllTasksBtn, renderAllTasks};


const tasksContainer = document.querySelector('.main-content');
const allTasksBtn = document.querySelector('.all');

let handleAllTasksBtn = (() => allTasksBtn.addEventListener('click', renderAllTasks))();


function renderAllTasks() {
    killAllContent();
    Task.myTasks.forEach(obj => {
        appendTaskToDom(obj.title, obj.dueDate, obj.priority);
    });
}

function killAllContent() {
    while(tasksContainer.firstChild) {
        tasksContainer.firstChild.remove();
    };
};