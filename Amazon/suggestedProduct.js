/*
  Input: 
    products = ["mobile","mouse","moneypot","monitor","mousepad"],
    searchWord = "mouse"

  Output: [
    ["mobile","moneypot","monitor"],
    ["mobile","moneypot","monitor"],
    ["mouse","mousepad"],
    ["mouse","mousepad"],
    ["mouse","mousepad"]
    ]

  Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"]
  After typing m and mo all products match and we show user ["mobile","moneypot","monitor"]
  After typing mou, mous and mouse the system suggests ["mouse","mousepad"]


 */

const suggestedProducts = (products, searchWord) =>{


  let result = [];

  for(let i=1; i<searchWord.length; i++){
    let filtered = products.filter(product=> product.slice(0,i) === searchWord.slice(0,i)).slice(0,3)
    result.push(filtered)

  }

  return result
  
}

const products = ["mobile","mouse","moneypot","monitor","mousepad"]
const searchWord = "mouse";
console.log(suggestedProducts(products , searchWord));


// let result = [];

//   products.sort((a,b) => a.localeCompare(b));


//   for(let i=0; i<searchWord.length; i++){
//     let filtered = products.filter(product => product.slice(0,i+1) === searchWord.slice(0,i+1))
//     filtered = filtered.slice(0,3);
//     result.push(filtered)
//   }

//   return result;