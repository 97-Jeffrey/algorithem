
/*

  You are given an array of logs. Each log is a space-delimited string of words, where the first word is the identifier.

  There are two types of logs:

  Letter-logs: 
  All words (except the identifier) consist of lowercase English letters.

  Digit-logs: 
  All words (except the identifier) consist of digits.
  Reorder these logs so that:

  The letter-logs come before all digit-logs.

  The letter-logs are sorted lexicographically by their contents. If their contents are the same, then sort them lexicographically by their identifiers.

  The digit-logs maintain their relative ordering.
  Return the final order of the logs.

  Input: logs = 
    [
      "dig1 8 1 5 1",
      "let1 art can",
      "dig2 3 6",
      "let2 own kit dig",
      "let3 art zero"
    ]
  Output :
   [
    "let1 art can",
    "let3 art zero",
    "let2 own kit dig",
    "dig1 8 1 5 1",
    "dig2 3 6"
  ]
   
 */

const reorderDataFile = (logs) =>{

  let letterData = [];
  let digitData = [];

  for(let i=0; i<logs.length;i++){
    let data = logs[i].split(" ")[1];
    if(!isNaN(data)){
      digitData.push(logs[i])
    }else{
      letterData.push(logs[i])
    }

  }

  letterData.sort((a,b)=>{

    let aContent = a.split(" ").slice(1).join(" ");
    let bContent = b.split(" ").slice(1).join(" ");

    return aContent === bContent? a.localeCompare(b): aContent.localeCompare(bContent)
  })


  return [...letterData, ...digitData]



}

let logs = ["dig1 8 1 5 1", "let1 art can", "dig2 3 6", "let2 own kit dig", "let3 art zero"];
console.log(reorderDataFile(logs))