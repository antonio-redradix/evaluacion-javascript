let exercise1 = require ('../exerciseJS1');

let cinema = new exercise1.MatrixParser("1 1 1|0 1 0|0 0 0");

test ('must return the values of the string in form of a matrix', () => {
    let cinemaMatrix = [[1, 1, 1], [0, 1, 0], [0, 0, 0]];

    expect(cinema.getMatrix()).toEqual(cinemaMatrix);
});

test ('must return a specific row (first one is 0), the test is made with the second row (number 1)', () => {
    let secondRow = [0,1,0];

    expect(cinema.getRow(1)).toEqual(secondRow);
});

test ('must return the total amount of seat occupied', () => {
    let occupiedSeat = 4;

    expect(cinema.getTotal()).toEqual(occupiedSeat);

});