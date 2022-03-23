function ListNode(val,next = null){
  this.val = val;
  this.next = next
}
let l1 = new ListNode(1);

const reverseLinkedList = (head) =>{

  let previous = null; 
  let next = null;

  while(head !==null){
    next = head.next;
    head.next = previous;
    previous = head;
    head = next;
  }
  return previous;   
}

