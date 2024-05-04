import './styles.css'
export default function createHomeContent(){
    const homeContent = document.createElement('div');
    homeContent.classList.add("home");
    const div = document.createElement("div");
    const span = createSpanWithText('Odin Restaurant')
    div.appendChild(span);
    const spanSecon = createSpanWithText("Testy and affordable!");
    div.appendChild(spanSecon);
    div.appendChild(createButtonWithText("Menu"));
    div.appendChild(createButtonWithText("Reserve"));
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