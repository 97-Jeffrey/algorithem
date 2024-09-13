// given a string, find a substring with K distinct characters:

/*
    s = 'eceba', k = 2
          l
            r 
    { c, e, b }
    max: 3


*/

const longestK = (s, k) =>{

    let left = 0 ;
    let right = 0;
    let max = 0;
    let set = new Set()

    while(right<s.length){
       set.add(s[right])
       while(set.size>k){
          set.delete(s[left]);
          left++
       }
       max = Math.max(max, right-left+1);
       right ++
    }
    return max


}

console.log(longestK([[3,3,3,1,2,1,1,2,3,3,4]], 2))