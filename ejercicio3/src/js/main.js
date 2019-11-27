export function main(){
    // code goes here
    console.log('Hello world')
    let size = 100


    let div = document.createElement('div')
    document.body.append(div)
    div.innerHTML = ('🎈')
    div.style.fontSize = "100px"
    document.addEventListener("keydown", (event) => {
        inflate()
    })
    document.addEventListener("keydown", (event) => {
        desinflate()
    })
    document.querySelector('div').addEventListener('click', (event) => {
        boom()
    })

    function inflate () {
        if (event.keyCode === 38){
            if(size <= 340){
                size = size + 40
            }else {
                document.querySelector('div').innerHTML = ('💥') 
                desinflate = 0
            }
            div.style.fontSize = size + "px"
            
        }
    }
    function desinflate () {
        if(event.keyCode === 40){
            if(size >= 140){
                size = size - 40
            }
            div.style.fontSize = size + "px"
        }
    }

    function boom () {
        document.querySelector('div').innerHTML = ('💥')
        desinflate = 0
        inflate = 0
    }
}
