/*
    Write a function to find the longest common prefix string amongst an array of strings.

    If there is no common prefix, return an empty string "".
 */


/**
Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 */

var longestCommonPrefix = function(strs) {
    let prefix = ''
    for(let i=0; i<strs[0].length; i++){
        let letter = strs[0][i];
        for(let j =0; j<strs.length; j++){
            if(strs[j][i] !== letter){
                return prefix
            }
        }
        prefix += letter
    }
    return prefix


};