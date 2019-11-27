//import "@babel/polyfill"

import { main } from './main'
import '../styles/main.scss'

main()

let count = 0
let balloon = document.querySelector('#balloonDiv')
balloon.innerText = "🎈"
balloon.onclick = ()=>{
    balloon.innerText="💥"
    count=Infinity
}
document.body.onkeydown = function(event){    
    let size = parseInt(window.getComputedStyle(balloon).fontSize)
    
    if(event.keyCode === 38){
        if(count < 7){
            balloon.style.fontSize = size + 30 + 'px'
            count ++
            console.log(count)
        }else{
            console.log("Allahu akbar")
            balloon.innerText="💥"
            count ++
    }
    }else if(event.keyCode === 40){
        if(count > 0 && count<=7){
            balloon.style.fontSize = size - 30 + 'px'
            count --
            console.log(count)
        }
    }
}

