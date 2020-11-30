

const removeDuplicate = function(arr){


  //we can create a ES6 set to solve the problem: a set is unique
  return [...new Set(arr)];
}

console.log(removeDuplicate([1,1,3,2,4,2,4,2,4,2,4,6,4,67,8,4,2,4,3]))