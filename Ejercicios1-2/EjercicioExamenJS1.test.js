const myMatrix = require('./EjercicioExamenJS1');

test('adds ["111|000|110"] to get [[1,1,1],[0,0,0],[1,1,0]]', () => {
    let mat = new myMatrix.MatrixParse("1 1 1|0 0 0|1 1 0");
    expect(mat.getMatrix()).toEqual([[1,1,1],[0,0,0],[1,1,0]]);
})

test('add [1,1,1],[0,0,0],[1,1,0] to get [1,1,1]', () => {
    let mat = new myMatrix.MatrixParse("1 1 1|0 0 0|1 1 0");
    expect(mat.getRow(0)).toEqual([1,1,1]);
})

    
test ('add "1 1 1|0 0 0|1 1 0" to get sumatory of numbers', () => {
    let mat = new myMatrix.MatrixParse("1 1 1|0 0 0|1 1 0");
    expect(mat.getTotal()).toBe(5);
})