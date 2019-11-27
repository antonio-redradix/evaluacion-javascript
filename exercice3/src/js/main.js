export function main(){
    // code goes here
    let size = 80
    let div = document.createElement("div")
    document.body.append(div)
    div.innerHTML = "🎈"
    div.style.fontSize = "100px"
    let index=0
    document.addEventListener("keyup", (event) =>{
        increase()   
    })
    
    function increase(){
        if (event.keyCode === 38){
            
            size = size + 50
            if(index<=7){
            index=index+1
            div.style.fontSize = size + "px"}
            if(index>7){
                document.querySelector("div").innerHTML="💥"
               
        }
        }
    }
    document.addEventListener("keyup", (event)=>{
        decrease()
    })
    document.addEventListener("click", (event)=>{
        document.querySelector("div").innerHTML="💥"
    })

    function decrease(){
        if (event.keyCode === 40){
            
            size = size - 50
            if(index>0 && index<8){
            index=index-1
            div.style.fontSize = size + "px"
        }
        }
    }
                    
            
            

        
    
}
            