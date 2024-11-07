/*
  Given a binary array, find the length of the longest contiguous subarray containing only 1s. 
  You are allowed to replace at most K 0s with 1s.


  longestOnes([1,1,0,0,1,1,0,1,0,1,1], 2); // Output: 6
*/

function longestOnes(nums, K) {
    let start = 0;
    let maxOneCount = 0;
    let maxLength = 0;

    for(let end = 0; end<nums.length; end++){
        if(nums[end] ===1){
            maxOneCount ++
        }
        if(end-start+1- maxOneCount>K){
           if(nums[start] ===1){
            maxOneCount --
           }
           start ++
        }
        maxLength = Math.max(maxLength, end-start +1)
    }

    return maxLength

}

console.log(longestOnes([1,1,0,0,1,1,0,1,0,1,1], 2))
