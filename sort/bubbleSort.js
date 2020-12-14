// sort the arr from smallest to largest
// compare each element to the one behind it, if it is bigger than that, switch position whith the one behind;

const bubbleSort = function(arr){
  let isSorted = true;
  for(let i=0; i<arr.length; i++){
    for(let j =i+1;j<arr.length; j++){
      if(arr[i] > arr[j]){
         let temp= arr[i];
         arr[i] = arr[j];
         arr[j] =temp;
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