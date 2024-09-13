/*
  given a integer array,, 
  find continguous subArray which has the largest sum 
  and return its sum:

  Example 1:

  Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
                    1 -2 4  3 5 6, 1,5 
                    1  1 4  4 5 6, 6, 6
  Output: 6
  Explanation: The subarray [4,-1,2,1] has the largest sum 6.
*/





const  maxSubarray = (nums) =>{

  let max = nums[0];

  for(let i=1; i<nums.length; i++){
    nums[i] = Math.max(nums[i], nums[i]+ nums[i-1])
    max = Math.max(max, nums[i])
  }

 
  return maximum

}


console.log(maxSubarray([-2,1,-3,4, -1,2,1,-5, 4]))