const ej2 = require('../ej2.js');

test('applyAll()', () => {
    expect(ej2.applyAll([1,2,3],(x)=>x+2)).toEqual([3,4,5]);
});