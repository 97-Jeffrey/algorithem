const checkAir = function (samples, threshold) {
  let pollutedCount =0, cleanCount =0, status;

  for(const each of samples){
    if(each === 'clean'){
      cleanCount ++;
    }else if(each === 'dirty'){
      pollutedCount ++;
    }
  }
   
  return pollutedCount/cleanCount > threshold? 'Polluted': 'Clean'
  
  

};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))