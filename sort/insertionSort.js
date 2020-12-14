// a new array is created, each element in arr is push into the newly created arr, than it compare iterally with element inside the newArr, if it is smaller than the one next to it, swap position;
const insertionSort = function(arr){

  let newArr=[arr[0]];
  for(let i=1; i<arr.length; i++){
    newArr.push(arr[i]);
    for(let j=newArr.length-1; j>0; j--){
      if(newArr[j]<newArr[j-1]){

        let temp = newArr[j-1];
        newArr[j-1]=newArr[j];
        newArr[j]= temp;
      }
    }
  }
  return newArr;
}
console.log(insertionSort([1,3,2,1,5,3,6,34,8]))
console.log(insertionSort([34,1,4,9,23,12]))
console.log(insertionSort([5,4,3,2,1,0]))
