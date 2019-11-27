class MatrixParser {
    constructor(seatsStr) {
        this.seatsStr = seatsStr
    }
    getMatrix() {
        return this.seatsStr.split("|").map(x => x.split(" ").map(x => parseInt(x)))
    }
    getRow(num) {
        return this.getMatrix()[num]
    }
    getTotal() {
        return this.getMatrix().reduce((acc, x) => acc + x.reduce((acc, x) => acc + x, 0), 0)
    }
}

module.exports = {MatrixParser}