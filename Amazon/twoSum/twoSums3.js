// Given an array of integers and a value, determine if there are any two integers in the sorted array whose sum is equal to the given value. Return index of the two elements plus one if the sum exists. There's only one possible combination

const twoSums = (nums, target) =>{
  
  let i=0, j=nums.length-1;

  while(i<j){
    if(nums[i] + nums[j] === target){
      return [i+1, j+1]
    }
    else if(nums[i]+nums[j]>target){
      j--
    }
    else{
      i++
    }
  }
}

console.log(twoSums([2,7,11,15], 9))