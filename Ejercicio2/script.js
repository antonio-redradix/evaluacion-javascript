function applyAll(arr,func){
    let arrFinal = []
    for (let num of arr){    
        num = func(num)
        arrFinal.push(num)  
    }console.log(arrFinal)
}
applyAll([5,2,7],(x) => x * 4)


module.exports = {applyAll};