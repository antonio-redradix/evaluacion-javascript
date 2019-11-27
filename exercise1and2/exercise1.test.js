const exercise = require("./exercise1");

let obj = new exercise.MatrixParser("1 1 1|0 1 0|0 0 0|0 0 0|1 0 0");

test('Compares obj with the expected result of getMatrix method', () => {
    expect(obj.getMatrix()).toEqual([[1,1,1],[0,1,0],[0,0,0],[0,0,0],[1,0,0]]);
});

test('Compares obj with the expected result of getRow method', () => {
    expect(obj.getRow(3)).toEqual([0,0,0]);
});

test('Compares obj with the expected result of getTotal method', () => {
    expect(obj.getTotal()).toBe(5);
});