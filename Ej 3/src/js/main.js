export function main() {
    let p = new Ballon()
}

class Ballon {
    constructor() {
        this.div = document.createElement("div")
        this.div.innerHTML = "🎈"
        this.inflate = 0
        this.canbeplayedwith = true
        this.div.style.fontSize = "50px"
        this.div.style.width = "50px"
        document.body.appendChild(this.div)
        this.div.addEventListener('click', (event) => {
            this.div.innerHTML = "💥"
            this.canbeplayedwith = false
        })
        document.addEventListener('keydown', (event) => {
            if (this.canbeplayedwith) {
                if (event.key == 'ArrowUp') {
                    if (this.inflate === 7) {
                        this.div.innerHTML = "💥"
                        this.canbeplayedwith = false
                    } else {
                        this.inflate++
                        let height = this.inflate.toString() + "00px"
                        this.div.style.fontSize = height;
                        this.div.style.width = height;
                    }

                } else if (event.key == 'ArrowDown') {
                    if (this.inflate !== 0) {
                        this.inflate--
                        if (this.inflate === 0) {
                            this.div.style.fontSize = "50px"
                            this.div.style.width = "50px"
                        } else {
                            let height = this.inflate.toString() + "00px"
                            this.div.style.fontSize = height;
                            this.div.style.width = height;
                        }

                    }
                }

            }


        })
    }



}