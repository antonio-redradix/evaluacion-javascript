const ej1 = require('./ej1')

test('getMatrix -> returns matrix: [[1, 1, 0], [0, 1, 0], [0, 0, 0]]', () => {
    let testSeats = new ej1.MatrixParser("1 1 0|0 1 0|0 0 0")
    expect(testSeats.getMatrix()).toEqual([[1, 1, 0], [0, 1, 0], [0, 0, 0]])
})