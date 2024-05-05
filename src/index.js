import './styles.css';
import createHomeContent from './createHomeContent.js';
import createMenuContent from './menu.js';
import createContactContent from './contact.js';  
const content = document.querySelector('#content');
function removeAllChildren(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}
function handleMenuClick (){
  removeAllChildren(content);
  content.appendChild(createMenuContent());
}
function handleHome(){
    removeAllChildren(content);
    content.appendChild(createHomeContent());
    document.querySelectorAll(".menu-button").forEach((e)=>e.addEventListener('click',handleMenuClick));
document.querySelectorAll(".about-button").forEach((e)=>e.addEventListener("click",handleAbout))


}
function handleAbout(){
    removeAllChildren(content);
    content.appendChild(createContactContent());
}

content.appendChild(createHomeContent());
document.querySelectorAll(".menu-button").forEach((e)=>e.addEventListener('click',handleMenuClick));
document.querySelector(".home-button").addEventListener('click',handleHome);
document.querySelectorAll(".about-button").forEach((e)=>e.addEventListener("click",handleAbout))