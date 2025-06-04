/**
Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray
 whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
 
 */

var minSubArrayLen = function(target, nums) {
    let minSize = nums.length;
    let curSum = 0;
    let start = 0;

    for(let end=0; end<nums.length; end++){
        curSum += nums[end];
        while(curSum>= target){
            minSize = Math.min(minSize, end-start+1);
            curSum -=nums[start];
            start ++
        }
    }

    return minSize
}


var minSubArrayLen2 = function(target, nums) {
    let minLen = nums.length;
    let left = 0;
    let curMax = 0;

    for(let right=0; right<nums.length; right++){
        curMax += nums[right];

        while(curMax >= target){
            minLen = Math.min(minLen, right-left+1)
            curMax -= nums[left];
            left++   
        }

    }

    return minLen;
}


console.log(minSubArrayLen2(7, [2,3,1,2,4,3]))