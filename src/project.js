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
        Project.myProjects.splice(Project.myProjects.findIndex((obj) => obj.id === project.id));
    }

    static addProjectToArray (project) {
        Project.myProjects.push(project);
    }

    projectTasks = [];
    
    addTask(task) {
        this.projectTasks.push(task);
    }

    removeTask(task) {
        console.log(task.id);
        
        this.projectTasks.splice(this.projectTasks.findIndex((obj) => obj.id == task.id), 1);
    }
}


