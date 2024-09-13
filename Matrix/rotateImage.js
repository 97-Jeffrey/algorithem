/*

   You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

   You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
   DO NOT allocate another 2D matrix and do the rotation.

   Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
   Output: [[7,4,1],[8,5,2],[9,6,3]]

*/


/*
    we swap row and column of each element and reverse the row
*/


var rotate = function(matrix) {
    for(let r = 0; r<matrix.length; r++){
        for(let c = r; c<matrix[0].length; c++){
            [matrix[r][c], matrix[c][r]] =[matrix[c][r], matrix[r][c]] 
        }
    }

    for(let row of matrix){
        row.reverse()
    }
};