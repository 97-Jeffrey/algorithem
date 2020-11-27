
const bubbleSort = function(arr){
  let isSorted = true;
  for(let i=0; i<arr.length; i++){

    for(let j =i+1;j<arr.length; j++){
      if(arr[i] > arr[j]){
         let num= arr[i];
         arr[i] = arr[j];
         arr[j] =num;
         isSorted = false;
      }
      if(isSorted){
        return arr;
      }
    }
  }
  return arr;

}

console.log(bubbleSort([3,1,2,5,7,3,1,3,2,4,57,89]))