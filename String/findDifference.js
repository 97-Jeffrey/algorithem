var findTheDifference = function (s, t) {
  if (s === "") return t;
  let difference = '';

  for (let i = 0; i < t.length; i++) {

    if (t.replace(t[i], '') === s) {
      difference = t[i]
    }
  }
  return difference;
};

console.log(findTheDifference("ae", "aea"))