import './style.css';
import { handleTaskForm } from './task-dom.js';
import { appendProjectToList, createNewProjectBtn, handleProjectForm } from './project-dom.js';
import { handleAllTasksBtn } from './main-dom.js';
export { updateProjectsLocalStorage };
import Project from './project.js';
import Task from './tasks.js';


function updateProjectsLocalStorage() {
    let stringProjects = JSON.stringify(Project.myProjects);
    localStorage.setItem('projectsArray', stringProjects);

    let stringTasks = JSON.stringify(Task.myTasks);
    localStorage.setItem('tasksArray', stringTasks);
}

let projectMethods = {
    addTask: function (task) {
        this.projectTasks.push(task);
        updateProjectsLocalStorage();
    },
    removeTask: function (task) {
        this.projectTasks.splice(this.projectTasks.findIndex((obj) => obj.id == task.id), 1);
        updateProjectsLocalStorage()
    }
}

let taskMethods = {
    editTask: function (title, description, priority, dueDate) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;

        return this
    },
}



function getStorage() {
    if (localStorage.length > 0) {
        let stringProjects = localStorage.getItem('projectsArray');
        let parsedProjects = JSON.parse(stringProjects);
        let i = 0;

        for (let project of parsedProjects) {
            project.id = i;
            Object.assign(project, projectMethods);
            console.log(project);
            i++;
        };

        Project.idCounter = i;

        Project.myProjects = parsedProjects;

        Project.myProjects.forEach(project => {
            appendProjectToList(project);
        });

        ////////////////////////////////////////////

        let stringTasks = localStorage.getItem('tasksArray');
        let parsedTasks = JSON.parse(stringTasks);
        let j = 0;

        for (let task of parsedTasks) {
            task.id = j;
            Object.assign(task, taskMethods);
            console.log(task);
            j++
        };

        Task.idCounter = j;

        Task.myTasks = parsedTasks;
        updateProjectsLocalStorage();
    }
}

getStorage();
