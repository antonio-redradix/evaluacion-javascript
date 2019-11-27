const Ejercicio2 = require('../Ejercicio2')

let arrayTest = [1,2,3,4]

test('test applyAll(arrayTest, f) must return [2,3,4,5]',()=>{
    expect(Ejercicio2.applyAll(arrayTest, (x)=>{return x+1})).toEqual([ 2, 3, 4, 5 ])
})