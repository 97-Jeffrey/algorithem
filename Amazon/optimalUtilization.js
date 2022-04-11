


function getPairs(A, B, target) {
 
  A.sort((a,b)=>a[1]-b[1]);
  B.sort((a,b)=>a[1]-b[1]);

  let l = 0;
  let r = B.length-1;
  let max = -Infinity;
  let output=[];

  while(l<A.length && r>=0){
    
    let sum = A[l][1]+B[r][1];

    if(sum > target){
      r--;
    }else{
      if(sum >= max){
        if(sum > max){
          max = sum;
          output = [];
        }
        output.push([A[l][0], B[r][0]])
        let i=r-1;
        while(i>=0 && B[i][1]=== B[i+1][1]){
          output.push([A[l][0], B[i][0]])
          i--;
        }
      }
      l++;
    }
  }

  return output;
}


console.log(getPairs([[1, 8], [2, 7], [3, 14]], [[1, 5], [2, 10], [3, 14]], 20));