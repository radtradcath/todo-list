import Task from "./tasks";

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


