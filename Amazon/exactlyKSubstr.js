// Given a string s and an int k, return an int representing the number of substrings (not unique) of s with exactly k distinct characters. If the given string doesn't have k distinct characters, return 0.

/**
    Input: s = "pqpqs", k = 2
    Output: 7
    Explanation: ["pq", "pqp", "pqpq", "qp", "qpq", "pq", "qs"]
 */




const substringsWithDistChars = (s, k) =>{

  let num = 0;

  let set = new Set();

  for(let i=0; i<s.length; i++){
    for(let j=i; j<s.length; j++){
      set.add(s[j]);
      if(set.size === k){
        num ++
      }
    }
    set.clear()
  }
  return num
}


console.log(findK("pqpqs", 2))

