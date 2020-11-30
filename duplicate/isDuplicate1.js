const isDuplicate1 = function(arr){

// we can check first index and last index of an element, if they are all identical, this is goona be true;
  for(let i=0; i<arr.length; i++){
     if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])){
       return true;
     }
  }
  return false;

}
console.log(isDuplicate1([1,1,2,2]));
console.log(isDuplicate1([1,2,3,4,5]));