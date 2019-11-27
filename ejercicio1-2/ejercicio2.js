let arr = [10,20,30]
function fn (x) {
    add = x + 1
    return add
}

function applyAll (arr, fn) {
    let array = []
    for (let num of arr) {
        let number = fn(num)
        array.push(number)
    }
    return array
}   
console.log(applyAll(arr, fn))