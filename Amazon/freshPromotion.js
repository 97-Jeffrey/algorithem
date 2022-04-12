


function freshPromotion(codeList, shoppingCart) {
  
  let output = 0;
  let listIndex = 0;
  let listItemIndex = 0;
  let listLength = codeList.length;

  shoppingCart.forEach(shoppingCartItem=>{
    const fruitArr = codeList[listIndex];
    const fruit = fruitArr[listItemIndex];

    if(fruit === shoppingCartItem || fruit ==="anything"){
      listItemIndex++;
      if(listItemIndex ===fruitArr.length){
        listItemIndex = 0;
        listIndex++;
        if(listIndex === listLength){
          output = 1;
          return output;
        }
      }

    }
    else{
      listItemIndex = 0;
    }
  })

  return output;
}

console.log(freshPromotion( 
  [["apple", "apple"], ["banana", "anything", 'banana']] , 
  ["orange", "apple", "apple", "banana", "orange", "banana"]))