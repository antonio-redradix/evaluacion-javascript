class MatrixParser {
    constructor (string) {
        this.string = string;
    };
    getMatrix () {
        let arrOfStr = this.string.split('|');
        let arrOfArr = arrOfStr.map((elem) => elem.split(' '));
        this.arrOfRows = arrOfArr.map((arr) => {
            return arr.map((x) => Number(x));
        }); 
        return this.arrOfRows;
    };
    getRow (num) {
        return this.arrOfRows[num];
    };
    getTotal () {
        this.occupiedSeats = 0;
        this.getMatrix().forEach((row) => {
            row.forEach((seat) => {
                return (seat == 1)? this.occupiedSeats ++ : this.occupiedSeats;
            });
        });
        return this.occupiedSeats;
    };
};

module.exports = {MatrixParser};