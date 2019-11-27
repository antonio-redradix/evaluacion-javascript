const matrix= require('./exercise1')
test ('get matrix', ()=>{
    let cinema = new matrix.MatrixParser('0 0 0|1 1 1|0 0 0')
    expect(cinema.getMatrix()).toEqual([[0,0,0],[1,1,1],[0,0,0]])
})
test ('get row',()=>{
    let cinema = new matrix.MatrixParser('0 0 0|1 1 1|0 0 0')
    expect(cinema.getRow(0)).toEqual([0,0,0])
})
test ('get seat', () => {
    let cinema = new matrix.MatrixParser('0 0 0|1 1 1|0 0 0')
    expect(cinema.getTotal()).toBe(3)
})