const matrixParser = require('../Ejercicio1')
let parser = new matrixParser.MatrixParser("0 0 0 0 1| 1 11 01|1 1 11 1|0 11 10|11 0 00")

test('testing matrixParser parser.getMatrix()',()=>{
    expect(parser.getMatrix()).toEqual([
        [ 0, 0, 0, 0, 1 ],
        [ 1, 1, 1, 0, 1 ],
        [ 1, 1, 1, 1, 1 ],
        [ 0, 1, 1, 1, 0 ],
        [ 1, 1, 0, 0, 0 ]
      ])
})

test('testing matrixParser parser.getRow(2) must be [ 1, 1, 1, 1, 1 ]',()=>{
  expect(parser.getRow(2)).toEqual([ 1, 1, 1, 1, 1 ])
})

test('testing matrixParser parser.getTotal() must be the sum of every 1 (15)',()=>{
  expect(parser.getTotal()).toEqual(15)
})