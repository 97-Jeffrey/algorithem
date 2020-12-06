var isLongPressedName = function(name, typed) {
  if(name === typed) return true;
  let storage = {}
  
  for(let i=0; i<typed.length; i++){
      if(!storage[typed[i]]){
         storage[typed[i]] = 0;
         storage[typed[i]]++;
         }else{
             storage[typed[i]]++
         }
  }

  
  for(let i=0; i<name.length; i++){
      if(storage[name[i]] >= 0){
          storage[name[i]]--;
      }else{
        return false
      }
  }

  for(const each in storage){
      if(storage[each]<0){
         return false;
         }
  }
  return true;
};

console.log(isLongPressedName("xnhtq","xhhttqq"))