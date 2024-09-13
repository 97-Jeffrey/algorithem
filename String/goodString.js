var countCharacters = function(words, chars) {
  let sum = 0;
  let storage ={};
  let goodString =[];
  for(const each of chars){
      storage[each] = true
  }
  for(let i =0; i<words.length; i++){
    let key =true
      for(let j =0; j<words[i].length; j++){
          if(!storage[words[i][j]]){
             key =false
            }
      }
      if(key){
        goodString.push(words[i])
      }

  }
  
  for(const each of goodString){
      sum += each.length
  }

  console.log(goodString)
  return sum
};

console.log(countCharacters(["cat","bt","hat","tree"],"atach"))