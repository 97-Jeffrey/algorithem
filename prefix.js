const longestCommonPrefix = function(s) {
   let longest = '';
   if(s.length === 0 ){
     return longest;
   }
    for(let i =0; i<s[0].length; i++){
      let compareWord = s[0][i];
      for(let j=0; j<s.length; j++){
        if(s[j][i] !== compareWord){
           return longest
        }
      }
      longest += compareWord
    }
    return longest;
};
console.log(longestCommonPrefix(["flower","flow","flight"]))