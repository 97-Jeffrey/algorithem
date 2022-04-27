/*
  Given a matrix with r rows and c columns, find the maximum score of a path starting at [0, 0] and ending at [r-1, c-1]. The score of a path is the minimum value in that path. For example, the score of the path 8 → 4 → 5 → 9 is 4.

  Don't include the first or final entry. You can only move either down or right at any point in time.

  Input:
  [
    [5, 1],
    [4, 5]
  ]

  Output: 4
  Explanation:
  Possible paths:
  5 → 1 → 5 => min value is 1
  5 → 4 → 5 => min value is 4
  Return the max value among minimum values => max(4, 1) = 4.
*/


const minPathSum  = grid =>{

  grid[grid.length-1][grid[0].length-1] = Infinity;

  for(let i=2; i<grid[0].length; i++){
    grid[0][i] = Math.min(grid[0][i], grid[0][i-1])
  }

  for(let i=2; i<grid.length; i++){
    grid[i][0] = Math.min(grid[i][0], grid[i-1][0]);
  }

  for(let i=1; i<grid.length; i++){
    for(let j=1; j<grid[i].length; j++){
      grid[i][j] = Math.min(grid[i][j], Math.max(grid[i-1][j], grid[i][j-1]))
    }
  }

  return grid[grid.length-1][grid[0].length-1]




}


// grid[grid.length - 1][grid[0].length - 1] = Infinity;

//   for (let i = 2; i < grid[0].length; i++) {
//       grid[0][i] = Math.min(grid[0][i], grid[0][i - 1])
//   }

//   for (let i = 2; i < grid.length; i++) {
//       grid[i][0] = Math.min(grid[i][0], grid[i - 1][0])
//   }


//   for (let i = 1; i < grid.length; i++) {
//       for (let j = 1; j < grid[0].length; j++) {
//           grid[i][j] = Math.min(grid[i][j], Math.max(grid[i - 1][j], grid[i][j - 1]))
//       }
//   }

//   return grid[grid.length - 1][grid[0].length - 1]

console.log(minPathSum(
  [
    [5, 1],
    [4, 5]
  ]
 ))

console.log(minPathSum(
  [
    [1, 2, 3],
    [4, 5, 1]
  ]
 ))