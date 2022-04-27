/*
 Definition for a binary tree node.
  function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
 }
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

const isPathSum = (root, targetSum) => {

  if(root === null){
    return false
  }else if (root.left ===null && root.right ===null  && targetSum - root.val===0){
    return true
  }else{
    return isPathSum(root.left, targetSum- root.val) || isPathSum(root.right, targetSum - root.val)
  }
}




// if(root === null) return false;

//   if(root.left===null && root.right === null && targetSum - root.val === 0){
//     return true;
//   }

//   else{
//     return isPathSum(root.left, targetSum - root.val) || isPathSum(root.right, targetSum - root.val)
//   }