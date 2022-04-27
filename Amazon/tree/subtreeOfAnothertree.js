/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * 
 */


const isSubTree = (root, subRoot) =>{

  if(root == null) return false;

  else if(isSameTree(root, subRoot)){
    return true
  }
  else{
    return isSubTree(root.left, subRoot) || isSubTree(root.right, subRoot)
  }
}

const isSameTree =(root, subRoot)=>{
  
  if(root ===null || subRoot ===null){
    return root ===null && subRoot ===null
  }
  else if(root.val === subRoot.val){
    return isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right)
  }else{
    return false;
  }
}



// const isSubTree = (root, subRoot) =>{

//   if(root ===null)  return false;

//   else if (isSameTree(root, subRoot)){
//     return true;
//   }
//   else{
//     return isSubTree(root.left, subRoot) || isSubTree(root.right, subRoot)
//   }

// }

// const isSameTree = (root,subRoot) =>{

//   if(root === null || subRoot === null){
//     return root === null && subRoot === null;
//   }
//   else if (root.val === subRoot.val){
//     return isSameTree(root.left,subRoot.left) && isSameTree(root.right,subRoot.right)
//   }
//   else {
//     return false
//   }


// }