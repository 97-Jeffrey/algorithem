

const selectionSort = function(arr){

  for(let i=0; i<arr.length; i++){
     let minIndex =i;
     for(let j=i+1; j<arr.length; j++){
        if(arr[j]<arr[minIndex]){
          minIndex = j;
        }
     }
     let temp = arr[i];
     arr[i] = arr[minIndex];
     arr[minIndex] = temp;
    
  }
  return arr;

}

console.log(selectionSort([1,3,2,5,3,6,8,10]));