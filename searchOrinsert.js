const searchInsert = function(arr, target){

  for(var i=0; i<arr.length; i++){
    if(arr[i] === target){
      return i;
    }else if(arr[i]>target){
      return 0;
    }
    else if(arr[i]<target && arr[i+1]> target){
     return i+1;
    }
  }
  return arr.length
}

console.log(searchInsert([1,3,5,6], 0))