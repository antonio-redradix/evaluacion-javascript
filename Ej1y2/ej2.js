function applyAll(arr, func) {
    let aux = []
    arr.forEach(elem => {aux.push(func(elem))});
    return aux
}

module.exports = {applyAll}