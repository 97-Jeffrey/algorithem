//given a integer array,, find continguous subArray which has the largest sum and return its sum:





const  maxSubarray = (nums) =>{

  let numsDuplicate = [...nums];
  let maximum = numsDuplicate[0];

  for(let i=1; i<numsDuplicate.length; i++){
     numsDuplicate[i] = Math.max(numsDuplicate[i], numsDuplicate[i]+ numsDuplicate[i-1]);
     maximum = Math.max(numsDuplicate[i], maximum);
  }
  return maximum

}


console.log(maxSubarray([-2,1,-3,4, -1,2,1,-5, 4]))