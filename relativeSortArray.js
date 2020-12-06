var relativeSortArray = function(arr1, arr2) {
  let storage = {};
  let newArr = [];
  let remaining = [];
  for(const each of arr1){
      if(!storage[each]){
         storage[each] = 0;
         storage[each]++;
         }else{
           storage[each]++
         }
  }
  // console.log(storage)
  for(const each of arr2){
       while(storage[each]!==0){
         newArr.push(each)
         storage[each]--;
       }
  }
  console.log(storage)
  for(const each in storage){
     while(storage[each]!==0){
       remaining.push(each);
       storage[each]--;
    }
  }

  remaining = remaining.map(each=>parseInt(each)).sort((a,b)=>a-b);
  newArr =newArr.concat(remaining)
  return newArr;
};

console.log(relativeSortArray([2,21,43,38,0,42,33,7,24,13,12,27,12,24,5,23,29,48,30,31],[2,42,38,0,43,21]))

// console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6]))