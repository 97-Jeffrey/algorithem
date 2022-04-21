// Given an array of integers and a value, determine if there are any two integers in the array whose sum is equal to the given value. Return index of the two elements if the sum exists. Consider this array and the target sums:

// [2,2,5,3,6], 7 =>true

const twoSums  = (nums, target) =>{
  
  let storage = {};
  for(let i=0; i<nums.length; i++){
    if(storage[nums[i]]!==undefined){
       return [storage[nums[i]], i]
    }
    storage[target-nums[i]] = i
    console.log(storage)
  }
}

console.log(twoSums([2,7,11,15],9))
