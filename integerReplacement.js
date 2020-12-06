var integerReplacement = function(n) {
  let step = 0;
  while(n !==1){
      step++;
          if (n % 2) {
          if (n === 3) {
              n = 2;
          } else {
              if ((n - 1) % 4) {
                  n = n + 1;
              } else {
                  n = n - 1;
              }
          }
      } else {
          n = n / 2;
      }
  }
  return step;
};