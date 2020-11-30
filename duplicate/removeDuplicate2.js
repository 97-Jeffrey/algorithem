
const removeDuplicate2 = function(arr){
   
  let newArr = [];

  for(let i=0; i<arr.length; i++){

    if(!newArr.includes(arr[i])){
        newArr.push(arr[i])
    }
      
  }
  return newArr;
}

console.log(removeDuplicate2([1,1,2,2,3,3,4,4]))