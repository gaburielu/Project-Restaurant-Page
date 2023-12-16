import "./style.css";

const body = document.getElementById("content");
const container = document.createElement("div");
const aboutDiv = document.createElement("div");
let aboutRenderCount = 0;

container.classList.add("container");
container.id = "container";
aboutDiv.classList.add("aboutDiv");

const items = [
  {
    text: "Background Image by Freepik",
    link: "https://www.freepik.com/free-photo/delicious-ramen-with-chopsticks-arrangement_65550417.htm#query=food%20cartoon&position=17&from_view=search&track=ais&uuid=d33ec93b-e1fb-425d-ac89-06bff40e18a9",
  },
  {
    text: "Food Truck Image by Kireyonok_Yuliya on Freepik",
    link: "https://www.freepik.com/free-photo/food-truck-xa-with-hot-dogs-burgers-brutal-bearded-chef_1610883.htm#query=stall%20food&position=4&from_view=search&track=ais&uuid=0eb3eeee-2557-4829-8db1-61149a5fe241",
  },
  {
    text: "Noodles Icon by Freepik",
    link: "https://www.freepik.com/icon/noodles_6108807#fromView=resource_detail&position=6",
  },
  {
    text: "Rice Icon by Freepik",
    link: "https://www.freepik.com/icon/rice_6108275#fromView=resource_detail&position=30",
  },
  {
    text: "Salad Icon by Freepik",
    link: "https://www.freepik.com/icon/salad_6107954#fromView=resource_detail&position=48",
  },

  {
    text: "Ice Cream Icon by Freepik",
    link: "https://www.freepik.com/icon/ice-cream_6108862#fromView=resource_detail&position=3",
  },
  {
    text: "Tea Icon by Freepik",
    link: "https://www.freepik.com/icon/tea_6108846#fromView=resource_detail&position=3",
  },
  {
    text: "Juice/Cocktail Icon by Freepik",
    link: "https://www.freepik.com/icon/cocktail_6108766#fromView=resource_detail&position=7",
  },
];

const footerContent = `
Made by ©
<a href="https://github.com/Gaburielu" class="link">Gaburielu</a> 2023
|
<a href="https://www.theodinproject.com/about" class="link">The Odin Project</a>
|
<a href="#" class="link">Source Code & Credit</a>
`;

function renderAbout() {
  if (aboutRenderCount === 0) {
    const creditHeader = document.createElement("h1");
    creditHeader.classList.add("credit-header");
    creditHeader.textContent = "Credit";

    const creditList = document.createElement("ol");
    creditList.classList.add("credit-ol");
    items.forEach((item) => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.href = item.link;
      link.textContent = item.text;
      listItem.appendChild(link);
      creditList.appendChild(listItem);
    });

    const footerDiv = document.createElement("div");
    footerDiv.classList.add("footer");
    footerDiv.innerHTML = footerContent;

    aboutDiv.appendChild(creditHeader);
    aboutDiv.appendChild(creditList);
    aboutDiv.appendChild(footerDiv);

    container.appendChild(aboutDiv);
    body.appendChild(container);
    aboutRenderCount++;
  } else {
    body.appendChild(container);
  }
}

export { renderAbout };
