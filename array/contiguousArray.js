var findMaxLength = function(nums) {
    
  let sum = 0;
  let storage ={};
  let result = [];

  for(let i=0; i<nums.length; i++){
      if(nums[i]===0){
         nums[i] = -1;
     }
  }

 
  
  for(let i=0; i<nums.length; i++){
      sum += nums[i];
      if(sum ===0){
         result.push(i+1)
      }

      if(storage[sum]===undefined){
         storage[sum] = i;
         }else{
             result.push(i-storage[sum]);
         }
  }

  return Math.max(...result)
  
  
};

console.log(findMaxLength([0,1]))