const isHappy = function(n) {
  
  while(n >10){
      let tenth = n % 10? parseInt(n/10): n/10;
      let oneth = n % 10? n - tenth*10: 0;
      n = Math.pow(tenth,2) + Math.pow(oneth,2)
  }
  if(n===1 || n===10|| n===100){
    return true;
    }
  if(n<10 && n !==1){
    return false;
    }
  
};

console.log(isHappy(19))