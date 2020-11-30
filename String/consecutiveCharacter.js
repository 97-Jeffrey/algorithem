var maxPower = function (s) {

  let newArr = [];
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if (i === 0) {
      count++
    }
    if (i === s.length - 1 && s[i] === s[i - 1]) {
      count++;
      newArr.push(count)
    }
    if (s[i] !== s[i - 1]) {
      newArr.push(count);
      count = 0;
      count++
    } else {
      count++
    }
  }

  return Math.max(...newArr)

};

console.log(maxPower("cc"))