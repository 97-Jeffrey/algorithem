// Input:
// a = [[1, 2], [2, 4], [3, 6]]
// b = [[1, 2]]
// target = 7

// Output: [[2, 1]]

// Explanation:
// There are only three combinations [1, 1], [2, 1], and [3, 1], which have a total sum of 4, 6 and 8, respectively.
// Since 6 is the largest sum that does not exceed 7, [2, 1] is the optimal pair.


function getPairs(A, B, target) {
 
  A.sort((a,b)=> a[1]-b[1])
  B.sort((a,b)=> a[1]-b[1])

  let max = -Infinity;
  let result = [];
  let l = 0;
  let r = B.length-1;

  while(l<A.length && r>=0){
     let sum = A[l][1]+ B[r][1];
     if(sum> target){
       r--

     }else{
       if(sum >= max){
         if(sum > max){
           max = sum;
           result =[];
         }
         result.push([A[l][0], B[r][0]]);
         let i = r-1;

         while(i>=0 && B[i][1] === B[i+1][1]){
           result.push([A[l][0], B[i][0]])
           i--;
         }
       }
       l++;
     }

  }
  return result;
}


console.log(getPairs(
  [[1, 8], [2, 7], [3, 14]], 
  [[1, 5], [2, 10], [3, 14]], 
  20
));



// A.sort((a,b) => a[1]-b[1])
// B.sort((a,b) => a[1]-b[1])

// let l = 0;
// let r = B.length-1;
// let output = [];
// let max = -Infinity;

// while(l<A.length && r>=0){
//   let sum = A[l][1]+ B[r][1]
//   if(sum > target){
//     r--;
//   }
//   else{
//     if(sum >= max){
//       if(sum > max){
//         max = sum;
//         output = []
//       }
//       output.push([A[l][0], B[r][0]])
//       let i = r-1;
//       while (i>= 0 && B[i][1] === B[i+1][1]){
//         output.push([[A][l][0], B[i][0]])
//         i--;
//       }
//     }
//     l++
//   }
// }
// return output;