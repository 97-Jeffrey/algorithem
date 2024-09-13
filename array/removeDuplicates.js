/* Given an integer array nums sorted in non-decreasing order, 
remove the duplicates in-place such that each unique element appears only once.
 The relative order of the elements should be kept the same. 
 Then return the number of unique elements in nums. */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index = 1;
    for(let i=1; i<nums.length; i++){
        if(nums[i] !== nums[i-1]){
            nums[index] = nums[i]
            index++
        }
    }
    return index
};
