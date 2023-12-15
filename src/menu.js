import "./style.css";
import noodle from "./asset/noodles_6108807.png";
import rice from "./asset/rice_6108275.png";
import saladIcon from "./asset/salad_6107954.png";
import iceCreamIcon from "./asset/ice-cream_6108862.png";
import juiceIcon from "./asset/cocktail_6108766.png";
import lemonadeIcon from "./asset/tea_6108846.png";

const body = document.getElementById("content");
const container = document.createElement('div');
container.classList.add('container');
let menuList = [];

class dish {
  constructor(name, price, icon, description) {
    this.name = name;
    this.price = price;
    this.icon = icon;
    this.description = description;
  }
}

const ramen = new dish(
  "Signature Ramen",
  10,
  noodle,
  "Indulge in our $10 signature Ramen, a perfect harmony of savory soy-ginger sauce, expertly crafted for a quick and flavorful dining experience."
);
const friedRice = new dish(
  "Shrimp Fried Rice",
  12,
  rice,
  "Savor our delectable Shrimp Fried Rice priced at $12, a symphony of tender shrimp, fluffy rice, and vibrant veggies wok-tossed to perfection for a delightful burst of flavor in every bite."
);
const salad = new dish(
  "Garden Salad",
  8,
  saladIcon,
  "Delight in our crisp and refreshing Garden Salad at $8, a medley of vibrant greens, juicy tomatoes, and zesty vinaigrette that promises a light and wholesome culinary experience."
);
const iceCream = new dish(
  "Three-Flavor Ice Cream",
  6,
  iceCreamIcon,
  "Experience the joy of our $6 Three-Flavor Ice Cream, a delightful trio of Japanese matcha, creamy white chocolate, and vanilla strawberry, expertly scooped to satisfy your sweet tooth with every spoonful."
);
const juice = new dish(
  "Fruit Juice",
  4,
  juiceIcon,
  "Quench your thirst with our refreshing Fruit Juice priced at $4, a vibrant blend of freshly squeezed fruits that promises a burst of natural flavors in every sip."
);
const lemonade = new dish(
  "Green Lemonade",
  5,
  lemonadeIcon,
  "Sip on our invigorating Green Lemonade Tea for $5, a harmonious fusion of green tea and zesty lemon, creating a revitalizing beverage that strikes the perfect balance between sweet and tangy."
);
menuList.push(ramen);
menuList.push(friedRice);
menuList.push(salad);
menuList.push(iceCream);
menuList.push(juice);
menuList.push(lemonade);

function renderMenu() {
  menuList.forEach((dish) => {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    const icon = document.createElement("img");
    icon.src = dish.icon;
    icon.alt = dish.name + " icon";
    icon.classList.add("dish-icon");

    const title = document.createElement("h3");
    title.textContent = dish.name;

    const price = document.createElement("h3");
    price.textContent = "$" + dish.price;

    const description = document.createElement("p");
    description.textContent = dish.description;

    card.append(icon);
    card.append(title);
    card.append(price);
    card.append(description);

    container.appendChild(card);
    body.appendChild(container);
  });
}

export { renderMenu };
