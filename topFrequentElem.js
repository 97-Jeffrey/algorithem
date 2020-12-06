var topKFrequent = function(nums, k) {
    
  if(nums.length===1)return [nums[0]];
  
  let storage ={};
  let arr =[];
  
  
  for(let i =0; i<nums.length; i++){
      if(!storage[nums[i]]){
         storage[nums[i]] =0;
          storage[nums[i]] ++;
         }
      storage[nums[i]]++
  }
  
  const sorted = Object.fromEntries(
  Object.entries(storage).sort(([,a],[,b]) => b-a));
  
for(const each in sorted){     
      k>0 && arr.push(each);
       k--;
}
  
  return arr;
  
};

console.log(topKFrequent([4,1,-1,2,-1,2,3],2))
