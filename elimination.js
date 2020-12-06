var lastRemaining = function(n) {

  let arr =[];
  for(let i=0; i<n; i++){
      arr[i]=i+1;
  }
  
  
  while(arr.length!==1){
        
        let start = 0, end = arr.length-1;
        while(start<=end){
            arr[start] =null;
            start+=2;
        }
      arr =arr.filter(each=>each!==null).reverse();
      
   }

  return arr[0];
  
};

console.log(lastRemaining(10));