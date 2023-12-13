import './style.css';
import './normalize.css'
import foo from './menu';
import {bar} from './home';
import {fob} from './about';


const body = document.getElementById("content");

const card = document.createElement("div");
card.classList.add("card");
card.textContent = "fly you fools";
body.appendChild(card);

bar();
fob();

function createFooter(){
    const footer = document.createElement("div");

}

function clearContainer(){

}




