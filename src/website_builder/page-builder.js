import "./style.css";
import cat from "../assets/photos/cat.svg";

function createPage() {
  createHeader();
  createSideBar();
  createContent();
}

function createHeader() {
  const titleText = "To-do List";

  const div = document.createElement("div");
  div.classList.toggle("header");

  const title = document.createElement("div");
  title.classList.toggle("title");
  title.innerHTML = titleText;

  const logo = new Image();
  logo.src = cat;
  logo.classList.toggle("cat-logo");

  div.appendChild(logo);
  div.appendChild(title);

  const container = document.getElementById("container");
  container.appendChild(div);
}

function createSideBar() {
  const div = document.createElement("div");
  div.classList.toggle("sidebar");

  document.getElementById("container").appendChild(div);
}

function createContent() {
  const div = document.createElement("div");
  div.classList.toggle("content");

  document.getElementById("container").appendChild(div);
}

export { createPage };
