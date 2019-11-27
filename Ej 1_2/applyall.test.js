let x = require('./applyall')
test('Applies function to a given array',()=>{
    let array=[3,4,5,6,63,'a']
    expect(x.applyAll(array,(num)=>num+5)).toEqual([ 8, 9, 10, 11, 68, 'a5' ])
});




