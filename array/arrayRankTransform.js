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

console.log(arrayRankTransform([40, 10,20,30]))