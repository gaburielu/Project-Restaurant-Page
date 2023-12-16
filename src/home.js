import "./style.css";
import heroImgPath from "./asset/hero.jpg";

const body = document.getElementById("content");
const container = document.createElement("div");
const homeDiv = document.createElement("div");
let homeRenderCount = 0;

container.classList.add("container");
container.id = "container";
homeDiv.classList.add("homeDiv");

export default function renderHome() {
  if (homeRenderCount === 0) {
    const icon = document.createElement("img");
    icon.src = heroImgPath;
    icon.alt = "Our humble beginning";
    icon.classList.add("hero-img");

    const heroHeader = document.createElement("h1");
    heroHeader.classList.add("hero-header");
    heroHeader.textContent = "Our Story";

    const hero = document.createElement("div");
    hero.textContent =
      "In the heart of the bustling city, Big Funk Ramen House began as a humble food stall, founded by a passionate chef on a mission to infuse a funky twist into traditional ramen recipes. With bold flavors and a laid-back vibe, it quickly became a local favorite, drawing noodle enthusiasts from all corners of the neighborhood.";
    hero.classList.add("hero-description");

    homeDiv.appendChild(icon);
    homeDiv.appendChild(heroHeader);
    homeDiv.appendChild(hero);

    container.appendChild(homeDiv);
    body.appendChild(container);
    homeRenderCount++;
  } else {
    body.appendChild(container);
  }
}
