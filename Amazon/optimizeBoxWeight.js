
/*
  
  partition a list of integer into S1 and S2 such that sum of s1> sum of s2

  nums [4,5,2,3,1,2]

  output: [4,5] : 4+5  = 9 is the greatest sum, and has least amount of element



*/

const optimizeBoxWeight = (nums) =>{

  let result = [];
  nums.sort((a,b)=> b-a);

  let aSet = [];
  let bSet = [...nums];

  while(bSet.length){
    aSet.push(bSet.shift())
    let arr = [...aSet]
    let sumA = 0;
    let sumB = 0;
    for(let i=0; i<aSet.length; i++){
      sumA += aSet[i]
    }
    for(let i=0; i<bSet.length; i++){
      sumB += bSet[i]
    }
    
    if(sumA>sumB){
    result.push(arr)
    }
  }

  let minSize = Infinity;
  for(let i=0; i<result.length; i++){
    minSize = Math.min(minSize, result[i].length);
  }
  let minLengthResult = result.filter(each => each.length === minSize)

  let maxSum =0;
  for(let i=0; i<minLengthResult.length; i++){
    let eachSum = minLengthResult[i].reduce((a,b)=> a+b, 0);
    maxSum = Math.max(maxSum, eachSum);
  }
  let maxSumResult = minLengthResult.filter(each=>{
    let eachSum = each.reduce((a,b)=>a+b,0);
    return eachSum === maxSum
  })


  return maxSumResult.length ===1? maxSumResult[0]: maxSumResult


}

console.log(optimizeBoxWeight([4,5,2,3,1,2]))
console.log(optimizeBoxWeight([3, 7, 5, 6, 2]))