/*

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.


  Input: grid = [
    ["0","0","1","1","0"],
    ["0","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]

  Output: 1


 */


  const numIslands = grid =>{
     if(grid===null || grid.length ===0) return 0;

     let numsOfIsland = 0;
     for(let i =0;i< grid.length; i++){
       for(let j=0; j< grid[i].length; j++){
          numsOfIsland += numberOfIsland(grid, i,j)
       }
     }
     return numsOfIsland  
  }

  const numberOfIsland = (grid, i, j)=>{
    if(i<0 || j<0 || i>=grid.length|| j>=grid[i].length || grid[i][j] ==="0"){
      return 0;
    }
    grid[i][j] = "0";

    numberOfIsland(grid, i+1, j);
    numberOfIsland(grid, i-1, j);
    numberOfIsland(grid, i, j+1);
    numberOfIsland(grid, i, j-1);

    return 1;
  }


  console.log(numIslands(
    [
      ["1","1","1","1","0"],
      ["1","1","0","1","0"],
      ["1","1","0","0","0"],
      ["0","0","0","0","0"]
    ]
  ))

  console.log(numIslands(
    [
      ["1","1","0","0","0"],
      ["1","1","0","0","0"],
      ["0","0","1","0","0"],
      ["0","0","0","1","1"]
    ]
  ))


//   const numIslands = grid =>{
//     if(grid === null || grid.length ==0) return 0;

//     let numsOfIsland = 0
//     for(let i=0; i<grid.length; i++){
//       for(let j = 0; j<grid[i].length; j++){
//          numsOfIsland += getNumbersOfIsland(grid, i, j)
//       }
//     }
//     return numsOfIsland
//  }

//  const getNumbersOfIsland = (grid, i, j)=>{
//    if(i<0 || j<0 || i >= grid.length|| j >= grid[i].length || grid[i][j] === '0'){
//      return 0;
//    }
//     grid[i][j] = "0"

//     getNumbersOfIsland(grid, i+1, j);
//     getNumbersOfIsland(grid, i-1, j);
//     getNumbersOfIsland(grid, i, j+1);
//     getNumbersOfIsland(grid, i, j-1);

//     return 1

//  }