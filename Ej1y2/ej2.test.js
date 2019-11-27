const ej2 = require('./ej2.js')

test('applyAll -> Apply the x+1 to each array elems: [1,3,5], returns: [2,4,6]', () => {
    expect(ej2.applyAll([1,3,5], x=>x+1)).toEqual([2,4,6])
})