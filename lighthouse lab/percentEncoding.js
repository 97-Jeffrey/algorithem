const urlEncode = function(text) {
  text =text.trim();
  let output ='';
  for(let i=0; i<text.length; i++){
    output += text[i] === " " ? "%20":text[i]
  }
  return output;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));