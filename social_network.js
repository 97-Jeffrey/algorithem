const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};


const biggestFollower = function(data){
  let count = 0;
  let biggestFollower;
  for(const each in data){

    if(data[each].follows.length>count){
      count = data[each].follows.length;
      biggestFollower = data[each].name
    }
  }
  return biggestFollower;
}

const mostPopular = function(data){
  let peopleArray=[];
  for(const each in data){
   for(const people of data[each].follows){
     peopleArray.push(people)
   }
  }

  

}

console.log(mostPopular(data))