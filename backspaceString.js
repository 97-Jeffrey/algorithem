var backspaceCompare = function(S, T) {
    
    //ab##
  while(S.includes('#')){
      for(let i=0; i<S.length; i++){
          if(S[i+1]==="#"){
              S = S.replace(S[i], '').replace(S[i+1], '');
              break;
          }
      }
  }
  
  while(T.includes('#')){
      for(let i=0; i<S.length; i++){
          if(T[i+1]==="#"){
              T = T.replace(T[i], '').replace(T[i+1], '');
              break;
          }
      }
  }
  return S===T
};

console.log(backspaceCompare("ab##", "c#d#"));