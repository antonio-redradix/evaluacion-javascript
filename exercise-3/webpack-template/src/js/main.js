export function main(){
    
    class Balloon{
        constructor(){
            this.balloon = document.createElement('div');
            this.size = 15;
            this.MAX_SIZE = this.size * 10;
            this.exploded = false;
            this.balloon.innerHTML = '🎈';
            this.balloon.addEventListener("click", () => this.explode());
            document.body.appendChild(this.balloon);
        }
        getState(){
            return this.exploded;
        }
        
        explode(){
            this.balloon.innerHTML = '💥';
            this.exploded = true;
        }

        increaseSize(){
            if(this.size <= this.MAX_SIZE){
                this.size += 20;
                this.balloon.style.fontSize = ""+this.size+"px"
            }else{
                this.explode();
            }
        }   
        
        decreaseSize(){
            this.size -= 20;
            this.balloon.style.fontSize = ""+this.size+"px"
        }
        
    }
    
    let balloon = new Balloon();

    function pressedKey(event){
        if(!balloon.getState()){
            switch(event.keyCode){
                case 38: balloon.increaseSize();
                    break;
                case 40: balloon.decreaseSize();
                    break;
            }
        }
    }
    document.onkeydown = pressedKey;
}