import Task from "./tasks";
import {appendProjectToList} from './project-dom.js';
export {saveProjectsInStorage, getStorage};

export default class Project {
    constructor(title) {
        this.id = Project.idCounter;
        this.title = title;

        Project.idCounter++
    }

    static idCounter = 0;

    static myProjects = [];

    static removeProjectFromArray(project) {
        Project.myProjects.splice(Project.myProjects.indexOf(project), 1);
    }

    static addProjectToArray(project) {
        Project.myProjects.push(project);
    }

    projectTasks = [];

    addTask(task) {
        this.projectTasks.push(task);
    }

    removeTask(task) {

        this.projectTasks.splice(this.projectTasks.findIndex((obj) => obj.id == task.id), 1);
    }
}

function saveProjectsInStorage() {
    localStorage.clear();
    let allProjects = JSON.stringify(Project.myProjects);
    localStorage.setItem('project-array', allProjects);
}

function getStorage() {
    let projectsArray = localStorage.getItem('project-array');
    let parsedArray = JSON.parse(projectsArray);    
    Project.myProjects = parsedArray;
    Project.myProjects.forEach(project => {
        let localProject = new Project(project.title)
        appendProjectToList(localProject);
        saveProjectsInStorage();
    })
}


