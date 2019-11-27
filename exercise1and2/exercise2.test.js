const exercise = require("./exercise2");

let arr1 = [1,2,3,4,5,6,7,8,9];
let arr2 = ["a","b","c","d","e"];
let func1 = (x) => x+1;
let func2 = (x) => x+" INSERT";

test('Compares the return value of applyAll with the expected result', () => {
    expect(exercise.applyAll(arr1,func1)).toEqual([2,3,4,5,6,7,8,9,10]);
});

test('Compares the return value of applyAll with the expected result', () => {
    expect(exercise.applyAll(arr2,func2)).toEqual(["a INSERT","b INSERT","c INSERT","d INSERT","e INSERT"]);
});