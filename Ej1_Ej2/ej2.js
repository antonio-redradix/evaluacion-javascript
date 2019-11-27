function applyAll(array,func){
    let newArray = array
    for(i=0;i<array.length;i++)
        newArray[i]=func(array[i])
    return newArray
}
/* let array = [1,2,3]
console.log(applyAll(array, (x)=>x+2)) */
module.exports = {applyAll}