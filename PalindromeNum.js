
const isPalindrome = function(num){
  if(num < 0){
    return false;
  }
  
  let stringNum = String(num);
  let stringNumReverse = stringNum.split('').reverse().join('');
  
  output = stringNum === stringNumReverse? true:false;
  return output;
}

console.log(isPalindrome(1001))