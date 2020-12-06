var numSpecial = function(mat) {
  let arr =[];
  for(let i=0; i<mat.length; i++){
      for(let j=0; j<mat[i].length; j++){
          let sum=0;
          if(mat[i][j]===1){
            sum=mat[i].reduce((acc,cur)=> acc+cur);
          
          for(let k=0; k<mat.length; k++){
             sum +=mat[k][j]
          }
          arr.push(sum)
        }  
      } 
  }
  return arr.filter(sum=>sum===2).length;
};

// console.log(numSpecial([[1,0,0],[0,0,1],[1,0,0]]))

