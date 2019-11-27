class MatrixParser {
    constructor(string){
        this.string = string
    }

    getMatrix() {
        let strings = this.string.split('|');
        let result = [];
        for(let strg of strings) {
            let numbers = strg.split(' ')
            numbers = numbers.map(x => parseInt(x))
            result.push(numbers) }
        return result
    }

    getRow(num) {   
        let row = this.getMatrix()
        return (row[num])

    }
    getTotal(){
        let arr = this.getMatrix()
        let nums = 0
        for (let arrs of arr){
            for(let i = 0;i<arrs.length;i++){
                nums = nums + arrs[i]
            }
        }
        return nums
    }
            
        
    
}

let matrixparser = new MatrixParser ("1 1 1|0 1 0|0 0 0")
let strings = matrixparser.getMatrix()
console.log(strings)
let row = matrixparser.getRow(1)
console.log(row)
let totals = matrixparser.getTotal()
console.log(totals)
