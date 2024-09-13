// Given a string s, find the length of the longest substring without repeating characters.

/*
    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.
*/



const lengthOfLongestSubstring = (str) =>{

  let maxLength = 0;
  let localMax = 0;
  let storage ={};


  for(let i=0; i<str.length; i++){
    if(!storage[str[i]]){
      storage[str[i]] = true;
      localMax++;
      
    }else{
      if(localMax>maxLength){
        maxLength = localMax;
      }
      storage={};
      storage[str[i]] = true;
      localMax = 1;
    }
    
    maxLength = localMax>maxLength? localMax:maxLength;
  }
  return maxLength
}
console.log(lengthOfLongestSubstring("au"))
