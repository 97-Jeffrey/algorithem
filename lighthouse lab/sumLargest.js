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


console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));