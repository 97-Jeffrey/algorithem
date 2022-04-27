/*

  Input: words = ["i","love","leetcode","i","love","coding"], k = 2
  Output: ["i","love"]
  
  Explanation: "i" and "love" are the two most frequent words.
  Note that "i" comes before "love" due to a lower alphabetical order.

*/


const topKFrequent = (words, k) =>{
 
  const storage = {};

  for(let word of words){
    if(!storage[word]){
      storage[word] = 0
    }
    storage[word]++
  }

  let result = Object.keys(storage)
               .sort((a,b) => storage[b] - storage[a])
               .slice(0,k)

  return result



}





console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2))

console.log(topKFrequent(["the","day","is","sunny","the","the","the","sunny","is","is"], 4))