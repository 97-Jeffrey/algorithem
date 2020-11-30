const conditionalSum = function(values, condition) {
  let sum = 0;
  for(const each of values){
    if(condition ==='odd' && each % 2 !== 0){
      sum += each;
    }else if(condition === 'even' && each %2 === 0){
      sum += each;
    } 
  }
  return sum
};
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));