const myFunc = require ('./EjercicioExamenJS2');

test ('apply plus 1', () => {
    expect(myFunc.func(2)).toBe(3);
});

test ('apply function to array', () => {
    expect(myFunc.applyAll([2,2,2], x => x+1)).toEqual([3,3,3]);
});