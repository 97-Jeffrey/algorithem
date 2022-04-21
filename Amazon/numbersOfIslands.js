/*

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.


  Input: grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]

  Output: 1


 */


  const numIslands = grid =>{
     if(grid ===null || grid.length ===0) return 0;
     let numberOfIsland = 0;

     for(let i=0; i<grid.length; i++){
       for(let j=0; j<grid[i].length; j++){
         numberOfIsland += getNumIsland(grid, i,j)
       }
     }
     return numberOfIsland
  }

  const getNumIsland = (grid, i,j) =>{
    if(i<0||j<0 || i>=grid.length || j>=grid[i].length|| grid[i][j] ==="0"){
      return 0;
    }

    grid[i][j] = "0";

    getNumIsland(grid, i+1, j)
    getNumIsland(grid, i-1, j)
    getNumIsland(grid, i, j+1)
    getNumIsland(grid, i, j-1)

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

