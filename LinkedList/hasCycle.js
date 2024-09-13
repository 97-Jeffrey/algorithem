// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

const hasCycle = (head) =>{

  if(head ==null) return false;

  let slow = head;
  let fast = head.next();

  while(fast!==slow){
    if(!fast || !fast.next) return false;
    fast = fast.next.next;
    slow = slow.next;
  }

  return true;
}

// or 
const hasCycle2 = (head)=>{

  let slow = head;
  let fast = head;

  while(fast && fast.next){
    fast = fast.next.next;
    slow = slow.next;

    if(fast === slow) return true
  }

  return false;

}
