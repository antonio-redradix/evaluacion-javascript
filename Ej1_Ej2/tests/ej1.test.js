const EJ1 = require('../ej1');

let ej1 = new EJ1.MatrixParser("1 1 1|0 1 0|0 0 0")

test('getMatrix()', () => {
    expect(ej1.getMatrix()).toEqual([[1, 1, 1], [0, 1, 0], [0, 0, 0]]);
});

test('getRow()', () => {
    expect(ej1.getRow(1)).toEqual([0, 1, 0]);
});

test('getTotal()', () => {
    expect(ej1.getTotal()).toBe(4);
});