/*
  "G": go straight 1 unit.
  "L": turn 90 degrees to the left (i.e., anti-clockwise direction).
  "R": turn 90 degrees to the right (i.e., clockwise direction).


  Input: instructions = "GGLLGG"
  Output: true

  the robot goes into the cycle: (0, 0) --> (0, 1) --> (0, 2) --> (0, 1) --> (0, 0).
 */



const isRobotBounded = (instructions) =>{

  let directions = [
    [0,1], [-1,0], [0,-1], [1,0]
  ]
  let currPosition = [0,0];
  let currDirection = 0;

  for(let i=0; i<instructions.length; i++){
    if(instructions[i] === 'G'){
      currPosition[0] += directions[currDirection][0]
      currPosition[1] += directions[currDirection][1]
    }
    else if(instructions[i] === 'L'){
      currDirection = currDirection+1 >3? currDirection = 0: currDirection+=1;
    }
    else if (instructions[i] === 'R'){
      currDirection = currDirection -1 <0? currDirection = 3: currDirection -=1
    }

  }

  return currPosition[0] + currPosition[1] === 0 || currDirection !==0;




}

console.log(isRobotBounded("GGLLGG"))
console.log(isRobotBounded("GG"))
console.log(isRobotBounded("GL"))
