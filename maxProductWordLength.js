const maxProduct = function(words) {
  let maxLength = 0;
   for(let i=0; i<words.length; i++){
     let compareWord = words[i];
     for(let j=i+1; j<words.length; j++){
       let newlength = compareWord.length * words[j].length
        if(different(compareWord,words[j]) && newlength> maxLength){
          maxLength = newlength;
        }
     }
   }
   return maxLength;
};


function different(string1, string2){
  string2 = string2.split('');

  let result = string2.every(each=>
    !string1.includes(each)
  )
  return result;
}

console.log(maxProduct(["a","aa","aaa","aaaa"]));