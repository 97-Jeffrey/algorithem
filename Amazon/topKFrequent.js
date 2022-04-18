/*

  Input: words = ["i","love","leetcode","i","love","coding"], k = 2
  Output: ["i","love"]
  
  Explanation: "i" and "love" are the two most frequent words.
  Note that "i" comes before "love" due to a lower alphabetical order.

*/


const topKFrequent = (words, k) =>{
  const mapping = {};
  for(let i =0; i<words.length; i++){
    if(!mapping[words[i]]){
      mapping[words[i]] = 0
    }
    mapping[words[i]]++;
  }

  let sortedArr = Object.keys(mapping)
                  .sort((a,b)=>{
                    if(mapping[a] === mapping[b]){
                       return a>b? 1:-1
                    }
                    return mapping[b] - mapping[a]
                  })
  return sortedArr.slice(0,k)
}



console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2))

