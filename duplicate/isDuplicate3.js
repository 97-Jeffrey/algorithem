const unique = function(arr){

  let storage ={};

  for(let i =0; i<arr.length; i++){
    if(!storage[arr[i]]){
      storage[arr[i]] = true;
    }else{
      return false;
    }
  }
  return true;

  
}

console.log(unique([1,2]))
