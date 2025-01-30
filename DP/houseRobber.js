/*

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.


*/

var rob = function(nums) {

    if(!nums.length) return 0;
    
    if(nums.length==1) return nums[0];
    let output = []
    output[0] = nums[0]
    output[1] = Math.max(output[0], nums[1])

    for(let i =2; i<nums.length; i++){
        output[i] = Math.max(output[i-1], nums[i]+ output[i-2])
    }

    return output[output.length-1]

};