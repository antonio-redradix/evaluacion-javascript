
const script = require('./script');


let matrix = new script.MatrixParser("1 1 1|0 1 0|0 0 0");

test('Matrix must be eqal to '+[ [ 1, 1, 1 ], [ 0, 1, 0 ], [ 0, 0, 0 ] ], () => {
    expect(matrix.getMatrix()).toEqual([ [ 1, 1, 1 ], [ 0, 1, 0 ], [ 0, 0, 0 ] ]);
});

test('Row must be: '+[ 0, 0, 0 ], () => {
    expect(matrix.getRow(2)).toEqual([ 0, 0, 0 ]);
});

test('Length must be' + 3, () => {
    expect(matrix.getTotal()).toBe(3);
});