/*
The power of the string is the maximum length of a non-empty substring that contains only one unique character.

Given a string s, return the power of s.
*/

/*
   Example 1:

  Input: s = "leetcode"
  Output: 2
  Explanation: The substring "ee" is of length 2 with the character 'e' only.
  Example 2:

  Input: s = "abbcccddddeeeeedcba"
  Output: 5
  Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
*/


var maxPower = function (s) {

  let max =0;
  let count = 0

    for(let i=0; i<s.length; i++){
        if(i===0) count ++;
        if(s[i]!==s[i-1]){
            count = 0;
            count++
        }else{
            count ++
        }
        max = Math.max(max, count)

    } 

    return max

};

console.log(maxPower("cc"))