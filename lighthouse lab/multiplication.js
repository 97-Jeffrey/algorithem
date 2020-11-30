const multiplicationTable = function(maxValue) {
   let output='';
  for(let i = 0; i<maxValue.length; i++){
    for(let j = 0; j<maxValue.length; j++){
      output += i*j + ' '
    }
    output += '\n'
  }
  return output;
};

console.log(multiplicationTable(1));
// console.log(multiplicationTable(5));
// console.log(multiplicationTable(10));