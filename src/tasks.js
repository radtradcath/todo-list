export default class Task {
    constructor(title, description, priority, dueDate) {
        this.id = Task.idCounter;
        this.title = title;
        this.description = description;        
        this.priority = priority;
        this.dueDate = dueDate;
        console.log(this.id);

        Task.idCounter++;
    }

    static idCounter = 0;

    static myTasks = [];

    static addTask(task) {
        console.log(task.id);
        console.log(Task.myTasks);
        Task.myTasks.push(task);
    }

    static removeTask(task) {
        console.log(task.id);
        Task.myTasks.splice(Task.myTasks.findIndex((obj) => obj.id == task.id), 1);
    }
};