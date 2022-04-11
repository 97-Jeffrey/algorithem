// Given a list of points, find the nearest points that shares either an x or a y coordinate with the queried point.

// The distance is denoted on a Euclidean plane: the difference in x plus the difference in y.


// Example 1:

/*
  Input:

    numOfPoints = 3
    points = ["p1","p2","p3"]
    xCoordinates = [30, 20, 10]
    yCoordinates = [30, 20, 30]
    numOfQueriedPoints = 3
    queriedPoints = ["p3", "p2", "p1"]

  Output:

    ["p1", NONE, "p3"]

*/



// Example 2:

/*
  Input:

    numOfPoints = 5
    points = ["p1", "p2","p3", "p4", "p5"]
    xCoordinates = [10, 20, 30, 40, 50]
    yCoordinates = [10, 20, 30, 40, 50]
    numOfQueriedPoints = 5
    queriedPoints = ["p1", "p2", "p3", "p4", "p5"]

  Output:

    [NONE, NONE, NONE, NONE, NONE]

*/


const solveNearestCity = (points, xCoordinates, yCoordinates, queriedPoints) =>{

   const allPointsMap ={};
   const xCoorMap = {};
   const yCoorMap= {};

  for(let i=0; i<points.length; i++){
    allPointsMap[points[i]] = {x: xCoordinates[i], y:yCoordinates[i]};


    if(!xCoorMap[xCoordinates[i]]){
      xCoorMap[xCoordinates[i]] = []
    }
    xCoorMap[xCoordinates[i]].push(points[i])

    if(!yCoorMap[yCoordinates[i]]){
      yCoorMap[yCoordinates[i]] = []
    }
    yCoorMap[yCoordinates[i]].push(points[i])
  }


  let result = [];

  queryPoints.forEach(query=>{
    const {x, y} = allPointsMap[query];
    let nearestPoint = { value: null, distance: Infinity};


    if(x in xCoorMap){
      xCoorMap[x].forEach(point=>{
        if(point!==query){
          const {x:x1, y:y1} = allPointsMap[point]
          let yDistance = Math.abs(y1-y);
          if(yDistance<nearestPoint.distance){
            nearestPoint.distance = yDistance;
            nearestPoint.value = point;
          }
          
        }
      })
    }

    if(y in yCoorMap){
      yCoorMap[y].forEach(point=>{
        if(point!==query){
          const {x:x1, y:y1} = allPointsMap[point]
          let xDistance = Math.abs(x1-x);
          if(xDistance<nearestPoint.distance){
            nearestPoint.distance = xDistance;
            nearestPoint.value = point;
          }
        }
      })
    }

    result.push(nearestPoint.value)

  })

  return result

}



const points=["p1", "p2", "p3"];
const xCoordinates =  [30, 20, 10]
const yCoordinates =  [30, 20, 30]
const queryPoints = ["p3", "p2", "p1"]


console.log(solveNearestCity(points, xCoordinates, yCoordinates, queryPoints))