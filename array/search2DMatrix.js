/* 
    You are given an m x n integer matrix matrix with the following two properties:

    Each row is sorted in non-decreasing order.
    The first integer of each row is greater than the last integer of the previous row.
    Given an integer target, return true if target is in matrix or false otherwise.

    You must write a solution in O(log(m * n)) time complexity.

    Input: matrix = [
                        [1, 3, 5, 7],
                        [10,11,16,20],
                        [23,30,34,60]
                    ], 
            target = 3
Output: true
*/


const search = (matrix, target) =>{
    let m = 0; 
    let n = matrix[0].length-1;

    while(m<matrix.length && n>=0){
        const number = matrix[m][n]
        if(number === target){
            return true
        }
        else if(number>target){
            n--
        }else{
            m++
        }
    }

    return false;

}
