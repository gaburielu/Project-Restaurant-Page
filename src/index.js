import "./style.css";
import "./normalize.css";
import { renderMenu } from "./menu";
import { renderAbout } from "./about";
import renderHome from "./home";

const content = document.getElementById("content");
const container = document.querySelector(".container");
let pages = "home";

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
  navItem.onclick = function () {
    console.log("Clicked on:", item.toLowerCase());
    changePage(item.toLowerCase());
    renderPage(pages);
  };
  nav.appendChild(navItem);
});

content.appendChild(nav);

function changePage(newPage) {
  pages = newPage;
}

function clearContainer(container) {
  if (container) {
    const navElement = container.querySelector("#navbar");

    if (navElement) {
      while (navElement.nextElementSibling) {
        container.removeChild(navElement.nextElementSibling);
      }
    } else {
      console.warn("Nav element not found in the container");
    }
  } else {
    console.warn("Container is null or undefined");
  }
}

function clearClass() {
  nav.querySelectorAll("div").forEach((childDiv) => {
    childDiv.classList.remove("active");
  });
}

function renderPage(pages) {
  console.log("Rendering page:", pages);

  if (pages == "menu") {
    if (!menuNav.classList.contains("active")) {
      clearClass();
      clearContainer(content);

      menuNav.classList.add("active");
      console.log("Rendering Menu");
      renderMenu();
    }
  } else if (pages == "about") {
    if (!aboutNav.classList.contains("active")) {
      clearClass();
      clearContainer(content);

      aboutNav.classList.add("active");
      console.log("Rendering About");
      renderAbout();
    }
  } else if (pages == "home") {
    if (!homeNav.classList.contains("active")) {
      clearClass();
      clearContainer(content);

      homeNav.classList.add("active");
      console.log("Rendering Home");
      renderHome();
    }
  }

  console.log("Page rendered successfully");
}

renderPage(pages);
