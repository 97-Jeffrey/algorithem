// Reverse the order of words in a given sentence (an array of characters). 


const reverseWord  = (sentence) =>{

  const sentenceArr =  sentence.split(" ");
  let start = 0;
  let end = sentenceArr.length - 1 ;


  while (start<end){
    let temp = sentenceArr[start];
    sentenceArr[start] =sentenceArr[end];
    sentenceArr[end] = temp;
     start ++;
     end --;
  }

  return sentenceArr.join(" ");

}

console.log(reverseWord("hello hahaha world"))