// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).


const kClosest = (points, k) =>{

  let result = [];

  for(let [x,y] of points){
    let distance = Math.sqrt(Math.pow(x,2)+ Math.pow(y,2));
    result.push({ points: [x,y], distance })
  }

  result.sort((a,b)=> a.distance - b.distance);
  
  let filtered = [];

  result.forEach(each=>{
    filtered.push(each.points)
  })

  return filtered.slice(0,k)


};


console.log(kClosest([[-5,4],[-6,-5],[4,6]], 2))