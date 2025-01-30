/**
   You are given an array of integers. 
   The task is to find the length of the longest 
   increasing subsequence in this array.


   Example:
    Input: nums = [10, 9, 2, 5, 3, 7, 101, 18]

    Output: 4
    Explanation: The longest increasing subsequence is 
    [2, 3, 7, 101] with length 4.
 */

    function lengthOfLIS(nums) {
       const dp = new Array(nums.length).fill(1);

       for(let i=1; i<nums.length; i++){
          for(let j= i-1; j>=0; j--){
            if(nums[i]> nums[j]){
                dp[i] = Math.max(dp[i], dp[j]+1)
            }
          }
       }

        return Math.max(...dp)
    }

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))

