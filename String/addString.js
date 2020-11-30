var addStrings = function(num1, num2) {
  const length = Math.max(num1.length, num2.length) +1;
  const result = new Array(length);

  let carry = 0;
  for(let i =0; i<length; i++){
    let digit1 = parseInt(num1[num1.length-1-i] || 0, 10)
    let digit2 = parseInt(num2[num2.length-1-i] || 0, 10)

    let sum = digit1 + digit2 +carry;
    carry = 0;
    if(sum >9 ){
      carry = 1;
      sum -= 10
    }

    result[length -1 -i] = sum
  }

  if(result[0] === 0){
    result.shift();
  }
  return result.join('')
};

console.log(addStrings('456','123'))