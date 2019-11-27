export function main(){
    let balloon = document.querySelector('div'),
        size = 50,
        counter = 0,
        exploted = false;

    const changeSize = ()=> balloon.style.fontSize = `${size}px`;
    changeSize()

    const inflate = ()=>{
        size += 10;
        changeSize()
    }

    const deflate = () =>{
        size -= 10;
        changeSize();
    }

    const explote = ()=> {
        balloon.innerHTML = '💥';
        exploted = true;
    };

    window.addEventListener('keydown', (event)=>{
        if (!exploted) {
            if (event.keyCode === 38){
                counter++;
                counter < 8 ? inflate() : explote();
            }
            if (event.keyCode === 40 && counter>0){
                counter--;
                deflate();
            }
        }
    })

    balloon.addEventListener('click', () => explote())
}