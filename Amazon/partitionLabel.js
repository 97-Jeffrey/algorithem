// You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

// Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

// Return a list of integers representing the size of these parts.

/*


    Input: s = "ababcbacadefegdehijhklij"
    Output: [9,7,8]

    The partition is "ababcbaca", "defegde", "hijhklij".

*/


const partitionLabels = s =>{

  let maxIndexFound = {};
  let output  =[];

  for(let i=0; i<s.length; i++){
    maxIndexFound[s[i]]=i;
  }

  let currLength=0;
  let maxStepsTogo = maxIndexFound[s[0]];

  for(let i=0; i<s.length; i++){
    currLength++;
    maxStepsTogo = Math.max(maxStepsTogo, maxIndexFound[s[i]])

    if(maxStepsTogo === i){
      output.push(currLength);
      currLength = 0;
    }
  }

  return output;
}


console.log(partitionLabels("ababcbacadefegdehijhklij"))