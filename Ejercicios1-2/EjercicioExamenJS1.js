//Ejercicio 1

class MatrixParse{
    constructor(string){
        this.string = string
    }

    getMatrix(){
        let myStrings = this.string.split("|")
        let myArray = [];
        for ( let str of myStrings){
            let numbers = str.split(" ")
            numbers = numbers.map(x => parseInt(x))
            myArray.push(numbers)   
        }                 
        return myArray
    }  

    getRow(num){
        let rows = this.getMatrix()
        return rows[num]
    }

    getTotal(){
        let numberTotal = this.getMatrix()
        let i = 0
        for( let num of numberTotal){
            for( let sit of num){
                if (sit>=1){
                i= i + 1}
            }
        }return i
    }
}
let matParse = new MatrixParse("1 1 1|0 1 0|0 0 0")
let matrix = matParse.getMatrix()
// console.log(matrix)
let row = matParse.getRow(2)
// console.log(row)
let total = matParse.getTotal()
console.log(total)

module.exports = {MatrixParse}
