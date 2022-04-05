// You are given a dictionary of words and a large input string. You have to find out whether the input string can be completely segmented into the words of a given dictionary. The following two examples elaborate on the problem further.

// Given a dictionary of words.

let canSegmentString = function(s, set) {
  for (let i = 1; i < s.length + 1; i++) {
    let first = s.substr(0, i);
    if (set.has(first)) {
      let second = s.substr(i);
      if (second.length === 0) {
        return true;
      }
      if (set.has(second)) {
        return true;
      }
			if (canSegmentString(second, set)) {
				return true;
			}
    }
  }
  return false;
};

let s = "hellonow";
let set = new Set(["hello", "hello", "on", "now"]);
if (canSegmentString(s, set)) {
   console.log("String Can be Segmented");
} 
else {
   console.log("String Can NOT be Segmented");
}