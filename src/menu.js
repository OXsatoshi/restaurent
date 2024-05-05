import "./styles.css";
import foodImage from "./img/Ma-Po-Tofu-1024x576.jpg"
export default function createMenuContent(){
    const div = document.createElement("div");
    div.classList.add('menu');
    div.appendChild(createDiv(  ));
    div.appendChild(createDiv());
    div.appendChild(createDiv());
    div.appendChild(createDiv(  ));
    div.appendChild(createDiv());
    div.appendChild(createDiv());
    div.appendChild(createDiv(  ));
    div.appendChild(createDiv());
    return div ;
}

function createDiv(){
    const div = document.createElement("div");
    const spanDis = document.createElement("span");
    const spanPrice = document.createElement("span");
    spanDis.textContent = "Awesome plate";
    spanPrice.textContent = "$ 1.99"
    const food = new Image();
    food.src = foodImage;
    const divspan = document.createElement("div");
    divspan.appendChild(spanDis);
    divspan.appendChild(spanPrice);
    div.appendChild(food);
    div.appendChild(divspan);
    
    return div;
}
