import './styles.css';
export default function createContactContent(){
    const div = document.createElement("div");
    div.classList.add("contact");
    const h2 = document.createElement("h1");
    h2.textContent = "Contact Us";
    div.appendChild(h2);
    const containerDiv = document.createElement("div");
    const leftDoiv = document.createElement("div");
    const d1 = document.createElement("div");
    const d2 = document.createElement("div");
    d1.textContent = 'Phone: 123-123-123'
    d2.textContent = "Emain: odin@odin.com"
    leftDoiv.appendChild(d1);
    leftDoiv.appendChild(d2);
    const righDiv = document.createElement("div")
    righDiv.textContent = "Location"
    containerDiv.appendChild(leftDoiv);
    containerDiv.appendChild(righDiv);
    div.appendChild(containerDiv);
    return div;
}