function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    // console.log(name);
    return name;
  }
  return displayName;
}

var myFunc = makeFunc();
let name = myFunc();

console.log(name)