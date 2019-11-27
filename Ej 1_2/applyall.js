function applyAll(array,func){
    let newarray=[]
    for(let i=0;i<array.length;i++){
        newarray[i]=func(array[i])
    }
    return newarray
}


module.exports = {applyAll}