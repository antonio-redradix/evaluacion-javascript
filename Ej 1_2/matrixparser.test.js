let x = require('./matrixparser')

test('Returns matrix', () => {
    let obj = new x.MatrixParser("1 1 1|0 1 0|0 0 0")
    expect(obj.getMatrix()).toEqual( [ [ 1, 1, 1 ], [ 0, 1, 0 ], [ 0, 0, 0 ] ]);
   });

   test('Returns asked row of  matrix', () => {
    let obj = new x.MatrixParser("1 0 1|0 1 0|0 1 1")
    expect(obj.getRow(1)).toEqual( [ 0, 1, 0]);
   });

   test('Returns number of seats', () => {
    let obj = new x.MatrixParser("0 0 0|0 1 0|0 1 0")
    expect(obj.getTotal()).toEqual(2);
   });

