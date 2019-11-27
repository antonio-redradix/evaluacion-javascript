function applyAll(arr, func){
    let newArr = [];
    for(let element of arr){
        newArr.push(func(element));
    }
    return newArr;
}

module.exports = {applyAll}