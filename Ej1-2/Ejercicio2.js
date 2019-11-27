function applyAll(array,func){
    let solution = []
    array.forEach(element => {
        solution.push(func(element))
    });
    return solution
}
let array = [1,2,3,4]
console.log(applyAll(array, (x)=>{return x+1}))

module.exports = {applyAll}