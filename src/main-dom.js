import Task from "./tasks.js";
import { appendTaskToDom } from "./task-dom";


const tasksContainer = document.querySelector('.main-content');
const allTasksBtn = document.querySelector('.all');

export default handleAllTasksBtn = (() => allTasksBtn.addEventListener('click', renderAllTasks))();


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