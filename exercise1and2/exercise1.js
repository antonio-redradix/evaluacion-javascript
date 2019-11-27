class MatrixParser{
    constructor(str){
        // Con una expresión regular podría comprobarse si str sigue
        // el patrón marcado por el ejercicio: "1 1 1|0 1 0|0 0 0"
        this.str = str;
    }
    getMatrix(){
        let arr = this.str.split("|");
        let matrix = [];
        for (let row of arr){
            matrix.push(row.split(" "));
        }
        for (let i = 0;i<matrix.length;i++){
            for (let j = 0;j<matrix[i].length;j++){
                matrix[i][j] = parseInt(matrix[i][j]);
            }
        }
        this.matrix = matrix;
        return this.matrix;
    }
    getRow(num){
        if (num > this.matrix.length || num < 1){
        } else{
            return this.matrix[num-1];
        }
    }
    getTotal(){
        let counter = 0;
        for (let row of this.matrix){
            for (let element of row){
                if (element == 1){
                    counter = counter + 1;
                }
            }
        }
        return counter;
    }
}

module.exports = {MatrixParser};