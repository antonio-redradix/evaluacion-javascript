let array=[6,2,8]
function func(x){
    return x+1
}
function applyAll(array, func){
    let narray=[]
    for(let position of array){
        let num=func(position)
        narray.push(num)
    }
    return narray
}
console.log(applyAll(array,func))