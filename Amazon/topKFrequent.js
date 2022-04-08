const topKFrequent = (words, k) =>{
  const mappings = {}
    for (let i = 0; i < words.length; i++) {
        mappings[words[i]] = mappings[words[i]] + 1 || 1
    }

    const sorted =  Object.keys(mappings).sort((a,b)=>{
      if(mappings[a]===mappings[b]){
        return a>b?1:-1;
      }
      return mappings[b]-mappings[a]
    });

    return sorted.slice(0,k)
}



console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2))

