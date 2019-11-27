const ejercicio1 = require('./ejercicio1.js');
const ejercicio2 = require('./ejercicio2.js');

/*
	EJERCICIO 1 TEST
*/
let objTest = new ejercicio1.MatrixParser('1 1 1|0 1 0|0 0 0')

test('1 1 1|0 1 0|0 0 0 expect to be [[1, 1, 0], [0, 1, 0], [0, 0, 0]]', () => {
	expect(objTest.getMatrix()).toEqual([[ 1, 1, 1 ], [ 0, 1, 0 ], [ 0, 0, 0 ]]);
});

test('getRow(1) of "1 1 1|0 1 0|0 0 0" expect to be [0, 1, 0]', () => {
	expect(objTest.getRow(1)).toEqual([ 0, 1, 0 ]);
});

test('getTotal of "1 1 1|0 1 0|0 0 0" expect to be 4 ', () => {
	expect(objTest.getTotal()).toEqual(4);
});

/*
	EJERCICIO 2 TESTS
*/

test('applyAll([0,1,2,3], x => x+1) expect to be [1,2,3,4]', () => {
	expect(ejercicio2.applyAll([0,1,2,3], x => x+1)).toEqual([1,2,3,4]);
});