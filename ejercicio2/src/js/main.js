class Globo{
	constructor(ballon){
		this.ballon = ballon
		this.ballonSize
		this.increaseNum = 0
		this.ballonStatus = true
		this.a
	}
	/*
		Inicializa el balon con sus eventos
	*/
	init(newBallon){
		this.a = window.getComputedStyle(document.getElementById("ballon")).fontSize;
		document.addEventListener('keydown', function(event) {
			if(event.key === "ArrowUp"){
				newBallon.increaseSize()
			} else if(event.key === "ArrowDown"){
				newBallon.decreaseSize()
			}
		});
		document.getElementById("ballon").addEventListener("click", () => this.explosion(event))
	}
	increaseSize(){
		if(this.increaseNum < 7 && this.ballonStatus){
			var fontSize = parseInt(this.a);
			fontSize = fontSize + 10 + "px";
			this.a = fontSize
			document.getElementById("ballon").style.fontSize = fontSize;
			this.increaseNum++
		} else{
			this.ballonStatus = false
			let ballonHtml = document.getElementById("ballon")
			ballonHtml.innerHTML = "💥";
		}
	}
	    
	decreaseSize(){
		if(this.increaseNum > 0 && this.ballonStatus){
			var fontSize = parseInt(this.a);
			fontSize = fontSize - 10 + "px";
			this.a = fontSize
			document.getElementById("ballon").style.fontSize = fontSize;
			this.increaseNum--
		}
	}
	explosion(event){
		this.ballonStatus = false
		let ballonHtml = document.getElementById("ballon")
		ballonHtml.innerHTML = "💥";
	}
}

let ballonHtml = document.getElementById("ballon")
let g1 = new Globo(ballonHtml)
g1.init(g1)



