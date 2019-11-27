let responseNode = document.querySelector('#response-text');

export function main(){
    // code goes here
    const balloon = {
        node: document.querySelector('#balloon-item'),
        defaultSize: 200,
        counter: 0,

        increaseSize() {
            let actualSize = Number(this.node.style.fontSize.match(/\d*/)[0]);
            this.node.style.fontSize = `${actualSize +10}px`;
            this.counter ++;
            if (this.counter > 7) {
                this.explode();
            };
        },

        decreaseSize() {
            let actualSize = Number(this.node.style.fontSize.match(/\d*/)[0]);
            this.node.style.fontSize = `${actualSize -10}px`;
            this.counter--;
            if (this.counter <= 1) {
                this.node.style.fontSize = `${this.defaultSize}px`;
                this.counter = 0;
            };
        },

        explode() {
            this.node.innerHTML= '💥';
            this.node.style.animation = 'explode 5s linear infinite';
            responseNode.style.display = 'block';
            responseNode.innerHTML = this.randomResponse();
        },
            
        randomResponse() {
            const responseArr = ['Deberías parado antes', 'No sigas inchándolo, no va a funcionar', '¡Menudo desastre!', 'Te has cargado nuestro último globo', 'Se acabó la fiesta!'];
            let randomNum = Math.floor(Math.random()*responseArr.length);
            return responseArr[randomNum];
        },

        
    };

    // Initial font size
    balloon.node.style.fontSize = `${balloon.defaultSize}px`;
        
    

    document.addEventListener('keydown', (e) => {
        let keyCode = e.keyCode;
        if (keyCode == 38) {
            if (balloon.node.innerHTML == '💥') {
                responseNode.innerHTML = balloon.randomResponse();
            } else  {
                balloon.increaseSize();
            }
            
        } else if (keyCode == 40) {
            if (balloon.node.innerHTML == '💥') {
                responseNode.innerHTML = balloon.randomResponse();
            } else  {
                balloon.decreaseSize();
            }
        };
    });

    balloon.node.addEventListener('click', () => {
            balloon.explode();
    });
    
}