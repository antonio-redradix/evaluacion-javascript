
let div = document.createElement('div')
document.body.appendChild(div);
div.style.width = "300px";
div.style.height = "200px";

let parrafo = document.createElement('p');
div.appendChild(parrafo);
level = 50
div.style.fontSize = level + "px"

let texto = document.createTextNode('🎈');
parrafo.appendChild(texto);

div.addEventListener("click", myFunction);
function myFunction(){
    level = 120
    div.style.fontSize = level + "px"
    div.innerHTML = '💥';
}

document.addEventListener('keydown', (event) => {
    if (event.keyCode === 38) {
        if (level >= 120) {
            div.innerHTML = '💥';
            console.log('explota')
        }else {
            level = level + 10
            div.style.fontSize = level + "px"
            console.log('Se hincha')
        }   
    } else if (event.keyCode === 40){
        if (level <= 50) {
            level = 50
            div.style.fontSize = level + "px"
            console.log('No se deshincha mas')   
        }else {
            if ( level >= 120){
                level = 120
            }else {
                level = level - 10
                div.style.fontSize = level + "px"
                console.log('Se deshincha')}
            } 
        } 
});