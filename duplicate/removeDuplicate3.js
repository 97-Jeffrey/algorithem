
const removeDuplicate3 = function(arr){

  return arr.filter((item, index)=>arr.indexOf(item) ===index);
}

console.log(removeDuplicate3([1,1,2,2,3,3]))