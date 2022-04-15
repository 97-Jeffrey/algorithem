/*
   Example 1:

Input: codeList = [[apple, apple], [banana, anything, banana]] shoppingCart = [orange, apple, apple, banana, orange, banana]
Output: 1
Explanation:
codeList contains two groups - [apple, apple] and [banana, anything, banana].
The second group contains 'anything' so any fruit can be ordered in place of 'anything' in the shoppingCart. The customer is a winner as the customer has added fruits in the order of fruits in the groups and the order of groups in the codeList is also maintained in the shoppingCart.

*/


function freshPromotion(codeList, shoppingCart) {
   
  let output = 0;
  let arrIndex = 0;
  let arrItemIndex = 0;
  let arrLength = codeList.length;

  shoppingCart.forEach(shoppingCartItem=>{
    let fruitArr = codeList[arrIndex];
    let fruit = fruitArr[arrItemIndex];
     if(shoppingCartItem === fruit  || fruit  ==="anything"){
       arrItemIndex ++;
       if(arrItemIndex === fruitArr.length){
         arrItemIndex = 0;
         arrIndex ++;

         if(arrIndex === arrLength){
           output = 1;
           return;
         }
       }
     }else{
       arrItemIndex = 0;
     }

  })
return output

  
}

console.log(freshPromotion( 
  [["apple", "apple"], ["banana", "anything", 'banana']] , 
  ["orange", "apple", "apple", "banana", "orange", "banana"]))

  console.log(freshPromotion( 
    [["apple", "apple"], ["banana", "anything", "banana"]] , 
    ["banana", "orange", "banana", "apple", "apple"]))