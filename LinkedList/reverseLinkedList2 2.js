// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.


const reverseLinkedList = (head, left, right) =>{

  let dummy = new ListNode(-1);
  dummy.next = head;
  let previous = dummy; 
  for (let i=0; i<left-1; i++){
    previous = previous.next;
  }
  
  let current = previous.next;
  let NEXT;

  for(let i=0; i<right-left; i++){

    NEXT = current.next;
    current.next = NEXT.next;
    NEXT.next = previous.next;
    previous.next = NEXT;
  }

  return  dummy.next;
}