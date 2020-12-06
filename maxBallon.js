var maxNumberOfBalloons = function(text) {
    
  let storage={};
  let count =0;
  for(let i=0; i<text.length; i++){
     if(!storage[text[i]]){
      storage[text[i]] = 0;
     }
      storage[text[i]]++
    }


    let arr =[];
    for(const each in storage){
      if(each ==='b' || each ==='a' ||each ==='l' ||each ==='o' ||each ==='n'){
        arr.push(storage[each]);
      }else{
        delete storage[each]
      }
    }
   
    for(const each in storage){
      if(storage[each]<1){
        return 0;
      }
    }
  
    while(!arr.includes(0)){
       arr = arr.map(each =>each-1)
       count++
    }


  return count
  
  };

  console.log(maxNumberOfBalloons("leetcode"))