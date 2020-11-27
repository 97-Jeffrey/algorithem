const twoSum =function(nums, target){
  let storage = {};
  for(let[index,num] of nums.entries()){
    console.log(index,num)
    if(storage[num]){
      return [storage[num], index]
    }else{
      storage[target-num] = index;
    }
  }
}


console.log(twoSum([2,7,11,15],9));