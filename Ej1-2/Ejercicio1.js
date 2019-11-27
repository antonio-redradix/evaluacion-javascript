class MatrixParser{
    constructor(stringButacas){
        this.butacas = []
        this.aforo = 0
        this.ocupadas = 0
        let butacasAux = stringButacas.split('|')

        butacasAux.forEach(element => {
            let auxFila = []
            for(let char of element){
                if(char !== ' '){
                    auxFila.push(parseInt(char))
                    this.aforo ++
                    if(char === '1') this.ocupadas++
                }
                
            }
            this.butacas.push(auxFila)
        });

    }

    getMatrix(){
        return this.butacas
    }

    getRow(index){
        return this.butacas[index]
    }

    getTotal(){
        return this.ocupadas
    }
}
module.exports = {MatrixParser}

