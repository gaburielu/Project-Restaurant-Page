import './style.css';
import background from './asset/background.jpg';

export default function component() {
    const element = document.createElement('div');
 
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
 
   // Add the image to our existing div.
   const myIcon = new Image();
   myIcon.src = background;
 
   element.appendChild(myIcon);
 
    return element;
  }