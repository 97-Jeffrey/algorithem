const numberOfVowels = function(data) {
  let counter =0;
  for(const each of data){
    if(each ==='a' || each ==='e' || each ==='i' || each ==='o' || each ==='u'){
      counter ++;
    }
  }
  return counter;
};


console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));