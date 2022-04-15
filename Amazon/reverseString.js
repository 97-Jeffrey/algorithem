// Reverse the order of words in a given sentence (an array of characters). 


const reverseWord  = (sentence) =>{

  let sentenceArr = sentence.split(" ");

  let left = 0;
  let right = sentenceArr.length-1;

  while(left<right){
    let temp = sentenceArr[left];
    sentenceArr[left] = sentenceArr[right];
    sentenceArr[right]  =temp;
    left++
    right--
  }

  return sentenceArr.join(" ")

}

console.log(reverseWord("hello  world"))