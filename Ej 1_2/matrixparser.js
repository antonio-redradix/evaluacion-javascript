class MatrixParser {

    constructor(ocupation) {

        this.myrows = [
            [],
            [],
            []
        ]
        let r1 = ocupation.slice(0, 5)
        let r2 = ocupation.slice(6, 11)
        let r3 = ocupation.slice(12, 17)

        for (let i = 0; i < 5; i++) {
            if (r1[i] != " ") this.myrows[0].push(parseInt(r1[i]))
            if (r2[i] != " ") this.myrows[1].push(parseInt(r2[i]))
            if (r3[i] != " ") this.myrows[2].push(parseInt(r3[i]))
        }


    }

    getMatrix() {
        return this.myrows
    }

    getRow(num) {
        return this.myrows[num]
    }

    getTotal() {
        let ocupadas = 0;
        for (let i = 0; i < this.myrows.length; i++) {
            for (let j = 0; j < this.myrows[i].length; j++) {
                if (this.myrows[i][j] == 1) ocupadas++
            }
        }
        return ocupadas
    }
}

module.exports = {MatrixParser}