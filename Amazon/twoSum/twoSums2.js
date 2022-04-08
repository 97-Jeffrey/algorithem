// Given an array of integers and a value, determine if there are any two integers in the array whose sum is equal to the given value. Return index of the two elements if the sum exists. Consider this array and the target sums:

// [2,2,5,3,6], 7 =>true

const twoSums  = (nums, target) =>{
  
  let storage = {};
  for(let i=0; i<nums.length; i++){
    if(storage[nums[i]]){
       return [storage[nums[i]], i]
    }else{
        storage[target-nums[i]] = i
    }
  }
}

console.log(twoSums([2,2,5,3,6], 7))