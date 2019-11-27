let exercise2 = require ('../exerciseJS2');

test ('it must return an array of element in which each one is the result of aply foo() in the original array', () => {
    let testResult = [2,4,6,8];

    expect(exercise2.applyAll([1,2,3,4], (x) => {return x*2})).toEqual(testResult);
});