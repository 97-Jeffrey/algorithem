var isSubsequence = function(s, t) {
    
  for(let i=0; i<s.length; i++){
      if(!t.includes(s[i])){
         return false
         }
  }
  let indexArr =[];
  for(let i=0; i<s.length; i++){
      if(t.includes(s[i])){
         indexArr.push(t.indexOf(s[i]));
         }
  }

  let newArr = [...indexArr].sort((a,b)=>{return a- b})

  for(let i =0; i<indexArr.length; i++){
    if(indexArr[i]!==newArr[i]){
      return false
    }
  }
  return true;
};

console.log(isSubsequence("abc", "ahbgdc"))