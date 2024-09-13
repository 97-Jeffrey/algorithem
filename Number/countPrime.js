var countPrimes = function(n) {

  let primeCount =0;
  let num =[];
  for(let i=0; i<n; i++){
    num[i] = true;
  }

  for(let i = 2; i*i<n; i++){
    if(num[i] === true){
      for(let j =2; i*j <n; j++){
        num[i*j] =false;
      }
    }
  }
  
  for(let i =2; i<n; i++){
    if(num[i] === true){
      primeCount++
    }
  }
  return primeCount;
  

}

console.log(countPrimes(10));