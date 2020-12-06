var findLucky = function(arr) {
    
  let storage ={};
  let arr1 = [];
  for(let i=0; i<arr.length; i++){
      if(!storage[arr[i]]){
          storage[arr[i]]=1
        }else{
            storage[arr[i]]++
        }
  }
  console.log(storage)
  for(const each in storage){
      if(each == storage[each]){
         arr1.push(storage[each])
         }
  }
 console.log(arr1)
  return Math.max(...arr1)
  
  
};

console.log(findLucky([5]))