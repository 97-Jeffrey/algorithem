const sumLargestNumbers = function(data) {
  let largest = data[0];
  let secondLargest = data[0];
  for(const each of data){
    if(each>largest){
     largest = each;
    }
  }
  for(const each of data){
    if(each<largest && each > secondLargest){
      secondLargest = each
    }
  }
 return largest + secondLargest;
};



const sumLargetNumbers2 = (data) =>{
  const sortedData =  data.sort((a,b)=>b-a);
  return sortedData[0] + sortedData[1]
}


console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

console.log(sumLargetNumbers2([2,2,12,4,7,4,6,9,4]))