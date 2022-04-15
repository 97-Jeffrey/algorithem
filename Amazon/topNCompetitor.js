const topNCompetitor = (numCompetitors,topNCompetitors, competitors, numReviews, reviews) =>{


  let storage = {};
  for(let competitor of competitors){
    storage[competitor] = 0;
  }

  for(let review of reviews){
    for(let competitor of competitors){
      review = review.toLowerCase();
      if(review.includes(competitor)){
        storage[competitor]++
      }
    }
  }

  let result = Object.keys(storage)
                 .sort((a,b)=>{
                   if(storage[a] === storage[b]){
                     return a>b?1:-1
                   }
                   return storage[b] - storage[a]
                 })
                 .slice(0, topNCompetitors)

return result

}




console.log(topNCompetitor(
  6, 
  2, 
  ["newshop", "shopnow", "afashion", "fashionbeats", "mymarket", "tcellular"], 
  6,  
  [
    "newshop is providing good services in the city; everyone should use newshop",
    "best services by newshop",
    "fashionbeats has great services in the city",
    "I am proud to have fashionbeats",
    "mymarket has awesome services",
    "Thanks Newshop for the quick delivery"] ))