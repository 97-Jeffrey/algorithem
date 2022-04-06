var missingNumber = function(nums) {
  let missingNum;
  let n = nums.length;
  let range = [0,n];  //[0,2]
  for(let i =0; i<=n; i++){
      console.log('this is '+ i)
      if(!nums.includes(i)){
         missingNum = i
      }
  }
  return missingNum
};

console.log(missingNumber([0,1]))