// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.


const removeElements = (head, val) =>{

  let currentNode = new ListNode(-1);
  currentNode.next = head;
  head = currentNode;


  while(currentNode){
    if(currentNode.next.val == val){
      currentNode.next = currentNode.next.next;
    }
    else{
      currentNode = currentNode.next
    }
  }
  return head.next;
}