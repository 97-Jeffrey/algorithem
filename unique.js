function findUniq(arr){
  let unique = arr[0];
  for(let i=0; i<arr.length; i++){
    if(unique === arr[i]){
      continue;
    }else if (unique === arr[i+1]){
      return arr[i]   
    }else {
      return unique;
    }
  }
}

//[1,0,0,0]