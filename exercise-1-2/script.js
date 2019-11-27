class MatrixParser{
    constructor(strSeats){
        this.seats = [];
        let aux = strSeats.split('|');
        for(let seat of aux){
            this.seats.push(seat.split(' ').map(Number));
        }
    }

    getMatrix(){
        return this.seats;
    }

    getRow(num){
        return this.seats[num];
    }

    getTotal(){
        return this.seats.length;
    }
}

module.exports = {MatrixParser};