
const func = require('./script');

test('get [5,2,7] give [20,8,28]', () => {
    expect(func.applyAll([5,2,7],(x) => x * 4)).toEqual([20,8,28])
})