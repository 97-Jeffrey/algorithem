var invalidTransactions = function(transactions) {
  let invalid =[];

  for(let i=0; i<transactions.length-1; i++){
      let arr = transactions[i].split(',');
      let arr1 = transactions[i+1].split(',');
      if(parseInt(arr[2]) > 1000){
         invalid.push(transactions[i])
         }
      if(Math.abs(parseInt(arr[1]) - parseInt(arr1[1]))>60 && arr[0] === arr1[0] && arr[3] !== arr1[3]){
         invalid.push(transactions[i], transactions[i+1])
         }
  }
  return invalid;
};

console.log(invalidTransactions(["alice,20,800,mtv","alice,50,100,beijing"]))