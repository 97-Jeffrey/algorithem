/**
You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

 

Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
Example 2:

Input: nums = [5], k = 1
Output: 5.00000
 */

var findMaxAverage = function(nums, k) {
    let max = -Infinity;
    let curMax = 0;
    let start =0;

    for(let end = 0; end<nums.length; end++){
        curMax+= nums[end];
        if(end-start === k-1){
            max = Math.max(max, curMax/k);
            curMax -= nums[start];
            start ++
        }
    }

    return max;
}

var findMaxAverage2 = function(nums, k) {
    let max = -Infinity;
    let left = 0;
    let accumu = 0;


    for(let right=0; right<nums.length; right++){
       accumu += nums[right];

        if(right-left+1 === k){
           max = Math.max(max, accumu/k);
           accumu -= nums[left];
           left++;

       }

       return max

    }

}


console.log(findMaxAverage([1,12,-5,-6,50,3], 4))