export function main(){
    console.log('Hello world')

    let size = 100

    let div= document.createElement("div")
    document.body.append(div)
    div.innerHTML="🎈"
    div.style.fontSize = "100px"
    document.addEventListener("keydown", (event) => {
        grow()
    })
    document.addEventListener("keydown", (event) => {
        decrease()
    })
    document.querySelector("div").addEventListener("click", (event) => {
        explote()
    })

    function grow() {
        if (event.keyCode === 38){
            if (size <= 340) { 
                size = size + 40}
            else {document.querySelector("div").innerHTML="💥"
            decrease = 0
        }
            div.style.fontSize = size + "px"
        }
    }
    function decrease(){
        if (event.keyCode === 40){
            if (size >= 140) {
                size = size - 40}
            div.style.fontSize = size + "px"
        }
    }

    function explote (){
        document.querySelector("div").innerHTML="💥"
        decrease = 0
        grow = 0
    }

}

