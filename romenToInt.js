function charToInt(c) {
  switch (c) {
    case 'I': return 1;
    case 'V': return 5;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;
    default: return -1;
  }
}

const romanToInt = function (s) {

  let output = charToInt(s.charAt(0));  

  for (let i = 1; i < s.length; i++) {   
    let current = charToInt(s.charAt(i));  
    let previous = charToInt(s.charAt(i -1));  
    if(current <= previous){
      output += current;
    }else{
      output = output - previous *2 + current;  
    }
  }
return output
}

console.log(romanToInt('IX'))