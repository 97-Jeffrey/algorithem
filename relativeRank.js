var findRelativeRanks = function(nums) {
  let storage ={};
  let nums1 = [...nums]
  nums1 = nums1.sort((a,b)=>b-a);
  
  storage[nums1[0]] = 'Gold Medal';
  storage[nums1[1]] = 'Silver Medal';
  storage[nums1[2]] = 'Bronze Medal';
  // console.log(storage)
  
  for(let i=3; i<nums1.length; i++){
      storage[nums1[i]] = String(i+1)
  }
  
 
  for(let i =0; i<nums.length; i++){
      nums[i] = storage[nums[i]]
  }
  return nums;
  
};

console.log(findRelativeRanks([10,3,8,9,4]))