const array = require('./ejercicio2');
test ('function sum', () => {
    expect(array.fn(1)).toBe(2);
});

test('add function to each element of the array', () => {
    expect(array.applyAll([1,2,3], x => x + 1)).toEqual([2,3,4])
});