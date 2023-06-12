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

  const text = document.createElement("div");
  text.classList.toggle("text");
  text.innerHTML = "Wanna add something new to the list?";

  const textTwo = document.createElement("div");
  textTwo.classList.toggle("text");
  textTwo.innerHTML = "Press the button below!";

  const btn = document.createElement("button");
  btn.classList.toggle("btn");
  btn.innerHTML = "+";

  div.appendChild(text);
  div.appendChild(textTwo);
  div.appendChild(btn);

  document.getElementById("container").appendChild(div);
}

function createContent() {
  const container = document.getElementById("container");

  const div = document.createElement("div");
  div.classList.toggle("content");

  container.appendChild(div);
}

export { createPage };
