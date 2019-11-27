const exercise = require('./app');

let cinema = new exercise.MatrixParser("1 1 1|0 1 0|0 0 0");


test('transform string "1 1 1|0 1 0|0 0 0" into array [[1, 1, 1], [0, 1, 0], [0, 0, 0]]', ()=>{
    expect(cinema.getMatrix()).toEqual([[1, 1, 1], [0, 1, 0], [0, 0, 0]]);
});

test('second row in the cinema to equal [0,1,0]', ()=>{
    expect(cinema.getRow(1)).toEqual([0,1,0]);
});

test('the total number of occupied seats (amount of 1) to equal 4', ()=>{
    expect(cinema.getTotal()).toBe(4);
});

test('add 1 (x => x+1) to the array [1,2,3] to equal [2,3,4]', ()=>{
    expect(exercise.applyAll([1,2,3], x=>x+1)).toEqual([2,3,4]);
});