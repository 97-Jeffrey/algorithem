

const sumZero = n => {
  if(n===1) return [0]
  if(n===2) return [-1,1]
  
  let output = [0];
  let sum =0;
  for(let i=1; i<n-1; i++){
      output.push(i)
      sum +=i
  }
  output.push(0-sum)
  return output
  
};