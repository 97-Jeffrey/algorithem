// Given an array of integers and a value, determine if there are any two integers in the array whose sum is equal to the given value. Return true if the sum exists and return false if it does not. Consider this array and the target sums:

// [2,2,5,3,6], 7 =>true


// const twoSums = (nums, target) =>{

//   let storage  = {};

//   for (let i=0; i<nums.length; i++){
//     if(storage[nums[i]]){
//       return true
//     }else{
//       storage[target - nums[i]] = i;
//     }
//   }
//   return false;
// }


var twoSum = function(nums, target) {
  let storage = {};

  for(let i=0; i<nums.length; i++){
    if(storage[nums[i]]){
        return [ storage[nums[i]], i]
    }
    else{
        storage[target-nums[i]] = i
    }

  }
};

/*
    2, 7, 11, 15

    {
      7:0
    }

 */


console.log(twoSum([2,7,11,15], 9))

