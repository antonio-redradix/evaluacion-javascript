// Ejercicio 1

class MatrixParser {
    constructor(string){
        this.string = string;
    }
    getString(){
        return this.string;
    }
    getMatrix(){
        let result = this.getString().split('|')
        return result.map(row => row.split(' ').map(seat=> Number(seat)));
    }
    getRow(num){
        return this.getMatrix()[num];
    }
    getTotal(){
        return this.getString().match(/1/g).length
    }
}


// Ejercicio 2
const applyAll = (array, func) => {
    let result = [];
    array.forEach(element => result.push(func(element)));
    return result;
};


module.exports = {MatrixParser, applyAll}