var arrayRankTransform = function(arr) {
    
  let arr1 =[...arr].sort((a,b)=>a-b);
  let set = new Set(arr1);
  let arr2 = Array.from(set);
  let output =[];

  for(let i=0; i<arr.length; i++){
    output.push(arr2.indexOf(arr[i])+1)
  }
  return output
};

console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12]))