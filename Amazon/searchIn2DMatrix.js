/*
Input: 
matrix = 
  [
    [1,4,7,11,15],
    [2,5,8,12,19],
    [3,6,9,16,22],
    [10,13,14,17,24],
    [18,21,23,26,30]
  ], 

  target = 5


Output: true

*/ 


const searchMatrix= (matrix, target) =>{

  if(matrix == null || matrix.length==0) return false;

  let r = 0;
  let c = matrix[0].length-1;

  while(c>=0 && r<matrix.length){
    let number = matrix[r][c];

    if(number === target) return true;

    else if (number > target){
      c--
    }else{
      r++
    }
  }

  return false;



}


console.log(searchMatrix(
  [
    [1,4,7,11,15],
    [2,5,8,12,19],
    [3,6,9,16,22],
    [10,13,14,17,24],
    [18,21,23,26,30]
  ], 5
))

console.log(searchMatrix(
  [
    [1,4,7,11,15],
    [2,5,8,12,19],
    [3,6,9,16,22],
    [10,13,14,17,24],
    [18,21,23,26,30]
  ], 20
))