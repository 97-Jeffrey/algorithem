const isDuplicate2 = function(arr){
  // we can sort the arr to see if ajacent elements are identical;

  arr = arr.sort((a,b)=>a-b);

   for(let i =0; i<arr.length; i++){
     if(arr[i] === arr[i+1]){
       return true;
     }

   }
   return false;
  
  }

  console.log(isDuplicate2([1,2,3,4,5]))
  console.log(isDuplicate2([1,2,2,3,4,5]))