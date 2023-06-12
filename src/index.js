import { createPage } from "./website_builder/page-builder";
import { addButtonFunction, createModule } from "./UI-stuff/interactables";
import { TaskManager } from "./to-do_stuff/TaskManager";

createPage();
addButtonFunction();

const taskManager = new TaskManager();

taskManager.addTask("Clean Desk", "I wanna clean the shit off my desk", true);

arrayToSite();

function addTaskToSite(title, description, priority) {
  taskManager.addTask(title, description, priority);
}

function arrayToSite() {
  taskManager.manager.forEach((task) => {
    const div = createModule(
      task.getTitle(),
      task.getDescription(),
      task.getPriority(),
      task.checkList.list
    );
    document.querySelector(".content").appendChild(div);
  });
}
