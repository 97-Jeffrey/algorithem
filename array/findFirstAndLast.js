/*
    Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

    If target is not found in the array, return [-1, -1].

    You must write an algorithm with O(log n) runtime complexity.

*/

var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let result = [-1, -1];

    // Binary search for the leftmost occurrence
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] == target) {
            result[0] = mid;
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    left = 0;
    right = nums.length - 1;

    // Binary search for the rightmost occurrence
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] == target) {
            result[1] = mid;
            left = mid + 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
};
