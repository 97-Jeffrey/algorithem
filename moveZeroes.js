var moveZeroes = function(nums) {
    
  let  anchor = 0;
  
  for(let explorer=0; explorer<nums.length; explorer++){
      if(nums[explorer] !==0){
             let num = nums[anchor];
             nums[anchor] = nums[explorer];
             nums[explorer] = num;
             anchor++; 
    }
  }
  return nums;
};


console.log(moveZeroes([0,1,0,0,3,12]))