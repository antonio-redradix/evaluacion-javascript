
class MatrixParser {
    constructor (string, num, matriz){
        this.string = string;
        this.num = num;
        this.matriz = matriz;
    }
    getMatrix(string){
        let spl = string.split("|",)
        let arrDef = []
        for (let a of spl ){
            let def = a.split(" ")
            let arr = def.map(Number)
            arrDef.push(arr)
        }
        this.matriz = arrDef
        console.log(this.matriz)    
    } 
    getRow(num){
        return this.matriz[num]
    }
    getTotal(){

        let array = this.matriz
        let num = 0
        for (let a of array ){
            for (let b of a ){
                    num = num + b
                }
            }
         console.log(num)
    }
}

let prueba =  this.getMatrix

let matrixparser = new MatrixParser

matrixparser.getMatrix("1 1 1|0 1 0|0 0 0")
let row = matrixparser.getRow(1)
console.log(row)
matrixparser.getTotal()






// let prueba = new MatrixParser()

// prueba.getMatrix()
// console.log(this.matriz)