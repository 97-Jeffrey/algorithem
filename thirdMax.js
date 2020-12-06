var thirdMax = function(nums) {
  let set = new Set(nums);
  nums = Array.from(set);
  let thirdMaximum;
  let largeArr = [];
  if(nums.length <3){
    return Math.max(...nums);
  }

  while(largeArr.length !==2){
        thirdMaximum = Math.max(...nums);
        largeArr.push(thirdMaximum);
        nums.splice(nums.indexOf(thirdMaximum),1)
        }

  let maxVal = Math.max(...nums);
  if(largeArr.includes(maxVal)){
    nums.splice(nums.indexOf(thirdMaximum),1)
  }

  
  return Math.max(...nums)
};

console.log(thirdMax([2,2,3,1]))