export function main(){
    // code goes here
    let size = 40;

    document.body.setAttribute("style","width:1000px;height:500px;display:flex;align-items:center;justify-content:center;");
    let div = document.createElement("div");
    div.innerHTML = "🎈";
    div.setAttribute("style",`width:100px;display:flex;font-size: ${size}px;`);
    document.body.appendChild(div);

    div.onclick = function (event){
        div.innerHTML = "💥";
        window.onkeydown = undefined;
    }

    window.onkeydown = function (event){
        if(event.keyCode === 38){
            size = size + 10;
            if (size > 110){
                div.innerHTML = "💥";
                size = 110;
                window.onkeydown = undefined;
            }
            div.setAttribute("style",`width:100px;display:flex;font-size: ${size}px;`);
        }
        if(event.keyCode === 40){
            if (size > 40){
                size = size - 10;
                div.setAttribute("style",`width:100px;display:flex;font-size: ${size}px;`);
            }
        }
    }
}