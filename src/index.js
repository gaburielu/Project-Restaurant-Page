import "./style.css";
import "./normalize.css";
import { renderMenu } from "./menu";
import { about } from "./about";
import home from "./home";

const content = document.getElementById("content");
let pages = "menu";

const title = document.createElement("h1");
title.id = "title";
title.textContent = "Big Funk Ramen House";
content.appendChild(title);

const nav = document.createElement("nav");
nav.id = "navbar";

const navItems = ["Home", "Menu", "About"];

navItems.forEach((item) => {
  const navItem = document.createElement("div");
  navItem.classList.add("nav-item");
  navItem.id = `${item.toLowerCase()}Nav`;
  navItem.textContent = item;
  nav.appendChild(navItem);
});

content.appendChild(nav);

// const card = document.createElement("div");
// card.classList.add("card");
// card.textContent = "fly you fools";
// body.appendChild(card);



about();

function createFooter() {
  const footer = document.createElement("div");
}

function clearContainer() {}

function clearClass() {
  navbar.querySelectorAll("div").forEach((childDiv) => {
    childDiv.classList.remove("Active");
  });
}

function renderPage(pages) {
  if (pages == "menu") {
    clearClass();
    menuNav.classList.add("active");
    renderMenu();
  } else if (pages == "about") {
    clearClass();
    aboutNav.classList.add("active");
  } else {
    clearClass();
    homeNav.classList.add("active");
    home();
  }
}

renderPage(pages);
