function createForm() {
  const div = document.createElement("div");
  div.classList.toggle("pop-up");

  const form = document.createElement("form");
  form.classList.toggle("form");

  const x = document.createElement("button");
  x.innerHTML = "x";
  x.classList.toggle("x");
  x.addEventListener("click", () => {
    const div = document.getElementById("container");
    div.removeChild(document.querySelector(".pop-up"));
  });

  const nameContainer = document.createElement("div");
  nameContainer.classList.toggle("nameContainer");

  const nameLabel = document.createElement("label");
  nameLabel.classList.toggle("label");
  nameLabel.for = "name";
  nameLabel.innerHTML = "Title";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.id = "name";

  const descriptionContainer = document.createElement("div");
  descriptionContainer.classList.toggle("peanutButter");

  const descriptionLabel = document.createElement("label");
  descriptionLabel.classList.toggle("label");
  descriptionLabel.for = "description";
  descriptionLabel.innerHTML = "Description";

  const descriptionInput = document.createElement("textArea");
  descriptionInput.id = "description";

  const priorityContainer = document.createElement("div");
  priorityContainer.classList.toggle("priorityContainer");

  const priorityLabel = document.createElement("label");
  priorityLabel.classList.toggle("label-priority");
  priorityLabel.for = "priority";
  priorityLabel.innerHTML = "Priority:";

  const priorityInput = document.createElement("input");
  priorityInput.type = "checkbox";
  priorityInput.id = "priority";

  const submit = document.createElement("button");
  submit.classList.toggle("Add");
  submit.innerHTML = "Add";

  nameContainer.appendChild(nameLabel);
  nameContainer.appendChild(nameInput);

  descriptionContainer.appendChild(descriptionLabel);
  descriptionContainer.appendChild(descriptionInput);

  priorityContainer.appendChild(priorityLabel);
  priorityContainer.appendChild(priorityInput);

  form.appendChild(x);
  form.appendChild(nameContainer);
  form.appendChild(descriptionContainer);
  form.appendChild(priorityContainer);
  form.appendChild(submit);

  div.appendChild(form);
  return div;
}

function addButtonFunction() {
  const button = document.querySelector(".btn");
  button.addEventListener("click", toPopupOrNotToPopup);
}

function toPopupOrNotToPopup() {
  const container = document.querySelector(".container");
  const form = createForm();
  if (!container.contains(form)) {
    container.appendChild(form);
  }
}

function createModule(title, description, priority, checkListArray) {
  const div = document.createElement("div");
  div.classList.toggle("module");

  const priorityElement = document.createElement("div");
  if (priority) {
    priorityElement.classList.toggle("priority");
  } else {
    priorityElement.classList.toggle("no-priority");
  }

  const titleElement = document.createElement("div");
  titleElement.innerHTML = title;
  titleElement.classList.toggle("module-title");

  const descriptionElement = document.createElement("div");
  descriptionElement.classList.toggle("module-description");
  descriptionElement.innerHTML = description;

  const checkList = createCheckList();
  if (!checkListArray.length === 0) {
    for (let i = 0; i < checkListArray.length; i++) {
      const div = document.createElement("div");

      const divDescription = document.createElement("div");
      divDescription.innerHTML = checkListArray[i].getDescription();

      const checkBox = document.createElement("checkbox");
      checkBox.classList.toggle("checkList-checkBox");
      if (checkListArray[i].isChecked()) checkBox.click();

      div.appendChild(divDescription);
      div.appendChild(checkBox);
      checkList.appendChild(div);
    }
  }

  div.appendChild(priorityElement);
  div.appendChild(titleElement);
  div.appendChild(descriptionElement);
  div.appendChild(checkList);

  return div;
}

function createCheckList() {
  const div = document.createElement("div");
  div.classList.toggle("checkList");

  const button = document.createElement("button");
  button.addEventListener("click", () => {});
  button.classList.toggle("add-list");

  div.appendChild(button);

  return div;
}

export { createForm, addButtonFunction, createModule };
