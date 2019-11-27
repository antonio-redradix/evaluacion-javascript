export function main(){
    let contador = 0
    document.body.onkeydown = (event) => {
        if (event.keyCode == 38){
            contador++
            if (contador < 7){
                let aumento = parseInt(window.getComputedStyle(document.getElementById("ballon")).fontSize)
                aumento = aumento + 50
                document.getElementById("ballon").style.fontSize = aumento+"px"
            }
            else if (contador == 7){
                document.getElementById("ballon").innerText = "💥"
                contador = Infinity
            }
        }
        else if (event.keyCode == 40){
            let decremento = parseInt(window.getComputedStyle(document.getElementById("ballon")).fontSize)
            if ((decremento > 50) && (contador < 8)){
                decremento = decremento - 50
                document.getElementById("ballon").style.fontSize = decremento+"px"
                contador--
            }
        }
    }
    document.getElementById("ballon").onclick = (event) => {
        document.getElementById("ballon").innerText = "💥"
        contador = Infinity
    }
}