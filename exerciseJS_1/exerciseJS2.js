let applyAll = (arr, foo) => {
    let arrResult = [];
    for (let i of arr) {
        arrResult.push(foo(i))
    }
    return arrResult;
};


module.exports = {applyAll};