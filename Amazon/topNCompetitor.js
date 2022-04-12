const topNCompetitor = (numCompetitors,topNCompetitors, competitors, numReviews, reviews) =>{

  const storage = {};

  for(let competitor of competitors){
    competitor = competitor.toLowerCase();
    storage[competitor] = 0;
  }

  
  for(let competitor of competitors){
    for(let review of reviews){
      review = review.toLowerCase();
      if(review.includes(competitor)){
        storage[competitor]++;
      }
      
    }
  }


  let result = Object.keys(storage)
                .sort((a,b)=>{
                 if(storage[a] === storage[b]){
                   return a>b?1:-1;
                 }else{
                  return storage[b]-storage[a]
                 }})
                .slice(0, topNCompetitors)

  return result;

}




console.log(topNCompetitor(
  6, 
  2, 
  ["newshop", "shopnow", "afashion", "fashionbeats", "mymarket", "tcellular"], 
  6,  
  [
  "newshop is providing good services in the city; everyone should use newshop mymarket",
  "best services by newshop mymarket",
  " has great services in the city mymarket",
  "I am proud to have shopnow",
  "mymarket has awesome services shopnow",
  "Thanks for the quick delivery"] ))