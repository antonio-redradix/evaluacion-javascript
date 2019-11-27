class MatrixParser{
    constructor(matriz){
        this.matriz = matriz
    }
    getMatrix(){
        let stringSplitted = this.matriz.split("|")
        let array = []
        for(let i=0; i<stringSplitted.length;i++){
            let aux = []
            for(let j=0; j<stringSplitted[i].length;j++){
                let num = parseInt(stringSplitted[i][j])
                if(stringSplitted[i][j] !== " ")
                    aux.push(num)
            }
            array.push(aux)
        }
        return array
    }
    getRow(num){
        let m = this.getMatrix()
        return m[num]
    }
    getTotal(){
        let m = this.getMatrix()
        let contador = 0
        for(let i=0; i<m.length; i++){
            for(let j=0; j<m[i].length;j++){
                if (m[i][j] == 1)
                    contador++
            }
        }
        return contador
    }
}
module.exports = {MatrixParser}