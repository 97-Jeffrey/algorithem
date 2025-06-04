/**

  Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

const longestSub = (str) =>{

    let set = new Set();
    let left = 0;
    let right = 0;
    let max = 0
    
    while(right < str.length){
        if(!set.has(str[right])){
            set.add(str[right]);
            max = Math.max(max, set.size)
            right++
        }else{
            set.delete(str[left]);
            left++
        }
        
    }

    return max

}

/* 
  "abcabcbb"
    
  { b,  c,  a, }
  1, 2, 3,  3, 
*/

const longestSub2 = str =>{

    let left = 0;
    const set = new Set();
    let max = 0;

    for(let right = 0; right<str.length; right++){
       if(!set.has(str[right])){
           set.add(str[right]);
           max = Math.max(max, set.size)
       }else{
           set.delete(str[left])
           left++
       }
    
    }

    return max

}


console.log(longestSub2("pwwkew"))