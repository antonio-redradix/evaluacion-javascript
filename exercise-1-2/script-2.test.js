const script_2 = require('./script-2');

let map = script_2.applyAll;

test('The array obtained must be equal to '+[2, 3, 4], () => {
    expect(map([1, 2, 3], x => x + 1)).toEqual([2, 3, 4]);
});
