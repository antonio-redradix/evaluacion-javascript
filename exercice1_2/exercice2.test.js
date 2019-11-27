const map = require('./exercice2')

test ('arrayMap',() =>{
let array=[1,2,3]
function func(x){
    return x+1
}
expect(map.applyAll(array,func)).toEqual([2,3,4])
} )