import { Task } from "./Task.js";

class TaskManager {
  constructor() {
    this.manager = [];
  }

  addTask(task) {
    this.manager.push(task);
  }

  removeTask(name) {
    this.manager = this.manager.filter((task) => task.getTitle() === name);
  }

  checkIfNameExists(name) {
    this.manager.forEach((task) => {
      if (task.getTitle() === name) {
        return true;
      }
    });
    return false;
  }

  getTask(name) {
    for (let i = 0; i < this.manager.length; i++) {
      if (this.manager[i].getTitle() === name) {
        return this.manager[i];
      }
    }
    return new Task("Error", "task not found", 0);
  }

  log() {
    this.manager.forEach((task) => {
      task.log();
      console.log("///");
    });
  }
}

export { TaskManager };
