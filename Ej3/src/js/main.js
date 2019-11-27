export function main() {

    let initPixels = 60
    let maxInflation = 7
    let pixelsPerInflation = 10

    let currentInflation
    let currentPixels

    function initParameters() {
        currentInflation = 0
        currentPixels = initPixels
    }

    function initScene() {
        initParameters()
        createBalloon()
    }

    let currentBalloon

    class balloon {
        constructor() {
            this.balloon
            this.exploded = false
        }
        render() {
            this.balloon = document.createElement("div")
            this.balloon.innerHTML = "🎈"
            this.balloon.classList.add("balloon")
            parent = document.getElementById("balloonContainer")
            parent.appendChild(this.balloon)
            this.balloon.onclick = () => {(this.explode())}      
        }
        inflate() {
            if (currentInflation < maxInflation && !this.exploded) {
                currentPixels += pixelsPerInflation
                currentInflation += 1
                this.balloon.style["font-size"] = currentPixels.toString()+"px"
            }
            else {
                this.explode()
            }
        }
        deinflate() {
            if (currentInflation > 0 && !this.exploded) {
                currentPixels -= pixelsPerInflation
                currentInflation -= 1
                this.balloon.style["font-size"] = currentPixels.toString()+"px"
            }
        }
        explode() {
            this.exploded = true
            this.balloon.style["transition"] = "1s"
            this.balloon.style["font-size"] = "0px"
            this.balloon.innerHTML = "💥"
            setTimeout(function () {
                this.destroy
                initParameters()
                currentBalloon = null
                button.style["display"] = "block"
            }, 1000);
        }
    }

    let button = document.getElementById("balloonCreator")
    button.onclick = createBalloon

    function createBalloon() {
        if(currentBalloon == null) {
            button.style["display"] = "none"
            let newballoon = new balloon()
            currentBalloon = newballoon
            currentBalloon.render()
        }
    }

    document.onkeydown = checkKey

    function checkKey (e) {
        if (e.keyCode == '38') {
            if(currentBalloon != null) {
                currentBalloon.inflate()
            }
        }
        else if (e.keyCode == '40') {
            if(currentBalloon != null) {
                currentBalloon.deinflate()
            }
        }
    }

    initScene()
}