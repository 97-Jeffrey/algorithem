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

// solution 2:

const removeElement = (head, val) =>{

  let dummy = new ListNode(-Infinity)
  dummy.next = head;
  let prev = dummy;
  let cur = head;

  while(cur){
    if(cur.val ===val){
        prev.next =cur.next;
        cur = cur.next
    }
    else{
       prev = cur;
       cur = cur.next
    }
  }

  return dummy.next

}