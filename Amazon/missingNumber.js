// You are given an array of positive numbers from 1 to n, such that all numbers from 1 to n are present except one number x. You have to find x. The input array is not sorted. Look at the below array and give it a try before checking the solution.


const findMissingNumber  = (nums) =>{

  let numsSum = 0;
  for(let i=0; i<nums.length; i++){
    numsSum += nums[i]
  }

  let n = nums.length+1;
  let actualSum = n* (n+1) /2;

  return  actualSum -numsSum;

}



console.log(findMissingNumber([1,5,3,4]))