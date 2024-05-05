import './styles.css'
export default function createHomeContent(){
    const homeContent = document.createElement('div');
    homeContent.classList.add("home");
    const div = document.createElement("div");
    const span = createSpanWithText('Odin Restaurant')
    div.appendChild(span);
    const spanSecon = createSpanWithText("Testy and affordable!");
    div.appendChild(spanSecon);
    const menuButton = createButtonWithText("Menu");
    menuButton.classList.add("menu-button");
    div.appendChild(menuButton);
    const aboutButton = createButtonWithText("Reserve");
    aboutButton.classList.add("about-button");
    div.appendChild(aboutButton);
    homeContent.appendChild(div);
    return homeContent;
}

function createSpanWithText(text){
    const span =  document.createElement("span");
    span.textContent = text;
    return span ;

}
function createButtonWithText(text){
    const button = document.createElement("button");
    button.textContent = text;
    return button;
}