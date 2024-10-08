/*

Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

*/

/* 
 k =3
[1,2,3,4,5,6,7]  =>
[7,6,5,4,3,2,1]  =>

5,6,7,  + 1,2,3,4
    
*/

const reverseArr = (nums, start, end) =>{
    while(start<end){
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end --
    }

}
var rotate = function(nums, k) {
    k = k % nums.length
    nums.reverse();
    reverseArr(nums, 0, k-1);
    reverseArr(nums, k, nums.length-1)
      

};
