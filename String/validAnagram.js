const isAnagram = function(s, t) {
  if(s.length !==t.length) return false;
  
  let storage = {}
  for(let i =0; i<s.length; i++){
      if(!storage[s[i]]){
        storage[s[i]] = 0;
        
         }
      storage[s[i]]++;

  }
  console.log(storage)
  
  for(let i =0; i<t.length; i++){
      if(storage[t[i]]){
         storage[t[i]]--;
         }
  }
  
  console.log(storage)
  for(const each in storage){
      if(storage[each]!== 0){
         return false
         }
  }
  return true;
};

console.log(isAnagram("anagram","nagaram"))