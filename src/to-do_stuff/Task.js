import { CheckList } from "./CheckList";

class Task {
  constructor(title, description, priority) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.checkList = new CheckList();
  }

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  getDueDate() {
    return this.dueDate;
  }

  getCheckList() {
    return this.checkList;
  }

  setTitle(newTitle) {
    this.title = newTitle;
  }

  setDescription(desc) {
    this.description = desc;
  }

  setPriority(priority) {
    this.priority = this.priority;
  }

  //getters and setters

  //output to console
  log() {
    console.log(this.title);
    console.log(this.description);
    console.log(this.priority);
    this.checkList.log();
  }
}

export { Task };
