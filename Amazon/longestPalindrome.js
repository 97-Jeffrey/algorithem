
const longestPalindrome = s =>{

  let max ="";

  for(let i = 0; i<s.length; i++){
    let str1 =  expand(i, i, s);
    let str2 = expand(i,i+1, s);
    let str = str1.length > str2.length? str1:str2;
    max = max.length > str.length? max: str;
  }
 
  return max;

}



function expand(left, right, s){

  let str = '';
  while(left>=0 && right <s.length && s[left]=== s[right]){
    str = s.substring(left, right+1)
    left -=1;
    right +=1;
  }

  return str;
}

console.log(longestPalindrome("babad"))
console.log(longestPalindrome("cacecar"))
console.log(longestPalindrome("jbacabq"))


// const longestPalindrome = s =>{

//   if (s.length < 2) return s;
//   let max = '';
 
//   for(let i=0; i<s.length; i++){
 
//     let str1 = expand(i,i, s);
//     let str2 = expand(i, i+1, s);
//     let str = str1.length> str2.length? str1:str2;
//     max =  str.length > max.length? str:max;
//   }
 
//   return max
//  }
 
 
 
//  function expand(left, right, s){
 
//    let str = '';
//    while(left >=0 && right <s.length && s[left] === s[right]){
//       str = s.substring(left, right + 1);
//       left -=1;
//       right +=1;
//    }
//    return str
//  }