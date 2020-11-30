var duplicateZeros = function (arr) {

  let newArr = [];
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    if (arr[i] === 0) {
      newArr.push(0, 0)
    } else {
      newArr.push(arr[i])
    }

  }

  for (let i = 0; i < len; i++) {
    arr[i] = newArr[i]
  }
  return newArr;

};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]))