/*
  Given a 2D grid, each cell is either a zombie 1 or a human 0. Zombies can turn adjacent (up/down/left/right) human beings into zombies every hour. Find out how many hours does it take to infect all humans?

  Input:
    [[0, 1, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0]]

  Output: 2

  Explanation:

  At the end of the 1st hour, the status of the grid:

    [[1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 1, 0, 1, 1],
    [1, 1, 1, 0, 1]]

  At the end of the 2nd hour, the status of the grid:

    [[1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1]]

*/


const minHours = grid =>{

  let hours = 0;
  let numsOfPeople = 0;
  let zombies = [];
  let directions= [[1,0], [0,1],[-1,0], [0,-1]];

  for(let i=0; i<grid.length; i++){
    for(let j=0; j<grid[i].length; j++){
      if(grid[i][j] ===0){
        numsOfPeople ++
      }else{
        zombies.push([i,j])
      }
    }  
  }

  while(numsOfPeople && zombies.length){
    
    let peopleToZombie = [];

    while(zombies.length){
      let [x,y] = zombies.shift();
      for(let i=0; i<4; i++){
        let [x1, y1] = [x+directions[i][0], y+ directions[i][1]];
        if(grid[x1] && grid[x1][y1] === 0){
           grid[x1][y1] = 1;
           numsOfPeople -=1;
           peopleToZombie.push([x1,y1])
        }
      }
    }
    hours ++;
    zombies = peopleToZombie;

  }

  return numsOfPeople? -1:hours


  
}


// let numsOfHumans = 0;
//   let zombies = [];
//   let directions = [[-1,0], [1,0], [0,1], [0,-1]];
//   let hours = 0;


//   for(let i=0; i<grid.length; i++){
//     for(let j=0; j<grid[i].length; j++){
//       if(grid[i][j] === 0 ){
//         numsOfHumans ++
//       }else if (grid[i][j] === 1){
//         zombies.push([i,j])
//       }
//     }
//   }

//   while(numsOfHumans && zombies.length){

//     let humanToZombie = [];

//     while (zombies.length){
//       let [x,y] = zombies.shift();
//       for(let i=0; i<4; i++){
//         let [x1, y1] =  [x+directions[i][0], y+ directions[i][1]];
//         if(grid[x1] && grid[x1][y1] === 0){
//           // if(grid[x1][y1] === 0){
//             grid[x1][y1] = 1;
//             numsOfHumans -=1;
//             humanToZombie.push([x1,y1])
//           // }
//         }
//       }
//     }
//     hours++;
//     zombies = humanToZombie;

//   }


//   return numsOfHumans? -1: hours;




console.log(minHours(
  [[0, 1, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 1],
  [0, 1, 0, 0, 0]]))