function applyAll(arr,func){
    let result = [];
    for (let element of arr){
        result.push(func(element));
    }
    return result;
}

module.exports = {applyAll};