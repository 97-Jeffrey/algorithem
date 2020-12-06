// it is optimal to break integers into multiply of 3

var integerBreak = function(n) {
  let maxValue = 1;
  if(n=== 2 || n=== 3){
      return n-1
  }
  
  while(n>4){
      n-=3;
      maxValue *=3
  }
  return n* maxValue;
};