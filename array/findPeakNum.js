var findPeakElement = function(nums) {
  for(let i=1; i<nums.length-1; i++){
    console.log(nums[i])
      if(nums[i]>nums[i-1] && nums[i]> nums[i+1]){
         return i
         }
  }
};

console.log(findPeakElement([1,2,3,1]))