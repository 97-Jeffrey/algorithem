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
  let listIndex = 0;
  let listItemIndex = 0;
  let listLength = codeList.length;

  shoppingCart.forEach(shoppingCartItem=>{
    let fruitList = codeList[listIndex];
    let fruitItem = fruitList[listItemIndex];

    if(fruitItem === shoppingCartItem || fruitItem ==="anything"){
      listItemIndex++;
      if(listItemIndex === fruitList.length){
        listItemIndex = 0;
        listIndex++;

        if(listIndex === listLength){
          output = 1;
          return;
        }
      }
    }else{
      listItemIndex = 0;
    }
  })
  return output;
  
}

console.log(freshPromotion( 
  [["apple", "apple"], ["banana", "anything", 'banana']] , 
  ["orange", "apple", "apple", "banana", "orange", "banana"]))

  console.log(freshPromotion( 
    [["apple", "apple"], ["banana", "anything", "banana"]] , 
    ["banana", "orange", "banana", "apple", "apple"]))