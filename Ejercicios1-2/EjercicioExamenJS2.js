let array = [5, 10, 15, 20]
function func(x){
    suma = x+1
    return suma
}


function applyAll(array, func){
    let myArray = []
    for ( let num of array){
        func(num)
        myArray.push(func(num))
    }      
    return myArray
}

console.log(applyAll(array, func))