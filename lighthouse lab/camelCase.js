function toCamelCase(str){
  
  let output = '';
 
  for(let i =0; i<str.length; i++){
    if(str[i] === '-' || str[i] === '_'){
       output += str[i+1].toUpperCase();
       i++;
    }else{
      output += str[i];
    }
  }
  return output;

}

console.log(toCamelCase('the-stealth-warrior'))