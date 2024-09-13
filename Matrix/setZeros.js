/*

   Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

   You must do it in place.


   Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
   Output: [[1,0,1],[0,0,0],[1,0,1]]s
 */


const setZeros = (matrix) =>{

   let zeros = [];
   for(let i = 0; i<matrix.length; i++){
    for(let j=0; j<matrix[0].length; j++){
        if(matrix[i][j] ===0){
            zeros.push([i,j])
        }
    }
   }

   for(let each of zeros){
      let [row,  col] = each;

      for(let i=0; i<matrix[row].length; i++){
        matrix[row][i] = 0      
      }

      for (j = 0; j<matrix.length; j++){
        matrix[j][col] = 0
      }
   }
}