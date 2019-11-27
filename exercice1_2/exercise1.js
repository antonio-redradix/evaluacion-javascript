class MatrixParser{
    constructor(string){
    this.string=string
    this.rows=this.string.split("|")
    }
    getMatrix(){
     let array=[]
       for (let row of this.rows){
           let numbers = row.split(" ")
           let nums=numbers.map(x=>parseInt(x))
           array.push(nums)
        }
        return array
    }

     getRow(num){
         let matrix=this.getMatrix()
         if(num<=matrix.length){
            matrix[num]
         }return matrix[num]
        
        }
    getTotal(){
        let matrix=this.getMatrix()
        let i=0
        for (let rows of matrix){
            for(let seat of rows){
                if(seat>=1){
                    i=i+1
                }

            }
        }return i
    }
 
    }

