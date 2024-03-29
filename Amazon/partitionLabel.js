// You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

// Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

// Return a list of integers representing the size of these parts.

/*


    Input: s = "ababcbacadefegdehijhklij"
    Output: [9,7,8]

    The partition is "ababcbaca", "defegde", "hijhklij".

*/


const partitionLabels = s =>{

  const lastIndexMap ={};

  for(let i=0; i<s.length; i++){
    lastIndexMap[s[i]] = i;
  }

  let currLength = 0;
  let maxStepsToGo = lastIndexMap[s[0]];
  let result = [];


  for(let i=0; i<s.length; i++){
    currLength ++

    maxStepsToGo = Math.max(maxStepsToGo, lastIndexMap[s[i]]);

    if( i=== maxStepsToGo){
      result.push(currLength);
      currLength =0
    }
  }

  return result



  
}


console.log(partitionLabels("ababcbacadefegdehijhklij"))