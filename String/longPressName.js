/* 

Your friend is typing his name into a keyboard. 
Sometimes, when typing a character c, the key might get long pressed, 
and the character will be typed 1 or more times.

You examine the typed characters of the keyboard. 
Return True if it is possible that it was your friends name, 
with some characters (possibly none) being long pressed.
   Example 1:

Input: name = "alex", typed = "aaleex"
Output: true
Explanation: 'a' and 'e' in 'alex' were long pressed.
Example 2:

Input: name = "saeed", typed = "ssaaedd"
Output: false
Explanation: 'e' must have been pressed twice, but it was not in the typed output.
*/

var isLongPressedName = function(name, typed) {
  let namePointer = 0;
  let typePointer = 0;

  while(typePointer< typed.length){
      if(name[namePointer] === typed[typePointer]){
        namePointer ++;
        typePointer++
      }
      else if(name[namePointer-1] === typed[typePointer]){
         typePointer ++
      }
      else {
        return false
      }
  }

  return name.length === namePointer
  
};

console.log(isLongPressedName("xnhtq","xhhttqq"))