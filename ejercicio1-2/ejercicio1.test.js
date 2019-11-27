const matrix = require('./ejercicio1');
test('transform a string into separates arrays', () => {
    let matx = new matrix.MatrixParser("1 0 0|1 0 0|0 0 0")
    expect(matx.getMatrix()).toEqual([[1,0,0],[1,0,0],[0,0,0]]);
})

test('get row of seats', () => {
    let matx = new matrix.MatrixParser("1 0 0|1 0 0|0 0 0")
    expect(matx.getRow(2)).toEqual([0,0,0]);
})

test('get total of occupated seats', () => {
    let matx = new matrix.MatrixParser("1 0 0|1 0 0|0 0 0")
    expect(matx.getTotal()).toBe(2);
})

