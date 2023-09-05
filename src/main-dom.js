import { appendTaskToDom } from "./task-dom.js";
import Project from './project.js';
import { format } from "date-fns";
import parseISO from "date-fns/parseISO";
import isTomorrow from 'date-fns/isTomorrow'
export { handleTodayBtn, handleAllTasksBtn, currentWindow, setCurrentWindow, renderAllTasks, renderTodayTasks };

const tasksContainer = document.querySelector('.main-content');
const allTasksBtn = document.querySelector('.all');
const todayBtn = document.querySelector('.today');
let currentWindow;
let setCurrentWindow = function (window) {
    currentWindow = window;
}

const handleAllTasksBtn = (function () {
    allTasksBtn.addEventListener('click', renderAllTasks);
})();

const handleTodayBtn = (function () {
    todayBtn.addEventListener('click', renderTodayTasks);
})();


function renderTodayTasks() {
    setCurrentWindow('today');
    killAllContent();

    const today = format(new Date(), 'PPPP');

    console.log(today);
    Project.myProjects.forEach(project => {
        project.projectTasks.forEach(task => {
            console.log(task.dueDate);
            if (task.dueDate == today) {
                appendTaskToDom(task.title, task.dueDate, task.priority, task.id);
            };
        })
    });
}


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
