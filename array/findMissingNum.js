const findMissingNumber = function(arr,n){
  let left = 0,
  right = arr.length - 1;

while (left <= right) {
  const middle = Math.floor((left + right) / 2);


  // check if middle value is immediately to the right
  if ((arr[middle + 1] && arr[middle] + 1 !== arr[middle + 1]) ||
    (middle === arr.length - 1 && arr[middle] !== n) // edge case for end of array
) {
    return middle + 2;
  }

  // check if middle value is immediately to the left
  if (arr[middle] - 1 !== arr[middle - 1] ||
    (middle == 0 && arr[middle] !== 1) // edge case for beginning of array
  ) {
    return middle + 1;
  }

  if (arr[middle] != middle + 1) {
    // go left
    
    right = middle - 1;
  } else {
    // go right

    left = middle + 1;
  }
}

// no missing number
return null;
}

console.log(findMissingNumber([1,2,3,4,6],6))