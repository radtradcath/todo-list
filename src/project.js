import Task from "./tasks";
import {appendProjectToList} from './project-dom.js';
import { updateProjectsLocalStorage } from "./index.js";



export default class Project {
    constructor(title) {
        this.id = Project.idCounter;
        this.title = title;

        Project.idCounter++
        updateProjectsLocalStorage();
    }

    static idCounter = 0;

    static myProjects = [];

    static removeProjectFromArray(project) {
        Project.myProjects.splice(Project.myProjects.indexOf(project), 1);
        updateProjectsLocalStorage();
    }

    static addProjectToArray(project) {
        Project.myProjects.push(project);
        updateProjectsLocalStorage();
    }

    projectTasks = [];

    addTask(task) {
        this.projectTasks.push(task);
        updateProjectsLocalStorage();
    }

    removeTask(task) {
        this.projectTasks.splice(this.projectTasks.findIndex((obj) => obj.id == task.id), 1);
        updateProjectsLocalStorage()
    }
}


