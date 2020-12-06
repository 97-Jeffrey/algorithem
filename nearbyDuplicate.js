var containsNearbyDuplicate = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for(let j = i+1; j<nums.length; j++){
      if(nums[i] === nums[j] && Math.abs(j - i)<= k){
         return true
      }
    }
  }
  return false;
};

console.log(containsNearbyDuplicate([99,99], 2))