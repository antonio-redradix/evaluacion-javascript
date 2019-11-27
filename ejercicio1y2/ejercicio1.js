class MatrixParser{
	constructor(matrix){
		this.matrix = matrix
		this.arrMatrix = []
	}
	getMatrix(){
		let sala = []
		let fila = []
		for (let element of this.matrix) {
			if(element !== ' '){
				if(element !== "|"){
					fila.push(parseInt(element, 10))
				} else{
					sala.push(fila)
					fila = []
				}
			}
		}
		sala.push(fila)

		return sala
	}

	getMatrix2(){
		var cine = []
		var res = this.matrix.split("|");
 		for(let i = 0; i< res.length; i++){
 			let a = res[Math.floor(i)].split(' ')
 			cine.push(a)
 		}
		console.log(cine)
	}

	getRow(num){
		return this.getMatrix()[num]
	}

	getTotal(){
		let ocupadas = 0
		this.getMatrix().filter(fila => {
			for(let i = 0; i < fila.length; i++){
				if(fila[i] == 1)
					ocupadas++
			}
		})
		return ocupadas
	}
}
module.exports = {MatrixParser}

let m1 = new MatrixParser("1 1 1|0 1 0|0 0 0")

console.log(m1.getMatrix())
m1.getMatrix2()

